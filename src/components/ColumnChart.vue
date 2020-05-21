<template>
  <div>
    <column-chart :chartData="chartData" />
  </div>
</template>

<script>
export default {
  props: {
    chartData: {
      type: Object,
      required: true
    }
  }
}
</script>
