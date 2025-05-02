const inputTodo = document.querySelector(".input");
const btnTodo = document.querySelector(".add");
const blockTodo = document.querySelector(".list");

btnTodo.addEventListener("click", (e) => {
  if (!inputTodo.value) {
    alert("INSERT");
  } else {
    createTask();
  }

  inputTodo.value = "";
  saveData();
});

function createTask() {
  let itemTodo = document.createElement("li");
  itemTodo.classList.add("item");
  itemTodo.innerHTML = `${inputTodo.value}`;
  blockTodo.appendChild(itemTodo);
  let checkTodo = document.createElement("span");
  checkTodo.classList.add("check");
  itemTodo.appendChild(checkTodo);
  let closeTodo = document.createElement("span");
  closeTodo.classList.add("done");
  itemTodo.appendChild(closeTodo);
}
blockTodo.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.classList.contains("check")) {
      e.target.parentElement.classList.toggle("checked");
      saveData();
    } else if (e.target.classList.contains("done")) {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", blockTodo.innerHTML);
}

function showData() {
  blockTodo.innerHTML = localStorage.getItem("data");
}

showData();


const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#ffb56b",
  "#fdaf69",
  "#f89d63",
  "#f59761",
  "#ef865e",
  "#ec805d",
  "#e36e5c",
  "#df685c",
  "#d5585c",
  "#d1525c",
  "#c5415d",
  "#c03b5d",
  "#b22c5e",
  "#ac265e",
  "#9c155f",
  "#950f5f",
  "#830060",
  "#7c0060",
  "#680060",
  "#60005f",
  "#48005f",
  "#3d005e"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();
