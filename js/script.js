const rowElem = document.querySelector(".row");
console.log(rowElem);

let gridString = "";
for (let i = 1; i <= 100; i++) {
    let result= i;
    if(i % 3 === 0 && i % 5 === 0) {
        result = "fizzbuzz";
    } else if (i % 3 === 0) {
        result = "fizz";
    } else if (i % 5 === 0) {
        result = "buzz";
    }

    console.log(i, result);
    gridString += `<div class="square  ${result}">${result}</div>`;
    console.log(`iterazione ${i}`, gridString);
}

rowElem.innerHTML = gridString;
document.getElementById