const array = ["1", "12", "123", "1234"];

const text = "22";

function findArrayIndex(obj1, obj2) {
  for (let i = 0; i < obj1.length; i++) {
    if (obj1[i].length == obj2.length) {
      return i;
    }
  }
}

console.log(findArrayIndex(array, text));