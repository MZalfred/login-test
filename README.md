# Login Test Automation with Selenium and Cucumber

Overview

Hey Guys! 👋 I'm diving into the fascinating world of automated testing and this repository is where I'm keeping track of all my progress. I'm working on automating login procedures for a web application using Selenium WebDriver and Cucumber in JavaScript.

Challenges Faced

Getting Started
Choosing the Right Stack: Initially, I was overwhelmed by the plethora of technologies and tools available for test automation. After some research, I landed on Selenium and Cucumber, primarily because they are widely used in the industry.
Understanding Cucumber and Gherkin Syntax: Writing feature files using Gherkin language was something new and took some time to get used to.
Timeout Issues
NoSuchElementError: Encountered a situation where the test runner couldn't find an element on the page. Figured out it was because the element wasn't loaded yet.
Cucumber Timeouts: I was hit by a wall when my steps started to timeout. Learned that Cucumber has its own default timeout, which can be adjusted as needed.
Git and GitHub
Git Learning Curve: Being new to Git, I found it somewhat challenging initially. But hey, that's what learning is all about. 😃
Current Progress

As of now, I've successfully managed to set up a basic framework, automated a simple login scenario, and even dealt with timeouts and other exceptions.

Here's how to run the tests locally:

 code

//Install dependencies
npm install init -y
npm install selenium-webdriver
npm install @cucumber/cucumber (Now keep in mind, cucumber as Update As I had to update it Through my testing)

//Run tests
Again, keep in mind change your script to cucumber-js For the use of npm test
"scripts": {
    "test": "cucumber-js"
},
or do not change it and just run
./node_modules/.bin/cucumber-js

Upcoming Work

Expand to more test scenarios.
Integrate with a CI/CD pipeline.
Optimize the code for reusability and maintainability.

Acknowledgements
Big thanks to all the wonderful resources and communities online. Wouldn't have made it this far without you.

Feel free to check out the code and offer any tips or advice. Always open to learning more!
