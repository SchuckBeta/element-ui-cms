(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-5599ed30"],
  {
    "567c": function(t, e, r) {},
    a380: function(t, e, r) {
      "use strict";
      r("a481");
      e["a"] = {
        data: function() {
          return { redirectTip: "" };
        },
        created: function() {
          var t = this;
          if (this.$route.query.redirect_path) {
            var e = 3,
              r = function r() {
                (t.redirectTip = t.$t("page.content.goAutoAfterSecond", {
                  cd: e,
                  page: t.$route.query.redirect_title
                })),
                  e--,
                  e < 0 ? t.redirect() : setTimeout(r, 1e3);
              };
            r();
          }
        },
        methods: {
          redirect: function() {
            this.$route.query.redirect_href
              ? (window.location.href = this.$route.query.redirect_href)
              : this.$router.replace({ path: this.$route.query.redirect_path });
          }
        }
      };
    },
    a624: function(t, e, r) {
      "use strict";
      var i = r("567c"),
        n = r.n(i);
      n.a;
    },
    b1ba: function(t, e, r) {
      "use strict";
      r.r(e);
      var i = function() {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r("div", { staticClass: "not-permission" }, [
            r("h1", [t._v(t._s(t.tip))]),
            t.redirectTip
              ? r("h3", [
                  t._v(t._s(t.redirectTip) + "，"),
                  r(
                    "a",
                    {
                      attrs: { href: "#" },
                      on: {
                        click: function(e) {
                          return e.preventDefault(), t.redirect(e);
                        }
                      }
                    },
                    [t._v(t._s(t.$t("page.content.goNow")))]
                  )
                ])
              : t._e()
          ]);
        },
        n = [],
        c = r("a380"),
        o = {
          name: "NotPermission",
          mixins: [c["a"]],
          computed: {
            tip: function() {
              return this.$route.query.title
                ? ""
                    .concat(this.$t("page.content.noAccess"))
                    .concat(this.$route.query.title)
                : this.$t("page.content.noAccess");
            }
          }
        },
        u = o,
        s = (r("a624"), r("2877")),
        a = Object(s["a"])(u, i, n, !1, null, null, null);
      a.options.__file = "NotPermission.vue";
      e["default"] = a.exports;
    }
  }
]);
//# sourceMappingURL=chunk-5599ed30.a2bb1d33.js.map
