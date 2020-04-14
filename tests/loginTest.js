let loginpage = require('../pages/loginpage');

describe('Login Successfully',function(){

    var originalTimeout;

    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    });

    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

    it('login pass', function(){
            
         browser.waitForAngularEnabled(false);

        loginpage.get('http://dft.auto.office/ux/login/');
        loginpage.enterUserName('anay_user');
        loginpage.enterPassword('admin1234a');
        loginpage.loginUser();
        loginpage.verifyResult();

        // browser.get('http://dft.auto.office/ux/login/');
        // element(by.name('username_login')).clear().sendKeys('anay_user');
        // element(by.id('password-field')).clear().sendKeys('admin1234a');
        // element(by.xpath('//button[@id="loginButton"]')).click();
        // browser.sleep(10000)
        // element(by.xpath('//span[@class="icon-activity jx-gl-email"]')).click();

        browser.sleep(3000)
    }); 
    
    it('login fail', function(){
            
      browser.waitForAngularEnabled(false);

     loginpage.get('http://dft.auto.office/ux/login/');
     loginpage.enterUserName('anay_user');
     loginpage.enterPassword('admin1234a');
     loginpage.loginUser();
     loginpage.verifyResult1();

     // browser.get('http://dft.auto.office/ux/login/');
     // element(by.name('username_login')).clear().sendKeys('anay_user');
     // element(by.id('password-field')).clear().sendKeys('admin1234a');
     // element(by.xpath('//button[@id="loginButton"]')).click();
     // browser.sleep(10000)
     // element(by.xpath('//span[@class="icon-activity jx-gl-email"]')).click();

     browser.sleep(3000)
 }); 

    });
