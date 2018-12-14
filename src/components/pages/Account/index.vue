<template>
  <page-content class="space">
    <el-row type="flex">
      <el-col class="title">
        {{$t('account.role')}}
      </el-col>
      <el-col>
        {{currentRole.name}}
      </el-col>
    </el-row>
    <el-row type="flex">
      <el-col class="title">
        {{$t('account.userId')}}
      </el-col>
      <el-col>
        {{user.id}}
      </el-col>
    </el-row>
    <el-row type="flex">
      <el-col class="title">
        {{$t('account.userName')}}
      </el-col>
      <el-col>
        {{user.name}}
      </el-col>
    </el-row>
    <el-row type="flex">
      <el-col class="title">
        {{$t('account.email')}}
      </el-col>
      <el-col>
        {{user.email}}
      </el-col>
    </el-row>
    <el-row type="flex">
      <el-col class="title">
        {{$t('account.phone')}}
      </el-col>
      <el-col>
        {{user.phone}}
      </el-col>
    </el-row>
    <el-row type="flex">
      <el-col class="title" :class="{'form-password':formPasswordShow}">
        {{$t('account.password')}}
      </el-col>
      <el-col>
        <el-button size="small" type="primary" icon="el-icon-edit"
                   @click="formVisible('form_password')" v-if="!formPasswordShow"></el-button>
        <el-form class="form-password" label-width="120px"
                 :model="formPasswordData" :rules="formPasswordDataRules" ref="formPassword"
                 v-if="formPasswordShow">
          <el-form-item :label="$t('account.passwordOld')" prop="password_old">
            <el-input :type="passwordType" v-model="formPasswordData.password_old" autolete="off"></el-input>
          </el-form-item>
          <el-form-item :label="$t('account.passwordNew')" prop="password_new">
            <el-input :type="passwordType" v-model="formPasswordData.password_new" autolete="off"></el-input>
          </el-form-item>
          <el-form-item :label="$t('account.passwordNewAgain')" prop="password_new_again">
            <el-input :type="passwordType" v-model="formPasswordData.password_new_again" autolete="off"></el-input>
          </el-form-item>
          <el-form-item class="form-item-btn">
            <svg-icon class="password-type-change" @click.native="passwordTypeChange" :icon="passwordIcon"/>
            <el-button size="small" @click="formVisible(queryKey['formPassword'])">{{$t('action.cancel')}}</el-button>
            <el-button size="small" type="primary" :loading="formSubmitLoading"
                       @click="submit('formPassword')">{{$t('action.submit')}}
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </page-content>
</template>
<script>
import MixinFormPassword from "@/mixins/form-password";
import PageContent from "@/components/common/PageContent";
import { actions as actionsTypes } from "@/config/vuex/types/account";
import { namespaces } from "@/config/vuex/index";
import { createNamespacedHelpers } from "vuex";

const { mapState, mapActions } = createNamespacedHelpers(namespaces.account);

export default {
  mixins: [MixinFormPassword],
  components: { PageContent },
  props: {},
  data() {
    return {
      queryKey: {
        formPassword: "form_password"
      },
      formPasswordData: {
        password_old: "",
        password_new: "",
        password_new_again: ""
      },
      formPasswordDataRules: {
        password_old: [
          {
            required: true,
            message: this.$t("account.validatePasswordOld"),
            trigger: "blur"
          }
        ],
        password_new: [
          {
            validator: (rule, value, callback) => {
              if (value === "") {
                callback(new Error(this.$t("account.validatePasswordNew")));
              } else {
                if (this.formPasswordData.password_new_again !== "") {
                  this.$refs.formPassword.validateField("password_new_again");
                }
                callback();
              }
            },
            trigger: "blur",
            required: true
          }
        ],
        password_new_again: [
          {
            validator: (rule, value, callback) => {
              if (this.formPasswordData.password_new_again === "") {
                callback(
                  new Error(this.$t("account.validatePasswordNewAgain"))
                );
              } else if (
                this.formPasswordData.password_new_again !==
                this.formPasswordData.password_new
              ) {
                callback(
                  new Error(this.$t("account.validatePasswordNewAgainError"))
                );
              } else {
                callback();
              }
            },
            trigger: "blur",
            required: true
          }
        ]
      }
    };
  },
  computed: {
    ...mapState(["user", "currentRole"]),
    formPasswordShow() {
      // 是否显示修改密码表单
      return this.$route.query.form_password;
    }
  },
  watch: {},
  created() {},
  mounted() {
    this.$nextTick(function() {});
  },
  beforeDestroy() {},
  methods: {
    ...mapActions([actionsTypes.UPDATE_ACCOUNT]),
    formVisible(key) {
      // 表单显示隐藏切换
      const query = Object.assign({}, this.$route.query);
      if (query[key]) {
        delete query[key];
      } else {
        query[key] = "show";
      }
      this.$router.replace({ query: query });
    },
    submit(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          this.formSubmitLoading = true;
          try {
            await this[actionsTypes.UPDATE_ACCOUNT](this[formName]);
            this.formSubmitLoading = false;
            this.$message(this.$t(`account.${formName}SubmitOk`));
            this.formVisible(this.queryKey[formName]);
          } catch (e) {
            console.error(e);
          }
          this.formSubmitLoading = false;
        } else {
          return false;
        }
      });
    }
  }
};
</script>
<style lang="less">
.space {
  .el-row {
    font-size: 14px;
    min-height: 50px;
    align-items: center;
  }
  .title.el-col {
    color: #606266;
    width: 65px;
    text-align: right;
    padding-right: 10px;
  }
  .title.form-password {
    margin-top: -214px;
  }
  .password-type-change {
    font-size: 26px;
    cursor: pointer;
    margin-right: 10px;
  }
  .form-password {
    width: 500px;
  }
}
</style>
