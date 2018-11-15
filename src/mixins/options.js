import {
  getters as gettersTypes,
  actions as actionsTypes
} from "@/store/config/vuex/types/index";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      updateStoreOptions: false
    };
  },
  computed: {
    ...mapState(["options"]),
    ...mapGetters([gettersTypes.EMPTY_OPTIONS])
  },
  created() {
    // 如果下拉选项数据为空，则先请求下拉选项数据
    if (this[gettersTypes.EMPTY_OPTIONS]) this[actionsTypes.GET_OPTIONS]();
  },
  beforeDestroy() {
    if (this.updateStoreOptions) {
      this[actionsTypes.GET_OPTIONS]();
    }
  },
  methods: {
    ...mapActions([actionsTypes.GET_OPTIONS])
  }
};
