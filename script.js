document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove 'active' class from all buttons and content
            tabButtons.forEach(btn => btn.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));

            // Add 'active' class to the clicked button and corresponding content
            button.classList.add("active");
            document.getElementById(button.dataset.tab).classList.add("active");
        });
    });
});
localStorage