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
            p = function() {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            },
            g = function(e, t) {
              return function() {
                for (var n = [], r = 0; r < arguments.length; r++)
                  n[r] = arguments[r];
                return e(t.apply(null, arguments));
              };
            },
            h = function(e) {
              return function() {
                return e;
              };
            },
            v = function(e) {
              return e;
            },
            b = function(e) {
              for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
              for (
                var r = new Array(arguments.length - 1), o = 1;
                o < arguments.length;
                o++
              )
                r[o - 1] = arguments[o];
              return function() {
                for (var t = [], n = 0; n < arguments.length; n++)
                  t[n] = arguments[n];
                for (
                  var o = new Array(arguments.length), i = 0;
                  i < o.length;
                  i++
                )
                  o[i] = arguments[i];
                var a = r.concat(o);
                return e.apply(null, a);
              };
            },
            y = function(e) {
              return function() {
                throw new Error(e);
              };
            },
            C = h(!1),
            w = h(!0),
            x = C,
            E = w,
            S = function() {
              return N;
            },
            N = (function() {
              var e = function(e) {
                  return e.isNone();
                },
                t = function(e) {
                  return e();
                },
                n = function(e) {
                  return e;
                },
                r = function() {},
                o = function() {
                  return null;
                },
                i = function() {},
                a = {
                  fold: function(e, t) {
                    return e();
                  },
                  is: x,
                  isSome: x,
                  isNone: E,
                  getOr: n,
                  getOrThunk: t,
                  getOrDie: function(e) {
                    throw new Error(e || "error: getOrDie called on none.");
                  },
                  getOrNull: o,
                  getOrUndefined: i,
                  or: n,
                  orThunk: t,
                  map: S,
                  ap: S,
                  each: r,
                  bind: S,
                  flatten: S,
                  exists: x,
                  forall: E,
                  filter: S,
                  equals: e,
                  equals_: e,
                  toArray: function() {
                    return [];
                  },
                  toString: h("none()")
                };
              return Object.freeze && Object.freeze(a), a;
            })(),
            k = function(e) {
              var t = function() {
                  return e;
                },
                n = function() {
                  return i;
                },
                r = function(t) {
                  return k(t(e));
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
                  isSome: E,
                  isNone: x,
                  getOr: t,
                  getOrThunk: t,
                  getOrDie: t,
                  getOrNull: t,
                  getOrUndefined: t,
                  or: n,
                  orThunk: n,
                  map: r,
                  ap: function(t) {
                    return t.fold(S, function(t) {
                      return k(t(e));
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
                    return t(e) ? i : N;
                  },
                  equals: function(t) {
                    return t.is(e);
                  },
                  equals_: function(t, n) {
                    return t.fold(x, function(t) {
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
            T = function(e) {
              return null === e || void 0 === e ? N : k(e);
            },
            _ = { some: k, none: S, from: T },
            A = function(e) {
              if (null === e) return "null";
              var t = typeof e;
              return "object" === t && Array.prototype.isPrototypeOf(e)
                ? "array"
                : "object" === t && String.prototype.isPrototypeOf(e)
                  ? "string"
                  : t;
            },
            R = function(e) {
              return function(t) {
                return A(t) === e;
              };
            },
            B = R("string"),
            D = R("object"),
            O = R("array"),
            P = R("null"),
            I = R("boolean"),
            L = R("function"),
            M = R("number"),
            F = (function() {
              var e = Array.prototype.indexOf,
                t = function(t, n) {
                  return e.call(t, n);
                },
                n = function(e, t) {
                  return K(e, t);
                };
              return void 0 === e ? n : t;
            })(),
            U = function(e, t) {
              var n = F(e, t);
              return -1 === n ? _.none() : _.some(n);
            },
            j = function(e, t) {
              return F(e, t) > -1;
            },
            z = function(e, t) {
              return Z(e, t).isSome();
            },
            V = function(e, t) {
              for (var n = e.length, r = new Array(n), o = 0; o < n; o++) {
                var i = e[o];
                r[o] = t(i, o, e);
              }
              return r;
            },
            H = function(e, t) {
              for (var n = 0, r = e.length; n < r; n++) {
                var o = e[n];
                t(o, n, e);
              }
            },
            q = function(e, t) {
              for (var n = e.length - 1; n >= 0; n--) {
                var r = e[n];
                t(r, n, e);
              }
            },
            $ = function(e, t) {
              for (var n = [], r = [], o = 0, i = e.length; o < i; o++) {
                var a = e[o],
                  u = t(a, o, e) ? n : r;
                u.push(a);
              }
              return { pass: n, fail: r };
            },
            W = function(e, t) {
              for (var n = [], r = 0, o = e.length; r < o; r++) {
                var i = e[r];
                t(i, r, e) && n.push(i);
              }
              return n;
            },
            Y = function(e, t, n) {
              return (
                q(e, function(e) {
                  n = t(n, e);
                }),
                n
              );
            },
            G = function(e, t, n) {
              return (
                H(e, function(e) {
                  n = t(n, e);
                }),
                n
              );
            },
            X = function(e, t) {
              for (var n = 0, r = e.length; n < r; n++) {
                var o = e[n];
                if (t(o, n, e)) return _.some(o);
              }
              return _.none();
            },
            Z = function(e, t) {
              for (var n = 0, r = e.length; n < r; n++) {
                var o = e[n];
                if (t(o, n, e)) return _.some(n);
              }
              return _.none();
            },
            K = function(e, t) {
              for (var n = 0, r = e.length; n < r; ++n)
                if (e[n] === t) return n;
              return -1;
            },
            J = Array.prototype.push,
            Q = function(e) {
              for (var t = [], n = 0, r = e.length; n < r; ++n) {
                if (!Array.prototype.isPrototypeOf(e[n]))
                  throw new Error(
                    "Arr.flatten item " + n + " was not an array, input: " + e
                  );
                J.apply(t, e[n]);
              }
              return t;
            },
            ee = function(e, t) {
              var n = V(e, t);
              return Q(n);
            },
            te = function(e, t) {
              for (var n = 0, r = e.length; n < r; ++n) {
                var o = e[n];
                if (!0 !== t(o, n, e)) return !1;
              }
              return !0;
            },
            ne = Array.prototype.slice,
            re = function(e) {
              var t = ne.call(e, 0);
              return t.reverse(), t;
            },
            oe = function(e, t) {
              return W(e, function(e) {
                return !j(t, e);
              });
            },
            ie = function(e, t) {
              for (var n = {}, r = 0, o = e.length; r < o; r++) {
                var i = e[r];
                n[String(i)] = t(i, r);
              }
              return n;
            },
            ae = function(e, t) {
              var n = ne.call(e, 0);
              return n.sort(t), n;
            },
            ue = function(e) {
              return 0 === e.length ? _.none() : _.some(e[0]);
            },
            se = function(e) {
              return 0 === e.length ? _.none() : _.some(e[e.length - 1]);
            },
            ce = L(Array.from)
              ? Array.from
              : function(e) {
                  return ne.call(e);
                },
            le =
              "undefined" !== typeof window
                ? window
                : Function("return this;")(),
            fe = function(e, t) {
              for (
                var n = void 0 !== t && null !== t ? t : le, r = 0;
                r < e.length && void 0 !== n && null !== n;
                ++r
              )
                n = n[e[r]];
              return n;
            },
            de = function(e, t) {
              var n = e.split(".");
              return fe(n, t);
            },
            me = function(e, t) {
              return de(e, t);
            },
            pe = function(e, t) {
              var n = me(e, t);
              if (void 0 === n || null === n)
                throw e + " not available on this browser";
              return n;
            },
            ge = { getOrDie: pe },
            he = function() {
              return ge.getOrDie("URL");
            },
            ve = function(e) {
              return he().createObjectURL(e);
            },
            be = function(e) {
              he().revokeObjectURL(e);
            },
            ye = { createObjectURL: ve, revokeObjectURL: be },
            Ce = navigator,
            we = Ce.userAgent,
            xe = function(e) {
              return "matchMedia" in window && matchMedia(e).matches;
            };
          (t = !1),
            (c = /Android/.test(we)),
            (n = /WebKit/.test(we)),
            (r =
              !n && !t && /MSIE/gi.test(we) && /Explorer/gi.test(Ce.appName)),
            (r = r && /MSIE (\w+)\./.exec(we)[1]),
            (o =
              -1 !== we.indexOf("Trident/") &&
              (-1 !== we.indexOf("rv:") ||
                -1 !== Ce.appName.indexOf("Netscape")) &&
              11),
            (i = -1 !== we.indexOf("Edge/") && !r && !o && 12),
            (r = r || o || i),
            (a = !n && !o && /Gecko/.test(we)),
            (u = -1 !== we.indexOf("Mac")),
            (s = /(iPad|iPhone)/.test(we)),
            (l =
              "FormData" in window &&
              "FileReader" in window &&
              "URL" in window &&
              !!ye.createObjectURL),
            (f = xe("only screen and (max-device-width: 480px)") && (c || s)),
            (d = xe("only screen and (min-width: 800px)") && (c || s)),
            (m = -1 !== we.indexOf("Windows Phone")),
            i && (n = !1);
          var Ee,
            Se =
              !s || l || parseInt(we.match(/AppleWebKit\/(\d*)/)[1], 10) >= 534,
            Ne = {
              opera: t,
              webkit: n,
              ie: r,
              gecko: a,
              mac: u,
              iOS: s,
              android: c,
              contentEditable: Se,
              transparentSrc:
                "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
              caretAfter: 8 !== r,
              range: window.getSelection && "Range" in window,
              documentMode: r && !i ? document.documentMode || 7 : 10,
              fileApi: l,
              ceFalse: !1 === r || r > 8,
              cacheSuffix: null,
              container: null,
              overrideViewPort: null,
              experimentalShadowDom: !1,
              canHaveCSP: !1 === r || r > 11,
              desktop: !f && !d,
              windowsPhone: m
            },
            ke = function() {
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
            Te = window.Promise ? window.Promise : ke(),
            _e = function(e, t) {
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
            Ae = function(e, t) {
              return "number" !== typeof t && (t = 0), setTimeout(e, t);
            },
            Re = function(e, t) {
              return "number" !== typeof t && (t = 1), setInterval(e, t);
            },
            Be = function(e) {
              return clearTimeout(e);
            },
            De = function(e) {
              return clearInterval(e);
            },
            Oe = function(e, t) {
              var n, r;
              return (
                (r = function() {
                  var r = arguments;
                  clearTimeout(n),
                    (n = Ae(function() {
                      e.apply(this, r);
                    }, t));
                }),
                (r.stop = function() {
                  clearTimeout(n);
                }),
                r
              );
            },
            Pe = {
              requestAnimationFrame: function(e, t) {
                Ee
                  ? Ee.then(e)
                  : (Ee = new Te(function(e) {
                      t || (t = document.body), _e(e, t);
                    }).then(e));
              },
              setTimeout: Ae,
              setInterval: Re,
              setEditorTimeout: function(e, t, n) {
                return Ae(function() {
                  e.removed || t();
                }, n);
              },
              setEditorInterval: function(e, t, n) {
                var r;
                return (
                  (r = Re(function() {
                    e.removed ? clearInterval(r) : t();
                  }, n)),
                  r
                );
              },
              debounce: Oe,
              throttle: Oe,
              clearInterval: De,
              clearTimeout: Be
            },
            Ie = "mce-data-",
            Le = /^(?:mouse|contextmenu)|click/,
            Me = {
              keyLocation: 1,
              layerX: 1,
              layerY: 1,
              returnValue: 1,
              webkitMovementX: 1,
              webkitMovementY: 1,
              keyIdentifier: 1
            },
            Fe = function(e) {
              return e.isDefaultPrevented === je || e.isDefaultPrevented === Ue;
            },
            Ue = function() {
              return !1;
            },
            je = function() {
              return !0;
            },
            ze = function(e, t, n, r) {
              e.addEventListener
                ? e.addEventListener(t, n, r || !1)
                : e.attachEvent && e.attachEvent("on" + t, n);
            },
            Ve = function(e, t, n, r) {
              e.removeEventListener
                ? e.removeEventListener(t, n, r || !1)
                : e.detachEvent && e.detachEvent("on" + t, n);
            },
            He = function(e, t) {
              if (e.composedPath) {
                var n = e.composedPath();
                if (n && n.length > 0) return n[0];
              }
              return t;
            },
            qe = function(e, t) {
              var n,
                r = t || {};
              for (n in e) Me[n] || (r[n] = e[n]);
              if (
                (r.target || (r.target = r.srcElement || document),
                Ne.experimentalShadowDom && (r.target = He(e, r.target)),
                e &&
                  Le.test(e.type) &&
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
                  (r.isDefaultPrevented = je),
                    e &&
                      (e.preventDefault
                        ? e.preventDefault()
                        : (e.returnValue = !1));
                }),
                (r.stopPropagation = function() {
                  (r.isPropagationStopped = je),
                    e &&
                      (e.stopPropagation
                        ? e.stopPropagation()
                        : (e.cancelBubble = !0));
                }),
                (r.stopImmediatePropagation = function() {
                  (r.isImmediatePropagationStopped = je), r.stopPropagation();
                }),
                !1 === Fe(r) &&
                  ((r.isDefaultPrevented = Ue),
                  (r.isPropagationStopped = Ue),
                  (r.isImmediatePropagationStopped = Ue)),
                "undefined" === typeof r.metaKey && (r.metaKey = !1),
                r
              );
            },
            $e = function(e, t, n) {
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
                    i() && (Ve(r, "readystatechange", u), a());
                  },
                  s = function() {
                    try {
                      r.documentElement.doScroll("left");
                    } catch (e) {
                      return void Pe.setTimeout(s);
                    }
                    a();
                  };
                !r.addEventListener || (Ne.ie && Ne.ie < 11)
                  ? (ze(r, "readystatechange", u),
                    r.documentElement.doScroll && e.self === e.top && s())
                  : i()
                    ? a()
                    : ze(e, "DOMContentLoaded", a),
                  ze(e, "load", a);
              }
            },
            We = function() {
              var e,
                t,
                n,
                r,
                o,
                i = this,
                a = {};
              (t = Ie + (+new Date()).toString(32)),
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
                    u(qe(e || y.event), d);
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
                        ? l.call(f, qe({ type: g }))
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
                                  ((e = qe(e || y.event)),
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
                              (e = qe(e || y.event)),
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
                                ? $e(s, v, i)
                                : ze(s, h || g, v, b)));
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
                            Ve(e, u.fakeName || l, u.nativeHandler, u.capture));
                        }
                    } else {
                      for (l in f)
                        (u = f[l]),
                          Ve(e, u.fakeName || l, u.nativeHandler, u.capture);
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
                  (r = qe(null, r)), (r.type = n), (r.target = e);
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
          (We.Event = new We()), We.Event.bind(window, "ready", function() {});
          var Ye,
            Ge,
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
            dt = "sizzle" + -new Date(),
            mt = window.document,
            pt = 0,
            gt = 0,
            ht = Zt(),
            vt = Zt(),
            bt = Zt(),
            yt = function(e, t) {
              return e === t && (rt = !0), 0;
            },
            Ct = "undefined",
            wt = 1 << 31,
            xt = {}.hasOwnProperty,
            Et = [],
            St = Et.pop,
            Nt = Et.push,
            kt = Et.push,
            Tt = Et.slice,
            _t =
              Et.indexOf ||
              function(e) {
                for (var t = 0, n = this.length; t < n; t++)
                  if (this[t] === e) return t;
                return -1;
              },
            At =
              "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            Rt = "[\\x20\\t\\r\\n\\f]",
            Bt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            Dt =
              "\\[" +
              Rt +
              "*(" +
              Bt +
              ")(?:" +
              Rt +
              "*([*^$|!~]?=)" +
              Rt +
              "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
              Bt +
              "))|)" +
              Rt +
              "*\\]",
            Ot =
              ":(" +
              Bt +
              ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
              Dt +
              ")*)|.*)\\)|)",
            Pt = new RegExp(
              "^" + Rt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Rt + "+$",
              "g"
            ),
            It = new RegExp("^" + Rt + "*," + Rt + "*"),
            Lt = new RegExp("^" + Rt + "*([>+~]|" + Rt + ")" + Rt + "*"),
            Mt = new RegExp("=" + Rt + "*([^\\]'\"]*?)" + Rt + "*\\]", "g"),
            Ft = new RegExp(Ot),
            Ut = new RegExp("^" + Bt + "$"),
            jt = {
              ID: new RegExp("^#(" + Bt + ")"),
              CLASS: new RegExp("^\\.(" + Bt + ")"),
              TAG: new RegExp("^(" + Bt + "|[*])"),
              ATTR: new RegExp("^" + Dt),
              PSEUDO: new RegExp("^" + Ot),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                  Rt +
                  "*(even|odd|(([+-]|)(\\d*)n|)" +
                  Rt +
                  "*(?:([+-]|)" +
                  Rt +
                  "*(\\d+)|))" +
                  Rt +
                  "*\\)|)",
                "i"
              ),
              bool: new RegExp("^(?:" + At + ")$", "i"),
              needsContext: new RegExp(
                "^" +
                  Rt +
                  "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                  Rt +
                  "*((?:-\\d)?\\d*)" +
                  Rt +
                  "*\\)|)(?=[^-]|$)",
                "i"
              )
            },
            zt = /^(?:input|select|textarea|button)$/i,
            Vt = /^h\d$/i,
            Ht = /^[^{]+\{\s*\[native \w/,
            qt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            $t = /[+~]/,
            Wt = /'|\\/g,
            Yt = new RegExp(
              "\\\\([\\da-f]{1,6}" + Rt + "?|(" + Rt + ")|.)",
              "ig"
            ),
            Gt = function(e, t, n) {
              var r = "0x" + t - 65536;
              return r !== r || n
                ? t
                : r < 0
                  ? String.fromCharCode(r + 65536)
                  : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
            };
          try {
            kt.apply((Et = Tt.call(mt.childNodes)), mt.childNodes),
              Et[mt.childNodes.length].nodeType;
          } catch (nP) {
            kt = {
              apply: Et.length
                ? function(e, t) {
                    Nt.apply(e, Tt.call(t));
                  }
                : function(e, t) {
                    var n = e.length,
                      r = 0;
                    while ((e[n++] = t[r++]));
                    e.length = n - 1;
                  }
            };
          }
          var Xt = function(e, t, n, r) {
            var o, i, a, u, s, c, l, f, d, m;
            if (
              ((t ? t.ownerDocument || t : mt) !== it && ot(t),
              (t = t || it),
              (n = n || []),
              !e || "string" !== typeof e)
            )
              return n;
            if (1 !== (u = t.nodeType) && 9 !== u) return [];
            if (ut && !r) {
              if ((o = qt.exec(e)))
                if ((a = o[1])) {
                  if (9 === u) {
                    if (((i = t.getElementById(a)), !i || !i.parentNode))
                      return n;
                    if (i.id === a) return n.push(i), n;
                  } else if (
                    t.ownerDocument &&
                    (i = t.ownerDocument.getElementById(a)) &&
                    ft(t, i) &&
                    i.id === a
                  )
                    return n.push(i), n;
                } else {
                  if (o[2]) return kt.apply(n, t.getElementsByTagName(e)), n;
                  if ((a = o[3]) && Ge.getElementsByClassName)
                    return kt.apply(n, t.getElementsByClassName(a)), n;
                }
              if (Ge.qsa && (!st || !st.test(e))) {
                if (
                  ((f = l = dt),
                  (d = t),
                  (m = 9 === u && e),
                  1 === u && "object" !== t.nodeName.toLowerCase())
                ) {
                  (c = Je(e)),
                    (l = t.getAttribute("id"))
                      ? (f = l.replace(Wt, "\\$&"))
                      : t.setAttribute("id", f),
                    (f = "[id='" + f + "'] "),
                    (s = c.length);
                  while (s--) c[s] = f + on(c[s]);
                  (d = ($t.test(e) && nn(t.parentNode)) || t),
                    (m = c.join(","));
                }
                if (m)
                  try {
                    return kt.apply(n, d.querySelectorAll(m)), n;
                  } catch (p) {
                  } finally {
                    l || t.removeAttribute("id");
                  }
              }
            }
            return et(e.replace(Pt, "$1"), t, n, r);
          };
          function Zt() {
            var e = [];
            function t(n, r) {
              return (
                e.push(n + " ") > Xe.cacheLength && delete t[e.shift()],
                (t[n + " "] = r)
              );
            }
            return t;
          }
          function Kt(e) {
            return (e[dt] = !0), e;
          }
          function Jt(e, t) {
            var n = t && e,
              r =
                n &&
                1 === e.nodeType &&
                1 === t.nodeType &&
                (~t.sourceIndex || wt) - (~e.sourceIndex || wt);
            if (r) return r;
            if (n) while ((n = n.nextSibling)) if (n === t) return -1;
            return e ? 1 : -1;
          }
          function Qt(e) {
            return function(t) {
              var n = t.nodeName.toLowerCase();
              return "input" === n && t.type === e;
            };
          }
          function en(e) {
            return function(t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e;
            };
          }
          function tn(e) {
            return Kt(function(t) {
              return (
                (t = +t),
                Kt(function(n, r) {
                  var o,
                    i = e([], n.length, t),
                    a = i.length;
                  while (a--) n[(o = i[a])] && (n[o] = !(r[o] = n[o]));
                })
              );
            });
          }
          function nn(e) {
            return e && typeof e.getElementsByTagName !== Ct && e;
          }
          for (Ye in ((Ge = Xt.support = {}),
          (Ke = Xt.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName;
          }),
          (ot = Xt.setDocument = function(e) {
            var t,
              n = e ? e.ownerDocument || e : mt,
              r = n.defaultView;
            function o(e) {
              try {
                return e.top;
              } catch (t) {}
              return null;
            }
            return n !== it && 9 === n.nodeType && n.documentElement
              ? ((it = n),
                (at = n.documentElement),
                (ut = !Ke(n)),
                r &&
                  r !== o(r) &&
                  (r.addEventListener
                    ? r.addEventListener(
                        "unload",
                        function() {
                          ot();
                        },
                        !1
                      )
                    : r.attachEvent &&
                      r.attachEvent("onunload", function() {
                        ot();
                      })),
                (Ge.attributes = !0),
                (Ge.getElementsByTagName = !0),
                (Ge.getElementsByClassName = Ht.test(n.getElementsByClassName)),
                (Ge.getById = !0),
                (Xe.find.ID = function(e, t) {
                  if (typeof t.getElementById !== Ct && ut) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : [];
                  }
                }),
                (Xe.filter.ID = function(e) {
                  var t = e.replace(Yt, Gt);
                  return function(e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (Xe.find.TAG = Ge.getElementsByTagName
                  ? function(e, t) {
                      if (typeof t.getElementsByTagName !== Ct)
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
                (Xe.find.CLASS =
                  Ge.getElementsByClassName &&
                  function(e, t) {
                    if (ut) return t.getElementsByClassName(e);
                  }),
                (ct = []),
                (st = []),
                (Ge.disconnectedMatch = !0),
                (st = st.length && new RegExp(st.join("|"))),
                (ct = ct.length && new RegExp(ct.join("|"))),
                (t = Ht.test(at.compareDocumentPosition)),
                (ft =
                  t || Ht.test(at.contains)
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
                (yt = t
                  ? function(e, t) {
                      if (e === t) return (rt = !0), 0;
                      var r =
                        !e.compareDocumentPosition - !t.compareDocumentPosition;
                      return (
                        r ||
                        ((r =
                          (e.ownerDocument || e) === (t.ownerDocument || t)
                            ? e.compareDocumentPosition(t)
                            : 1),
                        1 & r ||
                        (!Ge.sortDetached && t.compareDocumentPosition(e) === r)
                          ? e === n || (e.ownerDocument === mt && ft(mt, e))
                            ? -1
                            : t === n || (t.ownerDocument === mt && ft(mt, t))
                              ? 1
                              : nt
                                ? _t.call(nt, e) - _t.call(nt, t)
                                : 0
                          : 4 & r
                            ? -1
                            : 1)
                      );
                    }
                  : function(e, t) {
                      if (e === t) return (rt = !0), 0;
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
                                : nt
                                  ? _t.call(nt, e) - _t.call(nt, t)
                                  : 0;
                      if (i === a) return Jt(e, t);
                      r = e;
                      while ((r = r.parentNode)) u.unshift(r);
                      r = t;
                      while ((r = r.parentNode)) s.unshift(r);
                      while (u[o] === s[o]) o++;
                      return o
                        ? Jt(u[o], s[o])
                        : u[o] === mt
                          ? -1
                          : s[o] === mt
                            ? 1
                            : 0;
                    }),
                n)
              : it;
          }),
          (Xt.matches = function(e, t) {
            return Xt(e, null, null, t);
          }),
          (Xt.matchesSelector = function(e, t) {
            if (
              ((e.ownerDocument || e) !== it && ot(e),
              (t = t.replace(Mt, "='$1']")),
              Ge.matchesSelector &&
                ut &&
                (!ct || !ct.test(t)) &&
                (!st || !st.test(t)))
            )
              try {
                var n = lt.call(e, t);
                if (
                  n ||
                  Ge.disconnectedMatch ||
                  (e.document && 11 !== e.document.nodeType)
                )
                  return n;
              } catch (nP) {}
            return Xt(t, it, null, [e]).length > 0;
          }),
          (Xt.contains = function(e, t) {
            return (e.ownerDocument || e) !== it && ot(e), ft(e, t);
          }),
          (Xt.attr = function(e, t) {
            (e.ownerDocument || e) !== it && ot(e);
            var n = Xe.attrHandle[t.toLowerCase()],
              r =
                n && xt.call(Xe.attrHandle, t.toLowerCase())
                  ? n(e, t, !ut)
                  : void 0;
            return void 0 !== r
              ? r
              : Ge.attributes || !ut
                ? e.getAttribute(t)
                : (r = e.getAttributeNode(t)) && r.specified
                  ? r.value
                  : null;
          }),
          (Xt.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
          }),
          (Xt.uniqueSort = function(e) {
            var t,
              n = [],
              r = 0,
              o = 0;
            if (
              ((rt = !Ge.detectDuplicates),
              (nt = !Ge.sortStable && e.slice(0)),
              e.sort(yt),
              rt)
            ) {
              while ((t = e[o++])) t === e[o] && (r = n.push(o));
              while (r--) e.splice(n[r], 1);
            }
            return (nt = null), e;
          }),
          (Ze = Xt.getText = function(e) {
            var t,
              n = "",
              r = 0,
              o = e.nodeType;
            if (o) {
              if (1 === o || 9 === o || 11 === o) {
                if ("string" === typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += Ze(e);
              } else if (3 === o || 4 === o) return e.nodeValue;
            } else while ((t = e[r++])) n += Ze(t);
            return n;
          }),
          (Xe = Xt.selectors = {
            cacheLength: 50,
            createPseudo: Kt,
            match: jt,
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
                  (e[1] = e[1].replace(Yt, Gt)),
                  (e[3] = (e[3] || e[4] || e[5] || "").replace(Yt, Gt)),
                  "~=" === e[2] && (e[3] = " " + e[3] + " "),
                  e.slice(0, 4)
                );
              },
              CHILD: function(e) {
                return (
                  (e[1] = e[1].toLowerCase()),
                  "nth" === e[1].slice(0, 3)
                    ? (e[3] || Xt.error(e[0]),
                      (e[4] = +(e[4]
                        ? e[5] + (e[6] || 1)
                        : 2 * ("even" === e[3] || "odd" === e[3]))),
                      (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                    : e[3] && Xt.error(e[0]),
                  e
                );
              },
              PSEUDO: function(e) {
                var t,
                  n = !e[6] && e[2];
                return jt.CHILD.test(e[0])
                  ? null
                  : (e[3]
                      ? (e[2] = e[4] || e[5] || "")
                      : n &&
                        Ft.test(n) &&
                        (t = Je(n, !0)) &&
                        (t = n.indexOf(")", n.length - t) - n.length) &&
                        ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                    e.slice(0, 3));
              }
            },
            filter: {
              TAG: function(e) {
                var t = e.replace(Yt, Gt).toLowerCase();
                return "*" === e
                  ? function() {
                      return !0;
                    }
                  : function(e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
              },
              CLASS: function(e) {
                var t = ht[e + " "];
                return (
                  t ||
                  ((t = new RegExp("(^|" + Rt + ")" + e + "(" + Rt + "|$)")) &&
                    ht(e, function(e) {
                      return t.test(
                        ("string" === typeof e.className && e.className) ||
                          (typeof e.getAttribute !== Ct &&
                            e.getAttribute("class")) ||
                          ""
                      );
                    }))
                );
              },
              ATTR: function(e, t, n) {
                return function(r) {
                  var o = Xt.attr(r, e);
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
                          (l = h[dt] || (h[dt] = {})),
                            (c = l[e] || []),
                            (m = c[0] === pt && c[1]),
                            (d = c[0] === pt && c[2]),
                            (f = m && h.childNodes[m]);
                          while (
                            (f = (++m && f && f[g]) || (d = m = 0) || p.pop())
                          )
                            if (1 === f.nodeType && ++d && f === t) {
                              l[e] = [pt, m, d];
                              break;
                            }
                        } else if (
                          b &&
                          (c = (t[dt] || (t[dt] = {}))[e]) &&
                          c[0] === pt
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
                              (b && ((f[dt] || (f[dt] = {}))[e] = [pt, d]),
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
                    Xe.pseudos[e] ||
                    Xe.setFilters[e.toLowerCase()] ||
                    Xt.error("unsupported pseudo: " + e);
                return r[dt]
                  ? r(t)
                  : r.length > 1
                    ? ((n = [e, e, "", t]),
                      Xe.setFilters.hasOwnProperty(e.toLowerCase())
                        ? Kt(function(e, n) {
                            var o,
                              i = r(e, t),
                              a = i.length;
                            while (a--)
                              (o = _t.call(e, i[a])), (e[o] = !(n[o] = i[a]));
                          })
                        : function(e) {
                            return r(e, 0, n);
                          })
                    : r;
              }
            },
            pseudos: {
              not: Kt(function(e) {
                var t = [],
                  n = [],
                  r = Qe(e.replace(Pt, "$1"));
                return r[dt]
                  ? Kt(function(e, t, n, o) {
                      var i,
                        a = r(e, null, o, []),
                        u = e.length;
                      while (u--) (i = a[u]) && (e[u] = !(t[u] = i));
                    })
                  : function(e, o, i) {
                      return (t[0] = e), r(t, null, i, n), !n.pop();
                    };
              }),
              has: Kt(function(e) {
                return function(t) {
                  return Xt(e, t).length > 0;
                };
              }),
              contains: Kt(function(e) {
                return (
                  (e = e.replace(Yt, Gt)),
                  function(t) {
                    return (
                      (t.textContent || t.innerText || Ze(t)).indexOf(e) > -1
                    );
                  }
                );
              }),
              lang: Kt(function(e) {
                return (
                  Ut.test(e || "") || Xt.error("unsupported lang: " + e),
                  (e = e.replace(Yt, Gt).toLowerCase()),
                  function(t) {
                    var n;
                    do {
                      if (
                        (n = ut
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
                return e === at;
              },
              focus: function(e) {
                return (
                  e === it.activeElement &&
                  (!it.hasFocus || it.hasFocus()) &&
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
                return !Xe.pseudos.empty(e);
              },
              header: function(e) {
                return Vt.test(e.nodeName);
              },
              input: function(e) {
                return zt.test(e.nodeName);
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
              first: tn(function() {
                return [0];
              }),
              last: tn(function(e, t) {
                return [t - 1];
              }),
              eq: tn(function(e, t, n) {
                return [n < 0 ? n + t : n];
              }),
              even: tn(function(e, t) {
                for (var n = 0; n < t; n += 2) e.push(n);
                return e;
              }),
              odd: tn(function(e, t) {
                for (var n = 1; n < t; n += 2) e.push(n);
                return e;
              }),
              lt: tn(function(e, t, n) {
                for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
                return e;
              }),
              gt: tn(function(e, t, n) {
                for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                return e;
              })
            }
          }),
          (Xe.pseudos.nth = Xe.pseudos.eq),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            Xe.pseudos[Ye] = Qt(Ye);
          for (Ye in { submit: !0, reset: !0 }) Xe.pseudos[Ye] = en(Ye);
          function rn() {}
          function on(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
          }
          function an(e, t, n) {
            var r = t.dir,
              o = n && "parentNode" === r,
              i = gt++;
            return t.first
              ? function(t, n, i) {
                  while ((t = t[r]))
                    if (1 === t.nodeType || o) return e(t, n, i);
                }
              : function(t, n, a) {
                  var u,
                    s,
                    c = [pt, i];
                  if (a) {
                    while ((t = t[r]))
                      if ((1 === t.nodeType || o) && e(t, n, a)) return !0;
                  } else
                    while ((t = t[r]))
                      if (1 === t.nodeType || o) {
                        if (
                          ((s = t[dt] || (t[dt] = {})),
                          (u = s[r]) && u[0] === pt && u[1] === i)
                        )
                          return (c[2] = u[2]);
                        if (((s[r] = c), (c[2] = e(t, n, a)))) return !0;
                      }
                };
          }
          function un(e) {
            return e.length > 1
              ? function(t, n, r) {
                  var o = e.length;
                  while (o--) if (!e[o](t, n, r)) return !1;
                  return !0;
                }
              : e[0];
          }
          function sn(e, t, n) {
            for (var r = 0, o = t.length; r < o; r++) Xt(e, t[r], n);
            return n;
          }
          function cn(e, t, n, r, o) {
            for (var i, a = [], u = 0, s = e.length, c = null != t; u < s; u++)
              (i = e[u]) && ((n && !n(i, r, o)) || (a.push(i), c && t.push(u)));
            return a;
          }
          function ln(e, t, n, r, o, i) {
            return (
              r && !r[dt] && (r = ln(r)),
              o && !o[dt] && (o = ln(o, i)),
              Kt(function(i, a, u, s) {
                var c,
                  l,
                  f,
                  d = [],
                  m = [],
                  p = a.length,
                  g = i || sn(t || "*", u.nodeType ? [u] : u, []),
                  h = !e || (!i && t) ? g : cn(g, d, e, u, s),
                  v = n ? (o || (i ? e : p || r) ? [] : a) : h;
                if ((n && n(h, v, u, s), r)) {
                  (c = cn(v, m)), r(c, [], u, s), (l = c.length);
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
                        (c = o ? _t.call(i, f) : d[l]) > -1 &&
                        (i[c] = !(a[c] = f));
                  }
                } else (v = cn(v === a ? v.splice(p, v.length) : v)), o ? o(null, a, v, s) : kt.apply(a, v);
              })
            );
          }
          function fn(e) {
            for (
              var t,
                n,
                r,
                o = e.length,
                i = Xe.relative[e[0].type],
                a = i || Xe.relative[" "],
                u = i ? 1 : 0,
                s = an(
                  function(e) {
                    return e === t;
                  },
                  a,
                  !0
                ),
                c = an(
                  function(e) {
                    return _t.call(t, e) > -1;
                  },
                  a,
                  !0
                ),
                l = [
                  function(e, n, r) {
                    return (
                      (!i && (r || n !== tt)) ||
                      ((t = n).nodeType ? s(e, n, r) : c(e, n, r))
                    );
                  }
                ];
              u < o;
              u++
            )
              if ((n = Xe.relative[e[u].type])) l = [an(un(l), n)];
              else {
                if (
                  ((n = Xe.filter[e[u].type].apply(null, e[u].matches)), n[dt])
                ) {
                  for (r = ++u; r < o; r++) if (Xe.relative[e[r].type]) break;
                  return ln(
                    u > 1 && un(l),
                    u > 1 &&
                      on(
                        e
                          .slice(0, u - 1)
                          .concat({ value: " " === e[u - 2].type ? "*" : "" })
                      ).replace(Pt, "$1"),
                    n,
                    u < r && fn(e.slice(u, r)),
                    r < o && fn((e = e.slice(r))),
                    r < o && on(e)
                  );
                }
                l.push(n);
              }
            return un(l);
          }
          function dn(e, t) {
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
                  h = tt,
                  v = o || (r && Xe.find.TAG("*", s)),
                  b = (pt += null == h ? 1 : Math.random() || 0.1),
                  y = v.length;
                for (
                  s && (tt = i !== it && i);
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
                    s && (pt = b);
                  }
                  n && ((c = !f && c) && d--, o && p.push(c));
                }
                if (((d += m), n && m !== d)) {
                  l = 0;
                  while ((f = t[l++])) f(p, g, i, a);
                  if (o) {
                    if (d > 0) while (m--) p[m] || g[m] || (g[m] = St.call(u));
                    g = cn(g);
                  }
                  kt.apply(u, g),
                    s &&
                      !o &&
                      g.length > 0 &&
                      d + t.length > 1 &&
                      Xt.uniqueSort(u);
                }
                return s && ((pt = b), (tt = h)), p;
              };
            return n ? Kt(o) : o;
          }
          (rn.prototype = Xe.filters = Xe.pseudos),
            (Xe.setFilters = new rn()),
            (Je = Xt.tokenize = function(e, t) {
              var n,
                r,
                o,
                i,
                a,
                u,
                s,
                c = vt[e + " "];
              if (c) return t ? 0 : c.slice(0);
              (a = e), (u = []), (s = Xe.preFilter);
              while (a) {
                for (i in ((n && !(r = It.exec(a))) ||
                  (r && (a = a.slice(r[0].length) || a), u.push((o = []))),
                (n = !1),
                (r = Lt.exec(a)) &&
                  ((n = r.shift()),
                  o.push({ value: n, type: r[0].replace(Pt, " ") }),
                  (a = a.slice(n.length))),
                Xe.filter))
                  !(r = jt[i].exec(a)) ||
                    (s[i] && !(r = s[i](r))) ||
                    ((n = r.shift()),
                    o.push({ value: n, type: i, matches: r }),
                    (a = a.slice(n.length)));
                if (!n) break;
              }
              return t ? a.length : a ? Xt.error(e) : vt(e, u).slice(0);
            }),
            (Qe = Xt.compile = function(e, t) {
              var n,
                r = [],
                o = [],
                i = bt[e + " "];
              if (!i) {
                t || (t = Je(e)), (n = t.length);
                while (n--) (i = fn(t[n])), i[dt] ? r.push(i) : o.push(i);
                (i = bt(e, dn(o, r))), (i.selector = e);
              }
              return i;
            }),
            (et = Xt.select = function(e, t, n, r) {
              var o,
                i,
                a,
                u,
                s,
                c = "function" === typeof e && e,
                l = !r && Je((e = c.selector || e));
              if (((n = n || []), 1 === l.length)) {
                if (
                  ((i = l[0] = l[0].slice(0)),
                  i.length > 2 &&
                    "ID" === (a = i[0]).type &&
                    Ge.getById &&
                    9 === t.nodeType &&
                    ut &&
                    Xe.relative[i[1].type])
                ) {
                  if (
                    ((t = (Xe.find.ID(a.matches[0].replace(Yt, Gt), t) ||
                      [])[0]),
                    !t)
                  )
                    return n;
                  c && (t = t.parentNode),
                    (e = e.slice(i.shift().value.length));
                }
                o = jt.needsContext.test(e) ? 0 : i.length;
                while (o--) {
                  if (((a = i[o]), Xe.relative[(u = a.type)])) break;
                  if (
                    (s = Xe.find[u]) &&
                    (r = s(
                      a.matches[0].replace(Yt, Gt),
                      ($t.test(i[0].type) && nn(t.parentNode)) || t
                    ))
                  ) {
                    if ((i.splice(o, 1), (e = r.length && on(i)), !e))
                      return kt.apply(n, r), n;
                    break;
                  }
                }
              }
              return (
                (c || Qe(e, l))(
                  r,
                  t,
                  !ut,
                  n,
                  ($t.test(e) && nn(t.parentNode)) || t
                ),
                n
              );
            }),
            (Ge.sortStable =
              dt
                .split("")
                .sort(yt)
                .join("") === dt),
            (Ge.detectDuplicates = !!rt),
            ot(),
            (Ge.sortDetached = !0);
          var mn = Array.isArray,
            pn = function(e) {
              var t,
                n,
                r = e;
              if (!mn(e))
                for (r = [], t = 0, n = e.length; t < n; t++) r[t] = e[t];
              return r;
            },
            gn = function(e, t, n) {
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
            hn = function(e, t) {
              var n = [];
              return (
                gn(e, function(r, o) {
                  n.push(t(r, o, e));
                }),
                n
              );
            },
            vn = function(e, t) {
              var n = [];
              return (
                gn(e, function(r, o) {
                  (t && !t(r, o, e)) || n.push(r);
                }),
                n
              );
            },
            bn = function(e, t) {
              var n, r;
              if (e)
                for (n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
              return -1;
            },
            yn = function(e, t, n, r) {
              var o = 0;
              for (arguments.length < 3 && (n = e[0]); o < e.length; o++)
                n = t.call(r, n, e[o], o);
              return n;
            },
            Cn = function(e, t, n) {
              var r, o;
              for (r = 0, o = e.length; r < o; r++)
                if (t.call(n, e[r], r, e)) return r;
              return -1;
            },
            wn = function(e, t, n) {
              var r = Cn(e, t, n);
              if (-1 !== r) return e[r];
            },
            xn = function(e) {
              return e[e.length - 1];
            },
            En = {
              isArray: mn,
              toArray: pn,
              each: gn,
              map: hn,
              filter: vn,
              indexOf: bn,
              reduce: yn,
              findIndex: Cn,
              find: wn,
              last: xn
            },
            Sn = /^\s*|\s*$/g,
            Nn = function(e) {
              return null === e || void 0 === e ? "" : ("" + e).replace(Sn, "");
            },
            kn = function(e, t) {
              return t
                ? !("array" !== t || !En.isArray(e)) || typeof e === t
                : void 0 !== e;
            },
            Tn = function(e, t, n) {
              var r;
              (e = e || []),
                (t = t || ","),
                "string" === typeof e && (e = e.split(t)),
                (n = n || {}),
                (r = e.length);
              while (r--) n[e[r]] = {};
              return n;
            },
            _n = function(e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            },
            An = function(e, t, n) {
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
            Rn = function(e, t) {
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
                  En.each(e, function(e, o) {
                    if (!1 === t.call(r, e, o, n)) return !1;
                    Bn(e, t, n, r);
                  }));
            },
            Dn = function(e, t) {
              var n, r;
              for (t = t || window, e = e.split("."), n = 0; n < e.length; n++)
                (r = e[n]), t[r] || (t[r] = {}), (t = t[r]);
              return t;
            },
            On = function(e, t) {
              var n, r;
              for (
                t = t || window, e = e.split("."), n = 0, r = e.length;
                n < r;
                n++
              )
                if (((t = t[e[n]]), !t)) break;
              return t;
            },
            Pn = function(e, t) {
              return !e || kn(e, "array") ? e : En.map(e.split(t || ","), Nn);
            },
            In = function(e) {
              var t = Ne.cacheSuffix;
              return t && (e += (-1 === e.indexOf("?") ? "?" : "&") + t), e;
            },
            Ln = {
              trim: Nn,
              isArray: En.isArray,
              is: kn,
              toArray: En.toArray,
              makeMap: Tn,
              each: En.each,
              map: En.map,
              grep: En.filter,
              inArray: En.indexOf,
              hasOwn: _n,
              extend: Rn,
              create: An,
              walk: Bn,
              createNS: Dn,
              resolve: On,
              explode: Pn,
              _addCacheSuffix: In
            },
            Mn = document,
            Fn = Array.prototype.push,
            Un = Array.prototype.slice,
            jn = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
            zn = We.Event,
            Vn = Ln.makeMap("children,contents,next,prev"),
            Hn = function(e) {
              return "undefined" !== typeof e;
            },
            qn = function(e) {
              return "string" === typeof e;
            },
            $n = function(e) {
              return e && e === e.window;
            },
            Wn = function(e, t) {
              var n, r, o;
              (t = t || Mn),
                (o = t.createElement("div")),
                (n = t.createDocumentFragment()),
                (o.innerHTML = e);
              while ((r = o.firstChild)) n.appendChild(r);
              return n;
            },
            Yn = function(e, t, n, r) {
              var o;
              if (qn(t)) t = Wn(t, sr(e[0]));
              else if (t.length && !t.nodeType) {
                if (((t = nr.makeArray(t)), r))
                  for (o = t.length - 1; o >= 0; o--) Yn(e, t[o], n, r);
                else for (o = 0; o < t.length; o++) Yn(e, t[o], n, r);
                return e;
              }
              if (t.nodeType) {
                o = e.length;
                while (o--) n.call(e[o], t);
              }
              return e;
            },
            Gn = function(e, t) {
              return (
                e &&
                t &&
                -1 !== (" " + e.className + " ").indexOf(" " + t + " ")
              );
            },
            Xn = function(e, t, n) {
              var r, o;
              return (
                (t = nr(t)[0]),
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
            Zn = Ln.makeMap(
              "fillOpacity fontWeight lineHeight opacity orphans widows zIndex zoom",
              " "
            ),
            Kn = Ln.makeMap(
              "checked compact declare defer disabled ismap multiple nohref noshade nowrap readonly selected",
              " "
            ),
            Jn = { for: "htmlFor", class: "className", readonly: "readOnly" },
            Qn = { float: "cssFloat" },
            er = {},
            tr = {},
            nr = function(e, t) {
              return new nr.fn.init(e, t);
            },
            rr = function(e, t) {
              var n;
              if (t.indexOf) return t.indexOf(e);
              n = t.length;
              while (n--) if (t[n] === e) return n;
              return -1;
            },
            or = /^\s*|\s*$/g,
            ir = function(e) {
              return null === e || void 0 === e ? "" : ("" + e).replace(or, "");
            },
            ar = function(e, t) {
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
            ur = function(e, t) {
              var n = [];
              return (
                ar(e, function(e, r) {
                  t(r, e) && n.push(r);
                }),
                n
              );
            },
            sr = function(e) {
              return e ? (9 === e.nodeType ? e : e.ownerDocument) : Mn;
            };
          (nr.fn = nr.prototype = {
            constructor: nr,
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
                if (t) return nr(e).attr(t);
                o.context = t = document;
              }
              if (qn(e)) {
                if (
                  ((o.selector = e),
                  (n =
                    "<" === e.charAt(0) &&
                    ">" === e.charAt(e.length - 1) &&
                    e.length >= 3
                      ? [null, e, null]
                      : jn.exec(e)),
                  !n)
                )
                  return nr(t).find(e);
                if (n[1]) {
                  r = Wn(e, sr(t)).firstChild;
                  while (r) Fn.call(o, r), (r = r.nextSibling);
                } else {
                  if (((r = sr(t).getElementById(n[2])), !r)) return o;
                  if (r.id !== n[2]) return o.find(e);
                  (o.length = 1), (o[0] = r);
                }
              } else this.add(e, !1);
              return o;
            },
            toArray: function() {
              return Ln.toArray(this);
            },
            add: function(e, t) {
              var n,
                r,
                o = this;
              if (qn(e)) return o.add(nr(e));
              if (!1 !== t)
                for (
                  n = nr.unique(o.toArray().concat(nr.makeArray(e))),
                    o.length = n.length,
                    r = 0;
                  r < n.length;
                  r++
                )
                  o[r] = n[r];
              else Fn.apply(o, nr.makeArray(e));
              return o;
            },
            attr: function(e, t) {
              var n,
                r = this;
              if ("object" === typeof e)
                ar(e, function(e, t) {
                  r.attr(e, t);
                });
              else {
                if (!Hn(t)) {
                  if (r[0] && 1 === r[0].nodeType) {
                    if (((n = er[e]), n && n.get)) return n.get(r[0], e);
                    if (Kn[e]) return r.prop(e) ? e : void 0;
                    (t = r[0].getAttribute(e, 2)), null === t && (t = void 0);
                  }
                  return t;
                }
                this.each(function() {
                  var n;
                  if (1 === this.nodeType) {
                    if (((n = er[e]), n && n.set)) return void n.set(this, t);
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
              if (((e = Jn[e] || e), "object" === typeof e))
                ar(e, function(e, t) {
                  n.prop(e, t);
                });
              else {
                if (!Hn(t))
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
                ar(e, function(e, t) {
                  o.css(e, t);
                });
              else if (Hn(t))
                (e = i(e)),
                  "number" !== typeof t || Zn[e] || (t = t.toString() + "px"),
                  o.each(function() {
                    var n = this.style;
                    if (((r = tr[e]), r && r.set)) r.set(this, t);
                    else {
                      try {
                        this.style[Qn[e] || e] = t;
                      } catch (o) {}
                      (null !== t && "" !== t) ||
                        (n.removeProperty
                          ? n.removeProperty(a(e))
                          : n.removeAttribute(e));
                    }
                  });
              else {
                if (((n = o[0]), (r = tr[e]), r && r.get)) return r.get(n);
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
                  zn.clean(e),
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
              if (Hn(e)) {
                t = n.length;
                try {
                  while (t--) n[t].innerHTML = e;
                } catch (r) {
                  nr(n[t])
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
              if (Hn(e)) {
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
              return Yn(this, arguments, function(e) {
                (1 === this.nodeType ||
                  (this.host && 1 === this.host.nodeType)) &&
                  this.appendChild(e);
              });
            },
            prepend: function() {
              return Yn(
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
                ? Yn(e, arguments, function(e) {
                    this.parentNode.insertBefore(e, this);
                  })
                : e;
            },
            after: function() {
              var e = this;
              return e[0] && e[0].parentNode
                ? Yn(
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
              return nr(e).append(this), this;
            },
            prependTo: function(e) {
              return nr(e).prepend(this), this;
            },
            replaceWith: function(e) {
              return this.before(e).remove();
            },
            wrap: function(e) {
              return Xn(this, e);
            },
            wrapAll: function(e) {
              return Xn(this, e, !0);
            },
            wrapInner: function(e) {
              return (
                this.each(function() {
                  nr(this)
                    .contents()
                    .wrapAll(e);
                }),
                this
              );
            },
            unwrap: function() {
              return this.parent().each(function() {
                nr(this).replaceWith(this.childNodes);
              });
            },
            clone: function() {
              var e = [];
              return (
                this.each(function() {
                  e.push(this.cloneNode(!0));
                }),
                nr(e)
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
                    ? ar(e.split(" "), function() {
                        n.toggleClass(this, t);
                      })
                    : n.each(function(n, r) {
                        var o, i;
                        (i = Gn(r, e)),
                          i !== t &&
                            ((o = r.className),
                            i
                              ? (r.className = ir(
                                  (" " + o + " ").replace(" " + e + " ", " ")
                                ))
                              : (r.className += o ? " " + e : e));
                      }),
                  n);
            },
            hasClass: function(e) {
              return Gn(this[0], e);
            },
            each: function(e) {
              return ar(this, e);
            },
            on: function(e, t) {
              return this.each(function() {
                zn.bind(this, e, t);
              });
            },
            off: function(e, t) {
              return this.each(function() {
                zn.unbind(this, e, t);
              });
            },
            trigger: function(e) {
              return this.each(function() {
                "object" === typeof e
                  ? zn.fire(this, e.type, e)
                  : zn.fire(this, e);
              });
            },
            show: function() {
              return this.css("display", "");
            },
            hide: function() {
              return this.css("display", "none");
            },
            slice: function() {
              return new nr(Un.apply(this, arguments));
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
              for (t = 0, n = this.length; t < n; t++) nr.find(e, this[t], r);
              return nr(r);
            },
            filter: function(e) {
              return nr(
                "function" === typeof e
                  ? ur(this.toArray(), function(t, n) {
                      return e(n, t);
                    })
                  : nr.filter(e, this.toArray())
              );
            },
            closest: function(e) {
              var t = [];
              return (
                e instanceof nr && (e = e[0]),
                this.each(function(n, r) {
                  while (r) {
                    if ("string" === typeof e && nr(r).is(e)) {
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
                nr(t)
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
            push: Fn,
            sort: [].sort,
            splice: [].splice
          }),
            Ln.extend(nr, {
              extend: Ln.extend,
              makeArray: function(e) {
                return $n(e) || e.nodeType ? [e] : Ln.toArray(e);
              },
              inArray: rr,
              isArray: Ln.isArray,
              each: ar,
              trim: ir,
              grep: ur,
              find: Xt,
              expr: Xt.selectors,
              unique: Xt.uniqueSort,
              text: Xt.getText,
              contains: Xt.contains,
              filter: function(e, t, n) {
                var r = t.length;
                n && (e = ":not(" + e + ")");
                while (r--) 1 !== t[r].nodeType && t.splice(r, 1);
                return (
                  (t =
                    1 === t.length
                      ? nr.find.matchesSelector(t[0], e)
                        ? [t[0]]
                        : []
                      : nr.find.matches(e, t)),
                  t
                );
              }
            });
          var cr = function(e, t, n) {
              var r = [],
                o = e[t];
              "string" !== typeof n && n instanceof nr && (n = n[0]);
              while (o && 9 !== o.nodeType) {
                if (void 0 !== n) {
                  if (o === n) break;
                  if ("string" === typeof n && nr(o).is(n)) break;
                }
                1 === o.nodeType && r.push(o), (o = o[t]);
              }
              return r;
            },
            lr = function(e, t, n, r) {
              var o = [];
              for (r instanceof nr && (r = r[0]); e; e = e[t])
                if (!n || e.nodeType === n) {
                  if (void 0 !== r) {
                    if (e === r) break;
                    if ("string" === typeof r && nr(e).is(r)) break;
                  }
                  o.push(e);
                }
              return o;
            },
            fr = function(e, t, n) {
              for (e = e[t]; e; e = e[t]) if (e.nodeType === n) return e;
              return null;
            };
          ar(
            {
              parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null;
              },
              parents: function(e) {
                return cr(e, "parentNode");
              },
              next: function(e) {
                return fr(e, "nextSibling", 1);
              },
              prev: function(e) {
                return fr(e, "previousSibling", 1);
              },
              children: function(e) {
                return lr(e.firstChild, "nextSibling", 1);
              },
              contents: function(e) {
                return Ln.toArray(
                  ("iframe" === e.nodeName
                    ? e.contentDocument || e.contentWindow.document
                    : e
                  ).childNodes
                );
              }
            },
            function(e, t) {
              nr.fn[e] = function(n) {
                var r = this,
                  o = [];
                return (
                  r.each(function() {
                    var e = t.call(o, this, n, o);
                    e && (nr.isArray(e) ? o.push.apply(o, e) : o.push(e));
                  }),
                  this.length > 1 &&
                    (Vn[e] || (o = nr.unique(o)),
                    0 === e.indexOf("parents") && (o = o.reverse())),
                  (o = nr(o)),
                  n ? o.filter(n) : o
                );
              };
            }
          ),
            ar(
              {
                parentsUntil: function(e, t) {
                  return cr(e, "parentNode", t);
                },
                nextUntil: function(e, t) {
                  return lr(e, "nextSibling", 1, t).slice(1);
                },
                prevUntil: function(e, t) {
                  return lr(e, "previousSibling", 1, t).slice(1);
                }
              },
              function(e, t) {
                nr.fn[e] = function(n, r) {
                  var o = this,
                    i = [];
                  return (
                    o.each(function() {
                      var e = t.call(i, this, n, i);
                      e && (nr.isArray(e) ? i.push.apply(i, e) : i.push(e));
                    }),
                    this.length > 1 &&
                      ((i = nr.unique(i)),
                      (0 !== e.indexOf("parents") && "prevUntil" !== e) ||
                        (i = i.reverse())),
                    (i = nr(i)),
                    r ? i.filter(r) : i
                  );
                };
              }
            ),
            (nr.fn.is = function(e) {
              return !!e && this.filter(e).length > 0;
            }),
            (nr.fn.init.prototype = nr.fn),
            (nr.overrideDefaults = function(e) {
              var t,
                n = function(r, o) {
                  return (
                    (t = t || e()),
                    0 === arguments.length && (r = t.element),
                    o || (o = t.context),
                    new n.fn.init(r, o)
                  );
                };
              return nr.extend(n, this), n;
            });
          var dr = function(e, t, n) {
            ar(n, function(n, r) {
              (e[n] = e[n] || {}), (e[n][t] = r);
            });
          };
          Ne.ie &&
            Ne.ie < 8 &&
            (dr(er, "get", {
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
            dr(er, "set", {
              class: function(e, t) {
                e.className = t;
              },
              style: function(e, t) {
                e.style.cssText = t;
              }
            })),
            Ne.ie &&
              Ne.ie < 9 &&
              ((Qn.float = "styleFloat"),
              dr(tr, "set", {
                opacity: function(e, t) {
                  var n = e.style;
                  null === t || "" === t
                    ? n.removeAttribute("filter")
                    : ((n.zoom = 1),
                      (n.filter = "alpha(opacity=" + 100 * t + ")"));
                }
              })),
            (nr.attrHooks = er),
            (nr.cssHooks = tr);
          var mr = function(e) {
              var t,
                n = !1;
              return function() {
                for (var r = [], o = 0; o < arguments.length; o++)
                  r[o] = arguments[o];
                return n || ((n = !0), (t = e.apply(null, r))), t;
              };
            },
            pr = function(e, t) {
              for (var n = 0; n < e.length; n++) {
                var r = e[n];
                if (r.test(t)) return r;
              }
            },
            gr = function(e, t) {
              var n = pr(e, t);
              if (!n) return { major: 0, minor: 0 };
              var r = function(e) {
                return Number(t.replace(n, "$" + e));
              };
              return br(r(1), r(2));
            },
            hr = function(e, t) {
              var n = String(t).toLowerCase();
              return 0 === e.length ? vr() : gr(e, n);
            },
            vr = function() {
              return br(0, 0);
            },
            br = function(e, t) {
              return { major: e, minor: t };
            },
            yr = { nu: br, detect: hr, unknown: vr },
            Cr = "Edge",
            wr = "Chrome",
            xr = "IE",
            Er = "Opera",
            Sr = "Firefox",
            Nr = "Safari",
            kr = function(e, t) {
              return function() {
                return t === e;
              };
            },
            Tr = function() {
              return _r({ current: void 0, version: yr.unknown() });
            },
            _r = function(e) {
              var t = e.current,
                n = e.version;
              return {
                current: t,
                version: n,
                isEdge: kr(Cr, t),
                isChrome: kr(wr, t),
                isIE: kr(xr, t),
                isOpera: kr(Er, t),
                isFirefox: kr(Sr, t),
                isSafari: kr(Nr, t)
              };
            },
            Ar = {
              unknown: Tr,
              nu: _r,
              edge: h(Cr),
              chrome: h(wr),
              ie: h(xr),
              opera: h(Er),
              firefox: h(Sr),
              safari: h(Nr)
            },
            Rr = "Windows",
            Br = "iOS",
            Dr = "Android",
            Or = "Linux",
            Pr = "OSX",
            Ir = "Solaris",
            Lr = "FreeBSD",
            Mr = function(e, t) {
              return function() {
                return t === e;
              };
            },
            Fr = function() {
              return Ur({ current: void 0, version: yr.unknown() });
            },
            Ur = function(e) {
              var t = e.current,
                n = e.version;
              return {
                current: t,
                version: n,
                isWindows: Mr(Rr, t),
                isiOS: Mr(Br, t),
                isAndroid: Mr(Dr, t),
                isOSX: Mr(Pr, t),
                isLinux: Mr(Or, t),
                isSolaris: Mr(Ir, t),
                isFreeBSD: Mr(Lr, t)
              };
            },
            jr = {
              unknown: Fr,
              nu: Ur,
              windows: h(Rr),
              ios: h(Br),
              android: h(Dr),
              linux: h(Or),
              osx: h(Pr),
              solaris: h(Ir),
              freebsd: h(Lr)
            },
            zr = function(e, t, n) {
              var r = e.isiOS() && !0 === /ipad/i.test(n),
                o = e.isiOS() && !r,
                i = e.isAndroid() && 3 === e.version.major,
                a = e.isAndroid() && 4 === e.version.major,
                u = r || i || (a && !0 === /mobile/i.test(n)),
                s = e.isiOS() || e.isAndroid(),
                c = s && !u,
                l = t.isSafari() && e.isiOS() && !1 === /safari/i.test(n);
              return {
                isiPad: h(r),
                isiPhone: h(o),
                isTablet: h(u),
                isPhone: h(c),
                isTouch: h(s),
                isAndroid: e.isAndroid,
                isiOS: e.isiOS,
                isWebView: h(l)
              };
            },
            Vr = function(e, t) {
              var n = String(t).toLowerCase();
              return X(e, function(e) {
                return e.search(n);
              });
            },
            Hr = function(e, t) {
              return Vr(e, t).map(function(e) {
                var n = yr.detect(e.versionRegexes, t);
                return { current: e.name, version: n };
              });
            },
            qr = function(e, t) {
              return Vr(e, t).map(function(e) {
                var n = yr.detect(e.versionRegexes, t);
                return { current: e.name, version: n };
              });
            },
            $r = { detectBrowser: Hr, detectOs: qr },
            Wr = function(e, t) {
              return -1 !== e.indexOf(t);
            },
            Yr = function(e) {
              return e.replace(/^\s+|\s+$/g, "");
            },
            Gr = function(e) {
              return e.replace(/^\s+/g, "");
            },
            Xr = function(e) {
              return e.replace(/\s+$/g, "");
            },
            Zr = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
            Kr = function(e) {
              return function(t) {
                return Wr(t, e);
              };
            },
            Jr = [
              {
                name: "Edge",
                versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
                search: function(e) {
                  var t =
                    Wr(e, "edge/") &&
                    Wr(e, "chrome") &&
                    Wr(e, "safari") &&
                    Wr(e, "applewebkit");
                  return t;
                }
              },
              {
                name: "Chrome",
                versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/, Zr],
                search: function(e) {
                  return Wr(e, "chrome") && !Wr(e, "chromeframe");
                }
              },
              {
                name: "IE",
                versionRegexes: [
                  /.*?msie\ ?([0-9]+)\.([0-9]+).*/,
                  /.*?rv:([0-9]+)\.([0-9]+).*/
                ],
                search: function(e) {
                  return Wr(e, "msie") || Wr(e, "trident");
                }
              },
              {
                name: "Opera",
                versionRegexes: [Zr, /.*?opera\/([0-9]+)\.([0-9]+).*/],
                search: Kr("opera")
              },
              {
                name: "Firefox",
                versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
                search: Kr("firefox")
              },
              {
                name: "Safari",
                versionRegexes: [Zr, /.*?cpu os ([0-9]+)_([0-9]+).*/],
                search: function(e) {
                  return (
                    (Wr(e, "safari") || Wr(e, "mobile/")) &&
                    Wr(e, "applewebkit")
                  );
                }
              }
            ],
            Qr = [
              {
                name: "Windows",
                search: Kr("win"),
                versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
              },
              {
                name: "iOS",
                search: function(e) {
                  return Wr(e, "iphone") || Wr(e, "ipad");
                },
                versionRegexes: [
                  /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
                  /.*cpu os ([0-9]+)_([0-9]+).*/,
                  /.*cpu iphone os ([0-9]+)_([0-9]+).*/
                ]
              },
              {
                name: "Android",
                search: Kr("android"),
                versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]
              },
              {
                name: "OSX",
                search: Kr("os x"),
                versionRegexes: [/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]
              },
              { name: "Linux", search: Kr("linux"), versionRegexes: [] },
              { name: "Solaris", search: Kr("sunos"), versionRegexes: [] },
              { name: "FreeBSD", search: Kr("freebsd"), versionRegexes: [] }
            ],
            eo = { browsers: h(Jr), oses: h(Qr) },
            to = function(e) {
              var t = eo.browsers(),
                n = eo.oses(),
                r = $r.detectBrowser(t, e).fold(Ar.unknown, Ar.nu),
                o = $r.detectOs(n, e).fold(jr.unknown, jr.nu),
                i = zr(o, r, e);
              return { browser: r, os: o, deviceType: i };
            },
            no = { detect: to },
            ro = mr(function() {
              var e = navigator.userAgent;
              return no.detect(e);
            }),
            oo = { detect: ro },
            io = function(e, t) {
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
              return so(r.childNodes[0]);
            },
            ao = function(e, t) {
              var n = t || document,
                r = n.createElement(e);
              return so(r);
            },
            uo = function(e, t) {
              var n = t || document,
                r = n.createTextNode(e);
              return so(r);
            },
            so = function(e) {
              if (null === e || void 0 === e)
                throw new Error("Node cannot be null or undefined");
              return { dom: h(e) };
            },
            co = function(e, t, n) {
              var r = e.dom();
              return _.from(r.elementFromPoint(t, n)).map(so);
            },
            lo = {
              fromHtml: io,
              fromTag: ao,
              fromText: uo,
              fromDom: so,
              fromPoint: co
            },
            fo = (Node.ATTRIBUTE_NODE,
            Node.CDATA_SECTION_NODE,
            Node.COMMENT_NODE,
            Node.DOCUMENT_NODE),
            mo = (Node.DOCUMENT_TYPE_NODE,
            Node.DOCUMENT_FRAGMENT_NODE,
            Node.ELEMENT_NODE),
            po = Node.TEXT_NODE,
            go = (Node.PROCESSING_INSTRUCTION_NODE,
            Node.ENTITY_REFERENCE_NODE,
            Node.ENTITY_NODE,
            Node.NOTATION_NODE,
            function(e) {
              var t = e.dom().nodeName;
              return t.toLowerCase();
            }),
            ho = function(e) {
              return e.dom().nodeType;
            },
            vo = function(e) {
              return function(t) {
                return ho(t) === e;
              };
            },
            bo = vo(mo),
            yo = vo(po),
            Co = Object.keys,
            wo = Object.hasOwnProperty,
            xo = function(e, t) {
              for (var n = Co(e), r = 0, o = n.length; r < o; r++) {
                var i = n[r],
                  a = e[i];
                t(a, i, e);
              }
            },
            Eo = function(e, t) {
              return So(e, function(e, n, r) {
                return { k: n, v: t(e, n, r) };
              });
            },
            So = function(e, t) {
              var n = {};
              return (
                xo(e, function(r, o) {
                  var i = t(r, o, e);
                  n[i.k] = i.v;
                }),
                n
              );
            },
            No = function(e, t) {
              var n = {},
                r = {};
              return (
                xo(e, function(e, o) {
                  var i = t(e, o) ? n : r;
                  i[o] = e;
                }),
                { t: n, f: r }
              );
            },
            ko = function(e, t) {
              return wo.call(e, t);
            },
            To = function(e, t, n) {
              if (!(B(n) || I(n) || M(n)))
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
            _o = function(e, t, n) {
              To(e.dom(), t, n);
            },
            Ao = function(e, t) {
              var n = e.dom();
              xo(t, function(e, t) {
                To(n, t, e);
              });
            },
            Ro = function(e, t) {
              var n = e.dom().getAttribute(t);
              return null === n ? void 0 : n;
            },
            Bo = function(e, t) {
              var n = e.dom();
              return !(!n || !n.hasAttribute) && n.hasAttribute(t);
            },
            Do = function(e, t) {
              e.dom().removeAttribute(t);
            },
            Oo = function(e) {
              var t = yo(e) ? e.dom().parentNode : e.dom();
              return (
                void 0 !== t && null !== t && t.ownerDocument.body.contains(t)
              );
            },
            Po = function(e) {
              return void 0 !== e.style;
            },
            Io = function(e, t, n) {
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
              Po(e) && e.style.setProperty(t, n);
            },
            Lo = function(e, t) {
              var n = e.dom();
              xo(t, function(e, t) {
                Io(n, t, e);
              });
            },
            Mo = function(e, t) {
              var n = e.dom(),
                r = window.getComputedStyle(n),
                o = r.getPropertyValue(t),
                i = "" !== o || Oo(e) ? o : Fo(n, t);
              return null === i ? void 0 : i;
            },
            Fo = function(e, t) {
              return Po(e) ? e.style.getPropertyValue(t) : "";
            },
            Uo = function(e, t) {
              var n = e.dom(),
                r = Fo(n, t);
              return _.from(r).filter(function(e) {
                return e.length > 0;
              });
            },
            jo = function() {
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
                var r = {};
                return (
                  H(e, function(e, n) {
                    r[e] = h(t[n]);
                  }),
                  r
                );
              };
            },
            zo = function(e, t) {
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
            Vo = { toArray: zo },
            Ho = function() {
              var e = ge.getOrDie("Node");
              return e;
            },
            qo = function(e, t, n) {
              return 0 !== (e.compareDocumentPosition(t) & n);
            },
            $o = function(e, t) {
              return qo(e, t, Ho().DOCUMENT_POSITION_PRECEDING);
            },
            Wo = function(e, t) {
              return qo(e, t, Ho().DOCUMENT_POSITION_CONTAINED_BY);
            },
            Yo = {
              documentPositionPreceding: $o,
              documentPositionContainedBy: Wo
            },
            Go = mo,
            Xo = fo,
            Zo = function(e, t) {
              var n = e.dom();
              if (n.nodeType !== Go) return !1;
              if (void 0 !== n.matches) return n.matches(t);
              if (void 0 !== n.msMatchesSelector) return n.msMatchesSelector(t);
              if (void 0 !== n.webkitMatchesSelector)
                return n.webkitMatchesSelector(t);
              if (void 0 !== n.mozMatchesSelector)
                return n.mozMatchesSelector(t);
              throw new Error("Browser lacks native selectors");
            },
            Ko = function(e) {
              return (
                (e.nodeType !== Go && e.nodeType !== Xo) ||
                0 === e.childElementCount
              );
            },
            Jo = function(e, t) {
              var n = void 0 === t ? document : t.dom();
              return Ko(n) ? [] : V(n.querySelectorAll(e), lo.fromDom);
            },
            Qo = function(e, t) {
              var n = void 0 === t ? document : t.dom();
              return Ko(n)
                ? _.none()
                : _.from(n.querySelector(e)).map(lo.fromDom);
            },
            ei = function(e, t) {
              return e.dom() === t.dom();
            },
            ti = function(e, t) {
              var n = e.dom(),
                r = t.dom();
              return n !== r && n.contains(r);
            },
            ni = function(e, t) {
              return Yo.documentPositionContainedBy(e.dom(), t.dom());
            },
            ri = oo.detect().browser,
            oi = ri.isIE() ? ni : ti,
            ii = function(e) {
              return lo.fromDom(e.dom().ownerDocument);
            },
            ai = function(e) {
              return lo.fromDom(e.dom().ownerDocument.documentElement);
            },
            ui = function(e) {
              var t = e.dom(),
                n = t.ownerDocument.defaultView;
              return lo.fromDom(n);
            },
            si = function(e) {
              var t = e.dom();
              return _.from(t.parentNode).map(lo.fromDom);
            },
            ci = function(e, t) {
              var n = L(t) ? t : h(!1),
                r = e.dom(),
                o = [];
              while (null !== r.parentNode && void 0 !== r.parentNode) {
                var i = r.parentNode,
                  a = lo.fromDom(i);
                if ((o.push(a), !0 === n(a))) break;
                r = i;
              }
              return o;
            },
            li = function(e) {
              var t = e.dom();
              return _.from(t.previousSibling).map(lo.fromDom);
            },
            fi = function(e) {
              var t = e.dom();
              return _.from(t.nextSibling).map(lo.fromDom);
            },
            di = function(e) {
              return re(Vo.toArray(e, li));
            },
            mi = function(e) {
              return Vo.toArray(e, fi);
            },
            pi = function(e) {
              var t = e.dom();
              return V(t.childNodes, lo.fromDom);
            },
            gi = function(e, t) {
              var n = e.dom().childNodes;
              return _.from(n[t]).map(lo.fromDom);
            },
            hi = function(e) {
              return gi(e, 0);
            },
            vi = function(e) {
              return gi(e, e.dom().childNodes.length - 1);
            },
            bi = function(e) {
              return e.dom().childNodes.length;
            },
            yi = (jo("element", "offset"), oo.detect().browser),
            Ci = function(e) {
              return X(e, bo);
            },
            wi = function(e) {
              return yi.isFirefox() && "table" === go(e)
                ? Ci(pi(e))
                    .filter(function(e) {
                      return "caption" === go(e);
                    })
                    .bind(function(e) {
                      return Ci(mi(e)).map(function(t) {
                        var n = t.dom().offsetTop,
                          r = e.dom().offsetTop,
                          o = e.dom().offsetHeight;
                        return n <= r ? -o : 0;
                      });
                    })
                    .getOr(0)
                : 0;
            },
            xi = function(e, t, n) {
              var r,
                o,
                i = 0,
                a = 0,
                u = e.ownerDocument;
              if (((n = n || e), t)) {
                if (
                  n === e &&
                  t.getBoundingClientRect &&
                  "static" === Mo(lo.fromDom(e), "position")
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
                a += wi(lo.fromDom(t));
              }
              return { x: i, y: a };
            },
            Ei = { getPos: xi },
            Si = function(e) {
              var t = _.none(),
                n = [],
                r = function(e) {
                  return Si(function(t) {
                    o(function(n) {
                      t(e(n));
                    });
                  });
                },
                o = function(e) {
                  a() ? s(e) : n.push(e);
                },
                i = function(e) {
                  (t = _.some(e)), u(n), (n = []);
                },
                a = function() {
                  return t.isSome();
                },
                u = function(e) {
                  H(e, s);
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
            Ni = function(e) {
              return Si(function(t) {
                t(e);
              });
            },
            ki = { nu: Si, pure: Ni },
            Ti = function(e) {
              return function() {
                for (var t = [], n = 0; n < arguments.length; n++)
                  t[n] = arguments[n];
                var r = this;
                setTimeout(function() {
                  e.apply(r, t);
                }, 0);
              };
            },
            _i = function(e) {
              var t = function(t) {
                  e(Ti(t));
                },
                n = function(e) {
                  return _i(function(n) {
                    t(function(t) {
                      var r = e(t);
                      n(r);
                    });
                  });
                },
                r = function(e) {
                  return _i(function(n) {
                    t(function(t) {
                      e(t).get(n);
                    });
                  });
                },
                o = function(e) {
                  return _i(function(n) {
                    t(function(t) {
                      e.get(n);
                    });
                  });
                },
                i = function() {
                  return ki.nu(t);
                },
                a = function() {
                  var e = null;
                  return _i(function(t) {
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
            Ai = function(e) {
              return _i(function(t) {
                t(e);
              });
            },
            Ri = { nu: _i, pure: Ai },
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
                  : H(e, function(e, t) {
                      e.get(o(t));
                    });
              });
            },
            Di = function(e) {
              return Bi(e, Ri.nu);
            },
            Oi = function(e) {
              var t = function(t) {
                  return e === t;
                },
                n = function(t) {
                  return Oi(e);
                },
                r = function(t) {
                  return Oi(e);
                },
                o = function(t) {
                  return Oi(t(e));
                },
                i = function(t) {
                  t(e);
                },
                a = function(t) {
                  return t(e);
                },
                u = function(t, n) {
                  return n(e);
                },
                s = function(t) {
                  return t(e);
                },
                c = function(t) {
                  return t(e);
                },
                l = function() {
                  return _.some(e);
                };
              return {
                is: t,
                isValue: w,
                isError: C,
                getOr: h(e),
                getOrThunk: h(e),
                getOrDie: h(e),
                or: n,
                orThunk: r,
                fold: u,
                map: o,
                each: i,
                bind: a,
                exists: s,
                forall: c,
                toOption: l
              };
            },
            Pi = function(e) {
              var t = function(e) {
                  return e();
                },
                n = function() {
                  return y(String(e))();
                },
                r = function(e) {
                  return e;
                },
                o = function(e) {
                  return e();
                },
                i = function(t) {
                  return Pi(e);
                },
                a = function(t) {
                  return Pi(e);
                },
                u = function(t, n) {
                  return t(e);
                };
              return {
                is: C,
                isValue: C,
                isError: w,
                getOr: v,
                getOrThunk: t,
                getOrDie: n,
                or: r,
                orThunk: o,
                fold: u,
                map: i,
                each: p,
                bind: a,
                exists: C,
                forall: w,
                toOption: _.none
              };
            },
            Ii = { value: Oi, error: Pi };
          function Li(e, t) {
            void 0 === t && (t = {});
            var n,
              r = 0,
              o = {};
            n = t.maxLoadTime || 5e3;
            var i = function(t) {
                e.getElementsByTagName("head")[0].appendChild(t);
              },
              a = function(a, u, s) {
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
                      (new Date().getTime() - f < n ? Pe.setTimeout(t) : p());
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
                  ((a = Ln._addCacheSuffix(a)),
                  o[a]
                    ? (d = o[a])
                    : ((d = { passed: [], failed: [] }), (o[a] = d)),
                  u && d.passed.push(u),
                  s && d.failed.push(s),
                  1 !== d.status)
                )
                  if (2 !== d.status)
                    if (3 !== d.status) {
                      if (
                        ((d.status = 1),
                        (c = e.createElement("link")),
                        (c.rel = "stylesheet"),
                        (c.type = "text/css"),
                        (c.id = "u" + r++),
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
                            (l.textContent = '@import "' + a + '"'),
                            b(),
                            void i(l)
                          );
                        v();
                      }
                      i(c), (c.href = a);
                    } else p();
                  else m();
              },
              u = function(e) {
                return Ri.nu(function(t) {
                  a(e, g(t, h(Ii.value(e))), g(t, h(Ii.error(e))));
                });
              },
              s = function(e) {
                return e.fold(v, v);
              },
              c = function(e, t, n) {
                Di(V(e, u)).get(function(e) {
                  var r = $(e, function(e) {
                    return e.isValue();
                  });
                  r.fail.length > 0 ? n(r.fail.map(s)) : t(r.pass.map(s));
                });
              };
            return { load: a, loadAll: c };
          }
          function Mi(e, t) {
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
          var Fi,
            Ui,
            ji,
            zi = [
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
            Vi = [
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
            Hi = ["td", "th"],
            qi = ["thead", "tbody", "tfoot"],
            $i = [
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
            Wi = ["h1", "h2", "h3", "h4", "h5", "h6"],
            Yi = ["li", "dd", "dt"],
            Gi = ["ul", "ol", "dl"],
            Xi = ["pre", "script", "textarea", "style"],
            Zi = function(e) {
              var t;
              return function(n) {
                return (t = t || ie(e, h(!0))), t.hasOwnProperty(go(n));
              };
            },
            Ki = Zi(Wi),
            Ji = Zi(zi),
            Qi = function(e) {
              return bo(e) && !Ji(e);
            },
            ea = function(e) {
              return bo(e) && "br" === go(e);
            },
            ta = Zi($i),
            na = Zi(Gi),
            ra = Zi(Yi),
            oa = Zi(Vi),
            ia = Zi(qi),
            aa = Zi(Hi),
            ua = Zi(Xi),
            sa = function(e) {
              return function(t) {
                return !!t && t.nodeType === e;
              };
            },
            ca = sa(1),
            la = function(e) {
              var t = e.toLowerCase().split(" ");
              return function(e) {
                var n, r;
                if (e && e.nodeType)
                  for (r = e.nodeName.toLowerCase(), n = 0; n < t.length; n++)
                    if (r === t[n]) return !0;
                return !1;
              };
            },
            fa = function(e, t) {
              var n = t.toLowerCase().split(" ");
              return function(t) {
                var r, o;
                if (ca(t))
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
            da = function(e, t) {
              return function(n) {
                return ca(n) && n[e] === t;
              };
            },
            ma = function(e, t) {
              return function(t) {
                return ca(t) && t.hasAttribute(e);
              };
            },
            pa = function(e, t) {
              return function(n) {
                return ca(n) && n.getAttribute(e) === t;
              };
            },
            ga = function(e) {
              return ca(e) && e.hasAttribute("data-mce-bogus");
            },
            ha = function(e) {
              return ca(e) && "all" === e.getAttribute("data-mce-bogus");
            },
            va = function(e) {
              return ca(e) && "TABLE" === e.tagName;
            },
            ba = function(e) {
              return function(t) {
                if (ca(t)) {
                  if (t.contentEditable === e) return !0;
                  if (t.getAttribute("data-mce-contenteditable") === e)
                    return !0;
                }
                return !1;
              };
            },
            ya = sa(3),
            Ca = sa(8),
            wa = sa(9),
            xa = la("br"),
            Ea = ba("true"),
            Sa = ba("false"),
            Na = {
              isText: ya,
              isElement: ca,
              isComment: Ca,
              isDocument: wa,
              isBr: xa,
              isContentEditableTrue: Ea,
              isContentEditableFalse: Sa,
              matchNodeNames: la,
              hasPropValue: da,
              hasAttribute: ma,
              hasAttributeValue: pa,
              matchStyleValues: fa,
              isBogus: ga,
              isBogusAll: ha,
              isTable: va
            },
            ka = function(e) {
              var t =
                  e.previousSibling && "SPAN" === e.previousSibling.nodeName,
                n = e.nextSibling && "SPAN" === e.nextSibling.nodeName;
              return t && n;
            },
            Ta = function(e) {
              return (
                e &&
                "SPAN" === e.tagName &&
                "bookmark" === e.getAttribute("data-mce-type")
              );
            },
            _a = function(e, t) {
              var n,
                r = t.childNodes;
              if (!Na.isElement(t) || !Ta(t)) {
                for (n = r.length - 1; n >= 0; n--) _a(e, r[n]);
                if (!1 === Na.isDocument(t)) {
                  if (Na.isText(t) && t.nodeValue.length > 0) {
                    var o = Ln.trim(t.nodeValue).length;
                    if (e.isBlock(t.parentNode) || o > 0) return;
                    if (0 === o && ka(t)) return;
                  } else if (
                    Na.isElement(t) &&
                    ((r = t.childNodes),
                    1 === r.length &&
                      Ta(r[0]) &&
                      t.parentNode.insertBefore(r[0], t),
                    r.length || oa(lo.fromDom(t)))
                  )
                    return;
                  e.remove(t);
                }
                return t;
              }
            },
            Aa = { trimNode: _a },
            Ra = Ln.makeMap,
            Ba = /[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
            Da = /[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
            Oa = /[<>&\"\']/g,
            Pa = /&#([a-z0-9]+);?|&([a-z0-9]+);/gi,
            Ia = {
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
          (Ui = {
            '"': "&quot;",
            "'": "&#39;",
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            "`": "&#96;"
          }),
            (ji = {
              "&lt;": "<",
              "&gt;": ">",
              "&amp;": "&",
              "&quot;": '"',
              "&apos;": "'"
            });
          var La = function(e) {
              var t;
              return (
                (t = lo.fromTag("div").dom()),
                (t.innerHTML = e),
                t.textContent || t.innerText || e
              );
            },
            Ma = function(e, t) {
              var n,
                r,
                o,
                i = {};
              if (e) {
                for (e = e.split(","), t = t || 10, n = 0; n < e.length; n += 2)
                  (r = String.fromCharCode(parseInt(e[n], t))),
                    Ui[r] ||
                      ((o = "&" + e[n + 1] + ";"), (i[r] = o), (i[o] = r));
                return i;
              }
            };
          Fi = Ma(
            "50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro",
            32
          );
          var Fa = function(e, t) {
              return e.replace(t ? Ba : Da, function(e) {
                return Ui[e] || e;
              });
            },
            Ua = function(e) {
              return ("" + e).replace(Oa, function(e) {
                return Ui[e] || e;
              });
            },
            ja = function(e, t) {
              return e.replace(t ? Ba : Da, function(e) {
                return e.length > 1
                  ? "&#" +
                      (1024 * (e.charCodeAt(0) - 55296) +
                        (e.charCodeAt(1) - 56320) +
                        65536) +
                      ";"
                  : Ui[e] || "&#" + e.charCodeAt(0) + ";";
              });
            },
            za = function(e, t, n) {
              return (
                (n = n || Fi),
                e.replace(t ? Ba : Da, function(e) {
                  return Ui[e] || n[e] || e;
                })
              );
            },
            Va = function(e, t) {
              var n = Ma(t) || Fi,
                r = function(e, t) {
                  return e.replace(t ? Ba : Da, function(e) {
                    return void 0 !== Ui[e]
                      ? Ui[e]
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
                  return za(e, t, n);
                },
                i = Ra(e.replace(/\+/g, ","));
              return i.named && i.numeric
                ? r
                : i.named
                  ? t
                    ? o
                    : za
                  : i.numeric
                    ? ja
                    : Fa;
            },
            Ha = function(e) {
              return e.replace(Pa, function(e, t) {
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
                      : Ia[t] || String.fromCharCode(t))
                  : ji[e] || Fi[e] || La(e);
              });
            },
            qa = {
              encodeRaw: Fa,
              encodeAllRaw: Ua,
              encodeNumeric: ja,
              encodeNamed: za,
              getEncodeFunc: Va,
              decode: Ha
            },
            $a = {},
            Wa = {},
            Ya = Ln.makeMap,
            Ga = Ln.each,
            Xa = Ln.extend,
            Za = Ln.explode,
            Ka = Ln.inArray,
            Ja = function(e, t) {
              return (e = Ln.trim(e)), e ? e.split(t || " ") : [];
            },
            Qa = function(e) {
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
                    "string" === typeof r && (r = Ja(r)),
                    (e = Ja(e)),
                    (o = e.length);
                  while (o--)
                    (i = Ja([t, n].join(" "))),
                      (a = {
                        attributes: s(i),
                        attributesOrder: i,
                        children: s(r, Wa)
                      }),
                      (u[e[o]] = a);
                },
                c = function(e, t) {
                  var n, r, o, i;
                  (e = Ja(e)), (n = e.length), (t = Ja(t));
                  while (n--)
                    for (r = u[e[n]], o = 0, i = t.length; o < i; o++)
                      (r.attributes[t[o]] = {}), r.attributesOrder.push(t[o]);
                };
              return $a[e]
                ? $a[e]
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
                    Ga(Ja(a), function(e) {
                      s(e, "", r);
                    }),
                    (i = "center dir isindex noframes"),
                    (n = [n, i].join(" ")),
                    (o = [n, r].join(" ")),
                    Ga(Ja(i), function(e) {
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
                  Ga(Ja("a form meter progress dfn"), function(e) {
                    u[e] && delete u[e].children[e];
                  }),
                  delete u.caption.children.table,
                  delete u.script,
                  ($a[e] = u),
                  u);
            },
            eu = function(e, t) {
              var n;
              return (
                e &&
                  ((n = {}),
                  "string" === typeof e && (e = { "*": e }),
                  Ga(e, function(e, r) {
                    n[r] = n[r.toUpperCase()] =
                      "map" === t ? Ya(e, /[, ]/) : Za(e, /[, ]/);
                  })),
                n
              );
            };
          function tu(e) {
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
                    ? (o = Ya(o, /[, ]/, Ya(o.toUpperCase(), /[, ]/)))
                    : ((o = $a[t]),
                      o ||
                        ((o = Ya(n, " ", Ya(n.toUpperCase(), " "))),
                        (o = Xa(o, r)),
                        ($a[t] = o))),
                  o
                );
              };
            (e = e || {}),
              (r = Qa(e.schema)),
              !1 === e.verify_html && (e.valid_elements = "*[*]"),
              (t = eu(e.valid_styles)),
              (n = eu(e.invalid_styles, "map")),
              (s = eu(e.valid_classes, "map")),
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
              Ga(
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
                    e = Ja(e, ","),
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
                        for (s = Ja(s, "|"), r = 0, o = s.length; r < o; r++)
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
                              delete d[l], m.splice(Ka(m, l), 1);
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
                              "<" === g && (u.validValues = Ya(x, "?"))),
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
                  Ga(r, function(e, t) {
                    g[t] = e.children;
                  });
              },
              E = function(e) {
                var t = /^(~)?(.+)$/;
                e &&
                  (($a.text_block_elements = $a.block_elements = null),
                  Ga(Ja(e, ","), function(e) {
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
                      (a = Xa({}, a)),
                        delete a.removeEmptyAttrs,
                        delete a.removeEmpty,
                        (p[i] = a);
                    }
                    Ga(g, function(e, t) {
                      e[o] && ((g[t] = e = Xa({}, g[t])), (e[i] = e[o]));
                    });
                  }));
              },
              S = function(t) {
                var n = /^([+\-]?)(\w+)\[([^\]]+)\]$/;
                ($a[e.schema] = null),
                  t &&
                    Ga(Ja(t, ","), function(e) {
                      var t,
                        r,
                        o = n.exec(e);
                      o &&
                        ((r = o[1]),
                        (t = r ? g[o[2]] : (g[o[2]] = { "#comment": {} })),
                        (t = g[o[2]]),
                        Ga(Ja(o[3], "|"), function(e) {
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
              : (Ga(r, function(e, t) {
                  (p[t] = {
                    attributes: e.attributes,
                    attributesOrder: e.attributesOrder
                  }),
                    (g[t] = e.children);
                }),
                "html5" !== e.schema &&
                  Ga(Ja("strong/b em/i"), function(e) {
                    (e = Ja(e, "/")), (p[e[1]].outputName = e[0]);
                  }),
                Ga(
                  Ja(
                    "ol ul sub sup blockquote span font a table tbody tr strong em b i"
                  ),
                  function(e) {
                    p[e] && (p[e].removeEmpty = !0);
                  }
                ),
                Ga(
                  Ja("p h1 h2 h3 h4 h5 h6 th td pre div address caption li"),
                  function(e) {
                    p[e].paddEmpty = !0;
                  }
                ),
                Ga(Ja("span"), function(e) {
                  p[e].removeEmptyAttrs = !0;
                })),
              E(e.custom_elements),
              S(e.valid_children),
              w(e.extended_valid_elements),
              S("+ol[ul|ol],+ul[ul|ol]"),
              Ga(
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
                  p[t] && (p[t].parentsRequired = Ja(e));
                }
              ),
              e.invalid_elements &&
                Ga(Za(e.invalid_elements), function(e) {
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
              B = function() {
                return d;
              },
              D = function() {
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
              getTextBlockElements: B,
              getTextInlineElements: D,
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
          var nu = function(e, t, n, r) {
            var o = function(e) {
              return (
                (e = parseInt(e, 10).toString(16)), e.length > 1 ? e : "0" + e
              );
            };
            return "#" + o(t) + o(n) + o(r);
          };
          function ru(e, t) {
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
                return e.replace(a, nu);
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
                        (i = i.replace(a, nu)),
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
          var ou = Ln.each,
            iu = Ln.grep,
            au = Ne.ie,
            uu = /^([a-z0-9],?)+$/i,
            su = /^[ \t\r\n]*$/,
            cu = function(e, t, n) {
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
            lu = function(e, t) {
              var n = t.attr("style"),
                r = e.serialize(e.parse(n), t[0].nodeName);
              r || (r = null), t.attr("data-mce-style", r);
            },
            fu = function(e, t) {
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
          function du(e, t) {
            var n,
              r = this;
            void 0 === t && (t = {});
            var o = {},
              i = window,
              a = {},
              u = 0,
              s = !0,
              c = !0,
              l = Li(e, { contentCssCors: t.contentCssCors }),
              f = [],
              d = t.schema ? t.schema : tu({}),
              m = ru(
                {
                  url_converter: t.url_converter,
                  url_converter_scope: t.url_converter_scope
                },
                t.schema
              ),
              p = t.ownEvents ? new We(t.proxy) : We.Event,
              g = d.getBlockElements(),
              h = nr.overrideDefaults(function() {
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
                if (!au || 1 !== t.nodeType || n) return t.cloneNode(n);
                if (!n) {
                  var r = e.createElement(t.nodeName);
                  return (
                    ou(w(t), function(e) {
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
                return Ei.getPos(e.body, b(t), n);
              },
              T = function(e, n, r) {
                var o = y(e).css(n, r);
                t.update_styles && lu(m, o);
              },
              _ = function(e, n) {
                var r = y(e).css(n);
                t.update_styles && lu(m, r);
              },
              A = function(e, t, n) {
                var r = y(e);
                return n
                  ? r.css(t)
                  : ((t = t.replace(/-(\D)/g, function(e, t) {
                      return t.toUpperCase();
                    })),
                    "float" === t &&
                      (t = Ne.ie && Ne.ie < 12 ? "styleFloat" : "cssFloat"),
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
              B = function(e) {
                var t, n;
                return (
                  (e = b(e)),
                  (t = k(e)),
                  (n = R(e)),
                  { x: t.x, y: t.y, w: n.w, h: n.h }
                );
              },
              D = function(e, t) {
                var n;
                if (!e) return !1;
                if (!Array.isArray(e)) {
                  if ("*" === t) return 1 === e.nodeType;
                  if (uu.test(t)) {
                    var r = t.toLowerCase().split(/,/),
                      o = e.nodeName.toLowerCase();
                    for (n = r.length - 1; n >= 0; n--)
                      if (r[n] === o) return !0;
                    return !1;
                  }
                  if (e.nodeType && 1 !== e.nodeType) return !1;
                }
                var i = Array.isArray(e) ? e : [e];
                return Xt(t, i[0].ownerDocument || i[0], null, i).length > 0;
              },
              O = function(e, t, n, r) {
                var o,
                  i = [],
                  a = b(e);
                (r = void 0 === r),
                  (n = n || ("BODY" !== S().nodeName ? S().parentNode : null)),
                  Ln.is(t, "string") &&
                    ((o = t),
                    (t =
                      "*" === t
                        ? function(e) {
                            return 1 === e.nodeType;
                          }
                        : function(e) {
                            return D(e, o);
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
                        return D(e, t);
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
                return Xt(n, b(r) || t.root_element || e, []);
              },
              U = function(e, t, n) {
                var o,
                  i = "string" === typeof e ? b(e) : e;
                if (!i) return !1;
                if (Ln.isArray(i) && (i.length || 0 === i.length))
                  return (
                    (o = []),
                    ou(i, function(e, r) {
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
                  ou(t, function(e, t) {
                    x(n, t, e);
                  });
                });
              },
              z = function(e, t) {
                var n = y(e);
                au
                  ? n.each(function(e, n) {
                      if (!1 !== n.canHaveHTML) {
                        while (n.firstChild) n.removeChild(n.firstChild);
                        try {
                          (n.innerHTML = "<br>" + t),
                            n.removeChild(n.firstChild);
                        } catch (r) {
                          nr("<div></div>")
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
              q = qa.decode,
              $ = qa.encodeAllRaw,
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
                if (Te !== du.DOM && e === document) {
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
                Te === du.DOM || e !== document
                  ? (t || (t = ""),
                    (n = e.getElementsByTagName("head")[0]),
                    ou(t.split(","), function(e) {
                      var t;
                      (e = Ln._addCacheSuffix(e)),
                        a[e] ||
                          ((a[e] = !0),
                          (t = H("link", { rel: "stylesheet", href: e })),
                          n.appendChild(t));
                    }))
                  : du.DOM.loadCSS(t);
              },
              ee = function(e, t, n) {
                y(e)
                  .toggleClass(t, n)
                  .each(function() {
                    "" === this.className && nr(this).attr("class", null);
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
                return Na.isElement(t)
                  ? t.outerHTML
                  : nr("<div></div>")
                      .append(nr(t).clone())
                      .html();
              },
              ce = function(e, t) {
                y(e).each(function() {
                  try {
                    if ("outerHTML" in this) return void (this.outerHTML = t);
                  } catch (e) {}
                  G(nr(this).html(t), !0);
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
                    Ln.is(t, "array") && (e = e.cloneNode(!0)),
                    n &&
                      ou(iu(t.childNodes), function(t) {
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
                    ou(w(e), function(t) {
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
                return m.toHex(Ln.trim(e));
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
                  (a = new Mi(e, e.parentNode)),
                    (t = t || (d ? d.getNonEmptyElements() : null)),
                    (i = d ? d.getWhiteSpaceElements() : {});
                  do {
                    if (((o = e.nodeType), Na.isElement(e))) {
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
                    if (3 === o && !su.test(e.nodeValue)) return !1;
                    if (
                      3 === o &&
                      e.parentNode &&
                      i[e.parentNode.nodeName] &&
                      su.test(e.nodeValue)
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
                    a.setStart(e.parentNode, fu(e)),
                    a.setEnd(t.parentNode, fu(t)),
                    (r = a.extractContents()),
                    (a = he()),
                    a.setStart(t.parentNode, fu(t) + 1),
                    a.setEnd(e.parentNode, fu(e) + 1),
                    (o = a.extractContents()),
                    (i = e.parentNode),
                    i.insertBefore(Aa.trimNode(Te, r), e),
                    n ? i.insertBefore(n, e) : i.insertBefore(t, e),
                    i.insertBefore(Aa.trimNode(Te, o), e),
                    G(e),
                    n || t
                  );
              },
              be = function(n, r, o, a) {
                if (Ln.isArray(n)) {
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
                if (Ln.isArray(t)) {
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
                if (e && Na.isElement(e)) {
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
                Xt.setDocument && Xt.setDocument();
              },
              Se = function(e, t) {
                while (e) {
                  if (t === e) return !0;
                  e = e.parentNode;
                }
                return !1;
              },
              ke = function(e) {
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
                getRect: B,
                getSize: R,
                getParent: P,
                getParents: O,
                get: b,
                getNext: L,
                getPrev: M,
                select: F,
                is: D,
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
                nodeIndex: fu,
                split: ve,
                bind: be,
                unbind: ye,
                fire: Ce,
                getContentEditable: we,
                getContentEditableParent: xe,
                destroy: Ee,
                isChildOf: Se,
                dumpRng: ke
              };
            return (
              (n = cu(m, t, function() {
                return Te;
              })),
              Te
            );
          }
          (function(e) {
            (e.DOM = e(document)), (e.nodeIndex = fu);
          })(du || (du = {}));
          var mu = du,
            pu = mu.DOM,
            gu = Ln.each,
            hu = Ln.grep,
            vu = function(e) {
              return "function" === typeof e;
            },
            bu = function() {
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
                    i = pu,
                    a = function() {
                      i.remove(o),
                        r && (r.onreadystatechange = r.onload = r = null),
                        t();
                    },
                    u = function() {
                      vu(n)
                        ? n()
                        : "undefined" !== typeof console &&
                          console.log &&
                          console.log("Failed to load script: " + e);
                    };
                  (o = i.uniqueId()),
                    (r = document.createElement("script")),
                    (r.id = o),
                    (r.type = "text/javascript"),
                    (r.src = Ln._addCacheSuffix(e)),
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
                      gu(a[t], function(t) {
                        vu(t[e]) && t[e].call(t.scope);
                      }),
                        (a[t] = void 0);
                    };
                  u.push({ success: i, failure: f, scope: l || this }),
                    (d = function() {
                      var i = hu(e);
                      if (
                        ((e.length = 0),
                        gu(i, function(e) {
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
                          gu(a, function(e) {
                            0 === m.length
                              ? vu(e.success) && e.success.call(e.scope)
                              : vu(e.failure) && e.failure.call(e.scope, m);
                          });
                      }
                    }),
                    d();
                });
            };
          bu.ScriptLoader = new bu();
          var yu = Ln.each;
          function Cu() {
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
                var r = Cu.language;
                if (r && !1 !== Cu.languageLoad) {
                  if (t)
                    if (
                      ((t = "," + t + ","),
                      -1 !== t.indexOf("," + r.substr(0, 2) + ","))
                    )
                      r = r.substr(0, 2);
                    else if (-1 === t.indexOf("," + r + ",")) return;
                  bu.ScriptLoader.add(n[e] + "/langs/" + r + ".js");
                }
              },
              s = function(e, n, i) {
                t.push(n), (r[e] = { instance: n, dependencies: i });
                var a = $(o, function(t) {
                  return t.name === e;
                });
                return (
                  (o = a.fail),
                  yu(a.pass, function(e) {
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
                yu(n, function(e) {
                  bu.ScriptLoader.add(r + "/" + e);
                });
              },
              d = function(e, t, n, r) {
                var o = a(e);
                yu(o, function(e) {
                  var n = l(t, e);
                  m(n.resource, n, void 0, void 0);
                }),
                  n && (r ? n.call(r) : n.call(bu));
              },
              m = function(e, t, o, i, a) {
                if (!n[e]) {
                  var u =
                    "string" === typeof t
                      ? t
                      : t.prefix + t.resource + t.suffix;
                  0 !== u.indexOf("/") &&
                    -1 === u.indexOf("://") &&
                    (u = Cu.baseURL + "/" + u),
                    (n[e] = u.substring(0, u.lastIndexOf("/"))),
                    r[e]
                      ? d(e, t, o, i)
                      : bu.ScriptLoader.add(
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
          })(Cu || (Cu = {}));
          var wu = function(e, t) {
              var n = si(e);
              n.each(function(n) {
                n.dom().insertBefore(t.dom(), e.dom());
              });
            },
            xu = function(e, t) {
              var n = fi(e);
              n.fold(
                function() {
                  var n = si(e);
                  n.each(function(e) {
                    Eu(e, t);
                  });
                },
                function(e) {
                  wu(e, t);
                }
              );
            },
            Eu = function(e, t) {
              e.dom().appendChild(t.dom());
            },
            Su = function(e, t) {
              wu(e, t), Eu(t, e);
            },
            Nu = function(e, t) {
              H(t, function(t) {
                wu(e, t);
              });
            },
            ku = function(e, t) {
              H(t, function(t) {
                Eu(e, t);
              });
            },
            Tu = function(e) {
              (e.dom().textContent = ""),
                H(pi(e), function(e) {
                  _u(e);
                });
            },
            _u = function(e) {
              var t = e.dom();
              null !== t.parentNode && t.parentNode.removeChild(t);
            },
            Au = function(e) {
              var t = pi(e);
              t.length > 0 && Nu(e, t), _u(e);
            },
            Ru = function(e, t) {
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
            Du = function(e) {
              var t = e,
                n = function() {
                  return t;
                },
                r = function(e) {
                  t = e;
                },
                o = function() {
                  return Du(n());
                };
              return { get: n, set: r, clone: o };
            },
            Ou = function(e, t) {
              var n = Ro(e, t);
              return void 0 === n || "" === n ? [] : n.split(" ");
            },
            Pu = function(e, t, n) {
              var r = Ou(e, t),
                o = r.concat([n]);
              return _o(e, t, o.join(" ")), !0;
            },
            Iu = function(e, t, n) {
              var r = W(Ou(e, t), function(e) {
                return e !== n;
              });
              return r.length > 0 ? _o(e, t, r.join(" ")) : Do(e, t), !1;
            },
            Lu = function(e) {
              return void 0 !== e.dom().classList;
            },
            Mu = function(e) {
              return Ou(e, "class");
            },
            Fu = function(e, t) {
              return Pu(e, "class", t);
            },
            Uu = function(e, t) {
              return Iu(e, "class", t);
            },
            ju = function(e, t) {
              Lu(e) ? e.dom().classList.add(t) : Fu(e, t);
            },
            zu = function(e) {
              var t = Lu(e) ? e.dom().classList : Mu(e);
              0 === t.length && Do(e, "class");
            },
            Vu = function(e, t) {
              if (Lu(e)) {
                var n = e.dom().classList;
                n.remove(t);
              } else Uu(e, t);
              zu(e);
            },
            Hu = function(e, t) {
              return Lu(e) && e.dom().classList.contains(t);
            },
            qu = function(e, t) {
              return Jo(t, e);
            };
          function $u(e, t, n, r, o) {
            return e(n, r) ? _.some(n) : L(o) && o(n) ? _.none() : t(n, r, o);
          }
          var Wu = function(e, t, n) {
              var r = e.dom(),
                o = L(n) ? n : h(!1);
              while (r.parentNode) {
                r = r.parentNode;
                var i = lo.fromDom(r);
                if (t(i)) return _.some(i);
                if (o(i)) break;
              }
              return _.none();
            },
            Yu = function(e, t, n) {
              var r = function(e) {
                return t(e);
              };
              return $u(r, Wu, e, t, n);
            },
            Gu = function(e, t, n) {
              return Wu(
                e,
                function(e) {
                  return Zo(e, t);
                },
                n
              );
            },
            Xu = function(e, t) {
              return Qo(t, e);
            },
            Zu = function(e, t, n) {
              return $u(Zo, Gu, e, t, n);
            },
            Ku = h("mce-annotation"),
            Ju = h("data-mce-annotation"),
            Qu = h("data-mce-annotation-uid"),
            es = function(e, t) {
              var n = e.selection.getRng(),
                r = lo.fromDom(n.startContainer),
                o = lo.fromDom(e.getBody()),
                i = t.fold(
                  function() {
                    return "." + Ku();
                  },
                  function(e) {
                    return "[" + Ju() + '="' + e + '"]';
                  }
                ),
                a = gi(r, n.startOffset).getOr(r),
                u = Zu(a, i, function(e) {
                  return ei(e, o);
                }),
                s = function(e, t) {
                  return Bo(e, t) ? _.some(Ro(e, t)) : _.none();
                };
              return u.bind(function(t) {
                return s(t, "" + Qu()).bind(function(n) {
                  return s(t, "" + Ju()).map(function(t) {
                    var r = ns(e, n);
                    return { uid: n, name: t, elements: r };
                  });
                });
              });
            },
            ts = function(e) {
              return bo(e) && Hu(e, Ku());
            },
            ns = function(e, t) {
              var n = lo.fromDom(e.getBody());
              return qu(n, "[" + Qu() + '="' + t + '"]');
            },
            rs = function(e, t) {
              var n = lo.fromDom(e.getBody()),
                r = qu(n, "[" + Ju() + '="' + t + '"]'),
                o = {};
              return (
                H(r, function(e) {
                  var t = Ro(e, Qu()),
                    n = o.hasOwnProperty(t) ? o[t] : [];
                  o[t] = n.concat([e]);
                }),
                o
              );
            },
            os = function(e, t) {
              var n = Du({}),
                r = function() {
                  return { listeners: [], previous: Du(_.none()) };
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
                    H(r.listeners, function(r) {
                      return r(!0, e, {
                        uid: t,
                        nodes: V(n, function(e) {
                          return e.dom();
                        })
                      });
                    });
                  });
                },
                u = function(e) {
                  o(e, function(t) {
                    H(t.listeners, function(t) {
                      return t(!1, e);
                    });
                  });
                },
                s = Bu(function() {
                  var t = n.get(),
                    r = ae(Co(t));
                  H(r, function(t) {
                    i(t, function(n) {
                      var r = n.previous.get();
                      return (
                        es(e, _.some(t)).fold(
                          function() {
                            r.isSome() && (u(t), n.previous.set(_.none()));
                          },
                          function(e) {
                            var t = e.uid,
                              o = e.name,
                              i = e.elements;
                            r.is(t) || (a(o, t, i), n.previous.set(_.some(t)));
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
            is = function(e, t) {
              var n = function(e) {
                var n = _.from(e.attributes.map[Ju()]);
                return n.bind(t.lookup);
              };
              e.on("init", function() {
                e.serializer.addNodeFilter("span", function(e) {
                  H(e, function(e) {
                    n(e).each(function(t) {
                      !1 === t.persistent && e.unwrap();
                    });
                  });
                });
              });
            },
            as = function() {
              var e = {},
                t = function(t, n) {
                  e[t] = { name: t, settings: n };
                },
                n = function(t) {
                  return e.hasOwnProperty(t)
                    ? _.from(e[t]).map(function(e) {
                        return e.settings;
                      })
                    : _.none();
                };
              return { register: t, lookup: n };
            },
            us = 0,
            ss = function(e) {
              var t = new Date(),
                n = t.getTime(),
                r = Math.floor(1e9 * Math.random());
              return us++, e + "_" + r + us + String(n);
            },
            cs = function(e, t) {
              H(t, function(t) {
                ju(e, t);
              });
            },
            ls = function(e, t) {
              return lo.fromDom(e.dom().cloneNode(t));
            },
            fs = function(e) {
              return ls(e, !1);
            },
            ds = function(e) {
              return ls(e, !0);
            },
            ms = function(e, t) {
              var n = t || document,
                r = n.createElement("div");
              return (r.innerHTML = e), pi(lo.fromDom(r));
            },
            ps = function(e) {
              return e.dom().innerHTML;
            },
            gs = function(e, t) {
              var n = ii(e),
                r = n.dom(),
                o = lo.fromDom(r.createDocumentFragment()),
                i = ms(t, r);
              ku(o, i), Tu(e), Eu(e, o);
            },
            hs = [].slice,
            vs = function(e) {
              return function() {
                return e;
              };
            },
            bs = function(e) {
              return function(t) {
                return !e(t);
              };
            },
            ys = function(e, t) {
              return function(n) {
                return e(t(n));
              };
            },
            Cs = function() {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              var n = hs.call(arguments);
              return function(e) {
                for (var t = 0; t < n.length; t++) if (n[t](e)) return !0;
                return !1;
              };
            },
            ws = function() {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              var n = hs.call(arguments);
              return function(e) {
                for (var t = 0; t < n.length; t++) if (!n[t](e)) return !1;
                return !0;
              };
            },
            xs = function(e) {
              for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
              var r = hs.call(arguments);
              return r.length - 1 >= e.length
                ? e.apply(this, r.slice(1))
                : function() {
                    var e = r.concat([].slice.call(arguments));
                    return xs.apply(this, e);
                  };
            },
            Es = function() {},
            Ss = {
              constant: vs,
              negate: bs,
              and: ws,
              or: Cs,
              curry: xs,
              compose: ys,
              noop: Es
            },
            Ns = "\ufeff",
            ks = function(e) {
              return e === Ns;
            },
            Ts = function(e) {
              return e.replace(new RegExp(Ns, "g"), "");
            },
            _s = { isZwsp: ks, ZWSP: Ns, trim: Ts },
            As = Na.isElement,
            Rs = Na.isText,
            Bs = function(e) {
              return (
                Rs(e) && (e = e.parentNode),
                As(e) && e.hasAttribute("data-mce-caret")
              );
            },
            Ds = function(e) {
              return Rs(e) && _s.isZwsp(e.data);
            },
            Os = function(e) {
              return Bs(e) || Ds(e);
            },
            Ps = function(e) {
              return e.firstChild !== e.lastChild || !Na.isBr(e.firstChild);
            },
            Is = function(e, t) {
              var n, r, o, i;
              if (
                ((n = e.ownerDocument),
                (o = n.createTextNode(_s.ZWSP)),
                (i = e.parentNode),
                t)
              ) {
                if (((r = e.previousSibling), Rs(r))) {
                  if (Os(r)) return r;
                  if (zs(r)) return r.splitText(r.data.length - 1);
                }
                i.insertBefore(o, e);
              } else {
                if (((r = e.nextSibling), Rs(r))) {
                  if (Os(r)) return r;
                  if (js(r)) return r.splitText(1), r;
                }
                e.nextSibling
                  ? i.insertBefore(o, e.nextSibling)
                  : i.appendChild(o);
              }
              return o;
            },
            Ls = function(e) {
              var t = e.container();
              return e && Na.isText(t) && t.data.charAt(e.offset()) === _s.ZWSP;
            },
            Ms = function(e) {
              var t = e.container();
              return (
                e && Na.isText(t) && t.data.charAt(e.offset() - 1) === _s.ZWSP
              );
            },
            Fs = function() {
              var e = document.createElement("br");
              return e.setAttribute("data-mce-bogus", "1"), e;
            },
            Us = function(e, t, n) {
              var r, o, i;
              return (
                (r = t.ownerDocument),
                (o = r.createElement(e)),
                o.setAttribute("data-mce-caret", n ? "before" : "after"),
                o.setAttribute("data-mce-bogus", "all"),
                o.appendChild(Fs()),
                (i = t.parentNode),
                n
                  ? i.insertBefore(o, t)
                  : t.nextSibling
                    ? i.insertBefore(o, t.nextSibling)
                    : i.appendChild(o),
                o
              );
            },
            js = function(e) {
              return Rs(e) && e.data[0] === _s.ZWSP;
            },
            zs = function(e) {
              return Rs(e) && e.data[e.data.length - 1] === _s.ZWSP;
            },
            Vs = function(e) {
              var t = e.getElementsByTagName("br"),
                n = t[t.length - 1];
              Na.isBogus(n) && n.parentNode.removeChild(n);
            },
            Hs = function(e) {
              return e && e.hasAttribute("data-mce-caret")
                ? (Vs(e),
                  e.removeAttribute("data-mce-caret"),
                  e.removeAttribute("data-mce-bogus"),
                  e.removeAttribute("style"),
                  e.removeAttribute("_moz_abspos"),
                  e)
                : null;
            },
            qs = function(e) {
              return Bs(e.startContainer);
            },
            $s = Na.isContentEditableTrue,
            Ws = Na.isContentEditableFalse,
            Ys = Na.isBr,
            Gs = Na.isText,
            Xs = Na.matchNodeNames("script style textarea"),
            Zs = Na.matchNodeNames(
              "img input textarea hr iframe video audio object"
            ),
            Ks = Na.matchNodeNames("table"),
            Js = Os,
            Qs = function(e) {
              return (
                !Js(e) &&
                (Gs(e) ? !Xs(e.parentNode) : Zs(e) || Ys(e) || Ks(e) || tc(e))
              );
            },
            ec = function(e) {
              return (
                Na.isElement(e) && "true" === e.getAttribute("unselectable")
              );
            },
            tc = function(e) {
              return !1 === ec(e) && Ws(e);
            },
            nc = function(e, t) {
              for (e = e.parentNode; e && e !== t; e = e.parentNode) {
                if (tc(e)) return !1;
                if ($s(e)) return !0;
              }
              return !0;
            },
            rc = function(e) {
              return (
                !!tc(e) &&
                !0 !==
                  En.reduce(
                    e.getElementsByTagName("*"),
                    function(e, t) {
                      return e || $s(t);
                    },
                    !1
                  )
              );
            },
            oc = function(e) {
              return Zs(e) || rc(e);
            },
            ic = function(e, t) {
              return Qs(e) && nc(e, t);
            },
            ac = Math.round,
            uc = function(e) {
              return e
                ? {
                    left: ac(e.left),
                    top: ac(e.top),
                    bottom: ac(e.bottom),
                    right: ac(e.right),
                    width: ac(e.width),
                    height: ac(e.height)
                  }
                : { left: 0, top: 0, bottom: 0, right: 0, width: 0, height: 0 };
            },
            sc = function(e, t) {
              return (
                (e = uc(e)),
                t
                  ? (e.right = e.left)
                  : ((e.left = e.left + e.width), (e.right = e.left)),
                (e.width = 0),
                e
              );
            },
            cc = function(e, t) {
              return (
                e.left === t.left &&
                e.top === t.top &&
                e.bottom === t.bottom &&
                e.right === t.right
              );
            },
            lc = function(e, t, n) {
              return e >= 0 && e <= Math.min(t.height, n.height) / 2;
            },
            fc = function(e, t) {
              return (
                e.bottom - e.height / 2 < t.top ||
                (!(e.top > t.bottom) && lc(t.top - e.bottom, e, t))
              );
            },
            dc = function(e, t) {
              return (
                e.top > t.bottom ||
                (!(e.bottom < t.top) && lc(t.bottom - e.top, e, t))
              );
            },
            mc = function(e, t, n) {
              return t >= e.left && t <= e.right && n >= e.top && n <= e.bottom;
            },
            pc = function(e, t) {
              return t.left > e.left && t.right < e.right
                ? 0
                : t.left < e.left
                  ? t.left - e.left
                  : t.right - e.right;
            },
            gc = function(e, t) {
              return t.top > e.top && t.bottom < e.bottom
                ? 0
                : t.top < e.top
                  ? t.top - e.top
                  : t.bottom - e.bottom;
            },
            hc = function(e, t) {
              return { x: pc(e, t), y: gc(e, t) };
            },
            vc = function(e) {
              var t = e.startContainer,
                n = e.startOffset;
              return t.hasChildNodes() && e.endOffset === n + 1
                ? t.childNodes[n]
                : null;
            },
            bc = function(e, t) {
              return (
                1 === e.nodeType &&
                  e.hasChildNodes() &&
                  (t >= e.childNodes.length && (t = e.childNodes.length - 1),
                  (e = e.childNodes[t])),
                e
              );
            },
            yc = new RegExp(
              "[̀-ͯ҃-҇҈-҉֑-ֽֿׁ-ׂׄ-ׇׅؐ-ًؚ-ٰٟۖ-ۜ۟-ۤۧ-۪ۨ-ܑۭܰ-݊ަ-ް߫-߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࣣ-ंऺ़ु-ै्॑-ॗॢ-ॣঁ়াু-ৄ্ৗৢ-ৣਁ-ਂ਼ੁ-ੂੇ-ੈੋ-੍ੑੰ-ੱੵઁ-ં઼ુ-ૅે-ૈ્ૢ-ૣଁ଼ାିୁ-ୄ୍ୖୗୢ-ୣஂாீ்ௗఀా-ీె-ైొ-్ౕ-ౖౢ-ౣಁ಼ಿೂೆೌ-್ೕ-ೖೢ-ೣഁാു-ൄ്ൗൢ-ൣ්ාි-ුූෟัิ-ฺ็-๎ັິ-ູົ-ຼ່-ໍ༘-ཱ༹༙༵༷-ཾྀ-྄྆-྇ྍ-ྗྙ-ྼ࿆ိ-ူဲ-့္-်ွ-ှၘ-ၙၞ-ၠၱ-ၴႂႅ-ႆႍႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒ-ᝓᝲ-ᝳ឴-឵ិ-ួំ៉-៓៝᠋-᠍ᢩᤠ-ᤢᤧ-ᤨᤲ᤹-᤻ᨗ-ᨘᨛᩖᩘ-ᩞ᩠ᩢᩥ-ᩬᩳ-᩿᩼᪰-᪽᪾ᬀ-ᬃ᬴ᬶ-ᬺᬼᭂ᭫-᭳ᮀ-ᮁᮢ-ᮥᮨ-ᮩ᮫-ᮭ᯦ᯨ-ᯩᯭᯯ-ᯱᰬ-ᰳᰶ-᰷᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸-᳹᷀-᷵᷼-᷿‌-‍⃐-⃜⃝-⃠⃡⃢-⃤⃥-⃰⳯-⵿⳱ⷠ-〪ⷿ-〭〮-゙〯-゚꙯꙰-꙲ꙴ-꙽ꚞ-ꚟ꛰-꛱ꠂ꠆ꠋꠥ-ꠦ꣄꣠-꣱ꤦ-꤭ꥇ-ꥑꦀ-ꦂ꦳ꦶ-ꦹꦼꧥꨩ-ꨮꨱ-ꨲꨵ-ꨶꩃꩌꩼꪰꪲ-ꪴꪷ-ꪸꪾ-꪿꫁ꫬ-ꫭ꫶ꯥꯨ꯭ﬞ︀-️︠-︯ﾞ-ﾟ]"
            ),
            Cc = function(e) {
              return (
                "string" === typeof e && e.charCodeAt(0) >= 768 && yc.test(e)
              );
            },
            wc = function(e, t) {
              for (var n = [], r = 0; r < e.length; r++) {
                var o = e[r];
                if (!o.isSome()) return _.none();
                n.push(o.getOrDie());
              }
              return _.some(t.apply(null, n));
            },
            xc = Na.isElement,
            Ec = Qs,
            Sc = Na.matchStyleValues("display", "block table"),
            Nc = Na.matchStyleValues("float", "left right"),
            kc = Ss.and(xc, Ec, Ss.negate(Nc)),
            Tc = Ss.negate(
              Na.matchStyleValues("white-space", "pre pre-line pre-wrap")
            ),
            _c = Na.isText,
            Ac = Na.isBr,
            Rc = mu.nodeIndex,
            Bc = bc,
            Dc = function(e) {
              return "createRange" in e ? e.createRange() : mu.DOM.createRng();
            },
            Oc = function(e) {
              return e && /[\r\n\t ]/.test(e);
            },
            Pc = function(e) {
              return !!e.setStart && !!e.setEnd;
            },
            Ic = function(e) {
              var t,
                n = e.startContainer,
                r = e.startOffset;
              return !!(
                Oc(e.toString()) &&
                Tc(n.parentNode) &&
                Na.isText(n) &&
                ((t = n.data), Oc(t[r - 1]) || Oc(t[r + 1]))
              );
            },
            Lc = function(e) {
              var t,
                n = e.ownerDocument,
                r = Dc(n),
                o = n.createTextNode(" "),
                i = e.parentNode;
              return (
                i.insertBefore(o, e),
                r.setStart(o, 0),
                r.setEnd(o, 1),
                (t = uc(r.getBoundingClientRect())),
                i.removeChild(o),
                t
              );
            },
            Mc = function(e) {
              var t = e.startContainer,
                n = e.endContainer,
                r = e.startOffset,
                o = e.endOffset;
              if (t === n && Na.isText(n) && 0 === r && 1 === o) {
                var i = e.cloneRange();
                return i.setEndAfter(n), Uc(i);
              }
              return null;
            },
            Fc = function(e) {
              return (
                0 === e.left && 0 === e.right && 0 === e.top && 0 === e.bottom
              );
            },
            Uc = function(e) {
              var t, n;
              return (
                (n = e.getClientRects()),
                (t = n.length > 0 ? uc(n[0]) : uc(e.getBoundingClientRect())),
                !Pc(e) && Ac(e) && Fc(t) ? Lc(e) : Fc(t) && Pc(e) ? Mc(e) : t
              );
            },
            jc = function(e, t) {
              var n = sc(e, t);
              return (n.width = 1), (n.right = n.left + 1), n;
            },
            zc = function(e) {
              var t,
                n,
                r = [],
                o = function(e) {
                  0 !== e.height &&
                    ((r.length > 0 && cc(e, r[r.length - 1])) || r.push(e));
                },
                i = function(e, t) {
                  var n = Dc(e.ownerDocument);
                  if (t < e.data.length) {
                    if (Cc(e.data[t])) return r;
                    if (
                      Cc(e.data[t - 1]) &&
                      (n.setStart(e, t), n.setEnd(e, t + 1), !Ic(n))
                    )
                      return o(jc(Uc(n), !1)), r;
                  }
                  t > 0 &&
                    (n.setStart(e, t - 1),
                    n.setEnd(e, t),
                    Ic(n) || o(jc(Uc(n), !1))),
                    t < e.data.length &&
                      (n.setStart(e, t),
                      n.setEnd(e, t + 1),
                      Ic(n) || o(jc(Uc(n), !0)));
                };
              if (_c(e.container())) return i(e.container(), e.offset()), r;
              if (xc(e.container()))
                if (e.isAtEnd())
                  (n = Bc(e.container(), e.offset())),
                    _c(n) && i(n, n.data.length),
                    kc(n) && !Ac(n) && o(jc(Uc(n), !1));
                else {
                  if (
                    ((n = Bc(e.container(), e.offset())),
                    _c(n) && i(n, 0),
                    kc(n) && e.isAtEnd())
                  )
                    return o(jc(Uc(n), !1)), r;
                  (t = Bc(e.container(), e.offset() - 1)),
                    kc(t) &&
                      !Ac(t) &&
                      (Sc(t) || Sc(n) || !kc(n)) &&
                      o(jc(Uc(t), !1)),
                    kc(n) && o(jc(Uc(n), !0));
                }
              return r;
            };
          function Vc(e, t, n) {
            var r = function() {
                return _c(e), 0 === t;
              },
              o = function() {
                return _c(e) ? t >= e.data.length : t >= e.childNodes.length;
              },
              i = function() {
                var n;
                return (
                  (n = Dc(e.ownerDocument)), n.setStart(e, t), n.setEnd(e, t), n
                );
              },
              a = function() {
                return n || (n = zc(Vc(e, t))), n;
              },
              u = function() {
                return a().length > 0;
              },
              s = function(n) {
                return n && e === n.container() && t === n.offset();
              },
              c = function(n) {
                return Bc(e, n ? t - 1 : t);
              };
            return {
              container: Ss.constant(e),
              offset: Ss.constant(t),
              toRange: i,
              getClientRects: a,
              isVisible: u,
              isAtStart: r,
              isAtEnd: o,
              isEqual: s,
              getNode: c
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
                return e(t.parentNode, Rc(t) + 1);
              }),
              (e.before = function(t) {
                return e(t.parentNode, Rc(t));
              }),
              (e.isAbove = function(e, t) {
                return wc(
                  [ue(t.getClientRects()), se(e.getClientRects())],
                  fc
                ).getOr(!1);
              }),
              (e.isBelow = function(e, t) {
                return wc(
                  [se(t.getClientRects()), ue(e.getClientRects())],
                  dc
                ).getOr(!1);
              }),
              (e.isAtStart = function(e) {
                return !!e && e.isAtStart();
              }),
              (e.isAtEnd = function(e) {
                return !!e && e.isAtEnd();
              }),
              (e.isTextPosition = function(e) {
                return !!e && Na.isText(e.container());
              }),
              (e.isElementPosition = function(t) {
                return !1 === e.isTextPosition(t);
              });
          })(Vc || (Vc = {}));
          var Hc,
            qc = Vc,
            $c = Na.isText,
            Wc = Na.isBogus,
            Yc = mu.nodeIndex,
            Gc = function(e) {
              var t = e.parentNode;
              return Wc(t) ? Gc(t) : t;
            },
            Xc = function(e) {
              return e
                ? En.reduce(
                    e.childNodes,
                    function(e, t) {
                      return (
                        Wc(t) && "BR" !== t.nodeName
                          ? (e = e.concat(Xc(t)))
                          : e.push(t),
                        e
                      );
                    },
                    []
                  )
                : [];
            },
            Zc = function(e, t) {
              while ((e = e.previousSibling)) {
                if (!$c(e)) break;
                t += e.data.length;
              }
              return t;
            },
            Kc = function(e) {
              return function(t) {
                return e === t;
              };
            },
            Jc = function(e) {
              var t, n, r;
              return (
                (t = Xc(Gc(e))),
                (n = En.findIndex(t, Kc(e), e)),
                (t = t.slice(0, n + 1)),
                (r = En.reduce(
                  t,
                  function(e, n, r) {
                    return $c(n) && $c(t[r - 1]) && e++, e;
                  },
                  0
                )),
                (t = En.filter(t, Na.matchNodeNames(e.nodeName))),
                (n = En.findIndex(t, Kc(e), e)),
                n - r
              );
            },
            Qc = function(e) {
              var t;
              return (
                (t = $c(e) ? "text()" : e.nodeName.toLowerCase()),
                t + "[" + Jc(e) + "]"
              );
            },
            el = function(e, t, n) {
              var r = [];
              for (t = t.parentNode; t !== e; t = t.parentNode) {
                if (n && n(t)) break;
                r.push(t);
              }
              return r;
            },
            tl = function(e, t) {
              var n,
                r,
                o,
                i,
                a,
                u = [];
              return (
                (n = t.container()),
                (r = t.offset()),
                $c(n)
                  ? (o = Zc(n, r))
                  : ((i = n.childNodes),
                    r >= i.length
                      ? ((o = "after"), (r = i.length - 1))
                      : (o = "before"),
                    (n = i[r])),
                u.push(Qc(n)),
                (a = el(e, n)),
                (a = En.filter(a, Ss.negate(Na.isBogus))),
                (u = u.concat(
                  En.map(a, function(e) {
                    return Qc(e);
                  })
                )),
                u.reverse().join("/") + "," + o
              );
            },
            nl = function(e, t, n) {
              var r = Xc(e);
              return (
                (r = En.filter(r, function(e, t) {
                  return !$c(e) || !$c(r[t - 1]);
                })),
                (r = En.filter(r, Na.matchNodeNames(t))),
                r[n]
              );
            },
            rl = function(e, t) {
              var n,
                r = e,
                o = 0;
              while ($c(r)) {
                if (((n = r.data.length), t >= o && t <= o + n)) {
                  (e = r), (t -= o);
                  break;
                }
                if (!$c(r.nextSibling)) {
                  (e = r), (t = n);
                  break;
                }
                (o += n), (r = r.nextSibling);
              }
              return (
                $c(e) && t > e.data.length && (t = e.data.length), qc(e, t)
              );
            },
            ol = function(e, t) {
              var n, r, o;
              return t
                ? ((n = t.split(",")),
                  (t = n[0].split("/")),
                  (o = n.length > 1 ? n[1] : "before"),
                  (r = En.reduce(
                    t,
                    function(e, t) {
                      return (
                        (t = /([\w\-\(\)]+)\[([0-9]+)\]/.exec(t)),
                        t
                          ? ("text()" === t[1] && (t[1] = "#text"),
                            nl(e, t[1], parseInt(t[2], 10)))
                          : null
                      );
                    },
                    e
                  )),
                  r
                    ? $c(r)
                      ? rl(r, parseInt(o, 10))
                      : ((o = "after" === o ? Yc(r) + 1 : Yc(r)),
                        qc(r.parentNode, o))
                    : null)
                : null;
            },
            il = Na.isContentEditableFalse,
            al = function(e, t, n) {
              var r, o;
              for (
                o = e(t.data.slice(0, n)).length, r = t.previousSibling;
                r && Na.isText(r);
                r = r.previousSibling
              )
                o += e(r.data).length;
              return o;
            },
            ul = function(e, t, n, r, o) {
              var i,
                a = r[o ? "startContainer" : "endContainer"],
                u = r[o ? "startOffset" : "endOffset"],
                s = [],
                c = 0,
                l = e.getRoot();
              for (
                Na.isText(a)
                  ? s.push(n ? al(t, a, u) : u)
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
            sl = function(e, t, n, r) {
              var o = t.dom,
                i = {};
              return (
                (i.start = ul(o, e, n, r, !0)),
                t.isCollapsed() || (i.end = ul(o, e, n, r, !1)),
                i
              );
            },
            cl = function(e) {
              Na.isText(e) &&
                0 === e.data.length &&
                e.parentNode.removeChild(e);
            },
            ll = function(e, t, n) {
              var r = 0;
              return (
                Ln.each(e.select(t), function(e) {
                  if ("all" !== e.getAttribute("data-mce-bogus"))
                    return e !== n && void r++;
                }),
                r
              );
            },
            fl = function(e, t) {
              var n,
                r,
                o,
                i = t ? "start" : "end";
              (n = e[i + "Container"]),
                (r = e[i + "Offset"]),
                Na.isElement(n) &&
                  "TR" === n.nodeName &&
                  ((o = n.childNodes),
                  (n = o[Math.min(t ? r : r - 1, o.length - 1)]),
                  n &&
                    ((r = t ? 0 : n.childNodes.length),
                    e["set" + (t ? "Start" : "End")](n, r)));
            },
            dl = function(e) {
              return fl(e, !0), fl(e, !1), e;
            },
            ml = function(e, t) {
              var n;
              if (Na.isElement(e) && ((e = bc(e, t)), il(e))) return e;
              if (Os(e)) {
                if (
                  (Na.isText(e) && Bs(e) && (e = e.parentNode),
                  (n = e.previousSibling),
                  il(n))
                )
                  return n;
                if (((n = e.nextSibling), il(n))) return n;
              }
            },
            pl = function(e) {
              return (
                ml(e.startContainer, e.startOffset) ||
                ml(e.endContainer, e.endOffset)
              );
            },
            gl = function(e, t, n) {
              var r = n.getNode(),
                o = r ? r.nodeName : null,
                i = n.getRng();
              if (il(r) || "IMG" === o)
                return { name: o, index: ll(n.dom, o, r) };
              var a = pl(i);
              return a
                ? ((o = a.tagName), { name: o, index: ll(n.dom, o, a) })
                : sl(e, n, t, i);
            },
            hl = function(e) {
              var t = e.getRng();
              return {
                start: tl(e.dom.getRoot(), qc.fromRangeStart(t)),
                end: tl(e.dom.getRoot(), qc.fromRangeEnd(t))
              };
            },
            vl = function(e) {
              return { rng: e.getRng() };
            },
            bl = function(e, t, n) {
              var r = {
                "data-mce-type": "bookmark",
                id: t,
                style: "overflow:hidden;line-height:0px"
              };
              return n ? e.create("span", r, "&#xFEFF;") : e.create("span", r);
            },
            yl = function(e, t) {
              var n = e.dom,
                r = e.getRng(),
                o = n.uniqueId(),
                i = e.isCollapsed(),
                a = e.getNode(),
                u = a.nodeName;
              if ("IMG" === u) return { name: u, index: ll(n, u, a) };
              var s = dl(r.cloneRange());
              if (!i) {
                s.collapse(!1);
                var c = bl(n, o + "_end", t);
                s.insertNode(c), cl(c.nextSibling);
              }
              (r = dl(r)), r.collapse(!0);
              var l = bl(n, o + "_start", t);
              return (
                r.insertNode(l),
                cl(l.previousSibling),
                cl(l.nextSibling),
                e.moveToBookmark({ id: o, keep: 1 }),
                { id: o }
              );
            },
            Cl = function(e, t, n) {
              return 2 === t
                ? gl(_s.trim, n, e)
                : 3 === t
                  ? hl(e)
                  : t
                    ? vl(e)
                    : yl(e, !1);
            },
            wl = {
              getBookmark: Cl,
              getUndoBookmark: b(gl, v, !0),
              getPersistentBookmark: yl
            },
            xl = "_mce_caret",
            El = function(e) {
              return Na.isElement(e) && e.id === xl;
            },
            Sl = function(e, t) {
              while (t && t !== e) {
                if (t.id === xl) return t;
                t = t.parentNode;
              }
              return null;
            },
            Nl = Na.isElement,
            kl = Na.isText,
            Tl = function(e) {
              var t = e.parentNode;
              t && t.removeChild(e);
            },
            _l = function(e) {
              try {
                return e.nodeValue;
              } catch (t) {
                return "";
              }
            },
            Al = function(e, t) {
              0 === t.length ? Tl(e) : (e.nodeValue = t);
            },
            Rl = function(e) {
              var t = _s.trim(e);
              return { count: e.length - t.length, text: t };
            },
            Bl = function(e, t) {
              return Ml(e), t;
            },
            Dl = function(e, t) {
              var n = Rl(e.data.substr(0, t.offset())),
                r = Rl(e.data.substr(t.offset())),
                o = n.text + r.text;
              return o.length > 0 ? (Al(e, o), qc(e, t.offset() - n.count)) : t;
            },
            Ol = function(e, t) {
              var n = t.container(),
                r = U(ce(n.childNodes), e)
                  .map(function(e) {
                    return e < t.offset() ? qc(n, t.offset() - 1) : t;
                  })
                  .getOr(t);
              return Ml(e), r;
            },
            Pl = function(e, t) {
              return kl(e) && t.container() === e ? Dl(e, t) : Bl(e, t);
            },
            Il = function(e, t) {
              return t.container() === e.parentNode ? Ol(e, t) : Bl(e, t);
            },
            Ll = function(e, t) {
              return qc.isTextPosition(t) ? Pl(e, t) : Il(e, t);
            },
            Ml = function(e) {
              if (
                (Nl(e) &&
                  Os(e) &&
                  (Ps(e) ? e.removeAttribute("data-mce-caret") : Tl(e)),
                kl(e))
              ) {
                var t = _s.trim(_l(e));
                Al(e, t);
              }
            },
            Fl = { removeAndReposition: Ll, remove: Ml },
            Ul = Na.isContentEditableTrue,
            jl = Na.isContentEditableFalse,
            zl = function(e, t, n, r, o) {
              return t._selectionOverrides.showCaret(e, n, r, o);
            },
            Vl = function(e) {
              var t = e.ownerDocument.createRange();
              return t.selectNode(e), t;
            },
            Hl = function(e, t) {
              var n = e.fire("BeforeObjectSelected", { target: t });
              return n.isDefaultPrevented() ? null : Vl(t);
            },
            ql = function(e, t, n) {
              var r = tm(1, e.getBody(), t),
                o = qc.fromRangeStart(r),
                i = o.getNode();
              if (jl(i)) return zl(1, e, i, !o.isAtEnd(), !1);
              var a = o.getNode(!0);
              if (jl(a)) return zl(1, e, a, !1, !1);
              var u = e.dom.getParent(o.getNode(), function(e) {
                return jl(e) || Ul(e);
              });
              return jl(u) ? zl(1, e, u, !1, n) : null;
            },
            $l = function(e, t, n) {
              if (!t || !t.collapsed) return t;
              var r = ql(e, t, n);
              return r || t;
            };
          (function(e) {
            (e[(e["Backwards"] = -1)] = "Backwards"),
              (e[(e["Forwards"] = 1)] = "Forwards");
          })(Hc || (Hc = {}));
          var Wl,
            Yl = Na.isContentEditableFalse,
            Gl = Na.isText,
            Xl = Na.isElement,
            Zl = Na.isBr,
            Kl = Qs,
            Jl = oc,
            Ql = ic,
            ef = function(e, t) {
              var n = [];
              while (e && e !== t) n.push(e), (e = e.parentNode);
              return n;
            },
            tf = function(e, t) {
              return e.hasChildNodes() && t < e.childNodes.length
                ? e.childNodes[t]
                : null;
            },
            nf = function(e, t) {
              if (Hd(e)) {
                if (Kl(t.previousSibling) && !Gl(t.previousSibling))
                  return qc.before(t);
                if (Gl(t)) return qc(t, 0);
              }
              if (qd(e)) {
                if (Kl(t.nextSibling) && !Gl(t.nextSibling)) return qc.after(t);
                if (Gl(t)) return qc(t, t.data.length);
              }
              return qd(e)
                ? Zl(t)
                  ? qc.before(t)
                  : qc.after(t)
                : qc.before(t);
            },
            rf = function(e, t) {
              var n;
              return (
                !!Na.isBr(e) &&
                (!oc(e.nextSibling) &&
                  ((n = of(Hc.Forwards, qc.after(e), t)),
                  !!n && !Gd(qc.before(e), qc.before(n), t)))
              );
            },
            of = function(e, t, n) {
              var r, o, i, a, u;
              if (!Xl(n) || !t) return null;
              if (t.isEqual(qc.after(n)) && n.lastChild) {
                if (
                  ((u = qc.after(n.lastChild)),
                  qd(e) && Kl(n.lastChild) && Xl(n.lastChild))
                )
                  return Zl(n.lastChild) ? qc.before(n.lastChild) : u;
              } else u = t;
              var s = u.container(),
                c = u.offset();
              if (Gl(s)) {
                if (qd(e) && c > 0) return qc(s, --c);
                if (Hd(e) && c < s.length) return qc(s, ++c);
                r = s;
              } else {
                if (qd(e) && c > 0 && ((o = tf(s, c - 1)), Kl(o)))
                  return !Jl(o) && ((i = Wd(o, e, Ql, o)), i)
                    ? Gl(i)
                      ? qc(i, i.data.length)
                      : qc.after(i)
                    : Gl(o)
                      ? qc(o, o.data.length)
                      : qc.before(o);
                if (Hd(e) && c < s.childNodes.length && ((o = tf(s, c)), Kl(o)))
                  return Zl(o) && n.lastChild === o
                    ? null
                    : rf(o, n)
                      ? of(e, qc.after(o), n)
                      : !Jl(o) && ((i = Wd(o, e, Ql, o)), i)
                        ? Gl(i)
                          ? qc(i, 0)
                          : qc.before(i)
                        : Gl(o)
                          ? qc(o, 0)
                          : qc.after(o);
                r = o || u.getNode();
              }
              return ((Hd(e) && u.isAtEnd()) || (qd(e) && u.isAtStart())) &&
                ((r = Wd(r, e, Ss.constant(!0), n, !0)), Ql(r, n))
                ? nf(e, r)
                : ((o = Wd(r, e, Ql, n)),
                  (a = En.last(En.filter(ef(s, n), Yl))),
                  !a || (o && a.contains(o))
                    ? o
                      ? nf(e, o)
                      : null
                    : ((u = Hd(e) ? qc.after(a) : qc.before(a)), u));
            },
            af = function(e) {
              return {
                next: function(t) {
                  return of(Hc.Forwards, t, e);
                },
                prev: function(t) {
                  return of(Hc.Backwards, t, e);
                }
              };
            };
          (function(e) {
            (e[(e["Br"] = 0)] = "Br"),
              (e[(e["Block"] = 1)] = "Block"),
              (e[(e["Wrap"] = 2)] = "Wrap"),
              (e[(e["Eol"] = 3)] = "Eol");
          })(Wl || (Wl = {}));
          var uf = function(e, t) {
              return e === Hc.Backwards ? t.reverse() : t;
            },
            sf = function(e, t, n) {
              return e === Hc.Forwards ? t.next(n) : t.prev(n);
            },
            cf = function(e, t, n, r) {
              return Na.isBr(r.getNode(t === Hc.Forwards))
                ? Wl.Br
                : !1 === Gd(n, r)
                  ? Wl.Block
                  : Wl.Wrap;
            },
            lf = function(e, t, n, r) {
              var o,
                i = af(n),
                a = r,
                u = [];
              while (a) {
                if (((o = sf(t, i, a)), !o)) break;
                if (Na.isBr(o.getNode(!1)))
                  return t === Hc.Forwards
                    ? {
                        positions: uf(t, u).concat([o]),
                        breakType: Wl.Br,
                        breakAt: _.some(o)
                      }
                    : {
                        positions: uf(t, u),
                        breakType: Wl.Br,
                        breakAt: _.some(o)
                      };
                if (o.isVisible()) {
                  if (e(a, o)) {
                    var s = cf(n, t, a, o);
                    return {
                      positions: uf(t, u),
                      breakType: s,
                      breakAt: _.some(o)
                    };
                  }
                  u.push(o), (a = o);
                } else a = o;
              }
              return {
                positions: uf(t, u),
                breakType: Wl.Eol,
                breakAt: _.none()
              };
            },
            ff = function(e, t, n, r) {
              return t(n, r)
                .breakAt.map(function(r) {
                  var o = t(n, r).positions;
                  return e === Hc.Backwards ? o.concat(r) : [r].concat(o);
                })
                .getOr([]);
            },
            df = function(e, t) {
              return G(
                e,
                function(e, n) {
                  return e.fold(
                    function() {
                      return _.some(n);
                    },
                    function(r) {
                      return wc(
                        [ue(r.getClientRects()), ue(n.getClientRects())],
                        function(e, o) {
                          var i = Math.abs(t - e.left),
                            a = Math.abs(t - o.left);
                          return a <= i ? n : r;
                        }
                      ).or(e);
                    }
                  );
                },
                _.none()
              );
            },
            mf = function(e, t) {
              return ue(t.getClientRects()).bind(function(t) {
                return df(e, t.left);
              });
            },
            pf = b(lf, Vc.isAbove, -1),
            gf = b(lf, Vc.isBelow, 1),
            hf = b(ff, -1, pf),
            vf = b(ff, 1, gf),
            bf = function(e) {
              return Cm.firstPositionIn(e)
                .map(function(t) {
                  return [t].concat(gf(e, t).positions);
                })
                .getOr([]);
            },
            yf = function(e) {
              return Cm.lastPositionIn(e)
                .map(function(t) {
                  return pf(e, t).positions.concat(t);
                })
                .getOr([]);
            },
            Cf = function(e, t) {
              return {
                left: e.left - t,
                top: e.top - t,
                right: e.right + 2 * t,
                bottom: e.bottom + 2 * t,
                width: e.width + t,
                height: e.height + t
              };
            },
            wf = function(e, t) {
              return ee(t, function(t) {
                var n = Cf(uc(t.getBoundingClientRect()), -1);
                return [
                  { x: n.left, y: e(n), cell: t },
                  { x: n.right, y: e(n), cell: t }
                ];
              });
            },
            xf = function(e, t, n) {
              return G(
                e,
                function(e, r) {
                  return e.fold(
                    function() {
                      return _.some(r);
                    },
                    function(e) {
                      var o = Math.sqrt(Math.abs(e.x - t) + Math.abs(e.y - n)),
                        i = Math.sqrt(Math.abs(r.x - t) + Math.abs(r.y - n));
                      return _.some(i < o ? r : e);
                    }
                  );
                },
                _.none()
              );
            },
            Ef = function(e, t, n, r, o) {
              var i = qu(lo.fromDom(n), "td,th,caption").map(function(e) {
                  return e.dom();
                }),
                a = W(wf(e, i), function(e) {
                  return t(e, o);
                });
              return xf(a, r, o).map(function(e) {
                return e.cell;
              });
            },
            Sf = function(e) {
              return e.bottom;
            },
            Nf = function(e) {
              return e.top;
            },
            kf = function(e, t) {
              return e.y < t;
            },
            Tf = function(e, t) {
              return e.y > t;
            },
            _f = b(Ef, Sf, kf),
            Af = b(Ef, Nf, Tf),
            Rf = function(e, t) {
              return ue(t.getClientRects())
                .bind(function(t) {
                  return _f(e, t.left, t.top);
                })
                .bind(function(e) {
                  return mf(yf(e), t);
                });
            },
            Bf = function(e, t) {
              return se(t.getClientRects())
                .bind(function(t) {
                  return Af(e, t.left, t.top);
                })
                .bind(function(e) {
                  return mf(bf(e), t);
                });
            },
            Df = function(e) {
              var t = 0,
                n = 0,
                r = e;
              while (r && r.nodeType)
                (t += r.offsetLeft || 0),
                  (n += r.offsetTop || 0),
                  (r = r.offsetParent);
              return { x: t, y: n };
            },
            Of = function(e, t, n) {
              var r = { elm: t, alignToTop: n };
              return e.fire("scrollIntoView", r), r.isDefaultPrevented();
            },
            Pf = function(e, t, n) {
              var r,
                o,
                i,
                a,
                u = e.dom,
                s = u.getRoot(),
                c = 0;
              if (!Of(e, t, n) && Na.isElement(t)) {
                if ((!1 === n && (c = t.offsetHeight), "BODY" !== s.nodeName)) {
                  var l = e.selection.getScrollContainer();
                  if (l)
                    return (
                      (r = Df(t).y - Df(l).y + c),
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
            If = function(e) {
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
            Lf = function(e, t, n) {
              e.inline
                ? ((e.getBody().scrollLeft += t), (e.getBody().scrollTop += n))
                : e.getWin().scrollBy(t, n);
            },
            Mf = function(e, t) {
              ue(Vc.fromRangeStart(t).getClientRects()).each(function(t) {
                var n = If(e),
                  r = hc(n, t),
                  o = 4,
                  i = r.x > 0 ? r.x + o : r.x - o,
                  a = r.y > 0 ? r.y + o : r.y - o;
                Lf(e, 0 !== r.x ? i : 0, 0 !== r.y ? a : 0);
              });
            },
            Ff = { scrollElementIntoView: Pf, scrollRangeIntoView: Mf },
            Uf = function(e, t, n) {
              var r = e.getParam(t, n);
              if (-1 !== r.indexOf("=")) {
                var o = e.getParam(t, "", "hash");
                return o.hasOwnProperty(e.id) ? o[e.id] : n;
              }
              return r;
            },
            jf = function(e) {
              return e.getParam("iframe_attrs", {});
            },
            zf = function(e) {
              return e.getParam("doctype", "<!DOCTYPE html>");
            },
            Vf = function(e) {
              return e.getParam("document_base_url", "");
            },
            Hf = function(e) {
              return Uf(e, "body_id", "tinymce");
            },
            qf = function(e) {
              return Uf(e, "body_class", "");
            },
            $f = function(e) {
              return e.getParam("content_security_policy", "");
            },
            Wf = function(e) {
              return e.getParam("br_in_pre", !0);
            },
            Yf = function(e) {
              if (e.getParam("force_p_newlines", !1)) return "p";
              var t = e.getParam("forced_root_block", "p");
              return !1 === t ? "" : t;
            },
            Gf = function(e) {
              return e.getParam("forced_root_block_attrs", {});
            },
            Xf = function(e) {
              return e.getParam(
                "br_newline_selector",
                ".mce-toc h2,figcaption,caption"
              );
            },
            Zf = function(e) {
              return e.getParam("no_newline_selector", "");
            },
            Kf = function(e) {
              return e.getParam("keep_styles", !0);
            },
            Jf = function(e) {
              return e.getParam("end_container_on_empty_block", !1);
            },
            Qf = function(e) {
              return Ln.explode(e.getParam("font_size_style_values", ""));
            },
            ed = function(e) {
              return Ln.explode(e.getParam("font_size_classes", ""));
            },
            td = function(e) {
              return e.getParam("images_dataimg_filter", h(!0), "function");
            },
            nd = function(e) {
              return e.getParam("automatic_uploads", !0, "boolean");
            },
            rd = function(e) {
              return e.getParam("images_reuse_filename", !1, "boolean");
            },
            od = function(e) {
              return e.getParam("images_replace_blob_uris", !0, "boolean");
            },
            id = function(e) {
              return e.getParam("images_upload_url", "", "string");
            },
            ad = function(e) {
              return e.getParam("images_upload_base_path", "", "string");
            },
            ud = function(e) {
              return e.getParam("images_upload_credentials", !1, "boolean");
            },
            sd = function(e) {
              return e.getParam("images_upload_handler", null, "function");
            },
            cd = function(e) {
              return e.getParam("content_css_cors", !1, "boolean");
            },
            ld = {
              getIframeAttrs: jf,
              getDocType: zf,
              getDocumentBaseUrl: Vf,
              getBodyId: Hf,
              getBodyClass: qf,
              getContentSecurityPolicy: $f,
              shouldPutBrInPre: Wf,
              getForcedRootBlock: Yf,
              getForcedRootBlockAttrs: Gf,
              getBrNewLineSelector: Xf,
              getNoNewLineSelector: Zf,
              shouldKeepStyles: Kf,
              shouldEndContainerOnEmptyBlock: Jf,
              getFontStyleValues: Qf,
              getFontSizeClasses: ed,
              getImagesDataImgFilter: td,
              isAutomaticUploadsEnabled: nd,
              shouldReuseFileName: rd,
              shouldReplaceBlobUris: od,
              getImageUploadUrl: id,
              getImageUploadBasePath: ad,
              getImagesUploadCredentials: ud,
              getImagesUploadHandler: sd,
              shouldUseContentCssCors: cd
            },
            fd = oo.detect().browser,
            dd = function() {
              return fd.isIE() || fd.isEdge() || fd.isFirefox();
            },
            md = function(e, t) {
              e.selection.setRng(t), Ff.scrollRangeIntoView(e, t);
            },
            pd = function(e, t, n) {
              return n.breakAt
                .map(function(n) {
                  return e(t, n).breakAt.isSome();
                })
                .getOr(!1);
            },
            gd = function(e) {
              return e.breakType === Wl.Wrap && 0 === e.positions.length;
            },
            hd = function(e) {
              return e.breakType === Wl.Br && 1 === e.positions.length;
            },
            vd = function(e, t, n) {
              var r = e(t, n);
              return gd(r) || (!Na.isBr(n.getNode()) && hd(r))
                ? !pd(e, t, r)
                : r.breakAt.isNone();
            },
            bd = Ss.curry(vd, pf),
            yd = Ss.curry(vd, gf),
            Cd = function(e, t, n) {
              var r = qc.fromRangeStart(t);
              return Cm.positionIn(!e, n)
                .map(function(e) {
                  return e.isEqual(r);
                })
                .getOr(!1);
            },
            wd = function(e, t, n, r) {
              var o = e.selection.getRng(),
                i = t ? 1 : -1;
              if (dd() && Cd(t, o, n)) {
                var a = zl(i, e, n, !t, !0);
                return md(e, a), !0;
              }
              return !1;
            },
            xd = function(e, t, n) {
              return Rf(t, n)
                .orThunk(function() {
                  return ue(n.getClientRects()).bind(function(n) {
                    return df(hf(e, qc.before(t)), n.left);
                  });
                })
                .getOr(qc.before(t));
            },
            Ed = function(e, t, n) {
              return Bf(t, n)
                .orThunk(function() {
                  return ue(n.getClientRects()).bind(function(n) {
                    return df(vf(e, qc.after(t)), n.left);
                  });
                })
                .getOr(qc.after(t));
            },
            Sd = function(e, t) {
              var n = t.getNode(e);
              return Na.isElement(n) && "TABLE" === n.nodeName
                ? _.some(n)
                : _.none();
            },
            Nd = function(e, t, n, r) {
              var o = ld.getForcedRootBlock(t);
              o
                ? t.undoManager.transact(function() {
                    var r = lo.fromTag(o);
                    Ao(r, ld.getForcedRootBlockAttrs(t)),
                      Eu(r, lo.fromTag("br")),
                      e ? xu(lo.fromDom(n), r) : wu(lo.fromDom(n), r);
                    var i = t.dom.createRng();
                    i.setStart(r.dom(), 0), i.setEnd(r.dom(), 0), md(t, i);
                  })
                : md(t, r.toRange());
            },
            kd = function(e, t, n) {
              var r = Sd(!!t, n),
                o = !1 === t;
              r.fold(
                function() {
                  return md(e, n.toRange());
                },
                function(r) {
                  return Cm.positionIn(o, e.getBody())
                    .filter(function(e) {
                      return e.isEqual(n);
                    })
                    .fold(
                      function() {
                        return md(e, n.toRange());
                      },
                      function(o) {
                        return Nd(t, e, r, n);
                      }
                    );
                }
              );
            },
            Td = function(e, t, n, r) {
              var o = e.selection.getRng(),
                i = qc.fromRangeStart(o),
                a = e.getBody();
              if (!t && bd(r, i)) {
                var u = xd(a, n, i);
                return kd(e, t, u), !0;
              }
              if (t && yd(r, i)) {
                u = Ed(a, n, i);
                return kd(e, t, u), !0;
              }
              return !1;
            },
            _d = function(e, t) {
              return function() {
                return _.from(e.dom.getParent(e.selection.getNode(), "td,th"))
                  .bind(function(n) {
                    return _.from(e.dom.getParent(n, "table")).map(function(r) {
                      return wd(e, t, r, n);
                    });
                  })
                  .getOr(!1);
              };
            },
            Ad = function(e, t) {
              return function() {
                return _.from(e.dom.getParent(e.selection.getNode(), "td,th"))
                  .bind(function(n) {
                    return _.from(e.dom.getParent(n, "table")).map(function(r) {
                      return Td(e, t, r, n);
                    });
                  })
                  .getOr(!1);
              };
            },
            Rd = Na.isContentEditableFalse,
            Bd = function(e) {
              return Na.isElement(e) && /^(TD|TH)$/i.test(e.tagName);
            },
            Dd = function(e, t, n) {
              var r,
                o,
                i,
                a,
                u,
                s = sc(t.getBoundingClientRect(), n);
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
            Od = function(e) {
              var t, n, r, o, i;
              for (
                t = nr("*[contentEditable=false]", e), o = 0;
                o < t.length;
                o++
              )
                (n = t[o]),
                  (r = n.previousSibling),
                  zs(r) &&
                    ((i = r.data),
                    1 === i.length
                      ? r.parentNode.removeChild(r)
                      : r.deleteData(i.length - 1, 1)),
                  (r = n.nextSibling),
                  js(r) &&
                    ((i = r.data),
                    1 === i.length
                      ? r.parentNode.removeChild(r)
                      : r.deleteData(0, 1));
            },
            Pd = function(e, t, n) {
              var r,
                o,
                i = Du(_.none()),
                a = function(n, r) {
                  var a, c;
                  if ((u(), Bd(r))) return null;
                  if (!t(r))
                    return (
                      (o = Is(r, n)),
                      (c = r.ownerDocument.createRange()),
                      Rd(o.nextSibling)
                        ? (c.setStart(o, 0), c.setEnd(o, 0))
                        : (c.setStart(o, 1), c.setEnd(o, 1)),
                      c
                    );
                  (o = Us("p", r, n)),
                    (a = Dd(e, r, n)),
                    nr(o).css("top", a.top);
                  var l = nr(
                    '<div class="mce-visual-caret" data-mce-bogus="all"></div>'
                  )
                    .css(a)
                    .appendTo(e)[0];
                  return (
                    i.set(_.some({ caret: l, element: r, before: n })),
                    i.get().each(function(e) {
                      n && nr(e.caret).addClass("mce-visual-caret-before");
                    }),
                    s(),
                    (c = r.ownerDocument.createRange()),
                    c.setStart(o, 0),
                    c.setEnd(o, 0),
                    c
                  );
                },
                u = function() {
                  Od(e),
                    o && (Fl.remove(o), (o = null)),
                    i.get().each(function(e) {
                      nr(e.caret).remove(), i.set(_.none());
                    }),
                    clearInterval(r);
                },
                s = function() {
                  r = Pe.setInterval(function() {
                    n()
                      ? nr("div.mce-visual-caret", e).toggleClass(
                          "mce-visual-caret-hidden"
                        )
                      : nr("div.mce-visual-caret", e).addClass(
                          "mce-visual-caret-hidden"
                        );
                  }, 500);
                },
                c = function() {
                  i.get().each(function(t) {
                    var n = Dd(e, t.element, t.before);
                    nr(t.caret).css(n);
                  });
                },
                l = function() {
                  return Pe.clearInterval(r);
                },
                f = function() {
                  return ".mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}";
                };
              return { show: a, hide: u, getCss: f, reposition: c, destroy: l };
            },
            Id = function(e) {
              return Rd(e) || (Na.isTable(e) && dd());
            },
            Ld = Na.isContentEditableFalse,
            Md = Na.matchStyleValues(
              "display",
              "block table table-cell table-caption list-item"
            ),
            Fd = Os,
            Ud = Bs,
            jd = Ss.curry,
            zd = Na.isElement,
            Vd = Qs,
            Hd = function(e) {
              return e > 0;
            },
            qd = function(e) {
              return e < 0;
            },
            $d = function(e, t) {
              var n;
              while ((n = e(t))) if (!Ud(n)) return n;
              return null;
            },
            Wd = function(e, t, n, r, o) {
              var i = new Mi(e, r);
              if (qd(t)) {
                if ((Ld(e) || Ud(e)) && ((e = $d(i.prev, !0)), n(e))) return e;
                while ((e = $d(i.prev, o))) if (n(e)) return e;
              }
              if (Hd(t)) {
                if ((Ld(e) || Ud(e)) && ((e = $d(i.next, !0)), n(e))) return e;
                while ((e = $d(i.next, o))) if (n(e)) return e;
              }
              return null;
            },
            Yd = function(e, t) {
              while (e && e !== t) {
                if (Md(e)) return e;
                e = e.parentNode;
              }
              return null;
            },
            Gd = function(e, t, n) {
              return Yd(e.container(), n) === Yd(t.container(), n);
            },
            Xd = function(e, t) {
              var n, r;
              return t
                ? ((n = t.container()),
                  (r = t.offset()),
                  zd(n) ? n.childNodes[r + e] : null)
                : null;
            },
            Zd = function(e, t) {
              var n = t.ownerDocument.createRange();
              return (
                e
                  ? (n.setStartBefore(t), n.setEndBefore(t))
                  : (n.setStartAfter(t), n.setEndAfter(t)),
                n
              );
            },
            Kd = function(e, t, n) {
              return Yd(t, e) === Yd(n, e);
            },
            Jd = function(e, t, n) {
              var r, o;
              o = e ? "previousSibling" : "nextSibling";
              while (n && n !== t) {
                if (((r = n[o]), Fd(r) && (r = r[o]), Ld(r))) {
                  if (Kd(t, r, n)) return r;
                  break;
                }
                if (Vd(r)) break;
                n = n.parentNode;
              }
              return null;
            },
            Qd = jd(Zd, !0),
            em = jd(Zd, !1),
            tm = function(e, t, n) {
              var r,
                o,
                i,
                a,
                u = jd(Jd, !0, t),
                s = jd(Jd, !1, t);
              if (((o = n.startContainer), (i = n.startOffset), Bs(o))) {
                if (
                  (zd(o) || (o = o.parentNode),
                  (a = o.getAttribute("data-mce-caret")),
                  "before" === a && ((r = o.nextSibling), Id(r)))
                )
                  return Qd(r);
                if ("after" === a && ((r = o.previousSibling), Id(r)))
                  return em(r);
              }
              if (!n.collapsed) return n;
              if (Na.isText(o)) {
                if (Fd(o)) {
                  if (1 === e) {
                    if (((r = s(o)), r)) return Qd(r);
                    if (((r = u(o)), r)) return em(r);
                  }
                  if (-1 === e) {
                    if (((r = u(o)), r)) return em(r);
                    if (((r = s(o)), r)) return Qd(r);
                  }
                  return n;
                }
                if (zs(o) && i >= o.data.length - 1)
                  return 1 === e && ((r = s(o)), r) ? Qd(r) : n;
                if (js(o) && i <= 1)
                  return -1 === e && ((r = u(o)), r) ? em(r) : n;
                if (i === o.data.length) return (r = s(o)), r ? Qd(r) : n;
                if (0 === i) return (r = u(o)), r ? em(r) : n;
              }
              return n;
            },
            nm = function(e, t) {
              var n = Xd(e, t);
              return Ld(n) && !Na.isBogusAll(n);
            },
            rm = function(e, t) {
              return Na.isTable(Xd(e, t));
            },
            om = function(e, t) {
              return _.from(Xd(e ? 0 : -1, t)).filter(Ld);
            },
            im = function(e, t, n) {
              var r = tm(e, t, n);
              return -1 === e ? Vc.fromRangeStart(r) : Vc.fromRangeEnd(r);
            },
            am = jd(nm, 0),
            um = jd(nm, -1),
            sm = jd(rm, 0),
            cm = jd(rm, -1),
            lm = function(e, t, n) {
              var r = e ? qc.before(n) : qc.after(n);
              return vm(e, t, r);
            },
            fm = function(e) {
              return Na.isBr(e) ? qc.before(e) : qc.after(e);
            },
            dm = function(e) {
              return qc.isTextPosition(e) ? 0 === e.offset() : Qs(e.getNode());
            },
            mm = function(e) {
              if (qc.isTextPosition(e)) {
                var t = e.container();
                return e.offset() === t.data.length;
              }
              return Qs(e.getNode(!0));
            },
            pm = function(e, t) {
              return (
                !qc.isTextPosition(e) &&
                !qc.isTextPosition(t) &&
                e.getNode() === t.getNode(!0)
              );
            },
            gm = function(e) {
              return !qc.isTextPosition(e) && Na.isBr(e.getNode());
            },
            hm = function(e, t, n) {
              return e
                ? !pm(t, n) && !gm(t) && mm(t) && dm(n)
                : !pm(n, t) && dm(t) && mm(n);
            },
            vm = function(e, t, n) {
              var r = af(t);
              return _.from(e ? r.next(n) : r.prev(n));
            },
            bm = function(e, t, n) {
              return vm(e, t, n).bind(function(r) {
                return Gd(n, r, t) && hm(e, n, r) ? vm(e, t, r) : _.some(r);
              });
            },
            ym = function(e, t) {
              var n = e ? t.firstChild : t.lastChild;
              return Na.isText(n)
                ? _.some(qc(n, e ? 0 : n.data.length))
                : n
                  ? Qs(n)
                    ? _.some(e ? qc.before(n) : fm(n))
                    : lm(e, t, n)
                  : _.none();
            },
            Cm = {
              fromPosition: vm,
              nextPosition: b(vm, !0),
              prevPosition: b(vm, !1),
              navigate: bm,
              positionIn: ym,
              firstPositionIn: b(ym, !0),
              lastPositionIn: b(ym, !1)
            },
            wm = function(e) {
              return "string" === typeof e.start;
            },
            xm = function(e) {
              return e.hasOwnProperty("rng");
            },
            Em = function(e) {
              return e.hasOwnProperty("id");
            },
            Sm = function(e) {
              return e.hasOwnProperty("name");
            },
            Nm = function(e) {
              return Ln.isArray(e.start);
            },
            km = function(e, t) {
              return (
                !e.isBlock(t) ||
                  t.innerHTML ||
                  Ne.ie ||
                  (t.innerHTML = '<br data-mce-bogus="1" />'),
                t
              );
            },
            Tm = function(e, t) {
              var n, r;
              return (
                (n = e.createRng()),
                (r = ol(e.getRoot(), t.start)),
                n.setStart(r.container(), r.offset()),
                (r = ol(e.getRoot(), t.end)),
                n.setEnd(r.container(), r.offset()),
                n
              );
            },
            _m = function(e, t) {
              var n = e.ownerDocument.createTextNode(_s.ZWSP);
              e.appendChild(n), t.setStart(n, 0), t.setEnd(n, 0);
            },
            Am = function(e) {
              return !1 === e.hasChildNodes();
            },
            Rm = function(e, t) {
              return Cm.lastPositionIn(e).fold(
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
            Bm = function(e, t, n) {
              return !(!Am(t) || !Sl(e, t)) && (_m(t, n), !0);
            },
            Dm = function(e, t, n, r) {
              var o,
                i,
                a,
                u,
                s = n[t ? "start" : "end"],
                c = e.getRoot();
              if (s) {
                for (a = s[0], i = c, o = s.length - 1; o >= 1; o--) {
                  if (((u = i.childNodes), Bm(c, i, r))) return !0;
                  if (s[o] > u.length - 1) return !!Bm(c, i, r) || Rm(i, r);
                  i = u[s[o]];
                }
                3 === i.nodeType && (a = Math.min(s[0], i.nodeValue.length)),
                  1 === i.nodeType && (a = Math.min(s[0], i.childNodes.length)),
                  t ? r.setStart(i, a) : r.setEnd(i, a);
              }
              return !0;
            },
            Om = function(e) {
              return Na.isText(e) && e.data.length > 0;
            },
            Pm = function(e, t, n) {
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
                          : Om(c.nextSibling)
                            ? ((r = c.nextSibling), (o = 0))
                            : Om(c.previousSibling)
                              ? ((r = c.previousSibling),
                                (o = c.previousSibling.data.length))
                              : ((r = c.parentNode), (o = e.nodeIndex(c) + 1))
                        : (o = e.nodeIndex(c)),
                      (u = r),
                      (s = o))
                    : (l
                        ? c.hasChildNodes()
                          ? ((r = c.firstChild), (o = 1))
                          : Om(c.previousSibling)
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
                    Ln.each(Ln.grep(c.childNodes), function(e) {
                      Na.isText(e) &&
                        (e.nodeValue = e.nodeValue.replace(/\uFEFF/g, ""));
                    });
                  while ((c = e.get(n.id + "_" + t))) e.remove(c, !0);
                  a &&
                    i &&
                    a.nodeType === i.nodeType &&
                    Na.isText(a) &&
                    !Ne.opera &&
                    ((o = a.nodeValue.length),
                    a.appendData(i.nodeValue),
                    e.remove(i),
                    (u = a),
                    (s = o));
                }
                return _.some(qc(u, s));
              }
              return _.none();
            },
            Im = function(e, t) {
              return e.isSome() ? e : t;
            },
            Lm = function(e, t) {
              var n = e.createRng();
              return Dm(e, !0, t, n) && Dm(e, !1, t, n) ? _.some(n) : _.none();
            },
            Mm = function(e, t) {
              var n = Pm(e, "start", t),
                r = Pm(e, "end", t);
              return wc([n, Im(r, n)], function(t, n) {
                var r = e.createRng();
                return (
                  r.setStart(km(e, t.container()), t.offset()),
                  r.setEnd(km(e, n.container()), n.offset()),
                  r
                );
              });
            },
            Fm = function(e, t) {
              return _.from(e.select(t.name)[t.index]).map(function(t) {
                var n = e.createRng();
                return n.selectNode(t), n;
              });
            },
            Um = function(e, t) {
              var n = e.dom;
              if (t) {
                if (Nm(t)) return Lm(n, t);
                if (wm(t)) return _.some(Tm(n, t));
                if (Em(t)) return Mm(n, t);
                if (Sm(t)) return Fm(n, t);
                if (xm(t)) return _.some(t.rng);
              }
              return _.none();
            },
            jm = { resolve: Um },
            zm = function(e, t, n) {
              return wl.getBookmark(e, t, n);
            },
            Vm = function(e, t) {
              jm.resolve(e, t).each(function(t) {
                e.setRng(t);
              });
            },
            Hm = function(e) {
              return (
                Na.isElement(e) &&
                "SPAN" === e.tagName &&
                "bookmark" === e.getAttribute("data-mce-type")
              );
            },
            qm = { getBookmark: zm, moveToBookmark: Vm, isBookmarkNode: Hm },
            $m = function(e) {
              return e && /^(IMG)$/.test(e.nodeName);
            },
            Wm = function(e, t, n) {
              var r,
                o,
                i,
                a = n.startOffset,
                u = n.startContainer;
              if (
                (n.startContainer !== n.endContainer ||
                  !$m(n.startContainer.childNodes[n.startOffset])) &&
                1 === u.nodeType
              )
                for (
                  i = u.childNodes,
                    a < i.length
                      ? ((u = i[a]), (r = new Mi(u, e.getParent(u, e.isBlock))))
                      : ((u = i[i.length - 1]),
                        (r = new Mi(u, e.getParent(u, e.isBlock))),
                        r.next(!0)),
                    o = r.current();
                  o;
                  o = r.next()
                )
                  if (3 === o.nodeType && !Zm(o))
                    return n.setStart(o, 0), void t.setRng(n);
            },
            Ym = function(e, t, n) {
              if (e)
                for (
                  t = t ? "nextSibling" : "previousSibling", e = n ? e : e[t];
                  e;
                  e = e[t]
                )
                  if (1 === e.nodeType || !Zm(e)) return e;
            },
            Gm = function(e, t) {
              return (
                t.nodeType && (t = t.nodeName),
                !!e.schema.getTextBlockElements()[t.toLowerCase()]
              );
            },
            Xm = function(e, t, n) {
              return e.schema.isValidChild(t, n);
            },
            Zm = function(e) {
              return (
                e && 3 === e.nodeType && /^([\t \r\n]+|)$/.test(e.nodeValue)
              );
            },
            Km = function(e, t) {
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
            Jm = function(e, t) {
              return (
                (e = e || ""),
                (t = t || ""),
                (e = "" + (e.nodeName || e)),
                (t = "" + (t.nodeName || t)),
                e.toLowerCase() === t.toLowerCase()
              );
            },
            Qm = function(e, t, n) {
              return (
                ("color" !== n && "backgroundColor" !== n) || (t = e.toHex(t)),
                "fontWeight" === n && 700 === t && (t = "bold"),
                "fontFamily" === n &&
                  (t = t.replace(/[\'\"]/g, "").replace(/,\s+/g, ",")),
                "" + t
              );
            },
            ep = function(e, t, n) {
              return Qm(e, e.getStyle(t, n), n);
            },
            tp = function(e, t) {
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
            np = function(e, t, n) {
              return e.getParents(t, n, e.getRoot());
            },
            rp = {
              isInlineBlock: $m,
              moveStart: Wm,
              getNonWhiteSpaceSibling: Ym,
              isTextBlock: Gm,
              isValid: Xm,
              isWhiteSpaceNode: Zm,
              replaceVars: Km,
              isEq: Jm,
              normalizeStyleValue: Qm,
              getStyle: ep,
              getTextDecoration: tp,
              getParents: np
            },
            op = qm.isBookmarkNode,
            ip = rp.getParents,
            ap = rp.isWhiteSpaceNode,
            up = rp.isTextBlock,
            sp = function(e, t) {
              "undefined" === typeof t &&
                (t = 3 === e.nodeType ? e.length : e.childNodes.length);
              while (e && e.hasChildNodes())
                (e = e.childNodes[t]),
                  e && (t = 3 === e.nodeType ? e.length : e.childNodes.length);
              return { node: e, offset: t };
            },
            cp = function(e, t) {
              var n = sp(e, t);
              if (n.node) {
                while (n.node && 0 === n.offset && n.node.previousSibling)
                  n = sp(n.node.previousSibling);
                n.node &&
                  n.offset > 0 &&
                  3 === n.node.nodeType &&
                  " " === n.node.nodeValue.charAt(n.offset - 1) &&
                  n.offset > 1 &&
                  ((e = n.node), e.splitText(n.offset - 1));
              }
              return e;
            },
            lp = function(e) {
              return (
                "BR" === e.nodeName &&
                e.getAttribute("data-mce-bogus") &&
                !e.nextSibling
              );
            },
            fp = function(e, t) {
              var n = t;
              while (n) {
                if (1 === n.nodeType && e.getContentEditable(n))
                  return "false" === e.getContentEditable(n) ? n : t;
                n = n.parentNode;
              }
              return t;
            },
            dp = function(e, t, n, r) {
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
            mp = function(e, t, n, r, o, i) {
              var a, u, s, c;
              if (3 === n.nodeType) {
                if (((s = dp(o, i, n, r)), -1 !== s))
                  return { container: n, offset: s };
                c = n;
              }
              a = new Mi(n, e.getParent(n, e.isBlock) || t);
              while ((u = a[o ? "prev" : "next"]()))
                if (3 !== u.nodeType || op(u.parentNode)) {
                  if (e.isBlock(u) || rp.isEq(u, "BR")) break;
                } else if (((c = u), (s = dp(o, i, u)), -1 !== s))
                  return { container: u, offset: s };
              if (c) return (r = o ? 0 : c.length), { container: c, offset: r };
            },
            pp = function(e, t, n, r, o) {
              var i, a, u, s;
              for (
                3 === r.nodeType &&
                  0 === r.nodeValue.length &&
                  r[o] &&
                  (r = r[o]),
                  i = ip(e, r),
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
            gp = function(e, t, n, r) {
              var o,
                i = e.dom,
                a = i.getRoot();
              if ((t[0].wrapper || (o = i.getParent(n, t[0].block, a)), !o)) {
                var u = i.getParent(n, "LI,TD,TH");
                o = i.getParent(
                  3 === n.nodeType ? n.parentNode : n,
                  function(t) {
                    return t !== a && up(e, t);
                  },
                  u
                );
              }
              if (
                (o && t[0].wrapper && (o = ip(i, o, "ul,ol").reverse()[0] || o),
                !o)
              ) {
                o = n;
                while (o[r] && !i.isBlock(o[r]))
                  if (((o = o[r]), rp.isEq(o, "br"))) break;
              }
              return o || n;
            },
            hp = function(e, t, n, r, o, i, a) {
              var u, s, c, l, f;
              if (
                ((u = s = a ? n : o),
                (l = a ? "previousSibling" : "nextSibling"),
                (f = e.getRoot()),
                3 === u.nodeType &&
                  !ap(u) &&
                  (a ? r > 0 : i < u.nodeValue.length))
              )
                return u;
              while (1) {
                if (!t[0].block_expand && e.isBlock(s)) return s;
                for (c = s[l]; c; c = c[l])
                  if (!op(c) && !ap(c) && !lp(c)) return s;
                if (s === f || s.parentNode === f) {
                  u = s;
                  break;
                }
                s = s.parentNode;
              }
              return u;
            },
            vp = function(e, t, n, r) {
              var o,
                i = t.startContainer,
                a = t.startOffset,
                u = t.endContainer,
                s = t.endOffset,
                c = e.dom;
              return (
                1 === i.nodeType &&
                  i.hasChildNodes() &&
                  ((i = bc(i, a)), 3 === i.nodeType && (a = 0)),
                1 === u.nodeType &&
                  u.hasChildNodes() &&
                  ((u = bc(u, t.collapsed ? s : s - 1)),
                  3 === u.nodeType && (s = u.nodeValue.length)),
                (i = fp(c, i)),
                (u = fp(c, u)),
                (op(i.parentNode) || op(i)) &&
                  ((i = op(i) ? i : i.parentNode),
                  (i = t.collapsed
                    ? i.previousSibling || i
                    : i.nextSibling || i),
                  3 === i.nodeType && (a = t.collapsed ? i.length : 0)),
                (op(u.parentNode) || op(u)) &&
                  ((u = op(u) ? u : u.parentNode),
                  (u = t.collapsed
                    ? u.nextSibling || u
                    : u.previousSibling || u),
                  3 === u.nodeType && (s = t.collapsed ? 0 : u.length)),
                t.collapsed &&
                  ((o = mp(c, e.getBody(), i, a, !0, r)),
                  o && ((i = o.container), (a = o.offset)),
                  (o = mp(c, e.getBody(), u, s, !1, r)),
                  o && ((u = o.container), (s = o.offset))),
                n[0].inline && (u = r ? u : cp(u, s)),
                (n[0].inline || n[0].block_expand) &&
                  ((n[0].inline && 3 === i.nodeType && 0 !== a) ||
                    (i = hp(c, n, i, a, u, s, !0)),
                  (n[0].inline &&
                    3 === u.nodeType &&
                    s !== u.nodeValue.length) ||
                    (u = hp(c, n, i, a, u, s, !1))),
                n[0].selector &&
                  !1 !== n[0].expand &&
                  !n[0].inline &&
                  ((i = pp(c, n, t, i, "previousSibling")),
                  (u = pp(c, n, t, u, "nextSibling"))),
                (n[0].block || n[0].selector) &&
                  ((i = gp(e, n, i, "previousSibling")),
                  (u = gp(e, n, u, "nextSibling")),
                  n[0].block &&
                    (c.isBlock(i) || (i = hp(c, n, i, a, u, s, !0)),
                    c.isBlock(u) || (u = hp(c, n, i, a, u, s, !1)))),
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
            bp = { expandRng: vp },
            yp = Ln.each,
            Cp = function(e, t) {
              var n = e.childNodes;
              return (
                t--,
                t > n.length - 1 ? (t = n.length - 1) : t < 0 && (t = 0),
                n[t] || e
              );
            },
            wp = function(e, t, n) {
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
                yp(c, function(e) {
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
                  1 === d.nodeType && d.hasChildNodes() && (d = Cp(d, m)),
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
            xp = { walk: wp },
            Ep = function() {
              return "\ufeff";
            };
          function Sp(e, t) {
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
                } catch (nP) {
                  return _.none();
                }
              },
              o = function(t) {
                return e(t) ? _.from(t.dom().nodeValue) : _.none();
              },
              i = oo.detect().browser,
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
          var Np = Sp(yo, "text"),
            kp = function(e) {
              return Np.get(e);
            },
            Tp = function(e) {
              return yo(e) && kp(e) === Ep();
            },
            _p = function(e, t, n, r) {
              return si(t).fold(
                function() {
                  return "skipping";
                },
                function(o) {
                  return "br" === r || Tp(t)
                    ? "valid"
                    : ts(t)
                      ? "existing"
                      : El(t)
                        ? "caret"
                        : rp.isValid(e, n, r) && rp.isValid(e, go(o), n)
                          ? "valid"
                          : "invalid-child";
                }
              );
            },
            Ap = function(e, t) {
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
            },
            Rp = function(e) {
              return (
                3 === e.startContainer.nodeType &&
                e.startContainer.nodeValue.length >= e.startOffset &&
                " " === e.startContainer.nodeValue[e.startOffset]
              );
            },
            Bp = function(e, t) {
              var n = bp.expandRng(e, t, [{ inline: !0 }], Rp(t));
              t.setStart(n.startContainer, n.startOffset),
                t.setEnd(n.endContainer, n.endOffset),
                e.selection.setRng(t);
            },
            Dp = function(e, t, n, r) {
              var o = t.uid,
                i = void 0 === o ? ss("mce-annotation") : o,
                a = Ap(t, ["uid"]),
                u = lo.fromTag("span", e);
              ju(u, Ku()), _o(u, "" + Qu(), i), _o(u, "" + Ju(), n);
              var s = r(i, a),
                c = s.attributes,
                l = void 0 === c ? {} : c,
                f = s.classes,
                d = void 0 === f ? [] : f;
              return Ao(u, l), cs(u, d), u;
            },
            Op = function(e, t, n, r, o) {
              var i = [],
                a = Dp(e.getDoc(), o, n, r),
                u = Du(_.none()),
                s = function() {
                  u.set(_.none());
                },
                c = function() {
                  return u.get().getOrThunk(function() {
                    var e = fs(a);
                    return i.push(e), u.set(_.some(e)), e;
                  });
                },
                l = function(e) {
                  H(e, f);
                },
                f = function(t) {
                  var n = _p(e, t, "span", go(t));
                  switch (n) {
                    case "invalid-child":
                      s();
                      var r = pi(t);
                      l(r), s();
                      break;
                    case "valid":
                      var o = c();
                      Su(t, o);
                      break;
                    case "skipping":
                    case "existing":
                    case "caret":
                  }
                },
                d = function(e) {
                  var t = V(e, lo.fromDom);
                  l(t);
                };
              return (
                xp.walk(e.dom, t, function(e) {
                  s(), d(e);
                }),
                i
              );
            },
            Pp = function(e, t, n, r) {
              e.undoManager.transact(function() {
                var o = e.selection.getRng();
                if ((o.collapsed && Bp(e, o), e.selection.getRng().collapsed)) {
                  var i = Dp(e.getDoc(), r, t, n.decorate);
                  gs(i, " "),
                    e.selection.getRng().insertNode(i.dom()),
                    e.selection.select(i.dom());
                } else {
                  var a = wl.getPersistentBookmark(e.selection, !1),
                    u = e.selection.getRng();
                  Op(e, u, t, n.decorate, r), e.selection.moveToBookmark(a);
                }
              });
            };
          function Ip(e) {
            var t = as();
            is(e, t);
            var n = os(e, t);
            return {
              register: function(e, n) {
                t.register(e, n);
              },
              annotate: function(n, r) {
                t.lookup(n).each(function(t) {
                  Pp(e, n, t, r);
                });
              },
              annotationChanged: function(e, t) {
                n.addListener(e, t);
              },
              remove: function(t) {
                es(e, _.some(t)).each(function(e) {
                  var t = e.elements;
                  H(t, Au);
                });
              },
              getAll: function(t) {
                var n = rs(e, t);
                return Eo(n, function(e) {
                  return V(e, function(e) {
                    return e.dom();
                  });
                });
              }
            };
          }
          var Lp = function(e) {
              return e.firstChild && e.firstChild === e.lastChild;
            },
            Mp = function(e) {
              return "br" === e.name || " " === e.value;
            },
            Fp = function(e, t) {
              var n = e.getBlockElements();
              return n[t.name] && Lp(t) && Mp(t.firstChild);
            },
            Up = function(e, t) {
              var n = e.getNonEmptyElements();
              return t && (t.isEmpty(n) || Fp(e, t));
            },
            jp = function(e, t) {
              var n = t.firstChild,
                r = t.lastChild;
              return (
                n && "meta" === n.name && (n = n.next),
                r && "mce_marker" === r.attr("id") && (r = r.prev),
                Up(e, r) && (r = r.prev),
                !(!n || n !== r) && ("ul" === n.name || "ol" === n.name)
              );
            },
            zp = function(e) {
              var t = e.firstChild,
                n = e.lastChild;
              return (
                t && "META" === t.nodeName && t.parentNode.removeChild(t),
                n && "mce_marker" === n.id && n.parentNode.removeChild(n),
                e
              );
            },
            Vp = function(e, t, n) {
              var r = t.serialize(n),
                o = e.createFragment(r);
              return zp(o);
            },
            Hp = function(e) {
              return Ln.grep(e.childNodes, function(e) {
                return "LI" === e.nodeName;
              });
            },
            qp = function(e) {
              return " " === e.data || Na.isBr(e);
            },
            $p = function(e) {
              return (
                e &&
                e.firstChild &&
                e.firstChild === e.lastChild &&
                qp(e.firstChild)
              );
            },
            Wp = function(e) {
              return !e.firstChild || $p(e);
            },
            Yp = function(e) {
              return e.length > 0 && Wp(e[e.length - 1]) ? e.slice(0, -1) : e;
            },
            Gp = function(e, t) {
              var n = e.getParent(t, e.isBlock);
              return n && "LI" === n.nodeName ? n : null;
            },
            Xp = function(e, t) {
              return !!Gp(e, t);
            },
            Zp = function(e, t) {
              var n = t.cloneRange(),
                r = t.cloneRange();
              return (
                n.setStartBefore(e),
                r.setEndAfter(e),
                [n.cloneContents(), r.cloneContents()]
              );
            },
            Kp = function(e, t) {
              var n = qc.before(e),
                r = af(t),
                o = r.next(n);
              return o ? o.toRange() : null;
            },
            Jp = function(e, t) {
              var n = qc.after(e),
                r = af(t),
                o = r.prev(n);
              return o ? o.toRange() : null;
            },
            Qp = function(e, t, n, r) {
              var o = Zp(e, r),
                i = e.parentNode;
              return (
                i.insertBefore(o[0], e),
                Ln.each(t, function(t) {
                  i.insertBefore(t, e);
                }),
                i.insertBefore(o[1], e),
                i.removeChild(e),
                Jp(t[t.length - 1], n)
              );
            },
            eg = function(e, t, n) {
              var r = e.parentNode;
              return (
                Ln.each(t, function(t) {
                  r.insertBefore(t, e);
                }),
                Kp(e, n)
              );
            },
            tg = function(e, t, n, r) {
              return r.insertAfter(t.reverse(), e), Jp(t[0], n);
            },
            ng = function(e, t, n, r) {
              var o = Vp(t, e, r),
                i = Gp(t, n.startContainer),
                a = Yp(Hp(o.firstChild)),
                u = 1,
                s = 2,
                c = t.getRoot(),
                l = function(e) {
                  var r = qc.fromRangeStart(n),
                    o = af(t.getRoot()),
                    a = e === u ? o.prev(r) : o.next(r);
                  return !a || Gp(t, a.getNode()) !== i;
                };
              return l(u)
                ? eg(i, a, c)
                : l(s)
                  ? tg(i, a, c, t)
                  : Qp(i, a, c, n);
            },
            rg = {
              isListFragment: jp,
              insertAtCaret: ng,
              isParentBlockLi: Xp,
              trimListItems: Yp,
              listItems: Hp
            },
            og = Ln.each,
            ig = function(e) {
              this.compare = function(t, n) {
                if (t.nodeName !== n.nodeName) return !1;
                var r = function(t) {
                    var n = {};
                    return (
                      og(e.getAttribs(t), function(r) {
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
                    (!qm.isBookmarkNode(t) && !qm.isBookmarkNode(n)))
                );
              };
            },
            ag = function(e) {
              var t = [],
                n = e.dom();
              while (n) t.push(lo.fromDom(n)), (n = n.lastChild);
              return t;
            },
            ug = function(e) {
              var t = qu(e, "br"),
                n = W(ag(e).slice(-1), ea);
              t.length === n.length && H(n, _u);
            },
            sg = function(e) {
              Tu(e), Eu(e, lo.fromHtml('<br data-mce-bogus="1">'));
            },
            cg = function(e) {
              return yo(e) ? " " === kp(e) : ea(e);
            },
            lg = function(e) {
              return 1 === W(pi(e), cg).length;
            },
            fg = function(e) {
              vi(e).each(function(t) {
                li(t).each(function(n) {
                  Ji(e) && ea(t) && Ji(n) && _u(t);
                });
              });
            },
            dg = {
              removeTrailingBr: ug,
              fillWithPaddingBr: sg,
              isPaddedElement: lg,
              trimBlockTrailingBr: fg
            },
            mg = Ln.makeMap;
          function pg(e) {
            var t,
              n,
              r,
              o,
              i,
              a = [];
            return (
              (e = e || {}),
              (t = e.indent),
              (n = mg(e.indent_before || "")),
              (r = mg(e.indent_after || "")),
              (o = qa.getEncodeFunc(e.entity_encoding || "raw", e.entities)),
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
          function gg(e, t) {
            void 0 === t && (t = tu());
            var n = pg(e);
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
          var hg = function(e, t, n, r) {
              var o = document.createRange();
              return o.setStart(e, t), o.setEnd(n, r), o;
            },
            vg = function(e) {
              var t = qc.fromRangeStart(e),
                n = qc.fromRangeEnd(e),
                r = e.commonAncestorContainer;
              return Cm.fromPosition(!1, r, n)
                .map(function(o) {
                  return !Gd(t, n, r) && Gd(t, o, r)
                    ? hg(t.container(), t.offset(), o.container(), o.offset())
                    : e;
                })
                .getOr(e);
            },
            bg = function(e) {
              return e.collapsed ? e : vg(e);
            },
            yg = { normalize: bg },
            Cg = function(e, t) {
              return Na.isText(e) && " " === e.nodeValue[t - 1];
            },
            wg = function(e, t) {
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
            xg = function(e, t) {
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
            Eg = Na.matchNodeNames("td th"),
            Sg = function(e, t) {
              var n = e.selection.getRng(),
                r = n.startContainer,
                o = n.startOffset;
              n.collapsed &&
                Cg(r, o) &&
                Na.isText(r) &&
                (r.insertData(o - 1, " "),
                r.deleteData(o, 1),
                n.setStart(r, o),
                n.setEnd(r, o),
                e.selection.setRng(n)),
                e.selection.setContent(t);
            },
            Ng = function(e, t, n) {
              if ("all" === n.getAttribute("data-mce-bogus"))
                n.parentNode.insertBefore(e.dom.createFragment(t), n);
              else {
                var r = n.firstChild,
                  o = n.lastChild;
                !r || (r === o && "BR" === r.nodeName)
                  ? e.dom.setHTML(n, t)
                  : Sg(e, t);
              }
            },
            kg = function(e, t) {
              _.from(e.getParent(t, "td,th"))
                .map(lo.fromDom)
                .each(dg.trimBlockTrailingBr);
            },
            Tg = function(e, t) {
              var n = e.schema.getTextInlineElements(),
                r = e.dom;
              if (t) {
                var o = e.getBody(),
                  i = new ig(r);
                Ln.each(r.select("*[data-mce-fragment]"), function(e) {
                  for (var t = e.parentNode; t && t !== o; t = t.parentNode)
                    n[e.nodeName.toLowerCase()] &&
                      i.compare(t, e) &&
                      r.remove(e, !0);
                });
              }
            },
            _g = function(e) {
              var t = e;
              while ((t = t.walk()))
                1 === t.type && t.attr("data-mce-fragment", "1");
            },
            Ag = function(e) {
              Ln.each(e.getElementsByTagName("*"), function(e) {
                e.removeAttribute("data-mce-fragment");
              });
            },
            Rg = function(e) {
              return !!e.getAttribute("data-mce-fragment");
            },
            Bg = function(e, t) {
              return t && !e.schema.getShortEndedElements()[t.nodeName];
            },
            Dg = function(e, t) {
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
                      Ne.ie ||
                        ((a = t.nextSibling),
                        a &&
                          3 === a.nodeType &&
                          (i.appendData(a.data), a.parentNode.removeChild(a))))
                    : (l.setStartBefore(t), l.setEndBefore(t));
                var f = function(t) {
                  var n = qc.fromRangeStart(t),
                    r = af(e.getBody());
                  if (((n = r.next(n)), n)) return n.toRange();
                };
                (r = u.getParent(t, u.isBlock)),
                  u.remove(t),
                  r &&
                    u.isEmpty(r) &&
                    (e.$(r).empty(),
                    l.setStart(r, 0),
                    l.setEnd(r, 0),
                    Eg(r) || Rg(r) || !(o = f(l))
                      ? u.add(r, u.create("br", { "data-mce-bogus": "1" }))
                      : ((l = o), u.remove(r))),
                  s.setRng(l);
              }
            },
            Og = function(e, t, n) {
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
                (/^ | $/.test(t) && (t = wg(p.getRng(), t)),
                (r = e.parser),
                (m = n.merge),
                (o = gg({ validate: e.settings.validate }, e.schema)),
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
                  Bg(e, v.firstChild) &&
                  g.isEmpty(v.firstChild) &&
                  ((l = g.createRng()),
                  l.setStart(v.firstChild, 0),
                  l.setEnd(v.firstChild, 0),
                  p.setRng(l)),
                  p.isCollapsed() ||
                    (e.selection.setRng(yg.normalize(e.selection.getRng())),
                    e.getDoc().execCommand("Delete", !1, null),
                    (t = xg(e.selection.getRng(), t))),
                  (i = p.getNode());
                var b = {
                  context: i.nodeName.toLowerCase(),
                  data: n.data,
                  insert: !0
                };
                if (
                  ((u = r.parse(t, b)),
                  !0 === n.paste &&
                    rg.isListFragment(e.schema, u) &&
                    rg.isParentBlockLi(g, i))
                )
                  return (
                    (l = rg.insertAtCaret(o, g, e.selection.getRng(), u)),
                    e.selection.setRng(l),
                    void e.fire("SetContent", s)
                  );
                if ((_g(u), (f = u.lastChild), "mce_marker" === f.attr("id")))
                  for (c = f, f = f.prev; f; f = f.walk(!0))
                    if (3 === f.type || !g.isBlock(f.name)) {
                      e.schema.isValidChild(f.parent.name, "span") &&
                        f.parent.insert(c, f, "br" === f.name);
                      break;
                    }
                if (
                  (e._selectionOverrides.showBlockCaretContainer(i), b.invalid)
                ) {
                  Sg(e, d),
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
                } else (t = o.serialize(u)), Ng(e, t, i);
                Tg(e, m),
                  Dg(e, g.get("mce_marker")),
                  Ag(e.getBody()),
                  kg(e.dom, e.selection.getStart()),
                  e.fire("SetContent", s),
                  e.addVisual();
              }
            },
            Pg = function(e) {
              var t;
              return "string" !== typeof e
                ? ((t = Ln.extend(
                    { paste: e.paste, data: { paste: e.paste } },
                    e
                  )),
                  { content: e.content, details: t })
                : { content: e, details: {} };
            },
            Ig = function(e, t) {
              var n = Pg(t);
              Og(e, n.content, n.details);
            },
            Lg = { insertAtCaret: Ig },
            Mg = jo("sections", "settings"),
            Fg = oo.detect(),
            Ug = Fg.deviceType.isTouch(),
            jg = ["lists", "autolink", "autosave"],
            zg = { theme: "mobile" },
            Vg = function(e) {
              var t = O(e) ? e.join(" ") : e,
                n = V(B(t) ? t.split(" ") : [], Yr);
              return W(n, function(e) {
                return e.length > 0;
              });
            },
            Hg = function(e) {
              return W(e, b(j, jg));
            },
            qg = function(e, t) {
              var n = No(t, function(t, n) {
                return j(e, n);
              });
              return Mg(n.t, n.f);
            },
            $g = function(e, t, n) {
              var r = e.sections(),
                o = r.hasOwnProperty(t) ? r[t] : {};
              return Ln.extend({}, n, o);
            },
            Wg = function(e, t) {
              return e.sections().hasOwnProperty(t);
            },
            Yg = function(e, t, n) {
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
                indentation: "30px",
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
            Gg = function(e, t) {
              var n = t.external_plugins ? t.external_plugins : {};
              return e && e.external_plugins
                ? Ln.extend({}, e.external_plugins, n)
                : n;
            },
            Xg = function(e, t) {
              return [].concat(Vg(e)).concat(Vg(t));
            },
            Zg = function(e, t, n, r) {
              var o = Vg(n.forced_plugins),
                i = Vg(r.plugins),
                a = e && Wg(t, "mobile") ? Hg(i) : i,
                u = Xg(o, a);
              return Ln.extend(r, { plugins: u.join(" ") });
            },
            Kg = function(e, t) {
              var n = t.settings().inline;
              return e && Wg(t, "mobile") && !n;
            },
            Jg = function(e, t, n, r) {
              var o = qg(["mobile"], r),
                i = Ln.extend(
                  t,
                  n,
                  o.settings(),
                  Kg(e, o) ? $g(o, "mobile", zg) : {},
                  {
                    validate: !0,
                    content_editable: o.settings().inline,
                    external_plugins: Gg(n, o.settings())
                  }
                );
              return Zg(e, o, n, i);
            },
            Qg = function(e, t, n, r, o) {
              var i = Yg(t, n, e);
              return Jg(Ug, i, r, o);
            },
            eh = function(e, t, n) {
              return _.from(t.settings[n]).filter(e);
            },
            th = b(eh, B),
            nh = function(e) {
              var t = {};
              return (
                "string" === typeof e
                  ? H(
                      e.indexOf("=") > 0
                        ? e.split(/[;,](?![^=;,]*(?:[;,]|$))/)
                        : e.split(","),
                      function(e) {
                        var n = e.split("=");
                        n.length > 1
                          ? (t[Ln.trim(n[0])] = Ln.trim(n[1]))
                          : (t[Ln.trim(n[0])] = Ln.trim(n));
                      }
                    )
                  : (t = e),
                t
              );
            },
            rh = function(e) {
              return function(t) {
                return O(t) && te(t, e);
              };
            },
            oh = function(e, t, n, r) {
              var o = t in e.settings ? e.settings[t] : n;
              return "hash" === r
                ? nh(o)
                : "string" === r
                  ? eh(B, e, t).getOr(n)
                  : "number" === r
                    ? eh(M, e, t).getOr(n)
                    : "boolean" === r
                      ? eh(I, e, t).getOr(n)
                      : "object" === r
                        ? eh(D, e, t).getOr(n)
                        : "array" === r
                          ? eh(O, e, t).getOr(n)
                          : "string[]" === r
                            ? eh(rh(B), e, t).getOr(n)
                            : "function" === r
                              ? eh(L, e, t).getOr(n)
                              : o;
            },
            ih = /[\u0591-\u07FF\uFB1D-\uFDFF\uFE70-\uFEFC]/,
            ah = function(e) {
              return ih.test(e);
            },
            uh = function(e, t) {
              var n = th(e, "inline_boundaries_selector").getOr("a[href],code");
              return Zo(lo.fromDom(t), n);
            },
            sh = function(e) {
              return (
                "rtl" === mu.DOM.getStyle(e, "direction", !0) ||
                ah(e.textContent)
              );
            },
            ch = function(e, t, n) {
              return W(mu.DOM.getParents(n.container(), "*", t), e);
            },
            lh = function(e, t, n) {
              var r = ch(e, t, n);
              return _.from(r[r.length - 1]);
            },
            fh = function(e, t, n) {
              var r = Yd(t, e),
                o = Yd(n, e);
              return r && r === o;
            },
            dh = function(e) {
              return Ls(e) || Ms(e);
            },
            mh = function(e, t) {
              var n = t.container(),
                r = t.offset();
              return e
                ? Ds(n)
                  ? Na.isText(n.nextSibling)
                    ? qc(n.nextSibling, 0)
                    : qc.after(n)
                  : Ls(t)
                    ? qc(n, r + 1)
                    : t
                : Ds(n)
                  ? Na.isText(n.previousSibling)
                    ? qc(n.previousSibling, n.previousSibling.data.length)
                    : qc.before(n)
                  : Ms(t)
                    ? qc(n, r - 1)
                    : t;
            },
            ph = b(mh, !0),
            gh = b(mh, !1),
            hh = {
              isInlineTarget: uh,
              findRootInline: lh,
              isRtl: sh,
              isAtZwsp: dh,
              normalizePosition: mh,
              normalizeForwards: ph,
              normalizeBackwards: gh,
              hasSameParentBlock: fh
            },
            vh = function(e) {
              return function(t) {
                return ei(e, lo.fromDom(t.dom().parentNode));
              };
            },
            bh = function(e, t) {
              return oi(e, t)
                ? Yu(
                    t,
                    function(e) {
                      return ta(e) || ra(e);
                    },
                    vh(e)
                  )
                : _.none();
            },
            yh = function(e) {
              var t = e.getBody(),
                n =
                  t.firstChild && e.dom.isBlock(t.firstChild)
                    ? t.firstChild
                    : t;
              e.selection.setCursorLocation(n, 0);
            },
            Ch = function(e) {
              e.dom.isEmpty(e.getBody()) && (e.setContent(""), yh(e));
            },
            wh = function(e, t, n) {
              return wc([Cm.firstPositionIn(n), Cm.lastPositionIn(n)], function(
                r,
                o
              ) {
                var i = hh.normalizePosition(!0, r),
                  a = hh.normalizePosition(!1, o),
                  u = hh.normalizePosition(!1, t);
                return e
                  ? Cm.nextPosition(n, u)
                      .map(function(e) {
                        return e.isEqual(a) && t.isEqual(i);
                      })
                      .getOr(!1)
                  : Cm.prevPosition(n, u)
                      .map(function(e) {
                        return e.isEqual(i) && t.isEqual(a);
                      })
                      .getOr(!1);
              }).getOr(!0);
            },
            xh = {
              getParentBlock: bh,
              paddEmptyBody: Ch,
              willDeleteLastPositionInElement: wh
            },
            Eh = function(e, t, n) {
              return Gu(e, t, n).isSome();
            },
            Sh = function(e, t) {
              var n = lo.fromDom(e),
                r = lo.fromDom(t);
              return Eh(r, "pre,code", b(ei, n));
            },
            Nh = function(e, t) {
              return (
                Na.isText(t) && /^[ \t\r\n]*$/.test(t.data) && !1 === Sh(e, t)
              );
            },
            kh = function(e) {
              return (
                Na.isElement(e) && "A" === e.nodeName && e.hasAttribute("name")
              );
            },
            Th = function(e, t) {
              return (Qs(t) && !1 === Nh(e, t)) || kh(t) || _h(t);
            },
            _h = Na.hasAttribute("data-mce-bookmark"),
            Ah = Na.hasAttribute("data-mce-bogus"),
            Rh = Na.hasAttributeValue("data-mce-bogus", "all"),
            Bh = function(e) {
              var t,
                n,
                r = 0;
              if (Th(e, e)) return !1;
              if (((n = e.firstChild), !n)) return !0;
              t = new Mi(n, e);
              do {
                if (Rh(n)) n = t.next(!0);
                else if (Ah(n)) n = t.next();
                else if (Na.isBr(n)) r++, (n = t.next());
                else {
                  if (Th(e, n)) return !1;
                  n = t.next();
                }
              } while (n);
              return r <= 1;
            },
            Dh = function(e) {
              return Bh(e.dom());
            },
            Oh = { isEmpty: Dh },
            Ph = jo("block", "position"),
            Ih = jo("from", "to"),
            Lh = function(e, t) {
              var n = lo.fromDom(e),
                r = lo.fromDom(t.container());
              return xh.getParentBlock(n, r).map(function(e) {
                return Ph(e, t);
              });
            },
            Mh = function(e) {
              return !1 === ei(e.from().block(), e.to().block());
            },
            Fh = function(e) {
              return si(e.from().block())
                .bind(function(t) {
                  return si(e.to().block()).filter(function(e) {
                    return ei(t, e);
                  });
                })
                .isSome();
            },
            Uh = function(e) {
              return (
                !1 === Na.isContentEditableFalse(e.from().block()) &&
                !1 === Na.isContentEditableFalse(e.to().block())
              );
            },
            jh = function(e, t, n) {
              return Na.isBr(n.position().getNode()) &&
                !1 === Oh.isEmpty(n.block())
                ? Cm.positionIn(!1, n.block().dom())
                    .bind(function(r) {
                      return r.isEqual(n.position())
                        ? Cm.fromPosition(t, e, r).bind(function(t) {
                            return Lh(e, t);
                          })
                        : _.some(n);
                    })
                    .getOr(n)
                : n;
            },
            zh = function(e, t, n) {
              var r = Lh(e, qc.fromRangeStart(n)),
                o = r.bind(function(n) {
                  return Cm.fromPosition(t, e, n.position()).bind(function(n) {
                    return Lh(e, n).map(function(n) {
                      return jh(e, t, n);
                    });
                  });
                });
              return wc([r, o], Ih).filter(function(e) {
                return Mh(e) && Fh(e) && Uh(e);
              });
            },
            Vh = function(e, t, n) {
              return n.collapsed ? zh(e, t, n) : _.none();
            },
            Hh = { read: Vh },
            qh = function(e) {
              return e.slice(0, -1);
            },
            $h = function(e, t, n) {
              return oi(t, e)
                ? qh(
                    ci(e, function(e) {
                      return n(e) || ei(e, t);
                    })
                  )
                : [];
            },
            Wh = function(e, t) {
              return $h(e, t, h(!1));
            },
            Yh = function(e, t) {
              return [e].concat(Wh(e, t));
            },
            Gh = { parentsUntil: $h, parents: Wh, parentsAndSelf: Yh },
            Xh = function(e) {
              var t = pi(e);
              return Z(t, Ji).fold(
                function() {
                  return t;
                },
                function(e) {
                  return t.slice(0, e);
                }
              );
            },
            Zh = function(e) {
              var t = Xh(e);
              return H(t, _u), t;
            },
            Kh = function(e, t) {
              var n = Gh.parentsAndSelf(t, e);
              return X(n.reverse(), Oh.isEmpty).each(_u);
            },
            Jh = function(e) {
              return (
                0 ===
                W(di(e), function(e) {
                  return !Oh.isEmpty(e);
                }).length
              );
            },
            Qh = function(e, t, n, r) {
              if (Oh.isEmpty(n))
                return dg.fillWithPaddingBr(n), Cm.firstPositionIn(n.dom());
              Jh(r) && Oh.isEmpty(t) && wu(r, lo.fromTag("br"));
              var o = Cm.prevPosition(n.dom(), qc.before(r.dom()));
              return (
                H(Zh(t), function(e) {
                  wu(r, e);
                }),
                Kh(e, t),
                o
              );
            },
            ev = function(e, t, n) {
              if (Oh.isEmpty(n))
                return (
                  _u(n),
                  Oh.isEmpty(t) && dg.fillWithPaddingBr(t),
                  Cm.firstPositionIn(t.dom())
                );
              var r = Cm.lastPositionIn(n.dom());
              return (
                H(Zh(t), function(e) {
                  Eu(n, e);
                }),
                Kh(e, t),
                r
              );
            },
            tv = function(e, t) {
              var n = Gh.parentsAndSelf(t, e);
              return _.from(n[n.length - 1]);
            },
            nv = function(e, t) {
              return oi(t, e) ? tv(t, e) : _.none();
            },
            rv = function(e, t) {
              Cm.positionIn(e, t.dom())
                .map(function(e) {
                  return e.getNode();
                })
                .map(lo.fromDom)
                .filter(ea)
                .each(_u);
            },
            ov = function(e, t, n) {
              return (
                rv(!0, t),
                rv(!1, n),
                nv(t, n).fold(b(ev, e, t, n), b(Qh, e, t, n))
              );
            },
            iv = function(e, t, n, r) {
              return t ? ov(e, r, n) : ov(e, n, r);
            },
            av = { mergeBlocks: iv },
            uv = function(e, t) {
              var n,
                r = lo.fromDom(e.getBody());
              return (
                (n = Hh.read(r.dom(), t, e.selection.getRng()).bind(function(
                  e
                ) {
                  return av.mergeBlocks(r, t, e.from().block(), e.to().block());
                })),
                n.each(function(t) {
                  e.selection.setRng(t.toRange());
                }),
                n.isSome()
              );
            },
            sv = { backspaceDelete: uv },
            cv = function(e, t) {
              var n = t.getRng();
              return wc(
                [
                  xh.getParentBlock(e, lo.fromDom(n.startContainer)),
                  xh.getParentBlock(e, lo.fromDom(n.endContainer))
                ],
                function(r, o) {
                  return (
                    !1 === ei(r, o) &&
                    (n.deleteContents(),
                    av.mergeBlocks(e, !0, r, o).each(function(e) {
                      t.setRng(e.toRange());
                    }),
                    !0)
                  );
                }
              ).getOr(!1);
            },
            lv = function(e, t) {
              var n = lo.fromDom(t),
                r = b(ei, e);
              return Wu(n, aa, r).isSome();
            },
            fv = function(e, t) {
              return lv(e, t.startContainer) || lv(e, t.endContainer);
            },
            dv = function(e, t) {
              var n = Cm.prevPosition(e.dom(), qc.fromRangeStart(t)).isNone(),
                r = Cm.nextPosition(e.dom(), qc.fromRangeEnd(t)).isNone();
              return !fv(e, t) && n && r;
            },
            mv = function(e) {
              return e.setContent(""), e.selection.setCursorLocation(), !0;
            },
            pv = function(e) {
              var t = lo.fromDom(e.getBody()),
                n = e.selection.getRng();
              return dv(t, n) ? mv(e) : cv(t, e.selection);
            },
            gv = function(e, t) {
              return !e.selection.isCollapsed() && pv(e);
            },
            hv = { backspaceDelete: gv },
            vv = function(e) {
              if (!O(e)) throw new Error("cases must be an array");
              if (0 === e.length)
                throw new Error("there must be at least one case");
              var t = [],
                n = {};
              return (
                H(e, function(r, o) {
                  var i = Co(r);
                  if (1 !== i.length)
                    throw new Error("one and only one name per case");
                  var a = i[0],
                    u = r[a];
                  if (void 0 !== n[a])
                    throw new Error("duplicate key detected:" + a);
                  if ("cata" === a)
                    throw new Error("cannot have a case named cata (sorry)");
                  if (!O(u)) throw new Error("case arguments must be an array");
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
                        var n = Co(e);
                        if (t.length !== n.length)
                          throw new Error(
                            "Wrong number of arguments to match. Expected: " +
                              t.join(",") +
                              "\nActual: " +
                              n.join(",")
                          );
                        var o = te(t, function(e) {
                          return j(n, e);
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
            bv = { generate: vv },
            yv = function(e) {
              return aa(lo.fromDom(e)) || ra(lo.fromDom(e));
            },
            Cv = bv.generate([
              { remove: ["element"] },
              { moveToElement: ["element"] },
              { moveToPosition: ["position"] }
            ]),
            wv = function(e, t) {
              var n = t.getNode(!1 === e),
                r = e ? "after" : "before";
              return Na.isElement(n) && n.getAttribute("data-mce-caret") === r;
            },
            xv = function(e, t, n, r) {
              var o = function(t) {
                return Qi(lo.fromDom(t)) && !Gd(n, r, e);
              };
              return om(!t, n).fold(function() {
                return om(t, r).fold(h(!1), o);
              }, o);
            },
            Ev = function(e, t, n, r) {
              var o = r.getNode(!1 === t);
              return xh
                .getParentBlock(lo.fromDom(e), lo.fromDom(n.getNode()))
                .map(function(e) {
                  return Oh.isEmpty(e)
                    ? Cv.remove(e.dom())
                    : Cv.moveToElement(o);
                })
                .orThunk(function() {
                  return _.some(Cv.moveToElement(o));
                });
            },
            Sv = function(e, t, n) {
              return Cm.fromPosition(t, e, n).bind(function(r) {
                return yv(r.getNode())
                  ? _.none()
                  : xv(e, t, n, r)
                    ? _.none()
                    : t && Na.isContentEditableFalse(r.getNode())
                      ? Ev(e, t, n, r)
                      : !1 === t && Na.isContentEditableFalse(r.getNode(!0))
                        ? Ev(e, t, n, r)
                        : t && um(n)
                          ? _.some(Cv.moveToPosition(r))
                          : !1 === t && am(n)
                            ? _.some(Cv.moveToPosition(r))
                            : _.none();
              });
            },
            Nv = function(e, t) {
              return e && Na.isContentEditableFalse(t.nextSibling)
                ? _.some(Cv.moveToElement(t.nextSibling))
                : !1 === e && Na.isContentEditableFalse(t.previousSibling)
                  ? _.some(Cv.moveToElement(t.previousSibling))
                  : _.none();
            },
            kv = function(e, t, n) {
              return n.fold(
                function(e) {
                  return _.some(Cv.remove(e));
                },
                function(e) {
                  return _.some(Cv.moveToElement(e));
                },
                function(n) {
                  return Gd(t, n, e) ? _.none() : _.some(Cv.moveToPosition(n));
                }
              );
            },
            Tv = function(e, t, n) {
              return wv(t, n)
                ? Nv(t, n.getNode(!1 === t)).fold(function() {
                    return Sv(e, t, n);
                  }, _.some)
                : Sv(e, t, n).bind(function(t) {
                    return kv(e, n, t);
                  });
            },
            _v = function(e, t, n) {
              var r = tm(t ? 1 : -1, e, n),
                o = qc.fromRangeStart(r);
              return !1 === t && um(o)
                ? _.some(Cv.remove(o.getNode(!0)))
                : t && am(o)
                  ? _.some(Cv.remove(o.getNode()))
                  : Tv(e, t, o);
            },
            Av = function(e) {
              return -1 !== " \f\n\r\t\v".indexOf(e);
            },
            Rv = function(e, t, n) {
              var r = G(
                e.split(""),
                function(r, o) {
                  return Av(o) || " " === o
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
            Bv = function(e, t, n) {
              if (0 !== n) {
                var r = e.data.slice(t, t + n),
                  o = t + n >= e.data.length,
                  i = 0 === t;
                e.replaceData(t, n, Rv(r, i, o));
              }
            },
            Dv = function(e, t) {
              var n = e.data.slice(t),
                r = n.length - Gr(n).length;
              return Bv(e, t, r);
            },
            Ov = function(e, t) {
              var n = e.data.slice(0, t),
                r = n.length - Xr(n).length;
              return Bv(e, t - r, r);
            },
            Pv = function(e, t, n) {
              var r = Xr(e.data).length;
              return e.appendData(t.data), _u(lo.fromDom(t)), n && Dv(e, r), e;
            },
            Iv = function(e, t) {
              var n = e.container(),
                r = e.offset();
              return (
                !1 === qc.isTextPosition(e) &&
                n === t.parentNode &&
                r > qc.before(t).offset()
              );
            },
            Lv = function(e, t) {
              return Iv(t, e) ? qc(t.container(), t.offset() - 1) : t;
            },
            Mv = function(e) {
              return Na.isText(e) ? qc(e, 0) : qc.before(e);
            },
            Fv = function(e) {
              return Na.isText(e) ? qc(e, e.data.length) : qc.after(e);
            },
            Uv = function(e) {
              return Qs(e.previousSibling)
                ? _.some(Fv(e.previousSibling))
                : e.previousSibling
                  ? Cm.lastPositionIn(e.previousSibling)
                  : _.none();
            },
            jv = function(e) {
              return Qs(e.nextSibling)
                ? _.some(Mv(e.nextSibling))
                : e.nextSibling
                  ? Cm.firstPositionIn(e.nextSibling)
                  : _.none();
            },
            zv = function(e, t) {
              var n = qc.before(
                t.previousSibling ? t.previousSibling : t.parentNode
              );
              return Cm.prevPosition(e, n).fold(function() {
                return Cm.nextPosition(e, qc.after(t));
              }, _.some);
            },
            Vv = function(e, t) {
              return Cm.nextPosition(e, qc.after(t)).fold(function() {
                return Cm.prevPosition(e, qc.before(t));
              }, _.some);
            },
            Hv = function(e, t) {
              return Uv(t)
                .orThunk(function() {
                  return jv(t);
                })
                .orThunk(function() {
                  return zv(e, t);
                });
            },
            qv = function(e, t) {
              return jv(t)
                .orThunk(function() {
                  return Uv(t);
                })
                .orThunk(function() {
                  return Vv(e, t);
                });
            },
            $v = function(e, t, n) {
              return e ? qv(t, n) : Hv(t, n);
            },
            Wv = function(e, t, n) {
              return $v(e, t, n).map(b(Lv, n));
            },
            Yv = function(e, t, n) {
              n.fold(
                function() {
                  e.focus();
                },
                function(n) {
                  e.selection.setRng(n.toRange(), t);
                }
              );
            },
            Gv = function(e) {
              return function(t) {
                return t.dom() === e;
              };
            },
            Xv = function(e, t) {
              return t && e.schema.getBlockElements().hasOwnProperty(go(t));
            },
            Zv = function(e) {
              if (Oh.isEmpty(e)) {
                var t = lo.fromHtml('<br data-mce-bogus="1">');
                return Tu(e), Eu(e, t), _.some(qc.before(t.dom()));
              }
              return _.none();
            },
            Kv = function(e, t, n) {
              var r = li(e).filter(function(e) {
                  return Na.isText(e.dom());
                }),
                o = fi(e).filter(function(e) {
                  return Na.isText(e.dom());
                });
              return (
                _u(e),
                wc([r, o, t], function(e, t, r) {
                  var o = e.dom(),
                    i = t.dom(),
                    a = o.data.length;
                  return Pv(o, i, n), r.container() === i ? qc(o, a) : r;
                }).orThunk(function() {
                  return (
                    n &&
                      (r.each(function(e) {
                        return Ov(e.dom(), e.dom().length);
                      }),
                      o.each(function(e) {
                        return Dv(e.dom(), 0);
                      })),
                    t
                  );
                })
              );
            },
            Jv = function(e, t) {
              return ko(e.schema.getTextInlineElements(), go(t));
            },
            Qv = function(e, t, n, r) {
              void 0 === r && (r = !0);
              var o = Wv(t, e.getBody(), n.dom()),
                i = Wu(n, b(Xv, e), Gv(e.getBody())),
                a = Kv(n, o, Jv(e, n));
              e.dom.isEmpty(e.getBody())
                ? (e.setContent(""), e.selection.setCursorLocation())
                : i.bind(Zv).fold(
                    function() {
                      r && Yv(e, t, a);
                    },
                    function(n) {
                      r && Yv(e, t, _.some(n));
                    }
                  );
            },
            eb = { deleteElement: Qv },
            tb = function(e, t) {
              return function(n) {
                return (
                  e._selectionOverrides.hideFakeCaret(),
                  eb.deleteElement(e, t, lo.fromDom(n)),
                  !0
                );
              };
            },
            nb = function(e, t) {
              return function(n) {
                var r = t ? qc.before(n) : qc.after(n);
                return e.selection.setRng(r.toRange()), !0;
              };
            },
            rb = function(e) {
              return function(t) {
                return e.selection.setRng(t.toRange()), !0;
              };
            },
            ob = function(e, t) {
              var n = _v(e.getBody(), t, e.selection.getRng()).map(function(n) {
                return n.fold(tb(e, t), nb(e, t), rb(e));
              });
              return n.getOr(!1);
            },
            ib = function(e) {
              H(qu(e, ".mce-offscreen-selection"), _u);
            },
            ab = function(e, t) {
              var n = e.selection.getNode();
              return (
                !!Na.isContentEditableFalse(n) &&
                (ib(lo.fromDom(e.getBody())),
                eb.deleteElement(e, t, lo.fromDom(e.selection.getNode())),
                xh.paddEmptyBody(e),
                !0)
              );
            },
            ub = function(e, t) {
              while (t && t !== e) {
                if (Na.isContentEditableTrue(t) || Na.isContentEditableFalse(t))
                  return t;
                t = t.parentNode;
              }
              return null;
            },
            sb = function(e) {
              var t,
                n = ub(e.getBody(), e.selection.getNode());
              return (
                Na.isContentEditableTrue(n) &&
                  e.dom.isBlock(n) &&
                  e.dom.isEmpty(n) &&
                  ((t = e.dom.create("br", { "data-mce-bogus": "1" })),
                  e.dom.setHTML(n, ""),
                  n.appendChild(t),
                  e.selection.setRng(qc.before(t).toRange())),
                !0
              );
            },
            cb = function(e, t) {
              return e.selection.isCollapsed() ? ob(e, t) : ab(e, t);
            },
            lb = { backspaceDelete: cb, paddEmptyElement: sb },
            fb = Na.isText,
            db = function(e) {
              return fb(e) && e.data[0] === _s.ZWSP;
            },
            mb = function(e) {
              return fb(e) && e.data[e.data.length - 1] === _s.ZWSP;
            },
            pb = function(e) {
              return e.ownerDocument.createTextNode(_s.ZWSP);
            },
            gb = function(e) {
              if (fb(e.previousSibling))
                return mb(e.previousSibling)
                  ? e.previousSibling
                  : (e.previousSibling.appendData(_s.ZWSP), e.previousSibling);
              if (fb(e)) return db(e) ? e : (e.insertData(0, _s.ZWSP), e);
              var t = pb(e);
              return e.parentNode.insertBefore(t, e), t;
            },
            hb = function(e) {
              if (fb(e.nextSibling))
                return db(e.nextSibling)
                  ? e.nextSibling
                  : (e.nextSibling.insertData(0, _s.ZWSP), e.nextSibling);
              if (fb(e)) return mb(e) ? e : (e.appendData(_s.ZWSP), e);
              var t = pb(e);
              return (
                e.nextSibling
                  ? e.parentNode.insertBefore(t, e.nextSibling)
                  : e.parentNode.appendChild(t),
                t
              );
            },
            vb = function(e, t) {
              return e ? gb(t) : hb(t);
            },
            bb = b(vb, !0),
            yb = b(vb, !1),
            Cb = function(e, t) {
              return Na.isText(e.container())
                ? vb(t, e.container())
                : vb(t, e.getNode());
            },
            wb = function(e, t) {
              var n = t.get();
              return n && e.container() === n && Ds(n);
            },
            xb = function(e, t) {
              return t.fold(
                function(t) {
                  Fl.remove(e.get());
                  var n = bb(t);
                  return e.set(n), _.some(qc(n, n.length - 1));
                },
                function(t) {
                  return Cm.firstPositionIn(t).map(function(t) {
                    if (wb(t, e)) return qc(e.get(), 1);
                    Fl.remove(e.get());
                    var n = Cb(t, !0);
                    return e.set(n), qc(n, 1);
                  });
                },
                function(t) {
                  return Cm.lastPositionIn(t).map(function(t) {
                    if (wb(t, e)) return qc(e.get(), e.get().length - 1);
                    Fl.remove(e.get());
                    var n = Cb(t, !1);
                    return e.set(n), qc(n, n.length - 1);
                  });
                },
                function(t) {
                  Fl.remove(e.get());
                  var n = yb(t);
                  return e.set(n), _.some(qc(n, 1));
                }
              );
            },
            Eb = { renderCaret: xb },
            Sb = function(e, t) {
              for (var n = 0; n < e.length; n++) {
                var r = e[n].apply(null, t);
                if (r.isSome()) return r;
              }
              return _.none();
            },
            Nb = { evaluateUntil: Sb },
            kb = bv.generate([
              { before: ["element"] },
              { start: ["element"] },
              { end: ["element"] },
              { after: ["element"] }
            ]),
            Tb = function(e, t) {
              var n = Yd(t, e);
              return n || e;
            },
            _b = function(e, t, n) {
              var r = hh.normalizeForwards(n),
                o = Tb(t, r.container());
              return hh.findRootInline(e, o, r).fold(function() {
                return Cm.nextPosition(o, r)
                  .bind(b(hh.findRootInline, e, o))
                  .map(function(e) {
                    return kb.before(e);
                  });
              }, _.none);
            },
            Ab = function(e, t) {
              return null === Sl(e, t);
            },
            Rb = function(e, t, n) {
              return hh.findRootInline(e, t, n).filter(b(Ab, t));
            },
            Bb = function(e, t, n) {
              var r = hh.normalizeBackwards(n);
              return Rb(e, t, r).bind(function(e) {
                var t = Cm.prevPosition(e, r);
                return t.isNone() ? _.some(kb.start(e)) : _.none();
              });
            },
            Db = function(e, t, n) {
              var r = hh.normalizeForwards(n);
              return Rb(e, t, r).bind(function(e) {
                var t = Cm.nextPosition(e, r);
                return t.isNone() ? _.some(kb.end(e)) : _.none();
              });
            },
            Ob = function(e, t, n) {
              var r = hh.normalizeBackwards(n),
                o = Tb(t, r.container());
              return hh.findRootInline(e, o, r).fold(function() {
                return Cm.prevPosition(o, r)
                  .bind(b(hh.findRootInline, e, o))
                  .map(function(e) {
                    return kb.after(e);
                  });
              }, _.none);
            },
            Pb = function(e) {
              return !1 === hh.isRtl(Lb(e));
            },
            Ib = function(e, t, n) {
              var r = Nb.evaluateUntil([_b, Bb, Db, Ob], [e, t, n]);
              return r.filter(Pb);
            },
            Lb = function(e) {
              return e.fold(v, v, v, v);
            },
            Mb = function(e) {
              return e.fold(h("before"), h("start"), h("end"), h("after"));
            },
            Fb = function(e) {
              return e.fold(kb.before, kb.before, kb.after, kb.after);
            },
            Ub = function(e) {
              return e.fold(kb.start, kb.start, kb.end, kb.end);
            },
            jb = function(e, t) {
              return Mb(e) === Mb(t) && Lb(e) === Lb(t);
            },
            zb = function(e, t, n, r, o, i) {
              return wc(
                [hh.findRootInline(t, n, r), hh.findRootInline(t, n, o)],
                function(t, r) {
                  return t !== r && hh.hasSameParentBlock(n, t, r)
                    ? kb.after(e ? t : r)
                    : i;
                }
              ).getOr(i);
            },
            Vb = function(e, t) {
              return e.fold(h(!0), function(e) {
                return !jb(e, t);
              });
            },
            Hb = function(e, t, n, r, o) {
              var i = hh.normalizePosition(e, o),
                a = Cm.fromPosition(e, n, i).map(b(hh.normalizePosition, e)),
                u = a.fold(
                  function() {
                    return r.map(Fb);
                  },
                  function(o) {
                    return Ib(t, n, o)
                      .map(b(zb, e, t, n, i, o))
                      .filter(b(Vb, r));
                  }
                );
              return u.filter(Pb);
            },
            qb = function(e, t) {
              return e
                ? t.fold(
                    g(_.some, kb.start),
                    _.none,
                    g(_.some, kb.after),
                    _.none
                  )
                : t.fold(
                    _.none,
                    g(_.some, kb.before),
                    _.none,
                    g(_.some, kb.end)
                  );
            },
            $b = function(e, t, n, r) {
              var o = hh.normalizePosition(e, r),
                i = Ib(t, n, o);
              return Ib(t, n, o)
                .bind(b(qb, e))
                .orThunk(function() {
                  return Hb(e, t, n, i, r);
                });
            },
            Wb = {
              readLocation: Ib,
              findLocation: $b,
              prevLocation: b($b, !1),
              nextLocation: b($b, !0),
              getElement: Lb,
              outside: Fb,
              inside: Ub
            },
            Yb = function(e) {
              return L(e.selection.getSel().modify);
            },
            Gb = function(e, t, n) {
              var r = e ? 1 : -1;
              return (
                t.setRng(qc(n.container(), n.offset() + r).toRange()),
                t.getSel().modify("move", e ? "forward" : "backward", "word"),
                !0
              );
            },
            Xb = function(e, t) {
              var n = t.selection.getRng(),
                r = e ? qc.fromRangeEnd(n) : qc.fromRangeStart(n);
              return (
                !!Yb(t) &&
                (e && Ls(r)
                  ? Gb(!0, t.selection, r)
                  : !(e || !Ms(r)) && Gb(!1, t.selection, r))
              );
            },
            Zb = { hasSelectionModifyApi: Yb, moveByWord: Xb },
            Kb = function(e, t) {
              var n = e.dom.createRng();
              n.setStart(t.container(), t.offset()),
                n.setEnd(t.container(), t.offset()),
                e.selection.setRng(n);
            },
            Jb = function(e) {
              return !1 !== e.settings.inline_boundaries;
            },
            Qb = function(e, t) {
              e
                ? t.setAttribute("data-mce-selected", "inline-boundary")
                : t.removeAttribute("data-mce-selected");
            },
            ey = function(e, t, n) {
              return Eb.renderCaret(t, n).map(function(t) {
                return Kb(e, t), n;
              });
            },
            ty = function(e, t, n) {
              var r = e.getBody(),
                o = qc.fromRangeStart(e.selection.getRng()),
                i = b(hh.isInlineTarget, e),
                a = Wb.findLocation(n, i, r, o);
              return a.bind(function(n) {
                return ey(e, t, n);
              });
            },
            ny = function(e, t, n) {
              var r = W(t.select('*[data-mce-selected="inline-boundary"]'), e),
                o = W(n, e);
              H(oe(r, o), b(Qb, !1)), H(oe(o, r), b(Qb, !0));
            },
            ry = function(e, t) {
              if (e.selection.isCollapsed() && !0 !== e.composing && t.get()) {
                var n = qc.fromRangeStart(e.selection.getRng());
                qc.isTextPosition(n) &&
                  !1 === hh.isAtZwsp(n) &&
                  (Kb(e, Fl.removeAndReposition(t.get(), n)), t.set(null));
              }
            },
            oy = function(e, t, n, r) {
              if (t.selection.isCollapsed()) {
                var o = W(r, e);
                H(o, function(r) {
                  var o = qc.fromRangeStart(t.selection.getRng());
                  Wb.readLocation(e, t.getBody(), o).bind(function(e) {
                    return ey(t, n, e);
                  });
                });
              }
            },
            iy = function(e, t, n) {
              return function() {
                return !!Jb(e) && ty(e, t, n).isSome();
              };
            },
            ay = function(e, t, n) {
              return function() {
                return !!Jb(t) && Zb.moveByWord(e, t);
              };
            },
            uy = function(e) {
              var t = Du(null),
                n = b(hh.isInlineTarget, e);
              return (
                e.on("NodeChange", function(r) {
                  Jb(e) &&
                    (ny(n, e.dom, r.parents), ry(e, t), oy(n, e, t, r.parents));
                }),
                t
              );
            },
            sy = b(ay, !0),
            cy = b(ay, !1),
            ly = {
              move: iy,
              moveNextWord: sy,
              movePrevWord: cy,
              setupSelectedState: uy,
              setCaretPosition: Kb
            },
            fy = function(e) {
              return !1 !== e.settings.inline_boundaries;
            },
            dy = function(e, t) {
              var n = document.createRange();
              return (
                n.setStart(e.container(), e.offset()),
                n.setEnd(t.container(), t.offset()),
                n
              );
            },
            my = function(e) {
              return wc([Cm.firstPositionIn(e), Cm.lastPositionIn(e)], function(
                t,
                n
              ) {
                var r = hh.normalizePosition(!0, t),
                  o = hh.normalizePosition(!1, n);
                return Cm.nextPosition(e, r)
                  .map(function(e) {
                    return e.isEqual(o);
                  })
                  .getOr(!0);
              }).getOr(!0);
            },
            py = function(e, t) {
              return function(n) {
                return Eb.renderCaret(t, n)
                  .map(function(t) {
                    return ly.setCaretPosition(e, t), !0;
                  })
                  .getOr(!1);
              };
            },
            gy = function(e, t, n, r) {
              var o = e.getBody(),
                i = b(hh.isInlineTarget, e);
              e.undoManager.ignore(function() {
                e.selection.setRng(dy(n, r)),
                  e.execCommand("Delete"),
                  Wb.readLocation(i, o, qc.fromRangeStart(e.selection.getRng()))
                    .map(Wb.inside)
                    .map(py(e, t));
              }),
                e.nodeChanged();
            },
            hy = function(e, t) {
              var n = Yd(t, e);
              return n || e;
            },
            vy = function(e, t, n, r) {
              var o = hy(e.getBody(), r.container()),
                i = b(hh.isInlineTarget, e),
                a = Wb.readLocation(i, o, r);
              return a
                .bind(function(e) {
                  return n
                    ? e.fold(
                        h(_.some(Wb.inside(e))),
                        _.none,
                        h(_.some(Wb.outside(e))),
                        _.none
                      )
                    : e.fold(
                        _.none,
                        h(_.some(Wb.outside(e))),
                        _.none,
                        h(_.some(Wb.inside(e)))
                      );
                })
                .map(py(e, t))
                .getOrThunk(function() {
                  var u = Cm.navigate(n, o, r),
                    s = u.bind(function(e) {
                      return Wb.readLocation(i, o, e);
                    });
                  return a.isSome() && s.isSome()
                    ? hh
                        .findRootInline(i, o, r)
                        .map(function(t) {
                          return (
                            !!my(t) &&
                            (eb.deleteElement(e, n, lo.fromDom(t)), !0)
                          );
                        })
                        .getOr(!1)
                    : s
                        .bind(function(o) {
                          return u.map(function(o) {
                            return n ? gy(e, t, r, o) : gy(e, t, o, r), !0;
                          });
                        })
                        .getOr(!1);
                });
            },
            by = function(e, t, n) {
              if (e.selection.isCollapsed() && fy(e)) {
                var r = qc.fromRangeStart(e.selection.getRng());
                return vy(e, t, n, r);
              }
              return !1;
            },
            yy = { backspaceDelete: by },
            Cy = jo("start", "end"),
            wy = jo("rng", "table", "cells"),
            xy = bv.generate([
              { removeTable: ["element"] },
              { emptyCells: ["cells"] }
            ]),
            Ey = function(e) {
              return b(ei, e);
            },
            Sy = function(e, t) {
              return Zu(lo.fromDom(e), "td,th", t);
            },
            Ny = function(e, t) {
              return Gu(e, "table", t);
            },
            ky = function(e) {
              return !1 === ei(e.start(), e.end());
            },
            Ty = function(e, t) {
              return Ny(e.start(), t).bind(function(n) {
                return Ny(e.end(), t).bind(function(e) {
                  return ei(n, e) ? _.some(n) : _.none();
                });
              });
            },
            _y = function(e) {
              return qu(e, "td,th");
            },
            Ay = function(e, t) {
              return Ny(e.start(), t).bind(function(t) {
                return se(_y(t)).map(function(t) {
                  return Cy(e.start(), t);
                });
              });
            },
            Ry = function(e, t) {
              var n = Sy(t.startContainer, e),
                r = Sy(t.endContainer, e);
              return t.collapsed
                ? _.none()
                : wc([n, r], Cy).fold(
                    function() {
                      return n.fold(
                        function() {
                          return r.bind(function(t) {
                            return Ny(t, e).bind(function(e) {
                              return ue(_y(e)).map(function(e) {
                                return Cy(e, t);
                              });
                            });
                          });
                        },
                        function(t) {
                          return Ny(t, e).bind(function(e) {
                            return se(_y(e)).map(function(e) {
                              return Cy(t, e);
                            });
                          });
                        }
                      );
                    },
                    function(t) {
                      return By(e, t) ? _.none() : Ay(t, e);
                    }
                  );
            },
            By = function(e, t) {
              return Ty(t, e).isSome();
            },
            Dy = function(e, t) {
              var n = Sy(e.startContainer, t),
                r = Sy(e.endContainer, t);
              return wc([n, r], Cy)
                .filter(ky)
                .filter(function(e) {
                  return By(t, e);
                })
                .orThunk(function() {
                  return Ry(t, e);
                });
            },
            Oy = function(e, t) {
              return Ty(e, t).map(function(t) {
                return wy(e, t, _y(t));
              });
            },
            Py = function(e, t) {
              var n = Ey(e);
              return Dy(t, n).bind(function(e) {
                return Oy(e, n);
              });
            },
            Iy = function(e, t) {
              return Z(e, function(e) {
                return ei(e, t);
              });
            },
            Ly = function(e) {
              return wc(
                [Iy(e.cells(), e.rng().start()), Iy(e.cells(), e.rng().end())],
                function(t, n) {
                  return e.cells().slice(t, n + 1);
                }
              );
            },
            My = function(e) {
              return Ly(e).map(function(t) {
                var n = e.cells();
                return t.length === n.length
                  ? xy.removeTable(e.table())
                  : xy.emptyCells(t);
              });
            },
            Fy = function(e) {
              return xy.emptyCells(e);
            },
            Uy = function(e, t) {
              return Py(e, t).bind(My);
            },
            jy = { getActionFromRange: Uy, getActionFromCells: Fy },
            zy = function(e) {
              var t = [];
              if (e)
                for (var n = 0; n < e.rangeCount; n++) t.push(e.getRangeAt(n));
              return t;
            },
            Vy = function(e) {
              return ee(e, function(e) {
                var t = vc(e);
                return t ? [lo.fromDom(t)] : [];
              });
            },
            Hy = function(e) {
              return zy(e).length > 1;
            },
            qy = { getRanges: zy, getSelectedNodes: Vy, hasMultipleRanges: Hy },
            $y = function(e) {
              return W(qy.getSelectedNodes(e), aa);
            },
            Wy = function(e) {
              var t = qu(e, "td[data-mce-selected],th[data-mce-selected]");
              return t;
            },
            Yy = function(e, t) {
              var n = Wy(t),
                r = $y(e);
              return n.length > 0 ? n : r;
            },
            Gy = function(e) {
              return Yy(
                qy.getRanges(e.selection.getSel()),
                lo.fromDom(e.getBody())
              );
            },
            Xy = {
              getCellsFromRanges: $y,
              getCellsFromElement: Wy,
              getCellsFromElementOrRanges: Yy,
              getCellsFromEditor: Gy
            },
            Zy = function(e, t) {
              return (
                H(t, dg.fillWithPaddingBr),
                e.selection.setCursorLocation(t[0].dom(), 0),
                !0
              );
            },
            Ky = function(e, t) {
              return eb.deleteElement(e, !1, t), !0;
            },
            Jy = function(e, t, n) {
              return jy.getActionFromRange(t, n).map(function(t) {
                return t.fold(b(Ky, e), b(Zy, e));
              });
            },
            Qy = function(e, t) {
              return iC(e, t);
            },
            eC = function(e, t, n, r) {
              return rC(t, r)
                .fold(
                  function() {
                    return Jy(e, t, n);
                  },
                  function(t) {
                    return Qy(e, t);
                  }
                )
                .getOr(!1);
            },
            tC = function(e, t) {
              var n = lo.fromDom(e.getBody()),
                r = e.selection.getRng(),
                o = Xy.getCellsFromEditor(e);
              return 0 !== o.length ? Zy(e, o) : eC(e, n, r, t);
            },
            nC = function(e, t) {
              return X(Gh.parentsAndSelf(t, e), aa);
            },
            rC = function(e, t) {
              return X(Gh.parentsAndSelf(t, e), function(e) {
                return "caption" === go(e);
              });
            },
            oC = function(e, t, n, r, o) {
              return Cm.navigate(n, e.getBody(), o).bind(function(e) {
                return nC(t, lo.fromDom(e.getNode())).map(function(e) {
                  return !1 === ei(e, r);
                });
              });
            },
            iC = function(e, t) {
              return (
                dg.fillWithPaddingBr(t),
                e.selection.setCursorLocation(t.dom(), 0),
                _.some(!0)
              );
            },
            aC = function(e, t, n, r) {
              return Cm.firstPositionIn(e.dom())
                .bind(function(o) {
                  return Cm.lastPositionIn(e.dom()).map(function(e) {
                    return t
                      ? n.isEqual(o) && r.isEqual(e)
                      : n.isEqual(e) && r.isEqual(o);
                  });
                })
                .getOr(!0);
            },
            uC = function(e, t) {
              return iC(e, t);
            },
            sC = function(e, t, n) {
              return rC(e, lo.fromDom(n.getNode())).map(function(e) {
                return !1 === ei(e, t);
              });
            },
            cC = function(e, t, n, r, o) {
              return Cm.navigate(n, e.getBody(), o)
                .bind(function(i) {
                  return aC(r, n, o, i) ? uC(e, r) : sC(t, r, i);
                })
                .or(_.some(!0));
            },
            lC = function(e, t, n, r) {
              var o = qc.fromRangeStart(e.selection.getRng());
              return nC(n, r).bind(function(r) {
                return Oh.isEmpty(r) ? iC(e, r) : oC(e, n, t, r, o);
              });
            },
            fC = function(e, t, n, r) {
              var o = qc.fromRangeStart(e.selection.getRng());
              return Oh.isEmpty(r) ? iC(e, r) : cC(e, n, t, r, o);
            },
            dC = function(e, t, n) {
              var r = lo.fromDom(e.getBody());
              return rC(r, n)
                .fold(
                  function() {
                    return lC(e, t, r, n);
                  },
                  function(n) {
                    return fC(e, t, r, n);
                  }
                )
                .getOr(!1);
            },
            mC = function(e, t) {
              var n = lo.fromDom(e.selection.getStart(!0)),
                r = Xy.getCellsFromEditor(e);
              return e.selection.isCollapsed() && 0 === r.length
                ? dC(e, t, n)
                : tC(e, n);
            },
            pC = { backspaceDelete: mC },
            gC = function(e, t) {
              e.getDoc().execCommand(t, !1, null);
            },
            hC = function(e) {
              lb.backspaceDelete(e, !1) ||
                yy.backspaceDelete(e, !1) ||
                sv.backspaceDelete(e, !1) ||
                pC.backspaceDelete(e) ||
                hv.backspaceDelete(e, !1) ||
                (gC(e, "Delete"), xh.paddEmptyBody(e));
            },
            vC = function(e) {
              lb.backspaceDelete(e, !0) ||
                yy.backspaceDelete(e, !0) ||
                sv.backspaceDelete(e, !0) ||
                pC.backspaceDelete(e) ||
                hv.backspaceDelete(e, !0) ||
                gC(e, "ForwardDelete");
            },
            bC = { deleteCommand: hC, forwardDeleteCommand: vC },
            yC = function(e, t, n) {
              var r = function(t) {
                  return Uo(t, e);
                },
                o = function(e) {
                  return ei(lo.fromDom(t), e);
                };
              return Yu(
                lo.fromDom(n),
                function(e) {
                  return r(e).isSome();
                },
                o
              ).bind(r);
            },
            CC = function(e, t) {
              var n = Math.pow(10, t);
              return Math.round(e * n) / n;
            },
            wC = function(e, t) {
              return /[0-9.]+px$/.test(e)
                ? CC((72 * parseInt(e, 10)) / 96, t || 0) + "pt"
                : e;
            },
            xC = function(e) {
              return e.replace(/[\'\"\\]/g, "").replace(/,\s+/g, ",");
            },
            EC = function(e, t) {
              return _.from(mu.DOM.getStyle(t, e, !0));
            },
            SC = function(e) {
              return function(t, n) {
                return _.from(n)
                  .map(lo.fromDom)
                  .filter(bo)
                  .bind(function(n) {
                    return yC(e, t, n.dom()).or(EC(e, n.dom()));
                  })
                  .getOr("");
              };
            },
            NC = {
              getFontSize: SC("font-size"),
              getFontFamily: g(xC, SC("font-family")),
              toPt: wC
            },
            kC = function(e) {
              return Cm.firstPositionIn(e.getBody()).map(function(e) {
                var t = e.container();
                return Na.isText(t) ? t.parentNode : t;
              });
            },
            TC = function(e, t) {
              return e.startContainer === t && 0 === e.startOffset;
            },
            _C = function(e) {
              return _.from(e.selection.getRng()).bind(function(t) {
                var n = e.getBody();
                return TC(t, n) ? _.none() : _.from(e.selection.getStart(!0));
              });
            },
            AC = function(e, t) {
              if (/^[0-9\.]+$/.test(t)) {
                var n = parseInt(t, 10);
                if (n >= 1 && n <= 7) {
                  var r = ld.getFontStyleValues(e),
                    o = ld.getFontSizeClasses(e);
                  return o ? o[n - 1] || t : r[n - 1] || t;
                }
                return t;
              }
              return t;
            },
            RC = function(e, t) {
              e.formatter.toggle("fontname", { value: AC(e, t) }),
                e.nodeChanged();
            },
            BC = function(e) {
              return _C(e).fold(
                function() {
                  return kC(e)
                    .map(function(t) {
                      return NC.getFontFamily(e.getBody(), t);
                    })
                    .getOr("");
                },
                function(t) {
                  return NC.getFontFamily(e.getBody(), t);
                }
              );
            },
            DC = function(e, t) {
              e.formatter.toggle("fontsize", { value: AC(e, t) }),
                e.nodeChanged();
            },
            OC = function(e) {
              return _C(e).fold(
                function() {
                  return kC(e)
                    .map(function(t) {
                      return NC.getFontSize(e.getBody(), t);
                    })
                    .getOr("");
                },
                function(t) {
                  return NC.getFontSize(e.getBody(), t);
                }
              );
            },
            PC = function(e, t) {
              return (
                e &&
                t &&
                e.startContainer === t.startContainer &&
                e.startOffset === t.startOffset &&
                e.endContainer === t.endContainer &&
                e.endOffset === t.endOffset
              );
            },
            IC = { isEq: PC },
            LC = function(e, t, n) {
              while (e && e !== t) {
                if (n(e)) return e;
                e = e.parentNode;
              }
              return null;
            },
            MC = function(e, t, n) {
              return null !== LC(e, t, n);
            },
            FC = function(e, t, n) {
              return MC(e, t, function(e) {
                return e.nodeName === n;
              });
            },
            UC = function(e) {
              return e && "TABLE" === e.nodeName;
            },
            jC = function(e) {
              return e && /^(TD|TH|CAPTION)$/.test(e.nodeName);
            },
            zC = function(e, t) {
              return Os(e) && !1 === MC(e, t, El);
            },
            VC = function(e, t, n) {
              var r = new Mi(
                t,
                e.getParent(t.parentNode, e.isBlock) || e.getRoot()
              );
              while ((t = r[n ? "prev" : "next"]())) if (Na.isBr(t)) return !0;
            },
            HC = function(e, t) {
              return e.previousSibling && e.previousSibling.nodeName === t;
            },
            qC = function(e, t) {
              while (t && t !== e) {
                if (Na.isContentEditableFalse(t)) return !0;
                t = t.parentNode;
              }
              return !1;
            },
            $C = function(e, t, n, r, o) {
              var i,
                a,
                u,
                s,
                c = e.getRoot(),
                l = e.schema.getNonEmptyElements();
              if (
                ((u = e.getParent(o.parentNode, e.isBlock) || c),
                r && Na.isBr(o) && t && e.isEmpty(u))
              )
                return _.some(Vc(o.parentNode, e.nodeIndex(o)));
              i = new Mi(o, u);
              while ((s = i[r ? "prev" : "next"]())) {
                if ("false" === e.getContentEditableParent(s) || zC(s, c))
                  return _.none();
                if (Na.isText(s) && s.nodeValue.length > 0)
                  return !1 === FC(s, c, "A")
                    ? _.some(Vc(s, r ? s.nodeValue.length : 0))
                    : _.none();
                if (e.isBlock(s) || l[s.nodeName.toLowerCase()])
                  return _.none();
                a = s;
              }
              return n && a ? _.some(Vc(a, 0)) : _.none();
            },
            WC = function(e, t, n, r) {
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
                (l = Na.isElement(o) && i === o.childNodes.length),
                (s = e.schema.getNonEmptyElements()),
                (c = n),
                Os(o))
              )
                return _.none();
              if (
                (Na.isElement(o) && i > o.childNodes.length - 1 && (c = !1),
                Na.isDocument(o) && ((o = f), (i = 0)),
                o === f)
              ) {
                if (c && ((u = o.childNodes[i > 0 ? i - 1 : 0]), u)) {
                  if (Os(u)) return _.none();
                  if (s[u.nodeName] || UC(u)) return _.none();
                }
                if (o.hasChildNodes()) {
                  if (
                    ((i = Math.min(
                      !c && i > 0 ? i - 1 : i,
                      o.childNodes.length - 1
                    )),
                    (o = o.childNodes[i]),
                    (i = Na.isText(o) && l ? o.data.length : 0),
                    !t && o === f.lastChild && UC(o))
                  )
                    return _.none();
                  if (qC(f, o) || Os(o)) return _.none();
                  if (o.hasChildNodes() && !1 === UC(o)) {
                    (u = o), (a = new Mi(o, f));
                    do {
                      if (Na.isContentEditableFalse(u) || Os(u)) {
                        d = !1;
                        break;
                      }
                      if (Na.isText(u) && u.nodeValue.length > 0) {
                        (i = c ? 0 : u.nodeValue.length), (o = u), (d = !0);
                        break;
                      }
                      if (s[u.nodeName.toLowerCase()] && !jC(u)) {
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
                  (Na.isText(o) &&
                    0 === i &&
                    $C(e, l, t, !0, o).each(function(e) {
                      (o = e.container()), (i = e.offset()), (d = !0);
                    }),
                  Na.isElement(o) &&
                    ((u = o.childNodes[i]),
                    u || (u = o.childNodes[i - 1]),
                    !u ||
                      !Na.isBr(u) ||
                      HC(u, "A") ||
                      VC(e, u, !1) ||
                      VC(e, u, !0) ||
                      $C(e, l, t, !0, u).each(function(e) {
                        (o = e.container()), (i = e.offset()), (d = !0);
                      }))),
                c &&
                  !t &&
                  Na.isText(o) &&
                  i === o.nodeValue.length &&
                  $C(e, l, t, !1, o).each(function(e) {
                    (o = e.container()), (i = e.offset()), (d = !0);
                  }),
                d ? _.some(Vc(o, i)) : _.none()
              );
            },
            YC = function(e, t) {
              var n = t.collapsed,
                r = t.cloneRange(),
                o = Vc.fromRangeStart(t);
              return (
                WC(e, n, !0, r).each(function(e) {
                  (n && Vc.isAbove(o, e)) ||
                    r.setStart(e.container(), e.offset());
                }),
                n ||
                  WC(e, n, !1, r).each(function(e) {
                    r.setEnd(e.container(), e.offset());
                  }),
                n && r.collapse(!0),
                IC.isEq(t, r) ? _.none() : _.some(r)
              );
            },
            GC = { normalize: YC },
            XC = function(e, t, n) {
              var r,
                o = new Mi(t, n),
                i = e.getNonEmptyElements();
              while ((r = o.next()))
                if (i[r.nodeName.toLowerCase()] || r.length > 0) return !0;
            },
            ZC = function(e, t, n) {
              var r = e.create("span", {}, "&nbsp;");
              n.parentNode.insertBefore(r, n), t.scrollIntoView(r), e.remove(r);
            },
            KC = function(e, t, n, r) {
              var o = e.createRng();
              r
                ? (o.setStartBefore(n), o.setEndBefore(n))
                : (o.setStartAfter(n), o.setEndAfter(n)),
                t.setRng(o);
            },
            JC = function(e, t) {
              var n,
                r,
                o = e.selection,
                i = e.dom,
                a = o.getRng();
              GC.normalize(i, a).each(function(e) {
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
                  (XC(e.schema, s, l) ||
                    ((n = i.create("br")),
                    a.insertNode(n),
                    a.setStartAfter(n),
                    a.setEndAfter(n),
                    (r = !0))),
                (n = i.create("br")),
                a.insertNode(n),
                ZC(i, o, n),
                KC(i, o, n, r),
                e.undoManager.add();
            },
            QC = function(e, t) {
              var n = lo.fromTag("br");
              wu(lo.fromDom(t), n), e.undoManager.add();
            },
            ew = function(e, t) {
              nw(e.getBody(), t) || xu(lo.fromDom(t), lo.fromTag("br"));
              var n = lo.fromTag("br");
              xu(lo.fromDom(t), n),
                ZC(e.dom, e.selection, n.dom()),
                KC(e.dom, e.selection, n.dom(), !1),
                e.undoManager.add();
            },
            tw = function(e) {
              return Na.isBr(e.getNode());
            },
            nw = function(e, t) {
              return (
                !!tw(qc.after(t)) ||
                Cm.nextPosition(e, qc.after(t))
                  .map(function(e) {
                    return Na.isBr(e.getNode());
                  })
                  .getOr(!1)
              );
            },
            rw = function(e) {
              return e && "A" === e.nodeName && "href" in e;
            },
            ow = function(e) {
              return e.fold(h(!1), rw, rw, h(!1));
            },
            iw = function(e) {
              var t = b(hh.isInlineTarget, e),
                n = qc.fromRangeStart(e.selection.getRng());
              return Wb.readLocation(t, e.getBody(), n).filter(ow);
            },
            aw = function(e, t) {
              t.fold(p, b(QC, e), b(ew, e), p);
            },
            uw = function(e, t) {
              var n = iw(e);
              n.isSome() ? n.each(b(aw, e)) : JC(e, t);
            },
            sw = { insert: uw },
            cw = (bv.generate([
              { before: ["element"] },
              { on: ["element", "offset"] },
              { after: ["element"] }
            ]),
            bv.generate([
              { domRange: ["rng"] },
              { relative: ["startSitu", "finishSitu"] },
              { exact: ["start", "soffset", "finish", "foffset"] }
            ]),
            jo("start", "soffset", "finish", "foffset")),
            lw = oo.detect().browser,
            fw = function(e, t) {
              var n = yo(t) ? kp(t).length : pi(t).length + 1;
              return e > n ? n : e < 0 ? 0 : e;
            },
            dw = function(e) {
              return cw(
                e.start(),
                fw(e.soffset(), e.start()),
                e.finish(),
                fw(e.foffset(), e.finish())
              );
            },
            mw = function(e, t) {
              return oi(e, t) || ei(e, t);
            },
            pw = function(e) {
              return function(t) {
                return mw(e, t.start()) && mw(e, t.finish());
              };
            },
            gw = function(e) {
              return !0 === e.inline || lw.isIE();
            },
            hw = function(e) {
              return cw(
                lo.fromDom(e.startContainer),
                e.startOffset,
                lo.fromDom(e.endContainer),
                e.endOffset
              );
            },
            vw = function(e) {
              var t = e.getSelection(),
                n =
                  t && 0 !== t.rangeCount ? _.from(t.getRangeAt(0)) : _.none();
              return n.map(hw);
            },
            bw = function(e) {
              var t = ui(e);
              return vw(t.dom()).filter(pw(e));
            },
            yw = function(e, t) {
              return _.from(t)
                .filter(pw(e))
                .map(dw);
            },
            Cw = function(e) {
              var t = document.createRange();
              try {
                return (
                  t.setStart(e.start().dom(), e.soffset()),
                  t.setEnd(e.finish().dom(), e.foffset()),
                  _.some(t)
                );
              } catch (n) {
                return _.none();
              }
            },
            ww = function(e) {
              var t = gw(e) ? bw(lo.fromDom(e.getBody())) : _.none();
              e.bookmark = t.isSome() ? t : e.bookmark;
            },
            xw = function(e, t) {
              var n = lo.fromDom(e.getBody()),
                r = gw(e) ? _.from(t) : _.none(),
                o = r.map(hw).filter(pw(n));
              e.bookmark = o.isSome() ? o : e.bookmark;
            },
            Ew = function(e) {
              var t = e.bookmark ? e.bookmark : _.none();
              return t.bind(b(yw, lo.fromDom(e.getBody()))).bind(Cw);
            },
            Sw = function(e) {
              Ew(e).each(function(t) {
                e.selection.setRng(t);
              });
            },
            Nw = {
              store: ww,
              storeNative: xw,
              readRange: vw,
              restore: Sw,
              getRng: Ew,
              getBookmark: bw,
              validate: yw
            },
            kw = function(e, t, n, r, o, i) {
              if ("false" !== e.getContentEditable(i) && "LI" !== i.nodeName) {
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
            Tw = function(e, t) {
              var n = e.settings,
                r = e.dom,
                o = e.selection,
                i = e.formatter,
                a = /[a-z%]+$/i.exec(n.indentation)[0],
                u = parseInt(n.indentation, 10),
                s = e.getParam("indent_use_margin", !1);
              e.queryCommandState("InsertUnorderedList") ||
                e.queryCommandState("InsertOrderedList") ||
                (n.forced_root_block ||
                  r.getParent(o.getNode(), r.isBlock) ||
                  i.apply("div"),
                H(o.getSelectedBlocks(), function(e) {
                  return kw(r, t, s, u, a, e);
                }));
            },
            _w = Ln.each,
            Aw = Ln.extend,
            Rw = Ln.map,
            Bw = Ln.inArray;
          function Dw(e) {
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
                      ? Nw.restore(e)
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
                    (_w(e.plugins, function(o) {
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
                  _w(e, function(e, n) {
                    _w(n.toLowerCase().split(","), function(n) {
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
            Aw(this, {
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
                  Ne.mac && (o = o.replace(/Ctrl\+/g, "⌘+")),
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
                  _w("left,center,right,justify".split(","), function(e) {
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
                RC(e, r);
              },
              FontSize: function(t, n, r) {
                DC(e, r);
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
                Lg.insertAtCaret(e, r);
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
                Tw(e, t);
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
                var e = t.getParent(n.getStart(), Na.isContentEditableTrue);
                if (e) {
                  var r = t.createRng();
                  r.selectNodeContents(e), n.setRng(r);
                }
              },
              delete: function() {
                bC.deleteCommand(e);
              },
              forwardDelete: function() {
                bC.forwardDeleteCommand(e);
              },
              mceNewDocument: function() {
                e.setContent("");
              },
              InsertLineBreak: function(t, n, r) {
                return sw.insert(e, r), !0;
              }
            });
            var w = function(e) {
              return function() {
                var o = n.isCollapsed()
                    ? [t.getParent(n.getNode(), t.isBlock)]
                    : n.getSelectedBlocks(),
                  i = Rw(o, function(t) {
                    return !!r.matchNode(t, e);
                  });
                return -1 !== Bw(i, !0);
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
                  return BC(e);
                },
                this
              ),
              p(
                "FontSize",
                function() {
                  return OC(e);
                },
                this
              );
          }
          var Ow = Ln.makeMap(
              "focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchmove touchend",
              " "
            ),
            Pw = function(e) {
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
                      u && Ln.extend(t, u),
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
          Pw.isNative = function(e) {
            return !!Ow[e.toLowerCase()];
          };
          var Iw,
            Lw = function(e) {
              return (
                e._eventDispatcher ||
                  (e._eventDispatcher = new Pw({
                    scope: e,
                    toggleEvent: function(t, n) {
                      Pw.isNative(t) &&
                        e.toggleNativeEvent &&
                        e.toggleNativeEvent(t, n);
                    }
                  })),
                e._eventDispatcher
              );
            },
            Mw = {
              fire: function(e, t, n) {
                var r = this;
                if (r.removed && "remove" !== e) return t;
                if (((t = Lw(r).fire(e, t, n)), !1 !== n && r.parent)) {
                  var o = r.parent();
                  while (o && !t.isPropagationStopped())
                    o.fire(e, t, !1), (o = o.parent());
                }
                return t;
              },
              on: function(e, t, n) {
                return Lw(this).on(e, t, n);
              },
              off: function(e, t) {
                return Lw(this).off(e, t);
              },
              once: function(e, t) {
                return Lw(this).once(e, t);
              },
              hasEventListeners: function(e) {
                return Lw(this).has(e);
              }
            },
            Fw = function(e, t) {
              return e.fire("PreProcess", t);
            },
            Uw = function(e, t) {
              return e.fire("PostProcess", t);
            },
            jw = function(e) {
              return e.fire("remove");
            },
            zw = function(e, t) {
              return e.fire("SwitchMode", { mode: t });
            },
            Vw = function(e, t, n, r) {
              e.fire("ObjectResizeStart", { target: t, width: n, height: r });
            },
            Hw = function(e, t, n, r) {
              e.fire("ObjectResized", { target: t, width: n, height: r });
            },
            qw = {
              firePreProcess: Fw,
              firePostProcess: Uw,
              fireRemove: jw,
              fireSwitchMode: zw,
              fireObjectResizeStart: Vw,
              fireObjectResized: Hw
            },
            $w = function(e, t, n) {
              try {
                e.getDoc().execCommand(t, !1, n);
              } catch (r) {}
            },
            Ww = function(e, t, n) {
              Hu(e, t) && !1 === n ? Vu(e, t) : n && ju(e, t);
            },
            Yw = function(e, t) {
              Ww(lo.fromDom(e.getBody()), "mce-content-readonly", t),
                t
                  ? (e.selection.controlSelection.hideResizeRect(),
                    (e.readonly = !0),
                    (e.getBody().contentEditable = "false"))
                  : ((e.readonly = !1),
                    (e.getBody().contentEditable = "true"),
                    $w(e, "StyleWithCSS", !1),
                    $w(e, "enableInlineTableEditing", !1),
                    $w(e, "enableObjectResizing", !1),
                    e.focus(),
                    e.nodeChanged());
            },
            Gw = function(e, t) {
              t !== Xw(e) &&
                (e.initialized
                  ? Yw(e, "readonly" === t)
                  : e.on("init", function() {
                      Yw(e, "readonly" === t);
                    }),
                qw.fireSwitchMode(e, t));
            },
            Xw = function(e) {
              return e.readonly ? "readonly" : "design";
            },
            Zw = function(e) {
              return !0 === e.readonly;
            },
            Kw = mu.DOM,
            Jw = function(e, t) {
              return "selectionchange" === t
                ? e.getDoc()
                : !e.inline &&
                  /^mouse|touch|click|contextmenu|drop|dragover|dragend/.test(t)
                  ? e.getDoc().documentElement
                  : e.settings.event_root
                    ? (e.eventRoot ||
                        (e.eventRoot = Kw.select(e.settings.event_root)[0]),
                      e.eventRoot)
                    : e.getBody();
            },
            Qw = function(e) {
              return !e.hidden && !e.readonly;
            },
            ex = function(e, t, n) {
              Qw(e) ? e.fire(t, n) : Zw(e) && n.preventDefault();
            },
            tx = function(e, t) {
              var n, r;
              if (
                (e.delegates || (e.delegates = {}),
                !e.delegates[t] && !e.removed)
              )
                if (((n = Jw(e, t)), e.settings.event_root)) {
                  if (
                    (Iw ||
                      ((Iw = {}),
                      e.editorManager.on("removeEditor", function() {
                        var t;
                        if (!e.editorManager.activeEditor && Iw) {
                          for (t in Iw) e.dom.unbind(Jw(e, t));
                          Iw = null;
                        }
                      })),
                    Iw[t])
                  )
                    return;
                  (r = function(n) {
                    var r = n.target,
                      o = e.editorManager.get(),
                      i = o.length;
                    while (i--) {
                      var a = o[i].getBody();
                      (a === r || Kw.isChildOf(r, a)) && ex(o[i], t, n);
                    }
                  }),
                    (Iw[t] = r),
                    Kw.bind(n, t, r);
                } else
                  (r = function(n) {
                    ex(e, t, n);
                  }),
                    Kw.bind(n, t, r),
                    (e.delegates[t] = r);
            },
            nx = {
              bindPendingEventDelegates: function() {
                var e = this;
                Ln.each(e._pendingNativeEvents, function(t) {
                  tx(e, t);
                });
              },
              toggleNativeEvent: function(e, t) {
                var n = this;
                "focus" !== e &&
                  "blur" !== e &&
                  (t
                    ? n.initialized
                      ? tx(n, e)
                      : n._pendingNativeEvents
                        ? n._pendingNativeEvents.push(e)
                        : (n._pendingNativeEvents = [e])
                    : n.initialized &&
                      (n.dom.unbind(Jw(n, e), e, n.delegates[e]),
                      delete n.delegates[e]));
              },
              unbindAllNativeEvents: function() {
                var e,
                  t = this,
                  n = t.getBody(),
                  r = t.dom;
                if (t.delegates) {
                  for (e in t.delegates)
                    t.dom.unbind(Jw(t, e), e, t.delegates[e]);
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
          nx = Ln.extend({}, Mw, nx);
          var rx = nx,
            ox = Ln.each,
            ix = Ln.explode,
            ax = { f9: 120, f10: 121, f11: 122 },
            ux = Ln.makeMap("alt,ctrl,shift,meta,access");
          function sx(e) {
            var t = this,
              n = {},
              r = [],
              o = function(e) {
                var t,
                  n,
                  r = {};
                for (n in (ox(ix(e, "+"), function(e) {
                  e in ux
                    ? (r[e] = !0)
                    : /^[0-9]{2,}$/.test(e)
                      ? (r.keyCode = parseInt(e, 10))
                      : ((r.charCode = e.charCodeAt(0)),
                        (r.keyCode = ax[e] || e.toUpperCase().charCodeAt(0)));
                }),
                (t = [r.keyCode]),
                ux))
                  r[n] ? t.push(n) : (r[n] = !1);
                return (
                  (r.id = t.join(",")),
                  r.access &&
                    ((r.alt = !0), Ne.mac ? (r.ctrl = !0) : (r.shift = !0)),
                  r.meta &&
                    (Ne.mac ? (r.meta = !0) : ((r.ctrl = !0), (r.meta = !1))),
                  r
                );
              },
              i = function(t, n, r, i) {
                var a;
                return (
                  (a = Ln.map(ix(t, ">"), o)),
                  (a[a.length - 1] = Ln.extend(a[a.length - 1], {
                    func: r,
                    scope: i || e
                  })),
                  Ln.extend(a[0], {
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
                (ox(n, function(t) {
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
                    : Ln.isArray(u) &&
                      (o = function() {
                        e.execCommand(u[0], u[1], u[2]);
                      }),
                  ox(ix(Ln.trim(t.toLowerCase())), function(e) {
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
          var cx = function(e) {
              var t = ii(e).dom();
              return e.dom() === t.activeElement;
            },
            lx = function(e) {
              var t = void 0 !== e ? e.dom() : document;
              return _.from(t.activeElement).map(lo.fromDom);
            },
            fx = function(e) {
              return lx(ii(e)).filter(function(t) {
                return e.dom().contains(t.dom());
              });
            },
            dx = function(e, t) {
              return e.dom.getParent(t, function(t) {
                return "true" === e.dom.getContentEditable(t);
              });
            },
            mx = function(e) {
              return e.collapsed
                ? _.from(bc(e.startContainer, e.startOffset)).map(lo.fromDom)
                : _.none();
            },
            px = function(e, t) {
              return mx(t).bind(function(t) {
                return ia(t)
                  ? _.some(t)
                  : !1 === oi(e, t)
                    ? _.some(e)
                    : _.none();
              });
            },
            gx = function(e, t) {
              px(lo.fromDom(e.getBody()), t)
                .bind(function(e) {
                  return Cm.firstPositionIn(e.dom());
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
            hx = function(e) {
              if (e.setActive)
                try {
                  e.setActive();
                } catch (t) {
                  e.focus();
                }
              else e.focus();
            },
            vx = function(e) {
              return cx(e) || fx(e).isSome();
            },
            bx = function(e) {
              return e.iframeElement && cx(lo.fromDom(e.iframeElement));
            },
            yx = function(e) {
              var t = e.getBody();
              return t && vx(lo.fromDom(t));
            },
            Cx = function(e) {
              return e.inline ? yx(e) : bx(e);
            },
            wx = function(e) {
              var t = e.selection,
                n = e.settings.content_editable,
                r = e.getBody(),
                o = t.getRng();
              e.quirks.refreshContentEditable();
              var i = dx(e, t.getNode());
              if (e.$.contains(r, i)) return hx(i), gx(e, o), void xx(e);
              void 0 !== e.bookmark &&
                !1 === Cx(e) &&
                Nw.getRng(e).each(function(t) {
                  e.selection.setRng(t), (o = t);
                }),
                n || (Ne.opera || hx(r), e.getWin().focus()),
                (Ne.gecko || n) && (hx(r), gx(e, o)),
                xx(e);
            },
            xx = function(e) {
              return e.editorManager.setActive(e);
            },
            Ex = function(e, t) {
              e.removed || (t ? xx(e) : wx(e));
            },
            Sx = { focus: Ex, hasFocus: Cx },
            Nx = function(e, t) {
              var n = t.dom();
              return n[e];
            },
            kx = function(e, t) {
              return parseInt(Mo(t, e), 10);
            },
            Tx = b(Nx, "clientWidth"),
            _x = b(Nx, "clientHeight"),
            Ax = b(kx, "margin-top"),
            Rx = b(kx, "margin-left"),
            Bx = function(e) {
              return e.dom().getBoundingClientRect();
            },
            Dx = function(e, t, n) {
              var r = Tx(e),
                o = _x(e);
              return t >= 0 && n >= 0 && t <= r && n <= o;
            },
            Ox = function(e, t, n, r) {
              var o = Bx(t),
                i = e ? o.left + t.dom().clientLeft + Rx(t) : 0,
                a = e ? o.top + t.dom().clientTop + Ax(t) : 0,
                u = n - i,
                s = r - a;
              return { x: u, y: s };
            },
            Px = function(e, t, n) {
              var r = lo.fromDom(e.getBody()),
                o = e.inline ? r : ai(r),
                i = Ox(e.inline, o, t, n);
              return Dx(o, i.x, i.y);
            },
            Ix = function(e) {
              return _.from(e).map(lo.fromDom);
            },
            Lx = function(e) {
              var t = e.inline ? e.getBody() : e.getContentAreaContainer();
              return Ix(t)
                .map(function(e) {
                  return oi(ii(e), e);
                })
                .getOr(!1);
            },
            Mx = { isXYInContentArea: Px, isEditorAttachedToDom: Lx };
          function Fx() {
            var e = function() {
              throw new Error(
                "Theme did not provide a NotificationManager implementation."
              );
            };
            return { open: e, close: e, reposition: e, getArgs: e };
          }
          function Ux(e) {
            var t = [],
              n = function() {
                var t = e.theme;
                return t && t.getNotificationManagerImpl
                  ? t.getNotificationManagerImpl()
                  : Fx();
              },
              r = function() {
                return _.from(t[0]);
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
                Z(t, function(t) {
                  return t === e;
                }).each(function(e) {
                  t.splice(e, 1);
                });
              },
              s = function(r) {
                if (!e.removed && Mx.isEditorAttachedToDom(e))
                  return X(t, function(e) {
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
                    Pe.requestAnimationFrame(i);
                  }),
                  e.on("remove", function() {
                    H(t.slice(), function(e) {
                      n().close(e);
                    });
                  });
              };
            return f(e), { open: s, close: c, getNotifications: l };
          }
          function jx() {
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
          function zx(e) {
            var t = [],
              n = function() {
                var t = e.theme;
                return t && t.getWindowManagerImpl
                  ? t.getWindowManagerImpl()
                  : jx();
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
                Z(t, function(e) {
                  return e === n;
                }).each(function(r) {
                  t.splice(r, 1), i(n), 0 === t.length && e.focus();
                });
              },
              s = function() {
                return _.from(t[t.length - 1]);
              },
              c = function(t, r) {
                e.editorManager.setActive(e), Nw.store(e);
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
                H(t.slice(0), function(e) {
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
          var Vx = Cu.PluginManager,
            Hx = function(e, t) {
              for (var n in Vx.urls) {
                var r = Vx.urls[n] + "/plugin" + t + ".js";
                if (r === e) return n;
              }
              return null;
            },
            qx = function(e, t) {
              var n = Hx(t, e.suffix);
              return n
                ? "Failed to load plugin: " + n + " from url " + t
                : "Failed to load plugin url: " + t;
            },
            $x = function(e, t) {
              e.notificationManager.open({ type: "error", text: t });
            },
            Wx = function(e, t) {
              e._skinLoaded
                ? $x(e, t)
                : e.on("SkinLoaded", function() {
                    $x(e, t);
                  });
            },
            Yx = function(e, t) {
              Wx(e, "Failed to upload image: " + t);
            },
            Gx = function(e, t) {
              Wx(e, qx(e, t));
            },
            Xx = function(e) {
              for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
              var r = window.console;
              r &&
                (r.error
                  ? r.error.apply(r, arguments)
                  : r.log.apply(r, arguments));
            },
            Zx = {
              pluginLoadError: Gx,
              uploadError: Yx,
              displayError: Wx,
              initError: Xx
            },
            Kx = Cu.PluginManager,
            Jx = Cu.ThemeManager;
          function Qx() {
            var e = ge.getOrDie("XMLHttpRequest");
            return new e();
          }
          function eE(e, t) {
            var n = {},
              r = function(e, t) {
                return e
                  ? e.replace(/\/$/, "") + "/" + t.replace(/^\//, "")
                  : t;
              },
              o = function(e, n, o, i) {
                var a, u;
                (a = Qx()),
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
                return new Te(function(e) {
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
                Ln.each(n[e], function(e) {
                  e(t);
                }),
                  delete n[e];
              },
              c = function(t, n, r) {
                return (
                  e.markPending(t.blobUri()),
                  new Te(function(o) {
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
                return new Te(function(e) {
                  (n[t] = n[t] || []), n[t].push(e);
                });
              },
              d = function(n, r) {
                return (
                  (n = Ln.grep(n, function(t) {
                    return !e.isUploaded(t.blobUri());
                  })),
                  Te.all(
                    Ln.map(n, function(n) {
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
            return !1 === L(t.handler) && (t.handler = o), { upload: m };
          }
          function tE() {
            var e = ge.getOrDie("FileReader");
            return new e();
          }
          function nE(e) {
            var t = ge.getOrDie("Uint8Array");
            return new t(e);
          }
          var rE = function(e) {
              var t = ge.getOrDie("requestAnimationFrame");
              t(e);
            },
            oE = function(e) {
              var t = ge.getOrDie("atob");
              return t(e);
            },
            iE = { atob: oE, requestAnimationFrame: rE },
            aE = function(e) {
              return new Te(function(t, n) {
                var r = function() {
                  n(
                    "Cannot convert " +
                      e +
                      " to Blob. Resource might not exist or is inaccessible."
                  );
                };
                try {
                  var o = Qx();
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
            uE = function(e) {
              var t,
                n,
                r = decodeURIComponent(e).split(",");
              return (
                (n = /data:([^;]+)/.exec(r[0])),
                n && (t = n[1]),
                { type: t, data: r[1] }
              );
            },
            sE = function(e) {
              return new Te(function(t) {
                var n,
                  r,
                  o,
                  i = uE(e);
                try {
                  n = iE.atob(i.data);
                } catch (nP) {
                  return void t(new Blob([]));
                }
                for (r = nE(n.length), o = 0; o < r.length; o++)
                  r[o] = n.charCodeAt(o);
                t(new Blob([r], { type: i.type }));
              });
            },
            cE = function(e) {
              return 0 === e.indexOf("blob:")
                ? aE(e)
                : 0 === e.indexOf("data:")
                  ? sE(e)
                  : null;
            },
            lE = function(e) {
              return new Te(function(t) {
                var n = tE();
                (n.onloadend = function() {
                  t(n.result);
                }),
                  n.readAsDataURL(e);
              });
            },
            fE = { uriToBlob: cE, blobToDataUri: lE, parseDataUri: uE },
            dE = 0,
            mE = function(e) {
              return (e || "blobid") + dE++;
            },
            pE = function(e, t, n, r) {
              var o, i;
              if (0 === t.src.indexOf("blob:"))
                return (
                  (i = e.getByUri(t.src)),
                  void (i
                    ? n({ image: t, blobInfo: i })
                    : fE.uriToBlob(t.src).then(
                        function(r) {
                          fE.blobToDataUri(r).then(function(a) {
                            (o = fE.parseDataUri(a).data),
                              (i = e.create(mE(), r, o)),
                              e.add(i),
                              n({ image: t, blobInfo: i });
                          });
                        },
                        function(e) {
                          r(e);
                        }
                      ))
                );
              (o = fE.parseDataUri(t.src).data),
                (i = e.findFirst(function(e) {
                  return e.base64() === o;
                })),
                i
                  ? n({ image: t, blobInfo: i })
                  : fE.uriToBlob(t.src).then(
                      function(r) {
                        (i = e.create(mE(), r, o)),
                          e.add(i),
                          n({ image: t, blobInfo: i });
                      },
                      function(e) {
                        r(e);
                      }
                    );
            },
            gE = function(e) {
              return e ? e.getElementsByTagName("img") : [];
            };
          function hE(e, t) {
            var n = {},
              r = function(r, o) {
                var i;
                o || (o = Ss.constant(!0)),
                  (i = En.filter(gE(r), function(t) {
                    var n = t.src;
                    return (
                      !!Ne.fileApi &&
                      (!t.hasAttribute("data-mce-bogus") &&
                        (!t.hasAttribute("data-mce-placeholder") &&
                          (!(!n || n === Ne.transparentSrc) &&
                            (0 === n.indexOf("blob:")
                              ? !e.isUploaded(n) && o(t)
                              : 0 === n.indexOf("data:") && o(t)))))
                    );
                  }));
                var a = En.map(i, function(e) {
                  if (n[e.src])
                    return new Te(function(t) {
                      n[e.src].then(function(n) {
                        if ("string" === typeof n) return n;
                        t({ image: e, blobInfo: n.blobInfo });
                      });
                    });
                  var r = new Te(function(n, r) {
                    pE(t, e, n, r);
                  })
                    .then(function(e) {
                      return delete n[e.image.src], e;
                    })
                    .catch(function(t) {
                      return delete n[e.src], t;
                    });
                  return (n[e.src] = r), r;
                });
                return Te.all(a);
              };
            return { findAll: r };
          }
          var vE = 0,
            bE = function() {
              var e = function() {
                  return Math.round(4294967295 * Math.random()).toString(36);
                },
                t = new Date().getTime();
              return "s" + t.toString(36) + e() + e() + e();
            },
            yE = function(e) {
              return e + vE++ + bE();
            },
            CE = { uuid: yE };
          function wE() {
            var e = [],
              t = Ss.constant,
              n = function(e) {
                var t = {
                  "image/jpeg": "jpg",
                  "image/jpg": "jpg",
                  "image/gif": "gif",
                  "image/png": "png"
                };
                return t[e.toLowerCase()] || "dat";
              },
              r = function(e, t, n, r) {
                if (B(e)) {
                  var i = e;
                  return o({ id: i, name: r, blob: t, base64: n });
                }
                if (D(e)) return o(e);
                throw new Error("Unknown input type");
              },
              o = function(e) {
                var r, o;
                if (!e.blob || !e.base64)
                  throw new Error(
                    "blob and base64 representations of the image are required for BlobInfo to be created"
                  );
                return (
                  (r = e.id || CE.uuid("blobid")),
                  (o = e.name || r),
                  {
                    id: t(r),
                    name: t(o),
                    filename: t(o + "." + n(e.blob.type)),
                    blob: t(e.blob),
                    base64: t(e.base64),
                    blobUri: t(e.blobUri || ye.createObjectURL(e.blob)),
                    uri: t(e.uri)
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
                return En.filter(e, t)[0];
              },
              s = function(e) {
                return u(function(t) {
                  return t.blobUri() === e;
                });
              },
              c = function(t) {
                e = En.filter(e, function(e) {
                  return (
                    e.blobUri() !== t || (ye.revokeObjectURL(e.blobUri()), !1)
                  );
                });
              },
              l = function() {
                En.each(e, function(e) {
                  ye.revokeObjectURL(e.blobUri());
                }),
                  (e = []);
              };
            return {
              create: r,
              add: i,
              get: a,
              getByUri: s,
              findFirst: u,
              removeByUri: c,
              destroy: l
            };
          }
          function xE() {
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
          function EE(e) {
            var t,
              n,
              r = wE(),
              o = xE(),
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
                H(e.undoManager.data, function(e) {
                  "fragmented" === e.type
                    ? (e.fragments = V(e.fragments, function(e) {
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
                  e
                    .$(t)
                    .attr({
                      src: ld.shouldReuseFileName(e) ? n + u() : n,
                      "data-mce-src": e.convertURL(n, "src")
                    });
              },
              m = function(n) {
                return (
                  t ||
                    (t = eE(o, {
                      url: ld.getImageUploadUrl(e),
                      basePath: ld.getImageUploadBasePath(e),
                      credentials: ld.getImagesUploadCredentials(e),
                      handler: ld.getImagesUploadHandler(e)
                    })),
                  v().then(
                    a(function(r) {
                      var o;
                      return (
                        (o = V(r, function(e) {
                          return e.blobInfo;
                        })),
                        t.upload(o, f).then(
                          a(function(t) {
                            var o = V(t, function(t, n) {
                              var o = r[n].image;
                              return (
                                t.status && ld.shouldReplaceBlobUris(e)
                                  ? d(o, t.url)
                                  : t.error && Zx.uploadError(e, t.error),
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
                if (ld.isAutomaticUploadsEnabled(e)) return m(t);
              },
              g = function(t) {
                if (
                  !1 ===
                  te(i, function(e) {
                    return e(t);
                  })
                )
                  return !1;
                if (0 === t.getAttribute("src").indexOf("data:")) {
                  var n = ld.getImagesDataImgFilter(e);
                  return n(t);
                }
                return !0;
              },
              h = function(e) {
                i.push(e);
              },
              v = function() {
                return (
                  n || (n = hE(o, r)),
                  n.findAll(e.getBody(), g).then(
                    a(function(t) {
                      return (
                        (t = W(t, function(t) {
                          return (
                            "string" !== typeof t || (Zx.displayError(e, t), !1)
                          );
                        })),
                        H(t, function(e) {
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
                      (a = G(
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
                ld.isAutomaticUploadsEnabled(e) ? p() : v();
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
                  H(e, function(e) {
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
          var SE = function(e, t) {
              return e.hasOwnProperty(t.nodeName);
            },
            NE = function(e, t) {
              return (
                !!Na.isText(t) ||
                (!!Na.isElement(t) && (!SE(e, t) && !qm.isBookmarkNode(t)))
              );
            },
            kE = function(e, t, n) {
              return z(Gh.parents(lo.fromDom(n), lo.fromDom(t)), function(t) {
                return SE(e, t.dom());
              });
            },
            TE = function(e, t) {
              if (Na.isText(t)) {
                if (0 === t.nodeValue.length) return !0;
                if (
                  /^\s+$/.test(t.nodeValue) &&
                  (!t.nextSibling || SE(e, t.nextSibling))
                )
                  return !0;
              }
              return !1;
            },
            _E = function(e) {
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
                  Na.isElement(v) &&
                  f &&
                  ((l = b.nodeName.toLowerCase()),
                  g.isValidChild(l, f.toLowerCase()) && !kE(h, b, v)))
              ) {
                (t = p.getRng()),
                  (n = t.startContainer),
                  (r = t.startOffset),
                  (o = t.endContainer),
                  (i = t.endOffset),
                  (c = Sx.hasFocus(e)),
                  (v = b.firstChild);
                while (v)
                  if (NE(h, v)) {
                    if (TE(h, v)) {
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
            AE = function(e) {
              e.settings.forced_root_block && e.on("NodeChange", b(_E, e));
            },
            RE = { setup: AE },
            BE = function(e) {
              var t = e.startContainer,
                n = e.startOffset;
              return Na.isText(t)
                ? 0 === n
                  ? _.some(lo.fromDom(t))
                  : _.none()
                : _.from(t.childNodes[n]).map(lo.fromDom);
            },
            DE = function(e) {
              var t = e.endContainer,
                n = e.endOffset;
              return Na.isText(t)
                ? n === t.data.length
                  ? _.some(lo.fromDom(t))
                  : _.none()
                : _.from(t.childNodes[n - 1]).map(lo.fromDom);
            },
            OE = function(e) {
              return hi(e).fold(h([e]), function(t) {
                return [e].concat(OE(t));
              });
            },
            PE = function(e) {
              return vi(e).fold(h([e]), function(t) {
                return "br" === go(t)
                  ? li(t)
                      .map(function(t) {
                        return [e].concat(PE(t));
                      })
                      .getOr([])
                  : [e].concat(PE(t));
              });
            },
            IE = function(e, t) {
              return wc([BE(t), DE(t)], function(t, n) {
                var r = X(OE(e), b(ei, t)),
                  o = X(PE(e), b(ei, n));
                return r.isSome() && o.isSome();
              }).getOr(!1);
            },
            LE = function(e, t, n, r) {
              var o = n,
                i = new Mi(n, o),
                a = e.schema.getNonEmptyElements();
              do {
                if (3 === n.nodeType && 0 !== Ln.trim(n.nodeValue).length)
                  return void (r
                    ? t.setStart(n, 0)
                    : t.setEnd(n, n.nodeValue.length));
                if (a[n.nodeName] && !/^(TD|TH)$/.test(n.nodeName))
                  return void (r
                    ? t.setStartBefore(n)
                    : "BR" === n.nodeName
                      ? t.setEndBefore(n)
                      : t.setEndAfter(n));
                if (Ne.ie && Ne.ie < 11 && e.isBlock(n) && e.isEmpty(n))
                  return void (r ? t.setStart(n, 0) : t.setEnd(n, 0));
              } while ((n = r ? i.next() : i.prev()));
              "BODY" === o.nodeName &&
                (r ? t.setStart(o, 0) : t.setEnd(o, o.childNodes.length));
            },
            ME = function(e) {
              var t = e.selection.getSel();
              return t && t.rangeCount > 0;
            };
          function FE(e) {
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
                  ("nodechange" !== n.type && IC.isEq(o, t)) ||
                    e.fire("SelectionChange"),
                  (t = o);
              }),
              e.on("contextmenu", function() {
                e.fire("SelectionChange");
              }),
              e.on("SelectionChange", function() {
                var t = e.selection.getStart(!0);
                !t ||
                  (!Ne.range && e.selection.isCollapsed()) ||
                  (ME(e) &&
                    !r(t) &&
                    e.dom.isChildOf(t, e.getBody()) &&
                    e.nodeChanged({ selectionChange: !0 }));
              }),
              e.on("MouseUp", function(t) {
                !t.isDefaultPrevented() &&
                  ME(e) &&
                  ("IMG" === e.selection.getNode().nodeName
                    ? Pe.setEditorTimeout(e, function() {
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
          var UE,
            jE = function(e) {
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
            zE = function(e) {
              return e.inline ? jE(e.getBody()) : { left: 0, top: 0 };
            },
            VE = function(e) {
              var t = e.getBody();
              return e.inline
                ? { left: t.scrollLeft, top: t.scrollTop }
                : { left: 0, top: 0 };
            },
            HE = function(e) {
              var t = e.getBody(),
                n = e.getDoc().documentElement,
                r = { left: t.scrollLeft, top: t.scrollTop },
                o = {
                  left: t.scrollLeft || n.scrollLeft,
                  top: t.scrollTop || n.scrollTop
                };
              return e.inline ? r : o;
            },
            qE = function(e, t) {
              if (t.target.ownerDocument !== e.getDoc()) {
                var n = jE(e.getContentAreaContainer()),
                  r = HE(e);
                return {
                  left: t.pageX - n.left + r.left,
                  top: t.pageY - n.top + r.top
                };
              }
              return { left: t.pageX, top: t.pageY };
            },
            $E = function(e, t, n) {
              return {
                pageX: n.left - e.left + t.left,
                pageY: n.top - e.top + t.top
              };
            },
            WE = function(e, t) {
              return $E(zE(e), VE(e), qE(e, t));
            },
            YE = { calc: WE },
            GE = Na.isContentEditableFalse,
            XE = Na.isContentEditableTrue,
            ZE = function(e, t) {
              return GE(t) && t !== e;
            },
            KE = function(e, t, n) {
              return t !== n && !e.dom.isChildOf(t, n) && !GE(t);
            },
            JE = function(e) {
              var t = e.cloneNode(!0);
              return t.removeAttribute("data-mce-selected"), t;
            },
            QE = function(e, t, n, r) {
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
            eS = function(e, t) {
              e.parentNode !== t && t.appendChild(e);
            },
            tS = function(e, t, n, r, o, i) {
              var a = 0,
                u = 0;
              (e.style.left = t.pageX + "px"),
                (e.style.top = t.pageY + "px"),
                t.pageX + n > o && (a = t.pageX + n - o),
                t.pageY + r > i && (u = t.pageY + r - i),
                (e.style.width = n - a + "px"),
                (e.style.height = r - u + "px");
            },
            nS = function(e) {
              e && e.parentNode && e.parentNode.removeChild(e);
            },
            rS = function(e) {
              return 0 === e.button;
            },
            oS = function(e) {
              return e.element;
            },
            iS = function(e, t) {
              return { pageX: t.pageX - e.relX, pageY: t.pageY + 5 };
            },
            aS = function(e, t) {
              return function(n) {
                if (rS(n)) {
                  var r = En.find(t.dom.getParents(n.target), Ss.or(GE, XE));
                  if (ZE(t.getBody(), r)) {
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
                      (e.ghost = QE(t, r, e.width, e.height));
                  }
                }
              };
            },
            uS = function(e, t) {
              var n = Pe.throttle(function(e, n) {
                t._selectionOverrides.hideFakeCaret(),
                  t.selection.placeCaretAt(e, n);
              }, 0);
              return function(r) {
                var o = Math.max(
                  Math.abs(r.screenX - e.screenX),
                  Math.abs(r.screenY - e.screenY)
                );
                if (oS(e) && !e.dragging && o > 10) {
                  var i = t.fire("dragstart", { target: e.element });
                  if (i.isDefaultPrevented()) return;
                  (e.dragging = !0), t.focus();
                }
                if (e.dragging) {
                  var a = iS(e, YE.calc(t, r));
                  eS(e.ghost, t.getBody()),
                    tS(e.ghost, a, e.width, e.height, e.maxX, e.maxY),
                    n(r.clientX, r.clientY);
                }
              };
            },
            sS = function(e) {
              var t = e.getSel().getRangeAt(0),
                n = t.startContainer;
              return 3 === n.nodeType ? n.parentNode : n;
            },
            cS = function(e, t) {
              return function(n) {
                if (e.dragging && KE(t, sS(t.selection), e.element)) {
                  var r = JE(e.element),
                    o = t.fire("drop", {
                      targetClone: r,
                      clientX: n.clientX,
                      clientY: n.clientY
                    });
                  o.isDefaultPrevented() ||
                    ((r = o.targetClone),
                    t.undoManager.transact(function() {
                      nS(e.element),
                        t.insertContent(t.dom.getOuterHTML(r)),
                        t._selectionOverrides.hideFakeCaret();
                    }));
                }
                fS(e);
              };
            },
            lS = function(e, t) {
              return function() {
                e.dragging && t.fire("dragend"), fS(e);
              };
            },
            fS = function(e) {
              (e.dragging = !1), (e.element = null), nS(e.ghost);
            },
            dS = function(e) {
              var t,
                n,
                r,
                o,
                i,
                a,
                u = {};
              (t = mu.DOM),
                (a = document),
                (n = aS(u, e)),
                (r = uS(u, e)),
                (o = cS(u, e)),
                (i = lS(u, e)),
                e.on("mousedown", n),
                e.on("mousemove", r),
                e.on("mouseup", o),
                t.bind(a, "mousemove", r),
                t.bind(a, "mouseup", i),
                e.on("remove", function() {
                  t.unbind(a, "mousemove", r), t.unbind(a, "mouseup", i);
                });
            },
            mS = function(e) {
              e.on("drop", function(t) {
                var n =
                  "undefined" !== typeof t.clientX
                    ? e.getDoc().elementFromPoint(t.clientX, t.clientY)
                    : null;
                (GE(n) || GE(e.dom.getContentEditableParent(n))) &&
                  t.preventDefault();
              });
            },
            pS = function(e) {
              dS(e), mS(e);
            },
            gS = { init: pS },
            hS = function(e) {
              var t = function(t) {
                return En.map(t, function(t) {
                  return (t = uc(t)), (t.node = e), t;
                });
              };
              if (Na.isElement(e)) return t(e.getClientRects());
              if (Na.isText(e)) {
                var n = e.ownerDocument.createRange();
                return (
                  n.setStart(e, 0),
                  n.setEnd(e, e.data.length),
                  t(n.getClientRects())
                );
              }
            },
            vS = function(e) {
              return En.reduce(
                e,
                function(e, t) {
                  return e.concat(hS(t));
                },
                []
              );
            };
          (function(e) {
            (e[(e["Up"] = -1)] = "Up"), (e[(e["Down"] = 1)] = "Down");
          })(UE || (UE = {}));
          var bS = function(e, t, n, r) {
              while ((r = Wd(r, e, ic, t))) if (n(r)) return;
            },
            yS = function(e, t, n, r, o, i) {
              var a,
                u,
                s = 0,
                c = [],
                l = function(r) {
                  var i, a, l;
                  for (
                    l = vS([r]), -1 === e && (l = l.reverse()), i = 0;
                    i < l.length;
                    i++
                  )
                    if (((a = l[i]), !n(a, u))) {
                      if (
                        (c.length > 0 && t(a, En.last(c)) && s++,
                        (a.line = s),
                        o(a))
                      )
                        return !0;
                      c.push(a);
                    }
                };
              return (
                (u = En.last(i.getClientRects())),
                u ? ((a = i.getNode()), l(a), bS(e, r, l, a), c) : c
              );
            },
            CS = function(e, t) {
              return t.line > e;
            },
            wS = function(e, t) {
              return t.line === e;
            },
            xS = b(yS, UE.Up, fc, dc),
            ES = b(yS, UE.Down, dc, fc),
            SS = function(e, t, n, r) {
              var o,
                i,
                a,
                u,
                s,
                c,
                l = af(t),
                f = [],
                d = 0,
                m = function(e) {
                  return En.last(e.getClientRects());
                };
              1 === e
                ? ((o = l.next), (i = dc), (a = fc), (u = qc.after(r)))
                : ((o = l.prev), (i = fc), (a = dc), (u = qc.before(r))),
                (c = m(u));
              do {
                if (u.isVisible() && ((s = m(u)), !a(s, c))) {
                  if (
                    (f.length > 0 && i(s, En.last(f)) && d++,
                    (s = uc(s)),
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
            NS = function(e) {
              return function(t) {
                return CS(e, t);
              };
            },
            kS = function(e) {
              return function(t) {
                return wS(e, t);
              };
            },
            TS = Na.isContentEditableFalse,
            _S = Wd,
            AS = function(e, t) {
              return Math.abs(e.left - t);
            },
            RS = function(e, t) {
              return Math.abs(e.right - t);
            },
            BS = function(e, t) {
              return e >= t.left && e <= t.right;
            },
            DS = function(e, t) {
              return En.reduce(e, function(e, n) {
                var r, o;
                return (
                  (r = Math.min(AS(e, t), RS(e, t))),
                  (o = Math.min(AS(n, t), RS(n, t))),
                  BS(t, n)
                    ? n
                    : BS(t, e)
                      ? e
                      : o === r && TS(n.node)
                        ? n
                        : o < r
                          ? n
                          : e
                );
              });
            },
            OS = function(e, t, n, r) {
              while ((r = _S(r, e, ic, t))) if (n(r)) return;
            },
            PS = function(e, t) {
              var n = [],
                r = function(e, r) {
                  var o;
                  return (
                    (o = En.filter(vS([r]), function(n) {
                      return !e(n, t);
                    })),
                    (n = n.concat(o)),
                    0 === o.length
                  );
                };
              return (
                n.push(t),
                OS(UE.Up, e, b(r, fc), t.node),
                OS(UE.Down, e, b(r, dc), t.node),
                n
              );
            },
            IS = function(e) {
              return En.filter(En.toArray(e.getElementsByTagName("*")), Id);
            },
            LS = function(e, t) {
              return { node: e.node, before: AS(e, t) < RS(e, t) };
            },
            MS = function(e, t, n) {
              var r,
                o = vS(IS(e)),
                i = En.filter(o, function(e) {
                  return n >= e.top && n <= e.bottom;
                });
              return (
                (r = DS(i, t)),
                r && ((r = DS(PS(e, r), t)), r && Id(r.node)) ? LS(r, t) : null
              );
            },
            FS = function(e, t, n) {
              return (
                !n.collapsed &&
                G(
                  n.getClientRects(),
                  function(n, r) {
                    return n || mc(r, e, t);
                  },
                  !1
                )
              );
            },
            US = { isXYWithinRange: FS },
            jS = function(e) {
              var t = Ru(function() {
                if (!e.removed) {
                  var t = e.selection.getRng();
                  if (t.collapsed) {
                    var n = $l(e, e.selection.getRng(), !1);
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
            zS = { setup: jS },
            VS = {
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
                return Ne.mac ? e.metaKey : e.ctrlKey && !e.altKey;
              }
            },
            HS = Na.isContentEditableTrue,
            qS = Na.isContentEditableFalse,
            $S = um,
            WS = am,
            YS = function(e, t) {
              var n = e.getBody();
              while (t && t !== n) {
                if (HS(t) || qS(t)) return t;
                t = t.parentNode;
              }
              return null;
            },
            GS = function(e) {
              var t,
                n = function(t) {
                  return e.dom.isBlock(t);
                },
                r = e.getBody(),
                o = Pd(e.getBody(), n, function() {
                  return Sx.hasFocus(e);
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
                    (t = tm(e, r, t)),
                    -1 === e ? qc.fromRangeStart(t) : qc.fromRangeEnd(t)
                  );
                },
                d = function(t) {
                  t.hasAttribute("data-mce-caret") &&
                    (Hs(t), s(c()), e.selection.scrollIntoView(t[0]));
                },
                m = function() {
                  e.on("mouseup", function(t) {
                    var n = c();
                    n.collapsed &&
                      Mx.isXYInContentArea(e, t.clientX, t.clientY) &&
                      s(ql(e, n, !1));
                  }),
                    e.on("click", function(t) {
                      var n;
                      (n = YS(e, t.target)),
                        n &&
                          (qS(n) && (t.preventDefault(), e.focus()),
                          HS(n) &&
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
                          var r = YS(e, n.target);
                          qS(r) && (t || (n.preventDefault(), v(Hl(e, r))));
                        });
                    },
                    i = function(e) {
                      var t = af(e);
                      if (!e.firstChild) return !1;
                      var n = qc.before(e.firstChild),
                        r = t.next(n);
                      return r && !WS(r) && !$S(r);
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
                          !1 !== qS(YS(e, r))
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
                        !1 !== Mx.isXYInContentArea(e, t.clientX, t.clientY)
                      )
                        if (((n = YS(e, o)), n))
                          qS(n)
                            ? (t.preventDefault(), v(Hl(e, n)))
                            : (b(),
                              (HS(n) && t.shiftKey) ||
                                US.isXYWithinRange(
                                  t.clientX,
                                  t.clientY,
                                  e.selection.getRng()
                                ) ||
                                (C(),
                                e.selection.placeCaretAt(
                                  t.clientX,
                                  t.clientY
                                )));
                        else if (!1 === Id(o)) {
                          b(), C();
                          var i = MS(r, t.clientX, t.clientY);
                          if (i && !d(t.target, i.node)) {
                            t.preventDefault();
                            var a = l(1, i.node, i.before, !1);
                            e.getBody().focus(), s(a);
                          }
                        }
                    }),
                    e.on("keypress", function(t) {
                      if (!VS.modifierPressed(t))
                        switch (t.keyCode) {
                          default:
                            qS(e.selection.getNode()) && t.preventDefault();
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
                        !Ne.ie
                      ) {
                        var n = u();
                        n &&
                          (e.preventDefault(),
                          t.clearData(),
                          t.setData("text/html", n.outerHTML),
                          t.setData("text/plain", n.outerText));
                      }
                    }),
                    gS.init(e),
                    zS.setup(e);
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
                  return Os(e) || js(e) || zs(e);
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
                        if (((p = f(-1, n)), Id(p.getNode(!0))))
                          return l(-1, p.getNode(!0), !1, !1);
                        if (Id(p.getNode()))
                          return l(-1, p.getNode(), !p.isAtEnd(), !1);
                      } else {
                        if (((p = f(1, n)), Id(p.getNode())))
                          return l(1, p.getNode(), !p.isAtEnd(), !1);
                        if (Id(p.getNode(!0)))
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
                      qS(s.parentNode) &&
                      ((s = s.parentNode),
                      (c = y.nodeIndex(s)),
                      (s = s.parentNode)),
                    1 !== s.nodeType
                      ? null
                      : (d === c + 1 && (o = s.childNodes[c]),
                        qS(o)
                          ? ((g = v = o.cloneNode(!0)),
                            (m = e.fire("ObjectSelected", {
                              target: o,
                              targetClone: g
                            })),
                            m.isDefaultPrevented()
                              ? null
                              : ((a = Xu(lo.fromDom(e.getBody()), "#" + i).fold(
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
                                g === v && Ne.ie
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
                                H(
                                  qu(
                                    lo.fromDom(e.getBody()),
                                    "*[data-mce-selected]"
                                  ),
                                  function(e) {
                                    Do(e, "data-mce-selected");
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
                    Xu(lo.fromDom(e.getBody()), "#" + i).each(_u),
                    (t = null)),
                    Xu(lo.fromDom(e.getBody()), "#" + i).each(_u),
                    (t = null);
                },
                y = function() {
                  o.destroy(), (t = null);
                },
                C = function() {
                  o.hide();
                };
              return (
                Ne.ceFalse && (m(), p()),
                {
                  showCaret: l,
                  showBlockCaretContainer: d,
                  hideFakeCaret: C,
                  destroy: y
                }
              );
            },
            XS = function(e) {
              return 0 === e.indexOf("data-") || 0 === e.indexOf("aria-");
            },
            ZS = function(e) {
              return e.replace(/<!--|-->/g, "");
            },
            KS = function(e, t) {
              return (
                !e.allow_html_data_urls &&
                (/^data:image\//i.test(t)
                  ? !1 === e.allow_svg_data_urls &&
                    /^data:image\/svg\+xml/i.test(t)
                  : /^data:/i.test(t))
              );
            },
            JS = function(e, t, n) {
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
          function QS(e, t) {
            void 0 === t && (t = tu());
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
                  B,
                  D,
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
                  H = qa.decode,
                  q = Ln.makeMap(
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
                      x && !v && !1 === XS(n))
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
                      if (KS(e, c)) return;
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
                  (D = n + ">");
                while ((l = I.exec(D))) {
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
                          (B = E.attributesForced),
                          (O = E.removeEmptyAttrs),
                          O && !m.length && (S = !1),
                          B)
                        ) {
                          p = B.length;
                          while (p--)
                            (N = B[p]),
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
                            (j = JS(t, n, I.lastIndex)), (I.lastIndex = j);
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
                        ? o(ZS(f))
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
            e.findEndTag = JS;
          })(QS || (QS = {}));
          var eN = QS,
            tN = function(e, t) {
              var n = new RegExp(
                ["\\s?(" + e.join("|") + ')="[^"]+"'].join("|"),
                "gi"
              );
              return t.replace(n, "");
            },
            nN = function(e, t) {
              var n,
                r,
                o,
                i,
                a,
                u = t,
                s = /<(\w+) [^>]*data-mce-bogus="all"[^>]*>/g,
                c = e.schema;
              (u = tN(e.getTempAttrs(), u)), (a = c.getShortEndedElements());
              while ((i = s.exec(u)))
                (r = s.lastIndex),
                  (o = i[0].length),
                  (n = a[i[1]] ? r : eN.findEndTag(c, u, r)),
                  (u = u.substring(0, r - o) + u.substring(n)),
                  (s.lastIndex = r - o);
              return _s.trim(u);
            },
            rN = nN,
            oN = { trimExternal: rN, trimInternal: nN },
            iN = 0,
            aN = 1,
            uN = 2,
            sN = function(e, t) {
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
                        ? (u.push([iN, e[l]]), ++l, ++f)
                        : r - n > i - o
                          ? (u.push([uN, e[l]]), ++l)
                          : (u.push([aN, t[f]]), ++f);
                  } else {
                    a(n, c.start, o, c.start - c.diag, u);
                    for (var d = c.start; d < c.end; ++d) u.push([iN, e[d]]);
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
            cN = { KEEP: iN, DELETE: uN, INSERT: aN, diff: sN },
            lN = function(e) {
              return Na.isElement(e)
                ? e.outerHTML
                : Na.isText(e)
                  ? qa.encodeRaw(e.data, !1)
                  : Na.isComment(e)
                    ? "\x3c!--" + e.data + "--\x3e"
                    : "";
            },
            fN = function(e) {
              var t, n, r;
              (r = document.createElement("div")),
                (t = document.createDocumentFragment()),
                e && (r.innerHTML = e);
              while ((n = r.firstChild)) t.appendChild(n);
              return t;
            },
            dN = function(e, t, n) {
              var r = fN(t);
              if (e.hasChildNodes() && n < e.childNodes.length) {
                var o = e.childNodes[n];
                o.parentNode.insertBefore(r, o);
              } else e.appendChild(r);
            },
            mN = function(e, t) {
              if (e.hasChildNodes() && t < e.childNodes.length) {
                var n = e.childNodes[t];
                n.parentNode.removeChild(n);
              }
            },
            pN = function(e, t) {
              var n = 0;
              En.each(e, function(e) {
                e[0] === cN.KEEP
                  ? n++
                  : e[0] === cN.INSERT
                    ? (dN(t, e[1], n), n++)
                    : e[0] === cN.DELETE && mN(t, n);
              });
            },
            gN = function(e) {
              return En.filter(En.map(e.childNodes, lN), function(e) {
                return e.length > 0;
              });
            },
            hN = function(e, t) {
              var n = En.map(t.childNodes, lN);
              return pN(cN.diff(n, e), t), t;
            },
            vN = { read: gN, write: hN },
            bN = Du(_.none()),
            yN = function() {
              return bN.get().getOrThunk(function() {
                var e = document.implementation.createHTMLDocument("undo");
                return bN.set(_.some(e)), e;
              });
            },
            CN = function(e) {
              return -1 !== e.indexOf("</iframe>");
            },
            wN = function(e) {
              return {
                type: "fragmented",
                fragments: e,
                content: "",
                bookmark: null,
                beforeBookmark: null
              };
            },
            xN = function(e) {
              return {
                type: "complete",
                fragments: null,
                content: e,
                bookmark: null,
                beforeBookmark: null
              };
            },
            EN = function(e) {
              var t, n, r;
              return (
                (t = vN.read(e.getBody())),
                (r = ee(t, function(t) {
                  var n = oN.trimInternal(e.serializer, t);
                  return n.length > 0 ? [n] : [];
                })),
                (n = r.join("")),
                CN(n) ? wN(r) : xN(n)
              );
            },
            SN = function(e, t, n) {
              "fragmented" === t.type
                ? vN.write(t.fragments, e.getBody())
                : e.setContent(t.content, { format: "raw" }),
                e.selection.moveToBookmark(n ? t.beforeBookmark : t.bookmark);
            },
            NN = function(e) {
              return "fragmented" === e.type ? e.fragments.join("") : e.content;
            },
            kN = function(e) {
              var t = lo.fromTag("body", yN());
              return gs(t, NN(e)), H(qu(t, "*[data-mce-bogus]"), Au), ps(t);
            },
            TN = function(e, t) {
              return NN(e) === NN(t);
            },
            _N = function(e, t) {
              return kN(e) === kN(t);
            },
            AN = function(e, t) {
              return !(!e || !t) && (!!TN(e, t) || _N(e, t));
            },
            RN = {
              createFragmentedLevel: wN,
              createCompleteLevel: xN,
              createFromEditor: EN,
              applyToEditor: SN,
              isEq: AN
            };
          function BN(e) {
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
                    !1 === RN.isEq(RN.createFromEditor(e), i[0]) &&
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
                  u() && (t = wl.getUndoBookmark(e.selection));
                },
                add: function(n, r) {
                  var a,
                    s,
                    l,
                    f = e.settings;
                  if (
                    ((l = RN.createFromEditor(e)),
                    (n = n || {}),
                    (n = Ln.extend(n, l)),
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
                  if (s && RN.isEq(s, n)) return null;
                  if (
                    (i[o] && (i[o].beforeBookmark = t),
                    f.custom_undo_redo_levels &&
                      i.length > f.custom_undo_redo_levels)
                  ) {
                    for (a = 0; a < i.length - 1; a++) i[a] = i[a + 1];
                    i.length--, (o = i.length);
                  }
                  (n.bookmark = wl.getUndoBookmark(e.selection)),
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
                      RN.applyToEditor(e, t, !0),
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
                      RN.applyToEditor(e, t, !1),
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
                    (r.typing && i[0] && !RN.isEq(RN.createFromEditor(e), i[0]))
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
                    RN.applyToEditor(e, a, !0),
                    r.transact(n) && (i[o - 1].beforeBookmark = u));
                }
              }),
              r
            );
          }
          var DN = rp.isEq,
            ON = function(e, t, n) {
              var r = e.formatter.get(n);
              if (r)
                for (var o = 0; o < r.length; o++)
                  if (!1 === r[o].inherit && e.dom.is(t, r[o].selector))
                    return !0;
              return !1;
            },
            PN = function(e, t, n, r) {
              var o = e.dom.getRoot();
              return (
                t !== o &&
                ((t = e.dom.getParent(t, function(t) {
                  return (
                    !!ON(e, t, n) ||
                    (t.parentNode === o || !!MN(e, t, n, r, !0))
                  );
                })),
                MN(e, t, n, r))
              );
            },
            IN = function(e, t, n) {
              return (
                !!DN(t, n.inline) ||
                (!!DN(t, n.block) ||
                  (n.selector
                    ? 1 === t.nodeType && e.is(t, n.selector)
                    : void 0))
              );
            },
            LN = function(e, t, n, r, o, i) {
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
                            : rp.getStyle(e, t, a)),
                        o && !u && !n.exact)
                      )
                        return;
                      if (
                        (!o || n.exact) &&
                        !DN(
                          u,
                          rp.normalizeStyleValue(e, rp.replaceVars(c[a], i), a)
                        )
                      )
                        return;
                    }
                } else
                  for (s = 0; s < c.length; s++)
                    if (
                      "attributes" === r
                        ? e.getAttrib(t, c[s])
                        : rp.getStyle(e, t, c[s])
                    )
                      return n;
              return n;
            },
            MN = function(e, t, n, r, o) {
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
                    IN(e.dom, t, i) &&
                      LN(l, t, i, "attributes", o, r) &&
                      LN(l, t, i, "styles", o, r))
                  ) {
                    if ((s = i.classes))
                      for (u = 0; u < s.length; u++)
                        if (!e.dom.hasClass(t, s[u])) return;
                    return i;
                  }
            },
            FN = function(e, t, n, r) {
              var o;
              return r
                ? PN(e, r, t, n)
                : ((r = e.selection.getNode()),
                  !!PN(e, r, t, n) ||
                    ((o = e.selection.getStart()),
                    !(o === r || !PN(e, o, t, n))));
            },
            UN = function(e, t, n) {
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
                        !i[u] && MN(e, r, u, n) && ((i[u] = !0), o.push(u));
                  },
                  e.dom.getRoot()
                ),
                o
              );
            },
            jN = function(e, t) {
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
                    r = rp.getParents(s, n),
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
            zN = {
              matchNode: MN,
              matchName: IN,
              match: FN,
              matchAll: UN,
              canApply: jN,
              matchesUnInheritedFormatSelector: ON
            },
            VN = function(e, t) {
              return e.splitText(t);
            },
            HN = function(e) {
              var t = e.startContainer,
                n = e.startOffset,
                r = e.endContainer,
                o = e.endOffset;
              return (
                t === r && Na.isText(t)
                  ? n > 0 &&
                    n < t.nodeValue.length &&
                    ((r = VN(t, n)),
                    (t = r.previousSibling),
                    o > n
                      ? ((o -= n),
                        (t = r = VN(r, o).previousSibling),
                        (o = r.nodeValue.length),
                        (n = 0))
                      : (o = 0))
                  : (Na.isText(t) &&
                      n > 0 &&
                      n < t.nodeValue.length &&
                      ((t = VN(t, n)), (n = 0)),
                    Na.isText(r) &&
                      o > 0 &&
                      o < r.nodeValue.length &&
                      ((r = VN(r, o).previousSibling),
                      (o = r.nodeValue.length))),
                {
                  startContainer: t,
                  startOffset: n,
                  endContainer: r,
                  endOffset: o
                }
              );
            },
            qN = { split: HN },
            $N = _s.ZWSP,
            WN = "_mce_caret",
            YN = function(e, t) {
              return e.importNode(t, !0);
            },
            GN = function(e) {
              var t = [];
              while (e) {
                if (
                  (3 === e.nodeType && e.nodeValue !== $N) ||
                  e.childNodes.length > 1
                )
                  return [];
                1 === e.nodeType && t.push(e), (e = e.firstChild);
              }
              return t;
            },
            XN = function(e) {
              return GN(e).length > 0;
            },
            ZN = function(e) {
              var t;
              if (e)
                for (t = new Mi(e, e), e = t.current(); e; e = t.next())
                  if (3 === e.nodeType) return e;
              return null;
            },
            KN = function(e) {
              var t = lo.fromTag("span");
              return (
                Ao(t, {
                  id: WN,
                  "data-mce-bogus": "1",
                  "data-mce-type": "format-caret"
                }),
                e && Eu(t, lo.fromText($N)),
                t
              );
            },
            JN = function(e) {
              var t = ZN(e);
              return t && t.nodeValue.charAt(0) === $N && t.deleteData(0, 1), t;
            },
            QN = function(e, t, n) {
              void 0 === n && (n = !0);
              var r = e.dom,
                o = e.selection;
              if (XN(t)) eb.deleteElement(e, !1, lo.fromDom(t), n);
              else {
                var i = o.getRng(),
                  a = r.getParent(t, r.isBlock),
                  u = JN(t);
                i.startContainer === u &&
                  i.startOffset > 0 &&
                  i.setStart(u, i.startOffset - 1),
                  i.endContainer === u &&
                    i.endOffset > 0 &&
                    i.setEnd(u, i.endOffset - 1),
                  r.remove(t, !0),
                  a && r.isEmpty(a) && dg.fillWithPaddingBr(lo.fromDom(a)),
                  o.setRng(i);
              }
            },
            ek = function(e, t, n) {
              void 0 === n && (n = !0);
              var r = e.dom,
                o = e.selection;
              if (t) QN(e, t, n);
              else if (((t = Sl(e.getBody(), o.getStart())), !t))
                while ((t = r.get(WN))) QN(e, t, !1);
            },
            tk = function(e, t, n) {
              var r = e.dom,
                o = r.getParent(n, Ss.curry(rp.isTextBlock, e));
              o && r.isEmpty(o)
                ? n.parentNode.replaceChild(t, n)
                : (dg.removeTrailingBr(lo.fromDom(n)),
                  r.isEmpty(n)
                    ? n.parentNode.replaceChild(t, n)
                    : r.insertAfter(t, n));
            },
            nk = function(e, t) {
              return e.appendChild(t), t;
            },
            rk = function(e, t) {
              var n = Y(
                e,
                function(e, t) {
                  return nk(e, t.cloneNode(!1));
                },
                t
              );
              return nk(n, n.ownerDocument.createTextNode($N));
            },
            ok = function(e, t, n) {
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
                (o = Sl(e.getBody(), l.getStart())),
                o && (i = ZN(o));
              var f = /[^\s\u00a0\u00ad\u200b\ufeff]/;
              c &&
              a > 0 &&
              a < c.length &&
              f.test(c.charAt(a)) &&
              f.test(c.charAt(a - 1))
                ? ((u = l.getBookmark()),
                  r.collapse(!0),
                  (r = bp.expandRng(e, r, e.formatter.get(t))),
                  (r = qN.split(r)),
                  e.formatter.apply(t, n, r),
                  l.moveToBookmark(u))
                : (o && i.nodeValue === $N
                    ? e.formatter.apply(t, n, o)
                    : ((o = YN(e.getDoc(), KN(!0).dom())),
                      (i = o.firstChild),
                      r.insertNode(o),
                      (a = 1),
                      e.formatter.apply(t, n, o)),
                  l.setCursorLocation(i, a));
            },
            ik = function(e, t, n, r) {
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
                if (zN.matchNode(e, s, t, n, r)) {
                  c = s;
                  break;
                }
                s.nextSibling && (u = !0), m.push(s), (s = s.parentNode);
              }
              if (c)
                if (u) {
                  (a = d.getBookmark()), p.collapse(!0);
                  var g = bp.expandRng(e, p, e.formatter.get(t), !0);
                  (g = qN.split(g)),
                    e.formatter.remove(t, n, g),
                    d.moveToBookmark(a);
                } else {
                  l = Sl(e.getBody(), c);
                  var h = KN(!1).dom(),
                    v = rk(m, h);
                  tk(e, h, l || c),
                    QN(e, l, !1),
                    d.setCursorLocation(v, 1),
                    f.isEmpty(c) && f.remove(c);
                }
            },
            ak = function(e, t) {
              var n = e.selection,
                r = e.getBody();
              ek(e, null, !1),
                (8 !== t && 46 !== t) ||
                  !n.isCollapsed() ||
                  n.getStart().innerHTML !== $N ||
                  ek(e, Sl(r, n.getStart())),
                (37 !== t && 39 !== t) || ek(e, Sl(r, n.getStart()));
            },
            uk = function(e) {
              e.on("mouseup keydown", function(t) {
                ak(e, t.keyCode);
              });
            },
            sk = function(e, t) {
              var n = KN(!1),
                r = rk(t, n.dom());
              return wu(lo.fromDom(e), n), _u(lo.fromDom(e)), qc(r, 0);
            },
            ck = function(e, t) {
              var n = e.schema.getTextInlineElements();
              return (
                n.hasOwnProperty(go(t)) && !El(t.dom()) && !Na.isBogus(t.dom())
              );
            },
            lk = function(e) {
              return El(e.dom()) && XN(e.dom());
            },
            fk = {},
            dk = En.filter,
            mk = En.each,
            pk = function(e, t) {
              var n = fk[e];
              n || (fk[e] = n = []), fk[e].push(t);
            },
            gk = function(e, t) {
              mk(fk[e], function(e) {
                e(t);
              });
            };
          pk("pre", function(e) {
            var t,
              n,
              r = e.selection.getRng(),
              o = function(e) {
                return (
                  t(e.previousSibling) &&
                  -1 !== En.indexOf(n, e.previousSibling)
                );
              },
              i = function(e, t) {
                nr(t).remove(),
                  nr(e)
                    .append("<br><br>")
                    .append(t.childNodes);
              };
            (t = Na.matchNodeNames("pre")),
              r.collapsed ||
                ((n = e.selection.getSelectedBlocks()),
                mk(dk(dk(n, t), o), function(e) {
                  i(e.previousSibling, e);
                }));
          });
          var hk = { postProcess: gk },
            vk = /^(src|href|style)$/,
            bk = Ln.each,
            yk = rp.isEq,
            Ck = function(e) {
              return /^(TH|TD)$/.test(e.nodeName);
            },
            wk = function(e, t, n) {
              var r, o, i;
              return (
                (r = t[n ? "startContainer" : "endContainer"]),
                (o = t[n ? "startOffset" : "endOffset"]),
                Na.isElement(r) &&
                  ((i = r.childNodes.length - 1),
                  !n && o && o--,
                  (r = r.childNodes[o > i ? i : o])),
                Na.isText(r) &&
                  n &&
                  o >= r.nodeValue.length &&
                  (r = new Mi(r, e.getBody()).next() || r),
                Na.isText(r) &&
                  !n &&
                  0 === o &&
                  (r = new Mi(r, e.getBody()).prev() || r),
                r
              );
            },
            xk = function(e, t, n, r) {
              var o = e.create(n, r);
              return t.parentNode.insertBefore(o, t), o.appendChild(t), o;
            },
            Ek = function(e, t, n, r, o) {
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
            Sk = function(e, t, n) {
              return (
                !!yk(t, n.inline) ||
                (!!yk(t, n.block) ||
                  (n.selector
                    ? Na.isElement(t) && e.is(t, n.selector)
                    : void 0))
              );
            },
            Nk = function(e, t) {
              return t.links && "A" === e.tagName;
            },
            kk = function(e, t, n, r) {
              return (
                (t = rp.getNonWhiteSpaceSibling(t, n, r)),
                !t || "BR" === t.nodeName || e.isBlock(t)
              );
            },
            Tk = function(e, t, n) {
              var r,
                o = t.parentNode,
                i = e.dom,
                a = e.settings.forced_root_block;
              n.block &&
                (a
                  ? o === i.getRoot() &&
                    ((n.list_block && yk(t, n.list_block)) ||
                      bk(Ln.grep(t.childNodes), function(t) {
                        rp.isValid(e, a, t.nodeName.toLowerCase())
                          ? r
                            ? r.appendChild(t)
                            : ((r = xk(i, t, a)),
                              i.setAttribs(
                                r,
                                e.settings.forced_root_block_attrs
                              ))
                          : (r = 0);
                      }))
                  : i.isBlock(t) &&
                    !i.isBlock(o) &&
                    (kk(i, t, !1) ||
                      kk(i, t.firstChild, !0, 1) ||
                      t.insertBefore(i.create("br"), t.firstChild),
                    kk(i, t, !0) ||
                      kk(i, t.lastChild, !1, 1) ||
                      t.appendChild(i.create("br")))),
                (n.selector && n.inline && !yk(n.inline, t)) || i.remove(t, 1);
            },
            _k = function(e, t, n, r, o) {
              var i,
                a,
                u,
                s = e.dom;
              if (!Sk(s, r, t) && !Nk(r, t)) return !1;
              if ("all" !== t.remove)
                for (
                  bk(t.styles, function(e, i) {
                    (e = rp.normalizeStyleValue(s, rp.replaceVars(e, n), i)),
                      "number" === typeof i && ((i = e), (o = 0)),
                      (t.remove_similar || !o || yk(rp.getStyle(s, o, i), e)) &&
                        s.setStyle(r, i, ""),
                      (u = 1);
                  }),
                    u &&
                      "" === s.getAttrib(r, "style") &&
                      (r.removeAttribute("style"),
                      r.removeAttribute("data-mce-style")),
                    bk(t.attributes, function(e, t) {
                      var i;
                      if (
                        ((e = rp.replaceVars(e, n)),
                        "number" === typeof t && ((t = e), (o = 0)),
                        !o || yk(s.getAttrib(o, t), e))
                      ) {
                        if (
                          "class" === t &&
                          ((e = s.getAttrib(r, t)),
                          e &&
                            ((i = ""),
                            bk(e.split(/\s+/), function(e) {
                              /mce\-\w+/.test(e) && (i += (i ? " " : "") + e);
                            }),
                            i))
                        )
                          return void s.setAttrib(r, t, i);
                        "class" === t && r.removeAttribute("className"),
                          vk.test(t) && r.removeAttribute("data-mce-" + t),
                          r.removeAttribute(t);
                      }
                    }),
                    bk(t.classes, function(e) {
                      (e = rp.replaceVars(e, n)),
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
              return "none" !== t.remove ? (Tk(e, r, t), !0) : void 0;
            },
            Ak = function(e, t, n, r, o) {
              var i;
              return (
                bk(rp.getParents(e.dom, t.parentNode).reverse(), function(t) {
                  var a;
                  i ||
                    "_start" === t.id ||
                    "_end" === t.id ||
                    ((a = zN.matchNode(e, t, n, r, o)),
                    a && !1 !== a.split && (i = t));
                }),
                i
              );
            },
            Rk = function(e, t, n, r, o, i, a, u) {
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
                    if (_k(e, t[d], u, c, c)) {
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
            Bk = function(e, t, n, r, o) {
              var i,
                a,
                u = e.formatter.get(t),
                s = u[0],
                c = !0,
                l = e.dom,
                f = e.selection,
                d = function(r) {
                  var i = Ak(e, r, t, n, o);
                  return Rk(e, u, i, r, r, !0, s, n);
                },
                m = function(e) {
                  return (
                    qm.isBookmarkNode(e) &&
                    Na.isElement(e) &&
                    ("_start" === e.id || "_end" === e.id)
                  );
                },
                p = function(t) {
                  var r, o, i, a, f;
                  if (
                    (Na.isElement(t) &&
                      l.getContentEditable(t) &&
                      ((a = c),
                      (c = "true" === l.getContentEditable(t)),
                      (f = !0)),
                    (r = Ln.grep(t.childNodes)),
                    c && !f)
                  )
                    for (o = 0, i = u.length; o < i; o++)
                      if (_k(e, u[o], n, t, t)) break;
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
                    Na.isText(n) &&
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
                  if (((t = bp.expandRng(e, t, u, !0)), s.split)) {
                    if (
                      ((t = qN.split(t)),
                      (n = wk(e, t, !0)),
                      (r = wk(e, t)),
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
                          Ck(r) &&
                          r.firstChild &&
                          (r = r.firstChild || r),
                        l.isChildOf(n, r) &&
                          n !== r &&
                          !l.isBlock(r) &&
                          !Ck(n) &&
                          !Ck(r))
                      ) {
                        var i = Ek(l, n, "span", !0, {
                          id: "_start",
                          "data-mce-type": "bookmark"
                        });
                        return d(i), void (n = g(!0));
                      }
                      (n = xk(l, n, "span", {
                        id: "_start",
                        "data-mce-type": "bookmark"
                      })),
                        (r = xk(l, r, "span", {
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
                  xp.walk(l, t, function(t) {
                    bk(t, function(t) {
                      p(t),
                        Na.isElement(t) &&
                          "underline" ===
                            e.dom.getStyle(t, "text-decoration") &&
                          t.parentNode &&
                          "underline" ===
                            rp.getTextDecoration(l, t.parentNode) &&
                          _k(
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
                  ? ik(e, t, n, o)
                  : ((i = wl.getPersistentBookmark(e.selection, !0)),
                    h(f.getRng()),
                    f.moveToBookmark(i),
                    s.inline &&
                      zN.match(e, t, n, f.getStart()) &&
                      rp.moveStart(l, f, f.getRng()),
                    e.nodeChanged());
              else {
                r = f.getNode();
                for (var v = 0, b = u.length; v < b; v++)
                  if (u[v].ceFalseOverride && _k(e, u[v], n, r, r)) break;
              }
            },
            Dk = { removeFormat: _k, remove: Bk },
            Ok = Ln.each,
            Pk = function(e) {
              return (
                e &&
                1 === e.nodeType &&
                !qm.isBookmarkNode(e) &&
                !El(e) &&
                !Na.isBogus(e)
              );
            },
            Ik = function(e, t) {
              var n;
              for (n = e; n; n = n[t]) {
                if (3 === n.nodeType && 0 !== n.nodeValue.length) return e;
                if (1 === n.nodeType && !qm.isBookmarkNode(n)) return n;
              }
              return e;
            },
            Lk = function(e, t, n) {
              var r,
                o,
                i = new ig(e);
              if (
                t &&
                n &&
                ((t = Ik(t, "previousSibling")),
                (n = Ik(n, "nextSibling")),
                i.compare(t, n))
              ) {
                for (r = t.nextSibling; r && r !== n; )
                  (o = r), (r = r.nextSibling), t.appendChild(o);
                return (
                  e.remove(n),
                  Ln.each(Ln.grep(n.childNodes), function(e) {
                    t.appendChild(e);
                  }),
                  t
                );
              }
              return n;
            },
            Mk = function(e, t, n) {
              Ok(e.childNodes, function(e) {
                Pk(e) && (t(e) && n(e), e.hasChildNodes() && Mk(e, t, n));
              });
            },
            Fk = function(e, t) {
              return b(function(t, n) {
                return !(!n || !rp.getStyle(e, n, t));
              }, t);
            },
            Uk = function(e, t, n) {
              return b(
                function(t, n, r) {
                  e.setStyle(r, t, n),
                    "" === r.getAttribute("style") &&
                      r.removeAttribute("style"),
                    jk(e, r);
                },
                t,
                n
              );
            },
            jk = function(e, t) {
              "SPAN" === t.nodeName &&
                0 === e.getAttribs(t).length &&
                e.remove(t, !0);
            },
            zk = function(e, t) {
              var n;
              1 === t.nodeType &&
                t.parentNode &&
                1 === t.parentNode.nodeType &&
                ((n = rp.getTextDecoration(e, t.parentNode)),
                e.getStyle(t, "color") && n
                  ? e.setStyle(t, "text-decoration", n)
                  : e.getStyle(t, "text-decoration") === n &&
                    e.setStyle(t, "text-decoration", null));
            },
            Vk = function(e, t, n, r) {
              (t.styles.color || t.styles.textDecoration) &&
                (Ln.walk(r, b(zk, e), "childNodes"), zk(e, r));
            },
            Hk = function(e, t, n, r) {
              t.styles &&
                t.styles.backgroundColor &&
                Mk(
                  r,
                  Fk(e, "fontSize"),
                  Uk(
                    e,
                    "backgroundColor",
                    rp.replaceVars(t.styles.backgroundColor, n)
                  )
                );
            },
            qk = function(e, t, n, r) {
              ("sub" !== t.inline && "sup" !== t.inline) ||
                (Mk(r, Fk(e, "fontSize"), Uk(e, "fontSize", "")),
                e.remove(e.select("sup" === t.inline ? "sub" : "sup", r), !0));
            },
            $k = function(e, t, n, r) {
              r &&
                !1 !== t.merge_siblings &&
                ((r = Lk(e, rp.getNonWhiteSpaceSibling(r), r)),
                (r = Lk(e, r, rp.getNonWhiteSpaceSibling(r, !0))));
            },
            Wk = function(e, t, n) {
              if (t.clear_child_styles) {
                var r = t.links ? "*:not(a)" : "*";
                Ok(e.select(r, n), function(n) {
                  Pk(n) &&
                    Ok(t.styles, function(t, r) {
                      e.setStyle(n, r, "");
                    });
                });
              }
            },
            Yk = function(e, t, n, r) {
              Ok(t, function(t) {
                Ok(e.dom.select(t.inline, r), function(r) {
                  Pk(r) && Dk.removeFormat(e, t, n, r, t.exact ? r : null);
                }),
                  Wk(e.dom, t, r);
              });
            },
            Gk = function(e, t, n, r, o) {
              (zN.matchNode(e, o.parentNode, n, r) &&
                Dk.removeFormat(e, t, r, o)) ||
                (t.merge_with_parents &&
                  e.dom.getParent(o.parentNode, function(i) {
                    if (zN.matchNode(e, i, n, r))
                      return Dk.removeFormat(e, t, r, o), !0;
                  }));
            },
            Xk = {
              mergeWithChildren: Yk,
              mergeUnderlineAndColor: Vk,
              mergeBackgroundColorAndFontSize: Hk,
              mergeSubSup: qk,
              mergeSiblings: $k,
              mergeWithParents: Gk
            },
            Zk = Ln.each,
            Kk = function(e) {
              return (
                e &&
                1 === e.nodeType &&
                !qm.isBookmarkNode(e) &&
                !El(e) &&
                !Na.isBogus(e)
              );
            },
            Jk = function(e, t, n, r) {
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
                      Zk(t.styles, function(t, r) {
                        c.setStyle(e, r, rp.replaceVars(t, n));
                      }),
                      t.styles)
                    ) {
                      var o = c.getAttrib(e, "style");
                      o && e.setAttribute("data-mce-style", o);
                    }
                    Zk(t.attributes, function(t, r) {
                      c.setAttrib(e, r, rp.replaceVars(t, n));
                    }),
                      Zk(t.classes, function(t) {
                        (t = rp.replaceVars(t, n)),
                          c.hasClass(e, t) || c.addClass(e, t);
                      });
                  }
                },
                d = function(e, t) {
                  var n = !1;
                  return (
                    !!u.selector &&
                    (Zk(e, function(e) {
                      if (!("collapsed" in e && e.collapsed !== s))
                        return c.is(t, e.selector) && !El(t)
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
                    xp.walk(r, o, function(o) {
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
                            rp.isEq(h, "br"))
                          )
                            return (i = 0), void (u.block && r.remove(o));
                          if (u.wrapper && zN.matchNode(e, o, t, n)) i = 0;
                          else {
                            if (
                              p &&
                              !b &&
                              u.block &&
                              !u.wrapper &&
                              rp.isTextBlock(e, h) &&
                              rp.isValid(e, v, c)
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
                            !rp.isValid(e, c, h) ||
                            !rp.isValid(e, v, c) ||
                            (!s &&
                              3 === o.nodeType &&
                              1 === o.nodeValue.length &&
                              65279 === o.nodeValue.charCodeAt(0)) ||
                            El(o) ||
                            (u.inline && r.isBlock(o))
                              ? ((i = 0),
                                Zk(Ln.grep(o.childNodes), g),
                                b && (p = y),
                                (i = 0))
                              : (i ||
                                  ((i = r.clone(l, !1)),
                                  o.parentNode.insertBefore(i, o),
                                  m.push(i)),
                                i.appendChild(o));
                          }
                        };
                      Zk(o, g);
                    }),
                    !0 === u.links &&
                      Zk(m, function(e) {
                        var t = function(e) {
                          "A" === e.nodeName && f(e, u),
                            Zk(Ln.grep(e.childNodes), t);
                        };
                        t(e);
                      }),
                    Zk(m, function(o) {
                      var i,
                        s = function(e) {
                          var t = 0;
                          return (
                            Zk(e.childNodes, function(e) {
                              rp.isWhiteSpaceNode(e) ||
                                qm.isBookmarkNode(e) ||
                                t++;
                            }),
                            t
                          );
                        },
                        c = function(e) {
                          var t = !1;
                          return (
                            Zk(e.childNodes, function(e) {
                              if (Kk(e)) return (t = e), !1;
                            }),
                            t
                          );
                        },
                        l = function(e) {
                          var t, n;
                          return (
                            (t = c(e)),
                            t &&
                              !qm.isBookmarkNode(t) &&
                              zN.matchName(r, t, u) &&
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
                            Xk.mergeWithChildren(e, a, n, o),
                            Xk.mergeWithParents(e, u, t, n, o),
                            Xk.mergeBackgroundColorAndFontSize(r, u, n, o),
                            Xk.mergeSubSup(r, u, n, o),
                            Xk.mergeSiblings(r, u, n, o))
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
                        m(c, bp.expandRng(e, i, a), null, !0))
                      : m(c, r, null, !0);
                  else if (
                    s &&
                    u.inline &&
                    !c.select("td[data-mce-selected],th[data-mce-selected]")
                      .length
                  )
                    ok(e, t, n);
                  else {
                    var p = e.selection.getNode();
                    e.settings.forced_root_block ||
                      !a[0].defaultBlock ||
                      c.getParent(p, c.isBlock) ||
                      Jk(e, a[0].defaultBlock),
                      e.selection.setRng(yg.normalize(e.selection.getRng())),
                      (o = wl.getPersistentBookmark(e.selection, !0)),
                      m(c, bp.expandRng(e, l.getRng(), a), o),
                      u.styles && Xk.mergeUnderlineAndColor(c, u, n, p),
                      l.moveToBookmark(o),
                      rp.moveStart(c, l, l.getRng()),
                      e.nodeChanged();
                  }
                  hk.postProcess(t, e);
                }
              } else {
                r = l.getNode();
                for (var g = 0, h = a.length; g < h; g++)
                  if (a[g].ceFalseOverride && c.is(r, a[g].selector))
                    return void f(r, a[g]);
              }
            },
            Qk = { applyFormat: Jk },
            eT = Ln.each,
            tT = function(e, t) {
              var n = {};
              e.set({}),
                t.on("NodeChange", function(r) {
                  var o = rp.getParents(t.dom, r.element),
                    i = {};
                  (o = Ln.grep(o, function(e) {
                    return (
                      1 === e.nodeType && !e.getAttribute("data-mce-bogus")
                    );
                  })),
                    eT(e.get(), function(e, r) {
                      eT(o, function(a) {
                        return t.formatter.matchNode(a, r, {}, e.similar)
                          ? (n[r] ||
                              (eT(e, function(e) {
                                e(!0, { node: a, format: r, parents: o });
                              }),
                              (n[r] = e)),
                            (i[r] = e),
                            !1)
                          : !zN.matchesUnInheritedFormatSelector(t, a, r) &&
                              void 0;
                      });
                    }),
                    eT(n, function(e, t) {
                      i[t] ||
                        (delete n[t],
                        eT(e, function(e) {
                          e(!1, { node: r.element, format: t, parents: o });
                        }));
                    });
                });
            },
            nT = function(e, t, n, r) {
              var o = e.get();
              eT(t.split(","), function(e) {
                o[e] || ((o[e] = []), (o[e].similar = r)), o[e].push(n);
              }),
                e.set(o);
            },
            rT = function(e, t, n, r, o) {
              null === t.get() && tT(t, e), nT(t, n, r, o);
            },
            oT = { formatChanged: rT },
            iT = function(e) {
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
                    Ln.each(r, function(n, r) {
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
                Ln.each(
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
            aT = { get: iT };
          function uT(e) {
            var t = {},
              n = function(e) {
                return e ? t[e] : t;
              },
              r = function(e, n) {
                e &&
                  ("string" !== typeof e
                    ? Ln.each(e, function(e, t) {
                        r(t, e);
                      })
                    : ((n = n.length ? n : [n]),
                      Ln.each(n, function(e) {
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
              r(aT.get(e.dom)),
              r(e.settings.formats),
              { get: n, register: r, unregister: o }
            );
          }
          var sT = Ln.each,
            cT = mu.DOM,
            lT = function(e, t) {
              var n,
                r,
                o,
                i = (t && t.schema) || tu({}),
                a = function(e, t) {
                  t.classes.length && cT.addClass(e, t.classes.join(" ")),
                    cT.setAttribs(e, t.attrs);
                },
                u = function(e) {
                  var t;
                  return (
                    (r =
                      "string" === typeof e
                        ? { name: e, classes: [], attrs: {} }
                        : e),
                    (t = cT.create(r.name)),
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
                    (t && -1 !== Ln.inArray(o, t) ? t : o[0])
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
                      (r || ((r = cT.create("div")), r.appendChild(e)),
                      Ln.each(n, function(t) {
                        var n = u(t);
                        r.insertBefore(n, e);
                      })),
                    c(r, t, o && o.siblings)
                  );
                };
              return e && e.length
                ? ((r = e[0]),
                  (n = u(r)),
                  (o = cT.create("div")),
                  o.appendChild(c(n, e.slice(1), r.siblings)),
                  o)
                : "";
            },
            fT = function(e, t) {
              return lT(mT(e), t);
            },
            dT = function(e) {
              var t,
                n = { classes: [], attrs: {} };
              return (
                (e = n.selector = Ln.trim(e)),
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
                            Ln.inArray(
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
            mT = function(e) {
              return e && "string" === typeof e
                ? ((e = e.split(/\s*,\s*/)[0]),
                  (e = e.replace(/\s*(~\+|~|\+|>)\s*/g, "$1")),
                  Ln.map(e.split(/(?:>|\s+(?![^\[\]]+\]))/), function(e) {
                    var t = Ln.map(e.split(/(?:~\+|~|\+)/), dT),
                      n = t.pop();
                    return t.length && (n.siblings = t), n;
                  }).reverse())
                : [];
            },
            pT = function(e, t) {
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
                  (i = mT(t.selector)),
                  i.length
                    ? (i[0].name || (i[0].name = n),
                      (n = t.selector),
                      (r = lT(i, e)))
                    : (r = lT([n], e)),
                  (o = cT.select(n, r)[0] || r.firstChild),
                  sT(t.styles, function(e, t) {
                    (e = c(e)), e && cT.setStyle(o, t, e);
                  }),
                  sT(t.attributes, function(e, t) {
                    (e = c(e)), e && cT.setAttrib(o, t, e);
                  }),
                  sT(t.classes, function(e) {
                    (e = c(e)), cT.hasClass(o, e) || cT.addClass(o, e);
                  }),
                  e.fire("PreviewFormats"),
                  cT.setStyles(r, { position: "absolute", left: -65535 }),
                  e.getBody().appendChild(r),
                  (a = cT.getStyle(e.getBody(), "fontSize", !0)),
                  (a = /px$/.test(a) ? parseInt(a, 10) : 0),
                  sT(u.split(" "), function(t) {
                    var n = cT.getStyle(o, t, !0);
                    if (
                      ("background-color" !== t ||
                        !/transparent|rgba\s*\([^)]+,\s*0\)/.test(n) ||
                        ((n = cT.getStyle(e.getBody(), t, !0)),
                        "#ffffff" !== cT.toHex(n).toLowerCase())) &&
                      ("color" !== t || "#000000" !== cT.toHex(n).toLowerCase())
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
                  cT.remove(r),
                  s);
            },
            gT = { getCssText: pT, parseSelector: mT, selectorToHtml: fT },
            hT = function(e, t, n, r, o) {
              var i = t.get(n);
              !zN.match(e, n, r, o) || ("toggle" in i[0] && !i[0].toggle)
                ? Qk.applyFormat(e, n, r, o)
                : Dk.remove(e, n, r, o);
            },
            vT = { toggle: hT },
            bT = function(e) {
              e.addShortcut("meta+b", "", "Bold"),
                e.addShortcut("meta+i", "", "Italic"),
                e.addShortcut("meta+u", "", "Underline");
              for (var t = 1; t <= 6; t++)
                e.addShortcut("access+" + t, "", ["FormatBlock", !1, "h" + t]);
              e.addShortcut("access+7", "", ["FormatBlock", !1, "p"]),
                e.addShortcut("access+8", "", ["FormatBlock", !1, "div"]),
                e.addShortcut("access+9", "", ["FormatBlock", !1, "address"]);
            },
            yT = { setup: bT };
          function CT(e) {
            var t = uT(e),
              n = Du(null);
            return (
              yT.setup(e),
              uk(e),
              {
                get: t.get,
                register: t.register,
                unregister: t.unregister,
                apply: b(Qk.applyFormat, e),
                remove: b(Dk.remove, e),
                toggle: b(vT.toggle, e, t),
                match: b(zN.match, e),
                matchAll: b(zN.matchAll, e),
                matchNode: b(zN.matchNode, e),
                canApply: b(zN.canApply, e),
                formatChanged: b(oT.formatChanged, e, n),
                getCssText: b(gT.getCssText, e)
              }
            );
          }
          var wT = Object.prototype.hasOwnProperty,
            xT = function(e, t) {
              return t;
            },
            ET = function(e) {
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
                  for (var a in i) wT.call(i, a) && (r[a] = e(r[a], i[a]));
                }
                return r;
              };
            },
            ST = ET(xT),
            NT = function(e, t, n) {
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
                    (t = e[n].firstChild), t && (t.value = qa.decode(t.value));
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
                  H(t, function(t) {
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
            kT = function(e) {
              var t,
                n,
                r = function(e) {
                  return e && "br" === e.name;
                };
              (t = e.lastChild),
                r(t) && ((n = t.prev), r(n) && (t.remove(), n.remove()));
            },
            TT = { register: NT, trimTrailingBr: kT },
            _T = function(e, t, n) {
              var r,
                o,
                i,
                a = e.dom;
              return (
                (t = t.cloneNode(!0)),
                (r = document.implementation),
                r.createHTMLDocument &&
                  ((o = r.createHTMLDocument("")),
                  Ln.each("BODY" === t.nodeName ? t.childNodes : [t], function(
                    e
                  ) {
                    o.body.appendChild(o.importNode(e, !0));
                  }),
                  (t = "BODY" !== t.nodeName ? o.body.firstChild : o.body),
                  (i = a.doc),
                  (a.doc = o)),
                qw.firePreProcess(e, ST(n, { node: t })),
                i && (a.doc = i),
                t
              );
            },
            AT = function(e, t) {
              return e && e.hasEventListeners("PreProcess") && !t.no_events;
            },
            RT = function(e, t, n) {
              return AT(e, n) ? _T(e, t, n) : t;
            },
            BT = { process: RT },
            DT = function(e, t) {
              H(t, function(t) {
                e.attr(t, null);
              });
            },
            OT = function(e, t, n) {
              e.addNodeFilter("font", function(e) {
                H(e, function(e) {
                  var r = t.parse(e.attr("style")),
                    o = e.attr("color"),
                    i = e.attr("face"),
                    a = e.attr("size");
                  o && (r.color = o),
                    i && (r["font-family"] = i),
                    a && (r["font-size"] = n[parseInt(e.attr("size"), 10) - 1]),
                    (e.name = "span"),
                    e.attr("style", t.serialize(r)),
                    DT(e, ["color", "face", "size"]);
                });
              });
            },
            PT = function(e, t) {
              e.addNodeFilter("strike", function(e) {
                H(e, function(e) {
                  var n = t.parse(e.attr("style"));
                  (n["text-decoration"] = "line-through"),
                    (e.name = "span"),
                    e.attr("style", t.serialize(n));
                });
              });
            },
            IT = function(e, t) {
              var n = ru();
              t.convert_fonts_to_spans &&
                OT(e, n, Ln.explode(t.font_size_legacy_values)),
                PT(e, n);
            },
            LT = function(e, t) {
              t.inline_styles && IT(e, t);
            },
            MT = { register: LT },
            FT = /^[ \t\r\n]*$/,
            UT = {
              "#text": 3,
              "#comment": 8,
              "#cdata": 4,
              "#pi": 7,
              "#doctype": 10,
              "#document-fragment": 11
            },
            jT = function(e, t, n) {
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
            zT = (function() {
              function e(e, t) {
                (this.name = e),
                  (this.type = t),
                  1 === t &&
                    ((this.attributes = []), (this.attributes.map = {}));
              }
              return (
                (e.create = function(t, n) {
                  var r, o;
                  if (((r = new e(t, UT[t] || 1)), n))
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
                  for (t = n.firstChild; t; t = jT(t, n))
                    t.name === e && r.push(t);
                  return r;
                }),
                (e.prototype.empty = function() {
                  var e,
                    t,
                    n,
                    r = this;
                  if (r.firstChild) {
                    for (e = [], n = r.firstChild; n; n = jT(n, r)) e.push(n);
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
                      if (3 === a.type && !FT.test(a.value)) return !1;
                      if (
                        3 === a.type &&
                        a.parent &&
                        t[a.parent.name] &&
                        FT.test(a.value)
                      )
                        return !1;
                      if (n && n(a)) return !1;
                    } while ((a = jT(a, i)));
                  return !0;
                }),
                (e.prototype.walk = function(e) {
                  return jT(this, null, e);
                }),
                e
              );
            })(),
            VT = function(e, t, n, r) {
              var o = e.padd_empty_with_br || t.insert;
              o && n[r.name]
                ? (r.empty().append(new zT("br", 1)).shortEnded = !0)
                : (r.empty().append(new zT("#text", 3)).value = " ");
            },
            HT = function(e) {
              return qT(e, "#text") && " " === e.firstChild.value;
            },
            qT = function(e, t) {
              return (
                e &&
                e.firstChild &&
                e.firstChild === e.lastChild &&
                e.firstChild.name === t
              );
            },
            $T = function(e, t) {
              var n = e.getElementRule(t.name);
              return n && n.paddEmpty;
            },
            WT = function(e, t, n, r) {
              return r.isEmpty(t, n, function(t) {
                return $T(e, t);
              });
            },
            YT = function(e, t) {
              return e && (t[e.name] || "br" === e.name);
            },
            GT = function(e, t) {
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
                    p = Ln.extend({}, n.getBlockElements()),
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
                        WT(n, g, h, u) &&
                          ((f = n.getElementRule(u.name)),
                          f &&
                            (f.removeEmpty
                              ? u.remove()
                              : f.paddEmpty && VT(t, o, p, u))));
                    } else {
                      s = a;
                      while (u && u.firstChild === s && u.lastChild === s) {
                        if (((s = u), p[u.name])) break;
                        u = u.parent;
                      }
                      s === u &&
                        !0 !== t.padd_empty_with_br &&
                        ((d = new zT("#text", 3)),
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
                      var t = e ? Ln.trim(e) : "";
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
                          var o = new zT("li", 1);
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
            XT = Ln.makeMap,
            ZT = Ln.each,
            KT = Ln.explode,
            JT = Ln.extend;
          function QT(e, t) {
            void 0 === t && (t = tu());
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
                  p = XT("tr,td,th,tbody,thead,tfoot,table"),
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
                        WT(t, d, m, a)
                          ? o.insert(r, i[0], !0)
                          : (o.insert(a, i[0], !0), o.insert(r, a)),
                          (o = i[0]),
                          (WT(t, d, m, o) || qT(o, "br")) && o.empty().remove();
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
                          r.wrap(u(new zT("ul", 1)));
                          continue;
                        }
                        t.isValidChild(r.parent.name, "div") &&
                        t.isValidChild("div", r.name)
                          ? r.wrap(u(new zT("div", 1)))
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
                ZT(KT(e), function(e) {
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
                ZT(KT(e), function(e) {
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
                  (v = JT(
                    XT("script,style,head,html,body,title,meta,param"),
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
                              : ((r = B(S, 1)),
                                r.attr(e.forced_root_block_attrs),
                                P.insert(r, o),
                                r.append(o))
                            : (i(r), (r = null)),
                          (o = n);
                      i(r);
                    }
                  },
                  B = function(e, t) {
                    var r,
                      i = new zT(e, t);
                    return (
                      e in n && ((r = o[e]), r ? r.push(i) : (o[e] = [i])), i
                    );
                  },
                  D = function(e) {
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
                c = eN(
                  {
                    validate: E,
                    allow_script_urls: e.allow_script_urls,
                    allow_conditional_comments: e.allow_conditional_comments,
                    self_closing_elements: O(t.getSelfClosingElements()),
                    cdata: function(e) {
                      y.append(B("#cdata", 4)).value = e;
                    },
                    text: function(e, t) {
                      var n;
                      b ||
                        ((e = e.replace(_, " ")),
                        YT(y.lastChild, v) && (e = e.replace(k, ""))),
                        0 !== e.length &&
                          ((n = B("#text", 3)),
                          (n.raw = !!t),
                          (y.append(n).value = e));
                    },
                    comment: function(e) {
                      y.append(B("#comment", 8)).value = e;
                    },
                    pi: function(e, t) {
                      (y.append(B(e, 7)).value = t), D(y);
                    },
                    doctype: function(e) {
                      var t;
                      (t = y.append(B("#doctype", 10))), (t.value = e), D(y);
                    },
                    start: function(e, n, o) {
                      var a, u, s, c, l;
                      if (((s = E ? t.getElementRule(e) : {}), s)) {
                        (a = B(s.outputName || e, 1)),
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
                        v[e] && D(a), o || (y = a), !b && N[e] && (b = !0);
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
                            WT(t, w, N, y) &&
                            !y.attributes.map.name &&
                            !y.attr("id"))
                        )
                          return (
                            (u = y.parent),
                            v[y.name] ? y.empty().remove() : y.unwrap(),
                            void (y = u)
                          );
                        o.paddEmpty &&
                          (HT(y) || WT(t, w, N, y)) &&
                          VT(e, s, v, y),
                          (y = y.parent);
                      }
                    }
                  },
                  t
                );
                var P = (y = new zT(s.context || e.root_name, 11));
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
            return GT(m, e), MT.register(m, e), m;
          }
          var e_ = function(e, t, n) {
              -1 === Ln.inArray(t, n) &&
                (e.addAttributeFilter(n, function(e, t) {
                  var n = e.length;
                  while (n--) e[n].attr(t, null);
                }),
                t.push(n));
            },
            t_ = function(e, t, n) {
              if (!t.no_events && e) {
                var r = qw.firePostProcess(e, ST(t, { content: n }));
                return r.content;
              }
              return n;
            },
            n_ = function(e, t, n) {
              var r = _s.trim(n.getInner ? t.innerHTML : e.getOuterHTML(t));
              return n.selection || ua(lo.fromDom(t)) ? r : Ln.trim(r);
            },
            r_ = function(e, t, n) {
              var r = n.selection ? ST({ forced_root_block: !1 }, n) : n,
                o = e.parse(t, r);
              return TT.trimTrailingBr(o), o;
            },
            o_ = function(e, t, n) {
              var r = gg(e, t);
              return r.serialize(n);
            },
            i_ = function(e, t, n, r, o) {
              var i = o_(t, n, r);
              return t_(e, o, i);
            };
          function a_(e, t) {
            var n,
              r,
              o,
              i = ["data-mce-selected"];
            (n = t && t.dom ? t.dom : mu.DOM),
              (r = t && t.schema ? t.schema : tu(e)),
              (e.entity_encoding = e.entity_encoding || "named"),
              (e.remove_trailing_brs =
                !("remove_trailing_brs" in e) || e.remove_trailing_brs),
              (o = QT(e, r)),
              TT.register(o, e, n);
            var a = function(i, a) {
              var u = ST({ format: "html" }, a || {}),
                s = BT.process(t, i, u),
                c = n_(n, s, u),
                l = r_(o, c, u);
              return "tree" === u.format ? l : i_(t, e, r, l, u);
            };
            return {
              schema: r,
              addNodeFilter: o.addNodeFilter,
              addAttributeFilter: o.addAttributeFilter,
              serialize: a,
              addRules: function(e) {
                r.addValidElements(e);
              },
              setRules: function(e) {
                r.setValidElements(e);
              },
              addTempAttr: b(e_, o, i),
              getTempAttrs: function() {
                return i;
              }
            };
          }
          function u_(e, t) {
            var n = a_(e, t);
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
          function s_(e) {
            return {
              getBookmark: b(qm.getBookmark, e),
              moveToBookmark: b(qm.moveToBookmark, e)
            };
          }
          (function(e) {
            e.isBookmarkNode = qm.isBookmarkNode;
          })(s_ || (s_ = {}));
          var c_ = s_,
            l_ = Na.isContentEditableFalse,
            f_ = Na.isContentEditableTrue,
            d_ = function(e, t) {
              while (t && t !== e) {
                if (f_(t) || l_(t)) return t;
                t = t.parentNode;
              }
              return null;
            },
            m_ = function(e, t) {
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
                C = Ln.each,
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
                  (Ne.gecko ? "" : "outline: 1px dashed black;") +
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
                    T(e.target) && !US.isXYWithinRange(e.clientX, e.clientY, t)
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
                B = function(e) {
                  var n = t.settings.object_resizing;
                  return (
                    !1 !== n &&
                    !Ne.iOS &&
                    ("string" !== typeof n &&
                      (n = "table,img,figure.image,div"),
                    "false" !== e.getAttribute("data-mce-resize") &&
                      (e !== t.getBody() && Zo(lo.fromDom(e), n)))
                  );
                },
                D = function(e) {
                  var i, C, w, x, k;
                  (i = e.screenX - u),
                    (C = e.screenY - s),
                    (g = i * a[2] + f),
                    (h = C * a[3] + d),
                    (g = g < 5 ? 5 : g),
                    (h = h < 5 ? 5 : h),
                    (w =
                      T(n) && !1 !== t.settings.resize_img_proportional
                        ? !VS.modifierPressed(e)
                        : VS.modifierPressed(e) || (T(n) && a[2] * a[3] !== 0)),
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
                    p || (qw.fireObjectResizeStart(t, n, f, d), (p = !0));
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
                    y.unbind(w, "mousemove", D),
                    y.unbind(w, "mouseup", O),
                    x !== w &&
                      (y.unbind(x, "mousemove", D), y.unbind(x, "mouseup", O)),
                    y.remove(r),
                    y.remove(o),
                    P(n),
                    qw.fireObjectResized(t, n, g, h),
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
                    B(e) && !k.isDefaultPrevented()
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
                                y.bind(w, "mousemove", D),
                                y.bind(w, "mouseup", O),
                                x !== w &&
                                  (y.bind(x, "mousemove", D),
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
                            11 === Ne.ie && (i.contentEditable = !1),
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
                  return l_(d_(t.getBody(), e));
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
                  Ne.ie &&
                    Ne.ie >= 11 &&
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
                        Pe.setEditorTimeout(t, function() {
                          t.selection.select(e);
                        });
                      };
                      if (M(e.target))
                        return e.preventDefault(), void n(e.target);
                      /^(TABLE|IMG|HR)$/.test(e.target.nodeName) &&
                        (e.preventDefault(),
                        "IMG" === e.target.tagName && n(e.target));
                    }));
                var e = Pe.throttle(function(e) {
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
                isResizable: B,
                showResizeRect: P,
                hideResizeRect: I,
                updateResizeRect: L,
                destroy: j
              };
            },
            p_ = function(e) {
              return (
                Na.isContentEditableTrue(e) || Na.isContentEditableFalse(e)
              );
            },
            g_ = function(e, t, n) {
              while (e && e !== t) {
                if (n(e)) return e;
                e = e.parentNode;
              }
              return null;
            },
            h_ = function(e, t, n) {
              var r, o, i;
              if (
                ((r = n.elementFromPoint(e, t)),
                (o = n.body.createTextRange()),
                (r && "HTML" !== r.tagName) || (r = n.body),
                o.moveToElementText(r),
                (i = Ln.toArray(o.getClientRects())),
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
            v_ = function(e, t) {
              var n = e && e.parentElement ? e.parentElement() : null;
              return Na.isContentEditableFalse(g_(n, t, p_)) ? null : e;
            },
            b_ = function(e, t, n) {
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
                  r = h_(e, t, n);
                }
                return v_(r, n.body);
              }
              return r;
            },
            y_ = { fromPoint: b_ },
            C_ = function(e, t) {
              return V(t, function(t) {
                var n = e.fire("GetSelectionRange", { range: t });
                return n.range !== t ? n.range : t;
              });
            },
            w_ = { processRanges: C_ },
            x_ = function(e, t) {
              var n = t || document,
                r = n.createDocumentFragment();
              return (
                H(e, function(e) {
                  r.appendChild(e.dom());
                }),
                lo.fromDom(r)
              );
            },
            E_ = jo("element", "width", "rows"),
            S_ = jo("element", "cells"),
            N_ = jo("x", "y"),
            k_ = function(e, t) {
              var n = parseInt(Ro(e, t), 10);
              return isNaN(n) ? 1 : n;
            },
            T_ = function(e, t, n, r, o) {
              for (
                var i = k_(o, "rowspan"),
                  a = k_(o, "colspan"),
                  u = e.rows(),
                  s = n;
                s < n + i;
                s++
              ) {
                u[s] || (u[s] = S_(ds(r), []));
                for (var c = t; c < t + a; c++) {
                  var l = u[s].cells();
                  l[c] = s === n && c === t ? o : fs(o);
                }
              }
            },
            __ = function(e, t, n) {
              var r = e.rows(),
                o = r[n] ? r[n].cells() : [];
              return !!o[t];
            },
            A_ = function(e, t, n) {
              while (__(e, t, n)) t++;
              return t;
            },
            R_ = function(e) {
              return G(
                e,
                function(e, t) {
                  return t.cells().length > e ? t.cells().length : e;
                },
                0
              );
            },
            B_ = function(e, t) {
              for (var n = e.rows(), r = 0; r < n.length; r++)
                for (var o = n[r].cells(), i = 0; i < o.length; i++)
                  if (ei(o[i], t)) return _.some(N_(i, r));
              return _.none();
            },
            D_ = function(e, t, n, r, o) {
              for (var i = [], a = e.rows(), u = n; u <= o; u++) {
                var s = a[u].cells(),
                  c = t < r ? s.slice(t, r + 1) : s.slice(r, t + 1);
                i.push(S_(a[u].element(), c));
              }
              return i;
            },
            O_ = function(e, t, n) {
              var r = t.x(),
                o = t.y(),
                i = n.x(),
                a = n.y(),
                u = o < a ? D_(e, r, o, i, a) : D_(e, r, a, i, o);
              return E_(e.element(), R_(u), u);
            },
            P_ = function(e, t) {
              var n = fs(e.element()),
                r = lo.fromTag("tbody");
              return ku(r, t), Eu(n, r), n;
            },
            I_ = function(e) {
              return V(e.rows(), function(e) {
                var t = V(e.cells(), function(e) {
                    var t = ds(e);
                    return Do(t, "colspan"), Do(t, "rowspan"), t;
                  }),
                  n = fs(e.element());
                return ku(n, t), n;
              });
            },
            L_ = function(e) {
              var t = E_(fs(e), 0, []);
              return (
                H(qu(e, "tr"), function(e, n) {
                  H(qu(e, "td,th"), function(r, o) {
                    T_(t, A_(t, o, n), n, e, r);
                  });
                }),
                E_(t.element(), R_(t.rows()), t.rows())
              );
            },
            M_ = function(e) {
              return P_(e, I_(e));
            },
            F_ = function(e, t, n) {
              return B_(e, t).bind(function(t) {
                return B_(e, n).map(function(n) {
                  return O_(e, t, n);
                });
              });
            },
            U_ = { fromDom: L_, toDom: M_, subsection: F_ },
            j_ = function(e) {
              return X(e, function(e) {
                return "ul" === go(e) || "ol" === go(e);
              });
            },
            z_ = function(e, t) {
              return X(e, function(e) {
                return "li" === go(e) && IE(e, t);
              }).fold(h([]), function(t) {
                return j_(e)
                  .map(function(e) {
                    return [lo.fromTag("li"), lo.fromTag(go(e))];
                  })
                  .getOr([]);
              });
            },
            V_ = function(e, t) {
              var n = G(
                t,
                function(e, t) {
                  return Eu(t, e), t;
                },
                e
              );
              return t.length > 0 ? x_([n]) : n;
            },
            H_ = function(e) {
              return ra(e)
                ? si(e)
                    .filter(na)
                    .fold(h([]), function(t) {
                      return [e, t];
                    })
                : na(e)
                  ? [e]
                  : [];
            },
            q_ = function(e, t) {
              var n = lo.fromDom(t.commonAncestorContainer),
                r = Gh.parentsAndSelf(n, e),
                o = W(r, function(e) {
                  return Qi(e) || Ki(e);
                }),
                i = z_(r, t),
                a = o.concat(i.length ? i : H_(n));
              return V(a, fs);
            },
            $_ = function() {
              return x_([]);
            },
            W_ = function(e, t) {
              return V_(lo.fromDom(t.cloneContents()), q_(e, t));
            },
            Y_ = function(e, t) {
              return Gu(t, "table", b(ei, e));
            },
            G_ = function(e, t) {
              return Y_(e, t[0])
                .bind(function(e) {
                  var n = t[0],
                    r = t[t.length - 1],
                    o = U_.fromDom(e);
                  return U_.subsection(o, n, r).map(function(e) {
                    return x_([U_.toDom(e)]);
                  });
                })
                .getOrThunk($_);
            },
            X_ = function(e, t) {
              return t.length > 0 && t[0].collapsed ? $_() : W_(e, t[0]);
            },
            Z_ = function(e, t) {
              var n = Xy.getCellsFromElementOrRanges(t, e);
              return n.length > 0 ? G_(e, n) : X_(e, t);
            },
            K_ = { read: Z_ },
            J_ = function(e, t) {
              var n,
                r = e.selection.getRng(),
                o = e.dom.create("body"),
                i = e.selection.getSel(),
                a = w_.processRanges(e, qy.getRanges(i));
              if (
                ((t = t || {}),
                (t.get = !0),
                (t.format = t.format || "html"),
                (t.selection = !0),
                (t = e.fire("BeforeGetContent", t)),
                t.isDefaultPrevented())
              )
                return e.fire("GetContent", t), t.content;
              if ("text" === t.format)
                return e.selection.isCollapsed()
                  ? ""
                  : _s.trim(r.text || (i.toString ? i.toString() : ""));
              r.cloneContents
                ? ((n = t.contextual
                    ? K_.read(lo.fromDom(e.getBody()), a).dom()
                    : r.cloneContents()),
                  n && o.appendChild(n))
                : void 0 !== r.item || void 0 !== r.htmlText
                  ? ((o.innerHTML =
                      "<br>" + (r.item ? r.item(0).outerHTML : r.htmlText)),
                    o.removeChild(o.firstChild))
                  : (o.innerHTML = r.toString()),
                (t.getInner = !0);
              var u = e.selection.serializer.serialize(o, t);
              return "tree" === t.format
                ? u
                : ((t.content = e.selection.isCollapsed() ? "" : u),
                  e.fire("GetContent", t),
                  t.content);
            },
            Q_ = { getContent: J_ },
            eA = function(e, t, n) {
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
            tA = { setContent: eA },
            nA = function(e, t, n, r, o) {
              var i = n ? t.startContainer : t.endContainer,
                a = n ? t.startOffset : t.endOffset;
              return _.from(i)
                .map(lo.fromDom)
                .map(function(e) {
                  return r && t.collapsed ? e : gi(e, o(e, a)).getOr(e);
                })
                .bind(function(e) {
                  return bo(e) ? _.some(e) : si(e);
                })
                .map(function(e) {
                  return e.dom();
                })
                .getOr(e);
            },
            rA = function(e, t, n) {
              return nA(e, t, !0, n, function(e, t) {
                return Math.min(bi(e), t);
              });
            },
            oA = function(e, t, n) {
              return nA(e, t, !1, n, function(e, t) {
                return t > 0 ? t - 1 : t;
              });
            },
            iA = function(e, t) {
              var n = e;
              while (e && Na.isText(e) && 0 === e.length)
                e = t ? e.nextSibling : e.previousSibling;
              return e || n;
            },
            aA = function(e, t) {
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
                      r.length === i ? iA(r.nextSibling, !0) : r.parentNode),
                    (o = 0 === a ? iA(o.previousSibling, !1) : o.parentNode),
                    r && r === o))
                    ? r
                    : n && 3 === n.nodeType
                      ? n.parentNode
                      : n)
                : e;
            },
            uA = function(e, t, n, r) {
              var o,
                i,
                a = [];
              if (
                ((i = e.getRoot()),
                (n = e.getParent(n || rA(i, t, t.collapsed), e.isBlock)),
                (r = e.getParent(r || oA(i, t, t.collapsed), e.isBlock)),
                n && n !== i && a.push(n),
                n && r && n !== r)
              ) {
                o = n;
                var u = new Mi(n, i);
                while ((o = u.next()) && o !== r) e.isBlock(o) && a.push(o);
              }
              return r && n !== r && r !== i && a.push(r), a;
            },
            sA = function(e, t, n) {
              return _.from(t).map(function(t) {
                var r = e.nodeIndex(t),
                  o = e.createRng();
                return (
                  o.setStart(t.parentNode, r),
                  o.setEnd(t.parentNode, r + 1),
                  n && (LE(e, o, t, !0), LE(e, o, t, !1)),
                  o
                );
              });
            },
            cA = Ln.each,
            lA = function(e) {
              return !!e.select;
            },
            fA = function(e) {
              return (
                !(!e || !e.ownerDocument) &&
                oi(lo.fromDom(e.ownerDocument), lo.fromDom(e))
              );
            },
            dA = function(e) {
              return (
                !!e && (!!lA(e) || (fA(e.startContainer) && fA(e.endContainer)))
              );
            },
            mA = function(e, t, n, r) {
              var o,
                i,
                a,
                u,
                s,
                c = function(t, n) {
                  var o = e.createRng();
                  t
                    ? (o.setStart(t, n), o.setEnd(t, n), w(o), b(!1))
                    : (LE(e, o, r.getBody(), !0), w(o));
                },
                l = function(e) {
                  return Q_.getContent(r, e);
                },
                f = function(e, t) {
                  return tA.setContent(r, e, t);
                },
                d = function(e) {
                  return rA(r.getBody(), C(), e);
                },
                m = function(e) {
                  return oA(r.getBody(), C(), e);
                },
                p = function(e, t) {
                  return o.getBookmark(e, t);
                },
                g = function(e) {
                  return o.moveToBookmark(e);
                },
                h = function(t, n) {
                  return sA(e, t, n).each(w), t;
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
                  if (void 0 !== r.bookmark && !1 === Sx.hasFocus(r)) {
                    var l = Nw.getRng(r);
                    if (l.isSome())
                      return l
                        .map(function(e) {
                          return w_.processRanges(r, [e])[0];
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
                    (o = w_.processRanges(r, [o])[0]),
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
                  if (dA(e)) {
                    var s = lA(e) ? e : null;
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
                        Ne.ie ||
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
                  return aA(r.getBody(), C());
                },
                S = function(t, n) {
                  return uA(e, C(), t, n);
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
                  if (!qy.hasMultipleRanges(n) && ME(r)) {
                    var o = GC.normalize(e, t);
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
                        cA(s, function(t, n) {
                          cA(r, function(a) {
                            if (e.is(a, n))
                              return (
                                o[n] ||
                                  (cA(t, function(e) {
                                    e(!0, { node: a, selector: n, parents: r });
                                  }),
                                  (o[n] = t)),
                                (i[n] = t),
                                !1
                              );
                          });
                        }),
                          cA(o, function(e, t) {
                            i[t] ||
                              (delete o[t],
                              cA(e, function(e) {
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
                  return Ff.scrollElementIntoView(r, e, t);
                },
                R = function(e, t) {
                  return w(y_.fromPoint(e, t, r.getDoc()));
                },
                B = function() {
                  var e = C();
                  return e.collapsed
                    ? qc.fromRangeStart(e).getClientRects()[0]
                    : e.getBoundingClientRect();
                },
                D = function() {
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
                  getBoundingClientRect: B,
                  destroy: D
                };
              return (
                (o = c_(O)),
                (i = m_(O, r)),
                (O.bookmarkManager = o),
                (O.controlSelection = i),
                O
              );
            },
            pA = Na.isContentEditableFalse,
            gA = vc,
            hA = um,
            vA = am,
            bA = function(e, t) {
              while ((t = e(t))) if (t.isVisible()) return t;
              return t;
            },
            yA = function(e, t) {
              var n = Gd(e, t);
              return !(n || !Na.isBr(e.getNode())) || n;
            },
            CA = function(e, t, n, r) {
              var o,
                i,
                a,
                u,
                s = e === Hc.Forwards,
                c = s ? vA : hA;
              return !r.collapsed && ((o = gA(r)), pA(o))
                ? zl(e, t, o, e === Hc.Backwards, !0)
                : ((u = qs(r)),
                  (i = im(e, t.getBody(), r)),
                  c(i)
                    ? Hl(t, i.getNode(!s))
                    : ((i = n(i)),
                      i
                        ? c(i)
                          ? zl(e, t, i.getNode(!s), s, !0)
                          : ((a = n(i)),
                            c(a) && yA(i, a)
                              ? zl(e, t, a.getNode(!s), s, !0)
                              : u
                                ? $l(t, i.toRange(), !0)
                                : null)
                        : u
                          ? r
                          : null));
            },
            wA = function(e, t, n, r) {
              var o, i, a, u, s, c, l, f, d;
              if (
                ((d = gA(r)),
                (o = im(e, t.getBody(), r)),
                (i = n(t.getBody(), NS(1), o)),
                (a = En.filter(i, kS(1))),
                (s = En.last(o.getClientRects())),
                (vA(o) || sm(o)) && (d = o.getNode()),
                (hA(o) || cm(o)) && (d = o.getNode(!0)),
                !s)
              )
                return null;
              if (((c = s.left), (u = DS(a, c)), u && pA(u.node)))
                return (
                  (l = Math.abs(c - u.left)),
                  (f = Math.abs(c - u.right)),
                  zl(e, t, u.node, l < f, !0)
                );
              if (d) {
                var m = SS(e, t.getBody(), NS(1), d);
                if (((u = DS(En.filter(m, kS(1)), c)), u))
                  return $l(t, u.position.toRange(), !0);
                if (((u = En.last(En.filter(m, kS(0)))), u))
                  return $l(t, u.position.toRange(), !0);
              }
            },
            xA = function(e) {
              var t = e.dom.create(e.settings.forced_root_block);
              return (
                (!Ne.ie || Ne.ie >= 11) &&
                  (t.innerHTML = '<br data-mce-bogus="1">'),
                t
              );
            },
            EA = function(e, t, n) {
              var r,
                o,
                i,
                a = af(e.getBody()),
                u = Ss.curry(bA, a.next),
                s = Ss.curry(bA, a.prev);
              if (n.collapsed && e.settings.forced_root_block) {
                if (((r = e.dom.getParent(n.startContainer, "PRE")), !r))
                  return;
                (o =
                  1 === t ? u(qc.fromRangeStart(n)) : s(qc.fromRangeStart(n))),
                  o ||
                    ((i = xA(e)),
                    1 === t ? e.$(r).after(i) : e.$(r).before(i),
                    e.selection.select(i, !0),
                    e.selection.collapse());
              }
            },
            SA = function(e, t) {
              var n,
                r = af(e.getBody()),
                o = Ss.curry(bA, r.next),
                i = Ss.curry(bA, r.prev),
                a = t ? Hc.Forwards : Hc.Backwards,
                u = t ? o : i,
                s = e.selection.getRng();
              return (n = CA(a, e, u, s)), n || ((n = EA(e, a, s)), n || null);
            },
            NA = function(e, t) {
              var n,
                r = t ? 1 : -1,
                o = t ? ES : xS,
                i = e.selection.getRng();
              return (n = wA(r, e, o, i)), n || ((n = EA(e, r, i)), n || null);
            },
            kA = function(e, t) {
              return function() {
                var n = SA(e, t);
                return !!n && (e.selection.setRng(n), !0);
              };
            },
            TA = function(e, t) {
              return function() {
                var n = NA(e, t);
                return !!n && (e.selection.setRng(n), !0);
              };
            },
            _A = function(e) {
              return V(e, function(e) {
                return ST(
                  {
                    shiftKey: !1,
                    altKey: !1,
                    ctrlKey: !1,
                    metaKey: !1,
                    keyCode: 0,
                    action: p
                  },
                  e
                );
              });
            },
            AA = function(e, t) {
              return (
                t.keyCode === e.keyCode &&
                t.shiftKey === e.shiftKey &&
                t.altKey === e.altKey &&
                t.ctrlKey === e.ctrlKey &&
                t.metaKey === e.metaKey
              );
            },
            RA = function(e, t) {
              return ee(_A(e), function(e) {
                return AA(e, t) ? [e] : [];
              });
            },
            BA = function(e) {
              for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
              var r = Array.prototype.slice.call(arguments, 1);
              return function() {
                return e.apply(null, r);
              };
            },
            DA = function(e, t) {
              return X(RA(e, t), function(e) {
                return e.action();
              });
            },
            OA = { match: RA, action: BA, execute: DA },
            PA = function(e, t, n) {
              var r = oo.detect().os;
              OA.execute(
                [
                  { keyCode: VS.RIGHT, action: kA(e, !0) },
                  { keyCode: VS.LEFT, action: kA(e, !1) },
                  { keyCode: VS.UP, action: TA(e, !1) },
                  { keyCode: VS.DOWN, action: TA(e, !0) },
                  { keyCode: VS.RIGHT, action: _d(e, !0) },
                  { keyCode: VS.LEFT, action: _d(e, !1) },
                  { keyCode: VS.UP, action: Ad(e, !1) },
                  { keyCode: VS.DOWN, action: Ad(e, !0) },
                  { keyCode: VS.RIGHT, action: ly.move(e, t, !0) },
                  { keyCode: VS.LEFT, action: ly.move(e, t, !1) },
                  {
                    keyCode: VS.RIGHT,
                    ctrlKey: !r.isOSX(),
                    altKey: r.isOSX(),
                    action: ly.moveNextWord(e, t)
                  },
                  {
                    keyCode: VS.LEFT,
                    ctrlKey: !r.isOSX(),
                    altKey: r.isOSX(),
                    action: ly.movePrevWord(e, t)
                  }
                ],
                n
              ).each(function(e) {
                n.preventDefault();
              });
            },
            IA = function(e, t) {
              e.on("keydown", function(n) {
                !1 === n.isDefaultPrevented() && PA(e, t, n);
              });
            },
            LA = { setup: IA },
            MA = function(e, t) {
              var n = Gh.parentsAndSelf(t, e);
              return Z(n, Ji).fold(h(n), function(e) {
                return n.slice(0, e);
              });
            },
            FA = function(e) {
              return 1 === pi(e).length;
            },
            UA = function(e, t, n, r) {
              var o = b(ck, t),
                i = V(W(r, o), function(e) {
                  return e.dom();
                });
              if (0 === i.length) eb.deleteElement(t, e, n);
              else {
                var a = sk(n.dom(), i);
                t.selection.setRng(a.toRange());
              }
            },
            jA = function(e, t) {
              var n = lo.fromDom(e.getBody()),
                r = lo.fromDom(e.selection.getStart()),
                o = W(MA(n, r), FA);
              return se(o)
                .map(function(n) {
                  var r = qc.fromRangeStart(e.selection.getRng());
                  return (
                    !(
                      !xh.willDeleteLastPositionInElement(t, r, n.dom()) ||
                      lk(n)
                    ) && (UA(t, e, n, o), !0)
                  );
                })
                .getOr(!1);
            },
            zA = function(e, t) {
              return !!e.selection.isCollapsed() && jA(e, t);
            },
            VA = { backspaceDelete: zA },
            HA = function(e, t, n) {
              OA.execute(
                [
                  {
                    keyCode: VS.BACKSPACE,
                    action: OA.action(lb.backspaceDelete, e, !1)
                  },
                  {
                    keyCode: VS.DELETE,
                    action: OA.action(lb.backspaceDelete, e, !0)
                  },
                  {
                    keyCode: VS.BACKSPACE,
                    action: OA.action(yy.backspaceDelete, e, t, !1)
                  },
                  {
                    keyCode: VS.DELETE,
                    action: OA.action(yy.backspaceDelete, e, t, !0)
                  },
                  {
                    keyCode: VS.BACKSPACE,
                    action: OA.action(pC.backspaceDelete, e, !1)
                  },
                  {
                    keyCode: VS.DELETE,
                    action: OA.action(pC.backspaceDelete, e, !0)
                  },
                  {
                    keyCode: VS.BACKSPACE,
                    action: OA.action(hv.backspaceDelete, e, !1)
                  },
                  {
                    keyCode: VS.DELETE,
                    action: OA.action(hv.backspaceDelete, e, !0)
                  },
                  {
                    keyCode: VS.BACKSPACE,
                    action: OA.action(sv.backspaceDelete, e, !1)
                  },
                  {
                    keyCode: VS.DELETE,
                    action: OA.action(sv.backspaceDelete, e, !0)
                  },
                  {
                    keyCode: VS.BACKSPACE,
                    action: OA.action(VA.backspaceDelete, e, !1)
                  },
                  {
                    keyCode: VS.DELETE,
                    action: OA.action(VA.backspaceDelete, e, !0)
                  }
                ],
                n
              ).each(function(e) {
                n.preventDefault();
              });
            },
            qA = function(e, t) {
              OA.execute(
                [
                  {
                    keyCode: VS.BACKSPACE,
                    action: OA.action(lb.paddEmptyElement, e)
                  },
                  {
                    keyCode: VS.DELETE,
                    action: OA.action(lb.paddEmptyElement, e)
                  }
                ],
                t
              );
            },
            $A = function(e, t) {
              e.on("keydown", function(n) {
                !1 === n.isDefaultPrevented() && HA(e, t, n);
              }),
                e.on("keyup", function(t) {
                  !1 === t.isDefaultPrevented() && qA(e, t);
                });
            },
            WA = { setup: $A },
            YA = function(e) {
              while (e) {
                if (
                  1 === e.nodeType ||
                  (3 === e.nodeType && e.data && /[\r\n\s]/.test(e.data))
                )
                  return e;
                e = e.nextSibling;
              }
            },
            GA = function(e, t) {
              var n,
                r,
                o,
                i,
                a = t,
                u = e.dom,
                s = e.schema.getMoveCaretBeforeOnEnterElements();
              if (t) {
                if (/^(LI|DT|DD)$/.test(t.nodeName)) {
                  var c = YA(t.firstChild);
                  c &&
                    /^(UL|OL|DL)$/.test(c.nodeName) &&
                    t.insertBefore(u.doc.createTextNode(" "), t.firstChild);
                }
                if (((o = u.createRng()), t.normalize(), t.hasChildNodes())) {
                  n = new Mi(t, t);
                  while ((r = n.current())) {
                    if (Na.isText(r)) {
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
                  Na.isBr(t)
                    ? t.nextSibling && u.isBlock(t.nextSibling)
                      ? (o.setStartBefore(t), o.setEndBefore(t))
                      : (o.setStartAfter(t), o.setEndAfter(t))
                    : (o.setStart(t, 0), o.setEnd(t, 0));
                e.selection.setRng(o),
                  u.remove(i),
                  e.selection.scrollIntoView(t);
              }
            },
            XA = function(e, t) {
              var n,
                r,
                o = e.getRoot();
              n = t;
              while (n !== o && "false" !== e.getContentEditable(n))
                "true" === e.getContentEditable(n) && (r = n),
                  (n = n.parentNode);
              return n !== o ? r : o;
            },
            ZA = function(e) {
              return _.from(
                e.dom.getParent(e.selection.getStart(!0), e.dom.isBlock)
              );
            },
            KA = function(e) {
              return ZA(e).fold(h(""), function(e) {
                return e.nodeName.toUpperCase();
              });
            },
            JA = function(e) {
              return ZA(e)
                .filter(function(e) {
                  return ra(lo.fromDom(e));
                })
                .isSome();
            },
            QA = {
              moveToCaretPosition: GA,
              getEditableRoot: XA,
              getParentBlock: ZA,
              getParentBlockName: KA,
              isListItemParentBlock: JA
            },
            eR = function(e, t) {
              return e.firstChild && e.firstChild.nodeName === t;
            },
            tR = function(e, t) {
              return e && e.parentNode && e.parentNode.nodeName === t;
            },
            nR = function(e) {
              return e && /^(OL|UL|LI)$/.test(e.nodeName);
            },
            rR = function(e) {
              return nR(e) && nR(e.parentNode);
            },
            oR = function(e) {
              var t = e.parentNode;
              return /^(LI|DT|DD)$/.test(t.nodeName) ? t : e;
            },
            iR = function(e, t, n) {
              var r = e[n ? "firstChild" : "lastChild"];
              while (r) {
                if (Na.isElement(r)) break;
                r = r[n ? "nextSibling" : "previousSibling"];
              }
              return r === t;
            },
            aR = function(e, t, n, r, o) {
              var i = e.dom,
                a = e.selection.getRng();
              if (n !== e.getBody()) {
                rR(n) && (o = "LI");
                var u = o ? t(o) : i.create("BR");
                if (iR(n, r, !0) && iR(n, r, !1))
                  tR(n, "LI") ? i.insertAfter(u, oR(n)) : i.replace(u, n);
                else if (iR(n, r, !0))
                  tR(n, "LI")
                    ? (i.insertAfter(u, oR(n)),
                      u.appendChild(i.doc.createTextNode(" ")),
                      u.appendChild(n))
                    : n.parentNode.insertBefore(u, n);
                else if (iR(n, r, !1)) i.insertAfter(u, oR(n));
                else {
                  n = oR(n);
                  var s = a.cloneRange();
                  s.setStartAfter(r), s.setEndAfter(n);
                  var c = s.extractContents();
                  "LI" === o && eR(c, "LI")
                    ? ((u = c.firstChild), i.insertAfter(c, n))
                    : (i.insertAfter(c, n), i.insertAfter(u, n));
                }
                i.remove(r), QA.moveToCaretPosition(e, u);
              }
            },
            uR = { insert: aR },
            sR = function(e) {
              return (
                e &&
                "A" === e.nodeName &&
                0 === Ln.trim(_s.trim(e.innerText || e.textContent)).length
              );
            },
            cR = function(e) {
              return e && /^(TD|TH|CAPTION)$/.test(e.nodeName);
            },
            lR = function(e) {
              e.innerHTML = '<br data-mce-bogus="1">';
            },
            fR = function(e, t) {
              return (
                e.nodeName === t ||
                (e.previousSibling && e.previousSibling.nodeName === t)
              );
            },
            dR = function(e, t) {
              return (
                t &&
                e.isBlock(t) &&
                !/^(TD|TH|CAPTION|FORM)$/.test(t.nodeName) &&
                !/^(fixed|absolute)/i.test(t.style.position) &&
                "true" !== e.getContentEditable(t)
              );
            },
            mR = function(e, t, n) {
              var r,
                o = n,
                i = [];
              if (o) {
                while ((o = o.firstChild)) {
                  if (e.isBlock(o)) return;
                  Na.isElement(o) && !t[o.nodeName.toLowerCase()] && i.push(o);
                }
                r = i.length;
                while (r--)
                  (o = i[r]),
                    !o.hasChildNodes() ||
                    (o.firstChild === o.lastChild &&
                      "" === o.firstChild.nodeValue)
                      ? e.remove(o)
                      : sR(o) && e.remove(o);
              }
            },
            pR = function(e, t, n) {
              return !1 === Na.isText(t)
                ? n
                : e
                  ? 1 === n && t.data.charAt(n - 1) === _s.ZWSP
                    ? 0
                    : n
                  : n === t.data.length - 1 && t.data.charAt(n) === _s.ZWSP
                    ? t.data.length
                    : n;
            },
            gR = function(e) {
              var t = e.cloneRange();
              return (
                t.setStart(
                  e.startContainer,
                  pR(!0, e.startContainer, e.startOffset)
                ),
                t.setEnd(e.endContainer, pR(!1, e.endContainer, e.endOffset)),
                t
              );
            },
            hR = function(e) {
              do {
                Na.isText(e) &&
                  (e.nodeValue = e.nodeValue.replace(/^[\r\n]+/, "")),
                  (e = e.firstChild);
              } while (e);
            },
            vR = function(e, t) {
              var n,
                r,
                o = e.getRoot();
              n = t;
              while (n !== o && "false" !== e.getContentEditable(n))
                "true" === e.getContentEditable(n) && (r = n),
                  (n = n.parentNode);
              return n !== o ? r : o;
            },
            bR = function(e, t) {
              var n = ld.getForcedRootBlock(e);
              n &&
                n.toLowerCase() === t.tagName.toLowerCase() &&
                e.dom.setAttribs(t, ld.getForcedRootBlockAttrs(e));
            },
            yR = function(e, t, n, r, o) {
              var i,
                a,
                u,
                s,
                c,
                l,
                f = t || "P",
                d = e.dom,
                m = vR(d, r);
              if (((a = d.getParent(r, d.isBlock)), !a || !dR(d, a))) {
                if (
                  ((a = a || m),
                  (l =
                    a === e.getBody() || cR(a)
                      ? a.nodeName.toLowerCase()
                      : a.parentNode.nodeName.toLowerCase()),
                  !a.hasChildNodes())
                )
                  return (
                    (i = d.create(f)),
                    bR(e, i),
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
                    bR(e, i),
                    u.parentNode.insertBefore(i, u),
                    (s = u);
                  while (s && !d.isBlock(s))
                    (c = s.nextSibling), i.appendChild(s), (s = c);
                  n.setStart(r, o), n.setEnd(r, o);
                }
              }
              return r;
            },
            CR = function(e, t) {
              var n;
              t.normalize(),
                (n = t.lastChild),
                (n && !/^(left|right)$/gi.test(e.getStyle(n, "float", !0))) ||
                  e.add(t, "br");
            },
            wR = function(e, t) {
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
                      ? ((n = g.create(t || m)), bR(e, n))
                      : (n = a.cloneNode(!1)),
                    (u = n),
                    !1 === ld.shouldKeepStyles(e))
                  )
                    g.setAttrib(n, "style", null),
                      g.setAttrib(n, "class", null);
                  else
                    do {
                      if (c[s.nodeName]) {
                        if (El(s)) continue;
                        (i = s.cloneNode(!1)),
                          g.setAttrib(i, "id", ""),
                          n.hasChildNodes()
                            ? (i.appendChild(n.firstChild), n.appendChild(i))
                            : ((u = i), n.appendChild(i));
                      }
                    } while ((s = s.parentNode) && s !== r);
                  return lR(u), n;
                },
                C = function(e) {
                  var t, n, r, u;
                  if (
                    ((u = pR(e, o, i)),
                    Na.isText(o) && (e ? u > 0 : u < o.nodeValue.length))
                  )
                    return !1;
                  if (o.parentNode === a && p && !e) return !0;
                  if (e && Na.isElement(o) && o === a.firstChild) return !0;
                  if (fR(o, "TABLE") || fR(o, "HR"))
                    return (p && !e) || (!p && e);
                  (t = new Mi(o, a)),
                    Na.isText(o) &&
                      (e && 0 === u
                        ? t.prev()
                        : e || u !== o.nodeValue.length || t.next());
                  while ((n = t.current())) {
                    if (Na.isElement(n)) {
                      if (
                        !n.getAttribute("data-mce-bogus") &&
                        ((r = n.nodeName.toLowerCase()), v[r] && "br" !== r)
                      )
                        return !1;
                    } else if (
                      Na.isText(n) &&
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
                    ld.shouldEndContainerOnEmptyBlock(e) &&
                    dR(g, l) &&
                    g.isEmpty(a)
                      ? (s = g.split(l, a))
                      : g.insertAfter(s, a),
                    QA.moveToCaretPosition(e, s);
                };
              GC.normalize(g, b).each(function(e) {
                b.setStart(e.startContainer, e.startOffset),
                  b.setEnd(e.endContainer, e.endOffset);
              }),
                (o = b.startContainer),
                (i = b.startOffset),
                (m = ld.getForcedRootBlock(e)),
                (u = t.shiftKey),
                Na.isElement(o) &&
                  o.hasChildNodes() &&
                  ((p = i > o.childNodes.length - 1),
                  (o = o.childNodes[Math.min(i, o.childNodes.length - 1)] || o),
                  (i = p && Na.isText(o) ? o.nodeValue.length : 0)),
                (r = vR(g, o)),
                r &&
                  (((m && !u) || (!m && u)) && (o = yR(e, m, b, o, i)),
                  (a = g.getParent(o, g.isBlock)),
                  (l = a ? g.getParent(a.parentNode, g.isBlock) : null),
                  (f = a ? a.nodeName.toUpperCase() : ""),
                  (d = l ? l.nodeName.toUpperCase() : ""),
                  "LI" !== d ||
                    t.ctrlKey ||
                    ((a = l), (l = l.parentNode), (f = d)),
                  /^(LI|DT|DD)$/.test(f) && g.isEmpty(a)
                    ? uR.insert(e, y, l, a, m)
                    : (m && a === e.getBody()) ||
                      ((m = m || "P"),
                      Bs(a)
                        ? ((s = Hs(a)),
                          g.isEmpty(a) && lR(a),
                          QA.moveToCaretPosition(e, s))
                        : C()
                          ? w()
                          : C(!0)
                            ? ((s = a.parentNode.insertBefore(y(), a)),
                              QA.moveToCaretPosition(e, fR(a, "HR") ? s : a))
                            : ((n = gR(b).cloneRange()),
                              n.setEndAfter(a),
                              (c = n.extractContents()),
                              hR(c),
                              (s = c.firstChild),
                              g.insertAfter(c, a),
                              mR(g, v, s),
                              CR(g, a),
                              g.isEmpty(a) && lR(a),
                              s.normalize(),
                              g.isEmpty(s)
                                ? (g.remove(s), w())
                                : QA.moveToCaretPosition(e, s)),
                      g.setAttrib(s, "id", ""),
                      e.fire("NewBlock", { newBlock: s })));
            },
            xR = { insert: wR },
            ER = function(e, t) {
              return QA.getParentBlock(e)
                .filter(function(e) {
                  return t.length > 0 && Zo(lo.fromDom(e), t);
                })
                .isSome();
            },
            SR = function(e) {
              return ER(e, ld.getBrNewLineSelector(e));
            },
            NR = function(e) {
              return ER(e, ld.getNoNewLineSelector(e));
            },
            kR = { shouldInsertBr: SR, shouldBlockNewLine: NR },
            TR = bv.generate([{ br: [] }, { block: [] }, { none: [] }]),
            _R = function(e, t) {
              return kR.shouldBlockNewLine(e);
            },
            AR = function(e) {
              return function(t, n) {
                var r = "" === ld.getForcedRootBlock(t);
                return r === e;
              };
            },
            RR = function(e) {
              return function(t, n) {
                return QA.isListItemParentBlock(t) === e;
              };
            },
            BR = function(e, t) {
              return function(n, r) {
                var o = QA.getParentBlockName(n) === e.toUpperCase();
                return o === t;
              };
            },
            DR = function(e) {
              return BR("pre", e);
            },
            OR = function() {
              return BR("summary", !0);
            },
            PR = function(e) {
              return function(t, n) {
                return ld.shouldPutBrInPre(t) === e;
              };
            },
            IR = function(e, t) {
              return kR.shouldInsertBr(e);
            },
            LR = function(e, t) {
              return t;
            },
            MR = function(e) {
              var t = ld.getForcedRootBlock(e),
                n = QA.getEditableRoot(e.dom, e.selection.getStart());
              return n && e.schema.isValidChild(n.nodeName, t || "P");
            },
            FR = function(e, t) {
              return function(n, r) {
                var o = G(
                  e,
                  function(e, t) {
                    return e && t(n, r);
                  },
                  !0
                );
                return o ? _.some(t) : _.none();
              };
            },
            UR = function(e, t) {
              return Nb.evaluateUntil(
                [
                  FR([_R], TR.none()),
                  FR([OR()], TR.br()),
                  FR([DR(!0), PR(!1), LR], TR.br()),
                  FR([DR(!0), PR(!1)], TR.block()),
                  FR([DR(!0), PR(!0), LR], TR.block()),
                  FR([DR(!0), PR(!0)], TR.br()),
                  FR([RR(!0), LR], TR.br()),
                  FR([RR(!0)], TR.block()),
                  FR([AR(!0), LR, MR], TR.block()),
                  FR([AR(!0)], TR.br()),
                  FR([IR], TR.br()),
                  FR([AR(!1), LR], TR.br()),
                  FR([MR], TR.block())
                ],
                [e, t.shiftKey]
              ).getOr(TR.none());
            },
            jR = { getAction: UR },
            zR = function(e, t) {
              jR.getAction(e, t).fold(
                function() {
                  sw.insert(e, t);
                },
                function() {
                  xR.insert(e, t);
                },
                p
              );
            },
            VR = { insert: zR },
            HR = function(e) {
              e.typing && ((e.typing = !1), e.add());
            },
            qR = function(e, t) {
              t.isDefaultPrevented() ||
                (t.preventDefault(),
                HR(e.undoManager),
                e.undoManager.transact(function() {
                  !1 === e.selection.isCollapsed() && e.execCommand("Delete"),
                    VR.insert(e, t);
                }));
            },
            $R = function(e) {
              e.on("keydown", function(t) {
                t.keyCode === VS.ENTER && qR(e, t);
              });
            },
            WR = { setup: $R },
            YR = function(e, t) {
              return KR(e) && Na.isText(t.container());
            },
            GR = function(e, t) {
              var n = t.container(),
                r = t.offset();
              n.insertData(r, " "), e.selection.setCursorLocation(n, r + 1);
            },
            XR = function(e, t, n) {
              return !!YR(n, t) && (GR(e, t), !0);
            },
            ZR = function(e) {
              var t = b(hh.isInlineTarget, e),
                n = qc.fromRangeStart(e.selection.getRng()),
                r = Wb.readLocation(t, e.getBody(), n);
              return r.map(b(XR, e, n)).getOr(!1);
            },
            KR = function(e) {
              return e.fold(h(!1), h(!0), h(!0), h(!1));
            },
            JR = function(e) {
              return !!e.selection.isCollapsed() && ZR(e);
            },
            QR = { insertAtSelection: JR },
            eB = function(e, t) {
              OA.execute(
                [
                  {
                    keyCode: VS.SPACEBAR,
                    action: OA.action(QR.insertAtSelection, e)
                  }
                ],
                t
              ).each(function(e) {
                t.preventDefault();
              });
            },
            tB = function(e) {
              e.on("keydown", function(t) {
                !1 === t.isDefaultPrevented() && eB(e, t);
              });
            },
            nB = { setup: tB },
            rB = function(e) {
              return Xu(lo.fromDom(e.getBody()), "*[data-mce-caret]").fold(
                h(null),
                function(e) {
                  return e.dom();
                }
              );
            },
            oB = function(e) {
              e.selection.setRng(e.selection.getRng());
            },
            iB = function(e, t) {
              t.hasAttribute("data-mce-caret") &&
                (Hs(t), oB(e), e.selection.scrollIntoView(t));
            },
            aB = function(e, t) {
              var n = rB(e);
              if (n)
                return "compositionstart" === t.type
                  ? (t.preventDefault(), t.stopPropagation(), void iB(e, n))
                  : void (Ps(n) && (iB(e, n), e.undoManager.add()));
            },
            uB = function(e) {
              e.on("keyup compositionstart", b(aB, e));
            },
            sB = { setup: uB },
            cB = function(e) {
              var t = ly.setupSelectedState(e);
              sB.setup(e),
                LA.setup(e, t),
                WA.setup(e, t),
                WR.setup(e),
                nB.setup(e);
            },
            lB = { setup: cB };
          function fB(e) {
            var t = Ln.each,
              n = VS.BACKSPACE,
              r = VS.DELETE,
              o = e.dom,
              i = e.selection,
              a = e.settings,
              u = e.parser,
              s = Ne.gecko,
              c = Ne.ie,
              l = Ne.webkit,
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
                        if (Os(n.startContainer)) return;
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
                        Pe.setEditorTimeout(e, function() {
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
                      Pe.setEditorTimeout(e, function() {
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
                    t.keyCode === VS.BACKSPACE &&
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
                    VS.modifierPressed(e) || i.normalize();
                  },
                  !0
                );
              },
              B = function() {
                e.contentStyles.push(
                  "img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}"
                );
              },
              D = function() {
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
                      if (Ne.ie > 11) return void e.getBody().focus();
                      (n = e.selection.getRng()),
                        e.getBody().focus(),
                        e.selection.setRng(n),
                        e.selection.normalize(),
                        e.nodeChanged();
                    }
                  }));
              },
              P = function() {
                Ne.mac &&
                  e.on("keydown", function(t) {
                    !VS.metaKeyPressed(t) ||
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
                        var r = y_.fromPoint(t.x, t.y, e.getDoc());
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
              Ne.windowsPhone || R(),
              l &&
                (C(), E(), A(), M(), N(), F(), Ne.iOS ? (D(), O(), L()) : y()),
              Ne.ie >= 11 && (O(), N()),
              Ne.ie && (y(), I(), U()),
              s && (w(), x(), S(), T(), _(), B(), P(), N()),
              { refreshContentEditable: j, isHidden: z }
            );
          }
          var dB = function(e) {
              return Na.isElement(e) && ta(lo.fromDom(e));
            },
            mB = function(e) {
              var t = e.selection.getRng(),
                n = Vc.fromRangeStart(t),
                r = Vc.fromRangeEnd(t);
              if (Vc.isElementPosition(n)) {
                var o = n.container();
                dB(o) &&
                  Cm.firstPositionIn(o).each(function(e) {
                    return t.setStart(e.container(), e.offset());
                  });
              }
              if (Vc.isElementPosition(r)) {
                o = n.container();
                dB(o) &&
                  Cm.lastPositionIn(o).each(function(e) {
                    return t.setEnd(e.container(), e.offset());
                  });
              }
              e.selection.setRng(yg.normalize(t));
            },
            pB = function(e) {
              e.on("click", function(t) {
                t.detail >= 3 && mB(e);
              });
            },
            gB = function(e) {
              e.on("click", function(t) {
                e.dom.getParent(t.target, "details") && t.preventDefault();
              });
            },
            hB = function(e) {
              e.parser.addNodeFilter("details", function(e) {
                H(e, function(e) {
                  e.attr("data-mce-open", e.attr("open")),
                    e.attr("open", "open");
                });
              }),
                e.serializer.addNodeFilter("details", function(e) {
                  H(e, function(e) {
                    var t = e.attr("data-mce-open");
                    e.attr("open", B(t) ? t : null),
                      e.attr("data-mce-open", null);
                  });
                });
            },
            vB = function(e) {
              gB(e), hB(e);
            },
            bB = mu.DOM,
            yB = function(e, t) {
              var n = lo.fromDom(e.getDoc().head),
                r = lo.fromTag("style");
              _o(r, "type", "text/css"), Eu(r, lo.fromText(t)), Eu(n, r);
            },
            CB = function(e) {
              var t = QT(e.settings, e.schema);
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
                        (n.append(new zT("br", 1)).shortEnded = !0);
                }),
                t
              );
            },
            wB = function(e) {
              e.settings.auto_focus &&
                Pe.setEditorTimeout(
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
            xB = function(e) {
              e.bindPendingEventDelegates(),
                (e.initialized = !0),
                e.fire("init"),
                e.focus(!0),
                e.nodeChanged({ initial: !0 }),
                e.execCallback("init_instance_callback", e),
                wB(e);
            },
            EB = function(e) {
              return e.inline ? bB.styleSheetLoader : e.dom.styleSheetLoader;
            },
            SB = function(e, t) {
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
                    bB.removeClass(e, "mce-content-body"),
                      bB.removeClass(e, "mce-edit-focus"),
                      bB.setAttrib(e, "contentEditable", null);
                  }),
                  bB.addClass(i, "mce-content-body"),
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
                    "static" === bB.getStyle(n, "position", !0) &&
                    (n.style.position = "relative"),
                  (n.contentEditable = e.getParam(
                    "content_editable_state",
                    !0
                  ))),
                (n.disabled = !1),
                (e.editorUpload = EE(e)),
                (e.schema = tu(o)),
                (e.dom = mu(a, {
                  keep_values: !0,
                  url_converter: e.convertURL,
                  url_converter_scope: e,
                  hex_colors: o.force_hex_style_colors,
                  class_filter: o.class_filter,
                  update_styles: !0,
                  root_element: e.inline ? e.getBody() : null,
                  collect: o.content_editable,
                  schema: e.schema,
                  contentCssCors: ld.shouldUseContentCssCors(e),
                  onSetAttrib: function(t) {
                    e.fire("SetAttrib", t);
                  }
                })),
                (e.parser = CB(e)),
                (e.serializer = u_(o, e)),
                (e.selection = mA(e.dom, e.getWin(), e.serializer, e)),
                (e.annotator = Ip(e)),
                (e.formatter = CT(e)),
                (e.undoManager = BN(e)),
                (e._nodeChangeDispatcher = new FE(e)),
                (e._selectionOverrides = GS(e)),
                vB(e),
                pB(e),
                lB.setup(e),
                RE.setup(e),
                e.fire("PreInit"),
                o.browser_spellcheck ||
                  o.gecko_spellcheck ||
                  ((a.body.spellcheck = !1),
                  bB.setAttrib(n, "spellcheck", "false")),
                (e.quirks = fB(e)),
                e.fire("PostRender"),
                o.directionality && (n.dir = o.directionality),
                o.nowrap && (n.style.whiteSpace = "nowrap"),
                o.protect &&
                  e.on("BeforeSetContent", function(e) {
                    Ln.each(o.protect, function(t) {
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
                  Ln.each(e.contentStyles, function(e) {
                    r += e + "\r\n";
                  }),
                  e.dom.addStyle(r)),
                EB(e).loadAll(
                  e.contentCSS,
                  function(t) {
                    xB(e);
                  },
                  function(t) {
                    xB(e);
                  }
                ),
                o.content_style && yB(e, o.content_style);
            },
            NB = { initContentBody: SB },
            kB = mu.DOM,
            TB = function(e, t) {
              if (
                document.domain !== window.location.hostname &&
                Ne.ie &&
                Ne.ie < 12
              ) {
                var n = CE.uuid("mce");
                e[n] = function() {
                  NB.initContentBody(e);
                };
                var r =
                  'javascript:(function(){document.open();document.domain="' +
                  document.domain +
                  '";var ed = window.parent.tinymce.get("' +
                  e.id +
                  '");document.write(ed.iframeHTML);document.close();ed.' +
                  n +
                  "(true);})()";
                return kB.setAttrib(t, "src", r), !0;
              }
              return !1;
            },
            _B = function(e) {
              var t = "number" === typeof e ? e + "px" : e;
              return t || "";
            },
            AB = function(e, t, n, r) {
              var o = lo.fromTag("iframe");
              return (
                Ao(o, r),
                Ao(o, {
                  id: e + "_ifr",
                  frameBorder: "0",
                  allowTransparency: "true",
                  title: t
                }),
                Lo(o, { width: "100%", height: _B(n), display: "block" }),
                o
              );
            },
            RB = function(e) {
              var t, n, r;
              return (
                (r = ld.getDocType(e) + "<html><head>"),
                ld.getDocumentBaseUrl(e) !== e.documentBaseUrl &&
                  (r += '<base href="' + e.documentBaseURI.getURI() + '" />'),
                (r +=
                  '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'),
                (t = ld.getBodyId(e)),
                (n = ld.getBodyClass(e)),
                ld.getContentSecurityPolicy(e) &&
                  (r +=
                    '<meta http-equiv="Content-Security-Policy" content="' +
                    ld.getContentSecurityPolicy(e) +
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
            BB = function(e, t) {
              var n = e.editorManager.translate(
                  "Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help"
                ),
                r = AB(e.id, n, t.height, ld.getIframeAttrs(e)).dom();
              r.onload = function() {
                (r.onload = null), e.fire("load");
              };
              var o = TB(e, r);
              return (
                (e.contentAreaContainer = t.iframeContainer),
                (e.iframeElement = r),
                (e.iframeHTML = RB(e)),
                kB.add(t.iframeContainer, r),
                o
              );
            },
            DB = function(e, t) {
              var n = BB(e, t);
              t.editorContainer &&
                ((kB.get(t.editorContainer).style.display = e.orgDisplay),
                (e.hidden = kB.isHidden(t.editorContainer))),
                (e.getElement().style.display = "none"),
                kB.setAttrib(e.id, "aria-hidden", "true"),
                n || NB.initContentBody(e);
            },
            OB = { init: DB },
            PB = mu.DOM,
            IB = function(e, t, n) {
              var r,
                o,
                i = Kx.get(n);
              if (
                ((r = Kx.urls[n] || e.documentBaseUrl.replace(/\/$/, "")),
                (n = Ln.trim(n)),
                i && -1 === Ln.inArray(t, n))
              ) {
                if (
                  (Ln.each(Kx.dependencies(n), function(n) {
                    IB(e, t, n);
                  }),
                  e.plugins[n])
                )
                  return;
                (o = new i(e, r, e.$)),
                  (e.plugins[n] = o),
                  o.init && (o.init(e, r), t.push(n));
              }
            },
            LB = function(e) {
              return e.replace(/^\-/, "");
            },
            MB = function(e) {
              var t = [];
              Ln.each(e.settings.plugins.split(/[ ,]/), function(n) {
                IB(e, t, LB(n));
              });
            },
            FB = function(e) {
              var t,
                n = e.settings.theme;
              B(n)
                ? ((e.settings.theme = LB(n)),
                  (t = Jx.get(n)),
                  (e.theme = new t(e, Jx.urls[n])),
                  e.theme.init &&
                    e.theme.init(
                      e,
                      Jx.urls[n] || e.documentBaseUrl.replace(/\/$/, ""),
                      e.$
                    ))
                : (e.theme = {});
            },
            UB = function(e) {
              var t,
                n,
                r,
                o,
                i,
                a = e.settings,
                u = e.getElement();
              return (
                (t = a.width || PB.getStyle(u, "width") || "100%"),
                (n = a.height || PB.getStyle(u, "height") || u.offsetHeight),
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
            jB = function(e) {
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
            zB = function(e) {
              return { editorContainer: e, iframeContainer: e };
            },
            VB = function(e) {
              var t = PB.create("div");
              return PB.insertAfter(t, e), zB(t);
            },
            HB = function(e) {
              var t = e.getElement();
              return e.inline ? zB(null) : VB(t);
            },
            qB = function(e) {
              var t = e.settings,
                n = e.getElement();
              return (
                (e.orgDisplay = n.style.display),
                B(t.theme) ? UB(e) : L(t.theme) ? jB(e) : HB(e)
              );
            },
            $B = function(e) {
              var t,
                n = e.settings,
                r = e.getElement();
              return (
                (e.rtl = n.rtl_ui || e.editorManager.i18n.rtl),
                e.editorManager.i18n.setCode(n.language),
                (n.aria_label =
                  n.aria_label ||
                  PB.getAttrib(
                    r,
                    "aria-label",
                    e.getLang("aria.rich_text_area")
                  )),
                e.fire("ScriptsLoaded"),
                FB(e),
                MB(e),
                (t = qB(e)),
                (e.editorContainer = t.editorContainer
                  ? t.editorContainer
                  : null),
                n.content_css &&
                  Ln.each(Ln.explode(n.content_css), function(t) {
                    e.contentCSS.push(e.documentBaseURI.toAbsolute(t));
                  }),
                n.content_editable ? NB.initContentBody(e) : OB.init(e, t)
              );
            },
            WB = { init: $B },
            YB = mu.DOM,
            GB = function(e) {
              return "-" === e.charAt(0);
            },
            XB = function(e, t) {
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
            ZB = function(e, t, n, r) {
              var o = t.settings,
                i = o.theme;
              if (B(i)) {
                if (!GB(i) && !Jx.urls.hasOwnProperty(i)) {
                  var a = o.theme_url;
                  a
                    ? Jx.load(i, t.documentBaseURI.toAbsolute(a))
                    : Jx.load(i, "themes/" + i + "/theme" + n + ".js");
                }
                e.loadQueue(function() {
                  Jx.waitFor(i, r);
                });
              } else r();
            },
            KB = function(e, t) {
              Ln.isArray(e.plugins) && (e.plugins = e.plugins.join(" ")),
                Ln.each(e.external_plugins, function(t, n) {
                  Kx.load(n, t), (e.plugins += " " + n);
                }),
                Ln.each(e.plugins.split(/[ ,]/), function(e) {
                  if (((e = Ln.trim(e)), e && !Kx.urls[e]))
                    if (GB(e)) {
                      e = e.substr(1, e.length);
                      var n = Kx.dependencies(e);
                      Ln.each(n, function(e) {
                        var n = {
                          prefix: "plugins/",
                          resource: e,
                          suffix: "/plugin" + t + ".js"
                        };
                        (e = Kx.createUrl(n, e)), Kx.load(e.resource, e);
                      });
                    } else
                      Kx.load(e, {
                        prefix: "plugins/",
                        resource: e,
                        suffix: "/plugin" + t + ".js"
                      });
                });
            },
            JB = function(e, t) {
              var n = bu.ScriptLoader;
              ZB(n, e, t, function() {
                XB(n, e),
                  KB(e.settings, t),
                  n.loadQueue(
                    function() {
                      e.removed || WB.init(e);
                    },
                    e,
                    function(t) {
                      Zx.pluginLoadError(e, t[0]), e.removed || WB.init(e);
                    }
                  );
              });
            },
            QB = function(e) {
              var t = e.settings,
                n = e.id,
                r = function() {
                  YB.unbind(window, "ready", r), e.render();
                };
              if (We.Event.domLoaded) {
                if (e.getElement() && Ne.contentEditable) {
                  t.inline
                    ? (e.inline = !0)
                    : ((e.orgVisibility = e.getElement().style.visibility),
                      (e.getElement().style.visibility = "hidden"));
                  var o = e.getElement().form || YB.getParent(n, "form");
                  o &&
                    ((e.formElement = o),
                    t.hidden_input &&
                      !/TEXTAREA|INPUT/i.test(e.getElement().nodeName) &&
                      (YB.insertAfter(
                        YB.create("input", { type: "hidden", name: n }),
                        n
                      ),
                      (e.hasHiddenInput = !0)),
                    (e.formEventDelegate = function(t) {
                      e.fire(t.type, t);
                    }),
                    YB.bind(o, "submit reset", e.formEventDelegate),
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
                    (e.windowManager = zx(e)),
                    (e.notificationManager = Ux(e)),
                    "xml" === t.encoding &&
                      e.on("GetContent", function(e) {
                        e.save && (e.content = YB.encode(e.content));
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
                    JB(e, e.suffix);
                }
              } else YB.bind(window, "ready", r);
            },
            eD = { render: QB },
            tD = function(e, t, n) {
              var r = e.sidebars ? e.sidebars : [];
              r.push({ name: t, settings: n }), (e.sidebars = r);
            },
            nD = { add: tD },
            rD = Ln.each,
            oD = Ln.trim,
            iD = "source protocol authority userInfo user password host port relative path directory file query anchor".split(
              " "
            ),
            aD = { ftp: 21, http: 80, https: 443, mailto: 25 },
            uD = function(e, t) {
              var n,
                r,
                o = this;
              if (
                ((e = oD(e)),
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
                      : new uD(document.location.href).directory),
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
                  rD(iD, function(t, n) {
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
          (uD.prototype = {
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
                ((e = new uD(e, { base_uri: n })),
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
                (e = new uD(e, { base_uri: this })),
                e.getURI(t && this.isSameOrigin(e))
              );
            },
            isSameOrigin: function(e) {
              if (this.host == e.host && this.protocol == e.protocol) {
                if (this.port == e.port) return !0;
                var t = aD[this.protocol];
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
                  rD(e, function(e) {
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
            (uD.parseDataUri = function(e) {
              var t, n;
              return (
                (e = decodeURIComponent(e).split(",")),
                (n = /data:([^;]+)/.exec(e[0])),
                n && (t = n[1]),
                { type: t, data: e[1] }
              );
            }),
            (uD.getDocumentBaseUrl = function(e) {
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
          var sD = "html",
            cD = function(e, t) {
              var n = ld.getForcedRootBlock(e),
                r = new RegExp(
                  "^(<" +
                    n +
                    "[^>]*>(&nbsp;|&#160;|\\s| |<br \\/>|)<\\/" +
                    n +
                    ">[\r\n]*|<br \\/>[\r\n]*)$"
                );
              return t.replace(r, "");
            },
            lD = function(e, t, n) {
              var r;
              if (
                ((t.format = t.format ? t.format : sD),
                (t.get = !0),
                (t.getInner = !0),
                t.no_events || e.fire("BeforeGetContent", t),
                "raw" === t.format)
              )
                r = Ln.trim(oN.trimExternal(e.serializer, n.innerHTML));
              else if ("text" === t.format)
                r = _s.trim(n.innerText || n.textContent);
              else {
                if ("tree" === t.format) return e.serializer.serialize(n, t);
                r = cD(e, e.serializer.serialize(n, t));
              }
              return (
                "text" === t.format || ua(lo.fromDom(n))
                  ? (t.content = r)
                  : (t.content = Ln.trim(r)),
                t.no_events || e.fire("GetContent", t),
                t.content
              );
            },
            fD = function(e, t) {
              return (
                void 0 === t && (t = {}),
                _.from(e.getBody()).fold(
                  h("tree" === t.format ? new zT("body", 11) : ""),
                  function(n) {
                    return lD(e, t, n);
                  }
                )
              );
            },
            dD = function(e, t) {
              t(e),
                e.firstChild && dD(e.firstChild, t),
                e.next && dD(e.next, t);
            },
            mD = function(e, t, n) {
              var r = {},
                o = {},
                i = [];
              for (var a in (n.firstChild &&
                dD(n.firstChild, function(n) {
                  H(e, function(e) {
                    e.name === n.name &&
                      (r[e.name]
                        ? r[e.name].nodes.push(n)
                        : (r[e.name] = { filter: e, nodes: [n] }));
                  }),
                    H(t, function(e) {
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
            pD = function(e, t, n) {
              var r = mD(e, t, n);
              H(r, function(e) {
                H(e.filter.callbacks, function(t) {
                  t(e.nodes, e.filter.name, {});
                });
              });
            },
            gD = "html",
            hD = function(e) {
              return e instanceof zT;
            },
            vD = function(e) {
              Sx.hasFocus(e) &&
                Cm.firstPositionIn(e.getBody()).each(function(t) {
                  var n = t.getNode(),
                    r = Na.isTable(n) ? Cm.firstPositionIn(n).getOr(t) : t;
                  e.selection.setRng(r.toRange());
                });
            },
            bD = function(e, t) {
              e.dom.setHTML(e.getBody(), t), vD(e);
            },
            yD = function(e, t, n, r) {
              var o, i;
              return (
                0 === n.length || /^\s+$/.test(n)
                  ? ((i = '<br data-mce-bogus="1">'),
                    "TABLE" === t.nodeName
                      ? (n = "<tr><td>" + i + "</td></tr>")
                      : /^(UL|OL)$/.test(t.nodeName) &&
                        (n = "<li>" + i + "</li>"),
                    (o = ld.getForcedRootBlock(e)),
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
                    bD(e, n),
                    e.fire("SetContent", r))
                  : ("raw" !== r.format &&
                      (n = gg({ validate: e.validate }, e.schema).serialize(
                        e.parser.parse(n, { isRootContent: !0, insert: !0 })
                      )),
                    (r.content = ua(lo.fromDom(t)) ? n : Ln.trim(n)),
                    bD(e, r.content),
                    r.no_events || e.fire("SetContent", r)),
                r.content
              );
            },
            CD = function(e, t, n, r) {
              pD(e.parser.getNodeFilters(), e.parser.getAttributeFilters(), n);
              var o = gg({ validate: e.validate }, e.schema).serialize(n);
              return (
                (r.content = ua(lo.fromDom(t)) ? o : Ln.trim(o)),
                bD(e, r.content),
                r.no_events || e.fire("SetContent", r),
                n
              );
            },
            wD = function(e, t, n) {
              return (
                void 0 === n && (n = {}),
                (n.format = n.format ? n.format : gD),
                (n.set = !0),
                (n.content = hD(t) ? "" : t),
                hD(t) ||
                  n.no_events ||
                  (e.fire("BeforeSetContent", n), (t = n.content)),
                _.from(e.getBody()).fold(h(t), function(r) {
                  return hD(t) ? CD(e, r, t, n) : yD(e, r, t, n);
                })
              );
            },
            xD = mu.DOM,
            ED = function(e) {
              xD.setStyle(e.id, "display", e.orgDisplay);
            },
            SD = function(e) {
              return _.from(e).each(function(e) {
                return e.destroy();
              });
            },
            ND = function(e) {
              (e.contentAreaContainer = e.formElement = e.container = e.editorContainer = null),
                (e.bodyElement = e.contentDocument = e.contentWindow = null),
                (e.iframeElement = e.targetElm = null),
                e.selection &&
                  (e.selection = e.selection.win = e.selection.dom = e.selection.dom.doc = null);
            },
            kD = function(e) {
              var t = e.formElement;
              t &&
                (t._mceOldSubmit &&
                  ((t.submit = t._mceOldSubmit), (t._mceOldSubmit = null)),
                xD.unbind(t, "submit reset", e.formEventDelegate));
            },
            TD = function(e) {
              if (!e.removed) {
                var t = e._selectionOverrides,
                  n = e.editorUpload,
                  r = e.getBody(),
                  o = e.getElement();
                r && e.save({ is_removing: !0 }),
                  (e.removed = !0),
                  e.unbindAllNativeEvents(),
                  e.hasHiddenInput && o && xD.remove(o.nextSibling),
                  !e.inline && r && ED(e),
                  qw.fireRemove(e),
                  e.editorManager.remove(e),
                  xD.remove(e.getContainer()),
                  SD(t),
                  SD(n),
                  e.destroy();
              }
            },
            _D = function(e, t) {
              var n = e.selection,
                r = e.dom;
              e.destroyed ||
                (t || e.removed
                  ? (t ||
                      (e.editorManager.off("beforeunload", e._beforeUnload),
                      e.theme && e.theme.destroy && e.theme.destroy(),
                      SD(n),
                      SD(r)),
                    kD(e),
                    ND(e),
                    (e.destroyed = !0))
                  : e.remove());
            },
            AD = mu.DOM,
            RD = Ln.extend,
            BD = Ln.each,
            DD = Ln.resolve,
            OD = Ne.ie,
            PD = function(e, t, n) {
              var r = this,
                o = (r.documentBaseUrl = n.documentBaseURL),
                i = n.baseURI;
              (t = Qg(r, e, o, n.defaultSettings, t)),
                (r.settings = t),
                (Cu.language = t.language || "en"),
                (Cu.languageLoad = t.language_load),
                (Cu.baseURL = n.baseURL),
                (r.id = e),
                r.setDirty(!1),
                (r.plugins = {}),
                (r.documentBaseURI = new uD(t.document_base_url, {
                  base_uri: i
                })),
                (r.baseURI = i),
                (r.contentCSS = []),
                (r.contentStyles = []),
                (r.shortcuts = new sx(r)),
                (r.loadedCSS = {}),
                (r.editorCommands = new Dw(r)),
                (r.suffix = n.suffix),
                (r.editorManager = n),
                (r.inline = t.inline),
                (r.buttons = {}),
                (r.menuItems = {}),
                t.cache_suffix &&
                  (Ne.cacheSuffix = t.cache_suffix.replace(/^[\?\&]+/, "")),
                !1 === t.override_viewport && (Ne.overrideViewPort = !1),
                n.fire("SetupEditor", { editor: r }),
                r.execCallback("setup", r),
                (r.$ = nr.overrideDefaults(function() {
                  return {
                    context: r.inline ? r.getBody() : r.getDoc(),
                    element: r.getBody()
                  };
                }));
            };
          (PD.prototype = {
            render: function() {
              eD.render(this);
            },
            focus: function(e) {
              Sx.focus(this, e);
            },
            hasFocus: function() {
              return Sx.hasFocus(this);
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
                    (r = r ? DD(r) : 0),
                    (i = DD(i)),
                    (o.callbackLookup = o.callbackLookup || {}),
                    (o.callbackLookup[e] = { func: i, scope: r })),
                  i.apply(r || o, Array.prototype.slice.call(arguments, 1))
                );
            },
            translate: function(e) {
              if (e && Ln.is(e, "string")) {
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
              return oh(this, e, t, n);
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
              return nD.add(this, e, t);
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
                  id: CE.uuid("mcet"),
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
                  : (AD.show(e.getContainer()), AD.hide(e.id)),
                e.load(),
                e.fire("show"));
            },
            hide: function() {
              var e = this,
                t = e.getDoc();
              e.hidden ||
                (OD && t && !e.inline && t.execCommand("SelectAll"),
                e.save(),
                e.inline
                  ? ((e.getBody().contentEditable = !1),
                    e === e.editorManager.focusedEditor &&
                      (e.editorManager.focusedEditor = null))
                  : (AD.hide(e.getContainer()),
                    AD.setStyle(e.id, "display", e.orgDisplay)),
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
                      (n = AD.getParent(r.id, "form")) &&
                        BD(n.elements, function(e) {
                          if (e.name === r.id) return (e.value = t), !1;
                        })),
                  (e.element = o = null),
                  !1 !== e.set_dirty && r.setDirty(!1),
                  t
                );
            },
            setContent: function(e, t) {
              return wD(this, e, t);
            },
            getContent: function(e) {
              return fD(this, e);
            },
            insertContent: function(e, t) {
              t && (e = RD({ content: e }, t)),
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
              Gw(this, e);
            },
            getContainer: function() {
              var e = this;
              return (
                e.container ||
                  (e.container = AD.get(e.editorContainer || e.id + "_parent")),
                e.container
              );
            },
            getContentAreaContainer: function() {
              return this.contentAreaContainer;
            },
            getElement: function() {
              return (
                this.targetElm || (this.targetElm = AD.get(this.id)),
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
                BD(o.select("table,a", e), function(e) {
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
              TD(this);
            },
            destroy: function(e) {
              _D(this, e);
            },
            uploadImages: function(e) {
              return this.editorUpload.uploadImages(e);
            },
            _scanForImages: function() {
              return this.editorUpload.scanForImages();
            }
          }),
            RD(PD.prototype, rx);
          var ID,
            LD,
            MD,
            FD = function(e) {
              return -1 !== e.className.toString().indexOf("mce-");
            },
            UD = { isEditorUIElement: FD },
            jD = function(e) {
              return "nodechange" === e.type && e.selectionChange;
            },
            zD = function(e, t) {
              var n = function() {
                t.throttle();
              };
              mu.DOM.bind(document, "mouseup", n),
                e.on("remove", function() {
                  mu.DOM.unbind(document, "mouseup", n);
                });
            },
            VD = function(e) {
              e.on("focusout", function() {
                Nw.store(e);
              });
            },
            HD = function(e, t) {
              e.on("mouseup touchend", function(e) {
                t.throttle();
              });
            },
            qD = function(e, t) {
              var n = oo.detect().browser;
              n.isIE() ? VD(e) : HD(e, t),
                e.on("keyup nodechange", function(t) {
                  jD(t) || Nw.store(e);
                });
            },
            $D = function(e) {
              var t = Ru(function() {
                Nw.store(e);
              }, 0);
              e.inline && zD(e, t),
                e.on("init", function() {
                  qD(e, t);
                }),
                e.on("remove", function() {
                  t.cancel();
                });
            },
            WD = { register: $D },
            YD = mu.DOM,
            GD = function(e) {
              return UD.isEditorUIElement(e);
            },
            XD = function(e, t) {
              var n = e ? e.settings.custom_ui_selector : "",
                r = YD.getParent(t, function(t) {
                  return GD(t) || (!!n && e.dom.is(t, n));
                });
              return null !== r;
            },
            ZD = function() {
              try {
                return document.activeElement;
              } catch (e) {
                return document.body;
              }
            },
            KD = function(e, t) {
              var n = t.editor;
              WD.register(n),
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
                  Pe.setEditorTimeout(t, function() {
                    var n = e.focusedEditor;
                    XD(t, ZD()) ||
                      n !== t ||
                      (t.fire("blur", { focusedEditor: null }),
                      (e.focusedEditor = null));
                  });
                }),
                ID ||
                  ((ID = function(t) {
                    var n,
                      r = e.activeEditor;
                    (n = t.target),
                      r &&
                        n.ownerDocument === document &&
                        (n === document.body ||
                          XD(r, n) ||
                          e.focusedEditor !== r ||
                          (r.fire("blur", { focusedEditor: null }),
                          (e.focusedEditor = null)));
                  }),
                  YD.bind(document, "focusin", ID));
            },
            JD = function(e, t) {
              e.focusedEditor === t.editor && (e.focusedEditor = null),
                e.activeEditor ||
                  (YD.unbind(document, "focusin", ID), (ID = null));
            },
            QD = function(e) {
              e.on("AddEditor", b(KD, e)), e.on("RemoveEditor", b(JD, e));
            },
            eO = { setup: QD, isEditorUIElement: GD, isUIElement: XD },
            tO = {},
            nO = "en",
            rO = {
              setCode: function(e) {
                e &&
                  ((nO = e),
                  (this.rtl = !!this.data[e] && "rtl" === this.data[e]._dir));
              },
              getCode: function() {
                return nO;
              },
              rtl: !1,
              add: function(e, t) {
                var n = tO[e];
                for (var r in (n || (tO[e] = n = {}), t)) n[r] = t[r];
                this.setCode(e);
              },
              translate: function(e) {
                var t = tO[nO] || {},
                  n = function(e) {
                    return Ln.is(e, "function")
                      ? Object.prototype.toString.call(e)
                      : r(e)
                        ? ""
                        : "" + e;
                  },
                  r = function(e) {
                    return "" === e || null === e || Ln.is(e, "undefined");
                  },
                  o = function(e) {
                    return (e = n(e)), Ln.hasOwn(t, e) ? n(t[e]) : e;
                  };
                if (r(e)) return "";
                if (Ln.is(e, "object") && Ln.hasOwn(e, "raw")) return n(e.raw);
                if (Ln.is(e, "array")) {
                  var i = e.slice(1);
                  e = o(e[0]).replace(/\{([0-9]+)\}/g, function(e, t) {
                    return Ln.hasOwn(i, t) ? n(i[t]) : e;
                  });
                }
                return o(e).replace(/{context:\w+}$/, "");
              },
              data: tO
            },
            oO = mu.DOM,
            iO = Ln.explode,
            aO = Ln.each,
            uO = Ln.extend,
            sO = 0,
            cO = !1,
            lO = [],
            fO = [],
            dO = function(e) {
              return "length" !== e;
            },
            mO = function(e) {
              aO(MD.get(), function(t) {
                "scroll" === e.type
                  ? t.fire("ScrollWindow", e)
                  : t.fire("ResizeWindow", e);
              });
            },
            pO = function(e) {
              e !== cO &&
                (e
                  ? nr(window).on("resize scroll", mO)
                  : nr(window).off("resize scroll", mO),
                (cO = e));
            },
            gO = function(e) {
              var t = fO;
              delete lO[e.id];
              for (var n = 0; n < lO.length; n++)
                if (lO[n] === e) {
                  lO.splice(n, 1);
                  break;
                }
              return (
                (fO = W(fO, function(t) {
                  return e !== t;
                })),
                MD.activeEditor === e &&
                  (MD.activeEditor = fO.length > 0 ? fO[0] : null),
                MD.focusedEditor === e && (MD.focusedEditor = null),
                t.length !== fO.length
              );
            },
            hO = function(e) {
              return (
                e &&
                  e.initialized &&
                  !(e.getContainer() || e.getBody()).parentNode &&
                  (gO(e),
                  e.unbindAllNativeEvents(),
                  e.destroy(!0),
                  (e.removed = !0),
                  (e = null)),
                e
              );
            };
          (MD = {
            defaultSettings: {},
            $: nr,
            majorVersion: "4",
            minorVersion: "8.5",
            releaseDate: "2018-10-30",
            editors: lO,
            i18n: rO,
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
                ((t = uD.getDocumentBaseUrl(document.location)),
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
              (o.baseURL = new uD(t).toAbsolute(e)),
                (o.documentBaseURL = t),
                (o.baseURI = new uD(o.baseURL)),
                (o.suffix = i),
                eO.setup(o);
            },
            overrideDefaults: function(e) {
              var t, n;
              (t = e.base_url),
                t &&
                  ((this.baseURL = new uD(this.documentBaseURL).toAbsolute(
                    t.replace(/\/+$/, "")
                  )),
                  (this.baseURI = new uD(this.baseURL))),
                (n = e.suffix),
                e.suffix && (this.suffix = n),
                (this.defaultSettings = e);
              var r = e.plugin_base_urls;
              for (var o in r) Cu.PluginManager.urls[o] = r[o];
            },
            init: function(e) {
              var t,
                n,
                r = this;
              n = Ln.makeMap(
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
                      (t = t && !oO.get(t) ? e.name : oO.uniqueId()),
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
                    : oO.hasClass(e, t);
                },
                s = function(e) {
                  var t,
                    n = [];
                  if (Ne.ie && Ne.ie < 11)
                    return (
                      Zx.initError(
                        "TinyMCE does not support the browser you are using. For a list of supported browsers please see: https://www.tinymce.com/docs/get-started/system-requirements/"
                      ),
                      []
                    );
                  if (e.types)
                    return (
                      aO(e.types, function(e) {
                        n = n.concat(oO.select(e.selector));
                      }),
                      n
                    );
                  if (e.selector) return oO.select(e.selector);
                  if (e.target) return [e.target];
                  switch (e.mode) {
                    case "exact":
                      (t = e.elements || ""),
                        t.length > 0 &&
                          aO(iO(t), function(e) {
                            var t;
                            (t = oO.get(e))
                              ? n.push(t)
                              : aO(document.forms, function(t) {
                                  aO(t.elements, function(t) {
                                    t.name === e &&
                                      ((e = "mce_editor_" + sO++),
                                      oO.setAttrib(t, "id", e),
                                      n.push(t));
                                  });
                                });
                          });
                      break;
                    case "textareas":
                    case "specific_textareas":
                      aO(oO.select("textarea"), function(t) {
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
                      var a = new PD(e, o, r);
                      u.push(a),
                        a.on("init", function() {
                          ++n === t.length && c(u);
                        }),
                        (a.targetElm = a.targetElm || i),
                        a.render();
                    };
                  oO.unbind(window, "ready", l),
                    a("onpageload"),
                    (t = nr.unique(s(e))),
                    e.types
                      ? aO(e.types, function(n) {
                          Ln.each(t, function(t) {
                            return (
                              !oO.is(t, n.selector) ||
                              (f(i(t), uO({}, e, n), t), !1)
                            );
                          });
                        })
                      : (Ln.each(t, function(e) {
                          hO(r.get(e.id));
                        }),
                        (t = Ln.grep(t, function(e) {
                          return !r.get(e.id);
                        })),
                        0 === t.length
                          ? c([])
                          : aO(t, function(t) {
                              o(e, t)
                                ? Zx.initError(
                                    "Could not initialize inline editor on invalid inline target element",
                                    t
                                  )
                                : f(i(t), e, t);
                            }));
                };
              return (
                (r.settings = e),
                oO.bind(window, "ready", l),
                new Te(function(e) {
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
                ? fO.slice(0)
                : B(e)
                  ? X(fO, function(t) {
                      return t.id === e;
                    }).getOr(null)
                  : M(e) && fO[e]
                    ? fO[e]
                    : null;
            },
            add: function(e) {
              var t,
                n = this;
              return (
                (t = lO[e.id]),
                t === e
                  ? e
                  : (null === n.get(e.id) &&
                      (dO(e.id) && (lO[e.id] = e), lO.push(e), fO.push(e)),
                    pO(!0),
                    (n.activeEditor = e),
                    n.fire("AddEditor", { editor: e }),
                    LD ||
                      ((LD = function() {
                        n.fire("BeforeUnload");
                      }),
                      oO.bind(window, "beforeunload", LD)),
                    e)
              );
            },
            createEditor: function(e, t) {
              return this.add(new PD(e, t, this));
            },
            remove: function(e) {
              var t,
                n,
                r = this;
              if (e) {
                if (!B(e))
                  return (
                    (n = e),
                    P(r.get(n.id))
                      ? null
                      : (gO(n) && r.fire("RemoveEditor", { editor: n }),
                        0 === fO.length &&
                          oO.unbind(window, "beforeunload", LD),
                        n.remove(),
                        pO(fO.length > 0),
                        n)
                  );
                aO(oO.select(e), function(e) {
                  (n = r.get(e.id)), n && r.remove(n);
                });
              } else for (t = fO.length - 1; t >= 0; t--) r.remove(fO[t]);
            },
            execCommand: function(e, t, n) {
              var r = this,
                o = r.get(n);
              switch (e) {
                case "mceAddEditor":
                  return r.get(n) || new PD(n, r.settings, r).render(), !0;
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
              aO(fO, function(e) {
                e.save();
              });
            },
            addI18n: function(e, t) {
              rO.add(e, t);
            },
            translate: function(e) {
              return rO.translate(e);
            },
            setActive: function(e) {
              var t = this.activeEditor;
              this.activeEditor !== e &&
                (t && t.fire("deactivate", { relatedTarget: e }),
                e.fire("activate", { relatedTarget: t })),
                (this.activeEditor = e);
            }
          }),
            uO(MD, Mw),
            MD.setup();
          var vO = MD;
          function bO(e) {
            var t = function(t, n) {
                return xp.walk(e, t, n);
              },
              n = qN.split,
              r = function(t) {
                return GC.normalize(e, t).fold(h(!1), function(e) {
                  return (
                    t.setStart(e.startContainer, e.startOffset),
                    t.setEnd(e.endContainer, e.endOffset),
                    !0
                  );
                });
              };
            return { walk: t, split: n, normalize: r };
          }
          (function(e) {
            (e.compareRanges = IC.isEq),
              (e.getCaretRangeFromPoint = y_.fromPoint),
              (e.getSelectedNode = vc),
              (e.getNode = bc);
          })(bO || (bO = {}));
          var yO,
            CO,
            wO = bO,
            xO = Math.min,
            EO = Math.max,
            SO = Math.round,
            NO = function(e, t, n) {
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
                "c" === n[0] && (o += SO(s / 2)),
                "c" === n[1] && (r += SO(u / 2)),
                "b" === n[3] && (o -= a),
                "r" === n[4] && (r -= i),
                "c" === n[3] && (o -= SO(a / 2)),
                "c" === n[4] && (r -= SO(i / 2)),
                RO(r, o, i, a)
              );
            },
            kO = function(e, t, n, r) {
              var o, i;
              for (i = 0; i < r.length; i++)
                if (
                  ((o = NO(e, t, r[i])),
                  o.x >= n.x &&
                    o.x + o.w <= n.w + n.x &&
                    o.y >= n.y &&
                    o.y + o.h <= n.h + n.y)
                )
                  return r[i];
              return null;
            },
            TO = function(e, t, n) {
              return RO(e.x - t, e.y - n, e.w + 2 * t, e.h + 2 * n);
            },
            _O = function(e, t) {
              var n, r, o, i;
              return (
                (n = EO(e.x, t.x)),
                (r = EO(e.y, t.y)),
                (o = xO(e.x + e.w, t.x + t.w)),
                (i = xO(e.y + e.h, t.y + t.h)),
                o - n < 0 || i - r < 0 ? null : RO(n, r, o - n, i - r)
              );
            },
            AO = function(e, t, n) {
              var r, o, i, a, u, s, c, l, f, d;
              return (
                (u = e.x),
                (s = e.y),
                (c = e.x + e.w),
                (l = e.y + e.h),
                (f = t.x + t.w),
                (d = t.y + t.h),
                (r = EO(0, t.x - u)),
                (o = EO(0, t.y - s)),
                (i = EO(0, c - f)),
                (a = EO(0, l - d)),
                (u += r),
                (s += o),
                n && ((c += r), (l += o), (u -= i), (s -= a)),
                (c -= i),
                (l -= a),
                RO(u, s, c - u, l - s)
              );
            },
            RO = function(e, t, n, r) {
              return { x: e, y: t, w: n, h: r };
            },
            BO = function(e) {
              return RO(e.left, e.top, e.width, e.height);
            },
            DO = {
              inflate: TO,
              relativePosition: NO,
              findBestRelativePosition: kO,
              intersect: _O,
              clamp: AO,
              create: RO,
              fromClientRect: BO
            },
            OO = {},
            PO = {
              add: function(e, t) {
                OO[e.toLowerCase()] = t;
              },
              has: function(e) {
                return !!OO[e.toLowerCase()];
              },
              get: function(e) {
                var t = e.toLowerCase(),
                  n = OO.hasOwnProperty(t) ? OO[t] : null;
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
                  (n = OO[e]),
                  !n)
                )
                  throw new Error("Could not find control by type: " + e);
                return (n = new n(t)), (n.type = e), n;
              }
            },
            IO = Ln.each,
            LO = Ln.extend,
            MO = function() {};
          MO.extend = yO = function(e) {
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
                  !CO &&
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
            for (n in ((CO = !0),
            (t = new o()),
            (CO = !1),
            e.Mixins &&
              (IO(e.Mixins, function(t) {
                for (var n in t) "init" !== n && (e[n] = t[n]);
              }),
              i.Mixins && (e.Mixins = i.Mixins.concat(e.Mixins))),
            e.Methods &&
              IO(e.Methods.split(","), function(t) {
                e[t] = u;
              }),
            e.Properties &&
              IO(e.Properties.split(","), function(t) {
                var n = "_" + t;
                e[t] = function(e) {
                  var t = this;
                  return void 0 !== e ? ((t[n] = e), t) : t[n];
                };
              }),
            e.Statics &&
              IO(e.Statics, function(e, t) {
                a[t] = e;
              }),
            e.Defaults &&
              i.Defaults &&
              (e.Defaults = LO({}, i.Defaults, e.Defaults)),
            e))
              (r = e[n]),
                "function" === typeof r && i[n] ? (t[n] = s(n, r)) : (t[n] = r);
            return (a.prototype = t), (a.constructor = a), (a.extend = yO), a;
          };
          var FO = Math.min,
            UO = Math.max,
            jO = Math.round,
            zO = function(e) {
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
                    (u = FO(e, FO(t, n))),
                    (s = UO(e, UO(t, n))),
                    u === s
                      ? ((i = u), { h: 0, s: 0, v: 100 * i })
                      : ((a = e === u ? t - n : n === u ? e - t : n - e),
                        (r = e === u ? 3 : n === u ? 1 : 5),
                        (r = 60 * (r - a / (s - u))),
                        (o = (s - u) / s),
                        (i = s),
                        { h: jO(r), s: jO(100 * o), v: jO(100 * i) })
                  );
                },
                a = function(e, t, i) {
                  var a, u, s, c;
                  if (
                    ((e = (parseInt(e, 10) || 0) % 360),
                    (t = parseInt(t, 10) / 100),
                    (i = parseInt(i, 10) / 100),
                    (t = UO(0, FO(t, 1))),
                    (i = UO(0, FO(i, 1))),
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
                    (n = jO(255 * (n + c))),
                      (r = jO(255 * (r + c))),
                      (o = jO(255 * (o + c)));
                  } else n = r = o = jO(255 * i);
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
            VO = function(e, t) {
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
                    r += (n > 0 ? "," : "") + VO(e[n], t);
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
                          VO(e[i], t)
                        : "");
                return r + "}";
              }
              return "" + e;
            },
            HO = {
              serialize: VO,
              parse: function(e) {
                try {
                  return JSON.parse(e);
                } catch (t) {}
              }
            },
            qO = {
              callbacks: {},
              count: 0,
              send: function(e) {
                var t = this,
                  n = mu.DOM,
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
            $O = {
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
                  $O.fire("beforeInitialize", { settings: e }),
                  (t = Qx()),
                  t)
                ) {
                  if (
                    (t.overrideMimeType && t.overrideMimeType(e.content_type),
                    t.open(e.type || (e.data ? "POST" : "GET"), e.url, e.async),
                    e.crossDomain && (t.withCredentials = !0),
                    e.content_type &&
                      t.setRequestHeader("Content-Type", e.content_type),
                    e.requestheaders &&
                      Ln.each(e.requestheaders, function(e) {
                        t.setRequestHeader(e.key, e.value);
                      }),
                    t.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                    (t = $O.fire("beforeSend", { xhr: t, settings: e }).xhr),
                    t.send(e.data),
                    !e.async)
                  )
                    return r();
                  setTimeout(r, 10);
                }
              }
            };
          Ln.extend($O, Mw);
          var WO = Ln.extend,
            YO = function(e) {
              (this.settings = WO({}, e)), (this.count = 0);
            };
          (YO.sendRPC = function(e) {
            return new YO().send(e);
          }),
            (YO.prototype = {
              send: function(e) {
                var t = e.error,
                  n = e.success;
                (e = WO(this.settings, e)),
                  (e.success = function(r, o) {
                    (r = HO.parse(r)),
                      "undefined" === typeof r &&
                        (r = { error: "JSON Parse error." }),
                      r.error
                        ? t.call(e.error_scope || e.scope, r.error, o)
                        : n.call(e.success_scope || e.scope, r.result);
                  }),
                  (e.error = function(n, r) {
                    t && t.call(e.error_scope || e.scope, n, r);
                  }),
                  (e.data = HO.serialize({
                    id: e.id || "c" + this.count++,
                    method: e.method,
                    params: e.params
                  })),
                  (e.content_type = "application/json"),
                  $O.send(e);
              }
            });
          var GO,
            XO = function() {
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
            GO = window.localStorage;
          } catch (nP) {
            GO = XO();
          }
          var ZO = GO,
            KO = vO,
            JO = {
              geom: { Rect: DO },
              util: {
                Promise: Te,
                Delay: Pe,
                Tools: Ln,
                VK: VS,
                URI: uD,
                Class: MO,
                EventDispatcher: Pw,
                Observable: Mw,
                I18n: rO,
                XHR: $O,
                JSON: HO,
                JSONRequest: YO,
                JSONP: qO,
                LocalStorage: ZO,
                Color: zO
              },
              dom: {
                EventUtils: We,
                Sizzle: Xt,
                DomQuery: nr,
                TreeWalker: Mi,
                DOMUtils: mu,
                ScriptLoader: bu,
                RangeUtils: wO,
                Serializer: u_,
                ControlSelection: m_,
                BookmarkManager: c_,
                Selection: mA,
                Event: We.Event
              },
              html: {
                Styles: ru,
                Entities: qa,
                Node: zT,
                Schema: tu,
                SaxParser: eN,
                DomParser: QT,
                Writer: pg,
                Serializer: gg
              },
              ui: { Factory: PO },
              Env: Ne,
              AddOnManager: Cu,
              Annotator: Ip,
              Formatter: CT,
              UndoManager: BN,
              EditorCommands: Dw,
              WindowManager: zx,
              NotificationManager: Ux,
              EditorObservable: rx,
              Shortcuts: sx,
              Editor: PD,
              FocusManager: UD,
              EditorManager: vO,
              DOM: mu.DOM,
              ScriptLoader: bu.ScriptLoader,
              PluginManager: Cu.PluginManager,
              ThemeManager: Cu.ThemeManager,
              trim: Ln.trim,
              isArray: Ln.isArray,
              is: Ln.is,
              toArray: Ln.toArray,
              makeMap: Ln.makeMap,
              each: Ln.each,
              map: Ln.map,
              grep: Ln.grep,
              inArray: Ln.inArray,
              extend: Ln.extend,
              create: Ln.create,
              walk: Ln.walk,
              createNS: Ln.createNS,
              resolve: Ln.resolve,
              explode: Ln.explode,
              _addCacheSuffix: Ln._addCacheSuffix,
              isOpera: Ne.opera,
              isWebKit: Ne.webkit,
              isIE: Ne.ie,
              isGecko: Ne.gecko,
              isMac: Ne.mac
            };
          KO = Ln.extend(KO, JO);
          var QO = KO,
            eP = function(t) {
              try {
                e.exports = t;
              } catch (n) {}
            },
            tP = function(e) {
              (window.tinymce = e), (window.tinyMCE = e);
            };
          tP(QO), eP(QO);
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
                return r;
              });
            var r = n(2).default,
              o = void 0;
            function i(e) {
              o
                ? console.warn(
                    "[ElPopoverDialog] already installed. Vue.use(ElPopoverDialog) should be called only once."
                  )
                : (o = e).component(r.name, r);
            }
            (r.install = i),
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
//# sourceMappingURL=chunk-7e92f0e4.6704aeaa.js.map
