const textInput = document.getElementById("text-input");
const result = document.getElementById("result");
const checkBtn = document.getElementById("check-btn");

const palindromeCheck = text => {
    // check if the input is empty;
    if (text === "") {
        alert("Please input a value");
        return;
    }

    // remove all non-alphanumeric characters and turn all letters to lower case;
    const newText = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    // definee a const to receive reversed text;
    const reverseText = newText.split("").reverse("").join("");

    // check if the reversed text equals to the original text or not. Then write the result HTML code to the result div.
    if (newText === reverseText) {
        result.innerHTML += `<p id="result_p"><span id="input-result">${text}</span> is a palindrome</p>`
    } else {
        result.innerHTML += `<p id="result_p"><span id="input-result">${text}</span> is not a palindrome</p>`
    }
}

// add "click" event lintener to call the palindromeCheck function when the button was clicked;
checkBtn.addEventListener("click", () => {
    // remove p tag inside the result div
    while (result.hasChildNodes()) {
        result.removeChild(result.firstChild); // we can also do this by setting the innerHTML === "";
    }

    palindromeCheck(textInput.value);
    textInput.value = ""; // reset the input box;
});