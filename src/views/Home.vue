<template>
  <div class="home">
    <MovieHome />

    <div class="nav">
      <router-link to="/home/ishit" tag="div" class="tab-item" exact>正在热映</router-link>
      <router-link to="/home/roulruiz" class="tab-item" tag="div">即将上映</router-link>
    </div>

    <keep-alive>
      <router-view :ticket="ticket" :raoul_ruiz="raoul_ruiz" />
    </keep-alive>
  </div>
</template>

<script>
import MovieHome from "../components/MovieHome";

export default {
  name: "Home",
  props: {
    ticket: Object,
    raoul_ruiz: Object
  },
  components: {
    MovieHome
  }
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  width: 100%;
  height: 50px;
  padding-top: 10px;
  /* background: #ccc; */
}

.nav .tab-item {
  flex: 1;
  text-align: center;
  font-size: 16px;
  color: #a3aebd;
  line-height: 40px;
  transition: all 0.3s linear;
}

.nav .tab-item.active {
  color: #1e2736;
  font-weight: 700;
  font-size: 18px;
}

.nav .tab-item.active::after {
  content: "";
  display: block;
  width: 25%;
  margin: -3px auto 0;
  border-top: 3px solid #48505d;
}
</style>