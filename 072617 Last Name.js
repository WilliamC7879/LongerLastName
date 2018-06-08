var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z","sh","th","ch"];
var vowels = ["a","e","i","o","u"]

/*var consonants = ["b","bl","br","c","ch","cl","cr","d","dr","f","fl","fr","g","g","gr","h","j","k","l","m","n",
"p","pl","pr","q","r","s","sc","sh","sk","sl","sm","sn","sp","st","sw","th","tr","tw","wh","wr",
"sch","scr","shr","sph","spl","spr","squ","str","thr","bb","cc","dd","ff","gg","ll","mm","nn","pp","rr","ss","tt"];*/
//var vowels = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u","ai","au","ee","ea","ie","ei","oo","ou","oi","ue"];


var firstName = prompt("First Name:");
var lastName = prompt("Last Name:");

//Change this to change length of last name
var length = 20;

//Shell for adding on letters alternating between consonant and vowel
function addOnShell() {
    //Determining properties of addon
    var addOnLength = Math.ceil(Math.random() * length);
    for(i = 0; i < vowels.length; i++) {
        if(vowels[i] == lastName2.substring(lastName2.length - 1,lastName2.length)) {
            isVowel = true;
            i = vowels.length
        } else {
            isVowel = false
        }
    }

    for(i = 0; i < addOnLength; i++) {
        var randConsonant = consonants[Math.floor(Math.random() * consonants.length)];
        var randVowel = vowels[Math.floor(Math.random() * vowels.length)];
        if(isVowel === true) {
            if((i % 2) === 0) { //Even == 0, Odd == 1
                addOnArray.push(randConsonant)
            } else {
                addOnArray.push(randVowel)
            }
        } else {
            if((i % 2) == 1) { //Even == 0, Odd == 1
                addOnArray.push(randConsonant)
            } else {
                addOnArray.push(randVowel)
            }
        }
    }
  return addOnArray.join("")
}

//Adds on alternating letters
function addOn() {
    if(isVowel === true) {
        if((i % 2) == 0) { //Even == 0, Odd == 1
            addOnArray.push(randConsonant)
        } else {
            addOnArray.push(randVowel)
        }
    } else {
        if((i % 2) == 1) { //Even == 0, Odd == 1
            addOnArray.push(randConsonant)
        } else {
            addOnArray.push(randVowel)
        }
    }
}

//Shuffles letters in a string
String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}

var addOnArray = [];
var lastNamesplit = Math.floor(lastName.length / 2);
var lastName1 = lastName.substring(0, lastNamesplit);
var lastName2 = (lastName.substring(lastNamesplit, lastName.length)).shuffle();
var lastName3 = addOnShell();
console.log(firstName + " " + lastName1 + lastName2 + lastName3)


//jsbin: http://jsbin.com/cedamoh/edit?js,console