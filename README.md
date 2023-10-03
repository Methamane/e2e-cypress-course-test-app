# e2e-cypress-course-test-app
This is a python test webapp for the Linkedin Learning end-to-end-javascript-testing-with-cypress-io course by Shaun Wassell

Course link: https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io

## Why?
I wasn't able to use the provided test app as it seems to be outdated, and I don't have the web skills to rebuild it or fix the issues with it.

## Caveat
This is a python webapp using the nicegui framework which wraps around [quasar.dev](https://quasar.dev/) web framework, and I think it is slightly different than the framework used in the course test app.
Due to those differences there are some quirks with this app where css selectors don't work becuase things are structured differently (could be due to the python wrapping as well ¯\_(ツ)_/¯).

The provided tests are the ones I found to work with this test app using a Firefox engine with Cypress (Electron was failing on some tests).

## Disclaimer
This test app and tests are provided as is, if they are not working as expected investigate by inspecting the page elements (this has been a trial and error for me as well)