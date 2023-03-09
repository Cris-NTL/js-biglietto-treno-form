// Input
const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", function() {

// Details from user (name, surname, kms, age)
const userDetailName = document.getElementById("userName");
const detailName = userDetailName.value;
console.log(detailName);

const userDetailDistance = document.getElementById("userDistance");
const detailDistance = parseFloat(userDetailDistance.value);
console.log(detailDistance);

const userDetailAge = document.getElementById("inputAge");
const detailAge = userDetailAge.value;
console.log(detailAge);

// Check errors
if(isNaN(userDistance) === true) {
    console.log("Per favore, inserisci solo valori numerici. Grazie!");
    document.getElementById("error").innerHTML = "Per favore, inserisci solo valori numerici. Grazie!"
}

// Ticket price
const unitCost = 0.21;
    let travelPrice = (unitCost * detailDistance);
    console.log(travelPrice);

    let ticketPrice = ""
    let ticketType = ""

// Logic for different customers
if (detailAge === "Under 18"){
    const discount = (travelPrice * 20 / 100);
    ticketPrice = (travelPrice - discount).toFixed(2);
    ticketType = "Young People Ticket"
    console.log(ticketPrice);
}
else if (detailAge  === "Over 65"){
    const discount = (travelPrice * 40 / 100);
    ticketPrice = (travelPrice - discount).toFixed(2);
    ticketType = "Senior People Ticket"
    console.log(ticketPrice);
}
else {
    ticketPrice = (travelPrice).toFixed(2);
    ticketType = "Adult People Ticket"
    console.log(ticketPrice);
}

// Code CP & wagon
const cpCode = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;
    console.log(cpCode);
    const wagon = Math.floor(Math.random() * (13 - 1 + 1)) + 1;
    console.log(wagon);

// Output
document.getElementById("user").innerHTML = detailName;
document.getElementById("ticket").innerHTML = ticketType;
document.getElementById("wagon").innerHTML = wagon;
document.getElementById("code").innerHTML = cpCode;
document.getElementById("ticketPrice").innerHTML = ticketPrice ;
});

//Cancel btn
const cancelBtn = document.getElementById("cancel-btn");
cancelBtn.addEventListener("click", function() {

    document.getElementById("userName").value = "";
    document.getElementById("userDistance").value = "";
    document.getElementById("inputAge").value = "";

    document.getElementById("user").innerHTML = ""; 
    document.getElementById("ticket").innerHTML = "";  
    document.getElementById("wagon").innerHTML = "";   
    document.getElementById("code").innerHTML = "";   
    document.getElementById("ticketPice").innerHTML = "";
    
    document.getElementById("error").innerHTML = "";     
})

