var variable = "string";

console.log(variable); // Will print "string" to the console

variable = "other string";

console.log(variable); // Will print "other string" to the console

// Using {} around any code puts that code in a new context
{
  var otherVariable = "third string";

  console.log(otherVariable); // Will print "third string" to the console
}

console.log(otherVariable); // Will print "third string" to console, even though the variable was defined in a new context.
