/*This js file isnt transpiled. So used ES5 and common js modules*/



/*Transpile *.test.js files before running tests*/
require('babel-register')();


/*Disable webpack features which here is css import */
require.extensions['.css'] = function(){}



