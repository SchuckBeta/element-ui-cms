import { pages, pagesByPath } from "@/store/config/pages";
import PageContent from "@/components/common/PageContent";
import PageList from "@/components/common/PageList";
import PageListActionBtn from "@/components/common/PageListActionBtn";
import apiCommon from "@/api/common";
import MixinOption from "@/mixins/options";

export default {
  mixins: [MixinOption],
  components: { PageContent, PageList, PageListActionBtn },
  inheritAttrs: false,
  data() {
    return {
      pages: pages,
      pagesByPath: pagesByPath,
      // 列表容器组件实例, list是列表数据
      refList: { list: [] },
      // 查询表单数据
      queryForm: { search: "", date_range_start: "", date_range_end: "" }
    };
  },
  computed: {
    // api相关的默认数据
    apiList() {
      return this.api.fn.list;
    },
    apiListParamsKey() {
      return this.filters ? Object.keys(this.filters) : [];
    },
    apiDestroy() {
      return this.api.fn.destroy;
    },
    apiDestroyBulk() {
      return this.api.fn.destroyBulk;
    },
    apiUpdate() {
      return this.api.fn.update;
    },
    apiUpdateBulk() {
      return this.api.fn.updateBulk;
    },
    // 路由配置, 列表页前往添加或者编辑页面的路由
    routeConfig() {
      return {
        add: pagesByPath[`${this.$route.path}/add`],
        edit: pagesByPath[`${this.$route.path}/edit`]
      };
    }
  },
  mounted() {
    this.$nextTick(function() {
      // 获得列表容器组件实例, 可是使用此实例调用容器vue组件实例的data,methods等
      if (this.$refs.pageList) {
        this.refList = this.$refs.pageList;
      }
    });
  },
  methods: {
    /**
     * 编辑列表项
     * @param item 列表项数据
     * @param data 更新数据
     * @return {Promise<void>}
     */
    async edit(item, data) {
      try {
        await this.apiUpdate(item.id, data);
        Object.assign(item, data);
      } catch (e) {
        console.error(e);
      }
    },
    /**
     * 编辑列表项的部分数据
     * @param ids 列表项的id数组
     * @param data 更新数据
     * @param list 列表数组
     * @return {Promise<void>}
     */
    async batchEdit(ids, data, list) {
      if (
        Object.prototype.toString.call(ids) !== "[object Array]" ||
        ids.length === 0
      ) {
        throw new Error("ids必须是由id构成的数组");
      }
      try {
        await this.apiUpdateBulk({ ids: ids.join() }, data);
        if (ids.length === list.length) {
          list.forEach(item => Object.assign(item, data));
        } else {
          ids.forEach(id => {
            const item = list.find(item => String(item.id) === String(id));
            if (item) {
              Object.assign(item, data);
            }
          });
        }
        this.$message({
          message: this.$t("message.success.batch", {
            action: this.$t("action.edit")
          }),
          type: "success"
        });
      } catch (e) {
        console.error(e);
      }
    },
    async review(item, data) {
      try {
        await apiCommon.fn.review(data);
        Object.assign(item, data);
      } catch (e) {
        console.error(e);
      }
    }
  }
};
