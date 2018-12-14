(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-068ad232", "chunk-63f25890", "chunk-340f12fc", "chunk-2d0f0b62"],
  {
    "0079": function(t, e, n) {
      "use strict";
      var a = n("c223"),
        r = n.n(a);
      r.a;
    },
    "1b3d": function(t, e, n) {},
    "235d": function(t, e, n) {
      "use strict";
      var a = n("953b"),
        r = n.n(a);
      r.a;
    },
    "28ff": function(t, e, n) {
      "use strict";
      n.r(e);
      var a = function() {
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
        r = [],
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
        d = Object(l["a"])(u, a, r, !1, null, null, null);
      d.options.__file = "PageListActionBtn.vue";
      e["default"] = d.exports;
    },
    "2ab2": function(t, e, n) {},
    "46f6": function(t, e, n) {},
    5244: function(t, e, n) {
      "use strict";
      var a = n("be94"),
        r = n("a1de"),
        i = n("5880");
      e["a"] = {
        data: function() {
          return { updateStoreOptions: !1 };
        },
        computed: Object(a["a"])(
          {},
          Object(i["mapState"])(["options"]),
          Object(i["mapGetters"])([r["c"].EMPTY_OPTIONS])
        ),
        created: function() {
          this[r["c"].EMPTY_OPTIONS] && this[r["a"].GET_OPTIONS]();
        },
        beforeDestroy: function() {
          this.updateStoreOptions && this[r["a"].GET_OPTIONS]();
        },
        methods: Object(a["a"])(
          {},
          Object(i["mapActions"])([r["a"].GET_OPTIONS])
        )
      };
    },
    "55c3": function(t, e, n) {
      "use strict";
      n("7514"), n("6b54"), n("f751"), n("96cf");
      var a = n("1da1"),
        r = (n("ac6a"), n("456d"), n("a060")),
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
            pages: r["b"],
            pagesByPath: r["c"],
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
              add: r["c"]["".concat(this.$route.path, "/add")],
              edit: r["c"]["".concat(this.$route.path, "/edit")]
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
            var t = Object(a["a"])(
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
            var t = Object(a["a"])(
              regeneratorRuntime.mark(function t(e, n, a) {
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
                          e.length === a.length
                            ? a.forEach(function(t) {
                                return Object.assign(t, n);
                              })
                            : e.forEach(function(t) {
                                var e = a.find(function(e) {
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
            function e(e, n, a) {
              return t.apply(this, arguments);
            }
            return e;
          })(),
          review: (function() {
            var t = Object(a["a"])(
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
    "7d6e": function(t, e, n) {
      "use strict";
      n.r(e);
      var a = function() {
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
        r = [],
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
        l = Object(u["a"])(s, a, r, !1, null, null, null);
      l.options.__file = "PageContent.vue";
      e["default"] = l.exports;
    },
    "8bbd": function(t, e, n) {
      "use strict";
      var a = n("2ab2"),
        r = n.n(a);
      r.a;
    },
    "953b": function(t, e, n) {},
    "9e11": function(t, e, n) {
      !(function(e, n) {
        t.exports = n();
      })(window, function() {
        return (function(t) {
          var e = {};
          function n(a) {
            if (e[a]) return e[a].exports;
            var r = (e[a] = { i: a, l: !1, exports: {} });
            return t[a].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
          }
          return (
            (n.m = t),
            (n.c = e),
            (n.d = function(t, e, a) {
              n.o(t, e) ||
                Object.defineProperty(t, e, { enumerable: !0, get: a });
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
              var a = Object.create(null);
              if (
                (n.r(a),
                Object.defineProperty(a, "default", {
                  enumerable: !0,
                  value: t
                }),
                2 & e && "string" != typeof t)
              )
                for (var r in t)
                  n.d(
                    a,
                    r,
                    function(e) {
                      return t[e];
                    }.bind(null, r)
                  );
              return a;
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
                  var a = e.split("."), r = 0, i = a.length;
                  "[object Object]" === Object.prototype.toString.call(t) &&
                  r < i;

                )
                  t = t[a[r++]];
                return r && r == i ? t : n;
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
      var a = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return t.pageBreadcrumb.length > 1
            ? n(
                "el-breadcrumb",
                { staticClass: "page-breadcrumb", attrs: { separator: "/" } },
                [
                  t._l(t.pageBreadcrumb, function(e, a) {
                    return [
                      e.title
                        ? n("el-breadcrumb-item", { key: a }, [
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
        i = (n("a481"), n("6762"), n("2fdb"), n("be94")),
        o = n("1d84"),
        c = n("3cf5"),
        s = n("5880"),
        u = Object(s["createNamespacedHelpers"])(c["a"].pages),
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
        f = d,
        p = (n("c3f0"), n("2877")),
        b = Object(p["a"])(f, a, r, !1, null, null, null);
      b.options.__file = "PageBreadcrumb.vue";
      e["default"] = b.exports;
    },
    c223: function(t, e, n) {},
    c3f0: function(t, e, n) {
      "use strict";
      var a = n("46f6"),
        r = n.n(a);
      r.a;
    },
    cb8d: function(t, e, n) {
      "use strict";
      var a = n("1b3d"),
        r = n.n(a);
      r.a;
    },
    d37b: function(t, e, n) {
      "use strict";
      n.r(e);
      var a = function() {
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
        r = [],
        i = (n("a481"), n("6762"), n("2fdb"), n("7f7f"), n("be94")),
        o = n("1d84"),
        c = n("3cf5"),
        s = n("5880"),
        u = Object(s["createNamespacedHelpers"])(c["a"].pages),
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
          methods: Object(i["a"])({}, d([o["mutations"].SET_TABS]), {
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
        p = f,
        b = (n("8bbd"), n("2877")),
        h = Object(b["a"])(p, a, r, !1, null, null, null);
      h.options.__file = "PageTab.vue";
      e["default"] = h.exports;
    },
    e641: function(t, e, n) {
      "use strict";
      n.r(e);
      var a = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "page-content",
            { staticClass: "role-index" },
            [
              n("page-list", {
                ref: "pageList",
                attrs: {
                  "api-list": t.apiList,
                  "api-list-params-key": t.apiListParamsKey,
                  "api-destroy": t.apiDestroy,
                  "api-destroy-bulk": t.apiDestroyBulk,
                  "route-config": t.routeConfig,
                  "header-btn-batch": ""
                },
                scopedSlots: t._u([
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
                              prop: "name",
                              label: t.$t("page.content.roleName"),
                              width: "200"
                            }
                          }),
                          n("el-table-column", {
                            attrs: {
                              label: t.$t("page.content.rolePermissions")
                            },
                            scopedSlots: t._u([
                              {
                                key: "default",
                                fn: function(t) {
                                  return [
                                    n("el-tree", {
                                      ref: "tree",
                                      staticClass: "role-tree",
                                      attrs: {
                                        data: t.row.menus,
                                        props: {
                                          children: "children",
                                          label: "title"
                                        },
                                        accordion: ""
                                      }
                                    })
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
              })
            ],
            1
          );
        },
        r = [],
        i = n("55c3"),
        o = n("cc5e"),
        c = {
          mixins: [i["a"]],
          components: {},
          data: function() {
            return { api: o["a"] };
          },
          computed: {}
        },
        s = c,
        u = (n("0079"), n("2877")),
        l = Object(u["a"])(s, a, r, !1, null, null, null);
      l.options.__file = "index.vue";
      e["default"] = l.exports;
    }
  }
]);
//# sourceMappingURL=chunk-068ad232.3780e23f.js.map
