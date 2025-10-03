function showSkill(skill) {
    let details = {
        web: "Web Development: HTML, CSS, JavaScript, React, TailwindCSS, Responsive Design.",
        cyber: "Cybersecurity: Ethical hacking, penetration testing, vulnerability assessment.",
        python: "Python Programming: Data analysis, automation, scripting, AI development.",
        ai: "AI & ML: Machine learning models, neural networks, data science projects."
    };

    document.getElementById("skill-details").innerHTML = `<p>${details[skill]}</p>`;
}
