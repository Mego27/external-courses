let userMenu = document.getElementById("user-menu");

function showUserMenu() {
    console.log(userMenu.childElementCount);
    if (userMenu.childElementCount < 3) {
        let ul = document.createElement("ul");
        ul.classList.add("user-menu");
        userMenu.append(ul);
        for (let index = 0; index < 4; index++) {
            ul.appendChild(document.createElement("li"));
            ul.children[index].appendChild(document.createElement("a"));
        }
        ul.children[0].lastChild.innerHTML = "View profile";
        ul.children[1].lastChild.innerHTML = "Settings";
        ul.children[2].lastChild.innerHTML = "About us";
        ul.children[3].lastChild.innerHTML = "Log out";
        document.getElementById("arrow").style.transform = "rotate(180deg)";
    }
    else {
        userMenu.removeChild(document.querySelector(".user-menu"));
        document.getElementById("arrow").style.transform = "rotate(0deg)";
    }
}
document.getElementById("user-menu").addEventListener("click", showUserMenu);