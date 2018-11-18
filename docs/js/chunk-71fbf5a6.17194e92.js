(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-71fbf5a6", "chunk-248968af", "chunk-07e5f36c", "chunk-736890db"],
  {
    "1cbf": function(t, e, n) {
      "use strict";
      n.r(e);
      var o = function() {
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
        a = [],
        r = { name: "Avatar", props: { url: String } },
        i = r,
        s = (n("df81"), n("2877")),
        c = Object(s["a"])(i, o, a, !1, null, null, null);
      c.options.__file = "Avatar.vue";
      e["default"] = c.exports;
    },
    "417b": function(t, e, n) {
      "use strict";
      n.r(e);
      var o = function() {
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
                t._l(t.list, function(e, o) {
                  return n(
                    "el-dropdown-item",
                    {
                      key: o,
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
        a = [],
        r = (n("ac6a"), n("8615"), n("be94")),
        i = n("cec7"),
        s = n("756e"),
        c = n("5991"),
        u = n("5880"),
        l = Object(u["createNamespacedHelpers"])(c["a"].i18n),
        p = l.mapState,
        f = l.mapMutations,
        d = {
          name: "SwitchLanguage",
          mixins: [],
          components: {},
          props: { className: { type: String, default: "sign-in" } },
          data: function() {
            return {};
          },
          computed: Object(r["a"])(
            {},
            p({
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
          methods: Object(r["a"])({}, f([s["mutations"].SET_LANG]), {
            switchLanguage: function(t) {
              this[s["mutations"].SET_LANG](t), window.location.reload();
            }
          })
        },
        v = d,
        _ = (n("5d83"), n("2877")),
        m = Object(_["a"])(v, o, a, !1, null, null, null);
      m.options.__file = "SwitchLanguage.vue";
      e["default"] = m.exports;
    },
    4383: function(t, e, n) {},
    "47c0": function(t, e, n) {
      "use strict";
      n.r(e);
      var o = function() {
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
        a = [],
        r = (n("6b54"), n("be94")),
        i = n("417b"),
        s = n("12e1"),
        c = n("5348"),
        u = n("f21c"),
        l = n.n(u),
        p = n("6e37"),
        f = n("0fe8"),
        d = n("5be4"),
        v = n("5991"),
        _ = n("5880"),
        m = Object(_["createNamespacedHelpers"])(v["a"].account),
        h = {
          name: "PageHeader",
          mixins: [],
          components: {
            ElPopoverDialog: l.a,
            UserInfo: c["default"],
            SwitchLanguage: i["default"]
          },
          props: {},
          data: function() {
            return { menuLayouts: p["a"] };
          },
          computed: Object(r["a"])(
            {},
            Object(_["mapState"])(["menuLayoutType"]),
            m.mapState(["user", "currentRole"])
          ),
          watch: {},
          created: function() {},
          mounted: function() {
            this.$nextTick(function() {});
          },
          beforeDestroy: function() {},
          methods: Object(r["a"])(
            {},
            Object(_["mapMutations"])([f["d"].MENU_LAYOUT_TYPE]),
            m.mapMutations([
              d["mutations"].SET_ACCOUNT,
              d["mutations"].SWITCH_ROLE
            ]),
            m.mapActions([d["actions"].GET_ROLE_MENU]),
            {
              switchRole: function(t) {
                "[object Array]" === Object.prototype.toString.call(t.menu)
                  ? this[d["mutations"].SWITCH_ROLE]({ role: t })
                  : this[d["actions"].GET_ROLE_MENU](t);
              },
              switchMenuLayout: function(t) {
                this[f["d"].MENU_LAYOUT_TYPE](t.type), window.location.reload();
              },
              signOutConfirm: function() {
                this[d["mutations"].SET_ACCOUNT]();
              },
              signOut: function() {
                var t = this;
                this.$confirm(this.$t("account.signOutAsk"), this.$t("tip"), {
                  type: "warning"
                })
                  .then(function() {
                    t[d["mutations"].SET_ACCOUNT]();
                  })
                  .catch(function() {
                    t.$message(t.$t("account.signOutCancel"));
                  });
              },
              changePassword: function() {
                this.$router.push({
                  path: s["b"].Space.path,
                  query: { form_password: "show" }
                });
              }
            }
          )
        },
        g = h,
        b = (n("7f3b"), n("2877")),
        w = Object(b["a"])(g, o, a, !1, null, null, null);
      w.options.__file = "PageHeader.vue";
      e["default"] = w.exports;
    },
    5348: function(t, e, n) {
      "use strict";
      n.r(e);
      var o = function() {
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
        a = [],
        r = n("1cbf"),
        i = {
          name: "UserInfo",
          components: { Avatar: r["default"] },
          props: {
            user: { type: Object, required: !0 },
            currentRole: { type: Object, required: !0 }
          }
        },
        s = i,
        c = (n("54f4"), n("2877")),
        u = Object(c["a"])(s, o, a, !1, null, null, null);
      u.options.__file = "UserInfo.vue";
      e["default"] = u.exports;
    },
    "54f4": function(t, e, n) {
      "use strict";
      var o = n("4383"),
        a = n.n(o);
      a.a;
    },
    "5d83": function(t, e, n) {
      "use strict";
      var o = n("8859"),
        a = n.n(o);
      a.a;
    },
    "7f3b": function(t, e, n) {
      "use strict";
      var o = n("e46b"),
        a = n.n(o);
      a.a;
    },
    8859: function(t, e, n) {},
    a740: function(t, e, n) {},
    df81: function(t, e, n) {
      "use strict";
      var o = n("a740"),
        a = n.n(o);
      a.a;
    },
    e46b: function(t, e, n) {},
    f21c: function(t, e, n) {
      !(function(e, o) {
        t.exports = o(n("5c96"));
      })(window, function(t) {
        return (function(t) {
          var e = {};
          function n(o) {
            if (e[o]) return e[o].exports;
            var a = (e[o] = { i: o, l: !1, exports: {} });
            return t[o].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
          }
          return (
            (n.m = t),
            (n.c = e),
            (n.d = function(t, e, o) {
              n.o(t, e) ||
                Object.defineProperty(t, e, { enumerable: !0, get: o });
            }),
            (n.r = function(t) {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Module"
                }),
                Object.defineProperty(t, "__esModule", { value: !0 });
            }),
            (n.t = function(t, e) {
              if ((1 & e && (t = n(t)), 8 & e)) return t;
              if (4 & e && "object" == typeof t && t && t.__esModule) return t;
              var o = Object.create(null);
              if (
                (n.r(o),
                Object.defineProperty(o, "default", {
                  enumerable: !0,
                  value: t
                }),
                2 & e && "string" != typeof t)
              )
                for (var a in t)
                  n.d(
                    o,
                    a,
                    function(e) {
                      return t[e];
                    }.bind(null, a)
                  );
              return o;
            }),
            (n.n = function(t) {
              var e =
                t && t.__esModule
                  ? function() {
                      return t.default;
                    }
                  : function() {
                      return t;
                    };
              return n.d(e, "a", e), e;
            }),
            (n.o = function(t, e) {
              return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (n.p = ""),
            n((n.s = 1))
          );
        })([
          function(e, n) {
            e.exports = t;
          },
          function(t, e, n) {
            "use strict";
            n.r(e),
              n.d(e, "ElPopoverDialog", function() {
                return o;
              });
            var o = n(2).default,
              a = void 0;
            function r(t) {
              a
                ? console.warn(
                    "[ElPopoverDialog] already installed. Vue.use(ElPopoverDialog) should be called only once."
                  )
                : (a = t).component(o.name, o);
            }
            (o.install = r),
              "undefined" != typeof window && window.Vue && r(window.Vue);
          },
          function(t, e, n) {
            "use strict";
            n.r(e);
            var o = function() {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                "el-popover",
                t._g(
                  t._b(
                    {
                      staticClass: "popover-dialog",
                      attrs: { placement: t.$attrs.placement || "top" },
                      model: {
                        value: t.visible,
                        callback: function(e) {
                          t.visible = e;
                        },
                        expression: "visible"
                      }
                    },
                    "el-popover",
                    t.$attrs,
                    !1
                  ),
                  t.$listeners
                ),
                [
                  t.popoverContentShow
                    ? n("p", { staticClass: "popover-content" }, [
                        t._v(t._s(t.popoverContent))
                      ])
                    : t._e(),
                  t._v(" "),
                  t._t("popover-content", null, { hide: t.hide }),
                  t._v(" "),
                  t.showConfirmButton || t.showCancelButton
                    ? n(
                        "div",
                        {
                          staticClass: "popover-btn",
                          style: t.popoverBtnStyle
                        },
                        [
                          t.showCancelButton
                            ? n(
                                "el-button",
                                {
                                  staticClass: "cancel-btn",
                                  attrs: { type: "text", size: "mini" },
                                  on: { click: t.cancel }
                                },
                                [t._v(t._s(t.cancelButtonText) + "\n    ")]
                              )
                            : t._e(),
                          t._v(" "),
                          t.showConfirmButton
                            ? n(
                                "el-button",
                                {
                                  staticClass: "confirm-btn",
                                  attrs: { type: "primary", size: "mini" },
                                  on: { click: t.confirm }
                                },
                                [
                                  t._v(
                                    "\n      " +
                                      t._s(t.confirmButtonText) +
                                      "\n    "
                                  )
                                ]
                              )
                            : t._e(),
                          t._v(" "),
                          t._t("popover-btn", null, { hide: t.hide })
                        ],
                        2
                      )
                    : t._e(),
                  t._v(" "),
                  n(
                    "span",
                    {
                      staticClass: "reference",
                      attrs: { slot: "reference" },
                      slot: "reference"
                    },
                    [
                      t.btnShow
                        ? n(
                            "el-button",
                            t._b(
                              {
                                staticClass: "reference-btn",
                                style: t.btnStyle,
                                attrs: { size: t.btnSize, type: t.btnType }
                              },
                              "el-button",
                              t.$attrs,
                              !1
                            ),
                            [t._v(t._s(t.btnTxt) + "\n    ")]
                          )
                        : t._e(),
                      t._v(" "),
                      t._t("reference", null, { hide: t.hide })
                    ],
                    2
                  )
                ],
                2
              );
            };
            o._withStripped = !0;
            var a = n(0),
              r = (function(t, e, n, o, a, r, i, s) {
                var c,
                  u = "function" == typeof t ? t.options : t;
                if (
                  (e &&
                    ((u.render = e),
                    (u.staticRenderFns = n),
                    (u._compiled = !0)),
                  o && (u.functional = !0),
                  r && (u._scopeId = "data-v-" + r),
                  i
                    ? ((c = function(t) {
                        (t =
                          t ||
                          (this.$vnode && this.$vnode.ssrContext) ||
                          (this.parent &&
                            this.parent.$vnode &&
                            this.parent.$vnode.ssrContext)) ||
                          "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                          (t = __VUE_SSR_CONTEXT__),
                          a && a.call(this, t),
                          t &&
                            t._registeredComponents &&
                            t._registeredComponents.add(i);
                      }),
                      (u._ssrRegister = c))
                    : a &&
                      (c = s
                        ? function() {
                            a.call(this, this.$root.$options.shadowRoot);
                          }
                        : a),
                  c)
                )
                  if (u.functional) {
                    u._injectStyles = c;
                    var l = u.render;
                    u.render = function(t, e) {
                      return c.call(e), l(t, e);
                    };
                  } else {
                    var p = u.beforeCreate;
                    u.beforeCreate = p ? [].concat(p, c) : [c];
                  }
                return { exports: t, options: u };
              })(
                {
                  name: "ElPopoverDialog",
                  components: {
                    "el-button": a.Button,
                    "el-popover": a.Popover
                  },
                  inheritAttrs: !1,
                  props: {
                    popoverContentShow: { type: Boolean, default: !0 },
                    popoverContent: { type: String, default: "确认要删除？" },
                    popoverBtnStyle: {
                      type: String,
                      default: "text-align: right; margin: 0"
                    },
                    showCancelButton: { type: Boolean, default: !0 },
                    showConfirmButton: { type: Boolean, default: !0 },
                    cancelButtonText: { type: String, default: "取消" },
                    confirmButtonText: { type: String, default: "确定" },
                    btnShow: { type: Boolean, default: !0 },
                    btnTxt: { type: String, default: "删除" },
                    btnType: { type: String, default: "text" },
                    btnSize: { type: String, default: "" },
                    btnStyle: {
                      type: String,
                      default: "color:#f56c6c; margin-right: 0 !important;"
                    },
                    confirmHide: { type: Boolean, default: !0 }
                  },
                  data: function() {
                    return { visible: !1 };
                  },
                  methods: {
                    cancel: function() {
                      (this.visible = !1), this.$emit("cancel");
                    },
                    confirm: function() {
                      this.confirmHide && (this.visible = !1),
                        this.$emit("confirm");
                    },
                    hide: function(t) {
                      (this.visible = !1),
                        "[object Function]" ===
                          Object.prototype.toString.call(t) && t();
                    }
                  }
                },
                o,
                [],
                !1,
                null,
                null,
                null
              );
            (r.options.__file = "src/ElPopoverDialog.vue"),
              (e.default = r.exports);
          }
        ]).ElPopoverDialog;
      });
    }
  }
]);
//# sourceMappingURL=chunk-71fbf5a6.17194e92.js.map
