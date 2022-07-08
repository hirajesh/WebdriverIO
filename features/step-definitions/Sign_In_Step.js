import { Given, When, Then } from "@cucumber/cucumber";
import GmailSignIn from "../pageobjects/GmailSignIn.Page";

Given(/^Open gmail url$/, async () => {
  await GmailSignIn.openherokuurl();
  await GmailSignIn.herokuloginpagemessage();
});

Then(/^Enter valid credentials$/, async () => {
  await GmailSignIn.enterherokuusername();
});

When(/^Sign in to account$/, async () => {
    browser.pause(5000);

  await GmailSignIn.enterherokupassword();
  await GmailSignIn.clickherokulogin();
  browser.pause(5000);
  await GmailSignIn.herokudashboardmessage();
  await GmailSignIn.clickherokulogout();
});
