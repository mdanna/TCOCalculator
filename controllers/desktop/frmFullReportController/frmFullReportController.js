define({ 

	onViewCreated(){
      this.view.init = () => {
        this.view.cmpHeader.onTouchEnd = () => new voltmx.mvc.Navigation('frmHome').navigate();
      };
      
      this.view.preShow = () => {
        const {numApps, numUsers, numSimple, numComplex, numModerate, isPerc = false, percSimple = '0', percModerate = '0', percComplex = '0'} = this.navigationContext;
        this.view.lblNumApps.text = numApps + '';
        this.view.lblUsersNumApps.text = numApps + '';
        this.view.lblNumUsers.text = numUsers + '';
        this.view.lblNumSimple.text = numSimple + (isPerc ? '%' : '');
        this.view.lblNumModerate.text = numModerate + (isPerc ? '%' : '');
        this.view.lblNumComplex.text = numComplex + (isPerc ? '%' : '');
      }
    }

});