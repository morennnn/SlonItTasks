// Задание 8. Сделать код самодокументированным.

/* Исходный код 
function pp(u) {
    let x = 0;
    u.forEach((i) => {
      x += i;
    });
    return x;
}
  
let aa = [10000, 20000, 30000];
console.log(pp(aa)); */

function calculateTotalValue(purchaseAmounts) {
    let totalValue = 0;
    purchaseAmounts.forEach(amount => {
      totalValue += amount;
    });
    return totalValue;
}
  
let mostExpensivePurchases = [10000, 20000, 30000];
console.log(calculateTotalValue(mostExpensivePurchases));