<template>
  <page-content class="dashboard-index">
    <user-info :user="user" :current-role="currentRole"/>
    <div class="todos row">
      <div class="title">
        <svg-icon icon="notice-fill"/>
        {{$t('page.content.todos')}}
      </div>
      <div class="content">
        <a href="#" class="item" v-for="(item,index) in todos" :key="index" @click.prevent="$router.push(item.path)">{{item.title}}
        </a>
      </div>
    </div>
    <div class="quick-start row">
      <div class="title">
        <svg-icon icon="light-fill"/>
        {{$t('page.content.quickStart')}}
      </div>
      <div class="content">
        <div class="item" v-for="item in quickStart" :key="item.path">
          <div class="icon">
            <svg-icon :icon="item.icon" v-if="item.icon"/>
          </div>
          <div class="txt">
            <div class="title">{{item.title}}</div>
            <div class="child" v-for="child in item.children" :key="child.path">
              <a href="#" @click.prevent="$router.push(child.path)">{{child.title}}</a>
              <a href="#" @click.prevent="$router.push({path:child.add.path,query:{back_push:1}})" v-if="child.add">{{child.add.title}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </page-content>
</template>
<script>
import api from "@/api/common";
import UserInfo from "@/components/common/UserInfo";
import PageContent from "@/components/common/PageContent";
import { pages, pagesByPath } from "@/store/config/pages";
import { getters as gettersTypesPages } from "@/store/config/vuex/types/pages";
import { namespaces } from "@/store/config/vuex/index";
import { createNamespacedHelpers } from "vuex";

const moduleAccount = createNamespacedHelpers(namespaces.account);
const modulePages = createNamespacedHelpers(namespaces.pages);

export default {
  mixins: [],
  components: { PageContent, UserInfo },
  props: {},
  data() {
    return {
      todos: []
    };
  },
  computed: {
    ...moduleAccount.mapState(["user", "currentRole"]),
    ...modulePages.mapGetters({ menus: gettersTypesPages.MENUS }),
    quickStart() {
      if (
        Object.prototype.toString.call(this.menus) === "[object Array]" &&
        this.menus.length
      ) {
        return JSON.parse(JSON.stringify(this.menus)).reduce(
          (accumulator, current) => {
            // 不是当前页，并且有子菜单
            if (
              pages.Dashboard.title !== current.title &&
              Object.prototype.toString.call(current.children) ===
                "[object Array]"
            ) {
              current.children = current.children.reduce(
                (accumulatorChildren, currentChild) => {
                  if (currentChild.path) {
                    currentChild.add = pagesByPath[`${currentChild.path}/add`];
                    accumulatorChildren.push(currentChild);
                  }
                  return accumulatorChildren;
                },
                []
              );
              if (current.children.length) accumulator.push(current);
            }
            return accumulator;
          },
          []
        );
      } else {
        return [];
      }
    }
  },
  watch: {},
  created() {
    api.fn.todos().then(response => {
      this.todos = response.data;
    });
  },
  mounted() {
    this.$nextTick(function() {});
  },
  beforeDestroy() {},
  methods: {}
};
</script>
<style lang="less">
.dashboard-index {
  > .content-main {
    > .user-info {
      color: #4a4a4a;
      height: 40px;
      > .avatar {
        width: 40px;
        height: 40px;
      }
      > .info {
        margin-left: 10px;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        > div {
          margin-right: 5px;
          font-size: 14px;
          color: #4a4a4a;
        }
        > div + div:before {
          content: "|";
          margin-right: 5px;
        }
      }
    }

    > .row {
      margin: 20px 50px;
      > .title {
        font-weight: bold;
        font-size: 18px;
      }
      > .content {
        display: grid;
        grid-column-gap: 5%;
        grid-template-columns: repeat(3, 1fr);
        > .item {
          font-size: 16px;
        }
      }
    }

    > .todos {
      > .title {
        border-bottom: 1px solid #dcdfe6;
        box-shadow: 0 2px 0 0 rgba(0, 21, 41, 0.08);
        margin-bottom: 15px;
        padding-bottom: 5px;
      }
    }

    > .quick-start {
      > .title {
        padding-bottom: 10px;
      }
      > .content {
        grid-row-gap: 20px;
        > .item {
          border: 1px solid #dcdfe6;
          border-radius: 10px;
          box-shadow: 0 2px 2px 2px rgba(0, 21, 41, 0.08);
          display: flex;
          > .icon {
            flex-basis: 80px;
            .svg {
              margin: 5px 20px 20px 20px;
              font-size: 40px;
            }
          }
          > .txt {
            margin: 20px 20px 20px 0;

            > .title {
              font-weight: bold;
              margin-bottom: 10px;
            }

            > .child {
              a + a:before {
                content: "/ ";
              }
            }
          }
        }
      }
    }
  }
}
</style>
