<template>
  <div class="page-header">
    <span class="title">{{$t('page.header.title')}}</span>
    <switch-language class-name="page-header"/>
    <el-dropdown class="account" :show-timeout="100">
      <user-info :user="{avatar:user.avatar,name:user.name}" :current-role="currentRole"><i
        class="el-icon-arrow-down"></i>
      </user-info>
      <el-dropdown-menu slot="dropdown" class="dropdown-action-page-header-user">
        <el-dropdown-item @click.native="changePassword">
          {{$t('account.changePassword')}}
        </el-dropdown-item>
        <template v-if="user.groups.length>1">
          <template v-for="role in user.groups">
            <el-dropdown-item @click.native="switchRole(role)" :key="role.id" v-if="role.id!==currentRole.id">
              {{ $t('page.header.switchRole', { role: role.name }) }}
            </el-dropdown-item>
          </template>
        </template>
        <template v-for="layout in menuLayouts">
          <el-dropdown-item @click.native="switchMenuLayout(layout)" :key="layout.type"
                            v-if="layout.type!==menuLayoutType">
            {{ $t('page.header.menuLayout', { layout: $t(`page.header.${layout.type}`) }) }}
          </el-dropdown-item>
        </template>
        <el-dropdown-item>
          <el-popover-dialog
            placement="left" btn-style=""
            :popover-content="$t('account.signOutAsk')"
            :btn-txt="$t('account.signOut')"
            @confirm="signOutConfirm"/>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
import SwitchLanguage from "@/components/common/SwitchLanguage";
import { pages } from "@/store/config/pages";
import UserInfo from "@/components/common/UserInfo";
import ElPopoverDialog from "@panhezeng/el-popover-dialog";
import menuLayouts from "@/store/config/menu-layouts";
import { mutations as mutationsTypes } from "@/store/config/vuex/types";
import {
  actions as actionsTypesAccount,
  mutations as mutationsTypesAccount
} from "@/store/config/vuex/types/account";
import { namespaces } from "@/store/config/vuex/index";
import { createNamespacedHelpers, mapState, mapMutations } from "vuex";

const moduleAccount = createNamespacedHelpers(namespaces.account);

export default {
  name: "PageHeader",
  mixins: [],
  components: { ElPopoverDialog, UserInfo, SwitchLanguage },
  props: {},
  data() {
    return {
      menuLayouts
    };
  },
  computed: {
    ...mapState(["menuLayoutType"]),
    ...moduleAccount.mapState(["user", "currentRole"])
  },
  watch: {},
  created() {},
  mounted() {
    this.$nextTick(function() {});
  },
  beforeDestroy() {},
  methods: {
    ...mapMutations([mutationsTypes.MENU_LAYOUT_TYPE]),
    ...moduleAccount.mapMutations([
      mutationsTypesAccount.SET_ACCOUNT,
      mutationsTypesAccount.SWITCH_ROLE
    ]),
    ...moduleAccount.mapActions([actionsTypesAccount.GET_ROLE_MENU]),
    switchRole(role) {
      if (Object.prototype.toString.call(role.menu) === "[object Array]") {
        this[mutationsTypesAccount.SWITCH_ROLE]({ role });
      } else {
        this[actionsTypesAccount.GET_ROLE_MENU](role);
      }
    },
    switchMenuLayout(layout) {
      this[mutationsTypes.MENU_LAYOUT_TYPE](layout.type);
      // el-menu组件有点问题，动态改变mode属性vertical到horizontal，子菜单的悬浮功能失效，在官方解决前暂时只能这样
      window.location.reload();
    },
    signOutConfirm() {
      this[mutationsTypesAccount.SET_ACCOUNT]();
    },
    signOut() {
      this.$confirm(this.$t("account.signOutAsk"), this.$t("tip"), {
        type: "warning"
      })
        .then(() => {
          this[mutationsTypesAccount.SET_ACCOUNT]();
        })
        .catch(() => {
          this.$message(this.$t("account.signOutCancel"));
        });
    },
    changePassword() {
      this.$router.push({
        path: pages.Space.path,
        query: { form_password: "show" }
      });
    }
  }
};
</script>
<style lang="less">
.dropdown-action-page-header-user {
  top: 34px !important;
  .reference-btn {
    color: #606266;
    display: block;
    width: 100%;
    text-align: left;
    &:hover {
      color: #409eff;
    }
  }
}

.page-header {
  height: 39px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  background: 10px center/31px 30px no-repeat #293040
    url("../../assets/img/logo.png");
  > .title {
    flex: 1;
    color: #ffffff;
    padding: 0 10px 0 50px;
  }
  > .account {
    > .user-info {
      color: #ffffff;
      cursor: pointer;
      padding: 0 10px;
      > .avatar {
        width: 30px;
        height: 30px;
      }
      > .info {
        &:hover {
          color: #409eff;
        }
      }
      &:hover {
        color: #409eff;
      }
    }
    > .el-icon-arrow-down {
      margin-left: 8px;
    }
  }
}
</style>
