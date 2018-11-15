<template>
  <el-popover-dialog
    ref="pop"
    class="popover-dialog-edit"
    v-bind="$attrs"
    v-on="$listeners"
    :confirm-hide="false"
    :popover-content-show="false"
    :btn-show="false"
    @show="item[itemKeyTemp]=item[itemKey]"
    @hide="item[itemKeyTemp]&&(item[itemKey]=item[itemKeyTemp])"
    @cancel="item[itemKey]=item[itemKeyTemp];delete item[itemKeyTemp]"
    @confirm="submit($refs['form'])"
  >
    <el-form
      class="popover-dialog-edit-popover-content"
      slot="popover-content"
      :model="item" :rules="formRules" ref="form"
    >

      <el-form-item label="" :prop="itemKey" :rules="formRules.required">
        <el-input-number v-model="item[itemKey]" v-if="inputNumber"/>
        <el-input :type="inputType"
                  :autosize="autosize===undefined?true:autosize" :maxlength="maxlength"
                  v-model="item[itemKey]" v-bind="$attrs" v-else/>
      </el-form-item>
    </el-form>

    <el-button slot="reference"
               :icon="$attrs['btn-icon']==undefined?'el-icon-edit':$attrs['btn-icon']"
               :type="$attrs['btn-type']==undefined?'text':$attrs['btn-type']"
               :size="$attrs['btn-size']||''"
               :style="$attrs['btn-style']||''">
      {{$attrs['btn-txt']||item[itemKey]}}
    </el-button>
  </el-popover-dialog>
</template>
<script>
import MixinForm from "@/mixins/form";

export default {
  name: "PopoverDialogEdit",
  mixins: [MixinForm],
  inheritAttrs: false,
  props: {
    // 编辑项目源数据
    item: {
      type: Object,
      required: true
    },
    // 编辑项目源数据属性key
    itemKey: {
      type: String,
      required: true
    },
    // 编辑方法，包括API提交和更新数据，必须为此形式 async fnName (item, data)
    edit: {
      type: Function,
      required: true
    },
    // 编辑接口提交数据
    data: {
      type: Object,
      default() {
        return {};
      }
    },
    inputType: {
      type: String,
      default: "textarea"
    },
    maxlength: {
      type: Number,
      default: 150
    },
    autosize: {},
    inputNumber: Boolean,
    rules: Array
  },
  computed: {
    itemKeyTemp() {
      return `${this.itemKey}Temp`;
    }
  },
  methods: {
    submit(form) {
      form.validate(async valid => {
        if (valid) {
          try {
            await this.edit(
              this.item,
              Object.assign(
                { [this.itemKey]: this.item[this.itemKey] },
                this.data
              )
            );
            delete this.item[this.itemKeyTemp];
            this.$refs.pop.hide();
            // 提交成功事件通知
            this.$emit("success");
          } catch (e) {
            console.error(e);
          }
        }
      });
    }
  }
};
</script>
<style lang="less">
.popover-dialog-edit-popover-content {
  margin-bottom: 10px;
}
</style>
