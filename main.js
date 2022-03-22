// ------A CODE CHALLENGE------

//Problem1

const longestString = function(array) {
    longest = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i].length > longest) {
            longest = array[i].length
        }
    };
    for (var string of array) {
        if (string.length == longest)
            console.log(string)
    }
    
}

array1  = ['BINH', 'HUNG', 'PHUOC', 'CAO', 'KHANHff'];

longestString(array1)

// Problem2

const sumWeights = function(array) {
    team1 = 0;
    team2 = 0;
    output = [];
    for (var i = 1; i < array.length + 1; i++) {
        modulo = i%2;
        if (modulo == 1) {
            team1 += array[i-1]
        } else {
            team2 += array[i-1]
        }
    };
    output.push(team1);
    output.push(team2)
    console.log(output)
}
const array2 = [60, 40, 55, 75, 64];
sumWeights(array2)

// ------B CODE CHALLENGE------

// Random color
const setRandomColor = function() {
    document.querySelector('.container').style.backgroundImage = '';
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.querySelector('.container').style.backgroundColor = '#' + randomColor;
    randomColor = '#' + randomColor;
    const colorText = document.getElementById('colorHex');
    colorText.setAttribute('value', `${randomColor}`);
}


randomBtn.addEventListener('click', setRandomColor);
setRandomColor();
// Copy hex value
const copyHex = function() {
    const colorHex = document.getElementById('colorHex');
    colorHex.select();
    navigator.clipboard.writeText(colorHex.value);
}

copyBtn.addEventListener('click', copyHex);
// Gradient color
const applyGradient = function() {
    leftColor = document.getElementById('inputLeft').value;
    rightColor = document.getElementById('inputRight').value;
    if( leftColor && rightColor !== undefined) {
        document.querySelector('.container').style.backgroundImage = `linear-gradient(to right, ${leftColor}, ${rightColor})`;
    }
}


gradientBtn.addEventListener('click', applyGradient);
