(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-63f25890"],
  {
    "46f6": function(e, t, r) {},
    aaf7: function(e, t, r) {
      "use strict";
      r.r(t);
      var a = function() {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t;
          return e.pageBreadcrumb.length > 1
            ? r(
                "el-breadcrumb",
                { staticClass: "page-breadcrumb", attrs: { separator: "/" } },
                [
                  e._l(e.pageBreadcrumb, function(t, a) {
                    return [
                      t.title
                        ? r("el-breadcrumb-item", { key: a }, [
                            e._v(
                              "\n      " +
                                e._s(e.breadcrumbTitle(t.title)) +
                                "\n    "
                            )
                          ])
                        : e._e()
                    ];
                  })
                ],
                2
              )
            : e._e();
        },
        n = [],
        c = (r("a481"), r("6762"), r("2fdb"), r("be94")),
        u = r("1d84"),
        i = r("3cf5"),
        s = r("5880"),
        o = Object(s["createNamespacedHelpers"])(i["a"].pages),
        d = o.mapGetters,
        b = {
          name: "PageBreadcrumb",
          mixins: [],
          components: {},
          inheritAttrs: !1,
          props: {
            breadcrumb: {
              type: Array,
              default: function() {
                return [];
              }
            },
            concat: { type: Boolean, default: !0 }
          },
          data: function() {
            return {};
          },
          computed: Object(c["a"])({}, d([u["getters"].GET_BREADCRUMB]), {
            pageBreadcrumb: function() {
              return this.concat
                ? this[u["getters"].GET_BREADCRUMB](this.$route.path).concat(
                    this.breadcrumb
                  )
                : this.breadcrumb;
            }
          }),
          watch: {},
          created: function() {},
          mounted: function() {
            this.$nextTick(function() {});
          },
          beforeDestroy: function() {},
          methods: {
            breadcrumbTitle: function(e) {
              return this.$route.query.details &&
                this.$route.path.includes("edit")
                ? e.replace(this.$t("action.edit"), "") +
                    this.$t("action.details")
                : e;
            }
          }
        },
        f = b,
        l = (r("c3f0"), r("2877")),
        p = Object(l["a"])(f, a, n, !1, null, null, null);
      p.options.__file = "PageBreadcrumb.vue";
      t["default"] = p.exports;
    },
    c3f0: function(e, t, r) {
      "use strict";
      var a = r("46f6"),
        n = r.n(a);
      n.a;
    }
  }
]);
//# sourceMappingURL=chunk-63f25890.9ae868be.js.map
