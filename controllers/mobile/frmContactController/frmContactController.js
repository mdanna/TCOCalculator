define({ 
  SKIN_ENABLE: 'sknLblBlackSemiBold80',
  SKIN_DISABLE: 'sknLblDarkGreySemiBold80',

  onViewCreated(){
    this.view.init = () => {
      this.view.contactHeader.onClickButton = () => {
        new voltmx.mvc.Navigation('frmResults').navigate(this.navigationContext);
      };

      this.view.flxSeeFullReport.onClick = () => {
        if(this.view.lblSeeFullReport.skin === this.SKIN_ENABLE){
          new voltmx.mvc.Navigation('frmFullReport').navigate(this.navigationContext);
        }
      };

      this.view.fieldEmail.onTextChange = () => this.view.lblSeeFullReport.skin = this.check() ? this.SKIN_ENABLE : this.SKIN_DISABLE;
      this.view.fieldFirstName.onTextChange = () => this.view.lblSeeFullReport.skin = this.check() ? this.SKIN_ENABLE : this.SKIN_DISABLE;
      this.view.fieldLastName.onTextChange = () => this.view.lblSeeFullReport.skin = this.check() ? this.SKIN_ENABLE : this.SKIN_DISABLE;
      this.view.fieldCompany.onTextChange = () => this.view.lblSeeFullReport.skin = this.check() ? this.SKIN_ENABLE : this.SKIN_DISABLE;
      this.view.checkBoxUS.onSelect = () => this.view.lblSeeFullReport.skin = this.check() ? this.SKIN_ENABLE : this.SKIN_DISABLE;
      this.view.checkBoxPolicy.onSelect = () => this.view.lblSeeFullReport.skin = this.check() ? this.SKIN_ENABLE : this.SKIN_DISABLE;
    };

  },

  check(){
    return this.view.fieldEmail.text &&
      this.view.fieldFirstName.text &&
      this.view.fieldLastName.text &&
      this.view.fieldCompany.text &&
      this.view.checkBoxUS.selected &&
      this.view.checkBoxPolicy.selected;
  }


});



