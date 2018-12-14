(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-340f12fc"],
  {
    "2ab2": function(t, e, a) {},
    "8bbd": function(t, e, a) {
      "use strict";
      var n = a("2ab2"),
        i = a.n(n);
      i.a;
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
        i = [],
        s = (a("a481"), a("6762"), a("2fdb"), a("7f7f"), a("be94")),
        c = a("1d84"),
        o = a("3cf5"),
        l = a("5880"),
        b = Object(l["createNamespacedHelpers"])(o["a"].pages),
        u = b.mapState,
        r = b.mapMutations,
        d = {
          name: "PageTab",
          mixins: [],
          components: {},
          props: {},
          data: function() {
            return { selectedTabPath: "" };
          },
          computed: Object(s["a"])({}, u(["tabs", "selectedTab"])),
          watch: {
            $route: {
              immediate: !0,
              deep: !0,
              handler: function(t) {
                this[c["mutations"].SET_TABS](t);
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
          methods: Object(s["a"])({}, r([c["mutations"].SET_TABS]), {
            tabClick: function(t) {
              this[c["mutations"].SET_TABS]({ path: t.name });
            },
            tabRemove: function(t) {
              this[c["mutations"].SET_TABS]({ path: t, remove: !0 });
            },
            tabTitle: function(t) {
              return t.query.details && t.path.includes("edit")
                ? t.title.replace(this.$t("action.edit"), "") +
                    this.$t("action.details")
                : t.title;
            }
          })
        },
        h = d,
        p = (a("8bbd"), a("2877")),
        f = Object(p["a"])(h, n, i, !1, null, null, null);
      f.options.__file = "PageTab.vue";
      e["default"] = f.exports;
    }
  }
]);
//# sourceMappingURL=chunk-340f12fc.5693bee5.js.map
