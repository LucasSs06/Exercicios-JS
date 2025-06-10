const numeros = [];
for (let i = 1; i <= 20; i++) {
    numeros.push(i);
}

for (let num of numeros) {
    if (num % 2 === 0) {
        console.log(num);
    }
}