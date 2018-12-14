(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-20862280"],
  {
    "4c62": function(t, e, n) {},
    9414: function(t, e, n) {
      "use strict";
      n.r(e);
      var i = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return t.children.length
            ? n(
                "el-submenu",
                {
                  staticClass: "nav-menu-item",
                  attrs: { index: t.fullIndex, "data-menu-index": t.fullIndex }
                },
                [
                  n(
                    "template",
                    { slot: "title" },
                    [
                      n("svg-icon", {
                        attrs: { icon: t.icon ? t.icon : "component" }
                      }),
                      n("span", { attrs: { slot: "title" }, slot: "title" }, [
                        t._v(t._s(t.title))
                      ])
                    ],
                    1
                  ),
                  t._l(t.children, function(e, i) {
                    return n(
                      "nav-menu-item",
                      t._g(
                        {
                          key: i,
                          attrs: {
                            icon: e.icon,
                            fullIndex: t.fullIndex + "-" + i,
                            title: e.title,
                            path: e.path,
                            children: e.children
                          }
                        },
                        t.$listeners
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
                  attrs: { index: t.fullIndex, "data-menu-index": t.fullIndex },
                  nativeOn: {
                    click: function(e) {
                      return t.handleMenuClick(e);
                    }
                  }
                },
                [
                  n("svg-icon", {
                    attrs: { icon: t.icon ? t.icon : "component" }
                  }),
                  n("span", { attrs: { slot: "title" }, slot: "title" }, [
                    t._v(t._s(t.title))
                  ])
                ],
                1
              );
        },
        l = [],
        u = {
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
        c = u,
        r = (n("d659"), n("2877")),
        a = Object(r["a"])(c, i, l, !1, null, null, null);
      a.options.__file = "NavMenuItem.vue";
      e["default"] = a.exports;
    },
    d659: function(t, e, n) {
      "use strict";
      var i = n("4c62"),
        l = n.n(i);
      l.a;
    }
  }
]);
//# sourceMappingURL=chunk-20862280.7c8b4a31.js.map
