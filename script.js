const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

let width, height;
function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
}
window.addEventListener("resize", resize);
resize();

let stars = [];
for (let i = 0; i < 300; i++) {
    stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * width,
    });
}

function animate() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = "white";
    for (let i = 0; i < stars.length; i++) {
        let star = stars[i];
        star.z -= 2;
        if (star.z <= 0) {
            star.z = width;
            star.x = Math.random() * width;
            star.y = Math.random() * height;
        }
        let k = 128.0 / star.z;
        let px = star.x * k + width / 2;
        let py = star.y * k + height / 2;

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
            let size = (1 - star.z / width) * 3;
            ctx.beginPath();
            ctx.arc(px, py, size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    requestAnimationFrame(animate);
}
animate();
