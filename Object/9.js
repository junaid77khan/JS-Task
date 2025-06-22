class Mathematics {
    constructor(r) {
        this.r = r;
    }

    perimeter() {
        var p = 2 * Math.PI * this.r;
        return p.toFixed(2);
    }

    area() {
        var a = Math.PI * Math.pow(this.r, 2);
        return a.toFixed(2);
    }
}

let mathematics = new Mathematics(10);
console.log(mathematics.area());
console.log(mathematics.perimeter());