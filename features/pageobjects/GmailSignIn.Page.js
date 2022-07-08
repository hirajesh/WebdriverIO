class GmailSignIn {
  get signInButton() {
    return $('//a[text()="Sign in"]');
  }

  get userName() {
    return $("#identifierId");
  }

  get passWord() {
    return $("#password");
  }

  get nextButton() {
    return $('//*[text()="Next"]');
  }

  get signOutButton() {
    return $('//div[contains(text(),"Sign out")]');
  }

  get enableSignOutOption() {
    return $('//*[@id="gb"]/div[2]/div[3]/div[1]/div[2]/div/a/img');
  }
  get chooseaccountButton() {
    return $('//*[text()="Choose an account"]');
  }

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

  get herokuloginmessage()
  {
    return $('#flash');
  }
  get herokulogout()
  {
    return $('//*[@id="content"]/div/a/i');
  }





  // ACTIONS
  //=============

  async openherokuurl()
  {
    await browser.url("https://the-internet.herokuapp.com/login");

  }
  async enterherokuusername()
  {
    await this.herokuusername.setValue('tomsmith');
  }

  async enterherokupassword()
  {
    await this.herokupassword.setValue('SuperSecretPassword!');
  }
  async clickherokulogin()
  {
    await this.herokuLoginbutton.click();
  }
  async clickherokulogout()
  {
    await this.herokulogout.click();
  }
  async herokuloginpagemessage()
  {
    var message= await this.herokuloginpagetext.getText();
    console.log('Message is '+message);
  }
  async herokudashboardmessage()
  {
   var message= await  this.herokuloginmessage.getText();
   console.log('Message is '+message);

  }





  async enterUsername(username) {
    await this.userName.setValue("landmarkeod2021");
  }
  async enterPassword(password) {
    await this.passWord.setValue("landmark2021");
  }
  async clickNext() {
    await this.nextButton.click();
  }
  async openURL() {
     await  browser.url("https://accounts.google.com/signin/v2/identifier?service=mail&passive=1209600&osid=1&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin");
  }
  
}
export default new GmailSignIn();
