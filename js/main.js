/*Counter N.1 Structure*/
let num = document.createElement("p");
let p_text = document.createTextNode("0");
num.appendChild(p_text);
document.getElementById("counter").appendChild(num);
num.classList.add("number");

let remove = document.createElement("button");
let remove_text = document.createTextNode("-");
remove.appendChild(remove_text);
document.getElementById("counter").appendChild(remove);
remove.classList.add("decrement");

let add = document.createElement("button");
let add_text = document.createTextNode("+");
add.appendChild(add_text);
document.getElementById("counter").appendChild(add);
add.classList.add("increment");

let reset = document.createElement("button");
let reset_text = document.createTextNode("RESET");
reset.appendChild(reset_text);
document.getElementById("counter").appendChild(reset);
reset.classList.add("reset");


/*Counter Function*/
let int = 0;

add.addEventListener("click", function () {
  int += 1;
  num.innerHTML = int;
  if (int > 0 && int <= 5) {
    document.getElementById('counter').style.color = "#ff9900";
  }
  if (int > 5) {
    document.getElementById('counter').style.color = "black";
  }
});

remove.addEventListener("click", function () {
  int -= 1;
  num.innerHTML = int;
  if (int <= 0) {
    document.getElementById('counter').style.color = "red";
  }
  if (int <= 5 && int > 0) {
    document.getElementById('counter').style.color = "#ff9900";
  }
});

reset.addEventListener("click", function () {
  var result = confirm('Sei sicuro di voler resettare?');
  if (result == true) {
    int = 0;
    num.innerHTML = int;
  };
  if (result == false) {
    event.stopImmediatePropagation();
  }
});
