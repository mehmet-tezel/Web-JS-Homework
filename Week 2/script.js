var button = document.querySelector("#enter");
var input  = document.querySelector("#userinput");
var ul  = document.querySelector("ul");
var allLi = document.querySelectorAll("li");
var allUl = document.querySelectorAll("ul")
var li = document.querySelector("li");

function addRemoveButtonToDefaultList() {
    /*for (var i = 0; i < allLi.length; ++i) {
        console.log(allLi[i].textContent);

        var removeButton = document.createElement("button");
        removeButton.textContent = "X";
        removeButton.addEventListener("click", event => ul.removeChild(allLi[i]));
        allLi[i].appendChild(removeButton)
    }*/

    var removeButton = document.createElement("button");
    var removeButton2 = document.createElement("button");
    var removeButton3 = document.createElement("button");
    var removeButton4 = document.createElement("button");
    var removeButton5 = document.createElement("button");

    removeButton.textContent = "X";
    removeButton2.textContent = "X";
    removeButton3.textContent = "X";
    removeButton4.textContent = "X";
    removeButton5.textContent = "X";

    removeButton.addEventListener("click", event => ul.removeChild(allLi[0]));
    removeButton2.addEventListener("click", event => ul.removeChild(allLi[1]));
    removeButton3.addEventListener("click", event => ul.removeChild(allLi[2]));
    removeButton4.addEventListener("click", event => ul.removeChild(allLi[3]));
    removeButton5.addEventListener("click", event => ul.removeChild(allLi[4]));

    allLi[0].appendChild(removeButton)
    allLi[1].appendChild(removeButton2)
    allLi[2].appendChild(removeButton3)
    allLi[3].appendChild(removeButton4)
    allLi[4].appendChild(removeButton5)
}

function createListElement() {
    var li = document.createElement("li"); //<li></li>
    var removeButton = document.createElement("button");
    
    removeButton.textContent = "X";
    removeButton.addEventListener("click", event => ul.removeChild(li));

    li.appendChild(document.createTextNode(input.value)); //<li>input'ta girilen değer</li>
    li.appendChild(removeButton)
    ul.appendChild(li);

    input.value = "";
}

function inputLength() {
    return input.value.length;
}

function addListAfterClick() {
    if (inputLength() > 0) {
       createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.key === "Enter") {
        createListElement();
    }
}

button.addEventListener("click",addListAfterClick);
input.addEventListener("keypress",addListAfterKeypress);

addRemoveButtonToDefaultList();