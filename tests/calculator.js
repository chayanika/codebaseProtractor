describe('demo calculator',function(){
    it('addition test', function(){
        // browser.get('https://juliemr.github.io/protractor-demo/');
        
        // element(by.model('first')).sendKeys('2');
        // element(by.model('second')).sendKeys('3');
        // element(by.css('[ng-click="doAddition()"]')).click();
          
        // let result = element(by.cssContainingText('.ng-binding', 5));

        // expect(result.getText()).toEqual('5');
        // browser.sleep(3000)
    
        browser.waitForAngularEnabled(false);
        browser.get('http://dft.auto.office/ux/login/');
        element(by.name('username_login')).clear().sendKeys('anay_user');
        element(by.id('password-field')).clear().sendKeys('admin1234a');
        element(by.id('loginButton')).click();

        browser.sleep(3000)
    }); 
    

    });
