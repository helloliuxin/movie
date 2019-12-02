<template>
  <div class="raoulruiz-wrapper">
    <div class="attention-wrapper">
      <div class="attention">最受关注</div>
    </div>
    <div class="aaa">
      <ul>
        <li class="attention-message" v-for="(s,i) in raoul_ruiz.attention" :key="i">
          <div class="data-wrapper">
            <span class="data">{{s.releaseDate.slice(0,-2)}}</span>
            <span class="what-day">明天</span>
            <span class="line"></span>
          </div>
          <div class="img-box">
            <img :src="s.image" class="auto-img" alt="电影封面" />
          </div>
          <div class="raoulruiz-name">{{s.title}}</div>
          <div class="wantedCount-wrapper">
            <span>{{s.wantedCount}}</span>人想看
            <span class="like"></span>
          </div>
        </li>
      </ul>
    </div>
    
    <Moviemessage :ticket="ticket"/>
  </div>
</template>

<script>
import Moviemessage from '../components/Moviemessage'

export default {
  name: "RaoulRuzi",
  props: {
    raoul_ruiz: Object,
    ticket: Object
  },
  components: {
    Moviemessage
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";

.aaa {
  width: 100%;
  overflow-x: auto;
}

ul {
  display: flex;
  width: 500px;
}

li {
  flex: 1;
}

.attention-wrapper {
  margin-left: 12px;

  .attention {
    width: 85px;
    height: 30px;
    background: #f97d3f;
    color: #fff;
    border-radius: 3px;
    text-align: center;
    line-height: 30px;
    margin: 15px 0;
    font-size: 15px;
    font-weight: 300;
  }
}

.attention-message {
  margin-left: 12px;

  .data-wrapper {
    color: #9a9a9a;
    font-size: 12px;

    .what-day {
      margin-left: 7px;
      margin-right: 4px;
    }

    .line {
      display: inline-block;
      width: 25px;
      height: 1px;
      background: rgba(171, 171, 171, 0.3);
      margin-bottom: 4px;
    }
  }

  .img-box {
    width: 105px;
    height: 144px;
    margin-top: 5px;
  }

  .raoulruiz-name {
    font-size: 14px;
    margin: 10px 0;
  }

  .wantedCount-wrapper {
    width: 105px;
    font-size: 13px;
    color: #9a9a9a;
    padding-bottom: 20px;
    position: relative;

    .like {
      display: inline-block;
      width: 18px;
      height: 18px;
      background: url("../../public/img/like.png") no-repeat center center;
      background-size: 18px 18px;
      position: absolute;
      right: 0;
      top: -3px;
    }
  }
}
</style>