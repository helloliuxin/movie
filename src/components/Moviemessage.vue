<template>
  <div class="ishit-wrapper">
    <ul>
      <li class="movie-mes" v-for="(s,i) in ticket.movies" :key="i" @click="toDetails(s.movieId)">
        <div class="img-box">
          <img :src="s.img" class="auto-img" alt="电影封面" />
          <div class="layer"  @click.stop="toVideo(s.movieId,$event)" :data-movieName="s.titleCn">
            
          </div>
        </div>
        <div class="message-box">
          <div class="message-top">
            <span class="movie-name">{{s.titleCn}}</span>
            <span class="imax-3D" v-show="s.is3D">3D</span>
            <span class="imax-3D" v-show="s.isDMAX">IMAX</span>
            <span class="fr" v-if="s.ratingFinal !== -1">
              <span class="rating-final">{{s.ratingFinal}}</span>
              <span class="score">分</span>
            </span>
          </div>
          <div class="commonSpecial" v-if="s.commonSpecial">
            <span class="quotes"></span>
            {{s.commonSpecial}}
          </div>
          <div class="commonSpecial commonSpecial2" v-if="!s.commonSpecial">
            <span class="wantedCount">{{s.wantedCount}}</span>
            人想看-{{s.type}}
          </div>
          <div class="message-bottom">
            <div class="actorName one-text">
              <span class="actor-name-1">{{s.actorName1}}</span> /
              <span class="actor-name-2">{{s.actorName2}}</span>
            </div>
          </div>
          <button class="ticket-btn" v-if="s.ratingFinal !== -1">购票</button>
          <button class="ticket-btn2" v-if="s.ratingFinal == -1">预售</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Moviemessage",
  props: {
    ticket: Object
  },
  methods: {
    toDetails(movieId) {
      // this.$router.push({name: 'moviedetails'})
      this.axios("/api/movie/detail.api?locationId=365&movieId=" + movieId).then(res => {
        this.$router.push({name: 'moviedetails',params: { details: res.data , movieId: movieId }});
        console.log('进入电影详情 ==> ', res.data)
        });

      

    },
    toVideo(movieId,$event) {
      // this.$router.push({name: 'moviedetails'})
      let movieName = $event.target.getAttribute("data-movieName");
      console.log(movieName)
      this.axios("/api/Movie/Video.api?pageIndex=?&movieId=" + movieId).then(res => {
        this.$router.push({name: 'movievideo',params: { videos: res.data , moviename: movieName}});
        console.log('进入电影视频 ==> ', res.data)
        });

    },
  },
  // watch: {
  //   ticket(newval) {
  //     console.log("thisisnewval==========", newval);
  //   }
  // }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";

.ishit-wrapper {
  width: 100%;
}

.movie-mes {
  margin-left: 12px;
  padding: 15px 0;
  border-bottom: 1px solid #ccc;
  display: flex;

  .img-box {
    // width: 20%;
    flex: 1;
    height: 94px;
    border: 1px solid #ccc;
    position: relative;
    background: skyblue;

    .layer {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: url("../../public/img/play.png") no-repeat center center;
      background-size: 22px 22px;
      background-color: rgba(0, 0, 0, 0.2);
    }
  }

  .message-box {
    // width: 80%;
    flex: 4;
    padding: 0 12px 0 8px;
    position: relative;

    .message-top {
      margin-top: 3px;
    }

    .movie-name {
      font-size: 16px;
      vertical-align: top;
      margin-right: 5px;
    }

    .imax-3D {
      padding: 0px 4px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 12px;
      color: #acacaa;
      margin: 0 2px;
    }

    .rating-final {
      color: #669d0e;
      font-size: 16px;
    }

    .score {
      font-size: 10px;
      color: #669d0e;
      //   position: relative;
      //   top: -1px;
    }

    .commonSpecial {
      margin: 19px 0;
      color: #669c0e;
      font-size: 13px;

      .quotes {
        display: inline-block;
        width: 10px;
        height: 10px;
        background: url("../../public/img/quotes.png") no-repeat center center;
        background-size: 10px 10px;
      }
    }

    .commonSpecial2 {
      color: #777777;

      .wantedCount {
        color: #e18456;
      }
    }

    .message-bottom {
      width: 100%;

      .actorName {
        width: 78%;
        color: #b8b8b8;
        line-height: 20px;
        font-size: 13px;
      }
    }

    .ticket-btn {
      width: 20%;
      color: #e18456;
      border: 1px solid #e18456;
      border-radius: 3px;
      background: white;
      height: 32px;
      line-height: 32px;
      position: absolute;
      right: 12px;
      bottom: 6px;
      outline: 0;
    }

    .ticket-btn2 {
      width: 20%;
      color: #679a1a;
      border: 1px solid #679a1a;
      border-radius: 3px;
      background: white;
      height: 32px;
      line-height: 32px;
      position: absolute;
      right: 12px;
      bottom: 5px;
      outline: 0;
    }
  }
}
</style>