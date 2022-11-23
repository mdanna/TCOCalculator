define(function() {
  
  const SKIN_ENABLE = 'sknLblBlack70';
  const SKIN_DISABLE = 'sknLblDarkGrey70';

	return {
      constructor(baseConfig, layoutConfig, pspConfig) {
		this.view.preShow = () => {
          if(!this.initDone){
            this.view.flxClose.onClick = () => this.view.isVisible = false;
            
            this.view.flxSeeFullReport.onClick = () => {
              if(this.view.lblSeeFullReport.skin === SKIN_ENABLE){
                this.view.isVisible = false;
                this.onClickOk();
              }
            };
            
            this.view.fieldEmail.onTextChange = () => this.view.lblSeeFullReport.skin = this.check() ? SKIN_ENABLE : SKIN_DISABLE;
            this.view.fieldFirstName.onTextChange = () => this.view.lblSeeFullReport.skin = this.check() ? SKIN_ENABLE : SKIN_DISABLE;
            this.view.fieldLastName.onTextChange = () => this.view.lblSeeFullReport.skin = this.check() ? SKIN_ENABLE : SKIN_DISABLE;
            this.view.fieldCompany.onTextChange = () => this.view.lblSeeFullReport.skin = this.check() ? SKIN_ENABLE : SKIN_DISABLE;
            this.view.checkBoxUS.onSelect = () => this.view.lblSeeFullReport.skin = this.check() ? SKIN_ENABLE : SKIN_DISABLE;
            this.view.checkBoxPolicy.onSelect = () => this.view.lblSeeFullReport.skin = this.check() ? SKIN_ENABLE : SKIN_DISABLE;
            
            
            this.initDone = true;
          }
        };
      },
      
      initGettersSetters() {},
      
      onClickOk(){},
      
      show(){
//         this.view.lblSeeFullReport.skin = SKIN_DISABLE;
//         this.view.fieldEmail.text = '';
//         this.view.fieldFirstName.text = '';
//         this.view.fieldLastName.text = '';
//         this.view.fieldCompany.text = '';
//         this.view.checkBoxUS.selected = false;
//         this.view.checkBoxPolicy.selected = false;
        this.view.isVisible = true;
      },
      
      check(){
        return this.view.fieldEmail.text &&
          this.view.fieldFirstName.text &&
          this.view.fieldLastName.text &&
          this.view.fieldCompany.text &&
          this.view.checkBoxUS.selected &&
          this.view.checkBoxPolicy.selected;
      }
	};
});