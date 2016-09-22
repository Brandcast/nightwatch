var openwebsitebtnCommands = {
  openwebsitebtn: function() {
    this.api.resizeWindow(1050,1250)

    this.assert.elementPresent('[data-qa-id="open-website-button"]')
    .moveToElement('[data-qa-id="open-website-button"]', 2, 2);

    this.api.mouseButtonClick();

    this.verify.containsText('.overlay-label.drag-handle', 'Open Website')
  },
};


module.exports = {
  commands: [openwebsitebtnCommands],
 elements: {
    openwebsitebtn: {
    	selector: '.btn-text [data-qa-id="open-website-button"]'
    }
  }
};
