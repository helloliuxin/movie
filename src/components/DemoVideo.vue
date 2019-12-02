<template>
    <div>
         <video ref="vude" controls class="video" />
    </div>
</template>
<script>
export default {

    data:()=>{
        return {
            url:null
        }
    },


    props:{
        videoSrc:String
    },
    mounted(){
        this.$nextTick(()=>{
            setTimeout(()=>{
                 this.$refs.vude.src = this.videoSrc
            },3000)
           
        })
    }
}
</script>