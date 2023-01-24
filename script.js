const container = document.querySelector("#container");

container.style.height = "960px";
container.style.width = "960px";
container.style.display = "grid";

for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.addEventListener("mouseover", function() {
        div.style.backgroundColor = `black`
    });
    container.appendChild(div);
}
container.style.gridTemplateColumns = `repeat(16, 1fr)`;
container.style.gridTemplateRows = `repeat(16, 1fr)`;
