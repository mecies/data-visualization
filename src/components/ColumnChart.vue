<template>
  <div class="column-chart-container">
    <column-chart :data="days" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      days: [
        ['Sun', 32],
        ['Mon', 46],
        ['Tue', 28],
        ['Fri', 100]
      ]
    };
  }
};
</script>

<style>
.column-chart-container {
  display: flex;
  justify-content: center;
  width: 80%;
}
</style>
