define({ 

	onViewCreated(){
      this.view.init = () => {
        this.view.flxComparisonContent.doLayout = () => {
          this.view.flxComparison.height = `${this.view.flxComparisonContent.frame.height + 30}dp`;
        };
        
        this.view.cmpHeader.onTouchEnd = () => new voltmx.mvc.Navigation('frmHome').navigate();
      };
    }

});