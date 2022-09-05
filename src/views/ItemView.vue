<template>
  <div>
    <p>name : {{ itemInfo }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    itemInfo() {
      return this.$store.state.item;
    }
  },
  created() {
    const id = this.$route.name;
    this.$store.dispatch('FETCH_ITEM', id);
  }
}
</script>

<style>
</style>
