var numDices = 0;
var snd = new Audio("./sfx/dice2.wav");

function cardClick(tema) {
    
    $('.modal-ctn').toggleClass('hidden');

    tema = tema.innerHTML;

    switch (tema) {
        case "Medieval":
            document.getElementById("page").style.backgroundImage = "url('img/bg-ded.png')";
            document.getElementById("pg-ctn-result").style.backgroundImage = "url('img/result-ded.png')";
            document.getElementById("pg-ctn-table").style.backgroundImage = "url('img/table-ded.png')";
            break;
        case "Steam Punk":
            document.getElementById("page").style.backgroundImage = "url('img/bg-steam.jpg')";
            document.getElementById("pg-ctn-result").style.backgroundImage = "url('img/result-steam.png')";
            document.getElementById("pg-ctn-table").style.backgroundImage = "url('img/table-steam.png')";
            break;
        case "Cyber Punk":
            document.getElementById("page").style.backgroundImage = "url('img/bg-cyber.jpg')";
            document.getElementById("pg-ctn-result").style.backgroundImage = "url('img/result-cyber.png')";
            document.getElementById("pg-ctn-table").style.backgroundImage = "url('img/table-cyber.png')";
            break;

    }

    document.getElementById("page").style.display = "flex";

}

function addDice(l) {
    
    if(numDices<15) {
        d = "d" + l;

        var newDice = document.createElement("div");
        newDice.setAttribute("class", "table-dice");
        newDice.innerHTML = "<div class='sideNum'>"+l+"</div>";
        newDice.innerHTML += "<img src='img/" + d + ".png' width='90px' alt='' class='dice-img'>";
        newDice.innerHTML += "<div class='dice-result "+d+"'></div>";
        document.getElementById("pg-ctn-table").appendChild(newDice);

        numDices += 1;

    }

}

function result(total, stotal) {
    document.getElementById("result-info").innerHTML = total;

        var lastRoll = document.createElement("div");
        lastRoll.setAttribute("class", "historic-last-roll");
        lastRoll.innerHTML = stotal;
        document.getElementById("historic-rolls-ctn").insertBefore(lastRoll, document.getElementById("historic-rolls-ctn").childNodes[0]);
}

function inner (dice, r){dice.childNodes[2].innerHTML = r;}

function roll() {

    var stotal = "";
    var total = 0;
    var dice = document.getElementById("pg-ctn-table").firstChild;
    do {
        inner(dice, "");
        document.getElementById("result-info").innerHTML = "";
        $(dice).toggleClass("rotate");
        var r = rollDice(dice.firstChild.innerHTML); 
        setTimeout(inner, 2000, dice, r);
        stotal += "(d" + dice.firstChild.innerHTML +") " + r;
        total += r;
        if(dice != document.getElementById("pg-ctn-table").lastChild) {
            stotal += " + ";
        } else {
            stotal += " = ";
        }
        dice = dice.nextElementSibling;
    } while(dice != null);

    stotal += total; 

    if(total != 0){
        setTimeout(result, 2000, total, stotal);
    }

}

function rollDice(l){        

    return Math.floor(Math.random() * l) + 1;
    
}