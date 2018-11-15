<script>
import ElSingleUpload from "@panhezeng/el-single-upload";

import api from "@/api/upload";

Object.assign(ElSingleUpload.props.upload, {
  required: false,
  default: api.fn.elUploadCloud
});

export default ElSingleUpload;
</script>
