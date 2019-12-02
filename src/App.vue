<template>
  <div id="app">

    <!-- <router-link to="/" tag="div"></router-link> -->

    <keep-alive>
      <router-view :ticket="ticket" :raoul_ruiz="raoul_ruiz"/>
    </keep-alive>
  </div>
</template>

<script>
// import MovieHome from "./components/MovieHome";

export default {
  data: () => ({
    publicPath: process.env.BASE_URL,
    region: {}, //地区信息
    ticket: {}, //售票信息
    raoul_ruiz: {}, //即将上映电影信息
  }),
  methods: {
    getData(href, msg) {
      this.axios(href).then(res => {
        console.log("正在售票" + msg + " => ", res.data);
        let { data } = res;

        this[msg] = data;
        console.log("this.ticket ==> ", this[msg]);
      });
    }
  },
  mounted() {
    this.getData("/api/PageSubArea/HotPlayMovies.api?locationId=365", "ticket");
    this.getData("/api/Showtime/HotCitiesByCinema.api", "region");
    this.getData("/api/Movie/MovieComingNew.api?locationId=365", "raoul_ruiz");
    // this.axios("/api/PageSubArea/HotPlayMovies.api?locationId=365").then(res => console.log('正在售票 ==> ', res.data));
  },
  components: {
  }
};
</script>


<style scoped>

</style>
