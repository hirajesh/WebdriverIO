const { Given, When, Then } = require('@cucumber/cucumber');
const SignIn =require("../pageobjects/SignIn.Page");


Given(/^Open  url$/, async () => {
  await SignIn.landopenurl();
});

When(/^Click sigIn link$/, async () => {
  await SignIn.land_signIN();
});

Then(/^Enter valid Username$/, async () => {
  await SignIn.land_Username();
});

Then(/^Enter valid Password$/, async () => {
  await SignIn.land_Passsword();
});

Then(/^Sign in to account$/, async () => {
  await SignIn.land_login();
});

When(/^Verify pop up is appear$/, async () => {
  await SignIn.verify_land_mobile_verification();
});

Then(/^Close the verify pop up$/, async () => {
  await SignIn.land_close_mobileverification();
});

Then(/^Verify the Basket$/, async () => {
  await SignIn.land_basket();

  console.log("##################TEST ENDED#####################");
});
