<template>
  <div class="details-warpper">
    <div class="details-nav">
      <div class="goback fl" @click="goback"></div>
      <div class="name fl">{{details.titleCn}}</div>
      <div class="share fr"></div>
      <div class="xingxing fr"></div>
    </div>
    <div class="details-header">
      <div class="header-top">
        <div class="img-box">
          <img :src="details.image" class="auto-img" alt="电影封面" />
          <div class="layer"></div>
        </div>
        <div class="text-box">
          <div class="text-name">{{details.titleCn}}</div>
          <div class="text-name-english">{{details.titleEn}}</div>
          <div class="jieshao">
            <div class="type">
              <span v-for="s in details.type" :key="s">{{s}}</span>
            </div>
            <span v-if="parseInt(details.runTime)">· {{details.runTime}}</span>
            · {{details.release.date.split('-')[0]}}年{{details.release.date.split('-')[1]}}月{{details.release.date.split('-')[2]}}日{{details.release.location}}上映
          </div>
          <div v-if="details.commonSpecial" class="commonSpecial">
            <span class="quotes"></span>
            {{details.commonSpecial}}
          </div>
        </div>
      </div>
      <div class="header-bottom">
        <div class="giveMake" v-if="details.rating != -1">时光评分</div>
        <div class="score" v-if="details.rating != -1">{{details.rating}}</div>
        <div class="noScore" v-if="details.rating == -1">暂无评分</div>
        <div class="wantToSee">
          <span class="seeIcon"></span>
          <span class="seeText">想看</span>
        </div>
        <div class="haveSeen">
          <span class="seenIcon"></span>
          <span class="seeText">看过</span>
        </div>
      </div>
    </div>
    <div class="dome">
      <!-- <button @click="toblue">定位到蓝</button> -->
      <div :class="{active : cutStatus === 0}" @click="cut(0)">简介</div>
      <div :class="{active : cutStatus === 1}" @click="cut(1)">影评</div>
      <div :class="{active : cutStatus === 2}" @click="cut(2)">更多</div>
    </div>
    <div class="intro">
      <div class="content" ref="abc">{{details.content}}</div>
      <div class="show-text" ref="fold" @click="fold($event)">展开</div>
    </div>
    <!-- 演职人员 -->
    <div class="cast">
      <div class="cast-top">
        <span class="persons">演职人员</span>
        <span class="quanbu">
          全部
          <span class="gotoIcon"></span>
        </span>
      </div>
      <div class="personInformation">
        <ul>
          <li>
            <div class="img-box">
              <img class="auto-img" :src="details.director.directorImg" />
            </div>
            <div class="personInformationName one-text">{{details.director.directorName}}</div>
            <div class="englishName one-text">{{details.director.directorNameEn}}</div>
            <div class="position one-text">导演</div>
          </li>
          <li v-for="s in details.actorList" :key="s.roleName">
            <div class="img-box">
              <img class="auto-img" :src="s.actorImg" />
            </div>
            <div class="personInformationName one-text">{{s.actor}}</div>
            <div class="englishName one-text">{{s.actorEn}}</div>
            <div class="position one-text">饰 {{s.roleName}}</div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 预告片与花絮 -->
    <div class="prevue">
      <div class="cast-top">
        <span class="persons">预告片与花絮</span>
        <span class="quanbu">
          全部
          <span class="gotoIcon"></span>
        </span>
      </div>
      <div class="pervue-box">
        <ul>
          <li v-for="vi in details.videos" :key="vi.image">
            <div class="prevue-img-box">
              <img class="auto-img" :src="vi.image" />
              <!-- 遮罩 -->
              <div class="img-layer"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 剧照 -->
    <div class="stagePhoto">
      <div class="cast-top">
        <span class="persons">剧照</span>
        <span class="quanbu">
          全部
          <span class="gotoIcon"></span>
        </span>
      </div>
      <div class="stage-photo-box">
        <ul>
          <li v-for="j in details.images" :key="j">
            <div class="stage-img-box">
              <img class="auto-img" :src="j" />
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 短评 -->
    <div class="smallComment">
      <div class="cast-top">
        <span class="persons">短评</span>
        <span class="quanbu">
          <span class="gotoIcon"></span>
          写短评
        </span>
      </div>
      <div class="comment-box">
        <div class="comment-nav">
          <div class="head-portrait">
            <img
              class="auto-img"
              src="http://img32.mtime.cn/up/2015/09/27/121324.34444893_128X128.jpg"
              alt
            />
          </div>
          <div class="userName">
            萦绕我心99
            <span> · 51分钟前</span>
          </div>
          <div class="userRating">8.1</div>
        </div>
        <div class="ueseText">还不错，电影场景做的很好很逼真，剧情也还可以，艾莎公主非常美丽，结局也很圆满，喜欢!</div>
        <div class="comment-fotter">
          <span class="dianzan icon"></span> 0
          <span class="xiaoxi icon"></span> 0
        </div>
      </div>
      <div class="toMoreComment">
        <span>查看全部85条短评</span>
        <span class="gotoIcon"></span>
      </div>
    </div>
    <!-- <div class="commentOnFilm">影评</div> -->
    <div class="boxOffice">
      <div class="cast-top">
        <span class="persons">票房</span>
        <span class="quanbu">
          查看票房榜
          <span class="gotoIcon"></span>
        </span>
      </div>
      <div class="box-offic-warpper">
        <div class="flex">
          <div class="num">1</div>
          <div>今日票房排名</div>
        </div>
        <div class="flex">
          <div class="num">3548.85</div>
          <div>今日实时(万)</div>
        </div>
        <div class="flex">
          <div class="num">3552.1</div>
          <div>累计票房(万)</div>
        </div>
      </div>
    </div>
    <div class="extend">
      <div class="cast-top">
        <span class="persons">扩展资料</span>
      </div>
      <div class="big-box">
        <div class="big-box-row" v-for="(g,h) in more" :key="h">
          <span class="tubiao-icon fl">
            <img :src="g.url" class="auto-img" />
          </span>
          <span>{{g.text1}}</span>
          <span class="arrow-right fr"></span>
          <span class="text-two fr">{{g.text2}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieDetails",
  props: ["details", "movieId"],
  data() {
    return {
      foldStatus: false,
      caseInformation: null,
      comment: null,
      more: [
        {
          text1: "幕后制作",
          text2: "媒体相关报道",
          url: require("../../public/img/jianji.png")
        },
        {
          text1: "制作发行",
          text2: "13家公司参与制作",
          url: require("../../public/img/shoutixiang.png")
        },
        {
          text1: "更多资料",
          text2: "其他更多内容",
          url: require("../../public/img/more.png")
        }
      ],
      cutStatus: 0
    };
  },
  computed: {
    commentMsg() {
      return this.comment;
    }
  },
  methods: {
    goback() {
      this.$router.go(-1);
      this.foldStatus = false;
      this.$refs.abc.style.display = "-webkit-box";
      this.$refs.fold.innerText = "展开";
      this.cutStatus = 0;
    },
    fold(evt) {
      if (!this.foldStatus) {
        this.$refs.abc.style.display = "block";
        evt.target.innerText = "收起";
        this.foldStatus = true;
      } else {
        this.$refs.abc.style.display = "-webkit-box";
        evt.target.innerText = "展开";
        this.foldStatus = false;
      }
    },
    cut(num) {
      this.cutStatus = num;
      if(num == 0) {
        document.documentElement.scrollTop = 0;
      } else if(num == 1) {
        if (this.foldStatus) {
          document.documentElement.scrollTop = 1035;
        } else {
          document.documentElement.scrollTop = 950;
        }
      } else if(num == 2) {
        if (this.foldStatus) {
          document.documentElement.scrollTop = 1085;
        } else {
          document.documentElement.scrollTop = 1000;
        }
      }
    },
  },
  // watch:{
  //     details(){
  //         console.log('this.details ==> ',this.details)
  //     }
  // },
  mounted() {
    console.log("this.details ==>", this.details);
  },


  created() {
    this.axios(
      "/api/Movie/MovieCreditsWithTypes.api?movieId=" + this.movieId
    ).then(res => {
      // this.$router.push({name: 'moviedetails',params: { details: res.data , movieId: movieId }});
      console.log("演员信息 ==> ", res.data);
      this.caseInformation = res.data;
      console.log("演员信息2 ==> ", this.caseInformation);
    });

    this.axios("/api/movie/hotComment.api?movieId=" + this.movieId).then(res => {
      console.log("影片评论 ==> ", res.data);
      this.comment = res.data;
      console.log("影片评论2 ==> ", this.comment);
    });
  }
};
</script>

<style lang="scss" scoped>
@import url("../assets/scss/index.scss");

.details-warpper {
  width: 100%;
  word-break: break-all;

  .details-nav {
    position: fixed;
    z-index: 99;
    width: 100%;
    height: 35px;
    left: 0;
    top: 0;
    background: #fff;
    line-height: 35px;
    background: rgb(217, 230, 236);
    // background: rgb(0, 0, 0);
    // background: linear-gradient(
    //   45deg,
    //   rgba(0, 0, 0, 0) 0%,
    //   rgba(196, 212, 218, 1) 0%,
    //   rgba(11, 153, 221, 0.748358718487395) 100%,
    //   rgba(217, 230, 236, 1) 100%
    // );

    .goback {
      width: 35px;
      height: 35px;
      background: url("../../public/img/arrow-left.png") no-repeat center center;
      background-size: 20px 20px;
    }

    .name {
      font-size: 16px;
      font-weight: 600;
      // opacity: 0;
    }

    .xingxing {
      width: 35px;
      height: 35px;
      background: url("../../public/img/xingxing.png") no-repeat center center;
      background-size: 20px 20px;
    }

    .share {
      width: 35px;
      height: 35px;
      background: url("../../public/img/share.png") no-repeat center center;
      background-size: 20px 20px;
    }
  }

  .details-header {
    margin-top: 35px;
    margin-left: 20px;
    margin-right: 20px;
    padding-top: 15px;
    background: #fff;
    height: 250px;

    .header-top {
      height: 160px;
      display: flex;
    }

    .img-box {
      flex: 1;
      overflow: hidden;
      border-radius: 8px;
      position: relative;

      .layer {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: url("../../public/img/play.png") no-repeat center center;
        background-size: 32px 32px;
        background-color: rgba(0, 0, 0, 0.2);
      }
    }

    .text-box {
      flex: 2;
      padding-top: 45px;
      padding-left: 10px;
    }

    .text-name {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 5px;
    }

    .text-name-english {
      font-size: 14px;
      color: #465363;
      margin-bottom: 15px;
    }

    .jieshao {
      color: #465363;
      font-size: 14px;
      line-height: 18px;

      .type {
        display: inline-block;
        max-width: 130px;
        overflow: hidden;
        height: 18.5px;
        line-height: 18.5px;
        vertical-align: text-top;
      }

      span::after {
        content: "/";
      }

      span:last-child:after {
        content: " ";
      }
    }

    .commonSpecial {
      color: #4b5c6f;
      font-weight: 550;
      margin-top: 5px;

      .quotes {
        display: inline-block;
        width: 12px;
        height: 12px;
        background: url("../../public/img/quotes2.png") no-repeat center center;
        background-size: 12px 12px;
      }
    }
  }

  .header-bottom {
    line-height: 65px;
    display: flex;

    .giveMake {
      color: #1da0db;
      font-weight: 600;
      line-height: 72px;
      margin-right: 5px;
    }

    .score {
      color: #20a1db;
      font-size: 36px;
      font-family: -webkit-pictograph;
      font-weight: 700;
      margin-right: 20px;
    }

    .noScore {
      color: #ccc;
      font-weight: 600;
      line-height: 65px;
      margin-right: 25px;
      width: 110px;
      text-align: center;
    }

    .wantToSee,
    .haveSeen {
      width: 90px;
      height: 30px;
      background-color: #ecedf2;
      border-radius: 15px;
      line-height: 30px;
      margin-top: 17.5px;
      margin-right: 10px;

      .seeText {
        color: #48596c;
        font-weight: 700;
        font-size: 14px;
      }
    }

    .seeIcon {
      display: inline-block;
      width: 20px;
      height: 20px;
      background: url("../../public/img/wantsee.png") no-repeat center center;
      background-size: 20px 14px;
      margin-left: 17px;
      margin-right: 10px;
      vertical-align: text-bottom;
    }

    .seenIcon {
      display: inline-block;
      width: 20px;
      height: 20px;
      background: url("../../public/img/haveseen.png") no-repeat center center;
      background-size: 14px 14px;
      margin-left: 17px;
      margin-right: 10px;
      vertical-align: text-bottom;
    }
  }

  .dome {
    height: 35px;
    background: #e8eaf2;
    position: -webkit-sticky;
    position: sticky;
    top: 35px;
    display: flex;
    line-height: 35px;

    div {
      flex: 1;
      text-align: center;
    }

    .active {
      color: #1b2434;
      font-weight: 550;
      position: relative;

      &::after {
        content: "";
        display: block;
        width: 30%;
        height: 3px;
        background-color: #484f5c;
        position: absolute;
        bottom: 0;
        left: 35%;
      }
    }
  }

  .intro {
    padding: 10px 10px 20px 10px;
    background: #e8eaf2;
    overflow: hidden;

    .content {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      -webkit-line-clamp: 3;
      color: #4d5e72;
      line-height: 22px;
      letter-spacing: 1.16px;
    }

    .show-text {
      float: right;
      font-size: 14px;
      padding-bottom: 3px;
      color: #808ea2;
      border-bottom: 1px solid #808ea2;
      padding-top: 10px;
    }
  }

  .cast {
    padding: 10px 10px 20px 10px;
    background: #f9f9fc;

    .personInformation {
      width: 100%;
      margin-top: 10px;
      overflow-x: auto;

      ul {
        display: flex;
        width: 950px;
      }

      li {
        list-style: none;
        width: 80px;
        margin-right: 15px;
        text-align: center;
      }

      .img-box {
        height: 110px;
        border: none;
        margin-bottom: 5px;

        img {
          border-radius: 5px;
        }
      }

      .englishName {
        font-size: 14px;
        margin: 5px 0;
        color: #8594a8;
      }

      .position {
        font-size: 14px;
        color: #8594a8;
      }
    }
  }

  .cast-top {
    line-height: 21px;
    padding-top: 10px;

    .persons {
      font-weight: bold;
    }

    .quanbu {
      color: #7d8b9e;
      float: right;
    }

    .gotoIcon {
      display: inline-block;
      width: 15px;
      height: 20px;
      background: url("../../public/img/arrow-right.png") no-repeat center
        center;
      background-size: 18px 18px;
      vertical-align: bottom;
    }
  }

  .prevue {
    padding: 10px 10px 20px 10px;
    background: rgba(237, 241, 241, 0.808);

    .pervue-box {
      width: 100%;
      margin-top: 10px;
      overflow-x: auto;
    }

    ul {
      width: 540px;
      display: flex;

      .prevue-img-box {
        width: 170px;
        height: 90px;
        margin-right: 10px;

        img {
          border-radius: 5px;
        }
      }
    }
  }

  .stagePhoto {
    padding: 10px 10px 20px 10px;
    padding-right: 0;
    background: #e8e8e8;

    .cast-top {
      padding-right: 10px;
    }

    .stage-photo-box {
      width: 100%;
      margin-top: 10px;
      overflow-x: auto;
      ul {
        display: flex;
      }
    }

    .stage-img-box {
      width: 100px;
      height: 100px;
      margin-right: 10px;
      object-fit: cover;

      img {
        border-radius: 5px;
      }
    }
  }

  .boxOffice {
    padding: 10px 10px 20px 10px;
    background: #f5f5f5;

    .box-offic-warpper {
      display: flex;
      background: #dcf0f9;
      text-align: center;
      border-radius: 5px;
      padding: 20px 0;
      margin-top: 15px;
      color: #239cd2;

      .flex {
        flex: 1;

        &:nth-child(2) {
          flex: 1;
          border-left: 2px solid #fff;
          border-right: 2px solid #fff;
        }

        div:last-child {
          color: #405063;
        }
      }

      .num {
        margin-bottom: 10px;
        font-size: 26px;
      }
    }
  }

  .extend {
    padding: 10px 10px 20px 10px;
    background: #f2eaea;

    .big-box {
      width: 100%;
      background: #f2f3f7;
      min-height: 80px;
      border-radius: 5px;
      color: #455366;
      margin-top: 10px;
      padding-bottom: 20px;
    }

    .big-box-row {
      padding-top: 20px;
      line-height: 20px;
    }

    .tubiao-icon {
      display: inline-block;
      width: 20px;
      height: 20px;
      margin: 0 10px;
    }

    .text-two {
      font-size: 14px;
      color: #bac4d3;
    }

    .arrow-right {
      display: inline-block;
      width: 20px;
      height: 20px;
      background: url("../../public/img/arrow-right.png") no-repeat center
        center;
      background-size: 20px 20px;
      margin-right: 10px;
    }
  }

  .smallComment {
    padding: 10px 10px 20px 10px;
    background: #fafafa;
    overflow: hidden;

    .quanbu {
      color: #fff;
      background: #1cafe2;
      border-radius: 21px;
      width: 82px;
      text-align: center;
      font-size: 13px;
      font-weight: 550;

      .gotoIcon {
        background: url("../../public/img/gangbi.png") no-repeat center center;
        background-size: 18px 18px;
      }
    }

    .comment-box {
      border-bottom: 1px solid #ccc;
    }

    .comment-nav {
      margin-top: 20px;
      line-height: 30px;
      overflow: hidden;

      .head-portrait {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 5px;
        float: left;
      }

      .userName {
        color: #4f5a69;
        float: left;

        span {
          color: #ccc;
          font-size: 12px;
        }
      }

      .userRating {
        font-size: 18px;
        font-weight: 600;
        color: #1f9fd9;
        line-height: 36px;
        float: right;
      }
    }

    .ueseText {
      padding-left: 35px;
      color: #445465;
      font-size: 15px;
      line-height: 24px;
    }

    .comment-fotter {
      padding-left: 35px;
      line-height: 20px;
      color: #aab7c7;
      margin-bottom: 20px;
      margin-top: 10px;

      .icon {
        display: inline-block;
        width: 20px;
        height: 20px;
        vertical-align: top;
      }

      .dianzan {
        background: url("../../public/img/dianzan.png") no-repeat center center;
        background-size: 16px 16px;
      }

      .xiaoxi {
        background: url("../../public/img/xiaoxi.png") no-repeat center center;
        background-size: 16px 16px;
      }
    }

    .toMoreComment {
      float: right;
      margin-top: 10px;
      color: #8696AE;

      .gotoIcon {
        display: inline-block;
        width: 15px;
        height: 20px;
        background: url("../../public/img/arrow-right.png") no-repeat center
          center;
        background-size: 18px 18px;
        vertical-align: middle;
      }
    }
  }
}
</style>
