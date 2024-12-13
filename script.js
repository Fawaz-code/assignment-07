// Light Bulb Experiment
document.getElementById("light-bulb-experiment").onclick = function () {
    var userInput = prompt("Enter 1 to turn on the light, or 0 to turn it off.");

    if (userInput == 1) {
        alert("The light is ON.");
    } else if (userInput == 0) {
        alert("The light is OFF.");
    } else {
        alert("Invalid Input.");
    }
};

// Traffic Light Simulator
document.getElementById("traffic-light-simulator").onclick = function () {
    var userColor = prompt("Enter Traffic Light Color (Red, Yellow, Green):");

    if (userColor === "Red") {
        alert("Stop.");
    } else if (userColor === "Yellow") {
        alert("Slow Down.");
    } else if (userColor === "Green") {
        alert("Go.");
    } else {
        alert("Invalid Color.");
    }
};

// Water Temperature Checker
document.getElementById("water-temp-checker").onclick = function () {
    var temp = prompt("Enter water temperature in Celsius:");

    if (temp <= 0) {
        alert("Freezing.");
    } else if (temp > 0 && temp <= 15) {
        alert("Cold.");
    } else if (temp > 15 && temp <= 30) {
        alert("Warm.");
    } else {
        alert("Hot.");
    }
};

// Rock Paper Scissors Game
document.getElementById("rock-paper-scissors").onclick = function () {
    var player1 = prompt("Player 1, choose Rock, Paper, or Scissors:");
    var player2 = prompt("Player 2, choose Rock, Paper, or Scissors:");

    if (player1 === player2) {
        alert("It's a Tie!");
    } else if ((player1 === "Rock" && player2 === "Scissors") ||
               (player1 === "Paper" && player2 === "Rock") ||
               (player1 === "Scissors" && player2 === "Paper")) {
        alert("Player 1 Wins!");
    } else {
        alert("Player 2 Wins!");
    }
};

// Simple Alarm System
document.getElementById("simple-alarm").onclick = function () {
    var doorOpen = prompt("Is the door open? (yes or no)");
    var motionDetected = prompt("Is motion detected? (yes or no)");

    if (doorOpen === "yes" || motionDetected === "yes") {
        alert("Alarm Triggered");
    } else {
        alert("All Safe");
    }
};

// Simple Temperature Conversion
document.getElementById("temp-conversion").onclick = function () {
    var choice = prompt("Choose conversion: 1 for Celsius to Fahrenheit, 2 for Fahrenheit to Celsius.");
    if (choice == 1) {
        var celsius = prompt("Enter temperature in Celsius:");
        var fahrenheit = (celsius * 9/5) + 32;
        alert(`${celsius}°C is equal to ${fahrenheit}°F`);
    } else if (choice == 2) {
        var fahrenheit = prompt("Enter temperature in Fahrenheit:");
        var celsius = (fahrenheit - 32) * 5/9;
        alert(`${fahrenheit}°F is equal to ${celsius}°C`);
    } else {
        alert("Invalid choice.");
    }
};

// Password Strength Checker
document.getElementById("password-strength").onclick = function () {
    var password = prompt("Enter your password:");
    if (password.length >= 8) {
        alert("Strong Password.");
    } else if (password.length >= 5) {
        alert("Moderate Password.");
    } else {
        alert("Weak Password.");
    }
};

// Coin Toss Simulator
document.getElementById("coin-toss").onclick = function () {
    var userChoice = prompt("Enter 1 for Heads or 0 for Tails:");
    var coinToss = Math.floor(Math.random() * 2); // Random 0 or 1

    if (userChoice == coinToss) {
        alert("You Win!");
    } else {
        alert("You Lose!");
    }
};

// Weather Suggestion
document.getElementById("weather-suggestion").onclick = function () {
    var weather = prompt("Enter weather condition (Sunny, Rainy, Cold):");

    if (weather === "Sunny") {
        alert("Wear sunglasses.");
    } else if (weather === "Rainy") {
        alert("Take an umbrella.");
    } else if (weather === "Cold") {
        alert("Wear a jacket.");
    } else {
        alert("Invalid weather condition.");
    }
};

// Arithmetic Quiz
document.getElementById("arithmetic-quiz").onclick = function () {
    var num1 = Math.floor(Math.random() * 10);
    var num2 = Math.floor(Math.random() * 10);
    var correctAnswer = num1 + num2;
    var userAnswer = prompt(`What is ${num1} + ${num2}?`);

    if (parseInt(userAnswer) === correctAnswer) {
        alert("Correct!");
    } else {
        alert("Try Again!");
    }
};

// Eligibility for Voting
document.getElementById("eligibility-for-voting").onclick = function () {
    var age = prompt("Please enter your age:");
    if (age >= 18) {
        alert("You are eligible to vote.");
    } else {
        alert("You are not eligible to vote.");
    }
};

// Max of Two Numbers
document.getElementById("max-of-two-numbers").onclick
