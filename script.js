function showSkill(skill) {
    const details = {
        web: "Web Development: HTML, CSS, JavaScript, React, TailwindCSS, Responsive Design.",
        cyber: "Cybersecurity: Ethical hacking, penetration testing, vulnerability assessment.",
        python: "Python Programming: Data analysis, automation, scripting, AI development.",
        ai: "AI & ML: Machine learning models, neural networks, data science projects."
    };

    let container = document.getElementById("skill-details");
    container.innerHTML = `<p>${details[skill]}</p>`;
}

// Typing animation for subtitle
let subtitle = "Building secure systems. Writing clean code. Exploring innovation.";
let i = 0;
function typeWriter() {
    if (i < subtitle.length) {
        document.getElementById("subtitle").innerHTML += subtitle.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}
typeWriter();

// Quote API
async function fetchQuote() {
    let response = await fetch("https://api.quotable.io/random");
    let data = await response.json();
    document.getElementById("quote").innerText = `"${data.content}" — ${data.author}`;
}
fetchQuote();
