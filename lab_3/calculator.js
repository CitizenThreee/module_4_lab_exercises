let operator;
let nums = [0,];
let finalNum;

function appendNum(num) {
    if(operator){
        nums[1] = nums[1] == undefined ? num : nums[1] + num;
    }
    else{
        nums[0] += num;
    }
    updateInput(false);
}

function setOperator(op) {
    operator = op;
    updateInput(false);
}

function calculateNum() {
    if(operator){
        switch(operator){
            case "+": 
                finalNum = nums[0] + nums[1];
                break;
            case "-":
                finalNum = nums[0] - nums[1];
                break;
            case "/":
                finalNum = nums[0] / nums[1];
                break;
            case "x":
                finalNum = nums[0] * nums[1];
                break;
        }
    }

    updateInput(true);
}

function updateInput(showingEquals){
    let string = showingEquals ? `${nums[0]} ${operator ? operator : ""} ${nums[1]} = ${finalNum}` : `${nums[0]} ${operator ? operator : ""} ${nums[1] == undefined ? "" : nums[1]}`;
    //document.getElementById("input-box").firstElementChild.innerHTML = string;
    console.log(string);
}

function clearAll() {
    operator = null;
    nums = [0,];
}

appendNum(15);
appendNum(2);
setOperator("-");
appendNum(6);
appendNum(4);
calculateNum();

