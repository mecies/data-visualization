<template>
  <div>
    <line-chart :data="chartData" />
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
