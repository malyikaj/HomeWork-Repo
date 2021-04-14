
// // 5 -- Write a function that returns the number of arguments passed to the function when called.
function numArgumentsPassed (...arg) {
    return arguments.length; 
}
console.log(numArgumentsPassed());


// // 6 -- Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

let string = "Hawaii";

function reverseString () {
        let emptyStr = "";

        for (let i = string.length -1; i >= 0; i--) {
            emptyStr += string[i];  
        }
        return emptyStr
    }

// // 7 -- Write a function findLongestWord that takes an array of words and returns the length of the longest one.
array = ["cat", "dogs", "Polar Bear"]
function findLongestWord(array) {
    for(i=0; i<array.length; i++) {
        if(array[array.length-1].length <= array[i].length){       
            var x = array[i]         
            array[i] = array[array.length-1]
            array[array.length-1]= x;
        }
    }
    return array[array.length-1] + " " + array[array.length-1].length
}


// // 8 -- Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
let string = ["can", "soda", "frog", "malyikanima"]
let emptyStr= [];
let length = 6;


function filterLongWords(p)
{    
    for(let i = 0; i< p.length; i++)
    {
        if(p[i].length >= length)
        {
            emptyStr.push(p[i]);
        }
    }
    return emptyStr;
}










