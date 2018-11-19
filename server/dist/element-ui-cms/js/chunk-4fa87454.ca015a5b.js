(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-4fa87454"],
  {
    "1e74": function(t, e, r) {
      "use strict";
      var n = r("ab3b"),
        i = r.n(n);
      i.a;
    },
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
    ab3b: function(t, e, r) {},
    b270: function(t, e, r) {
      "use strict";
      r.r(e);
      var n = function() {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r("div", { staticClass: "not-found" }, [
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
        i = [],
        o = r("a380"),
        c = {
          name: "NotFound",
          mixins: [o["a"]],
          computed: {
            tip: function() {
              return this.$route.query.title
                ? ""
                    .concat(this.$t("page.content.notFound"))
                    .concat(this.$route.query.title)
                : this.$t("page.content.notFound");
            }
          }
        },
        u = c,
        a = (r("1e74"), r("2877")),
        s = Object(a["a"])(u, n, i, !1, null, null, null);
      s.options.__file = "NotFound.vue";
      e["default"] = s.exports;
    }
  }
]);
//# sourceMappingURL=chunk-4fa87454.ca015a5b.js.map
