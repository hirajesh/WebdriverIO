import { Given, When, Then } from "@cucumber/cucumber";
const webdriverio = require("webdriverio");
import SignIn from "../pageobjects/SignIn.Page";

Given(/^Open  url$/, async () => {
  await SignIn.landopenurl();
});

Then(/^Click sigIn link$/, async () => {
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

Then(/^Verify pop up is appear$/, async () => {
  await SignIn.verify_land_mobile_verification();
});

Then(/^Close the verify pop up$/, async () => {
  await SignIn.land_close_mobileverification();
});

When(/^Verify the Basket$/, async () => {
  await SignIn.land_basket();

  console.log("##################TEST ENDED#####################");
});
