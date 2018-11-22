(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-6f260eff", "chunk-2d50585a", "chunk-63f25890", "chunk-340f12fc"],
  {
    "0f93": function(e, t, n) {},
    "235d": function(e, t, n) {
      "use strict";
      var a = n("953b"),
        i = n.n(a);
      i.a;
    },
    "2a87": function(e, t, n) {
      "use strict";
      var a = n("35f1"),
        i = n.n(a);
      i.a;
    },
    "2ab2": function(e, t, n) {},
    "35f1": function(e, t, n) {},
    "46f6": function(e, t, n) {},
    5244: function(e, t, n) {
      "use strict";
      var a = n("be94"),
        i = n("0fe8"),
        r = n("5880");
      t["a"] = {
        data: function() {
          return { updateStoreOptions: !1 };
        },
        computed: Object(a["a"])(
          {},
          Object(r["mapState"])(["options"]),
          Object(r["mapGetters"])([i["c"].EMPTY_OPTIONS])
        ),
        created: function() {
          this[i["c"].EMPTY_OPTIONS] && this[i["a"].GET_OPTIONS]();
        },
        beforeDestroy: function() {
          this.updateStoreOptions && this[i["a"].GET_OPTIONS]();
        },
        methods: Object(a["a"])(
          {},
          Object(r["mapActions"])([i["a"].GET_OPTIONS])
        )
      };
    },
    "716c": function(e, t, n) {},
    "7d6e": function(e, t, n) {
      "use strict";
      n.r(t);
      var a = function() {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("div", { staticClass: "page-content" }, [
            e.headerShow
              ? n(
                  "div",
                  { staticClass: "content-header" },
                  [
                    e.headerTab
                      ? n("page-tab", e._b({}, "page-tab", e.$attrs, !1))
                      : e._e(),
                    e.headerBreadcrumb
                      ? n(
                          "page-breadcrumb",
                          e._b({}, "page-breadcrumb", e.$attrs, !1)
                        )
                      : e._e()
                  ],
                  1
                )
              : e._e(),
            n("div", { staticClass: "content-main" }, [e._t("default")], 2)
          ]);
        },
        i = [],
        r = (n("c5f6"), n("aaf7")),
        s = n("d37b"),
        o = {
          name: "PageContent",
          mixins: [],
          components: { PageBreadcrumb: r["default"], PageTab: s["default"] },
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
        c = o,
        u = (n("235d"), n("2877")),
        l = Object(u["a"])(c, a, i, !1, null, null, null);
      l.options.__file = "PageContent.vue";
      t["default"] = l.exports;
    },
    "85a8": function(e, t, n) {
      "use strict";
      var a = n("716c"),
        i = n.n(a);
      i.a;
    },
    "8bbd": function(e, t, n) {
      "use strict";
      var a = n("2ab2"),
        i = n.n(a);
      i.a;
    },
    9431: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = function() {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "el-form",
            {
              ref: "form",
              staticClass: "form-add-edit",
              attrs: {
                "label-width": "120px",
                model: e.formData,
                rules: e.formRules,
                disabled: e.disabled
              }
            },
            [
              n(
                "el-form-item",
                {
                  attrs: {
                    label: e.$t("page.content.roleName"),
                    prop: "name",
                    rules: e.formRules.required
                  }
                },
                [
                  n("el-input", {
                    model: {
                      value: e.formData.name,
                      callback: function(t) {
                        e.$set(e.formData, "name", t);
                      },
                      expression: "formData.name"
                    }
                  })
                ],
                1
              ),
              n(
                "el-form-item",
                {
                  attrs: {
                    label: e.$t("page.content.menuPermissions"),
                    prop: "permissions",
                    rules: e.formRules.required
                  }
                },
                [
                  n("el-tree", {
                    ref: "tree",
                    attrs: {
                      "show-checkbox": "",
                      "default-expand-all": "",
                      "node-key": "id",
                      "highlight-current": "",
                      data: e.menus,
                      props: { children: "children", label: "title" }
                    },
                    on: { "check-change": e.getCheckedKeys }
                  })
                ],
                1
              ),
              e.options.permissions.length
                ? n(
                    "el-form-item",
                    { attrs: { label: e.$t("page.content.otherPermissions") } },
                    [
                      n(
                        "el-checkbox",
                        {
                          attrs: { indeterminate: e.isIndeterminate },
                          on: { change: e.handleCheckAllOtherPermissions },
                          model: {
                            value: e.checkAll,
                            callback: function(t) {
                              e.checkAll = t;
                            },
                            expression: "checkAll"
                          }
                        },
                        [e._v(e._s(e.$t("action.selectAll")) + "\n    ")]
                      ),
                      n(
                        "el-checkbox-group",
                        {
                          on: { change: e.handleCheckedOtherPermissions },
                          model: {
                            value: e.otherPermissions,
                            callback: function(t) {
                              e.otherPermissions = t;
                            },
                            expression: "otherPermissions"
                          }
                        },
                        e._l(e.options.permissions, function(t) {
                          return n(
                            "el-checkbox",
                            { key: t.value, attrs: { label: t.value } },
                            [e._v(e._s(t.text) + "\n      ")]
                          );
                        })
                      )
                    ],
                    1
                  )
                : e._e(),
              e.disabled
                ? e._e()
                : n(
                    "el-form-item",
                    { staticClass: "form-item-btn" },
                    [
                      n(
                        "el-button",
                        {
                          on: {
                            click: function(t) {
                              e.reset(e.$refs["form"]);
                            }
                          }
                        },
                        [e._v(e._s(e.$t("action.reset")))]
                      ),
                      n(
                        "el-button",
                        {
                          attrs: {
                            type: "primary",
                            loading: e.formSubmitLoading
                          },
                          on: {
                            click: function(t) {
                              e.submit(e.$refs["form"]);
                            }
                          }
                        },
                        [
                          e._v(
                            "\n      " + e._s(e.$t("action.submit")) + "\n    "
                          )
                        ]
                      )
                    ],
                    1
                  )
            ],
            1
          );
        },
        i = [],
        r = (n("96cf"), n("1da1")),
        s = (n("7514"), n("ca0f")),
        o = n("cc5e"),
        c = {
          mixins: [s["a"]],
          components: {},
          data: function() {
            return {
              api: o["a"],
              menus: [],
              isIndeterminate: !1,
              checkAll: !1,
              otherPermissions: [],
              formData: { name: "", permissions: [] }
            };
          },
          computed: {
            otherPermissionsOptionIds: function() {
              return this.options.permissions.map(function(e) {
                return e.value;
              });
            }
          },
          created: function() {
            var e = this;
            o["a"].fn.menus().then(function(t) {
              (e.menus = t.data.results), e.retrieveFinish();
            });
          },
          methods: {
            handleCheckAllOtherPermissions: function(e) {
              (this.otherPermissions = e ? this.otherPermissionsOptionIds : []),
                (this.isIndeterminate = !1);
            },
            handleCheckedOtherPermissions: function(e) {
              var t = e.length;
              (this.checkAll = t === this.options.permissions.length),
                (this.isIndeterminate =
                  t > 0 && t < this.options.permissions.length);
            },
            getCheckedKeys: function() {
              this.formData.permissions = this.$refs.tree
                .getCheckedKeys()
                .filter(Boolean);
            },
            retrieveFinish: function() {
              var e = this;
              (this.otherPermissions = this.otherPermissionsOptionIds.filter(
                function(t) {
                  return e.formData.permissions.find(function(e) {
                    return t === e;
                  });
                }
              )),
                this.handleCheckedOtherPermissions(this.otherPermissions),
                this.$nextTick(function() {
                  this.$refs.tree &&
                    this.$refs.tree.setCheckedKeys(
                      this.formData.permissions || []
                    );
                });
            },
            beforeSubmit: (function() {
              var e = Object(r["a"])(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(
                    function(e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            this.formData.permissions = this.formData.permissions.concat(
                              this.otherPermissions
                            );
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              );
              return function() {
                return e.apply(this, arguments);
              };
            })()
          }
        },
        u = c,
        l = (n("85a8"), n("2877")),
        d = Object(l["a"])(u, a, i, !1, null, null, null);
      d.options.__file = "Form.vue";
      t["default"] = d.exports;
    },
    "953b": function(e, t, n) {},
    "9e11": function(e, t, n) {
      !(function(t, n) {
        e.exports = n();
      })(window, function() {
        return (function(e) {
          var t = {};
          function n(a) {
            if (t[a]) return t[a].exports;
            var i = (t[a] = { i: a, l: !1, exports: {} });
            return e[a].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
          }
          return (
            (n.m = e),
            (n.c = t),
            (n.d = function(e, t, a) {
              n.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: a });
            }),
            (n.r = function(e) {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module"
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (n.t = function(e, t) {
              if ((1 & t && (e = n(e)), 8 & t)) return e;
              if (4 & t && "object" == typeof e && e && e.__esModule) return e;
              var a = Object.create(null);
              if (
                (n.r(a),
                Object.defineProperty(a, "default", {
                  enumerable: !0,
                  value: e
                }),
                2 & t && "string" != typeof e)
              )
                for (var i in e)
                  n.d(
                    a,
                    i,
                    function(t) {
                      return e[t];
                    }.bind(null, i)
                  );
              return a;
            }),
            (n.n = function(e) {
              var t =
                e && e.__esModule
                  ? function() {
                      return e.default;
                    }
                  : function() {
                      return e;
                    };
              return n.d(t, "a", t), t;
            }),
            (n.o = function(e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (n.p = ""),
            n((n.s = 6))
          );
        })({
          6: function(e, t) {
            e.exports = function(e, t, n) {
              if (
                "[object Object]" === Object.prototype.toString.call(e) &&
                "[object String]" === Object.prototype.toString.call(t)
              ) {
                for (
                  var a = t.split("."), i = 0, r = a.length;
                  "[object Object]" === Object.prototype.toString.call(e) &&
                  i < r;

                )
                  e = e[a[i++]];
                return i && i == r ? e : n;
              }
              return n;
            };
          }
        });
      });
    },
    aaf7: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = function() {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return e.pageBreadcrumb.length > 1
            ? n(
                "el-breadcrumb",
                { staticClass: "page-breadcrumb", attrs: { separator: "/" } },
                [
                  e._l(e.pageBreadcrumb, function(t, a) {
                    return [
                      t.title
                        ? n("el-breadcrumb-item", { key: a }, [
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
        i = [],
        r = (n("a481"), n("6762"), n("2fdb"), n("be94")),
        s = n("7a0f"),
        o = n("5991"),
        c = n("5880"),
        u = Object(c["createNamespacedHelpers"])(o["a"].pages),
        l = u.mapGetters,
        d = {
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
          computed: Object(r["a"])({}, l([s["getters"].GET_BREADCRUMB]), {
            pageBreadcrumb: function() {
              return this.concat
                ? this[s["getters"].GET_BREADCRUMB](this.$route.path).concat(
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
        f = d,
        h = (n("c3f0"), n("2877")),
        m = Object(h["a"])(f, a, i, !1, null, null, null);
      m.options.__file = "PageBreadcrumb.vue";
      t["default"] = m.exports;
    },
    ab51: function(e, t, n) {
      "use strict";
      var a = n("0f93"),
        i = n.n(a);
      i.a;
    },
    bd26: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = function() {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("page-add-edit", [n("common-form")], 1);
        },
        i = [],
        r = n("de73"),
        s = n("9431"),
        o = {
          components: { PageAddEdit: r["default"], CommonForm: s["default"] }
        },
        c = o,
        u = (n("ab51"), n("2877")),
        l = Object(u["a"])(c, a, i, !1, null, null, null);
      l.options.__file = "Item.vue";
      t["default"] = l.exports;
    },
    c3f0: function(e, t, n) {
      "use strict";
      var a = n("46f6"),
        i = n.n(a);
      i.a;
    },
    ca0f: function(e, t, n) {
      "use strict";
      n("96cf");
      var a = n("1da1"),
        i = (n("a481"), n("be94")),
        r = (n("6b54"), n("f751"), n("e49c")),
        s = n("5244"),
        o = n("9e11"),
        c = n.n(o),
        u = n("12e1"),
        l = n("0fe8"),
        d = n("7a0f"),
        f = n("5880"),
        h = n("5991"),
        m = Object(f["createNamespacedHelpers"])(h["a"].pages);
      t["a"] = {
        mixins: [r["a"], s["a"]],
        data: function() {
          return {
            pages: u["b"],
            resPathOfItem: "data",
            submitSuccessMessage: "提交成功",
            afterSubmitBack: !0
          };
        },
        computed: {
          disabled: function() {
            return Boolean(this.$route.query.disabled);
          },
          id: function() {
            return this.$route.query.id;
          },
          apiRetrieve: function() {
            return this.api.fn.retrieve;
          },
          apiUpdate: function() {
            return this.api.fn.update;
          },
          apiCreate: function() {
            return this.api.fn.create;
          }
        },
        created: function() {
          var e = this;
          this.id &&
            (this.$nextTick(function() {
              this[l["d"].LOADING_VISIBLE]({
                options: { target: ".page-add-edit .add-edit-main" }
              });
            }),
            this.apiRetrieve(this.id).then(function(t) {
              var n = c()(t, e.resPathOfItem);
              Object.assign(e.formData, n),
                e.$nextTick(function() {
                  this[l["d"].LOADING_VISIBLE]({ visible: !1 });
                }),
                "[object Function]" ===
                  Object.prototype.toString.call(e["retrieveFinish"]) &&
                  e["retrieveFinish"](),
                e.$emit("retrieve-finish", t);
            }));
        },
        methods: Object(i["a"])(
          {},
          Object(f["mapMutations"])([l["d"].LOADING_VISIBLE]),
          m.mapMutations([d["mutations"].SET_TABS]),
          {
            pickerOoptions: function() {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = e.disabledDateEdit,
                n = e.disabledDate,
                a = void 0 === n ? Date.now() : n,
                i = e.disabledDateOffset,
                r = void 0 === i ? 0 : i;
              return this.id
                ? void 0 === t
                  ? {}
                  : {
                      disabledDate: function(e) {
                        return e.getTime() < t + 864e5 * r;
                      }
                    }
                : {
                    disabledDate: function(e) {
                      return e.getTime() < a + 864e5 * r;
                    }
                  };
            },
            back: function() {
              var e = this.$route.path;
              this.$route.query.back_push ||
              history.length < 3 ||
              this.$store.state.pages.tabs.length < 2
                ? this.$router.push({
                    path: e.replace(/(\/add|\/edit).*$/, ""),
                    query: this.$route.query
                  })
                : this.$router.back(),
                this[d["mutations"].SET_TABS]({ path: e, remove: !0 });
            },
            submit: (function() {
              var e = Object(a["a"])(
                regeneratorRuntime.mark(function e(t) {
                  var n;
                  return regeneratorRuntime.wrap(
                    function(e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (((e.prev = 0), !t)) {
                              e.next = 4;
                              break;
                            }
                            return (e.next = 4), t.validate();
                          case 4:
                            if (
                              ((this.formSubmitLoading = !0),
                              "[object Function]" !==
                                Object.prototype.toString.call(
                                  this["beforeSubmit"]
                                ))
                            ) {
                              e.next = 15;
                              break;
                            }
                            return (
                              (e.prev = 6), (e.next = 9), this["beforeSubmit"]()
                            );
                          case 9:
                            e.next = 15;
                            break;
                          case 11:
                            return (
                              (e.prev = 11),
                              (e.t0 = e["catch"](6)),
                              (this.formSubmitLoading = !1),
                              e.abrupt("return", !1)
                            );
                          case 15:
                            if (((n = {}), !this.id)) {
                              e.next = 22;
                              break;
                            }
                            return (
                              (e.next = 19),
                              this.apiUpdate(this.id, this.formData)
                            );
                          case 19:
                            (n = e.sent), (e.next = 25);
                            break;
                          case 22:
                            return (e.next = 24), this.apiCreate(this.formData);
                          case 24:
                            n = e.sent;
                          case 25:
                            if (
                              "[object Function]" !==
                              Object.prototype.toString.call(
                                this["afterSubmit"]
                              )
                            ) {
                              e.next = 35;
                              break;
                            }
                            return (
                              (e.prev = 26),
                              (e.next = 29),
                              this["afterSubmit"](n)
                            );
                          case 29:
                            e.next = 35;
                            break;
                          case 31:
                            return (
                              (e.prev = 31),
                              (e.t1 = e["catch"](26)),
                              (this.formSubmitLoading = !1),
                              e.abrupt("return", !1)
                            );
                          case 35:
                            this.$emit("success", n),
                              this.submitSuccessMessage &&
                                this.$message({
                                  message: this.submitSuccessMessage,
                                  type: "success"
                                }),
                              this.afterSubmitBack && this.back(),
                              (this.formSubmitLoading = !1),
                              (e.next = 45);
                            break;
                          case 41:
                            return (
                              (e.prev = 41),
                              (e.t2 = e["catch"](0)),
                              (this.formSubmitLoading = !1),
                              e.abrupt("return", !1)
                            );
                          case 45:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                    [[0, 41], [6, 11], [26, 31]]
                  );
                })
              );
              return function(t) {
                return e.apply(this, arguments);
              };
            })()
          }
        )
      };
    },
    d37b: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = function() {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return e.tabs.length
            ? n(
                "el-tabs",
                {
                  staticClass: "page-tab",
                  attrs: { type: "card", closable: e.tabs.length > 1 },
                  on: { "tab-click": e.tabClick, "tab-remove": e.tabRemove },
                  model: {
                    value: e.selectedTabPath,
                    callback: function(t) {
                      e.selectedTabPath = t;
                    },
                    expression: "selectedTabPath"
                  }
                },
                e._l(e.tabs, function(t) {
                  return n("el-tab-pane", {
                    key: t.path,
                    attrs: {
                      label: e.tabTitle(t),
                      name: t.path,
                      disabled: e.tabs.length < 2
                    }
                  });
                })
              )
            : e._e();
        },
        i = [],
        r = (n("a481"), n("6762"), n("2fdb"), n("7f7f"), n("be94")),
        s = n("7a0f"),
        o = n("5991"),
        c = n("5880"),
        u = Object(c["createNamespacedHelpers"])(o["a"].pages),
        l = u.mapState,
        d = u.mapMutations,
        f = {
          name: "PageTab",
          mixins: [],
          components: {},
          props: {},
          data: function() {
            return { selectedTabPath: "" };
          },
          computed: Object(r["a"])({}, l(["tabs", "selectedTab"])),
          watch: {
            $route: {
              immediate: !0,
              deep: !0,
              handler: function(e) {
                this[s["mutations"].SET_TABS](e);
              }
            }
          },
          created: function() {
            var e = this;
            this.$store.watch(
              function(e) {
                return e.pages.selectedTab.path;
              },
              function(t) {
                (e.selectedTabPath = t),
                  e.$route.path !== t &&
                    e.$nextTick(function() {
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
          methods: Object(r["a"])({}, d([s["mutations"].SET_TABS]), {
            tabClick: function(e) {
              this[s["mutations"].SET_TABS]({ path: e.name });
            },
            tabRemove: function(e) {
              this[s["mutations"].SET_TABS]({ path: e, remove: !0 });
            },
            tabTitle: function(e) {
              return e.query.details && e.path.includes("edit")
                ? e.title.replace(this.$t("action.edit"), "") +
                    this.$t("action.details")
                : e.title;
            }
          })
        },
        h = f,
        m = (n("8bbd"), n("2877")),
        p = Object(m["a"])(h, a, i, !1, null, null, null);
      p.options.__file = "PageTab.vue";
      t["default"] = p.exports;
    },
    de73: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = function() {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("page-content", { staticClass: "page-add-edit" }, [
            n(
              "div",
              { staticClass: "add-edit-header" },
              [
                e.backBtn
                  ? n(
                      "el-button",
                      {
                        staticClass: "back-btn",
                        attrs: { size: "mini" },
                        on: { click: e.back }
                      },
                      [e._v(e._s(e.$t("action.close")))]
                    )
                  : e._e()
              ],
              1
            ),
            n("div", { staticClass: "add-edit-main" }, [e._t("default")], 2)
          ]);
        },
        i = [],
        r = (n("a481"), n("be94")),
        s = n("7d6e"),
        o = n("7a0f"),
        c = n("5991"),
        u = n("5880"),
        l = Object(u["createNamespacedHelpers"])(c["a"].pages),
        d = l.mapMutations,
        f = {
          name: "PageAddEdit",
          components: { PageContent: s["default"] },
          props: { backBtn: { type: Boolean, default: !0 } },
          methods: Object(r["a"])({}, d([o["mutations"].SET_TABS]), {
            back: function() {
              var e = this.$route.path;
              (history.length < 3 || this.$store.state.pages.tabs.length < 2) &&
                this.$router.push({ path: e.replace(/(\/add|\/edit).*$/, "") }),
                this[o["mutations"].SET_TABS]({ path: e, remove: !0 });
            }
          })
        },
        h = f,
        m = (n("2a87"), n("2877")),
        p = Object(m["a"])(h, a, i, !1, null, null, null);
      p.options.__file = "PageAddEdit.vue";
      t["default"] = p.exports;
    }
  }
]);
//# sourceMappingURL=chunk-6f260eff.d277a674.js.map
