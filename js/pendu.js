var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var mots = ["code", "tableau", "editeur", "ligne", "format", "souris", "clavier", "touches", "ecran", "marque", "crayon", "nez", "cheveux", "video", "musique", "carnet", "stylo", "ecole", "codeur", "affiche"];
var random = mots[Math.floor(Math.random() * mots.length)];
console.log(random);
var ban = [];
function goodword() {
    var input = document.getElementsByClassName("prompt")[0].value;
    var affiche = document.getElementById("lettres");
    var inm = input.split('');
    var xd = random.split('');
    var non = [];
        for (y in inm) {
        for (let i = 0; i < xd.length; i++) {
            if (inm[y] == xd[i] && !ban.includes(xd[i]) ) {  
                non.push(xd[i]);
                affiche.innerText +=xd[i], i ;
            }
        }
    }
    ban = ban.concat(non);
    console.log(ban);
    
}


