//var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var mots = ["code", "tableau", "editeur", "ligne", "format", "souris", "clavier", "touches", "ecran", "marque", "crayon", "nez", "cheveux", "video", "musique", "carnet", "stylo", "ecole", "codeur", "affiche"];
var random = mots[Math.floor(Math.random() * mots.length)];
var lettres = random.split('');
var tab  =  [];

for (i in lettres) {
    tab.push("_");
}
console.log(random);
var ban = [];
var miss = 5;
var chances = document.getElementById("fait");
function goodword() {
    if (miss == 0) {
        alert("lost");
        window.location.reload();
        return;
    }
    var input = document.getElementsByClassName("prompt")[0].value;
    var affiche = document.getElementById("lettres");
    var stock = input.split('');
    
    var already = false;
    var non = [];
        for (y in stock) {
        for (let i = 0; i < lettres.length; i++) {
            if (stock[y] == lettres[i] && !ban.includes(lettres[i]) ) {  
                non.push(lettres[i]);
                already = true;


                tab[i] = lettres[i];
                affiche.innerText = tab.join(" ");

            }
        }
        
    }
    if (!already){
        miss--;
        fait.innerText = "Tu as " + miss + " " + "chances"; 
    }
    ban = ban.concat(non);
    console.log(ban);
}
