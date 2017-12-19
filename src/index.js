import numeral from 'numeral';
import './style.css';

const courseValue = numeral(1000).format('$0,0.00');
console.log(`I would pay a ${courseValue} for this course!`);
