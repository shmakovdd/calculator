function calculator(expression) {
  expression = expression.toUpperCase();
  let array = expression.split(' ');
  let firstDigit = array[0];
  let secondDigit = array[2];
  let operator = array[1]; 
  let result = 0;
  if (array.length < 3 || array.length > 3) {
    throw new Error()
  }
  let romanNumbersFromOneToTen = {0: '', 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX', 10: 'X'};

  let romanNumbersToHundred = {C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV:4, I:1}

      function calculate (num1, num2, oper) {
        let digitA = romanToArabic(num1);
        let digitB = romanToArabic(num2);
        let algorithm = [ sum, sub, multiply, divide]
          [['+','-', '*', '/'].indexOf(oper)].call(this, digitA, digitB)
        return algorithm;

        function sum(a, b) {
          return +a + +b;
        }

        function sub(a, b) {
          return a - b;
        }

        function multiply(a, b) {
          return a * b;
        }

        function divide(a, b) {
          return Math.trunc(a / b);
        }

    }

  function romanToArabic(digit) {
    for (num in romanNumbersFromOneToTen) {
      if (digit === romanNumbersFromOneToTen[num]) {
        return +num
      } 
    } return digit
  }

  
function arabicToRoman(num) {
  let roman = '';
  for ( i in romanNumbersToHundred ) {
    while ( num >= romanNumbersToHundred[i] ) {
      roman += i;
      num -= romanNumbersToHundred[i];
    }
  }
  return roman;
}

  function isRoman(digit) {
    for (num in romanNumbersFromOneToTen) {
      if (digit === romanNumbersFromOneToTen[num]) {
        return true;
      }
    }
  }

  function isDigit(digit) {
   return Number.isInteger(+digit)
  }

  function isOnlyRomanOrOnlyArabic(num1, num2) {
    if (isDigit(num1) && isDigit(num2)) {
      return true;
    } else 
    if (isRoman(num1) && isRoman(num2)) {
      return true;
    } else throw new Error()
  }

 function isFromOneToTen(num1, num2) {
   num1 = romanToArabic(num1)
   num2 = romanToArabic(num2)
  if (!Number.isNaN(num1) && !Number.isNaN(num2)) {
    if ((num1 >= 1 && num1 <= 10) && (num2 >= 1 && num2 <= 10)) {
      return true
  } else throw new Error()
 }
}

if (isOnlyRomanOrOnlyArabic(firstDigit, secondDigit) && isFromOneToTen(firstDigit, secondDigit)) {
result = calculate(firstDigit, secondDigit, operator)
}

if (result <= 0 && (isRoman(firstDigit) && isRoman(secondDigit))) {
  return ''
}

 if (isRoman(firstDigit) && isRoman(secondDigit)) {
   result = arabicToRoman(result);
 }

 return result.toString()
}
console.log(calculator(''))

