define({ 

  onViewCreated(){
    this.view.init = () => {
      this.view.resultsHeader.onClickButton = () => {
        new voltmx.mvc.Navigation('frmHome').navigate();
      };

      this.view.flxSeeFullReport.onClick = () => new voltmx.mvc.Navigation('frmContact').navigate(this.navigationContext);
      
      this.view.flxSeeHow.onClick = () => new voltmx.mvc.Navigation('frmHow').navigate(this.navigationContext);
    };

    this.view.preShow = () => {
      const {costMXGoYear1, costCompetitorYear1} = tco.calculate(this.navigationContext);
      const overallSavings = Math.round(((costCompetitorYear1 - costMXGoYear1)/costCompetitorYear1) * 100);
      const totalSavings = Math.round((costCompetitorYear1 - costMXGoYear1) / 1000);
      this.view.lblOverallSavings.text = `${overallSavings}%`;
      this.view.lblTotalSavings.text = `$${totalSavings}K`;
    };
  }

});