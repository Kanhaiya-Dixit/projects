let userscore = 0;
let compscore = 0;
let pgt = document.querySelectorAll(".choice ");
let msg=document.querySelector("#message");
let count1=document.querySelector("#count1");
let count2=document.querySelector("#count2");
restart=document.querySelector("#restart");
// Function to get computer's choice
const computerChoice = () => {
    const variables = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * 3);
    return variables[random];
};
playgame=((userchoice)=>{
    comChoice=computerChoice();
    if(userchoice===comChoice){
        console.log("draw");
        msg.innerText="draw";
        msg.style.backgroundColor="yellow";
        msg.style.color="black";
    }
    else if(userchoice=="rock"){
        if (comChoice=="scissors") {
            console.log(`You Win! your ${userchoice} beats ${comChoice}`); 
            msg.innerText=`You Win! your ${userchoice} beats ${comChoice}`;
            msg.style.backgroundColor="green";
            userscore++;
        }
        if (comChoice=="paper") {
            console.log(`You loose! ${comChoice} beats your ${userchoice}`); 
            msg.innerText=`You loose! ${comChoice} beats your ${userchoice}`;
            msg.style.backgroundColor="red";
            compscore++;
        }
    }
    else if(userchoice=="paper"){
        if (comChoice=="rock") {
            console.log(`You Win! your ${userchoice} beats ${comChoice}`); 
            msg.innerText=`You Win! your ${userchoice} beats ${comChoice}`;
            msg.style.backgroundColor="green";
            userscore++;
        }
        if (comChoice=="scissors") {
            console.log(`You loose! ${comChoice} beats your ${userchoice}`); 
            msg.innerText=`You loose! ${comChoice} beats your ${userchoice}`;
            msg.style.backgroundColor="red";
            compscore++;
        }
    }
    else if(userchoice=="scissors"){
        if (comChoice=="paper") {
            console.log(`You Win! your ${userchoice} beats ${comChoice}`); 
            msg.innerText=`You Win! your ${userchoice} beats ${comChoice}`;
            msg.style.backgroundColor="green";
            userscore++;
        }
        if (comChoice=="rock") {
            console.log(`You loose! ${comChoice} beats your ${userchoice}`); 
            msg.innerText=`You loose! ${comChoice} beats your ${userchoice}`;
            msg.style.backgroundColor="red";
            compscore++;
        }
    }
    count1.innerText=userscore;
    count2.innerText=compscore;
    finalresult();
})
const disableButtons = () => {
    pgt.forEach(button => {
        button.disabled = true;
    });
};

finalresult=()=>{
    if (userscore>=5) {
        msg.innerText="You Win! Congratulations";
        msg.style.backgroundColor="green";
        
    }
    else if (compscore>=5) {
        msg.innerText="You lose! Better luck next time";
        msg.style.backgroundColor="red";
        
    }
}
const reset=()=>{
    count1.innerText=0;
    count2.innerText=0;
    userscore=0;
    compscore=0;
    pgt.forEach(choose => {
        choose.disabled = false;
    });
    msg.innerText="pick your container";
    msg.style.backgroundColor="yellow";
    msg.style.color="black";

}
restart.addEventListener('click',()=>{
    reset();
})


pgt.forEach((choose) => {
    choose.addEventListener('click', () => {
        const userchoice = choose.getAttribute("id");
        playgame(userchoice);
        
    });
});
