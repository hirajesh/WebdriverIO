


class SignIn {
  //ELEMENTS
  //===============

  get herokuusername() {
    return $("#username");
  }
  get herokupassword() {
    return $("#password");
  }
  get herokuLoginbutton() {
    return $('//button[@type="submit"]');
  }
  get herokuloginpagetext() {
    return $("//h2");
  }

  get herokuloginmessage() {
    return $("#flash");
  }
  get herokulogout() {
    return $('//*[@id="content"]/div/a/i');
  }

  get lansignIn() {
    return $("#account-actions-signin");
  }
  get lanpassWord() {
    return $('//*[@id="standalone-j_password"]');
  }
  get lanuserName() {
    return $('//*[@id="standalone-j_username"]');
  }
  get lanlogin() {
    return $("#standalone-signin-form-submit");
  }
  get lancloseverify() {
    return $('//*[@id="device-id-close"]');
  }
  get lanbasket() {
    return $('//*[text()="Basket"]');
  }

  // ACTIONS
  //=============
  // Heroku
  //=======
  async openherokuurl() {
    await browser.url("https://the-internet.herokuapp.com/login");
  }
  async enterherokuusername() {
    await this.herokuusername.setValue("tomsmith");
  }

  async enterherokupassword() {
    await this.herokupassword.setValue("SuperSecretPassword!");
  }
  async clickherokulogin() {
    await this.herokuLoginbutton.click();
  }
  async clickherokulogout() {
    await this.herokulogout.click();
  }
  async herokuloginpagemessage() {
    var message = await this.herokuloginpagetext.getText();
    console.log("Message is " + message);
    assert.equal("Login Page", message, "This is not login page");
  }
  async herokudashboardmessage() {
    var messages = await (await this.herokuloginpagetext.getText()).trim();
    console.log("Message is " + messages);
    assert.equal("Secure Area", messages, "This is not dashboard page");
  }

  async clickherokulogout() {
    await this.herokulogout.click();
  }

  // Landmark actions
  //===================

  async landopenurl() {
    await browser.maximizeWindow();
   // await browser.url("https://lms.com:L@digital@uat1.homecentre.com/ae/en/");
//await browser.url("https://www.homecentre.com/ae/en/");
    await browser.url("https://www.homecentre.com/ae/en/?X-Forwarded-For : 192.23.23.33");


    await browser.setTimeout({ pageLoad: 50000 });
    browser.saveScreenshot("./Screenshots/homepage.png");
  }
  async land_signIN() {
    await this.lansignIn.click();
    browser.saveScreenshot("./Screenshots/signinpage.png");
    await browser.setTimeout({ pageLoad: 50000 });
  }

  async land_Username() {
    await this.lanuserName.setValue("landmarkeod2021@gmail.com");
    browser.saveScreenshot("./Screenshots/usrname.png");
  }

  async land_Passsword() {
    await this.lanpassWord.setValue("123456");
    browser.saveScreenshot("./Screenshots/pwd.png");
  }
  async land_login() {
    await this.lanlogin.click();
    browser.saveScreenshot("./Screenshots/verifypage.png");
  }

  async verify_land_mobile_verification() {
    const closeverify = await this.lancloseverify;
    await closeverify.waitForDisplayed();
    //assert.equal(await closeverify.isDisplayed(), true);
    browser.saveScreenshot("./Screenshots/homepagewithusersignin.png");
  }
  async land_close_mobileverification() {
    await this.lancloseverify.click();
  }

  async land_basket() {
    const basket = await this.lanbasket;
    await basket.waitForDisplayed({ timeout: 15000 });
   // assert.equal(await basket.isDisplayed(), true);
    const baskettext = await (await this.lanbasket).getText();
    console.log(baskettext);
    browser.saveScreenshot("./Screenshots/basket.png");
  }
}
module.exports =new SignIn();
