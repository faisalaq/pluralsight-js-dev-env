import numeral from 'numeral';

const courseVal = numeral(100).format('$0,0.00');

/*eslint-disable no-console*/
console.log(`take this course for a cheap price of ${courseVal}`);