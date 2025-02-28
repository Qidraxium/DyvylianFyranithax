window.addEventListener("load", function () {
    console.log("Page fully loaded, injecting navigation and content...");

    function loadNavLinks() {
        const linksContainer = document.getElementById("links");
        if (!linksContainer) {
            console.warn("Navigation container not found!");
            return;
        }
        linksContainer.innerHTML = `
            <table class="nav-table">
                <tr>
                    <td><a class="link-button" href="lndex.html">HOME</a></td>
                    <td><a class="link-button" href="index.html?page=bird">BIRD</a></td>
                    <td><a class="link-button" href="index.html?page=computer">COMPUTER</a></td>
                    <td><a class="link-button" href="index.html?page=team">TEAM</a></td>
                </tr>
            </table>
        `;
        console.log("Navigation injected.");
    }

    function loadContent() {
        const params = new URLSearchParams(window.location.search);
        const page = params.get("page") || "home";

        console.log("Current page:", page);

        // Ensure splash image exists before modifying it
        const splashImage = document.getElementById("splash-image");
        if (splashImage) {
            splashImage.src = `images/splash_${page}.webp`;
        } else {
            console.warn("Splash image not found.");
        }

        // Content for each page
        let content = {
            home: "How to navigate this website:<br>Use the buttons above to navigate to Computer, Team, Bird, or even Home.",
            bird: "It all started with a bird. Not a real bird, but definitions can be uncertain. That sort of thing doesn't matter.",
            computer: "Logic and order are important for a computer. Order is often very important.",
            team: "Together, but not. The nature of reality is a wall between them. There is an order to things, but its nature is entropy."
        };

        // Ensure page-text exists before modifying it
        const pageText = document.getElementById("page-text");
        if (pageText) {
            pageText.innerHTML = content[page] || content["home"];
        } else {
            console.warn("Page text container not found.");
        }

        console.log("Content injected.");
    }

    // Delay slightly to ensure elements are ready
    setTimeout(() => {
        loadNavLinks();
        loadContent();
    }, 50); // Small delay to ensure elements exist
});