class Converter {
    calculate(value) {
        return parseInt(value) * this.ratio
    }
    map(array) {
        return array.map((item) => {
            if (Array.isArray(item)) {
                return this.map(item);
            }
            let result = this.calculate(item);
            if (typeof item == "string") return result.toString();
            return result;
        });
    }
    convert(...num) {
        if (!num.length) return;
        let result = this.map(num);
        if (result.length == 1) return result[0];
        return result;
    }
}
class InchInCm extends Converter {
    constructor() {
        super();
        this.ratio = 2.54;
    }
}
class FInC extends Converter {
    constructor() {
        super();
        this.ratio = 5/9;
        this.substract = 32;
    }
    calculate(value) {
        return (parseInt(value) - this.substract) * this.ratio;
    }
}
class RadInGrad extends Converter {
    constructor() {
        super();
        this.ratio = 180 / Math.PI;
    }
}

export function createConverter(obj) {
    let {from, to} = obj;
    if (from === "cm" && to === "mm") {
        return new InchInCm(obj);
    }
    if (from === "F" && to === "C") {
        return new FInC(obj);
    }
    return new RadInGrad(obj);
}