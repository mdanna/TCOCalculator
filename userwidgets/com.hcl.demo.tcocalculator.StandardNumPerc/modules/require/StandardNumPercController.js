define(function() {

	return {
		constructor(baseConfig, layoutConfig, pspConfig) {
			this.view.preShow = () => {
              if(!this.initDone){
                this.view.flxLeft.onClick = () => {
                  this.selection = 'num';
                  this.onSelect('num');
                };
                this.view.flxRight.onClick = () => {
                  this.selection = 'perc';
                  this.onSelect('perc');
                };
              }
            };
		},
		
		initGettersSetters() {
            defineGetter(this, 'selection', () => {
                return this._selection;
            });
            defineSetter(this, 'selection', value => {
                this._selection = value;
              if(value === 'num'){
                  this.view.lblCheckedLeft.isVisible = true;
                  this.view.lblUncheckedLeft.isVisible = false;
                  this.view.lblCheckedRight.isVisible = false;
                  this.view.lblUncheckedRight.isVisible = true;
              } else if(value === 'perc'){
                  this.view.lblCheckedLeft.isVisible = false;
                  this.view.lblUncheckedLeft.isVisible = true;
                  this.view.lblCheckedRight.isVisible = true;
                  this.view.lblUncheckedRight.isVisible = false;
              } else {
                  this.view.lblCheckedLeft.isVisible = false;
                  this.view.lblUncheckedLeft.isVisible = true;
                  this.view.lblCheckedRight.isVisible = false;
                  this.view.lblUncheckedRight.isVisible = true;
              }
            });
        },
      
      onSelect(){}
	};
});