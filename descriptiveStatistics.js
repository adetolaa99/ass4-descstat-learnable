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

  //We have to use variance to get standard deviation so we calculate it first
  variance() {
    const mean = this.mean();
    return (
      this.data.reduce((sum, value) => sum + Math.pow(value - mean, 2), 0) /
      this.data.length
    );
  }
  standardDeviation() {
    return Math.sqrt(this.variance());
  }
}

const desStat = new DescriptiveStatistics([1, 2, 3, 4, 5]);
console.log("The Mean is", desStat.mean());
console.log("The Median is", desStat.median());
console.log("The Mode is", desStat.mode());

console.log("The Range is", desStat.range());
console.log("The Standard Deviation is", desStat.standardDeviation());
