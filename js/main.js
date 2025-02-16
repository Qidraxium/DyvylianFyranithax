document.addEventListener("DOMContentLoaded", function () {
    function loadNavLinks() {
        document.getElementById("links").innerHTML = `
            <table class="nav-table">
                <tr>
                    <td><a class="link-button" href="index.html?page=home">HOME</a></td>
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
            home: "You have found us. You must have been looking. We are not here for you, but things aren't always how we expext.",
            bird: "It all started with a bird. Not a real bird, but definitions can be uncertain. That sort of thing doesn't matter.",
            computer: "It never existed. It was an approximation. A cycle of creation. What creates what?",
            team: "Together, but not. The nature of reality is a wall between them. There is an order to things, but its nature is entropy."
        };

        document.getElementById("page-text").innerHTML = content[page] || content["home"];
    }

    // Inject navigation links
    loadNavLinks();

    // Load page content
    loadContent();
});