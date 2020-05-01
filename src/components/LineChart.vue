<template>
  <div class="line-chart-container">
    <line-chart :data="scores" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      scores: {
        '2017-01-01': 5,
        '2017-01-02': 10,
        '2017-03-01': 7,
        '2017-04-02': 12,
        '2017-05-01': 9,
        '2017-06-02': 14
      }
    };
  }
};
</script>

<style scoped>
.line-chart-container {
  display: flex;
  justify-content: center;
  width: 80%;
}
</style>
