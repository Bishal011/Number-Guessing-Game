/*!.Generate a lucky number
  2. Get input() from the user
  3. check the given input is correct or not
  4. if guess is correct show winner
  5. else show your guess is too high or too low*/

  /*.Generate a lucky number*/

var luckynumber = Math.random() * 100; //` * generates a random number between 0 and 1 and multiply it by 20.
luckynumber = Math.floor(luckynumber); //` Removing the decimal part.
console.log("luckynumber: " + luckynumber)

let score = 20;
let highscore = 0

/*Now we are going to get the input from user*/
const userinput = document.getElementById("guessing")
const msgbox = document.querySelector("#message");
const checkbutton = document.getElementById("check");
const main = document.querySelector("main");
const scoreelement = document.getElementById("score");
scoreelement.textContent = score;
const highscoreelement = document.getElementById("highscore");
const againbutton = document.getElementById("again");

//now check if the user input is equal to the lucky number

function checknumber() {
    
    const userguess = Number(userinput.value)//convert a string to a number
    
    if (userguess === luckynumber) {
        msgbox.textContent = "Congrats!! your guess is right😍😍😍😍🎉🎉🎉";
        highscoreelement.textContent = score
        main.style.backgroundColor = "green"; //background color for correct input
    } else {
        main.style.backgroundColor = "red";//background color for incorrect input
        //score calculate
        score = score - 2;
        //to show the score
        scoreelement.textContent = score;
        //announcing of looser
        if (score <= 0) {
            msgbox.textContent = "You lost the game😭😭😭😭😭😭😭😭";
            checkbutton.disabled = "true"; //cannot guess a number again
        } else{
             //hints for wroung input
        if (userguess > luckynumber) {
            msgbox.textContent = "Your guess is too high!!😮😮😮😮"
        } else {
            msgbox.textContent = "Your guess is too low!!😭😭😭😭"
        }  
    }
}

}

function startagain() {

    luckynumber = Math.random() * 100; //` * generates a random number between 0 and 1 and multiply it by 20.
    luckynumber = Math.floor(luckynumber);
    var score = 20;
    scoreelement.textContent = score;
    console.log("luckynumber: " + luckynumber);
    main.style.background = "#222";
}
        
 //Adding event listener on button to execute above function
 checkbutton.addEventListener("click", checknumber);
 againbutton.addEventListener("click", startagain);
