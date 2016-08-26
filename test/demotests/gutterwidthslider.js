module.exports = {
  '@tags' : ['dimensionspanel', 'grid', 'gutter'],
    'Step 1: page load' : function (browser) {
      var page = browser.page.pageload();

        page.navigate()
          page.pageload();
    
        page = browser.page.opensitemap();
          page.opensitemap();

        page = browser.page.opensite();
          page.opensite();
    },

    'Step 2: select text component (in iframe), click grid layout button, and open dimensions panel' : function (browser) {
      browser.frame(0) //selects iframe - must call to select anything within iframe
        .waitForElementVisible('.bc-text', 1000)
        .click('.bc-text')
        .frame(null) //closes iframe

        page = browser.page.gridlayoutbtn();  
          page.gridlayoutbtn();

        page = browser.page.opendimensionspanel();  
          page.opendimensionspanel();
    },  
      
    'Step 3: use slider to change gutter width' : function (browser) {
      browser.verify.elementPresent('[title="Gutter Width"]')
      browser.moveToElement('.ui-wrapper[title="Gutter Width"] .slider-wrapper input[type=range]', 50, 6)
          .mouseButtonDown(0)
            .frame(0) //selects iframe - must call to select anything within iframe
            .waitForElementVisible('.bc-grid.padding-5', 1000)
            .click('.bc-text')
            .frame(null) //closes iframe
          .moveToElement('.ui-wrapper[title="Gutter Width"] .slider-wrapper input[type=range]', 10, 6)
            .frame(0) //selects iframe - must call to select anything within iframe
            .waitForElementVisible('.bc-grid.padding-0', 1000)
            .click('.bc-text')
            .frame(null) //closes iframe
          .moveToElement('.ui-wrapper[title="Gutter Width"] .slider-wrapper input[type=range]', 80, 6)
            .frame(0) //selects iframe - must call to select anything within iframe
            .waitForElementVisible('.bc-grid.padding-8', 1000)
            .click('.bc-text')
            .frame(null) //closes iframe
          .moveToElement('.ui-wrapper[title="Gutter Width"] .slider-wrapper input[type=range]', 150, 6)
            .frame(0) //selects iframe - must call to select anything within iframe
            .waitForElementVisible('.bc-grid.padding-15', 1000)
            .click('.bc-text')
            .frame(null) //closes iframe
          .mouseButtonUp(0)
        page = browser.page.closepanel();  
          page.closepanel();
      
        browser.end();
    }
};