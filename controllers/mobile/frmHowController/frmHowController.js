define({ 

  onViewCreated(){
    this.view.init = () => {
      this.view.howHeader.onClickButton = () => {
        new voltmx.mvc.Navigation('frmResults').navigate(this.navigationContext);
      };
      
      this.view.flxComparisonContent.doLayout = () => {
        this.view.flxComparison.height = `${this.view.flxComparisonContent.frame.height}dp`;
      };
    };
  }

});