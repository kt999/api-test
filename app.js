const express = require("express");
const app = express();
const http = require("http").Server(app);

//포트설정
let PORT = process.env.PORT;
if (!PORT) {
  PORT = 8080;
}

//기타모듈
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

///////////// server routing

const userList = [
  {
    id: "test1",
    password: "abc1234",
  },
  {
    id: "test2",
    password: "abc1234",
  },
  {
    id: "test3",
    password: "abc1234",
  },
  {
    id: "test4",
    password: "abc1234",
  },
  {
    id: "test5",
    password: "abc1234",
  },
];

app.get("/test", (req, res) => {
  res.json({
    result: "hihi",
  });
});

app.post("/login", (req, res) => {
  console.log(req.body);
  var id = req.body.id;
  var password = req.body.password;

  console.log(id);
  console.log(password);

  var status = 0;

  for (var i = 0; i < userList.length; i++) {
    if (userList[i].id == id && userList[i].password == password) {
      status = 1;
    }
  }

  if (status == 1) {
    //로그인 성공

    res.json({
      result: "성공",
    });
  } else {
    //로그인 실패

    res.json({
      result: "실패",
    });
  }
});

///////////////////
http.listen(PORT, () => {
  console.log(PORT + "번 포트에서 Connected!");
});
