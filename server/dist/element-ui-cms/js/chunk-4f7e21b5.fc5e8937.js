(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [
    "chunk-4f7e21b5",
    "chunk-9c2115c4",
    "chunk-248968af",
    "chunk-42b16317",
    "chunk-07e5f36c",
    "chunk-20862280",
    "chunk-49c59903",
    "chunk-736890db"
  ],
  {
    1005: function(t, e, n) {
      "use strict";
      n.r(e);
      var a = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            { staticClass: "layout-basic" },
            [
              t.pageHeaderShow ? n("page-header") : t._e(),
              n(
                "div",
                { class: t.pageClassName },
                [
                  t.pageSideShow
                    ? n(
                        "div",
                        { staticClass: "side" },
                        [
                          "vertical" === t.navMenuMode
                            ? n(
                                "el-radio-group",
                                {
                                  staticClass: "collapse-btn",
                                  model: {
                                    value: t.collapse,
                                    callback: function(e) {
                                      t.collapse = e;
                                    },
                                    expression: "collapse"
                                  }
                                },
                                [
                                  t.collapse
                                    ? n(
                                        "el-radio-button",
                                        { attrs: { label: !1 } },
                                        [n("i", { class: t.collapseArrow[0] })]
                                      )
                                    : t._e(),
                                  t.collapse
                                    ? t._e()
                                    : n(
                                        "el-radio-button",
                                        { attrs: { label: !0 } },
                                        [n("i", { class: t.collapseArrow[1] })]
                                      )
                                ],
                                1
                              )
                            : t._e(),
                          n("nav-menu", {
                            attrs: { collapse: t.collapse, mode: t.navMenuMode }
                          })
                        ],
                        1
                      )
                    : t._e(),
                  n("router-view", { staticClass: "main" })
                ],
                1
              ),
              t.pageFooterShow ? n("page-footer") : t._e()
            ],
            1
          );
        },
        o = [],
        r = (n("c5f6"), n("be94")),
        i = (n("cadf"), n("551c"), n("097d"), n("3d74")),
        c = n("47c0"),
        s = n("ddd6"),
        u = n("6e37"),
        l = n("5880"),
        f = {
          name: "LayoutBasic",
          mixins: [],
          components: {
            NavMenu: i["default"],
            PageHeader: c["default"],
            PageFooter: s["default"]
          },
          props: {},
          data: function() {
            return { collapse: !1 };
          },
          computed: Object(r["a"])(
            {},
            Object(l["mapState"])(["menuLayoutType"]),
            {
              pageClassName: function() {
                var t = "page";
                return (
                  this.menuLayoutType &&
                    ((t += " ".concat(this.menuLayoutType)),
                    this.menuLayoutType !== u["b"].top &&
                      this.collapse &&
                      (t += " collapse")),
                  t
                );
              },
              navMenuMode: function() {
                return this.menuLayoutType === u["b"].top
                  ? "horizontal"
                  : "vertical";
              },
              collapseArrow: function() {
                return this.menuLayoutType === u["b"].left
                  ? ["el-icon-d-arrow-right", "el-icon-d-arrow-left"]
                  : ["el-icon-d-arrow-left", "el-icon-d-arrow-right"];
              },
              pageHeaderShow: function() {
                return (
                  void 0 === this.$route.query.page_header ||
                  Number(this.$route.query.page_header)
                );
              },
              pageSideShow: function() {
                return (
                  void 0 === this.$route.query.page_side ||
                  Number(this.$route.query.page_side)
                );
              },
              pageFooterShow: function() {
                return (
                  void 0 === this.$route.query.page_footer ||
                  Number(this.$route.query.page_footer)
                );
              }
            }
          ),
          watch: {},
          created: function() {},
          mounted: function() {
            this.$nextTick(function() {});
          },
          beforeDestroy: function() {},
          methods: {}
        },
        d = f,
        p = (n("ae71"), n("2877")),
        m = Object(p["a"])(d, a, o, !1, null, null, null);
      m.options.__file = "Basic.vue";
      e["default"] = m.exports;
    },
    "1cbf": function(t, e, n) {
      "use strict";
      n.r(e);
      var a = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            { staticClass: "avatar" },
            [
              t.url
                ? n("img", { attrs: { src: t.url } })
                : n("svg-icon", { attrs: { icon: "people-fill" } })
            ],
            1
          );
        },
        o = [],
        r = { name: "Avatar", props: { url: String } },
        i = r,
        c = (n("df81"), n("2877")),
        s = Object(c["a"])(i, a, o, !1, null, null, null);
      s.options.__file = "Avatar.vue";
      e["default"] = s.exports;
    },
    "3d74": function(t, e, n) {
      "use strict";
      n.r(e);
      var a = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return t.menus.length
            ? n(
                "el-menu",
                t._b(
                  {
                    ref: "menu",
                    staticClass: "nav-menu",
                    attrs: {
                      mode: t.mode,
                      "unique-opened": !0,
                      "default-active": t.defaultActive
                    }
                  },
                  "el-menu",
                  t.$attrs,
                  !1
                ),
                t._l(t.menus, function(e, a) {
                  return n("nav-menu-item", {
                    key: a,
                    attrs: {
                      icon: e.icon,
                      fullIndex: String(a),
                      title: e.title,
                      path: e.path,
                      children: e.children
                    },
                    on: { "menu-click": t.handleMenuClick }
                  });
                })
              )
            : t._e();
        },
        o = [],
        r = n("be94"),
        i = n("9414"),
        c = n("7a0f"),
        s = n("5991"),
        u = n("5880"),
        l = Object(u["createNamespacedHelpers"])(s["a"].pages),
        f = l.mapGetters,
        d = {
          name: "NavMenu",
          components: { NavMenuItem: i["default"] },
          inheritAttrs: !1,
          props: { mode: { type: String, default: "vertical" } },
          data: function() {
            return { defaultActive: "0", menuClick: !1 };
          },
          computed: Object(r["a"])(
            {},
            f({
              menus: c["getters"].MENUS,
              getBreadcrumb: c["getters"].GET_BREADCRUMB
            })
          ),
          watch: {
            $route: {
              immediate: !0,
              deep: !0,
              handler: function(t) {
                this.menuClick || this.defaultActiveUpdate(t),
                  (this.menuClick = !1);
              }
            }
          },
          methods: {
            defaultActiveUpdate: function(t) {
              var e = this.getBreadcrumb(t.path);
              e.length
                ? (this.defaultActive = e[e.length - 1].index)
                : (this.defaultActive = "0");
            },
            handleMenuClick: function() {
              this.menuClick = !0;
            }
          }
        },
        p = d,
        m = (n("ab24"), n("2877")),
        h = Object(m["a"])(p, a, o, !1, null, null, null);
      h.options.__file = "NavMenu.vue";
      e["default"] = h.exports;
    },
    "417b": function(t, e, n) {
      "use strict";
      n.r(e);
      var a = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "el-dropdown",
            {
              class: "switch-language switch-language-" + t.className,
              attrs: { "show-timeout": 100 }
            },
            [
              n(
                "div",
                { staticClass: "lang" },
                [
                  n("svg-icon", { attrs: { icon: "global" } }),
                  n("span", { staticClass: "name" }, [
                    t._v(t._s(t.$t("lang." + t.locale)))
                  ]),
                  n("i", { staticClass: "el-icon-arrow-down" })
                ],
                1
              ),
              n(
                "el-dropdown-menu",
                {
                  class: "dropdown-action-switch-language-" + t.className,
                  attrs: { slot: "dropdown" },
                  slot: "dropdown"
                },
                t._l(t.list, function(e, a) {
                  return n(
                    "el-dropdown-item",
                    {
                      key: a,
                      attrs: { disabled: e === t.locale },
                      nativeOn: {
                        click: function(n) {
                          t.switchLanguage(e);
                        }
                      }
                    },
                    [t._v("\n      " + t._s(t.$t("lang." + e)) + "\n    ")]
                  );
                })
              )
            ],
            1
          );
        },
        o = [],
        r = (n("ac6a"), n("8615"), n("be94")),
        i = n("cec7"),
        c = n("756e"),
        s = n("5991"),
        u = n("5880"),
        l = Object(u["createNamespacedHelpers"])(s["a"].i18n),
        f = l.mapState,
        d = l.mapMutations,
        p = {
          name: "SwitchLanguage",
          mixins: [],
          components: {},
          props: { className: { type: String, default: "sign-in" } },
          data: function() {
            return {};
          },
          computed: Object(r["a"])(
            {},
            f({
              locale: function(t) {
                return t.locale;
              }
            }),
            {
              list: function() {
                return Object.values(i["a"]);
              }
            }
          ),
          watch: {},
          created: function() {},
          mounted: function() {
            this.$nextTick(function() {});
          },
          beforeDestroy: function() {},
          methods: Object(r["a"])({}, d([c["mutations"].SET_LANG]), {
            switchLanguage: function(t) {
              this[c["mutations"].SET_LANG](t), window.location.reload();
            }
          })
        },
        m = p,
        h = (n("5d83"), n("2877")),
        v = Object(h["a"])(m, a, o, !1, null, null, null);
      v.options.__file = "SwitchLanguage.vue";
      e["default"] = v.exports;
    },
    "435e": function(t, e, n) {},
    4383: function(t, e, n) {},
    "47c0": function(t, e, n) {
      "use strict";
      n.r(e);
      var a = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            { staticClass: "page-header" },
            [
              n("span", { staticClass: "title" }, [
                t._v(t._s(t.$t("page.header.title")))
              ]),
              n("switch-language", { attrs: { "class-name": "page-header" } }),
              n(
                "el-dropdown",
                { staticClass: "account", attrs: { "show-timeout": 100 } },
                [
                  n(
                    "user-info",
                    {
                      attrs: {
                        user: { avatar: t.user.avatar, name: t.user.name },
                        "current-role": t.currentRole
                      }
                    },
                    [n("i", { staticClass: "el-icon-arrow-down" })]
                  ),
                  n(
                    "el-dropdown-menu",
                    {
                      staticClass: "dropdown-action-page-header-user",
                      attrs: { slot: "dropdown" },
                      slot: "dropdown"
                    },
                    [
                      n(
                        "el-dropdown-item",
                        {
                          nativeOn: {
                            click: function(e) {
                              return t.changePassword(e);
                            }
                          }
                        },
                        [
                          t._v(
                            "\n        " +
                              t._s(t.$t("account.changePassword")) +
                              "\n      "
                          )
                        ]
                      ),
                      t.user.groups.length > 1
                        ? [
                            t._l(t.user.groups, function(e) {
                              return [
                                e.id !== t.currentRole.id
                                  ? n(
                                      "el-dropdown-item",
                                      {
                                        key: e.id,
                                        nativeOn: {
                                          click: function(n) {
                                            t.switchRole(e);
                                          }
                                        }
                                      },
                                      [
                                        t._v(
                                          "\n            " +
                                            t._s(
                                              t.$t("page.header.switchRole", {
                                                role: e.name
                                              })
                                            ) +
                                            "\n          "
                                        )
                                      ]
                                    )
                                  : t._e()
                              ];
                            })
                          ]
                        : t._e(),
                      t._l(t.menuLayouts, function(e) {
                        return [
                          e.type !== t.menuLayoutType
                            ? n(
                                "el-dropdown-item",
                                {
                                  key: e.type,
                                  nativeOn: {
                                    click: function(n) {
                                      t.switchMenuLayout(e);
                                    }
                                  }
                                },
                                [
                                  t._v(
                                    "\n          " +
                                      t._s(
                                        t.$t("page.header.menuLayout", {
                                          layout: t.$t("page.header." + e.type)
                                        })
                                      ) +
                                      "\n        "
                                  )
                                ]
                              )
                            : t._e()
                        ];
                      }),
                      n(
                        "el-dropdown-item",
                        [
                          n("el-popover-dialog", {
                            attrs: {
                              placement: "left",
                              "btn-style": "",
                              "popover-content": t.$t("account.signOutAsk"),
                              "btn-txt": t.$t("account.signOut")
                            },
                            on: { confirm: t.signOutConfirm }
                          })
                        ],
                        1
                      )
                    ],
                    2
                  )
                ],
                1
              )
            ],
            1
          );
        },
        o = [],
        r = (n("6b54"), n("be94")),
        i = n("417b"),
        c = n("12e1"),
        s = n("5348"),
        u = n("f21c"),
        l = n.n(u),
        f = n("6e37"),
        d = n("0fe8"),
        p = n("5be4"),
        m = n("5991"),
        h = n("5880"),
        v = Object(h["createNamespacedHelpers"])(m["a"].account),
        _ = {
          name: "PageHeader",
          mixins: [],
          components: {
            ElPopoverDialog: l.a,
            UserInfo: s["default"],
            SwitchLanguage: i["default"]
          },
          props: {},
          data: function() {
            return { menuLayouts: f["a"] };
          },
          computed: Object(r["a"])(
            {},
            Object(h["mapState"])(["menuLayoutType"]),
            v.mapState(["user", "currentRole"])
          ),
          watch: {},
          created: function() {},
          mounted: function() {
            this.$nextTick(function() {});
          },
          beforeDestroy: function() {},
          methods: Object(r["a"])(
            {},
            Object(h["mapMutations"])([d["d"].MENU_LAYOUT_TYPE]),
            v.mapMutations([
              p["mutations"].SET_ACCOUNT,
              p["mutations"].SWITCH_ROLE
            ]),
            v.mapActions([p["actions"].GET_ROLE_MENU]),
            {
              switchRole: function(t) {
                "[object Array]" === Object.prototype.toString.call(t.menu)
                  ? this[p["mutations"].SWITCH_ROLE]({ role: t })
                  : this[p["actions"].GET_ROLE_MENU](t);
              },
              switchMenuLayout: function(t) {
                this[d["d"].MENU_LAYOUT_TYPE](t.type), window.location.reload();
              },
              signOutConfirm: function() {
                this[p["mutations"].SET_ACCOUNT]();
              },
              signOut: function() {
                var t = this;
                this.$confirm(this.$t("account.signOutAsk"), this.$t("tip"), {
                  type: "warning"
                })
                  .then(function() {
                    t[p["mutations"].SET_ACCOUNT]();
                  })
                  .catch(function() {
                    t.$message(t.$t("account.signOutCancel"));
                  });
              },
              changePassword: function() {
                this.$router.push({
                  path: c["b"].Space.path,
                  query: { form_password: "show" }
                });
              }
            }
          )
        },
        g = _,
        b = (n("7f3b"), n("2877")),
        w = Object(b["a"])(g, a, o, !1, null, null, null);
      w.options.__file = "PageHeader.vue";
      e["default"] = w.exports;
    },
    "4c62": function(t, e, n) {},
    "4f6d": function(t, e, n) {},
    5348: function(t, e, n) {
      "use strict";
      n.r(e);
      var a = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            { staticClass: "user-info" },
            [
              n("avatar", { attrs: { url: t.user.avatar } }),
              n("div", { staticClass: "info" }, [
                t.user.organ_name
                  ? n("div", { staticClass: "organ" }, [
                      t._v(t._s(t.user.organ_name))
                    ])
                  : t._e(),
                n("div", { staticClass: "name" }, [t._v(t._s(t.user.name))]),
                n("div", { staticClass: "role" }, [
                  t._v(t._s(t.currentRole.name))
                ])
              ]),
              t._t("default")
            ],
            2
          );
        },
        o = [],
        r = n("1cbf"),
        i = {
          name: "UserInfo",
          components: { Avatar: r["default"] },
          props: {
            user: { type: Object, required: !0 },
            currentRole: { type: Object, required: !0 }
          }
        },
        c = i,
        s = (n("54f4"), n("2877")),
        u = Object(s["a"])(c, a, o, !1, null, null, null);
      u.options.__file = "UserInfo.vue";
      e["default"] = u.exports;
    },
    "54f4": function(t, e, n) {
      "use strict";
      var a = n("4383"),
        o = n.n(a);
      o.a;
    },
    "5d83": function(t, e, n) {
      "use strict";
      var a = n("8859"),
        o = n.n(a);
      o.a;
    },
    "5dbc": function(t, e, n) {
      var a = n("d3f4"),
        o = n("8b97").set;
      t.exports = function(t, e, n) {
        var r,
          i = e.constructor;
        return (
          i !== n &&
            "function" == typeof i &&
            (r = i.prototype) !== n.prototype &&
            a(r) &&
            o &&
            o(t, r),
          t
        );
      };
    },
    "7f3b": function(t, e, n) {
      "use strict";
      var a = n("e46b"),
        o = n.n(a);
      o.a;
    },
    8859: function(t, e, n) {},
    "8b97": function(t, e, n) {
      var a = n("d3f4"),
        o = n("cb7c"),
        r = function(t, e) {
          if ((o(t), !a(e) && null !== e))
            throw TypeError(e + ": can't set as prototype!");
        };
      t.exports = {
        set:
          Object.setPrototypeOf ||
          ("__proto__" in {}
            ? (function(t, e, a) {
                try {
                  (a = n("9b43")(
                    Function.call,
                    n("11e9").f(Object.prototype, "__proto__").set,
                    2
                  )),
                    a(t, []),
                    (e = !(t instanceof Array));
                } catch (o) {
                  e = !0;
                }
                return function(t, n) {
                  return r(t, n), e ? (t.__proto__ = n) : a(t, n), t;
                };
              })({}, !1)
            : void 0),
        check: r
      };
    },
    9414: function(t, e, n) {
      "use strict";
      n.r(e);
      var a = function() {
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
                  t._l(t.children, function(e, a) {
                    return n(
                      "nav-menu-item",
                      t._g(
                        {
                          key: a,
                          attrs: {
                            icon: e.icon,
                            fullIndex: t.fullIndex + "-" + a,
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
        o = [],
        r = {
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
        i = r,
        c = (n("d659"), n("2877")),
        s = Object(c["a"])(i, a, o, !1, null, null, null);
      s.options.__file = "NavMenuItem.vue";
      e["default"] = s.exports;
    },
    a479: function(t, e, n) {},
    a740: function(t, e, n) {},
    aa77: function(t, e, n) {
      var a = n("5ca1"),
        o = n("be13"),
        r = n("79e5"),
        i = n("fdef"),
        c = "[" + i + "]",
        s = "​",
        u = RegExp("^" + c + c + "*"),
        l = RegExp(c + c + "*$"),
        f = function(t, e, n) {
          var o = {},
            c = r(function() {
              return !!i[t]() || s[t]() != s;
            }),
            u = (o[t] = c ? e(d) : i[t]);
          n && (o[n] = u), a(a.P + a.F * c, "String", o);
        },
        d = (f.trim = function(t, e) {
          return (
            (t = String(o(t))),
            1 & e && (t = t.replace(u, "")),
            2 & e && (t = t.replace(l, "")),
            t
          );
        });
      t.exports = f;
    },
    ab24: function(t, e, n) {
      "use strict";
      var a = n("4f6d"),
        o = n.n(a);
      o.a;
    },
    ae71: function(t, e, n) {
      "use strict";
      var a = n("a479"),
        o = n.n(a);
      o.a;
    },
    c5f6: function(t, e, n) {
      "use strict";
      var a = n("7726"),
        o = n("69a8"),
        r = n("2d95"),
        i = n("5dbc"),
        c = n("6a99"),
        s = n("79e5"),
        u = n("9093").f,
        l = n("11e9").f,
        f = n("86cc").f,
        d = n("aa77").trim,
        p = "Number",
        m = a[p],
        h = m,
        v = m.prototype,
        _ = r(n("2aeb")(v)) == p,
        g = "trim" in String.prototype,
        b = function(t) {
          var e = c(t, !1);
          if ("string" == typeof e && e.length > 2) {
            e = g ? e.trim() : d(e, 3);
            var n,
              a,
              o,
              r = e.charCodeAt(0);
            if (43 === r || 45 === r) {
              if (((n = e.charCodeAt(2)), 88 === n || 120 === n)) return NaN;
            } else if (48 === r) {
              switch (e.charCodeAt(1)) {
                case 66:
                case 98:
                  (a = 2), (o = 49);
                  break;
                case 79:
                case 111:
                  (a = 8), (o = 55);
                  break;
                default:
                  return +e;
              }
              for (var i, s = e.slice(2), u = 0, l = s.length; u < l; u++)
                if (((i = s.charCodeAt(u)), i < 48 || i > o)) return NaN;
              return parseInt(s, a);
            }
          }
          return +e;
        };
      if (!m(" 0o1") || !m("0b1") || m("+0x1")) {
        m = function(t) {
          var e = arguments.length < 1 ? 0 : t,
            n = this;
          return n instanceof m &&
            (_
              ? s(function() {
                  v.valueOf.call(n);
                })
              : r(n) != p)
            ? i(new h(b(e)), n, m)
            : b(e);
        };
        for (
          var w,
            y = n("9e1e")
              ? u(h)
              : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(
                  ","
                ),
            O = 0;
          y.length > O;
          O++
        )
          o(h, (w = y[O])) && !o(m, w) && f(m, w, l(h, w));
        (m.prototype = v), (v.constructor = m), n("2aba")(a, p, m);
      }
    },
    c6e5: function(t, e, n) {
      "use strict";
      var a = n("435e"),
        o = n.n(a);
      o.a;
    },
    d659: function(t, e, n) {
      "use strict";
      var a = n("4c62"),
        o = n.n(a);
      o.a;
    },
    ddd6: function(t, e, n) {
      "use strict";
      n.r(e);
      var a = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", { staticClass: "page-footer" }, [
            n("span", [t._v(t._s(t.$t("page.footer.info")))])
          ]);
        },
        o = [],
        r = { name: "PageFooter" },
        i = r,
        c = (n("c6e5"), n("2877")),
        s = Object(c["a"])(i, a, o, !1, null, null, null);
      s.options.__file = "PageFooter.vue";
      e["default"] = s.exports;
    },
    df81: function(t, e, n) {
      "use strict";
      var a = n("a740"),
        o = n.n(a);
      o.a;
    },
    e46b: function(t, e, n) {},
    fdef: function(t, e) {
      t.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff";
    }
  }
]);
//# sourceMappingURL=chunk-4f7e21b5.fc5e8937.js.map
