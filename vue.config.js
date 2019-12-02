module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "https://api-m.mtime.cn",
                changeOrigin: true,
                pathRewrite: { "^/api": "" }
            }
        }

        //正在售票(包括正在热映和即将上映)
        // https://api-m.mtime.cn/PageSubArea/HotPlayMovies.api?locationId=290
        //地区信息
        // https://api-m.mtime.cn/Showtime/HotCitiesByCinema.api
        //正在热映
        // https://api-m.mtime.cn/Showtime/LocationMovies.api?locationId=290
        //即将上映
        // https://api-m.mtime.cn/Movie/MovieComingNew.api?locationId=290
        // 影片详情
        // https://ticket-api-m.mtime.cn/movie/detail.api?locationId=290&movieId=125805
        // 演职员表
        // url：https://api-m.mtime.cn/Movie/MovieCreditsWithTypes.api?movieId=?
        // 影片评论
        // url：https://ticket-api-m.mtime.cn/movie/hotComment.api?movieId=?
        // 预告片&拍摄花絮
        // url：https://api-m.mtime.cn/Movie/Video.api?pageIndex=?&movieId=?
        // 剧照
        // url：https://api-m.mtime.cn/Movie/ImageAll.api?movieId=?
    }
}