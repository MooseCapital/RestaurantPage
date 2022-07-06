function addComponents() {
    const content = document.querySelector("#content");
    const header = document.createElement("h1");
    const img1 = document.createElement("img");
    const description = document.createElement("div");

    //header.innerText = "Vigoli's Restaurant";
    img1.src = "1.jpeg";
    description.innerText = "Vigoli's is a family friendly fine dining italian restaurant ran by Liam Vigoli since 1993"

    content.appendChild(header);
    content.appendChild(img1);
    content.appendChild(description);

}
export {addComponents};