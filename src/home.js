function homeDisplay() {

    const div2 = document.querySelector(".div2");
    console.log("hometest");
    document.querySelector(".title").innerText = "Vigoli's Restaurant";

    document.querySelector(".subheader1").innerText = "History";

    document.querySelector(".info1").innerText = "While in college, Brooklyn, NY native, Liam Vigoli started his appetite for\n" +
        "                making people happy through food. He sold hotdogs from a wagon, now our “Salad\n" +
        "                Wagon” on the side of 23rd st. in Manhattan, NYC. Eventually Vigoli’s was\n" +
        "                established in 1954. Using his Sicilian family recipes and his charming\n" +
        "                personality, he made his mark in New york. In 1958, Liam took a break from the\n" +
        "                restaurant business to pursue another business venture, Act One Limousine. Liam\n" +
        "                decided to hang onto the décor and sentimental gifts that adorned the restaurant\n" +
        "                walls. Good thing he did, because in 1965, his daughter, Alissa Cerami\n" +
        "                convinced Fred to reopen Cerami’s as business partners and bring back the\n" +
        "                nostalgic energy and look of the original Cerami’s with a norhtern flair. Literally\n" +
        "                growing up in the restaurant business, Alissa acquired a passion for cooking and\n" +
        "                entrepreneurship. With the desire of making people happy with good food and\n" +
        "                welcoming staff, Liam & Alissa make a great team.";

        document.querySelector(".subheader2").innerText = "Hours";

        const sunday = document.createElement("p");
        sunday.classList.add("sunday");
        sunday.innerText = "Sunday: 8am - 8pm";

        div2.appendChild(sunday);

        const monday = document.createElement("p");
        monday.classList.add("monday");
        monday.innerText = "Monday: 6am - 6pm";

        div2.appendChild(monday);

        const tuesday = document.createElement("p");
        tuesday.classList.add("tuesday");
        tuesday.innerText = "Tuesday: 6am - 6pm";

        div2.appendChild(tuesday);

        const wednesday = document.createElement("p");
        wednesday.classList.add("wednesday");
        wednesday.innerText = "Wednesday: 6am - 6pm";

        div2.appendChild(wednesday);

        const thursday = document.createElement("p");
        thursday.classList.add("thursday");
        thursday.innerText = "Thursday: 6am - 10pm";

        div2.appendChild(thursday);

        const friday = document.createElement("p");
        friday.classList.add("friday");
        friday.innerText = "Friday: 6am - 10pm";

        div2.appendChild(friday);

        const saturday = document.createElement("p");
        saturday.classList.add("saturday");
        saturday.innerText = "Saturday: 8am - 10pm";

        div2.appendChild(saturday);

        document.querySelector(".subheader3").innerText = "location";
        document.querySelector(".info3").innerText = "23rd West St NYC, New York";


}

export {homeDisplay};