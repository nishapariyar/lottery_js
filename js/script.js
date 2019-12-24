function guessNumber() {
    console.log("guessNumber");

    var randomnum = Math.floor(Math.random() * 6 + 1);
    var nameValue = document.getElementsByName("name")[0].value;
    var address = document.getElementsByName("address")[0].value;
    var phnum = document.getElementsByName("contact")[0].value;
    var guessnum = document.getElementsByName("guessnum")[0].value;
    
    if (randomnum==guessnum)
    {
        alert("you won");
    }
    else
    {
        alert("you loose");
    }
}