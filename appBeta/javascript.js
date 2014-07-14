
/*************
*WATER
*************/
var infoCount = 0;//global variable for the rest of the functions
function timer1(){
    var time = setInterval(function(){
    var info = document.getElementById("infoW");
    if(infoCount == 0){
      info.innerHTML = "<b>Tip: </b> Water makes up approximately 70% of a human’s body weight – but DON’T stop drinking water to lose weight!";
    }
    else if (infoCount == 1){
      info.innerHTML = "<b>Tip: </b> After each trip to the restroom, guzzle an eight-ounce glass to replenish your system. ";
    }
    else if(infoCount == 2){
      info.innerHTML = "<b>Tip: </b> Have one glass every hour on the hour while at work. When the work day is done your water quota is met";
    } 
    infoCount++;
    if(infoCount == 3){
      infoCount = 0
    }
  },5000);
}
/*************
*PROTEIN
*************/
function timer2(){
    var time = setInterval(function(){
    var info = document.getElementById("infoP");
    if(infoCount == 0){
      info.innerHTML = "<b>Tip: </b>Protein lemon zest or juice to grilled meat or fish instead of salt or butter to lift the flavour.";
    }
    else if (infoCount == 1){
      info.innerHTML = "<b>Tip: </b> Protein each trip to the restroom, guzzle an eight-ounce glass to replenish your system. ";
    }
    else if(infoCount == 2){
      info.innerHTML = "<b>Tip: </b> Protein one glass every hour on the hour while at work. When the work day is done your water quota is met";
    } 
    infoCount++;
    if(infoCount == 3){
      infoCount = 0
    }
  },5000);
}

/*************
*GRAINS
*************/
function timer3(){
    var time = setInterval(function(){
    var info = document.getElementById("infoG");
    if(infoCount == 0){
      info.innerHTML = "<b>Tip: </b> Grains  makes up approximately 70% of a human’s body weight – but DON’T stop drinking water to lose weight!";
    }
    else if (infoCount == 1){
      info.innerHTML = "<b>Tip: </b> Grains  each trip to the restroom, guzzle an eight-ounce glass to replenish your system. ";
    }
    else if(infoCount == 2){
      info.innerHTML = "<b>Tip: </b> Grains one glass every hour on the hour while at work. When the work day is done your water quota is met";
    } 
    infoCount++;
    if(infoCount == 3){
      infoCount = 0
    }
  },5000);
}
/*************
*FRUITS
*************/
var infoCount = 0;
function timer4(){
    var time = setInterval(function(){
    var info = document.getElementById("infoF");
    if(infoCount == 0){
      info.innerHTML = "<b>Tip: </b> Fruits  makes up approximately 70% of a human’s body weight – but DON’T stop drinking water to lose weight!";
    }
    else if (infoCount == 1){
      info.innerHTML = "<b>Tip: </b> Fruits  each trip to the restroom, guzzle an eight-ounce glass to replenish your system. ";
    }
    else if(infoCount == 2){
      info.innerHTML = "<b>Tip: </b> Fruits one glass every hour on the hour while at work. When the work day is done your water quota is met";
    } 
    infoCount++;
    if(infoCount == 3){
      infoCount = 0
    }
  },5000);
}
/*************
*EXERCISE
*************/
var infoCount = 0;
function timer5(){
    var time = setInterval(function(){
    var info = document.getElementById("infoV");
    if(infoCount == 0){
      info.innerHTML = "<b>Tip: </b> veggies makes up approximately 70% of a human’s body weight – but DON’T stop drinking water to lose weight!";
    }
    else if (infoCount == 1){
      info.innerHTML = "<b>Tip: </b> Veggies each trip to the restroom, guzzle an eight-ounce glass to replenish your system. ";
    }
    else if(infoCount == 2){
      info.innerHTML = "<b>Tip: </b> Veggies one glass every hour on the hour while at work. When the work day is done your water quota is met";
    } 
    infoCount++;
    if(infoCount == 3){
      infoCount = 0
    }
  },5000);
}
/*************
*VEGGIES
*************/
var infoCount = 0;
function timer6(){
    var time = setInterval(function(){
    var info = document.getElementById("infoE");
    if(infoCount == 0){
      info.innerHTML = "<b>Tip: </b> Exercise makes up approximately 70% of a human’s body weight – but DON’T stop drinking water to lose weight!";
    }
    else if (infoCount == 1){
      info.innerHTML = "<b>Tip: </b> Exercise each trip to the restroom, guzzle an eight-ounce glass to replenish your system. ";
    }
    else if(infoCount == 2){
      info.innerHTML = "<b>Tip: </b> Exercise one glass every hour on the hour while at work. When the work day is done your water quota is met";
    } 
    infoCount++;
    if(infoCount == 3){
      infoCount = 0
    }
  },5000);
}

//THis is how we will store the clicked data in a json file by using the selections
//LOCAL STorage
var selections = {waterT: 0, proteinsT:0, fruitsT:0, veggiesT:0, exerciseT:0, grainsT:0 };//creates and object waiting to store attributes

function checkAmount(thisItem){
 var output = thisItem.parentElement.parentElement.getElementsByClassName("output")[0];
 var tick = thisItem.parentElement.parentElement.parentElement.id;

//This will add and store new data for checked boxes
 if (thisItem.checked)
 {
   output.innerHTML = parseInt(output.innerHTML) + 1;
 }
 else
 {
   output.innerHTML = parseInt(output.innerHTML) - 1;
 }
selections[tick] = output.innerHTML;//stores all the checked data and ready to be stringifies by JSON
}
//this is where we use local storage
//LOCAL STORAGE

function storeData(){
 localStorage.setItem("selections", JSON.stringify(selections));
}


function dropDown(){

}
