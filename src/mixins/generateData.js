const generateDataMixin = {
  methods: {
    generatePieChartData: () => {
      const response = [
        ['X', Math.floor(Math.random() * 100)],
        ['Y', Math.floor(Math.random() * 100)]
      ]
      return response
    },
    generateLineChartData: () => {
      const response = {}
      for (let i = 1; i <= 9; i += 1) {
        response[`2017-01-0${i}`] = Math.floor(Math.random() * 100)
      }
      return response
    }
  }
}
// Array.from({ length: 2 }, () => Math.floor(Math.random() * 150)),

export default generateDataMixin
