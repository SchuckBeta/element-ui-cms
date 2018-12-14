(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-7e92f0e4"],
  {
    2645: function(e, t, n) {
      !(function(t, r) {
        e.exports = r(n("5c96"), n("7d86"), n("d834"));
      })(window, function(e, t, n) {
        return (function(e) {
          var t = {};
          function n(r) {
            if (t[r]) return t[r].exports;
            var o = (t[r] = { i: r, l: !1, exports: {} });
            return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
          }
          return (
            (n.m = e),
            (n.c = t),
            (n.d = function(e, t, r) {
              n.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: r });
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
              var r = Object.create(null);
              if (
                (n.r(r),
                Object.defineProperty(r, "default", {
                  enumerable: !0,
                  value: e
                }),
                2 & t && "string" != typeof e)
              )
                for (var o in e)
                  n.d(
                    r,
                    o,
                    function(t) {
                      return e[t];
                    }.bind(null, o)
                  );
              return r;
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
            n((n.s = 8))
          );
        })([
          function(t, n) {
            t.exports = e;
          },
          function(e, t) {
            e.exports =
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAADKCAYAAAChSLBvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0NCMzY0N0Q0REFBMTFFN0E4MjZDNTJEQjdDNkI0MEUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0NCMzY0N0U0REFBMTFFN0E4MjZDNTJEQjdDNkI0MEUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3Q0IzNjQ3QjREQUExMUU3QTgyNkM1MkRCN0M2QjQwRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3Q0IzNjQ3QzREQUExMUU3QTgyNkM1MkRCN0M2QjQwRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtHHiFYAAAdVSURBVHja7FpfaFNXGD/nJtYka6OIlE4iFtkm1lqfNqoMl2ocs2P6uAp9UFliq7g9ONS9OJ3K1IIPzq6GrgzFh9EXGYKUtUv/sKn4IojzD7hRS7DF0aCuJm2T3LPfd3sjMc29uTd/QOs9cPhObr7vd797er8/Of3xc+fONTLGgkIIDytwcM7DkiT5A4FAj1QsUBqEI8tyJ63tKdDW1lZeKHBHR4dI4UmsRMMCzg2MP8QRmkUFVgEP0cwXXNIBTY2s4LjmRXAFu7u7y3ICZwHVAz+CdzYQiUQGg8FglSawDugscPIWYr0abfWYN+F9fbqyPd3QwNYROElvRihXIU8MagEbHYc08kTZax4glEOLCZjCkygxFws8leiZNaxhjbk2OBI39Vpf5GF7Bm3ZV5kXUUnaIOqlPEFpfJkFlJq3rzE/tBfjsQEkoaB2QW4vpDTNAoWn57FsLmoFIU8zQYsCnP74b3gbizr3Y0mAW1pa9tArXJKtaKVfRpyfLckew/O9EKfTG5af8tzbM1k834frxzD/sNKwNeZEMc2lgOrQBOFH3q1VA+M2muvOQCDwS17A/f399nv37l3G8hONyLuyYsWKrQ0NDQlT2e3+/ftHtUDVytGo6pjOx00GtrLJNDA8qjZQ76qtoxtzwHhnx/MFQnP5VBOY2qUCnHTrbYWrVHs83dXV9Z5ZENVmQhMYYToSj8e3mAVOJBJbyFbP4xD2+XP1JsMGKrWiI8sy2YQ0k1BnZ2c17n4XBgfw8W3c5GAO4BMQo9A7abfbV/r9/uGsHtMXSInHodgGo0uUwXRwe0iHdMkmHTRrgCxduvQUDAZg0A/5q81m2wZJj/mYJq0xt2F9SdUZIBtD+bi7u1uKRCLfw3A/DH+D7MCjXlX/UOtwrRXXPoY8tWvXrm8gZVMVBNG0DoK6SS/mEvXyI8wBzHa0VFcLfuHpmJxmwTUPeaMdj7s7V9Ot9semEv1OA4l+J7OGNV6DplAjlziQS6hJrEWQrEE+pnUd5gjC/P2c5xXqAcdyMgJALQDWkBwfH38nFVzQSTepnHUQcuHChcpoNEoe1AFgNUmA1sDQlQ6QAaQ5XgAvXrz4ydjY2C2AUu0agnQjF7tJ4iZuANJcQGsq9fQZciGtU9+ntwBcTTjX8EUNnVhDhkliPqQ1qkMY4OHy8vJwc3PzM1N/PBPp8JnRm5sFNjJCeDM2lqIp3GD1xxawPnCoZGnz4sWL7omJCQ+iiIgBHkTUMkQWSU9KZv4c0Dku46bysZGbQ95BE7OWG02D1utmAVvAxcwVrpCrEb9Zi8ZsYlzyRzdGe6RigapdkoeJDGZTbNNUwcwmZ+98i9n0KgC7eh1HaOYLbNcCFUwcUtcsumny24I9TgdV3k2ss3le3uvwuvocwVV/rcrNbMoE1QNPqsymf0b/HnQNubSZTVqg2cDJW1xZr4ZbPZuSb1b0OV9iNnGKFnONCP9OKCcuKnDaYSBmWSqKTf/7WOepLGZTlpyseMyLy2wiPOuIwhrWmHODo251osSYJiFJnJ157puaxWxy9s1vY4LXm64g6SOz30Pp6kAhaClaPj4sDkt48p9ToJp9hVnQk30nzqNoNRdUTDO3Ao9Pnm4vemnKBvqGtrGcS6VhNkV9sT2cSaVhNkU3xVq5JJWG2RTdGNuLxi6N2cTyYzZRrpj1Xvum9nGJH8POW8wma8yNYppL4a3fnU2yLPxQrJ3Jv+y2jfPOCV8sP2aTt99rv5G8dlkIDWYTY1c+sK/dOtAwYI7ZdCN5/agWqOp5I+mYzscAzcls0tPRyW65mU16OtbRjeZ5Rd7MJlfvfG1mE17OvJ9A6DGbUv94Lf4eczZdEaowzWxSbLges4mxEVkkTDOb5GRiC9nqeCy9YDbhw7CBHKboCA4b2GomoQWDjurpuLiL+x3gTBhiNgnGR+HzybJ5fOXTjyaHs3pMX6DPOM6E3CYkfokymDYo6yEd0iWbdNCsAbJkmecUFAdYUu5nxGzi0jbAhHDtMU1aS5KkMJtIh3TJJmfkPXj3wfSnvs82A/QstiIoC7EDbc8PnNtW06S1kMUOZLYg6ez3HdxMNqYqSEXIuS6RFOgmmRed+5IZA/4IwTBgt/H2/zbECmc20W8VM79XND129TnbhZB352q6qT82V0GYnJvZZEDHGtZ4FZrCbMNz1eOITEVqucJoEmuE4LV4qeuANhL1TeZmNtFZxOmh08vjyXgdJx69AAi6zvHn/yrMJpFeSmdE5SyPy/8srxRTiVpZcAJZTR4g8dQwk9Th1HHOC4+rKquejI2O3ZqXjI8kZNuQJGS3bLO58bhu3MCNrOaWBVOYTcpnYjoxvpBzReIzU66/5LGzz3ENijX4FEYBCyuSs4fwOswlEebyvHBZeVk4Uh8xx2wymg6h/MzozU0BGzzACMV8kyVgNglhMZssYF3gGXJ4adLmouuL3NMT0x4hxT1C5h5E1DJ8S9LDuFCkMMhsokRkKh8bujnndxB5a/8XYABkwMA1GMH2NgAAAABJRU5ErkJggg==";
          },
          function(e, t, n) {
            var r = n(10);
            "string" == typeof r && (r = [[e.i, r, ""]]),
              r.locals && (e.exports = r.locals),
              (0, n(5).default)("1000fd51", r, !1, {});
          },
          function(e, t, n) {
            var r = n(13);
            "string" == typeof r && (r = [[e.i, r, ""]]),
              r.locals && (e.exports = r.locals),
              (0, n(5).default)("6d492ff8", r, !1, {});
          },
          function(e, t) {
            e.exports = function(e) {
              var t = [];
              return (
                (t.toString = function() {
                  return this.map(function(t) {
                    var n = (function(e, t) {
                      var n = e[1] || "",
                        r = e[3];
                      if (!r) return n;
                      if (t && "function" == typeof btoa) {
                        var o = (function(e) {
                            return (
                              "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
                              btoa(
                                unescape(encodeURIComponent(JSON.stringify(e)))
                              ) +
                              " */"
                            );
                          })(r),
                          i = r.sources.map(function(e) {
                            return "/*# sourceURL=" + r.sourceRoot + e + " */";
                          });
                        return [n]
                          .concat(i)
                          .concat([o])
                          .join("\n");
                      }
                      return [n].join("\n");
                    })(t, e);
                    return t[2] ? "@media " + t[2] + "{" + n + "}" : n;
                  }).join("");
                }),
                (t.i = function(e, n) {
                  "string" == typeof e && (e = [[null, e, ""]]);
                  for (var r = {}, o = 0; o < this.length; o++) {
                    var i = this[o][0];
                    "number" == typeof i && (r[i] = !0);
                  }
                  for (o = 0; o < e.length; o++) {
                    var a = e[o];
                    ("number" == typeof a[0] && r[a[0]]) ||
                      (n && !a[2]
                        ? (a[2] = n)
                        : n && (a[2] = "(" + a[2] + ") and (" + n + ")"),
                      t.push(a));
                  }
                }),
                t
              );
            };
          },
          function(e, t, n) {
            "use strict";
            function r(e, t) {
              for (var n = [], r = {}, o = 0; o < t.length; o++) {
                var i = t[o],
                  a = i[0],
                  u = {
                    id: e + ":" + o,
                    css: i[1],
                    media: i[2],
                    sourceMap: i[3]
                  };
                r[a]
                  ? r[a].parts.push(u)
                  : n.push((r[a] = { id: a, parts: [u] }));
              }
              return n;
            }
            n.r(t),
              n.d(t, "default", function() {
                return p;
              });
            var o = "undefined" != typeof document;
            if ("undefined" != typeof DEBUG && DEBUG && !o)
              throw new Error(
                "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
              );
            var i = {},
              a =
                o &&
                (document.head || document.getElementsByTagName("head")[0]),
              u = null,
              s = 0,
              c = !1,
              l = function() {},
              f = null,
              d = "data-vue-ssr-id",
              m =
                "undefined" != typeof navigator &&
                /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
            function p(e, t, n, o) {
              (c = n), (f = o || {});
              var a = r(e, t);
              return (
                g(a),
                function(t) {
                  for (var n = [], o = 0; o < a.length; o++) {
                    var u = a[o];
                    (s = i[u.id]).refs--, n.push(s);
                  }
                  for (
                    t ? g((a = r(e, t))) : (a = []), o = 0;
                    o < n.length;
                    o++
                  ) {
                    var s;
                    if (0 === (s = n[o]).refs) {
                      for (var c = 0; c < s.parts.length; c++) s.parts[c]();
                      delete i[s.id];
                    }
                  }
                }
              );
            }
            function g(e) {
              for (var t = 0; t < e.length; t++) {
                var n = e[t],
                  r = i[n.id];
                if (r) {
                  r.refs++;
                  for (var o = 0; o < r.parts.length; o++)
                    r.parts[o](n.parts[o]);
                  for (; o < n.parts.length; o++) r.parts.push(v(n.parts[o]));
                  r.parts.length > n.parts.length &&
                    (r.parts.length = n.parts.length);
                } else {
                  var a = [];
                  for (o = 0; o < n.parts.length; o++) a.push(v(n.parts[o]));
                  i[n.id] = { id: n.id, refs: 1, parts: a };
                }
              }
            }
            function h() {
              var e = document.createElement("style");
              return (e.type = "text/css"), a.appendChild(e), e;
            }
            function v(e) {
              var t,
                n,
                r = document.querySelector("style[" + d + '~="' + e.id + '"]');
              if (r) {
                if (c) return l;
                r.parentNode.removeChild(r);
              }
              if (m) {
                var o = s++;
                (r = u || (u = h())),
                  (t = y.bind(null, r, o, !1)),
                  (n = y.bind(null, r, o, !0));
              } else
                (r = h()),
                  (t = function(e, t) {
                    var n = t.css,
                      r = t.media,
                      o = t.sourceMap;
                    if (
                      (r && e.setAttribute("media", r),
                      f.ssrId && e.setAttribute(d, t.id),
                      o &&
                        ((n += "\n/*# sourceURL=" + o.sources[0] + " */"),
                        (n +=
                          "\n/*# sourceMappingURL=data:application/json;base64," +
                          btoa(
                            unescape(encodeURIComponent(JSON.stringify(o)))
                          ) +
                          " */")),
                      e.styleSheet)
                    )
                      e.styleSheet.cssText = n;
                    else {
                      for (; e.firstChild; ) e.removeChild(e.firstChild);
                      e.appendChild(document.createTextNode(n));
                    }
                  }.bind(null, r)),
                  (n = function() {
                    r.parentNode.removeChild(r);
                  });
              return (
                t(e),
                function(r) {
                  if (r) {
                    if (
                      r.css === e.css &&
                      r.media === e.media &&
                      r.sourceMap === e.sourceMap
                    )
                      return;
                    t((e = r));
                  } else n();
                }
              );
            }
            var b = (function() {
              var e = [];
              return function(t, n) {
                return (e[t] = n), e.filter(Boolean).join("\n");
              };
            })();
            function y(e, t, n, r) {
              var o = n ? "" : r.css;
              if (e.styleSheet) e.styleSheet.cssText = b(t, o);
              else {
                var i = document.createTextNode(o),
                  a = e.childNodes;
                a[t] && e.removeChild(a[t]),
                  a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
              }
            }
          },
          function(e, n) {
            e.exports = t;
          },
          function(e, t) {
            e.exports = n;
          },
          function(e, t, n) {
            "use strict";
            n.r(t),
              n.d(t, "ElTinymce", function() {
                return o;
              });
            var r,
              o = n(14).default;
            function i(e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "undefined" != typeof window &&
                    window.ElSingleUploadOptions;
              r
                ? console.warn(
                    "[ElTinymce] already installed. Vue.use(ElTinymce) should be called only once."
                  )
                : ((r = e),
                  "[object Object]" === Object.prototype.toString.call(t) &&
                    "[object Function]" ===
                      Object.prototype.toString.call(t.upload) &&
                    Object.assign(o.props.upload, {
                      required: !1,
                      default: t.upload
                    }),
                  r.component(o.name, o));
            }
            (o.install = i),
              "undefined" != typeof window && window.Vue && i(window.Vue);
          },
          function(e, t, n) {
            "use strict";
            var r = n(2);
            n.n(r).a;
          },
          function(e, t, n) {
            var r = n(11);
            (e.exports = n(4)(!1)).push([
              e.i,
              "\n.el-tinymce-side {\n  width: 140px;\n  margin: 18px 0 0 16px;\n}\n.el-tinymce-side .el-tinymce-assets-title {\n  line-height: 50px;\n}\n.el-tinymce-side .el-tinymce-assets-list {\n  border: 1px solid #e7e7eb;\n}\n.el-tinymce-side .el-tinymce-assets-item {\n  border-top: 1px solid #e7e7eb;\n  background-color: #fff;\n  text-align: left;\n  padding-left: 20px;\n  line-height: 49px;\n  cursor: pointer;\n}\n.el-tinymce-side .el-tinymce-assets-item:hover {\n  border: 1px solid #43b548;\n  margin: 0 -1px -1px;\n  position: relative;\n  z-index: 1;\n  color: #43b548;\n  zoom: 1;\n  float: none;\n}\n.el-tinymce-side .el-tinymce-assets-item-icon {\n  width: 22px;\n  height: 22px;\n  vertical-align: middle;\n  display: inline-block;\n  margin-right: 1em;\n}\n.el-tinymce-side .el-tinymce-assets-item-image .el-tinymce-assets-item-icon {\n  background: url(" +
                r(n(1)) +
                ") 0 0 no-repeat;\n}\n.el-tinymce-side .el-tinymce-assets-item-image:hover .el-tinymce-assets-item-icon {\n  background: url(" +
                r(n(1)) +
                ") 0 -106px no-repeat;\n}\n.el-tinymce-side .el-tinymce-assets-item-audio .el-tinymce-assets-item-icon {\n  background: url(" +
                r(n(1)) +
                ") 0 -50px no-repeat;\n}\n.el-tinymce-side .el-tinymce-assets-item-audio:hover .el-tinymce-assets-item-icon {\n  background: url(" +
                r(n(1)) +
                ") 0 -156px no-repeat;\n}\n.el-tinymce-side .el-tinymce-assets-item-video .el-tinymce-assets-item-icon {\n  background: url(" +
                r(n(1)) +
                ") 0 -28px no-repeat;\n}\n.el-tinymce-side .el-tinymce-assets-item-video:hover .el-tinymce-assets-item-icon {\n  background: url(" +
                r(n(1)) +
                ") 0 -134px no-repeat;\n}\n.el-tinymce-dialog .el-dialog__body {\n  padding: 0 20px 30px;\n}\n.el-tinymce-dialog .el-tabs__header {\n  margin: 0 0 5px;\n}\n.el-tinymce-dialog .el-tinymce-dialog-desc {\n  text-align: right;\n  color: #cccccc;\n  margin-bottom: 5px;\n}\n.el-tinymce-dialog .el-tinymce-dialog-upload {\n  text-align: center;\n}\n.el-tinymce-dialog .el-tinymce-dialog-btn {\n  text-align: right;\n  margin-top: 20px;\n}\n",
              ""
            ]);
          },
          function(e, t) {
            e.exports = function(e) {
              return "string" != typeof e
                ? e
                : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                  /["'() \t\n]/.test(e)
                    ? '"' + e.replace(/"/g, '\\"').replace(/\n/g, "\\n") + '"'
                    : e);
            };
          },
          function(e, t, n) {
            "use strict";
            var r = n(3);
            n.n(r).a;
          },
          function(e, t, n) {
            (e.exports = n(4)(!1)).push([
              e.i,
              "\n.el-tinymce {\n  display: flex;\n}\n.el-tinymce .vue-tinymce {\n  flex: 1;\n}\n",
              ""
            ]);
          },
          function(e, t, n) {
            "use strict";
            n.r(t);
            var r = function() {
              var e = this,
                t = e.$createElement,
                n = e._self._c || t;
              return n(
                "div",
                { staticClass: "el-tinymce" },
                [
                  n(
                    "vue-tinymce",
                    e._g(
                      {
                        staticClass: "vue-tinymce",
                        attrs: {
                          content: e.contentInternal,
                          config: e.configInternal
                        },
                        on: {
                          "update:content": function(t) {
                            e.contentInternal = t;
                          }
                        }
                      },
                      e.$listeners
                    )
                  ),
                  e._v(" "),
                  e.readonly
                    ? e._e()
                    : n(
                        "side",
                        e._g(
                          e._b(
                            { attrs: { upload: e.upload, editor: e.editor } },
                            "side",
                            e.$attrs,
                            !1
                          ),
                          e.$listeners
                        )
                      )
                ],
                1
              );
            };
            r._withStripped = !0;
            var o = function() {
              var e = this,
                t = e.$createElement,
                n = e._self._c || t;
              return e.sideShow
                ? n("div", { staticClass: "el-tinymce-side" }, [
                    n("div", { staticClass: "el-tinymce-assets-title" }, [
                      e._v(e._s(e.i18n.resource))
                    ]),
                    e._v(" "),
                    n(
                      "div",
                      { staticClass: "el-tinymce-assets-list" },
                      [
                        e._l(e.list, function(t, r) {
                          return e.itemShow[t.type]
                            ? [
                                n(
                                  "div",
                                  {
                                    class:
                                      "el-tinymce-assets-item el-tinymce-assets-item-" +
                                      t.type,
                                    on: {
                                      click: function(n) {
                                        e.dialogShow = t.type;
                                      }
                                    }
                                  },
                                  [
                                    n("i", {
                                      staticClass: "el-tinymce-assets-item-icon"
                                    }),
                                    e._v(e._s(t.title) + "\n      ")
                                  ]
                                ),
                                e._v(" "),
                                n(
                                  "el-dialog",
                                  {
                                    key: r,
                                    staticClass: "el-tinymce-dialog",
                                    attrs: {
                                      title: t.title,
                                      visible: e.dialogShow === t.type
                                    },
                                    on: {
                                      close: function(t) {
                                        e.dialogClose(r);
                                      }
                                    }
                                  },
                                  [
                                    n(
                                      "el-tabs",
                                      {
                                        model: {
                                          value: t.dialog.activeName,
                                          callback: function(n) {
                                            e.$set(t.dialog, "activeName", n);
                                          },
                                          expression: "item.dialog.activeName"
                                        }
                                      },
                                      e._l(t.dialog.tabs, function(r, o) {
                                        return n(
                                          "el-tab-pane",
                                          {
                                            key: o,
                                            attrs: {
                                              label: r.title,
                                              name: t.type + o
                                            }
                                          },
                                          [
                                            n(
                                              "div",
                                              {
                                                staticClass:
                                                  "el-tinymce-dialog-desc"
                                              },
                                              [e._v(e._s(r.desc))]
                                            ),
                                            e._v(" "),
                                            n(
                                              "el-form",
                                              {
                                                ref: r.formName,
                                                refInFor: !0,
                                                attrs: {
                                                  model: r.formData,
                                                  rules: r.formRules,
                                                  "label-width": "0"
                                                }
                                              },
                                              [
                                                n(
                                                  "el-form-item",
                                                  {
                                                    staticClass:
                                                      "el-tinymce-dialog-upload",
                                                    attrs: {
                                                      label: "",
                                                      prop: "content"
                                                    }
                                                  },
                                                  [
                                                    r.upload
                                                      ? n("el-single-upload", {
                                                          attrs: {
                                                            url:
                                                              r.formData
                                                                .content,
                                                            upload: e.upload,
                                                            type: t.accept,
                                                            size: r.upload.size,
                                                            readonly: !0
                                                          },
                                                          on: {
                                                            "update:url": function(
                                                              t
                                                            ) {
                                                              e.$set(
                                                                r.formData,
                                                                "content",
                                                                t
                                                              );
                                                            }
                                                          }
                                                        })
                                                      : n("el-input", {
                                                          model: {
                                                            value:
                                                              r.formData
                                                                .content,
                                                            callback: function(
                                                              t
                                                            ) {
                                                              e.$set(
                                                                r.formData,
                                                                "content",
                                                                t
                                                              );
                                                            },
                                                            expression:
                                                              "tab.formData.content"
                                                          }
                                                        })
                                                  ],
                                                  1
                                                ),
                                                e._v(" "),
                                                n(
                                                  "el-form-item",
                                                  {
                                                    staticClass:
                                                      "el-tinymce-dialog-btn"
                                                  },
                                                  [
                                                    n(
                                                      "el-button",
                                                      {
                                                        on: {
                                                          click: function(t) {
                                                            e.reset(
                                                              e.$refs[
                                                                r.formName
                                                              ][0]
                                                            );
                                                          }
                                                        }
                                                      },
                                                      [
                                                        e._v(
                                                          e._s(e.i18n.btn.reset)
                                                        )
                                                      ]
                                                    ),
                                                    e._v(" "),
                                                    n(
                                                      "el-button",
                                                      {
                                                        attrs: {
                                                          type: "primary"
                                                        },
                                                        on: {
                                                          click: function(n) {
                                                            e.submit(
                                                              e.$refs[
                                                                r.formName
                                                              ][0],
                                                              r.formData,
                                                              t.dialog.template
                                                            );
                                                          }
                                                        }
                                                      },
                                                      [
                                                        e._v(
                                                          "\n                  " +
                                                            e._s(
                                                              e.i18n.btn.submit
                                                            ) +
                                                            "\n                "
                                                        )
                                                      ]
                                                    )
                                                  ],
                                                  1
                                                )
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        );
                                      })
                                    )
                                  ],
                                  1
                                )
                              ]
                            : e._e();
                        })
                      ],
                      2
                    )
                  ])
                : e._e();
            };
            o._withStripped = !0;
            var i = n(6),
              a = n.n(i),
              u = n(0),
              s = {
                name: "ElTinymceSide",
                components: {
                  ElSingleUpload: a.a,
                  "el-dialog": u.Dialog,
                  "el-tabs": u.Tabs,
                  "el-tab-pane": u.TabPane,
                  "el-form": u.Form,
                  "el-form-item": u.FormItem,
                  "el-button": u.Button,
                  "el-input": u.Input
                },
                inheritAttrs: !1,
                props: {
                  side: { type: Boolean, default: !0 },
                  image: { type: Boolean, default: !0 },
                  audio: { type: Boolean, default: !0 },
                  video: { type: Boolean, default: !0 },
                  editor: { type: null, required: !0 },
                  i18n: {
                    type: Object,
                    default: function() {
                      return {
                        resource: "资源",
                        picture: "图片",
                        localPicture: "本地图片",
                        localPictureDesc:
                          "支持png、jpg、gif、svg、webp，大小不能超过10M",
                        localPictureRule: "请上传图片",
                        externalLinkPicture: "外链图片",
                        externalLinkPictureDesc: "支持png、jpg、gif、svg、webp",
                        externalLinkPictureRule: "请输入有效图片链接",
                        audio: "音频",
                        localAudio: "本地音频",
                        localAudioDesc:
                          "支持mp3、ogg、wav、flac、aac，大小不能超过100M",
                        localAudioRule: "请上传音频",
                        externalLinkAudio: "外链音频",
                        externalLinkAudioDesc: "支持mp3、ogg、wav、flac、aac",
                        externalLinkAudioRule: "请输入有效音频链接",
                        video: "视频",
                        localVideo: "本地视频",
                        localVideoDesc: "支持mp4，大小不能超过1G",
                        localVideoRule: "请上传视频",
                        externalLinkVideo: "外链视频",
                        externalLinkVideoDesc:
                          "支持mp4链接和第三方网站分享视频iframe代码",
                        externalLinkVideoRule: "请输入有效视频链接或代码",
                        btn: { reset: "重置", submit: "提交" }
                      };
                    }
                  },
                  upload: { required: !0, type: Function }
                },
                data: function() {
                  return {
                    list: [
                      {
                        type: "image",
                        accept: "image/*",
                        title: this.i18n.picture,
                        dialog: {
                          activeName: "image0",
                          tabs: [
                            {
                              title: this.i18n.localPicture,
                              desc: this.i18n.localPictureDesc,
                              upload: { size: 10240 },
                              formName: "image0",
                              formData: { content: "" },
                              formRules: {
                                content: [
                                  {
                                    required: !0,
                                    message: this.i18n.localPictureRule,
                                    trigger: "blur"
                                  }
                                ]
                              }
                            },
                            {
                              title: this.i18n.externalLinkPicture,
                              desc: this.i18n.externalLinkPictureDesc,
                              formName: "image1",
                              formData: { content: "" },
                              formRules: {
                                content: [
                                  {
                                    required: !0,
                                    message: this.i18n.externalLinkPictureRule,
                                    trigger: "blur",
                                    pattern: /\.(png|jpe?g|gif|svg|webp)$/
                                  }
                                ]
                              }
                            }
                          ],
                          template: function(e) {
                            return '<p class="el-tinymce-resource el-tinymce-image" style="text-align: center;" ><img src="'.concat(
                              e,
                              '"></p>'
                            );
                          }
                        }
                      },
                      {
                        type: "audio",
                        accept: ".mp3,.ogg,.wav,.flac,.aac",
                        title: this.i18n.audio,
                        dialog: {
                          activeName: "audio0",
                          tabs: [
                            {
                              title: this.i18n.localAudio,
                              desc: this.i18n.localAudioDesc,
                              upload: { size: 102400 },
                              formName: "audio0",
                              formData: { content: "" },
                              formRules: {
                                content: [
                                  {
                                    required: !0,
                                    message: this.i18n.localAudioRule,
                                    trigger: "blur"
                                  }
                                ]
                              }
                            },
                            {
                              title: this.i18n.externalLinkAudio,
                              desc: this.i18n.externalLinkAudioDesc,
                              formName: "audio1",
                              formData: { content: "" },
                              formRules: {
                                content: [
                                  {
                                    required: !0,
                                    message: this.i18n.externalLinkAudioRule,
                                    trigger: "blur",
                                    pattern: /\.(mp3|ogg|wav|flac|aac)$/
                                  }
                                ]
                              }
                            }
                          ],
                          template: function(e) {
                            return '<p class="el-tinymce-resource el-tinymce-audio" style="text-align: center;" ><audio src="'.concat(
                              e,
                              '" controls></audio></p>'
                            );
                          }
                        }
                      },
                      {
                        type: "video",
                        accept: "video/*",
                        title: this.i18n.video,
                        dialog: {
                          activeName: "video0",
                          tabs: [
                            {
                              title: this.i18n.externalLinkVideo,
                              desc: this.i18n.externalLinkVideoDesc,
                              formName: "video0",
                              formData: { content: "" },
                              formRules: {
                                content: [
                                  {
                                    required: !0,
                                    message: this.i18n.externalLinkVideoRule,
                                    trigger: "blur",
                                    pattern: /\.mp4|<\/iframe>$/
                                  }
                                ]
                              }
                            }
                          ],
                          template: function(e) {
                            return (
                              /\.mp4$/.test(e) &&
                                (e = '<video src="'.concat(
                                  e,
                                  '" controls></video>'
                                )),
                              '<p class="el-tinymce-resource el-tinymce-video" style="text-align: center;" >'.concat(
                                e,
                                "</p>"
                              )
                            );
                          }
                        }
                      }
                    ],
                    dialogShow: ""
                  };
                },
                computed: {
                  sideShow: function() {
                    return this.side && this.editor;
                  },
                  itemShow: function() {
                    return {
                      image: this.image,
                      audio: this.audio,
                      video: this.video
                    };
                  }
                },
                methods: {
                  dialogClose: function(e) {
                    var t = this;
                    this.list[e].dialog.tabs.forEach(function(e) {
                      t.reset(t.$refs[e.formName][0]);
                    }),
                      (this.dialogShow = "");
                  },
                  reset: function(e) {
                    e.resetFields();
                  },
                  submit: function(e, t, n) {
                    var r = this;
                    e.validate(function(e) {
                      if (!e) return !1;
                      r.editor.insertContent(n(t.content)), (r.dialogShow = "");
                    });
                  }
                }
              };
            function c(e, t, n, r, o, i, a, u) {
              var s,
                c = "function" == typeof e ? e.options : e;
              if (
                (t &&
                  ((c.render = t), (c.staticRenderFns = n), (c._compiled = !0)),
                r && (c.functional = !0),
                i && (c._scopeId = "data-v-" + i),
                a
                  ? ((s = function(e) {
                      (e =
                        e ||
                        (this.$vnode && this.$vnode.ssrContext) ||
                        (this.parent &&
                          this.parent.$vnode &&
                          this.parent.$vnode.ssrContext)) ||
                        "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                        (e = __VUE_SSR_CONTEXT__),
                        o && o.call(this, e),
                        e &&
                          e._registeredComponents &&
                          e._registeredComponents.add(a);
                    }),
                    (c._ssrRegister = s))
                  : o &&
                    (s = u
                      ? function() {
                          o.call(this, this.$root.$options.shadowRoot);
                        }
                      : o),
                s)
              )
                if (c.functional) {
                  c._injectStyles = s;
                  var l = c.render;
                  c.render = function(e, t) {
                    return s.call(t), l(e, t);
                  };
                } else {
                  var f = c.beforeCreate;
                  c.beforeCreate = f ? [].concat(f, s) : [s];
                }
              return { exports: e, options: c };
            }
            n(9);
            var l = c(s, o, [], !1, null, null, null);
            l.options.__file = "src/ElTinymce/components/Side.vue";
            var f = l.exports,
              d = n(7),
              m = {
                name: "ElTinymce",
                components: { VueTinymce: n.n(d).a, Side: f },
                inheritAttrs: !1,
                props: {
                  content: { type: String, required: !0 },
                  height: { type: Number, default: 500 },
                  readonly: { type: Boolean, default: !1 },
                  config: Object,
                  upload: { required: !0, type: Function }
                },
                data: function() {
                  return { editor: null, contentInternal: "" };
                },
                computed: {
                  configInternal: function() {
                    return Object.assign(
                      {
                        height: this.height,
                        readonly: this.readonly,
                        toolbar1:
                          "code | undo redo | fontsizeselect fontselect | blockquote hr | removeformat link unlink pastetext preview",
                        init_instance_callback: this.init_instance_callback
                      },
                      this.config
                    );
                  }
                },
                watch: {
                  content: { immediate: !0, handler: "setContent" },
                  contentInternal: "contentChange"
                },
                beforeDestroy: function() {
                  this.editor = null;
                },
                methods: {
                  init_instance_callback: function(e) {
                    (this.editor = e), this.setContent();
                  },
                  setContent: function() {
                    this.contentInternal !== this.content &&
                      (this.contentInternal = this.content);
                  },
                  contentChange: function() {
                    this.contentInternal !== this.content &&
                      this.$emit("update:content", this.contentInternal);
                  }
                }
              },
              p = (n(12), c(m, r, [], !1, null, null, null));
            (p.options.__file = "src/ElTinymce/index.vue"),
              (t.default = p.exports);
          }
        ]).ElTinymce;
      });
    },
    "76b1": function(e, t, n) {
      "use strict";
      n.r(t);
      n("f751"), n("cadf"), n("551c"), n("097d");
      var r = n("8bbf"),
        o = n.n(r),
        i = n("2645"),
        a = n.n(i),
        u = n("91b6"),
        s = {
          type: Object,
          default: function() {
            return {
              resource: o.a.i18n.t("editor.resource"),
              picture: o.a.i18n.t("editor.picture"),
              localPicture: o.a.i18n.t("editor.localPicture"),
              localPictureDesc: o.a.i18n.t("editor.localPictureDesc"),
              localPictureRule: o.a.i18n.t("editor.localPictureRule"),
              externalLinkPicture: o.a.i18n.t("editor.externalLinkPicture"),
              externalLinkPictureDesc: o.a.i18n.t(
                "editor.externalLinkPictureDesc"
              ),
              externalLinkPictureRule: o.a.i18n.t(
                "editor.externalLinkPictureRule"
              ),
              audio: o.a.i18n.t("editor.audio"),
              localAudio: o.a.i18n.t("editor.localAudio"),
              localAudioDesc: o.a.i18n.t("editor.localAudioDesc"),
              localAudioRule: o.a.i18n.t("editor.localAudioRule"),
              externalLinkAudio: o.a.i18n.t("editor.externalLinkAudio"),
              externalLinkAudioDesc: o.a.i18n.t("editor.externalLinkAudioDesc"),
              externalLinkAudioRule: o.a.i18n.t("editor.externalLinkAudioRule"),
              video: o.a.i18n.t("editor.video"),
              localVideo: o.a.i18n.t("editor.localVideo"),
              localVideoDesc: o.a.i18n.t("editor.localVideoDesc"),
              localVideoRule: o.a.i18n.t("editor.localVideoRule"),
              externalLinkVideo: o.a.i18n.t("editor.externalLinkVideo"),
              externalLinkVideoDesc: o.a.i18n.t("editor.externalLinkVideoDesc"),
              externalLinkVideoRule: o.a.i18n.t("editor.externalLinkVideoRule"),
              btn: {
                reset: o.a.i18n.t("action.reset"),
                submit: o.a.i18n.t("action.submit")
              }
            };
          }
        };
      Object.assign(a.a.props.upload, {
        required: !1,
        default: u["a"].fn.elUploadCloud
      }),
        Object.assign(a.a.components.Side.props.i18n, s);
      var c,
        l,
        f = a.a,
        d = f,
        m = n("2877"),
        p = Object(m["a"])(d, c, l, !1, null, null, null);
      p.options.__file = "Editor.vue";
      t["default"] = p.exports;
    },
    "7d86": function(e, t, n) {
      !(function(t, r) {
        e.exports = r(n("5c96"), n("c39a"), n("9e11"), n("f21c"));
      })(window, function(e, t, n, r) {
        return (function(e) {
          var t = {};
          function n(r) {
            if (t[r]) return t[r].exports;
            var o = (t[r] = { i: r, l: !1, exports: {} });
            return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
          }
          return (
            (n.m = e),
            (n.c = t),
            (n.d = function(e, t, r) {
              n.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: r });
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
              var r = Object.create(null);
              if (
                (n.r(r),
                Object.defineProperty(r, "default", {
                  enumerable: !0,
                  value: e
                }),
                2 & t && "string" != typeof e)
              )
                for (var o in e)
                  n.d(
                    r,
                    o,
                    function(t) {
                      return e[t];
                    }.bind(null, o)
                  );
              return r;
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
            n((n.s = 5))
          );
        })([
          function(t, n) {
            t.exports = e;
          },
          function(e, t, n) {
            var r = n(7);
            "string" == typeof r && (r = [[e.i, r, ""]]),
              r.locals && (e.exports = r.locals),
              (0, n(10).default)("0b99bd7f", r, !1, {});
          },
          function(e, n) {
            e.exports = t;
          },
          function(e, t) {
            e.exports = n;
          },
          function(e, t) {
            e.exports = r;
          },
          function(e, t, n) {
            "use strict";
            n.r(t),
              n.d(t, "ElSingleUpload", function() {
                return o;
              });
            var r,
              o = n(9).default;
            function i(e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "undefined" != typeof window &&
                    window.ElSingleUploadOptions;
              r
                ? console.warn(
                    "[ElSingleUpload] already installed. Vue.use(ElSingleUpload) should be called only once."
                  )
                : ((r = e),
                  "[object Object]" === Object.prototype.toString.call(t) &&
                    "[object Function]" ===
                      Object.prototype.toString.call(t.upload) &&
                    Object.assign(o.props.upload, {
                      required: !1,
                      default: t.upload
                    }),
                  r.component(o.name, o));
            }
            (o.install = i),
              "undefined" != typeof window && window.Vue && i(window.Vue);
          },
          function(e, t, n) {
            "use strict";
            var r = n(1);
            n.n(r).a;
          },
          function(e, t, n) {
            (e.exports = n(8)(!1)).push([
              e.i,
              "\n.el-single-upload {\n  position: relative;\n  width: 300px;\n  height: 90px;\n  display: inline-block;\n}\n.el-single-upload .view {\n  line-height: 1;\n  display: block;\n  border: 1px solid #d9d9d9;\n  width: calc(100% - 2px);\n  height: 100%;\n}\n.el-single-upload .upload {\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  position: relative;\n  line-height: 1;\n}\n.el-single-upload .el-upload-dragger {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n}\n.el-single-upload .el-upload-dragger .el-icon-upload {\n  font-size: 24px;\n  margin: 0 0 0 2px;\n  line-height: normal;\n}\n.el-single-upload.input .view {\n  height: calc(100% - 40px);\n}\n.el-single-upload.input .upload {\n  height: calc(100% - 40px);\n}\n.el-single-upload .el-upload__input {\n  display: none !important;\n}\n.el-single-upload .el-upload {\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  border: 1px dashed #d9d9d9;\n  border-radius: 6px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.el-single-upload .el-upload:hover {\n  border-color: #20a0ff;\n}\n.el-single-upload .upload.update {\n  position: absolute;\n  top: 0;\n  right: -28px;\n  z-index: 2;\n  width: auto;\n  height: auto;\n}\n.el-single-upload .upload.update .el-upload {\n  padding: 0 1px;\n  width: auto;\n  height: auto;\n  border-left: none;\n  border-radius: 0;\n}\n.el-single-upload .upload-btn {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 28px;\n}\n.el-single-upload .el-icon-upload {\n  font-size: 24px;\n  color: #8c939d;\n  background: #ffffff;\n}\n.el-single-upload .el-icon-upload:hover {\n  color: #20a0ff;\n}\n.el-single-upload .icon-delete {\n  position: absolute;\n  top: 28px;\n  right: -28px;\n  font-size: 24px;\n  cursor: pointer;\n  color: #8c939d;\n  border: 1px dashed #d9d9d9;\n  border-left: none;\n  padding: 0 1px;\n  line-height: 1;\n}\n.el-single-upload .icon-delete:hover {\n  border-color: #20a0ff;\n  color: #20a0ff;\n}\n.el-single-upload .icon-delete .el-icon-delete {\n  margin-left: 2px;\n}\n.el-single-upload .tip {\n  padding: 10px 0;\n  text-align: center;\n}\n.el-single-upload.image,\n.el-single-upload.video {\n  width: 200px;\n  height: 200px;\n}\n.el-single-upload.image .img,\n.el-single-upload.video .img {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n",
              ""
            ]);
          },
          function(e, t) {
            e.exports = function(e) {
              var t = [];
              return (
                (t.toString = function() {
                  return this.map(function(t) {
                    var n = (function(e, t) {
                      var n = e[1] || "",
                        r = e[3];
                      if (!r) return n;
                      if (t && "function" == typeof btoa) {
                        var o = (function(e) {
                            return (
                              "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
                              btoa(
                                unescape(encodeURIComponent(JSON.stringify(e)))
                              ) +
                              " */"
                            );
                          })(r),
                          i = r.sources.map(function(e) {
                            return "/*# sourceURL=" + r.sourceRoot + e + " */";
                          });
                        return [n]
                          .concat(i)
                          .concat([o])
                          .join("\n");
                      }
                      return [n].join("\n");
                    })(t, e);
                    return t[2] ? "@media " + t[2] + "{" + n + "}" : n;
                  }).join("");
                }),
                (t.i = function(e, n) {
                  "string" == typeof e && (e = [[null, e, ""]]);
                  for (var r = {}, o = 0; o < this.length; o++) {
                    var i = this[o][0];
                    "number" == typeof i && (r[i] = !0);
                  }
                  for (o = 0; o < e.length; o++) {
                    var a = e[o];
                    ("number" == typeof a[0] && r[a[0]]) ||
                      (n && !a[2]
                        ? (a[2] = n)
                        : n && (a[2] = "(" + a[2] + ") and (" + n + ")"),
                      t.push(a));
                  }
                }),
                t
              );
            };
          },
          function(e, t, n) {
            "use strict";
            n.r(t);
            var r = function() {
              var e,
                t = this,
                n = t.$createElement,
                r = t._self._c || n;
              return r(
                "div",
                {
                  staticClass: "el-single-upload",
                  class: ((e = { input: t.input }),
                  (e[t.typeClassName] = !0),
                  e)
                },
                [
                  t.view && t.urlInternal
                    ? [
                        "video" === t.typeClassName
                          ? r("video", {
                              ref: "media",
                              staticClass: "view",
                              attrs: { controls: "", src: t.urlInternal }
                            })
                          : "audio" === t.typeClassName
                            ? r("audio", {
                                ref: "media",
                                staticClass: "view",
                                attrs: { controls: "", src: t.urlInternal }
                              })
                            : r(
                                "a",
                                {
                                  staticClass: "view",
                                  attrs: {
                                    href: t.urlInternal,
                                    target: "_blank"
                                  }
                                },
                                [
                                  "image" === t.typeClassName
                                    ? r("img", {
                                        staticClass: "img",
                                        attrs: { src: t.urlInternal }
                                      })
                                    : r(
                                        "span",
                                        {
                                          staticStyle: {
                                            display: "inline-block",
                                            padding: "10px 15px"
                                          }
                                        },
                                        [
                                          t._v(
                                            t._s(
                                              t.file
                                                ? t.file.name
                                                : t.urlInternal
                                            )
                                          )
                                        ]
                                      )
                                ]
                              )
                      ]
                    : t._e(),
                  t._v(" "),
                  100 !== t.percentage
                    ? r("el-progress", { attrs: { percentage: t.percentage } })
                    : t._e(),
                  t._v(" "),
                  t.$attrs.disabled
                    ? t._e()
                    : r(
                        "el-upload",
                        t._b(
                          {
                            ref: "upload",
                            staticClass: "upload",
                            class: { update: t.urlInternal },
                            attrs: {
                              action: "",
                              "before-upload": t.beforeUpload,
                              "http-request": t.requestUpload,
                              "on-progress": t.progressUpload,
                              "on-success": t.successUpload,
                              "on-error": t.errorUpload,
                              accept: t.accept,
                              drag: t.drag,
                              multiple: !1,
                              "show-file-list": !1
                            }
                          },
                          "el-upload",
                          t.$attrs,
                          !1
                        ),
                        [
                          t.urlInternal
                            ? r("i", {
                                staticClass: "re-upload-btn el-icon-upload"
                              })
                            : r("i", {
                                staticClass: "upload-btn el-icon-upload"
                              })
                        ]
                      ),
                  t._v(" "),
                  t.urlInternal && t.del && !t.$attrs.disabled
                    ? r(
                        "el-popover-dialog",
                        t._b(
                          {
                            staticClass: "icon-delete",
                            attrs: { "btn-show": !1 },
                            on: { confirm: t.delConfirm }
                          },
                          "el-popover-dialog",
                          t.$attrs,
                          !1
                        ),
                        [
                          r("i", {
                            staticClass: "el-icon-delete",
                            attrs: { slot: "reference" },
                            slot: "reference"
                          })
                        ]
                      )
                    : t._e(),
                  t._v(" "),
                  t.input
                    ? r("el-input", {
                        attrs: {
                          placeholder: t.$attrs.placeholder || "文件链接地址",
                          disabled: t.$attrs.disabled,
                          readonly: t.readonly
                        },
                        on: {
                          blur: function(e) {
                            t.setUrl(t.urlInternal);
                          }
                        },
                        model: {
                          value: t.urlInternal,
                          callback: function(e) {
                            t.urlInternal = e;
                          },
                          expression: "urlInternal"
                        }
                      })
                    : t._e(),
                  t._v(" "),
                  t.tip
                    ? r("div", { staticClass: "tip" }, [t._v(t._s(t.tip))])
                    : t._e(),
                  t._v(" "),
                  t._t("default")
                ],
                2
              );
            };
            r._withStripped = !0;
            var o = n(0),
              i = n(2),
              a = n.n(i),
              u = n(3),
              s = n.n(u),
              c = n(4),
              l = n.n(c),
              f = {
                name: "ElSingleUpload",
                components: {
                  "el-progress": o.Progress,
                  "el-upload": o.Upload,
                  "el-input": o.Input,
                  ElPopoverDialog: l.a
                },
                inheritAttrs: !1,
                props: {
                  upload: { required: !0, type: Function },
                  resPathOfUrl: { type: String, default: "data.url" },
                  url: { required: !0 },
                  checkUpload: Function,
                  error: Function,
                  del: { type: Boolean, default: !0 },
                  view: { type: Boolean, default: !0 },
                  size: { type: Number },
                  type: {
                    validator: function(e) {
                      return (
                        "" === e ||
                        /^(image|audio|video|text|application|\.)/.test(e)
                      );
                    },
                    default: "image"
                  },
                  input: { type: Boolean, default: !0 },
                  readonly: { type: Boolean, default: !1 },
                  drag: { type: Boolean, default: !0 },
                  tip: String
                },
                data: function() {
                  return { file: null, urlInternal: "", percentage: 100 };
                },
                watch: {
                  url: {
                    immediate: !0,
                    handler: function(e, t) {
                      this.setUrl(e);
                    }
                  }
                },
                computed: {
                  accept: function() {
                    return /^(image|audio|video|text)$/.test(this.type)
                      ? "".concat(this.type, "/*")
                      : this.type;
                  },
                  typeClassName: function() {
                    return /^\.(png|jpe?g|gif|svg|webp)/.test(this.type) ||
                      /^image/.test(this.type)
                      ? "image"
                      : /^\.(ogg|mp3|wav|flac|aac)/.test(this.type) ||
                        /^audio/.test(this.type)
                        ? "audio"
                        : /^\.(mp4|webm)/.test(this.type) ||
                          /^video/.test(this.type)
                          ? "video"
                          : "";
                  }
                },
                methods: {
                  setUrl: function(e) {
                    var t =
                      "[object String]" === Object.prototype.toString.call(e);
                    t && (t = /^https?:\/\//i.test(e)),
                      t
                        ? ((this.urlInternal = e),
                          this.$nextTick(function() {
                            var e = this;
                            this.$refs.media &&
                              (this.$refs.media.addEventListener(
                                "loadedmetadata",
                                function(t) {
                                  e.$emit(
                                    "media-duration",
                                    e.$refs.media.duration
                                  );
                                },
                                !0
                              ),
                              this.$refs.media.addEventListener(
                                "error",
                                function(t) {
                                  e.$emit("media-load-error", t);
                                },
                                !0
                              ));
                          }))
                        : ((this.file = null),
                          (this.urlInternal = ""),
                          this.$refs.upload && this.$refs.upload.clearFiles(),
                          this.$emit("media-duration", "")),
                      this.urlInternal !== this.url &&
                        this.$emit("update:url", this.urlInternal);
                  },
                  beforeUpload: function(e) {
                    this.file = e;
                    var t = a()(e, this.type, this.size);
                    return this.checkUpload
                      ? this.checkUpload(e, t)
                      : (t.message && o.Message.error(t.message), t.validate);
                  },
                  requestUpload: function(e) {
                    return this.$emit("request-upload", e), this.upload(e);
                  },
                  progressUpload: function(e, t) {
                    var n = parseInt(e.percent);
                    n >= 100 && (n = 99), (this.percentage = n);
                  },
                  successUpload: function(e) {
                    this.setUrl(s()(e, this.resPathOfUrl)),
                      (this.percentage = 100),
                      this.$emit("success-upload", e),
                      this.$emit("finish-upload");
                  },
                  errorUpload: function(e, t) {
                    (this.percentage = 100),
                      this.error
                        ? this.error(e, t)
                        : o.Message.error("上传失败"),
                      this.$emit("error-upload", { err: e, file: t }),
                      this.$emit("finish-upload");
                  },
                  delConfirm: function() {
                    this.setUrl();
                  }
                }
              };
            n(6);
            var d = (function(e, t, n, r, o, i, a, u) {
              var s,
                c = "function" == typeof e ? e.options : e;
              if (
                (t &&
                  ((c.render = t), (c.staticRenderFns = n), (c._compiled = !0)),
                r && (c.functional = !0),
                i && (c._scopeId = "data-v-" + i),
                a
                  ? ((s = function(e) {
                      (e =
                        e ||
                        (this.$vnode && this.$vnode.ssrContext) ||
                        (this.parent &&
                          this.parent.$vnode &&
                          this.parent.$vnode.ssrContext)) ||
                        "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                        (e = __VUE_SSR_CONTEXT__),
                        o && o.call(this, e),
                        e &&
                          e._registeredComponents &&
                          e._registeredComponents.add(a);
                    }),
                    (c._ssrRegister = s))
                  : o &&
                    (s = u
                      ? function() {
                          o.call(this, this.$root.$options.shadowRoot);
                        }
                      : o),
                s)
              )
                if (c.functional) {
                  c._injectStyles = s;
                  var l = c.render;
                  c.render = function(e, t) {
                    return s.call(t), l(e, t);
                  };
                } else {
                  var f = c.beforeCreate;
                  c.beforeCreate = f ? [].concat(f, s) : [s];
                }
              return { exports: e, options: c };
            })(f, r, [], !1, null, null, null);
            (d.options.__file = "src/ElSingleUpload.vue"),
              (t.default = d.exports);
          },
          function(e, t, n) {
            "use strict";
            function r(e, t) {
              for (var n = [], r = {}, o = 0; o < t.length; o++) {
                var i = t[o],
                  a = i[0],
                  u = {
                    id: e + ":" + o,
                    css: i[1],
                    media: i[2],
                    sourceMap: i[3]
                  };
                r[a]
                  ? r[a].parts.push(u)
                  : n.push((r[a] = { id: a, parts: [u] }));
              }
              return n;
            }
            n.r(t),
              n.d(t, "default", function() {
                return p;
              });
            var o = "undefined" != typeof document;
            if ("undefined" != typeof DEBUG && DEBUG && !o)
              throw new Error(
                "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
              );
            var i = {},
              a =
                o &&
                (document.head || document.getElementsByTagName("head")[0]),
              u = null,
              s = 0,
              c = !1,
              l = function() {},
              f = null,
              d = "data-vue-ssr-id",
              m =
                "undefined" != typeof navigator &&
                /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
            function p(e, t, n, o) {
              (c = n), (f = o || {});
              var a = r(e, t);
              return (
                g(a),
                function(t) {
                  for (var n = [], o = 0; o < a.length; o++) {
                    var u = a[o];
                    (s = i[u.id]).refs--, n.push(s);
                  }
                  for (
                    t ? g((a = r(e, t))) : (a = []), o = 0;
                    o < n.length;
                    o++
                  ) {
                    var s;
                    if (0 === (s = n[o]).refs) {
                      for (var c = 0; c < s.parts.length; c++) s.parts[c]();
                      delete i[s.id];
                    }
                  }
                }
              );
            }
            function g(e) {
              for (var t = 0; t < e.length; t++) {
                var n = e[t],
                  r = i[n.id];
                if (r) {
                  r.refs++;
                  for (var o = 0; o < r.parts.length; o++)
                    r.parts[o](n.parts[o]);
                  for (; o < n.parts.length; o++) r.parts.push(v(n.parts[o]));
                  r.parts.length > n.parts.length &&
                    (r.parts.length = n.parts.length);
                } else {
                  var a = [];
                  for (o = 0; o < n.parts.length; o++) a.push(v(n.parts[o]));
                  i[n.id] = { id: n.id, refs: 1, parts: a };
                }
              }
            }
            function h() {
              var e = document.createElement("style");
              return (e.type = "text/css"), a.appendChild(e), e;
            }
            function v(e) {
              var t,
                n,
                r = document.querySelector("style[" + d + '~="' + e.id + '"]');
              if (r) {
                if (c) return l;
                r.parentNode.removeChild(r);
              }
              if (m) {
                var o = s++;
                (r = u || (u = h())),
                  (t = y.bind(null, r, o, !1)),
                  (n = y.bind(null, r, o, !0));
              } else
                (r = h()),
                  (t = function(e, t) {
                    var n = t.css,
                      r = t.media,
                      o = t.sourceMap;
                    if (
                      (r && e.setAttribute("media", r),
                      f.ssrId && e.setAttribute(d, t.id),
                      o &&
                        ((n += "\n/*# sourceURL=" + o.sources[0] + " */"),
                        (n +=
                          "\n/*# sourceMappingURL=data:application/json;base64," +
                          btoa(
                            unescape(encodeURIComponent(JSON.stringify(o)))
                          ) +
                          " */")),
                      e.styleSheet)
                    )
                      e.styleSheet.cssText = n;
                    else {
                      for (; e.firstChild; ) e.removeChild(e.firstChild);
                      e.appendChild(document.createTextNode(n));
                    }
                  }.bind(null, r)),
                  (n = function() {
                    r.parentNode.removeChild(r);
                  });
              return (
                t(e),
                function(r) {
                  if (r) {
                    if (
                      r.css === e.css &&
                      r.media === e.media &&
                      r.sourceMap === e.sourceMap
                    )
                      return;
                    t((e = r));
                  } else n();
                }
              );
            }
            var b = (function() {
              var e = [];
              return function(t, n) {
                return (e[t] = n), e.filter(Boolean).join("\n");
              };
            })();
            function y(e, t, n, r) {
              var o = n ? "" : r.css;
              if (e.styleSheet) e.styleSheet.cssText = b(t, o);
              else {
                var i = document.createTextNode(o),
                  a = e.childNodes;
                a[t] && e.removeChild(a[t]),
                  a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
              }
            }
          }
        ]).ElSingleUpload;
      });
    },
    d834: function(e, t, n) {
      !(function(t, r) {
        e.exports = r(n("e562"));
      })(window, function(e) {
        return (function(e) {
          var t = {};
          function n(r) {
            if (t[r]) return t[r].exports;
            var o = (t[r] = { i: r, l: !1, exports: {} });
            return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
          }
          return (
            (n.m = e),
            (n.c = t),
            (n.d = function(e, t, r) {
              n.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: r });
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
              var r = Object.create(null);
              if (
                (n.r(r),
                Object.defineProperty(r, "default", {
                  enumerable: !0,
                  value: e
                }),
                2 & t && "string" != typeof e)
              )
                for (var o in e)
                  n.d(
                    r,
                    o,
                    function(t) {
                      return e[t];
                    }.bind(null, o)
                  );
              return r;
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
            n((n.s = 1))
          );
        })([
          function(t, n) {
            t.exports = e;
          },
          function(e, t, n) {
            "use strict";
            n.r(t),
              n.d(t, "VueTinymce", function() {
                return o;
              });
            var r,
              o = n(2).default;
            function i(e) {
              r
                ? console.warn(
                    "[VueTinymce] already installed. Vue.use(VueTinymce) should be called only once."
                  )
                : (r = e).component(o.name, o);
            }
            (o.install = i),
              "undefined" != typeof window && window.Vue && i(window.Vue);
          },
          function(e, t, n) {
            "use strict";
            n.r(t);
            var r = function() {
              var e = this.$createElement,
                t = this._self._c || e;
              return t("div", { staticClass: "vue-tinymce-comp" }, [
                t("textarea", { ref: "editor" })
              ]);
            };
            r._withStripped = !0;
            var o = n(0),
              i = n.n(o),
              a = (function(e, t, n, r, o, i, a, u) {
                var s,
                  c = "function" == typeof e ? e.options : e;
                if (
                  (t &&
                    ((c.render = t),
                    (c.staticRenderFns = n),
                    (c._compiled = !0)),
                  r && (c.functional = !0),
                  i && (c._scopeId = "data-v-" + i),
                  a
                    ? ((s = function(e) {
                        (e =
                          e ||
                          (this.$vnode && this.$vnode.ssrContext) ||
                          (this.parent &&
                            this.parent.$vnode &&
                            this.parent.$vnode.ssrContext)) ||
                          "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                          (e = __VUE_SSR_CONTEXT__),
                          o && o.call(this, e),
                          e &&
                            e._registeredComponents &&
                            e._registeredComponents.add(a);
                      }),
                      (c._ssrRegister = s))
                    : o &&
                      (s = u
                        ? function() {
                            o.call(this, this.$root.$options.shadowRoot);
                          }
                        : o),
                  s)
                )
                  if (c.functional) {
                    c._injectStyles = s;
                    var l = c.render;
                    c.render = function(e, t) {
                      return s.call(t), l(e, t);
                    };
                  } else {
                    var f = c.beforeCreate;
                    c.beforeCreate = f ? [].concat(f, s) : [s];
                  }
                return { exports: e, options: c };
              })(
                {
                  name: "VueTinymce",
                  props: {
                    content: { type: String, required: !0 },
                    updateEvent: {
                      type: String,
                      default: "beforeaddundo undo redo keyup"
                    },
                    url: {
                      type: String,
                      default: "https://cdn.jsdelivr.net/npm/tinymce@latest"
                    },
                    config: {
                      type: Object,
                      default: function() {
                        return {};
                      }
                    }
                  },
                  data: function() {
                    return { editor: null };
                  },
                  watch: {
                    config: { handler: "init", immediate: !0, deep: !0 },
                    content: { handler: "setContent", immediate: !0 }
                  },
                  beforeDestroy: function() {
                    this.destroy();
                  },
                  methods: {
                    init: function() {
                      var e = this;
                      this.destroy();
                      var t = {};
                      "[object Object]" ===
                        Object.prototype.toString.call(this.config) &&
                        Object.keys(this.config).length &&
                        (t = Object.assign(t, this.config)),
                        !1 !== t.language &&
                          ("[object String]" !==
                            Object.prototype.toString.call(t.language) &&
                            (t.language = "zh_CN"),
                          "[object String]" !==
                            Object.prototype.toString.call(t.language_url) &&
                            (t.language_url = "https://cdn.jsdelivr.net/npm/@panhezeng/vue-tinymce@latest/src/langs/".concat(
                              t.language,
                              ".min.js"
                            )));
                      var n = {
                        font_formats:
                          "Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Courier New=courier new,courier;Helvetica=helvetica;Symbol=symbol;Times New Roman=times new roman,times;Verdana=verdana,geneva;"
                      };
                      if (
                        ("zh_CN" === t.language &&
                          ((n.font_formats =
                            '微软雅黑="微软雅黑";苹方="苹方";宋体="宋体";黑体="黑体";仿宋="仿宋";楷体="楷体";隶书="隶书";幼圆="幼圆";' +
                            n.font_formats),
                          (n.content_style =
                            'body, td, pre {font-family:"微软雅黑", "苹方", "宋体", Verdana, Arial, Helvetica, sans-serif;}')),
                        (t = Object.assign(
                          {
                            convert_urls: !1,
                            branding: !1,
                            theme_url: "".concat(
                              this.url,
                              "/themes/modern/theme.min.js"
                            ),
                            skin_url: "".concat(this.url, "/skins/lightgray"),
                            menubar: !1,
                            fontsize_formats:
                              "12px 13px 14px 15px 16px 18px 20px 24px",
                            external_plugins: {},
                            plugins:
                              "code hr link textcolor colorpicker advlist lists contextmenu paste table image imagetools media preview",
                            contextmenu: "selectall copy paste inserttable",
                            toolbar1:
                              "code | undo redo | fontsizeselect fontselect | blockquote hr | removeformat link unlink pastetext preview | image media",
                            toolbar2:
                              "bold italic underline strikethrough | forecolor backcolor | indent outdent | alignleft aligncenter alignright alignjustify | bullist numlist"
                          },
                          n,
                          t
                        )),
                        "[object String]" ===
                          Object.prototype.toString.call(t.plugins))
                      ) {
                        var r = t.plugins.match(/([\d\w]+)/gm);
                        "[object Array]" ===
                          Object.prototype.toString.call(r) &&
                          r.forEach(function(n) {
                            t.external_plugins[n] = ""
                              .concat(e.url, "/plugins/")
                              .concat(n, "/plugin.min.js");
                          });
                      }
                      delete t.plugins,
                        this.$nextTick(function() {
                          (t.target = e.$refs.editor),
                            (t.init_instance_callback = function(t) {
                              "[object Function]" ===
                                Object.prototype.toString.call(
                                  e.config.init_instance_callback
                                ) && e.config.init_instance_callback(t),
                                (e.editor = t),
                                e.setContent(),
                                t.on(
                                  e.updateEvent,
                                  i.a.util.Delay.debounce(function() {
                                    e.contentChange();
                                  }, 300)
                                );
                            }),
                            i.a.init(t);
                        });
                    },
                    destroy: function() {
                      try {
                        this.editor &&
                          (this.editor.remove(),
                          this.editor.destroy(),
                          (this.editor = null));
                      } catch (e) {}
                    },
                    setContent: function() {
                      this.editor &&
                        this.editor.getContent() !== this.content &&
                        this.editor.setContent(this.content);
                    },
                    contentChange: function() {
                      if (this.editor) {
                        var e = this.editor.getContent();
                        this.$emit("update:content", e),
                          this.$emit("content-change", e);
                      }
                    }
                  }
                },
                r,
                [],
                !1,
                null,
                null,
                null
              );
            (a.options.__file = "src/VueTinymce.vue"), (t.default = a.exports);
          }
        ]).VueTinymce;
      });
    },
    e562: function(e, t, n) {
      (function() {
        (function() {
          "use strict";
          var t = function() {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            },
            n = function(e, t) {
              return function() {
                for (var n = [], r = 0; r < arguments.length; r++)
                  n[r] = arguments[r];
                return e(t.apply(null, n));
              };
            },
            r = function(e) {
              return function() {
                return e;
              };
            },
            o = function(e) {
              return e;
            };
          function i(e) {
            for (var t = [], n = 1; n < arguments.length; n++)
              t[n - 1] = arguments[n];
            return function() {
              for (var n = [], r = 0; r < arguments.length; r++)
                n[r] = arguments[r];
              var o = t.concat(n);
              return e.apply(null, o);
            };
          }
          var a,
            u,
            s,
            c,
            l,
            f,
            d,
            m,
            p,
            g,
            h,
            v,
            b,
            y = function(e) {
              return function() {
                for (var t = [], n = 0; n < arguments.length; n++)
                  t[n] = arguments[n];
                return !e.apply(null, t);
              };
            },
            C = function(e) {
              return function() {
                throw new Error(e);
              };
            },
            w = r(!1),
            x = r(!0),
            E = w,
            S = x,
            N = function() {
              return k;
            },
            k = (function() {
              var e = function(e) {
                  return e.isNone();
                },
                t = function(e) {
                  return e();
                },
                n = function(e) {
                  return e;
                },
                o = function() {},
                i = function() {
                  return null;
                },
                a = function() {},
                u = {
                  fold: function(e, t) {
                    return e();
                  },
                  is: E,
                  isSome: E,
                  isNone: S,
                  getOr: n,
                  getOrThunk: t,
                  getOrDie: function(e) {
                    throw new Error(e || "error: getOrDie called on none.");
                  },
                  getOrNull: i,
                  getOrUndefined: a,
                  or: n,
                  orThunk: t,
                  map: N,
                  ap: N,
                  each: o,
                  bind: N,
                  flatten: N,
                  exists: E,
                  forall: S,
                  filter: N,
                  equals: e,
                  equals_: e,
                  toArray: function() {
                    return [];
                  },
                  toString: r("none()")
                };
              return Object.freeze && Object.freeze(u), u;
            })(),
            T = function(e) {
              var t = function() {
                  return e;
                },
                n = function() {
                  return i;
                },
                r = function(t) {
                  return T(t(e));
                },
                o = function(t) {
                  return t(e);
                },
                i = {
                  fold: function(t, n) {
                    return n(e);
                  },
                  is: function(t) {
                    return e === t;
                  },
                  isSome: S,
                  isNone: E,
                  getOr: t,
                  getOrThunk: t,
                  getOrDie: t,
                  getOrNull: t,
                  getOrUndefined: t,
                  or: n,
                  orThunk: n,
                  map: r,
                  ap: function(t) {
                    return t.fold(N, function(t) {
                      return T(t(e));
                    });
                  },
                  each: function(t) {
                    t(e);
                  },
                  bind: o,
                  flatten: t,
                  exists: o,
                  forall: o,
                  filter: function(t) {
                    return t(e) ? i : k;
                  },
                  equals: function(t) {
                    return t.is(e);
                  },
                  equals_: function(t, n) {
                    return t.fold(E, function(t) {
                      return n(e, t);
                    });
                  },
                  toArray: function() {
                    return [e];
                  },
                  toString: function() {
                    return "some(" + e + ")";
                  }
                };
              return i;
            },
            _ = function(e) {
              return null === e || void 0 === e ? k : T(e);
            },
            A = { some: T, none: N, from: _ },
            R = function(e) {
              if (null === e) return "null";
              var t = typeof e;
              return "object" === t && Array.prototype.isPrototypeOf(e)
                ? "array"
                : "object" === t && String.prototype.isPrototypeOf(e)
                  ? "string"
                  : t;
            },
            D = function(e) {
              return function(t) {
                return R(t) === e;
              };
            },
            B = D("string"),
            O = D("object"),
            P = D("array"),
            I = D("null"),
            L = D("boolean"),
            M = D("function"),
            F = D("number"),
            U = (function() {
              var e = Array.prototype.indexOf,
                t = function(t, n) {
                  return e.call(t, n);
                },
                n = function(e, t) {
                  return J(e, t);
                };
              return void 0 === e ? n : t;
            })(),
            j = function(e, t) {
              var n = U(e, t);
              return -1 === n ? A.none() : A.some(n);
            },
            z = function(e, t) {
              return U(e, t) > -1;
            },
            V = function(e, t) {
              return K(e, t).isSome();
            },
            H = function(e, t) {
              for (var n = e.length, r = new Array(n), o = 0; o < n; o++) {
                var i = e[o];
                r[o] = t(i, o, e);
              }
              return r;
            },
            q = function(e, t) {
              for (var n = 0, r = e.length; n < r; n++) {
                var o = e[n];
                t(o, n, e);
              }
            },
            $ = function(e, t) {
              for (var n = e.length - 1; n >= 0; n--) {
                var r = e[n];
                t(r, n, e);
              }
            },
            W = function(e, t) {
              for (var n = [], r = [], o = 0, i = e.length; o < i; o++) {
                var a = e[o],
                  u = t(a, o, e) ? n : r;
                u.push(a);
              }
              return { pass: n, fail: r };
            },
            Y = function(e, t) {
              for (var n = [], r = 0, o = e.length; r < o; r++) {
                var i = e[r];
                t(i, r, e) && n.push(i);
              }
              return n;
            },
            G = function(e, t, n) {
              return (
                $(e, function(e) {
                  n = t(n, e);
                }),
                n
              );
            },
            X = function(e, t, n) {
              return (
                q(e, function(e) {
                  n = t(n, e);
                }),
                n
              );
            },
            Z = function(e, t) {
              for (var n = 0, r = e.length; n < r; n++) {
                var o = e[n];
                if (t(o, n, e)) return A.some(o);
              }
              return A.none();
            },
            K = function(e, t) {
              for (var n = 0, r = e.length; n < r; n++) {
                var o = e[n];
                if (t(o, n, e)) return A.some(n);
              }
              return A.none();
            },
            J = function(e, t) {
              for (var n = 0, r = e.length; n < r; ++n)
                if (e[n] === t) return n;
              return -1;
            },
            Q = Array.prototype.push,
            ee = function(e) {
              for (var t = [], n = 0, r = e.length; n < r; ++n) {
                if (!Array.prototype.isPrototypeOf(e[n]))
                  throw new Error(
                    "Arr.flatten item " + n + " was not an array, input: " + e
                  );
                Q.apply(t, e[n]);
              }
              return t;
            },
            te = function(e, t) {
              var n = H(e, t);
              return ee(n);
            },
            ne = function(e, t) {
              for (var n = 0, r = e.length; n < r; ++n) {
                var o = e[n];
                if (!0 !== t(o, n, e)) return !1;
              }
              return !0;
            },
            re = Array.prototype.slice,
            oe = function(e) {
              var t = re.call(e, 0);
              return t.reverse(), t;
            },
            ie = function(e, t) {
              return Y(e, function(e) {
                return !z(t, e);
              });
            },
            ae = function(e, t) {
              for (var n = {}, r = 0, o = e.length; r < o; r++) {
                var i = e[r];
                n[String(i)] = t(i, r);
              }
              return n;
            },
            ue = function(e, t) {
              var n = re.call(e, 0);
              return n.sort(t), n;
            },
            se = function(e) {
              return 0 === e.length ? A.none() : A.some(e[0]);
            },
            ce = function(e) {
              return 0 === e.length ? A.none() : A.some(e[e.length - 1]);
            },
            le = M(Array.from)
              ? Array.from
              : function(e) {
                  return re.call(e);
                },
            fe =
              "undefined" !== typeof window
                ? window
                : Function("return this;")(),
            de = function(e, t) {
              for (
                var n = void 0 !== t && null !== t ? t : fe, r = 0;
                r < e.length && void 0 !== n && null !== n;
                ++r
              )
                n = n[e[r]];
              return n;
            },
            me = function(e, t) {
              var n = e.split(".");
              return de(n, t);
            },
            pe = function(e, t) {
              return me(e, t);
            },
            ge = function(e, t) {
              var n = pe(e, t);
              if (void 0 === n || null === n)
                throw e + " not available on this browser";
              return n;
            },
            he = { getOrDie: ge },
            ve = function() {
              return he.getOrDie("URL");
            },
            be = function(e) {
              return ve().createObjectURL(e);
            },
            ye = function(e) {
              ve().revokeObjectURL(e);
            },
            Ce = { createObjectURL: be, revokeObjectURL: ye },
            we = navigator,
            xe = we.userAgent,
            Ee = function(e) {
              return "matchMedia" in window && matchMedia(e).matches;
            };
          (a = !1),
            (p = /Android/.test(xe)),
            (u = /WebKit/.test(xe)),
            (s =
              !u && !a && /MSIE/gi.test(xe) && /Explorer/gi.test(we.appName)),
            (s = s && /MSIE (\w+)\./.exec(xe)[1]),
            (c =
              -1 !== xe.indexOf("Trident/") &&
              (-1 !== xe.indexOf("rv:") ||
                -1 !== we.appName.indexOf("Netscape")) &&
              11),
            (l = -1 !== xe.indexOf("Edge/") && !s && !c && 12),
            (s = s || c || l),
            (f = !u && !c && /Gecko/.test(xe)),
            (d = -1 !== xe.indexOf("Mac")),
            (m = /(iPad|iPhone)/.test(xe)),
            (g =
              "FormData" in window &&
              "FileReader" in window &&
              "URL" in window &&
              !!Ce.createObjectURL),
            (h = Ee("only screen and (max-device-width: 480px)") && (p || m)),
            (v = Ee("only screen and (min-width: 800px)") && (p || m)),
            (b = -1 !== xe.indexOf("Windows Phone")),
            l && (u = !1);
          var Se,
            Ne =
              !m || g || parseInt(xe.match(/AppleWebKit\/(\d*)/)[1], 10) >= 534,
            ke = {
              opera: a,
              webkit: u,
              ie: s,
              gecko: f,
              mac: d,
              iOS: m,
              android: p,
              contentEditable: Ne,
              transparentSrc:
                "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
              caretAfter: 8 !== s,
              range: window.getSelection && "Range" in window,
              documentMode: s && !l ? document.documentMode || 7 : 10,
              fileApi: g,
              ceFalse: !1 === s || s > 8,
              cacheSuffix: null,
              container: null,
              overrideViewPort: null,
              experimentalShadowDom: !1,
              canHaveCSP: !1 === s || s > 11,
              desktop: !h && !v,
              windowsPhone: b
            },
            Te = function() {
              function e(e, t) {
                return function() {
                  e.apply(t, arguments);
                };
              }
              var t =
                  Array.isArray ||
                  function(e) {
                    return (
                      "[object Array]" === Object.prototype.toString.call(e)
                    );
                  },
                n = function(t) {
                  if ("object" !== typeof this)
                    throw new TypeError("Promises must be constructed via new");
                  if ("function" !== typeof t)
                    throw new TypeError("not a function");
                  (this._state = null),
                    (this._value = null),
                    (this._deferreds = []),
                    c(t, e(i, this), e(a, this));
                },
                r =
                  n.immediateFn ||
                  ("function" === typeof setImmediate && setImmediate) ||
                  function(e) {
                    setTimeout(e, 1);
                  };
              function o(e) {
                var t = this;
                null !== this._state
                  ? r(function() {
                      var n = t._state ? e.onFulfilled : e.onRejected;
                      if (null !== n) {
                        var r;
                        try {
                          r = n(t._value);
                        } catch (o) {
                          return void e.reject(o);
                        }
                        e.resolve(r);
                      } else (t._state ? e.resolve : e.reject)(t._value);
                    })
                  : this._deferreds.push(e);
              }
              function i(t) {
                try {
                  if (t === this)
                    throw new TypeError(
                      "A promise cannot be resolved with itself."
                    );
                  if (t && ("object" === typeof t || "function" === typeof t)) {
                    var n = t.then;
                    if ("function" === typeof n)
                      return void c(e(n, t), e(i, this), e(a, this));
                  }
                  (this._state = !0), (this._value = t), u.call(this);
                } catch (r) {
                  a.call(this, r);
                }
              }
              function a(e) {
                (this._state = !1), (this._value = e), u.call(this);
              }
              function u() {
                for (var e = 0, t = this._deferreds.length; e < t; e++)
                  o.call(this, this._deferreds[e]);
                this._deferreds = null;
              }
              function s(e, t, n, r) {
                (this.onFulfilled = "function" === typeof e ? e : null),
                  (this.onRejected = "function" === typeof t ? t : null),
                  (this.resolve = n),
                  (this.reject = r);
              }
              function c(e, t, n) {
                var r = !1;
                try {
                  e(
                    function(e) {
                      r || ((r = !0), t(e));
                    },
                    function(e) {
                      r || ((r = !0), n(e));
                    }
                  );
                } catch (o) {
                  if (r) return;
                  (r = !0), n(o);
                }
              }
              return (
                (n.prototype.catch = function(e) {
                  return this.then(null, e);
                }),
                (n.prototype.then = function(e, t) {
                  var r = this;
                  return new n(function(n, i) {
                    o.call(r, new s(e, t, n, i));
                  });
                }),
                (n.all = function() {
                  var e = Array.prototype.slice.call(
                    1 === arguments.length && t(arguments[0])
                      ? arguments[0]
                      : arguments
                  );
                  return new n(function(t, n) {
                    if (0 === e.length) return t([]);
                    var r = e.length;
                    function o(i, a) {
                      try {
                        if (
                          a &&
                          ("object" === typeof a || "function" === typeof a)
                        ) {
                          var u = a.then;
                          if ("function" === typeof u)
                            return void u.call(
                              a,
                              function(e) {
                                o(i, e);
                              },
                              n
                            );
                        }
                        (e[i] = a), 0 === --r && t(e);
                      } catch (s) {
                        n(s);
                      }
                    }
                    for (var i = 0; i < e.length; i++) o(i, e[i]);
                  });
                }),
                (n.resolve = function(e) {
                  return e && "object" === typeof e && e.constructor === n
                    ? e
                    : new n(function(t) {
                        t(e);
                      });
                }),
                (n.reject = function(e) {
                  return new n(function(t, n) {
                    n(e);
                  });
                }),
                (n.race = function(e) {
                  return new n(function(t, n) {
                    for (var r = 0, o = e.length; r < o; r++) e[r].then(t, n);
                  });
                }),
                n
              );
            },
            _e = window.Promise ? window.Promise : Te(),
            Ae = function(e, t) {
              var n,
                r = window.requestAnimationFrame,
                o = ["ms", "moz", "webkit"],
                i = function(e) {
                  window.setTimeout(e, 0);
                };
              for (n = 0; n < o.length && !r; n++)
                r = window[o[n] + "RequestAnimationFrame"];
              r || (r = i), r(e, t);
            },
            Re = function(e, t) {
              return "number" !== typeof t && (t = 0), setTimeout(e, t);
            },
            De = function(e, t) {
              return "number" !== typeof t && (t = 1), setInterval(e, t);
            },
            Be = function(e) {
              return clearTimeout(e);
            },
            Oe = function(e) {
              return clearInterval(e);
            },
            Pe = function(e, t) {
              var n, r;
              return (
                (r = function() {
                  var r = arguments;
                  clearTimeout(n),
                    (n = Re(function() {
                      e.apply(this, r);
                    }, t));
                }),
                (r.stop = function() {
                  clearTimeout(n);
                }),
                r
              );
            },
            Ie = {
              requestAnimationFrame: function(e, t) {
                Se
                  ? Se.then(e)
                  : (Se = new _e(function(e) {
                      t || (t = document.body), Ae(e, t);
                    }).then(e));
              },
              setTimeout: Re,
              setInterval: De,
              setEditorTimeout: function(e, t, n) {
                return Re(function() {
                  e.removed || t();
                }, n);
              },
              setEditorInterval: function(e, t, n) {
                var r;
                return (
                  (r = De(function() {
                    e.removed ? clearInterval(r) : t();
                  }, n)),
                  r
                );
              },
              debounce: Pe,
              throttle: Pe,
              clearInterval: Oe,
              clearTimeout: Be
            },
            Le = "mce-data-",
            Me = /^(?:mouse|contextmenu)|click/,
            Fe = {
              keyLocation: 1,
              layerX: 1,
              layerY: 1,
              returnValue: 1,
              webkitMovementX: 1,
              webkitMovementY: 1,
              keyIdentifier: 1
            },
            Ue = function(e) {
              return e.isDefaultPrevented === ze || e.isDefaultPrevented === je;
            },
            je = function() {
              return !1;
            },
            ze = function() {
              return !0;
            },
            Ve = function(e, t, n, r) {
              e.addEventListener
                ? e.addEventListener(t, n, r || !1)
                : e.attachEvent && e.attachEvent("on" + t, n);
            },
            He = function(e, t, n, r) {
              e.removeEventListener
                ? e.removeEventListener(t, n, r || !1)
                : e.detachEvent && e.detachEvent("on" + t, n);
            },
            qe = function(e, t) {
              if (e.composedPath) {
                var n = e.composedPath();
                if (n && n.length > 0) return n[0];
              }
              return t;
            },
            $e = function(e, t) {
              var n,
                r = t || {};
              for (n in e) Fe[n] || (r[n] = e[n]);
              if (
                (r.target || (r.target = r.srcElement || document),
                ke.experimentalShadowDom && (r.target = qe(e, r.target)),
                e &&
                  Me.test(e.type) &&
                  void 0 === e.pageX &&
                  void 0 !== e.clientX)
              ) {
                var o = r.target.ownerDocument || document,
                  i = o.documentElement,
                  a = o.body;
                (r.pageX =
                  e.clientX +
                  ((i && i.scrollLeft) || (a && a.scrollLeft) || 0) -
                  ((i && i.clientLeft) || (a && a.clientLeft) || 0)),
                  (r.pageY =
                    e.clientY +
                    ((i && i.scrollTop) || (a && a.scrollTop) || 0) -
                    ((i && i.clientTop) || (a && a.clientTop) || 0));
              }
              return (
                (r.preventDefault = function() {
                  (r.isDefaultPrevented = ze),
                    e &&
                      (e.preventDefault
                        ? e.preventDefault()
                        : (e.returnValue = !1));
                }),
                (r.stopPropagation = function() {
                  (r.isPropagationStopped = ze),
                    e &&
                      (e.stopPropagation
                        ? e.stopPropagation()
                        : (e.cancelBubble = !0));
                }),
                (r.stopImmediatePropagation = function() {
                  (r.isImmediatePropagationStopped = ze), r.stopPropagation();
                }),
                !1 === Ue(r) &&
                  ((r.isDefaultPrevented = je),
                  (r.isPropagationStopped = je),
                  (r.isImmediatePropagationStopped = je)),
                "undefined" === typeof r.metaKey && (r.metaKey = !1),
                r
              );
            },
            We = function(e, t, n) {
              var r = e.document,
                o = { type: "ready" };
              if (n.domLoaded) t(o);
              else {
                var i = function() {
                    return (
                      "complete" === r.readyState ||
                      ("interactive" === r.readyState && r.body)
                    );
                  },
                  a = function() {
                    n.domLoaded || ((n.domLoaded = !0), t(o));
                  },
                  u = function() {
                    i() && (He(r, "readystatechange", u), a());
                  },
                  s = function() {
                    try {
                      r.documentElement.doScroll("left");
                    } catch (e) {
                      return void Ie.setTimeout(s);
                    }
                    a();
                  };
                !r.addEventListener || (ke.ie && ke.ie < 11)
                  ? (Ve(r, "readystatechange", u),
                    r.documentElement.doScroll && e.self === e.top && s())
                  : i()
                    ? a()
                    : Ve(e, "DOMContentLoaded", a),
                  Ve(e, "load", a);
              }
            },
            Ye = function() {
              var e,
                t,
                n,
                r,
                o,
                i = this,
                a = {};
              (t = Le + (+new Date()).toString(32)),
                (r = "onmouseenter" in document.documentElement),
                (n = "onfocusin" in document.documentElement),
                (o = { mouseenter: "mouseover", mouseleave: "mouseout" }),
                (e = 1),
                (i.domLoaded = !1),
                (i.events = a);
              var u = function(e, t) {
                var n,
                  r,
                  o,
                  i,
                  u = a[t];
                if (((n = u && u[e.type]), n))
                  for (r = 0, o = n.length; r < o; r++)
                    if (
                      ((i = n[r]),
                      i && !1 === i.func.call(i.scope, e) && e.preventDefault(),
                      e.isImmediatePropagationStopped())
                    )
                      return;
              };
              (i.bind = function(s, c, l, f) {
                var d,
                  m,
                  p,
                  g,
                  h,
                  v,
                  b,
                  y = window,
                  C = function(e) {
                    u($e(e || y.event), d);
                  };
                if (s && 3 !== s.nodeType && 8 !== s.nodeType) {
                  s[t] ? (d = s[t]) : ((d = e++), (s[t] = d), (a[d] = {})),
                    (f = f || s),
                    (c = c.split(" ")),
                    (p = c.length);
                  while (p--)
                    (g = c[p]),
                      (v = C),
                      (h = b = !1),
                      "DOMContentLoaded" === g && (g = "ready"),
                      i.domLoaded &&
                      "ready" === g &&
                      "complete" === s.readyState
                        ? l.call(f, $e({ type: g }))
                        : (r ||
                            ((h = o[g]),
                            h &&
                              (v = function(e) {
                                var t, n;
                                if (
                                  ((t = e.currentTarget),
                                  (n = e.relatedTarget),
                                  n && t.contains)
                                )
                                  n = t.contains(n);
                                else while (n && n !== t) n = n.parentNode;
                                n ||
                                  ((e = $e(e || y.event)),
                                  (e.type =
                                    "mouseout" === e.type
                                      ? "mouseleave"
                                      : "mouseenter"),
                                  (e.target = t),
                                  u(e, d));
                              })),
                          n ||
                            ("focusin" !== g && "focusout" !== g) ||
                            ((b = !0),
                            (h = "focusin" === g ? "focus" : "blur"),
                            (v = function(e) {
                              (e = $e(e || y.event)),
                                (e.type =
                                  "focus" === e.type ? "focusin" : "focusout"),
                                u(e, d);
                            })),
                          (m = a[d][g]),
                          m
                            ? "ready" === g && i.domLoaded
                              ? l({ type: g })
                              : m.push({ func: l, scope: f })
                            : ((a[d][g] = m = [{ func: l, scope: f }]),
                              (m.fakeName = h),
                              (m.capture = b),
                              (m.nativeHandler = v),
                              "ready" === g
                                ? We(s, v, i)
                                : Ve(s, h || g, v, b)));
                  return (s = m = 0), l;
                }
              }),
                (i.unbind = function(e, n, r) {
                  var o, u, s, c, l, f;
                  if (!e || 3 === e.nodeType || 8 === e.nodeType) return i;
                  if (((o = e[t]), o)) {
                    if (((f = a[o]), n)) {
                      (n = n.split(" ")), (s = n.length);
                      while (s--)
                        if (((l = n[s]), (u = f[l]), u)) {
                          if (r) {
                            c = u.length;
                            while (c--)
                              if (u[c].func === r) {
                                var d = u.nativeHandler,
                                  m = u.fakeName,
                                  p = u.capture;
                                (u = u.slice(0, c).concat(u.slice(c + 1))),
                                  (u.nativeHandler = d),
                                  (u.fakeName = m),
                                  (u.capture = p),
                                  (f[l] = u);
                              }
                          }
                          (r && 0 !== u.length) ||
                            (delete f[l],
                            He(e, u.fakeName || l, u.nativeHandler, u.capture));
                        }
                    } else {
                      for (l in f)
                        (u = f[l]),
                          He(e, u.fakeName || l, u.nativeHandler, u.capture);
                      f = {};
                    }
                    for (l in f) return i;
                    delete a[o];
                    try {
                      delete e[t];
                    } catch (g) {
                      e[t] = null;
                    }
                  }
                  return i;
                }),
                (i.fire = function(e, n, r) {
                  var o;
                  if (!e || 3 === e.nodeType || 8 === e.nodeType) return i;
                  (r = $e(null, r)), (r.type = n), (r.target = e);
                  do {
                    (o = e[t]),
                      o && u(r, o),
                      (e =
                        e.parentNode ||
                        e.ownerDocument ||
                        e.defaultView ||
                        e.parentWindow);
                  } while (e && !r.isPropagationStopped());
                  return i;
                }),
                (i.clean = function(e) {
                  var n,
                    r,
                    o = i.unbind;
                  if (!e || 3 === e.nodeType || 8 === e.nodeType) return i;
                  if (
                    (e[t] && o(e),
                    e.getElementsByTagName || (e = e.document),
                    e && e.getElementsByTagName)
                  ) {
                    o(e), (r = e.getElementsByTagName("*")), (n = r.length);
                    while (n--) (e = r[n]), e[t] && o(e);
                  }
                  return i;
                }),
                (i.destroy = function() {
                  a = {};
                }),
                (i.cancel = function(e) {
                  return (
                    e && (e.preventDefault(), e.stopImmediatePropagation()), !1
                  );
                });
            };
          (Ye.Event = new Ye()), Ye.Event.bind(window, "ready", function() {});
          var Ge,
            Xe,
            Ze,
            Ke,
            Je,
            Qe,
            et,
            tt,
            nt,
            rt,
            ot,
            it,
            at,
            ut,
            st,
            ct,
            lt,
            ft,
            dt,
            mt = "sizzle" + -new Date(),
            pt = window.document,
            gt = 0,
            ht = 0,
            vt = Kt(),
            bt = Kt(),
            yt = Kt(),
            Ct = function(e, t) {
              return e === t && (ot = !0), 0;
            },
            wt = "undefined",
            xt = 1 << 31,
            Et = {}.hasOwnProperty,
            St = [],
            Nt = St.pop,
            kt = St.push,
            Tt = St.push,
            _t = St.slice,
            At =
              St.indexOf ||
              function(e) {
                for (var t = 0, n = this.length; t < n; t++)
                  if (this[t] === e) return t;
                return -1;
              },
            Rt =
              "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            Dt = "[\\x20\\t\\r\\n\\f]",
            Bt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            Ot =
              "\\[" +
              Dt +
              "*(" +
              Bt +
              ")(?:" +
              Dt +
              "*([*^$|!~]?=)" +
              Dt +
              "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
              Bt +
              "))|)" +
              Dt +
              "*\\]",
            Pt =
              ":(" +
              Bt +
              ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
              Ot +
              ")*)|.*)\\)|)",
            It = new RegExp(
              "^" + Dt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Dt + "+$",
              "g"
            ),
            Lt = new RegExp("^" + Dt + "*," + Dt + "*"),
            Mt = new RegExp("^" + Dt + "*([>+~]|" + Dt + ")" + Dt + "*"),
            Ft = new RegExp("=" + Dt + "*([^\\]'\"]*?)" + Dt + "*\\]", "g"),
            Ut = new RegExp(Pt),
            jt = new RegExp("^" + Bt + "$"),
            zt = {
              ID: new RegExp("^#(" + Bt + ")"),
              CLASS: new RegExp("^\\.(" + Bt + ")"),
              TAG: new RegExp("^(" + Bt + "|[*])"),
              ATTR: new RegExp("^" + Ot),
              PSEUDO: new RegExp("^" + Pt),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                  Dt +
                  "*(even|odd|(([+-]|)(\\d*)n|)" +
                  Dt +
                  "*(?:([+-]|)" +
                  Dt +
                  "*(\\d+)|))" +
                  Dt +
                  "*\\)|)",
                "i"
              ),
              bool: new RegExp("^(?:" + Rt + ")$", "i"),
              needsContext: new RegExp(
                "^" +
                  Dt +
                  "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                  Dt +
                  "*((?:-\\d)?\\d*)" +
                  Dt +
                  "*\\)|)(?=[^-]|$)",
                "i"
              )
            },
            Vt = /^(?:input|select|textarea|button)$/i,
            Ht = /^h\d$/i,
            qt = /^[^{]+\{\s*\[native \w/,
            $t = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Wt = /[+~]/,
            Yt = /'|\\/g,
            Gt = new RegExp(
              "\\\\([\\da-f]{1,6}" + Dt + "?|(" + Dt + ")|.)",
              "ig"
            ),
            Xt = function(e, t, n) {
              var r = "0x" + t - 65536;
              return r !== r || n
                ? t
                : r < 0
                  ? String.fromCharCode(r + 65536)
                  : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
            };
          try {
            Tt.apply((St = _t.call(pt.childNodes)), pt.childNodes),
              St[pt.childNodes.length].nodeType;
          } catch (qP) {
            Tt = {
              apply: St.length
                ? function(e, t) {
                    kt.apply(e, _t.call(t));
                  }
                : function(e, t) {
                    var n = e.length,
                      r = 0;
                    while ((e[n++] = t[r++]));
                    e.length = n - 1;
                  }
            };
          }
          var Zt = function(e, t, n, r) {
            var o, i, a, u, s, c, l, f, d, m;
            if (
              ((t ? t.ownerDocument || t : pt) !== at && it(t),
              (t = t || at),
              (n = n || []),
              !e || "string" !== typeof e)
            )
              return n;
            if (1 !== (u = t.nodeType) && 9 !== u) return [];
            if (st && !r) {
              if ((o = $t.exec(e)))
                if ((a = o[1])) {
                  if (9 === u) {
                    if (((i = t.getElementById(a)), !i || !i.parentNode))
                      return n;
                    if (i.id === a) return n.push(i), n;
                  } else if (
                    t.ownerDocument &&
                    (i = t.ownerDocument.getElementById(a)) &&
                    dt(t, i) &&
                    i.id === a
                  )
                    return n.push(i), n;
                } else {
                  if (o[2]) return Tt.apply(n, t.getElementsByTagName(e)), n;
                  if ((a = o[3]) && Xe.getElementsByClassName)
                    return Tt.apply(n, t.getElementsByClassName(a)), n;
                }
              if (Xe.qsa && (!ct || !ct.test(e))) {
                if (
                  ((f = l = mt),
                  (d = t),
                  (m = 9 === u && e),
                  1 === u && "object" !== t.nodeName.toLowerCase())
                ) {
                  (c = Qe(e)),
                    (l = t.getAttribute("id"))
                      ? (f = l.replace(Yt, "\\$&"))
                      : t.setAttribute("id", f),
                    (f = "[id='" + f + "'] "),
                    (s = c.length);
                  while (s--) c[s] = f + an(c[s]);
                  (d = (Wt.test(e) && rn(t.parentNode)) || t),
                    (m = c.join(","));
                }
                if (m)
                  try {
                    return Tt.apply(n, d.querySelectorAll(m)), n;
                  } catch (p) {
                  } finally {
                    l || t.removeAttribute("id");
                  }
              }
            }
            return tt(e.replace(It, "$1"), t, n, r);
          };
          function Kt() {
            var e = [];
            function t(n, r) {
              return (
                e.push(n + " ") > Ze.cacheLength && delete t[e.shift()],
                (t[n + " "] = r)
              );
            }
            return t;
          }
          function Jt(e) {
            return (e[mt] = !0), e;
          }
          function Qt(e, t) {
            var n = t && e,
              r =
                n &&
                1 === e.nodeType &&
                1 === t.nodeType &&
                (~t.sourceIndex || xt) - (~e.sourceIndex || xt);
            if (r) return r;
            if (n) while ((n = n.nextSibling)) if (n === t) return -1;
            return e ? 1 : -1;
          }
          function en(e) {
            return function(t) {
              var n = t.nodeName.toLowerCase();
              return "input" === n && t.type === e;
            };
          }
          function tn(e) {
            return function(t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e;
            };
          }
          function nn(e) {
            return Jt(function(t) {
              return (
                (t = +t),
                Jt(function(n, r) {
                  var o,
                    i = e([], n.length, t),
                    a = i.length;
                  while (a--) n[(o = i[a])] && (n[o] = !(r[o] = n[o]));
                })
              );
            });
          }
          function rn(e) {
            return e && typeof e.getElementsByTagName !== wt && e;
          }
          for (Ge in ((Xe = Zt.support = {}),
          (Je = Zt.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName;
          }),
          (it = Zt.setDocument = function(e) {
            var t,
              n = e ? e.ownerDocument || e : pt,
              r = n.defaultView;
            function o(e) {
              try {
                return e.top;
              } catch (t) {}
              return null;
            }
            return n !== at && 9 === n.nodeType && n.documentElement
              ? ((at = n),
                (ut = n.documentElement),
                (st = !Je(n)),
                r &&
                  r !== o(r) &&
                  (r.addEventListener
                    ? r.addEventListener(
                        "unload",
                        function() {
                          it();
                        },
                        !1
                      )
                    : r.attachEvent &&
                      r.attachEvent("onunload", function() {
                        it();
                      })),
                (Xe.attributes = !0),
                (Xe.getElementsByTagName = !0),
                (Xe.getElementsByClassName = qt.test(n.getElementsByClassName)),
                (Xe.getById = !0),
                (Ze.find.ID = function(e, t) {
                  if (typeof t.getElementById !== wt && st) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : [];
                  }
                }),
                (Ze.filter.ID = function(e) {
                  var t = e.replace(Gt, Xt);
                  return function(e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (Ze.find.TAG = Xe.getElementsByTagName
                  ? function(e, t) {
                      if (typeof t.getElementsByTagName !== wt)
                        return t.getElementsByTagName(e);
                    }
                  : function(e, t) {
                      var n,
                        r = [],
                        o = 0,
                        i = t.getElementsByTagName(e);
                      if ("*" === e) {
                        while ((n = i[o++])) 1 === n.nodeType && r.push(n);
                        return r;
                      }
                      return i;
                    }),
                (Ze.find.CLASS =
                  Xe.getElementsByClassName &&
                  function(e, t) {
                    if (st) return t.getElementsByClassName(e);
                  }),
                (lt = []),
                (ct = []),
                (Xe.disconnectedMatch = !0),
                (ct = ct.length && new RegExp(ct.join("|"))),
                (lt = lt.length && new RegExp(lt.join("|"))),
                (t = qt.test(ut.compareDocumentPosition)),
                (dt =
                  t || qt.test(ut.contains)
                    ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                          r = t && t.parentNode;
                        return (
                          e === r ||
                          !(
                            !r ||
                            1 !== r.nodeType ||
                            !(n.contains
                              ? n.contains(r)
                              : e.compareDocumentPosition &&
                                16 & e.compareDocumentPosition(r))
                          )
                        );
                      }
                    : function(e, t) {
                        if (t)
                          while ((t = t.parentNode)) if (t === e) return !0;
                        return !1;
                      }),
                (Ct = t
                  ? function(e, t) {
                      if (e === t) return (ot = !0), 0;
                      var r =
                        !e.compareDocumentPosition - !t.compareDocumentPosition;
                      return (
                        r ||
                        ((r =
                          (e.ownerDocument || e) === (t.ownerDocument || t)
                            ? e.compareDocumentPosition(t)
                            : 1),
                        1 & r ||
                        (!Xe.sortDetached && t.compareDocumentPosition(e) === r)
                          ? e === n || (e.ownerDocument === pt && dt(pt, e))
                            ? -1
                            : t === n || (t.ownerDocument === pt && dt(pt, t))
                              ? 1
                              : rt
                                ? At.call(rt, e) - At.call(rt, t)
                                : 0
                          : 4 & r
                            ? -1
                            : 1)
                      );
                    }
                  : function(e, t) {
                      if (e === t) return (ot = !0), 0;
                      var r,
                        o = 0,
                        i = e.parentNode,
                        a = t.parentNode,
                        u = [e],
                        s = [t];
                      if (!i || !a)
                        return e === n
                          ? -1
                          : t === n
                            ? 1
                            : i
                              ? -1
                              : a
                                ? 1
                                : rt
                                  ? At.call(rt, e) - At.call(rt, t)
                                  : 0;
                      if (i === a) return Qt(e, t);
                      r = e;
                      while ((r = r.parentNode)) u.unshift(r);
                      r = t;
                      while ((r = r.parentNode)) s.unshift(r);
                      while (u[o] === s[o]) o++;
                      return o
                        ? Qt(u[o], s[o])
                        : u[o] === pt
                          ? -1
                          : s[o] === pt
                            ? 1
                            : 0;
                    }),
                n)
              : at;
          }),
          (Zt.matches = function(e, t) {
            return Zt(e, null, null, t);
          }),
          (Zt.matchesSelector = function(e, t) {
            if (
              ((e.ownerDocument || e) !== at && it(e),
              (t = t.replace(Ft, "='$1']")),
              Xe.matchesSelector &&
                st &&
                (!lt || !lt.test(t)) &&
                (!ct || !ct.test(t)))
            )
              try {
                var n = ft.call(e, t);
                if (
                  n ||
                  Xe.disconnectedMatch ||
                  (e.document && 11 !== e.document.nodeType)
                )
                  return n;
              } catch (qP) {}
            return Zt(t, at, null, [e]).length > 0;
          }),
          (Zt.contains = function(e, t) {
            return (e.ownerDocument || e) !== at && it(e), dt(e, t);
          }),
          (Zt.attr = function(e, t) {
            (e.ownerDocument || e) !== at && it(e);
            var n = Ze.attrHandle[t.toLowerCase()],
              r =
                n && Et.call(Ze.attrHandle, t.toLowerCase())
                  ? n(e, t, !st)
                  : void 0;
            return void 0 !== r
              ? r
              : Xe.attributes || !st
                ? e.getAttribute(t)
                : (r = e.getAttributeNode(t)) && r.specified
                  ? r.value
                  : null;
          }),
          (Zt.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
          }),
          (Zt.uniqueSort = function(e) {
            var t,
              n = [],
              r = 0,
              o = 0;
            if (
              ((ot = !Xe.detectDuplicates),
              (rt = !Xe.sortStable && e.slice(0)),
              e.sort(Ct),
              ot)
            ) {
              while ((t = e[o++])) t === e[o] && (r = n.push(o));
              while (r--) e.splice(n[r], 1);
            }
            return (rt = null), e;
          }),
          (Ke = Zt.getText = function(e) {
            var t,
              n = "",
              r = 0,
              o = e.nodeType;
            if (o) {
              if (1 === o || 9 === o || 11 === o) {
                if ("string" === typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += Ke(e);
              } else if (3 === o || 4 === o) return e.nodeValue;
            } else while ((t = e[r++])) n += Ke(t);
            return n;
          }),
          (Ze = Zt.selectors = {
            cacheLength: 50,
            createPseudo: Jt,
            match: zt,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: !0 },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: !0 },
              "~": { dir: "previousSibling" }
            },
            preFilter: {
              ATTR: function(e) {
                return (
                  (e[1] = e[1].replace(Gt, Xt)),
                  (e[3] = (e[3] || e[4] || e[5] || "").replace(Gt, Xt)),
                  "~=" === e[2] && (e[3] = " " + e[3] + " "),
                  e.slice(0, 4)
                );
              },
              CHILD: function(e) {
                return (
                  (e[1] = e[1].toLowerCase()),
                  "nth" === e[1].slice(0, 3)
                    ? (e[3] || Zt.error(e[0]),
                      (e[4] = +(e[4]
                        ? e[5] + (e[6] || 1)
                        : 2 * ("even" === e[3] || "odd" === e[3]))),
                      (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                    : e[3] && Zt.error(e[0]),
                  e
                );
              },
              PSEUDO: function(e) {
                var t,
                  n = !e[6] && e[2];
                return zt.CHILD.test(e[0])
                  ? null
                  : (e[3]
                      ? (e[2] = e[4] || e[5] || "")
                      : n &&
                        Ut.test(n) &&
                        (t = Qe(n, !0)) &&
                        (t = n.indexOf(")", n.length - t) - n.length) &&
                        ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                    e.slice(0, 3));
              }
            },
            filter: {
              TAG: function(e) {
                var t = e.replace(Gt, Xt).toLowerCase();
                return "*" === e
                  ? function() {
                      return !0;
                    }
                  : function(e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
              },
              CLASS: function(e) {
                var t = vt[e + " "];
                return (
                  t ||
                  ((t = new RegExp("(^|" + Dt + ")" + e + "(" + Dt + "|$)")) &&
                    vt(e, function(e) {
                      return t.test(
                        ("string" === typeof e.className && e.className) ||
                          (typeof e.getAttribute !== wt &&
                            e.getAttribute("class")) ||
                          ""
                      );
                    }))
                );
              },
              ATTR: function(e, t, n) {
                return function(r) {
                  var o = Zt.attr(r, e);
                  return null == o
                    ? "!=" === t
                    : !t ||
                        ((o += ""),
                        "=" === t
                          ? o === n
                          : "!=" === t
                            ? o !== n
                            : "^=" === t
                              ? n && 0 === o.indexOf(n)
                              : "*=" === t
                                ? n && o.indexOf(n) > -1
                                : "$=" === t
                                  ? n && o.slice(-n.length) === n
                                  : "~=" === t
                                    ? (" " + o + " ").indexOf(n) > -1
                                    : "|=" === t &&
                                      (o === n ||
                                        o.slice(0, n.length + 1) === n + "-"));
                };
              },
              CHILD: function(e, t, n, r, o) {
                var i = "nth" !== e.slice(0, 3),
                  a = "last" !== e.slice(-4),
                  u = "of-type" === t;
                return 1 === r && 0 === o
                  ? function(e) {
                      return !!e.parentNode;
                    }
                  : function(t, n, s) {
                      var c,
                        l,
                        f,
                        d,
                        m,
                        p,
                        g = i !== a ? "nextSibling" : "previousSibling",
                        h = t.parentNode,
                        v = u && t.nodeName.toLowerCase(),
                        b = !s && !u;
                      if (h) {
                        if (i) {
                          while (g) {
                            f = t;
                            while ((f = f[g]))
                              if (
                                u
                                  ? f.nodeName.toLowerCase() === v
                                  : 1 === f.nodeType
                              )
                                return !1;
                            p = g = "only" === e && !p && "nextSibling";
                          }
                          return !0;
                        }
                        if (((p = [a ? h.firstChild : h.lastChild]), a && b)) {
                          (l = h[mt] || (h[mt] = {})),
                            (c = l[e] || []),
                            (m = c[0] === gt && c[1]),
                            (d = c[0] === gt && c[2]),
                            (f = m && h.childNodes[m]);
                          while (
                            (f = (++m && f && f[g]) || (d = m = 0) || p.pop())
                          )
                            if (1 === f.nodeType && ++d && f === t) {
                              l[e] = [gt, m, d];
                              break;
                            }
                        } else if (
                          b &&
                          (c = (t[mt] || (t[mt] = {}))[e]) &&
                          c[0] === gt
                        )
                          d = c[1];
                        else
                          while (
                            (f = (++m && f && f[g]) || (d = m = 0) || p.pop())
                          )
                            if (
                              (u
                                ? f.nodeName.toLowerCase() === v
                                : 1 === f.nodeType) &&
                              ++d &&
                              (b && ((f[mt] || (f[mt] = {}))[e] = [gt, d]),
                              f === t)
                            )
                              break;
                        return (d -= o), d === r || (d % r === 0 && d / r >= 0);
                      }
                    };
              },
              PSEUDO: function(e, t) {
                var n,
                  r =
                    Ze.pseudos[e] ||
                    Ze.setFilters[e.toLowerCase()] ||
                    Zt.error("unsupported pseudo: " + e);
                return r[mt]
                  ? r(t)
                  : r.length > 1
                    ? ((n = [e, e, "", t]),
                      Ze.setFilters.hasOwnProperty(e.toLowerCase())
                        ? Jt(function(e, n) {
                            var o,
                              i = r(e, t),
                              a = i.length;
                            while (a--)
                              (o = At.call(e, i[a])), (e[o] = !(n[o] = i[a]));
                          })
                        : function(e) {
                            return r(e, 0, n);
                          })
                    : r;
              }
            },
            pseudos: {
              not: Jt(function(e) {
                var t = [],
                  n = [],
                  r = et(e.replace(It, "$1"));
                return r[mt]
                  ? Jt(function(e, t, n, o) {
                      var i,
                        a = r(e, null, o, []),
                        u = e.length;
                      while (u--) (i = a[u]) && (e[u] = !(t[u] = i));
                    })
                  : function(e, o, i) {
                      return (t[0] = e), r(t, null, i, n), !n.pop();
                    };
              }),
              has: Jt(function(e) {
                return function(t) {
                  return Zt(e, t).length > 0;
                };
              }),
              contains: Jt(function(e) {
                return (
                  (e = e.replace(Gt, Xt)),
                  function(t) {
                    return (
                      (t.textContent || t.innerText || Ke(t)).indexOf(e) > -1
                    );
                  }
                );
              }),
              lang: Jt(function(e) {
                return (
                  jt.test(e || "") || Zt.error("unsupported lang: " + e),
                  (e = e.replace(Gt, Xt).toLowerCase()),
                  function(t) {
                    var n;
                    do {
                      if (
                        (n = st
                          ? t.lang
                          : t.getAttribute("xml:lang") ||
                            t.getAttribute("lang"))
                      )
                        return (
                          (n = n.toLowerCase()),
                          n === e || 0 === n.indexOf(e + "-")
                        );
                    } while ((t = t.parentNode) && 1 === t.nodeType);
                    return !1;
                  }
                );
              }),
              target: function(e) {
                var t = window.location && window.location.hash;
                return t && t.slice(1) === e.id;
              },
              root: function(e) {
                return e === ut;
              },
              focus: function(e) {
                return (
                  e === at.activeElement &&
                  (!at.hasFocus || at.hasFocus()) &&
                  !!(e.type || e.href || ~e.tabIndex)
                );
              },
              enabled: function(e) {
                return !1 === e.disabled;
              },
              disabled: function(e) {
                return !0 === e.disabled;
              },
              checked: function(e) {
                var t = e.nodeName.toLowerCase();
                return (
                  ("input" === t && !!e.checked) ||
                  ("option" === t && !!e.selected)
                );
              },
              selected: function(e) {
                return (
                  e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                );
              },
              empty: function(e) {
                for (e = e.firstChild; e; e = e.nextSibling)
                  if (e.nodeType < 6) return !1;
                return !0;
              },
              parent: function(e) {
                return !Ze.pseudos.empty(e);
              },
              header: function(e) {
                return Ht.test(e.nodeName);
              },
              input: function(e) {
                return Vt.test(e.nodeName);
              },
              button: function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t && "button" === e.type) || "button" === t;
              },
              text: function(e) {
                var t;
                return (
                  "input" === e.nodeName.toLowerCase() &&
                  "text" === e.type &&
                  (null == (t = e.getAttribute("type")) ||
                    "text" === t.toLowerCase())
                );
              },
              first: nn(function() {
                return [0];
              }),
              last: nn(function(e, t) {
                return [t - 1];
              }),
              eq: nn(function(e, t, n) {
                return [n < 0 ? n + t : n];
              }),
              even: nn(function(e, t) {
                for (var n = 0; n < t; n += 2) e.push(n);
                return e;
              }),
              odd: nn(function(e, t) {
                for (var n = 1; n < t; n += 2) e.push(n);
                return e;
              }),
              lt: nn(function(e, t, n) {
                for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
                return e;
              }),
              gt: nn(function(e, t, n) {
                for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                return e;
              })
            }
          }),
          (Ze.pseudos.nth = Ze.pseudos.eq),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            Ze.pseudos[Ge] = en(Ge);
          for (Ge in { submit: !0, reset: !0 }) Ze.pseudos[Ge] = tn(Ge);
          function on() {}
          function an(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
          }
          function un(e, t, n) {
            var r = t.dir,
              o = n && "parentNode" === r,
              i = ht++;
            return t.first
              ? function(t, n, i) {
                  while ((t = t[r]))
                    if (1 === t.nodeType || o) return e(t, n, i);
                }
              : function(t, n, a) {
                  var u,
                    s,
                    c = [gt, i];
                  if (a) {
                    while ((t = t[r]))
                      if ((1 === t.nodeType || o) && e(t, n, a)) return !0;
                  } else
                    while ((t = t[r]))
                      if (1 === t.nodeType || o) {
                        if (
                          ((s = t[mt] || (t[mt] = {})),
                          (u = s[r]) && u[0] === gt && u[1] === i)
                        )
                          return (c[2] = u[2]);
                        if (((s[r] = c), (c[2] = e(t, n, a)))) return !0;
                      }
                };
          }
          function sn(e) {
            return e.length > 1
              ? function(t, n, r) {
                  var o = e.length;
                  while (o--) if (!e[o](t, n, r)) return !1;
                  return !0;
                }
              : e[0];
          }
          function cn(e, t, n) {
            for (var r = 0, o = t.length; r < o; r++) Zt(e, t[r], n);
            return n;
          }
          function ln(e, t, n, r, o) {
            for (var i, a = [], u = 0, s = e.length, c = null != t; u < s; u++)
              (i = e[u]) && ((n && !n(i, r, o)) || (a.push(i), c && t.push(u)));
            return a;
          }
          function fn(e, t, n, r, o, i) {
            return (
              r && !r[mt] && (r = fn(r)),
              o && !o[mt] && (o = fn(o, i)),
              Jt(function(i, a, u, s) {
                var c,
                  l,
                  f,
                  d = [],
                  m = [],
                  p = a.length,
                  g = i || cn(t || "*", u.nodeType ? [u] : u, []),
                  h = !e || (!i && t) ? g : ln(g, d, e, u, s),
                  v = n ? (o || (i ? e : p || r) ? [] : a) : h;
                if ((n && n(h, v, u, s), r)) {
                  (c = ln(v, m)), r(c, [], u, s), (l = c.length);
                  while (l--) (f = c[l]) && (v[m[l]] = !(h[m[l]] = f));
                }
                if (i) {
                  if (o || e) {
                    if (o) {
                      (c = []), (l = v.length);
                      while (l--) (f = v[l]) && c.push((h[l] = f));
                      o(null, (v = []), c, s);
                    }
                    l = v.length;
                    while (l--)
                      (f = v[l]) &&
                        (c = o ? At.call(i, f) : d[l]) > -1 &&
                        (i[c] = !(a[c] = f));
                  }
                } else (v = ln(v === a ? v.splice(p, v.length) : v)), o ? o(null, a, v, s) : Tt.apply(a, v);
              })
            );
          }
          function dn(e) {
            for (
              var t,
                n,
                r,
                o = e.length,
                i = Ze.relative[e[0].type],
                a = i || Ze.relative[" "],
                u = i ? 1 : 0,
                s = un(
                  function(e) {
                    return e === t;
                  },
                  a,
                  !0
                ),
                c = un(
                  function(e) {
                    return At.call(t, e) > -1;
                  },
                  a,
                  !0
                ),
                l = [
                  function(e, n, r) {
                    return (
                      (!i && (r || n !== nt)) ||
                      ((t = n).nodeType ? s(e, n, r) : c(e, n, r))
                    );
                  }
                ];
              u < o;
              u++
            )
              if ((n = Ze.relative[e[u].type])) l = [un(sn(l), n)];
              else {
                if (
                  ((n = Ze.filter[e[u].type].apply(null, e[u].matches)), n[mt])
                ) {
                  for (r = ++u; r < o; r++) if (Ze.relative[e[r].type]) break;
                  return fn(
                    u > 1 && sn(l),
                    u > 1 &&
                      an(
                        e
                          .slice(0, u - 1)
                          .concat({ value: " " === e[u - 2].type ? "*" : "" })
                      ).replace(It, "$1"),
                    n,
                    u < r && dn(e.slice(u, r)),
                    r < o && dn((e = e.slice(r))),
                    r < o && an(e)
                  );
                }
                l.push(n);
              }
            return sn(l);
          }
          function mn(e, t) {
            var n = t.length > 0,
              r = e.length > 0,
              o = function(o, i, a, u, s) {
                var c,
                  l,
                  f,
                  d = 0,
                  m = "0",
                  p = o && [],
                  g = [],
                  h = nt,
                  v = o || (r && Ze.find.TAG("*", s)),
                  b = (gt += null == h ? 1 : Math.random() || 0.1),
                  y = v.length;
                for (
                  s && (nt = i !== at && i);
                  m !== y && null != (c = v[m]);
                  m++
                ) {
                  if (r && c) {
                    l = 0;
                    while ((f = e[l++]))
                      if (f(c, i, a)) {
                        u.push(c);
                        break;
                      }
                    s && (gt = b);
                  }
                  n && ((c = !f && c) && d--, o && p.push(c));
                }
                if (((d += m), n && m !== d)) {
                  l = 0;
                  while ((f = t[l++])) f(p, g, i, a);
                  if (o) {
                    if (d > 0) while (m--) p[m] || g[m] || (g[m] = Nt.call(u));
                    g = ln(g);
                  }
                  Tt.apply(u, g),
                    s &&
                      !o &&
                      g.length > 0 &&
                      d + t.length > 1 &&
                      Zt.uniqueSort(u);
                }
                return s && ((gt = b), (nt = h)), p;
              };
            return n ? Jt(o) : o;
          }
          (on.prototype = Ze.filters = Ze.pseudos),
            (Ze.setFilters = new on()),
            (Qe = Zt.tokenize = function(e, t) {
              var n,
                r,
                o,
                i,
                a,
                u,
                s,
                c = bt[e + " "];
              if (c) return t ? 0 : c.slice(0);
              (a = e), (u = []), (s = Ze.preFilter);
              while (a) {
                for (i in ((n && !(r = Lt.exec(a))) ||
                  (r && (a = a.slice(r[0].length) || a), u.push((o = []))),
                (n = !1),
                (r = Mt.exec(a)) &&
                  ((n = r.shift()),
                  o.push({ value: n, type: r[0].replace(It, " ") }),
                  (a = a.slice(n.length))),
                Ze.filter))
                  !(r = zt[i].exec(a)) ||
                    (s[i] && !(r = s[i](r))) ||
                    ((n = r.shift()),
                    o.push({ value: n, type: i, matches: r }),
                    (a = a.slice(n.length)));
                if (!n) break;
              }
              return t ? a.length : a ? Zt.error(e) : bt(e, u).slice(0);
            }),
            (et = Zt.compile = function(e, t) {
              var n,
                r = [],
                o = [],
                i = yt[e + " "];
              if (!i) {
                t || (t = Qe(e)), (n = t.length);
                while (n--) (i = dn(t[n])), i[mt] ? r.push(i) : o.push(i);
                (i = yt(e, mn(o, r))), (i.selector = e);
              }
              return i;
            }),
            (tt = Zt.select = function(e, t, n, r) {
              var o,
                i,
                a,
                u,
                s,
                c = "function" === typeof e && e,
                l = !r && Qe((e = c.selector || e));
              if (((n = n || []), 1 === l.length)) {
                if (
                  ((i = l[0] = l[0].slice(0)),
                  i.length > 2 &&
                    "ID" === (a = i[0]).type &&
                    Xe.getById &&
                    9 === t.nodeType &&
                    st &&
                    Ze.relative[i[1].type])
                ) {
                  if (
                    ((t = (Ze.find.ID(a.matches[0].replace(Gt, Xt), t) ||
                      [])[0]),
                    !t)
                  )
                    return n;
                  c && (t = t.parentNode),
                    (e = e.slice(i.shift().value.length));
                }
                o = zt.needsContext.test(e) ? 0 : i.length;
                while (o--) {
                  if (((a = i[o]), Ze.relative[(u = a.type)])) break;
                  if (
                    (s = Ze.find[u]) &&
                    (r = s(
                      a.matches[0].replace(Gt, Xt),
                      (Wt.test(i[0].type) && rn(t.parentNode)) || t
                    ))
                  ) {
                    if ((i.splice(o, 1), (e = r.length && an(i)), !e))
                      return Tt.apply(n, r), n;
                    break;
                  }
                }
              }
              return (
                (c || et(e, l))(
                  r,
                  t,
                  !st,
                  n,
                  (Wt.test(e) && rn(t.parentNode)) || t
                ),
                n
              );
            }),
            (Xe.sortStable =
              mt
                .split("")
                .sort(Ct)
                .join("") === mt),
            (Xe.detectDuplicates = !!ot),
            it(),
            (Xe.sortDetached = !0);
          var pn = Array.isArray,
            gn = function(e) {
              var t,
                n,
                r = e;
              if (!pn(e))
                for (r = [], t = 0, n = e.length; t < n; t++) r[t] = e[t];
              return r;
            },
            hn = function(e, t, n) {
              var r, o;
              if (!e) return 0;
              if (((n = n || e), void 0 !== e.length)) {
                for (r = 0, o = e.length; r < o; r++)
                  if (!1 === t.call(n, e[r], r, e)) return 0;
              } else
                for (r in e)
                  if (e.hasOwnProperty(r) && !1 === t.call(n, e[r], r, e))
                    return 0;
              return 1;
            },
            vn = function(e, t) {
              var n = [];
              return (
                hn(e, function(r, o) {
                  n.push(t(r, o, e));
                }),
                n
              );
            },
            bn = function(e, t) {
              var n = [];
              return (
                hn(e, function(r, o) {
                  (t && !t(r, o, e)) || n.push(r);
                }),
                n
              );
            },
            yn = function(e, t) {
              var n, r;
              if (e)
                for (n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
              return -1;
            },
            Cn = function(e, t, n, r) {
              var o = 0;
              for (arguments.length < 3 && (n = e[0]); o < e.length; o++)
                n = t.call(r, n, e[o], o);
              return n;
            },
            wn = function(e, t, n) {
              var r, o;
              for (r = 0, o = e.length; r < o; r++)
                if (t.call(n, e[r], r, e)) return r;
              return -1;
            },
            xn = function(e, t, n) {
              var r = wn(e, t, n);
              if (-1 !== r) return e[r];
            },
            En = function(e) {
              return e[e.length - 1];
            },
            Sn = {
              isArray: pn,
              toArray: gn,
              each: hn,
              map: vn,
              filter: bn,
              indexOf: yn,
              reduce: Cn,
              findIndex: wn,
              find: xn,
              last: En
            },
            Nn = /^\s*|\s*$/g,
            kn = function(e) {
              return null === e || void 0 === e ? "" : ("" + e).replace(Nn, "");
            },
            Tn = function(e, t) {
              return t
                ? !("array" !== t || !Sn.isArray(e)) || typeof e === t
                : void 0 !== e;
            },
            _n = function(e, t, n) {
              var r;
              (e = e || []),
                (t = t || ","),
                "string" === typeof e && (e = e.split(t)),
                (n = n || {}),
                (r = e.length);
              while (r--) n[e[r]] = {};
              return n;
            },
            An = function(e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            },
            Rn = function(e, t, n) {
              var r,
                o,
                i,
                a,
                u,
                s = this,
                c = 0;
              if (
                ((e = /^((static) )?([\w.]+)(:([\w.]+))?/.exec(e)),
                (i = e[3].match(/(^|\.)(\w+)$/i)[2]),
                (o = s.createNS(e[3].replace(/\.\w+$/, ""), n)),
                !o[i])
              ) {
                if ("static" === e[2])
                  return (
                    (o[i] = t),
                    void (this.onCreate && this.onCreate(e[2], e[3], o[i]))
                  );
                t[i] || ((t[i] = function() {}), (c = 1)),
                  (o[i] = t[i]),
                  s.extend(o[i].prototype, t),
                  e[5] &&
                    ((r = s.resolve(e[5]).prototype),
                    (a = e[5].match(/\.(\w+)$/i)[1]),
                    (u = o[i]),
                    (o[i] = c
                      ? function() {
                          return r[a].apply(this, arguments);
                        }
                      : function() {
                          return (this.parent = r[a]), u.apply(this, arguments);
                        }),
                    (o[i].prototype[i] = o[i]),
                    s.each(r, function(e, t) {
                      o[i].prototype[t] = r[t];
                    }),
                    s.each(t, function(e, t) {
                      r[t]
                        ? (o[i].prototype[t] = function() {
                            return (
                              (this.parent = r[t]), e.apply(this, arguments)
                            );
                          })
                        : t !== i && (o[i].prototype[t] = e);
                    })),
                  s.each(t.static, function(e, t) {
                    o[i][t] = e;
                  });
              }
            },
            Dn = function(e, t) {
              for (var n, r, o, i = [], a = 2; a < arguments.length; a++)
                i[a - 2] = arguments[a];
              var u,
                s = arguments;
              for (n = 1, r = s.length; n < r; n++)
                for (o in ((t = s[n]), t))
                  t.hasOwnProperty(o) &&
                    ((u = t[o]), void 0 !== u && (e[o] = u));
              return e;
            },
            Bn = function(e, t, n, r) {
              (r = r || this),
                e &&
                  (n && (e = e[n]),
                  Sn.each(e, function(e, o) {
                    if (!1 === t.call(r, e, o, n)) return !1;
                    Bn(e, t, n, r);
                  }));
            },
            On = function(e, t) {
              var n, r;
              for (t = t || window, e = e.split("."), n = 0; n < e.length; n++)
                (r = e[n]), t[r] || (t[r] = {}), (t = t[r]);
              return t;
            },
            Pn = function(e, t) {
              var n, r;
              for (
                t = t || window, e = e.split("."), n = 0, r = e.length;
                n < r;
                n++
              )
                if (((t = t[e[n]]), !t)) break;
              return t;
            },
            In = function(e, t) {
              return !e || Tn(e, "array") ? e : Sn.map(e.split(t || ","), kn);
            },
            Ln = function(e) {
              var t = ke.cacheSuffix;
              return t && (e += (-1 === e.indexOf("?") ? "?" : "&") + t), e;
            },
            Mn = {
              trim: kn,
              isArray: Sn.isArray,
              is: Tn,
              toArray: Sn.toArray,
              makeMap: _n,
              each: Sn.each,
              map: Sn.map,
              grep: Sn.filter,
              inArray: Sn.indexOf,
              hasOwn: An,
              extend: Dn,
              create: Rn,
              walk: Bn,
              createNS: On,
              resolve: Pn,
              explode: In,
              _addCacheSuffix: Ln
            },
            Fn = document,
            Un = Array.prototype.push,
            jn = Array.prototype.slice,
            zn = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
            Vn = Ye.Event,
            Hn = Mn.makeMap("children,contents,next,prev"),
            qn = function(e) {
              return "undefined" !== typeof e;
            },
            $n = function(e) {
              return "string" === typeof e;
            },
            Wn = function(e) {
              return e && e === e.window;
            },
            Yn = function(e, t) {
              var n, r, o;
              (t = t || Fn),
                (o = t.createElement("div")),
                (n = t.createDocumentFragment()),
                (o.innerHTML = e);
              while ((r = o.firstChild)) n.appendChild(r);
              return n;
            },
            Gn = function(e, t, n, r) {
              var o;
              if ($n(t)) t = Yn(t, cr(e[0]));
              else if (t.length && !t.nodeType) {
                if (((t = rr.makeArray(t)), r))
                  for (o = t.length - 1; o >= 0; o--) Gn(e, t[o], n, r);
                else for (o = 0; o < t.length; o++) Gn(e, t[o], n, r);
                return e;
              }
              if (t.nodeType) {
                o = e.length;
                while (o--) n.call(e[o], t);
              }
              return e;
            },
            Xn = function(e, t) {
              return (
                e &&
                t &&
                -1 !== (" " + e.className + " ").indexOf(" " + t + " ")
              );
            },
            Zn = function(e, t, n) {
              var r, o;
              return (
                (t = rr(t)[0]),
                e.each(function() {
                  var e = this;
                  n && r === e.parentNode
                    ? o.appendChild(e)
                    : ((r = e.parentNode),
                      (o = t.cloneNode(!1)),
                      e.parentNode.insertBefore(o, e),
                      o.appendChild(e));
                }),
                e
              );
            },
            Kn = Mn.makeMap(
              "fillOpacity fontWeight lineHeight opacity orphans widows zIndex zoom",
              " "
            ),
            Jn = Mn.makeMap(
              "checked compact declare defer disabled ismap multiple nohref noshade nowrap readonly selected",
              " "
            ),
            Qn = { for: "htmlFor", class: "className", readonly: "readOnly" },
            er = { float: "cssFloat" },
            tr = {},
            nr = {},
            rr = function(e, t) {
              return new rr.fn.init(e, t);
            },
            or = function(e, t) {
              var n;
              if (t.indexOf) return t.indexOf(e);
              n = t.length;
              while (n--) if (t[n] === e) return n;
              return -1;
            },
            ir = /^\s*|\s*$/g,
            ar = function(e) {
              return null === e || void 0 === e ? "" : ("" + e).replace(ir, "");
            },
            ur = function(e, t) {
              var n, r, o, i;
              if (e)
                if (((n = e.length), void 0 === n)) {
                  for (r in e)
                    if (
                      e.hasOwnProperty(r) &&
                      ((i = e[r]), !1 === t.call(i, r, i))
                    )
                      break;
                } else
                  for (o = 0; o < n; o++)
                    if (((i = e[o]), !1 === t.call(i, o, i))) break;
              return e;
            },
            sr = function(e, t) {
              var n = [];
              return (
                ur(e, function(e, r) {
                  t(r, e) && n.push(r);
                }),
                n
              );
            },
            cr = function(e) {
              return e ? (9 === e.nodeType ? e : e.ownerDocument) : Fn;
            };
          (rr.fn = rr.prototype = {
            constructor: rr,
            selector: "",
            context: null,
            length: 0,
            init: function(e, t) {
              var n,
                r,
                o = this;
              if (!e) return o;
              if (e.nodeType) return (o.context = o[0] = e), (o.length = 1), o;
              if (t && t.nodeType) o.context = t;
              else {
                if (t) return rr(e).attr(t);
                o.context = t = document;
              }
              if ($n(e)) {
                if (
                  ((o.selector = e),
                  (n =
                    "<" === e.charAt(0) &&
                    ">" === e.charAt(e.length - 1) &&
                    e.length >= 3
                      ? [null, e, null]
                      : zn.exec(e)),
                  !n)
                )
                  return rr(t).find(e);
                if (n[1]) {
                  r = Yn(e, cr(t)).firstChild;
                  while (r) Un.call(o, r), (r = r.nextSibling);
                } else {
                  if (((r = cr(t).getElementById(n[2])), !r)) return o;
                  if (r.id !== n[2]) return o.find(e);
                  (o.length = 1), (o[0] = r);
                }
              } else this.add(e, !1);
              return o;
            },
            toArray: function() {
              return Mn.toArray(this);
            },
            add: function(e, t) {
              var n,
                r,
                o = this;
              if ($n(e)) return o.add(rr(e));
              if (!1 !== t)
                for (
                  n = rr.unique(o.toArray().concat(rr.makeArray(e))),
                    o.length = n.length,
                    r = 0;
                  r < n.length;
                  r++
                )
                  o[r] = n[r];
              else Un.apply(o, rr.makeArray(e));
              return o;
            },
            attr: function(e, t) {
              var n,
                r = this;
              if ("object" === typeof e)
                ur(e, function(e, t) {
                  r.attr(e, t);
                });
              else {
                if (!qn(t)) {
                  if (r[0] && 1 === r[0].nodeType) {
                    if (((n = tr[e]), n && n.get)) return n.get(r[0], e);
                    if (Jn[e]) return r.prop(e) ? e : void 0;
                    (t = r[0].getAttribute(e, 2)), null === t && (t = void 0);
                  }
                  return t;
                }
                this.each(function() {
                  var n;
                  if (1 === this.nodeType) {
                    if (((n = tr[e]), n && n.set)) return void n.set(this, t);
                    null === t
                      ? this.removeAttribute(e, 2)
                      : this.setAttribute(e, t, 2);
                  }
                });
              }
              return r;
            },
            removeAttr: function(e) {
              return this.attr(e, null);
            },
            prop: function(e, t) {
              var n = this;
              if (((e = Qn[e] || e), "object" === typeof e))
                ur(e, function(e, t) {
                  n.prop(e, t);
                });
              else {
                if (!qn(t))
                  return n[0] && n[0].nodeType && e in n[0] ? n[0][e] : t;
                this.each(function() {
                  1 === this.nodeType && (this[e] = t);
                });
              }
              return n;
            },
            css: function(e, t) {
              var n,
                r,
                o = this,
                i = function(e) {
                  return e.replace(/-(\D)/g, function(e, t) {
                    return t.toUpperCase();
                  });
                },
                a = function(e) {
                  return e.replace(/[A-Z]/g, function(e) {
                    return "-" + e;
                  });
                };
              if ("object" === typeof e)
                ur(e, function(e, t) {
                  o.css(e, t);
                });
              else if (qn(t))
                (e = i(e)),
                  "number" !== typeof t || Kn[e] || (t = t.toString() + "px"),
                  o.each(function() {
                    var n = this.style;
                    if (((r = nr[e]), r && r.set)) r.set(this, t);
                    else {
                      try {
                        this.style[er[e] || e] = t;
                      } catch (o) {}
                      (null !== t && "" !== t) ||
                        (n.removeProperty
                          ? n.removeProperty(a(e))
                          : n.removeAttribute(e));
                    }
                  });
              else {
                if (((n = o[0]), (r = nr[e]), r && r.get)) return r.get(n);
                if (!n.ownerDocument.defaultView)
                  return n.currentStyle ? n.currentStyle[i(e)] : "";
                try {
                  return n.ownerDocument.defaultView
                    .getComputedStyle(n, null)
                    .getPropertyValue(a(e));
                } catch (u) {
                  return;
                }
              }
              return o;
            },
            remove: function() {
              var e,
                t = this,
                n = this.length;
              while (n--)
                (e = t[n]),
                  Vn.clean(e),
                  e.parentNode && e.parentNode.removeChild(e);
              return this;
            },
            empty: function() {
              var e,
                t = this,
                n = this.length;
              while (n--) {
                e = t[n];
                while (e.firstChild) e.removeChild(e.firstChild);
              }
              return this;
            },
            html: function(e) {
              var t,
                n = this;
              if (qn(e)) {
                t = n.length;
                try {
                  while (t--) n[t].innerHTML = e;
                } catch (r) {
                  rr(n[t])
                    .empty()
                    .append(e);
                }
                return n;
              }
              return n[0] ? n[0].innerHTML : "";
            },
            text: function(e) {
              var t,
                n = this;
              if (qn(e)) {
                t = n.length;
                while (t--)
                  "innerText" in n[t]
                    ? (n[t].innerText = e)
                    : (n[0].textContent = e);
                return n;
              }
              return n[0] ? n[0].innerText || n[0].textContent : "";
            },
            append: function() {
              return Gn(this, arguments, function(e) {
                (1 === this.nodeType ||
                  (this.host && 1 === this.host.nodeType)) &&
                  this.appendChild(e);
              });
            },
            prepend: function() {
              return Gn(
                this,
                arguments,
                function(e) {
                  (1 === this.nodeType ||
                    (this.host && 1 === this.host.nodeType)) &&
                    this.insertBefore(e, this.firstChild);
                },
                !0
              );
            },
            before: function() {
              var e = this;
              return e[0] && e[0].parentNode
                ? Gn(e, arguments, function(e) {
                    this.parentNode.insertBefore(e, this);
                  })
                : e;
            },
            after: function() {
              var e = this;
              return e[0] && e[0].parentNode
                ? Gn(
                    e,
                    arguments,
                    function(e) {
                      this.parentNode.insertBefore(e, this.nextSibling);
                    },
                    !0
                  )
                : e;
            },
            appendTo: function(e) {
              return rr(e).append(this), this;
            },
            prependTo: function(e) {
              return rr(e).prepend(this), this;
            },
            replaceWith: function(e) {
              return this.before(e).remove();
            },
            wrap: function(e) {
              return Zn(this, e);
            },
            wrapAll: function(e) {
              return Zn(this, e, !0);
            },
            wrapInner: function(e) {
              return (
                this.each(function() {
                  rr(this)
                    .contents()
                    .wrapAll(e);
                }),
                this
              );
            },
            unwrap: function() {
              return this.parent().each(function() {
                rr(this).replaceWith(this.childNodes);
              });
            },
            clone: function() {
              var e = [];
              return (
                this.each(function() {
                  e.push(this.cloneNode(!0));
                }),
                rr(e)
              );
            },
            addClass: function(e) {
              return this.toggleClass(e, !0);
            },
            removeClass: function(e) {
              return this.toggleClass(e, !1);
            },
            toggleClass: function(e, t) {
              var n = this;
              return "string" !== typeof e
                ? n
                : (-1 !== e.indexOf(" ")
                    ? ur(e.split(" "), function() {
                        n.toggleClass(this, t);
                      })
                    : n.each(function(n, r) {
                        var o, i;
                        (i = Xn(r, e)),
                          i !== t &&
                            ((o = r.className),
                            i
                              ? (r.className = ar(
                                  (" " + o + " ").replace(" " + e + " ", " ")
                                ))
                              : (r.className += o ? " " + e : e));
                      }),
                  n);
            },
            hasClass: function(e) {
              return Xn(this[0], e);
            },
            each: function(e) {
              return ur(this, e);
            },
            on: function(e, t) {
              return this.each(function() {
                Vn.bind(this, e, t);
              });
            },
            off: function(e, t) {
              return this.each(function() {
                Vn.unbind(this, e, t);
              });
            },
            trigger: function(e) {
              return this.each(function() {
                "object" === typeof e
                  ? Vn.fire(this, e.type, e)
                  : Vn.fire(this, e);
              });
            },
            show: function() {
              return this.css("display", "");
            },
            hide: function() {
              return this.css("display", "none");
            },
            slice: function() {
              return new rr(jn.apply(this, arguments));
            },
            eq: function(e) {
              return -1 === e ? this.slice(e) : this.slice(e, +e + 1);
            },
            first: function() {
              return this.eq(0);
            },
            last: function() {
              return this.eq(-1);
            },
            find: function(e) {
              var t,
                n,
                r = [];
              for (t = 0, n = this.length; t < n; t++) rr.find(e, this[t], r);
              return rr(r);
            },
            filter: function(e) {
              return rr(
                "function" === typeof e
                  ? sr(this.toArray(), function(t, n) {
                      return e(n, t);
                    })
                  : rr.filter(e, this.toArray())
              );
            },
            closest: function(e) {
              var t = [];
              return (
                e instanceof rr && (e = e[0]),
                this.each(function(n, r) {
                  while (r) {
                    if ("string" === typeof e && rr(r).is(e)) {
                      t.push(r);
                      break;
                    }
                    if (r === e) {
                      t.push(r);
                      break;
                    }
                    r = r.parentNode;
                  }
                }),
                rr(t)
              );
            },
            offset: function(e) {
              var t,
                n,
                r,
                o,
                i = 0,
                a = 0;
              return e
                ? this.css(e)
                : ((t = this[0]),
                  t &&
                    ((n = t.ownerDocument),
                    (r = n.documentElement),
                    t.getBoundingClientRect &&
                      ((o = t.getBoundingClientRect()),
                      (i =
                        o.left +
                        (r.scrollLeft || n.body.scrollLeft) -
                        r.clientLeft),
                      (a =
                        o.top +
                        (r.scrollTop || n.body.scrollTop) -
                        r.clientTop))),
                  { left: i, top: a });
            },
            push: Un,
            sort: [].sort,
            splice: [].splice
          }),
            Mn.extend(rr, {
              extend: Mn.extend,
              makeArray: function(e) {
                return Wn(e) || e.nodeType ? [e] : Mn.toArray(e);
              },
              inArray: or,
              isArray: Mn.isArray,
              each: ur,
              trim: ar,
              grep: sr,
              find: Zt,
              expr: Zt.selectors,
              unique: Zt.uniqueSort,
              text: Zt.getText,
              contains: Zt.contains,
              filter: function(e, t, n) {
                var r = t.length;
                n && (e = ":not(" + e + ")");
                while (r--) 1 !== t[r].nodeType && t.splice(r, 1);
                return (
                  (t =
                    1 === t.length
                      ? rr.find.matchesSelector(t[0], e)
                        ? [t[0]]
                        : []
                      : rr.find.matches(e, t)),
                  t
                );
              }
            });
          var lr = function(e, t, n) {
              var r = [],
                o = e[t];
              "string" !== typeof n && n instanceof rr && (n = n[0]);
              while (o && 9 !== o.nodeType) {
                if (void 0 !== n) {
                  if (o === n) break;
                  if ("string" === typeof n && rr(o).is(n)) break;
                }
                1 === o.nodeType && r.push(o), (o = o[t]);
              }
              return r;
            },
            fr = function(e, t, n, r) {
              var o = [];
              for (r instanceof rr && (r = r[0]); e; e = e[t])
                if (!n || e.nodeType === n) {
                  if (void 0 !== r) {
                    if (e === r) break;
                    if ("string" === typeof r && rr(e).is(r)) break;
                  }
                  o.push(e);
                }
              return o;
            },
            dr = function(e, t, n) {
              for (e = e[t]; e; e = e[t]) if (e.nodeType === n) return e;
              return null;
            };
          ur(
            {
              parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null;
              },
              parents: function(e) {
                return lr(e, "parentNode");
              },
              next: function(e) {
                return dr(e, "nextSibling", 1);
              },
              prev: function(e) {
                return dr(e, "previousSibling", 1);
              },
              children: function(e) {
                return fr(e.firstChild, "nextSibling", 1);
              },
              contents: function(e) {
                return Mn.toArray(
                  ("iframe" === e.nodeName
                    ? e.contentDocument || e.contentWindow.document
                    : e
                  ).childNodes
                );
              }
            },
            function(e, t) {
              rr.fn[e] = function(n) {
                var r = this,
                  o = [];
                return (
                  r.each(function() {
                    var e = t.call(o, this, n, o);
                    e && (rr.isArray(e) ? o.push.apply(o, e) : o.push(e));
                  }),
                  this.length > 1 &&
                    (Hn[e] || (o = rr.unique(o)),
                    0 === e.indexOf("parents") && (o = o.reverse())),
                  (o = rr(o)),
                  n ? o.filter(n) : o
                );
              };
            }
          ),
            ur(
              {
                parentsUntil: function(e, t) {
                  return lr(e, "parentNode", t);
                },
                nextUntil: function(e, t) {
                  return fr(e, "nextSibling", 1, t).slice(1);
                },
                prevUntil: function(e, t) {
                  return fr(e, "previousSibling", 1, t).slice(1);
                }
              },
              function(e, t) {
                rr.fn[e] = function(n, r) {
                  var o = this,
                    i = [];
                  return (
                    o.each(function() {
                      var e = t.call(i, this, n, i);
                      e && (rr.isArray(e) ? i.push.apply(i, e) : i.push(e));
                    }),
                    this.length > 1 &&
                      ((i = rr.unique(i)),
                      (0 !== e.indexOf("parents") && "prevUntil" !== e) ||
                        (i = i.reverse())),
                    (i = rr(i)),
                    r ? i.filter(r) : i
                  );
                };
              }
            ),
            (rr.fn.is = function(e) {
              return !!e && this.filter(e).length > 0;
            }),
            (rr.fn.init.prototype = rr.fn),
            (rr.overrideDefaults = function(e) {
              var t,
                n = function(r, o) {
                  return (
                    (t = t || e()),
                    0 === arguments.length && (r = t.element),
                    o || (o = t.context),
                    new n.fn.init(r, o)
                  );
                };
              return rr.extend(n, this), n;
            });
          var mr = function(e, t, n) {
            ur(n, function(n, r) {
              (e[n] = e[n] || {}), (e[n][t] = r);
            });
          };
          ke.ie &&
            ke.ie < 8 &&
            (mr(tr, "get", {
              maxlength: function(e) {
                var t = e.maxLength;
                if (2147483647 !== t) return t;
              },
              size: function(e) {
                var t = e.size;
                if (20 !== t) return t;
              },
              class: function(e) {
                return e.className;
              },
              style: function(e) {
                var t = e.style.cssText;
                if (0 !== t.length) return t;
              }
            }),
            mr(tr, "set", {
              class: function(e, t) {
                e.className = t;
              },
              style: function(e, t) {
                e.style.cssText = t;
              }
            })),
            ke.ie &&
              ke.ie < 9 &&
              ((er.float = "styleFloat"),
              mr(nr, "set", {
                opacity: function(e, t) {
                  var n = e.style;
                  null === t || "" === t
                    ? n.removeAttribute("filter")
                    : ((n.zoom = 1),
                      (n.filter = "alpha(opacity=" + 100 * t + ")"));
                }
              })),
            (rr.attrHooks = tr),
            (rr.cssHooks = nr);
          var pr = function(e) {
              var t,
                n = !1;
              return function() {
                for (var r = [], o = 0; o < arguments.length; o++)
                  r[o] = arguments[o];
                return n || ((n = !0), (t = e.apply(null, r))), t;
              };
            },
            gr = function(e, t) {
              for (var n = 0; n < e.length; n++) {
                var r = e[n];
                if (r.test(t)) return r;
              }
            },
            hr = function(e, t) {
              var n = gr(e, t);
              if (!n) return { major: 0, minor: 0 };
              var r = function(e) {
                return Number(t.replace(n, "$" + e));
              };
              return yr(r(1), r(2));
            },
            vr = function(e, t) {
              var n = String(t).toLowerCase();
              return 0 === e.length ? br() : hr(e, n);
            },
            br = function() {
              return yr(0, 0);
            },
            yr = function(e, t) {
              return { major: e, minor: t };
            },
            Cr = { nu: yr, detect: vr, unknown: br },
            wr = "Edge",
            xr = "Chrome",
            Er = "IE",
            Sr = "Opera",
            Nr = "Firefox",
            kr = "Safari",
            Tr = function(e, t) {
              return function() {
                return t === e;
              };
            },
            _r = function() {
              return Ar({ current: void 0, version: Cr.unknown() });
            },
            Ar = function(e) {
              var t = e.current,
                n = e.version;
              return {
                current: t,
                version: n,
                isEdge: Tr(wr, t),
                isChrome: Tr(xr, t),
                isIE: Tr(Er, t),
                isOpera: Tr(Sr, t),
                isFirefox: Tr(Nr, t),
                isSafari: Tr(kr, t)
              };
            },
            Rr = {
              unknown: _r,
              nu: Ar,
              edge: r(wr),
              chrome: r(xr),
              ie: r(Er),
              opera: r(Sr),
              firefox: r(Nr),
              safari: r(kr)
            },
            Dr = "Windows",
            Br = "iOS",
            Or = "Android",
            Pr = "Linux",
            Ir = "OSX",
            Lr = "Solaris",
            Mr = "FreeBSD",
            Fr = function(e, t) {
              return function() {
                return t === e;
              };
            },
            Ur = function() {
              return jr({ current: void 0, version: Cr.unknown() });
            },
            jr = function(e) {
              var t = e.current,
                n = e.version;
              return {
                current: t,
                version: n,
                isWindows: Fr(Dr, t),
                isiOS: Fr(Br, t),
                isAndroid: Fr(Or, t),
                isOSX: Fr(Ir, t),
                isLinux: Fr(Pr, t),
                isSolaris: Fr(Lr, t),
                isFreeBSD: Fr(Mr, t)
              };
            },
            zr = {
              unknown: Ur,
              nu: jr,
              windows: r(Dr),
              ios: r(Br),
              android: r(Or),
              linux: r(Pr),
              osx: r(Ir),
              solaris: r(Lr),
              freebsd: r(Mr)
            },
            Vr = function(e, t, n) {
              var o = e.isiOS() && !0 === /ipad/i.test(n),
                i = e.isiOS() && !o,
                a = e.isAndroid() && 3 === e.version.major,
                u = e.isAndroid() && 4 === e.version.major,
                s = o || a || (u && !0 === /mobile/i.test(n)),
                c = e.isiOS() || e.isAndroid(),
                l = c && !s,
                f = t.isSafari() && e.isiOS() && !1 === /safari/i.test(n);
              return {
                isiPad: r(o),
                isiPhone: r(i),
                isTablet: r(s),
                isPhone: r(l),
                isTouch: r(c),
                isAndroid: e.isAndroid,
                isiOS: e.isiOS,
                isWebView: r(f)
              };
            },
            Hr = function(e, t) {
              var n = String(t).toLowerCase();
              return Z(e, function(e) {
                return e.search(n);
              });
            },
            qr = function(e, t) {
              return Hr(e, t).map(function(e) {
                var n = Cr.detect(e.versionRegexes, t);
                return { current: e.name, version: n };
              });
            },
            $r = function(e, t) {
              return Hr(e, t).map(function(e) {
                var n = Cr.detect(e.versionRegexes, t);
                return { current: e.name, version: n };
              });
            },
            Wr = { detectBrowser: qr, detectOs: $r },
            Yr = function(e, t) {
              return -1 !== e.indexOf(t);
            },
            Gr = function(e) {
              return e.replace(/^\s+|\s+$/g, "");
            },
            Xr = function(e) {
              return e.replace(/^\s+/g, "");
            },
            Zr = function(e) {
              return e.replace(/\s+$/g, "");
            },
            Kr = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
            Jr = function(e) {
              return function(t) {
                return Yr(t, e);
              };
            },
            Qr = [
              {
                name: "Edge",
                versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
                search: function(e) {
                  var t =
                    Yr(e, "edge/") &&
                    Yr(e, "chrome") &&
                    Yr(e, "safari") &&
                    Yr(e, "applewebkit");
                  return t;
                }
              },
              {
                name: "Chrome",
                versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/, Kr],
                search: function(e) {
                  return Yr(e, "chrome") && !Yr(e, "chromeframe");
                }
              },
              {
                name: "IE",
                versionRegexes: [
                  /.*?msie\ ?([0-9]+)\.([0-9]+).*/,
                  /.*?rv:([0-9]+)\.([0-9]+).*/
                ],
                search: function(e) {
                  return Yr(e, "msie") || Yr(e, "trident");
                }
              },
              {
                name: "Opera",
                versionRegexes: [Kr, /.*?opera\/([0-9]+)\.([0-9]+).*/],
                search: Jr("opera")
              },
              {
                name: "Firefox",
                versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
                search: Jr("firefox")
              },
              {
                name: "Safari",
                versionRegexes: [Kr, /.*?cpu os ([0-9]+)_([0-9]+).*/],
                search: function(e) {
                  return (
                    (Yr(e, "safari") || Yr(e, "mobile/")) &&
                    Yr(e, "applewebkit")
                  );
                }
              }
            ],
            eo = [
              {
                name: "Windows",
                search: Jr("win"),
                versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
              },
              {
                name: "iOS",
                search: function(e) {
                  return Yr(e, "iphone") || Yr(e, "ipad");
                },
                versionRegexes: [
                  /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
                  /.*cpu os ([0-9]+)_([0-9]+).*/,
                  /.*cpu iphone os ([0-9]+)_([0-9]+).*/
                ]
              },
              {
                name: "Android",
                search: Jr("android"),
                versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]
              },
              {
                name: "OSX",
                search: Jr("os x"),
                versionRegexes: [/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]
              },
              { name: "Linux", search: Jr("linux"), versionRegexes: [] },
              { name: "Solaris", search: Jr("sunos"), versionRegexes: [] },
              { name: "FreeBSD", search: Jr("freebsd"), versionRegexes: [] }
            ],
            to = { browsers: r(Qr), oses: r(eo) },
            no = function(e) {
              var t = to.browsers(),
                n = to.oses(),
                r = Wr.detectBrowser(t, e).fold(Rr.unknown, Rr.nu),
                o = Wr.detectOs(n, e).fold(zr.unknown, zr.nu),
                i = Vr(o, r, e);
              return { browser: r, os: o, deviceType: i };
            },
            ro = { detect: no },
            oo = pr(function() {
              var e = navigator.userAgent;
              return ro.detect(e);
            }),
            io = { detect: oo },
            ao = function(e, t) {
              var n = t || document,
                r = n.createElement("div");
              if (
                ((r.innerHTML = e),
                !r.hasChildNodes() || r.childNodes.length > 1)
              )
                throw (console.error(
                  "HTML does not have a single root node",
                  e
                ),
                "HTML must have a single root node");
              return co(r.childNodes[0]);
            },
            uo = function(e, t) {
              var n = t || document,
                r = n.createElement(e);
              return co(r);
            },
            so = function(e, t) {
              var n = t || document,
                r = n.createTextNode(e);
              return co(r);
            },
            co = function(e) {
              if (null === e || void 0 === e)
                throw new Error("Node cannot be null or undefined");
              return { dom: r(e) };
            },
            lo = function(e, t, n) {
              var r = e.dom();
              return A.from(r.elementFromPoint(t, n)).map(co);
            },
            fo = {
              fromHtml: ao,
              fromTag: uo,
              fromText: so,
              fromDom: co,
              fromPoint: lo
            },
            mo = (Node.ATTRIBUTE_NODE,
            Node.CDATA_SECTION_NODE,
            Node.COMMENT_NODE,
            Node.DOCUMENT_NODE),
            po = (Node.DOCUMENT_TYPE_NODE,
            Node.DOCUMENT_FRAGMENT_NODE,
            Node.ELEMENT_NODE),
            go = Node.TEXT_NODE,
            ho = (Node.PROCESSING_INSTRUCTION_NODE,
            Node.ENTITY_REFERENCE_NODE,
            Node.ENTITY_NODE,
            Node.NOTATION_NODE,
            function(e) {
              var t = e.dom().nodeName;
              return t.toLowerCase();
            }),
            vo = function(e) {
              return e.dom().nodeType;
            },
            bo = function(e) {
              return function(t) {
                return vo(t) === e;
              };
            },
            yo = bo(po),
            Co = bo(go),
            wo = Object.keys,
            xo = Object.hasOwnProperty,
            Eo = function(e, t) {
              for (var n = wo(e), r = 0, o = n.length; r < o; r++) {
                var i = n[r],
                  a = e[i];
                t(a, i, e);
              }
            },
            So = function(e, t) {
              return No(e, function(e, n, r) {
                return { k: n, v: t(e, n, r) };
              });
            },
            No = function(e, t) {
              var n = {};
              return (
                Eo(e, function(r, o) {
                  var i = t(r, o, e);
                  n[i.k] = i.v;
                }),
                n
              );
            },
            ko = function(e, t) {
              var n = {},
                r = {};
              return (
                Eo(e, function(e, o) {
                  var i = t(e, o) ? n : r;
                  i[o] = e;
                }),
                { t: n, f: r }
              );
            },
            To = function(e, t) {
              return xo.call(e, t);
            },
            _o = function(e, t, n) {
              if (!(B(n) || L(n) || F(n)))
                throw (console.error(
                  "Invalid call to Attr.set. Key ",
                  t,
                  ":: Value ",
                  n,
                  ":: Element ",
                  e
                ),
                new Error("Attribute value was not simple"));
              e.setAttribute(t, n + "");
            },
            Ao = function(e, t, n) {
              _o(e.dom(), t, n);
            },
            Ro = function(e, t) {
              var n = e.dom();
              Eo(t, function(e, t) {
                _o(n, t, e);
              });
            },
            Do = function(e, t) {
              var n = e.dom().getAttribute(t);
              return null === n ? void 0 : n;
            },
            Bo = function(e, t) {
              var n = e.dom();
              return !(!n || !n.hasAttribute) && n.hasAttribute(t);
            },
            Oo = function(e, t) {
              e.dom().removeAttribute(t);
            },
            Po = function(e) {
              var t = Co(e) ? e.dom().parentNode : e.dom();
              return (
                void 0 !== t && null !== t && t.ownerDocument.body.contains(t)
              );
            },
            Io = function(e) {
              return void 0 !== e.style;
            },
            Lo = function(e, t, n) {
              if (!B(n))
                throw (console.error(
                  "Invalid call to CSS.set. Property ",
                  t,
                  ":: Value ",
                  n,
                  ":: Element ",
                  e
                ),
                new Error("CSS value must be a string: " + n));
              Io(e) && e.style.setProperty(t, n);
            },
            Mo = function(e, t) {
              var n = e.dom();
              Eo(t, function(e, t) {
                Lo(n, t, e);
              });
            },
            Fo = function(e, t) {
              var n = e.dom(),
                r = window.getComputedStyle(n),
                o = r.getPropertyValue(t),
                i = "" !== o || Po(e) ? o : Uo(n, t);
              return null === i ? void 0 : i;
            },
            Uo = function(e, t) {
              return Io(e) ? e.style.getPropertyValue(t) : "";
            },
            jo = function(e, t) {
              var n = e.dom(),
                r = Uo(n, t);
              return A.from(r).filter(function(e) {
                return e.length > 0;
              });
            },
            zo = function() {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              return function() {
                for (var t = [], n = 0; n < arguments.length; n++)
                  t[n] = arguments[n];
                if (e.length !== t.length)
                  throw new Error(
                    'Wrong number of arguments to struct. Expected "[' +
                      e.length +
                      ']", got ' +
                      t.length +
                      " arguments"
                  );
                var o = {};
                return (
                  q(e, function(e, n) {
                    o[e] = r(t[n]);
                  }),
                  o
                );
              };
            },
            Vo = function(e, t) {
              var n = [],
                r = function(e) {
                  return n.push(e), t(e);
                },
                o = t(e);
              do {
                o = o.bind(r);
              } while (o.isSome());
              return n;
            },
            Ho = { toArray: Vo },
            qo = function() {
              var e = he.getOrDie("Node");
              return e;
            },
            $o = function(e, t, n) {
              return 0 !== (e.compareDocumentPosition(t) & n);
            },
            Wo = function(e, t) {
              return $o(e, t, qo().DOCUMENT_POSITION_PRECEDING);
            },
            Yo = function(e, t) {
              return $o(e, t, qo().DOCUMENT_POSITION_CONTAINED_BY);
            },
            Go = {
              documentPositionPreceding: Wo,
              documentPositionContainedBy: Yo
            },
            Xo = po,
            Zo = mo,
            Ko = function(e, t) {
              var n = e.dom();
              if (n.nodeType !== Xo) return !1;
              if (void 0 !== n.matches) return n.matches(t);
              if (void 0 !== n.msMatchesSelector) return n.msMatchesSelector(t);
              if (void 0 !== n.webkitMatchesSelector)
                return n.webkitMatchesSelector(t);
              if (void 0 !== n.mozMatchesSelector)
                return n.mozMatchesSelector(t);
              throw new Error("Browser lacks native selectors");
            },
            Jo = function(e) {
              return (
                (e.nodeType !== Xo && e.nodeType !== Zo) ||
                0 === e.childElementCount
              );
            },
            Qo = function(e, t) {
              var n = void 0 === t ? document : t.dom();
              return Jo(n) ? [] : H(n.querySelectorAll(e), fo.fromDom);
            },
            ei = function(e, t) {
              var n = void 0 === t ? document : t.dom();
              return Jo(n)
                ? A.none()
                : A.from(n.querySelector(e)).map(fo.fromDom);
            },
            ti = function(e, t) {
              return e.dom() === t.dom();
            },
            ni = function(e, t) {
              var n = e.dom(),
                r = t.dom();
              return n !== r && n.contains(r);
            },
            ri = function(e, t) {
              return Go.documentPositionContainedBy(e.dom(), t.dom());
            },
            oi = io.detect().browser,
            ii = oi.isIE() ? ri : ni,
            ai = function(e) {
              return fo.fromDom(e.dom().ownerDocument);
            },
            ui = function(e) {
              return fo.fromDom(e.dom().ownerDocument.documentElement);
            },
            si = function(e) {
              var t = e.dom(),
                n = t.ownerDocument.defaultView;
              return fo.fromDom(n);
            },
            ci = function(e) {
              var t = e.dom();
              return A.from(t.parentNode).map(fo.fromDom);
            },
            li = function(e, t) {
              var n = M(t) ? t : r(!1),
                o = e.dom(),
                i = [];
              while (null !== o.parentNode && void 0 !== o.parentNode) {
                var a = o.parentNode,
                  u = fo.fromDom(a);
                if ((i.push(u), !0 === n(u))) break;
                o = a;
              }
              return i;
            },
            fi = function(e) {
              var t = e.dom();
              return A.from(t.previousSibling).map(fo.fromDom);
            },
            di = function(e) {
              var t = e.dom();
              return A.from(t.nextSibling).map(fo.fromDom);
            },
            mi = function(e) {
              return oe(Ho.toArray(e, fi));
            },
            pi = function(e) {
              return Ho.toArray(e, di);
            },
            gi = function(e) {
              var t = e.dom();
              return H(t.childNodes, fo.fromDom);
            },
            hi = function(e, t) {
              var n = e.dom().childNodes;
              return A.from(n[t]).map(fo.fromDom);
            },
            vi = function(e) {
              return hi(e, 0);
            },
            bi = function(e) {
              return hi(e, e.dom().childNodes.length - 1);
            },
            yi = function(e) {
              return e.dom().childNodes.length;
            },
            Ci = (zo("element", "offset"), io.detect().browser),
            wi = function(e) {
              return Z(e, yo);
            },
            xi = function(e) {
              return Ci.isFirefox() && "table" === ho(e)
                ? wi(gi(e))
                    .filter(function(e) {
                      return "caption" === ho(e);
                    })
                    .bind(function(e) {
                      return wi(pi(e)).map(function(t) {
                        var n = t.dom().offsetTop,
                          r = e.dom().offsetTop,
                          o = e.dom().offsetHeight;
                        return n <= r ? -o : 0;
                      });
                    })
                    .getOr(0)
                : 0;
            },
            Ei = function(e, t, n) {
              var r,
                o,
                i = 0,
                a = 0,
                u = e.ownerDocument;
              if (((n = n || e), t)) {
                if (
                  n === e &&
                  t.getBoundingClientRect &&
                  "static" === Fo(fo.fromDom(e), "position")
                )
                  return (
                    (o = t.getBoundingClientRect()),
                    (i =
                      o.left +
                      (u.documentElement.scrollLeft || e.scrollLeft) -
                      u.documentElement.clientLeft),
                    (a =
                      o.top +
                      (u.documentElement.scrollTop || e.scrollTop) -
                      u.documentElement.clientTop),
                    { x: i, y: a }
                  );
                r = t;
                while (r && r !== n && r.nodeType)
                  (i += r.offsetLeft || 0),
                    (a += r.offsetTop || 0),
                    (r = r.offsetParent);
                r = t.parentNode;
                while (r && r !== n && r.nodeType)
                  (i -= r.scrollLeft || 0),
                    (a -= r.scrollTop || 0),
                    (r = r.parentNode);
                a += xi(fo.fromDom(t));
              }
              return { x: i, y: a };
            },
            Si = { getPos: Ei },
            Ni = function(e) {
              var t = A.none(),
                n = [],
                r = function(e) {
                  return Ni(function(t) {
                    o(function(n) {
                      t(e(n));
                    });
                  });
                },
                o = function(e) {
                  a() ? s(e) : n.push(e);
                },
                i = function(e) {
                  (t = A.some(e)), u(n), (n = []);
                },
                a = function() {
                  return t.isSome();
                },
                u = function(e) {
                  q(e, s);
                },
                s = function(e) {
                  t.each(function(t) {
                    setTimeout(function() {
                      e(t);
                    }, 0);
                  });
                };
              return e(i), { get: o, map: r, isReady: a };
            },
            ki = function(e) {
              return Ni(function(t) {
                t(e);
              });
            },
            Ti = { nu: Ni, pure: ki },
            _i = function(e) {
              return function() {
                for (var t = [], n = 0; n < arguments.length; n++)
                  t[n] = arguments[n];
                var r = this;
                setTimeout(function() {
                  e.apply(r, t);
                }, 0);
              };
            },
            Ai = function(e) {
              var t = function(t) {
                  e(_i(t));
                },
                n = function(e) {
                  return Ai(function(n) {
                    t(function(t) {
                      var r = e(t);
                      n(r);
                    });
                  });
                },
                r = function(e) {
                  return Ai(function(n) {
                    t(function(t) {
                      e(t).get(n);
                    });
                  });
                },
                o = function(e) {
                  return Ai(function(n) {
                    t(function(t) {
                      e.get(n);
                    });
                  });
                },
                i = function() {
                  return Ti.nu(t);
                },
                a = function() {
                  var e = null;
                  return Ai(function(t) {
                    null === e && (e = i()), e.get(t);
                  });
                };
              return {
                map: n,
                bind: r,
                anonBind: o,
                toLazy: i,
                toCached: a,
                get: t
              };
            },
            Ri = function(e) {
              return Ai(function(t) {
                t(e);
              });
            },
            Di = { nu: Ai, pure: Ri },
            Bi = function(e, t) {
              return t(function(t) {
                var n = [],
                  r = 0,
                  o = function(o) {
                    return function(i) {
                      (n[o] = i), r++, r >= e.length && t(n);
                    };
                  };
                0 === e.length
                  ? t([])
                  : q(e, function(e, t) {
                      e.get(o(t));
                    });
              });
            },
            Oi = function(e) {
              return Bi(e, Di.nu);
            },
            Pi = function(e) {
              var t = function(t) {
                  return e === t;
                },
                n = function(t) {
                  return Pi(e);
                },
                o = function(t) {
                  return Pi(e);
                },
                i = function(t) {
                  return Pi(t(e));
                },
                a = function(t) {
                  return Pi(e);
                },
                u = function(t) {
                  t(e);
                },
                s = function(t) {
                  return t(e);
                },
                c = function(t, n) {
                  return n(e);
                },
                l = function(t) {
                  return t(e);
                },
                f = function(t) {
                  return t(e);
                },
                d = function() {
                  return A.some(e);
                };
              return {
                is: t,
                isValue: x,
                isError: w,
                getOr: r(e),
                getOrThunk: r(e),
                getOrDie: r(e),
                or: n,
                orThunk: o,
                fold: c,
                map: i,
                mapError: a,
                each: u,
                bind: s,
                exists: l,
                forall: f,
                toOption: d
              };
            },
            Ii = function(e) {
              var n = function(e) {
                  return e();
                },
                r = function() {
                  return C(String(e))();
                },
                i = function(e) {
                  return e;
                },
                a = function(e) {
                  return e();
                },
                u = function(t) {
                  return Ii(e);
                },
                s = function(t) {
                  return Ii(t(e));
                },
                c = function(t) {
                  return Ii(e);
                },
                l = function(t, n) {
                  return t(e);
                };
              return {
                is: w,
                isValue: w,
                isError: x,
                getOr: o,
                getOrThunk: n,
                getOrDie: r,
                or: i,
                orThunk: a,
                fold: l,
                map: u,
                mapError: s,
                each: t,
                bind: c,
                exists: w,
                forall: x,
                toOption: A.none
              };
            },
            Li = { value: Pi, error: Ii };
          function Mi(e, t) {
            void 0 === t && (t = {});
            var i,
              a = 0,
              u = {};
            i = t.maxLoadTime || 5e3;
            var s = function(t) {
                e.getElementsByTagName("head")[0].appendChild(t);
              },
              c = function(n, r, o) {
                var c,
                  l,
                  f,
                  d,
                  m = function() {
                    var e = d.passed,
                      t = e.length;
                    while (t--) e[t]();
                    (d.status = 2), (d.passed = []), (d.failed = []);
                  },
                  p = function() {
                    var e = d.failed,
                      t = e.length;
                    while (t--) e[t]();
                    (d.status = 3), (d.passed = []), (d.failed = []);
                  },
                  g = function() {
                    var e = navigator.userAgent.match(/WebKit\/(\d*)/);
                    return !!(e && parseInt(e[1], 10) < 536);
                  },
                  h = function(e, t) {
                    e() ||
                      (new Date().getTime() - f < i ? Ie.setTimeout(t) : p());
                  },
                  v = function() {
                    h(function() {
                      var t,
                        n,
                        r = e.styleSheets,
                        o = r.length;
                      while (o--)
                        if (
                          ((t = r[o]),
                          (n = t.ownerNode ? t.ownerNode : t.owningElement),
                          n && n.id === c.id)
                        )
                          return m(), !0;
                    }, v);
                  },
                  b = function() {
                    h(function() {
                      try {
                        var e = l.sheet.cssRules;
                        return m(), !!e;
                      } catch (t) {}
                    }, b);
                  };
                if (
                  ((n = Mn._addCacheSuffix(n)),
                  u[n]
                    ? (d = u[n])
                    : ((d = { passed: [], failed: [] }), (u[n] = d)),
                  r && d.passed.push(r),
                  o && d.failed.push(o),
                  1 !== d.status)
                )
                  if (2 !== d.status)
                    if (3 !== d.status) {
                      if (
                        ((d.status = 1),
                        (c = e.createElement("link")),
                        (c.rel = "stylesheet"),
                        (c.type = "text/css"),
                        (c.id = "u" + a++),
                        (c.async = !1),
                        (c.defer = !1),
                        (f = new Date().getTime()),
                        t.contentCssCors && (c.crossOrigin = "anonymous"),
                        "onload" in c && !g())
                      )
                        (c.onload = v), (c.onerror = p);
                      else {
                        if (navigator.userAgent.indexOf("Firefox") > 0)
                          return (
                            (l = e.createElement("style")),
                            (l.textContent = '@import "' + n + '"'),
                            b(),
                            void s(l)
                          );
                        v();
                      }
                      s(c), (c.href = n);
                    } else p();
                  else m();
              },
              l = function(e) {
                return Di.nu(function(t) {
                  c(e, n(t, r(Li.value(e))), n(t, r(Li.error(e))));
                });
              },
              f = function(e) {
                return e.fold(o, o);
              },
              d = function(e, t, n) {
                Oi(H(e, l)).get(function(e) {
                  var r = W(e, function(e) {
                    return e.isValue();
                  });
                  r.fail.length > 0 ? n(r.fail.map(f)) : t(r.pass.map(f));
                });
              };
            return { load: c, loadAll: d };
          }
          function Fi(e, t) {
            var n = e,
              r = function(e, n, r, o) {
                var i, a;
                if (e) {
                  if (!o && e[n]) return e[n];
                  if (e !== t) {
                    if (((i = e[r]), i)) return i;
                    for (a = e.parentNode; a && a !== t; a = a.parentNode)
                      if (((i = a[r]), i)) return i;
                  }
                }
              },
              o = function(e, n, r, o) {
                var i, a, u;
                if (e) {
                  if (((i = e[r]), t && i === t)) return;
                  if (i) {
                    if (!o) for (u = i[n]; u; u = u[n]) if (!u[n]) return u;
                    return i;
                  }
                  if (((a = e.parentNode), a && a !== t)) return a;
                }
              };
            (this.current = function() {
              return n;
            }),
              (this.next = function(e) {
                return (n = r(n, "firstChild", "nextSibling", e)), n;
              }),
              (this.prev = function(e) {
                return (n = r(n, "lastChild", "previousSibling", e)), n;
              }),
              (this.prev2 = function(e) {
                return (n = o(n, "lastChild", "previousSibling", e)), n;
              });
          }
          var Ui,
            ji,
            zi,
            Vi = [
              "article",
              "aside",
              "details",
              "div",
              "dt",
              "figcaption",
              "footer",
              "form",
              "fieldset",
              "header",
              "hgroup",
              "html",
              "main",
              "nav",
              "section",
              "summary",
              "body",
              "p",
              "dl",
              "multicol",
              "dd",
              "figure",
              "address",
              "center",
              "blockquote",
              "h1",
              "h2",
              "h3",
              "h4",
              "h5",
              "h6",
              "listing",
              "xmp",
              "pre",
              "plaintext",
              "menu",
              "dir",
              "ul",
              "ol",
              "li",
              "hr",
              "table",
              "tbody",
              "thead",
              "tfoot",
              "th",
              "tr",
              "td",
              "caption"
            ],
            Hi = [
              "area",
              "base",
              "basefont",
              "br",
              "col",
              "frame",
              "hr",
              "img",
              "input",
              "isindex",
              "link",
              "meta",
              "param",
              "embed",
              "source",
              "wbr",
              "track"
            ],
            qi = ["td", "th"],
            $i = ["thead", "tbody", "tfoot"],
            Wi = [
              "h1",
              "h2",
              "h3",
              "h4",
              "h5",
              "h6",
              "p",
              "div",
              "address",
              "pre",
              "form",
              "blockquote",
              "center",
              "dir",
              "fieldset",
              "header",
              "footer",
              "article",
              "section",
              "hgroup",
              "aside",
              "nav",
              "figure"
            ],
            Yi = ["h1", "h2", "h3", "h4", "h5", "h6"],
            Gi = ["li", "dd", "dt"],
            Xi = ["ul", "ol", "dl"],
            Zi = ["pre", "script", "textarea", "style"],
            Ki = function(e) {
              var t;
              return function(n) {
                return (t = t || ae(e, r(!0))), t.hasOwnProperty(ho(n));
              };
            },
            Ji = Ki(Yi),
            Qi = Ki(Vi),
            ea = function(e) {
              return yo(e) && !Qi(e);
            },
            ta = function(e) {
              return yo(e) && "br" === ho(e);
            },
            na = Ki(Wi),
            ra = Ki(Xi),
            oa = Ki(Gi),
            ia = Ki(Hi),
            aa = Ki($i),
            ua = Ki(qi),
            sa = Ki(Zi),
            ca = function(e) {
              return function(t) {
                return !!t && t.nodeType === e;
              };
            },
            la = ca(1),
            fa = function(e) {
              var t = e.toLowerCase().split(" ");
              return function(e) {
                var n, r;
                if (e && e.nodeType)
                  for (r = e.nodeName.toLowerCase(), n = 0; n < t.length; n++)
                    if (r === t[n]) return !0;
                return !1;
              };
            },
            da = function(e, t) {
              var n = t.toLowerCase().split(" ");
              return function(t) {
                var r, o;
                if (la(t))
                  for (r = 0; r < n.length; r++) {
                    var i = t.ownerDocument.defaultView.getComputedStyle(
                      t,
                      null
                    );
                    if (((o = i ? i.getPropertyValue(e) : null), o === n[r]))
                      return !0;
                  }
                return !1;
              };
            },
            ma = function(e, t) {
              return function(n) {
                return la(n) && n[e] === t;
              };
            },
            pa = function(e, t) {
              return function(t) {
                return la(t) && t.hasAttribute(e);
              };
            },
            ga = function(e, t) {
              return function(n) {
                return la(n) && n.getAttribute(e) === t;
              };
            },
            ha = function(e) {
              return la(e) && e.hasAttribute("data-mce-bogus");
            },
            va = function(e) {
              return la(e) && "all" === e.getAttribute("data-mce-bogus");
            },
            ba = function(e) {
              return la(e) && "TABLE" === e.tagName;
            },
            ya = function(e) {
              return function(t) {
                if (la(t)) {
                  if (t.contentEditable === e) return !0;
                  if (t.getAttribute("data-mce-contenteditable") === e)
                    return !0;
                }
                return !1;
              };
            },
            Ca = ca(3),
            wa = ca(8),
            xa = ca(9),
            Ea = fa("br"),
            Sa = ya("true"),
            Na = ya("false"),
            ka = {
              isText: Ca,
              isElement: la,
              isComment: wa,
              isDocument: xa,
              isBr: Ea,
              isContentEditableTrue: Sa,
              isContentEditableFalse: Na,
              matchNodeNames: fa,
              hasPropValue: ma,
              hasAttribute: pa,
              hasAttributeValue: ga,
              matchStyleValues: da,
              isBogus: ha,
              isBogusAll: va,
              isTable: ba
            },
            Ta = function(e) {
              var t =
                  e.previousSibling && "SPAN" === e.previousSibling.nodeName,
                n = e.nextSibling && "SPAN" === e.nextSibling.nodeName;
              return t && n;
            },
            _a = function(e) {
              return (
                e &&
                "SPAN" === e.tagName &&
                "bookmark" === e.getAttribute("data-mce-type")
              );
            },
            Aa = function(e, t) {
              var n,
                r = t.childNodes;
              if (!ka.isElement(t) || !_a(t)) {
                for (n = r.length - 1; n >= 0; n--) Aa(e, r[n]);
                if (!1 === ka.isDocument(t)) {
                  if (ka.isText(t) && t.nodeValue.length > 0) {
                    var o = Mn.trim(t.nodeValue).length;
                    if (e.isBlock(t.parentNode) || o > 0) return;
                    if (0 === o && Ta(t)) return;
                  } else if (
                    ka.isElement(t) &&
                    ((r = t.childNodes),
                    1 === r.length &&
                      _a(r[0]) &&
                      t.parentNode.insertBefore(r[0], t),
                    r.length || ia(fo.fromDom(t)))
                  )
                    return;
                  e.remove(t);
                }
                return t;
              }
            },
            Ra = { trimNode: Aa },
            Da = Mn.makeMap,
            Ba = /[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
            Oa = /[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
            Pa = /[<>&\"\']/g,
            Ia = /&#([a-z0-9]+);?|&([a-z0-9]+);/gi,
            La = {
              128: "€",
              130: "‚",
              131: "ƒ",
              132: "„",
              133: "…",
              134: "†",
              135: "‡",
              136: "ˆ",
              137: "‰",
              138: "Š",
              139: "‹",
              140: "Œ",
              142: "Ž",
              145: "‘",
              146: "’",
              147: "“",
              148: "”",
              149: "•",
              150: "–",
              151: "—",
              152: "˜",
              153: "™",
              154: "š",
              155: "›",
              156: "œ",
              158: "ž",
              159: "Ÿ"
            };
          (ji = {
            '"': "&quot;",
            "'": "&#39;",
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            "`": "&#96;"
          }),
            (zi = {
              "&lt;": "<",
              "&gt;": ">",
              "&amp;": "&",
              "&quot;": '"',
              "&apos;": "'"
            });
          var Ma = function(e) {
              var t;
              return (
                (t = fo.fromTag("div").dom()),
                (t.innerHTML = e),
                t.textContent || t.innerText || e
              );
            },
            Fa = function(e, t) {
              var n,
                r,
                o,
                i = {};
              if (e) {
                for (e = e.split(","), t = t || 10, n = 0; n < e.length; n += 2)
                  (r = String.fromCharCode(parseInt(e[n], t))),
                    ji[r] ||
                      ((o = "&" + e[n + 1] + ";"), (i[r] = o), (i[o] = r));
                return i;
              }
            };
          Ui = Fa(
            "50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro",
            32
          );
          var Ua = function(e, t) {
              return e.replace(t ? Ba : Oa, function(e) {
                return ji[e] || e;
              });
            },
            ja = function(e) {
              return ("" + e).replace(Pa, function(e) {
                return ji[e] || e;
              });
            },
            za = function(e, t) {
              return e.replace(t ? Ba : Oa, function(e) {
                return e.length > 1
                  ? "&#" +
                      (1024 * (e.charCodeAt(0) - 55296) +
                        (e.charCodeAt(1) - 56320) +
                        65536) +
                      ";"
                  : ji[e] || "&#" + e.charCodeAt(0) + ";";
              });
            },
            Va = function(e, t, n) {
              return (
                (n = n || Ui),
                e.replace(t ? Ba : Oa, function(e) {
                  return ji[e] || n[e] || e;
                })
              );
            },
            Ha = function(e, t) {
              var n = Fa(t) || Ui,
                r = function(e, t) {
                  return e.replace(t ? Ba : Oa, function(e) {
                    return void 0 !== ji[e]
                      ? ji[e]
                      : void 0 !== n[e]
                        ? n[e]
                        : e.length > 1
                          ? "&#" +
                            (1024 * (e.charCodeAt(0) - 55296) +
                              (e.charCodeAt(1) - 56320) +
                              65536) +
                            ";"
                          : "&#" + e.charCodeAt(0) + ";";
                  });
                },
                o = function(e, t) {
                  return Va(e, t, n);
                },
                i = Da(e.replace(/\+/g, ","));
              return i.named && i.numeric
                ? r
                : i.named
                  ? t
                    ? o
                    : Va
                  : i.numeric
                    ? za
                    : Ua;
            },
            qa = function(e) {
              return e.replace(Ia, function(e, t) {
                return t
                  ? ((t =
                      "x" === t.charAt(0).toLowerCase()
                        ? parseInt(t.substr(1), 16)
                        : parseInt(t, 10)),
                    t > 65535
                      ? ((t -= 65536),
                        String.fromCharCode(
                          55296 + (t >> 10),
                          56320 + (1023 & t)
                        ))
                      : La[t] || String.fromCharCode(t))
                  : zi[e] || Ui[e] || Ma(e);
              });
            },
            $a = {
              encodeRaw: Ua,
              encodeAllRaw: ja,
              encodeNumeric: za,
              encodeNamed: Va,
              getEncodeFunc: Ha,
              decode: qa
            },
            Wa = {},
            Ya = {},
            Ga = Mn.makeMap,
            Xa = Mn.each,
            Za = Mn.extend,
            Ka = Mn.explode,
            Ja = Mn.inArray,
            Qa = function(e, t) {
              return (e = Mn.trim(e)), e ? e.split(t || " ") : [];
            },
            eu = function(e) {
              var t,
                n,
                r,
                o,
                i,
                a,
                u = {},
                s = function(e, n, r) {
                  var o,
                    i,
                    a,
                    s = function(e, t) {
                      var n,
                        r,
                        o = {};
                      for (n = 0, r = e.length; n < r; n++) o[e[n]] = t || {};
                      return o;
                    };
                  (r = r || []),
                    (n = n || ""),
                    "string" === typeof r && (r = Qa(r)),
                    (e = Qa(e)),
                    (o = e.length);
                  while (o--)
                    (i = Qa([t, n].join(" "))),
                      (a = {
                        attributes: s(i),
                        attributesOrder: i,
                        children: s(r, Ya)
                      }),
                      (u[e[o]] = a);
                },
                c = function(e, t) {
                  var n, r, o, i;
                  (e = Qa(e)), (n = e.length), (t = Qa(t));
                  while (n--)
                    for (r = u[e[n]], o = 0, i = t.length; o < i; o++)
                      (r.attributes[t[o]] = {}), r.attributesOrder.push(t[o]);
                };
              return Wa[e]
                ? Wa[e]
                : ((t =
                    "id accesskey class dir lang style tabindex title role"),
                  (n =
                    "address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul"),
                  (r =
                    "a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment"),
                  "html4" !== e &&
                    ((t +=
                      " contenteditable contextmenu draggable dropzone hidden spellcheck translate"),
                    (n +=
                      " article aside details dialog figure main header footer hgroup section nav"),
                    (r +=
                      " audio canvas command datalist mark meter output picture progress time wbr video ruby bdi keygen")),
                  "html5-strict" !== e &&
                    ((t += " xml:lang"),
                    (a = "acronym applet basefont big font strike tt"),
                    (r = [r, a].join(" ")),
                    Xa(Qa(a), function(e) {
                      s(e, "", r);
                    }),
                    (i = "center dir isindex noframes"),
                    (n = [n, i].join(" ")),
                    (o = [n, r].join(" ")),
                    Xa(Qa(i), function(e) {
                      s(e, "", o);
                    })),
                  (o = o || [n, r].join(" ")),
                  s("html", "manifest", "head body"),
                  s(
                    "head",
                    "",
                    "base command link meta noscript script style title"
                  ),
                  s("title hr noscript br"),
                  s("base", "href target"),
                  s("link", "href rel media hreflang type sizes hreflang"),
                  s("meta", "name http-equiv content charset"),
                  s("style", "media type scoped"),
                  s("script", "src async defer type charset"),
                  s(
                    "body",
                    "onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload",
                    o
                  ),
                  s("address dt dd div caption", "", o),
                  s(
                    "h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn",
                    "",
                    r
                  ),
                  s("blockquote", "cite", o),
                  s("ol", "reversed start type", "li"),
                  s("ul", "", "li"),
                  s("li", "value", o),
                  s("dl", "", "dt dd"),
                  s("a", "href target rel media hreflang type", r),
                  s("q", "cite", r),
                  s("ins del", "cite datetime", o),
                  s("img", "src sizes srcset alt usemap ismap width height"),
                  s("iframe", "src name width height", o),
                  s("embed", "src type width height"),
                  s(
                    "object",
                    "data type typemustmatch name usemap form width height",
                    [o, "param"].join(" ")
                  ),
                  s("param", "name value"),
                  s("map", "name", [o, "area"].join(" ")),
                  s(
                    "area",
                    "alt coords shape href target rel media hreflang type"
                  ),
                  s(
                    "table",
                    "border",
                    "caption colgroup thead tfoot tbody tr" +
                      ("html4" === e ? " col" : "")
                  ),
                  s("colgroup", "span", "col"),
                  s("col", "span"),
                  s("tbody thead tfoot", "", "tr"),
                  s("tr", "", "td th"),
                  s("td", "colspan rowspan headers", o),
                  s("th", "colspan rowspan headers scope abbr", o),
                  s(
                    "form",
                    "accept-charset action autocomplete enctype method name novalidate target",
                    o
                  ),
                  s("fieldset", "disabled form name", [o, "legend"].join(" ")),
                  s("label", "form for", r),
                  s(
                    "input",
                    "accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"
                  ),
                  s(
                    "button",
                    "disabled form formaction formenctype formmethod formnovalidate formtarget name type value",
                    "html4" === e ? o : r
                  ),
                  s(
                    "select",
                    "disabled form multiple name required size",
                    "option optgroup"
                  ),
                  s("optgroup", "disabled label", "option"),
                  s("option", "disabled label selected value"),
                  s(
                    "textarea",
                    "cols dirname disabled form maxlength name readonly required rows wrap"
                  ),
                  s("menu", "type label", [o, "li"].join(" ")),
                  s("noscript", "", o),
                  "html4" !== e &&
                    (s("wbr"),
                    s("ruby", "", [r, "rt rp"].join(" ")),
                    s("figcaption", "", o),
                    s("mark rt rp summary bdi", "", r),
                    s("canvas", "width height", o),
                    s(
                      "video",
                      "src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered",
                      [o, "track source"].join(" ")
                    ),
                    s(
                      "audio",
                      "src crossorigin preload autoplay mediagroup loop muted controls buffered volume",
                      [o, "track source"].join(" ")
                    ),
                    s("picture", "", "img source"),
                    s("source", "src srcset type media sizes"),
                    s("track", "kind src srclang label default"),
                    s("datalist", "", [r, "option"].join(" ")),
                    s("article section nav aside main header footer", "", o),
                    s("hgroup", "", "h1 h2 h3 h4 h5 h6"),
                    s("figure", "", [o, "figcaption"].join(" ")),
                    s("time", "datetime", r),
                    s("dialog", "open", o),
                    s(
                      "command",
                      "type label icon disabled checked radiogroup command"
                    ),
                    s("output", "for form name", r),
                    s("progress", "value max", r),
                    s("meter", "value min max low high optimum", r),
                    s("details", "open", [o, "summary"].join(" ")),
                    s(
                      "keygen",
                      "autofocus challenge disabled form keytype name"
                    )),
                  "html5-strict" !== e &&
                    (c("script", "language xml:space"),
                    c("style", "xml:space"),
                    c(
                      "object",
                      "declare classid code codebase codetype archive standby align border hspace vspace"
                    ),
                    c("embed", "align name hspace vspace"),
                    c("param", "valuetype type"),
                    c("a", "charset name rev shape coords"),
                    c("br", "clear"),
                    c(
                      "applet",
                      "codebase archive code object alt name width height align hspace vspace"
                    ),
                    c("img", "name longdesc align border hspace vspace"),
                    c(
                      "iframe",
                      "longdesc frameborder marginwidth marginheight scrolling align"
                    ),
                    c("font basefont", "size color face"),
                    c("input", "usemap align"),
                    c("select", "onchange"),
                    c("textarea"),
                    c("h1 h2 h3 h4 h5 h6 div p legend caption", "align"),
                    c("ul", "type compact"),
                    c("li", "type"),
                    c("ol dl menu dir", "compact"),
                    c("pre", "width xml:space"),
                    c("hr", "align noshade size width"),
                    c("isindex", "prompt"),
                    c(
                      "table",
                      "summary width frame rules cellspacing cellpadding align bgcolor"
                    ),
                    c("col", "width align char charoff valign"),
                    c("colgroup", "width align char charoff valign"),
                    c("thead", "align char charoff valign"),
                    c("tr", "align char charoff valign bgcolor"),
                    c(
                      "th",
                      "axis align char charoff valign nowrap bgcolor width height"
                    ),
                    c("form", "accept"),
                    c(
                      "td",
                      "abbr axis scope align char charoff valign nowrap bgcolor width height"
                    ),
                    c("tfoot", "align char charoff valign"),
                    c("tbody", "align char charoff valign"),
                    c("area", "nohref"),
                    c("body", "background bgcolor text link vlink alink")),
                  "html4" !== e &&
                    (c("input button select textarea", "autofocus"),
                    c("input textarea", "placeholder"),
                    c("a", "download"),
                    c("link script img", "crossorigin"),
                    c("iframe", "sandbox seamless allowfullscreen")),
                  Xa(Qa("a form meter progress dfn"), function(e) {
                    u[e] && delete u[e].children[e];
                  }),
                  delete u.caption.children.table,
                  delete u.script,
                  (Wa[e] = u),
                  u);
            },
            tu = function(e, t) {
              var n;
              return (
                e &&
                  ((n = {}),
                  "string" === typeof e && (e = { "*": e }),
                  Xa(e, function(e, r) {
                    n[r] = n[r.toUpperCase()] =
                      "map" === t ? Ga(e, /[, ]/) : Ka(e, /[, ]/);
                  })),
                n
              );
            };
          function nu(e) {
            var t,
              n,
              r,
              o,
              i,
              a,
              u,
              s,
              c,
              l,
              f,
              d,
              m,
              p = {},
              g = {},
              h = [],
              v = {},
              b = {},
              y = function(t, n, r) {
                var o = e[t];
                return (
                  o
                    ? (o = Ga(o, /[, ]/, Ga(o.toUpperCase(), /[, ]/)))
                    : ((o = Wa[t]),
                      o ||
                        ((o = Ga(n, " ", Ga(n.toUpperCase(), " "))),
                        (o = Za(o, r)),
                        (Wa[t] = o))),
                  o
                );
              };
            (e = e || {}),
              (r = eu(e.schema)),
              !1 === e.verify_html && (e.valid_elements = "*[*]"),
              (t = tu(e.valid_styles)),
              (n = tu(e.invalid_styles, "map")),
              (s = tu(e.valid_classes, "map")),
              (o = y(
                "whitespace_elements",
                "pre script noscript style textarea video audio iframe object code"
              )),
              (i = y(
                "self_closing_elements",
                "colgroup dd dt li option p td tfoot th thead tr"
              )),
              (a = y(
                "short_ended_elements",
                "area base basefont br col frame hr img input isindex link meta param embed source wbr track"
              )),
              (u = y(
                "boolean_attributes",
                "checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls"
              )),
              (l = y(
                "non_empty_elements",
                "td th iframe video audio object script pre code",
                a
              )),
              (f = y("move_caret_before_on_enter_elements", "table", l)),
              (d = y(
                "text_block_elements",
                "h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside main nav figure"
              )),
              (c = y(
                "block_elements",
                "hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption details summary",
                d
              )),
              (m = y(
                "text_inline_elements",
                "span strong b em i font strike u var cite dfn code mark q sup sub samp"
              )),
              Xa(
                (
                  e.special ||
                  "script noscript noframes noembed title style textarea xmp"
                ).split(" "),
                function(e) {
                  b[e] = new RegExp("</" + e + "[^>]*>", "gi");
                }
              );
            var C = function(e) {
                return new RegExp("^" + e.replace(/([?+*])/g, ".$1") + "$");
              },
              w = function(e) {
                var t,
                  n,
                  r,
                  o,
                  i,
                  a,
                  u,
                  s,
                  c,
                  l,
                  f,
                  d,
                  m,
                  g,
                  v,
                  b,
                  y,
                  w,
                  x,
                  E = /^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)\])?$/,
                  S = /^([!\-])?(\w+[\\:]:\w+|[^=:<]+)?(?:([=:<])(.*))?$/,
                  N = /[*?+]/;
                if (e)
                  for (
                    e = Qa(e, ","),
                      p["@"] &&
                        ((b = p["@"].attributes), (y = p["@"].attributesOrder)),
                      t = 0,
                      n = e.length;
                    t < n;
                    t++
                  )
                    if (((i = E.exec(e[t])), i)) {
                      if (
                        ((g = i[1]),
                        (c = i[2]),
                        (v = i[3]),
                        (s = i[5]),
                        (d = {}),
                        (m = []),
                        (a = { attributes: d, attributesOrder: m }),
                        "#" === g && (a.paddEmpty = !0),
                        "-" === g && (a.removeEmpty = !0),
                        "!" === i[4] && (a.removeEmptyAttrs = !0),
                        b)
                      ) {
                        for (w in b) d[w] = b[w];
                        m.push.apply(m, y);
                      }
                      if (s)
                        for (s = Qa(s, "|"), r = 0, o = s.length; r < o; r++)
                          if (((i = S.exec(s[r])), i)) {
                            if (
                              ((u = {}),
                              (f = i[1]),
                              (l = i[2].replace(/[\\:]:/g, ":")),
                              (g = i[3]),
                              (x = i[4]),
                              "!" === f &&
                                ((a.attributesRequired =
                                  a.attributesRequired || []),
                                a.attributesRequired.push(l),
                                (u.required = !0)),
                              "-" === f)
                            ) {
                              delete d[l], m.splice(Ja(m, l), 1);
                              continue;
                            }
                            g &&
                              ("=" === g &&
                                ((a.attributesDefault =
                                  a.attributesDefault || []),
                                a.attributesDefault.push({ name: l, value: x }),
                                (u.defaultValue = x)),
                              ":" === g &&
                                ((a.attributesForced =
                                  a.attributesForced || []),
                                a.attributesForced.push({ name: l, value: x }),
                                (u.forcedValue = x)),
                              "<" === g && (u.validValues = Ga(x, "?"))),
                              N.test(l)
                                ? ((a.attributePatterns =
                                    a.attributePatterns || []),
                                  (u.pattern = C(l)),
                                  a.attributePatterns.push(u))
                                : (d[l] || m.push(l), (d[l] = u));
                          }
                      b || "@" !== c || ((b = d), (y = m)),
                        v && ((a.outputName = c), (p[v] = a)),
                        N.test(c)
                          ? ((a.pattern = C(c)), h.push(a))
                          : (p[c] = a);
                    }
              },
              x = function(e) {
                (p = {}),
                  (h = []),
                  w(e),
                  Xa(r, function(e, t) {
                    g[t] = e.children;
                  });
              },
              E = function(e) {
                var t = /^(~)?(.+)$/;
                e &&
                  ((Wa.text_block_elements = Wa.block_elements = null),
                  Xa(Qa(e, ","), function(e) {
                    var n = t.exec(e),
                      r = "~" === n[1],
                      o = r ? "span" : "div",
                      i = n[2];
                    if (
                      ((g[i] = g[o]),
                      (v[i] = o),
                      r || ((c[i.toUpperCase()] = {}), (c[i] = {})),
                      !p[i])
                    ) {
                      var a = p[o];
                      (a = Za({}, a)),
                        delete a.removeEmptyAttrs,
                        delete a.removeEmpty,
                        (p[i] = a);
                    }
                    Xa(g, function(e, t) {
                      e[o] && ((g[t] = e = Za({}, g[t])), (e[i] = e[o]));
                    });
                  }));
              },
              S = function(t) {
                var n = /^([+\-]?)(\w+)\[([^\]]+)\]$/;
                (Wa[e.schema] = null),
                  t &&
                    Xa(Qa(t, ","), function(e) {
                      var t,
                        r,
                        o = n.exec(e);
                      o &&
                        ((r = o[1]),
                        (t = r ? g[o[2]] : (g[o[2]] = { "#comment": {} })),
                        (t = g[o[2]]),
                        Xa(Qa(o[3], "|"), function(e) {
                          "-" === r ? delete t[e] : (t[e] = {});
                        }));
                    });
              },
              N = function(e) {
                var t,
                  n = p[e];
                if (n) return n;
                t = h.length;
                while (t--) if (((n = h[t]), n.pattern.test(e))) return n;
              };
            e.valid_elements
              ? x(e.valid_elements)
              : (Xa(r, function(e, t) {
                  (p[t] = {
                    attributes: e.attributes,
                    attributesOrder: e.attributesOrder
                  }),
                    (g[t] = e.children);
                }),
                "html5" !== e.schema &&
                  Xa(Qa("strong/b em/i"), function(e) {
                    (e = Qa(e, "/")), (p[e[1]].outputName = e[0]);
                  }),
                Xa(
                  Qa(
                    "ol ul sub sup blockquote span font a table tbody tr strong em b i"
                  ),
                  function(e) {
                    p[e] && (p[e].removeEmpty = !0);
                  }
                ),
                Xa(
                  Qa("p h1 h2 h3 h4 h5 h6 th td pre div address caption li"),
                  function(e) {
                    p[e].paddEmpty = !0;
                  }
                ),
                Xa(Qa("span"), function(e) {
                  p[e].removeEmptyAttrs = !0;
                })),
              E(e.custom_elements),
              S(e.valid_children),
              w(e.extended_valid_elements),
              S("+ol[ul|ol],+ul[ul|ol]"),
              Xa(
                {
                  dd: "dl",
                  dt: "dl",
                  li: "ul ol",
                  td: "tr",
                  th: "tr",
                  tr: "tbody thead tfoot",
                  tbody: "table",
                  thead: "table",
                  tfoot: "table",
                  legend: "fieldset",
                  area: "map",
                  param: "video audio object"
                },
                function(e, t) {
                  p[t] && (p[t].parentsRequired = Qa(e));
                }
              ),
              e.invalid_elements &&
                Xa(Ka(e.invalid_elements), function(e) {
                  p[e] && delete p[e];
                }),
              N("span") || w("span[!data-mce-type|*]");
            var k = function() {
                return t;
              },
              T = function() {
                return n;
              },
              _ = function() {
                return s;
              },
              A = function() {
                return u;
              },
              R = function() {
                return c;
              },
              D = function() {
                return d;
              },
              B = function() {
                return m;
              },
              O = function() {
                return a;
              },
              P = function() {
                return i;
              },
              I = function() {
                return l;
              },
              L = function() {
                return f;
              },
              M = function() {
                return o;
              },
              F = function() {
                return b;
              },
              U = function(e, t) {
                var n = g[e.toLowerCase()];
                return !(!n || !n[t.toLowerCase()]);
              },
              j = function(e, t) {
                var n,
                  r,
                  o = N(e);
                if (o) {
                  if (!t) return !0;
                  if (o.attributes[t]) return !0;
                  if (((n = o.attributePatterns), n)) {
                    r = n.length;
                    while (r--) if (n[r].pattern.test(e)) return !0;
                  }
                }
                return !1;
              },
              z = function() {
                return v;
              };
            return {
              children: g,
              elements: p,
              getValidStyles: k,
              getValidClasses: _,
              getBlockElements: R,
              getInvalidStyles: T,
              getShortEndedElements: O,
              getTextBlockElements: D,
              getTextInlineElements: B,
              getBoolAttrs: A,
              getElementRule: N,
              getSelfClosingElements: P,
              getNonEmptyElements: I,
              getMoveCaretBeforeOnEnterElements: L,
              getWhiteSpaceElements: M,
              getSpecialElements: F,
              isValidChild: U,
              isValid: j,
              getCustomElements: z,
              addValidElements: w,
              setValidElements: x,
              addCustomElements: E,
              addValidChildren: S
            };
          }
          var ru = function(e, t, n, r) {
            var o = function(e) {
              return (
                (e = parseInt(e, 10).toString(16)), e.length > 1 ? e : "0" + e
              );
            };
            return "#" + o(t) + o(n) + o(r);
          };
          function ou(e, t) {
            var n,
              r,
              o,
              i,
              a = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,
              u = /(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,
              s = /\s*([^:]+):\s*([^;]+);?/g,
              c = /\s+$/,
              l = {},
              f = "\ufeff";
            for (
              e = e || {},
                t && ((o = t.getValidStyles()), (i = t.getInvalidStyles())),
                r = ("\\\" \\' \\; \\: ; : " + f).split(" "),
                n = 0;
              n < r.length;
              n++
            )
              (l[r[n]] = f + n), (l[f + n] = r[n]);
            return {
              toHex: function(e) {
                return e.replace(a, ru);
              },
              parse: function(t) {
                var r,
                  o,
                  i,
                  d,
                  m = {},
                  p = e.url_converter,
                  g = e.url_converter_scope || this,
                  h = function(e, t, r) {
                    var o, i, a, u;
                    if (
                      ((o = m[e + "-top" + t]),
                      o &&
                        ((i = m[e + "-right" + t]),
                        i &&
                          ((a = m[e + "-bottom" + t]),
                          a && ((u = m[e + "-left" + t]), u))))
                    ) {
                      var s = [o, i, a, u];
                      n = s.length - 1;
                      while (n--) if (s[n] !== s[n + 1]) break;
                      (n > -1 && r) ||
                        ((m[e + t] = -1 === n ? s[0] : s.join(" ")),
                        delete m[e + "-top" + t],
                        delete m[e + "-right" + t],
                        delete m[e + "-bottom" + t],
                        delete m[e + "-left" + t]);
                    }
                  },
                  v = function(e) {
                    var t,
                      n = m[e];
                    if (n) {
                      (n = n.split(" ")), (t = n.length);
                      while (t--) if (n[t] !== n[0]) return !1;
                      return (m[e] = n[0]), !0;
                    }
                  },
                  b = function(e, t, n, r) {
                    v(t) &&
                      v(n) &&
                      v(r) &&
                      ((m[e] = m[t] + " " + m[n] + " " + m[r]),
                      delete m[t],
                      delete m[n],
                      delete m[r]);
                  },
                  y = function(e) {
                    return (d = !0), l[e];
                  },
                  C = function(e, t) {
                    return (
                      d &&
                        (e = e.replace(/\uFEFF[0-9]/g, function(e) {
                          return l[e];
                        })),
                      t || (e = e.replace(/\\([\'\";:])/g, "$1")),
                      e
                    );
                  },
                  w = function(e) {
                    return String.fromCharCode(parseInt(e.slice(1), 16));
                  },
                  x = function(e) {
                    return e.replace(/\\[0-9a-f]+/gi, w);
                  },
                  E = function(t, n, r, o, i, a) {
                    if (((i = i || a), i))
                      return (i = C(i)), "'" + i.replace(/\'/g, "\\'") + "'";
                    if (((n = C(n || r || o)), !e.allow_script_urls)) {
                      var u = n.replace(/[\s\r\n]+/g, "");
                      if (/(java|vb)script:/i.test(u)) return "";
                      if (!e.allow_svg_data_urls && /^data:image\/svg/i.test(u))
                        return "";
                    }
                    return (
                      p && (n = p.call(g, n, "style")),
                      "url('" + n.replace(/\'/g, "\\'") + "')"
                    );
                  };
                if (t) {
                  (t = t.replace(/[\u0000-\u001F]/g, "")),
                    (t = t
                      .replace(/\\[\"\';:\uFEFF]/g, y)
                      .replace(/\"[^\"]+\"|\'[^\']+\'/g, function(e) {
                        return e.replace(/[;:]/g, y);
                      }));
                  while ((r = s.exec(t)))
                    if (
                      ((s.lastIndex = r.index + r[0].length),
                      (o = r[1].replace(c, "").toLowerCase()),
                      (i = r[2].replace(c, "")),
                      o && i)
                    ) {
                      if (
                        ((o = x(o)),
                        (i = x(i)),
                        -1 !== o.indexOf(f) || -1 !== o.indexOf('"'))
                      )
                        continue;
                      if (
                        !e.allow_script_urls &&
                        ("behavior" === o ||
                          /expression\s*\(|\/\*|\*\//.test(i))
                      )
                        continue;
                      "font-weight" === o && "700" === i
                        ? (i = "bold")
                        : ("color" !== o && "background-color" !== o) ||
                          (i = i.toLowerCase()),
                        (i = i.replace(a, ru)),
                        (i = i.replace(u, E)),
                        (m[o] = d ? C(i, !0) : i);
                    }
                  h("border", "", !0),
                    h("border", "-width"),
                    h("border", "-color"),
                    h("border", "-style"),
                    h("padding", ""),
                    h("margin", ""),
                    b("border", "border-width", "border-style", "border-color"),
                    "medium none" === m.border && delete m.border,
                    "none" === m["border-image"] && delete m["border-image"];
                }
                return m;
              },
              serialize: function(e, t) {
                var n,
                  r,
                  a = "",
                  u = function(t) {
                    var n, r, i, u;
                    if (((n = o[t]), n))
                      for (r = 0, i = n.length; r < i; r++)
                        (t = n[r]),
                          (u = e[t]),
                          u &&
                            (a +=
                              (a.length > 0 ? " " : "") + t + ": " + u + ";");
                  },
                  s = function(e, t) {
                    var n;
                    return (
                      (n = i["*"]), (!n || !n[e]) && ((n = i[t]), !n || !n[e])
                    );
                  };
                if (t && o) u("*"), u(t);
                else
                  for (n in e)
                    (r = e[n]),
                      !r ||
                        (i && !s(n, t)) ||
                        (a += (a.length > 0 ? " " : "") + n + ": " + r + ";");
                return a;
              }
            };
          }
          var iu = Mn.each,
            au = Mn.grep,
            uu = ke.ie,
            su = /^([a-z0-9],?)+$/i,
            cu = /^[ \t\r\n]*$/,
            lu = function(e, t, n) {
              var r = {},
                o = t.keep_values,
                i = {
                  set: function(e, r, o) {
                    t.url_converter &&
                      (r = t.url_converter.call(
                        t.url_converter_scope || n(),
                        r,
                        o,
                        e[0]
                      )),
                      e.attr("data-mce-" + o, r).attr(o, r);
                  },
                  get: function(e, t) {
                    return e.attr("data-mce-" + t) || e.attr(t);
                  }
                };
              return (
                (r = {
                  style: {
                    set: function(e, t) {
                      null === t || "object" !== typeof t
                        ? (o && e.attr("data-mce-style", t), e.attr("style", t))
                        : e.css(t);
                    },
                    get: function(t) {
                      var n = t.attr("data-mce-style") || t.attr("style");
                      return (n = e.serialize(e.parse(n), t[0].nodeName)), n;
                    }
                  }
                }),
                o && (r.href = r.src = i),
                r
              );
            },
            fu = function(e, t) {
              var n = t.attr("style"),
                r = e.serialize(e.parse(n), t[0].nodeName);
              r || (r = null), t.attr("data-mce-style", r);
            },
            du = function(e, t) {
              var n,
                r,
                o = 0;
              if (e)
                for (
                  n = e.nodeType, e = e.previousSibling;
                  e;
                  e = e.previousSibling
                )
                  (r = e.nodeType),
                    (!t || 3 !== r || (r !== n && e.nodeValue.length)) &&
                      (o++, (n = r));
              return o;
            };
          function mu(e, t) {
            var n,
              r = this;
            void 0 === t && (t = {});
            var o = {},
              i = window,
              a = {},
              u = 0,
              s = !0,
              c = !0,
              l = Mi(e, { contentCssCors: t.contentCssCors }),
              f = [],
              d = t.schema ? t.schema : nu({}),
              m = ou(
                {
                  url_converter: t.url_converter,
                  url_converter_scope: t.url_converter_scope
                },
                t.schema
              ),
              p = t.ownEvents ? new Ye(t.proxy) : Ye.Event,
              g = d.getBlockElements(),
              h = rr.overrideDefaults(function() {
                return { context: e, element: Te.getRoot() };
              }),
              v = function(e) {
                if ("string" === typeof e) return !!g[e];
                if (e) {
                  var t = e.nodeType;
                  if (t) return !(1 !== t || !g[e.nodeName]);
                }
                return !1;
              },
              b = function(t) {
                if (t && e && "string" === typeof t) {
                  var n = e.getElementById(t);
                  return n && n.id !== t ? e.getElementsByName(t)[1] : n;
                }
                return t;
              },
              y = function(e) {
                return "string" === typeof e && (e = b(e)), h(e);
              },
              C = function(e, t, r) {
                var o,
                  i,
                  a = y(e);
                return (
                  a.length &&
                    ((o = n[t]), (i = o && o.get ? o.get(a, t) : a.attr(t))),
                  "undefined" === typeof i && (i = r || ""),
                  i
                );
              },
              w = function(e) {
                var t = b(e);
                return t ? t.attributes : [];
              },
              x = function(e, r, o) {
                var i, a;
                "" === o && (o = null);
                var u = y(e);
                (i = u.attr(r)),
                  u.length &&
                    ((a = n[r]),
                    a && a.set ? a.set(u, o, r) : u.attr(r, o),
                    i !== o &&
                      t.onSetAttrib &&
                      t.onSetAttrib({ attrElm: u, attrName: r, attrValue: o }));
              },
              E = function(t, n) {
                if (!uu || 1 !== t.nodeType || n) return t.cloneNode(n);
                if (!n) {
                  var r = e.createElement(t.nodeName);
                  return (
                    iu(w(t), function(e) {
                      x(r, e.nodeName, C(t, e.nodeName));
                    }),
                    r
                  );
                }
                return null;
              },
              S = function() {
                return t.root_element || e.body;
              },
              N = function(e) {
                var t = e || i,
                  n = t.document,
                  r = c ? n.documentElement : n.body;
                return {
                  x: t.pageXOffset || r.scrollLeft,
                  y: t.pageYOffset || r.scrollTop,
                  w: t.innerWidth || r.clientWidth,
                  h: t.innerHeight || r.clientHeight
                };
              },
              k = function(t, n) {
                return Si.getPos(e.body, b(t), n);
              },
              T = function(e, n, r) {
                var o = y(e).css(n, r);
                t.update_styles && fu(m, o);
              },
              _ = function(e, n) {
                var r = y(e).css(n);
                t.update_styles && fu(m, r);
              },
              A = function(e, t, n) {
                var r = y(e);
                return n
                  ? r.css(t)
                  : ((t = t.replace(/-(\D)/g, function(e, t) {
                      return t.toUpperCase();
                    })),
                    "float" === t &&
                      (t = ke.ie && ke.ie < 12 ? "styleFloat" : "cssFloat"),
                    r[0] && r[0].style ? r[0].style[t] : void 0);
              },
              R = function(e) {
                var t, n;
                return (
                  (e = b(e)),
                  (t = A(e, "width")),
                  (n = A(e, "height")),
                  -1 === t.indexOf("px") && (t = 0),
                  -1 === n.indexOf("px") && (n = 0),
                  {
                    w: parseInt(t, 10) || e.offsetWidth || e.clientWidth,
                    h: parseInt(n, 10) || e.offsetHeight || e.clientHeight
                  }
                );
              },
              D = function(e) {
                var t, n;
                return (
                  (e = b(e)),
                  (t = k(e)),
                  (n = R(e)),
                  { x: t.x, y: t.y, w: n.w, h: n.h }
                );
              },
              B = function(e, t) {
                var n;
                if (!e) return !1;
                if (!Array.isArray(e)) {
                  if ("*" === t) return 1 === e.nodeType;
                  if (su.test(t)) {
                    var r = t.toLowerCase().split(/,/),
                      o = e.nodeName.toLowerCase();
                    for (n = r.length - 1; n >= 0; n--)
                      if (r[n] === o) return !0;
                    return !1;
                  }
                  if (e.nodeType && 1 !== e.nodeType) return !1;
                }
                var i = Array.isArray(e) ? e : [e];
                return Zt(t, i[0].ownerDocument || i[0], null, i).length > 0;
              },
              O = function(e, t, n, r) {
                var o,
                  i = [],
                  a = b(e);
                (r = void 0 === r),
                  (n = n || ("BODY" !== S().nodeName ? S().parentNode : null)),
                  Mn.is(t, "string") &&
                    ((o = t),
                    (t =
                      "*" === t
                        ? function(e) {
                            return 1 === e.nodeType;
                          }
                        : function(e) {
                            return B(e, o);
                          }));
                while (a) {
                  if (a === n || !a.nodeType || 9 === a.nodeType) break;
                  if (!t || ("function" === typeof t && t(a))) {
                    if (!r) return [a];
                    i.push(a);
                  }
                  a = a.parentNode;
                }
                return r ? i : null;
              },
              P = function(e, t, n) {
                var r = O(e, t, n, !1);
                return r && r.length > 0 ? r[0] : null;
              },
              I = function(e, t, n) {
                var r = t;
                if (e)
                  for (
                    "string" === typeof t &&
                      (r = function(e) {
                        return B(e, t);
                      }),
                      e = e[n];
                    e;
                    e = e[n]
                  )
                    if ("function" === typeof r && r(e)) return e;
                return null;
              },
              L = function(e, t) {
                return I(e, t, "nextSibling");
              },
              M = function(e, t) {
                return I(e, t, "previousSibling");
              },
              F = function(n, r) {
                return Zt(n, b(r) || t.root_element || e, []);
              },
              U = function(e, t, n) {
                var o,
                  i = "string" === typeof e ? b(e) : e;
                if (!i) return !1;
                if (Mn.isArray(i) && (i.length || 0 === i.length))
                  return (
                    (o = []),
                    iu(i, function(e, r) {
                      e &&
                        ("string" === typeof e && (e = b(e)),
                        o.push(t.call(n, e, r)));
                    }),
                    o
                  );
                var a = n || r;
                return t.call(a, i);
              },
              j = function(e, t) {
                y(e).each(function(e, n) {
                  iu(t, function(e, t) {
                    x(n, t, e);
                  });
                });
              },
              z = function(e, t) {
                var n = y(e);
                uu
                  ? n.each(function(e, n) {
                      if (!1 !== n.canHaveHTML) {
                        while (n.firstChild) n.removeChild(n.firstChild);
                        try {
                          (n.innerHTML = "<br>" + t),
                            n.removeChild(n.firstChild);
                        } catch (r) {
                          rr("<div></div>")
                            .html("<br>" + t)
                            .contents()
                            .slice(1)
                            .appendTo(n);
                        }
                        return t;
                      }
                    })
                  : n.html(t);
              },
              V = function(t, n, r, o, i) {
                return U(t, function(t) {
                  var a = "string" === typeof n ? e.createElement(n) : n;
                  return (
                    j(a, r),
                    o &&
                      ("string" !== typeof o && o.nodeType
                        ? a.appendChild(o)
                        : "string" === typeof o && z(a, o)),
                    i ? a : t.appendChild(a)
                  );
                });
              },
              H = function(t, n, r) {
                return V(e.createElement(t), t, n, r, !0);
              },
              q = $a.decode,
              $ = $a.encodeAllRaw,
              W = function(e, t, n) {
                var r,
                  o = "";
                for (r in ((o += "<" + e), t))
                  t.hasOwnProperty(r) &&
                    null !== t[r] &&
                    "undefined" !== typeof t[r] &&
                    (o += " " + r + '="' + $(t[r]) + '"');
                return "undefined" !== typeof n
                  ? o + ">" + n + "</" + e + ">"
                  : o + " />";
              },
              Y = function(t) {
                var n,
                  r = e.createElement("div"),
                  o = e.createDocumentFragment();
                t && (r.innerHTML = t);
                while ((n = r.firstChild)) o.appendChild(n);
                return o;
              },
              G = function(e, t) {
                var n = y(e);
                return (
                  t
                    ? n
                        .each(function() {
                          var e;
                          while ((e = this.firstChild))
                            3 === e.nodeType && 0 === e.data.length
                              ? this.removeChild(e)
                              : this.parentNode.insertBefore(e, this);
                        })
                        .remove()
                    : n.remove(),
                  n.length > 1 ? n.toArray() : n[0]
                );
              },
              X = function(e) {
                return U(e, function(e) {
                  var t,
                    n = e.attributes;
                  for (t = n.length - 1; t >= 0; t--)
                    e.removeAttributeNode(n.item(t));
                });
              },
              Z = function(e) {
                return m.parse(e);
              },
              K = function(e, t) {
                return m.serialize(e, t);
              },
              J = function(t) {
                var n, r;
                if (Te !== mu.DOM && e === document) {
                  if (o[t]) return;
                  o[t] = !0;
                }
                (r = e.getElementById("mceDefaultStyles")),
                  r ||
                    ((r = e.createElement("style")),
                    (r.id = "mceDefaultStyles"),
                    (r.type = "text/css"),
                    (n = e.getElementsByTagName("head")[0]),
                    n.firstChild
                      ? n.insertBefore(r, n.firstChild)
                      : n.appendChild(r)),
                  r.styleSheet
                    ? (r.styleSheet.cssText += t)
                    : r.appendChild(e.createTextNode(t));
              },
              Q = function(t) {
                var n;
                Te === mu.DOM || e !== document
                  ? (t || (t = ""),
                    (n = e.getElementsByTagName("head")[0]),
                    iu(t.split(","), function(e) {
                      var t;
                      (e = Mn._addCacheSuffix(e)),
                        a[e] ||
                          ((a[e] = !0),
                          (t = H("link", { rel: "stylesheet", href: e })),
                          n.appendChild(t));
                    }))
                  : mu.DOM.loadCSS(t);
              },
              ee = function(e, t, n) {
                y(e)
                  .toggleClass(t, n)
                  .each(function() {
                    "" === this.className && rr(this).attr("class", null);
                  });
              },
              te = function(e, t) {
                y(e).addClass(t);
              },
              ne = function(e, t) {
                ee(e, t, !1);
              },
              re = function(e, t) {
                return y(e).hasClass(t);
              },
              oe = function(e) {
                y(e).show();
              },
              ie = function(e) {
                y(e).hide();
              },
              ae = function(e) {
                return "none" === y(e).css("display");
              },
              ue = function(e) {
                return (e || "mce_") + u++;
              },
              se = function(e) {
                var t = "string" === typeof e ? b(e) : e;
                return ka.isElement(t)
                  ? t.outerHTML
                  : rr("<div></div>")
                      .append(rr(t).clone())
                      .html();
              },
              ce = function(e, t) {
                y(e).each(function() {
                  try {
                    if ("outerHTML" in this) return void (this.outerHTML = t);
                  } catch (e) {}
                  G(rr(this).html(t), !0);
                });
              },
              le = function(e, t) {
                var n = b(t);
                return U(e, function(e) {
                  var t, r;
                  return (
                    (t = n.parentNode),
                    (r = n.nextSibling),
                    r ? t.insertBefore(e, r) : t.appendChild(e),
                    e
                  );
                });
              },
              fe = function(e, t, n) {
                return U(t, function(t) {
                  return (
                    Mn.is(t, "array") && (e = e.cloneNode(!0)),
                    n &&
                      iu(au(t.childNodes), function(t) {
                        e.appendChild(t);
                      }),
                    t.parentNode.replaceChild(e, t)
                  );
                });
              },
              de = function(e, t) {
                var n;
                return (
                  e.nodeName !== t.toUpperCase() &&
                    ((n = H(t)),
                    iu(w(e), function(t) {
                      x(n, t.nodeName, C(e, t.nodeName));
                    }),
                    fe(n, e, !0)),
                  n || e
                );
              },
              me = function(e, t) {
                var n,
                  r = e;
                while (r) {
                  n = t;
                  while (n && r !== n) n = n.parentNode;
                  if (r === n) break;
                  r = r.parentNode;
                }
                return !r && e.ownerDocument
                  ? e.ownerDocument.documentElement
                  : r;
              },
              pe = function(e) {
                return m.toHex(Mn.trim(e));
              },
              ge = function(e, t) {
                var n,
                  r,
                  o,
                  i,
                  a,
                  u,
                  s = 0;
                if (((e = e.firstChild), e)) {
                  (a = new Fi(e, e.parentNode)),
                    (t = t || (d ? d.getNonEmptyElements() : null)),
                    (i = d ? d.getWhiteSpaceElements() : {});
                  do {
                    if (((o = e.nodeType), ka.isElement(e))) {
                      var c = e.getAttribute("data-mce-bogus");
                      if (c) {
                        e = a.next("all" === c);
                        continue;
                      }
                      if (((u = e.nodeName.toLowerCase()), t && t[u])) {
                        if ("br" === u) {
                          s++, (e = a.next());
                          continue;
                        }
                        return !1;
                      }
                      (r = w(e)), (n = r.length);
                      while (n--)
                        if (
                          ((u = r[n].nodeName),
                          "name" === u || "data-mce-bookmark" === u)
                        )
                          return !1;
                    }
                    if (8 === o) return !1;
                    if (3 === o && !cu.test(e.nodeValue)) return !1;
                    if (
                      3 === o &&
                      e.parentNode &&
                      i[e.parentNode.nodeName] &&
                      cu.test(e.nodeValue)
                    )
                      return !1;
                    e = a.next();
                  } while (e);
                }
                return s <= 1;
              },
              he = function() {
                return e.createRange();
              },
              ve = function(e, t, n) {
                var r,
                  o,
                  i,
                  a = he();
                if (e && t)
                  return (
                    a.setStart(e.parentNode, du(e)),
                    a.setEnd(t.parentNode, du(t)),
                    (r = a.extractContents()),
                    (a = he()),
                    a.setStart(t.parentNode, du(t) + 1),
                    a.setEnd(e.parentNode, du(e) + 1),
                    (o = a.extractContents()),
                    (i = e.parentNode),
                    i.insertBefore(Ra.trimNode(Te, r), e),
                    n ? i.insertBefore(n, e) : i.insertBefore(t, e),
                    i.insertBefore(Ra.trimNode(Te, o), e),
                    G(e),
                    n || t
                  );
              },
              be = function(n, r, o, a) {
                if (Mn.isArray(n)) {
                  var u = n.length;
                  while (u--) n[u] = be(n[u], r, o, a);
                  return n;
                }
                return (
                  !t.collect || (n !== e && n !== i) || f.push([n, r, o, a]),
                  p.bind(n, r, o, a || Te)
                );
              },
              ye = function(t, n, r) {
                var o;
                if (Mn.isArray(t)) {
                  o = t.length;
                  while (o--) t[o] = ye(t[o], n, r);
                  return t;
                }
                if (f && (t === e || t === i)) {
                  o = f.length;
                  while (o--) {
                    var a = f[o];
                    t !== a[0] ||
                      (n && n !== a[1]) ||
                      (r && r !== a[2]) ||
                      p.unbind(a[0], a[1], a[2]);
                  }
                }
                return p.unbind(t, n, r);
              },
              Ce = function(e, t, n) {
                return p.fire(e, t, n);
              },
              we = function(e) {
                if (e && ka.isElement(e)) {
                  var t = e.getAttribute("data-mce-contenteditable");
                  return t && "inherit" !== t
                    ? t
                    : "inherit" !== e.contentEditable
                      ? e.contentEditable
                      : null;
                }
                return null;
              },
              xe = function(e) {
                for (var t = S(), n = null; e && e !== t; e = e.parentNode)
                  if (((n = we(e)), null !== n)) break;
                return n;
              },
              Ee = function() {
                if (f) {
                  var e = f.length;
                  while (e--) {
                    var t = f[e];
                    p.unbind(t[0], t[1], t[2]);
                  }
                }
                Zt.setDocument && Zt.setDocument();
              },
              Se = function(e, t) {
                while (e) {
                  if (t === e) return !0;
                  e = e.parentNode;
                }
                return !1;
              },
              Ne = function(e) {
                return (
                  "startContainer: " +
                  e.startContainer.nodeName +
                  ", startOffset: " +
                  e.startOffset +
                  ", endContainer: " +
                  e.endContainer.nodeName +
                  ", endOffset: " +
                  e.endOffset
                );
              },
              Te = {
                doc: e,
                settings: t,
                win: i,
                files: a,
                stdMode: s,
                boxModel: c,
                styleSheetLoader: l,
                boundEvents: f,
                styles: m,
                schema: d,
                events: p,
                isBlock: v,
                $: h,
                $$: y,
                root: null,
                clone: E,
                getRoot: S,
                getViewPort: N,
                getRect: D,
                getSize: R,
                getParent: P,
                getParents: O,
                get: b,
                getNext: L,
                getPrev: M,
                select: F,
                is: B,
                add: V,
                create: H,
                createHTML: W,
                createFragment: Y,
                remove: G,
                setStyle: T,
                getStyle: A,
                setStyles: _,
                removeAllAttribs: X,
                setAttrib: x,
                setAttribs: j,
                getAttrib: C,
                getPos: k,
                parseStyle: Z,
                serializeStyle: K,
                addStyle: J,
                loadCSS: Q,
                addClass: te,
                removeClass: ne,
                hasClass: re,
                toggleClass: ee,
                show: oe,
                hide: ie,
                isHidden: ae,
                uniqueId: ue,
                setHTML: z,
                getOuterHTML: se,
                setOuterHTML: ce,
                decode: q,
                encode: $,
                insertAfter: le,
                replace: fe,
                rename: de,
                findCommonAncestor: me,
                toHex: pe,
                run: U,
                getAttribs: w,
                isEmpty: ge,
                createRng: he,
                nodeIndex: du,
                split: ve,
                bind: be,
                unbind: ye,
                fire: Ce,
                getContentEditable: we,
                getContentEditableParent: xe,
                destroy: Ee,
                isChildOf: Se,
                dumpRng: Ne
              };
            return (
              (n = lu(m, t, function() {
                return Te;
              })),
              Te
            );
          }
          (function(e) {
            (e.DOM = e(document)), (e.nodeIndex = du);
          })(mu || (mu = {}));
          var pu = mu,
            gu = pu.DOM,
            hu = Mn.each,
            vu = Mn.grep,
            bu = function(e) {
              return "function" === typeof e;
            },
            yu = function() {
              var e = 0,
                t = 1,
                n = 2,
                r = 3,
                o = {},
                i = [],
                a = {},
                u = [],
                s = 0,
                c = function(e, t, n) {
                  var r,
                    o,
                    i = gu,
                    a = function() {
                      i.remove(o),
                        r && (r.onreadystatechange = r.onload = r = null),
                        t();
                    },
                    u = function() {
                      bu(n)
                        ? n()
                        : "undefined" !== typeof console &&
                          console.log &&
                          console.log("Failed to load script: " + e);
                    };
                  (o = i.uniqueId()),
                    (r = document.createElement("script")),
                    (r.id = o),
                    (r.type = "text/javascript"),
                    (r.src = Mn._addCacheSuffix(e)),
                    (r.onload = a),
                    (r.onerror = u),
                    (
                      document.getElementsByTagName("head")[0] || document.body
                    ).appendChild(r);
                };
              (this.isDone = function(e) {
                return o[e] === n;
              }),
                (this.markDone = function(e) {
                  o[e] = n;
                }),
                (this.add = this.load = function(t, n, r, u) {
                  var s = o[t];
                  void 0 === s && (i.push(t), (o[t] = e)),
                    n &&
                      (a[t] || (a[t] = []),
                      a[t].push({ success: n, failure: u, scope: r || this }));
                }),
                (this.remove = function(e) {
                  delete o[e], delete a[e];
                }),
                (this.loadQueue = function(e, t, n) {
                  this.loadScripts(i, e, t, n);
                }),
                (this.loadScripts = function(e, i, l, f) {
                  var d,
                    m = [],
                    p = function(e, t) {
                      hu(a[t], function(t) {
                        bu(t[e]) && t[e].call(t.scope);
                      }),
                        (a[t] = void 0);
                    };
                  u.push({ success: i, failure: f, scope: l || this }),
                    (d = function() {
                      var i = vu(e);
                      if (
                        ((e.length = 0),
                        hu(i, function(e) {
                          o[e] !== n
                            ? o[e] !== r
                              ? o[e] !== t &&
                                ((o[e] = t),
                                s++,
                                c(
                                  e,
                                  function() {
                                    (o[e] = n), s--, p("success", e), d();
                                  },
                                  function() {
                                    (o[e] = r),
                                      s--,
                                      m.push(e),
                                      p("failure", e),
                                      d();
                                  }
                                ))
                              : p("failure", e)
                            : p("success", e);
                        }),
                        !s)
                      ) {
                        var a = u.slice(0);
                        (u.length = 0),
                          hu(a, function(e) {
                            0 === m.length
                              ? bu(e.success) && e.success.call(e.scope)
                              : bu(e.failure) && e.failure.call(e.scope, m);
                          });
                      }
                    }),
                    d();
                });
            };
          yu.ScriptLoader = new yu();
          var Cu = Mn.each;
          function wu() {
            var e = this,
              t = [],
              n = {},
              r = {},
              o = [],
              i = function(e) {
                if (r[e]) return r[e].instance;
              },
              a = function(e) {
                var t;
                return r[e] && (t = r[e].dependencies), t || [];
              },
              u = function(e, t) {
                var r = wu.language;
                if (r && !1 !== wu.languageLoad) {
                  if (t)
                    if (
                      ((t = "," + t + ","),
                      -1 !== t.indexOf("," + r.substr(0, 2) + ","))
                    )
                      r = r.substr(0, 2);
                    else if (-1 === t.indexOf("," + r + ",")) return;
                  yu.ScriptLoader.add(n[e] + "/langs/" + r + ".js");
                }
              },
              s = function(e, n, i) {
                t.push(n), (r[e] = { instance: n, dependencies: i });
                var a = W(o, function(t) {
                  return t.name === e;
                });
                return (
                  (o = a.fail),
                  Cu(a.pass, function(e) {
                    e.callback();
                  }),
                  n
                );
              },
              c = function(e) {
                delete n[e], delete r[e];
              },
              l = function(e, t) {
                return "object" === typeof t
                  ? t
                  : "string" === typeof e
                    ? { prefix: "", resource: t, suffix: "" }
                    : { prefix: e.prefix, resource: t, suffix: e.suffix };
              },
              f = function(t, n) {
                var r = e.urls[t];
                Cu(n, function(e) {
                  yu.ScriptLoader.add(r + "/" + e);
                });
              },
              d = function(e, t, n, r) {
                var o = a(e);
                Cu(o, function(e) {
                  var n = l(t, e);
                  m(n.resource, n, void 0, void 0);
                }),
                  n && (r ? n.call(r) : n.call(yu));
              },
              m = function(e, t, o, i, a) {
                if (!n[e]) {
                  var u =
                    "string" === typeof t
                      ? t
                      : t.prefix + t.resource + t.suffix;
                  0 !== u.indexOf("/") &&
                    -1 === u.indexOf("://") &&
                    (u = wu.baseURL + "/" + u),
                    (n[e] = u.substring(0, u.lastIndexOf("/"))),
                    r[e]
                      ? d(e, t, o, i)
                      : yu.ScriptLoader.add(
                          u,
                          function() {
                            return d(e, t, o, i);
                          },
                          i,
                          a
                        );
                }
              },
              p = function(e, t) {
                r.hasOwnProperty(e) ? t() : o.push({ name: e, callback: t });
              };
            return {
              items: t,
              urls: n,
              lookup: r,
              _listeners: o,
              get: i,
              dependencies: a,
              requireLangPack: u,
              add: s,
              remove: c,
              createUrl: l,
              addComponents: f,
              load: m,
              waitFor: p
            };
          }
          (function(e) {
            (e.PluginManager = e()), (e.ThemeManager = e());
          })(wu || (wu = {}));
          var xu = function(e, t) {
              var n = ci(e);
              n.each(function(n) {
                n.dom().insertBefore(t.dom(), e.dom());
              });
            },
            Eu = function(e, t) {
              var n = di(e);
              n.fold(
                function() {
                  var n = ci(e);
                  n.each(function(e) {
                    Su(e, t);
                  });
                },
                function(e) {
                  xu(e, t);
                }
              );
            },
            Su = function(e, t) {
              e.dom().appendChild(t.dom());
            },
            Nu = function(e, t) {
              xu(e, t), Su(t, e);
            },
            ku = function(e, t) {
              q(t, function(t) {
                xu(e, t);
              });
            },
            Tu = function(e, t) {
              q(t, function(t) {
                Su(e, t);
              });
            },
            _u = function(e) {
              (e.dom().textContent = ""),
                q(gi(e), function(e) {
                  Au(e);
                });
            },
            Au = function(e) {
              var t = e.dom();
              null !== t.parentNode && t.parentNode.removeChild(t);
            },
            Ru = function(e) {
              var t = gi(e);
              t.length > 0 && ku(e, t), Au(e);
            },
            Du = function(e, t) {
              var n = null,
                r = function() {
                  null !== n && (clearTimeout(n), (n = null));
                },
                o = function() {
                  for (var r = [], o = 0; o < arguments.length; o++)
                    r[o] = arguments[o];
                  null === n &&
                    (n = setTimeout(function() {
                      e.apply(null, r), (n = null);
                    }, t));
                };
              return { cancel: r, throttle: o };
            },
            Bu = function(e, t) {
              var n = null,
                r = function() {
                  null !== n && (clearTimeout(n), (n = null));
                },
                o = function() {
                  for (var r = [], o = 0; o < arguments.length; o++)
                    r[o] = arguments[o];
                  null !== n && clearTimeout(n),
                    (n = setTimeout(function() {
                      e.apply(null, r), (n = null);
                    }, t));
                };
              return { cancel: r, throttle: o };
            },
            Ou = function(e) {
              var t = e,
                n = function() {
                  return t;
                },
                r = function(e) {
                  t = e;
                },
                o = function() {
                  return Ou(n());
                };
              return { get: n, set: r, clone: o };
            },
            Pu = function(e, t) {
              var n = Do(e, t);
              return void 0 === n || "" === n ? [] : n.split(" ");
            },
            Iu = function(e, t, n) {
              var r = Pu(e, t),
                o = r.concat([n]);
              return Ao(e, t, o.join(" ")), !0;
            },
            Lu = function(e, t, n) {
              var r = Y(Pu(e, t), function(e) {
                return e !== n;
              });
              return r.length > 0 ? Ao(e, t, r.join(" ")) : Oo(e, t), !1;
            },
            Mu = function(e) {
              return void 0 !== e.dom().classList;
            },
            Fu = function(e) {
              return Pu(e, "class");
            },
            Uu = function(e, t) {
              return Iu(e, "class", t);
            },
            ju = function(e, t) {
              return Lu(e, "class", t);
            },
            zu = function(e, t) {
              Mu(e) ? e.dom().classList.add(t) : Uu(e, t);
            },
            Vu = function(e) {
              var t = Mu(e) ? e.dom().classList : Fu(e);
              0 === t.length && Oo(e, "class");
            },
            Hu = function(e, t) {
              if (Mu(e)) {
                var n = e.dom().classList;
                n.remove(t);
              } else ju(e, t);
              Vu(e);
            },
            qu = function(e, t) {
              return Mu(e) && e.dom().classList.contains(t);
            },
            $u = function(e, t) {
              return Qo(t, e);
            };
          function Wu(e, t, n, r, o) {
            return e(n, r) ? A.some(n) : M(o) && o(n) ? A.none() : t(n, r, o);
          }
          var Yu = function(e, t, n) {
              var o = e.dom(),
                i = M(n) ? n : r(!1);
              while (o.parentNode) {
                o = o.parentNode;
                var a = fo.fromDom(o);
                if (t(a)) return A.some(a);
                if (i(a)) break;
              }
              return A.none();
            },
            Gu = function(e, t, n) {
              var r = function(e) {
                return t(e);
              };
              return Wu(r, Yu, e, t, n);
            },
            Xu = function(e, t, n) {
              return Yu(
                e,
                function(e) {
                  return Ko(e, t);
                },
                n
              );
            },
            Zu = function(e, t) {
              return ei(t, e);
            },
            Ku = function(e, t, n) {
              return Wu(Ko, Xu, e, t, n);
            },
            Ju = r("mce-annotation"),
            Qu = r("data-mce-annotation"),
            es = r("data-mce-annotation-uid"),
            ts = function(e, t) {
              var n = e.selection.getRng(),
                r = fo.fromDom(n.startContainer),
                o = fo.fromDom(e.getBody()),
                i = t.fold(
                  function() {
                    return "." + Ju();
                  },
                  function(e) {
                    return "[" + Qu() + '="' + e + '"]';
                  }
                ),
                a = hi(r, n.startOffset).getOr(r),
                u = Ku(a, i, function(e) {
                  return ti(e, o);
                }),
                s = function(e, t) {
                  return Bo(e, t) ? A.some(Do(e, t)) : A.none();
                };
              return u.bind(function(t) {
                return s(t, "" + es()).bind(function(n) {
                  return s(t, "" + Qu()).map(function(t) {
                    var r = rs(e, n);
                    return { uid: n, name: t, elements: r };
                  });
                });
              });
            },
            ns = function(e) {
              return yo(e) && qu(e, Ju());
            },
            rs = function(e, t) {
              var n = fo.fromDom(e.getBody());
              return $u(n, "[" + es() + '="' + t + '"]');
            },
            os = function(e, t) {
              var n = fo.fromDom(e.getBody()),
                r = $u(n, "[" + Qu() + '="' + t + '"]'),
                o = {};
              return (
                q(r, function(e) {
                  var t = Do(e, es()),
                    n = o.hasOwnProperty(t) ? o[t] : [];
                  o[t] = n.concat([e]);
                }),
                o
              );
            },
            is = function(e, t) {
              var n = Ou({}),
                r = function() {
                  return { listeners: [], previous: Ou(A.none()) };
                },
                o = function(e, t) {
                  i(e, function(e) {
                    return t(e), e;
                  });
                },
                i = function(e, t) {
                  var o = n.get(),
                    i = o.hasOwnProperty(e) ? o[e] : r(),
                    a = t(i);
                  (o[e] = a), n.set(o);
                },
                a = function(e, t, n) {
                  o(e, function(r) {
                    q(r.listeners, function(r) {
                      return r(!0, e, {
                        uid: t,
                        nodes: H(n, function(e) {
                          return e.dom();
                        })
                      });
                    });
                  });
                },
                u = function(e) {
                  o(e, function(t) {
                    q(t.listeners, function(t) {
                      return t(!1, e);
                    });
                  });
                },
                s = Bu(function() {
                  var t = n.get(),
                    r = ue(wo(t));
                  q(r, function(t) {
                    i(t, function(n) {
                      var r = n.previous.get();
                      return (
                        ts(e, A.some(t)).fold(
                          function() {
                            r.isSome() && (u(t), n.previous.set(A.none()));
                          },
                          function(e) {
                            var t = e.uid,
                              o = e.name,
                              i = e.elements;
                            r.is(t) || (a(o, t, i), n.previous.set(A.some(t)));
                          }
                        ),
                        { previous: n.previous, listeners: n.listeners }
                      );
                    });
                  });
                }, 30);
              e.on("remove", function() {
                s.cancel();
              }),
                e.on("nodeChange", function() {
                  s.throttle();
                });
              var c = function(e, t) {
                i(e, function(e) {
                  return {
                    previous: e.previous,
                    listeners: e.listeners.concat([t])
                  };
                });
              };
              return { addListener: c };
            },
            as = function(e, t) {
              var n = function(e) {
                var n = A.from(e.attributes.map[Qu()]);
                return n.bind(t.lookup);
              };
              e.on("init", function() {
                e.serializer.addNodeFilter("span", function(e) {
                  q(e, function(e) {
                    n(e).each(function(t) {
                      !1 === t.persistent && e.unwrap();
                    });
                  });
                });
              });
            },
            us = function() {
              var e = {},
                t = function(t, n) {
                  e[t] = { name: t, settings: n };
                },
                n = function(t) {
                  return e.hasOwnProperty(t)
                    ? A.from(e[t]).map(function(e) {
                        return e.settings;
                      })
                    : A.none();
                };
              return { register: t, lookup: n };
            };
          function ss(e, t) {
            var n = {};
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) &&
                t.indexOf(r) < 0 &&
                (n[r] = e[r]);
            if (
              null != e &&
              "function" === typeof Object.getOwnPropertySymbols
            ) {
              var o = 0;
              for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                t.indexOf(r[o]) < 0 && (n[r[o]] = e[r[o]]);
            }
            return n;
          }
          var cs = 0,
            ls = function(e) {
              var t = new Date(),
                n = t.getTime(),
                r = Math.floor(1e9 * Math.random());
              return cs++, e + "_" + r + cs + String(n);
            },
            fs = function(e, t) {
              q(t, function(t) {
                zu(e, t);
              });
            },
            ds = function(e, t) {
              return fo.fromDom(e.dom().cloneNode(t));
            },
            ms = function(e) {
              return ds(e, !1);
            },
            ps = function(e) {
              return ds(e, !0);
            },
            gs = function(e, t) {
              var n = t || document,
                r = n.createElement("div");
              return (r.innerHTML = e), gi(fo.fromDom(r));
            },
            hs = function(e) {
              return e.dom().innerHTML;
            },
            vs = function(e, t) {
              var n = ai(e),
                r = n.dom(),
                o = fo.fromDom(r.createDocumentFragment()),
                i = gs(t, r);
              Tu(o, i), _u(e), Su(e, o);
            },
            bs = "\ufeff",
            ys = function(e) {
              return e === bs;
            },
            Cs = function(e) {
              return e.replace(new RegExp(bs, "g"), "");
            },
            ws = { isZwsp: ys, ZWSP: bs, trim: Cs },
            xs = ka.isElement,
            Es = ka.isText,
            Ss = function(e) {
              return (
                Es(e) && (e = e.parentNode),
                xs(e) && e.hasAttribute("data-mce-caret")
              );
            },
            Ns = function(e) {
              return Es(e) && ws.isZwsp(e.data);
            },
            ks = function(e) {
              return Ss(e) || Ns(e);
            },
            Ts = function(e) {
              return e.firstChild !== e.lastChild || !ka.isBr(e.firstChild);
            },
            _s = function(e, t) {
              var n, r, o, i;
              if (
                ((n = e.ownerDocument),
                (o = n.createTextNode(ws.ZWSP)),
                (i = e.parentNode),
                t)
              ) {
                if (((r = e.previousSibling), Es(r))) {
                  if (ks(r)) return r;
                  if (Ps(r)) return r.splitText(r.data.length - 1);
                }
                i.insertBefore(o, e);
              } else {
                if (((r = e.nextSibling), Es(r))) {
                  if (ks(r)) return r;
                  if (Os(r)) return r.splitText(1), r;
                }
                e.nextSibling
                  ? i.insertBefore(o, e.nextSibling)
                  : i.appendChild(o);
              }
              return o;
            },
            As = function(e) {
              var t = e.container();
              return e && ka.isText(t) && t.data.charAt(e.offset()) === ws.ZWSP;
            },
            Rs = function(e) {
              var t = e.container();
              return (
                e && ka.isText(t) && t.data.charAt(e.offset() - 1) === ws.ZWSP
              );
            },
            Ds = function() {
              var e = document.createElement("br");
              return e.setAttribute("data-mce-bogus", "1"), e;
            },
            Bs = function(e, t, n) {
              var r, o, i;
              return (
                (r = t.ownerDocument),
                (o = r.createElement(e)),
                o.setAttribute("data-mce-caret", n ? "before" : "after"),
                o.setAttribute("data-mce-bogus", "all"),
                o.appendChild(Ds()),
                (i = t.parentNode),
                n
                  ? i.insertBefore(o, t)
                  : t.nextSibling
                    ? i.insertBefore(o, t.nextSibling)
                    : i.appendChild(o),
                o
              );
            },
            Os = function(e) {
              return Es(e) && e.data[0] === ws.ZWSP;
            },
            Ps = function(e) {
              return Es(e) && e.data[e.data.length - 1] === ws.ZWSP;
            },
            Is = function(e) {
              var t = e.getElementsByTagName("br"),
                n = t[t.length - 1];
              ka.isBogus(n) && n.parentNode.removeChild(n);
            },
            Ls = function(e) {
              return e && e.hasAttribute("data-mce-caret")
                ? (Is(e),
                  e.removeAttribute("data-mce-caret"),
                  e.removeAttribute("data-mce-bogus"),
                  e.removeAttribute("style"),
                  e.removeAttribute("_moz_abspos"),
                  e)
                : null;
            },
            Ms = function(e) {
              return Ss(e.startContainer);
            },
            Fs = ka.isContentEditableTrue,
            Us = ka.isContentEditableFalse,
            js = ka.isBr,
            zs = ka.isText,
            Vs = ka.matchNodeNames("script style textarea"),
            Hs = ka.matchNodeNames(
              "img input textarea hr iframe video audio object"
            ),
            qs = ka.matchNodeNames("table"),
            $s = ks,
            Ws = function(e) {
              return (
                !$s(e) &&
                (zs(e) ? !Vs(e.parentNode) : Hs(e) || js(e) || qs(e) || Gs(e))
              );
            },
            Ys = function(e) {
              return (
                ka.isElement(e) && "true" === e.getAttribute("unselectable")
              );
            },
            Gs = function(e) {
              return !1 === Ys(e) && Us(e);
            },
            Xs = function(e, t) {
              for (e = e.parentNode; e && e !== t; e = e.parentNode) {
                if (Gs(e)) return !1;
                if (Fs(e)) return !0;
              }
              return !0;
            },
            Zs = function(e) {
              return (
                !!Gs(e) &&
                !0 !==
                  X(
                    le(e.getElementsByTagName("*")),
                    function(e, t) {
                      return e || Fs(t);
                    },
                    !1
                  )
              );
            },
            Ks = function(e) {
              return Hs(e) || Zs(e);
            },
            Js = function(e, t) {
              return Ws(e) && Xs(e, t);
            },
            Qs = Math.round,
            ec = function(e) {
              return e
                ? {
                    left: Qs(e.left),
                    top: Qs(e.top),
                    bottom: Qs(e.bottom),
                    right: Qs(e.right),
                    width: Qs(e.width),
                    height: Qs(e.height)
                  }
                : { left: 0, top: 0, bottom: 0, right: 0, width: 0, height: 0 };
            },
            tc = function(e, t) {
              return (
                (e = ec(e)),
                t
                  ? (e.right = e.left)
                  : ((e.left = e.left + e.width), (e.right = e.left)),
                (e.width = 0),
                e
              );
            },
            nc = function(e, t) {
              return (
                e.left === t.left &&
                e.top === t.top &&
                e.bottom === t.bottom &&
                e.right === t.right
              );
            },
            rc = function(e, t, n) {
              return e >= 0 && e <= Math.min(t.height, n.height) / 2;
            },
            oc = function(e, t) {
              return (
                e.bottom - e.height / 2 < t.top ||
                (!(e.top > t.bottom) && rc(t.top - e.bottom, e, t))
              );
            },
            ic = function(e, t) {
              return (
                e.top > t.bottom ||
                (!(e.bottom < t.top) && rc(t.bottom - e.top, e, t))
              );
            },
            ac = function(e, t, n) {
              return t >= e.left && t <= e.right && n >= e.top && n <= e.bottom;
            },
            uc = function(e, t) {
              return t.left > e.left && t.right < e.right
                ? 0
                : t.left < e.left
                  ? t.left - e.left
                  : t.right - e.right;
            },
            sc = function(e, t) {
              return t.top > e.top && t.bottom < e.bottom
                ? 0
                : t.top < e.top
                  ? t.top - e.top
                  : t.bottom - e.bottom;
            },
            cc = function(e, t) {
              return { x: uc(e, t), y: sc(e, t) };
            },
            lc = function(e) {
              var t = e.startContainer,
                n = e.startOffset;
              return t.hasChildNodes() && e.endOffset === n + 1
                ? t.childNodes[n]
                : null;
            },
            fc = function(e, t) {
              return (
                1 === e.nodeType &&
                  e.hasChildNodes() &&
                  (t >= e.childNodes.length && (t = e.childNodes.length - 1),
                  (e = e.childNodes[t])),
                e
              );
            },
            dc = new RegExp(
              "[̀-ͯ҃-҇҈-҉֑-ֽֿׁ-ׂׄ-ׇׅؐ-ًؚ-ٰٟۖ-ۜ۟-ۤۧ-۪ۨ-ܑۭܰ-݊ަ-ް߫-߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࣣ-ंऺ़ु-ै्॑-ॗॢ-ॣঁ়াু-ৄ্ৗৢ-ৣਁ-ਂ਼ੁ-ੂੇ-ੈੋ-੍ੑੰ-ੱੵઁ-ં઼ુ-ૅે-ૈ્ૢ-ૣଁ଼ାିୁ-ୄ୍ୖୗୢ-ୣஂாீ்ௗఀా-ీె-ైొ-్ౕ-ౖౢ-ౣಁ಼ಿೂೆೌ-್ೕ-ೖೢ-ೣഁാു-ൄ്ൗൢ-ൣ්ාි-ුූෟัิ-ฺ็-๎ັິ-ູົ-ຼ່-ໍ༘-ཱ༹༙༵༷-ཾྀ-྄྆-྇ྍ-ྗྙ-ྼ࿆ိ-ူဲ-့္-်ွ-ှၘ-ၙၞ-ၠၱ-ၴႂႅ-ႆႍႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒ-ᝓᝲ-ᝳ឴-឵ិ-ួំ៉-៓៝᠋-᠍ᢩᤠ-ᤢᤧ-ᤨᤲ᤹-᤻ᨗ-ᨘᨛᩖᩘ-ᩞ᩠ᩢᩥ-ᩬᩳ-᩿᩼᪰-᪽᪾ᬀ-ᬃ᬴ᬶ-ᬺᬼᭂ᭫-᭳ᮀ-ᮁᮢ-ᮥᮨ-ᮩ᮫-ᮭ᯦ᯨ-ᯩᯭᯯ-ᯱᰬ-ᰳᰶ-᰷᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸-᳹᷀-᷵᷼-᷿‌-‍⃐-⃜⃝-⃠⃡⃢-⃤⃥-⃰⳯-⵿⳱ⷠ-〪ⷿ-〭〮-゙〯-゚꙯꙰-꙲ꙴ-꙽ꚞ-ꚟ꛰-꛱ꠂ꠆ꠋꠥ-ꠦ꣄꣠-꣱ꤦ-꤭ꥇ-ꥑꦀ-ꦂ꦳ꦶ-ꦹꦼꧥꨩ-ꨮꨱ-ꨲꨵ-ꨶꩃꩌꩼꪰꪲ-ꪴꪷ-ꪸꪾ-꪿꫁ꫬ-ꫭ꫶ꯥꯨ꯭ﬞ︀-️︠-︯ﾞ-ﾟ]"
            ),
            mc = function(e) {
              return (
                "string" === typeof e && e.charCodeAt(0) >= 768 && dc.test(e)
              );
            },
            pc = function(e, t) {
              for (var n = [], r = 0; r < e.length; r++) {
                var o = e[r];
                if (!o.isSome()) return A.none();
                n.push(o.getOrDie());
              }
              return A.some(t.apply(null, n));
            },
            gc = [].slice,
            hc = function() {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              var n = gc.call(arguments);
              return function(e) {
                for (var t = 0; t < n.length; t++) if (n[t](e)) return !0;
                return !1;
              };
            },
            vc = function() {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              var n = gc.call(arguments);
              return function(e) {
                for (var t = 0; t < n.length; t++) if (!n[t](e)) return !1;
                return !0;
              };
            },
            bc = { and: vc, or: hc },
            yc = ka.isElement,
            Cc = Ws,
            wc = ka.matchStyleValues("display", "block table"),
            xc = ka.matchStyleValues("float", "left right"),
            Ec = bc.and(yc, Cc, y(xc)),
            Sc = y(ka.matchStyleValues("white-space", "pre pre-line pre-wrap")),
            Nc = ka.isText,
            kc = ka.isBr,
            Tc = pu.nodeIndex,
            _c = fc,
            Ac = function(e) {
              return "createRange" in e ? e.createRange() : pu.DOM.createRng();
            },
            Rc = function(e) {
              return e && /[\r\n\t ]/.test(e);
            },
            Dc = function(e) {
              return !!e.setStart && !!e.setEnd;
            },
            Bc = function(e) {
              var t,
                n = e.startContainer,
                r = e.startOffset;
              return !!(
                Rc(e.toString()) &&
                Sc(n.parentNode) &&
                ka.isText(n) &&
                ((t = n.data), Rc(t[r - 1]) || Rc(t[r + 1]))
              );
            },
            Oc = function(e) {
              var t,
                n = e.ownerDocument,
                r = Ac(n),
                o = n.createTextNode(" "),
                i = e.parentNode;
              return (
                i.insertBefore(o, e),
                r.setStart(o, 0),
                r.setEnd(o, 1),
                (t = ec(r.getBoundingClientRect())),
                i.removeChild(o),
                t
              );
            },
            Pc = function(e) {
              var t = e.startContainer,
                n = e.endContainer,
                r = e.startOffset,
                o = e.endOffset;
              if (t === n && ka.isText(n) && 0 === r && 1 === o) {
                var i = e.cloneRange();
                return i.setEndAfter(n), Lc(i);
              }
              return null;
            },
            Ic = function(e) {
              return (
                0 === e.left && 0 === e.right && 0 === e.top && 0 === e.bottom
              );
            },
            Lc = function(e) {
              var t, n;
              return (
                (n = e.getClientRects()),
                (t = n.length > 0 ? ec(n[0]) : ec(e.getBoundingClientRect())),
                !Dc(e) && kc(e) && Ic(t) ? Oc(e) : Ic(t) && Dc(e) ? Pc(e) : t
              );
            },
            Mc = function(e, t) {
              var n = tc(e, t);
              return (n.width = 1), (n.right = n.left + 1), n;
            },
            Fc = function(e) {
              var t,
                n,
                r = [],
                o = function(e) {
                  0 !== e.height &&
                    ((r.length > 0 && nc(e, r[r.length - 1])) || r.push(e));
                },
                i = function(e, t) {
                  var n = Ac(e.ownerDocument);
                  if (t < e.data.length) {
                    if (mc(e.data[t])) return r;
                    if (
                      mc(e.data[t - 1]) &&
                      (n.setStart(e, t), n.setEnd(e, t + 1), !Bc(n))
                    )
                      return o(Mc(Lc(n), !1)), r;
                  }
                  t > 0 &&
                    (n.setStart(e, t - 1),
                    n.setEnd(e, t),
                    Bc(n) || o(Mc(Lc(n), !1))),
                    t < e.data.length &&
                      (n.setStart(e, t),
                      n.setEnd(e, t + 1),
                      Bc(n) || o(Mc(Lc(n), !0)));
                };
              if (Nc(e.container())) return i(e.container(), e.offset()), r;
              if (yc(e.container()))
                if (e.isAtEnd())
                  (n = _c(e.container(), e.offset())),
                    Nc(n) && i(n, n.data.length),
                    Ec(n) && !kc(n) && o(Mc(Lc(n), !1));
                else {
                  if (
                    ((n = _c(e.container(), e.offset())),
                    Nc(n) && i(n, 0),
                    Ec(n) && e.isAtEnd())
                  )
                    return o(Mc(Lc(n), !1)), r;
                  (t = _c(e.container(), e.offset() - 1)),
                    Ec(t) &&
                      !kc(t) &&
                      (wc(t) || wc(n) || !Ec(n)) &&
                      o(Mc(Lc(t), !1)),
                    Ec(n) && o(Mc(Lc(n), !0));
                }
              return r;
            };
          function Uc(e, t, n) {
            var o = function() {
                return Nc(e), 0 === t;
              },
              i = function() {
                return Nc(e) ? t >= e.data.length : t >= e.childNodes.length;
              },
              a = function() {
                var n;
                return (
                  (n = Ac(e.ownerDocument)), n.setStart(e, t), n.setEnd(e, t), n
                );
              },
              u = function() {
                return n || (n = Fc(Uc(e, t))), n;
              },
              s = function() {
                return u().length > 0;
              },
              c = function(n) {
                return n && e === n.container() && t === n.offset();
              },
              l = function(n) {
                return _c(e, n ? t - 1 : t);
              };
            return {
              container: r(e),
              offset: r(t),
              toRange: a,
              getClientRects: u,
              isVisible: s,
              isAtStart: o,
              isAtEnd: i,
              isEqual: c,
              getNode: l
            };
          }
          (function(e) {
            (e.fromRangeStart = function(t) {
              return e(t.startContainer, t.startOffset);
            }),
              (e.fromRangeEnd = function(t) {
                return e(t.endContainer, t.endOffset);
              }),
              (e.after = function(t) {
                return e(t.parentNode, Tc(t) + 1);
              }),
              (e.before = function(t) {
                return e(t.parentNode, Tc(t));
              }),
              (e.isAbove = function(e, t) {
                return pc(
                  [se(t.getClientRects()), ce(e.getClientRects())],
                  oc
                ).getOr(!1);
              }),
              (e.isBelow = function(e, t) {
                return pc(
                  [ce(t.getClientRects()), se(e.getClientRects())],
                  ic
                ).getOr(!1);
              }),
              (e.isAtStart = function(e) {
                return !!e && e.isAtStart();
              }),
              (e.isAtEnd = function(e) {
                return !!e && e.isAtEnd();
              }),
              (e.isTextPosition = function(e) {
                return !!e && ka.isText(e.container());
              }),
              (e.isElementPosition = function(t) {
                return !1 === e.isTextPosition(t);
              });
          })(Uc || (Uc = {}));
          var jc,
            zc = Uc,
            Vc = ka.isText,
            Hc = ka.isBogus,
            qc = pu.nodeIndex,
            $c = function(e) {
              var t = e.parentNode;
              return Hc(t) ? $c(t) : t;
            },
            Wc = function(e) {
              return e
                ? Sn.reduce(
                    e.childNodes,
                    function(e, t) {
                      return (
                        Hc(t) && "BR" !== t.nodeName
                          ? (e = e.concat(Wc(t)))
                          : e.push(t),
                        e
                      );
                    },
                    []
                  )
                : [];
            },
            Yc = function(e, t) {
              while ((e = e.previousSibling)) {
                if (!Vc(e)) break;
                t += e.data.length;
              }
              return t;
            },
            Gc = function(e) {
              return function(t) {
                return e === t;
              };
            },
            Xc = function(e) {
              var t, n, r;
              return (
                (t = Wc($c(e))),
                (n = Sn.findIndex(t, Gc(e), e)),
                (t = t.slice(0, n + 1)),
                (r = Sn.reduce(
                  t,
                  function(e, n, r) {
                    return Vc(n) && Vc(t[r - 1]) && e++, e;
                  },
                  0
                )),
                (t = Sn.filter(t, ka.matchNodeNames(e.nodeName))),
                (n = Sn.findIndex(t, Gc(e), e)),
                n - r
              );
            },
            Zc = function(e) {
              var t;
              return (
                (t = Vc(e) ? "text()" : e.nodeName.toLowerCase()),
                t + "[" + Xc(e) + "]"
              );
            },
            Kc = function(e, t, n) {
              var r = [];
              for (t = t.parentNode; t !== e; t = t.parentNode) {
                if (n && n(t)) break;
                r.push(t);
              }
              return r;
            },
            Jc = function(e, t) {
              var n,
                r,
                o,
                i,
                a,
                u = [];
              return (
                (n = t.container()),
                (r = t.offset()),
                Vc(n)
                  ? (o = Yc(n, r))
                  : ((i = n.childNodes),
                    r >= i.length
                      ? ((o = "after"), (r = i.length - 1))
                      : (o = "before"),
                    (n = i[r])),
                u.push(Zc(n)),
                (a = Kc(e, n)),
                (a = Sn.filter(a, y(ka.isBogus))),
                (u = u.concat(
                  Sn.map(a, function(e) {
                    return Zc(e);
                  })
                )),
                u.reverse().join("/") + "," + o
              );
            },
            Qc = function(e, t, n) {
              var r = Wc(e);
              return (
                (r = Sn.filter(r, function(e, t) {
                  return !Vc(e) || !Vc(r[t - 1]);
                })),
                (r = Sn.filter(r, ka.matchNodeNames(t))),
                r[n]
              );
            },
            el = function(e, t) {
              var n,
                r = e,
                o = 0;
              while (Vc(r)) {
                if (((n = r.data.length), t >= o && t <= o + n)) {
                  (e = r), (t -= o);
                  break;
                }
                if (!Vc(r.nextSibling)) {
                  (e = r), (t = n);
                  break;
                }
                (o += n), (r = r.nextSibling);
              }
              return (
                Vc(e) && t > e.data.length && (t = e.data.length), zc(e, t)
              );
            },
            tl = function(e, t) {
              var n, r, o;
              return t
                ? ((n = t.split(",")),
                  (t = n[0].split("/")),
                  (o = n.length > 1 ? n[1] : "before"),
                  (r = Sn.reduce(
                    t,
                    function(e, t) {
                      return (
                        (t = /([\w\-\(\)]+)\[([0-9]+)\]/.exec(t)),
                        t
                          ? ("text()" === t[1] && (t[1] = "#text"),
                            Qc(e, t[1], parseInt(t[2], 10)))
                          : null
                      );
                    },
                    e
                  )),
                  r
                    ? Vc(r)
                      ? el(r, parseInt(o, 10))
                      : ((o = "after" === o ? qc(r) + 1 : qc(r)),
                        zc(r.parentNode, o))
                    : null)
                : null;
            },
            nl = ka.isContentEditableFalse,
            rl = function(e, t, n) {
              var r, o;
              for (
                o = e(t.data.slice(0, n)).length, r = t.previousSibling;
                r && ka.isText(r);
                r = r.previousSibling
              )
                o += e(r.data).length;
              return o;
            },
            ol = function(e, t, n, r, o) {
              var i,
                a = r[o ? "startContainer" : "endContainer"],
                u = r[o ? "startOffset" : "endOffset"],
                s = [],
                c = 0,
                l = e.getRoot();
              for (
                ka.isText(a)
                  ? s.push(n ? rl(t, a, u) : u)
                  : ((i = a.childNodes),
                    u >= i.length &&
                      i.length &&
                      ((c = 1), (u = Math.max(0, i.length - 1))),
                    s.push(e.nodeIndex(i[u], n) + c));
                a && a !== l;
                a = a.parentNode
              )
                s.push(e.nodeIndex(a, n));
              return s;
            },
            il = function(e, t, n, r) {
              var o = t.dom,
                i = {};
              return (
                (i.start = ol(o, e, n, r, !0)),
                t.isCollapsed() || (i.end = ol(o, e, n, r, !1)),
                i
              );
            },
            al = function(e) {
              ka.isText(e) &&
                0 === e.data.length &&
                e.parentNode.removeChild(e);
            },
            ul = function(e, t, n) {
              var r = 0;
              return (
                Mn.each(e.select(t), function(e) {
                  if ("all" !== e.getAttribute("data-mce-bogus"))
                    return e !== n && void r++;
                }),
                r
              );
            },
            sl = function(e, t) {
              var n,
                r,
                o,
                i = t ? "start" : "end";
              (n = e[i + "Container"]),
                (r = e[i + "Offset"]),
                ka.isElement(n) &&
                  "TR" === n.nodeName &&
                  ((o = n.childNodes),
                  (n = o[Math.min(t ? r : r - 1, o.length - 1)]),
                  n &&
                    ((r = t ? 0 : n.childNodes.length),
                    e["set" + (t ? "Start" : "End")](n, r)));
            },
            cl = function(e) {
              return sl(e, !0), sl(e, !1), e;
            },
            ll = function(e, t) {
              var n;
              if (ka.isElement(e) && ((e = fc(e, t)), nl(e))) return e;
              if (ks(e)) {
                if (
                  (ka.isText(e) && Ss(e) && (e = e.parentNode),
                  (n = e.previousSibling),
                  nl(n))
                )
                  return n;
                if (((n = e.nextSibling), nl(n))) return n;
              }
            },
            fl = function(e) {
              return (
                ll(e.startContainer, e.startOffset) ||
                ll(e.endContainer, e.endOffset)
              );
            },
            dl = function(e, t, n) {
              var r = n.getNode(),
                o = r ? r.nodeName : null,
                i = n.getRng();
              if (nl(r) || "IMG" === o)
                return { name: o, index: ul(n.dom, o, r) };
              var a = fl(i);
              return a
                ? ((o = a.tagName), { name: o, index: ul(n.dom, o, a) })
                : il(e, n, t, i);
            },
            ml = function(e) {
              var t = e.getRng();
              return {
                start: Jc(e.dom.getRoot(), zc.fromRangeStart(t)),
                end: Jc(e.dom.getRoot(), zc.fromRangeEnd(t))
              };
            },
            pl = function(e) {
              return { rng: e.getRng() };
            },
            gl = function(e, t, n) {
              var r = {
                "data-mce-type": "bookmark",
                id: t,
                style: "overflow:hidden;line-height:0px"
              };
              return n ? e.create("span", r, "&#xFEFF;") : e.create("span", r);
            },
            hl = function(e, t) {
              var n = e.dom,
                r = e.getRng(),
                o = n.uniqueId(),
                i = e.isCollapsed(),
                a = e.getNode(),
                u = a.nodeName;
              if ("IMG" === u) return { name: u, index: ul(n, u, a) };
              var s = cl(r.cloneRange());
              if (!i) {
                s.collapse(!1);
                var c = gl(n, o + "_end", t);
                s.insertNode(c), al(c.nextSibling);
              }
              (r = cl(r)), r.collapse(!0);
              var l = gl(n, o + "_start", t);
              return (
                r.insertNode(l),
                al(l.previousSibling),
                al(l.nextSibling),
                e.moveToBookmark({ id: o, keep: 1 }),
                { id: o }
              );
            },
            vl = function(e, t, n) {
              return 2 === t
                ? dl(ws.trim, n, e)
                : 3 === t
                  ? ml(e)
                  : t
                    ? pl(e)
                    : hl(e, !1);
            },
            bl = {
              getBookmark: vl,
              getUndoBookmark: i(dl, o, !0),
              getPersistentBookmark: hl
            },
            yl = "_mce_caret",
            Cl = function(e) {
              return ka.isElement(e) && e.id === yl;
            },
            wl = function(e, t) {
              while (t && t !== e) {
                if (t.id === yl) return t;
                t = t.parentNode;
              }
              return null;
            },
            xl = ka.isElement,
            El = ka.isText,
            Sl = function(e) {
              var t = e.parentNode;
              t && t.removeChild(e);
            },
            Nl = function(e) {
              try {
                return e.nodeValue;
              } catch (t) {
                return "";
              }
            },
            kl = function(e, t) {
              0 === t.length ? Sl(e) : (e.nodeValue = t);
            },
            Tl = function(e) {
              var t = ws.trim(e);
              return { count: e.length - t.length, text: t };
            },
            _l = function(e, t) {
              return Pl(e), t;
            },
            Al = function(e, t) {
              var n = Tl(e.data.substr(0, t.offset())),
                r = Tl(e.data.substr(t.offset())),
                o = n.text + r.text;
              return o.length > 0 ? (kl(e, o), zc(e, t.offset() - n.count)) : t;
            },
            Rl = function(e, t) {
              var n = t.container(),
                r = j(le(n.childNodes), e)
                  .map(function(e) {
                    return e < t.offset() ? zc(n, t.offset() - 1) : t;
                  })
                  .getOr(t);
              return Pl(e), r;
            },
            Dl = function(e, t) {
              return El(e) && t.container() === e ? Al(e, t) : _l(e, t);
            },
            Bl = function(e, t) {
              return t.container() === e.parentNode ? Rl(e, t) : _l(e, t);
            },
            Ol = function(e, t) {
              return zc.isTextPosition(t) ? Dl(e, t) : Bl(e, t);
            },
            Pl = function(e) {
              if (
                (xl(e) &&
                  ks(e) &&
                  (Ts(e) ? e.removeAttribute("data-mce-caret") : Sl(e)),
                El(e))
              ) {
                var t = ws.trim(Nl(e));
                kl(e, t);
              }
            },
            Il = { removeAndReposition: Ol, remove: Pl },
            Ll = io.detect().browser,
            Ml = ka.isContentEditableFalse,
            Fl = function(e) {
              return ka.isElement(e) && /^(TD|TH)$/i.test(e.tagName);
            },
            Ul = function(e, t, n) {
              var r,
                o,
                i,
                a,
                u,
                s = tc(t.getBoundingClientRect(), n);
              return (
                "BODY" === e.tagName
                  ? ((r = e.ownerDocument.documentElement),
                    (o = e.scrollLeft || r.scrollLeft),
                    (i = e.scrollTop || r.scrollTop))
                  : ((u = e.getBoundingClientRect()),
                    (o = e.scrollLeft - u.left),
                    (i = e.scrollTop - u.top)),
                (s.left += o),
                (s.right += o),
                (s.top += i),
                (s.bottom += i),
                (s.width = 1),
                (a = t.offsetWidth - t.clientWidth),
                a > 0 && (n && (a *= -1), (s.left += a), (s.right += a)),
                s
              );
            },
            jl = function(e) {
              var t, n, r, o, i;
              for (
                t = rr("*[contentEditable=false]", e), o = 0;
                o < t.length;
                o++
              )
                (n = t[o]),
                  (r = n.previousSibling),
                  Ps(r) &&
                    ((i = r.data),
                    1 === i.length
                      ? r.parentNode.removeChild(r)
                      : r.deleteData(i.length - 1, 1)),
                  (r = n.nextSibling),
                  Os(r) &&
                    ((i = r.data),
                    1 === i.length
                      ? r.parentNode.removeChild(r)
                      : r.deleteData(0, 1));
            },
            zl = function(e, t, n) {
              var r,
                o,
                i = Ou(A.none()),
                a = function(n, r) {
                  var a, c;
                  if ((u(), Fl(r))) return null;
                  if (!t(r))
                    return (
                      (o = _s(r, n)),
                      (c = r.ownerDocument.createRange()),
                      Ml(o.nextSibling)
                        ? (c.setStart(o, 0), c.setEnd(o, 0))
                        : (c.setStart(o, 1), c.setEnd(o, 1)),
                      c
                    );
                  (o = Bs("p", r, n)),
                    (a = Ul(e, r, n)),
                    rr(o).css("top", a.top);
                  var l = rr(
                    '<div class="mce-visual-caret" data-mce-bogus="all"></div>'
                  )
                    .css(a)
                    .appendTo(e)[0];
                  return (
                    i.set(A.some({ caret: l, element: r, before: n })),
                    i.get().each(function(e) {
                      n && rr(e.caret).addClass("mce-visual-caret-before");
                    }),
                    s(),
                    (c = r.ownerDocument.createRange()),
                    c.setStart(o, 0),
                    c.setEnd(o, 0),
                    c
                  );
                },
                u = function() {
                  jl(e),
                    o && (Il.remove(o), (o = null)),
                    i.get().each(function(e) {
                      rr(e.caret).remove(), i.set(A.none());
                    }),
                    clearInterval(r);
                },
                s = function() {
                  r = Ie.setInterval(function() {
                    n()
                      ? rr("div.mce-visual-caret", e).toggleClass(
                          "mce-visual-caret-hidden"
                        )
                      : rr("div.mce-visual-caret", e).addClass(
                          "mce-visual-caret-hidden"
                        );
                  }, 500);
                },
                c = function() {
                  i.get().each(function(t) {
                    var n = Ul(e, t.element, t.before);
                    rr(t.caret).css(n);
                  });
                },
                l = function() {
                  return Ie.clearInterval(r);
                },
                f = function() {
                  return ".mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}";
                };
              return { show: a, hide: u, getCss: f, reposition: c, destroy: l };
            },
            Vl = function() {
              return Ll.isIE() || Ll.isEdge() || Ll.isFirefox();
            },
            Hl = function(e) {
              return Ml(e) || (ka.isTable(e) && Vl());
            },
            ql = function(e) {
              return function(t) {
                return e === t;
              };
            },
            $l = ql(" "),
            Wl = function(e) {
              return /^[\r\n\t ]$/.test(e);
            },
            Yl = function(e) {
              return !Wl(e) && !$l(e);
            },
            Gl = ka.isContentEditableFalse,
            Xl = ka.matchStyleValues(
              "display",
              "block table table-cell table-caption list-item"
            ),
            Zl = ks,
            Kl = Ss,
            Jl = ka.isElement,
            Ql = Ws,
            ef = function(e) {
              return e > 0;
            },
            tf = function(e) {
              return e < 0;
            },
            nf = function(e, t) {
              var n;
              while ((n = e(t))) if (!Kl(n)) return n;
              return null;
            },
            rf = function(e, t, n, r, o) {
              var i = new Fi(e, r);
              if (tf(t)) {
                if ((Gl(e) || Kl(e)) && ((e = nf(i.prev, !0)), n(e))) return e;
                while ((e = nf(i.prev, o))) if (n(e)) return e;
              }
              if (ef(t)) {
                if ((Gl(e) || Kl(e)) && ((e = nf(i.next, !0)), n(e))) return e;
                while ((e = nf(i.next, o))) if (n(e)) return e;
              }
              return null;
            },
            of = function(e, t) {
              while (e && e !== t) {
                if (Xl(e)) return e;
                e = e.parentNode;
              }
              return null;
            },
            af = function(e, t, n) {
              return of(e.container(), n) === of(t.container(), n);
            },
            uf = function(e, t) {
              var n, r;
              return t
                ? ((n = t.container()),
                  (r = t.offset()),
                  Jl(n) ? n.childNodes[r + e] : null)
                : null;
            },
            sf = function(e, t) {
              var n = t.ownerDocument.createRange();
              return (
                e
                  ? (n.setStartBefore(t), n.setEndBefore(t))
                  : (n.setStartAfter(t), n.setEndAfter(t)),
                n
              );
            },
            cf = function(e, t, n) {
              return of(t, e) === of(n, e);
            },
            lf = function(e, t, n) {
              var r, o;
              o = e ? "previousSibling" : "nextSibling";
              while (n && n !== t) {
                if (((r = n[o]), Zl(r) && (r = r[o]), Gl(r))) {
                  if (cf(t, r, n)) return r;
                  break;
                }
                if (Ql(r)) break;
                n = n.parentNode;
              }
              return null;
            },
            ff = i(sf, !0),
            df = i(sf, !1),
            mf = function(e, t, n) {
              var r,
                o,
                a,
                u,
                s = i(lf, !0, t),
                c = i(lf, !1, t);
              if (((o = n.startContainer), (a = n.startOffset), Ss(o))) {
                if (
                  (Jl(o) || (o = o.parentNode),
                  (u = o.getAttribute("data-mce-caret")),
                  "before" === u && ((r = o.nextSibling), Hl(r)))
                )
                  return ff(r);
                if ("after" === u && ((r = o.previousSibling), Hl(r)))
                  return df(r);
              }
              if (!n.collapsed) return n;
              if (ka.isText(o)) {
                if (Zl(o)) {
                  if (1 === e) {
                    if (((r = c(o)), r)) return ff(r);
                    if (((r = s(o)), r)) return df(r);
                  }
                  if (-1 === e) {
                    if (((r = s(o)), r)) return df(r);
                    if (((r = c(o)), r)) return ff(r);
                  }
                  return n;
                }
                if (Ps(o) && a >= o.data.length - 1)
                  return 1 === e && ((r = c(o)), r) ? ff(r) : n;
                if (Os(o) && a <= 1)
                  return -1 === e && ((r = s(o)), r) ? df(r) : n;
                if (a === o.data.length) return (r = c(o)), r ? ff(r) : n;
                if (0 === a) return (r = s(o)), r ? df(r) : n;
              }
              return n;
            },
            pf = function(e, t) {
              var n = uf(e, t);
              return Gl(n) && !ka.isBogusAll(n);
            },
            gf = function(e, t) {
              return ka.isTable(uf(e, t));
            },
            hf = function(e, t) {
              return A.from(uf(e ? 0 : -1, t)).filter(Gl);
            },
            vf = function(e, t, n) {
              var r = mf(e, t, n);
              return -1 === e ? Uc.fromRangeStart(r) : Uc.fromRangeEnd(r);
            },
            bf = i(pf, 0),
            yf = i(pf, -1),
            Cf = i(gf, 0),
            wf = i(gf, -1),
            xf = function(e, t, n) {
              return A.from(n.container())
                .filter(ka.isText)
                .exists(function(r) {
                  var o = e ? 0 : -1;
                  return t(r.data.charAt(n.offset() + o));
                });
            },
            Ef = i(xf, !0, Wl),
            Sf = i(xf, !1, Wl),
            Nf = function(e) {
              return A.from(e.getNode()).map(fo.fromDom);
            },
            kf = function(e) {
              return A.from(e.getNode(!0)).map(fo.fromDom);
            };
          (function(e) {
            (e[(e["Backwards"] = -1)] = "Backwards"),
              (e[(e["Forwards"] = 1)] = "Forwards");
          })(jc || (jc = {}));
          var Tf = ka.isContentEditableFalse,
            _f = ka.isText,
            Af = ka.isElement,
            Rf = ka.isBr,
            Df = Ws,
            Bf = Ks,
            Of = Js,
            Pf = function(e, t) {
              var n = [];
              while (e && e !== t) n.push(e), (e = e.parentNode);
              return n;
            },
            If = function(e, t) {
              return e.hasChildNodes() && t < e.childNodes.length
                ? e.childNodes[t]
                : null;
            },
            Lf = function(e, t) {
              if (ef(e)) {
                if (Df(t.previousSibling) && !_f(t.previousSibling))
                  return zc.before(t);
                if (_f(t)) return zc(t, 0);
              }
              if (tf(e)) {
                if (Df(t.nextSibling) && !_f(t.nextSibling)) return zc.after(t);
                if (_f(t)) return zc(t, t.data.length);
              }
              return tf(e)
                ? Rf(t)
                  ? zc.before(t)
                  : zc.after(t)
                : zc.before(t);
            },
            Mf = function(e, t) {
              var n;
              return (
                !!ka.isBr(e) &&
                (!Ks(e.nextSibling) &&
                  ((n = Ff(jc.Forwards, zc.after(e), t)),
                  !!n && !af(zc.before(e), zc.before(n), t)))
              );
            },
            Ff = function(e, t, n) {
              var o, i, a, u, s;
              if (!Af(n) || !t) return null;
              if (t.isEqual(zc.after(n)) && n.lastChild) {
                if (
                  ((s = zc.after(n.lastChild)),
                  tf(e) && Df(n.lastChild) && Af(n.lastChild))
                )
                  return Rf(n.lastChild) ? zc.before(n.lastChild) : s;
              } else s = t;
              var c = s.container(),
                l = s.offset();
              if (_f(c)) {
                if (tf(e) && l > 0) return zc(c, --l);
                if (ef(e) && l < c.length) return zc(c, ++l);
                o = c;
              } else {
                if (tf(e) && l > 0 && ((i = If(c, l - 1)), Df(i)))
                  return !Bf(i) && ((a = rf(i, e, Of, i)), a)
                    ? _f(a)
                      ? zc(a, a.data.length)
                      : zc.after(a)
                    : _f(i)
                      ? zc(i, i.data.length)
                      : zc.before(i);
                if (ef(e) && l < c.childNodes.length && ((i = If(c, l)), Df(i)))
                  return Rf(i) && n.lastChild === i
                    ? null
                    : Mf(i, n)
                      ? Ff(e, zc.after(i), n)
                      : !Bf(i) && ((a = rf(i, e, Of, i)), a)
                        ? _f(a)
                          ? zc(a, 0)
                          : zc.before(a)
                        : _f(i)
                          ? zc(i, 0)
                          : zc.after(i);
                o = i || s.getNode();
              }
              return ((ef(e) && s.isAtEnd()) || (tf(e) && s.isAtStart())) &&
                ((o = rf(o, e, r(!0), n, !0)), Of(o, n))
                ? Lf(e, o)
                : ((i = rf(o, e, Of, n)),
                  (u = Sn.last(Y(Pf(c, n), Tf))),
                  !u || (i && u.contains(i))
                    ? i
                      ? Lf(e, i)
                      : null
                    : ((s = ef(e) ? zc.after(u) : zc.before(u)), s));
            },
            Uf = function(e) {
              return {
                next: function(t) {
                  return Ff(jc.Forwards, t, e);
                },
                prev: function(t) {
                  return Ff(jc.Backwards, t, e);
                }
              };
            },
            jf = function(e, t, n) {
              var r = e ? zc.before(n) : zc.after(n);
              return Yf(e, t, r);
            },
            zf = function(e) {
              return ka.isBr(e) ? zc.before(e) : zc.after(e);
            },
            Vf = function(e) {
              return zc.isTextPosition(e) ? 0 === e.offset() : Ws(e.getNode());
            },
            Hf = function(e) {
              if (zc.isTextPosition(e)) {
                var t = e.container();
                return e.offset() === t.data.length;
              }
              return Ws(e.getNode(!0));
            },
            qf = function(e, t) {
              return (
                !zc.isTextPosition(e) &&
                !zc.isTextPosition(t) &&
                e.getNode() === t.getNode(!0)
              );
            },
            $f = function(e) {
              return !zc.isTextPosition(e) && ka.isBr(e.getNode());
            },
            Wf = function(e, t, n) {
              return e
                ? !qf(t, n) && !$f(t) && Hf(t) && Vf(n)
                : !qf(n, t) && Vf(t) && Hf(n);
            },
            Yf = function(e, t, n) {
              var r = Uf(t);
              return A.from(e ? r.next(n) : r.prev(n));
            },
            Gf = function(e, t, n) {
              return Yf(e, t, n).bind(function(r) {
                return af(n, r, t) && Wf(e, n, r) ? Yf(e, t, r) : A.some(r);
              });
            },
            Xf = function(e, t) {
              var n = e ? t.firstChild : t.lastChild;
              return ka.isText(n)
                ? A.some(zc(n, e ? 0 : n.data.length))
                : n
                  ? Ws(n)
                    ? A.some(e ? zc.before(n) : zf(n))
                    : jf(e, t, n)
                  : A.none();
            },
            Zf = i(Yf, !0),
            Kf = i(Yf, !1),
            Jf = {
              fromPosition: Yf,
              nextPosition: Zf,
              prevPosition: Kf,
              navigate: Gf,
              positionIn: Xf,
              firstPositionIn: i(Xf, !0),
              lastPositionIn: i(Xf, !1)
            },
            Qf = function(e) {
              return "string" === typeof e.start;
            },
            ed = function(e) {
              return e.hasOwnProperty("rng");
            },
            td = function(e) {
              return e.hasOwnProperty("id");
            },
            nd = function(e) {
              return e.hasOwnProperty("name");
            },
            rd = function(e) {
              return Mn.isArray(e.start);
            },
            od = function(e, t) {
              return (
                !e.isBlock(t) ||
                  t.innerHTML ||
                  ke.ie ||
                  (t.innerHTML = '<br data-mce-bogus="1" />'),
                t
              );
            },
            id = function(e, t) {
              var n, r;
              return (
                (n = e.createRng()),
                (r = tl(e.getRoot(), t.start)),
                n.setStart(r.container(), r.offset()),
                (r = tl(e.getRoot(), t.end)),
                n.setEnd(r.container(), r.offset()),
                n
              );
            },
            ad = function(e, t) {
              var n = e.ownerDocument.createTextNode(ws.ZWSP);
              e.appendChild(n), t.setStart(n, 0), t.setEnd(n, 0);
            },
            ud = function(e) {
              return !1 === e.hasChildNodes();
            },
            sd = function(e, t) {
              return Jf.lastPositionIn(e).fold(
                function() {
                  return !1;
                },
                function(e) {
                  return (
                    t.setStart(e.container(), e.offset()),
                    t.setEnd(e.container(), e.offset()),
                    !0
                  );
                }
              );
            },
            cd = function(e, t, n) {
              return !(!ud(t) || !wl(e, t)) && (ad(t, n), !0);
            },
            ld = function(e, t, n, r) {
              var o,
                i,
                a,
                u,
                s = n[t ? "start" : "end"],
                c = e.getRoot();
              if (s) {
                for (a = s[0], i = c, o = s.length - 1; o >= 1; o--) {
                  if (((u = i.childNodes), cd(c, i, r))) return !0;
                  if (s[o] > u.length - 1) return !!cd(c, i, r) || sd(i, r);
                  i = u[s[o]];
                }
                3 === i.nodeType && (a = Math.min(s[0], i.nodeValue.length)),
                  1 === i.nodeType && (a = Math.min(s[0], i.childNodes.length)),
                  t ? r.setStart(i, a) : r.setEnd(i, a);
              }
              return !0;
            },
            fd = function(e) {
              return ka.isText(e) && e.data.length > 0;
            },
            dd = function(e, t, n) {
              var r,
                o,
                i,
                a,
                u,
                s,
                c = e.get(n.id + "_" + t),
                l = n.keep;
              if (c) {
                if (
                  ((r = c.parentNode),
                  "start" === t
                    ? (l
                        ? c.hasChildNodes()
                          ? ((r = c.firstChild), (o = 1))
                          : fd(c.nextSibling)
                            ? ((r = c.nextSibling), (o = 0))
                            : fd(c.previousSibling)
                              ? ((r = c.previousSibling),
                                (o = c.previousSibling.data.length))
                              : ((r = c.parentNode), (o = e.nodeIndex(c) + 1))
                        : (o = e.nodeIndex(c)),
                      (u = r),
                      (s = o))
                    : (l
                        ? c.hasChildNodes()
                          ? ((r = c.firstChild), (o = 1))
                          : fd(c.previousSibling)
                            ? ((r = c.previousSibling),
                              (o = c.previousSibling.data.length))
                            : ((r = c.parentNode), (o = e.nodeIndex(c)))
                        : (o = e.nodeIndex(c)),
                      (u = r),
                      (s = o)),
                  !l)
                ) {
                  (a = c.previousSibling),
                    (i = c.nextSibling),
                    Mn.each(Mn.grep(c.childNodes), function(e) {
                      ka.isText(e) &&
                        (e.nodeValue = e.nodeValue.replace(/\uFEFF/g, ""));
                    });
                  while ((c = e.get(n.id + "_" + t))) e.remove(c, !0);
                  a &&
                    i &&
                    a.nodeType === i.nodeType &&
                    ka.isText(a) &&
                    !ke.opera &&
                    ((o = a.nodeValue.length),
                    a.appendData(i.nodeValue),
                    e.remove(i),
                    (u = a),
                    (s = o));
                }
                return A.some(zc(u, s));
              }
              return A.none();
            },
            md = function(e, t) {
              return e.isSome() ? e : t;
            },
            pd = function(e, t) {
              var n = e.createRng();
              return ld(e, !0, t, n) && ld(e, !1, t, n) ? A.some(n) : A.none();
            },
            gd = function(e, t) {
              var n = dd(e, "start", t),
                r = dd(e, "end", t);
              return pc([n, md(r, n)], function(t, n) {
                var r = e.createRng();
                return (
                  r.setStart(od(e, t.container()), t.offset()),
                  r.setEnd(od(e, n.container()), n.offset()),
                  r
                );
              });
            },
            hd = function(e, t) {
              return A.from(e.select(t.name)[t.index]).map(function(t) {
                var n = e.createRng();
                return n.selectNode(t), n;
              });
            },
            vd = function(e, t) {
              var n = e.dom;
              if (t) {
                if (rd(t)) return pd(n, t);
                if (Qf(t)) return A.some(id(n, t));
                if (td(t)) return gd(n, t);
                if (nd(t)) return hd(n, t);
                if (ed(t)) return A.some(t.rng);
              }
              return A.none();
            },
            bd = { resolve: vd },
            yd = function(e, t, n) {
              return bl.getBookmark(e, t, n);
            },
            Cd = function(e, t) {
              bd.resolve(e, t).each(function(t) {
                e.setRng(t);
              });
            },
            wd = function(e) {
              return (
                ka.isElement(e) &&
                "SPAN" === e.tagName &&
                "bookmark" === e.getAttribute("data-mce-type")
              );
            },
            xd = { getBookmark: yd, moveToBookmark: Cd, isBookmarkNode: wd },
            Ed = function(e) {
              return e && /^(IMG)$/.test(e.nodeName);
            },
            Sd = function(e, t, n) {
              var r,
                o,
                i,
                a = n.startOffset,
                u = n.startContainer;
              if (
                (n.startContainer !== n.endContainer ||
                  !Ed(n.startContainer.childNodes[n.startOffset])) &&
                1 === u.nodeType
              )
                for (
                  i = u.childNodes,
                    a < i.length
                      ? ((u = i[a]), (r = new Fi(u, e.getParent(u, e.isBlock))))
                      : ((u = i[i.length - 1]),
                        (r = new Fi(u, e.getParent(u, e.isBlock))),
                        r.next(!0)),
                    o = r.current();
                  o;
                  o = r.next()
                )
                  if (3 === o.nodeType && !_d(o))
                    return n.setStart(o, 0), void t.setRng(n);
            },
            Nd = function(e, t, n) {
              if (e)
                for (
                  t = t ? "nextSibling" : "previousSibling", e = n ? e : e[t];
                  e;
                  e = e[t]
                )
                  if (1 === e.nodeType || !_d(e)) return e;
            },
            kd = function(e, t) {
              return (
                t.nodeType && (t = t.nodeName),
                !!e.schema.getTextBlockElements()[t.toLowerCase()]
              );
            },
            Td = function(e, t, n) {
              return e.schema.isValidChild(t, n);
            },
            _d = function(e) {
              return (
                e && 3 === e.nodeType && /^([\t \r\n]+|)$/.test(e.nodeValue)
              );
            },
            Ad = function(e, t) {
              return (
                "string" !== typeof e
                  ? (e = e(t))
                  : t &&
                    (e = e.replace(/%(\w+)/g, function(e, n) {
                      return t[n] || e;
                    })),
                e
              );
            },
            Rd = function(e, t) {
              return (
                (e = e || ""),
                (t = t || ""),
                (e = "" + (e.nodeName || e)),
                (t = "" + (t.nodeName || t)),
                e.toLowerCase() === t.toLowerCase()
              );
            },
            Dd = function(e, t, n) {
              return (
                ("color" !== n && "backgroundColor" !== n) || (t = e.toHex(t)),
                "fontWeight" === n && 700 === t && (t = "bold"),
                "fontFamily" === n &&
                  (t = t.replace(/[\'\"]/g, "").replace(/,\s+/g, ",")),
                "" + t
              );
            },
            Bd = function(e, t, n) {
              return Dd(e, e.getStyle(t, n), n);
            },
            Od = function(e, t) {
              var n;
              return (
                e.getParent(t, function(t) {
                  return (
                    (n = e.getStyle(t, "text-decoration")), n && "none" !== n
                  );
                }),
                n
              );
            },
            Pd = function(e, t, n) {
              return e.getParents(t, n, e.getRoot());
            },
            Id = {
              isInlineBlock: Ed,
              moveStart: Sd,
              getNonWhiteSpaceSibling: Nd,
              isTextBlock: kd,
              isValid: Td,
              isWhiteSpaceNode: _d,
              replaceVars: Ad,
              isEq: Rd,
              normalizeStyleValue: Dd,
              getStyle: Bd,
              getTextDecoration: Od,
              getParents: Pd
            },
            Ld = xd.isBookmarkNode,
            Md = Id.getParents,
            Fd = Id.isWhiteSpaceNode,
            Ud = Id.isTextBlock,
            jd = function(e, t) {
              "undefined" === typeof t &&
                (t = 3 === e.nodeType ? e.length : e.childNodes.length);
              while (e && e.hasChildNodes())
                (e = e.childNodes[t]),
                  e && (t = 3 === e.nodeType ? e.length : e.childNodes.length);
              return { node: e, offset: t };
            },
            zd = function(e, t) {
              var n = jd(e, t);
              if (n.node) {
                while (n.node && 0 === n.offset && n.node.previousSibling)
                  n = jd(n.node.previousSibling);
                n.node &&
                  n.offset > 0 &&
                  3 === n.node.nodeType &&
                  " " === n.node.nodeValue.charAt(n.offset - 1) &&
                  n.offset > 1 &&
                  ((e = n.node), e.splitText(n.offset - 1));
              }
              return e;
            },
            Vd = function(e) {
              return (
                "BR" === e.nodeName &&
                e.getAttribute("data-mce-bogus") &&
                !e.nextSibling
              );
            },
            Hd = function(e, t) {
              var n = t;
              while (n) {
                if (1 === n.nodeType && e.getContentEditable(n))
                  return "false" === e.getContentEditable(n) ? n : t;
                n = n.parentNode;
              }
              return t;
            },
            qd = function(e, t, n, r) {
              var o,
                i,
                a = n.nodeValue;
              return (
                "undefined" === typeof r && (r = e ? a.length : 0),
                e
                  ? ((o = a.lastIndexOf(" ", r)),
                    (i = a.lastIndexOf(" ", r)),
                    (o = o > i ? o : i),
                    -1 !== o && !t && (o < r || !e) && o <= a.length && o++)
                  : ((o = a.indexOf(" ", r)),
                    (i = a.indexOf(" ", r)),
                    (o = -1 !== o && (-1 === i || o < i) ? o : i)),
                o
              );
            },
            $d = function(e, t, n, r, o, i) {
              var a, u, s, c;
              if (3 === n.nodeType) {
                if (((s = qd(o, i, n, r)), -1 !== s))
                  return { container: n, offset: s };
                c = n;
              }
              a = new Fi(n, e.getParent(n, e.isBlock) || t);
              while ((u = a[o ? "prev" : "next"]()))
                if (3 !== u.nodeType || Ld(u.parentNode)) {
                  if (e.isBlock(u) || Id.isEq(u, "BR")) break;
                } else if (((c = u), (s = qd(o, i, u)), -1 !== s))
                  return { container: u, offset: s };
              if (c) return (r = o ? 0 : c.length), { container: c, offset: r };
            },
            Wd = function(e, t, n, r, o) {
              var i, a, u, s;
              for (
                3 === r.nodeType &&
                  0 === r.nodeValue.length &&
                  r[o] &&
                  (r = r[o]),
                  i = Md(e, r),
                  a = 0;
                a < i.length;
                a++
              )
                for (u = 0; u < t.length; u++)
                  if (
                    ((s = t[u]),
                    !("collapsed" in s && s.collapsed !== n.collapsed) &&
                      e.is(i[a], s.selector))
                  )
                    return i[a];
              return r;
            },
            Yd = function(e, t, n, r) {
              var o,
                i = e.dom,
                a = i.getRoot();
              if ((t[0].wrapper || (o = i.getParent(n, t[0].block, a)), !o)) {
                var u = i.getParent(n, "LI,TD,TH");
                o = i.getParent(
                  3 === n.nodeType ? n.parentNode : n,
                  function(t) {
                    return t !== a && Ud(e, t);
                  },
                  u
                );
              }
              if (
                (o && t[0].wrapper && (o = Md(i, o, "ul,ol").reverse()[0] || o),
                !o)
              ) {
                o = n;
                while (o[r] && !i.isBlock(o[r]))
                  if (((o = o[r]), Id.isEq(o, "br"))) break;
              }
              return o || n;
            },
            Gd = function(e, t, n, r, o, i, a) {
              var u, s, c, l, f;
              if (
                ((u = s = a ? n : o),
                (l = a ? "previousSibling" : "nextSibling"),
                (f = e.getRoot()),
                3 === u.nodeType &&
                  !Fd(u) &&
                  (a ? r > 0 : i < u.nodeValue.length))
              )
                return u;
              while (1) {
                if (!t[0].block_expand && e.isBlock(s)) return s;
                for (c = s[l]; c; c = c[l])
                  if (!Ld(c) && !Fd(c) && !Vd(c)) return s;
                if (s === f || s.parentNode === f) {
                  u = s;
                  break;
                }
                s = s.parentNode;
              }
              return u;
            },
            Xd = function(e, t, n, r) {
              var o,
                i = t.startContainer,
                a = t.startOffset,
                u = t.endContainer,
                s = t.endOffset,
                c = e.dom;
              return (
                1 === i.nodeType &&
                  i.hasChildNodes() &&
                  ((i = fc(i, a)), 3 === i.nodeType && (a = 0)),
                1 === u.nodeType &&
                  u.hasChildNodes() &&
                  ((u = fc(u, t.collapsed ? s : s - 1)),
                  3 === u.nodeType && (s = u.nodeValue.length)),
                (i = Hd(c, i)),
                (u = Hd(c, u)),
                (Ld(i.parentNode) || Ld(i)) &&
                  ((i = Ld(i) ? i : i.parentNode),
                  (i = t.collapsed
                    ? i.previousSibling || i
                    : i.nextSibling || i),
                  3 === i.nodeType && (a = t.collapsed ? i.length : 0)),
                (Ld(u.parentNode) || Ld(u)) &&
                  ((u = Ld(u) ? u : u.parentNode),
                  (u = t.collapsed
                    ? u.nextSibling || u
                    : u.previousSibling || u),
                  3 === u.nodeType && (s = t.collapsed ? 0 : u.length)),
                t.collapsed &&
                  ((o = $d(c, e.getBody(), i, a, !0, r)),
                  o && ((i = o.container), (a = o.offset)),
                  (o = $d(c, e.getBody(), u, s, !1, r)),
                  o && ((u = o.container), (s = o.offset))),
                n[0].inline && (u = r ? u : zd(u, s)),
                (n[0].inline || n[0].block_expand) &&
                  ((n[0].inline && 3 === i.nodeType && 0 !== a) ||
                    (i = Gd(c, n, i, a, u, s, !0)),
                  (n[0].inline &&
                    3 === u.nodeType &&
                    s !== u.nodeValue.length) ||
                    (u = Gd(c, n, i, a, u, s, !1))),
                n[0].selector &&
                  !1 !== n[0].expand &&
                  !n[0].inline &&
                  ((i = Wd(c, n, t, i, "previousSibling")),
                  (u = Wd(c, n, t, u, "nextSibling"))),
                (n[0].block || n[0].selector) &&
                  ((i = Yd(e, n, i, "previousSibling")),
                  (u = Yd(e, n, u, "nextSibling")),
                  n[0].block &&
                    (c.isBlock(i) || (i = Gd(c, n, i, a, u, s, !0)),
                    c.isBlock(u) || (u = Gd(c, n, i, a, u, s, !1)))),
                1 === i.nodeType && ((a = c.nodeIndex(i)), (i = i.parentNode)),
                1 === u.nodeType &&
                  ((s = c.nodeIndex(u) + 1), (u = u.parentNode)),
                {
                  startContainer: i,
                  startOffset: a,
                  endContainer: u,
                  endOffset: s
                }
              );
            },
            Zd = { expandRng: Xd },
            Kd = Mn.each,
            Jd = function(e, t) {
              var n = e.childNodes;
              return (
                t--,
                t > n.length - 1 ? (t = n.length - 1) : t < 0 && (t = 0),
                n[t] || e
              );
            },
            Qd = function(e, t, n) {
              var r,
                o,
                i,
                a,
                u,
                s,
                c,
                l = t.startContainer,
                f = t.startOffset,
                d = t.endContainer,
                m = t.endOffset;
              if (
                ((c = e.select("td[data-mce-selected],th[data-mce-selected]")),
                c.length > 0)
              )
                Kd(c, function(e) {
                  n([e]);
                });
              else {
                var p = function(e) {
                    var t;
                    return (
                      (t = e[0]),
                      3 === t.nodeType &&
                        t === l &&
                        f >= t.nodeValue.length &&
                        e.splice(0, 1),
                      (t = e[e.length - 1]),
                      0 === m &&
                        e.length > 0 &&
                        t === d &&
                        3 === t.nodeType &&
                        e.splice(e.length - 1, 1),
                      e
                    );
                  },
                  g = function(e, t, n) {
                    for (var r = []; e && e !== n; e = e[t]) r.push(e);
                    return r;
                  },
                  h = function(e, t) {
                    do {
                      if (e.parentNode === t) return e;
                      e = e.parentNode;
                    } while (e);
                  },
                  v = function(e, t, r) {
                    var o = r ? "nextSibling" : "previousSibling";
                    for (a = e, u = a.parentNode; a && a !== t; a = u)
                      (u = a.parentNode),
                        (s = g(a === e ? a : a[o], o)),
                        s.length && (r || s.reverse(), n(p(s)));
                  };
                if (
                  (1 === l.nodeType &&
                    l.hasChildNodes() &&
                    (l = l.childNodes[f]),
                  1 === d.nodeType && d.hasChildNodes() && (d = Jd(d, m)),
                  l === d)
                )
                  return n(p([l]));
                for (
                  r = e.findCommonAncestor(l, d), a = l;
                  a;
                  a = a.parentNode
                ) {
                  if (a === d) return v(l, r, !0);
                  if (a === r) break;
                }
                for (a = d; a; a = a.parentNode) {
                  if (a === l) return v(d, r);
                  if (a === r) break;
                }
                (o = h(l, r) || l),
                  (i = h(d, r) || d),
                  v(l, o, !0),
                  (s = g(
                    o === l ? o : o.nextSibling,
                    "nextSibling",
                    i === d ? i.nextSibling : i
                  )),
                  s.length && n(p(s)),
                  v(d, i);
              }
            },
            em = { walk: Qd },
            tm = function() {
              return "\ufeff";
            };
          function nm(e, t) {
            var n = function(n) {
                if (!e(n))
                  throw new Error(
                    "Can only get " + t + " value of a " + t + " node"
                  );
                return a(n).getOr("");
              },
              r = function(e) {
                try {
                  return o(e);
                } catch (qP) {
                  return A.none();
                }
              },
              o = function(t) {
                return e(t) ? A.from(t.dom().nodeValue) : A.none();
              },
              i = io.detect().browser,
              a = i.isIE() && 10 === i.version.major ? r : o,
              u = function(n, r) {
                if (!e(n))
                  throw new Error(
                    "Can only set raw " + t + " value of a " + t + " node"
                  );
                n.dom().nodeValue = r;
              };
            return { get: n, getOption: a, set: u };
          }
          var rm = nm(Co, "text"),
            om = function(e) {
              return rm.get(e);
            },
            im = function(e) {
              return Co(e) && om(e) === tm();
            },
            am = function(e, t, n, r) {
              return ci(t).fold(
                function() {
                  return "skipping";
                },
                function(o) {
                  return "br" === r || im(t)
                    ? "valid"
                    : ns(t)
                      ? "existing"
                      : Cl(t)
                        ? "caret"
                        : Id.isValid(e, n, r) && Id.isValid(e, ho(o), n)
                          ? "valid"
                          : "invalid-child";
                }
              );
            },
            um = function(e) {
              return (
                3 === e.startContainer.nodeType &&
                e.startContainer.nodeValue.length >= e.startOffset &&
                " " === e.startContainer.nodeValue[e.startOffset]
              );
            },
            sm = function(e, t) {
              var n = Zd.expandRng(e, t, [{ inline: !0 }], um(t));
              t.setStart(n.startContainer, n.startOffset),
                t.setEnd(n.endContainer, n.endOffset),
                e.selection.setRng(t);
            },
            cm = function(e, t, n, r) {
              var o = t.uid,
                i = void 0 === o ? ls("mce-annotation") : o,
                a = ss(t, ["uid"]),
                u = fo.fromTag("span", e);
              zu(u, Ju()), Ao(u, "" + es(), i), Ao(u, "" + Qu(), n);
              var s = r(i, a),
                c = s.attributes,
                l = void 0 === c ? {} : c,
                f = s.classes,
                d = void 0 === f ? [] : f;
              return Ro(u, l), fs(u, d), u;
            },
            lm = function(e, t, n, r, o) {
              var i = [],
                a = cm(e.getDoc(), o, n, r),
                u = Ou(A.none()),
                s = function() {
                  u.set(A.none());
                },
                c = function() {
                  return u.get().getOrThunk(function() {
                    var e = ms(a);
                    return i.push(e), u.set(A.some(e)), e;
                  });
                },
                l = function(e) {
                  q(e, f);
                },
                f = function(t) {
                  var n = am(e, t, "span", ho(t));
                  switch (n) {
                    case "invalid-child":
                      s();
                      var r = gi(t);
                      l(r), s();
                      break;
                    case "valid":
                      var o = c();
                      Nu(t, o);
                      break;
                    case "skipping":
                    case "existing":
                    case "caret":
                  }
                },
                d = function(e) {
                  var t = H(e, fo.fromDom);
                  l(t);
                };
              return (
                em.walk(e.dom, t, function(e) {
                  s(), d(e);
                }),
                i
              );
            },
            fm = function(e, t, n, r) {
              e.undoManager.transact(function() {
                var o = e.selection.getRng();
                if ((o.collapsed && sm(e, o), e.selection.getRng().collapsed)) {
                  var i = cm(e.getDoc(), r, t, n.decorate);
                  vs(i, " "),
                    e.selection.getRng().insertNode(i.dom()),
                    e.selection.select(i.dom());
                } else {
                  var a = bl.getPersistentBookmark(e.selection, !1),
                    u = e.selection.getRng();
                  lm(e, u, t, n.decorate, r), e.selection.moveToBookmark(a);
                }
              });
            };
          function dm(e) {
            var t = us();
            as(e, t);
            var n = is(e, t);
            return {
              register: function(e, n) {
                t.register(e, n);
              },
              annotate: function(n, r) {
                t.lookup(n).each(function(t) {
                  fm(e, n, t, r);
                });
              },
              annotationChanged: function(e, t) {
                n.addListener(e, t);
              },
              remove: function(t) {
                ts(e, A.some(t)).each(function(e) {
                  var t = e.elements;
                  q(t, Ru);
                });
              },
              getAll: function(t) {
                var n = os(e, t);
                return So(n, function(e) {
                  return H(e, function(e) {
                    return e.dom();
                  });
                });
              }
            };
          }
          var mm = function(e) {
              return e.firstChild && e.firstChild === e.lastChild;
            },
            pm = function(e) {
              return "br" === e.name || " " === e.value;
            },
            gm = function(e, t) {
              var n = e.getBlockElements();
              return n[t.name] && mm(t) && pm(t.firstChild);
            },
            hm = function(e, t) {
              var n = e.getNonEmptyElements();
              return t && (t.isEmpty(n) || gm(e, t));
            },
            vm = function(e, t) {
              var n = t.firstChild,
                r = t.lastChild;
              return (
                n && "meta" === n.name && (n = n.next),
                r && "mce_marker" === r.attr("id") && (r = r.prev),
                hm(e, r) && (r = r.prev),
                !(!n || n !== r) && ("ul" === n.name || "ol" === n.name)
              );
            },
            bm = function(e) {
              var t = e.firstChild,
                n = e.lastChild;
              return (
                t && "META" === t.nodeName && t.parentNode.removeChild(t),
                n && "mce_marker" === n.id && n.parentNode.removeChild(n),
                e
              );
            },
            ym = function(e, t, n) {
              var r = t.serialize(n),
                o = e.createFragment(r);
              return bm(o);
            },
            Cm = function(e) {
              return Mn.grep(e.childNodes, function(e) {
                return "LI" === e.nodeName;
              });
            },
            wm = function(e) {
              return " " === e.data || ka.isBr(e);
            },
            xm = function(e) {
              return (
                e &&
                e.firstChild &&
                e.firstChild === e.lastChild &&
                wm(e.firstChild)
              );
            },
            Em = function(e) {
              return !e.firstChild || xm(e);
            },
            Sm = function(e) {
              return e.length > 0 && Em(e[e.length - 1]) ? e.slice(0, -1) : e;
            },
            Nm = function(e, t) {
              var n = e.getParent(t, e.isBlock);
              return n && "LI" === n.nodeName ? n : null;
            },
            km = function(e, t) {
              return !!Nm(e, t);
            },
            Tm = function(e, t) {
              var n = t.cloneRange(),
                r = t.cloneRange();
              return (
                n.setStartBefore(e),
                r.setEndAfter(e),
                [n.cloneContents(), r.cloneContents()]
              );
            },
            _m = function(e, t) {
              var n = zc.before(e),
                r = Uf(t),
                o = r.next(n);
              return o ? o.toRange() : null;
            },
            Am = function(e, t) {
              var n = zc.after(e),
                r = Uf(t),
                o = r.prev(n);
              return o ? o.toRange() : null;
            },
            Rm = function(e, t, n, r) {
              var o = Tm(e, r),
                i = e.parentNode;
              return (
                i.insertBefore(o[0], e),
                Mn.each(t, function(t) {
                  i.insertBefore(t, e);
                }),
                i.insertBefore(o[1], e),
                i.removeChild(e),
                Am(t[t.length - 1], n)
              );
            },
            Dm = function(e, t, n) {
              var r = e.parentNode;
              return (
                Mn.each(t, function(t) {
                  r.insertBefore(t, e);
                }),
                _m(e, n)
              );
            },
            Bm = function(e, t, n, r) {
              return r.insertAfter(t.reverse(), e), Am(t[0], n);
            },
            Om = function(e, t, n, r) {
              var o = ym(t, e, r),
                i = Nm(t, n.startContainer),
                a = Sm(Cm(o.firstChild)),
                u = 1,
                s = 2,
                c = t.getRoot(),
                l = function(e) {
                  var r = zc.fromRangeStart(n),
                    o = Uf(t.getRoot()),
                    a = e === u ? o.prev(r) : o.next(r);
                  return !a || Nm(t, a.getNode()) !== i;
                };
              return l(u)
                ? Dm(i, a, c)
                : l(s)
                  ? Bm(i, a, c, t)
                  : Rm(i, a, c, n);
            },
            Pm = {
              isListFragment: vm,
              insertAtCaret: Om,
              isParentBlockLi: km,
              trimListItems: Sm,
              listItems: Cm
            },
            Im = Mn.each,
            Lm = function(e) {
              this.compare = function(t, n) {
                if (t.nodeName !== n.nodeName) return !1;
                var r = function(t) {
                    var n = {};
                    return (
                      Im(e.getAttribs(t), function(r) {
                        var o = r.nodeName.toLowerCase();
                        0 !== o.indexOf("_") &&
                          "style" !== o &&
                          0 !== o.indexOf("data-") &&
                          (n[o] = e.getAttrib(t, o));
                      }),
                      n
                    );
                  },
                  o = function(e, t) {
                    var n, r;
                    for (r in e)
                      if (e.hasOwnProperty(r)) {
                        if (((n = t[r]), "undefined" === typeof n)) return !1;
                        if (e[r] !== n) return !1;
                        delete t[r];
                      }
                    for (r in t) if (t.hasOwnProperty(r)) return !1;
                    return !0;
                  };
                return (
                  !!o(r(t), r(n)) &&
                  (!!o(
                    e.parseStyle(e.getAttrib(t, "style")),
                    e.parseStyle(e.getAttrib(n, "style"))
                  ) &&
                    (!xd.isBookmarkNode(t) && !xd.isBookmarkNode(n)))
                );
              };
            },
            Mm = function(e) {
              var t = [],
                n = e.dom();
              while (n) t.push(fo.fromDom(n)), (n = n.lastChild);
              return t;
            },
            Fm = function(e) {
              var t = $u(e, "br"),
                n = Y(Mm(e).slice(-1), ta);
              t.length === n.length && q(n, Au);
            },
            Um = function(e) {
              _u(e), Su(e, fo.fromHtml('<br data-mce-bogus="1">'));
            },
            jm = function(e) {
              return Co(e) ? " " === om(e) : ta(e);
            },
            zm = function(e) {
              return 1 === Y(gi(e), jm).length;
            },
            Vm = function(e) {
              bi(e).each(function(t) {
                fi(t).each(function(n) {
                  Qi(e) && ta(t) && Qi(n) && Au(t);
                });
              });
            },
            Hm = {
              removeTrailingBr: Fm,
              fillWithPaddingBr: Um,
              isPaddedElement: zm,
              trimBlockTrailingBr: Vm
            },
            qm = Mn.makeMap;
          function $m(e) {
            var t,
              n,
              r,
              o,
              i,
              a = [];
            return (
              (e = e || {}),
              (t = e.indent),
              (n = qm(e.indent_before || "")),
              (r = qm(e.indent_after || "")),
              (o = $a.getEncodeFunc(e.entity_encoding || "raw", e.entities)),
              (i = "html" === e.element_format),
              {
                start: function(e, u, s) {
                  var c, l, f, d;
                  if (
                    (t &&
                      n[e] &&
                      a.length > 0 &&
                      ((d = a[a.length - 1]),
                      d.length > 0 && "\n" !== d && a.push("\n")),
                    a.push("<", e),
                    u)
                  )
                    for (c = 0, l = u.length; c < l; c++)
                      (f = u[c]),
                        a.push(" ", f.name, '="', o(f.value, !0), '"');
                  (a[a.length] = !s || i ? ">" : " />"),
                    s &&
                      t &&
                      r[e] &&
                      a.length > 0 &&
                      ((d = a[a.length - 1]),
                      d.length > 0 && "\n" !== d && a.push("\n"));
                },
                end: function(e) {
                  var n;
                  a.push("</", e, ">"),
                    t &&
                      r[e] &&
                      a.length > 0 &&
                      ((n = a[a.length - 1]),
                      n.length > 0 && "\n" !== n && a.push("\n"));
                },
                text: function(e, t) {
                  e.length > 0 && (a[a.length] = t ? e : o(e));
                },
                cdata: function(e) {
                  a.push("<![CDATA[", e, "]]>");
                },
                comment: function(e) {
                  a.push("\x3c!--", e, "--\x3e");
                },
                pi: function(e, n) {
                  n ? a.push("<?", e, " ", o(n), "?>") : a.push("<?", e, "?>"),
                    t && a.push("\n");
                },
                doctype: function(e) {
                  a.push("<!DOCTYPE", e, ">", t ? "\n" : "");
                },
                reset: function() {
                  a.length = 0;
                },
                getContent: function() {
                  return a.join("").replace(/\n$/, "");
                }
              }
            );
          }
          function Wm(e, t) {
            void 0 === t && (t = nu());
            var n = $m(e);
            (e = e || {}), (e.validate = !("validate" in e) || e.validate);
            var r = function(r) {
              var o, i;
              (i = e.validate),
                (o = {
                  3: function(e) {
                    n.text(e.value, e.raw);
                  },
                  8: function(e) {
                    n.comment(e.value);
                  },
                  7: function(e) {
                    n.pi(e.name, e.value);
                  },
                  10: function(e) {
                    n.doctype(e.value);
                  },
                  4: function(e) {
                    n.cdata(e.value);
                  },
                  11: function(e) {
                    if ((e = e.firstChild))
                      do {
                        a(e);
                      } while ((e = e.next));
                  }
                }),
                n.reset();
              var a = function(e) {
                var r,
                  u,
                  s,
                  c,
                  l,
                  f,
                  d,
                  m,
                  p,
                  g = o[e.type];
                if (g) g(e);
                else {
                  if (
                    ((r = e.name),
                    (u = e.shortEnded),
                    (s = e.attributes),
                    i &&
                      s &&
                      s.length > 1 &&
                      ((f = []),
                      (f.map = {}),
                      (p = t.getElementRule(e.name)),
                      p))
                  ) {
                    for (d = 0, m = p.attributesOrder.length; d < m; d++)
                      (c = p.attributesOrder[d]),
                        c in s.map &&
                          ((l = s.map[c]),
                          (f.map[c] = l),
                          f.push({ name: c, value: l }));
                    for (d = 0, m = s.length; d < m; d++)
                      (c = s[d].name),
                        c in f.map ||
                          ((l = s.map[c]),
                          (f.map[c] = l),
                          f.push({ name: c, value: l }));
                    s = f;
                  }
                  if ((n.start(e.name, s, u), !u)) {
                    if ((e = e.firstChild))
                      do {
                        a(e);
                      } while ((e = e.next));
                    n.end(r);
                  }
                }
              };
              return 1 !== r.type || e.inner ? o[11](r) : a(r), n.getContent();
            };
            return { serialize: r };
          }
          var Ym = function(e, t, n, r) {
              var o = document.createRange();
              return o.setStart(e, t), o.setEnd(n, r), o;
            },
            Gm = function(e) {
              var t = zc.fromRangeStart(e),
                n = zc.fromRangeEnd(e),
                r = e.commonAncestorContainer;
              return Jf.fromPosition(!1, r, n)
                .map(function(o) {
                  return !af(t, n, r) && af(t, o, r)
                    ? Ym(t.container(), t.offset(), o.container(), o.offset())
                    : e;
                })
                .getOr(e);
            },
            Xm = function(e) {
              return e.collapsed ? e : Gm(e);
            },
            Zm = { normalize: Xm },
            Km = function(e, t) {
              return ka.isText(e) && " " === e.nodeValue[t - 1];
            },
            Jm = function(e, t) {
              var n, r;
              (n = e.startContainer), (r = e.startOffset);
              var o = function(e) {
                return n[e] && 3 === n[e].nodeType;
              };
              return (
                3 === n.nodeType &&
                  (r > 0
                    ? (t = t.replace(/^&nbsp;/, " "))
                    : o("previousSibling") || (t = t.replace(/^ /, "&nbsp;")),
                  r < n.length
                    ? (t = t.replace(/&nbsp;(<br>|)$/, " "))
                    : o("nextSibling") ||
                      (t = t.replace(/(&nbsp;| )(<br>|)$/, "&nbsp;"))),
                t
              );
            },
            Qm = function(e, t) {
              var n, r;
              return (
                (n = e.startContainer),
                (r = e.startOffset),
                3 === n.nodeType &&
                  e.collapsed &&
                  (" " === n.data[r]
                    ? (n.deleteData(r, 1), /[\u00a0| ]$/.test(t) || (t += " "))
                    : " " === n.data[r - 1] &&
                      (n.deleteData(r - 1, 1),
                      /[\u00a0| ]$/.test(t) || (t = " " + t))),
                t
              );
            },
            ep = ka.matchNodeNames("td th"),
            tp = function(e, t) {
              var n = e.selection.getRng(),
                r = n.startContainer,
                o = n.startOffset;
              n.collapsed &&
                Km(r, o) &&
                ka.isText(r) &&
                (r.insertData(o - 1, " "),
                r.deleteData(o, 1),
                n.setStart(r, o),
                n.setEnd(r, o),
                e.selection.setRng(n)),
                e.selection.setContent(t);
            },
            np = function(e, t, n) {
              if ("all" === n.getAttribute("data-mce-bogus"))
                n.parentNode.insertBefore(e.dom.createFragment(t), n);
              else {
                var r = n.firstChild,
                  o = n.lastChild;
                !r || (r === o && "BR" === r.nodeName)
                  ? e.dom.setHTML(n, t)
                  : tp(e, t);
              }
            },
            rp = function(e, t) {
              A.from(e.getParent(t, "td,th"))
                .map(fo.fromDom)
                .each(Hm.trimBlockTrailingBr);
            },
            op = function(e, t) {
              var n = e.schema.getTextInlineElements(),
                r = e.dom;
              if (t) {
                var o = e.getBody(),
                  i = new Lm(r);
                Mn.each(r.select("*[data-mce-fragment]"), function(e) {
                  for (var t = e.parentNode; t && t !== o; t = t.parentNode)
                    n[e.nodeName.toLowerCase()] &&
                      i.compare(t, e) &&
                      r.remove(e, !0);
                });
              }
            },
            ip = function(e) {
              var t = e;
              while ((t = t.walk()))
                1 === t.type && t.attr("data-mce-fragment", "1");
            },
            ap = function(e) {
              Mn.each(e.getElementsByTagName("*"), function(e) {
                e.removeAttribute("data-mce-fragment");
              });
            },
            up = function(e) {
              return !!e.getAttribute("data-mce-fragment");
            },
            sp = function(e, t) {
              return t && !e.schema.getShortEndedElements()[t.nodeName];
            },
            cp = function(e, t) {
              var n,
                r,
                o,
                i,
                a,
                u = e.dom,
                s = e.selection,
                c = function(t) {
                  for (var n = e.getBody(); t && t !== n; t = t.parentNode)
                    if ("false" === e.dom.getContentEditable(t)) return t;
                  return null;
                };
              if (t) {
                if ((e.selection.scrollIntoView(t), (n = c(t)), n))
                  return u.remove(t), void s.select(n);
                var l = u.createRng();
                (i = t.previousSibling),
                  i && 3 === i.nodeType
                    ? (l.setStart(i, i.nodeValue.length),
                      ke.ie ||
                        ((a = t.nextSibling),
                        a &&
                          3 === a.nodeType &&
                          (i.appendData(a.data), a.parentNode.removeChild(a))))
                    : (l.setStartBefore(t), l.setEndBefore(t));
                var f = function(t) {
                  var n = zc.fromRangeStart(t),
                    r = Uf(e.getBody());
                  if (((n = r.next(n)), n)) return n.toRange();
                };
                (r = u.getParent(t, u.isBlock)),
                  u.remove(t),
                  r &&
                    u.isEmpty(r) &&
                    (e.$(r).empty(),
                    l.setStart(r, 0),
                    l.setEnd(r, 0),
                    ep(r) || up(r) || !(o = f(l))
                      ? u.add(r, u.create("br", { "data-mce-bogus": "1" }))
                      : ((l = o), u.remove(r))),
                  s.setRng(l);
              }
            },
            lp = function(e, t, n) {
              var r,
                o,
                i,
                a,
                u,
                s,
                c,
                l,
                f,
                d,
                m,
                p = e.selection,
                g = e.dom;
              if (
                (/^ | $/.test(t) && (t = Jm(p.getRng(), t)),
                (r = e.parser),
                (m = n.merge),
                (o = Wm({ validate: e.settings.validate }, e.schema)),
                (d =
                  '<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;&#x200B;</span>'),
                (s = {
                  content: t,
                  format: "html",
                  selection: !0,
                  paste: n.paste
                }),
                (s = e.fire("BeforeSetContent", s)),
                s.isDefaultPrevented())
              )
                e.fire("SetContent", {
                  content: s.content,
                  format: "html",
                  selection: !0,
                  paste: n.paste
                });
              else {
                (t = s.content),
                  -1 === t.indexOf("{$caret}") && (t += "{$caret}"),
                  (t = t.replace(/\{\$caret\}/, d)),
                  (l = p.getRng());
                var h =
                    l.startContainer ||
                    (l.parentElement ? l.parentElement() : null),
                  v = e.getBody();
                h === v &&
                  p.isCollapsed() &&
                  g.isBlock(v.firstChild) &&
                  sp(e, v.firstChild) &&
                  g.isEmpty(v.firstChild) &&
                  ((l = g.createRng()),
                  l.setStart(v.firstChild, 0),
                  l.setEnd(v.firstChild, 0),
                  p.setRng(l)),
                  p.isCollapsed() ||
                    (e.selection.setRng(Zm.normalize(e.selection.getRng())),
                    e.getDoc().execCommand("Delete", !1, null),
                    (t = Qm(e.selection.getRng(), t))),
                  (i = p.getNode());
                var b = {
                  context: i.nodeName.toLowerCase(),
                  data: n.data,
                  insert: !0
                };
                if (
                  ((u = r.parse(t, b)),
                  !0 === n.paste &&
                    Pm.isListFragment(e.schema, u) &&
                    Pm.isParentBlockLi(g, i))
                )
                  return (
                    (l = Pm.insertAtCaret(o, g, e.selection.getRng(), u)),
                    e.selection.setRng(l),
                    void e.fire("SetContent", s)
                  );
                if ((ip(u), (f = u.lastChild), "mce_marker" === f.attr("id")))
                  for (c = f, f = f.prev; f; f = f.walk(!0))
                    if (3 === f.type || !g.isBlock(f.name)) {
                      e.schema.isValidChild(f.parent.name, "span") &&
                        f.parent.insert(c, f, "br" === f.name);
                      break;
                    }
                if (
                  (e._selectionOverrides.showBlockCaretContainer(i), b.invalid)
                ) {
                  tp(e, d),
                    (i = p.getNode()),
                    (a = e.getBody()),
                    9 === i.nodeType ? (i = f = a) : (f = i);
                  while (f !== a) (i = f), (f = f.parentNode);
                  (t = i === a ? a.innerHTML : g.getOuterHTML(i)),
                    (t = o.serialize(
                      r.parse(
                        t.replace(
                          /<span (id="mce_marker"|id=mce_marker).+?<\/span>/i,
                          function() {
                            return o.serialize(u);
                          }
                        )
                      )
                    )),
                    i === a ? g.setHTML(a, t) : g.setOuterHTML(i, t);
                } else (t = o.serialize(u)), np(e, t, i);
                op(e, m),
                  cp(e, g.get("mce_marker")),
                  ap(e.getBody()),
                  rp(e.dom, e.selection.getStart()),
                  e.fire("SetContent", s),
                  e.addVisual();
              }
            },
            fp = function(e) {
              var t;
              return "string" !== typeof e
                ? ((t = Mn.extend(
                    { paste: e.paste, data: { paste: e.paste } },
                    e
                  )),
                  { content: e.content, details: t })
                : { content: e, details: {} };
            },
            dp = function(e, t) {
              var n = fp(t);
              lp(e, n.content, n.details);
            },
            mp = { insertAtCaret: dp },
            pp = zo("sections", "settings"),
            gp = io.detect(),
            hp = gp.deviceType.isTouch(),
            vp = ["lists", "autolink", "autosave"],
            bp = { theme: "mobile" },
            yp = function(e) {
              var t = P(e) ? e.join(" ") : e,
                n = H(B(t) ? t.split(" ") : [], Gr);
              return Y(n, function(e) {
                return e.length > 0;
              });
            },
            Cp = function(e) {
              return Y(e, i(z, vp));
            },
            wp = function(e, t) {
              var n = ko(t, function(t, n) {
                return z(e, n);
              });
              return pp(n.t, n.f);
            },
            xp = function(e, t, n) {
              var r = e.sections(),
                o = r.hasOwnProperty(t) ? r[t] : {};
              return Mn.extend({}, n, o);
            },
            Ep = function(e, t) {
              return e.sections().hasOwnProperty(t);
            },
            Sp = function(e, t, n) {
              return {
                id: e,
                theme: "modern",
                delta_width: 0,
                delta_height: 0,
                popup_css: "",
                plugins: "",
                document_base_url: t,
                add_form_submit_trigger: !0,
                submit_patch: !0,
                add_unload_trigger: !0,
                convert_urls: !0,
                relative_urls: !0,
                remove_script_host: !0,
                object_resizing: !0,
                doctype: "<!DOCTYPE html>",
                visual: !0,
                font_size_style_values:
                  "xx-small,x-small,small,medium,large,x-large,xx-large",
                font_size_legacy_values:
                  "xx-small,small,medium,large,x-large,xx-large,300%",
                forced_root_block: "p",
                hidden_input: !0,
                render_ui: !0,
                indentation: "40px",
                inline_styles: !0,
                convert_fonts_to_spans: !0,
                indent: "simple",
                indent_before:
                  "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",
                indent_after:
                  "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",
                entity_encoding: "named",
                url_converter: n.convertURL,
                url_converter_scope: n,
                ie7_compat: !0
              };
            },
            Np = function(e, t) {
              var n = t.external_plugins ? t.external_plugins : {};
              return e && e.external_plugins
                ? Mn.extend({}, e.external_plugins, n)
                : n;
            },
            kp = function(e, t) {
              return [].concat(yp(e)).concat(yp(t));
            },
            Tp = function(e, t, n, r) {
              var o = yp(n.forced_plugins),
                i = yp(r.plugins),
                a = e && Ep(t, "mobile") ? Cp(i) : i,
                u = kp(o, a);
              return Mn.extend(r, { plugins: u.join(" ") });
            },
            _p = function(e, t) {
              var n = t.settings().inline;
              return e && Ep(t, "mobile") && !n;
            },
            Ap = function(e, t, n, r) {
              var o = wp(["mobile"], r),
                i = Mn.extend(
                  t,
                  n,
                  o.settings(),
                  _p(e, o) ? xp(o, "mobile", bp) : {},
                  {
                    validate: !0,
                    content_editable: o.settings().inline,
                    external_plugins: Np(n, o.settings())
                  }
                );
              return Tp(e, o, n, i);
            },
            Rp = function(e, t, n, r, o) {
              var i = Sp(t, n, e);
              return Ap(hp, i, r, o);
            },
            Dp = function(e, t, n) {
              return A.from(t.settings[n]).filter(e);
            },
            Bp = i(Dp, B),
            Op = function(e) {
              var t = {};
              return (
                "string" === typeof e
                  ? q(
                      e.indexOf("=") > 0
                        ? e.split(/[;,](?![^=;,]*(?:[;,]|$))/)
                        : e.split(","),
                      function(e) {
                        var n = e.split("=");
                        n.length > 1
                          ? (t[Mn.trim(n[0])] = Mn.trim(n[1]))
                          : (t[Mn.trim(n[0])] = Mn.trim(n));
                      }
                    )
                  : (t = e),
                t
              );
            },
            Pp = function(e) {
              return function(t) {
                return P(t) && ne(t, e);
              };
            },
            Ip = function(e, t, n, r) {
              var o = t in e.settings ? e.settings[t] : n;
              return "hash" === r
                ? Op(o)
                : "string" === r
                  ? Dp(B, e, t).getOr(n)
                  : "number" === r
                    ? Dp(F, e, t).getOr(n)
                    : "boolean" === r
                      ? Dp(L, e, t).getOr(n)
                      : "object" === r
                        ? Dp(O, e, t).getOr(n)
                        : "array" === r
                          ? Dp(P, e, t).getOr(n)
                          : "string[]" === r
                            ? Dp(Pp(B), e, t).getOr(n)
                            : "function" === r
                              ? Dp(M, e, t).getOr(n)
                              : o;
            },
            Lp = /[\u0591-\u07FF\uFB1D-\uFDFF\uFE70-\uFEFC]/,
            Mp = function(e) {
              return Lp.test(e);
            },
            Fp = function(e, t) {
              var n = Bp(e, "inline_boundaries_selector").getOr("a[href],code");
              return Ko(fo.fromDom(t), n);
            },
            Up = function(e) {
              return (
                "rtl" === pu.DOM.getStyle(e, "direction", !0) ||
                Mp(e.textContent)
              );
            },
            jp = function(e, t, n) {
              return Y(pu.DOM.getParents(n.container(), "*", t), e);
            },
            zp = function(e, t, n) {
              var r = jp(e, t, n);
              return A.from(r[r.length - 1]);
            },
            Vp = function(e, t, n) {
              var r = of(t, e),
                o = of(n, e);
              return r && r === o;
            },
            Hp = function(e) {
              return As(e) || Rs(e);
            },
            qp = function(e, t) {
              var n = t.container(),
                r = t.offset();
              return e
                ? Ns(n)
                  ? ka.isText(n.nextSibling)
                    ? zc(n.nextSibling, 0)
                    : zc.after(n)
                  : As(t)
                    ? zc(n, r + 1)
                    : t
                : Ns(n)
                  ? ka.isText(n.previousSibling)
                    ? zc(n.previousSibling, n.previousSibling.data.length)
                    : zc.before(n)
                  : Rs(t)
                    ? zc(n, r - 1)
                    : t;
            },
            $p = i(qp, !0),
            Wp = i(qp, !1),
            Yp = {
              isInlineTarget: Fp,
              findRootInline: zp,
              isRtl: Up,
              isAtZwsp: Hp,
              normalizePosition: qp,
              normalizeForwards: $p,
              normalizeBackwards: Wp,
              hasSameParentBlock: Vp
            },
            Gp = function(e) {
              return function(t) {
                return ti(e, fo.fromDom(t.dom().parentNode));
              };
            },
            Xp = function(e, t) {
              return ii(e, t)
                ? Gu(
                    t,
                    function(e) {
                      return na(e) || oa(e);
                    },
                    Gp(e)
                  )
                : A.none();
            },
            Zp = function(e) {
              var t = e.getBody(),
                n =
                  t.firstChild && e.dom.isBlock(t.firstChild)
                    ? t.firstChild
                    : t;
              e.selection.setCursorLocation(n, 0);
            },
            Kp = function(e) {
              e.dom.isEmpty(e.getBody()) && (e.setContent(""), Zp(e));
            },
            Jp = function(e, t, n) {
              return pc([Jf.firstPositionIn(n), Jf.lastPositionIn(n)], function(
                r,
                o
              ) {
                var i = Yp.normalizePosition(!0, r),
                  a = Yp.normalizePosition(!1, o),
                  u = Yp.normalizePosition(!1, t);
                return e
                  ? Jf.nextPosition(n, u)
                      .map(function(e) {
                        return e.isEqual(a) && t.isEqual(i);
                      })
                      .getOr(!1)
                  : Jf.prevPosition(n, u)
                      .map(function(e) {
                        return e.isEqual(i) && t.isEqual(a);
                      })
                      .getOr(!1);
              }).getOr(!0);
            },
            Qp = {
              getParentBlock: Xp,
              paddEmptyBody: Kp,
              willDeleteLastPositionInElement: Jp
            },
            eg = function(e, t, n) {
              return Xu(e, t, n).isSome();
            },
            tg = function(e, t) {
              var n = fo.fromDom(e),
                r = fo.fromDom(t);
              return eg(r, "pre,code", i(ti, n));
            },
            ng = function(e, t) {
              return (
                ka.isText(t) && /^[ \t\r\n]*$/.test(t.data) && !1 === tg(e, t)
              );
            },
            rg = function(e) {
              return (
                ka.isElement(e) && "A" === e.nodeName && e.hasAttribute("name")
              );
            },
            og = function(e, t) {
              return (Ws(t) && !1 === ng(e, t)) || rg(t) || ig(t);
            },
            ig = ka.hasAttribute("data-mce-bookmark"),
            ag = ka.hasAttribute("data-mce-bogus"),
            ug = ka.hasAttributeValue("data-mce-bogus", "all"),
            sg = function(e) {
              var t,
                n,
                r = 0;
              if (og(e, e)) return !1;
              if (((n = e.firstChild), !n)) return !0;
              t = new Fi(n, e);
              do {
                if (ug(n)) n = t.next(!0);
                else if (ag(n)) n = t.next();
                else if (ka.isBr(n)) r++, (n = t.next());
                else {
                  if (og(e, n)) return !1;
                  n = t.next();
                }
              } while (n);
              return r <= 1;
            },
            cg = function(e) {
              return sg(e.dom());
            },
            lg = { isEmpty: cg },
            fg = zo("block", "position"),
            dg = zo("from", "to"),
            mg = function(e, t) {
              var n = fo.fromDom(e),
                r = fo.fromDom(t.container());
              return Qp.getParentBlock(n, r).map(function(e) {
                return fg(e, t);
              });
            },
            pg = function(e) {
              return !1 === ti(e.from().block(), e.to().block());
            },
            gg = function(e) {
              return ci(e.from().block())
                .bind(function(t) {
                  return ci(e.to().block()).filter(function(e) {
                    return ti(t, e);
                  });
                })
                .isSome();
            },
            hg = function(e) {
              return (
                !1 === ka.isContentEditableFalse(e.from().block()) &&
                !1 === ka.isContentEditableFalse(e.to().block())
              );
            },
            vg = function(e, t, n) {
              return ka.isBr(n.position().getNode()) &&
                !1 === lg.isEmpty(n.block())
                ? Jf.positionIn(!1, n.block().dom())
                    .bind(function(r) {
                      return r.isEqual(n.position())
                        ? Jf.fromPosition(t, e, r).bind(function(t) {
                            return mg(e, t);
                          })
                        : A.some(n);
                    })
                    .getOr(n)
                : n;
            },
            bg = function(e, t, n) {
              var r = mg(e, zc.fromRangeStart(n)),
                o = r.bind(function(n) {
                  return Jf.fromPosition(t, e, n.position()).bind(function(n) {
                    return mg(e, n).map(function(n) {
                      return vg(e, t, n);
                    });
                  });
                });
              return pc([r, o], dg).filter(function(e) {
                return pg(e) && gg(e) && hg(e);
              });
            },
            yg = function(e, t, n) {
              return n.collapsed ? bg(e, t, n) : A.none();
            },
            Cg = { read: yg },
            wg = function(e) {
              return e.slice(0, -1);
            },
            xg = function(e, t, n) {
              return ii(t, e)
                ? wg(
                    li(e, function(e) {
                      return n(e) || ti(e, t);
                    })
                  )
                : [];
            },
            Eg = function(e, t) {
              return xg(e, t, r(!1));
            },
            Sg = function(e, t) {
              return [e].concat(Eg(e, t));
            },
            Ng = { parentsUntil: xg, parents: Eg, parentsAndSelf: Sg },
            kg = function(e) {
              var t = gi(e);
              return K(t, Qi).fold(
                function() {
                  return t;
                },
                function(e) {
                  return t.slice(0, e);
                }
              );
            },
            Tg = function(e) {
              var t = kg(e);
              return q(t, Au), t;
            },
            _g = function(e, t) {
              var n = Ng.parentsAndSelf(t, e);
              return Z(n.reverse(), lg.isEmpty).each(Au);
            },
            Ag = function(e) {
              return (
                0 ===
                Y(mi(e), function(e) {
                  return !lg.isEmpty(e);
                }).length
              );
            },
            Rg = function(e, t, n, r) {
              if (lg.isEmpty(n))
                return Hm.fillWithPaddingBr(n), Jf.firstPositionIn(n.dom());
              Ag(r) && lg.isEmpty(t) && xu(r, fo.fromTag("br"));
              var o = Jf.prevPosition(n.dom(), zc.before(r.dom()));
              return (
                q(Tg(t), function(e) {
                  xu(r, e);
                }),
                _g(e, t),
                o
              );
            },
            Dg = function(e, t, n) {
              if (lg.isEmpty(n))
                return (
                  Au(n),
                  lg.isEmpty(t) && Hm.fillWithPaddingBr(t),
                  Jf.firstPositionIn(t.dom())
                );
              var r = Jf.lastPositionIn(n.dom());
              return (
                q(Tg(t), function(e) {
                  Su(n, e);
                }),
                _g(e, t),
                r
              );
            },
            Bg = function(e, t) {
              var n = Ng.parentsAndSelf(t, e);
              return A.from(n[n.length - 1]);
            },
            Og = function(e, t) {
              return ii(t, e) ? Bg(t, e) : A.none();
            },
            Pg = function(e, t) {
              Jf.positionIn(e, t.dom())
                .map(function(e) {
                  return e.getNode();
                })
                .map(fo.fromDom)
                .filter(ta)
                .each(Au);
            },
            Ig = function(e, t, n) {
              return (
                Pg(!0, t),
                Pg(!1, n),
                Og(t, n).fold(i(Dg, e, t, n), i(Rg, e, t, n))
              );
            },
            Lg = function(e, t, n, r) {
              return t ? Ig(e, r, n) : Ig(e, n, r);
            },
            Mg = { mergeBlocks: Lg },
            Fg = function(e, t) {
              var n,
                r = fo.fromDom(e.getBody());
              return (
                (n = Cg.read(r.dom(), t, e.selection.getRng()).bind(function(
                  e
                ) {
                  return Mg.mergeBlocks(r, t, e.from().block(), e.to().block());
                })),
                n.each(function(t) {
                  e.selection.setRng(t.toRange());
                }),
                n.isSome()
              );
            },
            Ug = { backspaceDelete: Fg },
            jg = function(e, t) {
              var n = t.getRng();
              return pc(
                [
                  Qp.getParentBlock(e, fo.fromDom(n.startContainer)),
                  Qp.getParentBlock(e, fo.fromDom(n.endContainer))
                ],
                function(r, o) {
                  return (
                    !1 === ti(r, o) &&
                    (n.deleteContents(),
                    Mg.mergeBlocks(e, !0, r, o).each(function(e) {
                      t.setRng(e.toRange());
                    }),
                    !0)
                  );
                }
              ).getOr(!1);
            },
            zg = function(e, t) {
              var n = fo.fromDom(t),
                r = i(ti, e);
              return Yu(n, ua, r).isSome();
            },
            Vg = function(e, t) {
              return zg(e, t.startContainer) || zg(e, t.endContainer);
            },
            Hg = function(e, t) {
              var n = Jf.prevPosition(e.dom(), zc.fromRangeStart(t)).isNone(),
                r = Jf.nextPosition(e.dom(), zc.fromRangeEnd(t)).isNone();
              return !Vg(e, t) && n && r;
            },
            qg = function(e) {
              return e.setContent(""), e.selection.setCursorLocation(), !0;
            },
            $g = function(e) {
              var t = fo.fromDom(e.getBody()),
                n = e.selection.getRng();
              return Hg(t, n) ? qg(e) : jg(t, e.selection);
            },
            Wg = function(e, t) {
              return !e.selection.isCollapsed() && $g(e);
            },
            Yg = { backspaceDelete: Wg },
            Gg = function(e) {
              if (!P(e)) throw new Error("cases must be an array");
              if (0 === e.length)
                throw new Error("there must be at least one case");
              var t = [],
                n = {};
              return (
                q(e, function(r, o) {
                  var i = wo(r);
                  if (1 !== i.length)
                    throw new Error("one and only one name per case");
                  var a = i[0],
                    u = r[a];
                  if (void 0 !== n[a])
                    throw new Error("duplicate key detected:" + a);
                  if ("cata" === a)
                    throw new Error("cannot have a case named cata (sorry)");
                  if (!P(u)) throw new Error("case arguments must be an array");
                  t.push(a),
                    (n[a] = function() {
                      var n = arguments.length;
                      if (n !== u.length)
                        throw new Error(
                          "Wrong number of arguments to case " +
                            a +
                            ". Expected " +
                            u.length +
                            " (" +
                            u +
                            "), got " +
                            n
                        );
                      for (var r = new Array(n), i = 0; i < r.length; i++)
                        r[i] = arguments[i];
                      var s = function(e) {
                        var n = wo(e);
                        if (t.length !== n.length)
                          throw new Error(
                            "Wrong number of arguments to match. Expected: " +
                              t.join(",") +
                              "\nActual: " +
                              n.join(",")
                          );
                        var o = ne(t, function(e) {
                          return z(n, e);
                        });
                        if (!o)
                          throw new Error(
                            "Not all branches were specified when using match. Specified: " +
                              n.join(", ") +
                              "\nRequired: " +
                              t.join(", ")
                          );
                        return e[a].apply(null, r);
                      };
                      return {
                        fold: function() {
                          if (arguments.length !== e.length)
                            throw new Error(
                              "Wrong number of arguments to fold. Expected " +
                                e.length +
                                ", got " +
                                arguments.length
                            );
                          var t = arguments[o];
                          return t.apply(null, r);
                        },
                        match: s,
                        log: function(e) {
                          console.log(e, {
                            constructors: t,
                            constructor: a,
                            params: r
                          });
                        }
                      };
                    });
                }),
                n
              );
            },
            Xg = { generate: Gg },
            Zg = function(e) {
              return Nf(e).exists(ta);
            },
            Kg = function(e, t, n) {
              var r = Y(Ng.parentsAndSelf(fo.fromDom(n.container()), t), Qi),
                o = se(r).getOr(t);
              return Jf.fromPosition(e, o.dom(), n).filter(Zg);
            },
            Jg = function(e, t) {
              return Nf(t).exists(ta) || Kg(!0, e, t).isSome();
            },
            Qg = function(e, t) {
              return kf(t).exists(ta) || Kg(!1, e, t).isSome();
            },
            eh = i(Kg, !1),
            th = i(Kg, !0),
            nh = function(e) {
              return ua(fo.fromDom(e)) || oa(fo.fromDom(e));
            },
            rh = Xg.generate([
              { remove: ["element"] },
              { moveToElement: ["element"] },
              { moveToPosition: ["position"] }
            ]),
            oh = function(e, t) {
              var n = t.getNode(!1 === e),
                r = e ? "after" : "before";
              return ka.isElement(n) && n.getAttribute("data-mce-caret") === r;
            },
            ih = function(e, t, n, o) {
              var i = function(t) {
                return ea(fo.fromDom(t)) && !af(n, o, e);
              };
              return hf(!t, n).fold(function() {
                return hf(t, o).fold(r(!1), i);
              }, i);
            },
            ah = function(e, t, n, r) {
              var o = r.getNode(!1 === t);
              return Qp.getParentBlock(fo.fromDom(e), fo.fromDom(n.getNode()))
                .map(function(e) {
                  return lg.isEmpty(e)
                    ? rh.remove(e.dom())
                    : rh.moveToElement(o);
                })
                .orThunk(function() {
                  return A.some(rh.moveToElement(o));
                });
            },
            uh = function(e, t, n) {
              return Jf.fromPosition(t, e, n).bind(function(r) {
                return nh(r.getNode())
                  ? A.none()
                  : ih(e, t, n, r)
                    ? A.none()
                    : t && ka.isContentEditableFalse(r.getNode())
                      ? ah(e, t, n, r)
                      : !1 === t && ka.isContentEditableFalse(r.getNode(!0))
                        ? ah(e, t, n, r)
                        : t && yf(n)
                          ? A.some(rh.moveToPosition(r))
                          : !1 === t && bf(n)
                            ? A.some(rh.moveToPosition(r))
                            : A.none();
              });
            },
            sh = function(e, t) {
              return e && ka.isContentEditableFalse(t.nextSibling)
                ? A.some(rh.moveToElement(t.nextSibling))
                : !1 === e && ka.isContentEditableFalse(t.previousSibling)
                  ? A.some(rh.moveToElement(t.previousSibling))
                  : A.none();
            },
            ch = function(e, t, n) {
              return n.fold(
                function(e) {
                  return A.some(rh.remove(e));
                },
                function(e) {
                  return A.some(rh.moveToElement(e));
                },
                function(n) {
                  return af(t, n, e) ? A.none() : A.some(rh.moveToPosition(n));
                }
              );
            },
            lh = function(e, t, n) {
              return oh(t, n)
                ? sh(t, n.getNode(!1 === t)).fold(function() {
                    return uh(e, t, n);
                  }, A.some)
                : uh(e, t, n).bind(function(t) {
                    return ch(e, n, t);
                  });
            },
            fh = function(e, t, n) {
              var r = mf(t ? 1 : -1, e, n),
                o = zc.fromRangeStart(r),
                i = fo.fromDom(e);
              return !1 === t && yf(o)
                ? A.some(rh.remove(o.getNode(!0)))
                : t && bf(o)
                  ? A.some(rh.remove(o.getNode()))
                  : !1 === t && bf(o) && Qg(i, o)
                    ? eh(i, o).map(function(e) {
                        return rh.remove(e.getNode());
                      })
                    : t && yf(o) && Jg(i, o)
                      ? th(i, o).map(function(e) {
                          return rh.remove(e.getNode());
                        })
                      : lh(e, t, o);
            },
            dh = function(e) {
              return -1 !== " \f\n\r\t\v".indexOf(e);
            },
            mh = function(e, t, n) {
              var r = X(
                e.split(""),
                function(r, o) {
                  return dh(o) || " " === o
                    ? r.previousCharIsSpace ||
                      ("" === r.str && t) ||
                      (r.str.length === e.length - 1 && n)
                      ? { previousCharIsSpace: !1, str: r.str + " " }
                      : { previousCharIsSpace: !0, str: r.str + " " }
                    : { previousCharIsSpace: !1, str: r.str + o };
                },
                { previousCharIsSpace: !1, str: "" }
              );
              return r.str;
            },
            ph = function(e, t, n) {
              if (0 !== n) {
                var r = e.data.slice(t, t + n),
                  o = t + n >= e.data.length,
                  i = 0 === t;
                e.replaceData(t, n, mh(r, i, o));
              }
            },
            gh = function(e, t) {
              var n = e.data.slice(t),
                r = n.length - Xr(n).length;
              return ph(e, t, r);
            },
            hh = function(e, t) {
              var n = e.data.slice(0, t),
                r = n.length - Zr(n).length;
              return ph(e, t - r, r);
            },
            vh = function(e, t, n) {
              var r = Zr(e.data).length;
              return e.appendData(t.data), Au(fo.fromDom(t)), n && gh(e, r), e;
            },
            bh = function(e, t) {
              var n = e.container(),
                r = e.offset();
              return (
                !1 === zc.isTextPosition(e) &&
                n === t.parentNode &&
                r > zc.before(t).offset()
              );
            },
            yh = function(e, t) {
              return bh(t, e) ? zc(t.container(), t.offset() - 1) : t;
            },
            Ch = function(e) {
              return ka.isText(e) ? zc(e, 0) : zc.before(e);
            },
            wh = function(e) {
              return ka.isText(e) ? zc(e, e.data.length) : zc.after(e);
            },
            xh = function(e) {
              return Ws(e.previousSibling)
                ? A.some(wh(e.previousSibling))
                : e.previousSibling
                  ? Jf.lastPositionIn(e.previousSibling)
                  : A.none();
            },
            Eh = function(e) {
              return Ws(e.nextSibling)
                ? A.some(Ch(e.nextSibling))
                : e.nextSibling
                  ? Jf.firstPositionIn(e.nextSibling)
                  : A.none();
            },
            Sh = function(e, t) {
              var n = zc.before(
                t.previousSibling ? t.previousSibling : t.parentNode
              );
              return Jf.prevPosition(e, n).fold(function() {
                return Jf.nextPosition(e, zc.after(t));
              }, A.some);
            },
            Nh = function(e, t) {
              return Jf.nextPosition(e, zc.after(t)).fold(function() {
                return Jf.prevPosition(e, zc.before(t));
              }, A.some);
            },
            kh = function(e, t) {
              return xh(t)
                .orThunk(function() {
                  return Eh(t);
                })
                .orThunk(function() {
                  return Sh(e, t);
                });
            },
            Th = function(e, t) {
              return Eh(t)
                .orThunk(function() {
                  return xh(t);
                })
                .orThunk(function() {
                  return Nh(e, t);
                });
            },
            _h = function(e, t, n) {
              return e ? Th(t, n) : kh(t, n);
            },
            Ah = function(e, t, n) {
              return _h(e, t, n).map(i(yh, n));
            },
            Rh = function(e, t, n) {
              n.fold(
                function() {
                  e.focus();
                },
                function(n) {
                  e.selection.setRng(n.toRange(), t);
                }
              );
            },
            Dh = function(e) {
              return function(t) {
                return t.dom() === e;
              };
            },
            Bh = function(e, t) {
              return t && e.schema.getBlockElements().hasOwnProperty(ho(t));
            },
            Oh = function(e) {
              if (lg.isEmpty(e)) {
                var t = fo.fromHtml('<br data-mce-bogus="1">');
                return _u(e), Su(e, t), A.some(zc.before(t.dom()));
              }
              return A.none();
            },
            Ph = function(e, t, n) {
              var r = fi(e).filter(function(e) {
                  return ka.isText(e.dom());
                }),
                o = di(e).filter(function(e) {
                  return ka.isText(e.dom());
                });
              return (
                Au(e),
                pc([r, o, t], function(e, t, r) {
                  var o = e.dom(),
                    i = t.dom(),
                    a = o.data.length;
                  return vh(o, i, n), r.container() === i ? zc(o, a) : r;
                }).orThunk(function() {
                  return (
                    n &&
                      (r.each(function(e) {
                        return hh(e.dom(), e.dom().length);
                      }),
                      o.each(function(e) {
                        return gh(e.dom(), 0);
                      })),
                    t
                  );
                })
              );
            },
            Ih = function(e, t) {
              return To(e.schema.getTextInlineElements(), ho(t));
            },
            Lh = function(e, t, n, r) {
              void 0 === r && (r = !0);
              var o = Ah(t, e.getBody(), n.dom()),
                a = Yu(n, i(Bh, e), Dh(e.getBody())),
                u = Ph(n, o, Ih(e, n));
              e.dom.isEmpty(e.getBody())
                ? (e.setContent(""), e.selection.setCursorLocation())
                : a.bind(Oh).fold(
                    function() {
                      r && Rh(e, t, u);
                    },
                    function(n) {
                      r && Rh(e, t, A.some(n));
                    }
                  );
            },
            Mh = { deleteElement: Lh },
            Fh = function(e, t) {
              return function(n) {
                return (
                  e._selectionOverrides.hideFakeCaret(),
                  Mh.deleteElement(e, t, fo.fromDom(n)),
                  !0
                );
              };
            },
            Uh = function(e, t) {
              return function(n) {
                var r = t ? zc.before(n) : zc.after(n);
                return e.selection.setRng(r.toRange()), !0;
              };
            },
            jh = function(e) {
              return function(t) {
                return e.selection.setRng(t.toRange()), !0;
              };
            },
            zh = function(e, t) {
              var n = fh(e.getBody(), t, e.selection.getRng()).map(function(n) {
                return n.fold(Fh(e, t), Uh(e, t), jh(e));
              });
              return n.getOr(!1);
            },
            Vh = function(e) {
              q($u(e, ".mce-offscreen-selection"), Au);
            },
            Hh = function(e, t) {
              var n = e.selection.getNode();
              return (
                !!ka.isContentEditableFalse(n) &&
                (Vh(fo.fromDom(e.getBody())),
                Mh.deleteElement(e, t, fo.fromDom(e.selection.getNode())),
                Qp.paddEmptyBody(e),
                !0)
              );
            },
            qh = function(e, t) {
              while (t && t !== e) {
                if (ka.isContentEditableTrue(t) || ka.isContentEditableFalse(t))
                  return t;
                t = t.parentNode;
              }
              return null;
            },
            $h = function(e) {
              var t,
                n = qh(e.getBody(), e.selection.getNode());
              return (
                ka.isContentEditableTrue(n) &&
                  e.dom.isBlock(n) &&
                  e.dom.isEmpty(n) &&
                  ((t = e.dom.create("br", { "data-mce-bogus": "1" })),
                  e.dom.setHTML(n, ""),
                  n.appendChild(t),
                  e.selection.setRng(zc.before(t).toRange())),
                !0
              );
            },
            Wh = function(e, t) {
              return e.selection.isCollapsed() ? zh(e, t) : Hh(e, t);
            },
            Yh = { backspaceDelete: Wh, paddEmptyElement: $h },
            Gh = ka.isText,
            Xh = function(e) {
              return Gh(e) && e.data[0] === ws.ZWSP;
            },
            Zh = function(e) {
              return Gh(e) && e.data[e.data.length - 1] === ws.ZWSP;
            },
            Kh = function(e) {
              return e.ownerDocument.createTextNode(ws.ZWSP);
            },
            Jh = function(e) {
              if (Gh(e.previousSibling))
                return Zh(e.previousSibling)
                  ? e.previousSibling
                  : (e.previousSibling.appendData(ws.ZWSP), e.previousSibling);
              if (Gh(e)) return Xh(e) ? e : (e.insertData(0, ws.ZWSP), e);
              var t = Kh(e);
              return e.parentNode.insertBefore(t, e), t;
            },
            Qh = function(e) {
              if (Gh(e.nextSibling))
                return Xh(e.nextSibling)
                  ? e.nextSibling
                  : (e.nextSibling.insertData(0, ws.ZWSP), e.nextSibling);
              if (Gh(e)) return Zh(e) ? e : (e.appendData(ws.ZWSP), e);
              var t = Kh(e);
              return (
                e.nextSibling
                  ? e.parentNode.insertBefore(t, e.nextSibling)
                  : e.parentNode.appendChild(t),
                t
              );
            },
            ev = function(e, t) {
              return e ? Jh(t) : Qh(t);
            },
            tv = i(ev, !0),
            nv = i(ev, !1),
            rv = function(e, t) {
              return ka.isText(e.container())
                ? ev(t, e.container())
                : ev(t, e.getNode());
            },
            ov = function(e, t) {
              var n = t.get();
              return n && e.container() === n && Ns(n);
            },
            iv = function(e, t) {
              return t.fold(
                function(t) {
                  Il.remove(e.get());
                  var n = tv(t);
                  return e.set(n), A.some(zc(n, n.length - 1));
                },
                function(t) {
                  return Jf.firstPositionIn(t).map(function(t) {
                    if (ov(t, e)) return zc(e.get(), 1);
                    Il.remove(e.get());
                    var n = rv(t, !0);
                    return e.set(n), zc(n, 1);
                  });
                },
                function(t) {
                  return Jf.lastPositionIn(t).map(function(t) {
                    if (ov(t, e)) return zc(e.get(), e.get().length - 1);
                    Il.remove(e.get());
                    var n = rv(t, !1);
                    return e.set(n), zc(n, n.length - 1);
                  });
                },
                function(t) {
                  Il.remove(e.get());
                  var n = nv(t);
                  return e.set(n), A.some(zc(n, 1));
                }
              );
            },
            av = { renderCaret: iv },
            uv = function(e, t) {
              for (var n = 0; n < e.length; n++) {
                var r = e[n].apply(null, t);
                if (r.isSome()) return r;
              }
              return A.none();
            },
            sv = { evaluateUntil: uv },
            cv = Xg.generate([
              { before: ["element"] },
              { start: ["element"] },
              { end: ["element"] },
              { after: ["element"] }
            ]),
            lv = function(e, t) {
              var n = of(t, e);
              return n || e;
            },
            fv = function(e, t, n) {
              var r = Yp.normalizeForwards(n),
                o = lv(t, r.container());
              return Yp.findRootInline(e, o, r).fold(function() {
                return Jf.nextPosition(o, r)
                  .bind(i(Yp.findRootInline, e, o))
                  .map(function(e) {
                    return cv.before(e);
                  });
              }, A.none);
            },
            dv = function(e, t) {
              return null === wl(e, t);
            },
            mv = function(e, t, n) {
              return Yp.findRootInline(e, t, n).filter(i(dv, t));
            },
            pv = function(e, t, n) {
              var r = Yp.normalizeBackwards(n);
              return mv(e, t, r).bind(function(e) {
                var t = Jf.prevPosition(e, r);
                return t.isNone() ? A.some(cv.start(e)) : A.none();
              });
            },
            gv = function(e, t, n) {
              var r = Yp.normalizeForwards(n);
              return mv(e, t, r).bind(function(e) {
                var t = Jf.nextPosition(e, r);
                return t.isNone() ? A.some(cv.end(e)) : A.none();
              });
            },
            hv = function(e, t, n) {
              var r = Yp.normalizeBackwards(n),
                o = lv(t, r.container());
              return Yp.findRootInline(e, o, r).fold(function() {
                return Jf.prevPosition(o, r)
                  .bind(i(Yp.findRootInline, e, o))
                  .map(function(e) {
                    return cv.after(e);
                  });
              }, A.none);
            },
            vv = function(e) {
              return !1 === Yp.isRtl(yv(e));
            },
            bv = function(e, t, n) {
              var r = sv.evaluateUntil([fv, pv, gv, hv], [e, t, n]);
              return r.filter(vv);
            },
            yv = function(e) {
              return e.fold(o, o, o, o);
            },
            Cv = function(e) {
              return e.fold(r("before"), r("start"), r("end"), r("after"));
            },
            wv = function(e) {
              return e.fold(cv.before, cv.before, cv.after, cv.after);
            },
            xv = function(e) {
              return e.fold(cv.start, cv.start, cv.end, cv.end);
            },
            Ev = function(e, t) {
              return Cv(e) === Cv(t) && yv(e) === yv(t);
            },
            Sv = function(e, t, n, r, o, i) {
              return pc(
                [Yp.findRootInline(t, n, r), Yp.findRootInline(t, n, o)],
                function(t, r) {
                  return t !== r && Yp.hasSameParentBlock(n, t, r)
                    ? cv.after(e ? t : r)
                    : i;
                }
              ).getOr(i);
            },
            Nv = function(e, t) {
              return e.fold(r(!0), function(e) {
                return !Ev(e, t);
              });
            },
            kv = function(e, t, n, r, o) {
              var a = Yp.normalizePosition(e, o),
                u = Jf.fromPosition(e, n, a).map(i(Yp.normalizePosition, e)),
                s = u.fold(
                  function() {
                    return r.map(wv);
                  },
                  function(o) {
                    return bv(t, n, o)
                      .map(i(Sv, e, t, n, a, o))
                      .filter(i(Nv, r));
                  }
                );
              return s.filter(vv);
            },
            Tv = function(e, t) {
              return e
                ? t.fold(
                    n(A.some, cv.start),
                    A.none,
                    n(A.some, cv.after),
                    A.none
                  )
                : t.fold(
                    A.none,
                    n(A.some, cv.before),
                    A.none,
                    n(A.some, cv.end)
                  );
            },
            _v = function(e, t, n, r) {
              var o = Yp.normalizePosition(e, r),
                a = bv(t, n, o);
              return bv(t, n, o)
                .bind(i(Tv, e))
                .orThunk(function() {
                  return kv(e, t, n, a, r);
                });
            },
            Av = {
              readLocation: bv,
              findLocation: _v,
              prevLocation: i(_v, !1),
              nextLocation: i(_v, !0),
              getElement: yv,
              outside: wv,
              inside: xv
            },
            Rv = function(e) {
              return M(e.selection.getSel().modify);
            },
            Dv = function(e, t, n) {
              var r = e ? 1 : -1;
              return (
                t.setRng(zc(n.container(), n.offset() + r).toRange()),
                t.getSel().modify("move", e ? "forward" : "backward", "word"),
                !0
              );
            },
            Bv = function(e, t) {
              var n = t.selection.getRng(),
                r = e ? zc.fromRangeEnd(n) : zc.fromRangeStart(n);
              return (
                !!Rv(t) &&
                (e && As(r)
                  ? Dv(!0, t.selection, r)
                  : !(e || !Rs(r)) && Dv(!1, t.selection, r))
              );
            },
            Ov = { hasSelectionModifyApi: Rv, moveByWord: Bv },
            Pv = function(e, t) {
              var n = e.dom.createRng();
              n.setStart(t.container(), t.offset()),
                n.setEnd(t.container(), t.offset()),
                e.selection.setRng(n);
            },
            Iv = function(e) {
              return !1 !== e.settings.inline_boundaries;
            },
            Lv = function(e, t) {
              e
                ? t.setAttribute("data-mce-selected", "inline-boundary")
                : t.removeAttribute("data-mce-selected");
            },
            Mv = function(e, t, n) {
              return av.renderCaret(t, n).map(function(t) {
                return Pv(e, t), n;
              });
            },
            Fv = function(e, t, n) {
              var r = e.getBody(),
                o = zc.fromRangeStart(e.selection.getRng()),
                a = i(Yp.isInlineTarget, e),
                u = Av.findLocation(n, a, r, o);
              return u.bind(function(n) {
                return Mv(e, t, n);
              });
            },
            Uv = function(e, t, n) {
              var r = Y(t.select('*[data-mce-selected="inline-boundary"]'), e),
                o = Y(n, e);
              q(ie(r, o), i(Lv, !1)), q(ie(o, r), i(Lv, !0));
            },
            jv = function(e, t) {
              if (e.selection.isCollapsed() && !0 !== e.composing && t.get()) {
                var n = zc.fromRangeStart(e.selection.getRng());
                zc.isTextPosition(n) &&
                  !1 === Yp.isAtZwsp(n) &&
                  (Pv(e, Il.removeAndReposition(t.get(), n)), t.set(null));
              }
            },
            zv = function(e, t, n, r) {
              if (t.selection.isCollapsed()) {
                var o = Y(r, e);
                q(o, function(r) {
                  var o = zc.fromRangeStart(t.selection.getRng());
                  Av.readLocation(e, t.getBody(), o).bind(function(e) {
                    return Mv(t, n, e);
                  });
                });
              }
            },
            Vv = function(e, t, n) {
              return function() {
                return !!Iv(e) && Fv(e, t, n).isSome();
              };
            },
            Hv = function(e, t, n) {
              return function() {
                return !!Iv(t) && Ov.moveByWord(e, t);
              };
            },
            qv = function(e) {
              var t = Ou(null),
                n = i(Yp.isInlineTarget, e);
              return (
                e.on("NodeChange", function(r) {
                  Iv(e) &&
                    (Uv(n, e.dom, r.parents), jv(e, t), zv(n, e, t, r.parents));
                }),
                t
              );
            },
            $v = i(Hv, !0),
            Wv = i(Hv, !1),
            Yv = {
              move: Vv,
              moveNextWord: $v,
              movePrevWord: Wv,
              setupSelectedState: qv,
              setCaretPosition: Pv
            },
            Gv = function(e) {
              return !1 !== e.settings.inline_boundaries;
            },
            Xv = function(e, t) {
              var n = document.createRange();
              return (
                n.setStart(e.container(), e.offset()),
                n.setEnd(t.container(), t.offset()),
                n
              );
            },
            Zv = function(e) {
              return pc([Jf.firstPositionIn(e), Jf.lastPositionIn(e)], function(
                t,
                n
              ) {
                var r = Yp.normalizePosition(!0, t),
                  o = Yp.normalizePosition(!1, n);
                return Jf.nextPosition(e, r)
                  .map(function(e) {
                    return e.isEqual(o);
                  })
                  .getOr(!0);
              }).getOr(!0);
            },
            Kv = function(e, t) {
              return function(n) {
                return av
                  .renderCaret(t, n)
                  .map(function(t) {
                    return Yv.setCaretPosition(e, t), !0;
                  })
                  .getOr(!1);
              };
            },
            Jv = function(e, t, n, r) {
              var o = e.getBody(),
                a = i(Yp.isInlineTarget, e);
              e.undoManager.ignore(function() {
                e.selection.setRng(Xv(n, r)),
                  e.execCommand("Delete"),
                  Av.readLocation(a, o, zc.fromRangeStart(e.selection.getRng()))
                    .map(Av.inside)
                    .map(Kv(e, t));
              }),
                e.nodeChanged();
            },
            Qv = function(e, t) {
              var n = of(t, e);
              return n || e;
            },
            eb = function(e, t, n, o) {
              var a = Qv(e.getBody(), o.container()),
                u = i(Yp.isInlineTarget, e),
                s = Av.readLocation(u, a, o);
              return s
                .bind(function(e) {
                  return n
                    ? e.fold(
                        r(A.some(Av.inside(e))),
                        A.none,
                        r(A.some(Av.outside(e))),
                        A.none
                      )
                    : e.fold(
                        A.none,
                        r(A.some(Av.outside(e))),
                        A.none,
                        r(A.some(Av.inside(e)))
                      );
                })
                .map(Kv(e, t))
                .getOrThunk(function() {
                  var r = Jf.navigate(n, a, o),
                    i = r.bind(function(e) {
                      return Av.readLocation(u, a, e);
                    });
                  return s.isSome() && i.isSome()
                    ? Yp.findRootInline(u, a, o)
                        .map(function(t) {
                          return (
                            !!Zv(t) &&
                            (Mh.deleteElement(e, n, fo.fromDom(t)), !0)
                          );
                        })
                        .getOr(!1)
                    : i
                        .bind(function(i) {
                          return r.map(function(r) {
                            return n ? Jv(e, t, o, r) : Jv(e, t, r, o), !0;
                          });
                        })
                        .getOr(!1);
                });
            },
            tb = function(e, t, n) {
              if (e.selection.isCollapsed() && Gv(e)) {
                var r = zc.fromRangeStart(e.selection.getRng());
                return eb(e, t, n, r);
              }
              return !1;
            },
            nb = { backspaceDelete: tb },
            rb = zo("start", "end"),
            ob = zo("rng", "table", "cells"),
            ib = Xg.generate([
              { removeTable: ["element"] },
              { emptyCells: ["cells"] }
            ]),
            ab = function(e) {
              return i(ti, e);
            },
            ub = function(e, t) {
              return Ku(fo.fromDom(e), "td,th", t);
            },
            sb = function(e, t) {
              return Xu(e, "table", t);
            },
            cb = function(e) {
              return !1 === ti(e.start(), e.end());
            },
            lb = function(e, t) {
              return sb(e.start(), t).bind(function(n) {
                return sb(e.end(), t).bind(function(e) {
                  return ti(n, e) ? A.some(n) : A.none();
                });
              });
            },
            fb = function(e) {
              return $u(e, "td,th");
            },
            db = function(e, t) {
              return sb(e.start(), t).bind(function(t) {
                return ce(fb(t)).map(function(t) {
                  return rb(e.start(), t);
                });
              });
            },
            mb = function(e, t) {
              var n = ub(t.startContainer, e),
                r = ub(t.endContainer, e);
              return t.collapsed
                ? A.none()
                : pc([n, r], rb).fold(
                    function() {
                      return n.fold(
                        function() {
                          return r.bind(function(t) {
                            return sb(t, e).bind(function(e) {
                              return se(fb(e)).map(function(e) {
                                return rb(e, t);
                              });
                            });
                          });
                        },
                        function(t) {
                          return sb(t, e).bind(function(e) {
                            return ce(fb(e)).map(function(e) {
                              return rb(t, e);
                            });
                          });
                        }
                      );
                    },
                    function(t) {
                      return pb(e, t) ? A.none() : db(t, e);
                    }
                  );
            },
            pb = function(e, t) {
              return lb(t, e).isSome();
            },
            gb = function(e, t) {
              var n = ub(e.startContainer, t),
                r = ub(e.endContainer, t);
              return pc([n, r], rb)
                .filter(cb)
                .filter(function(e) {
                  return pb(t, e);
                })
                .orThunk(function() {
                  return mb(t, e);
                });
            },
            hb = function(e, t) {
              return lb(e, t).map(function(t) {
                return ob(e, t, fb(t));
              });
            },
            vb = function(e, t) {
              var n = ab(e);
              return gb(t, n).bind(function(e) {
                return hb(e, n);
              });
            },
            bb = function(e, t) {
              return K(e, function(e) {
                return ti(e, t);
              });
            },
            yb = function(e) {
              return pc(
                [bb(e.cells(), e.rng().start()), bb(e.cells(), e.rng().end())],
                function(t, n) {
                  return e.cells().slice(t, n + 1);
                }
              );
            },
            Cb = function(e) {
              return yb(e).map(function(t) {
                var n = e.cells();
                return t.length === n.length
                  ? ib.removeTable(e.table())
                  : ib.emptyCells(t);
              });
            },
            wb = function(e) {
              return ib.emptyCells(e);
            },
            xb = function(e, t) {
              return vb(e, t).bind(Cb);
            },
            Eb = { getActionFromRange: xb, getActionFromCells: wb },
            Sb = function(e) {
              var t = [];
              if (e)
                for (var n = 0; n < e.rangeCount; n++) t.push(e.getRangeAt(n));
              return t;
            },
            Nb = function(e) {
              return te(e, function(e) {
                var t = lc(e);
                return t ? [fo.fromDom(t)] : [];
              });
            },
            kb = function(e) {
              return Sb(e).length > 1;
            },
            Tb = { getRanges: Sb, getSelectedNodes: Nb, hasMultipleRanges: kb },
            _b = function(e) {
              return Y(Tb.getSelectedNodes(e), ua);
            },
            Ab = function(e) {
              var t = $u(e, "td[data-mce-selected],th[data-mce-selected]");
              return t;
            },
            Rb = function(e, t) {
              var n = Ab(t),
                r = _b(e);
              return n.length > 0 ? n : r;
            },
            Db = function(e) {
              return Rb(
                Tb.getRanges(e.selection.getSel()),
                fo.fromDom(e.getBody())
              );
            },
            Bb = {
              getCellsFromRanges: _b,
              getCellsFromElement: Ab,
              getCellsFromElementOrRanges: Rb,
              getCellsFromEditor: Db
            },
            Ob = function(e, t) {
              return (
                q(t, Hm.fillWithPaddingBr),
                e.selection.setCursorLocation(t[0].dom(), 0),
                !0
              );
            },
            Pb = function(e, t) {
              return Mh.deleteElement(e, !1, t), !0;
            },
            Ib = function(e, t, n) {
              return Eb.getActionFromRange(t, n).map(function(t) {
                return t.fold(i(Pb, e), i(Ob, e));
              });
            },
            Lb = function(e, t) {
              return Vb(e, t);
            },
            Mb = function(e, t, n, r) {
              return jb(t, r)
                .fold(
                  function() {
                    return Ib(e, t, n);
                  },
                  function(t) {
                    return Lb(e, t);
                  }
                )
                .getOr(!1);
            },
            Fb = function(e, t) {
              var n = fo.fromDom(e.getBody()),
                r = e.selection.getRng(),
                o = Bb.getCellsFromEditor(e);
              return 0 !== o.length ? Ob(e, o) : Mb(e, n, r, t);
            },
            Ub = function(e, t) {
              return Z(Ng.parentsAndSelf(t, e), ua);
            },
            jb = function(e, t) {
              return Z(Ng.parentsAndSelf(t, e), function(e) {
                return "caption" === ho(e);
              });
            },
            zb = function(e, t, n, r, o) {
              return Jf.navigate(n, e.getBody(), o).bind(function(e) {
                return Ub(t, fo.fromDom(e.getNode())).map(function(e) {
                  return !1 === ti(e, r);
                });
              });
            },
            Vb = function(e, t) {
              return (
                Hm.fillWithPaddingBr(t),
                e.selection.setCursorLocation(t.dom(), 0),
                A.some(!0)
              );
            },
            Hb = function(e, t, n, r) {
              return Jf.firstPositionIn(e.dom())
                .bind(function(o) {
                  return Jf.lastPositionIn(e.dom()).map(function(e) {
                    return t
                      ? n.isEqual(o) && r.isEqual(e)
                      : n.isEqual(e) && r.isEqual(o);
                  });
                })
                .getOr(!0);
            },
            qb = function(e, t) {
              return Vb(e, t);
            },
            $b = function(e, t, n) {
              return jb(e, fo.fromDom(n.getNode())).map(function(e) {
                return !1 === ti(e, t);
              });
            },
            Wb = function(e, t, n, r, o) {
              return Jf.navigate(n, e.getBody(), o)
                .bind(function(i) {
                  return Hb(r, n, o, i) ? qb(e, r) : $b(t, r, i);
                })
                .or(A.some(!0));
            },
            Yb = function(e, t, n, r) {
              var o = zc.fromRangeStart(e.selection.getRng());
              return Ub(n, r).bind(function(r) {
                return lg.isEmpty(r) ? Vb(e, r) : zb(e, n, t, r, o);
              });
            },
            Gb = function(e, t, n, r) {
              var o = zc.fromRangeStart(e.selection.getRng());
              return lg.isEmpty(r) ? Vb(e, r) : Wb(e, n, t, r, o);
            },
            Xb = function(e, t, n) {
              var r = fo.fromDom(e.getBody());
              return jb(r, n)
                .fold(
                  function() {
                    return Yb(e, t, r, n);
                  },
                  function(n) {
                    return Gb(e, t, r, n);
                  }
                )
                .getOr(!1);
            },
            Zb = function(e, t) {
              var n = fo.fromDom(e.selection.getStart(!0)),
                r = Bb.getCellsFromEditor(e);
              return e.selection.isCollapsed() && 0 === r.length
                ? Xb(e, t, n)
                : Fb(e, n);
            },
            Kb = { backspaceDelete: Zb },
            Jb = function(e, t) {
              e.getDoc().execCommand(t, !1, null);
            },
            Qb = function(e) {
              Yh.backspaceDelete(e, !1) ||
                nb.backspaceDelete(e, !1) ||
                Ug.backspaceDelete(e, !1) ||
                Kb.backspaceDelete(e) ||
                Yg.backspaceDelete(e, !1) ||
                (Jb(e, "Delete"), Qp.paddEmptyBody(e));
            },
            ey = function(e) {
              Yh.backspaceDelete(e, !0) ||
                nb.backspaceDelete(e, !0) ||
                Ug.backspaceDelete(e, !0) ||
                Kb.backspaceDelete(e) ||
                Yg.backspaceDelete(e, !0) ||
                Jb(e, "ForwardDelete");
            },
            ty = { deleteCommand: Qb, forwardDeleteCommand: ey },
            ny = function(e, t, n) {
              var r = e.getParam(t, n);
              if (-1 !== r.indexOf("=")) {
                var o = e.getParam(t, "", "hash");
                return o.hasOwnProperty(e.id) ? o[e.id] : n;
              }
              return r;
            },
            ry = function(e) {
              return e.getParam("iframe_attrs", {});
            },
            oy = function(e) {
              return e.getParam("doctype", "<!DOCTYPE html>");
            },
            iy = function(e) {
              return e.getParam("document_base_url", "");
            },
            ay = function(e) {
              return ny(e, "body_id", "tinymce");
            },
            uy = function(e) {
              return ny(e, "body_class", "");
            },
            sy = function(e) {
              return e.getParam("content_security_policy", "");
            },
            cy = function(e) {
              return e.getParam("br_in_pre", !0);
            },
            ly = function(e) {
              if (e.getParam("force_p_newlines", !1)) return "p";
              var t = e.getParam("forced_root_block", "p");
              return !1 === t ? "" : t;
            },
            fy = function(e) {
              return e.getParam("forced_root_block_attrs", {});
            },
            dy = function(e) {
              return e.getParam(
                "br_newline_selector",
                ".mce-toc h2,figcaption,caption"
              );
            },
            my = function(e) {
              return e.getParam("no_newline_selector", "");
            },
            py = function(e) {
              return e.getParam("keep_styles", !0);
            },
            gy = function(e) {
              return e.getParam("end_container_on_empty_block", !1);
            },
            hy = function(e) {
              return Mn.explode(e.getParam("font_size_style_values", ""));
            },
            vy = function(e) {
              return Mn.explode(e.getParam("font_size_classes", ""));
            },
            by = function(e) {
              return e.getParam("images_dataimg_filter", r(!0), "function");
            },
            yy = function(e) {
              return e.getParam("automatic_uploads", !0, "boolean");
            },
            Cy = function(e) {
              return e.getParam("images_reuse_filename", !1, "boolean");
            },
            wy = function(e) {
              return e.getParam("images_replace_blob_uris", !0, "boolean");
            },
            xy = function(e) {
              return e.getParam("images_upload_url", "", "string");
            },
            Ey = function(e) {
              return e.getParam("images_upload_base_path", "", "string");
            },
            Sy = function(e) {
              return e.getParam("images_upload_credentials", !1, "boolean");
            },
            Ny = function(e) {
              return e.getParam("images_upload_handler", null, "function");
            },
            ky = function(e) {
              return e.getParam("content_css_cors", !1, "boolean");
            },
            Ty = {
              getIframeAttrs: ry,
              getDocType: oy,
              getDocumentBaseUrl: iy,
              getBodyId: ay,
              getBodyClass: uy,
              getContentSecurityPolicy: sy,
              shouldPutBrInPre: cy,
              getForcedRootBlock: ly,
              getForcedRootBlockAttrs: fy,
              getBrNewLineSelector: dy,
              getNoNewLineSelector: my,
              shouldKeepStyles: py,
              shouldEndContainerOnEmptyBlock: gy,
              getFontStyleValues: hy,
              getFontSizeClasses: vy,
              getImagesDataImgFilter: by,
              isAutomaticUploadsEnabled: yy,
              shouldReuseFileName: Cy,
              shouldReplaceBlobUris: wy,
              getImageUploadUrl: xy,
              getImageUploadBasePath: Ey,
              getImagesUploadCredentials: Sy,
              getImagesUploadHandler: Ny,
              shouldUseContentCssCors: ky
            },
            _y = function(e, t, n) {
              var r = function(t) {
                  return jo(t, e);
                },
                o = function(e) {
                  return ti(fo.fromDom(t), e);
                };
              return Gu(
                fo.fromDom(n),
                function(e) {
                  return r(e).isSome();
                },
                o
              ).bind(r);
            },
            Ay = function(e, t) {
              var n = Math.pow(10, t);
              return Math.round(e * n) / n;
            },
            Ry = function(e, t) {
              return /[0-9.]+px$/.test(e)
                ? Ay((72 * parseInt(e, 10)) / 96, t || 0) + "pt"
                : e;
            },
            Dy = function(e) {
              return e.replace(/[\'\"\\]/g, "").replace(/,\s+/g, ",");
            },
            By = function(e, t) {
              return A.from(pu.DOM.getStyle(t, e, !0));
            },
            Oy = function(e) {
              return function(t, n) {
                return A.from(n)
                  .map(fo.fromDom)
                  .filter(yo)
                  .bind(function(n) {
                    return _y(e, t, n.dom()).or(By(e, n.dom()));
                  })
                  .getOr("");
              };
            },
            Py = {
              getFontSize: Oy("font-size"),
              getFontFamily: n(Dy, Oy("font-family")),
              toPt: Ry
            },
            Iy = function(e) {
              return Jf.firstPositionIn(e.getBody()).map(function(e) {
                var t = e.container();
                return ka.isText(t) ? t.parentNode : t;
              });
            },
            Ly = function(e, t) {
              return e.startContainer === t && 0 === e.startOffset;
            },
            My = function(e) {
              return A.from(e.selection.getRng()).bind(function(t) {
                var n = e.getBody();
                return Ly(t, n) ? A.none() : A.from(e.selection.getStart(!0));
              });
            },
            Fy = function(e, t) {
              if (/^[0-9\.]+$/.test(t)) {
                var n = parseInt(t, 10);
                if (n >= 1 && n <= 7) {
                  var r = Ty.getFontStyleValues(e),
                    o = Ty.getFontSizeClasses(e);
                  return o ? o[n - 1] || t : r[n - 1] || t;
                }
                return t;
              }
              return t;
            },
            Uy = function(e, t) {
              e.formatter.toggle("fontname", { value: Fy(e, t) }),
                e.nodeChanged();
            },
            jy = function(e) {
              return My(e).fold(
                function() {
                  return Iy(e)
                    .map(function(t) {
                      return Py.getFontFamily(e.getBody(), t);
                    })
                    .getOr("");
                },
                function(t) {
                  return Py.getFontFamily(e.getBody(), t);
                }
              );
            },
            zy = function(e, t) {
              e.formatter.toggle("fontsize", { value: Fy(e, t) }),
                e.nodeChanged();
            },
            Vy = function(e) {
              return My(e).fold(
                function() {
                  return Iy(e)
                    .map(function(t) {
                      return Py.getFontSize(e.getBody(), t);
                    })
                    .getOr("");
                },
                function(t) {
                  return Py.getFontSize(e.getBody(), t);
                }
              );
            },
            Hy = function(e, t) {
              return (
                e &&
                t &&
                e.startContainer === t.startContainer &&
                e.startOffset === t.startOffset &&
                e.endContainer === t.endContainer &&
                e.endOffset === t.endOffset
              );
            },
            qy = { isEq: Hy },
            $y = function(e, t, n) {
              while (e && e !== t) {
                if (n(e)) return e;
                e = e.parentNode;
              }
              return null;
            },
            Wy = function(e, t, n) {
              return null !== $y(e, t, n);
            },
            Yy = function(e, t, n) {
              return Wy(e, t, function(e) {
                return e.nodeName === n;
              });
            },
            Gy = function(e) {
              return e && "TABLE" === e.nodeName;
            },
            Xy = function(e) {
              return e && /^(TD|TH|CAPTION)$/.test(e.nodeName);
            },
            Zy = function(e, t) {
              return ks(e) && !1 === Wy(e, t, Cl);
            },
            Ky = function(e, t, n) {
              var r = new Fi(
                t,
                e.getParent(t.parentNode, e.isBlock) || e.getRoot()
              );
              while ((t = r[n ? "prev" : "next"]())) if (ka.isBr(t)) return !0;
            },
            Jy = function(e, t) {
              return e.previousSibling && e.previousSibling.nodeName === t;
            },
            Qy = function(e, t) {
              while (t && t !== e) {
                if (ka.isContentEditableFalse(t)) return !0;
                t = t.parentNode;
              }
              return !1;
            },
            eC = function(e, t, n, r, o) {
              var i,
                a,
                u,
                s,
                c = e.getRoot(),
                l = e.schema.getNonEmptyElements();
              if (
                ((u = e.getParent(o.parentNode, e.isBlock) || c),
                r && ka.isBr(o) && t && e.isEmpty(u))
              )
                return A.some(Uc(o.parentNode, e.nodeIndex(o)));
              i = new Fi(o, u);
              while ((s = i[r ? "prev" : "next"]())) {
                if ("false" === e.getContentEditableParent(s) || Zy(s, c))
                  return A.none();
                if (ka.isText(s) && s.nodeValue.length > 0)
                  return !1 === Yy(s, c, "A")
                    ? A.some(Uc(s, r ? s.nodeValue.length : 0))
                    : A.none();
                if (e.isBlock(s) || l[s.nodeName.toLowerCase()])
                  return A.none();
                a = s;
              }
              return n && a ? A.some(Uc(a, 0)) : A.none();
            },
            tC = function(e, t, n, r) {
              var o,
                i,
                a,
                u,
                s,
                c,
                l,
                f = e.getRoot(),
                d = !1;
              if (
                ((o = r[(n ? "start" : "end") + "Container"]),
                (i = r[(n ? "start" : "end") + "Offset"]),
                (l = ka.isElement(o) && i === o.childNodes.length),
                (s = e.schema.getNonEmptyElements()),
                (c = n),
                ks(o))
              )
                return A.none();
              if (
                (ka.isElement(o) && i > o.childNodes.length - 1 && (c = !1),
                ka.isDocument(o) && ((o = f), (i = 0)),
                o === f)
              ) {
                if (c && ((u = o.childNodes[i > 0 ? i - 1 : 0]), u)) {
                  if (ks(u)) return A.none();
                  if (s[u.nodeName] || Gy(u)) return A.none();
                }
                if (o.hasChildNodes()) {
                  if (
                    ((i = Math.min(
                      !c && i > 0 ? i - 1 : i,
                      o.childNodes.length - 1
                    )),
                    (o = o.childNodes[i]),
                    (i = ka.isText(o) && l ? o.data.length : 0),
                    !t && o === f.lastChild && Gy(o))
                  )
                    return A.none();
                  if (Qy(f, o) || ks(o)) return A.none();
                  if (o.hasChildNodes() && !1 === Gy(o)) {
                    (u = o), (a = new Fi(o, f));
                    do {
                      if (ka.isContentEditableFalse(u) || ks(u)) {
                        d = !1;
                        break;
                      }
                      if (ka.isText(u) && u.nodeValue.length > 0) {
                        (i = c ? 0 : u.nodeValue.length), (o = u), (d = !0);
                        break;
                      }
                      if (s[u.nodeName.toLowerCase()] && !Xy(u)) {
                        (i = e.nodeIndex(u)),
                          (o = u.parentNode),
                          c || i++,
                          (d = !0);
                        break;
                      }
                    } while ((u = c ? a.next() : a.prev()));
                  }
                }
              }
              return (
                t &&
                  (ka.isText(o) &&
                    0 === i &&
                    eC(e, l, t, !0, o).each(function(e) {
                      (o = e.container()), (i = e.offset()), (d = !0);
                    }),
                  ka.isElement(o) &&
                    ((u = o.childNodes[i]),
                    u || (u = o.childNodes[i - 1]),
                    !u ||
                      !ka.isBr(u) ||
                      Jy(u, "A") ||
                      Ky(e, u, !1) ||
                      Ky(e, u, !0) ||
                      eC(e, l, t, !0, u).each(function(e) {
                        (o = e.container()), (i = e.offset()), (d = !0);
                      }))),
                c &&
                  !t &&
                  ka.isText(o) &&
                  i === o.nodeValue.length &&
                  eC(e, l, t, !1, o).each(function(e) {
                    (o = e.container()), (i = e.offset()), (d = !0);
                  }),
                d ? A.some(Uc(o, i)) : A.none()
              );
            },
            nC = function(e, t) {
              var n = t.collapsed,
                r = t.cloneRange(),
                o = Uc.fromRangeStart(t);
              return (
                tC(e, n, !0, r).each(function(e) {
                  (n && Uc.isAbove(o, e)) ||
                    r.setStart(e.container(), e.offset());
                }),
                n ||
                  tC(e, n, !1, r).each(function(e) {
                    r.setEnd(e.container(), e.offset());
                  }),
                n && r.collapse(!0),
                qy.isEq(t, r) ? A.none() : A.some(r)
              );
            },
            rC = { normalize: nC },
            oC = function(e, t, n) {
              var r,
                o = new Fi(t, n),
                i = e.getNonEmptyElements();
              while ((r = o.next()))
                if (i[r.nodeName.toLowerCase()] || r.length > 0) return !0;
            },
            iC = function(e, t, n) {
              var r = e.create("span", {}, "&nbsp;");
              n.parentNode.insertBefore(r, n), t.scrollIntoView(r), e.remove(r);
            },
            aC = function(e, t, n, r) {
              var o = e.createRng();
              r
                ? (o.setStartBefore(n), o.setEndBefore(n))
                : (o.setStartAfter(n), o.setEndAfter(n)),
                t.setRng(o);
            },
            uC = function(e, t) {
              var n,
                r,
                o = e.selection,
                i = e.dom,
                a = o.getRng();
              rC.normalize(i, a).each(function(e) {
                a.setStart(e.startContainer, e.startOffset),
                  a.setEnd(e.endContainer, e.endOffset);
              });
              var u = a.startOffset,
                s = a.startContainer;
              if (1 === s.nodeType && s.hasChildNodes()) {
                var c = u > s.childNodes.length - 1;
                (s = s.childNodes[Math.min(u, s.childNodes.length - 1)] || s),
                  (u = c && 3 === s.nodeType ? s.nodeValue.length : 0);
              }
              var l = i.getParent(s, i.isBlock),
                f = l ? i.getParent(l.parentNode, i.isBlock) : null,
                d = f ? f.nodeName.toUpperCase() : "",
                m = t && t.ctrlKey;
              "LI" !== d || m || (l = f),
                s &&
                  3 === s.nodeType &&
                  u >= s.nodeValue.length &&
                  (oC(e.schema, s, l) ||
                    ((n = i.create("br")),
                    a.insertNode(n),
                    a.setStartAfter(n),
                    a.setEndAfter(n),
                    (r = !0))),
                (n = i.create("br")),
                a.insertNode(n),
                iC(i, o, n),
                aC(i, o, n, r),
                e.undoManager.add();
            },
            sC = function(e, t) {
              var n = fo.fromTag("br");
              xu(fo.fromDom(t), n), e.undoManager.add();
            },
            cC = function(e, t) {
              fC(e.getBody(), t) || Eu(fo.fromDom(t), fo.fromTag("br"));
              var n = fo.fromTag("br");
              Eu(fo.fromDom(t), n),
                iC(e.dom, e.selection, n.dom()),
                aC(e.dom, e.selection, n.dom(), !1),
                e.undoManager.add();
            },
            lC = function(e) {
              return ka.isBr(e.getNode());
            },
            fC = function(e, t) {
              return (
                !!lC(zc.after(t)) ||
                Jf.nextPosition(e, zc.after(t))
                  .map(function(e) {
                    return ka.isBr(e.getNode());
                  })
                  .getOr(!1)
              );
            },
            dC = function(e) {
              return e && "A" === e.nodeName && "href" in e;
            },
            mC = function(e) {
              return e.fold(r(!1), dC, dC, r(!1));
            },
            pC = function(e) {
              var t = i(Yp.isInlineTarget, e),
                n = zc.fromRangeStart(e.selection.getRng());
              return Av.readLocation(t, e.getBody(), n).filter(mC);
            },
            gC = function(e, n) {
              n.fold(t, i(sC, e), i(cC, e), t);
            },
            hC = function(e, t) {
              var n = pC(e);
              n.isSome() ? n.each(i(gC, e)) : uC(e, t);
            },
            vC = { insert: hC },
            bC = (Xg.generate([
              { before: ["element"] },
              { on: ["element", "offset"] },
              { after: ["element"] }
            ]),
            Xg.generate([
              { domRange: ["rng"] },
              { relative: ["startSitu", "finishSitu"] },
              { exact: ["start", "soffset", "finish", "foffset"] }
            ]),
            zo("start", "soffset", "finish", "foffset")),
            yC = io.detect().browser,
            CC = function(e, t) {
              var n = Co(t) ? om(t).length : gi(t).length + 1;
              return e > n ? n : e < 0 ? 0 : e;
            },
            wC = function(e) {
              return bC(
                e.start(),
                CC(e.soffset(), e.start()),
                e.finish(),
                CC(e.foffset(), e.finish())
              );
            },
            xC = function(e, t) {
              return ii(e, t) || ti(e, t);
            },
            EC = function(e) {
              return function(t) {
                return xC(e, t.start()) && xC(e, t.finish());
              };
            },
            SC = function(e) {
              return !0 === e.inline || yC.isIE();
            },
            NC = function(e) {
              return bC(
                fo.fromDom(e.startContainer),
                e.startOffset,
                fo.fromDom(e.endContainer),
                e.endOffset
              );
            },
            kC = function(e) {
              var t = e.getSelection(),
                n =
                  t && 0 !== t.rangeCount ? A.from(t.getRangeAt(0)) : A.none();
              return n.map(NC);
            },
            TC = function(e) {
              var t = si(e);
              return kC(t.dom()).filter(EC(e));
            },
            _C = function(e, t) {
              return A.from(t)
                .filter(EC(e))
                .map(wC);
            },
            AC = function(e) {
              var t = document.createRange();
              try {
                return (
                  t.setStart(e.start().dom(), e.soffset()),
                  t.setEnd(e.finish().dom(), e.foffset()),
                  A.some(t)
                );
              } catch (n) {
                return A.none();
              }
            },
            RC = function(e) {
              var t = SC(e) ? TC(fo.fromDom(e.getBody())) : A.none();
              e.bookmark = t.isSome() ? t : e.bookmark;
            },
            DC = function(e, t) {
              var n = fo.fromDom(e.getBody()),
                r = SC(e) ? A.from(t) : A.none(),
                o = r.map(NC).filter(EC(n));
              e.bookmark = o.isSome() ? o : e.bookmark;
            },
            BC = function(e) {
              var t = e.bookmark ? e.bookmark : A.none();
              return t.bind(i(_C, fo.fromDom(e.getBody()))).bind(AC);
            },
            OC = function(e) {
              BC(e).each(function(t) {
                e.selection.setRng(t);
              });
            },
            PC = {
              store: RC,
              storeNative: DC,
              readRange: kC,
              restore: OC,
              getRng: BC,
              getBookmark: TC,
              validate: _C
            },
            IC = function(e, t, n, r, o, i) {
              if ("false" !== e.getContentEditable(i)) {
                var a = n ? "margin" : "padding";
                if (
                  ((a = "TABLE" === i.nodeName ? "margin" : a),
                  (a +=
                    "rtl" === e.getStyle(i, "direction", !0)
                      ? "Right"
                      : "Left"),
                  "outdent" === t)
                ) {
                  var u = Math.max(0, parseInt(i.style[a] || 0, 10) - r);
                  e.setStyle(i, a, u ? u + o : "");
                } else {
                  u = parseInt(i.style[a] || 0, 10) + r + o;
                  e.setStyle(i, a, u);
                }
              }
            },
            LC = function(e) {
              return ra(e) || oa(e);
            },
            MC = function(e) {
              return ci(e)
                .map(LC)
                .getOr(!1);
            },
            FC = function(e) {
              return Y(H(e.selection.getSelectedBlocks(), fo.fromDom), function(
                e
              ) {
                return !LC(e) && !MC(e);
              });
            },
            UC = function(e, t) {
              var n = e.settings,
                r = e.dom,
                o = e.selection,
                i = e.formatter,
                a = /[a-z%]+$/i.exec(n.indentation)[0],
                u = parseInt(n.indentation, 10),
                s = e.getParam("indent_use_margin", !1);
              e.queryCommandState("InsertUnorderedList") ||
                e.queryCommandState("InsertOrderedList") ||
                n.forced_root_block ||
                r.getParent(o.getNode(), r.isBlock) ||
                i.apply("div"),
                q(FC(e), function(e) {
                  IC(r, t, s, u, a, e.dom());
                });
            },
            jC = Mn.each,
            zC = Mn.extend,
            VC = Mn.map,
            HC = Mn.inArray;
          function qC(e) {
            var t,
              n,
              r,
              o,
              i = { state: {}, exec: {}, value: {} },
              a = e.settings;
            e.on("PreInit", function() {
              (t = e.dom),
                (n = e.selection),
                (a = e.settings),
                (r = e.formatter);
            });
            var u = function(t, n, r, o) {
                var a,
                  u,
                  s = !1;
                if (!e.removed) {
                  if (
                    (/^(mceAddUndoLevel|mceEndUndoLevel|mceBeginUndoLevel|mceRepaint)$/.test(
                      t
                    ) ||
                    (o && o.skip_focus)
                      ? PC.restore(e)
                      : e.focus(),
                    (o = e.fire("BeforeExecCommand", {
                      command: t,
                      ui: n,
                      value: r
                    })),
                    o.isDefaultPrevented())
                  )
                    return !1;
                  if (((u = t.toLowerCase()), (a = i.exec[u])))
                    return (
                      a(u, n, r),
                      e.fire("ExecCommand", { command: t, ui: n, value: r }),
                      !0
                    );
                  if (
                    (jC(e.plugins, function(o) {
                      if (o.execCommand && o.execCommand(t, n, r))
                        return (
                          e.fire("ExecCommand", {
                            command: t,
                            ui: n,
                            value: r
                          }),
                          (s = !0),
                          !1
                        );
                    }),
                    s)
                  )
                    return s;
                  if (
                    e.theme &&
                    e.theme.execCommand &&
                    e.theme.execCommand(t, n, r)
                  )
                    return (
                      e.fire("ExecCommand", { command: t, ui: n, value: r }), !0
                    );
                  try {
                    s = e.getDoc().execCommand(t, n, r);
                  } catch (c) {}
                  return (
                    !!s &&
                    (e.fire("ExecCommand", { command: t, ui: n, value: r }), !0)
                  );
                }
              },
              s = function(t) {
                var n;
                if (!e.quirks.isHidden() && !e.removed) {
                  if (((t = t.toLowerCase()), (n = i.state[t]))) return n(t);
                  try {
                    return e.getDoc().queryCommandState(t);
                  } catch (r) {}
                  return !1;
                }
              },
              c = function(t) {
                var n;
                if (!e.quirks.isHidden() && !e.removed) {
                  if (((t = t.toLowerCase()), (n = i.value[t]))) return n(t);
                  try {
                    return e.getDoc().queryCommandValue(t);
                  } catch (r) {}
                }
              },
              l = function(e, t) {
                (t = t || "exec"),
                  jC(e, function(e, n) {
                    jC(n.toLowerCase().split(","), function(n) {
                      i[t][n] = e;
                    });
                  });
              },
              f = function(t, n, r) {
                (t = t.toLowerCase()),
                  (i.exec[t] = function(t, o, i, a) {
                    return n.call(r || e, o, i, a);
                  });
              },
              d = function(t) {
                if (((t = t.toLowerCase()), i.exec[t])) return !0;
                try {
                  return e.getDoc().queryCommandSupported(t);
                } catch (n) {}
                return !1;
              },
              m = function(t, n, r) {
                (t = t.toLowerCase()),
                  (i.state[t] = function() {
                    return n.call(r || e);
                  });
              },
              p = function(t, n, r) {
                (t = t.toLowerCase()),
                  (i.value[t] = function() {
                    return n.call(r || e);
                  });
              },
              g = function(e) {
                return (e = e.toLowerCase()), !!i.exec[e];
              };
            zC(this, {
              execCommand: u,
              queryCommandState: s,
              queryCommandValue: c,
              queryCommandSupported: d,
              addCommands: l,
              addCommand: f,
              addQueryStateHandler: m,
              addQueryValueHandler: p,
              hasCustomCommand: g
            });
            var h = function(t, n, r) {
                return (
                  void 0 === n && (n = !1),
                  void 0 === r && (r = null),
                  e.getDoc().execCommand(t, n, r)
                );
              },
              v = function(e) {
                return r.match(e);
              },
              b = function(t, n) {
                r.toggle(t, n ? { value: n } : void 0), e.nodeChanged();
              },
              y = function(e) {
                o = n.getBookmark(e);
              },
              C = function() {
                n.moveToBookmark(o);
              };
            l({
              "mceResetDesignMode,mceBeginUndoLevel": function() {},
              "mceEndUndoLevel,mceAddUndoLevel": function() {
                e.undoManager.add();
              },
              "Cut,Copy,Paste": function(t) {
                var n,
                  r = e.getDoc();
                try {
                  h(t);
                } catch (i) {
                  n = !0;
                }
                if (
                  ("paste" !== t || r.queryCommandEnabled(t) || (n = !0),
                  n || !r.queryCommandSupported(t))
                ) {
                  var o = e.translate(
                    "Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead."
                  );
                  ke.mac && (o = o.replace(/Ctrl\+/g, "⌘+")),
                    e.notificationManager.open({ text: o, type: "error" });
                }
              },
              unlink: function() {
                if (n.isCollapsed()) {
                  var t = e.dom.getParent(e.selection.getStart(), "a");
                  t && e.dom.remove(t, !0);
                } else r.remove("link");
              },
              "JustifyLeft,JustifyCenter,JustifyRight,JustifyFull,JustifyNone": function(
                e
              ) {
                var t = e.substring(7);
                "full" === t && (t = "justify"),
                  jC("left,center,right,justify".split(","), function(e) {
                    t !== e && r.remove("align" + e);
                  }),
                  "none" !== t && b("align" + t);
              },
              "InsertUnorderedList,InsertOrderedList": function(e) {
                var r, o;
                h(e),
                  (r = t.getParent(n.getNode(), "ol,ul")),
                  r &&
                    ((o = r.parentNode),
                    /^(H[1-6]|P|ADDRESS|PRE)$/.test(o.nodeName) &&
                      (y(), t.split(o, r), C()));
              },
              "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function(
                e
              ) {
                b(e);
              },
              "ForeColor,HiliteColor": function(e, t, n) {
                b(e, n);
              },
              FontName: function(t, n, r) {
                Uy(e, r);
              },
              FontSize: function(t, n, r) {
                zy(e, r);
              },
              RemoveFormat: function(e) {
                r.remove(e);
              },
              mceBlockQuote: function() {
                b("blockquote");
              },
              FormatBlock: function(e, t, n) {
                return b(n || "p");
              },
              mceCleanup: function() {
                var t = n.getBookmark();
                e.setContent(e.getContent()), n.moveToBookmark(t);
              },
              mceRemoveNode: function(t, r, o) {
                var i = o || n.getNode();
                i !== e.getBody() && (y(), e.dom.remove(i, !0), C());
              },
              mceSelectNodeDepth: function(r, o, i) {
                var a = 0;
                t.getParent(
                  n.getNode(),
                  function(e) {
                    if (1 === e.nodeType && a++ === i) return n.select(e), !1;
                  },
                  e.getBody()
                );
              },
              mceSelectNode: function(e, t, r) {
                n.select(r);
              },
              mceInsertContent: function(t, n, r) {
                mp.insertAtCaret(e, r);
              },
              mceInsertRawHTML: function(t, r, o) {
                n.setContent("tiny_mce_marker");
                var i = e.getContent();
                e.setContent(
                  i.replace(/tiny_mce_marker/g, function() {
                    return o;
                  })
                );
              },
              mceToggleFormat: function(e, t, n) {
                b(n);
              },
              mceSetContent: function(t, n, r) {
                e.setContent(r);
              },
              "Indent,Outdent": function(t) {
                UC(e, t);
              },
              mceRepaint: function() {},
              InsertHorizontalRule: function() {
                e.execCommand("mceInsertContent", !1, "<hr />");
              },
              mceToggleVisualAid: function() {
                (e.hasVisual = !e.hasVisual), e.addVisual();
              },
              mceReplaceContent: function(t, r, o) {
                e.execCommand(
                  "mceInsertContent",
                  !1,
                  o.replace(
                    /\{\$selection\}/g,
                    n.getContent({ format: "text" })
                  )
                );
              },
              mceInsertLink: function(e, o, i) {
                var a;
                "string" === typeof i && (i = { href: i }),
                  (a = t.getParent(n.getNode(), "a")),
                  (i.href = i.href.replace(" ", "%20")),
                  (a && i.href) || r.remove("link"),
                  i.href && r.apply("link", i, a);
              },
              selectAll: function() {
                var e = t.getParent(n.getStart(), ka.isContentEditableTrue);
                if (e) {
                  var r = t.createRng();
                  r.selectNodeContents(e), n.setRng(r);
                }
              },
              delete: function() {
                ty.deleteCommand(e);
              },
              forwardDelete: function() {
                ty.forwardDeleteCommand(e);
              },
              mceNewDocument: function() {
                e.setContent("");
              },
              InsertLineBreak: function(t, n, r) {
                return vC.insert(e, r), !0;
              }
            });
            var w = function(e) {
              return function() {
                var o = n.isCollapsed()
                    ? [t.getParent(n.getNode(), t.isBlock)]
                    : n.getSelectedBlocks(),
                  i = VC(o, function(t) {
                    return !!r.matchNode(t, e);
                  });
                return -1 !== HC(i, !0);
              };
            };
            l(
              {
                JustifyLeft: w("alignleft"),
                JustifyCenter: w("aligncenter"),
                JustifyRight: w("alignright"),
                JustifyFull: w("alignjustify"),
                "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function(
                  e
                ) {
                  return v(e);
                },
                mceBlockQuote: function() {
                  return v("blockquote");
                },
                Outdent: function() {
                  var e;
                  if (a.inline_styles) {
                    if (
                      (e = t.getParent(n.getStart(), t.isBlock)) &&
                      parseInt(e.style.paddingLeft, 10) > 0
                    )
                      return !0;
                    if (
                      (e = t.getParent(n.getEnd(), t.isBlock)) &&
                      parseInt(e.style.paddingLeft, 10) > 0
                    )
                      return !0;
                  }
                  return (
                    s("InsertUnorderedList") ||
                    s("InsertOrderedList") ||
                    (!a.inline_styles &&
                      !!t.getParent(n.getNode(), "BLOCKQUOTE"))
                  );
                },
                "InsertUnorderedList,InsertOrderedList": function(e) {
                  var r = t.getParent(n.getNode(), "ul,ol");
                  return (
                    r &&
                    (("insertunorderedlist" === e && "UL" === r.tagName) ||
                      ("insertorderedlist" === e && "OL" === r.tagName))
                  );
                }
              },
              "state"
            ),
              l({
                Undo: function() {
                  e.undoManager.undo();
                },
                Redo: function() {
                  e.undoManager.redo();
                }
              }),
              p(
                "FontName",
                function() {
                  return jy(e);
                },
                this
              ),
              p(
                "FontSize",
                function() {
                  return Vy(e);
                },
                this
              );
          }
          var $C = Mn.makeMap(
              "focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchmove touchend",
              " "
            ),
            WC = function(e) {
              var t,
                n,
                r = this,
                o = {},
                i = function() {
                  return !1;
                },
                a = function() {
                  return !0;
                };
              (e = e || {}), (t = e.scope || r), (n = e.toggleEvent || i);
              var u = function(n, r) {
                  var u, s, l, f;
                  if (
                    ((n = n.toLowerCase()),
                    (r = r || {}),
                    (r.type = n),
                    r.target || (r.target = t),
                    r.preventDefault ||
                      ((r.preventDefault = function() {
                        r.isDefaultPrevented = a;
                      }),
                      (r.stopPropagation = function() {
                        r.isPropagationStopped = a;
                      }),
                      (r.stopImmediatePropagation = function() {
                        r.isImmediatePropagationStopped = a;
                      }),
                      (r.isDefaultPrevented = i),
                      (r.isPropagationStopped = i),
                      (r.isImmediatePropagationStopped = i)),
                    e.beforeFire && e.beforeFire(r),
                    (u = o[n]),
                    u)
                  )
                    for (s = 0, l = u.length; s < l; s++) {
                      if (
                        ((f = u[s]),
                        f.once && c(n, f.func),
                        r.isImmediatePropagationStopped())
                      )
                        return r.stopPropagation(), r;
                      if (!1 === f.func.call(t, r))
                        return r.preventDefault(), r;
                    }
                  return r;
                },
                s = function(e, t, a, u) {
                  var s, c, l;
                  if ((!1 === t && (t = i), t)) {
                    (t = { func: t }),
                      u && Mn.extend(t, u),
                      (c = e.toLowerCase().split(" ")),
                      (l = c.length);
                    while (l--)
                      (e = c[l]),
                        (s = o[e]),
                        s || ((s = o[e] = []), n(e, !0)),
                        a ? s.unshift(t) : s.push(t);
                  }
                  return r;
                },
                c = function(e, t) {
                  var i, a, u, s, c;
                  if (e) {
                    (s = e.toLowerCase().split(" ")), (i = s.length);
                    while (i--) {
                      if (((e = s[i]), (a = o[e]), !e)) {
                        for (u in o) n(u, !1), delete o[u];
                        return r;
                      }
                      if (a) {
                        if (t) {
                          c = a.length;
                          while (c--)
                            a[c].func === t &&
                              ((a = a.slice(0, c).concat(a.slice(c + 1))),
                              (o[e] = a));
                        } else a.length = 0;
                        a.length || (n(e, !1), delete o[e]);
                      }
                    }
                  } else {
                    for (e in o) n(e, !1);
                    o = {};
                  }
                  return r;
                },
                l = function(e, t, n) {
                  return s(e, t, n, { once: !0 });
                },
                f = function(e) {
                  return (e = e.toLowerCase()), !(!o[e] || 0 === o[e].length);
                };
              (r.fire = u), (r.on = s), (r.off = c), (r.once = l), (r.has = f);
            };
          WC.isNative = function(e) {
            return !!$C[e.toLowerCase()];
          };
          var YC,
            GC = function(e) {
              return (
                e._eventDispatcher ||
                  (e._eventDispatcher = new WC({
                    scope: e,
                    toggleEvent: function(t, n) {
                      WC.isNative(t) &&
                        e.toggleNativeEvent &&
                        e.toggleNativeEvent(t, n);
                    }
                  })),
                e._eventDispatcher
              );
            },
            XC = {
              fire: function(e, t, n) {
                var r = this;
                if (r.removed && "remove" !== e) return t;
                if (((t = GC(r).fire(e, t, n)), !1 !== n && r.parent)) {
                  var o = r.parent();
                  while (o && !t.isPropagationStopped())
                    o.fire(e, t, !1), (o = o.parent());
                }
                return t;
              },
              on: function(e, t, n) {
                return GC(this).on(e, t, n);
              },
              off: function(e, t) {
                return GC(this).off(e, t);
              },
              once: function(e, t) {
                return GC(this).once(e, t);
              },
              hasEventListeners: function(e) {
                return GC(this).has(e);
              }
            },
            ZC = function(e, t) {
              return e.fire("PreProcess", t);
            },
            KC = function(e, t) {
              return e.fire("PostProcess", t);
            },
            JC = function(e) {
              return e.fire("remove");
            },
            QC = function(e, t) {
              return e.fire("SwitchMode", { mode: t });
            },
            ew = function(e, t, n, r) {
              e.fire("ObjectResizeStart", { target: t, width: n, height: r });
            },
            tw = function(e, t, n, r) {
              e.fire("ObjectResized", { target: t, width: n, height: r });
            },
            nw = {
              firePreProcess: ZC,
              firePostProcess: KC,
              fireRemove: JC,
              fireSwitchMode: QC,
              fireObjectResizeStart: ew,
              fireObjectResized: tw
            },
            rw = function(e, t, n) {
              try {
                e.getDoc().execCommand(t, !1, n);
              } catch (r) {}
            },
            ow = function(e, t, n) {
              qu(e, t) && !1 === n ? Hu(e, t) : n && zu(e, t);
            },
            iw = function(e, t) {
              ow(fo.fromDom(e.getBody()), "mce-content-readonly", t),
                t
                  ? (e.selection.controlSelection.hideResizeRect(),
                    (e.readonly = !0),
                    (e.getBody().contentEditable = "false"))
                  : ((e.readonly = !1),
                    (e.getBody().contentEditable = "true"),
                    rw(e, "StyleWithCSS", !1),
                    rw(e, "enableInlineTableEditing", !1),
                    rw(e, "enableObjectResizing", !1),
                    e.focus(),
                    e.nodeChanged());
            },
            aw = function(e, t) {
              t !== uw(e) &&
                (e.initialized
                  ? iw(e, "readonly" === t)
                  : e.on("init", function() {
                      iw(e, "readonly" === t);
                    }),
                nw.fireSwitchMode(e, t));
            },
            uw = function(e) {
              return e.readonly ? "readonly" : "design";
            },
            sw = function(e) {
              return !0 === e.readonly;
            },
            cw = pu.DOM,
            lw = function(e, t) {
              return "selectionchange" === t
                ? e.getDoc()
                : !e.inline &&
                  /^mouse|touch|click|contextmenu|drop|dragover|dragend/.test(t)
                  ? e.getDoc().documentElement
                  : e.settings.event_root
                    ? (e.eventRoot ||
                        (e.eventRoot = cw.select(e.settings.event_root)[0]),
                      e.eventRoot)
                    : e.getBody();
            },
            fw = function(e) {
              return !e.hidden && !e.readonly;
            },
            dw = function(e, t, n) {
              fw(e) ? e.fire(t, n) : sw(e) && n.preventDefault();
            },
            mw = function(e, t) {
              var n, r;
              if (
                (e.delegates || (e.delegates = {}),
                !e.delegates[t] && !e.removed)
              )
                if (((n = lw(e, t)), e.settings.event_root)) {
                  if (
                    (YC ||
                      ((YC = {}),
                      e.editorManager.on("removeEditor", function() {
                        var t;
                        if (!e.editorManager.activeEditor && YC) {
                          for (t in YC) e.dom.unbind(lw(e, t));
                          YC = null;
                        }
                      })),
                    YC[t])
                  )
                    return;
                  (r = function(n) {
                    var r = n.target,
                      o = e.editorManager.get(),
                      i = o.length;
                    while (i--) {
                      var a = o[i].getBody();
                      (a === r || cw.isChildOf(r, a)) && dw(o[i], t, n);
                    }
                  }),
                    (YC[t] = r),
                    cw.bind(n, t, r);
                } else
                  (r = function(n) {
                    dw(e, t, n);
                  }),
                    cw.bind(n, t, r),
                    (e.delegates[t] = r);
            },
            pw = {
              bindPendingEventDelegates: function() {
                var e = this;
                Mn.each(e._pendingNativeEvents, function(t) {
                  mw(e, t);
                });
              },
              toggleNativeEvent: function(e, t) {
                var n = this;
                "focus" !== e &&
                  "blur" !== e &&
                  (t
                    ? n.initialized
                      ? mw(n, e)
                      : n._pendingNativeEvents
                        ? n._pendingNativeEvents.push(e)
                        : (n._pendingNativeEvents = [e])
                    : n.initialized &&
                      (n.dom.unbind(lw(n, e), e, n.delegates[e]),
                      delete n.delegates[e]));
              },
              unbindAllNativeEvents: function() {
                var e,
                  t = this,
                  n = t.getBody(),
                  r = t.dom;
                if (t.delegates) {
                  for (e in t.delegates)
                    t.dom.unbind(lw(t, e), e, t.delegates[e]);
                  delete t.delegates;
                }
                !t.inline &&
                  n &&
                  r &&
                  ((n.onload = null),
                  r.unbind(t.getWin()),
                  r.unbind(t.getDoc())),
                  r && (r.unbind(n), r.unbind(t.getContainer()));
              }
            };
          pw = Mn.extend({}, XC, pw);
          var gw = pw,
            hw = Mn.each,
            vw = Mn.explode,
            bw = { f9: 120, f10: 121, f11: 122 },
            yw = Mn.makeMap("alt,ctrl,shift,meta,access");
          function Cw(e) {
            var t = this,
              n = {},
              r = [],
              o = function(e) {
                var t,
                  n,
                  r = {};
                for (n in (hw(vw(e, "+"), function(e) {
                  e in yw
                    ? (r[e] = !0)
                    : /^[0-9]{2,}$/.test(e)
                      ? (r.keyCode = parseInt(e, 10))
                      : ((r.charCode = e.charCodeAt(0)),
                        (r.keyCode = bw[e] || e.toUpperCase().charCodeAt(0)));
                }),
                (t = [r.keyCode]),
                yw))
                  r[n] ? t.push(n) : (r[n] = !1);
                return (
                  (r.id = t.join(",")),
                  r.access &&
                    ((r.alt = !0), ke.mac ? (r.ctrl = !0) : (r.shift = !0)),
                  r.meta &&
                    (ke.mac ? (r.meta = !0) : ((r.ctrl = !0), (r.meta = !1))),
                  r
                );
              },
              i = function(t, n, r, i) {
                var a;
                return (
                  (a = Mn.map(vw(t, ">"), o)),
                  (a[a.length - 1] = Mn.extend(a[a.length - 1], {
                    func: r,
                    scope: i || e
                  })),
                  Mn.extend(a[0], {
                    desc: e.translate(n),
                    subpatterns: a.slice(1)
                  })
                );
              },
              a = function(e) {
                return e.altKey || e.ctrlKey || e.metaKey;
              },
              u = function(e) {
                return (
                  "keydown" === e.type && e.keyCode >= 112 && e.keyCode <= 123
                );
              },
              s = function(e, t) {
                return (
                  !!t &&
                  (t.ctrl === e.ctrlKey &&
                    t.meta === e.metaKey &&
                    (t.alt === e.altKey &&
                      t.shift === e.shiftKey &&
                      (!!(
                        e.keyCode === t.keyCode ||
                        (e.charCode && e.charCode === t.charCode)
                      ) &&
                        (e.preventDefault(), !0))))
                );
              },
              c = function(e) {
                return e.func ? e.func.call(e.scope) : null;
              };
            e.on("keyup keypress keydown", function(e) {
              (!a(e) && !u(e)) ||
                e.isDefaultPrevented() ||
                (hw(n, function(t) {
                  if (s(e, t))
                    return (
                      (r = t.subpatterns.slice(0)),
                      "keydown" === e.type && c(t),
                      !0
                    );
                }),
                s(e, r[0]) &&
                  (1 === r.length && "keydown" === e.type && c(r[0]),
                  r.shift()));
            }),
              (t.add = function(t, r, o, a) {
                var u;
                return (
                  (u = o),
                  "string" === typeof o
                    ? (o = function() {
                        e.execCommand(u, !1, null);
                      })
                    : Mn.isArray(u) &&
                      (o = function() {
                        e.execCommand(u[0], u[1], u[2]);
                      }),
                  hw(vw(Mn.trim(t.toLowerCase())), function(e) {
                    var t = i(e, r, o, a);
                    n[t.id] = t;
                  }),
                  !0
                );
              }),
              (t.remove = function(e) {
                var t = i(e);
                return !!n[t.id] && (delete n[t.id], !0);
              });
          }
          var ww = function(e) {
              var t = ai(e).dom();
              return e.dom() === t.activeElement;
            },
            xw = function(e) {
              var t = void 0 !== e ? e.dom() : document;
              return A.from(t.activeElement).map(fo.fromDom);
            },
            Ew = function(e) {
              return xw(ai(e)).filter(function(t) {
                return e.dom().contains(t.dom());
              });
            },
            Sw = function(e, t) {
              return e.dom.getParent(t, function(t) {
                return "true" === e.dom.getContentEditable(t);
              });
            },
            Nw = function(e) {
              return e.collapsed
                ? A.from(fc(e.startContainer, e.startOffset)).map(fo.fromDom)
                : A.none();
            },
            kw = function(e, t) {
              return Nw(t).bind(function(t) {
                return aa(t)
                  ? A.some(t)
                  : !1 === ii(e, t)
                    ? A.some(e)
                    : A.none();
              });
            },
            Tw = function(e, t) {
              kw(fo.fromDom(e.getBody()), t)
                .bind(function(e) {
                  return Jf.firstPositionIn(e.dom());
                })
                .fold(
                  function() {
                    e.selection.normalize();
                  },
                  function(t) {
                    return e.selection.setRng(t.toRange());
                  }
                );
            },
            _w = function(e) {
              if (e.setActive)
                try {
                  e.setActive();
                } catch (t) {
                  e.focus();
                }
              else e.focus();
            },
            Aw = function(e) {
              return ww(e) || Ew(e).isSome();
            },
            Rw = function(e) {
              return e.iframeElement && ww(fo.fromDom(e.iframeElement));
            },
            Dw = function(e) {
              var t = e.getBody();
              return t && Aw(fo.fromDom(t));
            },
            Bw = function(e) {
              return e.inline ? Dw(e) : Rw(e);
            },
            Ow = function(e) {
              var t = e.selection,
                n = e.settings.content_editable,
                r = e.getBody(),
                o = t.getRng();
              e.quirks.refreshContentEditable();
              var i = Sw(e, t.getNode());
              if (e.$.contains(r, i)) return _w(i), Tw(e, o), void Pw(e);
              void 0 !== e.bookmark &&
                !1 === Bw(e) &&
                PC.getRng(e).each(function(t) {
                  e.selection.setRng(t), (o = t);
                }),
                n || (ke.opera || _w(r), e.getWin().focus()),
                (ke.gecko || n) && (_w(r), Tw(e, o)),
                Pw(e);
            },
            Pw = function(e) {
              return e.editorManager.setActive(e);
            },
            Iw = function(e, t) {
              e.removed || (t ? Pw(e) : Ow(e));
            },
            Lw = { focus: Iw, hasFocus: Bw },
            Mw = function(e, t) {
              var n = t.dom();
              return n[e];
            },
            Fw = function(e, t) {
              return parseInt(Fo(t, e), 10);
            },
            Uw = i(Mw, "clientWidth"),
            jw = i(Mw, "clientHeight"),
            zw = i(Fw, "margin-top"),
            Vw = i(Fw, "margin-left"),
            Hw = function(e) {
              return e.dom().getBoundingClientRect();
            },
            qw = function(e, t, n) {
              var r = Uw(e),
                o = jw(e);
              return t >= 0 && n >= 0 && t <= r && n <= o;
            },
            $w = function(e, t, n, r) {
              var o = Hw(t),
                i = e ? o.left + t.dom().clientLeft + Vw(t) : 0,
                a = e ? o.top + t.dom().clientTop + zw(t) : 0,
                u = n - i,
                s = r - a;
              return { x: u, y: s };
            },
            Ww = function(e, t, n) {
              var r = fo.fromDom(e.getBody()),
                o = e.inline ? r : ui(r),
                i = $w(e.inline, o, t, n);
              return qw(o, i.x, i.y);
            },
            Yw = function(e) {
              return A.from(e).map(fo.fromDom);
            },
            Gw = function(e) {
              var t = e.inline ? e.getBody() : e.getContentAreaContainer();
              return Yw(t)
                .map(function(e) {
                  return ii(ai(e), e);
                })
                .getOr(!1);
            },
            Xw = { isXYInContentArea: Ww, isEditorAttachedToDom: Gw };
          function Zw() {
            var e = function() {
              throw new Error(
                "Theme did not provide a NotificationManager implementation."
              );
            };
            return { open: e, close: e, reposition: e, getArgs: e };
          }
          function Kw(e) {
            var t = [],
              n = function() {
                var t = e.theme;
                return t && t.getNotificationManagerImpl
                  ? t.getNotificationManagerImpl()
                  : Zw();
              },
              r = function() {
                return A.from(t[0]);
              },
              o = function(e, t) {
                return (
                  e.type === t.type &&
                  e.text === t.text &&
                  !e.progressBar &&
                  !e.timeout &&
                  !t.progressBar &&
                  !t.timeout
                );
              },
              i = function() {
                t.length > 0 && n().reposition(t);
              },
              a = function(e) {
                t.push(e);
              },
              u = function(e) {
                K(t, function(t) {
                  return t === e;
                }).each(function(e) {
                  t.splice(e, 1);
                });
              },
              s = function(r) {
                if (!e.removed && Xw.isEditorAttachedToDom(e))
                  return Z(t, function(e) {
                    return o(n().getArgs(e), r);
                  }).getOrThunk(function() {
                    e.editorManager.setActive(e);
                    var t = n().open(r, function() {
                      u(t), i();
                    });
                    return a(t), i(), t;
                  });
              },
              c = function() {
                r().each(function(e) {
                  n().close(e), u(e), i();
                });
              },
              l = function() {
                return t;
              },
              f = function(e) {
                e.on("SkinLoaded", function() {
                  var t = e.settings.service_message;
                  t && s({ text: t, type: "warning", timeout: 0, icon: "" });
                }),
                  e.on("ResizeEditor ResizeWindow", function() {
                    Ie.requestAnimationFrame(i);
                  }),
                  e.on("remove", function() {
                    q(t.slice(), function(e) {
                      n().close(e);
                    });
                  });
              };
            return f(e), { open: s, close: c, getNotifications: l };
          }
          function Jw() {
            var e = function() {
              throw new Error(
                "Theme did not provide a WindowManager implementation."
              );
            };
            return {
              open: e,
              alert: e,
              confirm: e,
              close: e,
              getParams: e,
              setParams: e
            };
          }
          function Qw(e) {
            var t = [],
              n = function() {
                var t = e.theme;
                return t && t.getWindowManagerImpl
                  ? t.getWindowManagerImpl()
                  : Jw();
              },
              r = function(e, t) {
                return function() {
                  return t ? t.apply(e, arguments) : void 0;
                };
              },
              o = function(t) {
                e.fire("OpenWindow", { win: t });
              },
              i = function(t) {
                e.fire("CloseWindow", { win: t });
              },
              a = function(e) {
                t.push(e), o(e);
              },
              u = function(n) {
                K(t, function(e) {
                  return e === n;
                }).each(function(r) {
                  t.splice(r, 1), i(n), 0 === t.length && e.focus();
                });
              },
              s = function() {
                return A.from(t[t.length - 1]);
              },
              c = function(t, r) {
                e.editorManager.setActive(e), PC.store(e);
                var o = n().open(t, r, u);
                return a(o), o;
              },
              l = function(e, t, o) {
                var i = n().alert(e, r(o || this, t), u);
                a(i);
              },
              f = function(e, t, o) {
                var i = n().confirm(e, r(o || this, t), u);
                a(i);
              },
              d = function() {
                s().each(function(e) {
                  n().close(e), u(e);
                });
              },
              m = function() {
                return s()
                  .map(n().getParams)
                  .getOr(null);
              },
              p = function(e) {
                s().each(function(t) {
                  n().setParams(t, e);
                });
              },
              g = function() {
                return t;
              };
            return (
              e.on("remove", function() {
                q(t.slice(0), function(e) {
                  n().close(e);
                });
              }),
              {
                windows: t,
                open: c,
                alert: l,
                confirm: f,
                close: d,
                getParams: m,
                setParams: p,
                getWindows: g
              }
            );
          }
          var ex = wu.PluginManager,
            tx = function(e, t) {
              for (var n in ex.urls) {
                var r = ex.urls[n] + "/plugin" + t + ".js";
                if (r === e) return n;
              }
              return null;
            },
            nx = function(e, t) {
              var n = tx(t, e.suffix);
              return n
                ? "Failed to load plugin: " + n + " from url " + t
                : "Failed to load plugin url: " + t;
            },
            rx = function(e, t) {
              e.notificationManager.open({ type: "error", text: t });
            },
            ox = function(e, t) {
              e._skinLoaded
                ? rx(e, t)
                : e.on("SkinLoaded", function() {
                    rx(e, t);
                  });
            },
            ix = function(e, t) {
              ox(e, "Failed to upload image: " + t);
            },
            ax = function(e, t) {
              ox(e, nx(e, t));
            },
            ux = function(e) {
              for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
              var r = window.console;
              r &&
                (r.error
                  ? r.error.apply(r, arguments)
                  : r.log.apply(r, arguments));
            },
            sx = {
              pluginLoadError: ax,
              uploadError: ix,
              displayError: ox,
              initError: ux
            },
            cx = wu.PluginManager,
            lx = wu.ThemeManager;
          function fx() {
            var e = he.getOrDie("XMLHttpRequest");
            return new e();
          }
          function dx(e, t) {
            var n = {},
              r = function(e, t) {
                return e
                  ? e.replace(/\/$/, "") + "/" + t.replace(/^\//, "")
                  : t;
              },
              o = function(e, n, o, i) {
                var a, u;
                (a = fx()),
                  a.open("POST", t.url),
                  (a.withCredentials = t.credentials),
                  (a.upload.onprogress = function(e) {
                    i((e.loaded / e.total) * 100);
                  }),
                  (a.onerror = function() {
                    o(
                      "Image upload failed due to a XHR Transport error. Code: " +
                        a.status
                    );
                  }),
                  (a.onload = function() {
                    var e;
                    a.status < 200 || a.status >= 300
                      ? o("HTTP Error: " + a.status)
                      : ((e = JSON.parse(a.responseText)),
                        e && "string" === typeof e.location
                          ? n(r(t.basePath, e.location))
                          : o("Invalid JSON: " + a.responseText));
                  }),
                  (u = new FormData()),
                  u.append("file", e.blob(), e.filename()),
                  a.send(u);
              },
              i = function() {
                return new _e(function(e) {
                  e([]);
                });
              },
              a = function(e, t) {
                return { url: t, blobInfo: e, status: !0 };
              },
              u = function(e, t) {
                return { url: "", blobInfo: e, status: !1, error: t };
              },
              s = function(e, t) {
                Mn.each(n[e], function(e) {
                  e(t);
                }),
                  delete n[e];
              },
              c = function(t, n, r) {
                return (
                  e.markPending(t.blobUri()),
                  new _e(function(o) {
                    var i,
                      c,
                      l = function() {};
                    try {
                      var f = function() {
                          i && (i.close(), (c = l));
                        },
                        d = function(n) {
                          f(),
                            e.markUploaded(t.blobUri(), n),
                            s(t.blobUri(), a(t, n)),
                            o(a(t, n));
                        },
                        m = function(n) {
                          f(),
                            e.removeFailed(t.blobUri()),
                            s(t.blobUri(), u(t, n)),
                            o(u(t, n));
                        };
                      (c = function(e) {
                        e < 0 ||
                          e > 100 ||
                          (i || (i = r()), i.progressBar.value(e));
                      }),
                        n(t, d, m, c);
                    } catch (p) {
                      o(u(t, p.message));
                    }
                  })
                );
              },
              l = function(e) {
                return e === o;
              },
              f = function(e) {
                var t = e.blobUri();
                return new _e(function(e) {
                  (n[t] = n[t] || []), n[t].push(e);
                });
              },
              d = function(n, r) {
                return (
                  (n = Mn.grep(n, function(t) {
                    return !e.isUploaded(t.blobUri());
                  })),
                  _e.all(
                    Mn.map(n, function(n) {
                      return e.isPending(n.blobUri())
                        ? f(n)
                        : c(n, t.handler, r);
                    })
                  )
                );
              },
              m = function(e, n) {
                return !t.url && l(t.handler) ? i() : d(e, n);
              };
            return !1 === M(t.handler) && (t.handler = o), { upload: m };
          }
          function mx() {
            var e = he.getOrDie("FileReader");
            return new e();
          }
          function px(e) {
            var t = he.getOrDie("Uint8Array");
            return new t(e);
          }
          var gx = function(e) {
              var t = he.getOrDie("requestAnimationFrame");
              t(e);
            },
            hx = function(e) {
              var t = he.getOrDie("atob");
              return t(e);
            },
            vx = { atob: hx, requestAnimationFrame: gx },
            bx = function(e) {
              return new _e(function(t, n) {
                var r = function() {
                  n(
                    "Cannot convert " +
                      e +
                      " to Blob. Resource might not exist or is inaccessible."
                  );
                };
                try {
                  var o = fx();
                  o.open("GET", e, !0),
                    (o.responseType = "blob"),
                    (o.onload = function() {
                      200 === this.status ? t(this.response) : r();
                    }),
                    (o.onerror = r),
                    o.send();
                } catch (i) {
                  r();
                }
              });
            },
            yx = function(e) {
              var t,
                n,
                r = decodeURIComponent(e).split(",");
              return (
                (n = /data:([^;]+)/.exec(r[0])),
                n && (t = n[1]),
                { type: t, data: r[1] }
              );
            },
            Cx = function(e) {
              return new _e(function(t) {
                var n,
                  r,
                  o,
                  i = yx(e);
                try {
                  n = vx.atob(i.data);
                } catch (qP) {
                  return void t(new Blob([]));
                }
                for (r = px(n.length), o = 0; o < r.length; o++)
                  r[o] = n.charCodeAt(o);
                t(new Blob([r], { type: i.type }));
              });
            },
            wx = function(e) {
              return 0 === e.indexOf("blob:")
                ? bx(e)
                : 0 === e.indexOf("data:")
                  ? Cx(e)
                  : null;
            },
            xx = function(e) {
              return new _e(function(t) {
                var n = mx();
                (n.onloadend = function() {
                  t(n.result);
                }),
                  n.readAsDataURL(e);
              });
            },
            Ex = { uriToBlob: wx, blobToDataUri: xx, parseDataUri: yx },
            Sx = 0,
            Nx = function(e) {
              return (e || "blobid") + Sx++;
            },
            kx = function(e, t, n, r) {
              var o, i;
              if (0 === t.src.indexOf("blob:"))
                return (
                  (i = e.getByUri(t.src)),
                  void (i
                    ? n({ image: t, blobInfo: i })
                    : Ex.uriToBlob(t.src).then(
                        function(r) {
                          Ex.blobToDataUri(r).then(function(a) {
                            (o = Ex.parseDataUri(a).data),
                              (i = e.create(Nx(), r, o)),
                              e.add(i),
                              n({ image: t, blobInfo: i });
                          });
                        },
                        function(e) {
                          r(e);
                        }
                      ))
                );
              (o = Ex.parseDataUri(t.src).data),
                (i = e.findFirst(function(e) {
                  return e.base64() === o;
                })),
                i
                  ? n({ image: t, blobInfo: i })
                  : Ex.uriToBlob(t.src).then(
                      function(r) {
                        (i = e.create(Nx(), r, o)),
                          e.add(i),
                          n({ image: t, blobInfo: i });
                      },
                      function(e) {
                        r(e);
                      }
                    );
            },
            Tx = function(e) {
              return e ? le(e.getElementsByTagName("img")) : [];
            };
          function _x(e, t) {
            var n = {},
              o = function(o, i) {
                var a;
                i || (i = r(!0)),
                  (a = Y(Tx(o), function(t) {
                    var n = t.src;
                    return (
                      !!ke.fileApi &&
                      (!t.hasAttribute("data-mce-bogus") &&
                        (!t.hasAttribute("data-mce-placeholder") &&
                          (!(!n || n === ke.transparentSrc) &&
                            (0 === n.indexOf("blob:")
                              ? !e.isUploaded(n) && i(t)
                              : 0 === n.indexOf("data:") && i(t)))))
                    );
                  }));
                var u = H(a, function(e) {
                  if (n[e.src])
                    return new _e(function(t) {
                      n[e.src].then(function(n) {
                        if ("string" === typeof n) return n;
                        t({ image: e, blobInfo: n.blobInfo });
                      });
                    });
                  var r = new _e(function(n, r) {
                    kx(t, e, n, r);
                  })
                    .then(function(e) {
                      return delete n[e.image.src], e;
                    })
                    .catch(function(t) {
                      return delete n[e.src], t;
                    });
                  return (n[e.src] = r), r;
                });
                return _e.all(u);
              };
            return { findAll: o };
          }
          var Ax = 0,
            Rx = function() {
              var e = function() {
                  return Math.round(4294967295 * Math.random()).toString(36);
                },
                t = new Date().getTime();
              return "s" + t.toString(36) + e() + e() + e();
            },
            Dx = function(e) {
              return e + Ax++ + Rx();
            },
            Bx = { uuid: Dx };
          function Ox() {
            var e = [],
              t = function(e) {
                var t = {
                  "image/jpeg": "jpg",
                  "image/jpg": "jpg",
                  "image/gif": "gif",
                  "image/png": "png"
                };
                return t[e.toLowerCase()] || "dat";
              },
              n = function(e, t, n, r) {
                if (B(e)) {
                  var i = e;
                  return o({ id: i, name: r, blob: t, base64: n });
                }
                if (O(e)) return o(e);
                throw new Error("Unknown input type");
              },
              o = function(e) {
                var n, o;
                if (!e.blob || !e.base64)
                  throw new Error(
                    "blob and base64 representations of the image are required for BlobInfo to be created"
                  );
                return (
                  (n = e.id || Bx.uuid("blobid")),
                  (o = e.name || n),
                  {
                    id: r(n),
                    name: r(o),
                    filename: r(o + "." + t(e.blob.type)),
                    blob: r(e.blob),
                    base64: r(e.base64),
                    blobUri: r(e.blobUri || Ce.createObjectURL(e.blob)),
                    uri: r(e.uri)
                  }
                );
              },
              i = function(t) {
                a(t.id()) || e.push(t);
              },
              a = function(e) {
                return u(function(t) {
                  return t.id() === e;
                });
              },
              u = function(t) {
                return Y(e, t)[0];
              },
              s = function(e) {
                return u(function(t) {
                  return t.blobUri() === e;
                });
              },
              c = function(t) {
                e = Y(e, function(e) {
                  return (
                    e.blobUri() !== t || (Ce.revokeObjectURL(e.blobUri()), !1)
                  );
                });
              },
              l = function() {
                q(e, function(e) {
                  Ce.revokeObjectURL(e.blobUri());
                }),
                  (e = []);
              };
            return {
              create: n,
              add: i,
              get: a,
              getByUri: s,
              findFirst: u,
              removeByUri: c,
              destroy: l
            };
          }
          function Px() {
            var e = 1,
              t = 2,
              n = {},
              r = function(e, t) {
                return { status: e, resultUri: t };
              },
              o = function(e) {
                return e in n;
              },
              i = function(e) {
                var t = n[e];
                return t ? t.resultUri : null;
              },
              a = function(t) {
                return !!o(t) && n[t].status === e;
              },
              u = function(e) {
                return !!o(e) && n[e].status === t;
              },
              s = function(t) {
                n[t] = r(e, null);
              },
              c = function(e, o) {
                n[e] = r(t, o);
              },
              l = function(e) {
                delete n[e];
              },
              f = function() {
                n = {};
              };
            return {
              hasBlobUri: o,
              getResultUri: i,
              isPending: a,
              isUploaded: u,
              markPending: s,
              markUploaded: c,
              removeFailed: l,
              destroy: f
            };
          }
          function Ix(e) {
            var t,
              n,
              r = Ox(),
              o = Px(),
              i = [],
              a = function(t) {
                return function(n) {
                  return e.selection ? t(n) : [];
                };
              },
              u = function() {
                return "?" + new Date().getTime();
              },
              s = function(e, t, n) {
                var r = 0;
                do {
                  (r = e.indexOf(t, r)),
                    -1 !== r &&
                      ((e = e.substring(0, r) + n + e.substr(r + t.length)),
                      (r += n.length - t.length + 1));
                } while (-1 !== r);
                return e;
              },
              c = function(e, t, n) {
                return (
                  (e = s(e, 'src="' + t + '"', 'src="' + n + '"')),
                  (e = s(
                    e,
                    'data-mce-src="' + t + '"',
                    'data-mce-src="' + n + '"'
                  )),
                  e
                );
              },
              l = function(t, n) {
                q(e.undoManager.data, function(e) {
                  "fragmented" === e.type
                    ? (e.fragments = H(e.fragments, function(e) {
                        return c(e, t, n);
                      }))
                    : (e.content = c(e.content, t, n));
                });
              },
              f = function() {
                return e.notificationManager.open({
                  text: e.translate("Image uploading..."),
                  type: "info",
                  timeout: -1,
                  progressBar: !0
                });
              },
              d = function(t, n) {
                r.removeByUri(t.src),
                  l(t.src, n),
                  e.$(t).attr({
                    src: Ty.shouldReuseFileName(e) ? n + u() : n,
                    "data-mce-src": e.convertURL(n, "src")
                  });
              },
              m = function(n) {
                return (
                  t ||
                    (t = dx(o, {
                      url: Ty.getImageUploadUrl(e),
                      basePath: Ty.getImageUploadBasePath(e),
                      credentials: Ty.getImagesUploadCredentials(e),
                      handler: Ty.getImagesUploadHandler(e)
                    })),
                  v().then(
                    a(function(r) {
                      var o;
                      return (
                        (o = H(r, function(e) {
                          return e.blobInfo;
                        })),
                        t.upload(o, f).then(
                          a(function(t) {
                            var o = H(t, function(t, n) {
                              var o = r[n].image;
                              return (
                                t.status && Ty.shouldReplaceBlobUris(e)
                                  ? d(o, t.url)
                                  : t.error && sx.uploadError(e, t.error),
                                { element: o, status: t.status }
                              );
                            });
                            return n && n(o), o;
                          })
                        )
                      );
                    })
                  )
                );
              },
              p = function(t) {
                if (Ty.isAutomaticUploadsEnabled(e)) return m(t);
              },
              g = function(t) {
                if (
                  !1 ===
                  ne(i, function(e) {
                    return e(t);
                  })
                )
                  return !1;
                if (0 === t.getAttribute("src").indexOf("data:")) {
                  var n = Ty.getImagesDataImgFilter(e);
                  return n(t);
                }
                return !0;
              },
              h = function(e) {
                i.push(e);
              },
              v = function() {
                return (
                  n || (n = _x(o, r)),
                  n.findAll(e.getBody(), g).then(
                    a(function(t) {
                      return (
                        (t = Y(t, function(t) {
                          return (
                            "string" !== typeof t || (sx.displayError(e, t), !1)
                          );
                        })),
                        q(t, function(e) {
                          l(e.image.src, e.blobInfo.blobUri()),
                            (e.image.src = e.blobInfo.blobUri()),
                            e.image.removeAttribute("data-mce-src");
                        }),
                        t
                      );
                    })
                  )
                );
              },
              b = function() {
                r.destroy(), o.destroy(), (n = t = null);
              },
              y = function(t) {
                return t.replace(/src="(blob:[^"]+)"/g, function(t, n) {
                  var i = o.getResultUri(n);
                  if (i) return 'src="' + i + '"';
                  var a = r.getByUri(n);
                  if (
                    (a ||
                      (a = X(
                        e.editorManager.get(),
                        function(e, t) {
                          return (
                            e ||
                            (t.editorUpload &&
                              t.editorUpload.blobCache.getByUri(n))
                          );
                        },
                        null
                      )),
                    a)
                  ) {
                    var u = a.blob();
                    return (
                      'src="data:' + u.type + ";base64," + a.base64() + '"'
                    );
                  }
                  return t;
                });
              };
            return (
              e.on("setContent", function() {
                Ty.isAutomaticUploadsEnabled(e) ? p() : v();
              }),
              e.on("RawSaveContent", function(e) {
                e.content = y(e.content);
              }),
              e.on("getContent", function(e) {
                e.source_view ||
                  "raw" === e.format ||
                  (e.content = y(e.content));
              }),
              e.on("PostRender", function() {
                e.parser.addNodeFilter("img", function(e) {
                  q(e, function(e) {
                    var t = e.attr("src");
                    if (!r.getByUri(t)) {
                      var n = o.getResultUri(t);
                      n && e.attr("src", n);
                    }
                  });
                });
              }),
              {
                blobCache: r,
                addFilter: h,
                uploadImages: m,
                uploadImagesAuto: p,
                scanForImages: v,
                destroy: b
              }
            );
          }
          var Lx = function(e, t) {
              return e.hasOwnProperty(t.nodeName);
            },
            Mx = function(e, t) {
              return (
                !!ka.isText(t) ||
                (!!ka.isElement(t) && (!Lx(e, t) && !xd.isBookmarkNode(t)))
              );
            },
            Fx = function(e, t, n) {
              return V(Ng.parents(fo.fromDom(n), fo.fromDom(t)), function(t) {
                return Lx(e, t.dom());
              });
            },
            Ux = function(e, t) {
              if (ka.isText(t)) {
                if (0 === t.nodeValue.length) return !0;
                if (
                  /^\s+$/.test(t.nodeValue) &&
                  (!t.nextSibling || Lx(e, t.nextSibling))
                )
                  return !0;
              }
              return !1;
            },
            jx = function(e) {
              var t,
                n,
                r,
                o,
                i,
                a,
                u,
                s,
                c,
                l,
                f,
                d = e.settings,
                m = e.dom,
                p = e.selection,
                g = e.schema,
                h = g.getBlockElements(),
                v = p.getStart(),
                b = e.getBody();
              if (
                ((f = d.forced_root_block),
                v &&
                  ka.isElement(v) &&
                  f &&
                  ((l = b.nodeName.toLowerCase()),
                  g.isValidChild(l, f.toLowerCase()) && !Fx(h, b, v)))
              ) {
                (t = p.getRng()),
                  (n = t.startContainer),
                  (r = t.startOffset),
                  (o = t.endContainer),
                  (i = t.endOffset),
                  (c = Lw.hasFocus(e)),
                  (v = b.firstChild);
                while (v)
                  if (Mx(h, v)) {
                    if (Ux(h, v)) {
                      (u = v), (v = v.nextSibling), m.remove(u);
                      continue;
                    }
                    a ||
                      ((a = m.create(f, e.settings.forced_root_block_attrs)),
                      v.parentNode.insertBefore(a, v),
                      (s = !0)),
                      (u = v),
                      (v = v.nextSibling),
                      a.appendChild(u);
                  } else (a = null), (v = v.nextSibling);
                s &&
                  c &&
                  (t.setStart(n, r),
                  t.setEnd(o, i),
                  p.setRng(t),
                  e.nodeChanged());
              }
            },
            zx = function(e) {
              e.settings.forced_root_block && e.on("NodeChange", i(jx, e));
            },
            Vx = { setup: zx },
            Hx = function(e) {
              var t = e.startContainer,
                n = e.startOffset;
              return ka.isText(t)
                ? 0 === n
                  ? A.some(fo.fromDom(t))
                  : A.none()
                : A.from(t.childNodes[n]).map(fo.fromDom);
            },
            qx = function(e) {
              var t = e.endContainer,
                n = e.endOffset;
              return ka.isText(t)
                ? n === t.data.length
                  ? A.some(fo.fromDom(t))
                  : A.none()
                : A.from(t.childNodes[n - 1]).map(fo.fromDom);
            },
            $x = function(e) {
              return vi(e).fold(r([e]), function(t) {
                return [e].concat($x(t));
              });
            },
            Wx = function(e) {
              return bi(e).fold(r([e]), function(t) {
                return "br" === ho(t)
                  ? fi(t)
                      .map(function(t) {
                        return [e].concat(Wx(t));
                      })
                      .getOr([])
                  : [e].concat(Wx(t));
              });
            },
            Yx = function(e, t) {
              return pc([Hx(t), qx(t)], function(t, n) {
                var r = Z($x(e), i(ti, t)),
                  o = Z(Wx(e), i(ti, n));
                return r.isSome() && o.isSome();
              }).getOr(!1);
            },
            Gx = function(e, t, n, r) {
              var o = n,
                i = new Fi(n, o),
                a = e.schema.getNonEmptyElements();
              do {
                if (3 === n.nodeType && 0 !== Mn.trim(n.nodeValue).length)
                  return void (r
                    ? t.setStart(n, 0)
                    : t.setEnd(n, n.nodeValue.length));
                if (a[n.nodeName] && !/^(TD|TH)$/.test(n.nodeName))
                  return void (r
                    ? t.setStartBefore(n)
                    : "BR" === n.nodeName
                      ? t.setEndBefore(n)
                      : t.setEndAfter(n));
                if (ke.ie && ke.ie < 11 && e.isBlock(n) && e.isEmpty(n))
                  return void (r ? t.setStart(n, 0) : t.setEnd(n, 0));
              } while ((n = r ? i.next() : i.prev()));
              "BODY" === o.nodeName &&
                (r ? t.setStart(o, 0) : t.setEnd(o, o.childNodes.length));
            },
            Xx = function(e) {
              var t = e.selection.getSel();
              return t && t.rangeCount > 0;
            };
          function Zx(e) {
            var t,
              n = [],
              r = function(t) {
                var r, o;
                if (
                  ((o = e
                    .$(t)
                    .parentsUntil(e.getBody())
                    .add(t)),
                  o.length === n.length)
                ) {
                  for (r = o.length; r >= 0; r--) if (o[r] !== n[r]) break;
                  if (-1 === r) return (n = o), !0;
                }
                return (n = o), !1;
              };
            "onselectionchange" in e.getDoc() ||
              e.on("NodeChange Click MouseUp KeyUp Focus", function(n) {
                var r, o;
                (r = e.selection.getRng()),
                  (o = {
                    startContainer: r.startContainer,
                    startOffset: r.startOffset,
                    endContainer: r.endContainer,
                    endOffset: r.endOffset
                  }),
                  ("nodechange" !== n.type && qy.isEq(o, t)) ||
                    e.fire("SelectionChange"),
                  (t = o);
              }),
              e.on("contextmenu", function() {
                e.fire("SelectionChange");
              }),
              e.on("SelectionChange", function() {
                var t = e.selection.getStart(!0);
                !t ||
                  (!ke.range && e.selection.isCollapsed()) ||
                  (Xx(e) &&
                    !r(t) &&
                    e.dom.isChildOf(t, e.getBody()) &&
                    e.nodeChanged({ selectionChange: !0 }));
              }),
              e.on("MouseUp", function(t) {
                !t.isDefaultPrevented() &&
                  Xx(e) &&
                  ("IMG" === e.selection.getNode().nodeName
                    ? Ie.setEditorTimeout(e, function() {
                        e.nodeChanged();
                      })
                    : e.nodeChanged());
              }),
              (this.nodeChanged = function(t) {
                var n,
                  r,
                  o,
                  i = e.selection;
                e.initialized &&
                  i &&
                  !e.settings.disable_nodechange &&
                  !e.readonly &&
                  ((o = e.getBody()),
                  (n = i.getStart(!0) || o),
                  (n.ownerDocument === e.getDoc() && e.dom.isChildOf(n, o)) ||
                    (n = o),
                  (r = []),
                  e.dom.getParent(n, function(e) {
                    if (e === o) return !0;
                    r.push(e);
                  }),
                  (t = t || {}),
                  (t.element = n),
                  (t.parents = r),
                  e.fire("NodeChange", t));
              });
          }
          var Kx,
            Jx = function(e) {
              var t, n, r, o;
              return (
                (o = e.getBoundingClientRect()),
                (t = e.ownerDocument),
                (n = t.documentElement),
                (r = t.defaultView),
                {
                  top: o.top + r.pageYOffset - n.clientTop,
                  left: o.left + r.pageXOffset - n.clientLeft
                }
              );
            },
            Qx = function(e) {
              return e.inline ? Jx(e.getBody()) : { left: 0, top: 0 };
            },
            eE = function(e) {
              var t = e.getBody();
              return e.inline
                ? { left: t.scrollLeft, top: t.scrollTop }
                : { left: 0, top: 0 };
            },
            tE = function(e) {
              var t = e.getBody(),
                n = e.getDoc().documentElement,
                r = { left: t.scrollLeft, top: t.scrollTop },
                o = {
                  left: t.scrollLeft || n.scrollLeft,
                  top: t.scrollTop || n.scrollTop
                };
              return e.inline ? r : o;
            },
            nE = function(e, t) {
              if (t.target.ownerDocument !== e.getDoc()) {
                var n = Jx(e.getContentAreaContainer()),
                  r = tE(e);
                return {
                  left: t.pageX - n.left + r.left,
                  top: t.pageY - n.top + r.top
                };
              }
              return { left: t.pageX, top: t.pageY };
            },
            rE = function(e, t, n) {
              return {
                pageX: n.left - e.left + t.left,
                pageY: n.top - e.top + t.top
              };
            },
            oE = function(e, t) {
              return rE(Qx(e), eE(e), nE(e, t));
            },
            iE = { calc: oE },
            aE = ka.isContentEditableFalse,
            uE = ka.isContentEditableTrue,
            sE = function(e, t) {
              return aE(t) && t !== e;
            },
            cE = function(e, t, n) {
              return t !== n && !e.dom.isChildOf(t, n) && !aE(t);
            },
            lE = function(e) {
              var t = e.cloneNode(!0);
              return t.removeAttribute("data-mce-selected"), t;
            },
            fE = function(e, t, n, r) {
              var o = t.cloneNode(!0);
              e.dom.setStyles(o, { width: n, height: r }),
                e.dom.setAttrib(o, "data-mce-selected", null);
              var i = e.dom.create("div", {
                class: "mce-drag-container",
                "data-mce-bogus": "all",
                unselectable: "on",
                contenteditable: "false"
              });
              return (
                e.dom.setStyles(i, {
                  position: "absolute",
                  opacity: 0.5,
                  overflow: "hidden",
                  border: 0,
                  padding: 0,
                  margin: 0,
                  width: n,
                  height: r
                }),
                e.dom.setStyles(o, { margin: 0, boxSizing: "border-box" }),
                i.appendChild(o),
                i
              );
            },
            dE = function(e, t) {
              e.parentNode !== t && t.appendChild(e);
            },
            mE = function(e, t, n, r, o, i) {
              var a = 0,
                u = 0;
              (e.style.left = t.pageX + "px"),
                (e.style.top = t.pageY + "px"),
                t.pageX + n > o && (a = t.pageX + n - o),
                t.pageY + r > i && (u = t.pageY + r - i),
                (e.style.width = n - a + "px"),
                (e.style.height = r - u + "px");
            },
            pE = function(e) {
              e && e.parentNode && e.parentNode.removeChild(e);
            },
            gE = function(e) {
              return 0 === e.button;
            },
            hE = function(e) {
              return e.element;
            },
            vE = function(e, t) {
              return { pageX: t.pageX - e.relX, pageY: t.pageY + 5 };
            },
            bE = function(e, t) {
              return function(n) {
                if (gE(n)) {
                  var r = Z(t.dom.getParents(n.target), bc.or(aE, uE)).getOr(
                    null
                  );
                  if (sE(t.getBody(), r)) {
                    var o = t.dom.getPos(r),
                      i = t.getBody(),
                      a = t.getDoc().documentElement;
                    (e.element = r),
                      (e.screenX = n.screenX),
                      (e.screenY = n.screenY),
                      (e.maxX = (t.inline ? i.scrollWidth : a.offsetWidth) - 2),
                      (e.maxY =
                        (t.inline ? i.scrollHeight : a.offsetHeight) - 2),
                      (e.relX = n.pageX - o.x),
                      (e.relY = n.pageY - o.y),
                      (e.width = r.offsetWidth),
                      (e.height = r.offsetHeight),
                      (e.ghost = fE(t, r, e.width, e.height));
                  }
                }
              };
            },
            yE = function(e, t) {
              var n = Ie.throttle(function(e, n) {
                t._selectionOverrides.hideFakeCaret(),
                  t.selection.placeCaretAt(e, n);
              }, 0);
              return function(r) {
                var o = Math.max(
                  Math.abs(r.screenX - e.screenX),
                  Math.abs(r.screenY - e.screenY)
                );
                if (hE(e) && !e.dragging && o > 10) {
                  var i = t.fire("dragstart", { target: e.element });
                  if (i.isDefaultPrevented()) return;
                  (e.dragging = !0), t.focus();
                }
                if (e.dragging) {
                  var a = vE(e, iE.calc(t, r));
                  dE(e.ghost, t.getBody()),
                    mE(e.ghost, a, e.width, e.height, e.maxX, e.maxY),
                    n(r.clientX, r.clientY);
                }
              };
            },
            CE = function(e) {
              var t = e.getSel().getRangeAt(0),
                n = t.startContainer;
              return 3 === n.nodeType ? n.parentNode : n;
            },
            wE = function(e, t) {
              return function(n) {
                if (e.dragging && cE(t, CE(t.selection), e.element)) {
                  var r = lE(e.element),
                    o = t.fire("drop", {
                      targetClone: r,
                      clientX: n.clientX,
                      clientY: n.clientY
                    });
                  o.isDefaultPrevented() ||
                    ((r = o.targetClone),
                    t.undoManager.transact(function() {
                      pE(e.element),
                        t.insertContent(t.dom.getOuterHTML(r)),
                        t._selectionOverrides.hideFakeCaret();
                    }));
                }
                EE(e);
              };
            },
            xE = function(e, t) {
              return function() {
                e.dragging && t.fire("dragend"), EE(e);
              };
            },
            EE = function(e) {
              (e.dragging = !1), (e.element = null), pE(e.ghost);
            },
            SE = function(e) {
              var t,
                n,
                r,
                o,
                i,
                a,
                u = {};
              (t = pu.DOM),
                (a = document),
                (n = bE(u, e)),
                (r = yE(u, e)),
                (o = wE(u, e)),
                (i = xE(u, e)),
                e.on("mousedown", n),
                e.on("mousemove", r),
                e.on("mouseup", o),
                t.bind(a, "mousemove", r),
                t.bind(a, "mouseup", i),
                e.on("remove", function() {
                  t.unbind(a, "mousemove", r), t.unbind(a, "mouseup", i);
                });
            },
            NE = function(e) {
              e.on("drop", function(t) {
                var n =
                  "undefined" !== typeof t.clientX
                    ? e.getDoc().elementFromPoint(t.clientX, t.clientY)
                    : null;
                (aE(n) || aE(e.dom.getContentEditableParent(n))) &&
                  t.preventDefault();
              });
            },
            kE = function(e) {
              SE(e), NE(e);
            },
            TE = { init: kE },
            _E = function(e) {
              var t = function(t) {
                return H(t, function(t) {
                  return (t = ec(t)), (t.node = e), t;
                });
              };
              if (ka.isElement(e)) return t(e.getClientRects());
              if (ka.isText(e)) {
                var n = e.ownerDocument.createRange();
                return (
                  n.setStart(e, 0),
                  n.setEnd(e, e.data.length),
                  t(n.getClientRects())
                );
              }
            },
            AE = function(e) {
              return X(
                e,
                function(e, t) {
                  return e.concat(_E(t));
                },
                []
              );
            };
          (function(e) {
            (e[(e["Up"] = -1)] = "Up"), (e[(e["Down"] = 1)] = "Down");
          })(Kx || (Kx = {}));
          var RE = function(e, t, n, r) {
              while ((r = rf(r, e, Js, t))) if (n(r)) return;
            },
            DE = function(e, t, n, r, o, i) {
              var a,
                u,
                s = 0,
                c = [],
                l = function(r) {
                  var i, a, l;
                  for (
                    l = AE([r]), -1 === e && (l = l.reverse()), i = 0;
                    i < l.length;
                    i++
                  )
                    if (((a = l[i]), !n(a, u))) {
                      if (
                        (c.length > 0 && t(a, Sn.last(c)) && s++,
                        (a.line = s),
                        o(a))
                      )
                        return !0;
                      c.push(a);
                    }
                };
              return (
                (u = Sn.last(i.getClientRects())),
                u ? ((a = i.getNode()), l(a), RE(e, r, l, a), c) : c
              );
            },
            BE = function(e, t) {
              return t.line > e;
            },
            OE = function(e, t) {
              return t.line === e;
            },
            PE = i(DE, Kx.Up, oc, ic),
            IE = i(DE, Kx.Down, ic, oc),
            LE = function(e, t, n, r) {
              var o,
                i,
                a,
                u,
                s,
                c,
                l = Uf(t),
                f = [],
                d = 0,
                m = function(e) {
                  return Sn.last(e.getClientRects());
                };
              1 === e
                ? ((o = l.next), (i = ic), (a = oc), (u = zc.after(r)))
                : ((o = l.prev), (i = oc), (a = ic), (u = zc.before(r))),
                (c = m(u));
              do {
                if (u.isVisible() && ((s = m(u)), !a(s, c))) {
                  if (
                    (f.length > 0 && i(s, Sn.last(f)) && d++,
                    (s = ec(s)),
                    (s.position = u),
                    (s.line = d),
                    n(s))
                  )
                    return f;
                  f.push(s);
                }
              } while ((u = o(u)));
              return f;
            },
            ME = function(e) {
              return function(t) {
                return BE(e, t);
              };
            },
            FE = function(e) {
              return function(t) {
                return OE(e, t);
              };
            },
            UE = ka.isContentEditableFalse,
            jE = rf,
            zE = function(e, t) {
              return Math.abs(e.left - t);
            },
            VE = function(e, t) {
              return Math.abs(e.right - t);
            },
            HE = function(e, t) {
              return e >= t.left && e <= t.right;
            },
            qE = function(e, t) {
              return Sn.reduce(e, function(e, n) {
                var r, o;
                return (
                  (r = Math.min(zE(e, t), VE(e, t))),
                  (o = Math.min(zE(n, t), VE(n, t))),
                  HE(t, n)
                    ? n
                    : HE(t, e)
                      ? e
                      : o === r && UE(n.node)
                        ? n
                        : o < r
                          ? n
                          : e
                );
              });
            },
            $E = function(e, t, n, r) {
              while ((r = jE(r, e, Js, t))) if (n(r)) return;
            },
            WE = function(e, t) {
              var n = [],
                r = function(e, r) {
                  var o;
                  return (
                    (o = Y(AE([r]), function(n) {
                      return !e(n, t);
                    })),
                    (n = n.concat(o)),
                    0 === o.length
                  );
                };
              return (
                n.push(t),
                $E(Kx.Up, e, i(r, oc), t.node),
                $E(Kx.Down, e, i(r, ic), t.node),
                n
              );
            },
            YE = function(e) {
              return Y(le(e.getElementsByTagName("*")), Hl);
            },
            GE = function(e, t) {
              return { node: e.node, before: zE(e, t) < VE(e, t) };
            },
            XE = function(e, t, n) {
              var r,
                o = AE(YE(e)),
                i = Y(o, function(e) {
                  return n >= e.top && n <= e.bottom;
                });
              return (
                (r = qE(i, t)),
                r && ((r = qE(WE(e, r), t)), r && Hl(r.node)) ? GE(r, t) : null
              );
            },
            ZE = function(e, t, n) {
              return (
                !n.collapsed &&
                X(
                  n.getClientRects(),
                  function(n, r) {
                    return n || ac(r, e, t);
                  },
                  !1
                )
              );
            },
            KE = { isXYWithinRange: ZE },
            JE = ka.isContentEditableTrue,
            QE = ka.isContentEditableFalse,
            eS = function(e, t, n, r, o) {
              return t._selectionOverrides.showCaret(e, n, r, o);
            },
            tS = function(e) {
              var t = e.ownerDocument.createRange();
              return t.selectNode(e), t;
            },
            nS = function(e, t) {
              var n = e.fire("BeforeObjectSelected", { target: t });
              return n.isDefaultPrevented() ? null : tS(t);
            },
            rS = function(e, t, n) {
              var r = mf(1, e.getBody(), t),
                o = zc.fromRangeStart(r),
                i = o.getNode();
              if (QE(i)) return eS(1, e, i, !o.isAtEnd(), !1);
              var a = o.getNode(!0);
              if (QE(a)) return eS(1, e, a, !1, !1);
              var u = e.dom.getParent(o.getNode(), function(e) {
                return QE(e) || JE(e);
              });
              return QE(u) ? eS(1, e, u, !1, n) : null;
            },
            oS = function(e, t, n) {
              if (!t || !t.collapsed) return t;
              var r = rS(e, t, n);
              return r || t;
            },
            iS = function(e) {
              var t = Du(function() {
                if (!e.removed) {
                  var t = e.selection.getRng();
                  if (t.collapsed) {
                    var n = oS(e, e.selection.getRng(), !1);
                    e.selection.setRng(n);
                  }
                }
              }, 0);
              e.on("focus", function() {
                t.throttle();
              }),
                e.on("blur", function() {
                  t.cancel();
                });
            },
            aS = { setup: iS },
            uS = {
              BACKSPACE: 8,
              DELETE: 46,
              DOWN: 40,
              ENTER: 13,
              LEFT: 37,
              RIGHT: 39,
              SPACEBAR: 32,
              TAB: 9,
              UP: 38,
              modifierPressed: function(e) {
                return (
                  e.shiftKey || e.ctrlKey || e.altKey || this.metaKeyPressed(e)
                );
              },
              metaKeyPressed: function(e) {
                return ke.mac ? e.metaKey : e.ctrlKey && !e.altKey;
              }
            },
            sS = ka.isContentEditableTrue,
            cS = ka.isContentEditableFalse,
            lS = yf,
            fS = bf,
            dS = function(e, t) {
              var n = e.getBody();
              while (t && t !== n) {
                if (sS(t) || cS(t)) return t;
                t = t.parentNode;
              }
              return null;
            },
            mS = function(e) {
              var t,
                n = function(t) {
                  return e.dom.isBlock(t);
                },
                r = e.getBody(),
                o = zl(e.getBody(), n, function() {
                  return Lw.hasFocus(e);
                }),
                i = "sel-" + e.dom.uniqueId(),
                a = function(t) {
                  return e.dom.hasClass(t, "mce-offscreen-selection");
                },
                u = function() {
                  var t = e.dom.get(i);
                  return t ? t.getElementsByTagName("*")[0] : t;
                },
                s = function(t) {
                  t && e.selection.setRng(t);
                },
                c = function() {
                  return e.selection.getRng();
                },
                l = function(t, n, r, i) {
                  var a;
                  return (
                    void 0 === i && (i = !0),
                    (a = e.fire("ShowCaret", {
                      target: n,
                      direction: t,
                      before: r
                    })),
                    a.isDefaultPrevented()
                      ? null
                      : (i && e.selection.scrollIntoView(n, -1 === t),
                        o.show(r, n))
                  );
                },
                f = function(e, t) {
                  return (
                    (t = mf(e, r, t)),
                    -1 === e ? zc.fromRangeStart(t) : zc.fromRangeEnd(t)
                  );
                },
                d = function(t) {
                  t.hasAttribute("data-mce-caret") &&
                    (Ls(t), s(c()), e.selection.scrollIntoView(t[0]));
                },
                m = function() {
                  e.on("mouseup", function(t) {
                    var n = c();
                    n.collapsed &&
                      Xw.isXYInContentArea(e, t.clientX, t.clientY) &&
                      s(rS(e, n, !1));
                  }),
                    e.on("click", function(t) {
                      var n;
                      (n = dS(e, t.target)),
                        n &&
                          (cS(n) && (t.preventDefault(), e.focus()),
                          sS(n) &&
                            e.dom.isChildOf(n, e.selection.getNode()) &&
                            b());
                    }),
                    e.on("blur NewBlock", function() {
                      b();
                    }),
                    e.on("ResizeWindow FullscreenStateChanged", function() {
                      return o.reposition();
                    });
                  var n = function(e) {
                      var t = !1;
                      e.on("touchstart", function() {
                        t = !1;
                      }),
                        e.on("touchmove", function() {
                          t = !0;
                        }),
                        e.on("touchend", function(n) {
                          var r = dS(e, n.target);
                          cS(r) && (t || (n.preventDefault(), v(nS(e, r))));
                        });
                    },
                    i = function(e) {
                      var t = Uf(e);
                      if (!e.firstChild) return !1;
                      var n = zc.before(e.firstChild),
                        r = t.next(n);
                      return r && !fS(r) && !lS(r);
                    },
                    f = function(t, n) {
                      var r = e.dom.getParent(t, e.dom.isBlock),
                        o = e.dom.getParent(n, e.dom.isBlock);
                      return r === o;
                    },
                    d = function(t, n) {
                      var r = e.dom.getParent(t, e.dom.isBlock),
                        o = e.dom.getParent(n, e.dom.isBlock);
                      return (
                        !(
                          !r ||
                          !e.dom.isChildOf(r, o) ||
                          !1 !== cS(dS(e, r))
                        ) ||
                        (r && !f(r, o) && i(r))
                      );
                    };
                  n(e),
                    e.on("mousedown", function(t) {
                      var n,
                        o = t.target;
                      if (
                        (o === r ||
                          "HTML" === o.nodeName ||
                          e.dom.isChildOf(o, r)) &&
                        !1 !== Xw.isXYInContentArea(e, t.clientX, t.clientY)
                      )
                        if (((n = dS(e, o)), n))
                          cS(n)
                            ? (t.preventDefault(), v(nS(e, n)))
                            : (b(),
                              (sS(n) && t.shiftKey) ||
                                KE.isXYWithinRange(
                                  t.clientX,
                                  t.clientY,
                                  e.selection.getRng()
                                ) ||
                                (C(),
                                e.selection.placeCaretAt(
                                  t.clientX,
                                  t.clientY
                                )));
                        else if (!1 === Hl(o)) {
                          b(), C();
                          var i = XE(r, t.clientX, t.clientY);
                          if (i && !d(t.target, i.node)) {
                            t.preventDefault();
                            var a = l(1, i.node, i.before, !1);
                            e.getBody().focus(), s(a);
                          }
                        }
                    }),
                    e.on("keypress", function(t) {
                      if (!uS.modifierPressed(t))
                        switch (t.keyCode) {
                          default:
                            cS(e.selection.getNode()) && t.preventDefault();
                            break;
                        }
                    }),
                    e.on("getSelectionRange", function(e) {
                      var n = e.range;
                      if (t) {
                        if (!t.parentNode) return void (t = null);
                        (n = n.cloneRange()), n.selectNode(t), (e.range = n);
                      }
                    }),
                    e.on("setSelectionRange", function(e) {
                      var t;
                      (t = v(e.range, e.forward)), t && (e.range = t);
                    });
                  var m = function(e) {
                    return "mcepastebin" === e.id;
                  };
                  e.on("AfterSetSelectionRange", function(e) {
                    var t = e.range;
                    h(t) || m(t.startContainer.parentNode) || C(),
                      a(t.startContainer.parentNode) || b();
                  }),
                    e.on("copy", function(e) {
                      var t = e.clipboardData;
                      if (
                        !e.isDefaultPrevented() &&
                        e.clipboardData &&
                        !ke.ie
                      ) {
                        var n = u();
                        n &&
                          (e.preventDefault(),
                          t.clearData(),
                          t.setData("text/html", n.outerHTML),
                          t.setData("text/plain", n.outerText));
                      }
                    }),
                    TE.init(e),
                    aS.setup(e);
                },
                p = function() {
                  var t = e.contentStyles,
                    n = ".mce-content-body";
                  t.push(o.getCss()),
                    t.push(
                      n +
                        " .mce-offscreen-selection {position: absolute;left: -9999999999px;max-width: 1000000px;}" +
                        n +
                        " *[contentEditable=false] {cursor: default;}" +
                        n +
                        " *[contentEditable=true] {cursor: text;}"
                    );
                },
                g = function(e) {
                  return ks(e) || Os(e) || Ps(e);
                },
                h = function(e) {
                  return g(e.startContainer) || g(e.endContainer);
                },
                v = function(n, r) {
                  var o,
                    a,
                    u,
                    s,
                    c,
                    d,
                    m,
                    p,
                    g,
                    v,
                    b = e.$,
                    y = e.dom;
                  if (!n) return null;
                  if (n.collapsed) {
                    if (!h(n))
                      if (!1 === r) {
                        if (((p = f(-1, n)), Hl(p.getNode(!0))))
                          return l(-1, p.getNode(!0), !1, !1);
                        if (Hl(p.getNode()))
                          return l(-1, p.getNode(), !p.isAtEnd(), !1);
                      } else {
                        if (((p = f(1, n)), Hl(p.getNode())))
                          return l(1, p.getNode(), !p.isAtEnd(), !1);
                        if (Hl(p.getNode(!0)))
                          return l(1, p.getNode(!0), !1, !1);
                      }
                    return null;
                  }
                  return (
                    (s = n.startContainer),
                    (c = n.startOffset),
                    (d = n.endOffset),
                    3 === s.nodeType &&
                      0 === c &&
                      cS(s.parentNode) &&
                      ((s = s.parentNode),
                      (c = y.nodeIndex(s)),
                      (s = s.parentNode)),
                    1 !== s.nodeType
                      ? null
                      : (d === c + 1 && (o = s.childNodes[c]),
                        cS(o)
                          ? ((g = v = o.cloneNode(!0)),
                            (m = e.fire("ObjectSelected", {
                              target: o,
                              targetClone: g
                            })),
                            m.isDefaultPrevented()
                              ? null
                              : ((a = Zu(fo.fromDom(e.getBody()), "#" + i).fold(
                                  function() {
                                    return b([]);
                                  },
                                  function(e) {
                                    return b([e.dom()]);
                                  }
                                )),
                                (g = m.targetClone),
                                0 === a.length &&
                                  ((a = b(
                                    '<div data-mce-bogus="all" class="mce-offscreen-selection"></div>'
                                  ).attr("id", i)),
                                  a.appendTo(e.getBody())),
                                (n = e.dom.createRng()),
                                g === v && ke.ie
                                  ? (a
                                      .empty()
                                      .append(
                                        '<p style="font-size: 0" data-mce-bogus="all"> </p>'
                                      )
                                      .append(g),
                                    n.setStartAfter(a[0].firstChild.firstChild),
                                    n.setEndAfter(g))
                                  : (a
                                      .empty()
                                      .append(" ")
                                      .append(g)
                                      .append(" "),
                                    n.setStart(a[0].firstChild, 1),
                                    n.setEnd(a[0].lastChild, 0)),
                                a.css({ top: y.getPos(o, e.getBody()).y }),
                                a[0].focus(),
                                (u = e.selection.getSel()),
                                u.removeAllRanges(),
                                u.addRange(n),
                                q(
                                  $u(
                                    fo.fromDom(e.getBody()),
                                    "*[data-mce-selected]"
                                  ),
                                  function(e) {
                                    Oo(e, "data-mce-selected");
                                  }
                                ),
                                o.setAttribute("data-mce-selected", "1"),
                                (t = o),
                                C(),
                                n))
                          : null)
                  );
                },
                b = function() {
                  t &&
                    (t.removeAttribute("data-mce-selected"),
                    Zu(fo.fromDom(e.getBody()), "#" + i).each(Au),
                    (t = null)),
                    Zu(fo.fromDom(e.getBody()), "#" + i).each(Au),
                    (t = null);
                },
                y = function() {
                  o.destroy(), (t = null);
                },
                C = function() {
                  o.hide();
                };
              return (
                ke.ceFalse && (m(), p()),
                {
                  showCaret: l,
                  showBlockCaretContainer: d,
                  hideFakeCaret: C,
                  destroy: y
                }
              );
            },
            pS = function(e) {
              return 0 === e.indexOf("data-") || 0 === e.indexOf("aria-");
            },
            gS = function(e) {
              return e.replace(/<!--|-->/g, "");
            },
            hS = function(e, t) {
              return (
                !e.allow_html_data_urls &&
                (/^data:image\//i.test(t)
                  ? !1 === e.allow_svg_data_urls &&
                    /^data:image\/svg\+xml/i.test(t)
                  : /^data:/i.test(t))
              );
            },
            vS = function(e, t, n) {
              var r,
                o,
                i,
                a,
                u = 1;
              (a = e.getShortEndedElements()),
                (i = /<([!?\/])?([A-Za-z0-9\-_\:\.]+)((?:\s+[^"\'>]+(?:(?:"[^"]*")|(?:\'[^\']*\')|[^>]*))*|\/|\s+)>/g),
                (i.lastIndex = r = n);
              while ((o = i.exec(t))) {
                if (((r = i.lastIndex), "/" === o[1])) u--;
                else if (!o[1]) {
                  if (o[2] in a) continue;
                  u++;
                }
                if (0 === u) break;
              }
              return r;
            };
          function bS(e, t) {
            void 0 === t && (t = nu());
            var n = function() {};
            (e = e || {}),
              !1 !== e.fix_self_closing && (e.fix_self_closing = !0);
            var r = e.comment ? e.comment : n,
              o = e.cdata ? e.cdata : n,
              i = e.text ? e.text : n,
              a = e.start ? e.start : n,
              u = e.end ? e.end : n,
              s = e.pi ? e.pi : n,
              c = e.doctype ? e.doctype : n,
              l = function(n) {
                var l,
                  f,
                  d,
                  m,
                  p,
                  g,
                  h,
                  v,
                  b,
                  y,
                  C,
                  w,
                  x,
                  E,
                  S,
                  N,
                  k,
                  T,
                  _,
                  A,
                  R,
                  D,
                  B,
                  O,
                  P,
                  I,
                  L,
                  M,
                  F,
                  U,
                  j = 0,
                  z = [],
                  V = 0,
                  H = $a.decode,
                  q = Mn.makeMap(
                    "src,href,data,background,formaction,poster,xlink:href"
                  ),
                  $ = /((java|vb)script|mhtml):/i,
                  W = function(e) {
                    var t, n;
                    t = z.length;
                    while (t--) if (z[t].name === e) break;
                    if (t >= 0) {
                      for (n = z.length - 1; n >= t; n--)
                        (e = z[n]), e.valid && u(e.name);
                      z.length = t;
                    }
                  },
                  Y = function(t, n, r, o, i) {
                    var a,
                      u,
                      s = /[\s\u0000-\u001F]+/g;
                    if (
                      ((n = n.toLowerCase()),
                      (r = n in C ? n : H(r || o || i || "")),
                      x && !v && !1 === pS(n))
                    ) {
                      if (((a = T[n]), !a && _)) {
                        u = _.length;
                        while (u--) if (((a = _[u]), a.pattern.test(n))) break;
                        -1 === u && (a = null);
                      }
                      if (!a) return;
                      if (a.validValues && !(r in a.validValues)) return;
                    }
                    if (q[n] && !e.allow_script_urls) {
                      var c = r.replace(s, "");
                      try {
                        c = decodeURIComponent(c);
                      } catch (l) {
                        c = unescape(c);
                      }
                      if ($.test(c)) return;
                      if (hS(e, c)) return;
                    }
                    (v && (n in q || 0 === n.indexOf("on"))) ||
                      ((m.map[n] = r), m.push({ name: n, value: r }));
                  };
                (I = new RegExp(
                  "<(?:(?:!--([\\w\\W]*?)--\x3e)|(?:!\\[CDATA\\[([\\w\\W]*?)\\]\\]>)|(?:!DOCTYPE([\\w\\W]*?)>)|(?:\\?([^\\s\\/<>]+) ?([\\w\\W]*?)[?/]>)|(?:\\/([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)>)|(?:([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)((?:\\s+[^\"'>]+(?:(?:\"[^\"]*\")|(?:'[^']*')|[^>]*))*|\\/|\\s+)>))",
                  "g"
                )),
                  (L = /([\w:\-]+)(?:\s*=\s*(?:(?:\"((?:[^\"])*)\")|(?:\'((?:[^\'])*)\')|([^>\s]+)))?/g),
                  (y = t.getShortEndedElements()),
                  (P = e.self_closing_elements || t.getSelfClosingElements()),
                  (C = t.getBoolAttrs()),
                  (x = e.validate),
                  (b = e.remove_internals),
                  (U = e.fix_self_closing),
                  (M = t.getSpecialElements()),
                  (B = n + ">");
                while ((l = I.exec(B))) {
                  if (
                    (j < l.index && i(H(n.substr(j, l.index - j))), (f = l[6]))
                  )
                    (f = f.toLowerCase()),
                      ":" === f.charAt(0) && (f = f.substr(1)),
                      W(f);
                  else if ((f = l[7])) {
                    if (l.index + l[0].length > n.length) {
                      i(H(n.substr(l.index))), (j = l.index + l[0].length);
                      continue;
                    }
                    if (
                      ((f = f.toLowerCase()),
                      ":" === f.charAt(0) && (f = f.substr(1)),
                      (w = f in y),
                      U &&
                        P[f] &&
                        z.length > 0 &&
                        z[z.length - 1].name === f &&
                        W(f),
                      !x || (E = t.getElementRule(f)))
                    ) {
                      if (
                        ((S = !0),
                        x && ((T = E.attributes), (_ = E.attributePatterns)),
                        (k = l[8])
                          ? ((v = -1 !== k.indexOf("data-mce-type")),
                            v && b && (S = !1),
                            (m = []),
                            (m.map = {}),
                            k.replace(L, Y))
                          : ((m = []), (m.map = {})),
                        x && !v)
                      ) {
                        if (
                          ((A = E.attributesRequired),
                          (R = E.attributesDefault),
                          (D = E.attributesForced),
                          (O = E.removeEmptyAttrs),
                          O && !m.length && (S = !1),
                          D)
                        ) {
                          p = D.length;
                          while (p--)
                            (N = D[p]),
                              (h = N.name),
                              (F = N.value),
                              "{$uid}" === F && (F = "mce_" + V++),
                              (m.map[h] = F),
                              m.push({ name: h, value: F });
                        }
                        if (R) {
                          p = R.length;
                          while (p--)
                            (N = R[p]),
                              (h = N.name),
                              h in m.map ||
                                ((F = N.value),
                                "{$uid}" === F && (F = "mce_" + V++),
                                (m.map[h] = F),
                                m.push({ name: h, value: F }));
                        }
                        if (A) {
                          p = A.length;
                          while (p--) if (A[p] in m.map) break;
                          -1 === p && (S = !1);
                        }
                        if ((N = m.map["data-mce-bogus"])) {
                          if ("all" === N) {
                            (j = vS(t, n, I.lastIndex)), (I.lastIndex = j);
                            continue;
                          }
                          S = !1;
                        }
                      }
                      S && a(f, m, w);
                    } else S = !1;
                    if ((d = M[f])) {
                      (d.lastIndex = j = l.index + l[0].length),
                        (l = d.exec(n))
                          ? (S && (g = n.substr(j, l.index - j)),
                            (j = l.index + l[0].length))
                          : ((g = n.substr(j)), (j = n.length)),
                        S && (g.length > 0 && i(g, !0), u(f)),
                        (I.lastIndex = j);
                      continue;
                    }
                    w ||
                      (k && k.indexOf("/") === k.length - 1
                        ? S && u(f)
                        : z.push({ name: f, valid: S }));
                  } else
                    (f = l[1])
                      ? (">" === f.charAt(0) && (f = " " + f),
                        e.allow_conditional_comments ||
                          "[if" !== f.substr(0, 3).toLowerCase() ||
                          (f = " " + f),
                        r(f))
                      : (f = l[2])
                        ? o(gS(f))
                        : (f = l[3])
                          ? c(f)
                          : (f = l[4]) && s(f, l[5]);
                  j = l.index + l[0].length;
                }
                for (
                  j < n.length && i(H(n.substr(j))), p = z.length - 1;
                  p >= 0;
                  p--
                )
                  (f = z[p]), f.valid && u(f.name);
              };
            return { parse: l };
          }
          (function(e) {
            e.findEndTag = vS;
          })(bS || (bS = {}));
          var yS = bS,
            CS = function(e, t) {
              var n = new RegExp(
                ["\\s?(" + e.join("|") + ')="[^"]+"'].join("|"),
                "gi"
              );
              return t.replace(n, "");
            },
            wS = function(e, t) {
              var n,
                r,
                o,
                i,
                a,
                u = t,
                s = /<(\w+) [^>]*data-mce-bogus="all"[^>]*>/g,
                c = e.schema;
              (u = CS(e.getTempAttrs(), u)), (a = c.getShortEndedElements());
              while ((i = s.exec(u)))
                (r = s.lastIndex),
                  (o = i[0].length),
                  (n = a[i[1]] ? r : yS.findEndTag(c, u, r)),
                  (u = u.substring(0, r - o) + u.substring(n)),
                  (s.lastIndex = r - o);
              return ws.trim(u);
            },
            xS = wS,
            ES = { trimExternal: xS, trimInternal: wS },
            SS = 0,
            NS = 1,
            kS = 2,
            TS = function(e, t) {
              var n = e.length + t.length + 2,
                r = new Array(n),
                o = new Array(n),
                i = function(e, t, n) {
                  return { start: e, end: t, diag: n };
                },
                a = function(n, r, o, i, u) {
                  var c = s(n, r, o, i);
                  if (
                    null === c ||
                    (c.start === r && c.diag === r - i) ||
                    (c.end === n && c.diag === n - o)
                  ) {
                    var l = n,
                      f = o;
                    while (l < r || f < i)
                      l < r && f < i && e[l] === t[f]
                        ? (u.push([SS, e[l]]), ++l, ++f)
                        : r - n > i - o
                          ? (u.push([kS, e[l]]), ++l)
                          : (u.push([NS, t[f]]), ++f);
                  } else {
                    a(n, c.start, o, c.start - c.diag, u);
                    for (var d = c.start; d < c.end; ++d) u.push([SS, e[d]]);
                    a(c.end, r, c.end - c.diag, i, u);
                  }
                },
                u = function(n, r, o, a) {
                  var u = n;
                  while (u - r < a && u < o && e[u] === t[u - r]) ++u;
                  return i(n, u, r);
                },
                s = function(n, i, a, s) {
                  var c = i - n,
                    l = s - a;
                  if (0 === c || 0 === l) return null;
                  var f,
                    d,
                    m,
                    p,
                    g,
                    h = c - l,
                    v = l + c,
                    b = (v % 2 === 0 ? v : v + 1) / 2;
                  for (r[1 + b] = n, o[1 + b] = i + 1, f = 0; f <= b; ++f) {
                    for (d = -f; d <= f; d += 2) {
                      (m = d + b),
                        d === -f || (d !== f && r[m - 1] < r[m + 1])
                          ? (r[m] = r[m + 1])
                          : (r[m] = r[m - 1] + 1),
                        (p = r[m]),
                        (g = p - n + a - d);
                      while (p < i && g < s && e[p] === t[g]) (r[m] = ++p), ++g;
                      if (
                        h % 2 !== 0 &&
                        h - f <= d &&
                        d <= h + f &&
                        o[m - h] <= r[m]
                      )
                        return u(o[m - h], d + n - a, i, s);
                    }
                    for (d = h - f; d <= h + f; d += 2) {
                      (m = d + b - h),
                        d === h - f || (d !== h + f && o[m + 1] <= o[m - 1])
                          ? (o[m] = o[m + 1] - 1)
                          : (o[m] = o[m - 1]),
                        (p = o[m] - 1),
                        (g = p - n + a - d);
                      while (p >= n && g >= a && e[p] === t[g])
                        (o[m] = p--), g--;
                      if (h % 2 === 0 && -f <= d && d <= f && o[m] <= r[m + h])
                        return u(o[m], d + n - a, i, s);
                    }
                  }
                },
                c = [];
              return a(0, e.length, 0, t.length, c), c;
            },
            _S = { KEEP: SS, DELETE: kS, INSERT: NS, diff: TS },
            AS = function(e) {
              return ka.isElement(e)
                ? e.outerHTML
                : ka.isText(e)
                  ? $a.encodeRaw(e.data, !1)
                  : ka.isComment(e)
                    ? "\x3c!--" + e.data + "--\x3e"
                    : "";
            },
            RS = function(e) {
              var t, n, r;
              (r = document.createElement("div")),
                (t = document.createDocumentFragment()),
                e && (r.innerHTML = e);
              while ((n = r.firstChild)) t.appendChild(n);
              return t;
            },
            DS = function(e, t, n) {
              var r = RS(t);
              if (e.hasChildNodes() && n < e.childNodes.length) {
                var o = e.childNodes[n];
                o.parentNode.insertBefore(r, o);
              } else e.appendChild(r);
            },
            BS = function(e, t) {
              if (e.hasChildNodes() && t < e.childNodes.length) {
                var n = e.childNodes[t];
                n.parentNode.removeChild(n);
              }
            },
            OS = function(e, t) {
              var n = 0;
              q(e, function(e) {
                e[0] === _S.KEEP
                  ? n++
                  : e[0] === _S.INSERT
                    ? (DS(t, e[1], n), n++)
                    : e[0] === _S.DELETE && BS(t, n);
              });
            },
            PS = function(e) {
              return Y(H(le(e.childNodes), AS), function(e) {
                return e.length > 0;
              });
            },
            IS = function(e, t) {
              var n = H(le(t.childNodes), AS);
              return OS(_S.diff(n, e), t), t;
            },
            LS = { read: PS, write: IS },
            MS = Ou(A.none()),
            FS = function() {
              return MS.get().getOrThunk(function() {
                var e = document.implementation.createHTMLDocument("undo");
                return MS.set(A.some(e)), e;
              });
            },
            US = function(e) {
              return -1 !== e.indexOf("</iframe>");
            },
            jS = function(e) {
              return {
                type: "fragmented",
                fragments: e,
                content: "",
                bookmark: null,
                beforeBookmark: null
              };
            },
            zS = function(e) {
              return {
                type: "complete",
                fragments: null,
                content: e,
                bookmark: null,
                beforeBookmark: null
              };
            },
            VS = function(e) {
              var t, n, r;
              return (
                (t = LS.read(e.getBody())),
                (r = te(t, function(t) {
                  var n = ES.trimInternal(e.serializer, t);
                  return n.length > 0 ? [n] : [];
                })),
                (n = r.join("")),
                US(n) ? jS(r) : zS(n)
              );
            },
            HS = function(e, t, n) {
              "fragmented" === t.type
                ? LS.write(t.fragments, e.getBody())
                : e.setContent(t.content, { format: "raw" }),
                e.selection.moveToBookmark(n ? t.beforeBookmark : t.bookmark);
            },
            qS = function(e) {
              return "fragmented" === e.type ? e.fragments.join("") : e.content;
            },
            $S = function(e) {
              var t = fo.fromTag("body", FS());
              return vs(t, qS(e)), q($u(t, "*[data-mce-bogus]"), Ru), hs(t);
            },
            WS = function(e, t) {
              return qS(e) === qS(t);
            },
            YS = function(e, t) {
              return $S(e) === $S(t);
            },
            GS = function(e, t) {
              return !(!e || !t) && (!!WS(e, t) || YS(e, t));
            },
            XS = {
              createFragmentedLevel: jS,
              createCompleteLevel: zS,
              createFromEditor: VS,
              applyToEditor: HS,
              isEq: GS
            };
          function ZS(e) {
            var t,
              n,
              r = this,
              o = 0,
              i = [],
              a = 0,
              u = function() {
                return 0 === a;
              },
              s = function(e) {
                u() && (r.typing = e);
              },
              c = function(t) {
                e.setDirty(t);
              },
              l = function(e) {
                s(!1), r.add({}, e);
              },
              f = function() {
                r.typing && (s(!1), r.add());
              };
            e.on("init", function() {
              r.add();
            }),
              e.on("BeforeExecCommand", function(e) {
                var t = e.command;
                "Undo" !== t &&
                  "Redo" !== t &&
                  "mceRepaint" !== t &&
                  (f(), r.beforeChange());
              }),
              e.on("ExecCommand", function(e) {
                var t = e.command;
                "Undo" !== t && "Redo" !== t && "mceRepaint" !== t && l(e);
              }),
              e.on("ObjectResizeStart Cut", function() {
                r.beforeChange();
              }),
              e.on("SaveContent ObjectResized blur", l),
              e.on("DragEnd", l),
              e.on("KeyUp", function(t) {
                var o = t.keyCode;
                t.isDefaultPrevented() ||
                  (((o >= 33 && o <= 36) ||
                    (o >= 37 && o <= 40) ||
                    45 === o ||
                    t.ctrlKey) &&
                    (l(), e.nodeChanged()),
                  (46 !== o && 8 !== o) || e.nodeChanged(),
                  n &&
                    r.typing &&
                    !1 === XS.isEq(XS.createFromEditor(e), i[0]) &&
                    (!1 === e.isDirty() &&
                      (c(!0),
                      e.fire("change", { level: i[0], lastLevel: null })),
                    e.fire("TypingUndo"),
                    (n = !1),
                    e.nodeChanged()));
              }),
              e.on("KeyDown", function(e) {
                var t = e.keyCode;
                if (!e.isDefaultPrevented())
                  if ((t >= 33 && t <= 36) || (t >= 37 && t <= 40) || 45 === t)
                    r.typing && l(e);
                  else {
                    var o = (e.ctrlKey && !e.altKey) || e.metaKey;
                    !(t < 16 || t > 20) ||
                      224 === t ||
                      91 === t ||
                      r.typing ||
                      o ||
                      (r.beforeChange(), s(!0), r.add({}, e), (n = !0));
                  }
              }),
              e.on("MouseDown", function(e) {
                r.typing && l(e);
              });
            var d = function(e) {
                return "insertReplacementText" === e.inputType;
              },
              m = function(e) {
                return "insertText" === e.inputType && null === e.data;
              };
            return (
              e.on("input", function(e) {
                e.inputType && (d(e) || m(e)) && l(e);
              }),
              e.addShortcut("meta+z", "", "Undo"),
              e.addShortcut("meta+y,meta+shift+z", "", "Redo"),
              e.on("AddUndo Undo Redo ClearUndos", function(t) {
                t.isDefaultPrevented() || e.nodeChanged();
              }),
              (r = {
                data: i,
                typing: !1,
                beforeChange: function() {
                  u() && (t = bl.getUndoBookmark(e.selection));
                },
                add: function(n, r) {
                  var a,
                    s,
                    l,
                    f = e.settings;
                  if (
                    ((l = XS.createFromEditor(e)),
                    (n = n || {}),
                    (n = Mn.extend(n, l)),
                    !1 === u() || e.removed)
                  )
                    return null;
                  if (
                    ((s = i[o]),
                    e
                      .fire("BeforeAddUndo", {
                        level: n,
                        lastLevel: s,
                        originalEvent: r
                      })
                      .isDefaultPrevented())
                  )
                    return null;
                  if (s && XS.isEq(s, n)) return null;
                  if (
                    (i[o] && (i[o].beforeBookmark = t),
                    f.custom_undo_redo_levels &&
                      i.length > f.custom_undo_redo_levels)
                  ) {
                    for (a = 0; a < i.length - 1; a++) i[a] = i[a + 1];
                    i.length--, (o = i.length);
                  }
                  (n.bookmark = bl.getUndoBookmark(e.selection)),
                    o < i.length - 1 && (i.length = o + 1),
                    i.push(n),
                    (o = i.length - 1);
                  var d = { level: n, lastLevel: s, originalEvent: r };
                  return (
                    e.fire("AddUndo", d),
                    o > 0 && (c(!0), e.fire("change", d)),
                    n
                  );
                },
                undo: function() {
                  var t;
                  return (
                    r.typing && (r.add(), (r.typing = !1), s(!1)),
                    o > 0 &&
                      ((t = i[--o]),
                      XS.applyToEditor(e, t, !0),
                      c(!0),
                      e.fire("undo", { level: t })),
                    t
                  );
                },
                redo: function() {
                  var t;
                  return (
                    o < i.length - 1 &&
                      ((t = i[++o]),
                      XS.applyToEditor(e, t, !1),
                      c(!0),
                      e.fire("redo", { level: t })),
                    t
                  );
                },
                clear: function() {
                  (i = []),
                    (o = 0),
                    (r.typing = !1),
                    (r.data = i),
                    e.fire("ClearUndos");
                },
                hasUndo: function() {
                  return (
                    o > 0 ||
                    (r.typing && i[0] && !XS.isEq(XS.createFromEditor(e), i[0]))
                  );
                },
                hasRedo: function() {
                  return o < i.length - 1 && !r.typing;
                },
                transact: function(e) {
                  return f(), r.beforeChange(), r.ignore(e), r.add();
                },
                ignore: function(e) {
                  try {
                    a++, e();
                  } finally {
                    a--;
                  }
                },
                extra: function(t, n) {
                  var a, u;
                  r.transact(t) &&
                    ((u = i[o].bookmark),
                    (a = i[o - 1]),
                    XS.applyToEditor(e, a, !0),
                    r.transact(n) && (i[o - 1].beforeBookmark = u));
                }
              }),
              r
            );
          }
          var KS = Id.isEq,
            JS = function(e, t, n) {
              var r = e.formatter.get(n);
              if (r)
                for (var o = 0; o < r.length; o++)
                  if (!1 === r[o].inherit && e.dom.is(t, r[o].selector))
                    return !0;
              return !1;
            },
            QS = function(e, t, n, r) {
              var o = e.dom.getRoot();
              return (
                t !== o &&
                ((t = e.dom.getParent(t, function(t) {
                  return (
                    !!JS(e, t, n) ||
                    (t.parentNode === o || !!nN(e, t, n, r, !0))
                  );
                })),
                nN(e, t, n, r))
              );
            },
            eN = function(e, t, n) {
              return (
                !!KS(t, n.inline) ||
                (!!KS(t, n.block) ||
                  (n.selector
                    ? 1 === t.nodeType && e.is(t, n.selector)
                    : void 0))
              );
            },
            tN = function(e, t, n, r, o, i) {
              var a,
                u,
                s,
                c = n[r];
              if (n.onmatch) return n.onmatch(t, n, r);
              if (c)
                if ("undefined" === typeof c.length) {
                  for (a in c)
                    if (c.hasOwnProperty(a)) {
                      if (
                        ((u =
                          "attributes" === r
                            ? e.getAttrib(t, a)
                            : Id.getStyle(e, t, a)),
                        o && !u && !n.exact)
                      )
                        return;
                      if (
                        (!o || n.exact) &&
                        !KS(
                          u,
                          Id.normalizeStyleValue(e, Id.replaceVars(c[a], i), a)
                        )
                      )
                        return;
                    }
                } else
                  for (s = 0; s < c.length; s++)
                    if (
                      "attributes" === r
                        ? e.getAttrib(t, c[s])
                        : Id.getStyle(e, t, c[s])
                    )
                      return n;
              return n;
            },
            nN = function(e, t, n, r, o) {
              var i,
                a,
                u,
                s,
                c = e.formatter.get(n),
                l = e.dom;
              if (c && t)
                for (a = 0; a < c.length; a++)
                  if (
                    ((i = c[a]),
                    eN(e.dom, t, i) &&
                      tN(l, t, i, "attributes", o, r) &&
                      tN(l, t, i, "styles", o, r))
                  ) {
                    if ((s = i.classes))
                      for (u = 0; u < s.length; u++)
                        if (!e.dom.hasClass(t, s[u])) return;
                    return i;
                  }
            },
            rN = function(e, t, n, r) {
              var o;
              return r
                ? QS(e, r, t, n)
                : ((r = e.selection.getNode()),
                  !!QS(e, r, t, n) ||
                    ((o = e.selection.getStart()),
                    !(o === r || !QS(e, o, t, n))));
            },
            oN = function(e, t, n) {
              var r,
                o = [],
                i = {};
              return (
                (r = e.selection.getStart()),
                e.dom.getParent(
                  r,
                  function(r) {
                    var a, u;
                    for (a = 0; a < t.length; a++)
                      (u = t[a]),
                        !i[u] && nN(e, r, u, n) && ((i[u] = !0), o.push(u));
                  },
                  e.dom.getRoot()
                ),
                o
              );
            },
            iN = function(e, t) {
              var n,
                r,
                o,
                i,
                a,
                u = e.formatter.get(t),
                s = e.dom;
              if (u)
                for (
                  n = e.selection.getStart(),
                    r = Id.getParents(s, n),
                    i = u.length - 1;
                  i >= 0;
                  i--
                ) {
                  if (((a = u[i].selector), !a || u[i].defaultBlock)) return !0;
                  for (o = r.length - 1; o >= 0; o--)
                    if (s.is(r[o], a)) return !0;
                }
              return !1;
            },
            aN = {
              matchNode: nN,
              matchName: eN,
              match: rN,
              matchAll: oN,
              canApply: iN,
              matchesUnInheritedFormatSelector: JS
            },
            uN = function(e, t) {
              return e.splitText(t);
            },
            sN = function(e) {
              var t = e.startContainer,
                n = e.startOffset,
                r = e.endContainer,
                o = e.endOffset;
              return (
                t === r && ka.isText(t)
                  ? n > 0 &&
                    n < t.nodeValue.length &&
                    ((r = uN(t, n)),
                    (t = r.previousSibling),
                    o > n
                      ? ((o -= n),
                        (t = r = uN(r, o).previousSibling),
                        (o = r.nodeValue.length),
                        (n = 0))
                      : (o = 0))
                  : (ka.isText(t) &&
                      n > 0 &&
                      n < t.nodeValue.length &&
                      ((t = uN(t, n)), (n = 0)),
                    ka.isText(r) &&
                      o > 0 &&
                      o < r.nodeValue.length &&
                      ((r = uN(r, o).previousSibling),
                      (o = r.nodeValue.length))),
                {
                  startContainer: t,
                  startOffset: n,
                  endContainer: r,
                  endOffset: o
                }
              );
            },
            cN = { split: sN },
            lN = ws.ZWSP,
            fN = "_mce_caret",
            dN = function(e, t) {
              return e.importNode(t, !0);
            },
            mN = function(e) {
              var t = [];
              while (e) {
                if (
                  (3 === e.nodeType && e.nodeValue !== lN) ||
                  e.childNodes.length > 1
                )
                  return [];
                1 === e.nodeType && t.push(e), (e = e.firstChild);
              }
              return t;
            },
            pN = function(e) {
              return mN(e).length > 0;
            },
            gN = function(e) {
              var t;
              if (e)
                for (t = new Fi(e, e), e = t.current(); e; e = t.next())
                  if (3 === e.nodeType) return e;
              return null;
            },
            hN = function(e) {
              var t = fo.fromTag("span");
              return (
                Ro(t, {
                  id: fN,
                  "data-mce-bogus": "1",
                  "data-mce-type": "format-caret"
                }),
                e && Su(t, fo.fromText(lN)),
                t
              );
            },
            vN = function(e) {
              var t = gN(e);
              return t && t.nodeValue.charAt(0) === lN && t.deleteData(0, 1), t;
            },
            bN = function(e, t, n) {
              void 0 === n && (n = !0);
              var r = e.dom,
                o = e.selection;
              if (pN(t)) Mh.deleteElement(e, !1, fo.fromDom(t), n);
              else {
                var i = o.getRng(),
                  a = r.getParent(t, r.isBlock),
                  u = vN(t);
                i.startContainer === u &&
                  i.startOffset > 0 &&
                  i.setStart(u, i.startOffset - 1),
                  i.endContainer === u &&
                    i.endOffset > 0 &&
                    i.setEnd(u, i.endOffset - 1),
                  r.remove(t, !0),
                  a && r.isEmpty(a) && Hm.fillWithPaddingBr(fo.fromDom(a)),
                  o.setRng(i);
              }
            },
            yN = function(e, t, n) {
              void 0 === n && (n = !0);
              var r = e.dom,
                o = e.selection;
              if (t) bN(e, t, n);
              else if (((t = wl(e.getBody(), o.getStart())), !t))
                while ((t = r.get(fN))) bN(e, t, !1);
            },
            CN = function(e, t, n) {
              var r = e.dom,
                o = r.getParent(n, i(Id.isTextBlock, e));
              o && r.isEmpty(o)
                ? n.parentNode.replaceChild(t, n)
                : (Hm.removeTrailingBr(fo.fromDom(n)),
                  r.isEmpty(n)
                    ? n.parentNode.replaceChild(t, n)
                    : r.insertAfter(t, n));
            },
            wN = function(e, t) {
              return e.appendChild(t), t;
            },
            xN = function(e, t) {
              var n = G(
                e,
                function(e, t) {
                  return wN(e, t.cloneNode(!1));
                },
                t
              );
              return wN(n, n.ownerDocument.createTextNode(lN));
            },
            EN = function(e, t, n) {
              var r,
                o,
                i,
                a,
                u,
                s,
                c,
                l = e.selection;
              (r = l.getRng(!0)),
                (a = r.startOffset),
                (s = r.startContainer),
                (c = s.nodeValue),
                (o = wl(e.getBody(), l.getStart())),
                o && (i = gN(o));
              var f = /[^\s\u00a0\u00ad\u200b\ufeff]/;
              c &&
              a > 0 &&
              a < c.length &&
              f.test(c.charAt(a)) &&
              f.test(c.charAt(a - 1))
                ? ((u = l.getBookmark()),
                  r.collapse(!0),
                  (r = Zd.expandRng(e, r, e.formatter.get(t))),
                  (r = cN.split(r)),
                  e.formatter.apply(t, n, r),
                  l.moveToBookmark(u))
                : (o && i.nodeValue === lN
                    ? e.formatter.apply(t, n, o)
                    : ((o = dN(e.getDoc(), hN(!0).dom())),
                      (i = o.firstChild),
                      r.insertNode(o),
                      (a = 1),
                      e.formatter.apply(t, n, o)),
                  l.setCursorLocation(i, a));
            },
            SN = function(e, t, n, r) {
              var o,
                i,
                a,
                u,
                s,
                c,
                l,
                f = e.dom,
                d = e.selection,
                m = [],
                p = d.getRng();
              (o = p.startContainer),
                (i = p.startOffset),
                (s = o),
                3 === o.nodeType &&
                  (i !== o.nodeValue.length && (u = !0), (s = s.parentNode));
              while (s) {
                if (aN.matchNode(e, s, t, n, r)) {
                  c = s;
                  break;
                }
                s.nextSibling && (u = !0), m.push(s), (s = s.parentNode);
              }
              if (c)
                if (u) {
                  (a = d.getBookmark()), p.collapse(!0);
                  var g = Zd.expandRng(e, p, e.formatter.get(t), !0);
                  (g = cN.split(g)),
                    e.formatter.remove(t, n, g),
                    d.moveToBookmark(a);
                } else {
                  l = wl(e.getBody(), c);
                  var h = hN(!1).dom(),
                    v = xN(m, h);
                  CN(e, h, l || c),
                    bN(e, l, !1),
                    d.setCursorLocation(v, 1),
                    f.isEmpty(c) && f.remove(c);
                }
            },
            NN = function(e, t) {
              var n = e.selection,
                r = e.getBody();
              yN(e, null, !1),
                (8 !== t && 46 !== t) ||
                  !n.isCollapsed() ||
                  n.getStart().innerHTML !== lN ||
                  yN(e, wl(r, n.getStart())),
                (37 !== t && 39 !== t) || yN(e, wl(r, n.getStart()));
            },
            kN = function(e) {
              e.on("mouseup keydown", function(t) {
                NN(e, t.keyCode);
              });
            },
            TN = function(e, t) {
              var n = hN(!1),
                r = xN(t, n.dom());
              return xu(fo.fromDom(e), n), Au(fo.fromDom(e)), zc(r, 0);
            },
            _N = function(e, t) {
              var n = e.schema.getTextInlineElements();
              return (
                n.hasOwnProperty(ho(t)) && !Cl(t.dom()) && !ka.isBogus(t.dom())
              );
            },
            AN = function(e) {
              return Cl(e.dom()) && pN(e.dom());
            },
            RN = {},
            DN = Sn.filter,
            BN = Sn.each,
            ON = function(e, t) {
              var n = RN[e];
              n || (RN[e] = n = []), RN[e].push(t);
            },
            PN = function(e, t) {
              BN(RN[e], function(e) {
                e(t);
              });
            };
          ON("pre", function(e) {
            var t,
              n,
              r = e.selection.getRng(),
              o = function(e) {
                return (
                  t(e.previousSibling) &&
                  -1 !== Sn.indexOf(n, e.previousSibling)
                );
              },
              i = function(e, t) {
                rr(t).remove(),
                  rr(e)
                    .append("<br><br>")
                    .append(t.childNodes);
              };
            (t = ka.matchNodeNames("pre")),
              r.collapsed ||
                ((n = e.selection.getSelectedBlocks()),
                BN(DN(DN(n, t), o), function(e) {
                  i(e.previousSibling, e);
                }));
          });
          var IN = { postProcess: PN },
            LN = /^(src|href|style)$/,
            MN = Mn.each,
            FN = Id.isEq,
            UN = function(e) {
              return /^(TH|TD)$/.test(e.nodeName);
            },
            jN = function(e, t, n) {
              var r, o, i;
              return (
                (r = t[n ? "startContainer" : "endContainer"]),
                (o = t[n ? "startOffset" : "endOffset"]),
                ka.isElement(r) &&
                  ((i = r.childNodes.length - 1),
                  !n && o && o--,
                  (r = r.childNodes[o > i ? i : o])),
                ka.isText(r) &&
                  n &&
                  o >= r.nodeValue.length &&
                  (r = new Fi(r, e.getBody()).next() || r),
                ka.isText(r) &&
                  !n &&
                  0 === o &&
                  (r = new Fi(r, e.getBody()).prev() || r),
                r
              );
            },
            zN = function(e, t, n, r) {
              var o = e.create(n, r);
              return t.parentNode.insertBefore(o, t), o.appendChild(t), o;
            },
            VN = function(e, t, n, r, o) {
              var i = (r ? "next" : "previous") + "Sibling",
                a = e.create(n, o);
              t.parentNode.insertBefore(a, t);
              var u = [t],
                s = t;
              while ((s = s[i])) u.push(s);
              return (
                u.forEach(function(e) {
                  return a.appendChild(e);
                }),
                a
              );
            },
            HN = function(e, t, n) {
              return (
                !!FN(t, n.inline) ||
                (!!FN(t, n.block) ||
                  (n.selector
                    ? ka.isElement(t) && e.is(t, n.selector)
                    : void 0))
              );
            },
            qN = function(e, t) {
              return t.links && "A" === e.tagName;
            },
            $N = function(e, t, n, r) {
              return (
                (t = Id.getNonWhiteSpaceSibling(t, n, r)),
                !t || "BR" === t.nodeName || e.isBlock(t)
              );
            },
            WN = function(e, t, n) {
              var r,
                o = t.parentNode,
                i = e.dom,
                a = e.settings.forced_root_block;
              n.block &&
                (a
                  ? o === i.getRoot() &&
                    ((n.list_block && FN(t, n.list_block)) ||
                      MN(Mn.grep(t.childNodes), function(t) {
                        Id.isValid(e, a, t.nodeName.toLowerCase())
                          ? r
                            ? r.appendChild(t)
                            : ((r = zN(i, t, a)),
                              i.setAttribs(
                                r,
                                e.settings.forced_root_block_attrs
                              ))
                          : (r = 0);
                      }))
                  : i.isBlock(t) &&
                    !i.isBlock(o) &&
                    ($N(i, t, !1) ||
                      $N(i, t.firstChild, !0, 1) ||
                      t.insertBefore(i.create("br"), t.firstChild),
                    $N(i, t, !0) ||
                      $N(i, t.lastChild, !1, 1) ||
                      t.appendChild(i.create("br")))),
                (n.selector && n.inline && !FN(n.inline, t)) || i.remove(t, 1);
            },
            YN = function(e, t, n, r, o) {
              var i,
                a,
                u,
                s = e.dom;
              if (!HN(s, r, t) && !qN(r, t)) return !1;
              if ("all" !== t.remove)
                for (
                  MN(t.styles, function(e, i) {
                    (e = Id.normalizeStyleValue(s, Id.replaceVars(e, n), i)),
                      "number" === typeof i && ((i = e), (o = 0)),
                      (t.remove_similar || !o || FN(Id.getStyle(s, o, i), e)) &&
                        s.setStyle(r, i, ""),
                      (u = 1);
                  }),
                    u &&
                      "" === s.getAttrib(r, "style") &&
                      (r.removeAttribute("style"),
                      r.removeAttribute("data-mce-style")),
                    MN(t.attributes, function(e, t) {
                      var i;
                      if (
                        ((e = Id.replaceVars(e, n)),
                        "number" === typeof t && ((t = e), (o = 0)),
                        !o || FN(s.getAttrib(o, t), e))
                      ) {
                        if (
                          "class" === t &&
                          ((e = s.getAttrib(r, t)),
                          e &&
                            ((i = ""),
                            MN(e.split(/\s+/), function(e) {
                              /mce\-\w+/.test(e) && (i += (i ? " " : "") + e);
                            }),
                            i))
                        )
                          return void s.setAttrib(r, t, i);
                        "class" === t && r.removeAttribute("className"),
                          LN.test(t) && r.removeAttribute("data-mce-" + t),
                          r.removeAttribute(t);
                      }
                    }),
                    MN(t.classes, function(e) {
                      (e = Id.replaceVars(e, n)),
                        (o && !s.hasClass(o, e)) || s.removeClass(r, e);
                    }),
                    a = s.getAttribs(r),
                    i = 0;
                  i < a.length;
                  i++
                ) {
                  var c = a[i].nodeName;
                  if (0 !== c.indexOf("_") && 0 !== c.indexOf("data-"))
                    return !1;
                }
              return "none" !== t.remove ? (WN(e, r, t), !0) : void 0;
            },
            GN = function(e, t, n, r, o) {
              var i;
              return (
                MN(Id.getParents(e.dom, t.parentNode).reverse(), function(t) {
                  var a;
                  i ||
                    "_start" === t.id ||
                    "_end" === t.id ||
                    ((a = aN.matchNode(e, t, n, r, o)),
                    a && !1 !== a.split && (i = t));
                }),
                i
              );
            },
            XN = function(e, t, n, r, o, i, a, u) {
              var s,
                c,
                l,
                f,
                d,
                m,
                p = e.dom;
              if (n) {
                for (
                  m = n.parentNode, s = r.parentNode;
                  s && s !== m;
                  s = s.parentNode
                ) {
                  for (c = p.clone(s, !1), d = 0; d < t.length; d++)
                    if (YN(e, t[d], u, c, c)) {
                      c = 0;
                      break;
                    }
                  c && (l && c.appendChild(l), f || (f = c), (l = c));
                }
                !i || (a.mixed && p.isBlock(n)) || (r = p.split(n, r)),
                  l && (o.parentNode.insertBefore(l, o), f.appendChild(o));
              }
              return r;
            },
            ZN = function(e, t, n, r, o) {
              var i,
                a,
                u = e.formatter.get(t),
                s = u[0],
                c = !0,
                l = e.dom,
                f = e.selection,
                d = function(r) {
                  var i = GN(e, r, t, n, o);
                  return XN(e, u, i, r, r, !0, s, n);
                },
                m = function(e) {
                  return (
                    xd.isBookmarkNode(e) &&
                    ka.isElement(e) &&
                    ("_start" === e.id || "_end" === e.id)
                  );
                },
                p = function(t) {
                  var r, o, i, a, f;
                  if (
                    (ka.isElement(t) &&
                      l.getContentEditable(t) &&
                      ((a = c),
                      (c = "true" === l.getContentEditable(t)),
                      (f = !0)),
                    (r = Mn.grep(t.childNodes)),
                    c && !f)
                  )
                    for (o = 0, i = u.length; o < i; o++)
                      if (YN(e, u[o], n, t, t)) break;
                  if (s.deep && r.length) {
                    for (o = 0, i = r.length; o < i; o++) p(r[o]);
                    f && (c = a);
                  }
                },
                g = function(e) {
                  var t = l.get(e ? "_start" : "_end"),
                    n = t[e ? "firstChild" : "lastChild"];
                  return (
                    m(n) && (n = n[e ? "firstChild" : "lastChild"]),
                    ka.isText(n) &&
                      0 === n.data.length &&
                      (n = e
                        ? t.previousSibling || t.nextSibling
                        : t.nextSibling || t.previousSibling),
                    l.remove(t, !0),
                    n
                  );
                },
                h = function(t) {
                  var n,
                    r,
                    o = t.commonAncestorContainer;
                  if (((t = Zd.expandRng(e, t, u, !0)), s.split)) {
                    if (
                      ((t = cN.split(t)),
                      (n = jN(e, t, !0)),
                      (r = jN(e, t)),
                      n !== r)
                    ) {
                      if (
                        (/^(TR|TH|TD)$/.test(n.nodeName) &&
                          n.firstChild &&
                          (n =
                            "TR" === n.nodeName
                              ? n.firstChild.firstChild || n
                              : n.firstChild || n),
                        o &&
                          /^T(HEAD|BODY|FOOT|R)$/.test(o.nodeName) &&
                          UN(r) &&
                          r.firstChild &&
                          (r = r.firstChild || r),
                        l.isChildOf(n, r) &&
                          n !== r &&
                          !l.isBlock(r) &&
                          !UN(n) &&
                          !UN(r))
                      ) {
                        var i = VN(l, n, "span", !0, {
                          id: "_start",
                          "data-mce-type": "bookmark"
                        });
                        return d(i), void (n = g(!0));
                      }
                      (n = zN(l, n, "span", {
                        id: "_start",
                        "data-mce-type": "bookmark"
                      })),
                        (r = zN(l, r, "span", {
                          id: "_end",
                          "data-mce-type": "bookmark"
                        })),
                        d(n),
                        d(r),
                        (n = g(!0)),
                        (r = g());
                    } else n = r = d(n);
                    (t.startContainer = n.parentNode ? n.parentNode : n),
                      (t.startOffset = l.nodeIndex(n)),
                      (t.endContainer = r.parentNode ? r.parentNode : r),
                      (t.endOffset = l.nodeIndex(r) + 1);
                  }
                  em.walk(l, t, function(t) {
                    MN(t, function(t) {
                      p(t),
                        ka.isElement(t) &&
                          "underline" ===
                            e.dom.getStyle(t, "text-decoration") &&
                          t.parentNode &&
                          "underline" ===
                            Id.getTextDecoration(l, t.parentNode) &&
                          YN(
                            e,
                            {
                              deep: !1,
                              exact: !0,
                              inline: "span",
                              styles: { textDecoration: "underline" }
                            },
                            null,
                            t
                          );
                    });
                  });
                };
              if (r)
                r.nodeType
                  ? ((a = l.createRng()),
                    a.setStartBefore(r),
                    a.setEndAfter(r),
                    h(a))
                  : h(r);
              else if ("false" !== l.getContentEditable(f.getNode()))
                f.isCollapsed() &&
                s.inline &&
                !l.select("td[data-mce-selected],th[data-mce-selected]").length
                  ? SN(e, t, n, o)
                  : ((i = bl.getPersistentBookmark(e.selection, !0)),
                    h(f.getRng()),
                    f.moveToBookmark(i),
                    s.inline &&
                      aN.match(e, t, n, f.getStart()) &&
                      Id.moveStart(l, f, f.getRng()),
                    e.nodeChanged());
              else {
                r = f.getNode();
                for (var v = 0, b = u.length; v < b; v++)
                  if (u[v].ceFalseOverride && YN(e, u[v], n, r, r)) break;
              }
            },
            KN = { removeFormat: YN, remove: ZN },
            JN = Mn.each,
            QN = function(e) {
              return (
                e &&
                1 === e.nodeType &&
                !xd.isBookmarkNode(e) &&
                !Cl(e) &&
                !ka.isBogus(e)
              );
            },
            ek = function(e, t) {
              var n;
              for (n = e; n; n = n[t]) {
                if (3 === n.nodeType && 0 !== n.nodeValue.length) return e;
                if (1 === n.nodeType && !xd.isBookmarkNode(n)) return n;
              }
              return e;
            },
            tk = function(e, t, n) {
              var r,
                o,
                i = new Lm(e);
              if (
                t &&
                n &&
                ((t = ek(t, "previousSibling")),
                (n = ek(n, "nextSibling")),
                i.compare(t, n))
              ) {
                for (r = t.nextSibling; r && r !== n; )
                  (o = r), (r = r.nextSibling), t.appendChild(o);
                return (
                  e.remove(n),
                  Mn.each(Mn.grep(n.childNodes), function(e) {
                    t.appendChild(e);
                  }),
                  t
                );
              }
              return n;
            },
            nk = function(e, t, n) {
              JN(e.childNodes, function(e) {
                QN(e) && (t(e) && n(e), e.hasChildNodes() && nk(e, t, n));
              });
            },
            rk = function(e, t) {
              return i(function(t, n) {
                return !(!n || !Id.getStyle(e, n, t));
              }, t);
            },
            ok = function(e, t, n) {
              return i(
                function(t, n, r) {
                  e.setStyle(r, t, n),
                    "" === r.getAttribute("style") &&
                      r.removeAttribute("style"),
                    ik(e, r);
                },
                t,
                n
              );
            },
            ik = function(e, t) {
              "SPAN" === t.nodeName &&
                0 === e.getAttribs(t).length &&
                e.remove(t, !0);
            },
            ak = function(e, t) {
              var n;
              1 === t.nodeType &&
                t.parentNode &&
                1 === t.parentNode.nodeType &&
                ((n = Id.getTextDecoration(e, t.parentNode)),
                e.getStyle(t, "color") && n
                  ? e.setStyle(t, "text-decoration", n)
                  : e.getStyle(t, "text-decoration") === n &&
                    e.setStyle(t, "text-decoration", null));
            },
            uk = function(e, t, n, r) {
              (t.styles.color || t.styles.textDecoration) &&
                (Mn.walk(r, i(ak, e), "childNodes"), ak(e, r));
            },
            sk = function(e, t, n, r) {
              t.styles &&
                t.styles.backgroundColor &&
                nk(
                  r,
                  rk(e, "fontSize"),
                  ok(
                    e,
                    "backgroundColor",
                    Id.replaceVars(t.styles.backgroundColor, n)
                  )
                );
            },
            ck = function(e, t, n, r) {
              ("sub" !== t.inline && "sup" !== t.inline) ||
                (nk(r, rk(e, "fontSize"), ok(e, "fontSize", "")),
                e.remove(e.select("sup" === t.inline ? "sub" : "sup", r), !0));
            },
            lk = function(e, t, n, r) {
              r &&
                !1 !== t.merge_siblings &&
                ((r = tk(e, Id.getNonWhiteSpaceSibling(r), r)),
                (r = tk(e, r, Id.getNonWhiteSpaceSibling(r, !0))));
            },
            fk = function(e, t, n) {
              if (t.clear_child_styles) {
                var r = t.links ? "*:not(a)" : "*";
                JN(e.select(r, n), function(n) {
                  QN(n) &&
                    JN(t.styles, function(t, r) {
                      e.setStyle(n, r, "");
                    });
                });
              }
            },
            dk = function(e, t, n, r) {
              JN(t, function(t) {
                JN(e.dom.select(t.inline, r), function(r) {
                  QN(r) && KN.removeFormat(e, t, n, r, t.exact ? r : null);
                }),
                  fk(e.dom, t, r);
              });
            },
            mk = function(e, t, n, r, o) {
              (aN.matchNode(e, o.parentNode, n, r) &&
                KN.removeFormat(e, t, r, o)) ||
                (t.merge_with_parents &&
                  e.dom.getParent(o.parentNode, function(i) {
                    if (aN.matchNode(e, i, n, r))
                      return KN.removeFormat(e, t, r, o), !0;
                  }));
            },
            pk = {
              mergeWithChildren: dk,
              mergeUnderlineAndColor: uk,
              mergeBackgroundColorAndFontSize: sk,
              mergeSubSup: ck,
              mergeSiblings: lk,
              mergeWithParents: mk
            },
            gk = Mn.each,
            hk = function(e) {
              return (
                e &&
                1 === e.nodeType &&
                !xd.isBookmarkNode(e) &&
                !Cl(e) &&
                !ka.isBogus(e)
              );
            },
            vk = function(e, t, n, r) {
              var o,
                i,
                a = e.formatter.get(t),
                u = a[0],
                s = !r && e.selection.isCollapsed(),
                c = e.dom,
                l = e.selection,
                f = function(e, t) {
                  if (((t = t || u), e)) {
                    if (
                      (t.onformat && t.onformat(e, t, n, r),
                      gk(t.styles, function(t, r) {
                        c.setStyle(e, r, Id.replaceVars(t, n));
                      }),
                      t.styles)
                    ) {
                      var o = c.getAttrib(e, "style");
                      o && e.setAttribute("data-mce-style", o);
                    }
                    gk(t.attributes, function(t, r) {
                      c.setAttrib(e, r, Id.replaceVars(t, n));
                    }),
                      gk(t.classes, function(t) {
                        (t = Id.replaceVars(t, n)),
                          c.hasClass(e, t) || c.addClass(e, t);
                      });
                  }
                },
                d = function(e, t) {
                  var n = !1;
                  return (
                    !!u.selector &&
                    (gk(e, function(e) {
                      if (!("collapsed" in e && e.collapsed !== s))
                        return c.is(t, e.selector) && !Cl(t)
                          ? (f(t, e), (n = !0), !1)
                          : void 0;
                    }),
                    n)
                  );
                },
                m = function(r, o, i, s) {
                  var c,
                    l,
                    m = [],
                    p = !0;
                  (c = u.inline || u.block),
                    (l = r.create(c)),
                    f(l),
                    em.walk(r, o, function(o) {
                      var i,
                        g = function(o) {
                          var h, v, b, y;
                          if (
                            ((y = p),
                            (h = o.nodeName.toLowerCase()),
                            (v = o.parentNode.nodeName.toLowerCase()),
                            1 === o.nodeType &&
                              r.getContentEditable(o) &&
                              ((y = p),
                              (p = "true" === r.getContentEditable(o)),
                              (b = !0)),
                            Id.isEq(h, "br"))
                          )
                            return (i = 0), void (u.block && r.remove(o));
                          if (u.wrapper && aN.matchNode(e, o, t, n)) i = 0;
                          else {
                            if (
                              p &&
                              !b &&
                              u.block &&
                              !u.wrapper &&
                              Id.isTextBlock(e, h) &&
                              Id.isValid(e, v, c)
                            )
                              return (
                                (o = r.rename(o, c)),
                                f(o),
                                m.push(o),
                                void (i = 0)
                              );
                            if (u.selector) {
                              var C = d(a, o);
                              if (!u.inline || C) return void (i = 0);
                            }
                            !p ||
                            b ||
                            !Id.isValid(e, c, h) ||
                            !Id.isValid(e, v, c) ||
                            (!s &&
                              3 === o.nodeType &&
                              1 === o.nodeValue.length &&
                              65279 === o.nodeValue.charCodeAt(0)) ||
                            Cl(o) ||
                            (u.inline && r.isBlock(o))
                              ? ((i = 0),
                                gk(Mn.grep(o.childNodes), g),
                                b && (p = y),
                                (i = 0))
                              : (i ||
                                  ((i = r.clone(l, !1)),
                                  o.parentNode.insertBefore(i, o),
                                  m.push(i)),
                                i.appendChild(o));
                          }
                        };
                      gk(o, g);
                    }),
                    !0 === u.links &&
                      gk(m, function(e) {
                        var t = function(e) {
                          "A" === e.nodeName && f(e, u),
                            gk(Mn.grep(e.childNodes), t);
                        };
                        t(e);
                      }),
                    gk(m, function(o) {
                      var i,
                        s = function(e) {
                          var t = 0;
                          return (
                            gk(e.childNodes, function(e) {
                              Id.isWhiteSpaceNode(e) ||
                                xd.isBookmarkNode(e) ||
                                t++;
                            }),
                            t
                          );
                        },
                        c = function(e) {
                          var t = !1;
                          return (
                            gk(e.childNodes, function(e) {
                              if (hk(e)) return (t = e), !1;
                            }),
                            t
                          );
                        },
                        l = function(e) {
                          var t, n;
                          return (
                            (t = c(e)),
                            t &&
                              !xd.isBookmarkNode(t) &&
                              aN.matchName(r, t, u) &&
                              ((n = r.clone(t, !1)),
                              f(n),
                              r.replace(n, e, !0),
                              r.remove(t, 1)),
                            n || e
                          );
                        };
                      (i = s(o)),
                        (!(m.length > 1) && r.isBlock(o)) || 0 !== i
                          ? (u.inline || u.wrapper) &&
                            (u.exact || 1 !== i || (o = l(o)),
                            pk.mergeWithChildren(e, a, n, o),
                            pk.mergeWithParents(e, u, t, n, o),
                            pk.mergeBackgroundColorAndFontSize(r, u, n, o),
                            pk.mergeSubSup(r, u, n, o),
                            pk.mergeSiblings(r, u, n, o))
                          : r.remove(o, 1);
                    });
                };
              if ("false" !== c.getContentEditable(l.getNode())) {
                if (u) {
                  if (r)
                    r.nodeType
                      ? d(a, r) ||
                        ((i = c.createRng()),
                        i.setStartBefore(r),
                        i.setEndAfter(r),
                        m(c, Zd.expandRng(e, i, a), null, !0))
                      : m(c, r, null, !0);
                  else if (
                    s &&
                    u.inline &&
                    !c.select("td[data-mce-selected],th[data-mce-selected]")
                      .length
                  )
                    EN(e, t, n);
                  else {
                    var p = e.selection.getNode();
                    e.settings.forced_root_block ||
                      !a[0].defaultBlock ||
                      c.getParent(p, c.isBlock) ||
                      vk(e, a[0].defaultBlock),
                      e.selection.setRng(Zm.normalize(e.selection.getRng())),
                      (o = bl.getPersistentBookmark(e.selection, !0)),
                      m(c, Zd.expandRng(e, l.getRng(), a), o),
                      u.styles && pk.mergeUnderlineAndColor(c, u, n, p),
                      l.moveToBookmark(o),
                      Id.moveStart(c, l, l.getRng()),
                      e.nodeChanged();
                  }
                  IN.postProcess(t, e);
                }
              } else {
                r = l.getNode();
                for (var g = 0, h = a.length; g < h; g++)
                  if (a[g].ceFalseOverride && c.is(r, a[g].selector))
                    return void f(r, a[g]);
              }
            },
            bk = { applyFormat: vk },
            yk = Mn.each,
            Ck = function(e, t) {
              var n = {};
              e.set({}),
                t.on("NodeChange", function(r) {
                  var o = Id.getParents(t.dom, r.element),
                    i = {};
                  (o = Mn.grep(o, function(e) {
                    return (
                      1 === e.nodeType && !e.getAttribute("data-mce-bogus")
                    );
                  })),
                    yk(e.get(), function(e, r) {
                      yk(o, function(a) {
                        return t.formatter.matchNode(a, r, {}, e.similar)
                          ? (n[r] ||
                              (yk(e, function(e) {
                                e(!0, { node: a, format: r, parents: o });
                              }),
                              (n[r] = e)),
                            (i[r] = e),
                            !1)
                          : !aN.matchesUnInheritedFormatSelector(t, a, r) &&
                              void 0;
                      });
                    }),
                    yk(n, function(e, t) {
                      i[t] ||
                        (delete n[t],
                        yk(e, function(e) {
                          e(!1, { node: r.element, format: t, parents: o });
                        }));
                    });
                });
            },
            wk = function(e, t, n, r) {
              var o = e.get();
              yk(t.split(","), function(e) {
                o[e] || ((o[e] = []), (o[e].similar = r)), o[e].push(n);
              }),
                e.set(o);
            },
            xk = function(e, t, n, r, o) {
              null === t.get() && Ck(t, e), wk(t, n, r, o);
            },
            Ek = { formatChanged: xk },
            Sk = function(e) {
              var t = {
                valigntop: [
                  { selector: "td,th", styles: { verticalAlign: "top" } }
                ],
                valignmiddle: [
                  { selector: "td,th", styles: { verticalAlign: "middle" } }
                ],
                valignbottom: [
                  { selector: "td,th", styles: { verticalAlign: "bottom" } }
                ],
                alignleft: [
                  {
                    selector: "figure.image",
                    collapsed: !1,
                    classes: "align-left",
                    ceFalseOverride: !0,
                    preview: "font-family font-size"
                  },
                  {
                    selector:
                      "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                    styles: { textAlign: "left" },
                    inherit: !1,
                    preview: !1,
                    defaultBlock: "div"
                  },
                  {
                    selector: "img,table",
                    collapsed: !1,
                    styles: { float: "left" },
                    preview: "font-family font-size"
                  }
                ],
                aligncenter: [
                  {
                    selector:
                      "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                    styles: { textAlign: "center" },
                    inherit: !1,
                    preview: "font-family font-size",
                    defaultBlock: "div"
                  },
                  {
                    selector: "figure.image",
                    collapsed: !1,
                    classes: "align-center",
                    ceFalseOverride: !0,
                    preview: "font-family font-size"
                  },
                  {
                    selector: "img",
                    collapsed: !1,
                    styles: {
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto"
                    },
                    preview: !1
                  },
                  {
                    selector: "table",
                    collapsed: !1,
                    styles: { marginLeft: "auto", marginRight: "auto" },
                    preview: "font-family font-size"
                  }
                ],
                alignright: [
                  {
                    selector: "figure.image",
                    collapsed: !1,
                    classes: "align-right",
                    ceFalseOverride: !0,
                    preview: "font-family font-size"
                  },
                  {
                    selector:
                      "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                    styles: { textAlign: "right" },
                    inherit: !1,
                    preview: "font-family font-size",
                    defaultBlock: "div"
                  },
                  {
                    selector: "img,table",
                    collapsed: !1,
                    styles: { float: "right" },
                    preview: "font-family font-size"
                  }
                ],
                alignjustify: [
                  {
                    selector:
                      "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                    styles: { textAlign: "justify" },
                    inherit: !1,
                    defaultBlock: "div",
                    preview: "font-family font-size"
                  }
                ],
                bold: [
                  { inline: "strong", remove: "all" },
                  { inline: "span", styles: { fontWeight: "bold" } },
                  { inline: "b", remove: "all" }
                ],
                italic: [
                  { inline: "em", remove: "all" },
                  { inline: "span", styles: { fontStyle: "italic" } },
                  { inline: "i", remove: "all" }
                ],
                underline: [
                  {
                    inline: "span",
                    styles: { textDecoration: "underline" },
                    exact: !0
                  },
                  { inline: "u", remove: "all" }
                ],
                strikethrough: [
                  {
                    inline: "span",
                    styles: { textDecoration: "line-through" },
                    exact: !0
                  },
                  { inline: "strike", remove: "all" }
                ],
                forecolor: {
                  inline: "span",
                  styles: { color: "%value" },
                  links: !0,
                  remove_similar: !0,
                  clear_child_styles: !0
                },
                hilitecolor: {
                  inline: "span",
                  styles: { backgroundColor: "%value" },
                  links: !0,
                  remove_similar: !0,
                  clear_child_styles: !0
                },
                fontname: {
                  inline: "span",
                  toggle: !1,
                  styles: { fontFamily: "%value" },
                  clear_child_styles: !0
                },
                fontsize: {
                  inline: "span",
                  toggle: !1,
                  styles: { fontSize: "%value" },
                  clear_child_styles: !0
                },
                fontsize_class: {
                  inline: "span",
                  attributes: { class: "%value" }
                },
                blockquote: { block: "blockquote", wrapper: 1, remove: "all" },
                subscript: { inline: "sub" },
                superscript: { inline: "sup" },
                code: { inline: "code" },
                link: {
                  inline: "a",
                  selector: "a",
                  remove: "all",
                  split: !0,
                  deep: !0,
                  onmatch: function() {
                    return !0;
                  },
                  onformat: function(t, n, r) {
                    Mn.each(r, function(n, r) {
                      e.setAttrib(t, r, n);
                    });
                  }
                },
                removeformat: [
                  {
                    selector:
                      "b,strong,em,i,font,u,strike,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins",
                    remove: "all",
                    split: !0,
                    expand: !1,
                    block_expand: !0,
                    deep: !0
                  },
                  {
                    selector: "span",
                    attributes: ["style", "class"],
                    remove: "empty",
                    split: !0,
                    expand: !1,
                    deep: !0
                  },
                  {
                    selector: "*",
                    attributes: ["style", "class"],
                    split: !1,
                    expand: !1,
                    deep: !0
                  }
                ]
              };
              return (
                Mn.each(
                  "p h1 h2 h3 h4 h5 h6 div address pre div dt dd samp".split(
                    /\s/
                  ),
                  function(e) {
                    t[e] = { block: e, remove: "all" };
                  }
                ),
                t
              );
            },
            Nk = { get: Sk };
          function kk(e) {
            var t = {},
              n = function(e) {
                return e ? t[e] : t;
              },
              r = function(e, n) {
                e &&
                  ("string" !== typeof e
                    ? Mn.each(e, function(e, t) {
                        r(t, e);
                      })
                    : ((n = n.length ? n : [n]),
                      Mn.each(n, function(e) {
                        "undefined" === typeof e.deep && (e.deep = !e.selector),
                          "undefined" === typeof e.split &&
                            (e.split = !e.selector || e.inline),
                          "undefined" === typeof e.remove &&
                            e.selector &&
                            !e.inline &&
                            (e.remove = "none"),
                          e.selector &&
                            e.inline &&
                            ((e.mixed = !0), (e.block_expand = !0)),
                          "string" === typeof e.classes &&
                            (e.classes = e.classes.split(/\s+/));
                      }),
                      (t[e] = n)));
              },
              o = function(e) {
                return e && t[e] && delete t[e], t;
              };
            return (
              r(Nk.get(e.dom)),
              r(e.settings.formats),
              { get: n, register: r, unregister: o }
            );
          }
          var Tk = Mn.each,
            _k = pu.DOM,
            Ak = function(e, t) {
              var n,
                r,
                o,
                i = (t && t.schema) || nu({}),
                a = function(e, t) {
                  t.classes.length && _k.addClass(e, t.classes.join(" ")),
                    _k.setAttribs(e, t.attrs);
                },
                u = function(e) {
                  var t;
                  return (
                    (r =
                      "string" === typeof e
                        ? { name: e, classes: [], attrs: {} }
                        : e),
                    (t = _k.create(r.name)),
                    a(t, r),
                    t
                  );
                },
                s = function(e, t) {
                  var n = "string" !== typeof e ? e.nodeName.toLowerCase() : e,
                    r = i.getElementRule(n),
                    o = r && r.parentsRequired;
                  return (
                    !(!o || !o.length) &&
                    (t && -1 !== Mn.inArray(o, t) ? t : o[0])
                  );
                },
                c = function(e, t, n) {
                  var r,
                    o,
                    i,
                    a = t.length > 0 && t[0],
                    l = a && a.name;
                  if (((i = s(e, l)), i))
                    l === i ? ((o = t[0]), (t = t.slice(1))) : (o = i);
                  else if (a) (o = t[0]), (t = t.slice(1));
                  else if (!n) return e;
                  return (
                    o && ((r = u(o)), r.appendChild(e)),
                    n &&
                      (r || ((r = _k.create("div")), r.appendChild(e)),
                      Mn.each(n, function(t) {
                        var n = u(t);
                        r.insertBefore(n, e);
                      })),
                    c(r, t, o && o.siblings)
                  );
                };
              return e && e.length
                ? ((r = e[0]),
                  (n = u(r)),
                  (o = _k.create("div")),
                  o.appendChild(c(n, e.slice(1), r.siblings)),
                  o)
                : "";
            },
            Rk = function(e, t) {
              return Ak(Bk(e), t);
            },
            Dk = function(e) {
              var t,
                n = { classes: [], attrs: {} };
              return (
                (e = n.selector = Mn.trim(e)),
                "*" !== e &&
                  (t = e.replace(
                    /(?:([#\.]|::?)([\w\-]+)|(\[)([^\]]+)\]?)/g,
                    function(e, t, r, o, i) {
                      switch (t) {
                        case "#":
                          n.attrs.id = r;
                          break;
                        case ".":
                          n.classes.push(r);
                          break;
                        case ":":
                          -1 !==
                            Mn.inArray(
                              "checked disabled enabled read-only required".split(
                                " "
                              ),
                              r
                            ) && (n.attrs[r] = r);
                          break;
                      }
                      if ("[" === o) {
                        var a = i.match(/([\w\-]+)(?:\=\"([^\"]+))?/);
                        a && (n.attrs[a[1]] = a[2]);
                      }
                      return "";
                    }
                  )),
                (n.name = t || "div"),
                n
              );
            },
            Bk = function(e) {
              return e && "string" === typeof e
                ? ((e = e.split(/\s*,\s*/)[0]),
                  (e = e.replace(/\s*(~\+|~|\+|>)\s*/g, "$1")),
                  Mn.map(e.split(/(?:>|\s+(?![^\[\]]+\]))/), function(e) {
                    var t = Mn.map(e.split(/(?:~\+|~|\+)/), Dk),
                      n = t.pop();
                    return t.length && (n.siblings = t), n;
                  }).reverse())
                : [];
            },
            Ok = function(e, t) {
              var n,
                r,
                o,
                i,
                a,
                u,
                s = "";
              if (((u = e.settings.preview_styles), !1 === u)) return "";
              "string" !== typeof u &&
                (u =
                  "font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow");
              var c = function(e) {
                return e.replace(/%(\w+)/g, "");
              };
              if ("string" === typeof t) {
                if (((t = e.formatter.get(t)), !t)) return;
                t = t[0];
              }
              return "preview" in t && ((u = t.preview), !1 === u)
                ? ""
                : ((n = t.block || t.inline || "span"),
                  (i = Bk(t.selector)),
                  i.length
                    ? (i[0].name || (i[0].name = n),
                      (n = t.selector),
                      (r = Ak(i, e)))
                    : (r = Ak([n], e)),
                  (o = _k.select(n, r)[0] || r.firstChild),
                  Tk(t.styles, function(e, t) {
                    (e = c(e)), e && _k.setStyle(o, t, e);
                  }),
                  Tk(t.attributes, function(e, t) {
                    (e = c(e)), e && _k.setAttrib(o, t, e);
                  }),
                  Tk(t.classes, function(e) {
                    (e = c(e)), _k.hasClass(o, e) || _k.addClass(o, e);
                  }),
                  e.fire("PreviewFormats"),
                  _k.setStyles(r, { position: "absolute", left: -65535 }),
                  e.getBody().appendChild(r),
                  (a = _k.getStyle(e.getBody(), "fontSize", !0)),
                  (a = /px$/.test(a) ? parseInt(a, 10) : 0),
                  Tk(u.split(" "), function(t) {
                    var n = _k.getStyle(o, t, !0);
                    if (
                      ("background-color" !== t ||
                        !/transparent|rgba\s*\([^)]+,\s*0\)/.test(n) ||
                        ((n = _k.getStyle(e.getBody(), t, !0)),
                        "#ffffff" !== _k.toHex(n).toLowerCase())) &&
                      ("color" !== t || "#000000" !== _k.toHex(n).toLowerCase())
                    ) {
                      if ("font-size" === t && /em|%$/.test(n)) {
                        if (0 === a) return;
                        var r = parseFloat(n) / (/%$/.test(n) ? 100 : 1);
                        n = r * a + "px";
                      }
                      "border" === t && n && (s += "padding:0 2px;"),
                        (s += t + ":" + n + ";");
                    }
                  }),
                  e.fire("AfterPreviewFormats"),
                  _k.remove(r),
                  s);
            },
            Pk = { getCssText: Ok, parseSelector: Bk, selectorToHtml: Rk },
            Ik = function(e, t, n, r, o) {
              var i = t.get(n);
              !aN.match(e, n, r, o) || ("toggle" in i[0] && !i[0].toggle)
                ? bk.applyFormat(e, n, r, o)
                : KN.remove(e, n, r, o);
            },
            Lk = { toggle: Ik },
            Mk = function(e) {
              e.addShortcut("meta+b", "", "Bold"),
                e.addShortcut("meta+i", "", "Italic"),
                e.addShortcut("meta+u", "", "Underline");
              for (var t = 1; t <= 6; t++)
                e.addShortcut("access+" + t, "", ["FormatBlock", !1, "h" + t]);
              e.addShortcut("access+7", "", ["FormatBlock", !1, "p"]),
                e.addShortcut("access+8", "", ["FormatBlock", !1, "div"]),
                e.addShortcut("access+9", "", ["FormatBlock", !1, "address"]);
            },
            Fk = { setup: Mk };
          function Uk(e) {
            var t = kk(e),
              n = Ou(null);
            return (
              Fk.setup(e),
              kN(e),
              {
                get: t.get,
                register: t.register,
                unregister: t.unregister,
                apply: i(bk.applyFormat, e),
                remove: i(KN.remove, e),
                toggle: i(Lk.toggle, e, t),
                match: i(aN.match, e),
                matchAll: i(aN.matchAll, e),
                matchNode: i(aN.matchNode, e),
                canApply: i(aN.canApply, e),
                formatChanged: i(Ek.formatChanged, e, n),
                getCssText: i(Pk.getCssText, e)
              }
            );
          }
          var jk = Object.prototype.hasOwnProperty,
            zk = function(e, t) {
              return t;
            },
            Vk = function(e) {
              return function() {
                for (
                  var t = new Array(arguments.length), n = 0;
                  n < t.length;
                  n++
                )
                  t[n] = arguments[n];
                if (0 === t.length) throw new Error("Can't merge zero objects");
                for (var r = {}, o = 0; o < t.length; o++) {
                  var i = t[o];
                  for (var a in i) jk.call(i, a) && (r[a] = e(r[a], i[a]));
                }
                return r;
              };
            },
            Hk = Vk(zk),
            qk = function(e, t, n) {
              e.addAttributeFilter("data-mce-tabindex", function(e, t) {
                var n,
                  r = e.length;
                while (r--)
                  (n = e[r]),
                    n.attr("tabindex", n.attributes.map["data-mce-tabindex"]),
                    n.attr(t, null);
              }),
                e.addAttributeFilter("src,href,style", function(e, r) {
                  var o,
                    i,
                    a = e.length,
                    u = "data-mce-" + r,
                    s = t.url_converter,
                    c = t.url_converter_scope;
                  while (a--)
                    (o = e[a]),
                      (i = o.attributes.map[u]),
                      void 0 !== i
                        ? (o.attr(r, i.length > 0 ? i : null), o.attr(u, null))
                        : ((i = o.attributes.map[r]),
                          "style" === r
                            ? (i = n.serializeStyle(n.parseStyle(i), o.name))
                            : s && (i = s.call(c, i, r, o.name)),
                          o.attr(r, i.length > 0 ? i : null));
                }),
                e.addAttributeFilter("class", function(e) {
                  var t,
                    n,
                    r = e.length;
                  while (r--)
                    (t = e[r]),
                      (n = t.attr("class")),
                      n &&
                        ((n = t
                          .attr("class")
                          .replace(/(?:^|\s)mce-item-\w+(?!\S)/g, "")),
                        t.attr("class", n.length > 0 ? n : null));
                }),
                e.addAttributeFilter("data-mce-type", function(e, t, n) {
                  var r,
                    o = e.length;
                  while (o--)
                    (r = e[o]),
                      "bookmark" !== r.attributes.map["data-mce-type"] ||
                        n.cleanup ||
                        r.remove();
                }),
                e.addNodeFilter("noscript", function(e) {
                  var t,
                    n = e.length;
                  while (n--)
                    (t = e[n].firstChild), t && (t.value = $a.decode(t.value));
                }),
                e.addNodeFilter("script,style", function(e, n) {
                  var r,
                    o,
                    i,
                    a = e.length,
                    u = function(e) {
                      return e
                        .replace(/(<!--\[CDATA\[|\]\]-->)/g, "\n")
                        .replace(/^[\r\n]*|[\r\n]*$/g, "")
                        .replace(
                          /^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi,
                          ""
                        )
                        .replace(
                          /\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g,
                          ""
                        );
                    };
                  while (a--)
                    (r = e[a]),
                      (o = r.firstChild ? r.firstChild.value : ""),
                      "script" === n
                        ? ((i = r.attr("type")),
                          i &&
                            r.attr(
                              "type",
                              "mce-no/type" === i
                                ? null
                                : i.replace(/^mce\-/, "")
                            ),
                          "xhtml" === t.element_format &&
                            o.length > 0 &&
                            (r.firstChild.value =
                              "// <![CDATA[\n" + u(o) + "\n// ]]>"))
                        : "xhtml" === t.element_format &&
                          o.length > 0 &&
                          (r.firstChild.value =
                            "\x3c!--\n" + u(o) + "\n--\x3e");
                }),
                e.addNodeFilter("#comment", function(e) {
                  var t,
                    n = e.length;
                  while (n--)
                    (t = e[n]),
                      0 === t.value.indexOf("[CDATA[")
                        ? ((t.name = "#cdata"),
                          (t.type = 4),
                          (t.value = t.value.replace(/^\[CDATA\[|\]\]$/g, "")))
                        : 0 === t.value.indexOf("mce:protected ") &&
                          ((t.name = "#text"),
                          (t.type = 3),
                          (t.raw = !0),
                          (t.value = unescape(t.value).substr(14)));
                }),
                e.addNodeFilter("xml:namespace,input", function(e, t) {
                  var n,
                    r = e.length;
                  while (r--)
                    (n = e[r]),
                      7 === n.type
                        ? n.remove()
                        : 1 === n.type &&
                          ("input" !== t ||
                            "type" in n.attributes.map ||
                            n.attr("type", "text"));
                }),
                e.addAttributeFilter("data-mce-type", function(t) {
                  q(t, function(t) {
                    "format-caret" === t.attr("data-mce-type") &&
                      (t.isEmpty(e.schema.getNonEmptyElements())
                        ? t.remove()
                        : t.unwrap());
                  });
                }),
                e.addAttributeFilter(
                  "data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-type,data-mce-resize",
                  function(e, t) {
                    var n = e.length;
                    while (n--) e[n].attr(t, null);
                  }
                );
            },
            $k = function(e) {
              var t,
                n,
                r = function(e) {
                  return e && "br" === e.name;
                };
              (t = e.lastChild),
                r(t) && ((n = t.prev), r(n) && (t.remove(), n.remove()));
            },
            Wk = { register: qk, trimTrailingBr: $k },
            Yk = function(e, t, n) {
              var r,
                o,
                i,
                a = e.dom;
              return (
                (t = t.cloneNode(!0)),
                (r = document.implementation),
                r.createHTMLDocument &&
                  ((o = r.createHTMLDocument("")),
                  Mn.each("BODY" === t.nodeName ? t.childNodes : [t], function(
                    e
                  ) {
                    o.body.appendChild(o.importNode(e, !0));
                  }),
                  (t = "BODY" !== t.nodeName ? o.body.firstChild : o.body),
                  (i = a.doc),
                  (a.doc = o)),
                nw.firePreProcess(e, Hk(n, { node: t })),
                i && (a.doc = i),
                t
              );
            },
            Gk = function(e, t) {
              return e && e.hasEventListeners("PreProcess") && !t.no_events;
            },
            Xk = function(e, t, n) {
              return Gk(e, n) ? Yk(e, t, n) : t;
            },
            Zk = { process: Xk },
            Kk = function(e, t) {
              q(t, function(t) {
                e.attr(t, null);
              });
            },
            Jk = function(e, t, n) {
              e.addNodeFilter("font", function(e) {
                q(e, function(e) {
                  var r = t.parse(e.attr("style")),
                    o = e.attr("color"),
                    i = e.attr("face"),
                    a = e.attr("size");
                  o && (r.color = o),
                    i && (r["font-family"] = i),
                    a && (r["font-size"] = n[parseInt(e.attr("size"), 10) - 1]),
                    (e.name = "span"),
                    e.attr("style", t.serialize(r)),
                    Kk(e, ["color", "face", "size"]);
                });
              });
            },
            Qk = function(e, t) {
              e.addNodeFilter("strike", function(e) {
                q(e, function(e) {
                  var n = t.parse(e.attr("style"));
                  (n["text-decoration"] = "line-through"),
                    (e.name = "span"),
                    e.attr("style", t.serialize(n));
                });
              });
            },
            eT = function(e, t) {
              var n = ou();
              t.convert_fonts_to_spans &&
                Jk(e, n, Mn.explode(t.font_size_legacy_values)),
                Qk(e, n);
            },
            tT = function(e, t) {
              t.inline_styles && eT(e, t);
            },
            nT = { register: tT },
            rT = /^[ \t\r\n]*$/,
            oT = {
              "#text": 3,
              "#comment": 8,
              "#cdata": 4,
              "#pi": 7,
              "#doctype": 10,
              "#document-fragment": 11
            },
            iT = function(e, t, n) {
              var r,
                o,
                i = n ? "lastChild" : "firstChild",
                a = n ? "prev" : "next";
              if (e[i]) return e[i];
              if (e !== t) {
                if (((r = e[a]), r)) return r;
                for (o = e.parent; o && o !== t; o = o.parent)
                  if (((r = o[a]), r)) return r;
              }
            },
            aT = (function() {
              function e(e, t) {
                (this.name = e),
                  (this.type = t),
                  1 === t &&
                    ((this.attributes = []), (this.attributes.map = {}));
              }
              return (
                (e.create = function(t, n) {
                  var r, o;
                  if (((r = new e(t, oT[t] || 1)), n))
                    for (o in n) r.attr(o, n[o]);
                  return r;
                }),
                (e.prototype.replace = function(e) {
                  var t = this;
                  return e.parent && e.remove(), t.insert(e, t), t.remove(), t;
                }),
                (e.prototype.attr = function(e, t) {
                  var n,
                    r,
                    o = this;
                  if ("string" !== typeof e) {
                    for (r in e) o.attr(r, e[r]);
                    return o;
                  }
                  if ((n = o.attributes)) {
                    if (void 0 !== t) {
                      if (null === t) {
                        if (e in n.map) {
                          delete n.map[e], (r = n.length);
                          while (r--)
                            if (n[r].name === e) return (n = n.splice(r, 1)), o;
                        }
                        return o;
                      }
                      if (e in n.map) {
                        r = n.length;
                        while (r--)
                          if (n[r].name === e) {
                            n[r].value = t;
                            break;
                          }
                      } else n.push({ name: e, value: t });
                      return (n.map[e] = t), o;
                    }
                    return n.map[e];
                  }
                }),
                (e.prototype.clone = function() {
                  var t,
                    n,
                    r,
                    o,
                    i,
                    a = this,
                    u = new e(a.name, a.type);
                  if ((r = a.attributes)) {
                    for (i = [], i.map = {}, t = 0, n = r.length; t < n; t++)
                      (o = r[t]),
                        "id" !== o.name &&
                          ((i[i.length] = { name: o.name, value: o.value }),
                          (i.map[o.name] = o.value));
                    u.attributes = i;
                  }
                  return (u.value = a.value), (u.shortEnded = a.shortEnded), u;
                }),
                (e.prototype.wrap = function(e) {
                  var t = this;
                  return t.parent.insert(e, t), e.append(t), t;
                }),
                (e.prototype.unwrap = function() {
                  var e,
                    t,
                    n = this;
                  for (e = n.firstChild; e; )
                    (t = e.next), n.insert(e, n, !0), (e = t);
                  n.remove();
                }),
                (e.prototype.remove = function() {
                  var e = this,
                    t = e.parent,
                    n = e.next,
                    r = e.prev;
                  return (
                    t &&
                      (t.firstChild === e
                        ? ((t.firstChild = n), n && (n.prev = null))
                        : (r.next = n),
                      t.lastChild === e
                        ? ((t.lastChild = r), r && (r.next = null))
                        : (n.prev = r),
                      (e.parent = e.next = e.prev = null)),
                    e
                  );
                }),
                (e.prototype.append = function(e) {
                  var t,
                    n = this;
                  return (
                    e.parent && e.remove(),
                    (t = n.lastChild),
                    t
                      ? ((t.next = e), (e.prev = t), (n.lastChild = e))
                      : (n.lastChild = n.firstChild = e),
                    (e.parent = n),
                    e
                  );
                }),
                (e.prototype.insert = function(e, t, n) {
                  var r;
                  return (
                    e.parent && e.remove(),
                    (r = t.parent || this),
                    n
                      ? (t === r.firstChild
                          ? (r.firstChild = e)
                          : (t.prev.next = e),
                        (e.prev = t.prev),
                        (e.next = t),
                        (t.prev = e))
                      : (t === r.lastChild
                          ? (r.lastChild = e)
                          : (t.next.prev = e),
                        (e.next = t.next),
                        (e.prev = t),
                        (t.next = e)),
                    (e.parent = r),
                    e
                  );
                }),
                (e.prototype.getAll = function(e) {
                  var t,
                    n = this,
                    r = [];
                  for (t = n.firstChild; t; t = iT(t, n))
                    t.name === e && r.push(t);
                  return r;
                }),
                (e.prototype.empty = function() {
                  var e,
                    t,
                    n,
                    r = this;
                  if (r.firstChild) {
                    for (e = [], n = r.firstChild; n; n = iT(n, r)) e.push(n);
                    t = e.length;
                    while (t--)
                      (n = e[t]),
                        (n.parent = n.firstChild = n.lastChild = n.next = n.prev = null);
                  }
                  return (r.firstChild = r.lastChild = null), r;
                }),
                (e.prototype.isEmpty = function(e, t, n) {
                  var r,
                    o,
                    i = this,
                    a = i.firstChild;
                  if (((t = t || {}), a))
                    do {
                      if (1 === a.type) {
                        if (a.attributes.map["data-mce-bogus"]) continue;
                        if (e[a.name]) return !1;
                        r = a.attributes.length;
                        while (r--)
                          if (
                            ((o = a.attributes[r].name),
                            "name" === o ||
                              0 === o.indexOf("data-mce-bookmark"))
                          )
                            return !1;
                      }
                      if (8 === a.type) return !1;
                      if (3 === a.type && !rT.test(a.value)) return !1;
                      if (
                        3 === a.type &&
                        a.parent &&
                        t[a.parent.name] &&
                        rT.test(a.value)
                      )
                        return !1;
                      if (n && n(a)) return !1;
                    } while ((a = iT(a, i)));
                  return !0;
                }),
                (e.prototype.walk = function(e) {
                  return iT(this, null, e);
                }),
                e
              );
            })(),
            uT = function(e, t, n, r) {
              var o = e.padd_empty_with_br || t.insert;
              o && n[r.name]
                ? (r.empty().append(new aT("br", 1)).shortEnded = !0)
                : (r.empty().append(new aT("#text", 3)).value = " ");
            },
            sT = function(e) {
              return cT(e, "#text") && " " === e.firstChild.value;
            },
            cT = function(e, t) {
              return (
                e &&
                e.firstChild &&
                e.firstChild === e.lastChild &&
                e.firstChild.name === t
              );
            },
            lT = function(e, t) {
              var n = e.getElementRule(t.name);
              return n && n.paddEmpty;
            },
            fT = function(e, t, n, r) {
              return r.isEmpty(t, n, function(t) {
                return lT(e, t);
              });
            },
            dT = function(e, t) {
              return e && (t[e.name] || "br" === e.name);
            },
            mT = function(e, t) {
              var n = e.schema;
              t.remove_trailing_brs &&
                e.addNodeFilter("br", function(e, r, o) {
                  var i,
                    a,
                    u,
                    s,
                    c,
                    l,
                    f,
                    d,
                    m = e.length,
                    p = Mn.extend({}, n.getBlockElements()),
                    g = n.getNonEmptyElements(),
                    h = n.getNonEmptyElements();
                  for (p.body = 1, i = 0; i < m; i++)
                    if (
                      ((a = e[i]),
                      (u = a.parent),
                      p[a.parent.name] && a === u.lastChild)
                    ) {
                      c = a.prev;
                      while (c) {
                        if (
                          ((l = c.name),
                          "span" !== l ||
                            "bookmark" !== c.attr("data-mce-type"))
                        ) {
                          if ("br" !== l) break;
                          if ("br" === l) {
                            a = null;
                            break;
                          }
                        }
                        c = c.prev;
                      }
                      a &&
                        (a.remove(),
                        fT(n, g, h, u) &&
                          ((f = n.getElementRule(u.name)),
                          f &&
                            (f.removeEmpty
                              ? u.remove()
                              : f.paddEmpty && uT(t, o, p, u))));
                    } else {
                      s = a;
                      while (u && u.firstChild === s && u.lastChild === s) {
                        if (((s = u), p[u.name])) break;
                        u = u.parent;
                      }
                      s === u &&
                        !0 !== t.padd_empty_with_br &&
                        ((d = new aT("#text", 3)),
                        (d.value = " "),
                        a.replace(d));
                    }
                }),
                e.addAttributeFilter("href", function(e) {
                  var n,
                    r = e.length,
                    o = function(e) {
                      var t = e.split(" ").filter(function(e) {
                        return e.length > 0;
                      });
                      return t
                        .concat(["noopener"])
                        .sort()
                        .join(" ");
                    },
                    i = function(e) {
                      var t = e ? Mn.trim(e) : "";
                      return /\b(noopener)\b/g.test(t) ? t : o(t);
                    };
                  if (!t.allow_unsafe_link_target)
                    while (r--)
                      (n = e[r]),
                        "a" === n.name &&
                          "_blank" === n.attr("target") &&
                          n.attr("rel", i(n.attr("rel")));
                }),
                t.allow_html_in_named_anchor ||
                  e.addAttributeFilter("id,name", function(e) {
                    var t,
                      n,
                      r,
                      o,
                      i = e.length;
                    while (i--)
                      if (
                        ((o = e[i]),
                        "a" === o.name && o.firstChild && !o.attr("href"))
                      ) {
                        (r = o.parent), (t = o.lastChild);
                        do {
                          (n = t.prev), r.insert(t, o), (t = n);
                        } while (t);
                      }
                  }),
                t.fix_list_elements &&
                  e.addNodeFilter("ul,ol", function(e) {
                    var t,
                      n,
                      r = e.length;
                    while (r--)
                      if (
                        ((t = e[r]),
                        (n = t.parent),
                        "ul" === n.name || "ol" === n.name)
                      )
                        if (t.prev && "li" === t.prev.name) t.prev.append(t);
                        else {
                          var o = new aT("li", 1);
                          o.attr("style", "list-style-type: none"), t.wrap(o);
                        }
                  }),
                t.validate &&
                  n.getValidClasses() &&
                  e.addAttributeFilter("class", function(e) {
                    var t,
                      r,
                      o,
                      i,
                      a,
                      u,
                      s,
                      c = e.length,
                      l = n.getValidClasses();
                    while (c--) {
                      for (
                        t = e[c], r = t.attr("class").split(" "), a = "", o = 0;
                        o < r.length;
                        o++
                      )
                        (i = r[o]),
                          (s = !1),
                          (u = l["*"]),
                          u && u[i] && (s = !0),
                          (u = l[t.name]),
                          !s && u && u[i] && (s = !0),
                          s && (a && (a += " "), (a += i));
                      a.length || (a = null), t.attr("class", a);
                    }
                  });
            },
            pT = Mn.makeMap,
            gT = Mn.each,
            hT = Mn.explode,
            vT = Mn.extend;
          function bT(e, t) {
            void 0 === t && (t = nu());
            var n = {},
              r = [],
              o = {},
              i = {};
            (e = e || {}),
              (e.validate = !("validate" in e) || e.validate),
              (e.root_name = e.root_name || "body");
            var a = function(e) {
                var n, r, o, i, a, s, c, l, f, d, m, p, g, h, v, b;
                for (
                  p = pT("tr,td,th,tbody,thead,tfoot,table"),
                    d = t.getNonEmptyElements(),
                    m = t.getWhiteSpaceElements(),
                    g = t.getTextBlockElements(),
                    h = t.getSpecialElements(),
                    n = 0;
                  n < e.length;
                  n++
                )
                  if (((r = e[n]), r.parent && !r.fixed))
                    if (g[r.name] && "li" === r.parent.name) {
                      v = r.next;
                      while (v) {
                        if (!g[v.name]) break;
                        (v.name = "li"),
                          (v.fixed = !0),
                          r.parent.insert(v, r.parent),
                          (v = v.next);
                      }
                      r.unwrap(r);
                    } else {
                      for (
                        i = [r], o = r.parent;
                        o && !t.isValidChild(o.name, r.name) && !p[o.name];
                        o = o.parent
                      )
                        i.push(o);
                      if (o && i.length > 1) {
                        for (
                          i.reverse(), a = s = u(i[0].clone()), f = 0;
                          f < i.length - 1;
                          f++
                        ) {
                          for (
                            t.isValidChild(s.name, i[f].name)
                              ? ((c = u(i[f].clone())), s.append(c))
                              : (c = s),
                              l = i[f].firstChild;
                            l && l !== i[f + 1];

                          )
                            (b = l.next), c.append(l), (l = b);
                          s = c;
                        }
                        fT(t, d, m, a)
                          ? o.insert(r, i[0], !0)
                          : (o.insert(a, i[0], !0), o.insert(r, a)),
                          (o = i[0]),
                          (fT(t, d, m, o) || cT(o, "br")) && o.empty().remove();
                      } else if (r.parent) {
                        if ("li" === r.name) {
                          if (
                            ((v = r.prev),
                            v && ("ul" === v.name || "ul" === v.name))
                          ) {
                            v.append(r);
                            continue;
                          }
                          if (
                            ((v = r.next),
                            v && ("ul" === v.name || "ul" === v.name))
                          ) {
                            v.insert(r, v.firstChild, !0);
                            continue;
                          }
                          r.wrap(u(new aT("ul", 1)));
                          continue;
                        }
                        t.isValidChild(r.parent.name, "div") &&
                        t.isValidChild("div", r.name)
                          ? r.wrap(u(new aT("div", 1)))
                          : h[r.name]
                            ? r.empty().remove()
                            : r.unwrap();
                      }
                    }
              },
              u = function(e) {
                var t, a, u;
                a in n && ((u = o[a]), u ? u.push(e) : (o[a] = [e])),
                  (t = r.length);
                while (t--)
                  (a = r[t].name),
                    a in e.attributes.map &&
                      ((u = i[a]), u ? u.push(e) : (i[a] = [e]));
                return e;
              },
              s = function(e, t) {
                gT(hT(e), function(e) {
                  var r = n[e];
                  r || (n[e] = r = []), r.push(t);
                });
              },
              c = function() {
                var e = [];
                for (var t in n)
                  n.hasOwnProperty(t) && e.push({ name: t, callbacks: n[t] });
                return e;
              },
              l = function(e, t) {
                gT(hT(e), function(e) {
                  var n;
                  for (n = 0; n < r.length; n++)
                    if (r[n].name === e) return void r[n].callbacks.push(t);
                  r.push({ name: e, callbacks: [t] });
                });
              },
              f = function() {
                return [].concat(r);
              },
              d = function(u, s) {
                var c,
                  l,
                  f,
                  d,
                  m,
                  p,
                  g,
                  h,
                  v,
                  b,
                  y,
                  C = [];
                (s = s || {}),
                  (o = {}),
                  (i = {}),
                  (v = vT(
                    pT("script,style,head,html,body,title,meta,param"),
                    t.getBlockElements()
                  ));
                var w = t.getNonEmptyElements(),
                  x = t.children,
                  E = e.validate,
                  S =
                    "forced_root_block" in s
                      ? s.forced_root_block
                      : e.forced_root_block,
                  N = t.getWhiteSpaceElements(),
                  k = /^[ \t\r\n]+/,
                  T = /[ \t\r\n]+$/,
                  _ = /[ \t\r\n]+/g,
                  A = /^[ \t\r\n]+$/;
                b =
                  N.hasOwnProperty(s.context) || N.hasOwnProperty(e.root_name);
                var R = function() {
                    var n,
                      r,
                      o = P.firstChild,
                      i = function(e) {
                        e &&
                          ((o = e.firstChild),
                          o &&
                            3 === o.type &&
                            (o.value = o.value.replace(k, "")),
                          (o = e.lastChild),
                          o &&
                            3 === o.type &&
                            (o.value = o.value.replace(T, "")));
                      };
                    if (t.isValidChild(P.name, S.toLowerCase())) {
                      while (o)
                        (n = o.next),
                          3 === o.type ||
                          (1 === o.type &&
                            "p" !== o.name &&
                            !v[o.name] &&
                            !o.attr("data-mce-type"))
                            ? r
                              ? r.append(o)
                              : ((r = D(S, 1)),
                                r.attr(e.forced_root_block_attrs),
                                P.insert(r, o),
                                r.append(o))
                            : (i(r), (r = null)),
                          (o = n);
                      i(r);
                    }
                  },
                  D = function(e, t) {
                    var r,
                      i = new aT(e, t);
                    return (
                      e in n && ((r = o[e]), r ? r.push(i) : (o[e] = [i])), i
                    );
                  },
                  B = function(e) {
                    var n,
                      r,
                      o,
                      i,
                      a = t.getBlockElements();
                    for (n = e.prev; n && 3 === n.type; ) {
                      if (((o = n.value.replace(T, "")), o.length > 0))
                        return void (n.value = o);
                      if (((r = n.next), r)) {
                        if (3 === r.type && r.value.length) {
                          n = n.prev;
                          continue;
                        }
                        if (
                          !a[r.name] &&
                          "script" !== r.name &&
                          "style" !== r.name
                        ) {
                          n = n.prev;
                          continue;
                        }
                      }
                      (i = n.prev), n.remove(), (n = i);
                    }
                  },
                  O = function(e) {
                    var t,
                      n = {};
                    for (t in e) "li" !== t && "p" !== t && (n[t] = e[t]);
                    return n;
                  };
                c = yS(
                  {
                    validate: E,
                    allow_script_urls: e.allow_script_urls,
                    allow_conditional_comments: e.allow_conditional_comments,
                    self_closing_elements: O(t.getSelfClosingElements()),
                    cdata: function(e) {
                      y.append(D("#cdata", 4)).value = e;
                    },
                    text: function(e, t) {
                      var n;
                      b ||
                        ((e = e.replace(_, " ")),
                        dT(y.lastChild, v) && (e = e.replace(k, ""))),
                        0 !== e.length &&
                          ((n = D("#text", 3)),
                          (n.raw = !!t),
                          (y.append(n).value = e));
                    },
                    comment: function(e) {
                      y.append(D("#comment", 8)).value = e;
                    },
                    pi: function(e, t) {
                      (y.append(D(e, 7)).value = t), B(y);
                    },
                    doctype: function(e) {
                      var t;
                      (t = y.append(D("#doctype", 10))), (t.value = e), B(y);
                    },
                    start: function(e, n, o) {
                      var a, u, s, c, l;
                      if (((s = E ? t.getElementRule(e) : {}), s)) {
                        (a = D(s.outputName || e, 1)),
                          (a.attributes = n),
                          (a.shortEnded = o),
                          y.append(a),
                          (l = x[y.name]),
                          l && x[a.name] && !l[a.name] && C.push(a),
                          (u = r.length);
                        while (u--)
                          (c = r[u].name),
                            c in n.map &&
                              ((g = i[c]), g ? g.push(a) : (i[c] = [a]));
                        v[e] && B(a), o || (y = a), !b && N[e] && (b = !0);
                      }
                    },
                    end: function(n) {
                      var r, o, i, a, u;
                      if (((o = E ? t.getElementRule(n) : {}), o)) {
                        if (v[n] && !b) {
                          if (((r = y.firstChild), r && 3 === r.type))
                            if (((i = r.value.replace(k, "")), i.length > 0))
                              (r.value = i), (r = r.next);
                            else {
                              (a = r.next), r.remove(), (r = a);
                              while (r && 3 === r.type)
                                (i = r.value),
                                  (a = r.next),
                                  (0 === i.length || A.test(i)) &&
                                    (r.remove(), (r = a)),
                                  (r = a);
                            }
                          if (((r = y.lastChild), r && 3 === r.type))
                            if (((i = r.value.replace(T, "")), i.length > 0))
                              (r.value = i), (r = r.prev);
                            else {
                              (a = r.prev), r.remove(), (r = a);
                              while (r && 3 === r.type)
                                (i = r.value),
                                  (a = r.prev),
                                  (0 === i.length || A.test(i)) &&
                                    (r.remove(), (r = a)),
                                  (r = a);
                            }
                        }
                        if (
                          (b && N[n] && (b = !1),
                          o.removeEmpty &&
                            fT(t, w, N, y) &&
                            !y.attributes.map.name &&
                            !y.attr("id"))
                        )
                          return (
                            (u = y.parent),
                            v[y.name] ? y.empty().remove() : y.unwrap(),
                            void (y = u)
                          );
                        o.paddEmpty &&
                          (sT(y) || fT(t, w, N, y)) &&
                          uT(e, s, v, y),
                          (y = y.parent);
                      }
                    }
                  },
                  t
                );
                var P = (y = new aT(s.context || e.root_name, 11));
                if (
                  (c.parse(u),
                  E && C.length && (s.context ? (s.invalid = !0) : a(C)),
                  S && ("body" === P.name || s.isRootContent) && R(),
                  !s.invalid)
                ) {
                  for (h in o) {
                    (g = n[h]), (l = o[h]), (m = l.length);
                    while (m--) l[m].parent || l.splice(m, 1);
                    for (f = 0, d = g.length; f < d; f++) g[f](l, h, s);
                  }
                  for (f = 0, d = r.length; f < d; f++)
                    if (((g = r[f]), g.name in i)) {
                      (l = i[g.name]), (m = l.length);
                      while (m--) l[m].parent || l.splice(m, 1);
                      for (m = 0, p = g.callbacks.length; m < p; m++)
                        g.callbacks[m](l, g.name, s);
                    }
                }
                return P;
              },
              m = {
                schema: t,
                addAttributeFilter: l,
                getAttributeFilters: f,
                addNodeFilter: s,
                getNodeFilters: c,
                filterNode: u,
                parse: d
              };
            return mT(m, e), nT.register(m, e), m;
          }
          var yT = function(e, t, n) {
              -1 === Mn.inArray(t, n) &&
                (e.addAttributeFilter(n, function(e, t) {
                  var n = e.length;
                  while (n--) e[n].attr(t, null);
                }),
                t.push(n));
            },
            CT = function(e, t, n) {
              if (!t.no_events && e) {
                var r = nw.firePostProcess(e, Hk(t, { content: n }));
                return r.content;
              }
              return n;
            },
            wT = function(e, t, n) {
              var r = ws.trim(n.getInner ? t.innerHTML : e.getOuterHTML(t));
              return n.selection || sa(fo.fromDom(t)) ? r : Mn.trim(r);
            },
            xT = function(e, t, n) {
              var r = n.selection ? Hk({ forced_root_block: !1 }, n) : n,
                o = e.parse(t, r);
              return Wk.trimTrailingBr(o), o;
            },
            ET = function(e, t, n) {
              var r = Wm(e, t);
              return r.serialize(n);
            },
            ST = function(e, t, n, r, o) {
              var i = ET(t, n, r);
              return CT(e, o, i);
            };
          function NT(e, t) {
            var n,
              r,
              o,
              a = ["data-mce-selected"];
            (n = t && t.dom ? t.dom : pu.DOM),
              (r = t && t.schema ? t.schema : nu(e)),
              (e.entity_encoding = e.entity_encoding || "named"),
              (e.remove_trailing_brs =
                !("remove_trailing_brs" in e) || e.remove_trailing_brs),
              (o = bT(e, r)),
              Wk.register(o, e, n);
            var u = function(i, a) {
              var u = Hk({ format: "html" }, a || {}),
                s = Zk.process(t, i, u),
                c = wT(n, s, u),
                l = xT(o, c, u);
              return "tree" === u.format ? l : ST(t, e, r, l, u);
            };
            return {
              schema: r,
              addNodeFilter: o.addNodeFilter,
              addAttributeFilter: o.addAttributeFilter,
              serialize: u,
              addRules: function(e) {
                r.addValidElements(e);
              },
              setRules: function(e) {
                r.setValidElements(e);
              },
              addTempAttr: i(yT, o, a),
              getTempAttrs: function() {
                return a;
              }
            };
          }
          function kT(e, t) {
            var n = NT(e, t);
            return {
              schema: n.schema,
              addNodeFilter: n.addNodeFilter,
              addAttributeFilter: n.addAttributeFilter,
              serialize: n.serialize,
              addRules: n.addRules,
              setRules: n.setRules,
              addTempAttr: n.addTempAttr,
              getTempAttrs: n.getTempAttrs
            };
          }
          function TT(e) {
            return {
              getBookmark: i(xd.getBookmark, e),
              moveToBookmark: i(xd.moveToBookmark, e)
            };
          }
          (function(e) {
            e.isBookmarkNode = xd.isBookmarkNode;
          })(TT || (TT = {}));
          var _T,
            AT = TT,
            RT = ka.isContentEditableFalse,
            DT = ka.isContentEditableTrue,
            BT = function(e, t) {
              while (t && t !== e) {
                if (DT(t) || RT(t)) return t;
                t = t.parentNode;
              }
              return null;
            },
            OT = function(e, t) {
              var n,
                r,
                o,
                i,
                a,
                u,
                s,
                c,
                l,
                f,
                d,
                m,
                p,
                g,
                h,
                v,
                b,
                y = t.dom,
                C = Mn.each,
                w = t.getDoc(),
                x = document,
                E = Math.abs,
                S = Math.round,
                N = t.getBody();
              i = {
                nw: [0, 0, -1, -1],
                ne: [1, 0, 1, -1],
                se: [1, 1, 1, 1],
                sw: [0, 1, -1, 1]
              };
              var k = ".mce-content-body";
              t.contentStyles.push(
                k +
                  " div.mce-resizehandle {position: absolute;border: 1px solid black;box-sizing: content-box;background: #FFF;width: 7px;height: 7px;z-index: 10000}" +
                  k +
                  " .mce-resizehandle:hover {background: #000}" +
                  k +
                  " img[data-mce-selected]," +
                  k +
                  " hr[data-mce-selected] {outline: 1px solid black;resize: none}" +
                  k +
                  " .mce-clonedresizable {position: absolute;" +
                  (ke.gecko ? "" : "outline: 1px dashed black;") +
                  "opacity: .5;filter: alpha(opacity=50);z-index: 10000}" +
                  k +
                  " .mce-resize-helper {background: #555;background: rgba(0,0,0,0.75);border-radius: 3px;border: 1px;color: white;display: none;font-family: sans-serif;font-size: 12px;white-space: nowrap;line-height: 14px;margin: 5px 10px;padding: 5px;position: absolute;z-index: 10001}"
              );
              var T = function(e) {
                  return (
                    e && ("IMG" === e.nodeName || t.dom.is(e, "figure.image"))
                  );
                },
                _ = function(e, t) {
                  return (
                    T(e.target) && !KE.isXYWithinRange(e.clientX, e.clientY, t)
                  );
                },
                A = function(e) {
                  var n = e.target;
                  _(e, t.selection.getRng()) &&
                    !e.isDefaultPrevented() &&
                    (e.preventDefault(), t.selection.select(n));
                },
                R = function(e) {
                  return t.dom.is(e, "figure.image")
                    ? e.querySelector("img")
                    : e;
                },
                D = function(e) {
                  var n = t.settings.object_resizing;
                  return (
                    !1 !== n &&
                    !ke.iOS &&
                    ("string" !== typeof n &&
                      (n = "table,img,figure.image,div"),
                    "false" !== e.getAttribute("data-mce-resize") &&
                      (e !== t.getBody() && Ko(fo.fromDom(e), n)))
                  );
                },
                B = function(e) {
                  var i, C, w, x, k;
                  (i = e.screenX - u),
                    (C = e.screenY - s),
                    (g = i * a[2] + f),
                    (h = C * a[3] + d),
                    (g = g < 5 ? 5 : g),
                    (h = h < 5 ? 5 : h),
                    (w =
                      T(n) && !1 !== t.settings.resize_img_proportional
                        ? !uS.modifierPressed(e)
                        : uS.modifierPressed(e) || (T(n) && a[2] * a[3] !== 0)),
                    w &&
                      (E(i) > E(C)
                        ? ((h = S(g * m)), (g = S(h / m)))
                        : ((g = S(h / m)), (h = S(g * m)))),
                    y.setStyles(R(r), { width: g, height: h }),
                    (x = a.startPos.x + i),
                    (k = a.startPos.y + C),
                    (x = x > 0 ? x : 0),
                    (k = k > 0 ? k : 0),
                    y.setStyles(o, { left: x, top: k, display: "block" }),
                    (o.innerHTML = g + " &times; " + h),
                    a[2] < 0 &&
                      r.clientWidth <= g &&
                      y.setStyle(r, "left", c + (f - g)),
                    a[3] < 0 &&
                      r.clientHeight <= h &&
                      y.setStyle(r, "top", l + (d - h)),
                    (i = N.scrollWidth - v),
                    (C = N.scrollHeight - b),
                    i + C !== 0 && y.setStyles(o, { left: x - i, top: k - C }),
                    p || (nw.fireObjectResizeStart(t, n, f, d), (p = !0));
                },
                O = function() {
                  p = !1;
                  var e = function(e, r) {
                    r &&
                      (n.style[e] ||
                      !t.schema.isValid(n.nodeName.toLowerCase(), e)
                        ? y.setStyle(R(n), e, r)
                        : y.setAttrib(R(n), e, r));
                  };
                  e("width", g),
                    e("height", h),
                    y.unbind(w, "mousemove", B),
                    y.unbind(w, "mouseup", O),
                    x !== w &&
                      (y.unbind(x, "mousemove", B), y.unbind(x, "mouseup", O)),
                    y.remove(r),
                    y.remove(o),
                    P(n),
                    nw.fireObjectResized(t, n, g, h),
                    y.setAttrib(n, "style", y.getAttrib(n, "style")),
                    t.nodeChanged();
                },
                P = function(e) {
                  var p, E, S, k, T;
                  I(),
                    F(),
                    (p = y.getPos(e, N)),
                    (c = p.x),
                    (l = p.y),
                    (T = e.getBoundingClientRect()),
                    (E = T.width || T.right - T.left),
                    (S = T.height || T.bottom - T.top),
                    n !== e && ((n = e), (g = h = 0)),
                    (k = t.fire("ObjectSelected", { target: e })),
                    D(e) && !k.isDefaultPrevented()
                      ? C(i, function(e, t) {
                          var i,
                            p = function(t) {
                              (u = t.screenX),
                                (s = t.screenY),
                                (f = R(n).clientWidth),
                                (d = R(n).clientHeight),
                                (m = d / f),
                                (a = e),
                                (e.startPos = {
                                  x: E * e[0] + c,
                                  y: S * e[1] + l
                                }),
                                (v = N.scrollWidth),
                                (b = N.scrollHeight),
                                (r = n.cloneNode(!0)),
                                y.addClass(r, "mce-clonedresizable"),
                                y.setAttrib(r, "data-mce-bogus", "all"),
                                (r.contentEditable = !1),
                                (r.unSelectabe = !0),
                                y.setStyles(r, { left: c, top: l, margin: 0 }),
                                r.removeAttribute("data-mce-selected"),
                                N.appendChild(r),
                                y.bind(w, "mousemove", B),
                                y.bind(w, "mouseup", O),
                                x !== w &&
                                  (y.bind(x, "mousemove", B),
                                  y.bind(x, "mouseup", O)),
                                (o = y.add(
                                  N,
                                  "div",
                                  {
                                    class: "mce-resize-helper",
                                    "data-mce-bogus": "all"
                                  },
                                  f + " &times; " + d
                                ));
                            };
                          (i = y.get("mceResizeHandle" + t)),
                            i && y.remove(i),
                            (i = y.add(N, "div", {
                              id: "mceResizeHandle" + t,
                              "data-mce-bogus": "all",
                              class: "mce-resizehandle",
                              unselectable: !0,
                              style:
                                "cursor:" + t + "-resize; margin:0; padding:0"
                            })),
                            11 === ke.ie && (i.contentEditable = !1),
                            y.bind(i, "mousedown", function(e) {
                              e.stopImmediatePropagation(),
                                e.preventDefault(),
                                p(e);
                            }),
                            (e.elm = i),
                            y.setStyles(i, {
                              left: E * e[0] + c - i.offsetWidth / 2,
                              top: S * e[1] + l - i.offsetHeight / 2
                            });
                        })
                      : I(),
                    n.setAttribute("data-mce-selected", "1");
                },
                I = function() {
                  var e, t;
                  for (e in (F(),
                  n && n.removeAttribute("data-mce-selected"),
                  i))
                    (t = y.get("mceResizeHandle" + e)),
                      t && (y.unbind(t), y.remove(t));
                },
                L = function(n) {
                  var r,
                    o,
                    i = function(e, t) {
                      if (e)
                        do {
                          if (e === t) return !0;
                        } while ((e = e.parentNode));
                    };
                  p ||
                    t.removed ||
                    (C(
                      y.select("img[data-mce-selected],hr[data-mce-selected]"),
                      function(e) {
                        e.removeAttribute("data-mce-selected");
                      }
                    ),
                    (o = "mousedown" === n.type ? n.target : e.getNode()),
                    (o = y.$(o).closest("table,img,figure.image,hr")[0]),
                    i(o, N) &&
                    (U(), (r = e.getStart(!0)), i(r, o) && i(e.getEnd(!0), o))
                      ? P(o)
                      : I());
                },
                M = function(e) {
                  return RT(BT(t.getBody(), e));
                },
                F = function() {
                  for (var e in i) {
                    var t = i[e];
                    t.elm && (y.unbind(t.elm), delete t.elm);
                  }
                },
                U = function() {
                  try {
                    t.getDoc().execCommand("enableObjectResizing", !1, !1);
                  } catch (e) {}
                };
              t.on("init", function() {
                U(),
                  ke.ie &&
                    ke.ie >= 11 &&
                    (t.on("mousedown click", function(e) {
                      var n = e.target,
                        r = n.nodeName;
                      p ||
                        !/^(TABLE|IMG|HR)$/.test(r) ||
                        M(n) ||
                        (2 !== e.button && t.selection.select(n, "TABLE" === r),
                        "mousedown" === e.type && t.nodeChanged());
                    }),
                    t.dom.bind(N, "mscontrolselect", function(e) {
                      var n = function(e) {
                        Ie.setEditorTimeout(t, function() {
                          t.selection.select(e);
                        });
                      };
                      if (M(e.target))
                        return e.preventDefault(), void n(e.target);
                      /^(TABLE|IMG|HR)$/.test(e.target.nodeName) &&
                        (e.preventDefault(),
                        "IMG" === e.target.tagName && n(e.target));
                    }));
                var e = Ie.throttle(function(e) {
                  t.composing || L(e);
                });
                t.on(
                  "nodechange ResizeEditor ResizeWindow drop FullscreenStateChanged",
                  e
                ),
                  t.on("keyup compositionend", function(t) {
                    n && "TABLE" === n.nodeName && e(t);
                  }),
                  t.on("hide blur", I),
                  t.on("contextmenu", A);
              }),
                t.on("remove", F);
              var j = function() {
                n = r = null;
              };
              return {
                isResizable: D,
                showResizeRect: P,
                hideResizeRect: I,
                updateResizeRect: L,
                destroy: j
              };
            },
            PT = function(e) {
              var t = 0,
                n = 0,
                r = e;
              while (r && r.nodeType)
                (t += r.offsetLeft || 0),
                  (n += r.offsetTop || 0),
                  (r = r.offsetParent);
              return { x: t, y: n };
            },
            IT = function(e, t, n) {
              var r = { elm: t, alignToTop: n };
              return e.fire("scrollIntoView", r), r.isDefaultPrevented();
            },
            LT = function(e, t, n) {
              var r,
                o,
                i,
                a,
                u = e.dom,
                s = u.getRoot(),
                c = 0;
              if (!IT(e, t, n) && ka.isElement(t)) {
                if ((!1 === n && (c = t.offsetHeight), "BODY" !== s.nodeName)) {
                  var l = e.selection.getScrollContainer();
                  if (l)
                    return (
                      (r = PT(t).y - PT(l).y + c),
                      (a = l.clientHeight),
                      (i = l.scrollTop),
                      void (
                        (r < i || r + 25 > i + a) &&
                        (l.scrollTop = r < i ? r : r - a + 25)
                      )
                    );
                }
                (o = u.getViewPort(e.getWin())),
                  (r = u.getPos(t).y + c),
                  (i = o.y),
                  (a = o.h),
                  (r < o.y || r + 25 > i + a) &&
                    e.getWin().scrollTo(0, r < i ? r : r - a + 25);
              }
            },
            MT = function(e) {
              if (e.inline) return e.getBody().getBoundingClientRect();
              var t = e.getWin();
              return {
                left: 0,
                right: t.innerWidth,
                top: 0,
                bottom: t.innerHeight,
                width: t.innerWidth,
                height: t.innerHeight
              };
            },
            FT = function(e, t, n) {
              e.inline
                ? ((e.getBody().scrollLeft += t), (e.getBody().scrollTop += n))
                : e.getWin().scrollBy(t, n);
            },
            UT = function(e, t) {
              se(Uc.fromRangeStart(t).getClientRects()).each(function(t) {
                var n = MT(e),
                  r = cc(n, t),
                  o = 4,
                  i = r.x > 0 ? r.x + o : r.x - o,
                  a = r.y > 0 ? r.y + o : r.y - o;
                FT(e, 0 !== r.x ? i : 0, 0 !== r.y ? a : 0);
              });
            },
            jT = { scrollElementIntoView: LT, scrollRangeIntoView: UT },
            zT = function(e) {
              return (
                ka.isContentEditableTrue(e) || ka.isContentEditableFalse(e)
              );
            },
            VT = function(e, t, n) {
              while (e && e !== t) {
                if (n(e)) return e;
                e = e.parentNode;
              }
              return null;
            },
            HT = function(e, t, n) {
              var r, o, i;
              if (
                ((r = n.elementFromPoint(e, t)),
                (o = n.body.createTextRange()),
                (r && "HTML" !== r.tagName) || (r = n.body),
                o.moveToElementText(r),
                (i = Mn.toArray(o.getClientRects())),
                (i = i.sort(function(e, n) {
                  return (
                    (e = Math.abs(Math.max(e.top - t, e.bottom - t))),
                    (n = Math.abs(Math.max(n.top - t, n.bottom - t))),
                    e - n
                  );
                })),
                i.length > 0)
              ) {
                t = (i[0].bottom + i[0].top) / 2;
                try {
                  return o.moveToPoint(e, t), o.collapse(!0), o;
                } catch (a) {}
              }
              return null;
            },
            qT = function(e, t) {
              var n = e && e.parentElement ? e.parentElement() : null;
              return ka.isContentEditableFalse(VT(n, t, zT)) ? null : e;
            },
            $T = function(e, t, n) {
              var r,
                o,
                i = n;
              if (i.caretPositionFromPoint)
                (o = i.caretPositionFromPoint(e, t)),
                  o &&
                    ((r = n.createRange()),
                    r.setStart(o.offsetNode, o.offset),
                    r.collapse(!0));
              else if (n.caretRangeFromPoint) r = n.caretRangeFromPoint(e, t);
              else if (i.body.createTextRange) {
                r = i.body.createTextRange();
                try {
                  r.moveToPoint(e, t), r.collapse(!0);
                } catch (a) {
                  r = HT(e, t, n);
                }
                return qT(r, n.body);
              }
              return r;
            },
            WT = { fromPoint: $T },
            YT = function(e, t) {
              return H(t, function(t) {
                var n = e.fire("GetSelectionRange", { range: t });
                return n.range !== t ? n.range : t;
              });
            },
            GT = { processRanges: YT },
            XT = function(e, t) {
              var n = t || document,
                r = n.createDocumentFragment();
              return (
                q(e, function(e) {
                  r.appendChild(e.dom());
                }),
                fo.fromDom(r)
              );
            },
            ZT = zo("element", "width", "rows"),
            KT = zo("element", "cells"),
            JT = zo("x", "y"),
            QT = function(e, t) {
              var n = parseInt(Do(e, t), 10);
              return isNaN(n) ? 1 : n;
            },
            e_ = function(e, t, n, r, o) {
              for (
                var i = QT(o, "rowspan"),
                  a = QT(o, "colspan"),
                  u = e.rows(),
                  s = n;
                s < n + i;
                s++
              ) {
                u[s] || (u[s] = KT(ps(r), []));
                for (var c = t; c < t + a; c++) {
                  var l = u[s].cells();
                  l[c] = s === n && c === t ? o : ms(o);
                }
              }
            },
            t_ = function(e, t, n) {
              var r = e.rows(),
                o = r[n] ? r[n].cells() : [];
              return !!o[t];
            },
            n_ = function(e, t, n) {
              while (t_(e, t, n)) t++;
              return t;
            },
            r_ = function(e) {
              return X(
                e,
                function(e, t) {
                  return t.cells().length > e ? t.cells().length : e;
                },
                0
              );
            },
            o_ = function(e, t) {
              for (var n = e.rows(), r = 0; r < n.length; r++)
                for (var o = n[r].cells(), i = 0; i < o.length; i++)
                  if (ti(o[i], t)) return A.some(JT(i, r));
              return A.none();
            },
            i_ = function(e, t, n, r, o) {
              for (var i = [], a = e.rows(), u = n; u <= o; u++) {
                var s = a[u].cells(),
                  c = t < r ? s.slice(t, r + 1) : s.slice(r, t + 1);
                i.push(KT(a[u].element(), c));
              }
              return i;
            },
            a_ = function(e, t, n) {
              var r = t.x(),
                o = t.y(),
                i = n.x(),
                a = n.y(),
                u = o < a ? i_(e, r, o, i, a) : i_(e, r, a, i, o);
              return ZT(e.element(), r_(u), u);
            },
            u_ = function(e, t) {
              var n = ms(e.element()),
                r = fo.fromTag("tbody");
              return Tu(r, t), Su(n, r), n;
            },
            s_ = function(e) {
              return H(e.rows(), function(e) {
                var t = H(e.cells(), function(e) {
                    var t = ps(e);
                    return Oo(t, "colspan"), Oo(t, "rowspan"), t;
                  }),
                  n = ms(e.element());
                return Tu(n, t), n;
              });
            },
            c_ = function(e) {
              var t = ZT(ms(e), 0, []);
              return (
                q($u(e, "tr"), function(e, n) {
                  q($u(e, "td,th"), function(r, o) {
                    e_(t, n_(t, o, n), n, e, r);
                  });
                }),
                ZT(t.element(), r_(t.rows()), t.rows())
              );
            },
            l_ = function(e) {
              return u_(e, s_(e));
            },
            f_ = function(e, t, n) {
              return o_(e, t).bind(function(t) {
                return o_(e, n).map(function(n) {
                  return a_(e, t, n);
                });
              });
            },
            d_ = { fromDom: c_, toDom: l_, subsection: f_ },
            m_ = function(e) {
              return Z(e, function(e) {
                return "ul" === ho(e) || "ol" === ho(e);
              });
            },
            p_ = function(e, t) {
              return Z(e, function(e) {
                return "li" === ho(e) && Yx(e, t);
              }).fold(r([]), function(t) {
                return m_(e)
                  .map(function(e) {
                    return [fo.fromTag("li"), fo.fromTag(ho(e))];
                  })
                  .getOr([]);
              });
            },
            g_ = function(e, t) {
              var n = X(
                t,
                function(e, t) {
                  return Su(t, e), t;
                },
                e
              );
              return t.length > 0 ? XT([n]) : n;
            },
            h_ = function(e) {
              return oa(e)
                ? ci(e)
                    .filter(ra)
                    .fold(r([]), function(t) {
                      return [e, t];
                    })
                : ra(e)
                  ? [e]
                  : [];
            },
            v_ = function(e, t) {
              var n = fo.fromDom(t.commonAncestorContainer),
                r = Ng.parentsAndSelf(n, e),
                o = Y(r, function(e) {
                  return ea(e) || Ji(e);
                }),
                i = p_(r, t),
                a = o.concat(i.length ? i : h_(n));
              return H(a, ms);
            },
            b_ = function() {
              return XT([]);
            },
            y_ = function(e, t) {
              return g_(fo.fromDom(t.cloneContents()), v_(e, t));
            },
            C_ = function(e, t) {
              return Xu(t, "table", i(ti, e));
            },
            w_ = function(e, t) {
              return C_(e, t[0])
                .bind(function(e) {
                  var n = t[0],
                    r = t[t.length - 1],
                    o = d_.fromDom(e);
                  return d_.subsection(o, n, r).map(function(e) {
                    return XT([d_.toDom(e)]);
                  });
                })
                .getOrThunk(b_);
            },
            x_ = function(e, t) {
              return t.length > 0 && t[0].collapsed ? b_() : y_(e, t[0]);
            },
            E_ = function(e, t) {
              var n = Bb.getCellsFromElementOrRanges(t, e);
              return n.length > 0 ? w_(e, n) : x_(e, t);
            },
            S_ = { read: E_ },
            N_ = function(e) {
              return A.from(e.selection.getRng())
                .map(function(e) {
                  return ws.trim(e.toString());
                })
                .getOr("");
            },
            k_ = function(e, t) {
              var n,
                r = e.selection.getRng(),
                o = e.dom.create("body"),
                i = e.selection.getSel(),
                a = GT.processRanges(e, Tb.getRanges(i));
              return (
                r.cloneContents
                  ? ((n = t.contextual
                      ? S_.read(fo.fromDom(e.getBody()), a).dom()
                      : r.cloneContents()),
                    n && o.appendChild(n))
                  : (o.innerHTML = r.toString()),
                e.selection.serializer.serialize(o, t)
              );
            },
            T_ = function(e, t) {
              if (
                (void 0 === t && (t = {}),
                (t.get = !0),
                (t.format = t.format || "html"),
                (t.selection = !0),
                (t = e.fire("BeforeGetContent", t)),
                t.isDefaultPrevented())
              )
                return e.fire("GetContent", t), t.content;
              if ("text" === t.format) return N_(e);
              t.getInner = !0;
              var n = k_(e, t);
              return "tree" === t.format
                ? n
                : ((t.content = e.selection.isCollapsed() ? "" : n),
                  e.fire("GetContent", t),
                  t.content);
            },
            __ = { getContent: T_ },
            A_ = function(e, t, n) {
              var r,
                o,
                i,
                a = e.selection.getRng(),
                u = e.getDoc();
              if (
                ((n = n || { format: "html" }),
                (n.set = !0),
                (n.selection = !0),
                (n.content = t),
                n.no_events ||
                  ((n = e.fire("BeforeSetContent", n)),
                  !n.isDefaultPrevented()))
              ) {
                if (((t = n.content), a.insertNode)) {
                  (t += '<span id="__caret">_</span>'),
                    a.startContainer === u && a.endContainer === u
                      ? (u.body.innerHTML = t)
                      : (a.deleteContents(),
                        0 === u.body.childNodes.length
                          ? (u.body.innerHTML = t)
                          : a.createContextualFragment
                            ? a.insertNode(a.createContextualFragment(t))
                            : ((o = u.createDocumentFragment()),
                              (i = u.createElement("div")),
                              o.appendChild(i),
                              (i.outerHTML = t),
                              a.insertNode(o))),
                    (r = e.dom.get("__caret")),
                    (a = u.createRange()),
                    a.setStartBefore(r),
                    a.setEndBefore(r),
                    e.selection.setRng(a),
                    e.dom.remove("__caret");
                  try {
                    e.selection.setRng(a);
                  } catch (s) {}
                } else
                  a.item &&
                    (u.execCommand("Delete", !1, null), (a = e.getRng())),
                    /^\s+/.test(t)
                      ? (a.pasteHTML('<span id="__mce_tmp">_</span>' + t),
                        e.dom.remove("__mce_tmp"))
                      : a.pasteHTML(t);
                n.no_events || e.fire("SetContent", n);
              } else e.fire("SetContent", n);
            },
            R_ = { setContent: A_ },
            D_ = function(e, t, n, r, o) {
              var i = n ? t.startContainer : t.endContainer,
                a = n ? t.startOffset : t.endOffset;
              return A.from(i)
                .map(fo.fromDom)
                .map(function(e) {
                  return r && t.collapsed ? e : hi(e, o(e, a)).getOr(e);
                })
                .bind(function(e) {
                  return yo(e) ? A.some(e) : ci(e);
                })
                .map(function(e) {
                  return e.dom();
                })
                .getOr(e);
            },
            B_ = function(e, t, n) {
              return D_(e, t, !0, n, function(e, t) {
                return Math.min(yi(e), t);
              });
            },
            O_ = function(e, t, n) {
              return D_(e, t, !1, n, function(e, t) {
                return t > 0 ? t - 1 : t;
              });
            },
            P_ = function(e, t) {
              var n = e;
              while (e && ka.isText(e) && 0 === e.length)
                e = t ? e.nextSibling : e.previousSibling;
              return e || n;
            },
            I_ = function(e, t) {
              var n, r, o, i, a;
              return t
                ? ((r = t.startContainer),
                  (o = t.endContainer),
                  (i = t.startOffset),
                  (a = t.endOffset),
                  (n = t.commonAncestorContainer),
                  !t.collapsed &&
                  (r === o &&
                    a - i < 2 &&
                    r.hasChildNodes() &&
                    (n = r.childNodes[i]),
                  3 === r.nodeType &&
                    3 === o.nodeType &&
                    ((r =
                      r.length === i ? P_(r.nextSibling, !0) : r.parentNode),
                    (o = 0 === a ? P_(o.previousSibling, !1) : o.parentNode),
                    r && r === o))
                    ? r
                    : n && 3 === n.nodeType
                      ? n.parentNode
                      : n)
                : e;
            },
            L_ = function(e, t, n, r) {
              var o,
                i,
                a = [];
              if (
                ((i = e.getRoot()),
                (n = e.getParent(n || B_(i, t, t.collapsed), e.isBlock)),
                (r = e.getParent(r || O_(i, t, t.collapsed), e.isBlock)),
                n && n !== i && a.push(n),
                n && r && n !== r)
              ) {
                o = n;
                var u = new Fi(n, i);
                while ((o = u.next()) && o !== r) e.isBlock(o) && a.push(o);
              }
              return r && n !== r && r !== i && a.push(r), a;
            },
            M_ = function(e, t, n) {
              return A.from(t).map(function(t) {
                var r = e.nodeIndex(t),
                  o = e.createRng();
                return (
                  o.setStart(t.parentNode, r),
                  o.setEnd(t.parentNode, r + 1),
                  n && (Gx(e, o, t, !0), Gx(e, o, t, !1)),
                  o
                );
              });
            },
            F_ = Mn.each,
            U_ = function(e) {
              return !!e.select;
            },
            j_ = function(e) {
              return (
                !(!e || !e.ownerDocument) &&
                ii(fo.fromDom(e.ownerDocument), fo.fromDom(e))
              );
            },
            z_ = function(e) {
              return (
                !!e && (!!U_(e) || (j_(e.startContainer) && j_(e.endContainer)))
              );
            },
            V_ = function(e, t, n, r) {
              var o,
                i,
                a,
                u,
                s,
                c = function(t, n) {
                  var o = e.createRng();
                  t
                    ? (o.setStart(t, n), o.setEnd(t, n), w(o), b(!1))
                    : (Gx(e, o, r.getBody(), !0), w(o));
                },
                l = function(e) {
                  return __.getContent(r, e);
                },
                f = function(e, t) {
                  return R_.setContent(r, e, t);
                },
                d = function(e) {
                  return B_(r.getBody(), C(), e);
                },
                m = function(e) {
                  return O_(r.getBody(), C(), e);
                },
                p = function(e, t) {
                  return o.getBookmark(e, t);
                },
                g = function(e) {
                  return o.moveToBookmark(e);
                },
                h = function(t, n) {
                  return M_(e, t, n).each(w), t;
                },
                v = function() {
                  var e = C(),
                    t = y();
                  return (
                    !(!e || e.item) &&
                    (e.compareEndPoints
                      ? 0 === e.compareEndPoints("StartToEnd", e)
                      : !t || e.collapsed)
                  );
                },
                b = function(e) {
                  var t = C();
                  t.collapse(!!e), w(t);
                },
                y = function() {
                  return t.getSelection
                    ? t.getSelection()
                    : t.document.selection;
                },
                C = function() {
                  var n,
                    o,
                    i,
                    s,
                    c = function(e, t, n) {
                      try {
                        return t.compareBoundaryPoints(e, n);
                      } catch (r) {
                        return -1;
                      }
                    };
                  if (!t) return null;
                  if (
                    ((s = t.document), "undefined" === typeof s || null === s)
                  )
                    return null;
                  if (void 0 !== r.bookmark && !1 === Lw.hasFocus(r)) {
                    var l = PC.getRng(r);
                    if (l.isSome())
                      return l
                        .map(function(e) {
                          return GT.processRanges(r, [e])[0];
                        })
                        .getOr(s.createRange());
                  }
                  try {
                    (n = y()) &&
                      (o =
                        n.rangeCount > 0
                          ? n.getRangeAt(0)
                          : n.createRange
                            ? n.createRange()
                            : s.createRange());
                  } catch (f) {}
                  return (
                    (o = GT.processRanges(r, [o])[0]),
                    o ||
                      (o = s.createRange
                        ? s.createRange()
                        : s.body.createTextRange()),
                    o.setStart &&
                      9 === o.startContainer.nodeType &&
                      o.collapsed &&
                      ((i = e.getRoot()), o.setStart(i, 0), o.setEnd(i, 0)),
                    a &&
                      u &&
                      (0 === c(o.START_TO_START, o, a) &&
                      0 === c(o.END_TO_END, o, a)
                        ? (o = u)
                        : ((a = null), (u = null))),
                    o
                  );
                },
                w = function(e, t) {
                  var n, o, i;
                  if (z_(e)) {
                    var s = U_(e) ? e : null;
                    if (s) {
                      u = null;
                      try {
                        s.select();
                      } catch (c) {}
                    } else {
                      if (
                        ((n = y()),
                        (i = r.fire("SetSelectionRange", {
                          range: e,
                          forward: t
                        })),
                        (e = i.range),
                        n)
                      ) {
                        u = e;
                        try {
                          n.removeAllRanges(), n.addRange(e);
                        } catch (c) {}
                        !1 === t &&
                          n.extend &&
                          (n.collapse(e.endContainer, e.endOffset),
                          n.extend(e.startContainer, e.startOffset)),
                          (a = n.rangeCount > 0 ? n.getRangeAt(0) : null);
                      }
                      e.collapsed ||
                        e.startContainer !== e.endContainer ||
                        !n.setBaseAndExtent ||
                        ke.ie ||
                        (e.endOffset - e.startOffset < 2 &&
                          e.startContainer.hasChildNodes() &&
                          ((o = e.startContainer.childNodes[e.startOffset]),
                          o &&
                            "IMG" === o.tagName &&
                            (n.setBaseAndExtent(
                              e.startContainer,
                              e.startOffset,
                              e.endContainer,
                              e.endOffset
                            ),
                            (n.anchorNode === e.startContainer &&
                              n.focusNode === e.endContainer) ||
                              n.setBaseAndExtent(o, 0, o, 1)))),
                        r.fire("AfterSetSelectionRange", {
                          range: e,
                          forward: t
                        });
                    }
                  }
                },
                x = function(t) {
                  return f(e.getOuterHTML(t)), t;
                },
                E = function() {
                  return I_(r.getBody(), C());
                },
                S = function(t, n) {
                  return L_(e, C(), t, n);
                },
                N = function() {
                  var t,
                    n,
                    r = y();
                  return (
                    !(r && r.anchorNode && r.focusNode) ||
                    ((t = e.createRng()),
                    t.setStart(r.anchorNode, r.anchorOffset),
                    t.collapse(!0),
                    (n = e.createRng()),
                    n.setStart(r.focusNode, r.focusOffset),
                    n.collapse(!0),
                    t.compareBoundaryPoints(t.START_TO_START, n) <= 0)
                  );
                },
                k = function() {
                  var t = C(),
                    n = y();
                  if (!Tb.hasMultipleRanges(n) && Xx(r)) {
                    var o = rC.normalize(e, t);
                    return (
                      o.each(function(e) {
                        w(e, N());
                      }),
                      o.getOr(t)
                    );
                  }
                  return t;
                },
                T = function(t, n) {
                  var o;
                  return (
                    s ||
                      ((s = {}),
                      (o = {}),
                      r.on("NodeChange", function(t) {
                        var n = t.element,
                          r = e.getParents(n, null, e.getRoot()),
                          i = {};
                        F_(s, function(t, n) {
                          F_(r, function(a) {
                            if (e.is(a, n))
                              return (
                                o[n] ||
                                  (F_(t, function(e) {
                                    e(!0, { node: a, selector: n, parents: r });
                                  }),
                                  (o[n] = t)),
                                (i[n] = t),
                                !1
                              );
                          });
                        }),
                          F_(o, function(e, t) {
                            i[t] ||
                              (delete o[t],
                              F_(e, function(e) {
                                e(!1, { node: n, selector: t, parents: r });
                              }));
                          });
                      })),
                    s[t] || (s[t] = []),
                    s[t].push(n),
                    O
                  );
                },
                _ = function() {
                  var t,
                    n = e.getRoot();
                  while (n && "BODY" !== n.nodeName) {
                    if (n.scrollHeight > n.clientHeight) {
                      t = n;
                      break;
                    }
                    n = n.parentNode;
                  }
                  return t;
                },
                A = function(e, t) {
                  return jT.scrollElementIntoView(r, e, t);
                },
                R = function(e, t) {
                  return w(WT.fromPoint(e, t, r.getDoc()));
                },
                D = function() {
                  var e = C();
                  return e.collapsed
                    ? zc.fromRangeStart(e).getClientRects()[0]
                    : e.getBoundingClientRect();
                },
                B = function() {
                  (t = a = u = null), i.destroy();
                },
                O = {
                  bookmarkManager: null,
                  controlSelection: null,
                  dom: e,
                  win: t,
                  serializer: n,
                  editor: r,
                  collapse: b,
                  setCursorLocation: c,
                  getContent: l,
                  setContent: f,
                  getBookmark: p,
                  moveToBookmark: g,
                  select: h,
                  isCollapsed: v,
                  isForward: N,
                  setNode: x,
                  getNode: E,
                  getSel: y,
                  setRng: w,
                  getRng: C,
                  getStart: d,
                  getEnd: m,
                  getSelectedBlocks: S,
                  normalize: k,
                  selectorChanged: T,
                  getScrollContainer: _,
                  scrollIntoView: A,
                  placeCaretAt: R,
                  getBoundingClientRect: D,
                  destroy: B
                };
              return (
                (o = AT(O)),
                (i = OT(O, r)),
                (O.bookmarkManager = o),
                (O.controlSelection = i),
                O
              );
            },
            H_ = ka.isContentEditableFalse,
            q_ = lc,
            $_ = yf,
            W_ = bf,
            Y_ = function(e, t) {
              while ((t = e(t))) if (t.isVisible()) return t;
              return t;
            },
            G_ = function(e, t) {
              var n = af(e, t);
              return !(n || !ka.isBr(e.getNode())) || n;
            },
            X_ = function(e, t, n, r) {
              var o,
                i,
                a,
                u,
                s = e === jc.Forwards,
                c = s ? W_ : $_;
              return !r.collapsed && ((o = q_(r)), H_(o))
                ? eS(e, t, o, e === jc.Backwards, !0)
                : ((u = Ms(r)),
                  (i = vf(e, t.getBody(), r)),
                  c(i)
                    ? nS(t, i.getNode(!s))
                    : ((i = n(i)),
                      i
                        ? c(i)
                          ? eS(e, t, i.getNode(!s), s, !0)
                          : ((a = n(i)),
                            c(a) && G_(i, a)
                              ? eS(e, t, a.getNode(!s), s, !0)
                              : u
                                ? oS(t, i.toRange(), !0)
                                : null)
                        : u
                          ? r
                          : null));
            },
            Z_ = function(e, t, n, r) {
              var o, i, a, u, s, c, l, f, d;
              if (
                ((d = q_(r)),
                (o = vf(e, t.getBody(), r)),
                (i = n(t.getBody(), ME(1), o)),
                (a = Y(i, FE(1))),
                (s = Sn.last(o.getClientRects())),
                (W_(o) || Cf(o)) && (d = o.getNode()),
                ($_(o) || wf(o)) && (d = o.getNode(!0)),
                !s)
              )
                return null;
              if (((c = s.left), (u = qE(a, c)), u && H_(u.node)))
                return (
                  (l = Math.abs(c - u.left)),
                  (f = Math.abs(c - u.right)),
                  eS(e, t, u.node, l < f, !0)
                );
              if (d) {
                var m = LE(e, t.getBody(), ME(1), d);
                if (((u = qE(Y(m, FE(1)), c)), u))
                  return oS(t, u.position.toRange(), !0);
                if (((u = Sn.last(Y(m, FE(0)))), u))
                  return oS(t, u.position.toRange(), !0);
              }
            },
            K_ = function(e) {
              var t = e.dom.create(e.settings.forced_root_block);
              return (
                (!ke.ie || ke.ie >= 11) &&
                  (t.innerHTML = '<br data-mce-bogus="1">'),
                t
              );
            },
            J_ = function(e, t, n) {
              var r,
                o,
                a,
                u = Uf(e.getBody()),
                s = i(Y_, u.next),
                c = i(Y_, u.prev);
              if (n.collapsed && e.settings.forced_root_block) {
                if (((r = e.dom.getParent(n.startContainer, "PRE")), !r))
                  return;
                (o =
                  1 === t ? s(zc.fromRangeStart(n)) : c(zc.fromRangeStart(n))),
                  o ||
                    ((a = K_(e)),
                    1 === t ? e.$(r).after(a) : e.$(r).before(a),
                    e.selection.select(a, !0),
                    e.selection.collapse());
              }
            },
            Q_ = function(e, t) {
              var n,
                r = Uf(e.getBody()),
                o = i(Y_, r.next),
                a = i(Y_, r.prev),
                u = t ? jc.Forwards : jc.Backwards,
                s = t ? o : a,
                c = e.selection.getRng();
              return (n = X_(u, e, s, c)), n || ((n = J_(e, u, c)), n || null);
            },
            eA = function(e, t) {
              var n,
                r = t ? 1 : -1,
                o = t ? IE : PE,
                i = e.selection.getRng();
              return (n = Z_(r, e, o, i)), n || ((n = J_(e, r, i)), n || null);
            },
            tA = function(e, t) {
              return function() {
                var n = Q_(e, t);
                return !!n && (e.selection.setRng(n), !0);
              };
            },
            nA = function(e, t) {
              return function() {
                var n = eA(e, t);
                return !!n && (e.selection.setRng(n), !0);
              };
            };
          (function(e) {
            (e[(e["Br"] = 0)] = "Br"),
              (e[(e["Block"] = 1)] = "Block"),
              (e[(e["Wrap"] = 2)] = "Wrap"),
              (e[(e["Eol"] = 3)] = "Eol");
          })(_T || (_T = {}));
          var rA = function(e, t) {
              return e === jc.Backwards ? t.reverse() : t;
            },
            oA = function(e, t, n) {
              return e === jc.Forwards ? t.next(n) : t.prev(n);
            },
            iA = function(e, t, n, r) {
              return ka.isBr(r.getNode(t === jc.Forwards))
                ? _T.Br
                : !1 === af(n, r)
                  ? _T.Block
                  : _T.Wrap;
            },
            aA = function(e, t, n, r) {
              var o,
                i = Uf(n),
                a = r,
                u = [];
              while (a) {
                if (((o = oA(t, i, a)), !o)) break;
                if (ka.isBr(o.getNode(!1)))
                  return t === jc.Forwards
                    ? {
                        positions: rA(t, u).concat([o]),
                        breakType: _T.Br,
                        breakAt: A.some(o)
                      }
                    : {
                        positions: rA(t, u),
                        breakType: _T.Br,
                        breakAt: A.some(o)
                      };
                if (o.isVisible()) {
                  if (e(a, o)) {
                    var s = iA(n, t, a, o);
                    return {
                      positions: rA(t, u),
                      breakType: s,
                      breakAt: A.some(o)
                    };
                  }
                  u.push(o), (a = o);
                } else a = o;
              }
              return {
                positions: rA(t, u),
                breakType: _T.Eol,
                breakAt: A.none()
              };
            },
            uA = function(e, t, n, r) {
              return t(n, r)
                .breakAt.map(function(r) {
                  var o = t(n, r).positions;
                  return e === jc.Backwards ? o.concat(r) : [r].concat(o);
                })
                .getOr([]);
            },
            sA = function(e, t) {
              return X(
                e,
                function(e, n) {
                  return e.fold(
                    function() {
                      return A.some(n);
                    },
                    function(r) {
                      return pc(
                        [se(r.getClientRects()), se(n.getClientRects())],
                        function(e, o) {
                          var i = Math.abs(t - e.left),
                            a = Math.abs(t - o.left);
                          return a <= i ? n : r;
                        }
                      ).or(e);
                    }
                  );
                },
                A.none()
              );
            },
            cA = function(e, t) {
              return se(t.getClientRects()).bind(function(t) {
                return sA(e, t.left);
              });
            },
            lA = i(aA, Uc.isAbove, -1),
            fA = i(aA, Uc.isBelow, 1),
            dA = i(uA, -1, lA),
            mA = i(uA, 1, fA),
            pA = function(e) {
              return Jf.firstPositionIn(e)
                .map(function(t) {
                  return [t].concat(fA(e, t).positions);
                })
                .getOr([]);
            },
            gA = function(e) {
              return Jf.lastPositionIn(e)
                .map(function(t) {
                  return lA(e, t).positions.concat(t);
                })
                .getOr([]);
            },
            hA = function(e, t) {
              return {
                left: e.left - t,
                top: e.top - t,
                right: e.right + 2 * t,
                bottom: e.bottom + 2 * t,
                width: e.width + t,
                height: e.height + t
              };
            },
            vA = function(e, t) {
              return te(t, function(t) {
                var n = hA(ec(t.getBoundingClientRect()), -1);
                return [
                  { x: n.left, y: e(n), cell: t },
                  { x: n.right, y: e(n), cell: t }
                ];
              });
            },
            bA = function(e, t, n) {
              return X(
                e,
                function(e, r) {
                  return e.fold(
                    function() {
                      return A.some(r);
                    },
                    function(e) {
                      var o = Math.sqrt(Math.abs(e.x - t) + Math.abs(e.y - n)),
                        i = Math.sqrt(Math.abs(r.x - t) + Math.abs(r.y - n));
                      return A.some(i < o ? r : e);
                    }
                  );
                },
                A.none()
              );
            },
            yA = function(e, t, n, r, o) {
              var i = $u(fo.fromDom(n), "td,th,caption").map(function(e) {
                  return e.dom();
                }),
                a = Y(vA(e, i), function(e) {
                  return t(e, o);
                });
              return bA(a, r, o).map(function(e) {
                return e.cell;
              });
            },
            CA = function(e) {
              return e.bottom;
            },
            wA = function(e) {
              return e.top;
            },
            xA = function(e, t) {
              return e.y < t;
            },
            EA = function(e, t) {
              return e.y > t;
            },
            SA = i(yA, CA, xA),
            NA = i(yA, wA, EA),
            kA = function(e, t) {
              return se(t.getClientRects())
                .bind(function(t) {
                  return SA(e, t.left, t.top);
                })
                .bind(function(e) {
                  return cA(gA(e), t);
                });
            },
            TA = function(e, t) {
              return ce(t.getClientRects())
                .bind(function(t) {
                  return NA(e, t.left, t.top);
                })
                .bind(function(e) {
                  return cA(pA(e), t);
                });
            },
            _A = function(e, t) {
              e.selection.setRng(t), jT.scrollRangeIntoView(e, t);
            },
            AA = function(e, t, n) {
              return n.breakAt
                .map(function(n) {
                  return e(t, n).breakAt.isSome();
                })
                .getOr(!1);
            },
            RA = function(e) {
              return e.breakType === _T.Wrap && 0 === e.positions.length;
            },
            DA = function(e) {
              return e.breakType === _T.Br && 1 === e.positions.length;
            },
            BA = function(e, t, n) {
              var r = e(t, n);
              return RA(r) || (!ka.isBr(n.getNode()) && DA(r))
                ? !AA(e, t, r)
                : r.breakAt.isNone();
            },
            OA = i(BA, lA),
            PA = i(BA, fA),
            IA = function(e, t, n) {
              var r = zc.fromRangeStart(t);
              return Jf.positionIn(!e, n)
                .map(function(e) {
                  return e.isEqual(r);
                })
                .getOr(!1);
            },
            LA = function(e, t, n, r) {
              var o = e.selection.getRng(),
                i = t ? 1 : -1;
              if (Vl() && IA(t, o, n)) {
                var a = eS(i, e, n, !t, !0);
                return _A(e, a), !0;
              }
              return !1;
            },
            MA = function(e, t, n) {
              return kA(t, n)
                .orThunk(function() {
                  return se(n.getClientRects()).bind(function(n) {
                    return sA(dA(e, zc.before(t)), n.left);
                  });
                })
                .getOr(zc.before(t));
            },
            FA = function(e, t, n) {
              return TA(t, n)
                .orThunk(function() {
                  return se(n.getClientRects()).bind(function(n) {
                    return sA(mA(e, zc.after(t)), n.left);
                  });
                })
                .getOr(zc.after(t));
            },
            UA = function(e, t) {
              var n = t.getNode(e);
              return ka.isElement(n) && "TABLE" === n.nodeName
                ? A.some(n)
                : A.none();
            },
            jA = function(e, t, n, r) {
              var o = Ty.getForcedRootBlock(t);
              o
                ? t.undoManager.transact(function() {
                    var r = fo.fromTag(o);
                    Ro(r, Ty.getForcedRootBlockAttrs(t)),
                      Su(r, fo.fromTag("br")),
                      e ? Eu(fo.fromDom(n), r) : xu(fo.fromDom(n), r);
                    var i = t.dom.createRng();
                    i.setStart(r.dom(), 0), i.setEnd(r.dom(), 0), _A(t, i);
                  })
                : _A(t, r.toRange());
            },
            zA = function(e, t, n) {
              var r = UA(!!t, n),
                o = !1 === t;
              r.fold(
                function() {
                  return _A(e, n.toRange());
                },
                function(r) {
                  return Jf.positionIn(o, e.getBody())
                    .filter(function(e) {
                      return e.isEqual(n);
                    })
                    .fold(
                      function() {
                        return _A(e, n.toRange());
                      },
                      function(o) {
                        return jA(t, e, r, n);
                      }
                    );
                }
              );
            },
            VA = function(e, t, n, r) {
              var o = e.selection.getRng(),
                i = zc.fromRangeStart(o),
                a = e.getBody();
              if (!t && OA(r, i)) {
                var u = MA(a, n, i);
                return zA(e, t, u), !0;
              }
              if (t && PA(r, i)) {
                u = FA(a, n, i);
                return zA(e, t, u), !0;
              }
              return !1;
            },
            HA = function(e, t) {
              return function() {
                return A.from(e.dom.getParent(e.selection.getNode(), "td,th"))
                  .bind(function(n) {
                    return A.from(e.dom.getParent(n, "table")).map(function(r) {
                      return LA(e, t, r, n);
                    });
                  })
                  .getOr(!1);
              };
            },
            qA = function(e, t) {
              return function() {
                return A.from(e.dom.getParent(e.selection.getNode(), "td,th"))
                  .bind(function(n) {
                    return A.from(e.dom.getParent(n, "table")).map(function(r) {
                      return VA(e, t, r, n);
                    });
                  })
                  .getOr(!1);
              };
            },
            $A = function(e) {
              return H(e, function(e) {
                return Hk(
                  {
                    shiftKey: !1,
                    altKey: !1,
                    ctrlKey: !1,
                    metaKey: !1,
                    keyCode: 0,
                    action: t
                  },
                  e
                );
              });
            },
            WA = function(e, t) {
              return (
                t.keyCode === e.keyCode &&
                t.shiftKey === e.shiftKey &&
                t.altKey === e.altKey &&
                t.ctrlKey === e.ctrlKey &&
                t.metaKey === e.metaKey
              );
            },
            YA = function(e, t) {
              return te($A(e), function(e) {
                return WA(e, t) ? [e] : [];
              });
            },
            GA = function(e) {
              for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
              var r = Array.prototype.slice.call(arguments, 1);
              return function() {
                return e.apply(null, r);
              };
            },
            XA = function(e, t) {
              return Z(YA(e, t), function(e) {
                return e.action();
              });
            },
            ZA = { match: YA, action: GA, execute: XA },
            KA = function(e, t, n) {
              var r = io.detect().os;
              ZA.execute(
                [
                  { keyCode: uS.RIGHT, action: tA(e, !0) },
                  { keyCode: uS.LEFT, action: tA(e, !1) },
                  { keyCode: uS.UP, action: nA(e, !1) },
                  { keyCode: uS.DOWN, action: nA(e, !0) },
                  { keyCode: uS.RIGHT, action: HA(e, !0) },
                  { keyCode: uS.LEFT, action: HA(e, !1) },
                  { keyCode: uS.UP, action: qA(e, !1) },
                  { keyCode: uS.DOWN, action: qA(e, !0) },
                  { keyCode: uS.RIGHT, action: Yv.move(e, t, !0) },
                  { keyCode: uS.LEFT, action: Yv.move(e, t, !1) },
                  {
                    keyCode: uS.RIGHT,
                    ctrlKey: !r.isOSX(),
                    altKey: r.isOSX(),
                    action: Yv.moveNextWord(e, t)
                  },
                  {
                    keyCode: uS.LEFT,
                    ctrlKey: !r.isOSX(),
                    altKey: r.isOSX(),
                    action: Yv.movePrevWord(e, t)
                  }
                ],
                n
              ).each(function(e) {
                n.preventDefault();
              });
            },
            JA = function(e, t) {
              e.on("keydown", function(n) {
                !1 === n.isDefaultPrevented() && KA(e, t, n);
              });
            },
            QA = { setup: JA },
            eR = function(e, t) {
              var n = Ng.parentsAndSelf(t, e);
              return K(n, Qi).fold(r(n), function(e) {
                return n.slice(0, e);
              });
            },
            tR = function(e) {
              return 1 === gi(e).length;
            },
            nR = function(e, t, n, r) {
              var o = i(_N, t),
                a = H(Y(r, o), function(e) {
                  return e.dom();
                });
              if (0 === a.length) Mh.deleteElement(t, e, n);
              else {
                var u = TN(n.dom(), a);
                t.selection.setRng(u.toRange());
              }
            },
            rR = function(e, t) {
              var n = fo.fromDom(e.getBody()),
                r = fo.fromDom(e.selection.getStart()),
                o = Y(eR(n, r), tR);
              return ce(o)
                .map(function(n) {
                  var r = zc.fromRangeStart(e.selection.getRng());
                  return (
                    !(
                      !Qp.willDeleteLastPositionInElement(t, r, n.dom()) ||
                      AN(n)
                    ) && (nR(t, e, n, o), !0)
                  );
                })
                .getOr(!1);
            },
            oR = function(e, t) {
              return !!e.selection.isCollapsed() && rR(e, t);
            },
            iR = { backspaceDelete: oR },
            aR = function(e, t, n) {
              ZA.execute(
                [
                  {
                    keyCode: uS.BACKSPACE,
                    action: ZA.action(Yh.backspaceDelete, e, !1)
                  },
                  {
                    keyCode: uS.DELETE,
                    action: ZA.action(Yh.backspaceDelete, e, !0)
                  },
                  {
                    keyCode: uS.BACKSPACE,
                    action: ZA.action(nb.backspaceDelete, e, t, !1)
                  },
                  {
                    keyCode: uS.DELETE,
                    action: ZA.action(nb.backspaceDelete, e, t, !0)
                  },
                  {
                    keyCode: uS.BACKSPACE,
                    action: ZA.action(Kb.backspaceDelete, e, !1)
                  },
                  {
                    keyCode: uS.DELETE,
                    action: ZA.action(Kb.backspaceDelete, e, !0)
                  },
                  {
                    keyCode: uS.BACKSPACE,
                    action: ZA.action(Yg.backspaceDelete, e, !1)
                  },
                  {
                    keyCode: uS.DELETE,
                    action: ZA.action(Yg.backspaceDelete, e, !0)
                  },
                  {
                    keyCode: uS.BACKSPACE,
                    action: ZA.action(Ug.backspaceDelete, e, !1)
                  },
                  {
                    keyCode: uS.DELETE,
                    action: ZA.action(Ug.backspaceDelete, e, !0)
                  },
                  {
                    keyCode: uS.BACKSPACE,
                    action: ZA.action(iR.backspaceDelete, e, !1)
                  },
                  {
                    keyCode: uS.DELETE,
                    action: ZA.action(iR.backspaceDelete, e, !0)
                  }
                ],
                n
              ).each(function(e) {
                n.preventDefault();
              });
            },
            uR = function(e, t) {
              ZA.execute(
                [
                  {
                    keyCode: uS.BACKSPACE,
                    action: ZA.action(Yh.paddEmptyElement, e)
                  },
                  {
                    keyCode: uS.DELETE,
                    action: ZA.action(Yh.paddEmptyElement, e)
                  }
                ],
                t
              );
            },
            sR = function(e, t) {
              e.on("keydown", function(n) {
                !1 === n.isDefaultPrevented() && aR(e, t, n);
              }),
                e.on("keyup", function(t) {
                  !1 === t.isDefaultPrevented() && uR(e, t);
                });
            },
            cR = { setup: sR },
            lR = function(e) {
              while (e) {
                if (
                  1 === e.nodeType ||
                  (3 === e.nodeType && e.data && /[\r\n\s]/.test(e.data))
                )
                  return e;
                e = e.nextSibling;
              }
            },
            fR = function(e, t) {
              var n,
                r,
                o,
                i,
                a = t,
                u = e.dom,
                s = e.schema.getMoveCaretBeforeOnEnterElements();
              if (t) {
                if (/^(LI|DT|DD)$/.test(t.nodeName)) {
                  var c = lR(t.firstChild);
                  c &&
                    /^(UL|OL|DL)$/.test(c.nodeName) &&
                    t.insertBefore(u.doc.createTextNode(" "), t.firstChild);
                }
                if (((o = u.createRng()), t.normalize(), t.hasChildNodes())) {
                  n = new Fi(t, t);
                  while ((r = n.current())) {
                    if (ka.isText(r)) {
                      o.setStart(r, 0), o.setEnd(r, 0);
                      break;
                    }
                    if (s[r.nodeName.toLowerCase()]) {
                      o.setStartBefore(r), o.setEndBefore(r);
                      break;
                    }
                    (a = r), (r = n.next());
                  }
                  r || (o.setStart(a, 0), o.setEnd(a, 0));
                } else
                  ka.isBr(t)
                    ? t.nextSibling && u.isBlock(t.nextSibling)
                      ? (o.setStartBefore(t), o.setEndBefore(t))
                      : (o.setStartAfter(t), o.setEndAfter(t))
                    : (o.setStart(t, 0), o.setEnd(t, 0));
                e.selection.setRng(o),
                  u.remove(i),
                  e.selection.scrollIntoView(t);
              }
            },
            dR = function(e, t) {
              var n,
                r,
                o = e.getRoot();
              n = t;
              while (n !== o && "false" !== e.getContentEditable(n))
                "true" === e.getContentEditable(n) && (r = n),
                  (n = n.parentNode);
              return n !== o ? r : o;
            },
            mR = function(e) {
              return A.from(
                e.dom.getParent(e.selection.getStart(!0), e.dom.isBlock)
              );
            },
            pR = function(e) {
              return mR(e).fold(r(""), function(e) {
                return e.nodeName.toUpperCase();
              });
            },
            gR = function(e) {
              return mR(e)
                .filter(function(e) {
                  return oa(fo.fromDom(e));
                })
                .isSome();
            },
            hR = {
              moveToCaretPosition: fR,
              getEditableRoot: dR,
              getParentBlock: mR,
              getParentBlockName: pR,
              isListItemParentBlock: gR
            },
            vR = function(e, t) {
              return e.firstChild && e.firstChild.nodeName === t;
            },
            bR = function(e, t) {
              return e && e.parentNode && e.parentNode.nodeName === t;
            },
            yR = function(e) {
              return e && /^(OL|UL|LI)$/.test(e.nodeName);
            },
            CR = function(e) {
              return yR(e) && yR(e.parentNode);
            },
            wR = function(e) {
              var t = e.parentNode;
              return /^(LI|DT|DD)$/.test(t.nodeName) ? t : e;
            },
            xR = function(e, t, n) {
              var r = e[n ? "firstChild" : "lastChild"];
              while (r) {
                if (ka.isElement(r)) break;
                r = r[n ? "nextSibling" : "previousSibling"];
              }
              return r === t;
            },
            ER = function(e, t, n, r, o) {
              var i = e.dom,
                a = e.selection.getRng();
              if (n !== e.getBody()) {
                CR(n) && (o = "LI");
                var u = o ? t(o) : i.create("BR");
                if (xR(n, r, !0) && xR(n, r, !1))
                  bR(n, "LI") ? i.insertAfter(u, wR(n)) : i.replace(u, n);
                else if (xR(n, r, !0))
                  bR(n, "LI")
                    ? (i.insertAfter(u, wR(n)),
                      u.appendChild(i.doc.createTextNode(" ")),
                      u.appendChild(n))
                    : n.parentNode.insertBefore(u, n);
                else if (xR(n, r, !1)) i.insertAfter(u, wR(n));
                else {
                  n = wR(n);
                  var s = a.cloneRange();
                  s.setStartAfter(r), s.setEndAfter(n);
                  var c = s.extractContents();
                  "LI" === o && vR(c, "LI")
                    ? ((u = c.firstChild), i.insertAfter(c, n))
                    : (i.insertAfter(c, n), i.insertAfter(u, n));
                }
                i.remove(r), hR.moveToCaretPosition(e, u);
              }
            },
            SR = { insert: ER },
            NR = function(e) {
              return (
                e &&
                "A" === e.nodeName &&
                0 === Mn.trim(ws.trim(e.innerText || e.textContent)).length
              );
            },
            kR = function(e) {
              return e && /^(TD|TH|CAPTION)$/.test(e.nodeName);
            },
            TR = function(e) {
              e.innerHTML = '<br data-mce-bogus="1">';
            },
            _R = function(e, t) {
              return (
                e.nodeName === t ||
                (e.previousSibling && e.previousSibling.nodeName === t)
              );
            },
            AR = function(e, t) {
              return (
                t &&
                e.isBlock(t) &&
                !/^(TD|TH|CAPTION|FORM)$/.test(t.nodeName) &&
                !/^(fixed|absolute)/i.test(t.style.position) &&
                "true" !== e.getContentEditable(t)
              );
            },
            RR = function(e, t, n) {
              var r,
                o = n,
                i = [];
              if (o) {
                while ((o = o.firstChild)) {
                  if (e.isBlock(o)) return;
                  ka.isElement(o) && !t[o.nodeName.toLowerCase()] && i.push(o);
                }
                r = i.length;
                while (r--)
                  (o = i[r]),
                    !o.hasChildNodes() ||
                    (o.firstChild === o.lastChild &&
                      "" === o.firstChild.nodeValue)
                      ? e.remove(o)
                      : NR(o) && e.remove(o);
              }
            },
            DR = function(e, t, n) {
              return !1 === ka.isText(t)
                ? n
                : e
                  ? 1 === n && t.data.charAt(n - 1) === ws.ZWSP
                    ? 0
                    : n
                  : n === t.data.length - 1 && t.data.charAt(n) === ws.ZWSP
                    ? t.data.length
                    : n;
            },
            BR = function(e) {
              var t = e.cloneRange();
              return (
                t.setStart(
                  e.startContainer,
                  DR(!0, e.startContainer, e.startOffset)
                ),
                t.setEnd(e.endContainer, DR(!1, e.endContainer, e.endOffset)),
                t
              );
            },
            OR = function(e) {
              do {
                ka.isText(e) &&
                  (e.nodeValue = e.nodeValue.replace(/^[\r\n]+/, "")),
                  (e = e.firstChild);
              } while (e);
            },
            PR = function(e, t) {
              var n,
                r,
                o = e.getRoot();
              n = t;
              while (n !== o && "false" !== e.getContentEditable(n))
                "true" === e.getContentEditable(n) && (r = n),
                  (n = n.parentNode);
              return n !== o ? r : o;
            },
            IR = function(e, t) {
              var n = Ty.getForcedRootBlock(e);
              n &&
                n.toLowerCase() === t.tagName.toLowerCase() &&
                e.dom.setAttribs(t, Ty.getForcedRootBlockAttrs(e));
            },
            LR = function(e, t, n, r, o) {
              var i,
                a,
                u,
                s,
                c,
                l,
                f = t || "P",
                d = e.dom,
                m = PR(d, r);
              if (((a = d.getParent(r, d.isBlock)), !a || !AR(d, a))) {
                if (
                  ((a = a || m),
                  (l =
                    a === e.getBody() || kR(a)
                      ? a.nodeName.toLowerCase()
                      : a.parentNode.nodeName.toLowerCase()),
                  !a.hasChildNodes())
                )
                  return (
                    (i = d.create(f)),
                    IR(e, i),
                    a.appendChild(i),
                    n.setStart(i, 0),
                    n.setEnd(i, 0),
                    i
                  );
                s = r;
                while (s.parentNode !== a) s = s.parentNode;
                while (s && !d.isBlock(s)) (u = s), (s = s.previousSibling);
                if (u && e.schema.isValidChild(l, f.toLowerCase())) {
                  (i = d.create(f)),
                    IR(e, i),
                    u.parentNode.insertBefore(i, u),
                    (s = u);
                  while (s && !d.isBlock(s))
                    (c = s.nextSibling), i.appendChild(s), (s = c);
                  n.setStart(r, o), n.setEnd(r, o);
                }
              }
              return r;
            },
            MR = function(e, t) {
              var n;
              t.normalize(),
                (n = t.lastChild),
                (n && !/^(left|right)$/gi.test(e.getStyle(n, "float", !0))) ||
                  e.add(t, "br");
            },
            FR = function(e, t) {
              var n,
                r,
                o,
                i,
                a,
                u,
                s,
                c,
                l,
                f,
                d,
                m,
                p,
                g = e.dom,
                h = e.schema,
                v = h.getNonEmptyElements(),
                b = e.selection.getRng(),
                y = function(t) {
                  var n,
                    i,
                    u,
                    s = o,
                    c = h.getTextInlineElements();
                  if (
                    (t || "TABLE" === f || "HR" === f
                      ? ((n = g.create(t || m)), IR(e, n))
                      : (n = a.cloneNode(!1)),
                    (u = n),
                    !1 === Ty.shouldKeepStyles(e))
                  )
                    g.setAttrib(n, "style", null),
                      g.setAttrib(n, "class", null);
                  else
                    do {
                      if (c[s.nodeName]) {
                        if (Cl(s)) continue;
                        (i = s.cloneNode(!1)),
                          g.setAttrib(i, "id", ""),
                          n.hasChildNodes()
                            ? (i.appendChild(n.firstChild), n.appendChild(i))
                            : ((u = i), n.appendChild(i));
                      }
                    } while ((s = s.parentNode) && s !== r);
                  return TR(u), n;
                },
                C = function(e) {
                  var t, n, r, u;
                  if (
                    ((u = DR(e, o, i)),
                    ka.isText(o) && (e ? u > 0 : u < o.nodeValue.length))
                  )
                    return !1;
                  if (o.parentNode === a && p && !e) return !0;
                  if (e && ka.isElement(o) && o === a.firstChild) return !0;
                  if (_R(o, "TABLE") || _R(o, "HR"))
                    return (p && !e) || (!p && e);
                  (t = new Fi(o, a)),
                    ka.isText(o) &&
                      (e && 0 === u
                        ? t.prev()
                        : e || u !== o.nodeValue.length || t.next());
                  while ((n = t.current())) {
                    if (ka.isElement(n)) {
                      if (
                        !n.getAttribute("data-mce-bogus") &&
                        ((r = n.nodeName.toLowerCase()), v[r] && "br" !== r)
                      )
                        return !1;
                    } else if (
                      ka.isText(n) &&
                      !/^[ \t\r\n]*$/.test(n.nodeValue)
                    )
                      return !1;
                    e ? t.prev() : t.next();
                  }
                  return !0;
                },
                w = function() {
                  (s =
                    /^(H[1-6]|PRE|FIGURE)$/.test(f) && "HGROUP" !== d
                      ? y(m)
                      : y()),
                    Ty.shouldEndContainerOnEmptyBlock(e) &&
                    AR(g, l) &&
                    g.isEmpty(a)
                      ? (s = g.split(l, a))
                      : g.insertAfter(s, a),
                    hR.moveToCaretPosition(e, s);
                };
              rC.normalize(g, b).each(function(e) {
                b.setStart(e.startContainer, e.startOffset),
                  b.setEnd(e.endContainer, e.endOffset);
              }),
                (o = b.startContainer),
                (i = b.startOffset),
                (m = Ty.getForcedRootBlock(e)),
                (u = t.shiftKey),
                ka.isElement(o) &&
                  o.hasChildNodes() &&
                  ((p = i > o.childNodes.length - 1),
                  (o = o.childNodes[Math.min(i, o.childNodes.length - 1)] || o),
                  (i = p && ka.isText(o) ? o.nodeValue.length : 0)),
                (r = PR(g, o)),
                r &&
                  (((m && !u) || (!m && u)) && (o = LR(e, m, b, o, i)),
                  (a = g.getParent(o, g.isBlock)),
                  (l = a ? g.getParent(a.parentNode, g.isBlock) : null),
                  (f = a ? a.nodeName.toUpperCase() : ""),
                  (d = l ? l.nodeName.toUpperCase() : ""),
                  "LI" !== d ||
                    t.ctrlKey ||
                    ((a = l), (l = l.parentNode), (f = d)),
                  /^(LI|DT|DD)$/.test(f) && g.isEmpty(a)
                    ? SR.insert(e, y, l, a, m)
                    : (m && a === e.getBody()) ||
                      ((m = m || "P"),
                      Ss(a)
                        ? ((s = Ls(a)),
                          g.isEmpty(a) && TR(a),
                          hR.moveToCaretPosition(e, s))
                        : C()
                          ? w()
                          : C(!0)
                            ? ((s = a.parentNode.insertBefore(y(), a)),
                              hR.moveToCaretPosition(e, _R(a, "HR") ? s : a))
                            : ((n = BR(b).cloneRange()),
                              n.setEndAfter(a),
                              (c = n.extractContents()),
                              OR(c),
                              (s = c.firstChild),
                              g.insertAfter(c, a),
                              RR(g, v, s),
                              MR(g, a),
                              g.isEmpty(a) && TR(a),
                              s.normalize(),
                              g.isEmpty(s)
                                ? (g.remove(s), w())
                                : hR.moveToCaretPosition(e, s)),
                      g.setAttrib(s, "id", ""),
                      e.fire("NewBlock", { newBlock: s })));
            },
            UR = { insert: FR },
            jR = function(e, t) {
              return hR
                .getParentBlock(e)
                .filter(function(e) {
                  return t.length > 0 && Ko(fo.fromDom(e), t);
                })
                .isSome();
            },
            zR = function(e) {
              return jR(e, Ty.getBrNewLineSelector(e));
            },
            VR = function(e) {
              return jR(e, Ty.getNoNewLineSelector(e));
            },
            HR = { shouldInsertBr: zR, shouldBlockNewLine: VR },
            qR = Xg.generate([{ br: [] }, { block: [] }, { none: [] }]),
            $R = function(e, t) {
              return HR.shouldBlockNewLine(e);
            },
            WR = function(e) {
              return function(t, n) {
                var r = "" === Ty.getForcedRootBlock(t);
                return r === e;
              };
            },
            YR = function(e) {
              return function(t, n) {
                return hR.isListItemParentBlock(t) === e;
              };
            },
            GR = function(e, t) {
              return function(n, r) {
                var o = hR.getParentBlockName(n) === e.toUpperCase();
                return o === t;
              };
            },
            XR = function(e) {
              return GR("pre", e);
            },
            ZR = function() {
              return GR("summary", !0);
            },
            KR = function(e) {
              return function(t, n) {
                return Ty.shouldPutBrInPre(t) === e;
              };
            },
            JR = function(e, t) {
              return HR.shouldInsertBr(e);
            },
            QR = function(e, t) {
              return t;
            },
            eD = function(e) {
              var t = Ty.getForcedRootBlock(e),
                n = hR.getEditableRoot(e.dom, e.selection.getStart());
              return n && e.schema.isValidChild(n.nodeName, t || "P");
            },
            tD = function(e, t) {
              return function(n, r) {
                var o = X(
                  e,
                  function(e, t) {
                    return e && t(n, r);
                  },
                  !0
                );
                return o ? A.some(t) : A.none();
              };
            },
            nD = function(e, t) {
              return sv
                .evaluateUntil(
                  [
                    tD([$R], qR.none()),
                    tD([ZR()], qR.br()),
                    tD([XR(!0), KR(!1), QR], qR.br()),
                    tD([XR(!0), KR(!1)], qR.block()),
                    tD([XR(!0), KR(!0), QR], qR.block()),
                    tD([XR(!0), KR(!0)], qR.br()),
                    tD([YR(!0), QR], qR.br()),
                    tD([YR(!0)], qR.block()),
                    tD([WR(!0), QR, eD], qR.block()),
                    tD([WR(!0)], qR.br()),
                    tD([JR], qR.br()),
                    tD([WR(!1), QR], qR.br()),
                    tD([eD], qR.block())
                  ],
                  [e, t.shiftKey]
                )
                .getOr(qR.none());
            },
            rD = { getAction: nD },
            oD = function(e, n) {
              rD.getAction(e, n).fold(
                function() {
                  vC.insert(e, n);
                },
                function() {
                  UR.insert(e, n);
                },
                t
              );
            },
            iD = { insert: oD },
            aD = function(e) {
              e.typing && ((e.typing = !1), e.add());
            },
            uD = function(e, t) {
              t.isDefaultPrevented() ||
                (t.preventDefault(),
                aD(e.undoManager),
                e.undoManager.transact(function() {
                  !1 === e.selection.isCollapsed() && e.execCommand("Delete"),
                    iD.insert(e, t);
                }));
            },
            sD = function(e) {
              e.on("keydown", function(t) {
                t.keyCode === uS.ENTER && uD(e, t);
              });
            },
            cD = { setup: sD },
            lD = function(e, t) {
              var n = t.container(),
                r = t.offset();
              return ka.isText(n)
                ? (n.insertData(r, e), A.some(Uc(n, r + e.length)))
                : Nf(t).map(function(n) {
                    var r = fo.fromText(e);
                    return (
                      t.isAtEnd() ? Eu(n, r) : xu(n, r), Uc(r.dom(), e.length)
                    );
                  });
            },
            fD = i(lD, " "),
            dD = i(lD, " "),
            mD = function(e, t, n) {
              var r = Y(Ng.parentsAndSelf(fo.fromDom(n.container()), t), Qi);
              return se(r).fold(
                function() {
                  return Jf.navigate(e, t.dom(), n).exists(function(e) {
                    return !1 === af(e, n, t.dom());
                  });
                },
                function(t) {
                  return Jf.navigate(e, t.dom(), n).isNone();
                }
              );
            },
            pD = i(mD, !1),
            gD = i(mD, !0),
            hD = " ",
            vD = function(e) {
              return Uc.isTextPosition(e) && !e.isAtStart() && !e.isAtEnd();
            },
            bD = function(e, t) {
              var n = Y(Ng.parentsAndSelf(fo.fromDom(t.container()), e), Qi);
              return se(n).getOr(e);
            },
            yD = function(e, t) {
              return vD(t)
                ? Sf(t)
                : Sf(t) || Jf.prevPosition(bD(e, t).dom(), t).exists(Sf);
            },
            CD = function(e, t) {
              return vD(t)
                ? Ef(t)
                : Ef(t) || Jf.nextPosition(bD(e, t).dom(), t).exists(Ef);
            },
            wD = function(e) {
              return z(["pre", "pre-line", "pre-wrap"], e);
            },
            xD = function(e) {
              return Nf(e)
                .bind(function(e) {
                  return Gu(e, yo);
                })
                .exists(function(e) {
                  return wD(Fo(e, "white-space"));
                });
            },
            ED = function(e, t) {
              return Jf.prevPosition(e.dom(), t).isNone();
            },
            SD = function(e, t) {
              return Jf.nextPosition(e.dom(), t).isNone();
            },
            ND = function(e, t) {
              return (
                ED(e, t) ||
                SD(e, t) ||
                pD(e, t) ||
                gD(e, t) ||
                Qg(e, t) ||
                Jg(e, t)
              );
            },
            kD = function(e, t) {
              return !xD(t) && (ND(e, t) || yD(e, t) || CD(e, t));
            },
            TD = function(e, t) {
              return !xD(t) && (pD(e, t) || Qg(e, t) || yD(e, t));
            },
            _D = function(e, t) {
              return !xD(t) && (gD(e, t) || Jg(e, t) || CD(e, t));
            },
            AD = function(e, t) {
              return $l(e.charAt(t));
            },
            RD = function(e) {
              var t = e.container();
              return ka.isText(t) && Yr(t.data, hD);
            },
            DD = function(e, t, n) {
              var r = Uc(t, 0);
              return AD(n, 0) && !TD(e, r) ? " " + n.slice(1) : n;
            },
            BD = function(e) {
              return H(e.split(""), function(e, t, n) {
                return $l(e) &&
                  t > 0 &&
                  t < n.length - 1 &&
                  Yl(n[t - 1]) &&
                  Yl(n[t + 1])
                  ? " "
                  : e;
              }).join("");
            },
            OD = function(e, t, n) {
              var r = Uc(t, n.length);
              return AD(n, n.length - 1) && !_D(e, r)
                ? n.slice(0, -1) + " "
                : n;
            },
            PD = function(e, t) {
              return A.some(t)
                .filter(RD)
                .bind(function(t) {
                  var n = t.container(),
                    r = n.nodeValue,
                    o = DD(e, n, BD(OD(e, n, r)));
                  return r !== o
                    ? ((t.container().nodeValue = o), A.some(t))
                    : A.none();
                });
            },
            ID = function(e) {
              var t = fo.fromDom(e.getBody());
              e.selection.isCollapsed() &&
                PD(t, Uc.fromRangeStart(e.selection.getRng())).each(function(
                  t
                ) {
                  e.selection.setRng(t.toRange());
                });
            },
            LD = function(e, t) {
              return kD(e, t) ? fD(t) : dD(t);
            },
            MD = function(e) {
              return function(t) {
                return t.fold(
                  function(t) {
                    return Jf.prevPosition(e.dom(), zc.before(t));
                  },
                  function(e) {
                    return Jf.firstPositionIn(e);
                  },
                  function(e) {
                    return Jf.lastPositionIn(e);
                  },
                  function(t) {
                    return Jf.nextPosition(e.dom(), zc.after(t));
                  }
                );
              };
            },
            FD = function(e, t) {
              return function(n) {
                return kD(e, n) ? fD(t) : dD(t);
              };
            },
            UD = function(e) {
              return function(t) {
                return e.selection.setRng(t.toRange()), e.nodeChanged(), !0;
              };
            },
            jD = function(e) {
              var t = zc.fromRangeStart(e.selection.getRng()),
                n = fo.fromDom(e.getBody());
              if (e.selection.isCollapsed()) {
                var r = i(Yp.isInlineTarget, e),
                  o = zc.fromRangeStart(e.selection.getRng());
                return Av.readLocation(r, e.getBody(), o)
                  .bind(MD(n))
                  .bind(FD(n, t))
                  .fold(function() {
                    return LD(n, t)
                      .map(UD(e))
                      .getOr(!1);
                  }, UD(e));
              }
              return !1;
            },
            zD = function(e, t) {
              ZA.execute(
                [{ keyCode: uS.SPACEBAR, action: ZA.action(jD, e) }],
                t
              ).each(function(e) {
                t.preventDefault();
              });
            },
            VD = function(e) {
              e.on("keydown", function(t) {
                !1 === t.isDefaultPrevented() && zD(e, t);
              });
            },
            HD = { setup: VD },
            qD = function(e) {
              return Zu(fo.fromDom(e.getBody()), "*[data-mce-caret]").fold(
                r(null),
                function(e) {
                  return e.dom();
                }
              );
            },
            $D = function(e) {
              e.selection.setRng(e.selection.getRng());
            },
            WD = function(e, t) {
              t.hasAttribute("data-mce-caret") &&
                (Ls(t), $D(e), e.selection.scrollIntoView(t));
            },
            YD = function(e, t) {
              var n = qD(e);
              if (n)
                return "compositionstart" === t.type
                  ? (t.preventDefault(), t.stopPropagation(), void WD(e, n))
                  : void (Ts(n) && (WD(e, n), e.undoManager.add()));
            },
            GD = function(e) {
              e.on("keyup compositionstart", i(YD, e));
            },
            XD = { setup: GD },
            ZD = function(e) {
              e.on("input", function(t) {
                !1 === t.isComposing && ID(e);
              });
            },
            KD = function(e) {
              var t = Yv.setupSelectedState(e);
              XD.setup(e),
                QA.setup(e, t),
                cR.setup(e, t),
                cD.setup(e),
                HD.setup(e),
                ZD(e);
            },
            JD = { setup: KD };
          function QD(e) {
            var t = Mn.each,
              n = uS.BACKSPACE,
              r = uS.DELETE,
              o = e.dom,
              i = e.selection,
              a = e.settings,
              u = e.parser,
              s = ke.gecko,
              c = ke.ie,
              l = ke.webkit,
              f = "data:text/mce-internal,",
              d = c ? "Text" : "URL",
              m = function(t, n) {
                try {
                  e.getDoc().execCommand(t, !1, n);
                } catch (r) {}
              },
              p = function(e) {
                return e.isDefaultPrevented();
              },
              g = function(t) {
                var n, r;
                t.dataTransfer &&
                  (e.selection.isCollapsed() &&
                    "IMG" === t.target.tagName &&
                    i.select(t.target),
                  (n = e.selection.getContent()),
                  n.length > 0 &&
                    ((r = f + escape(e.id) + "," + escape(n)),
                    t.dataTransfer.setData(d, r)));
              },
              h = function(e) {
                var t;
                return e.dataTransfer &&
                  ((t = e.dataTransfer.getData(d)), t && t.indexOf(f) >= 0)
                  ? ((t = t.substr(f.length).split(",")),
                    { id: unescape(t[0]), html: unescape(t[1]) })
                  : null;
              },
              v = function(t, n) {
                e.queryCommandSupported("mceInsertClipboardContent")
                  ? e.execCommand("mceInsertClipboardContent", !1, {
                      content: t,
                      internal: n
                    })
                  : e.execCommand("mceInsertContent", !1, t);
              },
              b = function() {
                var t = function(e) {
                    var t = o.create("body"),
                      n = e.cloneContents();
                    return (
                      t.appendChild(n),
                      i.serializer.serialize(t, { format: "html" })
                    );
                  },
                  a = function(n) {
                    var r = t(n),
                      i = o.createRng();
                    i.selectNode(e.getBody());
                    var a = t(i);
                    return r === a;
                  };
                e.on("keydown", function(t) {
                  var i,
                    u,
                    s = t.keyCode;
                  if (!p(t) && (s === r || s === n)) {
                    if (
                      ((i = e.selection.isCollapsed()),
                      (u = e.getBody()),
                      i && !o.isEmpty(u))
                    )
                      return;
                    if (!i && !a(e.selection.getRng())) return;
                    t.preventDefault(),
                      e.setContent(""),
                      u.firstChild && o.isBlock(u.firstChild)
                        ? e.selection.setCursorLocation(u.firstChild, 0)
                        : e.selection.setCursorLocation(u, 0),
                      e.nodeChanged();
                  }
                });
              },
              y = function() {
                e.shortcuts.add("meta+a", null, "SelectAll");
              },
              C = function() {
                e.settings.content_editable ||
                  o.bind(e.getDoc(), "mousedown mouseup", function(t) {
                    var n;
                    if (t.target === e.getDoc().documentElement)
                      if (
                        ((n = i.getRng()),
                        e.getBody().focus(),
                        "mousedown" === t.type)
                      ) {
                        if (ks(n.startContainer)) return;
                        i.placeCaretAt(t.clientX, t.clientY);
                      } else i.setRng(n);
                  });
              },
              w = function() {
                e.on("keydown", function(t) {
                  if (!p(t) && t.keyCode === n) {
                    if (!e.getBody().getElementsByTagName("hr").length) return;
                    if (i.isCollapsed() && 0 === i.getRng().startOffset) {
                      var r = i.getNode(),
                        a = r.previousSibling;
                      if ("HR" === r.nodeName)
                        return o.remove(r), void t.preventDefault();
                      a &&
                        a.nodeName &&
                        "hr" === a.nodeName.toLowerCase() &&
                        (o.remove(a), t.preventDefault());
                    }
                  }
                });
              },
              x = function() {
                Range.prototype.getClientRects ||
                  e.on("mousedown", function(t) {
                    if (!p(t) && "HTML" === t.target.nodeName) {
                      var n = e.getBody();
                      n.blur(),
                        Ie.setEditorTimeout(e, function() {
                          n.focus();
                        });
                    }
                  });
              },
              E = function() {
                e.on("click", function(t) {
                  var n = t.target;
                  /^(IMG|HR)$/.test(n.nodeName) &&
                    "false" !== o.getContentEditableParent(n) &&
                    (t.preventDefault(),
                    e.selection.select(n),
                    e.nodeChanged()),
                    "A" === n.nodeName &&
                      o.hasClass(n, "mce-item-anchor") &&
                      (t.preventDefault(), i.select(n));
                });
              },
              S = function() {
                var n = function() {
                    var n = o.getAttribs(i.getStart().cloneNode(!1));
                    return function() {
                      var r = i.getStart();
                      r !== e.getBody() &&
                        (o.setAttrib(r, "style", null),
                        t(n, function(e) {
                          r.setAttributeNode(e.cloneNode(!0));
                        }));
                    };
                  },
                  r = function() {
                    return (
                      !i.isCollapsed() &&
                      o.getParent(i.getStart(), o.isBlock) !==
                        o.getParent(i.getEnd(), o.isBlock)
                    );
                  };
                e.on("keypress", function(t) {
                  var o;
                  if (!p(t) && (8 === t.keyCode || 46 === t.keyCode) && r())
                    return (
                      (o = n()),
                      e.getDoc().execCommand("delete", !1, null),
                      o(),
                      t.preventDefault(),
                      !1
                    );
                }),
                  o.bind(e.getDoc(), "cut", function(t) {
                    var o;
                    !p(t) &&
                      r() &&
                      ((o = n()),
                      Ie.setEditorTimeout(e, function() {
                        o();
                      }));
                  });
              },
              N = function() {
                e.on("keydown", function(e) {
                  if (
                    !p(e) &&
                    e.keyCode === n &&
                    i.isCollapsed() &&
                    0 === i.getRng().startOffset
                  ) {
                    var t = i.getNode().previousSibling;
                    if (t && t.nodeName && "table" === t.nodeName.toLowerCase())
                      return e.preventDefault(), !1;
                  }
                });
              },
              k = function() {
                e.on("keydown", function(t) {
                  var n, r, a, u, s;
                  if (
                    !p(t) &&
                    t.keyCode === uS.BACKSPACE &&
                    ((n = i.getRng()),
                    (r = n.startContainer),
                    (a = n.startOffset),
                    (u = o.getRoot()),
                    (s = r),
                    n.collapsed && 0 === a)
                  ) {
                    while (
                      s &&
                      s.parentNode &&
                      s.parentNode.firstChild === s &&
                      s.parentNode !== u
                    )
                      s = s.parentNode;
                    "BLOCKQUOTE" === s.tagName &&
                      (e.formatter.toggle("blockquote", null, s),
                      (n = o.createRng()),
                      n.setStart(r, 0),
                      n.setEnd(r, 0),
                      i.setRng(n));
                  }
                });
              },
              T = function() {
                var t = function() {
                  m("StyleWithCSS", !1),
                    m("enableInlineTableEditing", !1),
                    a.object_resizing || m("enableObjectResizing", !1);
                };
                a.readonly || e.on("BeforeExecCommand MouseDown", t);
              },
              _ = function() {
                var n = function() {
                  t(o.select("a"), function(e) {
                    var t = e.parentNode,
                      n = o.getRoot();
                    if (t.lastChild === e) {
                      while (t && !o.isBlock(t)) {
                        if (t.parentNode.lastChild !== t || t === n) return;
                        t = t.parentNode;
                      }
                      o.add(t, "br", { "data-mce-bogus": 1 });
                    }
                  });
                };
                e.on("SetContent ExecCommand", function(e) {
                  ("setcontent" !== e.type && "mceInsertLink" !== e.command) ||
                    n();
                });
              },
              A = function() {
                a.forced_root_block &&
                  e.on("init", function() {
                    m("DefaultParagraphSeparator", a.forced_root_block);
                  });
              },
              R = function() {
                e.on(
                  "keyup focusin mouseup",
                  function(e) {
                    uS.modifierPressed(e) || i.normalize();
                  },
                  !0
                );
              },
              D = function() {
                e.contentStyles.push(
                  "img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}"
                );
              },
              B = function() {
                e.inline ||
                  e.on("keydown", function() {
                    document.activeElement === document.body &&
                      e.getWin().focus();
                  });
              },
              O = function() {
                e.inline ||
                  (e.contentStyles.push("body {min-height: 150px}"),
                  e.on("click", function(t) {
                    var n;
                    if ("HTML" === t.target.nodeName) {
                      if (ke.ie > 11) return void e.getBody().focus();
                      (n = e.selection.getRng()),
                        e.getBody().focus(),
                        e.selection.setRng(n),
                        e.selection.normalize(),
                        e.nodeChanged();
                    }
                  }));
              },
              P = function() {
                ke.mac &&
                  e.on("keydown", function(t) {
                    !uS.metaKeyPressed(t) ||
                      t.shiftKey ||
                      (37 !== t.keyCode && 39 !== t.keyCode) ||
                      (t.preventDefault(),
                      e.selection
                        .getSel()
                        .modify(
                          "move",
                          37 === t.keyCode ? "backward" : "forward",
                          "lineboundary"
                        ));
                  });
              },
              I = function() {
                m("AutoUrlDetect", !1);
              },
              L = function() {
                e.on("click", function(e) {
                  var t = e.target;
                  do {
                    if ("A" === t.tagName) return void e.preventDefault();
                  } while ((t = t.parentNode));
                }),
                  e.contentStyles.push(
                    ".mce-content-body {-webkit-touch-callout: none}"
                  );
              },
              M = function() {
                e.on("init", function() {
                  e.dom.bind(e.getBody(), "submit", function(e) {
                    e.preventDefault();
                  });
                });
              },
              F = function() {
                u.addNodeFilter("br", function(e) {
                  var t = e.length;
                  while (t--)
                    "Apple-interchange-newline" === e[t].attr("class") &&
                      e[t].remove();
                });
              },
              U = function() {
                e.on("dragstart", function(e) {
                  g(e);
                }),
                  e.on("drop", function(t) {
                    if (!p(t)) {
                      var n = h(t);
                      if (n && n.id !== e.id) {
                        t.preventDefault();
                        var r = WT.fromPoint(t.x, t.y, e.getDoc());
                        i.setRng(r), v(n.html, !0);
                      }
                    }
                  });
              },
              j = function() {},
              z = function() {
                var t;
                return !s || e.removed
                  ? 0
                  : ((t = e.selection.getSel()),
                    !t || !t.rangeCount || 0 === t.rangeCount);
              };
            return (
              k(),
              b(),
              ke.windowsPhone || R(),
              l &&
                (C(), E(), A(), M(), N(), F(), ke.iOS ? (B(), O(), L()) : y()),
              ke.ie >= 11 && (O(), N()),
              ke.ie && (y(), I(), U()),
              s && (w(), x(), S(), T(), _(), D(), P(), N()),
              { refreshContentEditable: j, isHidden: z }
            );
          }
          var eB = function(e) {
              return ka.isElement(e) && na(fo.fromDom(e));
            },
            tB = function(e) {
              var t = e.selection.getRng(),
                n = Uc.fromRangeStart(t),
                r = Uc.fromRangeEnd(t);
              if (Uc.isElementPosition(n)) {
                var o = n.container();
                eB(o) &&
                  Jf.firstPositionIn(o).each(function(e) {
                    return t.setStart(e.container(), e.offset());
                  });
              }
              if (Uc.isElementPosition(r)) {
                o = n.container();
                eB(o) &&
                  Jf.lastPositionIn(o).each(function(e) {
                    return t.setEnd(e.container(), e.offset());
                  });
              }
              e.selection.setRng(Zm.normalize(t));
            },
            nB = function(e) {
              e.on("click", function(t) {
                t.detail >= 3 && tB(e);
              });
            },
            rB = function(e) {
              e.on("click", function(t) {
                e.dom.getParent(t.target, "details") && t.preventDefault();
              });
            },
            oB = function(e) {
              e.parser.addNodeFilter("details", function(e) {
                q(e, function(e) {
                  e.attr("data-mce-open", e.attr("open")),
                    e.attr("open", "open");
                });
              }),
                e.serializer.addNodeFilter("details", function(e) {
                  q(e, function(e) {
                    var t = e.attr("data-mce-open");
                    e.attr("open", B(t) ? t : null),
                      e.attr("data-mce-open", null);
                  });
                });
            },
            iB = function(e) {
              rB(e), oB(e);
            },
            aB = pu.DOM,
            uB = function(e, t) {
              var n = fo.fromDom(e.getDoc().head),
                r = fo.fromTag("style");
              Ao(r, "type", "text/css"), Su(r, fo.fromText(t)), Su(n, r);
            },
            sB = function(e) {
              var t = bT(e.settings, e.schema);
              return (
                t.addAttributeFilter("src,href,style,tabindex", function(t, n) {
                  var r,
                    o,
                    i,
                    a = t.length,
                    u = e.dom;
                  while (a--)
                    if (
                      ((r = t[a]),
                      (o = r.attr(n)),
                      (i = "data-mce-" + n),
                      !r.attributes.map[i])
                    ) {
                      if (0 === o.indexOf("data:") || 0 === o.indexOf("blob:"))
                        continue;
                      "style" === n
                        ? ((o = u.serializeStyle(u.parseStyle(o), r.name)),
                          o.length || (o = null),
                          r.attr(i, o),
                          r.attr(n, o))
                        : "tabindex" === n
                          ? (r.attr(i, o), r.attr(n, null))
                          : r.attr(i, e.convertURL(o, n, r.name));
                    }
                }),
                t.addNodeFilter("script", function(e) {
                  var t,
                    n,
                    r = e.length;
                  while (r--)
                    (t = e[r]),
                      (n = t.attr("type") || "no/type"),
                      0 !== n.indexOf("mce-") && t.attr("type", "mce-" + n);
                }),
                t.addNodeFilter("#cdata", function(e) {
                  var t,
                    n = e.length;
                  while (n--)
                    (t = e[n]),
                      (t.type = 8),
                      (t.name = "#comment"),
                      (t.value = "[CDATA[" + t.value + "]]");
                }),
                t.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div", function(t) {
                  var n,
                    r = t.length,
                    o = e.schema.getNonEmptyElements();
                  while (r--)
                    (n = t[r]),
                      n.isEmpty(o) &&
                        0 === n.getAll("br").length &&
                        (n.append(new aT("br", 1)).shortEnded = !0);
                }),
                t
              );
            },
            cB = function(e) {
              e.settings.auto_focus &&
                Ie.setEditorTimeout(
                  e,
                  function() {
                    var t;
                    (t =
                      !0 === e.settings.auto_focus
                        ? e
                        : e.editorManager.get(e.settings.auto_focus)),
                      t.destroyed || t.focus();
                  },
                  100
                );
            },
            lB = function(e) {
              e.bindPendingEventDelegates(),
                (e.initialized = !0),
                e.fire("init"),
                e.focus(!0),
                e.nodeChanged({ initial: !0 }),
                e.execCallback("init_instance_callback", e),
                cB(e);
            },
            fB = function(e) {
              return e.inline ? aB.styleSheetLoader : e.dom.styleSheetLoader;
            },
            dB = function(e, t) {
              var n,
                r,
                o = e.settings,
                i = e.getElement(),
                a = e.getDoc();
              o.inline || (e.getElement().style.visibility = e.orgVisibility),
                t ||
                  o.content_editable ||
                  (a.open(), a.write(e.iframeHTML), a.close()),
                o.content_editable &&
                  (e.on("remove", function() {
                    var e = this.getBody();
                    aB.removeClass(e, "mce-content-body"),
                      aB.removeClass(e, "mce-edit-focus"),
                      aB.setAttrib(e, "contentEditable", null);
                  }),
                  aB.addClass(i, "mce-content-body"),
                  (e.contentDocument = a = o.content_document || document),
                  (e.contentWindow = o.content_window || window),
                  (e.bodyElement = i),
                  (o.content_document = o.content_window = null),
                  (o.root_name = i.nodeName.toLowerCase())),
                (n = e.getBody()),
                (n.disabled = !0),
                (e.readonly = o.readonly),
                e.readonly ||
                  (e.inline &&
                    "static" === aB.getStyle(n, "position", !0) &&
                    (n.style.position = "relative"),
                  (n.contentEditable = e.getParam(
                    "content_editable_state",
                    !0
                  ))),
                (n.disabled = !1),
                (e.editorUpload = Ix(e)),
                (e.schema = nu(o)),
                (e.dom = pu(a, {
                  keep_values: !0,
                  url_converter: e.convertURL,
                  url_converter_scope: e,
                  hex_colors: o.force_hex_style_colors,
                  class_filter: o.class_filter,
                  update_styles: !0,
                  root_element: e.inline ? e.getBody() : null,
                  collect: o.content_editable,
                  schema: e.schema,
                  contentCssCors: Ty.shouldUseContentCssCors(e),
                  onSetAttrib: function(t) {
                    e.fire("SetAttrib", t);
                  }
                })),
                (e.parser = sB(e)),
                (e.serializer = kT(o, e)),
                (e.selection = V_(e.dom, e.getWin(), e.serializer, e)),
                (e.annotator = dm(e)),
                (e.formatter = Uk(e)),
                (e.undoManager = ZS(e)),
                (e._nodeChangeDispatcher = new Zx(e)),
                (e._selectionOverrides = mS(e)),
                iB(e),
                nB(e),
                JD.setup(e),
                Vx.setup(e),
                e.fire("PreInit"),
                o.browser_spellcheck ||
                  o.gecko_spellcheck ||
                  ((a.body.spellcheck = !1),
                  aB.setAttrib(n, "spellcheck", "false")),
                (e.quirks = QD(e)),
                e.fire("PostRender"),
                o.directionality && (n.dir = o.directionality),
                o.nowrap && (n.style.whiteSpace = "nowrap"),
                o.protect &&
                  e.on("BeforeSetContent", function(e) {
                    Mn.each(o.protect, function(t) {
                      e.content = e.content.replace(t, function(e) {
                        return "\x3c!--mce:protected " + escape(e) + "--\x3e";
                      });
                    });
                  }),
                e.on("SetContent", function() {
                  e.addVisual(e.getBody());
                }),
                e.load({ initial: !0, format: "html" }),
                (e.startContent = e.getContent({ format: "raw" })),
                e.on("compositionstart compositionend", function(t) {
                  e.composing = "compositionstart" === t.type;
                }),
                e.contentStyles.length > 0 &&
                  ((r = ""),
                  Mn.each(e.contentStyles, function(e) {
                    r += e + "\r\n";
                  }),
                  e.dom.addStyle(r)),
                fB(e).loadAll(
                  e.contentCSS,
                  function(t) {
                    lB(e);
                  },
                  function(t) {
                    lB(e);
                  }
                ),
                o.content_style && uB(e, o.content_style);
            },
            mB = { initContentBody: dB },
            pB = pu.DOM,
            gB = function(e, t) {
              if (
                document.domain !== window.location.hostname &&
                ke.ie &&
                ke.ie < 12
              ) {
                var n = Bx.uuid("mce");
                e[n] = function() {
                  mB.initContentBody(e);
                };
                var r =
                  'javascript:(function(){document.open();document.domain="' +
                  document.domain +
                  '";var ed = window.parent.tinymce.get("' +
                  e.id +
                  '");document.write(ed.iframeHTML);document.close();ed.' +
                  n +
                  "(true);})()";
                return pB.setAttrib(t, "src", r), !0;
              }
              return !1;
            },
            hB = function(e) {
              var t = "number" === typeof e ? e + "px" : e;
              return t || "";
            },
            vB = function(e, t, n, r) {
              var o = fo.fromTag("iframe");
              return (
                Ro(o, r),
                Ro(o, {
                  id: e + "_ifr",
                  frameBorder: "0",
                  allowTransparency: "true",
                  title: t
                }),
                Mo(o, { width: "100%", height: hB(n), display: "block" }),
                o
              );
            },
            bB = function(e) {
              var t, n, r;
              return (
                (r = Ty.getDocType(e) + "<html><head>"),
                Ty.getDocumentBaseUrl(e) !== e.documentBaseUrl &&
                  (r += '<base href="' + e.documentBaseURI.getURI() + '" />'),
                (r +=
                  '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'),
                (t = Ty.getBodyId(e)),
                (n = Ty.getBodyClass(e)),
                Ty.getContentSecurityPolicy(e) &&
                  (r +=
                    '<meta http-equiv="Content-Security-Policy" content="' +
                    Ty.getContentSecurityPolicy(e) +
                    '" />'),
                (r +=
                  '</head><body id="' +
                  t +
                  '" class="mce-content-body ' +
                  n +
                  '" data-id="' +
                  e.id +
                  '"><br></body></html>'),
                r
              );
            },
            yB = function(e, t) {
              var n = e.editorManager.translate(
                  "Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help"
                ),
                r = vB(e.id, n, t.height, Ty.getIframeAttrs(e)).dom();
              r.onload = function() {
                (r.onload = null), e.fire("load");
              };
              var o = gB(e, r);
              return (
                (e.contentAreaContainer = t.iframeContainer),
                (e.iframeElement = r),
                (e.iframeHTML = bB(e)),
                pB.add(t.iframeContainer, r),
                o
              );
            },
            CB = function(e, t) {
              var n = yB(e, t);
              t.editorContainer &&
                ((pB.get(t.editorContainer).style.display = e.orgDisplay),
                (e.hidden = pB.isHidden(t.editorContainer))),
                (e.getElement().style.display = "none"),
                pB.setAttrib(e.id, "aria-hidden", "true"),
                n || mB.initContentBody(e);
            },
            wB = { init: CB },
            xB = pu.DOM,
            EB = function(e, t, n) {
              var r,
                o,
                i = cx.get(n);
              if (
                ((r = cx.urls[n] || e.documentBaseUrl.replace(/\/$/, "")),
                (n = Mn.trim(n)),
                i && -1 === Mn.inArray(t, n))
              ) {
                if (
                  (Mn.each(cx.dependencies(n), function(n) {
                    EB(e, t, n);
                  }),
                  e.plugins[n])
                )
                  return;
                (o = new i(e, r, e.$)),
                  (e.plugins[n] = o),
                  o.init && (o.init(e, r), t.push(n));
              }
            },
            SB = function(e) {
              return e.replace(/^\-/, "");
            },
            NB = function(e) {
              var t = [];
              Mn.each(e.settings.plugins.split(/[ ,]/), function(n) {
                EB(e, t, SB(n));
              });
            },
            kB = function(e) {
              var t,
                n = e.settings.theme;
              B(n)
                ? ((e.settings.theme = SB(n)),
                  (t = lx.get(n)),
                  (e.theme = new t(e, lx.urls[n])),
                  e.theme.init &&
                    e.theme.init(
                      e,
                      lx.urls[n] || e.documentBaseUrl.replace(/\/$/, ""),
                      e.$
                    ))
                : (e.theme = {});
            },
            TB = function(e) {
              var t,
                n,
                r,
                o,
                i,
                a = e.settings,
                u = e.getElement();
              return (
                (t = a.width || xB.getStyle(u, "width") || "100%"),
                (n = a.height || xB.getStyle(u, "height") || u.offsetHeight),
                (r = a.min_height || 100),
                (o = /^[0-9\.]+(|px)$/i),
                o.test("" + t) && (t = Math.max(parseInt(t, 10), 100)),
                o.test("" + n) && (n = Math.max(parseInt(n, 10), r)),
                (i = e.theme.renderUI({
                  targetNode: u,
                  width: t,
                  height: n,
                  deltaWidth: a.delta_width,
                  deltaHeight: a.delta_height
                })),
                a.content_editable ||
                  ((n =
                    (i.iframeHeight || n) +
                    ("number" === typeof n ? i.deltaHeight || 0 : "")),
                  n < r && (n = r)),
                (i.height = n),
                i
              );
            },
            _B = function(e) {
              var t,
                n = e.getElement();
              return (
                (t = e.settings.theme(e, n)),
                t.editorContainer.nodeType &&
                  (t.editorContainer.id =
                    t.editorContainer.id || e.id + "_parent"),
                t.iframeContainer &&
                  t.iframeContainer.nodeType &&
                  (t.iframeContainer.id =
                    t.iframeContainer.id || e.id + "_iframecontainer"),
                (t.height = t.iframeHeight ? t.iframeHeight : n.offsetHeight),
                t
              );
            },
            AB = function(e) {
              return { editorContainer: e, iframeContainer: e };
            },
            RB = function(e) {
              var t = xB.create("div");
              return xB.insertAfter(t, e), AB(t);
            },
            DB = function(e) {
              var t = e.getElement();
              return e.inline ? AB(null) : RB(t);
            },
            BB = function(e) {
              var t = e.settings,
                n = e.getElement();
              return (
                (e.orgDisplay = n.style.display),
                B(t.theme) ? TB(e) : M(t.theme) ? _B(e) : DB(e)
              );
            },
            OB = function(e) {
              var t,
                n = e.settings,
                r = e.getElement();
              return (
                (e.rtl = n.rtl_ui || e.editorManager.i18n.rtl),
                e.editorManager.i18n.setCode(n.language),
                (n.aria_label =
                  n.aria_label ||
                  xB.getAttrib(
                    r,
                    "aria-label",
                    e.getLang("aria.rich_text_area")
                  )),
                e.fire("ScriptsLoaded"),
                kB(e),
                NB(e),
                (t = BB(e)),
                (e.editorContainer = t.editorContainer
                  ? t.editorContainer
                  : null),
                n.content_css &&
                  Mn.each(Mn.explode(n.content_css), function(t) {
                    e.contentCSS.push(e.documentBaseURI.toAbsolute(t));
                  }),
                n.content_editable ? mB.initContentBody(e) : wB.init(e, t)
              );
            },
            PB = { init: OB },
            IB = pu.DOM,
            LB = function(e) {
              return "-" === e.charAt(0);
            },
            MB = function(e, t) {
              var n = t.settings;
              n.language &&
                "en" !== n.language &&
                !n.language_url &&
                (n.language_url =
                  t.editorManager.baseURL + "/langs/" + n.language + ".js"),
                n.language_url &&
                  !t.editorManager.i18n.data[n.language] &&
                  e.add(n.language_url);
            },
            FB = function(e, t, n, r) {
              var o = t.settings,
                i = o.theme;
              if (B(i)) {
                if (!LB(i) && !lx.urls.hasOwnProperty(i)) {
                  var a = o.theme_url;
                  a
                    ? lx.load(i, t.documentBaseURI.toAbsolute(a))
                    : lx.load(i, "themes/" + i + "/theme" + n + ".js");
                }
                e.loadQueue(function() {
                  lx.waitFor(i, r);
                });
              } else r();
            },
            UB = function(e, t) {
              Mn.isArray(e.plugins) && (e.plugins = e.plugins.join(" ")),
                Mn.each(e.external_plugins, function(t, n) {
                  cx.load(n, t), (e.plugins += " " + n);
                }),
                Mn.each(e.plugins.split(/[ ,]/), function(e) {
                  if (((e = Mn.trim(e)), e && !cx.urls[e]))
                    if (LB(e)) {
                      e = e.substr(1, e.length);
                      var n = cx.dependencies(e);
                      Mn.each(n, function(e) {
                        var n = {
                          prefix: "plugins/",
                          resource: e,
                          suffix: "/plugin" + t + ".js"
                        };
                        (e = cx.createUrl(n, e)), cx.load(e.resource, e);
                      });
                    } else
                      cx.load(e, {
                        prefix: "plugins/",
                        resource: e,
                        suffix: "/plugin" + t + ".js"
                      });
                });
            },
            jB = function(e, t) {
              var n = yu.ScriptLoader;
              FB(n, e, t, function() {
                MB(n, e),
                  UB(e.settings, t),
                  n.loadQueue(
                    function() {
                      e.removed || PB.init(e);
                    },
                    e,
                    function(t) {
                      sx.pluginLoadError(e, t[0]), e.removed || PB.init(e);
                    }
                  );
              });
            },
            zB = function(e) {
              var t = e.settings,
                n = e.id,
                r = function() {
                  IB.unbind(window, "ready", r), e.render();
                };
              if (Ye.Event.domLoaded) {
                if (e.getElement() && ke.contentEditable) {
                  t.inline
                    ? (e.inline = !0)
                    : ((e.orgVisibility = e.getElement().style.visibility),
                      (e.getElement().style.visibility = "hidden"));
                  var o = e.getElement().form || IB.getParent(n, "form");
                  o &&
                    ((e.formElement = o),
                    t.hidden_input &&
                      !/TEXTAREA|INPUT/i.test(e.getElement().nodeName) &&
                      (IB.insertAfter(
                        IB.create("input", { type: "hidden", name: n }),
                        n
                      ),
                      (e.hasHiddenInput = !0)),
                    (e.formEventDelegate = function(t) {
                      e.fire(t.type, t);
                    }),
                    IB.bind(o, "submit reset", e.formEventDelegate),
                    e.on("reset", function() {
                      e.setContent(e.startContent, { format: "raw" });
                    }),
                    !t.submit_patch ||
                      o.submit.nodeType ||
                      o.submit.length ||
                      o._mceOldSubmit ||
                      ((o._mceOldSubmit = o.submit),
                      (o.submit = function() {
                        return (
                          e.editorManager.triggerSave(),
                          e.setDirty(!1),
                          o._mceOldSubmit(o)
                        );
                      }))),
                    (e.windowManager = Qw(e)),
                    (e.notificationManager = Kw(e)),
                    "xml" === t.encoding &&
                      e.on("GetContent", function(e) {
                        e.save && (e.content = IB.encode(e.content));
                      }),
                    t.add_form_submit_trigger &&
                      e.on("submit", function() {
                        e.initialized && e.save();
                      }),
                    t.add_unload_trigger &&
                      ((e._beforeUnload = function() {
                        !e.initialized ||
                          e.destroyed ||
                          e.isHidden() ||
                          e.save({
                            format: "raw",
                            no_events: !0,
                            set_dirty: !1
                          });
                      }),
                      e.editorManager.on("BeforeUnload", e._beforeUnload)),
                    e.editorManager.add(e),
                    jB(e, e.suffix);
                }
              } else IB.bind(window, "ready", r);
            },
            VB = { render: zB },
            HB = function(e, t, n) {
              var r = e.sidebars ? e.sidebars : [];
              r.push({ name: t, settings: n }), (e.sidebars = r);
            },
            qB = { add: HB },
            $B = Mn.each,
            WB = Mn.trim,
            YB = "source protocol authority userInfo user password host port relative path directory file query anchor".split(
              " "
            ),
            GB = { ftp: 21, http: 80, https: 443, mailto: 25 },
            XB = function(e, t) {
              var n,
                r,
                o = this;
              if (
                ((e = WB(e)),
                (t = o.settings = t || {}),
                (n = t.base_uri),
                /^([\w\-]+):([^\/]{2})/i.test(e) || /^\s*#/.test(e))
              )
                o.source = e;
              else {
                var i = 0 === e.indexOf("//");
                0 !== e.indexOf("/") ||
                  i ||
                  (e = ((n && n.protocol) || "http") + "://mce_host" + e),
                  /^[\w\-]*:?\/\//.test(e) ||
                    ((r = t.base_uri
                      ? t.base_uri.path
                      : new XB(document.location.href).directory),
                    "" == t.base_uri.protocol
                      ? (e = "//mce_host" + o.toAbsPath(r, e))
                      : ((e = /([^#?]*)([#?]?.*)/.exec(e)),
                        (e =
                          ((n && n.protocol) || "http") +
                          "://mce_host" +
                          o.toAbsPath(r, e[1]) +
                          e[2]))),
                  (e = e.replace(/@@/g, "(mce_at)")),
                  (e = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(
                    e
                  )),
                  $B(YB, function(t, n) {
                    var r = e[n];
                    r && (r = r.replace(/\(mce_at\)/g, "@@")), (o[t] = r);
                  }),
                  n &&
                    (o.protocol || (o.protocol = n.protocol),
                    o.userInfo || (o.userInfo = n.userInfo),
                    o.port || "mce_host" !== o.host || (o.port = n.port),
                    (o.host && "mce_host" !== o.host) || (o.host = n.host),
                    (o.source = "")),
                  i && (o.protocol = "");
              }
            };
          (XB.prototype = {
            setPath: function(e) {
              var t = this;
              (e = /^(.*?)\/?(\w+)?$/.exec(e)),
                (t.path = e[0]),
                (t.directory = e[1]),
                (t.file = e[2]),
                (t.source = ""),
                t.getURI();
            },
            toRelative: function(e) {
              var t,
                n = this;
              if ("./" === e) return e;
              if (
                ((e = new XB(e, { base_uri: n })),
                ("mce_host" !== e.host && n.host !== e.host && e.host) ||
                  n.port !== e.port ||
                  (n.protocol !== e.protocol && "" !== e.protocol))
              )
                return e.getURI();
              var r = n.getURI(),
                o = e.getURI();
              return r === o ||
                ("/" === r.charAt(r.length - 1) &&
                  r.substr(0, r.length - 1) === o)
                ? r
                : ((t = n.toRelPath(n.path, e.path)),
                  e.query && (t += "?" + e.query),
                  e.anchor && (t += "#" + e.anchor),
                  t);
            },
            toAbsolute: function(e, t) {
              return (
                (e = new XB(e, { base_uri: this })),
                e.getURI(t && this.isSameOrigin(e))
              );
            },
            isSameOrigin: function(e) {
              if (this.host == e.host && this.protocol == e.protocol) {
                if (this.port == e.port) return !0;
                var t = GB[this.protocol];
                if (t && (this.port || t) == (e.port || t)) return !0;
              }
              return !1;
            },
            toRelPath: function(e, t) {
              var n,
                r,
                o,
                i = 0,
                a = "";
              if (
                ((e = e.substring(0, e.lastIndexOf("/"))),
                (e = e.split("/")),
                (n = t.split("/")),
                e.length >= n.length)
              )
                for (r = 0, o = e.length; r < o; r++)
                  if (r >= n.length || e[r] !== n[r]) {
                    i = r + 1;
                    break;
                  }
              if (e.length < n.length)
                for (r = 0, o = n.length; r < o; r++)
                  if (r >= e.length || e[r] !== n[r]) {
                    i = r + 1;
                    break;
                  }
              if (1 === i) return t;
              for (r = 0, o = e.length - (i - 1); r < o; r++) a += "../";
              for (r = i - 1, o = n.length; r < o; r++)
                a += r !== i - 1 ? "/" + n[r] : n[r];
              return a;
            },
            toAbsPath: function(e, t) {
              var n,
                r,
                o,
                i = 0,
                a = [];
              for (
                r = /\/$/.test(t) ? "/" : "",
                  e = e.split("/"),
                  t = t.split("/"),
                  $B(e, function(e) {
                    e && a.push(e);
                  }),
                  e = a,
                  n = t.length - 1,
                  a = [];
                n >= 0;
                n--
              )
                0 !== t[n].length &&
                  "." !== t[n] &&
                  (".." !== t[n] ? (i > 0 ? i-- : a.push(t[n])) : i++);
              return (
                (n = e.length - i),
                (o =
                  n <= 0
                    ? a.reverse().join("/")
                    : e.slice(0, n).join("/") + "/" + a.reverse().join("/")),
                0 !== o.indexOf("/") && (o = "/" + o),
                r && o.lastIndexOf("/") !== o.length - 1 && (o += r),
                o
              );
            },
            getURI: function(e) {
              var t,
                n = this;
              return (
                (n.source && !e) ||
                  ((t = ""),
                  e ||
                    (n.protocol ? (t += n.protocol + "://") : (t += "//"),
                    n.userInfo && (t += n.userInfo + "@"),
                    n.host && (t += n.host),
                    n.port && (t += ":" + n.port)),
                  n.path && (t += n.path),
                  n.query && (t += "?" + n.query),
                  n.anchor && (t += "#" + n.anchor),
                  (n.source = t)),
                n.source
              );
            }
          }),
            (XB.parseDataUri = function(e) {
              var t, n;
              return (
                (e = decodeURIComponent(e).split(",")),
                (n = /data:([^;]+)/.exec(e[0])),
                n && (t = n[1]),
                { type: t, data: e[1] }
              );
            }),
            (XB.getDocumentBaseUrl = function(e) {
              var t;
              return (
                (t =
                  0 !== e.protocol.indexOf("http") && "file:" !== e.protocol
                    ? e.href
                    : e.protocol + "//" + e.host + e.pathname),
                /^[^:]+:\/\/\/?[^\/]+\//.test(t) &&
                  ((t = t.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, "")),
                  /[\/\\]$/.test(t) || (t += "/")),
                t
              );
            });
          var ZB = "html",
            KB = function(e, t) {
              var n = Ty.getForcedRootBlock(e),
                r = new RegExp(
                  "^(<" +
                    n +
                    "[^>]*>(&nbsp;|&#160;|\\s| |<br \\/>|)<\\/" +
                    n +
                    ">[\r\n]*|<br \\/>[\r\n]*)$"
                );
              return t.replace(r, "");
            },
            JB = function(e, t, n) {
              var r;
              if (
                ((t.format = t.format ? t.format : ZB),
                (t.get = !0),
                (t.getInner = !0),
                t.no_events || e.fire("BeforeGetContent", t),
                "raw" === t.format)
              )
                r = Mn.trim(ES.trimExternal(e.serializer, n.innerHTML));
              else if ("text" === t.format)
                r = ws.trim(n.innerText || n.textContent);
              else {
                if ("tree" === t.format) return e.serializer.serialize(n, t);
                r = KB(e, e.serializer.serialize(n, t));
              }
              return (
                "text" === t.format || sa(fo.fromDom(n))
                  ? (t.content = r)
                  : (t.content = Mn.trim(r)),
                t.no_events || e.fire("GetContent", t),
                t.content
              );
            },
            QB = function(e, t) {
              return (
                void 0 === t && (t = {}),
                A.from(e.getBody()).fold(
                  r("tree" === t.format ? new aT("body", 11) : ""),
                  function(n) {
                    return JB(e, t, n);
                  }
                )
              );
            },
            eO = function(e, t) {
              t(e),
                e.firstChild && eO(e.firstChild, t),
                e.next && eO(e.next, t);
            },
            tO = function(e, t, n) {
              var r = {},
                o = {},
                i = [];
              for (var a in (n.firstChild &&
                eO(n.firstChild, function(n) {
                  q(e, function(e) {
                    e.name === n.name &&
                      (r[e.name]
                        ? r[e.name].nodes.push(n)
                        : (r[e.name] = { filter: e, nodes: [n] }));
                  }),
                    q(t, function(e) {
                      "string" === typeof n.attr(e.name) &&
                        (o[e.name]
                          ? o[e.name].nodes.push(n)
                          : (o[e.name] = { filter: e, nodes: [n] }));
                    });
                }),
              r))
                r.hasOwnProperty(a) && i.push(r[a]);
              for (var a in o) o.hasOwnProperty(a) && i.push(o[a]);
              return i;
            },
            nO = function(e, t, n) {
              var r = tO(e, t, n);
              q(r, function(e) {
                q(e.filter.callbacks, function(t) {
                  t(e.nodes, e.filter.name, {});
                });
              });
            },
            rO = "html",
            oO = function(e) {
              return e instanceof aT;
            },
            iO = function(e) {
              Lw.hasFocus(e) &&
                Jf.firstPositionIn(e.getBody()).each(function(t) {
                  var n = t.getNode(),
                    r = ka.isTable(n) ? Jf.firstPositionIn(n).getOr(t) : t;
                  e.selection.setRng(r.toRange());
                });
            },
            aO = function(e, t) {
              e.dom.setHTML(e.getBody(), t), iO(e);
            },
            uO = function(e, t, n, r) {
              var o, i;
              return (
                0 === n.length || /^\s+$/.test(n)
                  ? ((i = '<br data-mce-bogus="1">'),
                    "TABLE" === t.nodeName
                      ? (n = "<tr><td>" + i + "</td></tr>")
                      : /^(UL|OL)$/.test(t.nodeName) &&
                        (n = "<li>" + i + "</li>"),
                    (o = Ty.getForcedRootBlock(e)),
                    o &&
                    e.schema.isValidChild(
                      t.nodeName.toLowerCase(),
                      o.toLowerCase()
                    )
                      ? ((n = i),
                        (n = e.dom.createHTML(
                          o,
                          e.settings.forced_root_block_attrs,
                          n
                        )))
                      : n || (n = '<br data-mce-bogus="1">'),
                    aO(e, n),
                    e.fire("SetContent", r))
                  : ("raw" !== r.format &&
                      (n = Wm({ validate: e.validate }, e.schema).serialize(
                        e.parser.parse(n, { isRootContent: !0, insert: !0 })
                      )),
                    (r.content = sa(fo.fromDom(t)) ? n : Mn.trim(n)),
                    aO(e, r.content),
                    r.no_events || e.fire("SetContent", r)),
                r.content
              );
            },
            sO = function(e, t, n, r) {
              nO(e.parser.getNodeFilters(), e.parser.getAttributeFilters(), n);
              var o = Wm({ validate: e.validate }, e.schema).serialize(n);
              return (
                (r.content = sa(fo.fromDom(t)) ? o : Mn.trim(o)),
                aO(e, r.content),
                r.no_events || e.fire("SetContent", r),
                n
              );
            },
            cO = function(e, t, n) {
              return (
                void 0 === n && (n = {}),
                (n.format = n.format ? n.format : rO),
                (n.set = !0),
                (n.content = oO(t) ? "" : t),
                oO(t) ||
                  n.no_events ||
                  (e.fire("BeforeSetContent", n), (t = n.content)),
                A.from(e.getBody()).fold(r(t), function(r) {
                  return oO(t) ? sO(e, r, t, n) : uO(e, r, t, n);
                })
              );
            },
            lO = pu.DOM,
            fO = function(e) {
              lO.setStyle(e.id, "display", e.orgDisplay);
            },
            dO = function(e) {
              return A.from(e).each(function(e) {
                return e.destroy();
              });
            },
            mO = function(e) {
              (e.contentAreaContainer = e.formElement = e.container = e.editorContainer = null),
                (e.bodyElement = e.contentDocument = e.contentWindow = null),
                (e.iframeElement = e.targetElm = null),
                e.selection &&
                  (e.selection = e.selection.win = e.selection.dom = e.selection.dom.doc = null);
            },
            pO = function(e) {
              var t = e.formElement;
              t &&
                (t._mceOldSubmit &&
                  ((t.submit = t._mceOldSubmit), (t._mceOldSubmit = null)),
                lO.unbind(t, "submit reset", e.formEventDelegate));
            },
            gO = function(e) {
              if (!e.removed) {
                var t = e._selectionOverrides,
                  n = e.editorUpload,
                  r = e.getBody(),
                  o = e.getElement();
                r && e.save({ is_removing: !0 }),
                  (e.removed = !0),
                  e.unbindAllNativeEvents(),
                  e.hasHiddenInput && o && lO.remove(o.nextSibling),
                  !e.inline && r && fO(e),
                  nw.fireRemove(e),
                  e.editorManager.remove(e),
                  lO.remove(e.getContainer()),
                  dO(t),
                  dO(n),
                  e.destroy();
              }
            },
            hO = function(e, t) {
              var n = e.selection,
                r = e.dom;
              e.destroyed ||
                (t || e.removed
                  ? (t ||
                      (e.editorManager.off("beforeunload", e._beforeUnload),
                      e.theme && e.theme.destroy && e.theme.destroy(),
                      dO(n),
                      dO(r)),
                    pO(e),
                    mO(e),
                    (e.destroyed = !0))
                  : e.remove());
            },
            vO = pu.DOM,
            bO = Mn.extend,
            yO = Mn.each,
            CO = Mn.resolve,
            wO = ke.ie,
            xO = function(e, t, n) {
              var r = this,
                o = (r.documentBaseUrl = n.documentBaseURL),
                i = n.baseURI;
              (t = Rp(r, e, o, n.defaultSettings, t)),
                (r.settings = t),
                (wu.language = t.language || "en"),
                (wu.languageLoad = t.language_load),
                (wu.baseURL = n.baseURL),
                (r.id = e),
                r.setDirty(!1),
                (r.plugins = {}),
                (r.documentBaseURI = new XB(t.document_base_url, {
                  base_uri: i
                })),
                (r.baseURI = i),
                (r.contentCSS = []),
                (r.contentStyles = []),
                (r.shortcuts = new Cw(r)),
                (r.loadedCSS = {}),
                (r.editorCommands = new qC(r)),
                (r.suffix = n.suffix),
                (r.editorManager = n),
                (r.inline = t.inline),
                (r.buttons = {}),
                (r.menuItems = {}),
                t.cache_suffix &&
                  (ke.cacheSuffix = t.cache_suffix.replace(/^[\?\&]+/, "")),
                !1 === t.override_viewport && (ke.overrideViewPort = !1),
                n.fire("SetupEditor", { editor: r }),
                r.execCallback("setup", r),
                (r.$ = rr.overrideDefaults(function() {
                  return {
                    context: r.inline ? r.getBody() : r.getDoc(),
                    element: r.getBody()
                  };
                }));
            };
          (xO.prototype = {
            render: function() {
              VB.render(this);
            },
            focus: function(e) {
              Lw.focus(this, e);
            },
            hasFocus: function() {
              return Lw.hasFocus(this);
            },
            execCallback: function(e) {
              for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
              var r,
                o = this,
                i = o.settings[e];
              if (i)
                return (
                  o.callbackLookup &&
                    (r = o.callbackLookup[e]) &&
                    ((i = r.func), (r = r.scope)),
                  "string" === typeof i &&
                    ((r = i.replace(/\.\w+$/, "")),
                    (r = r ? CO(r) : 0),
                    (i = CO(i)),
                    (o.callbackLookup = o.callbackLookup || {}),
                    (o.callbackLookup[e] = { func: i, scope: r })),
                  i.apply(r || o, Array.prototype.slice.call(arguments, 1))
                );
            },
            translate: function(e) {
              if (e && Mn.is(e, "string")) {
                var t = this.settings.language || "en",
                  n = this.editorManager.i18n;
                e =
                  n.data[t + "." + e] ||
                  e.replace(/\{\#([^\}]+)\}/g, function(e, r) {
                    return n.data[t + "." + r] || "{#" + r + "}";
                  });
              }
              return this.editorManager.translate(e);
            },
            getLang: function(e, t) {
              return (
                this.editorManager.i18n.data[
                  (this.settings.language || "en") + "." + e
                ] || (void 0 !== t ? t : "{#" + e + "}")
              );
            },
            getParam: function(e, t, n) {
              return Ip(this, e, t, n);
            },
            nodeChanged: function(e) {
              this._nodeChangeDispatcher.nodeChanged(e);
            },
            addButton: function(e, t) {
              var n = this;
              t.cmd &&
                (t.onclick = function() {
                  n.execCommand(t.cmd);
                }),
                t.stateSelector &&
                  "undefined" === typeof t.active &&
                  (t.active = !1),
                t.text || t.icon || (t.icon = e),
                (t.tooltip = t.tooltip || t.title),
                (n.buttons[e] = t);
            },
            addSidebar: function(e, t) {
              return qB.add(this, e, t);
            },
            addMenuItem: function(e, t) {
              var n = this;
              t.cmd &&
                (t.onclick = function() {
                  n.execCommand(t.cmd);
                }),
                (n.menuItems[e] = t);
            },
            addContextToolbar: function(e, t) {
              var n,
                r = this;
              (r.contextToolbars = r.contextToolbars || []),
                "string" === typeof e &&
                  ((n = e),
                  (e = function(e) {
                    return r.dom.is(e, n);
                  })),
                r.contextToolbars.push({
                  id: Bx.uuid("mcet"),
                  predicate: e,
                  items: t
                });
            },
            addCommand: function(e, t, n) {
              this.editorCommands.addCommand(e, t, n);
            },
            addQueryStateHandler: function(e, t, n) {
              this.editorCommands.addQueryStateHandler(e, t, n);
            },
            addQueryValueHandler: function(e, t, n) {
              this.editorCommands.addQueryValueHandler(e, t, n);
            },
            addShortcut: function(e, t, n, r) {
              this.shortcuts.add(e, t, n, r);
            },
            execCommand: function(e, t, n, r) {
              return this.editorCommands.execCommand(e, t, n, r);
            },
            queryCommandState: function(e) {
              return this.editorCommands.queryCommandState(e);
            },
            queryCommandValue: function(e) {
              return this.editorCommands.queryCommandValue(e);
            },
            queryCommandSupported: function(e) {
              return this.editorCommands.queryCommandSupported(e);
            },
            show: function() {
              var e = this;
              e.hidden &&
                ((e.hidden = !1),
                e.inline
                  ? (e.getBody().contentEditable = !0)
                  : (vO.show(e.getContainer()), vO.hide(e.id)),
                e.load(),
                e.fire("show"));
            },
            hide: function() {
              var e = this,
                t = e.getDoc();
              e.hidden ||
                (wO && t && !e.inline && t.execCommand("SelectAll"),
                e.save(),
                e.inline
                  ? ((e.getBody().contentEditable = !1),
                    e === e.editorManager.focusedEditor &&
                      (e.editorManager.focusedEditor = null))
                  : (vO.hide(e.getContainer()),
                    vO.setStyle(e.id, "display", e.orgDisplay)),
                (e.hidden = !0),
                e.fire("hide"));
            },
            isHidden: function() {
              return !!this.hidden;
            },
            setProgressState: function(e, t) {
              this.fire("ProgressState", { state: e, time: t });
            },
            load: function(e) {
              var t,
                n = this,
                r = n.getElement();
              return n.removed
                ? ""
                : r
                  ? ((e = e || {}),
                    (e.load = !0),
                    (t = n.setContent(
                      void 0 !== r.value ? r.value : r.innerHTML,
                      e
                    )),
                    (e.element = r),
                    e.no_events || n.fire("LoadContent", e),
                    (e.element = r = null),
                    t)
                  : void 0;
            },
            save: function(e) {
              var t,
                n,
                r = this,
                o = r.getElement();
              if (o && r.initialized && !r.removed)
                return (
                  (e = e || {}),
                  (e.save = !0),
                  (e.element = o),
                  (t = e.content = r.getContent(e)),
                  e.no_events || r.fire("SaveContent", e),
                  "raw" === e.format && r.fire("RawSaveContent", e),
                  (t = e.content),
                  /TEXTAREA|INPUT/i.test(o.nodeName)
                    ? (o.value = t)
                    : ((!e.is_removing && r.inline) || (o.innerHTML = t),
                      (n = vO.getParent(r.id, "form")) &&
                        yO(n.elements, function(e) {
                          if (e.name === r.id) return (e.value = t), !1;
                        })),
                  (e.element = o = null),
                  !1 !== e.set_dirty && r.setDirty(!1),
                  t
                );
            },
            setContent: function(e, t) {
              return cO(this, e, t);
            },
            getContent: function(e) {
              return QB(this, e);
            },
            insertContent: function(e, t) {
              t && (e = bO({ content: e }, t)),
                this.execCommand("mceInsertContent", !1, e);
            },
            isDirty: function() {
              return !this.isNotDirty;
            },
            setDirty: function(e) {
              var t = !this.isNotDirty;
              (this.isNotDirty = !e), e && e !== t && this.fire("dirty");
            },
            setMode: function(e) {
              aw(this, e);
            },
            getContainer: function() {
              var e = this;
              return (
                e.container ||
                  (e.container = vO.get(e.editorContainer || e.id + "_parent")),
                e.container
              );
            },
            getContentAreaContainer: function() {
              return this.contentAreaContainer;
            },
            getElement: function() {
              return (
                this.targetElm || (this.targetElm = vO.get(this.id)),
                this.targetElm
              );
            },
            getWin: function() {
              var e,
                t = this;
              return (
                t.contentWindow ||
                  ((e = t.iframeElement),
                  e && (t.contentWindow = e.contentWindow)),
                t.contentWindow
              );
            },
            getDoc: function() {
              var e,
                t = this;
              return (
                t.contentDocument ||
                  ((e = t.getWin()), e && (t.contentDocument = e.document)),
                t.contentDocument
              );
            },
            getBody: function() {
              var e = this.getDoc();
              return this.bodyElement || (e ? e.body : null);
            },
            convertURL: function(e, t, n) {
              var r = this,
                o = r.settings;
              return o.urlconverter_callback
                ? r.execCallback("urlconverter_callback", e, n, !0, t)
                : !o.convert_urls ||
                  (n && "LINK" === n.nodeName) ||
                  0 === e.indexOf("file:") ||
                  0 === e.length
                  ? e
                  : o.relative_urls
                    ? r.documentBaseURI.toRelative(e)
                    : ((e = r.documentBaseURI.toAbsolute(
                        e,
                        o.remove_script_host
                      )),
                      e);
            },
            addVisual: function(e) {
              var t,
                n = this,
                r = n.settings,
                o = n.dom;
              (e = e || n.getBody()),
                void 0 === n.hasVisual && (n.hasVisual = r.visual),
                yO(o.select("table,a", e), function(e) {
                  var i;
                  switch (e.nodeName) {
                    case "TABLE":
                      return (
                        (t = r.visual_table_class || "mce-item-table"),
                        (i = o.getAttrib(e, "border")),
                        void ((i && "0" !== i) || !n.hasVisual
                          ? o.removeClass(e, t)
                          : o.addClass(e, t))
                      );
                    case "A":
                      return void (
                        o.getAttrib(e, "href") ||
                        ((i = o.getAttrib(e, "name") || e.id),
                        (t = r.visual_anchor_class || "mce-item-anchor"),
                        i && n.hasVisual
                          ? o.addClass(e, t)
                          : o.removeClass(e, t))
                      );
                  }
                }),
                n.fire("VisualAid", { element: e, hasVisual: n.hasVisual });
            },
            remove: function() {
              gO(this);
            },
            destroy: function(e) {
              hO(this, e);
            },
            uploadImages: function(e) {
              return this.editorUpload.uploadImages(e);
            },
            _scanForImages: function() {
              return this.editorUpload.scanForImages();
            }
          }),
            bO(xO.prototype, gw);
          var EO,
            SO,
            NO,
            kO = function(e) {
              return -1 !== e.className.toString().indexOf("mce-");
            },
            TO = { isEditorUIElement: kO },
            _O = function(e) {
              return "nodechange" === e.type && e.selectionChange;
            },
            AO = function(e, t) {
              var n = function() {
                t.throttle();
              };
              pu.DOM.bind(document, "mouseup", n),
                e.on("remove", function() {
                  pu.DOM.unbind(document, "mouseup", n);
                });
            },
            RO = function(e) {
              e.on("focusout", function() {
                PC.store(e);
              });
            },
            DO = function(e, t) {
              e.on("mouseup touchend", function(e) {
                t.throttle();
              });
            },
            BO = function(e, t) {
              var n = io.detect().browser;
              n.isIE() ? RO(e) : DO(e, t),
                e.on("keyup nodechange", function(t) {
                  _O(t) || PC.store(e);
                });
            },
            OO = function(e) {
              var t = Du(function() {
                PC.store(e);
              }, 0);
              e.inline && AO(e, t),
                e.on("init", function() {
                  BO(e, t);
                }),
                e.on("remove", function() {
                  t.cancel();
                });
            },
            PO = { register: OO },
            IO = pu.DOM,
            LO = function(e) {
              return TO.isEditorUIElement(e);
            },
            MO = function(e, t) {
              var n = e ? e.settings.custom_ui_selector : "",
                r = IO.getParent(t, function(t) {
                  return LO(t) || (!!n && e.dom.is(t, n));
                });
              return null !== r;
            },
            FO = function() {
              try {
                return document.activeElement;
              } catch (e) {
                return document.body;
              }
            },
            UO = function(e, t) {
              var n = t.editor;
              PO.register(n),
                n.on("focusin", function() {
                  var t = this,
                    n = e.focusedEditor;
                  n !== t &&
                    (n && n.fire("blur", { focusedEditor: t }),
                    e.setActive(t),
                    (e.focusedEditor = t),
                    t.fire("focus", { blurredEditor: n }),
                    t.focus(!0));
                }),
                n.on("focusout", function() {
                  var t = this;
                  Ie.setEditorTimeout(t, function() {
                    var n = e.focusedEditor;
                    MO(t, FO()) ||
                      n !== t ||
                      (t.fire("blur", { focusedEditor: null }),
                      (e.focusedEditor = null));
                  });
                }),
                EO ||
                  ((EO = function(t) {
                    var n,
                      r = e.activeEditor;
                    (n = t.target),
                      r &&
                        n.ownerDocument === document &&
                        (n === document.body ||
                          MO(r, n) ||
                          e.focusedEditor !== r ||
                          (r.fire("blur", { focusedEditor: null }),
                          (e.focusedEditor = null)));
                  }),
                  IO.bind(document, "focusin", EO));
            },
            jO = function(e, t) {
              e.focusedEditor === t.editor && (e.focusedEditor = null),
                e.activeEditor ||
                  (IO.unbind(document, "focusin", EO), (EO = null));
            },
            zO = function(e) {
              e.on("AddEditor", i(UO, e)), e.on("RemoveEditor", i(jO, e));
            },
            VO = { setup: zO, isEditorUIElement: LO, isUIElement: MO },
            HO = {},
            qO = "en",
            $O = {
              setCode: function(e) {
                e &&
                  ((qO = e),
                  (this.rtl = !!this.data[e] && "rtl" === this.data[e]._dir));
              },
              getCode: function() {
                return qO;
              },
              rtl: !1,
              add: function(e, t) {
                var n = HO[e];
                for (var r in (n || (HO[e] = n = {}), t)) n[r] = t[r];
                this.setCode(e);
              },
              translate: function(e) {
                var t = HO[qO] || {},
                  n = function(e) {
                    return Mn.is(e, "function")
                      ? Object.prototype.toString.call(e)
                      : r(e)
                        ? ""
                        : "" + e;
                  },
                  r = function(e) {
                    return "" === e || null === e || Mn.is(e, "undefined");
                  },
                  o = function(e) {
                    return (e = n(e)), Mn.hasOwn(t, e) ? n(t[e]) : e;
                  };
                if (r(e)) return "";
                if (Mn.is(e, "object") && Mn.hasOwn(e, "raw")) return n(e.raw);
                if (Mn.is(e, "array")) {
                  var i = e.slice(1);
                  e = o(e[0]).replace(/\{([0-9]+)\}/g, function(e, t) {
                    return Mn.hasOwn(i, t) ? n(i[t]) : e;
                  });
                }
                return o(e).replace(/{context:\w+}$/, "");
              },
              data: HO
            },
            WO = pu.DOM,
            YO = Mn.explode,
            GO = Mn.each,
            XO = Mn.extend,
            ZO = 0,
            KO = !1,
            JO = [],
            QO = [],
            eP = function(e) {
              return "length" !== e;
            },
            tP = function(e) {
              GO(NO.get(), function(t) {
                "scroll" === e.type
                  ? t.fire("ScrollWindow", e)
                  : t.fire("ResizeWindow", e);
              });
            },
            nP = function(e) {
              e !== KO &&
                (e
                  ? rr(window).on("resize scroll", tP)
                  : rr(window).off("resize scroll", tP),
                (KO = e));
            },
            rP = function(e) {
              var t = QO;
              delete JO[e.id];
              for (var n = 0; n < JO.length; n++)
                if (JO[n] === e) {
                  JO.splice(n, 1);
                  break;
                }
              return (
                (QO = Y(QO, function(t) {
                  return e !== t;
                })),
                NO.activeEditor === e &&
                  (NO.activeEditor = QO.length > 0 ? QO[0] : null),
                NO.focusedEditor === e && (NO.focusedEditor = null),
                t.length !== QO.length
              );
            },
            oP = function(e) {
              return (
                e &&
                  e.initialized &&
                  !(e.getContainer() || e.getBody()).parentNode &&
                  (rP(e),
                  e.unbindAllNativeEvents(),
                  e.destroy(!0),
                  (e.removed = !0),
                  (e = null)),
                e
              );
            };
          (NO = {
            defaultSettings: {},
            $: rr,
            majorVersion: "4",
            minorVersion: "9.1",
            releaseDate: "2018-12-04",
            editors: JO,
            i18n: $O,
            activeEditor: null,
            settings: {},
            setup: function() {
              var e,
                t,
                n,
                r,
                o = this,
                i = "";
              if (
                ((t = XB.getDocumentBaseUrl(document.location)),
                /^[^:]+:\/\/\/?[^\/]+\//.test(t) &&
                  ((t = t.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, "")),
                  /[\/\\]$/.test(t) || (t += "/")),
                (n = window.tinymce || window.tinyMCEPreInit),
                n)
              )
                (e = n.base || n.baseURL), (i = n.suffix);
              else {
                for (
                  var a = document.getElementsByTagName("script"), u = 0;
                  u < a.length;
                  u++
                ) {
                  r = a[u].src;
                  var s = r.substring(r.lastIndexOf("/"));
                  if (/tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(r)) {
                    -1 !== s.indexOf(".min") && (i = ".min"),
                      (e = r.substring(0, r.lastIndexOf("/")));
                    break;
                  }
                }
                !e &&
                  document.currentScript &&
                  ((r = document.currentScript.src),
                  -1 !== r.indexOf(".min") && (i = ".min"),
                  (e = r.substring(0, r.lastIndexOf("/"))));
              }
              (o.baseURL = new XB(t).toAbsolute(e)),
                (o.documentBaseURL = t),
                (o.baseURI = new XB(o.baseURL)),
                (o.suffix = i),
                VO.setup(o);
            },
            overrideDefaults: function(e) {
              var t, n;
              (t = e.base_url),
                t &&
                  ((this.baseURL = new XB(this.documentBaseURL).toAbsolute(
                    t.replace(/\/+$/, "")
                  )),
                  (this.baseURI = new XB(this.baseURL))),
                (n = e.suffix),
                e.suffix && (this.suffix = n),
                (this.defaultSettings = e);
              var r = e.plugin_base_urls;
              for (var o in r) wu.PluginManager.urls[o] = r[o];
            },
            init: function(e) {
              var t,
                n,
                r = this;
              n = Mn.makeMap(
                "area base basefont br col frame hr img input isindex link meta param embed source wbr track colgroup option tbody tfoot thead tr script noscript style textarea video audio iframe object menu",
                " "
              );
              var o = function(e, t) {
                  return e.inline && t.tagName.toLowerCase() in n;
                },
                i = function(e) {
                  var t = e.id;
                  return (
                    t ||
                      ((t = e.name),
                      (t = t && !WO.get(t) ? e.name : WO.uniqueId()),
                      e.setAttribute("id", t)),
                    t
                  );
                },
                a = function(t) {
                  var n = e[t];
                  if (n)
                    return n.apply(r, Array.prototype.slice.call(arguments, 2));
                },
                u = function(e, t) {
                  return t.constructor === RegExp
                    ? t.test(e.className)
                    : WO.hasClass(e, t);
                },
                s = function(e) {
                  var t,
                    n = [];
                  if (ke.ie && ke.ie < 11)
                    return (
                      sx.initError(
                        "TinyMCE does not support the browser you are using. For a list of supported browsers please see: https://www.tinymce.com/docs/get-started/system-requirements/"
                      ),
                      []
                    );
                  if (e.types)
                    return (
                      GO(e.types, function(e) {
                        n = n.concat(WO.select(e.selector));
                      }),
                      n
                    );
                  if (e.selector) return WO.select(e.selector);
                  if (e.target) return [e.target];
                  switch (e.mode) {
                    case "exact":
                      (t = e.elements || ""),
                        t.length > 0 &&
                          GO(YO(t), function(e) {
                            var t;
                            (t = WO.get(e))
                              ? n.push(t)
                              : GO(document.forms, function(t) {
                                  GO(t.elements, function(t) {
                                    t.name === e &&
                                      ((e = "mce_editor_" + ZO++),
                                      WO.setAttrib(t, "id", e),
                                      n.push(t));
                                  });
                                });
                          });
                      break;
                    case "textareas":
                    case "specific_textareas":
                      GO(WO.select("textarea"), function(t) {
                        (e.editor_deselector && u(t, e.editor_deselector)) ||
                          (e.editor_selector && !u(t, e.editor_selector)) ||
                          n.push(t);
                      });
                      break;
                  }
                  return n;
                },
                c = function(e) {
                  t = e;
                },
                l = function() {
                  var t,
                    n = 0,
                    u = [],
                    f = function(e, o, i) {
                      var a = new xO(e, o, r);
                      u.push(a),
                        a.on("init", function() {
                          ++n === t.length && c(u);
                        }),
                        (a.targetElm = a.targetElm || i),
                        a.render();
                    };
                  WO.unbind(window, "ready", l),
                    a("onpageload"),
                    (t = rr.unique(s(e))),
                    e.types
                      ? GO(e.types, function(n) {
                          Mn.each(t, function(t) {
                            return (
                              !WO.is(t, n.selector) ||
                              (f(i(t), XO({}, e, n), t), !1)
                            );
                          });
                        })
                      : (Mn.each(t, function(e) {
                          oP(r.get(e.id));
                        }),
                        (t = Mn.grep(t, function(e) {
                          return !r.get(e.id);
                        })),
                        0 === t.length
                          ? c([])
                          : GO(t, function(t) {
                              o(e, t)
                                ? sx.initError(
                                    "Could not initialize inline editor on invalid inline target element",
                                    t
                                  )
                                : f(i(t), e, t);
                            }));
                };
              return (
                (r.settings = e),
                WO.bind(window, "ready", l),
                new _e(function(e) {
                  t
                    ? e(t)
                    : (c = function(t) {
                        e(t);
                      });
                })
              );
            },
            get: function(e) {
              return 0 === arguments.length
                ? QO.slice(0)
                : B(e)
                  ? Z(QO, function(t) {
                      return t.id === e;
                    }).getOr(null)
                  : F(e) && QO[e]
                    ? QO[e]
                    : null;
            },
            add: function(e) {
              var t,
                n = this;
              return (
                (t = JO[e.id]),
                t === e
                  ? e
                  : (null === n.get(e.id) &&
                      (eP(e.id) && (JO[e.id] = e), JO.push(e), QO.push(e)),
                    nP(!0),
                    (n.activeEditor = e),
                    n.fire("AddEditor", { editor: e }),
                    SO ||
                      ((SO = function() {
                        n.fire("BeforeUnload");
                      }),
                      WO.bind(window, "beforeunload", SO)),
                    e)
              );
            },
            createEditor: function(e, t) {
              return this.add(new xO(e, t, this));
            },
            remove: function(e) {
              var t,
                n,
                r = this;
              if (e) {
                if (!B(e))
                  return (
                    (n = e),
                    I(r.get(n.id))
                      ? null
                      : (rP(n) && r.fire("RemoveEditor", { editor: n }),
                        0 === QO.length &&
                          WO.unbind(window, "beforeunload", SO),
                        n.remove(),
                        nP(QO.length > 0),
                        n)
                  );
                GO(WO.select(e), function(e) {
                  (n = r.get(e.id)), n && r.remove(n);
                });
              } else for (t = QO.length - 1; t >= 0; t--) r.remove(QO[t]);
            },
            execCommand: function(e, t, n) {
              var r = this,
                o = r.get(n);
              switch (e) {
                case "mceAddEditor":
                  return r.get(n) || new xO(n, r.settings, r).render(), !0;
                case "mceRemoveEditor":
                  return o && o.remove(), !0;
                case "mceToggleEditor":
                  return o
                    ? (o.isHidden() ? o.show() : o.hide(), !0)
                    : (r.execCommand("mceAddEditor", 0, n), !0);
              }
              return !!r.activeEditor && r.activeEditor.execCommand(e, t, n);
            },
            triggerSave: function() {
              GO(QO, function(e) {
                e.save();
              });
            },
            addI18n: function(e, t) {
              $O.add(e, t);
            },
            translate: function(e) {
              return $O.translate(e);
            },
            setActive: function(e) {
              var t = this.activeEditor;
              this.activeEditor !== e &&
                (t && t.fire("deactivate", { relatedTarget: e }),
                e.fire("activate", { relatedTarget: t })),
                (this.activeEditor = e);
            }
          }),
            XO(NO, XC),
            NO.setup();
          var iP = NO;
          function aP(e) {
            var t = function(t, n) {
                return em.walk(e, t, n);
              },
              n = cN.split,
              o = function(t) {
                return rC.normalize(e, t).fold(r(!1), function(e) {
                  return (
                    t.setStart(e.startContainer, e.startOffset),
                    t.setEnd(e.endContainer, e.endOffset),
                    !0
                  );
                });
              };
            return { walk: t, split: n, normalize: o };
          }
          (function(e) {
            (e.compareRanges = qy.isEq),
              (e.getCaretRangeFromPoint = WT.fromPoint),
              (e.getSelectedNode = lc),
              (e.getNode = fc);
          })(aP || (aP = {}));
          var uP,
            sP,
            cP = aP,
            lP = Math.min,
            fP = Math.max,
            dP = Math.round,
            mP = function(e, t, n) {
              var r, o, i, a, u, s;
              return (
                (r = t.x),
                (o = t.y),
                (i = e.w),
                (a = e.h),
                (u = t.w),
                (s = t.h),
                (n = (n || "").split("")),
                "b" === n[0] && (o += s),
                "r" === n[1] && (r += u),
                "c" === n[0] && (o += dP(s / 2)),
                "c" === n[1] && (r += dP(u / 2)),
                "b" === n[3] && (o -= a),
                "r" === n[4] && (r -= i),
                "c" === n[3] && (o -= dP(a / 2)),
                "c" === n[4] && (r -= dP(i / 2)),
                bP(r, o, i, a)
              );
            },
            pP = function(e, t, n, r) {
              var o, i;
              for (i = 0; i < r.length; i++)
                if (
                  ((o = mP(e, t, r[i])),
                  o.x >= n.x &&
                    o.x + o.w <= n.w + n.x &&
                    o.y >= n.y &&
                    o.y + o.h <= n.h + n.y)
                )
                  return r[i];
              return null;
            },
            gP = function(e, t, n) {
              return bP(e.x - t, e.y - n, e.w + 2 * t, e.h + 2 * n);
            },
            hP = function(e, t) {
              var n, r, o, i;
              return (
                (n = fP(e.x, t.x)),
                (r = fP(e.y, t.y)),
                (o = lP(e.x + e.w, t.x + t.w)),
                (i = lP(e.y + e.h, t.y + t.h)),
                o - n < 0 || i - r < 0 ? null : bP(n, r, o - n, i - r)
              );
            },
            vP = function(e, t, n) {
              var r, o, i, a, u, s, c, l, f, d;
              return (
                (u = e.x),
                (s = e.y),
                (c = e.x + e.w),
                (l = e.y + e.h),
                (f = t.x + t.w),
                (d = t.y + t.h),
                (r = fP(0, t.x - u)),
                (o = fP(0, t.y - s)),
                (i = fP(0, c - f)),
                (a = fP(0, l - d)),
                (u += r),
                (s += o),
                n && ((c += r), (l += o), (u -= i), (s -= a)),
                (c -= i),
                (l -= a),
                bP(u, s, c - u, l - s)
              );
            },
            bP = function(e, t, n, r) {
              return { x: e, y: t, w: n, h: r };
            },
            yP = function(e) {
              return bP(e.left, e.top, e.width, e.height);
            },
            CP = {
              inflate: gP,
              relativePosition: mP,
              findBestRelativePosition: pP,
              intersect: hP,
              clamp: vP,
              create: bP,
              fromClientRect: yP
            },
            wP = {},
            xP = {
              add: function(e, t) {
                wP[e.toLowerCase()] = t;
              },
              has: function(e) {
                return !!wP[e.toLowerCase()];
              },
              get: function(e) {
                var t = e.toLowerCase(),
                  n = wP.hasOwnProperty(t) ? wP[t] : null;
                if (null === n)
                  throw new Error("Could not find module for type: " + e);
                return n;
              },
              create: function(e, t) {
                var n;
                if (
                  ("string" === typeof e
                    ? ((t = t || {}), (t.type = e))
                    : ((t = e), (e = t.type)),
                  (e = e.toLowerCase()),
                  (n = wP[e]),
                  !n)
                )
                  throw new Error("Could not find control by type: " + e);
                return (n = new n(t)), (n.type = e), n;
              }
            },
            EP = Mn.each,
            SP = Mn.extend,
            NP = function() {};
          NP.extend = uP = function(e) {
            var t,
              n,
              r,
              o = this,
              i = o.prototype,
              a = function() {
                var e,
                  t,
                  n,
                  r = this;
                if (
                  !sP &&
                  (r.init && r.init.apply(r, arguments), (t = r.Mixins), t)
                ) {
                  e = t.length;
                  while (e--) (n = t[e]), n.init && n.init.apply(r, arguments);
                }
              },
              u = function() {
                return this;
              },
              s = function(e, t) {
                return function() {
                  var n,
                    r = this,
                    o = r._super;
                  return (
                    (r._super = i[e]),
                    (n = t.apply(r, arguments)),
                    (r._super = o),
                    n
                  );
                };
              };
            for (n in ((sP = !0),
            (t = new o()),
            (sP = !1),
            e.Mixins &&
              (EP(e.Mixins, function(t) {
                for (var n in t) "init" !== n && (e[n] = t[n]);
              }),
              i.Mixins && (e.Mixins = i.Mixins.concat(e.Mixins))),
            e.Methods &&
              EP(e.Methods.split(","), function(t) {
                e[t] = u;
              }),
            e.Properties &&
              EP(e.Properties.split(","), function(t) {
                var n = "_" + t;
                e[t] = function(e) {
                  var t = this;
                  return void 0 !== e ? ((t[n] = e), t) : t[n];
                };
              }),
            e.Statics &&
              EP(e.Statics, function(e, t) {
                a[t] = e;
              }),
            e.Defaults &&
              i.Defaults &&
              (e.Defaults = SP({}, i.Defaults, e.Defaults)),
            e))
              (r = e[n]),
                "function" === typeof r && i[n] ? (t[n] = s(n, r)) : (t[n] = r);
            return (a.prototype = t), (a.constructor = a), (a.extend = uP), a;
          };
          var kP = Math.min,
            TP = Math.max,
            _P = Math.round,
            AP = function(e) {
              var t = {},
                n = 0,
                r = 0,
                o = 0,
                i = function(e, t, n) {
                  var r, o, i, a, u, s;
                  return (
                    (r = 0),
                    (o = 0),
                    (i = 0),
                    (e /= 255),
                    (t /= 255),
                    (n /= 255),
                    (u = kP(e, kP(t, n))),
                    (s = TP(e, TP(t, n))),
                    u === s
                      ? ((i = u), { h: 0, s: 0, v: 100 * i })
                      : ((a = e === u ? t - n : n === u ? e - t : n - e),
                        (r = e === u ? 3 : n === u ? 1 : 5),
                        (r = 60 * (r - a / (s - u))),
                        (o = (s - u) / s),
                        (i = s),
                        { h: _P(r), s: _P(100 * o), v: _P(100 * i) })
                  );
                },
                a = function(e, t, i) {
                  var a, u, s, c;
                  if (
                    ((e = (parseInt(e, 10) || 0) % 360),
                    (t = parseInt(t, 10) / 100),
                    (i = parseInt(i, 10) / 100),
                    (t = TP(0, kP(t, 1))),
                    (i = TP(0, kP(i, 1))),
                    0 !== t)
                  ) {
                    switch (
                      ((a = e / 60),
                      (u = i * t),
                      (s = u * (1 - Math.abs((a % 2) - 1))),
                      (c = i - u),
                      Math.floor(a))
                    ) {
                      case 0:
                        (n = u), (r = s), (o = 0);
                        break;
                      case 1:
                        (n = s), (r = u), (o = 0);
                        break;
                      case 2:
                        (n = 0), (r = u), (o = s);
                        break;
                      case 3:
                        (n = 0), (r = s), (o = u);
                        break;
                      case 4:
                        (n = s), (r = 0), (o = u);
                        break;
                      case 5:
                        (n = u), (r = 0), (o = s);
                        break;
                      default:
                        n = r = o = 0;
                    }
                    (n = _P(255 * (n + c))),
                      (r = _P(255 * (r + c))),
                      (o = _P(255 * (o + c)));
                  } else n = r = o = _P(255 * i);
                },
                u = function() {
                  var e = function(e) {
                    return (
                      (e = parseInt(e, 10).toString(16)),
                      e.length > 1 ? e : "0" + e
                    );
                  };
                  return "#" + e(n) + e(r) + e(o);
                },
                s = function() {
                  return { r: n, g: r, b: o };
                },
                c = function() {
                  return i(n, r, o);
                },
                l = function(e) {
                  var i;
                  return (
                    "object" === typeof e
                      ? "r" in e
                        ? ((n = e.r), (r = e.g), (o = e.b))
                        : "v" in e && a(e.h, e.s, e.v)
                      : (i = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)[^\)]*\)/gi.exec(
                          e
                        ))
                        ? ((n = parseInt(i[1], 10)),
                          (r = parseInt(i[2], 10)),
                          (o = parseInt(i[3], 10)))
                        : (i = /#([0-F]{2})([0-F]{2})([0-F]{2})/gi.exec(e))
                          ? ((n = parseInt(i[1], 16)),
                            (r = parseInt(i[2], 16)),
                            (o = parseInt(i[3], 16)))
                          : (i = /#([0-F])([0-F])([0-F])/gi.exec(e)) &&
                            ((n = parseInt(i[1] + i[1], 16)),
                            (r = parseInt(i[2] + i[2], 16)),
                            (o = parseInt(i[3] + i[3], 16))),
                    (n = n < 0 ? 0 : n > 255 ? 255 : n),
                    (r = r < 0 ? 0 : r > 255 ? 255 : r),
                    (o = o < 0 ? 0 : o > 255 ? 255 : o),
                    t
                  );
                };
              return (
                e && l(e),
                (t.toRgb = s),
                (t.toHsv = c),
                (t.toHex = u),
                (t.parse = l),
                t
              );
            },
            RP = function(e, t) {
              var n, r, o, i;
              if (((t = t || '"'), null === e)) return "null";
              if (((o = typeof e), "string" === o))
                return (
                  (r = "\bb\tt\nn\ff\rr\"\"''\\\\"),
                  t +
                    e.replace(/([\u0080-\uFFFF\x00-\x1f\"\'\\])/g, function(
                      e,
                      o
                    ) {
                      return '"' === t && "'" === e
                        ? e
                        : ((n = r.indexOf(o)),
                          n + 1
                            ? "\\" + r.charAt(n + 1)
                            : ((e = o.charCodeAt().toString(16)),
                              "\\u" + "0000".substring(e.length) + e));
                    }) +
                    t
                );
              if ("object" === o) {
                if (
                  e.hasOwnProperty &&
                  "[object Array]" === Object.prototype.toString.call(e)
                ) {
                  for (n = 0, r = "["; n < e.length; n++)
                    r += (n > 0 ? "," : "") + RP(e[n], t);
                  return r + "]";
                }
                for (i in ((r = "{"), e))
                  e.hasOwnProperty(i) &&
                    (r +=
                      "function" !== typeof e[i]
                        ? (r.length > 1 ? "," + t : t) +
                          i +
                          t +
                          ":" +
                          RP(e[i], t)
                        : "");
                return r + "}";
              }
              return "" + e;
            },
            DP = {
              serialize: RP,
              parse: function(e) {
                try {
                  return JSON.parse(e);
                } catch (t) {}
              }
            },
            BP = {
              callbacks: {},
              count: 0,
              send: function(e) {
                var t = this,
                  n = pu.DOM,
                  r = void 0 !== e.count ? e.count : t.count,
                  o = "tinymce_jsonp_" + r;
                (t.callbacks[r] = function(i) {
                  n.remove(o), delete t.callbacks[r], e.callback(i);
                }),
                  n.add(n.doc.body, "script", {
                    id: o,
                    src: e.url,
                    type: "text/javascript"
                  }),
                  t.count++;
              }
            },
            OP = {
              send: function(e) {
                var t,
                  n = 0,
                  r = function() {
                    !e.async || 4 === t.readyState || n++ > 1e4
                      ? (e.success && n < 1e4 && 200 === t.status
                          ? e.success.call(
                              e.success_scope,
                              "" + t.responseText,
                              t,
                              e
                            )
                          : e.error &&
                            e.error.call(
                              e.error_scope,
                              n > 1e4 ? "TIMED_OUT" : "GENERAL",
                              t,
                              e
                            ),
                        (t = null))
                      : setTimeout(r, 10);
                  };
                if (
                  ((e.scope = e.scope || this),
                  (e.success_scope = e.success_scope || e.scope),
                  (e.error_scope = e.error_scope || e.scope),
                  (e.async = !1 !== e.async),
                  (e.data = e.data || ""),
                  OP.fire("beforeInitialize", { settings: e }),
                  (t = fx()),
                  t)
                ) {
                  if (
                    (t.overrideMimeType && t.overrideMimeType(e.content_type),
                    t.open(e.type || (e.data ? "POST" : "GET"), e.url, e.async),
                    e.crossDomain && (t.withCredentials = !0),
                    e.content_type &&
                      t.setRequestHeader("Content-Type", e.content_type),
                    e.requestheaders &&
                      Mn.each(e.requestheaders, function(e) {
                        t.setRequestHeader(e.key, e.value);
                      }),
                    t.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                    (t = OP.fire("beforeSend", { xhr: t, settings: e }).xhr),
                    t.send(e.data),
                    !e.async)
                  )
                    return r();
                  setTimeout(r, 10);
                }
              }
            };
          Mn.extend(OP, XC);
          var PP = Mn.extend,
            IP = function(e) {
              (this.settings = PP({}, e)), (this.count = 0);
            };
          (IP.sendRPC = function(e) {
            return new IP().send(e);
          }),
            (IP.prototype = {
              send: function(e) {
                var t = e.error,
                  n = e.success;
                (e = PP(this.settings, e)),
                  (e.success = function(r, o) {
                    (r = DP.parse(r)),
                      "undefined" === typeof r &&
                        (r = { error: "JSON Parse error." }),
                      r.error
                        ? t.call(e.error_scope || e.scope, r.error, o)
                        : n.call(e.success_scope || e.scope, r.result);
                  }),
                  (e.error = function(n, r) {
                    t && t.call(e.error_scope || e.scope, n, r);
                  }),
                  (e.data = DP.serialize({
                    id: e.id || "c" + this.count++,
                    method: e.method,
                    params: e.params
                  })),
                  (e.content_type = "application/json"),
                  OP.send(e);
              }
            });
          var LP,
            MP = function() {
              return (function() {
                var e = {},
                  t = [],
                  n = {
                    getItem: function(t) {
                      var n = e[t];
                      return n || null;
                    },
                    setItem: function(n, r) {
                      t.push(n), (e[n] = String(r));
                    },
                    key: function(e) {
                      return t[e];
                    },
                    removeItem: function(n) {
                      (t = t.filter(function(e) {
                        return e === n;
                      })),
                        delete e[n];
                    },
                    clear: function() {
                      (t = []), (e = {});
                    },
                    length: 0
                  };
                return (
                  Object.defineProperty(n, "length", {
                    get: function() {
                      return t.length;
                    },
                    configurable: !1,
                    enumerable: !1
                  }),
                  n
                );
              })();
            };
          try {
            LP = window.localStorage;
          } catch (qP) {
            LP = MP();
          }
          var FP = LP,
            UP = iP,
            jP = {
              geom: { Rect: CP },
              util: {
                Promise: _e,
                Delay: Ie,
                Tools: Mn,
                VK: uS,
                URI: XB,
                Class: NP,
                EventDispatcher: WC,
                Observable: XC,
                I18n: $O,
                XHR: OP,
                JSON: DP,
                JSONRequest: IP,
                JSONP: BP,
                LocalStorage: FP,
                Color: AP
              },
              dom: {
                EventUtils: Ye,
                Sizzle: Zt,
                DomQuery: rr,
                TreeWalker: Fi,
                DOMUtils: pu,
                ScriptLoader: yu,
                RangeUtils: cP,
                Serializer: kT,
                ControlSelection: OT,
                BookmarkManager: AT,
                Selection: V_,
                Event: Ye.Event
              },
              html: {
                Styles: ou,
                Entities: $a,
                Node: aT,
                Schema: nu,
                SaxParser: yS,
                DomParser: bT,
                Writer: $m,
                Serializer: Wm
              },
              ui: { Factory: xP },
              Env: ke,
              AddOnManager: wu,
              Annotator: dm,
              Formatter: Uk,
              UndoManager: ZS,
              EditorCommands: qC,
              WindowManager: Qw,
              NotificationManager: Kw,
              EditorObservable: gw,
              Shortcuts: Cw,
              Editor: xO,
              FocusManager: TO,
              EditorManager: iP,
              DOM: pu.DOM,
              ScriptLoader: yu.ScriptLoader,
              PluginManager: wu.PluginManager,
              ThemeManager: wu.ThemeManager,
              trim: Mn.trim,
              isArray: Mn.isArray,
              is: Mn.is,
              toArray: Mn.toArray,
              makeMap: Mn.makeMap,
              each: Mn.each,
              map: Mn.map,
              grep: Mn.grep,
              inArray: Mn.inArray,
              extend: Mn.extend,
              create: Mn.create,
              walk: Mn.walk,
              createNS: Mn.createNS,
              resolve: Mn.resolve,
              explode: Mn.explode,
              _addCacheSuffix: Mn._addCacheSuffix,
              isOpera: ke.opera,
              isWebKit: ke.webkit,
              isIE: ke.ie,
              isGecko: ke.gecko,
              isMac: ke.mac
            };
          UP = Mn.extend(UP, jP);
          var zP = UP,
            VP = function(t) {
              try {
                e.exports = t;
              } catch (n) {}
            },
            HP = function(e) {
              (window.tinymce = e), (window.tinyMCE = e);
            };
          HP(zP), VP(zP);
        })();
      })();
    },
    f21c: function(e, t, n) {
      !(function(t, r) {
        e.exports = r(n("5c96"));
      })(window, function(e) {
        return (function(e) {
          var t = {};
          function n(r) {
            if (t[r]) return t[r].exports;
            var o = (t[r] = { i: r, l: !1, exports: {} });
            return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
          }
          return (
            (n.m = e),
            (n.c = t),
            (n.d = function(e, t, r) {
              n.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: r });
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
              var r = Object.create(null);
              if (
                (n.r(r),
                Object.defineProperty(r, "default", {
                  enumerable: !0,
                  value: e
                }),
                2 & t && "string" != typeof e)
              )
                for (var o in e)
                  n.d(
                    r,
                    o,
                    function(t) {
                      return e[t];
                    }.bind(null, o)
                  );
              return r;
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
            n((n.s = 1))
          );
        })([
          function(t, n) {
            t.exports = e;
          },
          function(e, t, n) {
            "use strict";
            n.r(t),
              n.d(t, "ElPopoverDialog", function() {
                return o;
              });
            var r,
              o = n(2).default;
            function i(e) {
              r
                ? console.warn(
                    "[ElPopoverDialog] already installed. Vue.use(ElPopoverDialog) should be called only once."
                  )
                : (r = e).component(o.name, o);
            }
            (o.install = i),
              "undefined" != typeof window && window.Vue && i(window.Vue);
          },
          function(e, t, n) {
            "use strict";
            n.r(t);
            var r = function() {
              var e = this,
                t = e.$createElement,
                n = e._self._c || t;
              return n(
                "el-popover",
                e._g(
                  e._b(
                    {
                      staticClass: "popover-dialog",
                      staticStyle: { "font-size": "0px" },
                      attrs: { placement: e.$attrs.placement || "top" },
                      model: {
                        value: e.visible,
                        callback: function(t) {
                          e.visible = t;
                        },
                        expression: "visible"
                      }
                    },
                    "el-popover",
                    e.$attrs,
                    !1
                  ),
                  e.$listeners
                ),
                [
                  e.popoverContentShow
                    ? n("p", { staticClass: "popover-content" }, [
                        e._v(e._s(e.popoverContent))
                      ])
                    : e._e(),
                  e._v(" "),
                  e._t("popover-content", null, { hide: e.hide }),
                  e._v(" "),
                  e.showConfirmButton || e.showCancelButton
                    ? n(
                        "div",
                        {
                          staticClass: "popover-btn",
                          style: e.popoverBtnStyle
                        },
                        [
                          e.showCancelButton
                            ? n(
                                "el-button",
                                {
                                  staticClass: "cancel-btn",
                                  attrs: { type: "text", size: "mini" },
                                  on: { click: e.cancel }
                                },
                                [e._v(e._s(e.cancelButtonText) + "\n    ")]
                              )
                            : e._e(),
                          e._v(" "),
                          e.showConfirmButton
                            ? n(
                                "el-button",
                                {
                                  staticClass: "confirm-btn",
                                  attrs: { type: "primary", size: "mini" },
                                  on: { click: e.confirm }
                                },
                                [
                                  e._v(
                                    "\n      " +
                                      e._s(e.confirmButtonText) +
                                      "\n    "
                                  )
                                ]
                              )
                            : e._e(),
                          e._v(" "),
                          e._t("popover-btn", null, { hide: e.hide })
                        ],
                        2
                      )
                    : e._e(),
                  e._v(" "),
                  n(
                    "span",
                    {
                      staticClass: "reference",
                      attrs: { slot: "reference" },
                      slot: "reference"
                    },
                    [
                      e.btnShow
                        ? n(
                            "el-button",
                            e._b(
                              {
                                staticClass: "reference-btn",
                                style: e.btnStyle,
                                attrs: { size: e.btnSize, type: e.btnType }
                              },
                              "el-button",
                              e.$attrs,
                              !1
                            ),
                            [e._v(e._s(e.btnTxt) + "\n    ")]
                          )
                        : e._e(),
                      e._v(" "),
                      e._t("reference", null, { hide: e.hide })
                    ],
                    2
                  )
                ],
                2
              );
            };
            r._withStripped = !0;
            var o = n(0),
              i = (function(e, t, n, r, o, i, a, u) {
                var s,
                  c = "function" == typeof e ? e.options : e;
                if (
                  (t &&
                    ((c.render = t),
                    (c.staticRenderFns = n),
                    (c._compiled = !0)),
                  r && (c.functional = !0),
                  i && (c._scopeId = "data-v-" + i),
                  a
                    ? ((s = function(e) {
                        (e =
                          e ||
                          (this.$vnode && this.$vnode.ssrContext) ||
                          (this.parent &&
                            this.parent.$vnode &&
                            this.parent.$vnode.ssrContext)) ||
                          "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                          (e = __VUE_SSR_CONTEXT__),
                          o && o.call(this, e),
                          e &&
                            e._registeredComponents &&
                            e._registeredComponents.add(a);
                      }),
                      (c._ssrRegister = s))
                    : o &&
                      (s = u
                        ? function() {
                            o.call(this, this.$root.$options.shadowRoot);
                          }
                        : o),
                  s)
                )
                  if (c.functional) {
                    c._injectStyles = s;
                    var l = c.render;
                    c.render = function(e, t) {
                      return s.call(t), l(e, t);
                    };
                  } else {
                    var f = c.beforeCreate;
                    c.beforeCreate = f ? [].concat(f, s) : [s];
                  }
                return { exports: e, options: c };
              })(
                {
                  name: "ElPopoverDialog",
                  components: {
                    "el-button": o.Button,
                    "el-popover": o.Popover
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
                    hide: function(e) {
                      (this.visible = !1),
                        "[object Function]" ===
                          Object.prototype.toString.call(e) && e();
                    }
                  }
                },
                r,
                [],
                !1,
                null,
                null,
                null
              );
            (i.options.__file = "src/ElPopoverDialog.vue"),
              (t.default = i.exports);
          }
        ]).ElPopoverDialog;
      });
    }
  }
]);
//# sourceMappingURL=chunk-7e92f0e4.b4e2f267.js.map
