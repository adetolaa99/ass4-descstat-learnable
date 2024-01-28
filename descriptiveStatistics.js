class DescriptiveStatistics {
  constructor(data) {
    this.data = data;
  }

  mean() {
    return this.data.reduce((sum, value) => sum + value, 0) / this.data.length;
  }
}

const desStat = new DescriptiveStatistics([1, 2, 3, 4, 5]);
console.log("The mean is", desStat.mean());
