let i = 0;

document.querySelector("button").addEventListener("click", (event) => {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = "asdf";
    document.getElementById("emptyDiv").append(newDiv)
})