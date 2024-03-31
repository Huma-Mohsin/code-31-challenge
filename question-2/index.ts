// //Question 92: Write a function to remove the last element from an array and return the removed element.

// Explain & TIP: The .pop() method removes the last element from an array and returns that element. This can be useful when you need to work with the removed item.

//solution
function cars(){
   let list= ["Accord",
    "Civic",
    "Sentra",
    "Fusion",
    "Explorer",
    "Wrangler"];
    console.log("list before pop out",list);
    console.log("\n");
    
    //remove lase item from an array.
   let pop_item= list.pop();
   console.log("pop out element:",pop_item);
   
   console.log("\n");
   
   console.log("list after pop out item",list);
   
   return cars;
}

cars();
//Author- HUMA MOHSIN