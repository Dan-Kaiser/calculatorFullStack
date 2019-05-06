import React from 'react';

const Calculate = (str) => {
  // console.log(str);
  const operators = ['*', '/', '-', '+']
  let currStr = str.replace(/x/g, '*');
  // console.log('currStr', currStr);
  for (let i = 0; i < operators.length; i++) {
    if (currStr[currStr.length - 1] === operators[i]) {
      return null;
    }
    // if (!currStr.includes(operators[i])) {
    //   return null;
    // }
  }

  let result = eval(currStr);

  return str + ` = ${result}`;

}

export default Calculate;