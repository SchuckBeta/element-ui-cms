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
        this.redirectTip = `${cd}秒后自动前往${
          this.$route.query.redirect_title
        }页`;
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
