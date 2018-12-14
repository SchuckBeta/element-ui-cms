(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [
    "chunk-31e13ef5",
    "chunk-36924fec",
    "chunk-248968af",
    "chunk-07e5f36c",
    "chunk-63f25890",
    "chunk-340f12fc"
  ],
  {
    "1cbf": function(t, e, a) {
      "use strict";
      a.r(e);
      var n = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            { staticClass: "avatar" },
            [
              t.url
                ? a("img", { attrs: { src: t.url } })
                : a("svg-icon", { attrs: { icon: "people-fill" } })
            ],
            1
          );
        },
        r = [],
        c = { name: "Avatar", props: { url: String } },
        i = c,
        s = (a("df81"), a("2877")),
        o = Object(s["a"])(i, n, r, !1, null, null, null);
      o.options.__file = "Avatar.vue";
      e["default"] = o.exports;
    },
    "235d": function(t, e, a) {
      "use strict";
      var n = a("953b"),
        r = a.n(n);
      r.a;
    },
    "23bc": function(t, e, a) {},
    "2ab2": function(t, e, a) {},
    4383: function(t, e, a) {},
    "46f6": function(t, e, a) {},
    5348: function(t, e, a) {
      "use strict";
      a.r(e);
      var n = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            { staticClass: "user-info" },
            [
              a("avatar", { attrs: { url: t.user.avatar } }),
              a("div", { staticClass: "info" }, [
                t.user.organ_name
                  ? a("div", { staticClass: "organ" }, [
                      t._v(t._s(t.user.organ_name))
                    ])
                  : t._e(),
                a("div", { staticClass: "name" }, [t._v(t._s(t.user.name))]),
                a("div", { staticClass: "role" }, [
                  t._v(t._s(t.currentRole.name))
                ])
              ]),
              t._t("default")
            ],
            2
          );
        },
        r = [],
        c = a("1cbf"),
        i = {
          name: "UserInfo",
          components: { Avatar: c["default"] },
          props: {
            user: { type: Object, required: !0 },
            currentRole: { type: Object, required: !0 }
          }
        },
        s = i,
        o = (a("54f4"), a("2877")),
        u = Object(o["a"])(s, n, r, !1, null, null, null);
      u.options.__file = "UserInfo.vue";
      e["default"] = u.exports;
    },
    "54f4": function(t, e, a) {
      "use strict";
      var n = a("4383"),
        r = a.n(n);
      r.a;
    },
    "5dbc": function(t, e, a) {
      var n = a("d3f4"),
        r = a("8b97").set;
      t.exports = function(t, e, a) {
        var c,
          i = e.constructor;
        return (
          i !== a &&
            "function" == typeof i &&
            (c = i.prototype) !== a.prototype &&
            n(c) &&
            r &&
            r(t, c),
          t
        );
      };
    },
    7034: function(t, e, a) {
      "use strict";
      a.r(e);
      var n = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "page-content",
            { staticClass: "dashboard-index" },
            [
              a("user-info", {
                attrs: { user: t.user, "current-role": t.currentRole }
              }),
              a("div", { staticClass: "todos row" }, [
                a(
                  "div",
                  { staticClass: "title" },
                  [
                    a("svg-icon", { attrs: { icon: "notice-fill" } }),
                    t._v(
                      "\n      " + t._s(t.$t("page.content.todos")) + "\n    "
                    )
                  ],
                  1
                ),
                a(
                  "div",
                  { staticClass: "content" },
                  t._l(t.todos, function(e, n) {
                    return a(
                      "a",
                      {
                        key: n,
                        staticClass: "item",
                        attrs: { href: "#" },
                        on: {
                          click: function(a) {
                            a.preventDefault(), t.$router.push(e.path);
                          }
                        }
                      },
                      [t._v(t._s(e.title) + "\n      ")]
                    );
                  }),
                  0
                )
              ]),
              a("div", { staticClass: "quick-start row" }, [
                a(
                  "div",
                  { staticClass: "title" },
                  [
                    a("svg-icon", { attrs: { icon: "light-fill" } }),
                    t._v(
                      "\n      " +
                        t._s(t.$t("page.content.quickStart")) +
                        "\n    "
                    )
                  ],
                  1
                ),
                a(
                  "div",
                  { staticClass: "content" },
                  t._l(t.quickStart, function(e) {
                    return a("div", { key: e.path, staticClass: "item" }, [
                      a(
                        "div",
                        { staticClass: "icon" },
                        [
                          e.icon
                            ? a("svg-icon", { attrs: { icon: e.icon } })
                            : t._e()
                        ],
                        1
                      ),
                      a(
                        "div",
                        { staticClass: "txt" },
                        [
                          a("div", { staticClass: "title" }, [
                            t._v(t._s(e.title))
                          ]),
                          t._l(e.children, function(e) {
                            return a(
                              "div",
                              { key: e.path, staticClass: "child" },
                              [
                                a(
                                  "a",
                                  {
                                    attrs: { href: "#" },
                                    on: {
                                      click: function(a) {
                                        a.preventDefault(),
                                          t.$router.push(e.path);
                                      }
                                    }
                                  },
                                  [t._v(t._s(e.title))]
                                ),
                                e.add
                                  ? a(
                                      "a",
                                      {
                                        attrs: { href: "#" },
                                        on: {
                                          click: function(a) {
                                            a.preventDefault(),
                                              t.$router.push({
                                                path: e.add.path,
                                                query: { back_push: 1 }
                                              });
                                          }
                                        }
                                      },
                                      [t._v(t._s(e.add.title))]
                                    )
                                  : t._e()
                              ]
                            );
                          })
                        ],
                        2
                      )
                    ]);
                  }),
                  0
                )
              ])
            ],
            1
          );
        },
        r = [],
        c = (a("6b54"), a("be94")),
        i = a("2934"),
        s = a("5348"),
        o = a("7d6e"),
        u = a("a060"),
        l = a("1d84"),
        f = a("3cf5"),
        d = a("5880"),
        p = Object(d["createNamespacedHelpers"])(f["a"].account),
        b = Object(d["createNamespacedHelpers"])(f["a"].pages),
        h = {
          mixins: [],
          components: { PageContent: o["default"], UserInfo: s["default"] },
          props: {},
          data: function() {
            return { todos: [] };
          },
          computed: Object(c["a"])(
            {},
            p.mapState(["user", "currentRole"]),
            b.mapGetters({ menus: l["getters"].MENUS }),
            {
              quickStart: function() {
                return "[object Array]" ===
                  Object.prototype.toString.call(this.menus) &&
                  this.menus.length
                  ? JSON.parse(JSON.stringify(this.menus)).reduce(function(
                      t,
                      e
                    ) {
                      return (
                        u["b"].Dashboard.title !== e.title &&
                          "[object Array]" ===
                            Object.prototype.toString.call(e.children) &&
                          ((e.children = e.children.reduce(function(t, e) {
                            return (
                              e.path &&
                                ((e.add = u["c"]["".concat(e.path, "/add")]),
                                t.push(e)),
                              t
                            );
                          }, [])),
                          e.children.length && t.push(e)),
                        t
                      );
                    },
                    [])
                  : [];
              }
            }
          ),
          watch: {},
          created: function() {
            var t = this;
            i["a"].fn.todos().then(function(e) {
              t.todos = e.data;
            });
          },
          mounted: function() {
            this.$nextTick(function() {});
          },
          beforeDestroy: function() {},
          methods: {}
        },
        _ = h,
        m = (a("9444"), a("2877")),
        v = Object(m["a"])(_, n, r, !1, null, null, null);
      v.options.__file = "index.vue";
      e["default"] = v.exports;
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
        r = [],
        c = (a("c5f6"), a("aaf7")),
        i = a("d37b"),
        s = {
          name: "PageContent",
          mixins: [],
          components: { PageBreadcrumb: c["default"], PageTab: i["default"] },
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
        o = s,
        u = (a("235d"), a("2877")),
        l = Object(u["a"])(o, n, r, !1, null, null, null);
      l.options.__file = "PageContent.vue";
      e["default"] = l.exports;
    },
    "8b97": function(t, e, a) {
      var n = a("d3f4"),
        r = a("cb7c"),
        c = function(t, e) {
          if ((r(t), !n(e) && null !== e))
            throw TypeError(e + ": can't set as prototype!");
        };
      t.exports = {
        set:
          Object.setPrototypeOf ||
          ("__proto__" in {}
            ? (function(t, e, n) {
                try {
                  (n = a("9b43")(
                    Function.call,
                    a("11e9").f(Object.prototype, "__proto__").set,
                    2
                  )),
                    n(t, []),
                    (e = !(t instanceof Array));
                } catch (r) {
                  e = !0;
                }
                return function(t, a) {
                  return c(t, a), e ? (t.__proto__ = a) : n(t, a), t;
                };
              })({}, !1)
            : void 0),
        check: c
      };
    },
    "8bbd": function(t, e, a) {
      "use strict";
      var n = a("2ab2"),
        r = a.n(n);
      r.a;
    },
    9444: function(t, e, a) {
      "use strict";
      var n = a("23bc"),
        r = a.n(n);
      r.a;
    },
    "953b": function(t, e, a) {},
    a740: function(t, e, a) {},
    aa77: function(t, e, a) {
      var n = a("5ca1"),
        r = a("be13"),
        c = a("79e5"),
        i = a("fdef"),
        s = "[" + i + "]",
        o = "​",
        u = RegExp("^" + s + s + "*"),
        l = RegExp(s + s + "*$"),
        f = function(t, e, a) {
          var r = {},
            s = c(function() {
              return !!i[t]() || o[t]() != o;
            }),
            u = (r[t] = s ? e(d) : i[t]);
          a && (r[a] = u), n(n.P + n.F * s, "String", r);
        },
        d = (f.trim = function(t, e) {
          return (
            (t = String(r(t))),
            1 & e && (t = t.replace(u, "")),
            2 & e && (t = t.replace(l, "")),
            t
          );
        });
      t.exports = f;
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
        r = [],
        c = (a("a481"), a("6762"), a("2fdb"), a("be94")),
        i = a("1d84"),
        s = a("3cf5"),
        o = a("5880"),
        u = Object(o["createNamespacedHelpers"])(s["a"].pages),
        l = u.mapGetters,
        f = {
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
          computed: Object(c["a"])({}, l([i["getters"].GET_BREADCRUMB]), {
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
        d = f,
        p = (a("c3f0"), a("2877")),
        b = Object(p["a"])(d, n, r, !1, null, null, null);
      b.options.__file = "PageBreadcrumb.vue";
      e["default"] = b.exports;
    },
    c3f0: function(t, e, a) {
      "use strict";
      var n = a("46f6"),
        r = a.n(n);
      r.a;
    },
    c5f6: function(t, e, a) {
      "use strict";
      var n = a("7726"),
        r = a("69a8"),
        c = a("2d95"),
        i = a("5dbc"),
        s = a("6a99"),
        o = a("79e5"),
        u = a("9093").f,
        l = a("11e9").f,
        f = a("86cc").f,
        d = a("aa77").trim,
        p = "Number",
        b = n[p],
        h = b,
        _ = b.prototype,
        m = c(a("2aeb")(_)) == p,
        v = "trim" in String.prototype,
        g = function(t) {
          var e = s(t, !1);
          if ("string" == typeof e && e.length > 2) {
            e = v ? e.trim() : d(e, 3);
            var a,
              n,
              r,
              c = e.charCodeAt(0);
            if (43 === c || 45 === c) {
              if (((a = e.charCodeAt(2)), 88 === a || 120 === a)) return NaN;
            } else if (48 === c) {
              switch (e.charCodeAt(1)) {
                case 66:
                case 98:
                  (n = 2), (r = 49);
                  break;
                case 79:
                case 111:
                  (n = 8), (r = 55);
                  break;
                default:
                  return +e;
              }
              for (var i, o = e.slice(2), u = 0, l = o.length; u < l; u++)
                if (((i = o.charCodeAt(u)), i < 48 || i > r)) return NaN;
              return parseInt(o, n);
            }
          }
          return +e;
        };
      if (!b(" 0o1") || !b("0b1") || b("+0x1")) {
        b = function(t) {
          var e = arguments.length < 1 ? 0 : t,
            a = this;
          return a instanceof b &&
            (m
              ? o(function() {
                  _.valueOf.call(a);
                })
              : c(a) != p)
            ? i(new h(g(e)), a, b)
            : g(e);
        };
        for (
          var y,
            T = a("9e1e")
              ? u(h)
              : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(
                  ","
                ),
            C = 0;
          T.length > C;
          C++
        )
          r(h, (y = T[C])) && !r(b, y) && f(b, y, l(h, y));
        (b.prototype = _), (_.constructor = b), a("2aba")(n, p, b);
      }
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
        r = [],
        c = (a("a481"), a("6762"), a("2fdb"), a("7f7f"), a("be94")),
        i = a("1d84"),
        s = a("3cf5"),
        o = a("5880"),
        u = Object(o["createNamespacedHelpers"])(s["a"].pages),
        l = u.mapState,
        f = u.mapMutations,
        d = {
          name: "PageTab",
          mixins: [],
          components: {},
          props: {},
          data: function() {
            return { selectedTabPath: "" };
          },
          computed: Object(c["a"])({}, l(["tabs", "selectedTab"])),
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
          methods: Object(c["a"])({}, f([i["mutations"].SET_TABS]), {
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
        p = d,
        b = (a("8bbd"), a("2877")),
        h = Object(b["a"])(p, n, r, !1, null, null, null);
      h.options.__file = "PageTab.vue";
      e["default"] = h.exports;
    },
    df81: function(t, e, a) {
      "use strict";
      var n = a("a740"),
        r = a.n(n);
      r.a;
    },
    fdef: function(t, e) {
      t.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff";
    }
  }
]);
//# sourceMappingURL=chunk-31e13ef5.5209b1d5.js.map
