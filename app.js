//selecting the id
const textDisp = document.getElementById('text');

//phrases to display
const phrases = [" ","Hello,", "I'm Sara", "I'm Curious", "I'm Eager to Learn", "Teamwork Enthusiast", "Frontend Passion"];

let i = 0;
let j = 0;

//empty array to carry the phrases
let currPhrase = [];

//state of deleting
let isDeleting = false;

//state of finished
let isEnd = false;


function loop(){
    //it's not the end
    isEnd = false;

    //keeping the words together when display
    textDisp.innerHTML = currPhrase.join('');


    if(i < phrases.length){
        
        if(!isDeleting && j <= phrases[i].length){
            currPhrase.push(phrases[i][j]);
            j++;
            textDisp.innerHTML = currPhrase.join('');
        }


        if(isDeleting && j <= phrases[i].length){
            currPhrase.pop(phrases[i][j])
            j--;
            textDisp.innerHTML = currPhrase.join('');
        }
        

        if(j == phrases[i].length){
            isEnd = true;
            isDeleting = true;
        }

        if(isDeleting && j === 0){
            currPhrase = [];
            isDeleting = false;
            i++;

            if (i== phrases.length){
                i = 0;
            }
        }
    }

    const speedUp = Math.random()*(80 - 50)+50;
    const speedNormal = Math.random()*(300 - 200) + 200;
    const time = isEnd ? 2000 : isDeleting ? speedUp : speedNormal;
    setTimeout(loop, time);
}

loop();