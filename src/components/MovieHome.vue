<template>
  <div>
    <div class="home-wrapper">
      <div class="nav">
        <div class="city">
          广州
          <span class="arrow-down"></span>
        </div>
        <div class="home-movie">
          <span class="home-movie-active">电影</span>
          <span>影院</span>
        </div>
        <div class="search"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieHome"
};
</script>

<style lang="scss" scoped>
    .home-wrapper{
        padding-top: 16px;
    }

    .nav {
        width: 100%;
        height: 28px;
        display: flex;
        font-size: 18px;
        color: #9FACBC;
        // background: rgba(64,250,250,.3);

        .city {
            flex: 1;
            line-height: 28px;
            font-size: 18px;
            padding-left: 12px;
            position: relative;

            .arrow-down {
                position: absolute;
                display: inline-block;
                width: 28px;
                height: 28px;
                background: url('../../public/img/arrow-down.png') no-repeat center center;
                background-size: 28px 28px;
            }
        }

        .home-movie {
            flex: 2;
            display: flex;
            border-radius: 20px;
            background: rgba(229,227,227,.5);

            span {
                flex: 1;
                text-align: center;
                line-height: 28px;
            }
            .home-movie-active {
                color: #000;
                border-radius: 14px;
                background: #fff;
            }
        }

        .search {
            flex: 1;
            width: 28px;
            height: 28px;
            margin-right: 10px;
            background: url('../../public/img/search.png') no-repeat center right;
            background-size: 28px 28px;
        }
    }
</style>