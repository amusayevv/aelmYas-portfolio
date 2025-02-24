const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    autoplay: {
        delay: 3000,
    },
});

document.querySelector("h1").onmouseenter = () => {
    document.querySelector("#h1-img").classList.add("active");
};
document.querySelector("#h1-img").onmouseenter = () => {
    document.querySelector("#h1-img").classList.add("active");
};
document.querySelector("h1").onmouseleave = () => {
    document.querySelector("#h1-img").classList.remove("active");
};

const timeElement = document.querySelector(".hero-clock");

function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const clockStr = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}`;

    timeElement.innerText = clockStr;
}

updateTime();
setInterval(updateTime, 1000);

const skillsParagraphArray = [
    "Let's get to the heart of your brand. I'll help you uncover what makes you tick and transform that into a visual story that resonates. <br /> <br /> Branding is more than solving the problem: it's finding the real problem to begin with.",
    "This is where we turn ideas into show-stoppers. Of course the investigation and strategy are important, but the final look is equally significant. <br /> <br /> I like to explore this part in depth and deliver something new and remarkable!",
    "I'll breathe life into your designs, giving them that extra oomph. <br /> <br />Typography and graphics sometimes need a little movement to get the point across and amplify their meaning.",
    "In today's world, your digital presence is often the first thing people see. <br /> <br />I’ll help you determine what is essential and what isn't in your digital products, whether it's a website, social media, or more.",
    "This is my playground, where I push the envelope and think outside the box — those clichés that actually mean something. Creativity wraps up every point above. <br /> <br /> Without creativity, you have a dull project... Let’s avoid that.",
];

let skillsParagraph = document.querySelector(".skills-right");

const skills = document.querySelectorAll(".skills-skill");
skills.forEach((skill, index) => {
    skill.addEventListener("mouseenter", () => {
        if (index === 0) skillsParagraph.classList.add("orange");
        if (index === 1) skillsParagraph.classList.add("cyan");
        if (index === 2) skillsParagraph.classList.add("pink");
        if (index === 3) skillsParagraph.classList.add("yellow");
        if (index === 4) skillsParagraph.classList.add("green");
        skillsParagraph.innerHTML = skillsParagraphArray[index];
    });
});

skills.forEach((skill, index) => {
    skill.addEventListener("mouseleave", () => {
        skillsParagraph.classList.remove(
            "orange",
            "cyan",
            "pink",
            "yellow",
            "green"
        );

        skillsParagraph.innerHTML = "";
    });
});
