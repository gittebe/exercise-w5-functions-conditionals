


const theCoders = (driver, navigator) => {
  console.log(
    `The awesome coders for today is the driver ${driver} and the navigator ${navigator}`
  );
};
theCoders("jennie", "tom");
/*
2)
Pass in only ONE name when you call the function and see what happens.
(HINT, you should get undefined...)
*/

/*
3) 
create a function that checks which name is the longest when comparing the coders 
and print out: "The driver has the longest name." or "The navigator has the longest name" 
or if the names ar the same length "The driver and the navigator has equally long names"
*/
const nameLength = (driver, navigator) => {
  if (driver.lenght > navigator.length) {
    console.log(
      'The driver has the longest name'
    )
  }
  else if (driver.length < navigator.lenght) {
    console.log(
      'The navigator has the longest name'
    )
  }
  else {
    console.log(
      `The driver and the navigator have equally long names.`
    )
  }
}
nameLength('Jenny', 'Tom')
/*
4) 
to get user input you can use the prompt() and then store that into a variable.
Such as 
let userAge = prompt('How old are you?')
Create a function that prompts the user for its age, then depending on the age will alert back different messages such as 
alert('wow you are 33! that's young!')
or alert('23! Younger than Zlatan') or something like that.
Add as many conditonals as you want.
*/
const checkUserAge = () => {
  let userAge = prompt(`How old are you`);
  if (serAge < 18) {
    alert(`wow you are ${userAge}. That's young!`)
  }
  else if (userAge >= 18 && userAge < 33) {
    alert(`wow you are ${userAge} it's still young!`)
  }
  else { alert(`Wow you are ${userAge} So much wisdom`) }

}

checkUserAge();

const calculationTest = () => {
  /*
  5)
  In this function we want to give the user a mathematical calculation to 
  give us the answer to. Something like prompt('What is 5 + 6?')  
  If the answer is correct, congratulate the user. 'Yay! Correct'
  If not, give the user the correct answer so they can learn. 'Noooo, the answer is 11'
  You choose if to use addition, subtraction, multiplication or division. 
  */
};

// Function to perform the addition
const addNumbers = (num1, num2) => {
  return num1 + num2;
}

// Function to prompt the user and check the answer
const calculationTest = () => {
  const correctAnswer = addNumbers(5, 6);  // Call the addNumbers function
  let userAnswer = prompt('What is 5 + 6?'); // Ask the user
  if (parseInt(userAnswer) === correctAnswer) {
    alert('Correct!');
  } else {
    alert('Incorrect, the correct answer is ' + correctAnswer);
  }
}

calculationTest();
/*
6) **BONUS**
Make the calculation machine we just made show random calculations everytime you invoke the function.
But hey, maybe limit the randomness to be numbers between 0-10?
*/
// Function to perform the addition of two random numbers
const addNumbers = (num1, num2) => {
  return num1 + num2;
}

// Function to generate a random number between 1 and 10

calculationTest();

const calculationMachine = () => {
  let a = Math.floor(Math.random() * 11)
  let b = Math.floor(Math.random() * 11)
  let answer = a + b

  let userAnswer = prompt(`What is ${a} + ${b}?`)
  userAnswer = Number(userAnswer)

  if (userAnswer === answer) {
    alert(`Congrats that is correct`)
  }
  else {
    alert(`Boo that is wrong`)
  }
}

calculationMachine()