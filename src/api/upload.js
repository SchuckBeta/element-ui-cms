import Vue from "vue";
import COS from "cos-js-sdk-v5";

const config = {
  Bucket: "bucket-1",
  Region: "default"
};

const cos = new COS({
  CompatibilityMode: true,
  ServiceDomain: "https://private-3fcd8b-elementuiplus.apiary-mock.com/cos",
  Domain: "https://private-3fcd8b-elementuiplus.apiary-mock.com/cos",
  getAuthorization: function(options, callback) {
    // 方法四、前端使用固定密钥计算签名（适用于前端调试）
    var authorization = COS.getAuthorization({
      SecretId: "SecretId",
      SecretKey: "SecretKey",
      Method: options.Method,
      Key: options.Key,
      Query: options.Query,
      Headers: options.Headers,
      Expires: 60
    });
    callback(authorization);
  }
});

export const url = {
  index: "/upload/"
};

export const fn = {
  elUploadCloud(option) {
    const file = option.file;
    if (Object.prototype.toString.call(file) !== "[object File]") {
      throw new Error("file参数必须为File数据类型");
    }

    return new Promise((resolve, reject) => {
      let suffix = "";
      // let type = ''
      let index = file.name.lastIndexOf(".");
      if (index !== -1) {
        suffix = file.name.substring(index);
        // type = suffix.substring(1) + '/'
      }
      // 用文件名,文件时间,和文件大小作为文件名，在最大程度上实现同名但不一样的文件不会误覆盖
      const fileRename =
        `${file.name}-lastModified${parseInt(file.lastModified / 1000)}-size${
          file.size
        }`.substr(0, 160) + suffix;

      const Key = `cms/${fileRename}`;
      // const Key = `cms/${type}${fileRename}`
      // const Key = `cms/excel/template/${file.name}`

      const onProgress = res => {
        res.percent = parseInt(res.percent * 10000) / 100;
        //        option.onProgress(res)
        //        console.log(JSON.stringify(res))
      };

      const onFinish = (err, data) => {
        if (err) {
          reject(new Error("上传失败"));
        } else {
          data.url = `http://${data.Location}`;
          resolve({ data });
        }
        //        console.log(err || data)
      };

      const data = {
        Bucket: config.Bucket, // Bucket 格式：test-1250000000
        Region: config.Region,
        Key,
        ACL: "public-read",
        Body: file,
        onProgress
      };

      if (file.size > 1024 * 1024) {
        cos.sliceUploadFile(data, onFinish);
      } else {
        cos.putObject(data, onFinish);
      }
    });
  },
  elUpload(option, method = "post") {
    const action = option.action || url.index;
    const formData = new FormData();
    if (option.data) {
      Object.keys(option.data).map(key => {
        formData.append(key, option.data[key]);
      });
    }
    formData.append(option.filename, option.file);
    const config = {
      method: method,
      headers: { "content-type": "application/x-www-form-urlencoded" },
      onUploadProgress: progressEvent => {
        if (progressEvent.total > 0) {
          progressEvent.percent =
            (progressEvent.loaded / progressEvent.total) * 100;
        }
        option.onProgress(progressEvent);
      },
      data: formData,
      url: action,
      timeout: 1000000
    };
    return Vue.http(config);
  }
};

export default {
  url,
  fn
};
