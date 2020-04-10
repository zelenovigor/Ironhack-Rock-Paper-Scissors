const pickAWinner = (myChoice, computerChoice) => {
    //rock === rock so tie //scissors === scissors so tie //paper === paper so tie
    if(myChoice === computerChoice){ //Rock === Rock
      console.log('Its a tie!!!', myChoice, computerChoice)
      return 'Its a tie!!!'
    }
  
    //rock beats scissors
    //rock loses to paper
    if(myChoice === 'rock'){
      if(computerChoice === 'scissors'){
        console.log("I win because rock beats scissors")
        return "I win because rock beats scissors"
      }else{
        console.log("I lose because paper beats rock")
        return "I lose because paper beats rock"
      }
    }
  
    //paper beats rock
    //paper loses to scissors
     if(myChoice === 'paper'){
      if(computerChoice === 'rock'){
        console.log("I win because paper beats rock")
        return "I win because paper beats rock"
      }else{
        console.log("I lose because paper loses to scissors")
        return "I lose because paper loses to scissors"
      }
    }
  
    //scissors loses to rock
    //scissors beats paper 
      if(myChoice === 'scissors'){
      if(computerChoice === 'paper'){
        console.log("I win because scissors beats paper")
        return "I win because scissors beats paper"
      }else{
        console.log("I lose because rock beats scissors")
        return "I lose because rock beats scissors"
      }
    } 
  }
  
  
  
  
  const startGame = () => {
    let myChoice = prompt('Rock, Paper, or Scissors?')
    myChoice = myChoice.toLowerCase()
    let arr = ['rock','paper','scissors'] 
    //Array stores data in a variable
    if( arr.includes(myChoice) ){ //conditional - make sure my choice is valid
      console.log('Lets play this game')
      let computerChoice = arr[Math.floor(Math.random()*3)]
      let result = pickAWinner(myChoice, computerChoice) //Call a function
      document.querySelector('#result').innerHTML = result
    } else {
      console.log('Your choice doesnt make any sense')
    }
  }
  
  document.querySelector('button').onclick = startGame
  
  
  
  
  
  // console.log(arr[Math.floor(Math.random()*3)]) 
  //The computer