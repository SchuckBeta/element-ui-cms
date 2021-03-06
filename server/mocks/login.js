const Mock = require("mockjs");

module.exports = [
  {
    route: "/api/cms/login/",
    responses: [
      {
        request: {
          method: "POST",
          accepts: "json"
        },
        response: {
          type: "json",
          body: Mock.mock({
            token:
              "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1Njg2ODUyMDcsImlhdCI6MTUzNzE0OTIwNywidXNlcl9pZCI6MSwib3duZXIiOiJ6d3kifQ.kh2AI8kTo90WRoTr2TSSJhu3Ox8DHsD1fcgJfCqBDwA",
            id: "1",
            name: "panhezeng",
            email: "panhezeng@gmail.com",
            phone: 11111111111,
            avatar: "http://dummyimage.com/200x100/50B347/FFF&text=panhezeng",
            organ: "Pxipyimhkg Nrtgkhy Rpno Ygsls Qfjnhwcr",
            groups: [
              {
                id: 1,
                name: "超级管理员",
                menu: [
                  {
                    title: "网站内容管理",
                    children: [
                      { title: "公告", path: "/announcement" },
                      {
                        title: "轮播",
                        path: "/banner"
                      },
                      { title: "推荐栏目", path: "/web_column" },
                      { title: "网站介绍", path: "/about" }
                    ]
                  },
                  {
                    title: "系统管理",
                    children: [
                      { title: "CMS角色", path: "/role" },
                      { title: "CMS用户", path: "/user" }
                    ]
                  }
                ]
              },
              { id: 2, name: "网站内容管理员" }
            ]
          })
        }
      }
    ]
  }
];
