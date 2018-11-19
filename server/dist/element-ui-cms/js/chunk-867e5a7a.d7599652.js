(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-867e5a7a"],
  {
    4111: function(e, t, r) {
      "use strict";
      var i = r("b782"),
        s = r.n(i);
      s.a;
    },
    b782: function(e, t, r) {},
    d2f0: function(e, t, r) {
      "use strict";
      r.r(t);
      var i = function() {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t;
          return r("iframe", {
            ref: "iframe",
            staticClass: "column-resource-iframe",
            attrs: {
              width: "100%",
              scrolling: "no",
              frameborder: "0",
              src: e.src
            }
          });
        },
        s = [],
        c = (r("6762"),
        r("2fdb"),
        {
          mixins: [],
          components: {},
          props: {
            resourcePath: { type: String, required: !0 },
            item: { type: Object, required: !0 },
            show: { type: Boolean, required: !1 }
          },
          data: function() {
            return { src: "" };
          },
          watch: {
            show: {
              immediate: !0,
              handler: function() {
                this.setSrc();
              }
            },
            $route: {
              immediate: !0,
              deep: !0,
              handler: function() {
                this.setSrc();
              }
            }
          },
          methods: {
            setSrc: function() {
              if (this.show) {
                var e = "pid=".concat(this.item.id),
                  t = "resource_type=".concat(this.item.child_resource_type);
                (this.src.includes(this.$route.path) &&
                  this.src.includes(e) &&
                  this.src.includes(t)) ||
                  (this.src = ""
                    .concat(this.resourcePath, "?")
                    .concat(e, "&")
                    .concat(
                      t,
                      "&page_header=0&page_side=0&page_footer=0&page_content_header=0&limit=8"
                    ));
              }
            }
          }
        }),
        n = c,
        o = (r("4111"), r("2877")),
        a = Object(o["a"])(n, i, s, !1, null, null, null);
      a.options.__file = "ResourceIframe.vue";
      t["default"] = a.exports;
    }
  }
]);
//# sourceMappingURL=chunk-867e5a7a.d7599652.js.map
