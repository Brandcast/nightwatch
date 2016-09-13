var hideallhiddenelementsbtnCommands = {
  hideallhiddenelementsbtn: function() {
    this.verify.elementPresent('.ui-wrapper.auto-width.current[title="View All Hidden Elements"] .btn')
       .click('@viewallhiddenelementsbtn') 
       this.verify.elementPresent('.ui-wrapper.auto-width[title="View All Hidden Elements"] .btn')
  }
};

module.exports = {
  commands: [hideallhiddenelementsbtnCommands],
  elements: {
   viewallhiddenelementsbtn : {
    	selector: '[title="View All Hidden Elements"] .btn'
    }
  }
};
