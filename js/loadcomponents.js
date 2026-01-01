function loadComponent(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => document.getElementById(id).innerHTML = data);
}

loadComponent("topnav", "components/topnav.html");
loadComponent("sidenav", "components/sidenav.html");
