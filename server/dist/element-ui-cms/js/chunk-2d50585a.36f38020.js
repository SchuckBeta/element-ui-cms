(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-2d50585a"],
  {
    5244: function(e, t, i) {
      "use strict";
      var n = i("be94"),
        r = i("0fe8"),
        s = i("5880");
      t["a"] = {
        data: function() {
          return { updateStoreOptions: !1 };
        },
        computed: Object(n["a"])(
          {},
          Object(s["mapState"])(["options"]),
          Object(s["mapGetters"])([r["c"].EMPTY_OPTIONS])
        ),
        created: function() {
          this[r["c"].EMPTY_OPTIONS] && this[r["a"].GET_OPTIONS]();
        },
        beforeDestroy: function() {
          this.updateStoreOptions && this[r["a"].GET_OPTIONS]();
        },
        methods: Object(n["a"])(
          {},
          Object(s["mapActions"])([r["a"].GET_OPTIONS])
        )
      };
    },
    "716c": function(e, t, i) {},
    "85a8": function(e, t, i) {
      "use strict";
      var n = i("716c"),
        r = i.n(n);
      r.a;
    },
    9431: function(e, t, i) {
      "use strict";
      i.r(t);
      var n = function() {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
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
              i(
                "el-form-item",
                {
                  attrs: {
                    label: e.$t("page.content.roleName"),
                    prop: "name",
                    rules: e.formRules.required
                  }
                },
                [
                  i("el-input", {
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
              i(
                "el-form-item",
                {
                  attrs: {
                    label: e.$t("page.content.menuPermissions"),
                    prop: "permissions",
                    rules: e.formRules.required
                  }
                },
                [
                  i("el-tree", {
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
                ? i(
                    "el-form-item",
                    { attrs: { label: e.$t("page.content.otherPermissions") } },
                    [
                      i(
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
                      i(
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
                          return i(
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
                : i(
                    "el-form-item",
                    { staticClass: "form-item-btn" },
                    [
                      i(
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
                      i(
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
        r = [],
        s = (i("96cf"), i("1da1")),
        o = (i("7514"), i("ca0f")),
        a = i("cc5e"),
        c = {
          mixins: [o["a"]],
          components: {},
          data: function() {
            return {
              api: a["a"],
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
            a["a"].fn.menus().then(function(t) {
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
              var e = Object(s["a"])(
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
        h = (i("85a8"), i("2877")),
        l = Object(h["a"])(u, n, r, !1, null, null, null);
      l.options.__file = "Form.vue";
      t["default"] = l.exports;
    },
    "9e11": function(e, t, i) {
      !(function(t, i) {
        e.exports = i();
      })(window, function() {
        return (function(e) {
          var t = {};
          function i(n) {
            if (t[n]) return t[n].exports;
            var r = (t[n] = { i: n, l: !1, exports: {} });
            return e[n].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
          }
          return (
            (i.m = e),
            (i.c = t),
            (i.d = function(e, t, n) {
              i.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: n });
            }),
            (i.r = function(e) {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module"
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (i.t = function(e, t) {
              if ((1 & t && (e = i(e)), 8 & t)) return e;
              if (4 & t && "object" == typeof e && e && e.__esModule) return e;
              var n = Object.create(null);
              if (
                (i.r(n),
                Object.defineProperty(n, "default", {
                  enumerable: !0,
                  value: e
                }),
                2 & t && "string" != typeof e)
              )
                for (var r in e)
                  i.d(
                    n,
                    r,
                    function(t) {
                      return e[t];
                    }.bind(null, r)
                  );
              return n;
            }),
            (i.n = function(e) {
              var t =
                e && e.__esModule
                  ? function() {
                      return e.default;
                    }
                  : function() {
                      return e;
                    };
              return i.d(t, "a", t), t;
            }),
            (i.o = function(e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (i.p = ""),
            i((i.s = 6))
          );
        })({
          6: function(e, t) {
            e.exports = function(e, t, i) {
              if (
                "[object Object]" === Object.prototype.toString.call(e) &&
                "[object String]" === Object.prototype.toString.call(t)
              ) {
                for (
                  var n = t.split("."), r = 0, s = n.length;
                  "[object Object]" === Object.prototype.toString.call(e) &&
                  r < s;

                )
                  e = e[n[r++]];
                return r && r == s ? e : i;
              }
              return i;
            };
          }
        });
      });
    },
    ca0f: function(e, t, i) {
      "use strict";
      i("96cf");
      var n = i("1da1"),
        r = (i("a481"), i("be94")),
        s = (i("6b54"), i("f751"), i("e49c")),
        o = i("5244"),
        a = i("9e11"),
        c = i.n(a),
        u = i("12e1"),
        h = i("0fe8"),
        l = i("7a0f"),
        f = i("5880"),
        m = i("5991"),
        p = Object(f["createNamespacedHelpers"])(m["a"].pages);
      t["a"] = {
        mixins: [s["a"], o["a"]],
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
              this[h["d"].LOADING_VISIBLE]({
                options: { target: ".page-add-edit .add-edit-main" }
              });
            }),
            this.apiRetrieve(this.id).then(function(t) {
              var i = c()(t, e.resPathOfItem);
              Object.assign(e.formData, i),
                e.$nextTick(function() {
                  this[h["d"].LOADING_VISIBLE]({ visible: !1 });
                }),
                "[object Function]" ===
                  Object.prototype.toString.call(e["retrieveFinish"]) &&
                  e["retrieveFinish"](),
                e.$emit("retrieve-finish", t);
            }));
        },
        methods: Object(r["a"])(
          {},
          Object(f["mapMutations"])([h["d"].LOADING_VISIBLE]),
          p.mapMutations([l["mutations"].SET_TABS]),
          {
            pickerOoptions: function() {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = e.disabledDateEdit,
                i = e.disabledDate,
                n = void 0 === i ? Date.now() : i,
                r = e.disabledDateOffset,
                s = void 0 === r ? 0 : r;
              return this.id
                ? void 0 === t
                  ? {}
                  : {
                      disabledDate: function(e) {
                        return e.getTime() < t + 864e5 * s;
                      }
                    }
                : {
                    disabledDate: function(e) {
                      return e.getTime() < n + 864e5 * s;
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
                this[l["mutations"].SET_TABS]({ path: e, remove: !0 });
            },
            submit: (function() {
              var e = Object(n["a"])(
                regeneratorRuntime.mark(function e(t) {
                  var i;
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
                            if (((i = {}), !this.id)) {
                              e.next = 22;
                              break;
                            }
                            return (
                              (e.next = 19),
                              this.apiUpdate(this.id, this.formData)
                            );
                          case 19:
                            (i = e.sent), (e.next = 25);
                            break;
                          case 22:
                            return (e.next = 24), this.apiCreate(this.formData);
                          case 24:
                            i = e.sent;
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
                              this["afterSubmit"](i)
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
                            this.$emit("success", i),
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
    }
  }
]);
//# sourceMappingURL=chunk-2d50585a.36f38020.js.map
