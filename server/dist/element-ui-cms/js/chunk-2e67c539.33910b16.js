(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-2e67c539", "chunk-63f25890", "chunk-340f12fc"],
  {
    "235d": function(t, e, a) {
      "use strict";
      var n = a("953b"),
        c = a.n(n);
      c.a;
    },
    "2a87": function(t, e, a) {
      "use strict";
      var n = a("35f1"),
        c = a.n(n);
      c.a;
    },
    "2ab2": function(t, e, a) {},
    "35f1": function(t, e, a) {},
    "46f6": function(t, e, a) {},
    "78e7": function(t, e, a) {
      "use strict";
      a.r(e);
      var n = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "page-add-edit",
            { attrs: { "back-btn": !1 } },
            [a("common-form")],
            1
          );
        },
        c = [],
        r = a("de73"),
        i = a("fa86"),
        s = {
          components: { PageAddEdit: r["default"], CommonForm: i["default"] }
        },
        u = s,
        o = (a("a7ce"), a("2877")),
        d = Object(o["a"])(u, n, c, !1, null, null, null);
      d.options.__file = "Item.vue";
      e["default"] = d.exports;
    },
    "7d6e": function(t, e, a) {
      "use strict";
      a.r(e);
      var n = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "page-content" }, [
            t.headerShow
              ? a(
                  "div",
                  { staticClass: "content-header" },
                  [
                    t.headerTab
                      ? a("page-tab", t._b({}, "page-tab", t.$attrs, !1))
                      : t._e(),
                    t.headerBreadcrumb
                      ? a(
                          "page-breadcrumb",
                          t._b({}, "page-breadcrumb", t.$attrs, !1)
                        )
                      : t._e()
                  ],
                  1
                )
              : t._e(),
            a("div", { staticClass: "content-main" }, [t._t("default")], 2)
          ]);
        },
        c = [],
        r = (a("c5f6"), a("aaf7")),
        i = a("d37b"),
        s = {
          name: "PageContent",
          mixins: [],
          components: { PageBreadcrumb: r["default"], PageTab: i["default"] },
          inheritAttrs: !1,
          props: {
            header: { type: Boolean, default: !0 },
            headerBreadcrumb: { type: Boolean, default: !0 },
            headerTab: { type: Boolean, default: !0 }
          },
          computed: {
            headerShow: function() {
              return void 0 === this.$route.query.page_content_header
                ? this.header
                : Number(this.$route.query.page_content_header);
            }
          },
          methods: {}
        },
        u = s,
        o = (a("235d"), a("2877")),
        d = Object(o["a"])(u, n, c, !1, null, null, null);
      d.options.__file = "PageContent.vue";
      e["default"] = d.exports;
    },
    "8bbd": function(t, e, a) {
      "use strict";
      var n = a("2ab2"),
        c = a.n(n);
      c.a;
    },
    "953b": function(t, e, a) {},
    a7ce: function(t, e, a) {
      "use strict";
      var n = a("f4d0"),
        c = a.n(n);
      c.a;
    },
    aaf7: function(t, e, a) {
      "use strict";
      a.r(e);
      var n = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return t.pageBreadcrumb.length > 1
            ? a(
                "el-breadcrumb",
                { staticClass: "page-breadcrumb", attrs: { separator: "/" } },
                [
                  t._l(t.pageBreadcrumb, function(e, n) {
                    return [
                      e.title
                        ? a("el-breadcrumb-item", { key: n }, [
                            t._v(
                              "\n      " +
                                t._s(t.breadcrumbTitle(e.title)) +
                                "\n    "
                            )
                          ])
                        : t._e()
                    ];
                  })
                ],
                2
              )
            : t._e();
        },
        c = [],
        r = (a("a481"), a("6762"), a("2fdb"), a("be94")),
        i = a("1d84"),
        s = a("3cf5"),
        u = a("5880"),
        o = Object(u["createNamespacedHelpers"])(s["a"].pages),
        d = o.mapGetters,
        l = {
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
          computed: Object(r["a"])({}, d([i["getters"].GET_BREADCRUMB]), {
            pageBreadcrumb: function() {
              return this.concat
                ? this[i["getters"].GET_BREADCRUMB](this.$route.path).concat(
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
            breadcrumbTitle: function(t) {
              return this.$route.query.details &&
                this.$route.path.includes("edit")
                ? t.replace(this.$t("action.edit"), "") +
                    this.$t("action.details")
                : t;
            }
          }
        },
        b = l,
        f = (a("c3f0"), a("2877")),
        p = Object(f["a"])(b, n, c, !1, null, null, null);
      p.options.__file = "PageBreadcrumb.vue";
      e["default"] = p.exports;
    },
    c3f0: function(t, e, a) {
      "use strict";
      var n = a("46f6"),
        c = a.n(n);
      c.a;
    },
    d37b: function(t, e, a) {
      "use strict";
      a.r(e);
      var n = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return t.tabs.length
            ? a(
                "el-tabs",
                {
                  staticClass: "page-tab",
                  attrs: { type: "card", closable: t.tabs.length > 1 },
                  on: { "tab-click": t.tabClick, "tab-remove": t.tabRemove },
                  model: {
                    value: t.selectedTabPath,
                    callback: function(e) {
                      t.selectedTabPath = e;
                    },
                    expression: "selectedTabPath"
                  }
                },
                t._l(t.tabs, function(e) {
                  return a("el-tab-pane", {
                    key: e.path,
                    attrs: {
                      label: t.tabTitle(e),
                      name: e.path,
                      disabled: t.tabs.length < 2
                    }
                  });
                }),
                1
              )
            : t._e();
        },
        c = [],
        r = (a("a481"), a("6762"), a("2fdb"), a("7f7f"), a("be94")),
        i = a("1d84"),
        s = a("3cf5"),
        u = a("5880"),
        o = Object(u["createNamespacedHelpers"])(s["a"].pages),
        d = o.mapState,
        l = o.mapMutations,
        b = {
          name: "PageTab",
          mixins: [],
          components: {},
          props: {},
          data: function() {
            return { selectedTabPath: "" };
          },
          computed: Object(r["a"])({}, d(["tabs", "selectedTab"])),
          watch: {
            $route: {
              immediate: !0,
              deep: !0,
              handler: function(t) {
                this[i["mutations"].SET_TABS](t);
              }
            }
          },
          created: function() {
            var t = this;
            this.$store.watch(
              function(t) {
                return t.pages.selectedTab.path;
              },
              function(e) {
                (t.selectedTabPath = e),
                  t.$route.path !== e &&
                    t.$nextTick(function() {
                      this.$router.push(this.selectedTab);
                    });
              },
              { immediate: !0 }
            );
          },
          mounted: function() {
            this.$nextTick(function() {});
          },
          beforeDestroy: function() {},
          methods: Object(r["a"])({}, l([i["mutations"].SET_TABS]), {
            tabClick: function(t) {
              this[i["mutations"].SET_TABS]({ path: t.name });
            },
            tabRemove: function(t) {
              this[i["mutations"].SET_TABS]({ path: t, remove: !0 });
            },
            tabTitle: function(t) {
              return t.query.details && t.path.includes("edit")
                ? t.title.replace(this.$t("action.edit"), "") +
                    this.$t("action.details")
                : t.title;
            }
          })
        },
        f = b,
        p = (a("8bbd"), a("2877")),
        h = Object(p["a"])(f, n, c, !1, null, null, null);
      h.options.__file = "PageTab.vue";
      e["default"] = h.exports;
    },
    de73: function(t, e, a) {
      "use strict";
      a.r(e);
      var n = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("page-content", { staticClass: "page-add-edit" }, [
            a(
              "div",
              { staticClass: "add-edit-header" },
              [
                t.backBtn
                  ? a(
                      "el-button",
                      {
                        staticClass: "back-btn",
                        attrs: { size: "mini" },
                        on: { click: t.back }
                      },
                      [t._v(t._s(t.$t("action.close")))]
                    )
                  : t._e()
              ],
              1
            ),
            a("div", { staticClass: "add-edit-main" }, [t._t("default")], 2)
          ]);
        },
        c = [],
        r = (a("a481"), a("be94")),
        i = a("7d6e"),
        s = a("1d84"),
        u = a("3cf5"),
        o = a("5880"),
        d = Object(o["createNamespacedHelpers"])(u["a"].pages),
        l = d.mapMutations,
        b = {
          name: "PageAddEdit",
          components: { PageContent: i["default"] },
          props: { backBtn: { type: Boolean, default: !0 } },
          methods: Object(r["a"])({}, l([s["mutations"].SET_TABS]), {
            back: function() {
              var t = this.$route.path;
              (history.length < 3 || this.$store.state.pages.tabs.length < 2) &&
                this.$router.push({ path: t.replace(/(\/add|\/edit).*$/, "") }),
                this[s["mutations"].SET_TABS]({ path: t, remove: !0 });
            }
          })
        },
        f = b,
        p = (a("2a87"), a("2877")),
        h = Object(p["a"])(f, n, c, !1, null, null, null);
      h.options.__file = "PageAddEdit.vue";
      e["default"] = h.exports;
    },
    f4d0: function(t, e, a) {}
  }
]);
//# sourceMappingURL=chunk-2e67c539.33910b16.js.map
