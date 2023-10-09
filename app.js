console.log("Hello World!\n==========\n");

// Exercise 1 Section

console.log("EXERCISE 1:\n==========\n");
const testArr = [2, 22, 12, 17, 18, 39, 129];

function arraySum(numbers) {
    let sum = 0;


numbers.forEach(function (number) {
sum += number;
});
return sum;
}
console.log(arraySum(testArr));
// Exercise 2 Section
const book = {};
book.title = "Gone Girl";
book.pages = 422;
book.readCount = 2;

book.info = function (){
return `${this.title}, ${this.pages} pages, read ${this.readCount} times`;
}
console.log(book.info());
//     hasRead : true,
//   function info(title,pages,readCount){
// for (let i = info; i < 5; i++) {

    
// }
//   }  return
// }
// book.title;

console.log("EXERCISE 2:\n==========\n");

//Exercise 3
let sentence = "The quick brown fox jumps over the lazy dog"; //string
const words = sentence.split(" ");
console.log(words);

for(let i = 0; i < words.length; i++){

    const letters =words[i].split("");
    console.log(letters);

    letters.reverse(); //.reverse updates the array directly, no need to store a new variable
   
    const reversedLetters = letters.join("");
    words[i] = reversedLetters;
    //method chaining
    // const result = sentence.split(" ").map((element)) => {
    //     return element.split("").reverse().join("");
    
    // }
    
}
const result = words.join (" ");
console.log(result);
console.log(words);


console.log("EXERCISE 3:\n==========\n");
let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";
const finalResult = [];
//2. .split 
const rows = csvData.split("\n");
//3. split the name and age 
const headers = rows[0].split(",");
console.log(headers);

//4. loops
//5. split by comma
for (let i = 1; i < rows.length; i++){
    const pairs = (rows[i].split(","));
    let blah = {};
    blah.name = pairs[0];
    blah.age = pairs[1];
    console.log(blah);
    
finalResult.push(blah);

}
console.log(finalResult);




console.log("EXERCISE 4:\n==========\n");