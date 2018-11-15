<template>
  <!-- 如需定制样式, 在root元素写上 class="页面目录名-模块名", 示例 <root class="directory-file"> -->
  <page-content class="column-index">
    <!-- 如需查询表单, page-list标签写上 :query-form="queryForm" 属性 -->
    <!-- 如需带展开功能的查询表单, page-list标签写上 collapse-form 属性 -->
    <!-- 如需批量操作按钮, page-list标签写上 header-btn-batch 属性 -->
    <page-list ref="pageList"
               :api-list="apiList" :api-list-params-key="apiListParamsKey"
               :api-destroy="apiDestroy" :api-destroy-bulk="apiDestroyBulk"
               :route-config="routeConfig"
               :header-btn="false"
               @fetch-data-finish="listUpdate"
               :pagination="false"
    >
      <div slot="list" slot-scope="{list,getTextByValue}">
        <div v-for="item in list" :key="item.id" class="column-list">
          <div class="column-header" :ref="`column${item.id}`">
            <popover-dialog-edit title="编辑栏目标题" :item="item" item-key="title" :edit="edit"/>
            <div>
              <el-button :style="`color:${item.status?'#e6a23c':'#67c23a'};`" type="text"
                         @click="edit(item, {status:item.status? 0 : 1})">
                {{getTextByValue(filters.status,Number(!item.status),'value')+'栏目'}}
              </el-button>
              <el-button type="text" @click="showList(item.id)" v-show="item.id!==show">{{$t('action.expand')}}<i
                class="el-icon-arrow-down"></i></el-button>
              <el-button type="text" @click="show=0" v-show="item.id===show">{{$t('action.collapse')}}<i
                class="el-icon-arrow-up"></i></el-button>
            </div>
          </div>
          <resource-iframe :ref="`iframe${item.id}`" :item="item" :resource-path="resourcePath"
                           :show="item.id===show" v-show="item.id===show"/>
        </div>
      </div>
    </page-list>
  </page-content>
</template>
<script>
import MixinList from "@/mixins/list";

import PopoverDialogEdit from "@/components/common/PopoverDialogEdit";
import { mutations as mutationsTypes } from "@/store/config/vuex/types/index";
import { mapMutations } from "vuex";

import ResourceIframe from "./components/ResourceIframe";

export default {
  // 如需组件名, 组件名由目录名和文件名构成, 帕斯卡命名法, 示例 name: 'DirectoryFile'
  mixins: [MixinList],
  components: { ResourceIframe, PopoverDialogEdit },
  data() {
    return {
      show: 0
    };
  },
  // 可以在computed对象内覆写MixinList的computed相关属性, 比如 apiList, apiListParamsKey
  computed: {
    client() {
      return this.$route.path.replace(/^\/(\w+)_column.*/, "$1");
    },
    api() {
      return require(`@/api/column/${this.client}`).default;
    },
    filters() {
      return {
        resource_type: this.options.resource_type,
        status: this.options.visible
      };
    },
    resourcePath() {
      return `${this.$route.path}/resource`;
    }
  },
  created() {
    this.show = 0;
    window.columnFrameHeight = id => {
      if (String(id) === String(this.show)) {
        try {
          const iframe = this.$refs[`iframe${id}`][0].$refs.iframe;
          setTimeout(() => {
            const document = iframe.contentWindow.document;
            let height = document.documentElement
              ? document.documentElement.scrollHeight
              : 330;
            let domHeight = height;
            let dom = document.querySelector(".page-list");
            let rect = { top: 0, height: 0 };
            if (dom) {
              rect = dom.getBoundingClientRect();
              domHeight = rect.top + rect.height;
              //                console.log(rect, 'rect')
              //                console.log(dom.clientHeight, dom.scrollHeight, dom.offsetHeight, 'Height')
              //                console.log(dom.clientTop, dom.scrollTop, dom.offsetTop, 'top')
            } else {
              dom = document.querySelector(".add-edit-main");
              if (dom) {
                rect = dom.getBoundingClientRect();
                domHeight = rect.top + rect.height;
              }
            }
            iframe.height = Math.min(height, domHeight);
          }, 200);
        } catch (e) {
          console.error(e);
        }
      }
    };
  },
  methods: {
    ...mapMutations([mutationsTypes.LOADING_VISIBLE]),
    //      resourcePathIframe (item) {
    //        return `${this.resourcePath}?pid=${item.id}&resource_type=${item.child_resource_type}&page_header=0&page_side=0&page_footer=0&page_content_header=0&limit=8`
    //      },
    showList(id) {
      this.show = Number(id);
      this.$nextTick(function() {
        window.columnFrameHeight(id);
        const columnHeader = this.$refs[`column${id}`];
        if (columnHeader) columnHeader[0].scrollIntoView();
      });
    },
    listUpdate(list) {
      if (list.length) {
        this.showList(list[0].id);
      }
    }
  }
};
</script>
<style lang="less">
/* 所有该模块样式都嵌套在 root class 内, 示例 .directory-file { .content-main {} } */
.column-index {
  .column-list {
    box-shadow: 0 1px 1px 2px rgba(0, 21, 41, 0.08);
    padding: 10px;
    &:not(:first-child) {
      margin-top: 20px;
    }
    .column-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ebeef5;
    }
  }
}
</style>
