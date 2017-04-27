function Point(x,y) {
  this.x = x
  this.y = y
} // Define a Point object that is constructed with an x,y
// coordinate pair to indicate its position

Point.prototype.toString = function() {
  return `(${this.x}, ${this.y})`
} // return the location in (x, y) format

function Side(length) {
  this.length = length
} // Side objects that have a length property

function Shape() {}
// Define a Shape object.
// This will be the base for all shapes on the plane.

Shape.prototype.addToPlane = function(x, y) {
  this.position = new Point(x, y)
} // assign a Point to the Shape's position property based on arguments

Shape.prototype.move = function(x, y) {
  this.position = new Point(x, y)
} // moves the position to a new Point

// circle

function Circle(radius) {
  Shape.call(this)
  this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle

Circle.prototype.diameter = function() {
  return (this.radius + this.radius)
}

Circle.prototype.area = function() {
  return (Math.PI * this.radius^2)
}

Circle.prototype.circumference = function() {
  return (2 * Math.PI * this.radius)
}

// polygon

function Polygon(sides) {
  Shape.call(this)
  this.sides = sides
}

Polygon.prototype = Object.create(Shape.prototype)
Polygon.prototype.constructor = Polygon

Polygon.prototype.numberOfSides = function() {
  return this.sides.length
}

Polygon.prototype.perimeter = function() {
  var perimeter = 0
  this.sides.forEach(function(side) { // why function inside forEach?
    perimeter += side.length
  })
  return perimeter
}

// quadrilateral

function Quadrilateral(l1, l2, l3, l4) {
  Polygon.call(this, [new Side(l1), new Side(l2), new Side(l3), new Side(l4)])
}

Quadrilateral.prototype = Object.create(Polygon.prototype)
Quadrilateral.prototype.constructor = Quadrilateral

// triangle

function Triangle(l1,l2,l3) {
  Polygon.call(this, [new Side(l1), new Side(l2), new Side(l3)])
}

Triangle.prototype = Object.create(Polygon.prototype)
Triangle.prototype.constructor = Triangle

// rectangle

function Rectangle(width, height) {
  Quadrilateral.call(this, width, height, width, height)
  this.width = width
  this.height = height
}

Rectangle.prototype = Object.create(Quadrilateral.prototype)
Rectangle.prototype.constructor = Rectangle

Rectangle.prototype.area = function() {
  return this.width * this.height
}

// square

function Square(side) {
  Rectangle.call(this, side, side, side, side)
}

Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.constructor = Square

Square.prototype.listProperties = function() {
  for (var prop in this) {
    if (this.hasOwnProperty(prop)) {
      return `${this.prop} = ${this[prop]}`
    }
  }
}
