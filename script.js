// Typing effect for tagline
const tagline = "Cybersecurity Enthusiast & Software Developer";
let i = 0;
const taglineElement = document.getElementById("tagline");

function typeWriter() {
    if (i < tagline.length) {
        taglineElement.innerHTML += tagline.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

window.onload = typeWriter;
