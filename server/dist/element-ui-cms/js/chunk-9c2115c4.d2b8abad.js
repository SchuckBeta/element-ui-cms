(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-9c2115c4", "chunk-248968af", "chunk-07e5f36c", "chunk-736890db"],
  {
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
        s = [],
        o = { name: "Avatar", props: { url: String } },
        c = o,
        i = (n("df81"), n("2877")),
        r = Object(i["a"])(c, a, s, !1, null, null, null);
      r.options.__file = "Avatar.vue";
      e["default"] = r.exports;
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
        s = [],
        o = (n("ac6a"), n("8615"), n("be94")),
        c = n("cec7"),
        i = n("756e"),
        r = n("5991"),
        u = n("5880"),
        l = Object(u["createNamespacedHelpers"])(r["a"].i18n),
        d = l.mapState,
        p = l.mapMutations,
        f = {
          name: "SwitchLanguage",
          mixins: [],
          components: {},
          props: { className: { type: String, default: "sign-in" } },
          data: function() {
            return {};
          },
          computed: Object(o["a"])(
            {},
            d({
              locale: function(t) {
                return t.locale;
              }
            }),
            {
              list: function() {
                return Object.values(c["a"]);
              }
            }
          ),
          watch: {},
          created: function() {},
          mounted: function() {
            this.$nextTick(function() {});
          },
          beforeDestroy: function() {},
          methods: Object(o["a"])({}, p([i["mutations"].SET_LANG]), {
            switchLanguage: function(t) {
              this[i["mutations"].SET_LANG](t), window.location.reload();
            }
          })
        },
        m = f,
        _ = (n("5d83"), n("2877")),
        g = Object(_["a"])(m, a, s, !1, null, null, null);
      g.options.__file = "SwitchLanguage.vue";
      e["default"] = g.exports;
    },
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
        s = [],
        o = (n("6b54"), n("be94")),
        c = n("417b"),
        i = n("12e1"),
        r = n("5348"),
        u = n("f21c"),
        l = n.n(u),
        d = n("6e37"),
        p = n("0fe8"),
        f = n("5be4"),
        m = n("5991"),
        _ = n("5880"),
        g = Object(_["createNamespacedHelpers"])(m["a"].account),
        h = {
          name: "PageHeader",
          mixins: [],
          components: {
            ElPopoverDialog: l.a,
            UserInfo: r["default"],
            SwitchLanguage: c["default"]
          },
          props: {},
          data: function() {
            return { menuLayouts: d["a"] };
          },
          computed: Object(o["a"])(
            {},
            Object(_["mapState"])(["menuLayoutType"]),
            g.mapState(["user", "currentRole"])
          ),
          watch: {},
          created: function() {},
          mounted: function() {
            this.$nextTick(function() {});
          },
          beforeDestroy: function() {},
          methods: Object(o["a"])(
            {},
            Object(_["mapMutations"])([p["d"].MENU_LAYOUT_TYPE]),
            g.mapMutations([
              f["mutations"].SET_ACCOUNT,
              f["mutations"].SWITCH_ROLE
            ]),
            g.mapActions([f["actions"].GET_ROLE_MENU]),
            {
              switchRole: function(t) {
                "[object Array]" === Object.prototype.toString.call(t.menu)
                  ? this[f["mutations"].SWITCH_ROLE]({ role: t })
                  : this[f["actions"].GET_ROLE_MENU](t);
              },
              switchMenuLayout: function(t) {
                this[p["d"].MENU_LAYOUT_TYPE](t.type), window.location.reload();
              },
              signOutConfirm: function() {
                this[f["mutations"].SET_ACCOUNT]();
              },
              signOut: function() {
                var t = this;
                this.$confirm(this.$t("account.signOutAsk"), this.$t("tip"), {
                  type: "warning"
                })
                  .then(function() {
                    t[f["mutations"].SET_ACCOUNT]();
                  })
                  .catch(function() {
                    t.$message(t.$t("account.signOutCancel"));
                  });
              },
              changePassword: function() {
                this.$router.push({
                  path: i["b"].Space.path,
                  query: { form_password: "show" }
                });
              }
            }
          )
        },
        w = h,
        v = (n("7f3b"), n("2877")),
        b = Object(v["a"])(w, a, s, !1, null, null, null);
      b.options.__file = "PageHeader.vue";
      e["default"] = b.exports;
    },
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
        s = [],
        o = n("1cbf"),
        c = {
          name: "UserInfo",
          components: { Avatar: o["default"] },
          props: {
            user: { type: Object, required: !0 },
            currentRole: { type: Object, required: !0 }
          }
        },
        i = c,
        r = (n("54f4"), n("2877")),
        u = Object(r["a"])(i, a, s, !1, null, null, null);
      u.options.__file = "UserInfo.vue";
      e["default"] = u.exports;
    },
    "54f4": function(t, e, n) {
      "use strict";
      var a = n("4383"),
        s = n.n(a);
      s.a;
    },
    "5d83": function(t, e, n) {
      "use strict";
      var a = n("8859"),
        s = n.n(a);
      s.a;
    },
    "7f3b": function(t, e, n) {
      "use strict";
      var a = n("e46b"),
        s = n.n(a);
      s.a;
    },
    8859: function(t, e, n) {},
    a740: function(t, e, n) {},
    df81: function(t, e, n) {
      "use strict";
      var a = n("a740"),
        s = n.n(a);
      s.a;
    },
    e46b: function(t, e, n) {}
  }
]);
//# sourceMappingURL=chunk-9c2115c4.d2b8abad.js.map
