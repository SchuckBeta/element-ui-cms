<script>
import Vue from "vue";
import ElTinymce from "@panhezeng/el-tinymce";
import api from "@/api/upload";

const i18n = {
  type: Object,
  default() {
    return {
      resource: Vue.i18n.t("editor.resource"),
      picture: Vue.i18n.t("editor.picture"),
      localPicture: Vue.i18n.t("editor.localPicture"),
      localPictureDesc: Vue.i18n.t("editor.localPictureDesc"),
      localPictureRule: Vue.i18n.t("editor.localPictureRule"),
      externalLinkPicture: Vue.i18n.t("editor.externalLinkPicture"),
      externalLinkPictureDesc: Vue.i18n.t("editor.externalLinkPictureDesc"),
      externalLinkPictureRule: Vue.i18n.t("editor.externalLinkPictureRule"),
      audio: Vue.i18n.t("editor.audio"),
      localAudio: Vue.i18n.t("editor.localAudio"),
      localAudioDesc: Vue.i18n.t("editor.localAudioDesc"),
      localAudioRule: Vue.i18n.t("editor.localAudioRule"),
      externalLinkAudio: Vue.i18n.t("editor.externalLinkAudio"),
      externalLinkAudioDesc: Vue.i18n.t("editor.externalLinkAudioDesc"),
      externalLinkAudioRule: Vue.i18n.t("editor.externalLinkAudioRule"),
      video: Vue.i18n.t("editor.video"),
      localVideo: Vue.i18n.t("editor.localVideo"),
      localVideoDesc: Vue.i18n.t("editor.localVideoDesc"),
      localVideoRule: Vue.i18n.t("editor.localVideoRule"),
      externalLinkVideo: Vue.i18n.t("editor.externalLinkVideo"),
      externalLinkVideoDesc: Vue.i18n.t("editor.externalLinkVideoDesc"),
      externalLinkVideoRule: Vue.i18n.t("editor.externalLinkVideoRule"),
      btn: {
        reset: Vue.i18n.t("action.reset"),
        submit: Vue.i18n.t("action.submit")
      }
    };
  }
};

Object.assign(ElTinymce.props.upload, {
  required: false,
  default: api.fn.elUploadCloud
});

Object.assign(ElTinymce.components.Side.props.i18n, i18n);

export default ElTinymce;
</script>
