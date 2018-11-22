(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-1c4c32cc"],
  {
    "10ae": function(t, e, a) {
      "use strict";
      var i = a("ccf8"),
        n = a.n(i);
      n.a;
    },
    "4e49": function(t, e, a) {
      "use strict";
      var i = a("be94"),
        n = a("c08c"),
        r = { index: "/announcement/" };
      e["a"] = { url: r, fn: Object(i["a"])({}, Object(n["a"])(r.index)) };
    },
    5244: function(t, e, a) {
      "use strict";
      var i = a("be94"),
        n = a("0fe8"),
        r = a("5880");
      e["a"] = {
        data: function() {
          return { updateStoreOptions: !1 };
        },
        computed: Object(i["a"])(
          {},
          Object(r["mapState"])(["options"]),
          Object(r["mapGetters"])([n["c"].EMPTY_OPTIONS])
        ),
        created: function() {
          this[n["c"].EMPTY_OPTIONS] && this[n["a"].GET_OPTIONS]();
        },
        beforeDestroy: function() {
          this.updateStoreOptions && this[n["a"].GET_OPTIONS]();
        },
        methods: Object(i["a"])(
          {},
          Object(r["mapActions"])([n["a"].GET_OPTIONS])
        )
      };
    },
    b5c6: function(t, e, a) {
      "use strict";
      a.r(e);
      var i = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "el-form",
            {
              ref: "form",
              staticClass: "form-add-edit",
              attrs: {
                "label-width": "120px",
                model: t.formData,
                rules: t.formRules,
                disabled: t.disabled
              }
            },
            [
              a(
                "el-form-item",
                {
                  attrs: {
                    label: t.$t("page.content.title"),
                    prop: "title",
                    rules: t.formRules.required
                  }
                },
                [
                  a("el-input", {
                    model: {
                      value: t.formData.title,
                      callback: function(e) {
                        t.$set(t.formData, "title", e);
                      },
                      expression: "formData.title"
                    }
                  })
                ],
                1
              ),
              a(
                "el-form-item",
                {
                  attrs: {
                    label: t.$t("page.content.content"),
                    prop: "content",
                    "show-message": !t.formData.content,
                    rules: t.formRules.required
                  }
                },
                [
                  a("editor", {
                    attrs: {
                      content: t.formData.content,
                      height: 200,
                      readonly: t.disabled
                    },
                    on: {
                      "update:content": function(e) {
                        t.$set(t.formData, "content", e);
                      }
                    }
                  })
                ],
                1
              ),
              a(
                "el-form-item",
                {
                  attrs: {
                    label: t.$t("page.content.type"),
                    prop: "type",
                    rules: t.formRules.required
                  }
                },
                [
                  a(
                    "el-select",
                    {
                      attrs: { placeholder: t.$t("action.pleaseSelect") },
                      model: {
                        value: t.formData.type,
                        callback: function(e) {
                          t.$set(t.formData, "type", e);
                        },
                        expression: "formData.type"
                      }
                    },
                    t._l(t.options.importance, function(t) {
                      return a("el-option", {
                        key: t.value,
                        attrs: { label: t.text, value: t.value }
                      });
                    })
                  )
                ],
                1
              ),
              a(
                "el-form-item",
                {
                  attrs: {
                    label: t.$t("page.content.top"),
                    prop: "top",
                    rules: t.formRules.required
                  }
                },
                [
                  a("el-switch", {
                    attrs: {
                      "active-value": 1,
                      "inactive-value": 0,
                      "active-text": t.$t("action.yes"),
                      "inactive-text": t.$t("action.no")
                    },
                    model: {
                      value: t.formData.top,
                      callback: function(e) {
                        t.$set(t.formData, "top", e);
                      },
                      expression: "formData.top"
                    }
                  })
                ],
                1
              ),
              a(
                "el-form-item",
                {
                  attrs: {
                    label: t.$t("page.content.attachment"),
                    prop: "attachment"
                  }
                },
                [
                  a("multiple-upload", {
                    attrs: {
                      "file-list": t.formData.attachment,
                      disabled: t.disabled
                    },
                    on: {
                      "update:fileList": function(e) {
                        t.$set(t.formData, "attachment", e);
                      }
                    }
                  })
                ],
                1
              ),
              t.disabled
                ? t._e()
                : a(
                    "el-form-item",
                    { staticClass: "form-item-btn" },
                    [
                      a(
                        "el-button",
                        {
                          on: {
                            click: function(e) {
                              t.reset(t.$refs["form"]);
                            }
                          }
                        },
                        [t._v(t._s(t.$t("action.reset")))]
                      ),
                      a(
                        "el-button",
                        {
                          attrs: {
                            type: "primary",
                            loading: t.formSubmitLoading
                          },
                          on: {
                            click: function(e) {
                              t.submit(t.$refs["form"]);
                            }
                          }
                        },
                        [
                          t._v(
                            "\n      " + t._s(t.$t("action.submit")) + "\n    "
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
        n = [],
        r = a("ca0f"),
        s = a("4e49"),
        o = a("2a07"),
        c = function() {
          return Promise.all([
            a.e("chunk-a1241e18"),
            a.e("chunk-677d9fbd"),
            a.e("chunk-d06bbda8")
          ]).then(a.bind(null, "76b1"));
        },
        u = {
          mixins: [r["a"]],
          components: { Editor: c, MultipleUpload: o["default"] },
          data: function() {
            return {
              api: s["a"],
              formData: {
                title: "",
                content: "",
                type: 1,
                top: 0,
                attachment: []
              }
            };
          },
          computed: {},
          methods: {}
        },
        l = u,
        f = (a("10ae"), a("2877")),
        p = Object(f["a"])(l, i, n, !1, null, null, null);
      p.options.__file = "Form.vue";
      e["default"] = p.exports;
    },
    ca0f: function(t, e, a) {
      "use strict";
      a("96cf");
      var i = a("1da1"),
        n = (a("a481"), a("be94")),
        r = (a("6b54"), a("f751"), a("e49c")),
        s = a("5244"),
        o = a("9e11"),
        c = a.n(o),
        u = a("12e1"),
        l = a("0fe8"),
        f = a("7a0f"),
        p = a("5880"),
        m = a("5991"),
        d = Object(p["createNamespacedHelpers"])(m["a"].pages);
      e["a"] = {
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
          var t = this;
          this.id &&
            (this.$nextTick(function() {
              this[l["d"].LOADING_VISIBLE]({
                options: { target: ".page-add-edit .add-edit-main" }
              });
            }),
            this.apiRetrieve(this.id).then(function(e) {
              var a = c()(e, t.resPathOfItem);
              Object.assign(t.formData, a),
                t.$nextTick(function() {
                  this[l["d"].LOADING_VISIBLE]({ visible: !1 });
                }),
                "[object Function]" ===
                  Object.prototype.toString.call(t["retrieveFinish"]) &&
                  t["retrieveFinish"](),
                t.$emit("retrieve-finish", e);
            }));
        },
        methods: Object(n["a"])(
          {},
          Object(p["mapMutations"])([l["d"].LOADING_VISIBLE]),
          d.mapMutations([f["mutations"].SET_TABS]),
          {
            pickerOoptions: function() {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                e = t.disabledDateEdit,
                a = t.disabledDate,
                i = void 0 === a ? Date.now() : a,
                n = t.disabledDateOffset,
                r = void 0 === n ? 0 : n;
              return this.id
                ? void 0 === e
                  ? {}
                  : {
                      disabledDate: function(t) {
                        return t.getTime() < e + 864e5 * r;
                      }
                    }
                : {
                    disabledDate: function(t) {
                      return t.getTime() < i + 864e5 * r;
                    }
                  };
            },
            back: function() {
              var t = this.$route.path;
              this.$route.query.back_push ||
              history.length < 3 ||
              this.$store.state.pages.tabs.length < 2
                ? this.$router.push({
                    path: t.replace(/(\/add|\/edit).*$/, ""),
                    query: this.$route.query
                  })
                : this.$router.back(),
                this[f["mutations"].SET_TABS]({ path: t, remove: !0 });
            },
            submit: (function() {
              var t = Object(i["a"])(
                regeneratorRuntime.mark(function t(e) {
                  var a;
                  return regeneratorRuntime.wrap(
                    function(t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (((t.prev = 0), !e)) {
                              t.next = 4;
                              break;
                            }
                            return (t.next = 4), e.validate();
                          case 4:
                            if (
                              ((this.formSubmitLoading = !0),
                              "[object Function]" !==
                                Object.prototype.toString.call(
                                  this["beforeSubmit"]
                                ))
                            ) {
                              t.next = 15;
                              break;
                            }
                            return (
                              (t.prev = 6), (t.next = 9), this["beforeSubmit"]()
                            );
                          case 9:
                            t.next = 15;
                            break;
                          case 11:
                            return (
                              (t.prev = 11),
                              (t.t0 = t["catch"](6)),
                              (this.formSubmitLoading = !1),
                              t.abrupt("return", !1)
                            );
                          case 15:
                            if (((a = {}), !this.id)) {
                              t.next = 22;
                              break;
                            }
                            return (
                              (t.next = 19),
                              this.apiUpdate(this.id, this.formData)
                            );
                          case 19:
                            (a = t.sent), (t.next = 25);
                            break;
                          case 22:
                            return (t.next = 24), this.apiCreate(this.formData);
                          case 24:
                            a = t.sent;
                          case 25:
                            if (
                              "[object Function]" !==
                              Object.prototype.toString.call(
                                this["afterSubmit"]
                              )
                            ) {
                              t.next = 35;
                              break;
                            }
                            return (
                              (t.prev = 26),
                              (t.next = 29),
                              this["afterSubmit"](a)
                            );
                          case 29:
                            t.next = 35;
                            break;
                          case 31:
                            return (
                              (t.prev = 31),
                              (t.t1 = t["catch"](26)),
                              (this.formSubmitLoading = !1),
                              t.abrupt("return", !1)
                            );
                          case 35:
                            this.$emit("success", a),
                              this.submitSuccessMessage &&
                                this.$message({
                                  message: this.submitSuccessMessage,
                                  type: "success"
                                }),
                              this.afterSubmitBack && this.back(),
                              (this.formSubmitLoading = !1),
                              (t.next = 45);
                            break;
                          case 41:
                            return (
                              (t.prev = 41),
                              (t.t2 = t["catch"](0)),
                              (this.formSubmitLoading = !1),
                              t.abrupt("return", !1)
                            );
                          case 45:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this,
                    [[0, 41], [6, 11], [26, 31]]
                  );
                })
              );
              return function(e) {
                return t.apply(this, arguments);
              };
            })()
          }
        )
      };
    },
    ccf8: function(t, e, a) {}
  }
]);
//# sourceMappingURL=chunk-1c4c32cc.52116e56.js.map
