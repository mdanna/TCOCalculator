define(function() {

  return {
    setData(costMXGo, costCompetitor, numApps){
      this.view.lblTotalMXGoCost.text = `$${Math.round(costMXGo / 1000)}K`;
      this.view.lblTotalCompetitorCost.text = `$${Math.round(costCompetitor / 1000)}K`;
      this.view.lblTotalSavings.text = `$${Math.round((costCompetitor - costMXGo)/ 1000)}K`;
      this.view.lblTotalSaved.text = `${(((costCompetitor - costMXGo) / costCompetitor) * 100).toFixed(1)}%`;
      this.view.lblSavingsPerApp.text = `$${((costCompetitor - costMXGo) / numApps / 1000).toFixed(1)}K`;
    }
  };
});