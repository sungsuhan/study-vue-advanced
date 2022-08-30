<template>
 <div>
   <div v-for="ask in ask" v-bind:key="ask.id">{{ ask.title }}</div>
 </div>
</template>

<script>
import { fetchAskList } from '@/api/index'

export default {
  data() {
    return {
      ask: []
    }
  },
  created() {
    fetchAskList()
        .then(response => {
          console.log(response);
          this.ask = response.data;
        })
        .catch(function (error) {
          console.log(error)
        })
  }
}
</script>

<style>
</style>
