define(function() {

  return {
    setData(costMXGo, costCompetitor, numApps){
      this.view.lblTotalMXGoCost.text = `$${parseFloat(costMXGo.toFixed(1)).toLocaleString()}K`;
      this.view.lblTotalCompetitorCost.text = `$${parseFloat(costCompetitor.toFixed(1)).toLocaleString()}K`;
      this.view.lblTotalSavings.text = `$${parseFloat((costCompetitor - costMXGo).toFixed(1)).toLocaleString()}K`;
      this.view.lblTotalSaved.text = `${parseFloat((((costCompetitor - costMXGo) / costCompetitor) * 100).toFixed(1)).toLocaleString()}%`;
      this.view.lblSavingsPerApp.text = `$${parseFloat(((costCompetitor - costMXGo) / numApps).toFixed(1)).toLocaleString()}K`;
    }
  };
});