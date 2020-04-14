let loginpage = function(){


    let user_name = element(by.name('username_login'));
    let password = element(by.id('password-field'));
    let login_button = element(by.id('loginButton'));
    
    this.get = function(url) {
        browser.get(url);
      };

    this.enterUserName = function(userName){
        user_name.sendKeys(userName);
    };

    this.enterPassword= function(passwrd){
        password.sendKeys(passwrd);
    };

    this.loginUser= function(){
        login_button.click();
        browser.sleep(15000)
    };

    this.verifyResult = function(){
        expect(element(by.xpath('//span[@class="icon-activity jx-gl-email"]')).isPresent()).toBe(true);
    }

};

module.exports = new loginpage();