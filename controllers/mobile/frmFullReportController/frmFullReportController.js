define({ 

  onViewCreated(){
    this.view.init = () => {
      this.view.fullReportHeader.onClickButton = () => {
        new voltmx.mvc.Navigation('frmResults').navigate(this.navigationContext);
      };
    };

    this.view.preShow = () => {
      const {numApps, numUsers, numSimple, numComplex, numModerate, isPerc = false, percSimple = '0', percModerate = '0', percComplex = '0'} = this.navigationContext;
      this.view.lblNumApps.text = numApps.toLocaleString() + '';
      this.view.lblUsersNumApps.text = numApps.toLocaleString() + '';
      this.view.lblNumUsers.text = numUsers.toLocaleString() + '';
      this.view.lblNumSimple.text = isPerc ? `${percSimple}%` : `${numSimple.toLocaleString()}`;
      this.view.lblNumModerate.text = isPerc ? `${percModerate}%` : `${numModerate.toLocaleString()}`;
      this.view.lblNumComplex.text = isPerc ? `${percComplex}%` : `${numComplex.toLocaleString()}`;

      const {costMXGoYear1, costCompetitorYear1, costMXGoYear3, costCompetitorYear3, costMXGoYear5, costCompetitorYear5} = tco.calculate(this.navigationContext);

      this.view.year1.setData(costMXGoYear1, costCompetitorYear1, numApps);
      this.view.year3.setData(costMXGoYear3, costCompetitorYear3, numApps);
      this.view.year5.setData(costMXGoYear5, costCompetitorYear5, numApps);
    };

  }

});