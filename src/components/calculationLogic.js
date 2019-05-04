import React from 'react';

const Calculate = (str) => {
  // console.log(str);
  let currStr = str.replace(/x/g, '*');
  // console.log('currStr', currStr);
  let result = eval(currStr);
  console.log(str, result);
  return str + ` = ${result}`;
}

export default Calculate;