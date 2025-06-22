let a = -5, b = -2, c = -6, d = 0, e = -1;

let max;



if (a >= b && a >= c && a >= d && a >= e) {

    max = a;

} else if (b >= a && b >= c && b >= d && b >= e) {

    max = b;

} else if (c >= a && c >= b && c >= d && c >= e) {

    max = c;

} else if (d >= a && d >= b && d >= c && d >= e) {

    max = d;

} else {

    max = e;

}



alert(max);