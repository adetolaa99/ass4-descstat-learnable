class Hello {
  static helloGreeting = "Hello World!"; //static property

  static helloGreeting() {}

  static staticMethod() {
    //static method
    console.log("This is a static method");
  }
}

//accessing the static property
console.log(Hello.helloGreeting);

//accessing the static method
Hello.staticMethod();
