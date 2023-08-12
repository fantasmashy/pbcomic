// Update text when it is changed
document.addEventListener("DOMContentLoaded", function() {
    const textOverlay = document.getElementById("textOverlay");

    textOverlay.addEventListener("input", function() {
        const newText = textOverlay.innerHTML; // Use innerHTML to preserve line breaks
        textOverlay.innerHTML = newText;
    });
});
