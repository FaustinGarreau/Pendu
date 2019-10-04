//var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var mots = ["code", "tableau", "editeur", "ligne", "format", "souris", "clavier", "touches", "ecran", "marque", "crayon", "nez", "cheveux", "video", "musique", "carnet", "stylo", "ecole", "codeur", "affiche"];
var random = mots[Math.floor(Math.random() * mots.length)];
var lettres = random.split('');
var tab  =  [];

for (i in lettres) {
    tab.push("_");
}
fait.innerText = "tu as 10 chances"; 

console.log(random);

var ban = [];
var miss = 10;
var chances = document.getElementById("fait");
var allLetter = [];
function goodword() {
    
    if (tab.join(" ") == lettres.join(" ")) {
        document.getElementById("won").style.display = "block";
        document.getElementById("flex").style.display = "block";
        document.getElementById("cacher").style.display = "none";
        document.getElementById("fait").style.display = "none";
        document.getElementById("lettres").style.display = "none";
        document.getElementById("form").style.display = "none";
        document.getElementById("use").style.display = "none";
}
    if (miss == 0) {
        alert("Dommage pour toi mais tu as perdu tu peux recommencer");
        window.location.reload();
        return;
    }

    var input = document.getElementsByClassName("prompt")[0].value;
    var affiche = document.getElementById("lettres");
    var stock = input.split('');
    
    var already = false;
    var non = [];
        for (i in stock) {
            if (allLetter.includes(stock[i])) {
                alert("T'es con ou tu les fait exprès tu ne peux pas mettre 2 fois la même lettre");
                document.getElementsByClassName("prompt")[0].value = "";

                return;
            }
        }
        for (y in stock) {
            allLetter.push(stock[y]);
            //console.log(allLetter);

            use.innerText = "Lettres utilisées:"+ " " +allLetter.join(", ");
        for (let i = 0; i < lettres.length; i++) {
            
            

            if (stock[y] == lettres[i] && !ban.includes(lettres[i]) ) {  
                non.push(lettres[i]);
                already = true;

                tab[i] = lettres[i];
                affiche.innerText = tab.join(" ");

            }
        
        }
        document.getElementsByClassName("prompt")[0].value = "";
        
    }
    if (!already){
        miss--;
        fait.innerText = "Tu as "+miss+" "+"chances ";
    }
   
    if (tab.join(" ") == lettres.join(" ")) {
        document.getElementById("won").style.display = "block";
        document.getElementById("flex").style.display = "block";
        document.getElementById("cacher").style.display = "none";
        document.getElementById("fait").style.display = "none";
        document.getElementById("lettres").style.display = "none";
        document.getElementById("form").style.display = "none";
        document.getElementById("use").style.display = "none";
}

    ban = ban.concat(non);
    //console.log(ban);
}
