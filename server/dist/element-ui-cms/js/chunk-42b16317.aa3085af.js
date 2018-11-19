(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-42b16317", "chunk-20862280"],
  {
    "3d74": function(e, t, n) {
      "use strict";
      n.r(t);
      var i = function() {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return e.menus.length
            ? n(
                "el-menu",
                e._b(
                  {
                    ref: "menu",
                    staticClass: "nav-menu",
                    attrs: {
                      mode: e.mode,
                      "unique-opened": !0,
                      "default-active": e.defaultActive
                    }
                  },
                  "el-menu",
                  e.$attrs,
                  !1
                ),
                e._l(e.menus, function(t, i) {
                  return n("nav-menu-item", {
                    key: i,
                    attrs: {
                      icon: t.icon,
                      fullIndex: String(i),
                      title: t.title,
                      path: t.path,
                      children: t.children
                    },
                    on: { "menu-click": e.handleMenuClick }
                  });
                })
              )
            : e._e();
        },
        u = [],
        l = n("be94"),
        a = n("9414"),
        c = n("7a0f"),
        r = n("5991"),
        s = n("5880"),
        d = Object(s["createNamespacedHelpers"])(r["a"].pages),
        o = d.mapGetters,
        f = {
          name: "NavMenu",
          components: { NavMenuItem: a["default"] },
          inheritAttrs: !1,
          props: { mode: { type: String, default: "vertical" } },
          data: function() {
            return { defaultActive: "0", menuClick: !1 };
          },
          computed: Object(l["a"])(
            {},
            o({
              menus: c["getters"].MENUS,
              getBreadcrumb: c["getters"].GET_BREADCRUMB
            })
          ),
          watch: {
            $route: {
              immediate: !0,
              deep: !0,
              handler: function(e) {
                this.menuClick || this.defaultActiveUpdate(e),
                  (this.menuClick = !1);
              }
            }
          },
          methods: {
            defaultActiveUpdate: function(e) {
              var t = this.getBreadcrumb(e.path);
              t.length
                ? (this.defaultActive = t[t.length - 1].index)
                : (this.defaultActive = "0");
            },
            handleMenuClick: function() {
              this.menuClick = !0;
            }
          }
        },
        m = f,
        h = (n("ab24"), n("2877")),
        p = Object(h["a"])(m, i, u, !1, null, null, null);
      p.options.__file = "NavMenu.vue";
      t["default"] = p.exports;
    },
    "4c62": function(e, t, n) {},
    "4f6d": function(e, t, n) {},
    9414: function(e, t, n) {
      "use strict";
      n.r(t);
      var i = function() {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return e.children.length
            ? n(
                "el-submenu",
                {
                  staticClass: "nav-menu-item",
                  attrs: { index: e.fullIndex, "data-menu-index": e.fullIndex }
                },
                [
                  n(
                    "template",
                    { slot: "title" },
                    [
                      n("svg-icon", {
                        attrs: { icon: e.icon ? e.icon : "component" }
                      }),
                      n("span", { attrs: { slot: "title" }, slot: "title" }, [
                        e._v(e._s(e.title))
                      ])
                    ],
                    1
                  ),
                  e._l(e.children, function(t, i) {
                    return n(
                      "nav-menu-item",
                      e._g(
                        {
                          key: i,
                          attrs: {
                            icon: t.icon,
                            fullIndex: e.fullIndex + "-" + i,
                            title: t.title,
                            path: t.path,
                            children: t.children
                          }
                        },
                        e.$listeners
                      )
                    );
                  })
                ],
                2
              )
            : n(
                "el-menu-item",
                {
                  staticClass: "nav-item",
                  attrs: { index: e.fullIndex, "data-menu-index": e.fullIndex },
                  nativeOn: {
                    click: function(t) {
                      return e.handleMenuClick(t);
                    }
                  }
                },
                [
                  n("svg-icon", {
                    attrs: { icon: e.icon ? e.icon : "component" }
                  }),
                  n("span", { attrs: { slot: "title" }, slot: "title" }, [
                    e._v(e._s(e.title))
                  ])
                ],
                1
              );
        },
        u = [],
        l = {
          name: "NavMenuItem",
          mixins: [],
          components: {},
          props: {
            fullIndex: { type: String, required: !0, default: "" },
            icon: { type: String, required: !0, default: "" },
            title: { type: String, required: !0, default: "" },
            path: { type: String, required: !0, default: "" },
            children: {
              type: Array,
              required: !0,
              default: function() {
                return [];
              }
            }
          },
          data: function() {
            return {};
          },
          computed: {},
          watch: {},
          created: function() {},
          mounted: function() {
            this.$nextTick(function() {});
          },
          beforeDestroy: function() {},
          methods: {
            handleMenuClick: function() {
              this.path &&
                (this.$emit("menu-click"),
                this.$router.push({ path: this.path }));
            }
          }
        },
        a = l,
        c = (n("d659"), n("2877")),
        r = Object(c["a"])(a, i, u, !1, null, null, null);
      r.options.__file = "NavMenuItem.vue";
      t["default"] = r.exports;
    },
    ab24: function(e, t, n) {
      "use strict";
      var i = n("4f6d"),
        u = n.n(i);
      u.a;
    },
    d659: function(e, t, n) {
      "use strict";
      var i = n("4c62"),
        u = n.n(i);
      u.a;
    }
  }
]);
//# sourceMappingURL=chunk-42b16317.aa3085af.js.map
