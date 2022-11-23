define(function() {
  
  const SKIN_ENABLE = 'sknLblBlack70';
  const SKIN_DISABLE = 'sknLblDarkGrey70';

	return {
      constructor(baseConfig, layoutConfig, pspConfig) {
		this.view.preShow = () => {
          if(!this.initDone){
            this.view.flxClose.onClick = () => this.view.isVisible = false;
            this.initDone = true;
          }
        };
      },
      
      initGettersSetters() {},
      
	};
});