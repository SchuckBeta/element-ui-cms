(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-a2db4466", "chunk-63f25890", "chunk-340f12fc", "chunk-2d0f0b62"],
  {
    "1b3d": function(t, e, n) {},
    "235d": function(t, e, n) {
      "use strict";
      var r = n("953b"),
        a = n.n(r);
      a.a;
    },
    "28ff": function(t, e, n) {
      "use strict";
      n.r(e);
      var r = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            { staticClass: "page-list-button" },
            [
              t._t("default"),
              n(
                "div",
                { staticClass: "row" },
                [
                  t.delShow
                    ? n("el-popover-dialog", {
                        attrs: {
                          "popover-content": t.$t("modal.delete"),
                          "cancel-button-text": t.$t("action.cancel"),
                          "confirm-button-text": t.$t("action.confirm"),
                          "btn-txt": t.$t("action.delete")
                        },
                        on: { confirm: t.delConfirm }
                      })
                    : t._e(),
                  t.editShow
                    ? n(
                        "el-button",
                        {
                          attrs: { type: "text" },
                          on: {
                            click: function(e) {
                              t.toEditItem();
                            }
                          }
                        },
                        [t._v(t._s(t.$t("action.edit")))]
                      )
                    : t._e(),
                  t.detailsShow
                    ? n(
                        "el-button",
                        {
                          attrs: { type: "text" },
                          on: {
                            click: function(e) {
                              t.toEditItem({ disabled: 1, details: 1 });
                            }
                          }
                        },
                        [t._v(t._s(t.$t("action.details")))]
                      )
                    : t._e()
                ],
                1
              )
            ],
            2
          );
        },
        a = [],
        i = (n("f751"), n("6b54"), n("0a17")),
        o = n("f21c"),
        c = n.n(o),
        s = {
          name: "PageListBtnRow",
          mixins: [],
          components: { ElPopoverDialog: c.a },
          props: {
            routeConfig: { type: Object, required: !0 },
            id: { required: !0 },
            scope: Object,
            delShow: { type: Boolean, default: !0 },
            editShow: { type: Boolean, default: !0 },
            detailsShow: { type: Boolean, default: !1 }
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
            toEditItem: function() {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              if (
                "[object Object]" !==
                  Object.prototype.toString.call(this.routeConfig.edit) ||
                "[object String]" !==
                  Object.prototype.toString.call(this.routeConfig.edit.path)
              )
                throw new Error("routeConfig.edit.path无值，无法前往编辑页");
              (t = Object.assign(t, this.$route.query, { id: this.id })),
                "[object Object]" ===
                  Object.prototype.toString.call(this.routeConfig.edit.query) &&
                  Object.assign(t, this.routeConfig.edit.query),
                this.$router.push({
                  path: this.routeConfig.edit.path,
                  query: t
                });
            },
            delConfirm: function() {
              this.$eventHub.emit(i["a"].pagesDel, this.id);
            }
          }
        },
        u = s,
        l = (n("cb8d"), n("2877")),
        f = Object(l["a"])(u, r, a, !1, null, null, null);
      f.options.__file = "PageListActionBtn.vue";
      e["default"] = f.exports;
    },
    "2ab2": function(t, e, n) {},
    "46f6": function(t, e, n) {},
    "4ca4": function(t, e, n) {
      "use strict";
      n.r(e);
      var r = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "page-content",
            t._b({}, "page-content", t.$attrs, !1),
            [
              n(
                "page-list",
                t._b(
                  {
                    ref: "pageList",
                    attrs: {
                      "api-list": t.apiList,
                      "api-list-params-key": t.apiListParamsKey,
                      "api-destroy": t.apiDestroy,
                      "api-destroy-bulk": t.apiDestroyBulk,
                      "route-config": t.routeConfig,
                      "query-form": t.queryForm,
                      "header-btn-batch": ""
                    },
                    on: { "fetch-data-finish": t.fetchDataFinish },
                    scopedSlots: t._u([
                      {
                        key: "query-form",
                        fn: function(e) {
                          var r = e.formData;
                          return [
                            n(
                              "el-form-item",
                              {
                                staticClass: "query-form-keyword",
                                attrs: {
                                  label: t.$t("form.queryKeyword.label"),
                                  prop: "search"
                                }
                              },
                              [
                                n("el-input", {
                                  attrs: {
                                    placeholder: t.$t(
                                      "form.queryKeyword.placeholder"
                                    )
                                  },
                                  model: {
                                    value: r.search,
                                    callback: function(e) {
                                      t.$set(r, "search", e);
                                    },
                                    expression: "formData.search"
                                  }
                                })
                              ],
                              1
                            )
                          ];
                        }
                      },
                      {
                        key: "header-batch-btn",
                        fn: function(e) {
                          var r = e.multipleSelection;
                          return [
                            n(
                              "el-button",
                              {
                                attrs: {
                                  size: "mini",
                                  type: "success",
                                  disabled: 0 === r.length
                                },
                                on: {
                                  click: function(e) {
                                    t.batchEdit(
                                      r.map(function(t) {
                                        return t.id;
                                      }),
                                      { status: 1 },
                                      r
                                    );
                                  }
                                }
                              },
                              [
                                t._v(
                                  "\n        " +
                                    t._s(
                                      t.$t("action.batch", {
                                        action: t.$t("action.on")
                                      })
                                    ) +
                                    "\n      "
                                )
                              ]
                            ),
                            n(
                              "el-button",
                              {
                                attrs: {
                                  size: "mini",
                                  type: "warning",
                                  disabled: 0 === r.length
                                },
                                on: {
                                  click: function(e) {
                                    t.batchEdit(
                                      r.map(function(t) {
                                        return t.id;
                                      }),
                                      { status: 0 },
                                      r
                                    );
                                  }
                                }
                              },
                              [
                                t._v(
                                  "\n        " +
                                    t._s(
                                      t.$t("action.batch", {
                                        action: t.$t("action.off")
                                      })
                                    ) +
                                    "\n      "
                                )
                              ]
                            )
                          ];
                        }
                      },
                      {
                        key: "list",
                        fn: function(e) {
                          return n(
                            "el-table",
                            {
                              ref: "listTable",
                              attrs: { data: e.list },
                              on: {
                                "filter-change": e.filterChange,
                                "sort-change": e.sortChange,
                                "selection-change": e.selectionChange
                              }
                            },
                            [
                              n("el-table-column", {
                                attrs: { type: "selection", width: "55" }
                              }),
                              n("el-table-column", {
                                attrs: {
                                  prop: "id",
                                  label: t.$t("page.content.id"),
                                  width: "60"
                                }
                              }),
                              n("el-table-column", {
                                attrs: {
                                  prop: "resource_title",
                                  label: t.$t("page.content.title")
                                }
                              }),
                              n("el-table-column", {
                                attrs: {
                                  "filter-multiple": !1,
                                  filters: t.filters.type,
                                  "column-key": "resource_type",
                                  prop: "resource_type",
                                  label: t.$t("page.content.type"),
                                  width: "90"
                                },
                                scopedSlots: t._u([
                                  {
                                    key: "default",
                                    fn: function(n) {
                                      return [
                                        t._v(
                                          "\n          " +
                                            t._s(
                                              e.getTextByValue(
                                                t.filters.resource_type,
                                                n.row.resource_type,
                                                "value"
                                              )
                                            ) +
                                            "\n        "
                                        )
                                      ];
                                    }
                                  }
                                ])
                              }),
                              n("el-table-column", {
                                attrs: {
                                  fixed: "right",
                                  label: t.$t("page.content.action"),
                                  width: "105"
                                },
                                scopedSlots: t._u([
                                  {
                                    key: "default",
                                    fn: function(e) {
                                      return [
                                        n("page-list-action-btn", {
                                          attrs: {
                                            "route-config": t.routeConfig,
                                            id: e.row.id
                                          }
                                        })
                                      ];
                                    }
                                  }
                                ])
                              })
                            ],
                            1
                          );
                        }
                      }
                    ])
                  },
                  "page-list",
                  t.$attrs,
                  !1
                )
              )
            ],
            1
          );
        },
        a = [],
        i = (n("ac6a"), n("456d"), n("a481"), n("55c3")),
        o = {
          mixins: [i["a"]],
          components: {},
          inheritAttrs: !1,
          data: function() {
            return {};
          },
          computed: {
            api: function() {
              return n("76f9")(
                "./".concat(this.$route.path.replace(/^\/(\w+)_column.*/, "$1"))
              ).default;
            },
            filters: function() {
              return {
                resource_type: this.options.resource_type,
                status: this.options.visible
              };
            },
            apiListParamsKey: function() {
              return Object.keys(this.filters).concat(["pid"]);
            },
            pid: function() {
              return this.$route.query.pid;
            }
          },
          mounted: function() {
            this.$nextTick(function() {
              parent &&
                parent.window &&
                parent.window.columnFrameHeight(this.pid);
            });
          },
          methods: {
            fetchDataFinish: function() {
              this.$nextTick(function() {
                parent &&
                  parent.window &&
                  parent.window.columnFrameHeight(this.pid);
              });
            }
          }
        },
        c = o,
        s = (n("7d67"), n("2877")),
        u = Object(s["a"])(c, r, a, !1, null, null, null);
      u.options.__file = "index.vue";
      e["default"] = u.exports;
    },
    5244: function(t, e, n) {
      "use strict";
      var r = n("be94"),
        a = n("a1de"),
        i = n("5880");
      e["a"] = {
        data: function() {
          return { updateStoreOptions: !1 };
        },
        computed: Object(r["a"])(
          {},
          Object(i["mapState"])(["options"]),
          Object(i["mapGetters"])([a["c"].EMPTY_OPTIONS])
        ),
        created: function() {
          this[a["c"].EMPTY_OPTIONS] && this[a["a"].GET_OPTIONS]();
        },
        beforeDestroy: function() {
          this.updateStoreOptions && this[a["a"].GET_OPTIONS]();
        },
        methods: Object(r["a"])(
          {},
          Object(i["mapActions"])([a["a"].GET_OPTIONS])
        )
      };
    },
    "55c3": function(t, e, n) {
      "use strict";
      n("7514"), n("6b54"), n("f751"), n("96cf");
      var r = n("1da1"),
        a = (n("ac6a"), n("456d"), n("a060")),
        i = n("7d6e"),
        o = n("c72e"),
        c = n("28ff"),
        s = n("2934"),
        u = n("5244");
      e["a"] = {
        mixins: [u["a"]],
        components: {
          PageContent: i["default"],
          PageList: o["default"],
          PageListActionBtn: c["default"]
        },
        inheritAttrs: !1,
        data: function() {
          return {
            pages: a["b"],
            pagesByPath: a["c"],
            refList: { list: [] },
            queryForm: { search: "", date_range_start: "", date_range_end: "" }
          };
        },
        computed: {
          apiList: function() {
            return this.api.fn.list;
          },
          apiListParamsKey: function() {
            return this.filters ? Object.keys(this.filters) : [];
          },
          apiDestroy: function() {
            return this.api.fn.destroy;
          },
          apiDestroyBulk: function() {
            return this.api.fn.destroyBulk;
          },
          apiUpdate: function() {
            return this.api.fn.update;
          },
          apiUpdateBulk: function() {
            return this.api.fn.updateBulk;
          },
          routeConfig: function() {
            return {
              add: a["c"]["".concat(this.$route.path, "/add")],
              edit: a["c"]["".concat(this.$route.path, "/edit")]
            };
          }
        },
        mounted: function() {
          this.$nextTick(function() {
            this.$refs.pageList && (this.refList = this.$refs.pageList);
          });
        },
        methods: {
          edit: (function() {
            var t = Object(r["a"])(
              regeneratorRuntime.mark(function t(e, n) {
                return regeneratorRuntime.wrap(
                  function(t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0), (t.next = 3), this.apiUpdate(e.id, n)
                          );
                        case 3:
                          Object.assign(e, n), (t.next = 9);
                          break;
                        case 6:
                          (t.prev = 6),
                            (t.t0 = t["catch"](0)),
                            console.error(t.t0);
                        case 9:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [[0, 6]]
                );
              })
            );
            function e(e, n) {
              return t.apply(this, arguments);
            }
            return e;
          })(),
          batchEdit: (function() {
            var t = Object(r["a"])(
              regeneratorRuntime.mark(function t(e, n, r) {
                return regeneratorRuntime.wrap(
                  function(t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            "[object Array]" ===
                              Object.prototype.toString.call(e) &&
                            0 !== e.length
                          ) {
                            t.next = 2;
                            break;
                          }
                          throw new Error("ids必须是由id构成的数组");
                        case 2:
                          return (
                            (t.prev = 2),
                            (t.next = 5),
                            this.apiUpdateBulk({ ids: e.join() }, n)
                          );
                        case 5:
                          e.length === r.length
                            ? r.forEach(function(t) {
                                return Object.assign(t, n);
                              })
                            : e.forEach(function(t) {
                                var e = r.find(function(e) {
                                  return String(e.id) === String(t);
                                });
                                e && Object.assign(e, n);
                              }),
                            this.$message({
                              message: this.$t("message.success.batch", {
                                action: this.$t("action.edit")
                              }),
                              type: "success"
                            }),
                            (t.next = 12);
                          break;
                        case 9:
                          (t.prev = 9),
                            (t.t0 = t["catch"](2)),
                            console.error(t.t0);
                        case 12:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [[2, 9]]
                );
              })
            );
            function e(e, n, r) {
              return t.apply(this, arguments);
            }
            return e;
          })(),
          review: (function() {
            var t = Object(r["a"])(
              regeneratorRuntime.mark(function t(e, n) {
                return regeneratorRuntime.wrap(
                  function(t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0), (t.next = 3), s["a"].fn.review(n)
                          );
                        case 3:
                          Object.assign(e, n), (t.next = 9);
                          break;
                        case 6:
                          (t.prev = 6),
                            (t.t0 = t["catch"](0)),
                            console.error(t.t0);
                        case 9:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [[0, 6]]
                );
              })
            );
            function e(e, n) {
              return t.apply(this, arguments);
            }
            return e;
          })()
        }
      };
    },
    5684: function(t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "url", function() {
          return i;
        });
      var r = n("be94"),
        a = n("c08c"),
        i = { index: "/column/web/" };
      e["default"] = {
        url: i,
        fn: Object(r["a"])({}, Object(a["a"])(i.index))
      };
    },
    5978: function(t, e, n) {},
    "76f9": function(t, e, n) {
      var r = { "./web": "5684", "./web.js": "5684" };
      function a(t) {
        var e = i(t);
        return n(e);
      }
      function i(t) {
        var e = r[t];
        if (!(e + 1)) {
          var n = new Error("Cannot find module '" + t + "'");
          throw ((n.code = "MODULE_NOT_FOUND"), n);
        }
        return e;
      }
      (a.keys = function() {
        return Object.keys(r);
      }),
        (a.resolve = i),
        (t.exports = a),
        (a.id = "76f9");
    },
    "7d67": function(t, e, n) {
      "use strict";
      var r = n("5978"),
        a = n.n(r);
      a.a;
    },
    "7d6e": function(t, e, n) {
      "use strict";
      n.r(e);
      var r = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", { staticClass: "page-content" }, [
            t.headerShow
              ? n(
                  "div",
                  { staticClass: "content-header" },
                  [
                    t.headerTab
                      ? n("page-tab", t._b({}, "page-tab", t.$attrs, !1))
                      : t._e(),
                    t.headerBreadcrumb
                      ? n(
                          "page-breadcrumb",
                          t._b({}, "page-breadcrumb", t.$attrs, !1)
                        )
                      : t._e()
                  ],
                  1
                )
              : t._e(),
            n("div", { staticClass: "content-main" }, [t._t("default")], 2)
          ]);
        },
        a = [],
        i = (n("c5f6"), n("aaf7")),
        o = n("d37b"),
        c = {
          name: "PageContent",
          mixins: [],
          components: { PageBreadcrumb: i["default"], PageTab: o["default"] },
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
        s = c,
        u = (n("235d"), n("2877")),
        l = Object(u["a"])(s, r, a, !1, null, null, null);
      l.options.__file = "PageContent.vue";
      e["default"] = l.exports;
    },
    "8bbd": function(t, e, n) {
      "use strict";
      var r = n("2ab2"),
        a = n.n(r);
      a.a;
    },
    "953b": function(t, e, n) {},
    "9e11": function(t, e, n) {
      !(function(e, n) {
        t.exports = n();
      })(window, function() {
        return (function(t) {
          var e = {};
          function n(r) {
            if (e[r]) return e[r].exports;
            var a = (e[r] = { i: r, l: !1, exports: {} });
            return t[r].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
          }
          return (
            (n.m = t),
            (n.c = e),
            (n.d = function(t, e, r) {
              n.o(t, e) ||
                Object.defineProperty(t, e, { enumerable: !0, get: r });
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
              var r = Object.create(null);
              if (
                (n.r(r),
                Object.defineProperty(r, "default", {
                  enumerable: !0,
                  value: t
                }),
                2 & e && "string" != typeof t)
              )
                for (var a in t)
                  n.d(
                    r,
                    a,
                    function(e) {
                      return t[e];
                    }.bind(null, a)
                  );
              return r;
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
            n((n.s = 6))
          );
        })({
          6: function(t, e) {
            t.exports = function(t, e, n) {
              if (
                "[object Object]" === Object.prototype.toString.call(t) &&
                "[object String]" === Object.prototype.toString.call(e)
              ) {
                for (
                  var r = e.split("."), a = 0, i = r.length;
                  "[object Object]" === Object.prototype.toString.call(t) &&
                  a < i;

                )
                  t = t[r[a++]];
                return a && a == i ? t : n;
              }
              return n;
            };
          }
        });
      });
    },
    aaf7: function(t, e, n) {
      "use strict";
      n.r(e);
      var r = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return t.pageBreadcrumb.length > 1
            ? n(
                "el-breadcrumb",
                { staticClass: "page-breadcrumb", attrs: { separator: "/" } },
                [
                  t._l(t.pageBreadcrumb, function(e, r) {
                    return [
                      e.title
                        ? n("el-breadcrumb-item", { key: r }, [
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
        a = [],
        i = (n("a481"), n("6762"), n("2fdb"), n("be94")),
        o = n("1d84"),
        c = n("3cf5"),
        s = n("5880"),
        u = Object(s["createNamespacedHelpers"])(c["a"].pages),
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
          computed: Object(i["a"])({}, l([o["getters"].GET_BREADCRUMB]), {
            pageBreadcrumb: function() {
              return this.concat
                ? this[o["getters"].GET_BREADCRUMB](this.$route.path).concat(
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
        p = (n("c3f0"), n("2877")),
        b = Object(p["a"])(d, r, a, !1, null, null, null);
      b.options.__file = "PageBreadcrumb.vue";
      e["default"] = b.exports;
    },
    c3f0: function(t, e, n) {
      "use strict";
      var r = n("46f6"),
        a = n.n(r);
      a.a;
    },
    cb8d: function(t, e, n) {
      "use strict";
      var r = n("1b3d"),
        a = n.n(r);
      a.a;
    },
    d37b: function(t, e, n) {
      "use strict";
      n.r(e);
      var r = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return t.tabs.length
            ? n(
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
                  return n("el-tab-pane", {
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
        a = [],
        i = (n("a481"), n("6762"), n("2fdb"), n("7f7f"), n("be94")),
        o = n("1d84"),
        c = n("3cf5"),
        s = n("5880"),
        u = Object(s["createNamespacedHelpers"])(c["a"].pages),
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
          computed: Object(i["a"])({}, l(["tabs", "selectedTab"])),
          watch: {
            $route: {
              immediate: !0,
              deep: !0,
              handler: function(t) {
                this[o["mutations"].SET_TABS](t);
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
          methods: Object(i["a"])({}, f([o["mutations"].SET_TABS]), {
            tabClick: function(t) {
              this[o["mutations"].SET_TABS]({ path: t.name });
            },
            tabRemove: function(t) {
              this[o["mutations"].SET_TABS]({ path: t, remove: !0 });
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
        b = (n("8bbd"), n("2877")),
        h = Object(b["a"])(p, r, a, !1, null, null, null);
      h.options.__file = "PageTab.vue";
      e["default"] = h.exports;
    }
  }
]);
//# sourceMappingURL=chunk-a2db4466.418ae2fb.js.map
