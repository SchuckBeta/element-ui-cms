export default {
  required: [{ required: true, message: "该项必填" }],
  uploadImg: [{ type: "url", required: true, message: "请上传图片" }],
  url: [
    { pattern: /^(https?:)?\/\/.+/, required: true, message: "请输入有效url" }
  ],
  email: [{ type: "email", required: true, message: "请输入有效邮箱地址" }],
  integer: [{ type: "integer", required: true, message: "请输入整数" }],
  float: [{ type: "float", required: true, message: "请输入浮点数" }],
  number: [{ type: "number", required: true, message: "请输入数字" }],
  array: [{ type: "array", required: true, message: "请至少选择一项" }],
  // 所有转换类型后为false的值都不能通过验证，而required规则只是不能为空字符串
  noFalse: [
    {
      validator: (rule, value, callback) => {
        if (Number(value)) {
          callback();
        } else {
          callback(new Error("该项必填"));
        }
      },
      required: true
    }
  ],
  phone: [
    {
      validator: (rule, value, callback) => {
        if (
          /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(
            value
          )
        ) {
          callback();
        } else {
          callback(new Error("请输入有效手机号码"));
        }
      },
      required: true
    }
  ],
  card: [
    {
      validator: (rule, value, callback) => {
        if (/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value)) {
          callback();
        } else {
          callback(new Error("请输入有效身份证号码"));
        }
      },
      required: true
    }
  ]
};
