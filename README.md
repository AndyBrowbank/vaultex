# Vaultex ATM Validaor App

The Validator App checks an ATM cassette order for validity. If invalid, it will throw the relevant error, otherise the user will be notified that the order is valid
and ready to be packed.

The orders are hard coded from within Jest, in the form of an array. The first sub array contains the string "cassette" and the number of cassettes required. 
The remaining 4 sub arrays can be empty or will contain the note type e.g. £5, £10, £20, £50, and the cash value e.g. 10000. At least one order is required, and 4 
is the maximum. For each order, the cassette must be filled to capacity of 2000 notes so a £5 order must contain the cash value 10000. 

The App is written in Javascript and tested using Jest. 

## Getting Started

The git repository can be found [here](https://github.com/AndyBrowbank/vaultex)

To run the project, you need to install Node and run `git clone your-forked-repo-link-here`

Once open, open a terminal and run `npm install`. The app runs from Jest so please run npm t to run the test suite. 

