module.exports = {
  '@tags' : ['showhidepanel', 'hidden'],
    'Step 1: page load' : function (browser) {
      var page = browser.page.pageload();

        page.navigate()
          page.pageload();
    
        page = browser.page.opensitemap();
          page.opensitemap();

        page = browser.page.opensite();
          page.opensite();
    },

    'Step 2: select hide on all devices' : function (browser) {
        browser.frame(0) //selects iframe - must call to select anything within iframe
         .waitForElementVisible('.bc-text', 1000)
         .click('.bc-text')
         .frame(null) //closes iframe

       page = browser.page.openshowhidepanel();
         page.openshowhidepanel();

        page = browser.page.desktopbtn();  
          page.desktopbtn();

        page = browser.page.tabletlandscapebtn();  
          page.tabletlandscapebtn();

        page = browser.page.tabletportraitbtn();  
          page.tabletportraitbtn();

        page = browser.page.mobilebtn();  
          page.mobilebtn();
    },
       
      'Step 3: verify text component is hidden on all devices' : function (browser) { 
        browser.frame(0) //selects iframe - must call to select anything within iframe
          browser.assert.elementPresent('.focused.bc-desktop-hidden.bc-tablet-landscape-hidden.bc-tablet-hidden.bc-mobile-hidden.component-wrapper.bc-text-wrapper')
        browser.frame(null)
    },

      'Step 4: select show on all devices' : function (browser) {
          page = browser.page.showondesktopbtn();  
            page.showondesktopbtn();

          page = browser.page.showontabletlandscapebtn();  
            page.showontabletlandscapebtn();

          page = browser.page.showontabletportraitbtn();  
            page.showontabletportraitbtn();

          page = browser.page.showonmobilebtn();  
            page.showonmobilebtn();
    },

      'Step 5: verify hidden not applied to text component' : function (browser) { 
        browser.frame(0) //selects iframe - must call to select anything within iframe
          browser.assert.elementNotPresent('.focused.bc-desktop-hidden.bc-tablet-landscape-hidden.bc-tablet-hidden.bc-mobile-hidden.component-wrapper.bc-text-wrapper')
          browser.assert.elementPresent('.focused.component-wrapper.bc-text-wrapper')
        browser.frame(null)

         page = browser.page.closepanel();  
          page.closepanel();

          browser.end();
    }
};