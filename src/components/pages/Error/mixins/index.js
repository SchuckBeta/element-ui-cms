export default {
  data() {
    return {
      redirectTip: ""
    };
  },
  created() {
    if (this.$route.query.redirect_path) {
      let cd = 3;
      const update = () => {
        this.redirectTip = this.$t("page.content.goAutoAfterSecond", {
          cd: cd,
          page: this.$route.query.redirect_title
        });
        cd--;
        if (cd < 0) {
          this.redirect();
        } else {
          setTimeout(update, 1000);
        }
      };
      update();
    }
  },
  methods: {
    redirect() {
      if (this.$route.query.redirect_href) {
        window.location.href = this.$route.query.redirect_href;
      } else {
        this.$router.replace({ path: this.$route.query.redirect_path });
      }
    }
  }
};
