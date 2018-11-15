<template>
  <div class="resource-search-save-list">
    <div class="header">
      <resource-search v-bind="$attrs" :resource.sync="resource"/>
      <el-button class="add" @click="add" v-if="!$attrs.disabled">添加</el-button>
    </div>
    <h4 class="list-title">已选资源列表</h4>
    <el-table ref="listTable"
              :data="list"
    >
      <el-table-column
        prop="order"
        label="顺序"
      />
      <el-table-column
        prop="id"
        label="资源ID"
      />
      <el-table-column
        prop="title"
        label="资源名称"
      />
      <el-table-column
        prop="resource_type"
        label="资源类型"
      >
        <template slot-scope="scope">
          {{getTextByValue(options.resource_type,scope.row.resource_type,'value')}}
        </template>
      </el-table-column>
      <el-table-column
        prop="learning_hour"
        label="学时"
        v-if="courseOnly"
      />
      <el-table-column
        prop="platform_name"
        label="开课单位"
        v-if="courseOnly"
      />
      <el-table-column
        prop="updated_time"
        label="更新时间"
      >
      </el-table-column>
      <el-table-column
        prop="creator_name"
        label="创建者"
      >
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
      >
        <template slot-scope="scope">
          <div>
            <el-button type="text"
                       @click="move(scope.row, scope.$index, true)"
                       v-if="scope.$index">上移
            </el-button>
            <el-button type="text"
                       @click="move(scope.row, scope.$index, false)"
                       v-if="scope.$index<(list.length-1)">下移
            </el-button>
          </div>
          <div>
            <el-button type="text" @click="to(scope.row)">详情</el-button>
            <el-button type="text" @click="del(scope.$index)">删除</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { getTextByValue } from "@/utils/index";
import ResourceType from "@/store/config/resource-type";

import ResourceSearch from "@/components/common/ResourceSearch";

export default {
  name: "ResourceSearchSaveList",
  components: { ResourceSearch },
  inheritAttrs: false,
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      // 用户选中的资源数据对象
      resource: null
    };
  },
  computed: {
    ...mapState(["options"]),
    courseOnly() {
      if (
        Object.prototype.toString.call(this.$attrs["include-type"]) ===
          "[object Array]" &&
        this.$attrs["include-type"].length
      ) {
        return (
          JSON.stringify(this.$attrs["include-type"].slice().sort()) ===
          JSON.stringify([ResourceType.Course.type])
        );
      } else {
        return this.$attrs.type === ResourceType.Course.type;
      }
    }
  },
  methods: {
    getTextByValue,
    to(item) {
      let path;
      let query;
      const keys = Object.keys(ResourceType);
      for (let i = keys.length; i--; ) {
        const config = ResourceType[keys[i]];
        if (config.type === item.resource_type) {
          path = `${config.pages.path}/edit`;
          query = { id: item.id, disabled: 1 };
          break;
        }
      }
      if (path) {
        window.open(`${path}?id=${query.id}&disabled=${query.disabled}`);
        //          this.$router.push({path, query})
      } else {
        this.$message({ message: "该资源没有详情页", type: "warning" });
      }
    },
    add() {
      if (
        this.list.find(
          item =>
            item.id === this.resource.id &&
            item.resource_type === this.resource.resource_type
        )
      ) {
        this.$message({ message: "该资源已添加，请重新选择", type: "warning" });
      } else {
        this.list.push({
          order: this.list.length,
          resource_type: this.resource.resource_type,
          resource_id: this.resource.id,
          // 上面是后端入库需要的数据，下面是前端显示需要的数据
          id: this.resource.id,
          title: this.resource.title,
          learning_hour: this.resource.learning_hour,
          platform_name: this.resource.platform_name,
          updated_time: this.resource.updated_time,
          creator_name: this.resource.creator_name
        });
      }
      this.resource = null;
    },
    move(row, index, up) {
      const a = this.list[index];
      const toIndex = up ? index - 1 : index + 1;
      const b = this.list[toIndex];
      a.order = toIndex;
      b.order = index;
      this.$set(this.list, toIndex, a);
      this.$set(this.list, index, b);
    },
    del(index) {
      this.$delete(this.list, index);
    }
  }
};
</script>
<style lang="less">
.resource-search-save-list {
  width: 100%;
  .header {
    display: flex;
    justify-content: space-between;
  }
  .resource-search {
    width: auto;
    flex-grow: 1;
  }
  .add {
    margin-left: 5px;
  }
  .el-button {
    margin-right: 10px;
  }
  .popover-dialog {
    margin-right: 10px;
  }
  .el-button + .el-button {
    margin: 0;
  }
}
</style>
