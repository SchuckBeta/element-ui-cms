(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-39a253f0", "chunk-1c4c32cc", "chunk-63f25890", "chunk-340f12fc"],
  {
    "10ae": function(t, e, a) {
      "use strict";
      var n = a("ccf8"),
        i = a.n(n);
      i.a;
    },
    "235d": function(t, e, a) {
      "use strict";
      var n = a("953b"),
        i = a.n(n);
      i.a;
    },
    "2a87": function(t, e, a) {
      "use strict";
      var n = a("35f1"),
        i = a.n(n);
      i.a;
    },
    "2ab2": function(t, e, a) {},
    "329a": function(t, e, a) {
      "use strict";
      a.r(e);
      var n = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("page-add-edit", [a("common-form")], 1);
        },
        i = [],
        r = (a("cadf"), a("551c"), a("097d"), a("de73")),
        s = a("b5c6"),
        c = {
          components: { PageAddEdit: r["default"], CommonForm: s["default"] }
        },
        o = c,
        u = (a("fc88"), a("2877")),
        l = Object(u["a"])(o, n, i, !1, null, null, null);
      l.options.__file = "Item.vue";
      e["default"] = l.exports;
    },
    "35f1": function(t, e, a) {},
    "46f6": function(t, e, a) {},
    "4d05": function(t, e, a) {},
    "4e49": function(t, e, a) {
      "use strict";
      var n = a("be94"),
        i = a("c08c"),
        r = { index: "/announcement/" };
      e["a"] = { url: r, fn: Object(n["a"])({}, Object(i["a"])(r.index)) };
    },
    5244: function(t, e, a) {
      "use strict";
      var n = a("be94"),
        i = a("0fe8"),
        r = a("5880");
      e["a"] = {
        data: function() {
          return { updateStoreOptions: !1 };
        },
        computed: Object(n["a"])(
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
        methods: Object(n["a"])(
          {},
          Object(r["mapActions"])([i["a"].GET_OPTIONS])
        )
      };
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
        i = [],
        r = (a("c5f6"), a("aaf7")),
        s = a("d37b"),
        c = {
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
        o = c,
        u = (a("235d"), a("2877")),
        l = Object(u["a"])(o, n, i, !1, null, null, null);
      l.options.__file = "PageContent.vue";
      e["default"] = l.exports;
    },
    "8bbd": function(t, e, a) {
      "use strict";
      var n = a("2ab2"),
        i = a.n(n);
      i.a;
    },
    "953b": function(t, e, a) {},
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
        i = [],
        r = (a("a481"), a("6762"), a("2fdb"), a("be94")),
        s = a("7a0f"),
        c = a("5991"),
        o = a("5880"),
        u = Object(o["createNamespacedHelpers"])(c["a"].pages),
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
            breadcrumbTitle: function(t) {
              return this.$route.query.details &&
                this.$route.path.includes("edit")
                ? t.replace(this.$t("action.edit"), "") +
                    this.$t("action.details")
                : t;
            }
          }
        },
        f = d,
        b = (a("c3f0"), a("2877")),
        p = Object(b["a"])(f, n, i, !1, null, null, null);
      p.options.__file = "PageBreadcrumb.vue";
      e["default"] = p.exports;
    },
    b5c6: function(t, e, a) {
      "use strict";
      a.r(e);
      var n = function() {
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
        i = [],
        r = a("ca0f"),
        s = a("4e49"),
        c = a("2a07"),
        o = function() {
          return Promise.all([
            a.e("chunk-a1241e18"),
            a.e("chunk-677d9fbd"),
            a.e("chunk-d06bbda8")
          ]).then(a.bind(null, "76b1"));
        },
        u = {
          mixins: [r["a"]],
          components: { Editor: o, MultipleUpload: c["default"] },
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
        d = (a("10ae"), a("2877")),
        f = Object(d["a"])(l, n, i, !1, null, null, null);
      f.options.__file = "Form.vue";
      e["default"] = f.exports;
    },
    c3f0: function(t, e, a) {
      "use strict";
      var n = a("46f6"),
        i = a.n(n);
      i.a;
    },
    ca0f: function(t, e, a) {
      "use strict";
      a("96cf");
      var n = a("1da1"),
        i = (a("a481"), a("be94")),
        r = (a("6b54"), a("f751"), a("e49c")),
        s = a("5244"),
        c = a("9e11"),
        o = a.n(c),
        u = a("12e1"),
        l = a("0fe8"),
        d = a("7a0f"),
        f = a("5880"),
        b = a("5991"),
        p = Object(f["createNamespacedHelpers"])(b["a"].pages);
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
              var a = o()(e, t.resPathOfItem);
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
        methods: Object(i["a"])(
          {},
          Object(f["mapMutations"])([l["d"].LOADING_VISIBLE]),
          p.mapMutations([d["mutations"].SET_TABS]),
          {
            pickerOoptions: function() {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                e = t.disabledDateEdit,
                a = t.disabledDate,
                n = void 0 === a ? Date.now() : a,
                i = t.disabledDateOffset,
                r = void 0 === i ? 0 : i;
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
                      return t.getTime() < n + 864e5 * r;
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
                this[d["mutations"].SET_TABS]({ path: t, remove: !0 });
            },
            submit: (function() {
              var t = Object(n["a"])(
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
    ccf8: function(t, e, a) {},
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
                })
              )
            : t._e();
        },
        i = [],
        r = (a("a481"), a("6762"), a("2fdb"), a("7f7f"), a("be94")),
        s = a("7a0f"),
        c = a("5991"),
        o = a("5880"),
        u = Object(o["createNamespacedHelpers"])(c["a"].pages),
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
              handler: function(t) {
                this[s["mutations"].SET_TABS](t);
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
          methods: Object(r["a"])({}, d([s["mutations"].SET_TABS]), {
            tabClick: function(t) {
              this[s["mutations"].SET_TABS]({ path: t.name });
            },
            tabRemove: function(t) {
              this[s["mutations"].SET_TABS]({ path: t, remove: !0 });
            },
            tabTitle: function(t) {
              return t.query.details && t.path.includes("edit")
                ? t.title.replace(this.$t("action.edit"), "") +
                    this.$t("action.details")
                : t.title;
            }
          })
        },
        b = f,
        p = (a("8bbd"), a("2877")),
        m = Object(p["a"])(b, n, i, !1, null, null, null);
      m.options.__file = "PageTab.vue";
      e["default"] = m.exports;
    },
    de73: function(t, e, a) {
      "use strict";
      a.r(e);
      var n = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("page-content", { staticClass: "page-add-edit" }, [
            a(
              "div",
              { staticClass: "add-edit-header" },
              [
                t.backBtn
                  ? a(
                      "el-button",
                      {
                        staticClass: "back-btn",
                        attrs: { size: "mini" },
                        on: { click: t.back }
                      },
                      [t._v(t._s(t.$t("action.close")))]
                    )
                  : t._e()
              ],
              1
            ),
            a("div", { staticClass: "add-edit-main" }, [t._t("default")], 2)
          ]);
        },
        i = [],
        r = (a("a481"), a("be94")),
        s = a("7d6e"),
        c = a("7a0f"),
        o = a("5991"),
        u = a("5880"),
        l = Object(u["createNamespacedHelpers"])(o["a"].pages),
        d = l.mapMutations,
        f = {
          name: "PageAddEdit",
          components: { PageContent: s["default"] },
          props: { backBtn: { type: Boolean, default: !0 } },
          methods: Object(r["a"])({}, d([c["mutations"].SET_TABS]), {
            back: function() {
              var t = this.$route.path;
              (history.length < 3 || this.$store.state.pages.tabs.length < 2) &&
                this.$router.push({ path: t.replace(/(\/add|\/edit).*$/, "") }),
                this[c["mutations"].SET_TABS]({ path: t, remove: !0 });
            }
          })
        },
        b = f,
        p = (a("2a87"), a("2877")),
        m = Object(p["a"])(b, n, i, !1, null, null, null);
      m.options.__file = "PageAddEdit.vue";
      e["default"] = m.exports;
    },
    fc88: function(t, e, a) {
      "use strict";
      var n = a("4d05"),
        i = a.n(n);
      i.a;
    }
  }
]);
//# sourceMappingURL=chunk-39a253f0.bb597a6c.js.map
