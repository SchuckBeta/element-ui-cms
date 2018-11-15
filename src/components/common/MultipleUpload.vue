<script>
import ElMultipleUpload from "@panhezeng/el-multiple-upload";

import api from "@/api/upload";

Object.assign(ElMultipleUpload.props.upload, {
  required: false,
  default: api.fn.elUploadCloud
});

export default ElMultipleUpload;
</script>
<style lang="less">
.el-multiple-upload {
  .el-upload-dragger {
    height: 100px;
    overflow: visible;
    .el-icon-upload {
      font-size: 40px;
      line-height: 1;
      margin: 10px 0 0 0;
    }
    .el-upload__text {
      line-height: 1;
    }
  }
}
</style>
