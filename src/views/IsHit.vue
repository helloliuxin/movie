<template>
    <div class="ishit-wrapper">
        <Moviemessage :ticket="ticket"/>
    </div>
</template>

<script>
import Moviemessage from '../components/Moviemessage'

export default {
  name: "IsHit",
  props: {
    ticket: Object
  },
  data() {
    return {
    };
  },
  components: {
    Moviemessage
  },
};
</script>

<style lang="scss" scoped>

</style>