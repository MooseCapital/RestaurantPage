function contactDisplay() {
    const home = document.querySelector(".home");
    const menu = document.querySelector(".menu");
    const contact = document.querySelector(".contact");
    const div1 = document.querySelector(".div1");
    const div2 = document.querySelector(".div2");
    const div3 = document.querySelector(".div3");
    const footer = document.querySelector("footer");
    footer.style.position = "absolute";
    const p = document.querySelectorAll(".div2 p")


    p.forEach(para => {
        div2.removeChild(para);
    })

    if (div1.contains(document.querySelector(".food"))) {
        div1.removeChild(document.querySelector(".food"));
    }
    if (div2.contains(document.querySelector(".dessert"))) {
        div2.removeChild(document.querySelector(".dessert"));
    }

    if (div3.contains(document.querySelector(".wine"))) {
        div3.removeChild(document.querySelector(".wine"));
    }

    const info2 = document.createElement("p");
    info2.classList.add("info2");
    div2.appendChild(info2);



    document.querySelector(".title").innerText = "Contact";

    document.querySelector(".subheader1").innerText = "Takeout Orders";
    document.querySelector(".subheader2").innerText = "Head Chef";
    document.querySelector(".subheader3").innerText = "Business Number";
    document.querySelector(".info1").innerText = "(402)-333-1111";
    document.querySelector(".info3").innerText = "(402)-234-1234";
    document.querySelector(".info2").innerText = "(402)-990-1421";


    if (!contact.classList.contains("active")) {
        home.classList.remove("active");
        home.disabled = false;
        menu.classList.remove("active");
        menu.disabled = false;
        contact.classList.add("active");
        contact.disabled = true;
    }























}


export {contactDisplay};