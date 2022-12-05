define(function() {

  return {
    setData(costMXGo, costCompetitor, numApps){
      this.view.lblTotalMXGoCost.text = `$${costMXGo.toFixed(1)}K`;
      this.view.lblTotalCompetitorCost.text = `$${costCompetitor.toFixed(1)}K`;
      this.view.lblTotalSavings.text = `$${(costCompetitor - costMXGo).toFixed(1)}K`;
      this.view.lblTotalSaved.text = `${(((costCompetitor - costMXGo) / costCompetitor) * 100).toFixed(1)}%`;
      this.view.lblSavingsPerApp.text = `$${((costCompetitor - costMXGo) / numApps).toFixed(1)}K`;
    }
  };
});