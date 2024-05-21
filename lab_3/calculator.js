let operator;
let nums = [0,];
let finalNum;

function appendNum(num) {
    if(operator){
        nums[1] = nums[1] == undefined ? num : nums[1] + num.toString();
    }
    else{
        nums[0] = nums[0] == 0 ? num : nums[0] + num.toString();
    }
    updateInput(false);
}

function setOperator(op) {
    operator = op;
    updateInput(false);
}

function calculateNum() {
    if(operator && nums[1]){
        switch(operator){
            case "+": 
                finalNum = Number(nums[0]) + Number(nums[1]);
                break;
            case "-":
                finalNum = nums[0] - nums[1];
                break;
            case "/":
                finalNum = nums[0] / nums[1];
                break;
            case "x":
                finalNum = nums[0] * nums[1];
        }

        updateInput(true);
    }
}

function updateInput(showingEquals){
    let string = showingEquals ? `${nums[0]} ${operator ? operator : ""} ${nums[1]} = ${finalNum}` : `${nums[0]} ${operator ? operator : ""} ${nums[1] == undefined ? "" : nums[1]}`;
    document.getElementById("input-box").firstElementChild.innerHTML = string;
}

function clearAll() {
    operator = null;
    finalNum = 0;
    nums = [0,];

    updateInput();
}

