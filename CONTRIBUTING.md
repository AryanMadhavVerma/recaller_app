# Contributing to recaller
We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

# Get started
### Setup
run this bash script to set things up to speed 
```bash 
cd app_client && npm install && cd ..
cd app_server && npm install && cd ..
```
### Building and testing
For any change you are making, make sure that you run `npm run client_build` from the root folder. This will create a static build of the frontend, store it in the backend and both the client and server files can run on a single port. A simple `npm start` post changes should make the app work

**Envronment Variables** you need

`PORT`: Put anything (eg 4000)

`AUTH_KEY`: DM me on [Twitter](https://twitter.com/aryanmadhaverma) for this


## We Develop with Github
We use github to host code, to track issues and feature requests, as well as accept pull requests.

## Report bugs using Github's [issues](https://github.com/aryanmadhavverma/recaller_app/issues)
We use GitHub issues to track public bugs. Report a bug by **opening a new issue**; it's that easy!

## Write bug reports with detail, background, and sample code
- What the bug/feature is
- How does the bug affect/improve the app
- What changes have you made in crisp short lines
- 
**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

People *love* thorough bug reports. I'm not even kidding.


## License
By contributing, you agree that your contributions will be licensed under its Apache License.

## References
This document was adapted from the open-source contribution guidelines for [Facebook's Draft](https://github.com/facebook/draft-js/blob/a9316a723f9e918afde44dea68b5f9f39b7d9b00/CONTRIBUTING.md)
