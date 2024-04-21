document.addEventListener("DOMContentLoaded", function() {
    const productTitle = document.querySelector("h1");
    const productDetails = document.querySelectorAll(".product-details");

    productTitle.style.animation = "fadeIn 0.5s ease";
    productTitle.style.opacity = "1";

    productDetails.forEach(detail => {
        detail.style.animation = "scaleIn 0.5s ease";
        detail.style.opacity = "1";
    });
});