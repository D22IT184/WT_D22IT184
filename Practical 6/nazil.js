class Person {
  constructor(name, age, father) {
    this.name = name;
    this.age = age;
    this.father = father;
  }
  greet() {
    return "Hey Whats'ap, my name is " + this.name + " and I am " + this.age + " years old & my father name is" + this.father;
  }
}
let person1 = new Person("Dhalwala Nazil", 19, " Nishar");
document.getElementById("greeting").innerHTML = person1.greet();
