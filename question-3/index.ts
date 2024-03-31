// //Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".

// Explain & TIP: To replace an item in an array, find its index using .indexOf(), then use that index to set a new value with array bracket notation.
//solution

function findAndReplace(fruit_basket_contains:string[]){
    let finding_index=fruit_basket_contains.indexOf("Banana");
    if(finding_index!==-1){
        fruit_basket_contains[finding_index]="Mango"
    }






}

   
let fruit_basket_contains:string[]=["Apple","Orange","Kiwi","Banana","Cherry","strawberry"];
console.log("original array",fruit_basket_contains)
console.log("\n");

findAndReplace(fruit_basket_contains);
console.log("updated array:",fruit_basket_contains);
//author-Huma Mohsin