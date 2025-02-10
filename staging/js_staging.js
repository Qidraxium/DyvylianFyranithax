document.addEventListener("DOMContentLoaded", function() {
    console.log("js_staging.js loaded!");

    function loadTextFile(elementId, filePath) {
        fetch(filePath)
            .then(response => response.text())
            .then(data => document.getElementById(elementId).innerHTML = data)
            .catch(error => console.error(`Error loading ${filePath}:`, error));
    }
    
    // Load nav links for this page
     loadTextFile("nav-home", "txt_nav-home.txt");
     loadTextFile("nav-bird", "txt_nav-bird.txt");
     loadTextFile("nav-computer", "txt_nav-computer.txt");
     loadTextFile("nav-team", "txt_nav-team.txt");


    // Override Main Content for Staging
    loadTextFile("main-content", "txt_main.txt");
});