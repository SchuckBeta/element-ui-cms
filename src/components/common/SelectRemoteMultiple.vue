<script>
import ElSelectRemoteMultiple from "@panhezeng/el-select-remote-multiple";
import Vue from "vue";

Object.assign(ElSelectRemoteMultiple.props.ajax, {
  required: false,
  default() {
    return Vue.http;
  }
});

export default ElSelectRemoteMultiple;
</script>
