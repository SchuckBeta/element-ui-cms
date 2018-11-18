(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-248968af", "chunk-07e5f36c"],
  {
    "1cbf": function(t, e, a) {
      "use strict";
      a.r(e);
      var n = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            { staticClass: "avatar" },
            [
              t.url
                ? a("img", { attrs: { src: t.url } })
                : a("svg-icon", { attrs: { icon: "people-fill" } })
            ],
            1
          );
        },
        r = [],
        s = { name: "Avatar", props: { url: String } },
        u = s,
        i = (a("df81"), a("2877")),
        c = Object(i["a"])(u, n, r, !1, null, null, null);
      c.options.__file = "Avatar.vue";
      e["default"] = c.exports;
    },
    4383: function(t, e, a) {},
    5348: function(t, e, a) {
      "use strict";
      a.r(e);
      var n = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            { staticClass: "user-info" },
            [
              a("avatar", { attrs: { url: t.user.avatar } }),
              a("div", { staticClass: "info" }, [
                t.user.organ_name
                  ? a("div", { staticClass: "organ" }, [
                      t._v(t._s(t.user.organ_name))
                    ])
                  : t._e(),
                a("div", { staticClass: "name" }, [t._v(t._s(t.user.name))]),
                a("div", { staticClass: "role" }, [
                  t._v(t._s(t.currentRole.name))
                ])
              ]),
              t._t("default")
            ],
            2
          );
        },
        r = [],
        s = a("1cbf"),
        u = {
          name: "UserInfo",
          components: { Avatar: s["default"] },
          props: {
            user: { type: Object, required: !0 },
            currentRole: { type: Object, required: !0 }
          }
        },
        i = u,
        c = (a("54f4"), a("2877")),
        l = Object(c["a"])(i, n, r, !1, null, null, null);
      l.options.__file = "UserInfo.vue";
      e["default"] = l.exports;
    },
    "54f4": function(t, e, a) {
      "use strict";
      var n = a("4383"),
        r = a.n(n);
      r.a;
    },
    a740: function(t, e, a) {},
    df81: function(t, e, a) {
      "use strict";
      var n = a("a740"),
        r = a.n(n);
      r.a;
    }
  }
]);
//# sourceMappingURL=chunk-248968af.46de7a22.js.map
