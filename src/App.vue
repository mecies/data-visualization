<template>
  <div id="app">
    <h1>Pie chart</h1>
    <PieChart />
    <h1>Line chart</h1>
    <LineChart />
    <h1>Column chart</h1>
    <ColumnChart />
  </div>
</template>

<script>
import PieChart from '@/components/PieChart.vue';
import LineChart from '@/components/LineChart.vue';
import ColumnChart from '@/components/ColumnChart.vue';

export default {
  components: {
    PieChart,
    LineChart,
    ColumnChart
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
