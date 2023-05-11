
function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces
  const heightInMeters = height / 100;
  //const bmi = weight / (height * height);
  const bmi = weight / Math.pow (height * 0.01,2);

  alert(Math.round(bmi));

   // part 2
   let healthStatus;
  if (bmi < 18.5)
  {
    healthStatus = "Underweight";
  }
  else if (bmi >=18.5 && bmi <= 24.9)
  {
    healthStatus = "Healthy Weight";
  }

  else if (bmi >= 25 && bmi <= 29.9)
  {
    healthStatus = "OVERweight";
  }

  else if (bmi > 30) 
  {
    healthStatus = "Above Obesity";
  }

  alert(`Your bmi is ${Math.round(bmi)} and is considerd ${healthStatus}`);

  // part 3
 let healthStatus1;
 if (age >= 19 && age <= 24){
  if (bmi >= 19 && bmi <= 24){

    healthStatus1 = "Healthy";
 }
 else {
 healthStatus1 = "Not Healthy";
 }
 }

 else if (age >= 25 && age <= 34){
  if (bmi >= 20 && bmi <= 25){
    healthStatus1 = "Healthy";
  }
  else {
  healthStatus1 = "Not Healthy";
  }
 }

 else if (age >= 35 && age <= 44){
  if (bmi >= 21 && bmi <= 26){
    healthStatus1 = "Healthy";
  }
  else {
  healthStatus1 = "Not Healthy";
  }
 }
 else if (age >= 45 && age <= 54){
  if (bmi >= 22 && bmi <= 27){
    healthStatus1 = "Helthy";
  }
  else {
  healthStatus1 = "Not Helthy";
 }
 }
 
 else if (age >= 55 && age <= 64){
  if (bmi >= 23 && bmi <= 28){
    healthStatus1 = "Helthy";
  }
  else {
  healthStatus1 = "Not Helthy"
  }
 }
 else if (age >= 65){
  if (bmi >= 24 && bmi <= 29){
    healthStatus1 = "Helthy"
  }
  else {
  healthStatus1 = "Not Helthy"
 }
 }
 alert(`Your bmi is ${Math.round(bmi)} and is considerd ${healthStatus1}`);
}

