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

///////////// front routing

app.get("/movie", (req, res) => {
  res.json({
    result: [
      {
        idx: 1,
        imgUrl:
          "https://post-phinf.pstatic.net/MjAxODExMzBfMjUz/MDAxNTQzNTc3MjUyOTM1.-Ye3_yI0tXYsAuXNtkxbVCi_yGOVo2rvGAjWByFh9EEg.8QPa5B8_9S2SWmUkBFL2qesAYP7sOcsqeNkBxCNmgeMg.JPEG/%ED%82%B9%EB%8D%A4_%ED%8B%B0%EC%A0%80%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg?type=w1200",
      },
      {
        idx: 2,
        imgUrl:
          "https://lh3.googleusercontent.com/proxy/lzdr2eXnP2IQ-mJioB7ylkLsT6CO0WXmry4r9k2fKbnW3e-r7T99YW_2ddnr_79a8URuALO9zAZmlR7T_Rt9h5aSDTMUlhfEJqzD1zIcDHOqYzOrYz_TzpHphj4V9SifZNKFLFPulDN847tf1i9cOztXxtHolVqNgag1WvJoxrMGHVv_8UQzMFv-8uCY63-BiS552NDU1Tnuy_8ER5-_kfVduLUUv1EKiT-QjUvEugmZ4Z3vi3VCr5oKctkeafgJOax5fRcPgxKrH1sg-XuafAtE2So712FuK-NQeo-zejK-S0p8kk_bRA",
      },
      {
        idx: 3,
        imgUrl:
          "https://ojsfile.ohmynews.com/PHT_IMG_FILE/2018/0319/IE002302766_PHT.jpg",
      },
      {
        idx: 4,
        imgUrl:
          "http://img.mediapen.com/news/201812/news_403283_1545358438_m.jpg",
      },
      {
        idx: 5,
        imgUrl:
          "https://pgnqdrjultom1827145.cdn.ntruss.com/img/fd/55/fd55751e6e7d09d0317ba72e3fff7cd76236ef355d48e597e124e17cd4dfeb59_v1.jpg",
      },
    ],
  });
});

///////////// server routing

///////////////////
http.listen(PORT, () => {
  console.log(PORT + "번 포트에서 Connected!");
});
