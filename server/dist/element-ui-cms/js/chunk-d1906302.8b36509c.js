(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-d1906302", "chunk-2d0f0b62"],
  {
    "03e2": function(e, t, n) {
      "use strict";
      (function(t) {
        var r = n("74b3"),
          o = n("d779"),
          i = n("0f22"),
          a = n("76da");
        function s(e) {
          return encodeURIComponent(e)
            .replace(/!/g, "%21")
            .replace(/'/g, "%27")
            .replace(/\(/g, "%28")
            .replace(/\)/g, "%29")
            .replace(/\*/g, "%2A");
        }
        var u = function(e) {
            e = e || {};
            var t = e.SecretId,
              n = e.SecretKey,
              r = (e.method || e.Method || "get").toLowerCase(),
              i = e.pathname || e.Key || "/",
              a = p(e.Query || e.params || {}),
              u = p(e.Headers || e.headers || {});
            if ((0 !== i.indexOf("/") && (i = "/" + i), !t))
              return console.error("missing param SecretId");
            if (!n) return console.error("missing param SecretKey");
            var c = function(e) {
                var t = [];
                for (var n in e) e.hasOwnProperty(n) && t.push(n);
                return t.sort(function(e, t) {
                  return (
                    (e = e.toLowerCase()),
                    (t = t.toLowerCase()),
                    e === t ? 0 : e > t ? 1 : -1
                  );
                });
              },
              l = function(e) {
                var t,
                  n,
                  r,
                  o = [],
                  i = c(e);
                for (t = 0; t < i.length; t++)
                  (n = i[t]),
                    (r = void 0 === e[n] || null === e[n] ? "" : "" + e[n]),
                    (n = n.toLowerCase()),
                    (n = s(n)),
                    (r = s(r) || ""),
                    o.push(n + "=" + r);
                return o.join("&");
              },
              d = parseInt(new Date().getTime() / 1e3) - 1,
              f = d,
              h = e.Expires || e.expires;
            f += void 0 === h ? 900 : 1 * h || 0;
            var g = "sha1",
              m = t,
              y = d + ";" + f,
              v = d + ";" + f,
              C = c(u)
                .join(";")
                .toLowerCase(),
              b = c(a)
                .join(";")
                .toLowerCase(),
              x = o.HmacSHA1(v, n).toString(),
              w = [r, i, l(a), l(u), ""].join("\n"),
              k = ["sha1", y, o.SHA1(w).toString(), ""].join("\n"),
              S = o.HmacSHA1(k, x).toString(),
              T = [
                "q-sign-algorithm=" + g,
                "q-ak=" + m,
                "q-sign-time=" + y,
                "q-key-time=" + v,
                "q-header-list=" + C,
                "q-url-param-list=" + b,
                "q-signature=" + S
              ].join("&");
            return T;
          },
          c = function() {},
          l = function(e) {
            var t = {};
            for (var n in e)
              e.hasOwnProperty(n) &&
                void 0 !== e[n] &&
                null !== e[n] &&
                (t[n] = e[n]);
            return t;
          },
          d = function(e, t) {
            var n,
              r = new FileReader();
            FileReader.prototype.readAsBinaryString
              ? ((n = FileReader.prototype.readAsBinaryString),
                (r.onload = function() {
                  t(this.result);
                }))
              : FileReader.prototype.readAsArrayBuffer
                ? (n = function(e) {
                    var n = "",
                      r = new FileReader();
                    (r.onload = function(e) {
                      for (
                        var o = new Uint8Array(r.result),
                          i = o.byteLength,
                          a = 0;
                        a < i;
                        a++
                      )
                        n += String.fromCharCode(o[a]);
                      t(n);
                    }),
                      r.readAsArrayBuffer(e);
                  })
                : console.error("FileReader not support readAsBinaryString"),
              n.call(r, e);
          },
          f = function(e, t) {
            d(e, function(e) {
              var n = r(e, !0);
              t(null, n);
            });
          };
        function p(e) {
          return v(e, function(e) {
            return "object" === typeof e ? p(e) : e;
          });
        }
        function h(e, t) {
          return (
            y(t, function(n, r) {
              e[r] = t[r];
            }),
            e
          );
        }
        function g(e) {
          return e instanceof Array;
        }
        function m(e, t) {
          for (var n = !1, r = 0; r < e.length; r++)
            if (t === e[r]) {
              n = !0;
              break;
            }
          return n;
        }
        function y(e, t) {
          for (var n in e) e.hasOwnProperty(n) && t(e[n], n);
        }
        function v(e, t) {
          var n = g(e) ? [] : {};
          for (var r in e) e.hasOwnProperty(r) && (n[r] = t(e[r], r));
          return n;
        }
        function C(e, t) {
          var n = g(e),
            r = n ? [] : {};
          for (var o in e)
            e.hasOwnProperty(o) &&
              t(e[o], o) &&
              (n ? r.push(e[o]) : (r[o] = e[o]));
          return r;
        }
        var b = function(e) {
            var t,
              n,
              r,
              o = "";
            for (t = 0, n = e.length / 2; t < n; t++)
              (r = parseInt(e[2 * t] + e[2 * t + 1], 16)),
                (o += String.fromCharCode(r));
            return btoa(o);
          },
          x = function() {
            var e = function() {
              return ((65536 * (1 + Math.random())) | 0)
                .toString(16)
                .substring(1);
            };
            return (
              e() +
              e() +
              "-" +
              e() +
              "-" +
              e() +
              "-" +
              e() +
              "-" +
              e() +
              e() +
              e()
            );
          },
          w = function(e, t) {
            var n = t.Bucket,
              r = t.Region,
              o = t.Key;
            if (
              e.indexOf("Bucket") > -1 ||
              "deleteMultipleObject" === e ||
              "multipartList" === e ||
              "listObjectVersions" === e
            ) {
              if (!n) return "Bucket";
              if (!r) return "Region";
            } else if (
              e.indexOf("Object") > -1 ||
              e.indexOf("multipart") > -1 ||
              "sliceUploadFile" === e ||
              "abortUploadTask" === e
            ) {
              if (!n) return "Bucket";
              if (!r) return "Region";
              if (!o) return "Key";
            }
            return !1;
          },
          k = function(e, t) {
            return function(n, r) {
              if (
                ("function" === typeof n && ((r = n), (n = {})),
                (n = h({}, n)),
                "getAuth" !== e && "getObjectUrl" !== e)
              ) {
                var o = n.Headers || {};
                n &&
                  "object" === typeof n &&
                  ((function() {
                    for (var e in n)
                      n.hasOwnProperty(e) &&
                        e.indexOf("x-cos-") > -1 &&
                        (o[e] = n[e]);
                  })(),
                  (o["x-cos-mfa"] = n["MFA"]),
                  (o["Content-MD5"] = n["ContentMD5"]),
                  (o["Content-Length"] = n["ContentLength"]),
                  (o["Content-Type"] = n["ContentType"]),
                  (o["Expect"] = n["Expect"]),
                  (o["Expires"] = n["Expires"]),
                  (o["Cache-Control"] = n["CacheControl"]),
                  (o["Content-Disposition"] = n["ContentDisposition"]),
                  (o["Content-Encoding"] = n["ContentEncoding"]),
                  (o["Range"] = n["Range"]),
                  (o["If-Modified-Since"] = n["IfModifiedSince"]),
                  (o["If-Unmodified-Since"] = n["IfUnmodifiedSince"]),
                  (o["If-Match"] = n["IfMatch"]),
                  (o["If-None-Match"] = n["IfNoneMatch"]),
                  (o["x-cos-copy-source"] = n["CopySource"]),
                  (o["x-cos-copy-source-Range"] = n["CopySourceRange"]),
                  (o["x-cos-metadata-directive"] = n["MetadataDirective"]),
                  (o["x-cos-copy-source-If-Modified-Since"] =
                    n["CopySourceIfModifiedSince"]),
                  (o["x-cos-copy-source-If-Unmodified-Since"] =
                    n["CopySourceIfUnmodifiedSince"]),
                  (o["x-cos-copy-source-If-Match"] = n["CopySourceIfMatch"]),
                  (o["x-cos-copy-source-If-None-Match"] =
                    n["CopySourceIfNoneMatch"]),
                  (o["x-cos-acl"] = n["ACL"]),
                  (o["x-cos-grant-read"] = n["GrantRead"]),
                  (o["x-cos-grant-write"] = n["GrantWrite"]),
                  (o["x-cos-grant-full-control"] = n["GrantFullControl"]),
                  (o["x-cos-grant-read-acp"] = n["GrantReadAcp"]),
                  (o["x-cos-grant-write-acp"] = n["GrantWriteAcp"]),
                  (o["x-cos-storage-class"] = n["StorageClass"]),
                  (o["x-cos-server-side-encryption-customer-algorithm"] =
                    n["SSECustomerAlgorithm"]),
                  (o["x-cos-server-side-encryption-customer-key"] =
                    n["SSECustomerKey"]),
                  (o["x-cos-server-side-encryption-customer-key-MD5"] =
                    n["SSECustomerKeyMD5"]),
                  (o["x-cos-server-side-encryption"] =
                    n["ServerSideEncryption"]),
                  (o["x-cos-server-side-encryption-cos-kms-key-id"] =
                    n["SSEKMSKeyId"]),
                  (o["x-cos-server-side-encryption-context"] = n["SSEContext"]),
                  (n.Headers = l(o)));
              }
              var i = function(e) {
                  return (
                    e &&
                      e.headers &&
                      (e.headers["x-cos-version-id"] &&
                        (e.VersionId = e.headers["x-cos-version-id"]),
                      e.headers["x-cos-delete-marker"] &&
                        (e.DeleteMarker = e.headers["x-cos-delete-marker"])),
                    e
                  );
                },
                a = function(e, t) {
                  r && r(i(e), i(t));
                };
              if ("getService" !== e && "abortUploadTask" !== e) {
                var s;
                if ((s = w(e, n)))
                  return void a({ error: "missing param " + s });
                if (n.Region) {
                  if (n.Region.indexOf("cos.") > -1)
                    return void a({
                      error: 'param Region should not be start with "cos."'
                    });
                  if (!/^([a-z\d-]+)$/.test(n.Region))
                    return void a({ error: "Region format error." });
                  this.options.CompatibilityMode ||
                    -1 !== n.Region.indexOf("-") ||
                    "yfb" === n.Region ||
                    "default" === n.Region ||
                    console.warn(
                      "param Region format error, find help here: https://cloud.tencent.com/document/product/436/6224"
                    );
                }
                if (n.Bucket) {
                  if (!/^([a-z\d-]+)-(\d+)$/.test(n.Bucket))
                    if (n.AppId) n.Bucket = n.Bucket + "-" + n.AppId;
                    else {
                      if (!this.options.AppId)
                        return void a({
                          error: 'Bucket should format as "test-1250000000".'
                        });
                      n.Bucket = n.Bucket + "-" + this.options.AppId;
                    }
                  n.AppId &&
                    (console.warn(
                      'warning: AppId has been deprecated, Please put it at the end of parameter Bucket(E.g Bucket:"test-1250000000" ).'
                    ),
                    delete n.AppId);
                }
                n.Key &&
                  "/" === n.Key.substr(0, 1) &&
                  (n.Key = n.Key.substr(1));
              }
              var u = t.call(this, n, a);
              if ("getAuth" === e || "getObjectUrl" === e) return u;
            };
          },
          S = function(e, t) {
            var n,
              r,
              o = this,
              i = 0,
              a = 0,
              s = Date.now();
            function u() {
              if (((r = 0), t && "function" === typeof t)) {
                n = Date.now();
                var o,
                  u = Math.max(
                    0,
                    Math.round(((a - i) / ((n - s) / 1e3)) * 100) / 100
                  );
                (o =
                  0 === a && 0 === e
                    ? 1
                    : Math.round((a / e) * 100) / 100 || 0),
                  (s = n),
                  (i = a);
                try {
                  t({ loaded: a, total: e, speed: u, percent: o });
                } catch (c) {}
              }
            }
            return function(t, n) {
              if ((t && ((a = t.loaded), (e = t.total)), n))
                clearTimeout(r), u();
              else {
                if (r) return;
                r = setTimeout(u, o.options.ProgressInterval);
              }
            };
          },
          T = function(e, n, r) {
            var o;
            if (R.isBrowser) {
              if (
                ("string" === typeof n.Body && (n.Body = new t.Blob([n.Body])),
                !(n.Body instanceof t.File || n.Body instanceof t.Blob))
              )
                return void r({
                  error:
                    "params body format error, Only allow File|Blob|String."
                });
              o = n.Body.size;
            } else {
              if ("sliceUploadFile" === e)
                return n.FilePath
                  ? void fs.stat(n.FilePath, function(e, t) {
                      if (e) {
                        if (void 0 === n.ContentLength) return void r(e);
                        o = n.ContentLength;
                      } else (n.FileStat = t), (n.FileStat.FilePath = n.FilePath), (o = t.size);
                      (n.ContentLength = o = o || 0), r(null, o);
                    })
                  : void r({ error: "missing param FilePath" });
              if (void 0 === n.Body)
                return void r({ error: "missing param Body" });
              if (
                ("string" === typeof n.Body && (n.Body = t.Buffer.from(n.Body)),
                n.Body instanceof t.Buffer)
              )
                o = n.Body.length;
              else {
                if ("function" !== typeof n.Body.pipe)
                  return void r({
                    error:
                      "params Body format error, Only allow Buffer|Stream|String."
                  });
                o = void 0 === n.ContentLength ? void 0 : n.ContentLength;
              }
            }
            (n.ContentLength = o), r(null, o);
          },
          R = {
            noop: c,
            apiWrapper: k,
            getAuth: u,
            xml2json: i,
            json2xml: a,
            md5: r,
            clearKey: l,
            getFileMd5: f,
            binaryBase64: b,
            extend: h,
            isArray: g,
            isInArray: m,
            each: y,
            map: v,
            filter: C,
            clone: p,
            uuid: x,
            throttleOnProgress: S,
            getFileSize: T,
            isBrowser: !!t.document
          };
        (R.localStorage = t.localStorage),
          (R.fileSlice = function(e, t, n) {
            return e.slice
              ? e.slice(t, n)
              : e.mozSlice
                ? e.mozSlice(t, n)
                : e.webkitSlice
                  ? e.webkitSlice(t, n)
                  : void 0;
          }),
          (R.getFileUUID = function(e, t) {
            return e.name && e.size && e.lastModifiedDate && t
              ? R.md5([e.name, e.size, e.lastModifiedDate, t].join("::"))
              : null;
          }),
          (R.getBodyMd5 = function(e, n, r) {
            (r = r || c),
              e
                ? "string" === typeof n
                  ? r(R.md5(n, !0))
                  : n instanceof t.Blob
                    ? R.getFileMd5(n, function(e, t) {
                        r(t);
                      })
                    : r()
                : r();
          }),
          (e.exports = R);
      }.call(this, n("c8ba")));
    },
    "0ae0": function(e, t) {
      var n = function(e) {
          var t = {},
            n = function(e) {
              return !t[e] && (t[e] = []), t[e];
            };
          (e.on = function(e, t) {
            "task-list-update" === e &&
              console.warn(
                'warning: Event "' +
                  e +
                  '" has been deprecated. Please use "list-update" instead.'
              ),
              n(e).push(t);
          }),
            (e.off = function(e, t) {
              for (var r = n(e), o = r.length - 1; o >= 0; o--)
                t === r[o] && r.splice(o, 1);
            }),
            (e.emit = function(e, t) {
              for (
                var r = n(e).map(function(e) {
                    return e;
                  }),
                  o = 0;
                o < r.length;
                o++
              )
                r[o](t);
            });
        },
        r = function() {
          n(this);
        };
      (e.exports.init = n), (e.exports.EventProxy = r);
    },
    "0f22": function(e, t, n) {
      var r = n("29d8").DOMParser,
        o = function() {
          this.version = "1.3.5";
          var e = { mergeCDATA: !0, normalize: !0, stripElemPrefix: !0 },
            t = new RegExp(/(?!xmlns)^.*:/);
          new RegExp(/^\s+|\s+$/g);
          return (
            (this.grokType = function(e) {
              return /^\s*$/.test(e)
                ? null
                : /^(?:true|false)$/i.test(e)
                  ? "true" === e.toLowerCase()
                  : isFinite(e)
                    ? parseFloat(e)
                    : e;
            }),
            (this.parseString = function(e, t) {
              if (e) {
                var n = this.stringToXML(e);
                return n.getElementsByTagName("parsererror").length
                  ? null
                  : this.parseXML(n, t);
              }
              return null;
            }),
            (this.parseXML = function(n, r) {
              for (var i in r) e[i] = r[i];
              var a = {},
                s = 0,
                u = "",
                c = n.childNodes.length;
              if (c)
                for (var l, d, f, p = 0; p < n.childNodes.length; p++)
                  (l = n.childNodes.item(p)),
                    4 === l.nodeType
                      ? e.mergeCDATA && (u += l.nodeValue)
                      : 3 === l.nodeType
                        ? (u += l.nodeValue)
                        : 1 === l.nodeType &&
                          (0 === s && (a = {}),
                          (d = e.stripElemPrefix
                            ? l.nodeName.replace(t, "")
                            : l.nodeName),
                          (f = o.parseXML(l)),
                          a.hasOwnProperty(d)
                            ? (a[d].constructor !== Array && (a[d] = [a[d]]),
                              a[d].push(f))
                            : ((a[d] = f), s++));
              return Object.keys(a).length || (a = u || ""), a;
            }),
            (this.xmlToString = function(e) {
              try {
                var t = e.xml
                  ? e.xml
                  : new XMLSerializer().serializeToString(e);
                return t;
              } catch (n) {
                return null;
              }
            }),
            (this.stringToXML = function(e) {
              try {
                var t = null;
                if (window.DOMParser) {
                  var n = new r();
                  return (t = n.parseFromString(e, "text/xml")), t;
                }
                return (
                  (t = new ActiveXObject("Microsoft.XMLDOM")),
                  (t.async = !1),
                  t.loadXML(e),
                  t
                );
              } catch (o) {
                return null;
              }
            }),
            this
          );
        }.call({}),
        i = function(e) {
          return o.parseString(e);
        };
      e.exports = i;
    },
    "164b": function(e, t, n) {
      "use strict";
      var r = n("03e2"),
        o = n("0ae0"),
        i = n("e263"),
        a = n("75f1"),
        s = n("1ac6"),
        u = {
          AppId: "",
          SecretId: "",
          SecretKey: "",
          FileParallelLimit: 3,
          ChunkParallelLimit: 3,
          ChunkRetryTimes: 3,
          ChunkSize: 1048576,
          SliceSize: 1048576,
          CopyChunkParallelLimit: 20,
          CopyChunkSize: 10485760,
          CopySliceSize: 10485760,
          ProgressInterval: 1e3,
          UploadQueueSize: 1e4,
          UploadIdCacheLimit: 50,
          UploadCheckContentMd5: !1,
          Domain: "",
          ServiceDomain: "",
          Protocol: "",
          CompatibilityMode: !1,
          ForcePathStyle: !1,
          XCosSecurityToken: ""
        },
        c = function(e) {
          (this.options = r.extend(r.clone(u), e || {})),
            (this.options.FileParallelLimit = Math.max(
              1,
              this.options.FileParallelLimit
            )),
            (this.options.ChunkParallelLimit = Math.max(
              1,
              this.options.ChunkParallelLimit
            )),
            (this.options.ChunkRetryTimes = Math.max(
              0,
              this.options.ChunkRetryTimes
            )),
            (this.options.ChunkSize = Math.max(
              1048576,
              this.options.ChunkSize
            )),
            (this.options.CopyChunkParallelLimit = Math.max(
              1,
              this.options.CopyChunkParallelLimit
            )),
            (this.options.CopyChunkSize = Math.max(
              1048576,
              this.options.CopyChunkSize
            )),
            (this.options.CopySliceSize = Math.max(
              0,
              this.options.CopySliceSize
            )),
            this.options.AppId &&
              console.warn(
                'warning: AppId has been deprecated, Please put it at the end of parameter Bucket(E.g: "test-1250000000").'
              ),
            o.init(this),
            i.init(this);
        };
      r.extend(c.prototype, a),
        r.extend(c.prototype, s),
        (c.getAuthorization = r.getAuth),
        (c.version = "0.4.22"),
        (e.exports = c);
    },
    "1ac6": function(e, t, n) {
      var r,
        o = n("88c7"),
        i = n("0ae0").EventProxy,
        a = n("03e2");
      function s(e, t) {
        var n,
          r,
          o = new i(),
          s = e.TaskId,
          c = e.Bucket,
          l = e.Region,
          p = e.Key,
          g = e.Body,
          m = e.ChunkSize || e.SliceSize || this.options.ChunkSize,
          v = e.AsyncLimit,
          b = e.StorageClass || "Standard",
          x = e.ServerSideEncryption,
          w = this,
          k = e.onHashProgress;
        o.on("error", function(e) {
          if (w._isRunningTask(s)) return t(e);
        }),
          o.on("upload_complete", function(e) {
            t(null, e);
          }),
          o.on("upload_slice_complete", function(e) {
            C.call(
              w,
              {
                Bucket: c,
                Region: l,
                Key: p,
                UploadId: e.UploadId,
                SliceList: e.SliceList
              },
              function(t, i) {
                if (w._isRunningTask(s)) {
                  if ((delete u[e.UploadId], t))
                    return r(null, !0), o.emit("error", t);
                  r({ loaded: n, total: n }, !0),
                    f.call(w, e.UploadId),
                    o.emit("upload_complete", i);
                }
              }
            );
          }),
          o.on("get_upload_data_finish", function(t) {
            var i = a.getFileUUID(g, e.ChunkSize);
            i && d.call(w, i, t.UploadId),
              (u[t.UploadId] = !0),
              s &&
                w.on("inner-kill-task", function(e) {
                  e.TaskId === s &&
                    "canceled" === e.toState &&
                    delete u[t.UploadId];
                }),
              y.call(
                w,
                {
                  TaskId: s,
                  Bucket: c,
                  Region: l,
                  Key: p,
                  Body: g,
                  FileSize: n,
                  SliceSize: m,
                  AsyncLimit: v,
                  ServerSideEncryption: x,
                  UploadData: t,
                  onProgress: r
                },
                function(e, t) {
                  if (w._isRunningTask(s))
                    return e
                      ? (r(null, !0), o.emit("error", e))
                      : void o.emit("upload_slice_complete", t);
                }
              );
          }),
          o.on("get_file_size_finish", function() {
            if (
              ((r = a.throttleOnProgress.call(w, n, e.onProgress)),
              e.UploadData.UploadId)
            )
              o.emit("get_upload_data_finish", e.UploadData);
            else {
              var t = a.extend(
                {
                  TaskId: s,
                  Bucket: c,
                  Region: l,
                  Key: p,
                  Headers: e.Headers,
                  StorageClass: b,
                  Body: g,
                  FileSize: n,
                  SliceSize: m,
                  onHashProgress: k
                },
                e
              );
              h.call(w, t, function(t, n) {
                if (w._isRunningTask(s)) {
                  if (t) return o.emit("error", t);
                  (e.UploadData.UploadId = n.UploadId),
                    (e.UploadData.PartList = n.PartList),
                    o.emit("get_upload_data_finish", e.UploadData);
                }
              });
            }
          }),
          (n = e.ContentLength),
          delete e.ContentLength,
          !e.Headers && (e.Headers = {}),
          a.each(e.Headers, function(t, n) {
            "content-length" === n.toLowerCase() && delete e.Headers[n];
          }),
          (function() {
            for (
              var t = [
                  1,
                  2,
                  4,
                  8,
                  16,
                  32,
                  64,
                  128,
                  256,
                  512,
                  1024,
                  2048,
                  4096,
                  5120
                ],
                r = 1048576,
                o = 0;
              o < t.length;
              o++
            )
              if (((r = 1024 * t[o] * 1024), n / r <= 1024)) break;
            e.ChunkSize = e.SliceSize = m = Math.max(m, r);
          })(),
          (r = a.throttleOnProgress.call(w, n, e.onProgress)),
          0 === n
            ? ((e.Body = ""),
              w.putObject(e, function(e, o) {
                if (e) return r(null, !0), t(e);
                r({ loaded: n, total: n }, !0), t(null, o);
              }))
            : o.emit("get_file_size_finish");
      }
      var u = {},
        c = "cos_sdk_upload_cache";
      function l() {
        var e = this.options.UploadIdCacheLimit;
        if (!r) {
          if (e)
            try {
              r = JSON.parse(a.localStorage.getItem(c)) || [];
            } catch (t) {}
          r || (r = []);
        }
      }
      function d(e, t, n) {
        l.call(this);
        for (var o = r.length - 1; o >= 0; o--)
          r[o][0] === e && r[o][1] === t && r.splice(o, 1);
        r.unshift([e, t]);
        var i = this.options.UploadIdCacheLimit;
        r.length > i && r.splice(i),
          i &&
            setTimeout(function() {
              try {
                a.localStorage.setItem(c, JSON.stringify(r));
              } catch (e) {}
            });
      }
      function f(e) {
        l.call(this), delete u[e];
        for (var t = r.length - 1; t >= 0; t--) r[t][1] === e && r.splice(t, 1);
        var n = this.options.UploadIdCacheLimit;
        r.length > n && r.splice(n),
          n &&
            setTimeout(function() {
              try {
                r.length
                  ? a.localStorage.setItem(c, JSON.stringify(r))
                  : a.localStorage.removeItem(c);
              } catch (e) {}
            });
      }
      function p(e) {
        l.call(this);
        for (var t = [], n = 0; n < r.length; n++)
          r[n][0] === e && t.push(r[n][1]);
        return t.length ? t : null;
      }
      function h(e, t) {
        var n = e.TaskId,
          r = e.Bucket,
          s = e.Region,
          c = e.Key,
          l = e.StorageClass,
          d = this,
          h = {},
          y = e.FileSize,
          v = e.SliceSize,
          C = Math.ceil(y / v),
          b = 0,
          x = a.throttleOnProgress.call(d, y, e.onHashProgress),
          w = function(t, n) {
            var r = v * (t - 1),
              o = Math.min(r + v, y),
              i = o - r;
            if (h[t]) n(null, { PartNumber: t, ETag: h[t], Size: i });
            else {
              var s = a.fileSlice(e.Body, r, o);
              a.getFileMd5(s, function(e, r) {
                if (e) return n(e);
                var o = '"' + r + '"';
                (h[t] = o),
                  1,
                  (b += i),
                  n(e, { PartNumber: t, ETag: o, Size: i }),
                  x({ loaded: b, total: y });
              });
            }
          },
          k = function(e, t) {
            var n = e.length;
            if (0 === n) return t(null, !0);
            if (n > C) return t(null, !1);
            if (n > 1) {
              var r = Math.max(e[0].Size, e[1].Size);
              if (r !== v) return t(null, !1);
            }
            var o = function(r) {
              if (r < n) {
                var i = e[r];
                w(i.PartNumber, function(e, n) {
                  n && n.ETag === i.ETag && n.Size === i.Size
                    ? o(r + 1)
                    : t(null, !1);
                });
              } else t(null, !0);
            };
            o(0);
          },
          S = new i();
        S.on("error", function(e) {
          if (d._isRunningTask(n)) return t(e);
        }),
          S.on("upload_id_ready", function(e) {
            var n = {},
              r = [];
            a.each(e.PartList, function(e) {
              n[e.PartNumber] = e;
            });
            for (var o = 1; o <= C; o++) {
              var i = n[o];
              i
                ? ((i.PartNumber = o), (i.Uploaded = !0))
                : (i = { PartNumber: o, ETag: null, Uploaded: !1 }),
                r.push(i);
            }
            (e.PartList = r), t(null, e);
          }),
          S.on("no_available_upload_id", function() {
            if (d._isRunningTask(n)) {
              var o = a.extend(
                {
                  Bucket: r,
                  Region: s,
                  Key: c,
                  Headers: e.Headers,
                  StorageClass: l
                },
                e
              );
              d.multipartInit(o, function(e, r) {
                if (d._isRunningTask(n)) {
                  if (e) return S.emit("error", e);
                  var o = r.UploadId;
                  if (!o) return t({ Message: "no upload id" });
                  S.emit("upload_id_ready", { UploadId: o, PartList: [] });
                }
              });
            }
          }),
          S.on("has_upload_id", function(e) {
            (e = e.reverse()),
              o.eachLimit(
                e,
                1,
                function(e, t) {
                  d._isRunningTask(n) &&
                    (u[e]
                      ? t()
                      : m.call(
                          d,
                          { Bucket: r, Region: s, Key: c, UploadId: e },
                          function(r, o) {
                            if (d._isRunningTask(n)) {
                              if (r) return f.call(d, e), S.emit("error", r);
                              var i = o.PartList;
                              i.forEach(function(e) {
                                (e.PartNumber *= 1),
                                  (e.Size *= 1),
                                  (e.ETag = e.ETag || "");
                              }),
                                k(i, function(r, o) {
                                  if (d._isRunningTask(n))
                                    return r
                                      ? S.emit("error", r)
                                      : void (o
                                          ? t({ UploadId: e, PartList: i })
                                          : t());
                                });
                            }
                          }
                        ));
                },
                function(e) {
                  d._isRunningTask(n) &&
                    (x(null, !0),
                    e && e.UploadId
                      ? S.emit("upload_id_ready", e)
                      : S.emit("no_available_upload_id"));
                }
              );
          }),
          S.on("seek_local_avail_upload_id", function(t) {
            var o,
              i = a.getFileUUID(e.Body, e.ChunkSize);
            if (i && (o = p.call(d, i))) {
              var l = function(e) {
                if (e >= o.length) S.emit("has_upload_id", t);
                else {
                  var i = o[e];
                  if (!a.isInArray(t, i)) return f.call(d, i), void l(e + 1);
                  u[i]
                    ? l(e + 1)
                    : m.call(
                        d,
                        { Bucket: r, Region: s, Key: c, UploadId: i },
                        function(t, r) {
                          d._isRunningTask(n) &&
                            (t
                              ? (f.call(d, i), l(e + 1))
                              : S.emit("upload_id_ready", {
                                  UploadId: i,
                                  PartList: r.PartList
                                }));
                        }
                      );
                }
              };
              l(0);
            } else S.emit("has_upload_id", t);
          }),
          S.on("get_remote_upload_id_list", function(t) {
            g.call(d, { Bucket: r, Region: s, Key: c }, function(t, r) {
              if (d._isRunningTask(n)) {
                if (t) return S.emit("error", t);
                var o = a
                  .filter(r.UploadList, function(e) {
                    return (
                      e.Key === c &&
                      (!l || e.StorageClass.toUpperCase() === l.toUpperCase())
                    );
                  })
                  .reverse()
                  .map(function(e) {
                    return e.UploadId || e.UploadID;
                  });
                if (o.length) S.emit("seek_local_avail_upload_id", o);
                else {
                  var i,
                    s = a.getFileUUID(e.Body, e.ChunkSize);
                  s &&
                    (i = p.call(d, s)) &&
                    a.each(i, function(e) {
                      f.call(d, e);
                    }),
                    S.emit("no_available_upload_id");
                }
              }
            });
          }),
          S.emit("get_remote_upload_id_list");
      }
      function g(e, t) {
        var n = this,
          r = [],
          o = { Bucket: e.Bucket, Region: e.Region, Prefix: e.Key },
          i = function() {
            n.multipartList(o, function(e, n) {
              if (e) return t(e);
              r.push.apply(r, n.Upload || []),
                "true" == n.IsTruncated
                  ? ((o.KeyMarker = n.NextKeyMarker),
                    (o.UploadIdMarker = n.NextUploadIdMarker),
                    i())
                  : t(null, { UploadList: r });
            });
          };
        i();
      }
      function m(e, t) {
        var n = this,
          r = [],
          o = {
            Bucket: e.Bucket,
            Region: e.Region,
            Key: e.Key,
            UploadId: e.UploadId
          },
          i = function() {
            n.multipartListPart(o, function(e, n) {
              if (e) return t(e);
              r.push.apply(r, n.Part || []),
                "true" == n.IsTruncated
                  ? ((o.PartNumberMarker = n.NextPartNumberMarker), i())
                  : t(null, { PartList: r });
            });
          };
        i();
      }
      function y(e, t) {
        var n = this,
          r = e.TaskId,
          i = e.Bucket,
          s = e.Region,
          u = e.Key,
          c = e.UploadData,
          l = e.FileSize,
          d = e.SliceSize,
          f = Math.min(e.AsyncLimit || n.options.ChunkParallelLimit || 1, 256),
          p = e.Body,
          h = Math.ceil(l / d),
          g = 0,
          m = e.ServerSideEncryption,
          y = a.filter(c.PartList, function(e) {
            return (
              e["Uploaded"] && (g += (e["PartNumber"] >= h && l % d) || d),
              !e["Uploaded"]
            );
          }),
          C = e.onProgress;
        o.eachLimit(
          y,
          f,
          function(e, t) {
            if (n._isRunningTask(r)) {
              var o = e["PartNumber"],
                f =
                  Math.min(l, e["PartNumber"] * d) - (e["PartNumber"] - 1) * d,
                h = 0;
              v.call(
                n,
                {
                  TaskId: r,
                  Bucket: i,
                  Region: s,
                  Key: u,
                  SliceSize: d,
                  FileSize: l,
                  PartNumber: o,
                  ServerSideEncryption: m,
                  Body: p,
                  UploadData: c,
                  onProgress: function(e) {
                    (g += e.loaded - h),
                      (h = e.loaded),
                      C({ loaded: g, total: l });
                  }
                },
                function(o, i) {
                  n._isRunningTask(r) &&
                    (!a.isBrowser ||
                      o ||
                      i.ETag ||
                      (o =
                        'get ETag error, please add "ETag" to CORS ExposeHeader setting.'),
                    o ? (g -= h) : ((g += f - h), (e.ETag = i.ETag)),
                    t(o || null, i));
                }
              );
            }
          },
          function(e) {
            if (n._isRunningTask(r))
              return e
                ? t(e)
                : void t(null, { UploadId: c.UploadId, SliceList: c.PartList });
          }
        );
      }
      function v(e, t) {
        var n = this,
          r = e.TaskId,
          i = e.Bucket,
          s = e.Region,
          u = e.Key,
          c = e.FileSize,
          l = e.Body,
          d = 1 * e.PartNumber,
          f = e.SliceSize,
          p = e.ServerSideEncryption,
          h = e.UploadData,
          g = n.options.ChunkRetryTimes + 1,
          m = f * (d - 1),
          y = f,
          v = m + f;
        v > c && ((v = c), (y = v - m));
        var C = h.PartList[d - 1];
        o.retry(
          g,
          function(t) {
            if (n._isRunningTask(r)) {
              var o = a.fileSlice(l, m, v);
              n.multipartUpload(
                {
                  TaskId: r,
                  Bucket: i,
                  Region: s,
                  Key: u,
                  ContentLength: y,
                  PartNumber: d,
                  UploadId: h.UploadId,
                  ServerSideEncryption: p,
                  Body: o,
                  onProgress: e.onProgress
                },
                function(e, o) {
                  if (n._isRunningTask(r))
                    return e ? t(e) : ((C.Uploaded = !0), t(null, o));
                }
              );
            }
          },
          function(e, o) {
            if (n._isRunningTask(r)) return t(e, o);
          }
        );
      }
      function C(e, t) {
        var n = e.Bucket,
          r = e.Region,
          i = e.Key,
          a = e.UploadId,
          s = e.SliceList,
          u = this,
          c = this.options.ChunkRetryTimes + 1,
          l = s.map(function(e) {
            return { PartNumber: e.PartNumber, ETag: e.ETag };
          });
        o.retry(
          c,
          function(e) {
            u.multipartComplete(
              { Bucket: n, Region: r, Key: i, UploadId: a, Parts: l },
              e
            );
          },
          function(e, n) {
            t(e, n);
          }
        );
      }
      function b(e, t) {
        var n = e.Bucket,
          r = e.Region,
          o = e.Key,
          a = e.UploadId,
          s = e.Level || "task",
          u = e.AsyncLimit,
          c = this,
          l = new i();
        if (
          (l.on("error", function(e) {
            return t(e);
          }),
          l.on("get_abort_array", function(i) {
            x.call(
              c,
              {
                Bucket: n,
                Region: r,
                Key: o,
                Headers: e.Headers,
                AsyncLimit: u,
                AbortArray: i
              },
              function(e, n) {
                if (e) return t(e);
                t(null, n);
              }
            );
          }),
          "bucket" === s)
        )
          g.call(c, { Bucket: n, Region: r }, function(e, n) {
            if (e) return t(e);
            l.emit("get_abort_array", n.UploadList || []);
          });
        else if ("file" === s) {
          if (!o) return t({ error: "abort_upload_task_no_key" });
          g.call(c, { Bucket: n, Region: r, Key: o }, function(e, n) {
            if (e) return t(e);
            l.emit("get_abort_array", n.UploadList || []);
          });
        } else {
          if ("task" !== s) return t({ error: "abort_unknown_level" });
          if (!a) return t({ error: "abort_upload_task_no_id" });
          if (!o) return t({ error: "abort_upload_task_no_key" });
          l.emit("get_abort_array", [{ Key: o, UploadId: a }]);
        }
      }
      function x(e, t) {
        var n = e.Bucket,
          r = e.Region,
          i = e.Key,
          a = e.AbortArray,
          s = e.AsyncLimit || 1,
          u = this,
          c = 0,
          l = new Array(a.length);
        o.eachLimit(
          a,
          s,
          function(t, o) {
            var a = c;
            if (i && i != t.Key) return o(null, { KeyNotMatch: !0 });
            var s = t.UploadId || t.UploadID;
            u.multipartAbort(
              {
                Bucket: n,
                Region: r,
                Key: t.Key,
                Headers: e.Headers,
                UploadId: s
              },
              function(e, i) {
                var u = { Bucket: n, Region: r, Key: t.Key, UploadId: s };
                (l[a] = { error: e, task: u }), o(null);
              }
            ),
              c++;
          },
          function(e) {
            if (e) return t(e);
            for (var n = [], r = [], o = 0, i = l.length; o < i; o++) {
              var a = l[o];
              a["task"] && (a["error"] ? r.push(a["task"]) : n.push(a["task"]));
            }
            return t(null, { successList: n, errorList: r });
          }
        );
      }
      function w(e, t) {
        var n = this,
          r = void 0 === e.SliceSize ? n.options.SliceSize : e.SliceSize,
          o = 0,
          i = 0,
          s = a.throttleOnProgress.call(n, i, e.onProgress),
          u = e.files.length,
          c = e.onFileFinish,
          l = Array(u),
          d = function(e, n, r) {
            s(null, !0),
              c && c(e, n, r),
              (l[r.Index] = { options: r, error: e, data: n }),
              --u <= 0 && t && t(null, { files: l });
          },
          f = [];
        a.each(e.files, function(e, t) {
          (function() {
            var n = e.Body,
              u = n.size || n.length || 0,
              c = { Index: t, TaskId: "" };
            (o += u),
              a.each(e, function(e, t) {
                "object" !== typeof e && "function" !== typeof e && (c[t] = e);
              });
            var l = e.TaskReady,
              p = function(e) {
                (c.TaskId = e), l && l(e);
              };
            e.TaskReady = p;
            var h = 0,
              g = e.onProgress,
              m = function(e) {
                (i = i - h + e.loaded),
                  (h = e.loaded),
                  g && g(e),
                  s({ loaded: i, total: o });
              };
            e.onProgress = m;
            var y = e.onFileFinish,
              v = function(e, t) {
                y && y(e, t), d && d(e, t, c);
              },
              C = u >= r ? "sliceUploadFile" : "putObject";
            f.push({ api: C, params: e, callback: v });
          })();
        }),
          n._addTasks(f);
      }
      function k(e, t) {
        var n = new i(),
          r = this,
          s = e.Bucket,
          u = e.Region,
          c = e.Key,
          l = e.CopySource,
          d = l.match(/^([^.]+-\d+)\.cos\.([^.]+)\.[^\/]+\/(.+)$/);
        if (d) {
          var f = d[1],
            p = d[2],
            h = decodeURIComponent(d[3]),
            g = void 0 === e.SliceSize ? r.options.CopySliceSize : e.SliceSize;
          g = Math.max(0, Math.min(g, 5368709120));
          var m,
            y,
            v = e.ChunkSize || this.options.ChunkSize,
            C = this.options.CopyChunkParallelLimit,
            b = 0;
          n.on("copy_slice_complete", function(e) {
            r.multipartComplete(
              {
                Bucket: s,
                Region: u,
                Key: c,
                UploadId: e.UploadId,
                Parts: e.PartList
              },
              function(e, n) {
                if (e) return y(null, !0), t(e);
                y({ loaded: m, total: m }, !0), t(null, n);
              }
            );
          }),
            n.on("get_copy_data_finish", function(e) {
              o.eachLimit(
                e.PartList,
                C,
                function(n, o) {
                  var i = n.PartNumber,
                    a = n.CopySourceRange,
                    d = n.end - n.start,
                    f = 0;
                  S.call(
                    r,
                    {
                      Bucket: s,
                      Region: u,
                      Key: c,
                      CopySource: l,
                      UploadId: e.UploadId,
                      PartNumber: i,
                      CopySourceRange: a,
                      onProgress: function(e) {
                        (b += e.loaded - f),
                          (f = e.loaded),
                          y({ loaded: b, total: m });
                      }
                    },
                    function(e, r) {
                      if (e) return t(e);
                      y({ loaded: b, total: m }),
                        (b += d - f),
                        (n.ETag = r.ETag),
                        o(e || null, r);
                    }
                  );
                },
                function(r) {
                  if (r) return y(null, !0), t(r);
                  n.emit("copy_slice_complete", e);
                }
              );
            }),
            n.on("get_file_size_finish", function() {
              (function() {
                for (
                  var t = [
                      1,
                      2,
                      4,
                      8,
                      16,
                      32,
                      64,
                      128,
                      256,
                      512,
                      1024,
                      2048,
                      4096,
                      5120
                    ],
                    n = 1048576,
                    r = 0;
                  r < t.length;
                  r++
                )
                  if (((n = 1024 * t[r] * 1024), m / n <= 1024)) break;
                e.ChunkSize = v = Math.max(v, n);
                for (var o = Math.ceil(m / v), i = [], a = 1; a <= o; a++) {
                  var s = (a - 1) * v,
                    u = a * v < m ? a * v - 1 : m - 1,
                    c = {
                      PartNumber: a,
                      start: s,
                      end: u,
                      CopySourceRange: "bytes=" + s + "-" + u
                    };
                  i.push(c);
                }
                e.PartList = i;
              })(),
                r.multipartInit({ Bucket: s, Region: u, Key: c }, function(
                  r,
                  o
                ) {
                  if (r) return t(r);
                  (e.UploadId = o.UploadId), n.emit("get_copy_data_finish", e);
                });
            }),
            r.headObject({ Bucket: f, Region: p, Key: h }, function(o, i) {
              if (o)
                return o.statusCode && 404 === o.statusCode
                  ? t({ ErrorStatus: h + " Not Exist" })
                  : void t(o);
              (m = e.FileSize = i.headers["content-length"]),
                void 0 !== m && m
                  ? ((y = a.throttleOnProgress.call(r, m, e.onProgress)),
                    m <= g
                      ? r.putObjectCopy(e, function(e, n) {
                          if (e) return y(null, !0), t(e);
                          y({ loaded: m, total: m }, !0), t(e, n);
                        })
                      : n.emit("get_file_size_finish"))
                  : t({
                      error:
                        'get Content-Length error, please add "Content-Length" to CORS ExposeHeader setting.'
                    });
            });
        } else t({ error: "CopySource format error" });
      }
      function S(e, t) {
        var n = e.TaskId,
          r = e.Bucket,
          i = e.Region,
          a = e.Key,
          s = e.CopySource,
          u = e.UploadId,
          c = 1 * e.PartNumber,
          l = e.CopySourceRange,
          d = this.options.ChunkRetryTimes + 1,
          f = this;
        o.retry(
          d,
          function(t) {
            f.uploadPartCopy(
              {
                TaskId: n,
                Bucket: r,
                Region: i,
                Key: a,
                CopySource: s,
                UploadId: u,
                PartNumber: c,
                CopySourceRange: l,
                onProgress: e.onProgress
              },
              function(e, n) {
                t(e || null, n);
              }
            );
          },
          function(e, n) {
            return t(e, n);
          }
        );
      }
      var T = {
        sliceUploadFile: s,
        abortUploadTask: b,
        uploadFiles: w,
        sliceCopyFile: k
      };
      a.each(T, function(e, n) {
        t[n] = a.apiWrapper(n, e);
      });
    },
    "29d8": function(e, t, n) {
      function r(e) {
        this.options = e || { locator: {} };
      }
      function o(e, t, n) {
        if (!e) {
          if (t instanceof i) return t;
          e = t;
        }
        var r = {},
          o = e instanceof Function;
        function a(t) {
          var i = e[t];
          !i &&
            o &&
            (i =
              2 == e.length
                ? function(n) {
                    e(t, n);
                  }
                : e),
            (r[t] =
              (i &&
                function(e) {
                  i("[xmldom " + t + "]\t" + e + s(n));
                }) ||
              function() {});
        }
        return (n = n || {}), a("warning"), a("error"), a("fatalError"), r;
      }
      function i() {
        this.cdata = !1;
      }
      function a(e, t) {
        (t.lineNumber = e.lineNumber), (t.columnNumber = e.columnNumber);
      }
      function s(e) {
        if (e)
          return (
            "\n@" +
            (e.systemId || "") +
            "#[line:" +
            e.lineNumber +
            ",col:" +
            e.columnNumber +
            "]"
          );
      }
      function u(e, t, n) {
        return "string" == typeof e
          ? e.substr(t, n)
          : e.length >= t + n || t
            ? new java.lang.String(e, t, n) + ""
            : e;
      }
      function c(e, t) {
        e.currentElement
          ? e.currentElement.appendChild(t)
          : e.doc.appendChild(t);
      }
      (r.prototype.parseFromString = function(e, t) {
        var n = this.options,
          r = new l(),
          a = n.domBuilder || new i(),
          s = n.errorHandler,
          u = n.locator,
          c = n.xmlns || {},
          d = { lt: "<", gt: ">", amp: "&", quot: '"', apos: "'" };
        return (
          u && a.setDocumentLocator(u),
          (r.errorHandler = o(s, a, u)),
          (r.domBuilder = n.domBuilder || a),
          /\/x?html?$/.test(t) &&
            ((d.nbsp = " "),
            (d.copy = "©"),
            (c[""] = "http://www.w3.org/1999/xhtml")),
          (c.xml = c.xml || "http://www.w3.org/XML/1998/namespace"),
          e ? r.parse(e, c, d) : r.errorHandler.error("invalid doc source"),
          a.doc
        );
      }),
        (i.prototype = {
          startDocument: function() {
            (this.doc = new d().createDocument(null, null, null)),
              this.locator && (this.doc.documentURI = this.locator.systemId);
          },
          startElement: function(e, t, n, r) {
            var o = this.doc,
              i = o.createElementNS(e, n || t),
              s = r.length;
            c(this, i),
              (this.currentElement = i),
              this.locator && a(this.locator, i);
            for (var u = 0; u < s; u++) {
              e = r.getURI(u);
              var l = r.getValue(u),
                d = ((n = r.getQName(u)), o.createAttributeNS(e, n));
              this.locator && a(r.getLocator(u), d),
                (d.value = d.nodeValue = l),
                i.setAttributeNode(d);
            }
          },
          endElement: function(e, t, n) {
            var r = this.currentElement;
            r.tagName;
            this.currentElement = r.parentNode;
          },
          startPrefixMapping: function(e, t) {},
          endPrefixMapping: function(e) {},
          processingInstruction: function(e, t) {
            var n = this.doc.createProcessingInstruction(e, t);
            this.locator && a(this.locator, n), c(this, n);
          },
          ignorableWhitespace: function(e, t, n) {},
          characters: function(e, t, n) {
            if (((e = u.apply(this, arguments)), e)) {
              if (this.cdata) var r = this.doc.createCDATASection(e);
              else r = this.doc.createTextNode(e);
              this.currentElement
                ? this.currentElement.appendChild(r)
                : /^\s*$/.test(e) && this.doc.appendChild(r),
                this.locator && a(this.locator, r);
            }
          },
          skippedEntity: function(e) {},
          endDocument: function() {
            this.doc.normalize();
          },
          setDocumentLocator: function(e) {
            (this.locator = e) && (e.lineNumber = 0);
          },
          comment: function(e, t, n) {
            e = u.apply(this, arguments);
            var r = this.doc.createComment(e);
            this.locator && a(this.locator, r), c(this, r);
          },
          startCDATA: function() {
            this.cdata = !0;
          },
          endCDATA: function() {
            this.cdata = !1;
          },
          startDTD: function(e, t, n) {
            var r = this.doc.implementation;
            if (r && r.createDocumentType) {
              var o = r.createDocumentType(e, t, n);
              this.locator && a(this.locator, o), c(this, o);
            }
          },
          warning: function(e) {
            console.warn("[xmldom warning]\t" + e, s(this.locator));
          },
          error: function(e) {
            console.error("[xmldom error]\t" + e, s(this.locator));
          },
          fatalError: function(e) {
            throw (console.error("[xmldom fatalError]\t" + e, s(this.locator)),
            e);
          }
        }),
        "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(
          /\w+/g,
          function(e) {
            i.prototype[e] = function() {
              return null;
            };
          }
        );
      var l = n("d61d").XMLReader,
        d = (t.DOMImplementation = n("749c").DOMImplementation);
      (t.XMLSerializer = n("749c").XMLSerializer), (t.DOMParser = r);
    },
    34383: function(e, t, n) {
      var r = n("164b");
      e.exports = r;
    },
    "749c": function(e, t) {
      function n(e, t) {
        for (var n in e) t[n] = e[n];
      }
      function r(e, t) {
        var r = e.prototype;
        if (Object.create) {
          var o = Object.create(t.prototype);
          r.__proto__ = o;
        }
        if (!(r instanceof t)) {
          function i() {}
          (i.prototype = t.prototype),
            (i = new i()),
            n(r, i),
            (e.prototype = r = i);
        }
        r.constructor != e &&
          ("function" != typeof e && console.error("unknow Class:" + e),
          (r.constructor = e));
      }
      var o = "http://www.w3.org/1999/xhtml",
        i = {},
        a = (i.ELEMENT_NODE = 1),
        s = (i.ATTRIBUTE_NODE = 2),
        u = (i.TEXT_NODE = 3),
        c = (i.CDATA_SECTION_NODE = 4),
        l = (i.ENTITY_REFERENCE_NODE = 5),
        d = (i.ENTITY_NODE = 6),
        f = (i.PROCESSING_INSTRUCTION_NODE = 7),
        p = (i.COMMENT_NODE = 8),
        h = (i.DOCUMENT_NODE = 9),
        g = (i.DOCUMENT_TYPE_NODE = 10),
        m = (i.DOCUMENT_FRAGMENT_NODE = 11),
        y = (i.NOTATION_NODE = 12),
        v = {},
        C = {},
        b = ((v.INDEX_SIZE_ERR = ((C[1] = "Index size error"), 1)),
        (v.DOMSTRING_SIZE_ERR = ((C[2] = "DOMString size error"), 2)),
        (v.HIERARCHY_REQUEST_ERR = ((C[3] = "Hierarchy request error"), 3))),
        x = ((v.WRONG_DOCUMENT_ERR = ((C[4] = "Wrong document"), 4)),
        (v.INVALID_CHARACTER_ERR = ((C[5] = "Invalid character"), 5)),
        (v.NO_DATA_ALLOWED_ERR = ((C[6] = "No data allowed"), 6)),
        (v.NO_MODIFICATION_ALLOWED_ERR = ((C[7] = "No modification allowed"),
        7)),
        (v.NOT_FOUND_ERR = ((C[8] = "Not found"), 8))),
        w = ((v.NOT_SUPPORTED_ERR = ((C[9] = "Not supported"), 9)),
        (v.INUSE_ATTRIBUTE_ERR = ((C[10] = "Attribute in use"), 10)));
      (v.INVALID_STATE_ERR = ((C[11] = "Invalid state"), 11)),
        (v.SYNTAX_ERR = ((C[12] = "Syntax error"), 12)),
        (v.INVALID_MODIFICATION_ERR = ((C[13] = "Invalid modification"), 13)),
        (v.NAMESPACE_ERR = ((C[14] = "Invalid namespace"), 14)),
        (v.INVALID_ACCESS_ERR = ((C[15] = "Invalid access"), 15));
      function k(e, t) {
        if (t instanceof Error) var n = t;
        else
          (n = this),
            Error.call(this, C[e]),
            (this.message = C[e]),
            Error.captureStackTrace && Error.captureStackTrace(this, k);
        return (n.code = e), t && (this.message = this.message + ": " + t), n;
      }
      function S() {}
      function T(e, t) {
        (this._node = e), (this._refresh = t), R(this);
      }
      function R(e) {
        var t = e._node._inc || e._node.ownerDocument._inc;
        if (e._inc != t) {
          var r = e._refresh(e._node);
          ae(e, "length", r.length), n(r, e), (e._inc = t);
        }
      }
      function E() {}
      function _(e, t) {
        var n = e.length;
        while (n--) if (e[n] === t) return n;
      }
      function N(e, t, n, r) {
        if ((r ? (t[_(t, r)] = n) : (t[t.length++] = n), e)) {
          n.ownerElement = e;
          var o = e.ownerDocument;
          o && (r && M(o, e, r), j(o, e, n));
        }
      }
      function A(e, t, n) {
        var r = _(t, n);
        if (!(r >= 0)) throw k(x, new Error(e.tagName + "@" + n));
        var o = t.length - 1;
        while (r < o) t[r] = t[++r];
        if (((t.length = o), e)) {
          var i = e.ownerDocument;
          i && (M(i, e, n), (n.ownerElement = null));
        }
      }
      function B(e) {
        if (((this._features = {}), e)) for (var t in e) this._features = e[t];
      }
      function I() {}
      function P(e) {
        return (
          ("<" == e ? "&lt;" : ">" == e && "&gt;") ||
          ("&" == e && "&amp;") ||
          ('"' == e && "&quot;") ||
          "&#" + e.charCodeAt() + ";"
        );
      }
      function D(e, t) {
        if (t(e)) return !0;
        if ((e = e.firstChild))
          do {
            if (D(e, t)) return !0;
          } while ((e = e.nextSibling));
      }
      function O() {}
      function j(e, t, n) {
        e && e._inc++;
        var r = n.namespaceURI;
        "http://www.w3.org/2000/xmlns/" == r &&
          (t._nsMap[n.prefix ? n.localName : ""] = n.value);
      }
      function M(e, t, n, r) {
        e && e._inc++;
        var o = n.namespaceURI;
        "http://www.w3.org/2000/xmlns/" == o &&
          delete t._nsMap[n.prefix ? n.localName : ""];
      }
      function L(e, t, n) {
        if (e && e._inc) {
          e._inc++;
          var r = t.childNodes;
          if (n) r[r.length++] = n;
          else {
            var o = t.firstChild,
              i = 0;
            while (o) (r[i++] = o), (o = o.nextSibling);
            r.length = i;
          }
        }
      }
      function U(e, t) {
        var n = t.previousSibling,
          r = t.nextSibling;
        return (
          n ? (n.nextSibling = r) : (e.firstChild = r),
          r ? (r.previousSibling = n) : (e.lastChild = n),
          L(e.ownerDocument, e),
          t
        );
      }
      function F(e, t, n) {
        var r = t.parentNode;
        if ((r && r.removeChild(t), t.nodeType === m)) {
          var o = t.firstChild;
          if (null == o) return t;
          var i = t.lastChild;
        } else o = i = t;
        var a = n ? n.previousSibling : e.lastChild;
        (o.previousSibling = a),
          (i.nextSibling = n),
          a ? (a.nextSibling = o) : (e.firstChild = o),
          null == n ? (e.lastChild = i) : (n.previousSibling = i);
        do {
          o.parentNode = e;
        } while (o !== i && (o = o.nextSibling));
        return (
          L(e.ownerDocument || e, e),
          t.nodeType == m && (t.firstChild = t.lastChild = null),
          t
        );
      }
      function H(e, t) {
        var n = t.parentNode;
        if (n) {
          var r = e.lastChild;
          n.removeChild(t);
          r = e.lastChild;
        }
        r = e.lastChild;
        return (
          (t.parentNode = e),
          (t.previousSibling = r),
          (t.nextSibling = null),
          r ? (r.nextSibling = t) : (e.firstChild = t),
          (e.lastChild = t),
          L(e.ownerDocument, e, t),
          t
        );
      }
      function K() {
        this._nsMap = {};
      }
      function z() {}
      function q() {}
      function G() {}
      function X() {}
      function V() {}
      function W() {}
      function $() {}
      function J() {}
      function Q() {}
      function Y() {}
      function Z() {}
      function ee() {}
      function te(e, t) {
        var n = [],
          r = 9 == this.nodeType ? this.documentElement : this,
          o = r.prefix,
          i = r.namespaceURI;
        if (i && null == o) {
          o = r.lookupPrefix(i);
          if (null == o) var a = [{ namespace: i, prefix: null }];
        }
        return re(this, n, e, t, a), n.join("");
      }
      function ne(e, t, n) {
        var r = e.prefix || "",
          o = e.namespaceURI;
        if (!r && !o) return !1;
        if (
          ("xml" === r && "http://www.w3.org/XML/1998/namespace" === o) ||
          "http://www.w3.org/2000/xmlns/" == o
        )
          return !1;
        var i = n.length;
        while (i--) {
          var a = n[i];
          if (a.prefix == r) return a.namespace != o;
        }
        return !0;
      }
      function re(e, t, n, r, i) {
        if (r) {
          if (((e = r(e)), !e)) return;
          if ("string" == typeof e) return void t.push(e);
        }
        switch (e.nodeType) {
          case a:
            i || (i = []);
            i.length;
            var d = e.attributes,
              y = d.length,
              v = e.firstChild,
              C = e.tagName;
            (n = o === e.namespaceURI || n), t.push("<", C);
            for (var b = 0; b < y; b++) {
              var x = d.item(b);
              "xmlns" == x.prefix
                ? i.push({ prefix: x.localName, namespace: x.value })
                : "xmlns" == x.nodeName &&
                  i.push({ prefix: "", namespace: x.value });
            }
            for (b = 0; b < y; b++) {
              x = d.item(b);
              if (ne(x, n, i)) {
                var w = x.prefix || "",
                  k = x.namespaceURI,
                  S = w ? " xmlns:" + w : " xmlns";
                t.push(S, '="', k, '"'), i.push({ prefix: w, namespace: k });
              }
              re(x, t, n, r, i);
            }
            if (ne(e, n, i)) {
              (w = e.prefix || ""),
                (k = e.namespaceURI),
                (S = w ? " xmlns:" + w : " xmlns");
              t.push(S, '="', k, '"'), i.push({ prefix: w, namespace: k });
            }
            if (v || (n && !/^(?:meta|link|img|br|hr|input)$/i.test(C))) {
              if ((t.push(">"), n && /^script$/i.test(C)))
                while (v)
                  v.data ? t.push(v.data) : re(v, t, n, r, i),
                    (v = v.nextSibling);
              else while (v) re(v, t, n, r, i), (v = v.nextSibling);
              t.push("</", C, ">");
            } else t.push("/>");
            return;
          case h:
          case m:
            v = e.firstChild;
            while (v) re(v, t, n, r, i), (v = v.nextSibling);
            return;
          case s:
            return t.push(" ", e.name, '="', e.value.replace(/[<&"]/g, P), '"');
          case u:
            return t.push(e.data.replace(/[<&]/g, P));
          case c:
            return t.push("<![CDATA[", e.data, "]]>");
          case p:
            return t.push("\x3c!--", e.data, "--\x3e");
          case g:
            var T = e.publicId,
              R = e.systemId;
            if ((t.push("<!DOCTYPE ", e.name), T))
              t.push(' PUBLIC "', T),
                R && "." != R && t.push('" "', R),
                t.push('">');
            else if (R && "." != R) t.push(' SYSTEM "', R, '">');
            else {
              var E = e.internalSubset;
              E && t.push(" [", E, "]"), t.push(">");
            }
            return;
          case f:
            return t.push("<?", e.target, " ", e.data, "?>");
          case l:
            return t.push("&", e.nodeName, ";");
          default:
            t.push("??", e.nodeName);
        }
      }
      function oe(e, t, n) {
        var r;
        switch (t.nodeType) {
          case a:
            (r = t.cloneNode(!1)), (r.ownerDocument = e);
          case m:
            break;
          case s:
            n = !0;
            break;
        }
        if (
          (r || (r = t.cloneNode(!1)),
          (r.ownerDocument = e),
          (r.parentNode = null),
          n)
        ) {
          var o = t.firstChild;
          while (o) r.appendChild(oe(e, o, n)), (o = o.nextSibling);
        }
        return r;
      }
      function ie(e, t, n) {
        var r = new t.constructor();
        for (var o in t) {
          var i = t[o];
          "object" != typeof i && i != r[o] && (r[o] = i);
        }
        switch (
          (t.childNodes && (r.childNodes = new S()),
          (r.ownerDocument = e),
          r.nodeType)
        ) {
          case a:
            var u = t.attributes,
              c = (r.attributes = new E()),
              l = u.length;
            c._ownerElement = r;
            for (var d = 0; d < l; d++)
              r.setAttributeNode(ie(e, u.item(d), !0));
            break;
          case s:
            n = !0;
        }
        if (n) {
          var f = t.firstChild;
          while (f) r.appendChild(ie(e, f, n)), (f = f.nextSibling);
        }
        return r;
      }
      function ae(e, t, n) {
        e[t] = n;
      }
      (k.prototype = Error.prototype),
        n(v, k),
        (S.prototype = {
          length: 0,
          item: function(e) {
            return this[e] || null;
          },
          toString: function(e, t) {
            for (var n = [], r = 0; r < this.length; r++) re(this[r], n, e, t);
            return n.join("");
          }
        }),
        (T.prototype.item = function(e) {
          return R(this), this[e];
        }),
        r(T, S),
        (E.prototype = {
          length: 0,
          item: S.prototype.item,
          getNamedItem: function(e) {
            var t = this.length;
            while (t--) {
              var n = this[t];
              if (n.nodeName == e) return n;
            }
          },
          setNamedItem: function(e) {
            var t = e.ownerElement;
            if (t && t != this._ownerElement) throw new k(w);
            var n = this.getNamedItem(e.nodeName);
            return N(this._ownerElement, this, e, n), n;
          },
          setNamedItemNS: function(e) {
            var t,
              n = e.ownerElement;
            if (n && n != this._ownerElement) throw new k(w);
            return (
              (t = this.getNamedItemNS(e.namespaceURI, e.localName)),
              N(this._ownerElement, this, e, t),
              t
            );
          },
          removeNamedItem: function(e) {
            var t = this.getNamedItem(e);
            return A(this._ownerElement, this, t), t;
          },
          removeNamedItemNS: function(e, t) {
            var n = this.getNamedItemNS(e, t);
            return A(this._ownerElement, this, n), n;
          },
          getNamedItemNS: function(e, t) {
            var n = this.length;
            while (n--) {
              var r = this[n];
              if (r.localName == t && r.namespaceURI == e) return r;
            }
            return null;
          }
        }),
        (B.prototype = {
          hasFeature: function(e, t) {
            var n = this._features[e.toLowerCase()];
            return !(!n || (t && !(t in n)));
          },
          createDocument: function(e, t, n) {
            var r = new O();
            if (
              ((r.implementation = this),
              (r.childNodes = new S()),
              (r.doctype = n),
              n && r.appendChild(n),
              t)
            ) {
              var o = r.createElementNS(e, t);
              r.appendChild(o);
            }
            return r;
          },
          createDocumentType: function(e, t, n) {
            var r = new W();
            return (
              (r.name = e),
              (r.nodeName = e),
              (r.publicId = t),
              (r.systemId = n),
              r
            );
          }
        }),
        (I.prototype = {
          firstChild: null,
          lastChild: null,
          previousSibling: null,
          nextSibling: null,
          attributes: null,
          parentNode: null,
          childNodes: null,
          ownerDocument: null,
          nodeValue: null,
          namespaceURI: null,
          prefix: null,
          localName: null,
          insertBefore: function(e, t) {
            return F(this, e, t);
          },
          replaceChild: function(e, t) {
            this.insertBefore(e, t), t && this.removeChild(t);
          },
          removeChild: function(e) {
            return U(this, e);
          },
          appendChild: function(e) {
            return this.insertBefore(e, null);
          },
          hasChildNodes: function() {
            return null != this.firstChild;
          },
          cloneNode: function(e) {
            return ie(this.ownerDocument || this, this, e);
          },
          normalize: function() {
            var e = this.firstChild;
            while (e) {
              var t = e.nextSibling;
              t && t.nodeType == u && e.nodeType == u
                ? (this.removeChild(t), e.appendData(t.data))
                : (e.normalize(), (e = t));
            }
          },
          isSupported: function(e, t) {
            return this.ownerDocument.implementation.hasFeature(e, t);
          },
          hasAttributes: function() {
            return this.attributes.length > 0;
          },
          lookupPrefix: function(e) {
            var t = this;
            while (t) {
              var n = t._nsMap;
              if (n) for (var r in n) if (n[r] == e) return r;
              t = t.nodeType == s ? t.ownerDocument : t.parentNode;
            }
            return null;
          },
          lookupNamespaceURI: function(e) {
            var t = this;
            while (t) {
              var n = t._nsMap;
              if (n && e in n) return n[e];
              t = t.nodeType == s ? t.ownerDocument : t.parentNode;
            }
            return null;
          },
          isDefaultNamespace: function(e) {
            var t = this.lookupPrefix(e);
            return null == t;
          }
        }),
        n(i, I),
        n(i, I.prototype),
        (O.prototype = {
          nodeName: "#document",
          nodeType: h,
          doctype: null,
          documentElement: null,
          _inc: 1,
          insertBefore: function(e, t) {
            if (e.nodeType == m) {
              var n = e.firstChild;
              while (n) {
                var r = n.nextSibling;
                this.insertBefore(n, t), (n = r);
              }
              return e;
            }
            return (
              null == this.documentElement &&
                e.nodeType == a &&
                (this.documentElement = e),
              F(this, e, t),
              (e.ownerDocument = this),
              e
            );
          },
          removeChild: function(e) {
            return (
              this.documentElement == e && (this.documentElement = null),
              U(this, e)
            );
          },
          importNode: function(e, t) {
            return oe(this, e, t);
          },
          getElementById: function(e) {
            var t = null;
            return (
              D(this.documentElement, function(n) {
                if (n.nodeType == a && n.getAttribute("id") == e)
                  return (t = n), !0;
              }),
              t
            );
          },
          createElement: function(e) {
            var t = new K();
            (t.ownerDocument = this),
              (t.nodeName = e),
              (t.tagName = e),
              (t.childNodes = new S());
            var n = (t.attributes = new E());
            return (n._ownerElement = t), t;
          },
          createDocumentFragment: function() {
            var e = new Y();
            return (e.ownerDocument = this), (e.childNodes = new S()), e;
          },
          createTextNode: function(e) {
            var t = new G();
            return (t.ownerDocument = this), t.appendData(e), t;
          },
          createComment: function(e) {
            var t = new X();
            return (t.ownerDocument = this), t.appendData(e), t;
          },
          createCDATASection: function(e) {
            var t = new V();
            return (t.ownerDocument = this), t.appendData(e), t;
          },
          createProcessingInstruction: function(e, t) {
            var n = new Z();
            return (
              (n.ownerDocument = this),
              (n.tagName = n.target = e),
              (n.nodeValue = n.data = t),
              n
            );
          },
          createAttribute: function(e) {
            var t = new z();
            return (
              (t.ownerDocument = this),
              (t.name = e),
              (t.nodeName = e),
              (t.localName = e),
              (t.specified = !0),
              t
            );
          },
          createEntityReference: function(e) {
            var t = new Q();
            return (t.ownerDocument = this), (t.nodeName = e), t;
          },
          createElementNS: function(e, t) {
            var n = new K(),
              r = t.split(":"),
              o = (n.attributes = new E());
            return (
              (n.childNodes = new S()),
              (n.ownerDocument = this),
              (n.nodeName = t),
              (n.tagName = t),
              (n.namespaceURI = e),
              2 == r.length
                ? ((n.prefix = r[0]), (n.localName = r[1]))
                : (n.localName = t),
              (o._ownerElement = n),
              n
            );
          },
          createAttributeNS: function(e, t) {
            var n = new z(),
              r = t.split(":");
            return (
              (n.ownerDocument = this),
              (n.nodeName = t),
              (n.name = t),
              (n.namespaceURI = e),
              (n.specified = !0),
              2 == r.length
                ? ((n.prefix = r[0]), (n.localName = r[1]))
                : (n.localName = t),
              n
            );
          }
        }),
        r(O, I),
        (K.prototype = {
          nodeType: a,
          hasAttribute: function(e) {
            return null != this.getAttributeNode(e);
          },
          getAttribute: function(e) {
            var t = this.getAttributeNode(e);
            return (t && t.value) || "";
          },
          getAttributeNode: function(e) {
            return this.attributes.getNamedItem(e);
          },
          setAttribute: function(e, t) {
            var n = this.ownerDocument.createAttribute(e);
            (n.value = n.nodeValue = "" + t), this.setAttributeNode(n);
          },
          removeAttribute: function(e) {
            var t = this.getAttributeNode(e);
            t && this.removeAttributeNode(t);
          },
          appendChild: function(e) {
            return e.nodeType === m ? this.insertBefore(e, null) : H(this, e);
          },
          setAttributeNode: function(e) {
            return this.attributes.setNamedItem(e);
          },
          setAttributeNodeNS: function(e) {
            return this.attributes.setNamedItemNS(e);
          },
          removeAttributeNode: function(e) {
            return this.attributes.removeNamedItem(e.nodeName);
          },
          removeAttributeNS: function(e, t) {
            var n = this.getAttributeNodeNS(e, t);
            n && this.removeAttributeNode(n);
          },
          hasAttributeNS: function(e, t) {
            return null != this.getAttributeNodeNS(e, t);
          },
          getAttributeNS: function(e, t) {
            var n = this.getAttributeNodeNS(e, t);
            return (n && n.value) || "";
          },
          setAttributeNS: function(e, t, n) {
            var r = this.ownerDocument.createAttributeNS(e, t);
            (r.value = r.nodeValue = "" + n), this.setAttributeNode(r);
          },
          getAttributeNodeNS: function(e, t) {
            return this.attributes.getNamedItemNS(e, t);
          },
          getElementsByTagName: function(e) {
            return new T(this, function(t) {
              var n = [];
              return (
                D(t, function(r) {
                  r === t ||
                    r.nodeType != a ||
                    ("*" !== e && r.tagName != e) ||
                    n.push(r);
                }),
                n
              );
            });
          },
          getElementsByTagNameNS: function(e, t) {
            return new T(this, function(n) {
              var r = [];
              return (
                D(n, function(o) {
                  o === n ||
                    o.nodeType !== a ||
                    ("*" !== e && o.namespaceURI !== e) ||
                    ("*" !== t && o.localName != t) ||
                    r.push(o);
                }),
                r
              );
            });
          }
        }),
        (O.prototype.getElementsByTagName = K.prototype.getElementsByTagName),
        (O.prototype.getElementsByTagNameNS =
          K.prototype.getElementsByTagNameNS),
        r(K, I),
        (z.prototype.nodeType = s),
        r(z, I),
        (q.prototype = {
          data: "",
          substringData: function(e, t) {
            return this.data.substring(e, e + t);
          },
          appendData: function(e) {
            (e = this.data + e),
              (this.nodeValue = this.data = e),
              (this.length = e.length);
          },
          insertData: function(e, t) {
            this.replaceData(e, 0, t);
          },
          appendChild: function(e) {
            throw new Error(C[b]);
          },
          deleteData: function(e, t) {
            this.replaceData(e, t, "");
          },
          replaceData: function(e, t, n) {
            var r = this.data.substring(0, e),
              o = this.data.substring(e + t);
            (n = r + n + o),
              (this.nodeValue = this.data = n),
              (this.length = n.length);
          }
        }),
        r(q, I),
        (G.prototype = {
          nodeName: "#text",
          nodeType: u,
          splitText: function(e) {
            var t = this.data,
              n = t.substring(e);
            (t = t.substring(0, e)),
              (this.data = this.nodeValue = t),
              (this.length = t.length);
            var r = this.ownerDocument.createTextNode(n);
            return (
              this.parentNode &&
                this.parentNode.insertBefore(r, this.nextSibling),
              r
            );
          }
        }),
        r(G, q),
        (X.prototype = { nodeName: "#comment", nodeType: p }),
        r(X, q),
        (V.prototype = { nodeName: "#cdata-section", nodeType: c }),
        r(V, q),
        (W.prototype.nodeType = g),
        r(W, I),
        ($.prototype.nodeType = y),
        r($, I),
        (J.prototype.nodeType = d),
        r(J, I),
        (Q.prototype.nodeType = l),
        r(Q, I),
        (Y.prototype.nodeName = "#document-fragment"),
        (Y.prototype.nodeType = m),
        r(Y, I),
        (Z.prototype.nodeType = f),
        r(Z, I),
        (ee.prototype.serializeToString = function(e, t, n) {
          return te.call(e, t, n);
        }),
        (I.prototype.toString = te);
      try {
        if (Object.defineProperty) {
          function se(e) {
            switch (e.nodeType) {
              case a:
              case m:
                var t = [];
                e = e.firstChild;
                while (e)
                  7 !== e.nodeType && 8 !== e.nodeType && t.push(se(e)),
                    (e = e.nextSibling);
                return t.join("");
              default:
                return e.nodeValue;
            }
          }
          Object.defineProperty(T.prototype, "length", {
            get: function() {
              return R(this), this.$$length;
            }
          }),
            Object.defineProperty(I.prototype, "textContent", {
              get: function() {
                return se(this);
              },
              set: function(e) {
                switch (this.nodeType) {
                  case a:
                  case m:
                    while (this.firstChild) this.removeChild(this.firstChild);
                    (e || String(e)) &&
                      this.appendChild(this.ownerDocument.createTextNode(e));
                    break;
                  default:
                    (this.data = e), (this.value = e), (this.nodeValue = e);
                }
              }
            }),
            (ae = function(e, t, n) {
              e["$$" + t] = n;
            });
        }
      } catch (ue) {}
      (t.DOMImplementation = B), (t.XMLSerializer = ee);
    },
    "74b3": function(e, t) {
      function n(e, t) {
        var n = e[0],
          r = e[1],
          u = e[2],
          c = e[3];
        (n = o(n, r, u, c, t[0], 7, -680876936)),
          (c = o(c, n, r, u, t[1], 12, -389564586)),
          (u = o(u, c, n, r, t[2], 17, 606105819)),
          (r = o(r, u, c, n, t[3], 22, -1044525330)),
          (n = o(n, r, u, c, t[4], 7, -176418897)),
          (c = o(c, n, r, u, t[5], 12, 1200080426)),
          (u = o(u, c, n, r, t[6], 17, -1473231341)),
          (r = o(r, u, c, n, t[7], 22, -45705983)),
          (n = o(n, r, u, c, t[8], 7, 1770035416)),
          (c = o(c, n, r, u, t[9], 12, -1958414417)),
          (u = o(u, c, n, r, t[10], 17, -42063)),
          (r = o(r, u, c, n, t[11], 22, -1990404162)),
          (n = o(n, r, u, c, t[12], 7, 1804603682)),
          (c = o(c, n, r, u, t[13], 12, -40341101)),
          (u = o(u, c, n, r, t[14], 17, -1502002290)),
          (r = o(r, u, c, n, t[15], 22, 1236535329)),
          (n = i(n, r, u, c, t[1], 5, -165796510)),
          (c = i(c, n, r, u, t[6], 9, -1069501632)),
          (u = i(u, c, n, r, t[11], 14, 643717713)),
          (r = i(r, u, c, n, t[0], 20, -373897302)),
          (n = i(n, r, u, c, t[5], 5, -701558691)),
          (c = i(c, n, r, u, t[10], 9, 38016083)),
          (u = i(u, c, n, r, t[15], 14, -660478335)),
          (r = i(r, u, c, n, t[4], 20, -405537848)),
          (n = i(n, r, u, c, t[9], 5, 568446438)),
          (c = i(c, n, r, u, t[14], 9, -1019803690)),
          (u = i(u, c, n, r, t[3], 14, -187363961)),
          (r = i(r, u, c, n, t[8], 20, 1163531501)),
          (n = i(n, r, u, c, t[13], 5, -1444681467)),
          (c = i(c, n, r, u, t[2], 9, -51403784)),
          (u = i(u, c, n, r, t[7], 14, 1735328473)),
          (r = i(r, u, c, n, t[12], 20, -1926607734)),
          (n = a(n, r, u, c, t[5], 4, -378558)),
          (c = a(c, n, r, u, t[8], 11, -2022574463)),
          (u = a(u, c, n, r, t[11], 16, 1839030562)),
          (r = a(r, u, c, n, t[14], 23, -35309556)),
          (n = a(n, r, u, c, t[1], 4, -1530992060)),
          (c = a(c, n, r, u, t[4], 11, 1272893353)),
          (u = a(u, c, n, r, t[7], 16, -155497632)),
          (r = a(r, u, c, n, t[10], 23, -1094730640)),
          (n = a(n, r, u, c, t[13], 4, 681279174)),
          (c = a(c, n, r, u, t[0], 11, -358537222)),
          (u = a(u, c, n, r, t[3], 16, -722521979)),
          (r = a(r, u, c, n, t[6], 23, 76029189)),
          (n = a(n, r, u, c, t[9], 4, -640364487)),
          (c = a(c, n, r, u, t[12], 11, -421815835)),
          (u = a(u, c, n, r, t[15], 16, 530742520)),
          (r = a(r, u, c, n, t[2], 23, -995338651)),
          (n = s(n, r, u, c, t[0], 6, -198630844)),
          (c = s(c, n, r, u, t[7], 10, 1126891415)),
          (u = s(u, c, n, r, t[14], 15, -1416354905)),
          (r = s(r, u, c, n, t[5], 21, -57434055)),
          (n = s(n, r, u, c, t[12], 6, 1700485571)),
          (c = s(c, n, r, u, t[3], 10, -1894986606)),
          (u = s(u, c, n, r, t[10], 15, -1051523)),
          (r = s(r, u, c, n, t[1], 21, -2054922799)),
          (n = s(n, r, u, c, t[8], 6, 1873313359)),
          (c = s(c, n, r, u, t[15], 10, -30611744)),
          (u = s(u, c, n, r, t[6], 15, -1560198380)),
          (r = s(r, u, c, n, t[13], 21, 1309151649)),
          (n = s(n, r, u, c, t[4], 6, -145523070)),
          (c = s(c, n, r, u, t[11], 10, -1120210379)),
          (u = s(u, c, n, r, t[2], 15, 718787259)),
          (r = s(r, u, c, n, t[9], 21, -343485551)),
          (e[0] = g(n, e[0])),
          (e[1] = g(r, e[1])),
          (e[2] = g(u, e[2])),
          (e[3] = g(c, e[3]));
      }
      function r(e, t, n, r, o, i) {
        return (t = g(g(t, e), g(r, i))), g((t << o) | (t >>> (32 - o)), n);
      }
      function o(e, t, n, o, i, a, s) {
        return r((t & n) | (~t & o), e, t, i, a, s);
      }
      function i(e, t, n, o, i, a, s) {
        return r((t & o) | (n & ~o), e, t, i, a, s);
      }
      function a(e, t, n, o, i, a, s) {
        return r(t ^ n ^ o, e, t, i, a, s);
      }
      function s(e, t, n, o, i, a, s) {
        return r(n ^ (t | ~o), e, t, i, a, s);
      }
      function u(e) {
        var t,
          r = e.length,
          o = [1732584193, -271733879, -1732584194, 271733878];
        for (t = 64; t <= e.length; t += 64) n(o, c(e.substring(t - 64, t)));
        e = e.substring(t - 64);
        var i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (t = 0; t < e.length; t++)
          i[t >> 2] |= e.charCodeAt(t) << (t % 4 << 3);
        if (((i[t >> 2] |= 128 << (t % 4 << 3)), t > 55))
          for (n(o, i), t = 0; t < 16; t++) i[t] = 0;
        return (i[14] = 8 * r), n(o, i), o;
      }
      function c(e) {
        var t,
          n = [];
        for (t = 0; t < 64; t += 4)
          n[t >> 2] =
            e.charCodeAt(t) +
            (e.charCodeAt(t + 1) << 8) +
            (e.charCodeAt(t + 2) << 16) +
            (e.charCodeAt(t + 3) << 24);
        return n;
      }
      var l = "0123456789abcdef".split("");
      function d(e) {
        for (var t = "", n = 0; n < 4; n++)
          t += l[(e >> (8 * n + 4)) & 15] + l[(e >> (8 * n)) & 15];
        return t;
      }
      function f(e) {
        for (var t = 0; t < e.length; t++) e[t] = d(e[t]);
        return e.join("");
      }
      function p(e) {
        e = e.replace(/\r\n/g, "\n");
        for (var t = "", n = 0; n < e.length; n++) {
          var r = e.charCodeAt(n);
          r < 128
            ? (t += String.fromCharCode(r))
            : r > 127 && r < 2048
              ? ((t += String.fromCharCode((r >> 6) | 192)),
                (t += String.fromCharCode((63 & r) | 128)))
              : ((t += String.fromCharCode((r >> 12) | 224)),
                (t += String.fromCharCode(((r >> 6) & 63) | 128)),
                (t += String.fromCharCode((63 & r) | 128)));
        }
        return t;
      }
      function h(e, t) {
        return t || (e = p(e)), f(u(e));
      }
      var g = function(e, t) {
        return (e + t) & 4294967295;
      };
      "5d41402abc4b2a76b9719d911017c592" != h("hello") &&
        (g = function(e, t) {
          var n = (65535 & e) + (65535 & t),
            r = (e >> 16) + (t >> 16) + (n >> 16);
          return (r << 16) | (65535 & n);
        }),
        (e.exports = h);
    },
    "75f1": function(e, t, n) {
      var r = n("adaa"),
        o = n("03e2");
      function i(e, t) {
        Y.call(
          this,
          {
            Bucket: e.Bucket,
            Region: e.Region,
            headers: e.Headers,
            method: "HEAD"
          },
          function(e, n) {
            t(e, n);
          }
        );
      }
      function a(e, t) {
        var n = {};
        (n["prefix"] = e["Prefix"]),
          (n["delimiter"] = e["Delimiter"]),
          (n["marker"] = e["Marker"]),
          (n["max-keys"] = e["MaxKeys"]),
          (n["encoding-type"] = e["EncodingType"]),
          Y.call(
            this,
            {
              method: "GET",
              Bucket: e.Bucket,
              Region: e.Region,
              headers: e.Headers,
              qs: n
            },
            function(e, n) {
              if (e) return t(e);
              var r = n.ListBucketResult || {},
                i = r.Contents || [],
                a = r.CommonPrefixes || [];
              (i = o.isArray(i) ? i : [i]), (a = o.isArray(a) ? a : [a]);
              var s = o.clone(r);
              o.extend(s, {
                Contents: i,
                CommonPrefixes: a,
                statusCode: n.statusCode,
                headers: n.headers
              }),
                t(null, s);
            }
          );
      }
      function s(e, t) {
        Y.call(
          this,
          {
            Bucket: e.Bucket,
            Region: e.Region,
            headers: e.Headers,
            method: "DELETE"
          },
          function(e, n) {
            return e && 204 === e.statusCode
              ? t(null, { statusCode: e.statusCode })
              : e
                ? t(e)
                : void t(null, {
                    statusCode: n.statusCode,
                    headers: n.headers
                  });
          }
        );
      }
      function u(e, t) {
        Y.call(
          this,
          {
            method: "GET",
            Bucket: e.Bucket,
            Region: e.Region,
            headers: e.Headers,
            action: "acl"
          },
          function(e, n) {
            if (e) return t(e);
            var r = n.AccessControlPolicy || {},
              i = r.Owner || {},
              a = r.AccessControlList.Grant || [];
            a = o.isArray(a) ? a : [a];
            var s = W(r);
            n.headers &&
              n.headers["x-cos-acl"] &&
              (s.ACL = n.headers["x-cos-acl"]),
              (s = o.extend(s, {
                Owner: i,
                Grants: a,
                statusCode: n.statusCode,
                headers: n.headers
              })),
              t(null, s);
          }
        );
      }
      function c(e, t) {
        var n = e.Headers,
          r = "";
        if (e["AccessControlPolicy"]) {
          var i = o.clone(e["AccessControlPolicy"] || {}),
            a = i.Grants || i.Grant;
          (a = o.isArray(a) ? a : [a]),
            delete i.Grant,
            delete i.Grants,
            (i.AccessControlList = { Grant: a }),
            (r = o.json2xml({ AccessControlPolicy: i })),
            (n["Content-Type"] = "application/xml"),
            (n["Content-MD5"] = o.binaryBase64(o.md5(r)));
        }
        o.each(n, function(e, t) {
          0 === t.indexOf("x-cos-grant-") && (n[t] = $(n[t]));
        }),
          Y.call(
            this,
            {
              method: "PUT",
              Bucket: e.Bucket,
              Region: e.Region,
              headers: n,
              action: "acl",
              body: r
            },
            function(e, n) {
              if (e) return t(e);
              t(null, { statusCode: n.statusCode, headers: n.headers });
            }
          );
      }
      function l(e, t) {
        Y.call(
          this,
          {
            method: "GET",
            Bucket: e.Bucket,
            Region: e.Region,
            headers: e.Headers,
            action: "cors"
          },
          function(e, n) {
            if (e)
              if (
                404 === e.statusCode &&
                e.error &&
                "NoSuchCORSConfiguration" === e.error.Code
              ) {
                var r = { CORSRules: [], statusCode: e.statusCode };
                e.headers && (r.headers = e.headers), t(null, r);
              } else t(e);
            else {
              var i = n.CORSConfiguration || {},
                a = i.CORSRules || i.CORSRule || [];
              (a = o.clone(o.isArray(a) ? a : [a])),
                o.each(a, function(e) {
                  o.each(
                    [
                      "AllowedOrigin",
                      "AllowedHeader",
                      "AllowedMethod",
                      "ExposeHeader"
                    ],
                    function(t, n) {
                      var r = t + "s",
                        i = e[r] || e[t] || [];
                      delete e[t], (e[r] = o.isArray(i) ? i : [i]);
                    }
                  );
                }),
                t(null, {
                  CORSRules: a,
                  statusCode: n.statusCode,
                  headers: n.headers
                });
            }
          }
        );
      }
      function d(e, t) {
        var n = e["CORSConfiguration"] || {},
          r = n["CORSRules"] || e["CORSRules"] || [];
        (r = o.clone(o.isArray(r) ? r : [r])),
          o.each(r, function(e) {
            o.each(
              [
                "AllowedOrigin",
                "AllowedHeader",
                "AllowedMethod",
                "ExposeHeader"
              ],
              function(t, n) {
                var r = t + "s",
                  i = e[r] || e[t] || [];
                delete e[r], (e[t] = o.isArray(i) ? i : [i]);
              }
            );
          });
        var i = o.json2xml({ CORSConfiguration: { CORSRule: r } }),
          a = e.Headers;
        (a["Content-Type"] = "application/xml"),
          (a["Content-MD5"] = o.binaryBase64(o.md5(i))),
          Y.call(
            this,
            {
              method: "PUT",
              Bucket: e.Bucket,
              Region: e.Region,
              body: i,
              action: "cors",
              headers: a
            },
            function(e, n) {
              if (e) return t(e);
              t(null, { statusCode: n.statusCode, headers: n.headers });
            }
          );
      }
      function f(e, t) {
        Y.call(
          this,
          {
            method: "DELETE",
            Bucket: e.Bucket,
            Region: e.Region,
            headers: e.Headers,
            action: "cors"
          },
          function(e, n) {
            return e && 204 === e.statusCode
              ? t(null, { statusCode: e.statusCode })
              : e
                ? t(e)
                : void t(null, {
                    statusCode: n.statusCode || e.statusCode,
                    headers: n.headers
                  });
          }
        );
      }
      function p(e, t) {
        var n = e["Policy"],
          r = n;
        try {
          "string" === typeof n ? (n = JSON.parse(r)) : (r = JSON.stringify(n));
        } catch (a) {
          t({ error: "Policy format error" });
        }
        var i = e.Headers;
        (i["Content-Type"] = "application/json"),
          (i["Content-MD5"] = o.binaryBase64(o.md5(r))),
          Y.call(
            this,
            {
              method: "PUT",
              Bucket: e.Bucket,
              Region: e.Region,
              action: "policy",
              body: o.isBrowser ? r : n,
              headers: i,
              json: !0
            },
            function(e, n) {
              return e && 204 === e.statusCode
                ? t(null, { statusCode: e.statusCode })
                : e
                  ? t(e)
                  : void t(null, {
                      statusCode: n.statusCode,
                      headers: n.headers
                    });
            }
          );
      }
      function h(e, t) {
        Y.call(
          this,
          {
            method: "DELETE",
            Bucket: e.Bucket,
            Region: e.Region,
            headers: e.Headers,
            action: "policy"
          },
          function(e, n) {
            return e && 204 === e.statusCode
              ? t(null, { statusCode: e.statusCode })
              : e
                ? t(e)
                : void t(null, {
                    statusCode: n.statusCode || e.statusCode,
                    headers: n.headers
                  });
          }
        );
      }
      function g(e, t) {
        Y.call(
          this,
          {
            method: "GET",
            Bucket: e.Bucket,
            Region: e.Region,
            headers: e.Headers,
            action: "location"
          },
          function(e, n) {
            if (e) return t(e);
            t(null, n);
          }
        );
      }
      function m(e, t) {
        Y.call(
          this,
          {
            method: "GET",
            Bucket: e.Bucket,
            Region: e.Region,
            headers: e.Headers,
            action: "policy",
            rawBody: !0
          },
          function(e, n) {
            if (e)
              return e.statusCode && 403 === e.statusCode
                ? t({ ErrorStatus: "Access Denied" })
                : e.statusCode && 405 === e.statusCode
                  ? t({ ErrorStatus: "Method Not Allowed" })
                  : e.statusCode && 404 === e.statusCode
                    ? t({ ErrorStatus: "Policy Not Found" })
                    : t(e);
            var r = {};
            try {
              r = JSON.parse(n.body);
            } catch (o) {}
            t(null, {
              Policy: r,
              statusCode: n.statusCode,
              headers: n.headers
            });
          }
        );
      }
      function y(e, t) {
        Y.call(
          this,
          {
            method: "GET",
            Bucket: e.Bucket,
            Region: e.Region,
            headers: e.Headers,
            action: "tagging"
          },
          function(e, n) {
            if (e)
              if (
                404 !== e.statusCode ||
                !e.error ||
                ("Not Found" !== e.error && "NoSuchTagSet" !== e.error.Code)
              )
                t(e);
              else {
                var r = { Tags: [], statusCode: e.statusCode };
                e.headers && (r.headers = e.headers), t(null, r);
              }
            else {
              var i = [];
              try {
                i = n.Tagging.TagSet.Tag || [];
              } catch (a) {}
              (i = o.clone(o.isArray(i) ? i : [i])),
                t(null, {
                  Tags: i,
                  statusCode: n.statusCode,
                  headers: n.headers
                });
            }
          }
        );
      }
      function v(e, t) {
        var n = e["Tagging"] || {},
          r = n.TagSet || n.Tags || e["Tags"] || [];
        r = o.clone(o.isArray(r) ? r : [r]);
        var i = o.json2xml({ Tagging: { TagSet: { Tag: r } } }),
          a = e.Headers;
        (a["Content-Type"] = "application/xml"),
          (a["Content-MD5"] = o.binaryBase64(o.md5(i))),
          Y.call(
            this,
            {
              method: "PUT",
              Bucket: e.Bucket,
              Region: e.Region,
              body: i,
              action: "tagging",
              headers: a
            },
            function(e, n) {
              return e && 204 === e.statusCode
                ? t(null, { statusCode: e.statusCode })
                : e
                  ? t(e)
                  : void t(null, {
                      statusCode: n.statusCode,
                      headers: n.headers
                    });
            }
          );
      }
      function C(e, t) {
        Y.call(
          this,
          {
            method: "DELETE",
            Bucket: e.Bucket,
            Region: e.Region,
            headers: e.Headers,
            action: "tagging"
          },
          function(e, n) {
            return e && 204 === e.statusCode
              ? t(null, { statusCode: e.statusCode })
              : e
                ? t(e)
                : void t(null, {
                    statusCode: n.statusCode,
                    headers: n.headers
                  });
          }
        );
      }
      function b(e, t) {
        var n = e["LifecycleConfiguration"] || {},
          r = n.Rules || [];
        r = o.clone(r);
        var i = o.json2xml({ LifecycleConfiguration: { Rule: r } }),
          a = e.Headers;
        (a["Content-Type"] = "application/xml"),
          (a["Content-MD5"] = o.binaryBase64(o.md5(i))),
          Y.call(
            this,
            {
              method: "PUT",
              Bucket: e.Bucket,
              Region: e.Region,
              body: i,
              action: "lifecycle",
              headers: a
            },
            function(e, n) {
              return e && 204 === e.statusCode
                ? t(null, { statusCode: e.statusCode })
                : e
                  ? t(e)
                  : void t(null, {
                      statusCode: n.statusCode,
                      headers: n.headers
                    });
            }
          );
      }
      function x(e, t) {
        Y.call(
          this,
          {
            method: "GET",
            Bucket: e.Bucket,
            Region: e.Region,
            headers: e.Headers,
            action: "lifecycle"
          },
          function(e, n) {
            if (e)
              if (
                404 === e.statusCode &&
                e.error &&
                "NoSuchLifecycleConfiguration" === e.error.Code
              ) {
                var r = { Rules: [], statusCode: e.statusCode };
                e.headers && (r.headers = e.headers), t(null, r);
              } else t(e);
            else {
              var i = [];
              try {
                i = n.LifecycleConfiguration.Rule || [];
              } catch (a) {}
              (i = o.clone(o.isArray(i) ? i : [i])),
                t(null, {
                  Rules: i,
                  statusCode: n.statusCode,
                  headers: n.headers
                });
            }
          }
        );
      }
      function w(e, t) {
        Y.call(
          this,
          {
            method: "DELETE",
            Bucket: e.Bucket,
            Region: e.Region,
            headers: e.Headers,
            action: "lifecycle"
          },
          function(e, n) {
            return e && 204 === e.statusCode
              ? t(null, { statusCode: e.statusCode })
              : e
                ? t(e)
                : void t(null, {
                    statusCode: n.statusCode,
                    headers: n.headers
                  });
          }
        );
      }
      function k(e, t) {
        if (e["VersioningConfiguration"]) {
          var n = e["VersioningConfiguration"] || {},
            r = o.json2xml({ VersioningConfiguration: n }),
            i = e.Headers;
          (i["Content-Type"] = "application/xml"),
            (i["Content-MD5"] = o.binaryBase64(o.md5(r))),
            Y.call(
              this,
              {
                method: "PUT",
                Bucket: e.Bucket,
                Region: e.Region,
                body: r,
                action: "versioning",
                headers: i
              },
              function(e, n) {
                return e && 204 === e.statusCode
                  ? t(null, { statusCode: e.statusCode })
                  : e
                    ? t(e)
                    : void t(null, {
                        statusCode: n.statusCode,
                        headers: n.headers
                      });
              }
            );
        } else t({ error: "missing param VersioningConfiguration" });
      }
      function S(e, t) {
        Y.call(
          this,
          {
            method: "GET",
            Bucket: e.Bucket,
            Region: e.Region,
            headers: e.Headers,
            action: "versioning"
          },
          function(e, n) {
            e ||
              (!n.VersioningConfiguration && (n.VersioningConfiguration = {})),
              t(e, n);
          }
        );
      }
      function T(e, t) {
        var n = o.clone(e.ReplicationConfiguration),
          r = o.json2xml({ ReplicationConfiguration: n });
        (r = r.replace(/<(\/?)Rules>/gi, "<$1Rule>")),
          (r = r.replace(/<(\/?)Tags>/gi, "<$1Tag>"));
        var i = e.Headers;
        (i["Content-Type"] = "application/xml"),
          (i["Content-MD5"] = o.binaryBase64(o.md5(r))),
          Y.call(
            this,
            {
              method: "PUT",
              Bucket: e.Bucket,
              Region: e.Region,
              body: r,
              action: "replication",
              headers: i
            },
            function(e, n) {
              return e && 204 === e.statusCode
                ? t(null, { statusCode: e.statusCode })
                : e
                  ? t(e)
                  : void t(null, {
                      statusCode: n.statusCode,
                      headers: n.headers
                    });
            }
          );
      }
      function R(e, t) {
        Y.call(
          this,
          {
            method: "GET",
            Bucket: e.Bucket,
            Region: e.Region,
            headers: e.Headers,
            action: "replication"
          },
          function(e, n) {
            if (e)
              if (
                404 !== e.statusCode ||
                !e.error ||
                ("Not Found" !== e.error &&
                  "ReplicationConfigurationnotFoundError" !== e.error.Code)
              )
                t(e);
              else {
                var r = {
                  ReplicationConfiguration: { Rules: [] },
                  statusCode: e.statusCode
                };
                e.headers && (r.headers = e.headers), t(null, r);
              }
            else
              e ||
                (!n.ReplicationConfiguration &&
                  (n.ReplicationConfiguration = {})),
                n.ReplicationConfiguration.Rule &&
                  ((n.ReplicationConfiguration.Rules =
                    n.ReplicationConfiguration.Rule),
                  delete n.ReplicationConfiguration.Rule),
                t(e, n);
          }
        );
      }
      function E(e, t) {
        Y.call(
          this,
          {
            method: "DELETE",
            Bucket: e.Bucket,
            Region: e.Region,
            headers: e.Headers,
            action: "replication"
          },
          function(e, n) {
            return e && 204 === e.statusCode
              ? t(null, { statusCode: e.statusCode })
              : e
                ? t(e)
                : void t(null, {
                    statusCode: n.statusCode,
                    headers: n.headers
                  });
          }
        );
      }
      function _(e, t) {
        Y.call(
          this,
          {
            method: "HEAD",
            Bucket: e.Bucket,
            Region: e.Region,
            Key: e.Key,
            VersionId: e.VersionId,
            headers: e.Headers
          },
          function(n, r) {
            if (n) {
              var o = n.statusCode;
              return e.Headers["If-Modified-Since"] && o && 304 === o
                ? t(null, { NotModified: !0, statusCode: o })
                : t(n);
            }
            r.headers &&
              r.headers.etag &&
              (r.ETag = r.headers && r.headers.etag),
              t(null, r);
          }
        );
      }
      function N(e, t) {
        var n = {};
        (n["prefix"] = e["Prefix"]),
          (n["delimiter"] = e["Delimiter"]),
          (n["key-marker"] = e["KeyMarker"]),
          (n["version-id-marker"] = e["VersionIdMarker"]),
          (n["max-keys"] = e["MaxKeys"]),
          (n["encoding-type"] = e["EncodingType"]),
          Y.call(
            this,
            {
              method: "GET",
              Bucket: e.Bucket,
              Region: e.Region,
              headers: e.Headers,
              qs: n,
              action: "versions"
            },
            function(e, n) {
              if (e) return t(e);
              var r = n.ListVersionsResult || {},
                i = r.DeleteMarker || [];
              i = o.isArray(i) ? i : [i];
              var a = r.Version || [];
              a = o.isArray(a) ? a : [a];
              var s = o.clone(r);
              delete s.DeleteMarker,
                delete s.Version,
                o.extend(s, {
                  DeleteMarkers: i,
                  Versions: a,
                  statusCode: n.statusCode,
                  headers: n.headers
                }),
                t(null, s);
            }
          );
      }
      function A(e, t) {
        var n = {};
        (n["response-content-type"] = e["ResponseContentType"]),
          (n["response-content-language"] = e["ResponseContentLanguage"]),
          (n["response-expires"] = e["ResponseExpires"]),
          (n["response-cache-control"] = e["ResponseCacheControl"]),
          (n["response-content-disposition"] = e["ResponseContentDisposition"]),
          (n["response-content-encoding"] = e["ResponseContentEncoding"]),
          Y.call(
            this,
            {
              method: "GET",
              Bucket: e.Bucket,
              Region: e.Region,
              Key: e.Key,
              VersionId: e.VersionId,
              headers: e.Headers,
              qs: n,
              rawBody: !0
            },
            function(n, r) {
              if (n) {
                var i = n.statusCode;
                return e.Headers["If-Modified-Since"] && i && 304 === i
                  ? t(null, { NotModified: !0 })
                  : t(n);
              }
              var a = {};
              (a.Body = r.body),
                r.headers &&
                  r.headers.etag &&
                  (a.ETag = r.headers && r.headers.etag),
                o.extend(a, { statusCode: r.statusCode, headers: r.headers }),
                t(null, a);
            }
          );
      }
      function B(e, t) {
        var n = this,
          r = e.ContentLength,
          i = o.throttleOnProgress.call(n, r, e.onProgress);
        o.getBodyMd5(n.options.UploadCheckContentMd5, e.Body, function(a) {
          a && (e.Headers["Content-MD5"] = o.binaryBase64(a)),
            Y.call(
              n,
              {
                TaskId: e.TaskId,
                method: "PUT",
                Bucket: e.Bucket,
                Region: e.Region,
                Key: e.Key,
                headers: e.Headers,
                body: e.Body,
                onProgress: i
              },
              function(o, a) {
                if (o) return i(null, !0), t(o);
                if (
                  (i({ loaded: r, total: r }, !0),
                  a && a.headers && a.headers["etag"])
                ) {
                  var s = J({
                    ForcePathStyle: n.options.ForcePathStyle,
                    protocol: n.options.Protocol,
                    domain: n.options.Domain,
                    bucket: e.Bucket,
                    region: e.Region,
                    object: e.Key
                  });
                  return (
                    (s = s.substr(s.indexOf("://") + 3)),
                    t(null, {
                      Location: s,
                      ETag: a.headers["etag"],
                      statusCode: a.statusCode,
                      headers: a.headers
                    })
                  );
                }
                t(null, a);
              }
            );
        });
      }
      function I(e, t) {
        Y.call(
          this,
          {
            method: "DELETE",
            Bucket: e.Bucket,
            Region: e.Region,
            Key: e.Key,
            headers: e.Headers,
            VersionId: e.VersionId
          },
          function(e, n) {
            if (e) {
              var r = e.statusCode;
              return r && 204 === r
                ? t(null, { statusCode: r })
                : r && 404 === r
                  ? t(null, { BucketNotFound: !0, statusCode: r })
                  : t(e);
            }
            t(null, { statusCode: n.statusCode, headers: n.headers });
          }
        );
      }
      function P(e, t) {
        Y.call(
          this,
          {
            method: "GET",
            Bucket: e.Bucket,
            Region: e.Region,
            Key: e.Key,
            headers: e.Headers,
            action: "acl"
          },
          function(e, n) {
            if (e) return t(e);
            var r = n.AccessControlPolicy || {},
              i = r.Owner || {},
              a = (r.AccessControlList && r.AccessControlList.Grant) || [];
            a = o.isArray(a) ? a : [a];
            var s = W(r);
            n.headers &&
              n.headers["x-cos-acl"] &&
              (s.ACL = n.headers["x-cos-acl"]),
              (s = o.extend(s, {
                Owner: i,
                Grants: a,
                statusCode: n.statusCode,
                headers: n.headers
              })),
              t(null, s);
          }
        );
      }
      function D(e, t) {
        var n = e.Headers,
          r = "";
        if (e["AccessControlPolicy"]) {
          var i = o.clone(e["AccessControlPolicy"] || {}),
            a = i.Grants || i.Grant;
          (a = o.isArray(a) ? a : [a]),
            delete i.Grant,
            delete i.Grants,
            (i.AccessControlList = { Grant: a }),
            (r = o.json2xml({ AccessControlPolicy: i })),
            (n["Content-Type"] = "application/xml"),
            (n["Content-MD5"] = o.binaryBase64(o.md5(r)));
        }
        o.each(n, function(e, t) {
          0 === t.indexOf("x-cos-grant-") && (n[t] = $(n[t]));
        }),
          Y.call(
            this,
            {
              method: "PUT",
              Bucket: e.Bucket,
              Region: e.Region,
              Key: e.Key,
              action: "acl",
              headers: n,
              body: r
            },
            function(e, n) {
              if (e) return t(e);
              t(null, { statusCode: n.statusCode, headers: n.headers });
            }
          );
      }
      function O(e, t) {
        var n = e.Headers;
        (n["Origin"] = e["Origin"]),
          (n["Access-Control-Request-Method"] =
            e["AccessControlRequestMethod"]),
          (n["Access-Control-Request-Headers"] =
            e["AccessControlRequestHeaders"]),
          Y.call(
            this,
            {
              method: "OPTIONS",
              Bucket: e.Bucket,
              Region: e.Region,
              Key: e.Key,
              headers: n
            },
            function(e, n) {
              if (e)
                return e.statusCode && 403 === e.statusCode
                  ? t(null, { OptionsForbidden: !0, statusCode: e.statusCode })
                  : t(e);
              var r = n.headers || {};
              t(null, {
                AccessControlAllowOrigin: r["access-control-allow-origin"],
                AccessControlAllowMethods: r["access-control-allow-methods"],
                AccessControlAllowHeaders: r["access-control-allow-headers"],
                AccessControlExposeHeaders: r["access-control-expose-headers"],
                AccessControlMaxAge: r["access-control-max-age"],
                statusCode: n.statusCode,
                headers: n.headers
              });
            }
          );
      }
      function j(e, t) {
        Y.call(
          this,
          {
            method: "PUT",
            Bucket: e.Bucket,
            Region: e.Region,
            Key: e.Key,
            VersionId: e.VersionId,
            headers: e.Headers
          },
          function(e, n) {
            if (e) return t(e);
            var r = o.clone(n.CopyObjectResult || {});
            o.extend(r, { statusCode: n.statusCode, headers: n.headers }),
              t(null, r);
          }
        );
      }
      function M(e, t) {
        Y.call(
          this,
          {
            method: "PUT",
            Bucket: e.Bucket,
            Region: e.Region,
            Key: e.Key,
            VersionId: e.VersionId,
            qs: { partNumber: e["PartNumber"], uploadId: e["UploadId"] },
            headers: e.Headers
          },
          function(e, n) {
            if (e) return t(e);
            var r = o.clone(n.CopyPartResult || {});
            o.extend(r, { statusCode: n.statusCode, headers: n.headers }),
              t(null, r);
          }
        );
      }
      function L(e, t) {
        var n = e.Objects || {},
          r = e.Quiet,
          i = o.json2xml({ Delete: { Object: n, Quiet: r || !1 } }),
          a = e.Headers;
        (a["Content-Type"] = "application/xml"),
          (a["Content-MD5"] = o.binaryBase64(o.md5(i))),
          Y.call(
            this,
            {
              method: "POST",
              Bucket: e.Bucket,
              Region: e.Region,
              body: i,
              action: "delete",
              headers: a
            },
            function(e, n) {
              if (e) return t(e);
              var r = n.DeleteResult || {},
                i = r.Deleted || [],
                a = r.Error || [];
              (i = o.isArray(i) ? i : [i]), (a = o.isArray(a) ? a : [a]);
              var s = o.clone(r);
              o.extend(s, {
                Error: a,
                Deleted: i,
                statusCode: n.statusCode,
                headers: n.headers
              }),
                t(null, s);
            }
          );
      }
      function U(e, t) {
        var n = e.Headers;
        if (e["RestoreRequest"]) {
          var r = e.RestoreRequest || {},
            i = o.json2xml({ RestoreRequest: r });
          (n["Content-Type"] = "application/xml"),
            (n["Content-MD5"] = o.binaryBase64(o.md5(i))),
            Y.call(
              this,
              {
                method: "POST",
                Bucket: e.Bucket,
                Region: e.Region,
                Key: e.Key,
                VersionId: e.VersionId,
                body: i,
                action: "restore",
                headers: n
              },
              function(e, n) {
                t(e, n);
              }
            );
        } else t({ error: "missing param RestoreRequest" });
      }
      function F(e, t) {
        Y.call(
          this,
          {
            method: "POST",
            Bucket: e.Bucket,
            Region: e.Region,
            Key: e.Key,
            action: "uploads",
            headers: e.Headers
          },
          function(e, n) {
            return e
              ? t(e)
              : ((n = o.clone(n || {})),
                n && n.InitiateMultipartUploadResult
                  ? t(
                      null,
                      o.extend(n.InitiateMultipartUploadResult, {
                        statusCode: n.statusCode,
                        headers: n.headers
                      })
                    )
                  : void t(null, n));
          }
        );
      }
      function H(e, t) {
        var n = this;
        o.getFileSize("multipartUpload", e, function() {
          o.getBodyMd5(n.options.UploadCheckContentMd5, e.Body, function(r) {
            r && (e.Headers["Content-MD5"] = o.binaryBase64(r)),
              Y.call(
                n,
                {
                  TaskId: e.TaskId,
                  method: "PUT",
                  Bucket: e.Bucket,
                  Region: e.Region,
                  Key: e.Key,
                  qs: { partNumber: e["PartNumber"], uploadId: e["UploadId"] },
                  headers: e.Headers,
                  onProgress: e.onProgress,
                  body: e.Body || null
                },
                function(e, n) {
                  if (e) return t(e);
                  (n["headers"] = n["headers"] || {}),
                    t(null, {
                      ETag: n["headers"]["etag"] || "",
                      statusCode: n.statusCode,
                      headers: n.headers
                    });
                }
              );
          });
        });
      }
      function K(e, t) {
        for (
          var n = this, r = e.UploadId, i = e["Parts"], a = 0, s = i.length;
          a < s;
          a++
        )
          0 !== i[a]["ETag"].indexOf('"') &&
            (i[a]["ETag"] = '"' + i[a]["ETag"] + '"');
        var u = o.json2xml({ CompleteMultipartUpload: { Part: i } }),
          c = e.Headers;
        (c["Content-Type"] = "application/xml"),
          (c["Content-MD5"] = o.binaryBase64(o.md5(u))),
          Y.call(
            this,
            {
              method: "POST",
              Bucket: e.Bucket,
              Region: e.Region,
              Key: e.Key,
              qs: { uploadId: r },
              body: u,
              headers: c
            },
            function(r, i) {
              if (r) return t(r);
              var a = J({
                  ForcePathStyle: n.options.ForcePathStyle,
                  protocol: n.options.Protocol,
                  domain: n.options.Domain,
                  bucket: e.Bucket,
                  region: e.Region,
                  object: e.Key,
                  isLocation: !0
                }),
                s = i.CompleteMultipartUploadResult || {},
                u = o.extend(s, {
                  Location: a,
                  statusCode: i.statusCode,
                  headers: i.headers
                });
              t(null, u);
            }
          );
      }
      function z(e, t) {
        var n = {};
        (n["delimiter"] = e["Delimiter"]),
          (n["encoding-type"] = e["EncodingType"]),
          (n["prefix"] = e["Prefix"]),
          (n["max-uploads"] = e["MaxUploads"]),
          (n["key-marker"] = e["KeyMarker"]),
          (n["upload-id-marker"] = e["UploadIdMarker"]),
          (n = o.clearKey(n)),
          Y.call(
            this,
            {
              method: "GET",
              Bucket: e.Bucket,
              Region: e.Region,
              headers: e.Headers,
              qs: n,
              action: "uploads"
            },
            function(e, n) {
              if (e) return t(e);
              if (n && n.ListMultipartUploadsResult) {
                var r = n.ListMultipartUploadsResult.Upload || [],
                  i = n.ListMultipartUploadsResult.CommonPrefixes || [];
                (i = o.isArray(i) ? i : [i]),
                  (r = o.isArray(r) ? r : [r]),
                  (n.ListMultipartUploadsResult.Upload = r),
                  (n.ListMultipartUploadsResult.CommonPrefixes = i);
              }
              var a = o.clone(n.ListMultipartUploadsResult || {});
              o.extend(a, { statusCode: n.statusCode, headers: n.headers }),
                t(null, a);
            }
          );
      }
      function q(e, t) {
        var n = {};
        (n["uploadId"] = e["UploadId"]),
          (n["encoding-type"] = e["EncodingType"]),
          (n["max-parts"] = e["MaxParts"]),
          (n["part-number-marker"] = e["PartNumberMarker"]),
          Y.call(
            this,
            {
              method: "GET",
              Bucket: e.Bucket,
              Region: e.Region,
              Key: e.Key,
              headers: e.Headers,
              qs: n
            },
            function(e, n) {
              if (e) return t(e);
              var r = n.ListPartsResult || {},
                i = r.Part || [];
              (i = o.isArray(i) ? i : [i]), (r.Part = i);
              var a = o.clone(r);
              o.extend(a, { statusCode: n.statusCode, headers: n.headers }),
                t(null, a);
            }
          );
      }
      function G(e, t) {
        var n = {};
        (n["uploadId"] = e["UploadId"]),
          Y.call(
            this,
            {
              method: "DELETE",
              Bucket: e.Bucket,
              Region: e.Region,
              Key: e.Key,
              headers: e.Headers,
              qs: n
            },
            function(e, n) {
              if (e) return t(e);
              t(null, { statusCode: n.statusCode, headers: n.headers });
            }
          );
      }
      function X(e) {
        return o.getAuth({
          SecretId: e.SecretId || this.options.SecretId || "",
          SecretKey: e.SecretKey || this.options.SecretKey || "",
          Method: e.Method,
          Key: e.Key,
          Query: e.Query,
          Headers: e.Headers,
          Expires: e.Expires
        });
      }
      function V(e, t) {
        var n = this,
          r = J({
            ForcePathStyle: n.options.ForcePathStyle,
            protocol: e.Protocol || n.options.Protocol,
            domain: n.options.Domain,
            bucket: e.Bucket,
            region: e.Region,
            object: e.Key
          });
        if (void 0 !== e.Sign && !e.Sign) return t(null, { Url: r }), r;
        var o = Q.call(
          this,
          {
            Bucket: e.Bucket || "",
            Region: e.Region || "",
            Method: e.Method || "get",
            Key: e.Key,
            Expires: e.Expires
          },
          function(e) {
            if (t) {
              var n = r;
              (n += "?" + e.Authorization),
                e.XCosSecurityToken &&
                  (n += "&x-cos-security-token=" + e.XCosSecurityToken),
                e.ClientIP && (n += "&clientIP=" + e.ClientIP),
                e.ClientUA && (n += "&clientUA=" + e.ClientUA),
                e.Token && (n += "&token=" + e.Token),
                setTimeout(function() {
                  t(null, { Url: n });
                });
            }
          }
        );
        return o
          ? r +
              "?" +
              o.Authorization +
              (o.XCosSecurityToken
                ? "&x-cos-security-token=" + o.XCosSecurityToken
                : "")
          : r;
      }
      function W(e) {
        var t = {
            GrantFullControl: [],
            GrantWrite: [],
            GrantRead: [],
            GrantReadAcp: [],
            GrantWriteAcp: [],
            ACL: ""
          },
          n = {
            FULL_CONTROL: "GrantFullControl",
            WRITE: "GrantWrite",
            READ: "GrantRead",
            READ_ACP: "GrantReadAcp",
            WRITE_ACP: "GrantWriteAcp"
          },
          r = e.AccessControlList.Grant;
        r && (r = o.isArray(r) ? r : [r]);
        var i = { READ: 0, WRITE: 0, FULL_CONTROL: 0 };
        return (
          r.length &&
            o.each(r, function(r) {
              "qcs::cam::anyone:anyone" === r.Grantee.ID ||
              "http://cam.qcloud.com/groups/global/AllUsers" === r.Grantee.URI
                ? (i[r.Permission] = 1)
                : r.Grantee.ID !== e.Owner.ID &&
                  t[n[r.Permission]].push('id="' + r.Grantee.ID + '"');
            }),
          i.FULL_CONTROL || (i.WRITE && i.READ)
            ? (t.ACL = "public-read-write")
            : i.READ
              ? (t.ACL = "public-read")
              : (t.ACL = "private"),
          o.each(n, function(e) {
            t[e] = $(t[e].join(","));
          }),
          t
        );
      }
      function $(e) {
        var t,
          n,
          r = e.split(","),
          o = {};
        for (t = 0; t < r.length; )
          (n = r[t].trim()),
            o[n] ? r.splice(t, 1) : ((o[n] = !0), (r[t] = n), t++);
        return r.join(",");
      }
      function J(e) {
        var t = e.bucket,
          n = t.substr(0, t.lastIndexOf("-")),
          r = t.substr(t.lastIndexOf("-") + 1),
          i = e.domain,
          a = e.region,
          s = e.object,
          u =
            e.protocol ||
            (o.isBrowser && "http:" === location.protocol ? "http:" : "https:");
        i ||
          ((i =
            [
              "cn-south",
              "cn-south-2",
              "cn-north",
              "cn-east",
              "cn-southwest",
              "sg"
            ].indexOf(a) > -1
              ? "{Region}.myqcloud.com"
              : "cos.{Region}.myqcloud.com"),
          e.ForcePathStyle || (i = "{Bucket}." + i)),
          (i = i
            .replace(/\{\{AppId\}\}/gi, r)
            .replace(/\{\{Bucket\}\}/gi, n)
            .replace(/\{\{Region\}\}/gi, a)
            .replace(/\{\{.*?\}\}/gi, "")),
          (i = i
            .replace(/\{AppId\}/gi, r)
            .replace(/\{BucketName\}/gi, n)
            .replace(/\{Bucket\}/gi, t)
            .replace(/\{Region\}/gi, a)
            .replace(/\{.*?\}/gi, "")),
          /^[a-zA-Z]+:\/\//.test(i) || (i = u + "//" + i),
          "/" === i.slice(-1) && (i = i.slice(0, -1));
        var c = i;
        return (
          e.ForcePathStyle && (c += "/" + t),
          (c += "/"),
          s && (c += encodeURIComponent(s).replace(/%2F/g, "/")),
          e.isLocation && (c = c.replace(/^https?:\/\//, "")),
          c
        );
      }
      function Q(e, t) {
        var n = this,
          r = e.Bucket || "",
          i = e.Region || "";
        n._StsMap = n._StsMap || {};
        var a = n._StsMap[r + "." + i] || {},
          s = e.Key || "";
        n.options.ForcePathStyle && r && (s = r + "/" + s);
        var u = function() {
          var n = o.getAuth({
              SecretId: a.TmpSecretId,
              SecretKey: a.TmpSecretKey,
              Method: e.Method,
              Key: s,
              Query: e.Query,
              Headers: e.Headers
            }),
            r = {
              Authorization: n,
              XCosSecurityToken: a.XCosSecurityToken || "",
              Token: a.Token || "",
              ClientIP: a.ClientIP || "",
              ClientUA: a.ClientUA || ""
            };
          t && t(r);
        };
        if (a.ExpiredTime && a.ExpiredTime - Date.now() / 1e3 > 60) u();
        else if (n.options.getAuthorization)
          n.options.getAuthorization.call(
            n,
            {
              Bucket: r,
              Region: i,
              Method: e.Method,
              Key: s,
              Query: e.Query,
              Headers: e.Headers
            },
            function(e) {
              "string" === typeof e && (e = { Authorization: e }),
                e.TmpSecretId &&
                e.TmpSecretKey &&
                e.XCosSecurityToken &&
                e.ExpiredTime
                  ? ((a = n._StsMap[r + "." + i] = e), u())
                  : t && t(e);
            }
          );
        else {
          if (!n.options.getSTS)
            return (function() {
              var r = o.getAuth({
                  SecretId: e.SecretId || n.options.SecretId,
                  SecretKey: e.SecretKey || n.options.SecretKey,
                  Method: e.Method,
                  Key: s,
                  Query: e.Query,
                  Headers: e.Headers,
                  Expires: e.Expires
                }),
                i = {
                  Authorization: r,
                  XCosSecurityToken: n.options.XCosSecurityToken
                };
              return t && t(i), i;
            })();
          n.options.getSTS.call(n, { Bucket: r, Region: i }, function(e) {
            (a = n._StsMap[r + "." + i] = e || {}),
              (a.TmpSecretId = a.SecretId),
              (a.TmpSecretKey = a.SecretKey),
              u();
          });
        }
        return "";
      }
      function Y(e, t) {
        var n = this;
        !e.headers && (e.headers = {}),
          !e.qs && (e.qs = {}),
          e.VersionId && (e.qs.versionId = e.VersionId),
          (e.qs = o.clearKey(e.qs)),
          e.headers && (e.headers = o.clearKey(e.headers)),
          e.qs && (e.qs = o.clearKey(e.qs));
        var r = o.clone(e.qs);
        e.action && (r[e.action] = ""),
          Q.call(
            n,
            {
              Bucket: e.Bucket || "",
              Region: e.Region || "",
              Method: e.method,
              Key: e.Key,
              Query: r,
              Headers: e.headers
            },
            function(r) {
              var o = r.Authorization,
                i = !1;
              if (o)
                if (o.indexOf(" ") > -1) i = !1;
                else if (
                  o.indexOf("q-sign-algorithm=") > -1 &&
                  o.indexOf("q-ak=") > -1 &&
                  o.indexOf("q-sign-time=") > -1 &&
                  o.indexOf("q-key-time=") > -1 &&
                  o.indexOf("q-url-param-list=") > -1
                )
                  i = !0;
                else
                  try {
                    (o = atob(o)),
                      o.indexOf("a=") > -1 &&
                        o.indexOf("k=") > -1 &&
                        o.indexOf("t=") > -1 &&
                        o.indexOf("r=") > -1 &&
                        o.indexOf("b=") > -1 &&
                        (i = !0);
                  } catch (a) {}
              i
                ? ((e.AuthData = r), Z.call(n, e, t))
                : t("authorization error");
            }
          );
      }
      function Z(e, t) {
        var n = this,
          i = e.TaskId;
        if (!i || n._isRunningTask(i)) {
          var a = e.Bucket,
            s = e.Region,
            u = e.Key,
            c = e.method || "GET",
            l = e.url,
            d = e.body,
            f = e.json,
            p = e.rawBody;
          (l =
            l ||
            J({
              ForcePathStyle: n.options.ForcePathStyle,
              protocol: n.options.Protocol,
              domain: n.options.Domain,
              bucket: a,
              region: s,
              object: u
            })),
            e.action && (l = l + "?" + e.action);
          var h = {
            method: c,
            url: l,
            headers: e.headers,
            qs: e.qs,
            body: d,
            json: f
          };
          if (
            ((h.headers.Authorization = e.AuthData.Authorization),
            e.AuthData.Token && (h.headers["token"] = e.AuthData.Token),
            e.AuthData.ClientIP &&
              (h.headers["clientIP"] = e.AuthData.ClientIP),
            e.AuthData.ClientUA &&
              (h.headers["clientUA"] = e.AuthData.ClientUA),
            e.AuthData.XCosSecurityToken &&
              (h.headers["x-cos-security-token"] =
                e.AuthData.XCosSecurityToken),
            h.headers && (h.headers = o.clearKey(h.headers)),
            (h = o.clearKey(h)),
            e.onProgress && "function" === typeof e.onProgress)
          ) {
            var g = (d && (d.size || d.length)) || 0;
            h.onProgress = function(t) {
              if (!i || n._isRunningTask(i)) {
                var r = t ? t.loaded : 0;
                e.onProgress({ loaded: r, total: g });
              }
            };
          }
          n.emit("before-send", h);
          var m = r(h, function(e, r, a) {
              var s,
                u = function(e, a) {
                  if ((i && n.off("inner-kill-task", y), !s)) {
                    s = !0;
                    var u = {};
                    r && r.statusCode && (u.statusCode = r.statusCode),
                      r && r.headers && (u.headers = r.headers),
                      e
                        ? ((e = o.extend(e || {}, u)), t(e, null))
                        : ((a = o.extend(a || {}, u)), t(null, a));
                  }
                };
              if (e) u({ error: e });
              else {
                var c;
                try {
                  c = o.xml2json(a) || {};
                } catch (f) {
                  c = a || {};
                }
                var l = r.statusCode,
                  d = 2 === Math.floor(l / 100);
                d
                  ? (p && ((c = {}), (c.body = a)),
                    c.Error ? u({ error: c.Error }) : u(null, c))
                  : u({ error: c.Error || c });
              }
            }),
            y = function(e) {
              e.TaskId === i &&
                (m && m.abort && m.abort(), n.off("inner-kill-task", y));
            };
          i && n.on("inner-kill-task", y);
        }
      }
      var ee = {
        getBucket: a,
        headBucket: i,
        deleteBucket: s,
        getBucketAcl: u,
        putBucketAcl: c,
        getBucketCors: l,
        putBucketCors: d,
        deleteBucketCors: f,
        getBucketLocation: g,
        putBucketTagging: v,
        getBucketTagging: y,
        deleteBucketTagging: C,
        getBucketPolicy: m,
        putBucketPolicy: p,
        deleteBucketPolicy: h,
        getBucketLifecycle: x,
        putBucketLifecycle: b,
        deleteBucketLifecycle: w,
        putBucketVersioning: k,
        getBucketVersioning: S,
        putBucketReplication: T,
        getBucketReplication: R,
        deleteBucketReplication: E,
        getObject: A,
        headObject: _,
        listObjectVersions: N,
        putObject: B,
        deleteObject: I,
        getObjectAcl: P,
        putObjectAcl: D,
        optionsObject: O,
        putObjectCopy: j,
        deleteMultipleObject: L,
        restoreObject: U,
        uploadPartCopy: M,
        multipartInit: F,
        multipartUpload: H,
        multipartComplete: K,
        multipartList: z,
        multipartListPart: q,
        multipartAbort: G,
        getObjectUrl: V,
        getAuth: X
      };
      o.each(ee, function(e, n) {
        t[n] = o.apiWrapper(n, e);
      });
    },
    "76da": function(e, t) {
      var n = "a-zA-Z_À-ÖØ-öø-ÿͰ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿿、-퟿豈-﷏ﷰ-�",
        r = "-.0-9·̀-ͯ‿⁀",
        o = new RegExp(
          "^([^" + n + "])|^((x|X)(m|M)(l|L))|([^" + n + r + "])",
          "g"
        ),
        i = /[^\x09\x0A\x0D\x20-\xFF\x85\xA0-\uD7FF\uE000-\uFDCF\uFDE0-\uFFFD]/gm,
        a = function(e) {
          var t = [];
          if (e instanceof Object)
            for (var n in e) e.hasOwnProperty(n) && t.push(n);
          return t;
        },
        s = function(e, t) {
          var n = function(e, n, r, i, a) {
            var s = void 0 !== t.indent ? t.indent : "\t",
              u = t.prettyPrint ? "\n" + new Array(i).join(s) : "";
            t.removeIllegalNameCharacters && (e = e.replace(o, "_"));
            var c = [u, "<", e, r || ""];
            return (
              n && n.length > 0
                ? (c.push(">"),
                  c.push(n),
                  a && c.push(u),
                  c.push("</"),
                  c.push(e),
                  c.push(">"))
                : c.push("/>"),
              c.join("")
            );
          };
          return (function e(r, o, i) {
            var s = typeof r;
            switch (
              ((Array.isArray
              ? Array.isArray(r)
              : r instanceof Array)
                ? (s = "array")
                : r instanceof Date && (s = "date"),
              s)
            ) {
              case "array":
                var u = [];
                return (
                  r.map(function(t) {
                    u.push(e(t, 1, i + 1));
                  }),
                  t.prettyPrint && u.push("\n"),
                  u.join("")
                );
              case "date":
                return r.toJSON ? r.toJSON() : r + "";
              case "object":
                var l = [];
                for (var d in r)
                  if (r.hasOwnProperty(d))
                    if (r[d] instanceof Array)
                      for (var f = 0; f < r[d].length; f++)
                        r[d].hasOwnProperty(f) &&
                          l.push(
                            n(
                              d,
                              e(r[d][f], 0, i + 1),
                              null,
                              i + 1,
                              a(r[d][f]).length
                            )
                          );
                    else l.push(n(d, e(r[d], 0, i + 1), null, i + 1));
                return (
                  t.prettyPrint && l.length > 0 && l.push("\n"), l.join("")
                );
              case "function":
                return r();
              default:
                return t.escape ? c(r) : "" + r;
            }
          })(e, 0, 0);
        },
        u = function(e) {
          var t = ['<?xml version="1.0" encoding="UTF-8"'];
          return e && t.push(' standalone="yes"'), t.push("?>"), t.join("");
        };
      function c(e) {
        return ("" + e)
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/'/g, "&apos;")
          .replace(/"/g, "&quot;")
          .replace(i, "");
      }
      e.exports = function(e, t) {
        if (
          (t ||
            (t = {
              xmlHeader: { standalone: !0 },
              prettyPrint: !0,
              indent: "  ",
              escape: !0
            }),
          "string" == typeof e)
        )
          try {
            e = JSON.parse(e.toString());
          } catch (i) {
            return !1;
          }
        var n = "",
          r = "";
        t &&
          ("object" == typeof t
            ? (t.xmlHeader && (n = u(!!t.xmlHeader.standalone)),
              "undefined" != typeof t.docType &&
                (r = "<!DOCTYPE " + t.docType + ">"))
            : (n = u())),
          (t = t || {});
        var o = [n, t.prettyPrint && r ? "\n" : "", r, s(e, t)];
        return o
          .join("")
          .replace(/\n{2,}/g, "\n")
          .replace(/\s+$/g, "");
      };
    },
    "88c7": function(e, t) {
      var n = function(e, t, n, r) {
          if (((r = r || function() {}), !e.length || t <= 0)) return r();
          var o = 0,
            i = 0,
            a = 0;
          (function s() {
            if (o >= e.length) return r();
            while (a < t && i < e.length)
              (i += 1),
                (a += 1),
                n(e[i - 1], function(t) {
                  t
                    ? (r(t), (r = function() {}))
                    : ((o += 1), (a -= 1), o >= e.length ? r() : s());
                });
          })();
        },
        r = function(e, t, n) {
          var r = function(o) {
            t(function(t, i) {
              t && o < e ? r(o + 1) : n(t, i);
            });
          };
          e < 1 ? n() : r(1);
        },
        o = { eachLimit: n, retry: r };
      e.exports = o;
    },
    "91b6": function(e, t, n) {
      "use strict";
      n("ac6a"), n("456d"), n("7f7f"), n("6b54");
      var r = n("8bbf"),
        o = n.n(r),
        i = n("34383"),
        a = n.n(i),
        s = { Bucket: "bucket-1", Region: "default" },
        u = new a.a({
          CompatibilityMode: !0,
          ServiceDomain:
            "https://private-3fcd8b-elementuicms.apiary-mock.com/cos",
          Domain: "https://private-3fcd8b-elementuicms.apiary-mock.com/cos",
          getAuthorization: function(e, t) {
            var n = a.a.getAuthorization({
              SecretId: "SecretId",
              SecretKey: "SecretKey",
              Method: e.Method,
              Key: e.Key,
              Query: e.Query,
              Headers: e.Headers,
              Expires: 60
            });
            t(n);
          }
        }),
        c = { index: "/upload/" },
        l = {
          elUploadCloud: function(e) {
            var t = e.file;
            if ("[object File]" !== Object.prototype.toString.call(t))
              throw new Error("file参数必须为File数据类型");
            return new Promise(function(e, n) {
              var r = "",
                o = t.name.lastIndexOf(".");
              -1 !== o && (r = t.name.substring(o));
              var i =
                  ""
                    .concat(t.name, "-lastModified")
                    .concat(parseInt(t.lastModified / 1e3), "-size")
                    .concat(t.size)
                    .substr(0, 160) + r,
                a = "cms/".concat(i),
                c = function(e) {
                  e.percent = parseInt(1e4 * e.percent) / 100;
                },
                l = function(t, r) {
                  t
                    ? n(new Error("上传失败"))
                    : ((r.url =
                        "http://dummyimage.com/200x100/50B347/FFF&text=panhezeng"),
                      e({ data: r }));
                },
                d = {
                  Bucket: s.Bucket,
                  Region: s.Region,
                  Key: a,
                  ACL: "public-read",
                  Body: t,
                  onProgress: c
                };
              t.size > 1048576 ? u.sliceUploadFile(d, l) : u.putObject(d, l);
            });
          },
          elUpload: function(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "post",
              n = e.action || c.index,
              r = new FormData();
            e.data &&
              Object.keys(e.data).map(function(t) {
                r.append(t, e.data[t]);
              }),
              r.append(e.filename, e.file);
            var i = {
              method: t,
              headers: { "content-type": "application/x-www-form-urlencoded" },
              onUploadProgress: function(t) {
                t.total > 0 && (t.percent = (t.loaded / t.total) * 100),
                  e.onProgress(t);
              },
              data: r,
              url: n,
              timeout: 1e6
            };
            return o.a.http(i);
          }
        };
      t["a"] = { url: c, fn: l };
    },
    "91dd": function(e, t, n) {
      "use strict";
      function r(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      e.exports = function(e, t, n, i) {
        (t = t || "&"), (n = n || "=");
        var a = {};
        if ("string" !== typeof e || 0 === e.length) return a;
        var s = /\+/g;
        e = e.split(t);
        var u = 1e3;
        i && "number" === typeof i.maxKeys && (u = i.maxKeys);
        var c = e.length;
        u > 0 && c > u && (c = u);
        for (var l = 0; l < c; ++l) {
          var d,
            f,
            p,
            h,
            g = e[l].replace(s, "%20"),
            m = g.indexOf(n);
          m >= 0
            ? ((d = g.substr(0, m)), (f = g.substr(m + 1)))
            : ((d = g), (f = "")),
            (p = decodeURIComponent(d)),
            (h = decodeURIComponent(f)),
            r(a, p)
              ? o(a[p])
                ? a[p].push(h)
                : (a[p] = [a[p], h])
              : (a[p] = h);
        }
        return a;
      };
      var o =
        Array.isArray ||
        function(e) {
          return "[object Array]" === Object.prototype.toString.call(e);
        };
    },
    "9e11": function(e, t, n) {
      !(function(t, n) {
        e.exports = n();
      })(window, function() {
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
                  var r = t.split("."), o = 0, i = r.length;
                  "[object Object]" === Object.prototype.toString.call(e) &&
                  o < i;

                )
                  e = e[r[o++]];
                return o && o == i ? e : n;
              }
              return n;
            };
          }
        });
      });
    },
    adaa: function(e, t, n) {
      var r = n("b383"),
        o = (function() {
          var e = [],
            t = e.slice,
            n = e.concat,
            r = e.push,
            o = e.indexOf,
            i = {},
            a = i.toString,
            s = i.hasOwnProperty,
            u = {},
            c =
              "1.11.1 -css,-css/addGetHookIf,-css/curCSS,-css/defaultDisplay,-css/hiddenVisibleSelectors,-css/support,-css/swap,-css/var/cssExpand,-css/var/isHidden,-css/var/rmargin,-css/var/rnumnonpx,-effects,-effects/Tween,-effects/animatedSelector,-effects/support,-dimensions,-offset,-deprecated,-event-alias,-wrap",
            l = function(e, t) {
              return new l.fn.init(e, t);
            },
            d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            f = /^-ms-/,
            p = /-([\da-z])/gi,
            h = function(e, t) {
              return t.toUpperCase();
            };
          function g(e) {
            var t = e.length,
              n = l.type(e);
            return (
              "function" !== n &&
              !l.isWindow(e) &&
              (!(1 !== e.nodeType || !t) ||
                ("array" === n ||
                  0 === t ||
                  ("number" === typeof t && t > 0 && t - 1 in e)))
            );
          }
          (l.fn = l.prototype = {
            jquery: c,
            constructor: l,
            selector: "",
            length: 0,
            toArray: function() {
              return t.call(this);
            },
            get: function(e) {
              return null != e
                ? e < 0
                  ? this[e + this.length]
                  : this[e]
                : t.call(this);
            },
            pushStack: function(e) {
              var t = l.merge(this.constructor(), e);
              return (t.prevObject = this), (t.context = this.context), t;
            },
            each: function(e, t) {
              return l.each(this, e, t);
            },
            map: function(e) {
              return this.pushStack(
                l.map(this, function(t, n) {
                  return e.call(t, n, t);
                })
              );
            },
            slice: function() {
              return this.pushStack(t.apply(this, arguments));
            },
            first: function() {
              return this.eq(0);
            },
            last: function() {
              return this.eq(-1);
            },
            eq: function(e) {
              var t = this.length,
                n = +e + (e < 0 ? t : 0);
              return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
            },
            end: function() {
              return this.prevObject || this.constructor(null);
            },
            push: r,
            sort: e.sort,
            splice: e.splice
          }),
            (l.extend = l.fn.extend = function() {
              var e,
                t,
                n,
                r,
                o,
                i,
                a = arguments[0] || {},
                s = 1,
                u = arguments.length,
                c = !1;
              for (
                "boolean" === typeof a &&
                  ((c = a), (a = arguments[s] || {}), s++),
                  "object" === typeof a || l.isFunction(a) || (a = {}),
                  s === u && ((a = this), s--);
                s < u;
                s++
              )
                if (null != (o = arguments[s]))
                  for (r in o)
                    (e = a[r]),
                      (n = o[r]),
                      a !== n &&
                        (c && n && (l.isPlainObject(n) || (t = l.isArray(n)))
                          ? (t
                              ? ((t = !1), (i = e && l.isArray(e) ? e : []))
                              : (i = e && l.isPlainObject(e) ? e : {}),
                            (a[r] = l.extend(c, i, n)))
                          : void 0 !== n && (a[r] = n));
              return a;
            }),
            l.extend({
              expando: "jQuery" + (c + Math.random()).replace(/\D/g, ""),
              isReady: !0,
              error: function(e) {
                throw new Error(e);
              },
              noop: function() {},
              isFunction: function(e) {
                return "function" === l.type(e);
              },
              isArray:
                Array.isArray ||
                function(e) {
                  return "array" === l.type(e);
                },
              isWindow: function(e) {
                return null != e && e == e.window;
              },
              isNumeric: function(e) {
                return !l.isArray(e) && e - parseFloat(e) >= 0;
              },
              isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0;
              },
              isPlainObject: function(e) {
                var t;
                if (!e || "object" !== l.type(e) || e.nodeType || l.isWindow(e))
                  return !1;
                try {
                  if (
                    e.constructor &&
                    !s.call(e, "constructor") &&
                    !s.call(e.constructor.prototype, "isPrototypeOf")
                  )
                    return !1;
                } catch (n) {
                  return !1;
                }
                if (u.ownLast) for (t in e) return s.call(e, t);
                for (t in e);
                return void 0 === t || s.call(e, t);
              },
              type: function(e) {
                return null == e
                  ? e + ""
                  : "object" === typeof e || "function" === typeof e
                    ? i[a.call(e)] || "object"
                    : typeof e;
              },
              globalEval: function(e) {
                e &&
                  l.trim(e) &&
                  (window.execScript ||
                    function(e) {
                      window["eval"].call(window, e);
                    })(e);
              },
              camelCase: function(e) {
                return e.replace(f, "ms-").replace(p, h);
              },
              nodeName: function(e, t) {
                return (
                  e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                );
              },
              each: function(e, t, n) {
                var r,
                  o = 0,
                  i = e.length,
                  a = g(e);
                if (n) {
                  if (a) {
                    for (; o < i; o++)
                      if (((r = t.apply(e[o], n)), !1 === r)) break;
                  } else
                    for (o in e) if (((r = t.apply(e[o], n)), !1 === r)) break;
                } else if (a) {
                  for (; o < i; o++)
                    if (((r = t.call(e[o], o, e[o])), !1 === r)) break;
                } else
                  for (o in e)
                    if (((r = t.call(e[o], o, e[o])), !1 === r)) break;
                return e;
              },
              trim: function(e) {
                return null == e ? "" : (e + "").replace(d, "");
              },
              makeArray: function(e, t) {
                var n = t || [];
                return (
                  null != e &&
                    (g(Object(e))
                      ? l.merge(n, "string" === typeof e ? [e] : e)
                      : r.call(n, e)),
                  n
                );
              },
              inArray: function(e, t, n) {
                var r;
                if (t) {
                  if (o) return o.call(t, e, n);
                  for (
                    r = t.length, n = n ? (n < 0 ? Math.max(0, r + n) : n) : 0;
                    n < r;
                    n++
                  )
                    if (n in t && t[n] === e) return n;
                }
                return -1;
              },
              merge: function(e, t) {
                var n = +t.length,
                  r = 0,
                  o = e.length;
                while (r < n) e[o++] = t[r++];
                if (n !== n) while (void 0 !== t[r]) e[o++] = t[r++];
                return (e.length = o), e;
              },
              grep: function(e, t, n) {
                for (var r, o = [], i = 0, a = e.length, s = !n; i < a; i++)
                  (r = !t(e[i], i)), r !== s && o.push(e[i]);
                return o;
              },
              map: function(e, t, r) {
                var o,
                  i = 0,
                  a = e.length,
                  s = g(e),
                  u = [];
                if (s)
                  for (; i < a; i++)
                    (o = t(e[i], i, r)), null != o && u.push(o);
                else for (i in e) (o = t(e[i], i, r)), null != o && u.push(o);
                return n.apply([], u);
              },
              guid: 1,
              proxy: function(e, n) {
                var r, o, i;
                if (
                  ("string" === typeof n && ((i = e[n]), (n = e), (e = i)),
                  l.isFunction(e))
                )
                  return (
                    (r = t.call(arguments, 2)),
                    (o = function() {
                      return e.apply(n || this, r.concat(t.call(arguments)));
                    }),
                    (o.guid = e.guid = e.guid || l.guid++),
                    o
                  );
              },
              now: function() {
                return +new Date();
              },
              support: u
            }),
            l.each(
              "Boolean Number String Function Array Date RegExp Object Error".split(
                " "
              ),
              function(e, t) {
                i["[object " + t + "]"] = t.toLowerCase();
              }
            );
          var m,
            y = window.document,
            v = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            C = (l.fn.init = function(e, t) {
              var n, r;
              if (!e) return this;
              if ("string" === typeof e) {
                if (
                  ((n =
                    "<" === e.charAt(0) &&
                    ">" === e.charAt(e.length - 1) &&
                    e.length >= 3
                      ? [null, e, null]
                      : v.exec(e)),
                  !n || (!n[1] && t))
                )
                  return !t || t.jquery
                    ? (t || m).find(e)
                    : this.constructor(t).find(e);
                if (n[1]) {
                  if (
                    ((t = t instanceof l ? t[0] : t),
                    l.merge(
                      this,
                      l.parseHTML(
                        n[1],
                        t && t.nodeType ? t.ownerDocument || t : y,
                        !0
                      )
                    ),
                    rsingleTag.test(n[1]) && l.isPlainObject(t))
                  )
                    for (n in t)
                      l.isFunction(this[n])
                        ? this[n](t[n])
                        : this.attr(n, t[n]);
                  return this;
                }
                if (((r = y.getElementById(n[2])), r && r.parentNode)) {
                  if (r.id !== n[2]) return m.find(e);
                  (this.length = 1), (this[0] = r);
                }
                return (this.context = y), (this.selector = e), this;
              }
              return e.nodeType
                ? ((this.context = this[0] = e), (this.length = 1), this)
                : l.isFunction(e)
                  ? "undefined" !== typeof m.ready
                    ? m.ready(e)
                    : e(l)
                  : (void 0 !== e.selector &&
                      ((this.selector = e.selector),
                      (this.context = e.context)),
                    l.makeArray(e, this));
            });
          (C.prototype = l.fn), (m = l(y));
          var b,
            x = /\S+/g,
            w = {};
          function k(e) {
            var t = (w[e] = {});
            return (
              l.each(e.match(x) || [], function(e, n) {
                t[n] = !0;
              }),
              t
            );
          }
          function S() {
            y.addEventListener
              ? (y.removeEventListener("DOMContentLoaded", T, !1),
                window.removeEventListener("load", T, !1))
              : (y.detachEvent("onreadystatechange", T),
                window.detachEvent("onload", T));
          }
          function T() {
            (y.addEventListener ||
              "load" === event.type ||
              "complete" === y.readyState) &&
              (S(), l.ready());
          }
          (l.Callbacks = function(e) {
            e = "string" === typeof e ? w[e] || k(e) : l.extend({}, e);
            var t,
              n,
              r,
              o,
              i,
              a,
              s = [],
              u = !e.once && [],
              c = function(l) {
                for (
                  n = e.memory && l,
                    r = !0,
                    i = a || 0,
                    a = 0,
                    o = s.length,
                    t = !0;
                  s && i < o;
                  i++
                )
                  if (!1 === s[i].apply(l[0], l[1]) && e.stopOnFalse) {
                    n = !1;
                    break;
                  }
                (t = !1),
                  s &&
                    (u ? u.length && c(u.shift()) : n ? (s = []) : d.disable());
              },
              d = {
                add: function() {
                  if (s) {
                    var r = s.length;
                    (function t(n) {
                      l.each(n, function(n, r) {
                        var o = l.type(r);
                        "function" === o
                          ? (e.unique && d.has(r)) || s.push(r)
                          : r && r.length && "string" !== o && t(r);
                      });
                    })(arguments),
                      t ? (o = s.length) : n && ((a = r), c(n));
                  }
                  return this;
                },
                remove: function() {
                  return (
                    s &&
                      l.each(arguments, function(e, n) {
                        var r;
                        while ((r = l.inArray(n, s, r)) > -1)
                          s.splice(r, 1), t && (r <= o && o--, r <= i && i--);
                      }),
                    this
                  );
                },
                has: function(e) {
                  return e ? l.inArray(e, s) > -1 : !(!s || !s.length);
                },
                empty: function() {
                  return (s = []), (o = 0), this;
                },
                disable: function() {
                  return (s = u = n = void 0), this;
                },
                disabled: function() {
                  return !s;
                },
                lock: function() {
                  return (u = void 0), n || d.disable(), this;
                },
                locked: function() {
                  return !u;
                },
                fireWith: function(e, n) {
                  return (
                    !s ||
                      (r && !u) ||
                      ((n = n || []),
                      (n = [e, n.slice ? n.slice() : n]),
                      t ? u.push(n) : c(n)),
                    this
                  );
                },
                fire: function() {
                  return d.fireWith(this, arguments), this;
                },
                fired: function() {
                  return !!r;
                }
              };
            return d;
          }),
            l.extend({
              Deferred: function(e) {
                var t = [
                    ["resolve", "done", l.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", l.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", l.Callbacks("memory")]
                  ],
                  n = "pending",
                  r = {
                    state: function() {
                      return n;
                    },
                    always: function() {
                      return o.done(arguments).fail(arguments), this;
                    },
                    then: function() {
                      var e = arguments;
                      return l
                        .Deferred(function(n) {
                          l.each(t, function(t, i) {
                            var a = l.isFunction(e[t]) && e[t];
                            o[i[1]](function() {
                              var e = a && a.apply(this, arguments);
                              e && l.isFunction(e.promise)
                                ? e
                                    .promise()
                                    .done(n.resolve)
                                    .fail(n.reject)
                                    .progress(n.notify)
                                : n[i[0] + "With"](
                                    this === r ? n.promise() : this,
                                    a ? [e] : arguments
                                  );
                            });
                          }),
                            (e = null);
                        })
                        .promise();
                    },
                    promise: function(e) {
                      return null != e ? l.extend(e, r) : r;
                    }
                  },
                  o = {};
                return (
                  (r.pipe = r.then),
                  l.each(t, function(e, i) {
                    var a = i[2],
                      s = i[3];
                    (r[i[1]] = a.add),
                      s &&
                        a.add(
                          function() {
                            n = s;
                          },
                          t[1 ^ e][2].disable,
                          t[2][2].lock
                        ),
                      (o[i[0]] = function() {
                        return (
                          o[i[0] + "With"](this === o ? r : this, arguments),
                          this
                        );
                      }),
                      (o[i[0] + "With"] = a.fireWith);
                  }),
                  r.promise(o),
                  e && e.call(o, o),
                  o
                );
              },
              when: function(e) {
                var n,
                  r,
                  o,
                  i = 0,
                  a = t.call(arguments),
                  s = a.length,
                  u = 1 !== s || (e && l.isFunction(e.promise)) ? s : 0,
                  c = 1 === u ? e : l.Deferred(),
                  d = function(e, r, o) {
                    return function(i) {
                      (r[e] = this),
                        (o[e] = arguments.length > 1 ? t.call(arguments) : i),
                        o === n
                          ? c.notifyWith(r, o)
                          : --u || c.resolveWith(r, o);
                    };
                  };
                if (s > 1)
                  for (
                    n = new Array(s), r = new Array(s), o = new Array(s);
                    i < s;
                    i++
                  )
                    a[i] && l.isFunction(a[i].promise)
                      ? a[i]
                          .promise()
                          .done(d(i, o, a))
                          .fail(c.reject)
                          .progress(d(i, r, n))
                      : --u;
                return u || c.resolveWith(o, a), c.promise();
              }
            }),
            (l.fn.ready = function(e) {
              return l.ready.promise().done(e), this;
            }),
            l.extend({
              isReady: !1,
              readyWait: 1,
              holdReady: function(e) {
                e ? l.readyWait++ : l.ready(!0);
              },
              ready: function(e) {
                if (!0 === e ? !--l.readyWait : !l.isReady) {
                  if (!y.body) return setTimeout(l.ready);
                  (l.isReady = !0),
                    (!0 !== e && --l.readyWait > 0) ||
                      (b.resolveWith(y, [l]),
                      l.fn.triggerHandler &&
                        (l(y).triggerHandler("ready"), l(y).off("ready")));
                }
              }
            }),
            (l.ready.promise = function(e) {
              if (!b)
                if (((b = l.Deferred()), "complete" === y.readyState))
                  setTimeout(l.ready);
                else if (y.addEventListener)
                  y.addEventListener("DOMContentLoaded", T, !1),
                    window.addEventListener("load", T, !1);
                else {
                  y.attachEvent("onreadystatechange", T),
                    window.attachEvent("onload", T);
                  var t = !1;
                  try {
                    t = null == window.frameElement && y.documentElement;
                  } catch (n) {}
                  t &&
                    t.doScroll &&
                    (function e() {
                      if (!l.isReady) {
                        try {
                          t.doScroll("left");
                        } catch (n) {
                          return setTimeout(e, 50);
                        }
                        S(), l.ready();
                      }
                    })();
                }
              return b.promise(e);
            });
          var R,
            E = "undefined";
          for (R in l(u)) break;
          (u.ownLast = "0" !== R),
            (u.inlineBlockNeedsLayout = !1),
            l(function() {
              var e, t, n, r;
              (n = y.getElementsByTagName("body")[0]),
                n &&
                  n.style &&
                  ((t = y.createElement("div")),
                  (r = y.createElement("div")),
                  (r.style.cssText =
                    "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
                  n.appendChild(r).appendChild(t),
                  typeof t.style.zoom !== E &&
                    ((t.style.cssText =
                      "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1"),
                    (u.inlineBlockNeedsLayout = e = 3 === t.offsetWidth),
                    e && (n.style.zoom = 1)),
                  n.removeChild(r));
            }),
            (function() {
              var e = y.createElement("div");
              if (null == u.deleteExpando) {
                u.deleteExpando = !0;
                try {
                  delete e.test;
                } catch (t) {
                  u.deleteExpando = !1;
                }
              }
              e = null;
            })(),
            (l.acceptData = function(e) {
              var t = l.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
              return (
                (1 === n || 9 === n) &&
                (!t || (!0 !== t && e.getAttribute("classid") === t))
              );
            });
          var _ = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            N = /([A-Z])/g;
          function A(e, t, n) {
            if (void 0 === n && 1 === e.nodeType) {
              var r = "data-" + t.replace(N, "-$1").toLowerCase();
              if (((n = e.getAttribute(r)), "string" === typeof n)) {
                try {
                  n =
                    "true" === n ||
                    ("false" !== n &&
                      ("null" === n
                        ? null
                        : +n + "" === n
                          ? +n
                          : _.test(n)
                            ? l.parseJSON(n)
                            : n));
                } catch (o) {}
                l.data(e, t, n);
              } else n = void 0;
            }
            return n;
          }
          function B(e) {
            var t;
            for (t in e)
              if (("data" !== t || !l.isEmptyObject(e[t])) && "toJSON" !== t)
                return !1;
            return !0;
          }
          function I(t, n, r, o) {
            if (l.acceptData(t)) {
              var i,
                a,
                s = l.expando,
                u = t.nodeType,
                c = u ? l.cache : t,
                d = u ? t[s] : t[s] && s;
              if (
                (d && c[d] && (o || c[d].data)) ||
                void 0 !== r ||
                "string" !== typeof n
              )
                return (
                  d || (d = u ? (t[s] = e.pop() || l.guid++) : s),
                  c[d] || (c[d] = u ? {} : { toJSON: l.noop }),
                  ("object" !== typeof n && "function" !== typeof n) ||
                    (o
                      ? (c[d] = l.extend(c[d], n))
                      : (c[d].data = l.extend(c[d].data, n))),
                  (a = c[d]),
                  o || (a.data || (a.data = {}), (a = a.data)),
                  void 0 !== r && (a[l.camelCase(n)] = r),
                  "string" === typeof n
                    ? ((i = a[n]), null == i && (i = a[l.camelCase(n)]))
                    : (i = a),
                  i
                );
            }
          }
          function P(e, t, n) {
            if (l.acceptData(e)) {
              var r,
                o,
                i = e.nodeType,
                a = i ? l.cache : e,
                s = i ? e[l.expando] : l.expando;
              if (a[s]) {
                if (t && ((r = n ? a[s] : a[s].data), r)) {
                  l.isArray(t)
                    ? (t = t.concat(l.map(t, l.camelCase)))
                    : t in r
                      ? (t = [t])
                      : ((t = l.camelCase(t)),
                        (t = t in r ? [t] : t.split(" "))),
                    (o = t.length);
                  while (o--) delete r[t[o]];
                  if (n ? !B(r) : !l.isEmptyObject(r)) return;
                }
                (n || (delete a[s].data, B(a[s]))) &&
                  (i
                    ? l.cleanData([e], !0)
                    : u.deleteExpando || a != a.window
                      ? delete a[s]
                      : (a[s] = null));
              }
            }
          }
          l.extend({
            cache: {},
            noData: {
              "applet ": !0,
              "embed ": !0,
              "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(e) {
              return (
                (e = e.nodeType ? l.cache[e[l.expando]] : e[l.expando]),
                !!e && !B(e)
              );
            },
            data: function(e, t, n) {
              return I(e, t, n);
            },
            removeData: function(e, t) {
              return P(e, t);
            },
            _data: function(e, t, n) {
              return I(e, t, n, !0);
            },
            _removeData: function(e, t) {
              return P(e, t, !0);
            }
          }),
            l.fn.extend({
              data: function(e, t) {
                var n,
                  r,
                  o,
                  i = this[0],
                  a = i && i.attributes;
                if (void 0 === e) {
                  if (
                    this.length &&
                    ((o = l.data(i)),
                    1 === i.nodeType && !l._data(i, "parsedAttrs"))
                  ) {
                    n = a.length;
                    while (n--)
                      a[n] &&
                        ((r = a[n].name),
                        0 === r.indexOf("data-") &&
                          ((r = l.camelCase(r.slice(5))), A(i, r, o[r])));
                    l._data(i, "parsedAttrs", !0);
                  }
                  return o;
                }
                return "object" === typeof e
                  ? this.each(function() {
                      l.data(this, e);
                    })
                  : arguments.length > 1
                    ? this.each(function() {
                        l.data(this, e, t);
                      })
                    : i
                      ? A(i, e, l.data(i, e))
                      : void 0;
              },
              removeData: function(e) {
                return this.each(function() {
                  l.removeData(this, e);
                });
              }
            }),
            l.extend({
              queue: function(e, t, n) {
                var r;
                if (e)
                  return (
                    (t = (t || "fx") + "queue"),
                    (r = l._data(e, t)),
                    n &&
                      (!r || l.isArray(n)
                        ? (r = l._data(e, t, l.makeArray(n)))
                        : r.push(n)),
                    r || []
                  );
              },
              dequeue: function(e, t) {
                t = t || "fx";
                var n = l.queue(e, t),
                  r = n.length,
                  o = n.shift(),
                  i = l._queueHooks(e, t),
                  a = function() {
                    l.dequeue(e, t);
                  };
                "inprogress" === o && ((o = n.shift()), r--),
                  o &&
                    ("fx" === t && n.unshift("inprogress"),
                    delete i.stop,
                    o.call(e, a, i)),
                  !r && i && i.empty.fire();
              },
              _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return (
                  l._data(e, n) ||
                  l._data(e, n, {
                    empty: l.Callbacks("once memory").add(function() {
                      l._removeData(e, t + "queue"), l._removeData(e, n);
                    })
                  })
                );
              }
            }),
            l.fn.extend({
              queue: function(e, t) {
                var n = 2;
                return (
                  "string" !== typeof e && ((t = e), (e = "fx"), n--),
                  arguments.length < n
                    ? l.queue(this[0], e)
                    : void 0 === t
                      ? this
                      : this.each(function() {
                          var n = l.queue(this, e, t);
                          l._queueHooks(this, e),
                            "fx" === e &&
                              "inprogress" !== n[0] &&
                              l.dequeue(this, e);
                        })
                );
              },
              dequeue: function(e) {
                return this.each(function() {
                  l.dequeue(this, e);
                });
              },
              clearQueue: function(e) {
                return this.queue(e || "fx", []);
              },
              promise: function(e, t) {
                var n,
                  r = 1,
                  o = l.Deferred(),
                  i = this,
                  a = this.length,
                  s = function() {
                    --r || o.resolveWith(i, [i]);
                  };
                "string" !== typeof e && ((t = e), (e = void 0)),
                  (e = e || "fx");
                while (a--)
                  (n = l._data(i[a], e + "queueHooks")),
                    n && n.empty && (r++, n.empty.add(s));
                return s(), o.promise(t);
              }
            }),
            (l.event = {
              global: {},
              add: function(e, t, n, r, o) {
                var i,
                  a,
                  s,
                  u,
                  c,
                  d,
                  f,
                  p,
                  h,
                  g,
                  m,
                  y = l._data(e);
                if (y) {
                  n.handler && ((u = n), (n = u.handler), (o = u.selector)),
                    n.guid || (n.guid = l.guid++),
                    (a = y.events) || (a = y.events = {}),
                    (d = y.handle) ||
                      ((d = y.handle = function(e) {
                        return typeof l === E ||
                          (e && l.event.triggered === e.type)
                          ? void 0
                          : l.event.dispatch.apply(d.elem, arguments);
                      }),
                      (d.elem = e)),
                    (t = (t || "").match(x) || [""]),
                    (s = t.length);
                  while (s--)
                    (i = L.exec(t[s]) || []),
                      (h = m = i[1]),
                      (g = (i[2] || "").split(".").sort()),
                      h &&
                        ((c = l.event.special[h] || {}),
                        (h = (o ? c.delegateType : c.bindType) || h),
                        (c = l.event.special[h] || {}),
                        (f = l.extend(
                          {
                            type: h,
                            origType: m,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: o,
                            needsContext:
                              o && l.expr.match.needsContext.test(o),
                            namespace: g.join(".")
                          },
                          u
                        )),
                        (p = a[h]) ||
                          ((p = a[h] = []),
                          (p.delegateCount = 0),
                          (c.setup && !1 !== c.setup.call(e, r, g, d)) ||
                            (e.addEventListener
                              ? e.addEventListener(h, d, !1)
                              : e.attachEvent && e.attachEvent("on" + h, d))),
                        c.add &&
                          (c.add.call(e, f),
                          f.handler.guid || (f.handler.guid = n.guid)),
                        o ? p.splice(p.delegateCount++, 0, f) : p.push(f),
                        (l.event.global[h] = !0));
                  e = null;
                }
              },
              remove: function(e, t, n, r, o) {
                var i,
                  a,
                  s,
                  u,
                  c,
                  d,
                  f,
                  p,
                  h,
                  g,
                  m,
                  y = l.hasData(e) && l._data(e);
                if (y && (d = y.events)) {
                  (t = (t || "").match(x) || [""]), (c = t.length);
                  while (c--)
                    if (
                      ((s = L.exec(t[c]) || []),
                      (h = m = s[1]),
                      (g = (s[2] || "").split(".").sort()),
                      h)
                    ) {
                      (f = l.event.special[h] || {}),
                        (h = (r ? f.delegateType : f.bindType) || h),
                        (p = d[h] || []),
                        (s =
                          s[2] &&
                          new RegExp(
                            "(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          )),
                        (u = i = p.length);
                      while (i--)
                        (a = p[i]),
                          (!o && m !== a.origType) ||
                            (n && n.guid !== a.guid) ||
                            (s && !s.test(a.namespace)) ||
                            (r &&
                              r !== a.selector &&
                              ("**" !== r || !a.selector)) ||
                            (p.splice(i, 1),
                            a.selector && p.delegateCount--,
                            f.remove && f.remove.call(e, a));
                      u &&
                        !p.length &&
                        ((f.teardown &&
                          !1 !== f.teardown.call(e, g, y.handle)) ||
                          l.removeEvent(e, h, y.handle),
                        delete d[h]);
                    } else for (h in d) l.event.remove(e, h + t[c], n, r, !0);
                  l.isEmptyObject(d) &&
                    (delete y.handle, l._removeData(e, "events"));
                }
              },
              trigger: function(e, t, n, r) {
                var o,
                  i,
                  a,
                  u,
                  c,
                  d,
                  f,
                  p = [n || y],
                  h = s.call(e, "type") ? e.type : e,
                  g = s.call(e, "namespace") ? e.namespace.split(".") : [];
                if (
                  ((a = d = n = n || y),
                  3 !== n.nodeType &&
                    8 !== n.nodeType &&
                    !M.test(h + l.event.triggered) &&
                    (h.indexOf(".") >= 0 &&
                      ((g = h.split(".")), (h = g.shift()), g.sort()),
                    (i = h.indexOf(":") < 0 && "on" + h),
                    (e = e[l.expando]
                      ? e
                      : new l.Event(h, "object" === typeof e && e)),
                    (e.isTrigger = r ? 2 : 3),
                    (e.namespace = g.join(".")),
                    (e.namespace_re = e.namespace
                      ? new RegExp(
                          "(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"
                        )
                      : null),
                    (e.result = void 0),
                    e.target || (e.target = n),
                    (t = null == t ? [e] : l.makeArray(t, [e])),
                    (c = l.event.special[h] || {}),
                    r || !c.trigger || !1 !== c.trigger.apply(n, t)))
                ) {
                  if (!r && !c.noBubble && !l.isWindow(n)) {
                    for (
                      u = c.delegateType || h,
                        M.test(u + h) || (a = a.parentNode);
                      a;
                      a = a.parentNode
                    )
                      p.push(a), (d = a);
                    d === (n.ownerDocument || y) &&
                      p.push(d.defaultView || d.parentWindow || window);
                  }
                  f = 0;
                  while ((a = p[f++]) && !e.isPropagationStopped())
                    (e.type = f > 1 ? u : c.bindType || h),
                      (o =
                        (l._data(a, "events") || {})[e.type] &&
                        l._data(a, "handle")),
                      o && o.apply(a, t),
                      (o = i && a[i]),
                      o &&
                        o.apply &&
                        l.acceptData(a) &&
                        ((e.result = o.apply(a, t)),
                        !1 === e.result && e.preventDefault());
                  if (
                    ((e.type = h),
                    !r &&
                      !e.isDefaultPrevented() &&
                      (!c._default || !1 === c._default.apply(p.pop(), t)) &&
                      l.acceptData(n) &&
                      i &&
                      n[h] &&
                      !l.isWindow(n))
                  ) {
                    (d = n[i]), d && (n[i] = null), (l.event.triggered = h);
                    try {
                      n[h]();
                    } catch (m) {}
                    (l.event.triggered = void 0), d && (n[i] = d);
                  }
                  return e.result;
                }
              },
              dispatch: function(e) {
                e = l.event.fix(e);
                var n,
                  r,
                  o,
                  i,
                  a,
                  s = [],
                  u = t.call(arguments),
                  c = (l._data(this, "events") || {})[e.type] || [],
                  d = l.event.special[e.type] || {};
                if (
                  ((u[0] = e),
                  (e.delegateTarget = this),
                  !d.preDispatch || !1 !== d.preDispatch.call(this, e))
                ) {
                  (s = l.event.handlers.call(this, e, c)), (n = 0);
                  while ((i = s[n++]) && !e.isPropagationStopped()) {
                    (e.currentTarget = i.elem), (a = 0);
                    while (
                      (o = i.handlers[a++]) &&
                      !e.isImmediatePropagationStopped()
                    )
                      (e.namespace_re && !e.namespace_re.test(o.namespace)) ||
                        ((e.handleObj = o),
                        (e.data = o.data),
                        (r = (
                          (l.event.special[o.origType] || {}).handle ||
                          o.handler
                        ).apply(i.elem, u)),
                        void 0 !== r &&
                          !1 === (e.result = r) &&
                          (e.preventDefault(), e.stopPropagation()));
                  }
                  return (
                    d.postDispatch && d.postDispatch.call(this, e), e.result
                  );
                }
              },
              handlers: function(e, t) {
                var n,
                  r,
                  o,
                  i,
                  a = [],
                  s = t.delegateCount,
                  u = e.target;
                if (s && u.nodeType && (!e.button || "click" !== e.type))
                  for (; u != this; u = u.parentNode || this)
                    if (
                      1 === u.nodeType &&
                      (!0 !== u.disabled || "click" !== e.type)
                    ) {
                      for (o = [], i = 0; i < s; i++)
                        (r = t[i]),
                          (n = r.selector + " "),
                          void 0 === o[n] &&
                            (o[n] = r.needsContext
                              ? l(n, this).index(u) >= 0
                              : l.find(n, this, null, [u]).length),
                          o[n] && o.push(r);
                      o.length && a.push({ elem: u, handlers: o });
                    }
                return (
                  s < t.length && a.push({ elem: this, handlers: t.slice(s) }),
                  a
                );
              },
              fix: function(e) {
                if (e[l.expando]) return e;
                var t,
                  n,
                  r,
                  o = e.type,
                  i = e,
                  a = this.fixHooks[o];
                a ||
                  (this.fixHooks[o] = a = j.test(o)
                    ? this.mouseHooks
                    : O.test(o)
                      ? this.keyHooks
                      : {}),
                  (r = a.props ? this.props.concat(a.props) : this.props),
                  (e = new l.Event(i)),
                  (t = r.length);
                while (t--) (n = r[t]), (e[n] = i[n]);
                return (
                  e.target || (e.target = i.srcElement || y),
                  3 === e.target.nodeType && (e.target = e.target.parentNode),
                  (e.metaKey = !!e.metaKey),
                  a.filter ? a.filter(e, i) : e
                );
              },
              props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
                " "
              ),
              fixHooks: {},
              keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                  return (
                    null == e.which &&
                      (e.which = null != t.charCode ? t.charCode : t.keyCode),
                    e
                  );
                }
              },
              mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
                  " "
                ),
                filter: function(e, t) {
                  var n,
                    r,
                    o,
                    i = t.button,
                    a = t.fromElement;
                  return (
                    null == e.pageX &&
                      null != t.clientX &&
                      ((r = e.target.ownerDocument || y),
                      (o = r.documentElement),
                      (n = r.body),
                      (e.pageX =
                        t.clientX +
                        ((o && o.scrollLeft) || (n && n.scrollLeft) || 0) -
                        ((o && o.clientLeft) || (n && n.clientLeft) || 0)),
                      (e.pageY =
                        t.clientY +
                        ((o && o.scrollTop) || (n && n.scrollTop) || 0) -
                        ((o && o.clientTop) || (n && n.clientTop) || 0))),
                    !e.relatedTarget &&
                      a &&
                      (e.relatedTarget = a === e.target ? t.toElement : a),
                    e.which ||
                      void 0 === i ||
                      (e.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0),
                    e
                  );
                }
              },
              special: {
                load: { noBubble: !0 },
                focus: {
                  trigger: function() {
                    if (this !== safeActiveElement() && this.focus)
                      try {
                        return this.focus(), !1;
                      } catch (e) {}
                  },
                  delegateType: "focusin"
                },
                blur: {
                  trigger: function() {
                    if (this === safeActiveElement() && this.blur)
                      return this.blur(), !1;
                  },
                  delegateType: "focusout"
                },
                click: {
                  trigger: function() {
                    if (
                      l.nodeName(this, "input") &&
                      "checkbox" === this.type &&
                      this.click
                    )
                      return this.click(), !1;
                  },
                  _default: function(e) {
                    return l.nodeName(e.target, "a");
                  }
                },
                beforeunload: {
                  postDispatch: function(e) {
                    void 0 !== e.result &&
                      e.originalEvent &&
                      (e.originalEvent.returnValue = e.result);
                  }
                }
              },
              simulate: function(e, t, n, r) {
                var o = l.extend(new l.Event(), n, {
                  type: e,
                  isSimulated: !0,
                  originalEvent: {}
                });
                r ? l.event.trigger(o, null, t) : l.event.dispatch.call(t, o),
                  o.isDefaultPrevented() && n.preventDefault();
              }
            }),
            (l.removeEvent = y.removeEventListener
              ? function(e, t, n) {
                  e.removeEventListener && e.removeEventListener(t, n, !1);
                }
              : function(e, t, n) {
                  var r = "on" + t;
                  e.detachEvent &&
                    (typeof e[r] === E && (e[r] = null), e.detachEvent(r, n));
                }),
            (l.Event = function(e, t) {
              if (!(this instanceof l.Event)) return new l.Event(e, t);
              e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                    e.defaultPrevented ||
                    (void 0 === e.defaultPrevented && !1 === e.returnValue)
                      ? U
                      : F))
                : (this.type = e),
                t && l.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || l.now()),
                (this[l.expando] = !0);
            });
          var D = /^(?:input|select|textarea)$/i,
            O = /^key/,
            j = /^(?:mouse|pointer|contextmenu)|click/,
            M = /^(?:focusinfocus|focusoutblur)$/,
            L = /^([^.]*)(?:\.(.+)|)$/;
          function U() {
            return !0;
          }
          function F() {
            return !1;
          }
          (l.Event.prototype = {
            isDefaultPrevented: F,
            isPropagationStopped: F,
            isImmediatePropagationStopped: F,
            preventDefault: function() {
              var e = this.originalEvent;
              (this.isDefaultPrevented = U),
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : (e.returnValue = !1));
            },
            stopPropagation: function() {
              var e = this.originalEvent;
              (this.isPropagationStopped = U),
                e &&
                  (e.stopPropagation && e.stopPropagation(),
                  (e.cancelBubble = !0));
            },
            stopImmediatePropagation: function() {
              var e = this.originalEvent;
              (this.isImmediatePropagationStopped = U),
                e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
                this.stopPropagation();
            }
          }),
            u.submitBubbles ||
              (l.event.special.submit = {
                setup: function() {
                  if (l.nodeName(this, "form")) return !1;
                  l.event.add(this, "click._submit keypress._submit", function(
                    e
                  ) {
                    var t = e.target,
                      n =
                        l.nodeName(t, "input") || l.nodeName(t, "button")
                          ? t.form
                          : void 0;
                    n &&
                      !l._data(n, "submitBubbles") &&
                      (l.event.add(n, "submit._submit", function(e) {
                        e._submit_bubble = !0;
                      }),
                      l._data(n, "submitBubbles", !0));
                  });
                },
                postDispatch: function(e) {
                  e._submit_bubble &&
                    (delete e._submit_bubble,
                    this.parentNode &&
                      !e.isTrigger &&
                      l.event.simulate("submit", this.parentNode, e, !0));
                },
                teardown: function() {
                  if (l.nodeName(this, "form")) return !1;
                  l.event.remove(this, "._submit");
                }
              }),
            u.changeBubbles ||
              (l.event.special.change = {
                setup: function() {
                  if (D.test(this.nodeName))
                    return (
                      ("checkbox" !== this.type && "radio" !== this.type) ||
                        (l.event.add(this, "propertychange._change", function(
                          e
                        ) {
                          "checked" === e.originalEvent.propertyName &&
                            (this._just_changed = !0);
                        }),
                        l.event.add(this, "click._change", function(e) {
                          this._just_changed &&
                            !e.isTrigger &&
                            (this._just_changed = !1),
                            l.event.simulate("change", this, e, !0);
                        })),
                      !1
                    );
                  l.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    D.test(t.nodeName) &&
                      !l._data(t, "changeBubbles") &&
                      (l.event.add(t, "change._change", function(e) {
                        !this.parentNode ||
                          e.isSimulated ||
                          e.isTrigger ||
                          l.event.simulate("change", this.parentNode, e, !0);
                      }),
                      l._data(t, "changeBubbles", !0));
                  });
                },
                handle: function(e) {
                  var t = e.target;
                  if (
                    this !== t ||
                    e.isSimulated ||
                    e.isTrigger ||
                    ("radio" !== t.type && "checkbox" !== t.type)
                  )
                    return e.handleObj.handler.apply(this, arguments);
                },
                teardown: function() {
                  return (
                    l.event.remove(this, "._change"), !D.test(this.nodeName)
                  );
                }
              }),
            u.focusinBubbles ||
              l.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
                var n = function(e) {
                  l.event.simulate(t, e.target, l.event.fix(e), !0);
                };
                l.event.special[t] = {
                  setup: function() {
                    var r = this.ownerDocument || this,
                      o = l._data(r, t);
                    o || r.addEventListener(e, n, !0),
                      l._data(r, t, (o || 0) + 1);
                  },
                  teardown: function() {
                    var r = this.ownerDocument || this,
                      o = l._data(r, t) - 1;
                    o
                      ? l._data(r, t, o)
                      : (r.removeEventListener(e, n, !0), l._removeData(r, t));
                  }
                };
              }),
            l.fn.extend({
              on: function(e, t, n, r, o) {
                var i, a;
                if ("object" === typeof e) {
                  for (i in ("string" !== typeof t &&
                    ((n = n || t), (t = void 0)),
                  e))
                    this.on(i, t, n, e[i], o);
                  return this;
                }
                if (
                  (null == n && null == r
                    ? ((r = t), (n = t = void 0))
                    : null == r &&
                      ("string" === typeof t
                        ? ((r = n), (n = void 0))
                        : ((r = n), (n = t), (t = void 0))),
                  !1 === r)
                )
                  r = F;
                else if (!r) return this;
                return (
                  1 === o &&
                    ((a = r),
                    (r = function(e) {
                      return l().off(e), a.apply(this, arguments);
                    }),
                    (r.guid = a.guid || (a.guid = l.guid++))),
                  this.each(function() {
                    l.event.add(this, e, r, n, t);
                  })
                );
              },
              one: function(e, t, n, r) {
                return this.on(e, t, n, r, 1);
              },
              off: function(e, t, n) {
                var r, o;
                if (e && e.preventDefault && e.handleObj)
                  return (
                    (r = e.handleObj),
                    l(e.delegateTarget).off(
                      r.namespace ? r.origType + "." + r.namespace : r.origType,
                      r.selector,
                      r.handler
                    ),
                    this
                  );
                if ("object" === typeof e) {
                  for (o in e) this.off(o, t, e[o]);
                  return this;
                }
                return (
                  (!1 !== t && "function" !== typeof t) ||
                    ((n = t), (t = void 0)),
                  !1 === n && (n = F),
                  this.each(function() {
                    l.event.remove(this, e, n, t);
                  })
                );
              },
              trigger: function(e, t) {
                return this.each(function() {
                  l.event.trigger(e, t, this);
                });
              },
              triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return l.event.trigger(e, t, n, !0);
              }
            }),
            (l.fn.delay = function(e, t) {
              return (
                (e = (l.fx && l.fx.speeds[e]) || e),
                (t = t || "fx"),
                this.queue(t, function(t, n) {
                  var r = setTimeout(t, e);
                  n.stop = function() {
                    clearTimeout(r);
                  };
                })
              );
            });
          var H = l.now(),
            K = /\?/,
            z = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
          (l.parseJSON = function(e) {
            if (window.JSON && window.JSON.parse)
              return window.JSON.parse(e + "");
            var t,
              n = null,
              r = l.trim(e + "");
            return r &&
              !l.trim(
                r.replace(z, function(e, r, o, i) {
                  return (
                    t && r && (n = 0),
                    0 === n ? e : ((t = o || r), (n += !i - !o), "")
                  );
                })
              )
              ? Function("return " + r)()
              : l.error("Invalid JSON: " + e);
          }),
            (l.parseXML = function(e) {
              var t, n;
              if (!e || "string" !== typeof e) return null;
              try {
                window.DOMParser
                  ? ((n = new DOMParser()),
                    (t = n.parseFromString(e, "text/xml")))
                  : ((t = new ActiveXObject("Microsoft.XMLDOM")),
                    (t.async = "false"),
                    t.loadXML(e));
              } catch (r) {
                t = void 0;
              }
              return (
                (t &&
                  t.documentElement &&
                  !t.getElementsByTagName("parsererror").length) ||
                  l.error("Invalid XML: " + e),
                t
              );
            });
          var q,
            G,
            X = /#.*$/,
            V = /([?&])_=[^&]*/,
            W = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            $ = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            J = /^(?:GET|HEAD)$/,
            Q = /^\/\//,
            Y = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            Z = {},
            ee = {},
            te = "*/".concat("*");
          try {
            G = location.href;
          } catch (be) {
            (G = y.createElement("a")), (G.href = ""), (G = G.href);
          }
          function ne(e) {
            return function(t, n) {
              "string" !== typeof t && ((n = t), (t = "*"));
              var r,
                o = 0,
                i = t.toLowerCase().match(x) || [];
              if (l.isFunction(n))
                while ((r = i[o++]))
                  "+" === r.charAt(0)
                    ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
                    : (e[r] = e[r] || []).push(n);
            };
          }
          function re(e, t, n, r) {
            var o = {},
              i = e === ee;
            function a(s) {
              var u;
              return (
                (o[s] = !0),
                l.each(e[s] || [], function(e, s) {
                  var c = s(t, n, r);
                  return "string" !== typeof c || i || o[c]
                    ? i
                      ? !(u = c)
                      : void 0
                    : (t.dataTypes.unshift(c), a(c), !1);
                }),
                u
              );
            }
            return a(t.dataTypes[0]) || (!o["*"] && a("*"));
          }
          function oe(e, t) {
            var n,
              r,
              o = l.ajaxSettings.flatOptions || {};
            for (r in t)
              void 0 !== t[r] && ((o[r] ? e : n || (n = {}))[r] = t[r]);
            return n && l.extend(!0, e, n), e;
          }
          function ie(e, t, n) {
            var r,
              o,
              i,
              a,
              s = e.contents,
              u = e.dataTypes;
            while ("*" === u[0])
              u.shift(),
                void 0 === o &&
                  (o = e.mimeType || t.getResponseHeader("Content-Type"));
            if (o)
              for (a in s)
                if (s[a] && s[a].test(o)) {
                  u.unshift(a);
                  break;
                }
            if (u[0] in n) i = u[0];
            else {
              for (a in n) {
                if (!u[0] || e.converters[a + " " + u[0]]) {
                  i = a;
                  break;
                }
                r || (r = a);
              }
              i = i || r;
            }
            if (i) return i !== u[0] && u.unshift(i), n[i];
          }
          function ae(e, t, n, r) {
            var o,
              i,
              a,
              s,
              u,
              c = {},
              l = e.dataTypes.slice();
            if (l[1])
              for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
            i = l.shift();
            while (i)
              if (
                (e.responseFields[i] && (n[e.responseFields[i]] = t),
                !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                (u = i),
                (i = l.shift()),
                i)
              )
                if ("*" === i) i = u;
                else if ("*" !== u && u !== i) {
                  if (((a = c[u + " " + i] || c["* " + i]), !a))
                    for (o in c)
                      if (
                        ((s = o.split(" ")),
                        s[1] === i &&
                          ((a = c[u + " " + s[0]] || c["* " + s[0]]), a))
                      ) {
                        !0 === a
                          ? (a = c[o])
                          : !0 !== c[o] && ((i = s[0]), l.unshift(s[1]));
                        break;
                      }
                  if (!0 !== a)
                    if (a && e["throws"]) t = a(t);
                    else
                      try {
                        t = a(t);
                      } catch (be) {
                        return {
                          state: "parsererror",
                          error: a ? be : "No conversion from " + u + " to " + i
                        };
                      }
                }
            return { state: "success", data: t };
          }
          (q = Y.exec(G.toLowerCase()) || []),
            l.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: G,
                type: "GET",
                isLocal: $.test(q[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                  "*": te,
                  text: "text/plain",
                  html: "text/html",
                  xml: "application/xml, text/xml",
                  json: "application/json, text/javascript"
                },
                contents: { xml: /xml/, html: /html/, json: /json/ },
                responseFields: {
                  xml: "responseXML",
                  text: "responseText",
                  json: "responseJSON"
                },
                converters: {
                  "* text": String,
                  "text html": !0,
                  "text json": l.parseJSON,
                  "text xml": l.parseXML
                },
                flatOptions: { url: !0, context: !0 }
              },
              ajaxSetup: function(e, t) {
                return t ? oe(oe(e, l.ajaxSettings), t) : oe(l.ajaxSettings, e);
              },
              ajaxPrefilter: ne(Z),
              ajaxTransport: ne(ee),
              ajax: function(e, t) {
                "object" === typeof e && ((t = e), (e = void 0)), (t = t || {});
                var n,
                  r,
                  o,
                  i,
                  a,
                  s,
                  u,
                  c,
                  d = l.ajaxSetup({}, t),
                  f = d.context || d,
                  p = d.context && (f.nodeType || f.jquery) ? l(f) : l.event,
                  h = l.Deferred(),
                  g = l.Callbacks("once memory"),
                  m = d.statusCode || {},
                  y = {},
                  v = {},
                  C = 0,
                  b = "canceled",
                  w = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                      var t;
                      if (2 === C) {
                        if (!c) {
                          c = {};
                          while ((t = W.exec(i))) c[t[1].toLowerCase()] = t[2];
                        }
                        t = c[e.toLowerCase()];
                      }
                      return null == t ? null : t;
                    },
                    getAllResponseHeaders: function() {
                      return 2 === C ? i : null;
                    },
                    setRequestHeader: function(e, t) {
                      var n = e.toLowerCase();
                      return C || ((e = v[n] = v[n] || e), (y[e] = t)), this;
                    },
                    overrideMimeType: function(e) {
                      return C || (d.mimeType = e), this;
                    },
                    statusCode: function(e) {
                      var t;
                      if (e)
                        if (C < 2) for (t in e) m[t] = [m[t], e[t]];
                        else w.always(e[w.status]);
                      return this;
                    },
                    abort: function(e) {
                      var t = e || b;
                      return u && u.abort(t), k(0, t), this;
                    }
                  };
                if (
                  ((h.promise(w).complete = g.add),
                  (w.success = w.done),
                  (w.error = w.fail),
                  (d.url = ((e || d.url || G) + "")
                    .replace(X, "")
                    .replace(Q, q[1] + "//")),
                  (d.type = t.method || t.type || d.method || d.type),
                  (d.dataTypes = l
                    .trim(d.dataType || "*")
                    .toLowerCase()
                    .match(x) || [""]),
                  null == d.crossDomain &&
                    ((n = Y.exec(d.url.toLowerCase())),
                    (d.crossDomain = !(
                      !n ||
                      (n[1] === q[1] &&
                        n[2] === q[2] &&
                        (n[3] || ("http:" === n[1] ? "80" : "443")) ===
                          (q[3] || ("http:" === q[1] ? "80" : "443")))
                    ))),
                  d.data &&
                    d.processData &&
                    "string" !== typeof d.data &&
                    (d.data = l.param(d.data, d.traditional)),
                  re(Z, d, t, w),
                  2 === C)
                )
                  return w;
                for (r in ((s = d.global),
                s && 0 === l.active++ && l.event.trigger("ajaxStart"),
                (d.type = d.type.toUpperCase()),
                (d.hasContent = !J.test(d.type)),
                (o = d.url),
                d.hasContent ||
                  (d.data &&
                    ((o = d.url += (K.test(o) ? "&" : "?") + d.data),
                    delete d.data),
                  !1 === d.cache &&
                    (d.url = V.test(o)
                      ? o.replace(V, "$1_=" + H++)
                      : o + (K.test(o) ? "&" : "?") + "_=" + H++)),
                d.ifModified &&
                  (l.lastModified[o] &&
                    w.setRequestHeader("If-Modified-Since", l.lastModified[o]),
                  l.etag[o] && w.setRequestHeader("If-None-Match", l.etag[o])),
                ((d.data && d.hasContent && !1 !== d.contentType) ||
                  t.contentType) &&
                  w.setRequestHeader("Content-Type", d.contentType),
                d.headers))
                  w.setRequestHeader(r, d.headers[r]);
                if (
                  d.beforeSend &&
                  (!1 === d.beforeSend.call(f, w, d) || 2 === C)
                )
                  return w.abort();
                for (r in ((b = "abort"),
                { success: 1, error: 1, complete: 1 }))
                  w[r](d[r]);
                if (((u = re(ee, d, t, w)), u)) {
                  (w.readyState = 1),
                    s && p.trigger("ajaxSend", [w, d]),
                    d.async &&
                      d.timeout > 0 &&
                      (a = setTimeout(function() {
                        w.abort("timeout");
                      }, d.timeout));
                  try {
                    (C = 1), u.send(y, k);
                  } catch (be) {
                    if (!(C < 2)) throw be;
                    k(-1, be);
                  }
                } else k(-1, "No Transport");
                function k(e, t, n, r) {
                  var c,
                    y,
                    v,
                    b,
                    x,
                    k = t;
                  2 !== C &&
                    ((C = 2),
                    a && clearTimeout(a),
                    (u = void 0),
                    (i = r || ""),
                    (w.readyState = e > 0 ? 4 : 0),
                    (c = (e >= 200 && e < 300) || 304 === e),
                    n && (b = ie(d, w, n)),
                    (b = ae(d, b, w, c)),
                    c
                      ? (d.ifModified &&
                          ((x = w.getResponseHeader("Last-Modified")),
                          x && (l.lastModified[o] = x),
                          (x = w.getResponseHeader("etag")),
                          x && (l.etag[o] = x)),
                        204 === e || "HEAD" === d.type
                          ? (k = "nocontent")
                          : 304 === e
                            ? (k = "notmodified")
                            : ((k = b.state),
                              (y = b.data),
                              (v = b.error),
                              (c = !v)))
                      : ((v = k),
                        (!e && k) || ((k = "error"), e < 0 && (e = 0))),
                    (w.status = e),
                    (w.statusText = (t || k) + ""),
                    c
                      ? h.resolveWith(f, [y, k, w])
                      : h.rejectWith(f, [w, k, v]),
                    w.statusCode(m),
                    (m = void 0),
                    s &&
                      p.trigger(c ? "ajaxSuccess" : "ajaxError", [
                        w,
                        d,
                        c ? y : v
                      ]),
                    g.fireWith(f, [w, k]),
                    s &&
                      (p.trigger("ajaxComplete", [w, d]),
                      --l.active || l.event.trigger("ajaxStop")));
                }
                return w;
              },
              getJSON: function(e, t, n) {
                return l.get(e, t, n, "json");
              },
              getScript: function(e, t) {
                return l.get(e, void 0, t, "script");
              }
            }),
            l.each(["get", "post"], function(e, t) {
              l[t] = function(e, n, r, o) {
                return (
                  l.isFunction(n) && ((o = o || r), (r = n), (n = void 0)),
                  l.ajax({ url: e, type: t, dataType: o, data: n, success: r })
                );
              };
            }),
            l.each(
              [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend"
              ],
              function(e, t) {
                l.fn[t] = function(e) {
                  return this.on(t, e);
                };
              }
            ),
            (l._evalUrl = function(e) {
              return l.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
              });
            });
          var se = /%20/g,
            ue = /\[\]$/,
            ce = /\r?\n/g,
            le = /^(?:submit|button|image|reset|file)$/i,
            de = /^(?:input|select|textarea|keygen)/i;
          function fe(e, t, n, r) {
            var o;
            if (l.isArray(t))
              l.each(t, function(t, o) {
                n || ue.test(e)
                  ? r(e, o)
                  : fe(
                      e + "[" + ("object" === typeof o ? t : "") + "]",
                      o,
                      n,
                      r
                    );
              });
            else if (n || "object" !== l.type(t)) r(e, t);
            else for (o in t) fe(e + "[" + o + "]", t[o], n, r);
          }
          (l.param = function(e, t) {
            var n,
              r = [],
              o = function(e, t) {
                (t = l.isFunction(t) ? t() : null == t ? "" : t),
                  (r[r.length] =
                    encodeURIComponent(e) + "=" + encodeURIComponent(t));
              };
            if (
              (void 0 === t &&
                (t = l.ajaxSettings && l.ajaxSettings.traditional),
              l.isArray(e) || (e.jquery && !l.isPlainObject(e)))
            )
              l.each(e, function() {
                o(this.name, this.value);
              });
            else for (n in e) fe(n, e[n], t, o);
            return r.join("&").replace(se, "+");
          }),
            l.fn.extend({
              serialize: function() {
                return l.param(this.serializeArray());
              },
              serializeArray: function() {
                return this.map(function() {
                  var e = l.prop(this, "elements");
                  return e ? l.makeArray(e) : this;
                })
                  .filter(function() {
                    var e = this.type;
                    return (
                      this.name &&
                      !l(this).is(":disabled") &&
                      de.test(this.nodeName) &&
                      !le.test(e) &&
                      (this.checked || !rcheckableType.test(e))
                    );
                  })
                  .map(function(e, t) {
                    var n = l(this).val();
                    return null == n
                      ? null
                      : l.isArray(n)
                        ? l.map(n, function(e) {
                            return {
                              name: t.name,
                              value: e.replace(ce, "\r\n")
                            };
                          })
                        : { name: t.name, value: n.replace(ce, "\r\n") };
                  })
                  .get();
              }
            }),
            (l.ajaxSettings.xhr =
              void 0 !== window.ActiveXObject
                ? function() {
                    return (
                      (!this.isLocal &&
                        /^(get|post|head|put|delete|options)$/i.test(
                          this.type
                        ) &&
                        me()) ||
                      ye()
                    );
                  }
                : me);
          var pe = 0,
            he = {},
            ge = l.ajaxSettings.xhr();
          function me() {
            try {
              return new window.XMLHttpRequest();
            } catch (be) {}
          }
          function ye() {
            try {
              return new window.ActiveXObject("Microsoft.XMLHTTP");
            } catch (be) {}
          }
          window.ActiveXObject &&
            l(window).on("unload", function() {
              for (var e in he) he[e](void 0, !0);
            }),
            (u.cors = !!ge && "withCredentials" in ge),
            (ge = u.ajax = !!ge),
            ge &&
              l.ajaxTransport(function(e) {
                var t;
                if (!e.crossDomain || u.cors)
                  return {
                    send: function(n, r) {
                      var o,
                        i = e.xhr(),
                        a = ++pe;
                      if (
                        (i.open(e.type, e.url, e.async, e.username, e.password),
                        e.xhrFields)
                      )
                        for (o in e.xhrFields) i[o] = e.xhrFields[o];
                      for (o in (e.mimeType &&
                        i.overrideMimeType &&
                        i.overrideMimeType(e.mimeType),
                      e.crossDomain ||
                        n["X-Requested-With"] ||
                        (n["X-Requested-With"] = "XMLHttpRequest"),
                      n))
                        void 0 !== n[o] && i.setRequestHeader(o, n[o] + "");
                      i.upload &&
                        e.progress &&
                        (i.upload.onprogress = e.progress),
                        i.send((e.hasContent && (e.body || e.data)) || null),
                        (t = function(n, o) {
                          var s, u, c;
                          if (t && (o || 4 === i.readyState))
                            if (
                              (delete he[a],
                              (t = void 0),
                              (i.onreadystatechange = l.noop),
                              o)
                            )
                              4 !== i.readyState && i.abort();
                            else {
                              (c = {}),
                                (s = i.status),
                                "string" === typeof i.responseText &&
                                  (c.text = i.responseText);
                              try {
                                u = i.statusText;
                              } catch (be) {
                                u = "";
                              }
                              s || !e.isLocal || e.crossDomain
                                ? 1223 === s && (s = 204)
                                : (s = c.text ? 200 : 404);
                            }
                          c && r(s, u, c, i.getAllResponseHeaders());
                        }),
                        e.async
                          ? 4 === i.readyState
                            ? setTimeout(t)
                            : (i.onreadystatechange = he[a] = t)
                          : t();
                    },
                    abort: function() {
                      t && t(void 0, !0);
                    }
                  };
              }),
            l.ajaxSetup({
              accepts: {
                script:
                  "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
              },
              contents: { script: /(?:java|ecma)script/ },
              converters: {
                "text script": function(e) {
                  return l.globalEval(e), e;
                }
              }
            }),
            l.ajaxPrefilter("script", function(e) {
              void 0 === e.cache && (e.cache = !1),
                e.crossDomain && ((e.type = "GET"), (e.global = !1));
            }),
            l.ajaxTransport("script", function(e) {
              if (e.crossDomain) {
                var t,
                  n = y.head || l("head")[0] || y.documentElement;
                return {
                  send: function(r, o) {
                    (t = y.createElement("script")),
                      (t.async = !0),
                      e.scriptCharset && (t.charset = e.scriptCharset),
                      (t.src = e.url),
                      (t.onload = t.onreadystatechange = function(e, n) {
                        (n ||
                          !t.readyState ||
                          /loaded|complete/.test(t.readyState)) &&
                          ((t.onload = t.onreadystatechange = null),
                          t.parentNode && t.parentNode.removeChild(t),
                          (t = null),
                          n || o(200, "success"));
                      }),
                      n.insertBefore(t, n.firstChild);
                  },
                  abort: function() {
                    t && t.onload(void 0, !0);
                  }
                };
              }
            });
          var ve = [],
            Ce = /(=)\?(?=&|$)|\?\?/;
          return (
            l.ajaxSetup({
              jsonp: "callback",
              jsonpCallback: function() {
                var e = ve.pop() || l.expando + "_" + H++;
                return (this[e] = !0), e;
              }
            }),
            l.ajaxPrefilter("json jsonp", function(e, t, n) {
              var r,
                o,
                i,
                a =
                  !1 !== e.jsonp &&
                  (Ce.test(e.url)
                    ? "url"
                    : "string" === typeof e.data &&
                      !(e.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                      Ce.test(e.data) &&
                      "data");
              if (a || "jsonp" === e.dataTypes[0])
                return (
                  (r = e.jsonpCallback = l.isFunction(e.jsonpCallback)
                    ? e.jsonpCallback()
                    : e.jsonpCallback),
                  a
                    ? (e[a] = e[a].replace(Ce, "$1" + r))
                    : !1 !== e.jsonp &&
                      (e.url +=
                        (K.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                  (e.converters["script json"] = function() {
                    return i || l.error(r + " was not called"), i[0];
                  }),
                  (e.dataTypes[0] = "json"),
                  (o = window[r]),
                  (window[r] = function() {
                    i = arguments;
                  }),
                  n.always(function() {
                    (window[r] = o),
                      e[r] && ((e.jsonpCallback = t.jsonpCallback), ve.push(r)),
                      i && l.isFunction(o) && o(i[0]),
                      (i = o = void 0);
                  }),
                  "script"
                );
            }),
            (l.parseHTML = function(e, t, n) {
              if (!e || "string" !== typeof e) return null;
              "boolean" === typeof t && ((n = t), (t = !1)), (t = t || y);
              var r = rsingleTag.exec(e),
                o = !n && [];
              return r
                ? [t.createElement(r[1])]
                : ((r = l.buildFragment([e], t, o)),
                  o && o.length && l(o).remove(),
                  l.merge([], r.childNodes));
            }),
            l
          );
        })(),
        i = function(e, t) {
          if (
            ((e = o.extend(!0, { headers: {}, qs: {} }, e)),
            (e.type = e.method),
            delete e.method,
            e.onProgress && ((e.progress = e.onProgress), delete e.onProgress),
            e.qs)
          ) {
            var n = r.stringify(e.qs);
            n && (e.url += (-1 === e.url.indexOf("?") ? "?" : "&") + n),
              delete e.qs;
          }
          if (
            (e.json &&
              ((e.data = e.body),
              delete e.json,
              delete e.body,
              !e.headers && (e.headers = {}),
              (e.headers["Content-Type"] = "application/json")),
            e.body &&
              (e.body instanceof window.Blob ||
                ((e.data = e.body), delete e.body)),
            e.headers)
          ) {
            var i = e.headers;
            delete e.headers,
              (e.beforeSend = function(e) {
                for (var t in i)
                  i.hasOwnProperty(t) &&
                    "content-length" !== t.toLowerCase() &&
                    "user-agent" !== t.toLowerCase() &&
                    "origin" !== t.toLowerCase() &&
                    "host" !== t.toLowerCase() &&
                    e.setRequestHeader(t, i[t]);
              });
          }
          var a = function(e) {
            var t = {};
            return (
              e
                .getAllResponseHeaders()
                .trim()
                .split("\n")
                .forEach(function(e) {
                  if (e) {
                    var n = e.indexOf(":"),
                      r = e
                        .substr(0, n)
                        .trim()
                        .toLowerCase(),
                      o = e.substr(n + 1).trim();
                    t[r] = o;
                  }
                }),
              { statusCode: e.status, statusMessage: e.statusText, headers: t }
            );
          };
          return (
            (e.success = function(e, n, r) {
              t(null, a(r), e);
            }),
            (e.error = function(e) {
              e.responseText
                ? t(null, a(e), e.responseText)
                : t(e.statusText, a(e), e.responseText);
            }),
            (e.dataType = "text"),
            o.ajax(e)
          );
        };
      e.exports = i;
    },
    b383: function(e, t, n) {
      "use strict";
      (t.decode = t.parse = n("91dd")), (t.encode = t.stringify = n("e099"));
    },
    c39a: function(e, t, n) {
      !(function(t, n) {
        e.exports = n();
      })(window, function() {
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
            n((n.s = 2))
          );
        })({
          2: function(e, t) {
            e.exports = function(e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "",
                n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : void 0,
                r = { message: "", error: 0, validate: !0 };
              if ("[object File]" === Object.prototype.toString.call(e)) {
                void 0 === n && (n = 1024e3);
                var o = !0,
                  i = "",
                  a = e.name.lastIndexOf(".");
                -1 !== a && (i = e.name.substring(a));
                var s = i ? i.substring(1) : e.type && e.type.split("/")[0];
                e.type &&
                  t &&
                  ((o = t.split(",").some(function(t) {
                    return (
                      (t = t.trim()) &&
                      (new RegExp("^" + t).test(e.type) ||
                        new RegExp("^" + t).test(i))
                    );
                  })),
                  void 0 === n &&
                    (/^\.(png|jpe?g|gif|svg|webp)/.test(i) ||
                    /^image/.test(e.type)
                      ? (n = 10240)
                      : (/^\.(ogg|mp3|wav|flac|aac)/.test(i) ||
                          /^audio/.test(e.type)) &&
                        (n = 102400)));
                var u = !0;
                if (
                  (n && (u = e.size / 1024 < n),
                  o ||
                    ((r.message = "只能上传" + s + "!"),
                    (r.error = 1),
                    (r.validate = !1)),
                  !u)
                ) {
                  var c = n >= 1024 ? n / 1024 + "M" : n + "KB";
                  (r.message = "上传" + s + "大小不能超过" + c + "!"),
                    (r.error = 2),
                    (r.validate = !1);
                }
              } else
                (r.message = "file参数必须为File数据类型"),
                  (r.error = 3),
                  (r.validate = !1);
              return r;
            };
          }
        });
      });
    },
    d61d: function(e, t) {
      var n = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
        r = new RegExp(
          "[\\-\\.0-9" +
            n.source.slice(1, -1) +
            "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"
        ),
        o = new RegExp(
          "^" + n.source + r.source + "*(?::" + n.source + r.source + "*)?$"
        ),
        i = 0,
        a = 1,
        s = 2,
        u = 3,
        c = 4,
        l = 5,
        d = 6,
        f = 7;
      function p() {}
      function h(e, t, n, r, o) {
        function i(e) {
          if (e > 65535) {
            e -= 65536;
            var t = 55296 + (e >> 10),
              n = 56320 + (1023 & e);
            return String.fromCharCode(t, n);
          }
          return String.fromCharCode(e);
        }
        function a(e) {
          var t = e.slice(1, -1);
          return t in n
            ? n[t]
            : "#" === t.charAt(0)
              ? i(parseInt(t.substr(1).replace("x", "0x")))
              : (o.error("entity not found:" + e), e);
        }
        function s(t) {
          if (t > b) {
            var n = e.substring(b, t).replace(/&#?\w+;/g, a);
            f && u(b), r.characters(n, 0, t - b), (b = t);
          }
        }
        function u(t, n) {
          while (t >= l && (n = d.exec(e)))
            (c = n.index), (l = c + n[0].length), f.lineNumber++;
          f.columnNumber = t - c + 1;
        }
        var c = 0,
          l = 0,
          d = /.*(?:\r\n?|\n)|.*$/g,
          f = r.locator,
          p = [{ currentNSMap: t }],
          h = {},
          b = 0;
        while (1) {
          try {
            var S = e.indexOf("<", b);
            if (S < 0) {
              if (!e.substr(b).match(/^\s*$/)) {
                var T = r.doc,
                  R = T.createTextNode(e.substr(b));
                T.appendChild(R), (r.currentElement = R);
              }
              return;
            }
            switch ((S > b && s(S), e.charAt(S + 1))) {
              case "/":
                var E = e.indexOf(">", S + 3),
                  _ = e.substring(S + 2, E),
                  N = p.pop();
                E < 0
                  ? ((_ = e.substring(S + 2).replace(/[\s<].*/, "")),
                    o.error(
                      "end tag name: " + _ + " is not complete:" + N.tagName
                    ),
                    (E = S + 1 + _.length))
                  : _.match(/\s</) &&
                    ((_ = _.replace(/[\s<].*/, "")),
                    o.error("end tag name: " + _ + " maybe not complete"),
                    (E = S + 1 + _.length));
                var A = N.localNSMap,
                  B = N.tagName == _,
                  I =
                    B ||
                    (N.tagName && N.tagName.toLowerCase() == _.toLowerCase());
                if (I) {
                  if ((r.endElement(N.uri, N.localName, _), A))
                    for (var P in A) r.endPrefixMapping(P);
                  B ||
                    o.fatalError(
                      "end tag name: " +
                        _ +
                        " is not match the current start tagName:" +
                        N.tagName
                    );
                } else p.push(N);
                E++;
                break;
              case "?":
                f && u(S), (E = w(e, S, r));
                break;
              case "!":
                f && u(S), (E = x(e, S, r, o));
                break;
              default:
                f && u(S);
                var D = new k(),
                  O = p[p.length - 1].currentNSMap,
                  j = ((E = m(e, S, D, O, a, o)), D.length);
                if (
                  (!D.closed &&
                    C(e, E, D.tagName, h) &&
                    ((D.closed = !0),
                    n.nbsp || o.warning("unclosed xml attribute")),
                  f && j)
                ) {
                  for (var M = g(f, {}), L = 0; L < j; L++) {
                    var U = D[L];
                    u(U.offset), (U.locator = g(f, {}));
                  }
                  (r.locator = M), y(D, r, O) && p.push(D), (r.locator = f);
                } else y(D, r, O) && p.push(D);
                "http://www.w3.org/1999/xhtml" !== D.uri || D.closed
                  ? E++
                  : (E = v(e, E, D.tagName, a, r));
            }
          } catch (F) {
            o.error("element parse error: " + F), (E = -1);
          }
          E > b ? (b = E) : s(Math.max(S, b) + 1);
        }
      }
      function g(e, t) {
        return (
          (t.lineNumber = e.lineNumber), (t.columnNumber = e.columnNumber), t
        );
      }
      function m(e, t, n, r, o, p) {
        var h,
          g = ++t,
          m = i;
        while (1) {
          var y = e.charAt(g);
          switch (y) {
            case "=":
              if (m === a) (h = e.slice(t, g)), (m = u);
              else {
                if (m !== s)
                  throw new Error("attribute equal must after attrName");
                m = u;
              }
              break;
            case "'":
            case '"':
              if (m === u || m === a) {
                if (
                  (m === a &&
                    (p.warning('attribute value must after "="'),
                    (h = e.slice(t, g))),
                  (t = g + 1),
                  (g = e.indexOf(y, t)),
                  !(g > 0))
                )
                  throw new Error("attribute value no end '" + y + "' match");
                (v = e.slice(t, g).replace(/&#?\w+;/g, o)),
                  n.add(h, v, t - 1),
                  (m = l);
              } else {
                if (m != c) throw new Error('attribute value must after "="');
                (v = e.slice(t, g).replace(/&#?\w+;/g, o)),
                  n.add(h, v, t),
                  p.warning(
                    'attribute "' + h + '" missed start quot(' + y + ")!!"
                  ),
                  (t = g + 1),
                  (m = l);
              }
              break;
            case "/":
              switch (m) {
                case i:
                  n.setTagName(e.slice(t, g));
                case l:
                case d:
                case f:
                  (m = f), (n.closed = !0);
                case c:
                case a:
                case s:
                  break;
                default:
                  throw new Error("attribute invalid close char('/')");
              }
              break;
            case "":
              return (
                p.error("unexpected end of input"),
                m == i && n.setTagName(e.slice(t, g)),
                g
              );
            case ">":
              switch (m) {
                case i:
                  n.setTagName(e.slice(t, g));
                case l:
                case d:
                case f:
                  break;
                case c:
                case a:
                  (v = e.slice(t, g)),
                    "/" === v.slice(-1) &&
                      ((n.closed = !0), (v = v.slice(0, -1)));
                case s:
                  m === s && (v = h),
                    m == c
                      ? (p.warning('attribute "' + v + '" missed quot(")!!'),
                        n.add(h, v.replace(/&#?\w+;/g, o), t))
                      : (("http://www.w3.org/1999/xhtml" === r[""] &&
                          v.match(/^(?:disabled|checked|selected)$/i)) ||
                          p.warning(
                            'attribute "' +
                              v +
                              '" missed value!! "' +
                              v +
                              '" instead!!'
                          ),
                        n.add(v, v, t));
                  break;
                case u:
                  throw new Error("attribute value missed!!");
              }
              return g;
            case "":
              y = " ";
            default:
              if (y <= " ")
                switch (m) {
                  case i:
                    n.setTagName(e.slice(t, g)), (m = d);
                    break;
                  case a:
                    (h = e.slice(t, g)), (m = s);
                    break;
                  case c:
                    var v = e.slice(t, g).replace(/&#?\w+;/g, o);
                    p.warning('attribute "' + v + '" missed quot(")!!'),
                      n.add(h, v, t);
                  case l:
                    m = d;
                    break;
                }
              else
                switch (m) {
                  case s:
                    n.tagName;
                    ("http://www.w3.org/1999/xhtml" === r[""] &&
                      h.match(/^(?:disabled|checked|selected)$/i)) ||
                      p.warning(
                        'attribute "' +
                          h +
                          '" missed value!! "' +
                          h +
                          '" instead2!!'
                      ),
                      n.add(h, h, t),
                      (t = g),
                      (m = a);
                    break;
                  case l:
                    p.warning('attribute space is required"' + h + '"!!');
                  case d:
                    (m = a), (t = g);
                    break;
                  case u:
                    (m = c), (t = g);
                    break;
                  case f:
                    throw new Error(
                      "elements closed character '/' and '>' must be connected to"
                    );
                }
          }
          g++;
        }
      }
      function y(e, t, n) {
        var r = e.tagName,
          o = null,
          i = e.length;
        while (i--) {
          var a = e[i],
            s = a.qName,
            u = a.value,
            c = s.indexOf(":");
          if (c > 0)
            var l = (a.prefix = s.slice(0, c)),
              d = s.slice(c + 1),
              f = "xmlns" === l && d;
          else (d = s), (l = null), (f = "xmlns" === s && "");
          (a.localName = d),
            !1 !== f &&
              (null == o && ((o = {}), b(n, (n = {}))),
              (n[f] = o[f] = u),
              (a.uri = "http://www.w3.org/2000/xmlns/"),
              t.startPrefixMapping(f, u));
        }
        i = e.length;
        while (i--) {
          a = e[i];
          l = a.prefix;
          l &&
            ("xml" === l && (a.uri = "http://www.w3.org/XML/1998/namespace"),
            "xmlns" !== l && (a.uri = n[l || ""]));
        }
        c = r.indexOf(":");
        c > 0
          ? ((l = e.prefix = r.slice(0, c)), (d = e.localName = r.slice(c + 1)))
          : ((l = null), (d = e.localName = r));
        var p = (e.uri = n[l || ""]);
        if ((t.startElement(p, d, r, e), !e.closed))
          return (e.currentNSMap = n), (e.localNSMap = o), !0;
        if ((t.endElement(p, d, r), o)) for (l in o) t.endPrefixMapping(l);
      }
      function v(e, t, n, r, o) {
        if (/^(?:script|textarea)$/i.test(n)) {
          var i = e.indexOf("</" + n + ">", t),
            a = e.substring(t + 1, i);
          if (/[&<]/.test(a))
            return /^script$/i.test(n)
              ? (o.characters(a, 0, a.length), i)
              : ((a = a.replace(/&#?\w+;/g, r)),
                o.characters(a, 0, a.length),
                i);
        }
        return t + 1;
      }
      function C(e, t, n, r) {
        var o = r[n];
        return (
          null == o &&
            ((o = e.lastIndexOf("</" + n + ">")),
            o < t && (o = e.lastIndexOf("</" + n)),
            (r[n] = o)),
          o < t
        );
      }
      function b(e, t) {
        for (var n in e) t[n] = e[n];
      }
      function x(e, t, n, r) {
        var o = e.charAt(t + 2);
        switch (o) {
          case "-":
            if ("-" === e.charAt(t + 3)) {
              var i = e.indexOf("--\x3e", t + 4);
              return i > t
                ? (n.comment(e, t + 4, i - t - 4), i + 3)
                : (r.error("Unclosed comment"), -1);
            }
            return -1;
          default:
            if ("CDATA[" == e.substr(t + 3, 6)) {
              i = e.indexOf("]]>", t + 9);
              return (
                n.startCDATA(),
                n.characters(e, t + 9, i - t - 9),
                n.endCDATA(),
                i + 3
              );
            }
            var a = T(e, t),
              s = a.length;
            if (s > 1 && /!doctype/i.test(a[0][0])) {
              var u = a[1][0],
                c = s > 3 && /^public$/i.test(a[2][0]) && a[3][0],
                l = s > 4 && a[4][0],
                d = a[s - 1];
              return (
                n.startDTD(
                  u,
                  c && c.replace(/^(['"])(.*?)\1$/, "$2"),
                  l && l.replace(/^(['"])(.*?)\1$/, "$2")
                ),
                n.endDTD(),
                d.index + d[0].length
              );
            }
        }
        return -1;
      }
      function w(e, t, n) {
        var r = e.indexOf("?>", t);
        if (r) {
          var o = e.substring(t, r).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
          if (o) {
            o[0].length;
            return n.processingInstruction(o[1], o[2]), r + 2;
          }
          return -1;
        }
        return -1;
      }
      function k(e) {}
      function S(e, t) {
        return (e.__proto__ = t), e;
      }
      function T(e, t) {
        var n,
          r = [],
          o = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
        (o.lastIndex = t), o.exec(e);
        while ((n = o.exec(e))) if ((r.push(n), n[1])) return r;
      }
      (p.prototype = {
        parse: function(e, t, n) {
          var r = this.domBuilder;
          r.startDocument(),
            b(t, (t = {})),
            h(e, t, n, r, this.errorHandler),
            r.endDocument();
        }
      }),
        (k.prototype = {
          setTagName: function(e) {
            if (!o.test(e)) throw new Error("invalid tagName:" + e);
            this.tagName = e;
          },
          add: function(e, t, n) {
            if (!o.test(e)) throw new Error("invalid attribute:" + e);
            this[this.length++] = { qName: e, value: t, offset: n };
          },
          length: 0,
          getLocalName: function(e) {
            return this[e].localName;
          },
          getLocator: function(e) {
            return this[e].locator;
          },
          getQName: function(e) {
            return this[e].qName;
          },
          getURI: function(e) {
            return this[e].uri;
          },
          getValue: function(e) {
            return this[e].value;
          }
        }),
        S({}, S.prototype) instanceof S ||
          (S = function(e, t) {
            function n() {}
            for (t in ((n.prototype = t), (n = new n()), e)) n[t] = e[t];
            return n;
          }),
        (t.XMLReader = p);
    },
    d779: function(e, t, n) {
      var r =
        r ||
        (function(e, t) {
          var n = {},
            r = (n.lib = {}),
            o = function() {},
            i = (r.Base = {
              extend: function(e) {
                o.prototype = this;
                var t = new o();
                return (
                  e && t.mixIn(e),
                  t.hasOwnProperty("init") ||
                    (t.init = function() {
                      t.$super.init.apply(this, arguments);
                    }),
                  (t.init.prototype = t),
                  (t.$super = this),
                  t
                );
              },
              create: function() {
                var e = this.extend();
                return e.init.apply(e, arguments), e;
              },
              init: function() {},
              mixIn: function(e) {
                for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                e.hasOwnProperty("toString") && (this.toString = e.toString);
              },
              clone: function() {
                return this.init.prototype.extend(this);
              }
            }),
            a = (r.WordArray = i.extend({
              init: function(e, n) {
                (e = this.words = e || []),
                  (this.sigBytes = n != t ? n : 4 * e.length);
              },
              toString: function(e) {
                return (e || u).stringify(this);
              },
              concat: function(e) {
                var t = this.words,
                  n = e.words,
                  r = this.sigBytes;
                if (((e = e.sigBytes), this.clamp(), r % 4))
                  for (var o = 0; o < e; o++)
                    t[(r + o) >>> 2] |=
                      ((n[o >>> 2] >>> (24 - (o % 4) * 8)) & 255) <<
                      (24 - ((r + o) % 4) * 8);
                else if (65535 < n.length)
                  for (o = 0; o < e; o += 4) t[(r + o) >>> 2] = n[o >>> 2];
                else t.push.apply(t, n);
                return (this.sigBytes += e), this;
              },
              clamp: function() {
                var t = this.words,
                  n = this.sigBytes;
                (t[n >>> 2] &= 4294967295 << (32 - (n % 4) * 8)),
                  (t.length = e.ceil(n / 4));
              },
              clone: function() {
                var e = i.clone.call(this);
                return (e.words = this.words.slice(0)), e;
              },
              random: function(t) {
                for (var n = [], r = 0; r < t; r += 4)
                  n.push((4294967296 * e.random()) | 0);
                return new a.init(n, t);
              }
            })),
            s = (n.enc = {}),
            u = (s.Hex = {
              stringify: function(e) {
                var t = e.words;
                e = e.sigBytes;
                for (var n = [], r = 0; r < e; r++) {
                  var o = (t[r >>> 2] >>> (24 - (r % 4) * 8)) & 255;
                  n.push((o >>> 4).toString(16)), n.push((15 & o).toString(16));
                }
                return n.join("");
              },
              parse: function(e) {
                for (var t = e.length, n = [], r = 0; r < t; r += 2)
                  n[r >>> 3] |=
                    parseInt(e.substr(r, 2), 16) << (24 - (r % 8) * 4);
                return new a.init(n, t / 2);
              }
            }),
            c = (s.Latin1 = {
              stringify: function(e) {
                var t = e.words;
                e = e.sigBytes;
                for (var n = [], r = 0; r < e; r++)
                  n.push(
                    String.fromCharCode(
                      (t[r >>> 2] >>> (24 - (r % 4) * 8)) & 255
                    )
                  );
                return n.join("");
              },
              parse: function(e) {
                for (var t = e.length, n = [], r = 0; r < t; r++)
                  n[r >>> 2] |= (255 & e.charCodeAt(r)) << (24 - (r % 4) * 8);
                return new a.init(n, t);
              }
            }),
            l = (s.Utf8 = {
              stringify: function(e) {
                try {
                  return decodeURIComponent(escape(c.stringify(e)));
                } catch (t) {
                  throw Error("Malformed UTF-8 data");
                }
              },
              parse: function(e) {
                return c.parse(unescape(encodeURIComponent(e)));
              }
            }),
            d = (r.BufferedBlockAlgorithm = i.extend({
              reset: function() {
                (this._data = new a.init()), (this._nDataBytes = 0);
              },
              _append: function(e) {
                "string" == typeof e && (e = l.parse(e)),
                  this._data.concat(e),
                  (this._nDataBytes += e.sigBytes);
              },
              _process: function(t) {
                var n = this._data,
                  r = n.words,
                  o = n.sigBytes,
                  i = this.blockSize,
                  s = o / (4 * i);
                s = t ? e.ceil(s) : e.max((0 | s) - this._minBufferSize, 0);
                if (((t = s * i), (o = e.min(4 * t, o)), t)) {
                  for (var u = 0; u < t; u += i) this._doProcessBlock(r, u);
                  (u = r.splice(0, t)), (n.sigBytes -= o);
                }
                return new a.init(u, o);
              },
              clone: function() {
                var e = i.clone.call(this);
                return (e._data = this._data.clone()), e;
              },
              _minBufferSize: 0
            }));
          r.Hasher = d.extend({
            cfg: i.extend(),
            init: function(e) {
              (this.cfg = this.cfg.extend(e)), this.reset();
            },
            reset: function() {
              d.reset.call(this), this._doReset();
            },
            update: function(e) {
              return this._append(e), this._process(), this;
            },
            finalize: function(e) {
              return e && this._append(e), this._doFinalize();
            },
            blockSize: 16,
            _createHelper: function(e) {
              return function(t, n) {
                return new e.init(n).finalize(t);
              };
            },
            _createHmacHelper: function(e) {
              return function(t, n) {
                return new f.HMAC.init(e, n).finalize(t);
              };
            }
          });
          var f = (n.algo = {});
          return n;
        })(Math);
      (function() {
        var e = r,
          t = e.lib,
          n = t.WordArray,
          o = t.Hasher,
          i = [];
        t = e.algo.SHA1 = o.extend({
          _doReset: function() {
            this._hash = new n.init([
              1732584193,
              4023233417,
              2562383102,
              271733878,
              3285377520
            ]);
          },
          _doProcessBlock: function(e, t) {
            for (
              var n = this._hash.words,
                r = n[0],
                o = n[1],
                a = n[2],
                s = n[3],
                u = n[4],
                c = 0;
              80 > c;
              c++
            ) {
              if (16 > c) i[c] = 0 | e[t + c];
              else {
                var l = i[c - 3] ^ i[c - 8] ^ i[c - 14] ^ i[c - 16];
                i[c] = (l << 1) | (l >>> 31);
              }
              (l = ((r << 5) | (r >>> 27)) + u + i[c]),
                (l =
                  20 > c
                    ? l + (1518500249 + ((o & a) | (~o & s)))
                    : 40 > c
                      ? l + (1859775393 + (o ^ a ^ s))
                      : 60 > c
                        ? l + (((o & a) | (o & s) | (a & s)) - 1894007588)
                        : l + ((o ^ a ^ s) - 899497514)),
                (u = s),
                (s = a),
                (a = (o << 30) | (o >>> 2)),
                (o = r),
                (r = l);
            }
            (n[0] = (n[0] + r) | 0),
              (n[1] = (n[1] + o) | 0),
              (n[2] = (n[2] + a) | 0),
              (n[3] = (n[3] + s) | 0),
              (n[4] = (n[4] + u) | 0);
          },
          _doFinalize: function() {
            var e = this._data,
              t = e.words,
              n = 8 * this._nDataBytes,
              r = 8 * e.sigBytes;
            return (
              (t[r >>> 5] |= 128 << (24 - (r % 32))),
              (t[14 + (((r + 64) >>> 9) << 4)] = Math.floor(n / 4294967296)),
              (t[15 + (((r + 64) >>> 9) << 4)] = n),
              (e.sigBytes = 4 * t.length),
              this._process(),
              this._hash
            );
          },
          clone: function() {
            var e = o.clone.call(this);
            return (e._hash = this._hash.clone()), e;
          }
        });
        (e.SHA1 = o._createHelper(t)), (e.HmacSHA1 = o._createHmacHelper(t));
      })(),
        (function() {
          var e = r,
            t = e.enc.Utf8;
          e.algo.HMAC = e.lib.Base.extend({
            init: function(e, n) {
              (e = this._hasher = new e.init()),
                "string" == typeof n && (n = t.parse(n));
              var r = e.blockSize,
                o = 4 * r;
              n.sigBytes > o && (n = e.finalize(n)), n.clamp();
              for (
                var i = (this._oKey = n.clone()),
                  a = (this._iKey = n.clone()),
                  s = i.words,
                  u = a.words,
                  c = 0;
                c < r;
                c++
              )
                (s[c] ^= 1549556828), (u[c] ^= 909522486);
              (i.sigBytes = a.sigBytes = o), this.reset();
            },
            reset: function() {
              var e = this._hasher;
              e.reset(), e.update(this._iKey);
            },
            update: function(e) {
              return this._hasher.update(e), this;
            },
            finalize: function(e) {
              var t = this._hasher;
              return (
                (e = t.finalize(e)),
                t.reset(),
                t.finalize(this._oKey.clone().concat(e))
              );
            }
          });
        })(),
        (function() {
          var e = r,
            t = e.lib,
            n = t.WordArray,
            o = e.enc;
          o.Base64 = {
            stringify: function(e) {
              var t = e.words,
                n = e.sigBytes,
                r = this._map;
              e.clamp();
              for (var o = [], i = 0; i < n; i += 3)
                for (
                  var a = (t[i >>> 2] >>> (24 - (i % 4) * 8)) & 255,
                    s = (t[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 255,
                    u = (t[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 255,
                    c = (a << 16) | (s << 8) | u,
                    l = 0;
                  l < 4 && i + 0.75 * l < n;
                  l++
                )
                  o.push(r.charAt((c >>> (6 * (3 - l))) & 63));
              var d = r.charAt(64);
              if (d) while (o.length % 4) o.push(d);
              return o.join("");
            },
            parse: function(e) {
              var t = e.length,
                r = this._map,
                o = r.charAt(64);
              if (o) {
                var i = e.indexOf(o);
                -1 != i && (t = i);
              }
              for (var a = [], s = 0, u = 0; u < t; u++)
                if (u % 4) {
                  var c = r.indexOf(e.charAt(u - 1)) << ((u % 4) * 2),
                    l = r.indexOf(e.charAt(u)) >>> (6 - (u % 4) * 2);
                  (a[s >>> 2] |= (c | l) << (24 - (s % 4) * 8)), s++;
                }
              return n.create(a, s);
            },
            _map:
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
          };
        })(),
        (e.exports = r);
    },
    e099: function(e, t, n) {
      "use strict";
      var r = function(e) {
        switch (typeof e) {
          case "string":
            return e;
          case "boolean":
            return e ? "true" : "false";
          case "number":
            return isFinite(e) ? e : "";
          default:
            return "";
        }
      };
      e.exports = function(e, t, n, s) {
        return (
          (t = t || "&"),
          (n = n || "="),
          null === e && (e = void 0),
          "object" === typeof e
            ? i(a(e), function(a) {
                var s = encodeURIComponent(r(a)) + n;
                return o(e[a])
                  ? i(e[a], function(e) {
                      return s + encodeURIComponent(r(e));
                    }).join(t)
                  : s + encodeURIComponent(r(e[a]));
              }).join(t)
            : s
              ? encodeURIComponent(r(s)) + n + encodeURIComponent(r(e))
              : ""
        );
      };
      var o =
        Array.isArray ||
        function(e) {
          return "[object Array]" === Object.prototype.toString.call(e);
        };
      function i(e, t) {
        if (e.map) return e.map(t);
        for (var n = [], r = 0; r < e.length; r++) n.push(t(e[r], r));
        return n;
      }
      var a =
        Object.keys ||
        function(e) {
          var t = [];
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
          return t;
        };
    },
    e263: function(e, t, n) {
      var r = n("03e2"),
        o = function(e) {
          var t = [],
            n = {},
            o = 0,
            i = 0,
            a = {};
          r.each(["putObject", "sliceUploadFile"], function(t) {
            (a[t] = e[t]),
              (e[t] = function(n, r) {
                e._addTask(t, n, r);
              });
          });
          var s = function(e) {
              var t = {
                id: e.id,
                Bucket: e.Bucket,
                Region: e.Region,
                Key: e.Key,
                FilePath: e.FilePath,
                state: e.state,
                loaded: e.loaded,
                size: e.size,
                speed: e.speed,
                percent: e.percent,
                hashPercent: e.hashPercent,
                error: e.error
              };
              return e.FilePath && (t.FilePath = e.FilePath), t;
            },
            u = function() {
              e.emit("task-list-update", { list: r.map(t, s) }),
                e.emit("list-update", { list: r.map(t, s) });
            },
            c = function() {
              if (i < t.length && o < e.options.FileParallelLimit) {
                var n = t[i];
                "waiting" === n.state &&
                  (o++,
                  (n.state = "checking"),
                  !n.params.UploadData && (n.params.UploadData = {}),
                  a[n.api].call(e, n.params, function(t, r) {
                    e._isRunningTask(n.id) &&
                      (("checking" !== n.state && "uploading" !== n.state) ||
                        ((n.state = t ? "error" : "success"),
                        t && (n.error = t),
                        o--,
                        u(),
                        c(e),
                        n.callback && n.callback(t, r),
                        "success" === n.state &&
                          (delete n.params, delete n.callback)));
                  }),
                  u()),
                  i++,
                  c(e);
              }
            },
            l = function(t, r) {
              var i = n[t];
              if (i) {
                var a = i && "waiting" === i.state,
                  s = i && ("checking" === i.state || "uploading" === i.state);
                if (
                  ("canceled" === r && "canceled" !== i.state) ||
                  ("paused" === r && a) ||
                  ("paused" === r && s)
                ) {
                  if (
                    "paused" === r &&
                    i.params.Body &&
                    "function" === typeof i.params.Body.pipe
                  )
                    return void console.error("stream not support pause");
                  (i.state = r),
                    e.emit("inner-kill-task", { TaskId: t, toState: r }),
                    u(),
                    s && (o--, c(e)),
                    "canceled" === r && (delete i.params, delete i.callback);
                }
              }
            };
          (e._addTasks = function(t) {
            r.each(t, function(t) {
              e._addTask(t.api, t.params, t.callback, !0);
            }),
              u();
          }),
            (e._addTask = function(o, a, s, l) {
              a = r.extend({}, a);
              var d = r.uuid();
              (a.TaskId = d), a.TaskReady && a.TaskReady(d);
              var f = {
                  params: a,
                  callback: s,
                  api: o,
                  index: t.length,
                  id: d,
                  Bucket: a.Bucket,
                  Region: a.Region,
                  Key: a.Key,
                  FilePath: a.FilePath || "",
                  state: "waiting",
                  loaded: 0,
                  size: 0,
                  speed: 0,
                  percent: 0,
                  hashPercent: 0,
                  error: null
                },
                p = a.onHashProgress;
              a.onHashProgress = function(t) {
                e._isRunningTask(f.id) &&
                  ((f.hashPercent = t.percent), p && p(t), u());
              };
              var h = a.onProgress;
              return (
                (a.onProgress = function(t) {
                  e._isRunningTask(f.id) &&
                    ("checking" === f.state && (f.state = "uploading"),
                    (f.loaded = t.loaded),
                    (f.speed = t.speed),
                    (f.percent = t.percent),
                    h && h(t),
                    u());
                }),
                r.getFileSize(o, a, function(r, o) {
                  if (
                    ((n[d] = f),
                    t.push(f),
                    t.length > e.options.UploadQueueSize)
                  ) {
                    var a = t.length - e.options.UploadQueueSize;
                    t.splice(0, a), (i -= a);
                  }
                  r ? s(r) : ((f.size = o), !l && u(), c(e));
                }),
                d
              );
            }),
            (e._isRunningTask = function(e) {
              var t = n[e];
              return !(
                !t ||
                ("checking" !== t.state && "uploading" !== t.state)
              );
            }),
            (e.getTaskList = function() {
              return r.map(t, s);
            }),
            (e.cancelTask = function(e) {
              l(e, "canceled");
            }),
            (e.pauseTask = function(e) {
              l(e, "paused");
            }),
            (e.restartTask = function(e) {
              var t = n[e];
              !t ||
                ("paused" !== t.state && "error" !== t.state) ||
                ((t.state = "waiting"), u(), (i = Math.min(i, t.index)), c());
            });
        };
      e.exports.init = o;
    }
  }
]);
//# sourceMappingURL=chunk-d1906302.8b36509c.js.map
