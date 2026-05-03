// Click anywhere = floating hearts
document.addEventListener("click", function(e) {
    let heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "absolute";
    heart.style.left = e.pageX + "px";
    heart.style.top = e.pageY + "px";
    heart.style.fontSize = "20px";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1000);
});