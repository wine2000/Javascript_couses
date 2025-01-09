class Calculator{
    static title='calculation'
    plus(a,b){
        return a+b
    }
}
plus=new Calculator()
console.log(plus.plus(2,3))
console.log(Calculator.title)


class Circle{
    PI=3.14
    name='kilometer'
    circleArea(r){
        return this.PI*r**2
    }
    static volume(r,w,h){
       let volume=new Circle()
       let result=3*volume.circleArea(r)+w+h
      console.log("This calculation is",result)
        }
}
let circle=new Circle()
console.log("Circle Area:",circle.circleArea(2))
Circle.volume(3,4,5)


