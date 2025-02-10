document.addEventListener("DOMContentLoaded", function() {
    console.log("js_base.js loaded!");

    function loadTextFile(elementId, filePath) {
        fetch(filePath)
            .then(response => response.text())
            .then(data => document.getElementById(elementId).innerHTML = data)
            .catch(error => console.error(`Error loading ${filePath}:`, error));
    }

    function setupLayout() {
        let container = document.getElementById("container");

        container.innerHTML = `
            <table id="main-table">
                <tr>
                    <td id="splash-image" colspan="4"></td>
                </tr>
                <tr id="nav-links">
                  <table id="nav-table">
                    <tr>
                      <td class="nav-cell" id="nav-home"></td>
                      <td class="nav-cell" id="nav-bird"></td>
                     <td class="nav-cell" id="nav-computer"></td>
                      <td class="nav-cell" id="nav-team"></td>
                    </tr>
                  </table>  
                </tr>
                <tr>
                    <td id="main-content" colspan="4"></td>
                </tr>
                <tr>
                    <td id="footer" colspan="4"></td>
                </tr>
            </table>
        `;

        // Load the shared and footer across all pages
        loadTextFile("footer", "txt_footer.txt");
    }

    setupLayout();
});