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
   console.log(Math.PI * Math.pow(this.radius, 2));
  }

  calcucateLength() {
    console.log(result = this.diameter * Math.PI);
  }
}

const p = new Circle(5);

p.calculateArea();
p.calcucateLength();
