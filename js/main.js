document.addEventListener("DOMContentLoaded", function() {
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
        const page = params.get("page") || "home"; // Default to home

        console.log("Current page:", page);

        let content = {
            home: "You are not home.",
            bird: "The skies are not yours.",
            computer: "The network is not safe.",
            team: "It is possible, but not likely."
        };

        document.getElementById("page-text").innerHTML = content[page] || content["home"];
    }

    // Inject navigation links
    loadNavLinks();

    // Load page content
    loadContent();
});