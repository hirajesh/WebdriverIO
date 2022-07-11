Feature: Open and sign in a reg user account


    Scenario: Login  reg user account
        Given Open  url
        When Click sigIn link
        Then Enter valid Username
        And Enter valid Password
        Then Sign in to account
        When Verify pop up is appear
        Then Close the verify pop up
        And Verify the Basket



