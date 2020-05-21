<template>
  <pie-chart :data="chartData" />
</template>

<script>
export default {
  props: {
    chartData: {
      type: Array,
      required: true
    }
  }
}
</script>
