document.addEventListener("DOMContentLoaded", function () {
    function loadNavLinks() {
        document.getElementById("links").innerHTML = `
            <table class="nav-table">
                <tr>
                    <td><a class="link-button" href="lndex.html">HOME</a></td>
                    <td><a class="link-button" href="index.html?page=bird">BIRD</a></td>
                    <td><a class="link-button" href="index.html?page=computer">COMPUTER</a></td>
                    <td><a class="link-button" href="index.html?page=team">TEAM</a></td>
                </tr>
            </table>
        `;
    }

    function loadContent() {
        const params = new URLSearchParams(window.location.search);
        const page = params.get("page") || "home";

        console.log("Current page:", page);

        // Update splash image dynamically
        document.getElementById("splash-image").src = `images/splash_${page}.webp`;

        let content = {
            home: "How to navigate this website:Use the buttons above to navigate to Computer, Team, Bird, or even Home.",
            bird: "It all started with a bird. Not a real bird, but definitions can be uncertain. That sort of thing doesn't matter.",
            computer: "Logic and order are important for a computer. Irder is often very important",
            team: "Together, but not. The nature of reality is a wall between them. There is an order to things, but its nature is entropy."
        };

        document.getElementById("page-text").innerHTML = content[page] || content["home"];
    }

    // Inject navigation links
    loadNavLinks();

    // Load page content
    loadContent();
});