module.exports = {
  '@tags' : ['sitemap', 'gloabl styles'],
  'step 1: load page' : function (browser) {
    var page = browser.page.pageload();

    page.navigate()
      page.pageload();

    page = browser.page.openwebsitebtn();
      page.openwebsitebtn();
  },
  
  'step 2: open site map and site editor' : function (browser) {
    page = browser.page.opensitemap();
      page.opensitemap(); 

      page = browser.page.opensite();
        page.opensite();
  },

  'step 3: open gloabl styles menu' : function (browser) {
    page = browser.page.globalstylespanel();
      page.openglobalstylespanel(); 

    page = browser.page.closepanel();  
      page.closepanel();

      browser.end()
  },
};

