<template>
  <div class="movie-video">
    <div class="video-header">
      <div class="goback" @click="goback"></div>
      <div class="movie-name">{{moviename}}</div>
    </div>
    <div class="video-nav">
      <div
        v-for="(item, k) in classify"
        :key="item.id"
        class="item"
        :class="{active: item.active}"
        @click="cut(k, item.type)"
      >{{item.name}}</div>
    </div>
    <ul>
      <li v-for="(s,i) in videos.videoList" :key="i" v-show="s.type == num">

        <!-- <DemoVideo :videoSrc="s.url"/> -->
         
        <video :src="s.url" controls class="video" :poster="s.image" />
         
        <!-- <video ref='video' class="video" :poster="s.image" controls>您的浏览器不支持 video元素。</video> -->
        <div class="title">{{s.title}}</div>
        <div class="movie-buttom">
          <div class="fl">2,391</div>
          <div class="fr">
            <span class="dianzan icon"></span> 0
            <span class="xiaoxi icon"></span> 0
            <span class="zhuanfa icon"></span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// import DemoVideo from "../components/DemoVideo"

export default {
  name: "MovieVideo",
  data() {
    return {
      classify: [
        { id: "tuijian", type: 0, name: "推荐", active: true },
        { id: "yugao", type: 0, name: "预告片", active: false },
        { id: "huaxu", type: 2, name: "拍摄花絮", active: false },
        { id: "shouying", type: 4, name: "电影首映", active: false },
        { id: "mv", type: 5, name: "MV", active: false }
      ],
      num: 0
    };
  },
  components: {
    //   DemoVideo
  },
  props: ["videos", "moviename"],
  methods: {
    goback() {
      this.num = 0;
      for (let i = 0; i < this.classify.length; i++) {
        this.classify[i].active = false;
      }
      this.classify[0].active = true;
      this.$router.go(-1);
    },
    cut(index, type) {
      if (this.classify[index].active) {
        return;
      } else {
        for (let i = 0; i < this.classify.length; i++) {
          this.classify[i].active = false;
        }

        this.classify[index].active = true;
      }

      this.num = type;
    }
  },
  watch: {
    videos(newval, oldval) {
      console.log("newval ==> ", newval);
      console.log("oldval ==> ", oldval);
    }
  },
  mounted() {
    console.log("this.videos ==>", this.videos);
    // this.$refs.video.src = this.videos.videoList[0].url;
  }
};
</script>

<style lang="scss" scoped>
@import url("../assets/scss/index.scss");

.movie-video {
  width: 100%;
  word-break: break-all;

  .video-header {
    width: 100%;
    display: flex;
    margin-bottom: 10px;

    .goback {
      width: 35px;
      height: 35px;
      background: url("../../public/img/arrow-left.png") no-repeat center center;
      background-size: 20px 20px;
    }

    .movie-name {
      flex: 1;
      text-align: center;
      font-size: 18px;
      font-weight: 600;
      line-height: 35px;
    }
  }

  .video-nav {
    width: 100%;
    display: flex;
    margin-bottom: 10px;

    .item {
      flex: 1;
      text-align: center;
      font-size: 14px;
      color: #ccc;
      line-height: 20px;
      transition: all 0.3s linear;
    }
    .active {
      font-size: 18px;
      color: #000;
      font-weight: 600;

      &::after {
        content: "";
        display: block;
        width: 50%;
        margin: 5px auto 0;
        border-top: 3px solid #48505d;
      }
    }
  }

  .video {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }

  .title {
    font-size: 16px;
    padding-top: 5px;
    padding-left: 10px;
  }

  .movie-buttom {
    overflow: hidden;
    margin: 10px;
    margin-bottom: 20px;
    line-height: 20px;
    color: #98a3b2;
    font-size: 14px;

    .icon {
      display: inline-block;
      width: 20px;
      height: 20px;
      vertical-align: top;
    }

    .dianzan {
      background: url("../../public/img/dianzan.png") no-repeat center center;
      background-size: 20px 20px;
    }

    .xiaoxi {
      background: url("../../public/img/xiaoxi.png") no-repeat center center;
      background-size: 20px 20px;
    }

    .zhuanfa {
      background: url("../../public/img/zhuanfa.png") no-repeat center center;
      background-size: 20px 20px;
    }
  }
}
</style>