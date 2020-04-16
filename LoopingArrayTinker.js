const amounts = [61.00, 52.25, 112.99, 5.00];
var total = 0;
for (let amount of amounts) {
  total += amount;
}
console.log('Order total is: ', total);