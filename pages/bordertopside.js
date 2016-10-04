var bordertopsideCommands = {
 bordertopsidebtnenabled: function() {
    this.verify.elementPresent('@bordertopsidebtn')
      .click('@bordertopsidebtn')
      this.verify.elementPresent('.ui-wrapper current [title="Apply Stroke to Top"')
  },

  bordertopsidebtndisabled: function() {
    this.verify.elementPresent('@bordertopsidebtn')
      .click('@bordertopsidebtn')
      this.verify.elementPresent('.ui-wrapper [title="Apply Stroke to Top"')
  }
};

module.exports = {
  commands: [bordertopsideCommands],
  elements: {
    bordertopsidebtn: {
    	selector: '[title="Apply Stroke to Top"]'
    }
  }
};
