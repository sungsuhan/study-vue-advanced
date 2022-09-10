<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem'
// import ListMixin from "@/mixins/ListMixin";

export default {
  components: {
    ListItem
  },
  // created() {
  //   bus.$emit('start:spinner');
  //   this.$store.dispatch('FETCH_NEWS')
  //       .then(() => {
  //         console.log('fetched')
  //         bus.$emit('end:spinner')
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       })
  // },
  // mixins: [ListMixin]
}
</script>

<style>
</style>
