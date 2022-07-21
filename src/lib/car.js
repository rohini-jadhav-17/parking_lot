class Car {
    constructor(number,color){
        this.number = number;
        this.color = color;
    }

    //two cars are equal or not
    isCarEqual(carA, carB){
        return((carA.NUMBER.toLowerCase()===carB.NUMBER.toLowerCase())
                && carA.COLOR.toLowerCase()===carB.COLOR.toLowerCase());
    }

}

export default Car;