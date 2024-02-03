class DescriptiveStatistics {
  constructor(data) {
    this.data = data;
  }

  //Measures of Central Tendency
  mean() {
    return this.data.reduce((sum, value) => sum + value, 0) / this.data.length;
  }

  median() {
    const sortedData = [...this.data].sort((a, b) => a - b);
    const middleValue = Math.floor(sortedData.length / 2);

    return sortedData.length % 2 === 0
      ? (sortedData[middleValue - 1] + sortedData[middleValue]) / 2
      : sortedData[middleValue];
  }

  mode() {
    const freqTable = {};
    this.data.forEach((value) => {
      freqTable[value] = (freqTable[value] || 0) + 1;
    });
    const mode = Object.keys(freqTable).reduce((a, b) =>
      freqTable[a] > freqTable[b] ? a : b
    );
    return mode;
  }

  //Measures of Dispersion
  range() {
    return Math.max(...this.data) - Math.min(...this.data);
  }

  variance() {
    const mean = this.mean();
    return (
      this.data.reduce((sum, value) => sum + Math.pow(value - mean, 2), 0) /
      this.data.length
    );
  }

  //We use variance to calculate standard deviation
  standardDeviation() {
    return Math.sqrt(this.variance());
  }

  meanDeviation() {
    const mean = this.mean();
    return (
      this.data.reduce((sum, value) => sum + Math.abs(value - mean), 0) /
      this.data.length
    );
  }

  quartileDeviation() {
    const lowerQuartile = this.data[Math.floor(this.data.length / 4)];
    const upperQuartile = this.data[Math.floor((this.data.length * 3) / 4)];
    return (upperQuartile - lowerQuartile) / 2;
  }
}

const desStat = new DescriptiveStatistics([1, 5, 7, 15, 12, 9, 7]);

//Measures of Central Tendency
console.log("The Mean of the data is", desStat.mean());
console.log("The Median of the data is", desStat.median());
console.log("The Mode of the data is", desStat.mode());
//Measures of Dispersion
console.log("The Range of the data is", desStat.range());
console.log("The Variance of the data is", desStat.variance());
console.log(
  "The Standard Deviation of the data is",
  desStat.standardDeviation()
);
console.log("The Mean Deviation of the data is", desStat.meanDeviation());
console.log(
  "The Quartile Deviation of the data is",
  desStat.quartileDeviation()
);
