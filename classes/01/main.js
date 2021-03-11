;class Circle {
	constructor(_radius,_diameter) {
    this.radius = _radius;
 }

	get radius() {
  	return this._radius;
  }

	set radius(radius) {
  	this._radius = radius;
    }

  get diameter() {
    return this._diameter = this._radius * 2;
  }

	calculateArea() {
   let result = 0;
   result = 3.14 * Math.pow(this.radius, 2);
   console.log(result);
  }

  calcucateLength() {
    let result = 0;
    result = this.diameter * 3.14;
    console.log(result);
  }
}

const p = new Circle(5);

p.calculateArea();
p.calcucateLength();
