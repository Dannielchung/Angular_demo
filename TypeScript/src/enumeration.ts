var myArray = [1,2,3,4];
myArray.desc = "four number";
myArray.forEach(value => alert(value));
for (var n in myArray) {
    console.log(myArray[n]);
}

for (var x of "four number") {
    console.log(x);
}