# JavaScript/Front-end Developer - Exercise 1

## Instructions

- Fork this project.
- Write tests.
- Don't use external libraries for the conversion.
- Commit the important milestones and not just the final result.

## Exercise description

Create an application that contains a web form, which has a numeric input field and a submit button.

When the user gives an arabic number, the system shows the english phrase of that number.

For example:
<pre>
7    == seven
42   == forty-two
2001 == two thousand and one
1999 == nineteen hundred and ninety-nine
17999 == seventeen thousand nine hundred and ninety-nine
</pre>

That's all.

## Solution

### Test online

The application has been deployed to [https://gabor-js-numerals.web.app](https://gabor-js-numerals.web.app).


### Test locally

1. Clone this repo
2. `npm install`
3. `npm start`

### Approach

- The base idea was to break down the given number into thousand modulars, because that's where the scale goes up.
  - E.g.: 23.425.123 => (23), (425), (123), which is (twenty-three million) (four hundred twenty-five thousand) (one hundred and twenty-three)
- The application also handles American slang
  - E.g.: 1400 => fourteen hundred