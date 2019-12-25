function guessNumber() {
    console.log("guessNumber");

    var randomnum = Math.floor(Math.random() * 100 + 1);
    var nameValue = document.getElementsByName("name")[0].value;
    var address = document.getElementsByName("address")[0].value;
    var phnum = document.getElementsByName("contact")[0].value;
    var guessnum = document.getElementsByName("guessnum")[0].value;
    
    if (randomnum==guessnum)
    {
        var msg = nameValue.concat(" ",address," ",phnum);
        alert(msg.concat("\nyou win"));
    }
    else
    {
        var msg = nameValue.concat(" ",address," ",phnum);
        alert(msg.concat("\nyou loose"));
    }
}