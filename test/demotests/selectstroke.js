module.exports = {
  '@tags' : ['strokepanel'],
  'open stroke panel' : function (browser) {
    var page = browser.page.pageload();

    page.navigate()
      page.pageload();
    
    page = browser.page.opensite();
      page.opensite();

    page = browser.page.opensite();
      page.opensite(); 

      //selects column
     browser.frame(0) //selects iframe - must call to select anything within iframe
      .waitForElementVisible('.bc-text', 1000)
      .click('.bc-text')
      .frame(null) //closes iframe

      //selects stroke
      .assert.elementPresent('div.btn[title="Stroke"]')
      .click('div.btn[title="Stroke"]')
      .verify.elementPresent('[id="border-all_2"]')
      .click('[id="border-all_2"]')
      
      //close stroke panel
      .click('.svg-container')
      .verify.elementNotPresent('.panel-body')

      .frame(0) //selects iframe - must call to select anything within iframe
      .assert.cssProperty('.bc-text', 'border-width', '1px')
      .frame(null)
      browser.end();
    }
};
//.waitForElementVisible('[data-id="44856863-ffe6-44d4-8787-e0dad3c93ecf"]', 1000)