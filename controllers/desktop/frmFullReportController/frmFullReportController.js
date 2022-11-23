define({ 

	onViewCreated(){
      this.view.init = () => {
        this.view.cmpHeader.onTouchEnd = () => new voltmx.mvc.Navigation('frmHome').navigate();
      };
    }

});