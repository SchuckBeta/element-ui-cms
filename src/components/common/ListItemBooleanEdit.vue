<template>
    <div class="list-item-boolean-edit">
        <div class="row">{{getTextByValue(options[optionsKey],item[itemKey],"value")}}</div>
        <div class="row">
            <el-popover-dialog
                    :popover-content="dialog"
                    :btn-style="btnStyle"
                    popper-class="list-item-popper"
                    :btn-txt="btnTxt"
                    @confirm="submit(item)" v-if="dialog"/>
            <el-button :style="btnStyle" type="text"
                       @click="submit(item)" v-else>
                {{btnTxt}}
            </el-button>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";
import { getTextByValue } from "@/utils";
import ElPopoverDialog from "@panhezeng/el-popover-dialog";

export default {
  name: "ListItemBooleanEdit",
  components: { ElPopoverDialog },
  props: {
    // 编辑项目源数据
    item: {
      type: Object,
      required: true
    },
    // 编辑项目源数据属性key
    itemKey: {
      type: String,
      default: "status"
    },
    // 编辑方法，包括API提交和更新数据，必须为此形式 async fnName (item, data)
    edit: Function,
    // 编辑接口提交数据
    data: {
      type: Object,
      default() {
        return {};
      }
    },
    // 编辑项目对应的store.options的key
    optionsKey: {
      type: String,
      default: "release_status"
    },
    // 编辑按钮对应的store.option的key
    optionsKeyBtn: {
      type: String,
      default: "on_off"
    },
    dialog: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      getTextByValue
    };
  },
  computed: {
    ...mapState(["options"]),
    btnTxt() {
      return getTextByValue(
        this.options[this.optionsKeyBtn],
        Number(!this.item[this.itemKey]),
        "value"
      );
    },
    btnStyle() {
      return `color:${this.item[this.itemKey] ? "#e6a23c" : "#67c23a"};`;
    }
  },
  methods: {
    submit() {
      if (Object.prototype.toString.call(this.edit) === "[object Function]") {
        this.edit(
          this.item,
          Object.assign(
            { [this.itemKey]: Number(!this.item[this.itemKey]) },
            this.data
          )
        );
      }
      this.$emit("submit", this.item);
    }
  }
};
</script>
<style lang="less">
.list-item-popper {
  .popover-btn {
    text-align: center !important;
  }
}
</style>
