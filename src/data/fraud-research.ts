import research from "./fraud-research.json";
export const fraudResearch = research;
export const fraudDisplay = {
  ap: research.averagePrecision.toFixed(3),
  recall: `${(research.recall * 100).toFixed(1)}%`,
  precision: `${(research.precision * 100).toFixed(1)}%`,
  caught: research.confusion.tp.toLocaleString("en-US"),
  prevalence: `${((research.totalFraud / research.totalTransactions) * 100).toFixed(1)}%`,
  get metric() {
    return `${this.ap} PR-AUC · ${this.recall} recall`;
  },
};
