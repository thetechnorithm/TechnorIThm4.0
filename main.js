// ---------- Create animated particles ----------
document.addEventListener("DOMContentLoaded", () => {
    const bg = document.querySelector(".tech-bg");

    for (let i = 0; i < 50; i++) {
        const p = document.createElement("div");
        p.classList.add("particle");
        p.style.left = Math.random() * 100 + "vw";
        p.style.top = Math.random() * 100 + "vh";
        p.style.animationDelay = Math.random() * 5 + "s";
        bg.appendChild(p);
    }
});
