document.addEventListener("DOMContentLoaded", function() {
    var releaseTime = new Date("2023-12-17T11:10:15").getTime(); // Set the release time
    var container = document.getElementById("timed-ebook-container");

    var checkTime = setInterval(function() {
        var now = new Date().getTime();
        if (now >= releaseTime) {
            container.innerHTML = `
            <a href="https://drive.google.com/uc?export=download&id=1dH-17nYXq9xyw2kcX3cCiA5Rm7JZtd74" download>
            <img src="assets/souvenier.png" alt="IDA Silver Jubilee Ebook Cover" class="ebook-cover">
            <h2 class="ebook-title">Souvenier</h2>
        </a>
            `; // Add the HTML content for the ebook
            clearInterval(checkTime);
        }
    }, 1000);
});
