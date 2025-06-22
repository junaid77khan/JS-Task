for (let i = 100; i <= 999; i++) {

    let num = i;

    let sum = 0;



    while (num > 0) {

        let digit = num % 10;

        sum += digit ** 3;

        num = Math.floor(num / 10);

    }



    if (sum === i) {

        console.log(i);

    }

}