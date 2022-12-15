define({ 

  onViewCreated(){
    this.view.init = () => {
      this.view.resultsHeader.onClickButton = () => {
        new voltmx.mvc.Navigation('frmHome').navigate();
      };

      this.view.flxSeeFullReport.onClick = () => {
        tco.user ? new voltmx.mvc.Navigation('frmFullReport').navigate(this.navigationContext) : 
        new voltmx.mvc.Navigation('frmContact').navigate(this.navigationContext);
      };

      this.view.flxSeeHow.onClick = () => new voltmx.mvc.Navigation('frmHow').navigate(this.navigationContext);
    };

    this.view.preShow = () => {
      const {costMXGoYear1, costCompetitorYear1} = tco.calculate(this.navigationContext);
      const overallSavings = (((costCompetitorYear1 - costMXGoYear1)/costCompetitorYear1) * 100).toFixed(1);
      const totalSavings = (costCompetitorYear1 - costMXGoYear1).toFixed(1);
      this.view.lblOverallSavings.text = `${overallSavings}%`;
      this.view.lblTotalSavings.text = `$${totalSavings}K`;
    };
  }

});