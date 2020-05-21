<template>
  <div id="app">
    <button @click="reloadCharts">Generate dashboard</button>
    <div class="container">
      <PieChart v-for="index in 2" :key="`pie-${index}`" :chartData="generatePieChartData()" />
      <LineChart v-for="index in 2" :key="`line-${index}`" :chartData="generateLineChartData()" />
    </div>
  </div>
</template>

<script>
import PieChart from '@/components/PieChart.vue'
import generateDataMixin from '@/mixins/generateData'
import LineChart from '@/components/LineChart.vue'

export default {
  mixins: [generateDataMixin],
  components: {
    PieChart,
    LineChart
  },
  methods: {
    reloadCharts() {
      this.$forceUpdate()
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .container {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
}
</style>
