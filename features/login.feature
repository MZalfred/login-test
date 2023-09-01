Feature: User Login

Scenario: User Login
   Given the user navigates to the login page
   When the user enters their username and password
   And clicks on the "Login" button
   Then the user should be redirected to the dashboard page
