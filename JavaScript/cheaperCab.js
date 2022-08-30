/* cheaper cab from codechef.com
Chef has to travel to another place. For this, he can avail any one of two cab services.

The first cab service charges X rupees.
The second cab service charges Y rupees.
Chef wants to spend the minimum amount of money. Which cab service should Chef take?

For each test case, output FIRST if the first cab service is cheaper, output SECOND if the second cab service is cheaper, output ANY if both cab services have the same price.
*/
function comparaPreco(x, y) {
  if (x === y) {
    console.log('ANY');
  } else if (x > y) {
    console.log('SECOND');
  } else if (x < y) {
    console.log('FIRST');
  }
}

comparaPreco(30, 22);
comparaPreco(2, 12);
comparaPreco(2, 2);
