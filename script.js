function showSkill(skill) {
    let details = {
        web: "🌐 <strong>Web Development:</strong> HTML, CSS, JavaScript, React, TailwindCSS, Responsive Design.",
        cyber: "🛡️ <strong>Cybersecurity:</strong> Ethical hacking, penetration testing, vulnerability assessment.",
        python: "🐍 <strong>Python Programming:</strong> Data analysis, automation, scripting, AI development.",
        ai: "🤖 <strong>AI & ML:</strong> Machine learning models, neural networks, data science projects."
    };

    let container = document.getElementById("skill-details");

    // Reset content and add animation
    container.innerHTML = "";
    container.classList.remove("fade-in");
    void container.offsetWidth; // trigger reflow
    container.classList.add("fade-in");

    // Typing effect
    let text = details[skill];
    container.innerHTML = ""; // reset

    let i = 0;
    let speed = 30;

    function typeWriter() {
        if (i < text.length) {
            container.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
}
