document.addEventListener("DOMContentLoaded", function() {
    var releaseTime = new Date("2023-12-17T09:40:15").getTime(); // Set the release time
    var container = document.getElementById("timed-ebook-container");

    var checkTime = setInterval(function() {
        var now = new Date().getTime();
        if (now >= releaseTime) {
            container.innerHTML = `
            <b href="https://drive.google.com/uc?export=download&id=1dH-17nYXq9xyw2kcX3cCiA5Rm7JZtd74" download>
            <img src="assets/souvenir.jpeg" alt="IDA Silver Jubilee Ebook Cover" class="ebook-cover">
            <h2 class="ebook-title">Souvenir</h2>
        </b>
            `; // Add the HTML content for the ebook
            clearInterval(checkTime);
        }
    }, 1000);
});
