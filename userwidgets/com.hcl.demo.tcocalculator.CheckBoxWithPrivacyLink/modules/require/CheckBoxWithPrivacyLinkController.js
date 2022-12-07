define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this.view.preShow = () => {
        if(!this.initDone){
          this.view.flxClickable.onClick = () => {
            this.selected = !this.selected;
            this.onSelect(this.selected);
          };
          
          this.view.lblPrivacy.onTouchEnd = () => voltmx.application.openURL("https://www.hcltech.com/privacy-statement");
          this.initDone = true;
        }
        
        this.view.lblChecked.isVisible = this.selected;
        this.view.lblUnchecked.isVisible = !this.selected;
      };	
    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {
      defineGetter(this, 'selected', () => {
        return this._selected;
      });
      defineSetter(this, 'selected', (value) => {
        this._selected = value;
        try{
          this.view.lblChecked.isVisible = value;
          this.view.lblUnchecked.isVisible = !value;
        } catch(ignore){}
      });
    },
    
    onSelect(){}
  };
});