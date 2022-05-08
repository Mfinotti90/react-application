let headsCount = 0;
let tailsCount = 0;




//eventlistener on button, if user clicks flip the penny button



let pennyFlipBtn = document.querySelector
('#flip')


pennyFlipBtn.addEventListener('click',function(){
    //decide the outcome: heads/tails
    let isHeads = Math.random() < 0.5;

    if(isHeads) {
        //updating my dom to display heads outcome
        console.log('heads!');
        document.querySelector('img').src = './assets/images/penny-heads.jpg';
        document.querySelector('#message-header').textContent = 'You Flipped Heads!'
        headsCount++


    } else {
        // updating my dom to display tails outcome
        console.log('tails!');
        document.querySelector('img').src ='./assets/images/penny-tails.jpg';
        document.querySelector('#message-header').textContent = 'You Flipped Tails!'
        tailsCount++
    }


localStorage.setItem('headsCount', headsCount);
localStorage.setItem('tailsCount', tailsCount);



    
console.log(headsCount, tailsCount)

let sum = headsCount + tailsCount;

let percentageHeads = Math.round(headsCount/sum * 100);
let percentageTails = Math.round(tailsCount/sum * 100);

console.log(percentageHeads, percentageTails)

document.querySelector('.heads-counter').textContent = headsCount;
document.querySelector('.tails-counter').textContent = tailsCount;

document.querySelector('.heads-percentage').textContent = percentageHeads + '%';
document.querySelector('.tails-percentage').textContent = percentageTails + '%';



});



//Updates to:




//penny image updated to heads or tails




//then let's get rolling header3 change to heads or tails text




//results table gets updated with the number of heads and tails flips and the percentage of each

//<th class="heads-counter">0</th>
//<th class="heads-percentage">0%</th>
//<th class="tails-counter">0</th>
//<th class="tails-percentage">0%</th>

