define({ 

  onViewCreated(){
    this.view.init = () => {

      this.view.fieldNumPerc.onSelect = (selection) => {
        this.view.flxNumPerc.isVisible = true;
        this.view.flxActions.isVisible = true;
        this.view.fieldSimple.text = '';
        this.view.fieldModerate.text = '';
        this.view.fieldComplex.text = '';
        this.view.fieldSimple.placeholder = selection === 'num' ? 'Number simple applications' : 'Percentage simple applications';
        this.view.fieldModerate.placeholder = selection === 'num' ? 'Number moderate applications' : 'Percentage moderate applications';
        this.view.fieldComplex.placeholder = selection === 'num' ? 'Number complex applications' : 'Percentage complex applications';
      };

      this.view.flxCalculate.onClick = () => {
        if(this.validate()){
          const appsData = this.getAppsData();
          const {costMXGoYear1, costCompetitorYear1} = tco.calculate(appsData);
          const overallSavings = parseFloat((((costCompetitorYear1 - costMXGoYear1)/costCompetitorYear1) * 100).toFixed(1)).toLocaleString();
          const totalSavings = parseFloat(((costCompetitorYear1 - costMXGoYear1)).toFixed(1)).toLocaleString();
          this.view.lblOverallSavingsValue.text = `${overallSavings}%`;
          this.view.lblTotalSavingsValue.text = `$${totalSavings}K`;
          this.view.flxResultsInfo.isVisible = true;
        }
      };

      this.view.lblReset.onTouchEnd = () => {
        this.view.fieldHowManyApps.text = '';
        this.view.fieldHowManyUsers.text = '';
        this.view.flxNumPerc.isVisible = false;
        this.view.flxActions.isVisible = false;
        this.view.fieldNumPerc.selection = 'none';
        this.view.lblOverallSavingsValue.text = '--%';
        this.view.lblTotalSavingsValue.text = '$--';
        this.view.flxResultsInfo.isVisible = false;
      };

      this.view.flxSeeHow.onClick = () => new voltmx.mvc.Navigation('frmHow').navigate();

      this.view.flxSeeFullReport.onClick = () => {
        tco.user ? this.navigateToFullReport() : this.view.popupContactInfo.show();
      };

      this.view.popupContactInfo.onClickOk = () => {
        tco.user = {
          email: this.view.popupContactInfo.email,
          company: this.view.popupContactInfo.company,
          firstName: this.view.popupContactInfo.firstName,
          lastName: this.view.popupContactInfo.lastName
        };
        this.navigateToFullReport();
      };

      const checkOnTextChange = () => {
        if(this.validateEntries()){
          this.view.fieldSimple.skinField = 'sknFlxRoundedBorderWhite';
          this.view.fieldModerate.skinField = 'sknFlxRoundedBorderWhite';
          this.view.fieldComplex.skinField = 'sknFlxRoundedBorderWhite';
        } else {
          this.view.fieldSimple.skinField = 'sknFlxRoundedBorderRed';
          this.view.fieldModerate.skinField = 'sknFlxRoundedBorderRed';
          this.view.fieldComplex.skinField = 'sknFlxRoundedBorderRed';
        }
      };

      this.view.fieldHowManyApps.onTextChange = () => {
        if(this.view.fieldNumPerc.selection === 'perc' || this.view.fieldNumPerc.selection === 'num'){
          checkOnTextChange();
        }
      };
      this.view.fieldSimple.onTextChange = () => checkOnTextChange();
      this.view.fieldModerate.onTextChange = () => checkOnTextChange();
      this.view.fieldComplex.onTextChange = () => checkOnTextChange();
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
      numSimple = numApps / 100 * parseFloat(this.view.fieldSimple.text.replace(',', '.'));
      numModerate = numApps / 100 * parseFloat(this.view.fieldModerate.text.replace(',', '.'));
      numComplex = numApps / 100 * parseFloat(this.view.fieldComplex.text.replace(',', '.'));
      if(Math.round(numSimple + numModerate + numComplex) !== numApps){
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

  validateEntries(){
    const numApps = parseInt(this.view.fieldHowManyApps.text || '0');
    let numSimple, numModerate, numComplex;
    if(this.view.fieldNumPerc.selection === 'perc'){
      numSimple = numApps / 100 * parseFloat((this.view.fieldSimple.text || '0').replace(',', '.'));
      numModerate = numApps / 100 * parseFloat((this.view.fieldModerate.text || '0').replace(',', '.'));
      numComplex = numApps / 100 * parseFloat((this.view.fieldComplex.text || '0').replace(',', '.'));
      if(Math.round(numSimple + numModerate + numComplex) !== numApps){
        return false;
      }      
    } else {
      numSimple = parseInt(this.view.fieldSimple.text || '0');
      numModerate = parseInt(this.view.fieldModerate.text || '0');
      numComplex = parseInt(this.view.fieldComplex.text || '0');
      if((numSimple + numModerate + numComplex) !== numApps){
        return false;
      }
    }
    return true;    
  },

  getAppsData(){
    const numApps = parseInt(this.view.fieldHowManyApps.text);
    const numUsers = parseInt(this.view.fieldHowManyUsers.text);
    let numSimple, numModerate, numComplex;
    if(this.view.fieldNumPerc.selection === 'perc'){
      numSimple = numApps / 100 * parseFloat(this.view.fieldSimple.text.replace(',', '.'));
      numModerate = numApps / 100 * parseFloat(this.view.fieldModerate.text.replace(',', '.'));
      numComplex = numApps / 100 * parseFloat(this.view.fieldComplex.text.replace(',', '.'));
    } else {
      numSimple = parseInt(this.view.fieldSimple.text);
      numModerate = parseInt(this.view.fieldModerate.text);
      numComplex = parseInt(this.view.fieldComplex.text);
    }
    return {numApps, numUsers, numSimple, numModerate, numComplex};
  },

  navigateToFullReport(){
    const isPerc = this.view.fieldNumPerc.selection === 'perc';
    const appsData = this.getAppsData();
    const navigationData = isPerc ? {
      ...appsData,
      percSimple: this.view.fieldSimple.text,
      percModerate: this.view.fieldModerate.text,
      percComplex: this.view.fieldComplex.text,
      isPerc
    } : appsData;
    new voltmx.mvc.Navigation('frmFullReport').navigate(navigationData);
  }
});