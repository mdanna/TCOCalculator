define({ 

  onViewCreated(){
    this.view.init = () => {

      this.view.fieldNumPerc.onSelect = (selection) => {
        this.view.flxNumPerc.isVisible = true;
        this.view.fieldSimple.text = '';
        this.view.fieldModerate.text = '';
        this.view.fieldComplex.text = '';
        this.view.fieldSimple.placeholder = selection === 'num' ? 'Number simple applications' : 'Percentage simple applications';
        this.view.fieldModerate.placeholder = selection === 'num' ? 'Number moderate applications' : 'Percentage moderate applications';
        this.view.fieldComplex.placeholder = selection === 'num' ? 'Number complex applications' : 'Percentage complex applications';
      };

      this.view.flxCalculate.onClick = () => {
        if(this.validate()){
          const isPerc = this.view.fieldNumPerc.selection === 'perc';
          const percSimple = isPerc ? parseInt(this.view.fieldSimple.text) : 0;
          const percModerate = isPerc ? parseInt(this.view.fieldModerate.text) : 0;
          const percComplex = isPerc ? parseInt(this.view.fieldComplex.text) : 0;
          const appsData = this.getAppsData();
          new voltmx.mvc.Navigation('frmResults').navigate({
            ...appsData,
            isPerc,
            percSimple,
            percModerate,
            percComplex
          });
        }
      };

      this.view.lblReset.onTouchEnd = () => {
        this.view.fieldHowManyApps.text = '';
        this.view.fieldHowManyUsers.text = '';
        this.view.flxNumPerc.isVisible = false;
        this.view.fieldNumPerc.selection = 'none';
      };

    };
  },

  validate(){
    this.view.fieldHowManyApps.text = '' + parseInt(this.view.fieldHowManyApps.text || '0');
    this.view.fieldHowManyUsers.text = '' + parseInt(this.view.fieldHowManyUsers.text || '0');
    this.view.fieldSimple.text = this.view.fieldSimple.text || '0';
    this.view.fieldModerate.text = this.view.fieldModerate.text || '0';
    this.view.fieldComplex.text = this.view.fieldComplex.text || '0';

    const numApps = parseInt(this.view.fieldHowManyApps.text);
    const numUsers = parseInt(this.view.fieldHowManyUsers.text);

    if(!numApps){
      this.view.popupAlert.text = 'Please specify the Number of Applications.';
      this.view.popupAlert.isVisible = true;
      return false;
    }

    if(!numUsers){
      this.view.popupAlert.text = 'Please specify the Number of Users.';
      this.view.popupAlert.isVisible = true;
      return false;
    }

    let numSimple, numModerate, numComplex;
    if(this.view.fieldNumPerc.selection === 'perc'){
      numSimple = Math.round(numApps / 100 * parseFloat(this.view.fieldSimple.text.replace(',', '.')));
      numModerate = Math.round(numApps / 100 * parseFloat(this.view.fieldModerate.text.replace(',', '.')));
      numComplex = Math.round(numApps / 100 * parseFloat(this.view.fieldComplex.text.replace(',', '.')));
      if(numSimple + numModerate + numComplex !== numApps){
        this.view.popupAlert.text = 'Invalid Percentage Values.';
        this.view.popupAlert.isVisible = true;
        return false;
      }      
    } else {
      numSimple = parseInt(this.view.fieldSimple.text);
      numModerate = parseInt(this.view.fieldModerate.text);
      numComplex = parseInt(this.view.fieldComplex.text);
      if((numSimple + numModerate + numComplex) !== numApps){
        this.view.popupAlert.text = 'The Sum of Simple, Moderate and Complex must equal the total Number of Applications.';
        this.view.popupAlert.isVisible = true;
        return false;
      }
    }

    return true;

  },

  getAppsData(){
    const numApps = parseInt(this.view.fieldHowManyApps.text);
    const numUsers = parseInt(this.view.fieldHowManyUsers.text);
    let numSimple, numModerate, numComplex;
    const isPerc = this.view.fieldNumPerc.selection === 'perc';
    if(isPerc){
      numSimple = Math.round(numApps / 100 * parseFloat(this.view.fieldSimple.text.replace(',', '.')));
      numModerate = Math.round(numApps / 100 * parseFloat(this.view.fieldModerate.text.replace(',', '.')));
      numComplex = Math.round(numApps / 100 * parseFloat(this.view.fieldComplex.text.replace(',', '.')));
    } else {
      numSimple = parseInt(this.view.fieldSimple.text);
      numModerate = parseInt(this.view.fieldModerate.text);
      numComplex = parseInt(this.view.fieldComplex.text);
    }
    return {numApps, numUsers, numSimple, numModerate, numComplex};
  }
});