console.log('Laith');

var userName = prompt("Please Enter Your Faveret Meal");

if (userName >= 'a' || userName >='A' )
{
  alert("Your In,"+userName+"!");
} 
else
{ alert("Your In");}
confirm("We hope to see you again");

document.write("Welcome to our Kitchen!" )

function Meal(){

var foodType =prompt("Do you Linke to visit our shop or online order ?");
while(foodType !=='fast food' && foodType!=="healthy food")
{
foodType=prompt("Please choose between Healthy food and Fast Food");

}

var userInput=prompt("Please inter a number :");

for (var i=1;i<=userInput;i++)
{

if(foodType == 'fast food'){
  document.write("\n"+i+"-" );
  document.write('<img src="https://static-40.sinclairstoryline.com/resources/media/6b7a7c7c-3c44-489c-9880-4a17508cdc6d-large16x9_Postworkout_meal.jpg?1577802416711"> ');

}
else
{
  document.write(i+"-" );
  document.write('<img src="https://static-40.sinclairstoryline.com/resources/media/6b7a7c7c-3c44-489c-9880-4a17508cdc6d-large16x9_Postworkout_meal.jpg?1577802416711" > ');
}
}
}