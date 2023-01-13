let userName = 'Pojo' 

// when userName is empty loged to the console 'Hello'
userName ? console.log(`Hello, ${userName}!`) :
console.log('Hello!')

const userQuestion = 'What about Magic Eight Ball?'
console.log(userQuestion)

// random 0-7
let randomNumber = Math.floor(Math.random()*8)

let eightBall = ''

// random number switch to answer of Magic Eight Ball
switch (randomNumber) {
  case 0:
  eightBall = 'It is certain'
  break;

  case 1:
  eightBall = 'It is decidedly so'
  break;

  case 2:
  eightBall = 'Reply hazy try again'
  break;

  case 3:
  eightBall = 'Cannot predict now'
  break;

  case 4:
  eightBall = 'Do not count on it'
  break;

  case 5:
  eightBall = 'My sources say no'
  break;

  case 6:
  eightBall = 'Outlook not so good'
  break;

  case 7:
  eightBall = 'Signs point to yes'
  break;
  
}

// loged to the console
console.log(`Hello ${userName} your eight ball is ${eightBall}`)