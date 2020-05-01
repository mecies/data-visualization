<template>
  <pie-chart :data="fruits" />
</template>

<script>
export default {
  data() {
    return {
      fruits: [
        ['Blueberry', 44],
        ['Strawberry', 23],
        ['Orange', 33]
      ]
    };
  }
};
</script>

<style></style>
