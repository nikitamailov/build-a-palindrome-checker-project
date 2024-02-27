const textInput = document.getElementById("text-input");
const programOutput = document.getElementById("result");
const checkBtn = document.getElementById("check-btn");

const formatInput = (str) => {
    const regex = /[\W+_+]/gm;
    return str.replace(regex,"");
};

const result = () => {
    const string = textInput.value.toString();
    const stringToLwrc = string.toLowerCase();
    const formattedInput = formatInput(stringToLwrc);
    const formattedInputRev = formattedInput.split("").reverse().join("");
    if (textInput.value === "") {
        alert("Please input a value");
    } else if (formattedInput === formattedInputRev) {
        programOutput.textContent = `${textInput.value} is a palindrome`;
    } else {
        programOutput.textContent = `${textInput.value} is not a palindrome`;
    }
};

checkBtn.addEventListener("click", result);