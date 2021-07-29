// dynamically adding the nav bar to ensure reusability
function loadHeader() {
    // targets the first header element, since there is only one
    document.getElementsByTagName("header")[0].innerHTML = `<div id="logo"><a href=""><img src="images/vivid-cinemas-logo.png" /></a></div>
    <nav id="navbar">
        <ul id="nav-list">
            <li><a class="nav-links" href="">Home</a></li>
            <li><a class="nav-links" href="">Get Tickets</a></li>
            <li><a class="nav-links" href="">Now Playing</a></li>
            <li><a class="nav-links" href="">Locations</a></li>
            <li><a class="nav-links" href="">Membership</a></li>
            <li><a class="nav-links" href="">News</a></li>
            <li><a class="nav-links" href="">Contact Us</a></li>
        </ul>
    </nav>
    <button onclick="toggleNav()">Menu</button>`;
}

function toggleNav() {
    const nav = document.getElementById("nav-list");

    if (nav.classList.contains("responsive"))
        nav.classList.remove("responsive");
    else
        nav.classList.add("responsive");
}

function loadFooter() {
    document.getElementsByTagName("footer")[0].innerHTML = `<p><small>Copyright &copy; 2021 Vivid Cinemas. All rights reserved.</small></p>`;
}