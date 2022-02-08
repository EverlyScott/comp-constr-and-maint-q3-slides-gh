// We will be using const to define the object. Const is used to define a non changing constant. We will touch on this more later.
const object = {
  key: "value",
  anything: "the name of a key can be any value you want",
  test12: "(as long as they dont have spaces)",
  //You can also create a function in an object.
  //The following type of function is called an arrow function:
  keyWithArrowFunction: () => {
    return "When called, this function will return this text.";
  },
  //And this one is called an anonymous function:
  keyWithAnonymousFunction: function () {
    return "There is a difference between arrow and anonymous functions, but we won't talk about it here because it's pretty advanced.";
  },
  //Keys can also store numbers, booleans, arrays, or even another full object.
  number: 10.75,
  boolean: true,
  boolean2: false,
  array: ["This is an array of items!", "It's similar to an object,", "Just without any keys."],
  object: {
    key: "And this is another object!",
  },
};
