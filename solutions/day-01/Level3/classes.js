class Statistics {
  constructor() {
    this._data = [];
  }

  addDataPoint(dataPoint) {
    this._data.push(dataPoint);
  }

  get data() {
    return this._data;
  }

  get mean() {
    return this._data.reduce((a, b) => a + b) / this._data.length;
  }

  get median() {
    const sorted = this._data.slice().sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);
    return sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
  }

  get mode() {
    return this._data.reduce((a, b, i, arr) => arr.filter(v => v === a).length >= arr.filter(v => v === b).length ? a : b);
  }
}

const stats = new Statistics();
stats.addDataPoint(1);
stats.addDataPoint(2);
stats.addDataPoint(3);

console.log(stats.data);
console.log(stats.mean);
console.log(stats.median);
console.log(stats.mode);
