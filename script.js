let dateDiv = document.getElementById("date");

function updateTime() {
  const currentTime = new Date();
  dateDiv.innerHTML = currentTime;
}

document.getElementById("image").onclick = function () {
  alert("Cutie Patootie");
};
