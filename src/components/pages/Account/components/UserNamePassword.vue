<template>
  <el-form class="user-name-password" autoComplete="on" label-position="left"
           :model="formData" :rules="formRules" ref="form"
  >
    <el-form-item prop="username">
      <el-row type="flex" justify="space-around">
        <el-col :span="2">
          <svg-icon class="user" icon="people"/>
        </el-col>
        <el-col>
          <el-input name="userName" type="text" autoComplete="on"
                    :placeholder="$t('account.userName')" v-model="formData.username"
          />
        </el-col>
      </el-row>

    </el-form-item>

    <el-form-item prop="password">

      <el-row type="flex" justify="space-around">
        <el-col :span="2">
          <svg-icon class="password" icon="password"/>
        </el-col>
        <el-col>
          <el-input name="password" autoComplete="on"
                    :placeholder="$t('account.password')" :type="passwordType" v-model="formData.password"
                    @keyup.enter.native="submit($refs['form'])"
          />
        </el-col>
        <el-col :span="2">
          <svg-icon class="password-type-change" :icon="passwordIcon" @click.native="passwordTypeChange"/>
        </el-col>
      </el-row>
    </el-form-item>

    <el-form-item class="advanced">
      <switch-language/>
      <el-checkbox class="remember" v-model="remember" @change="rememberChange">{{$t('account.remember')}}</el-checkbox>
    </el-form-item>

    <el-form-item class="form-item-btn">
      <el-button @click="reset($refs['form'])">{{$t('action.reset')}}</el-button>
      <el-button type="primary" :loading="formSubmitLoading" @click="submit($refs['form'])">
        {{$t('account.signIn')}}
      </el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import SwitchLanguage from "@/components/common/SwitchLanguage";
import MixinFormPassword from "@/mixins/form-password";
import storageKeys from "@/store/config/storage-keys";
import { actions as actionsTypes } from "@/store/config/vuex/types/account";
import { namespaces } from "@/store/config/vuex/index";
import { createNamespacedHelpers } from "vuex";

const { mapActions } = createNamespacedHelpers(namespaces.account);

export default {
  name: "UserNamePassword",
  mixins: [MixinFormPassword],
  components: { SwitchLanguage },
  data() {
    const validateUserName = (rule, value, callback) => {
      if (String(value).trim()) {
        callback();
      } else {
        callback(new Error(this.$t("account.validateUserName")));
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (String(value).trim()) {
        callback();
      } else {
        callback(new Error(this.$t("account.validatePassword")));
      }
    };
    return {
      remember: Boolean(localStorage.getItem(storageKeys.remember)),
      formData: {
        username: "",
        password: ""
      },
      formRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUserName }
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePassword }
        ]
      }
    };
  },
  created() {},
  methods: {
    ...mapActions([actionsTypes.SIGN_IN]),
    submit(form) {
      form.validate(async valid => {
        if (valid) {
          this.formSubmitLoading = true;
          try {
            await this[actionsTypes.SIGN_IN](this.formData);
            this.formSubmitLoading = false;
          } catch (e) {
            console.error(e);
          }
        } else {
          return false;
        }
      });
    },
    rememberChange(val) {
      if (val) {
        localStorage.setItem(storageKeys.remember, "true");
      } else {
        localStorage.removeItem(storageKeys.remember);
      }
    }
  }
};
</script>
<style lang="less">
.user-name-password {
  width: 520px;
  .el-row {
    border-radius: 4px;
    border: 1px solid #dcdfe6;
  }
  .el-input__inner {
    border: none;
    padding: 0 2px;
  }
  .el-col-2 {
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .svg {
    font-size: 20px;
  }
  .user {
  }
  .password {
  }
  .password-type-change {
    cursor: pointer;
  }
  .form-item-btn {
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .advanced {
    display: flex;
    justify-content: flex-end;
    .remember {
      vertical-align: middle;
    }
  }
}
</style>
