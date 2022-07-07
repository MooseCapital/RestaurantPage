function menuDisplay() {
    const div1 = document.querySelector(".div1");
    const div2 = document.querySelector(".div2");
    const div3 = document.querySelector(".div3");
    const footer = document.querySelector("footer");
    footer.style.position = "relative";
    const p = document.querySelectorAll(".div2 p");
    const home = document.querySelector(".home");
    const menu = document.querySelector(".menu");
    const contact = document.querySelector(".contact");


    p.forEach(para => {
        div2.removeChild(para);
    })
    document.querySelector(".title").innerText = "Menu";

    document.querySelector(".subheader1").innerText = "Food";
    document.querySelector(".info1").innerText = "";
    document.querySelector(".info3").innerText = "";
    const info2 = document.createElement("p");
    info2.classList.add("info2");
    div2.appendChild(info2);


    const food = document.createElement("img");
    food.classList.add("food");
    food.src = "entre.png";


    document.querySelector(".subheader2").innerText = "Dessert"

    const dessert = document.createElement("img");
    dessert.classList.add("dessert");
    dessert.src = "dessert.png";



    document.querySelector(".subheader3").innerText = "Red Wine";
    const wine = document.createElement("img");
    wine.classList.add("wine");
    wine.src = "wine.png";



    if (!div1.contains(document.querySelector(".food"))) {
        div1.appendChild(food);

    }

    if (!div2.contains(document.querySelector(".dessert"))) {
        div2.appendChild(dessert)
    }

    if (!div3.contains(document.querySelector(".wine"))) {
        div3.appendChild(wine);
    }

    if (!menu.classList.contains("active")) {
        home.classList.remove("active");
        home.disabled = false;
        menu.classList.add("active");
        menu.disabled = true;
        contact.classList.remove("active");
        contact.disabled = false;
    }














}

export {menuDisplay};














