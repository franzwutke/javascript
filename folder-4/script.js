//01) Erkennen Sie die Fehler und beheben Sie 

userName = "Jenna";
userName = "Brad";


function getUserNameLength (name){
  return name.length
}

console.log(getUserNameLength(userName) >= 4)
// ^______________ Should log true

/////////////////////////////////

//02) isString function

function isString(string) {
    return typeof string === "string"
}

console.log(isString("Hello"));
// result should be true

console.log(isString(3));
// result should be false

console.log(isString(undefined));
// result should be false

console.log(isString(""));
// result should be true

console.log(isString("John" + "Doe"));
// result should be true