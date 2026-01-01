const params = new URLSearchParams(window.location.search);
const board = params.get("board");
const subject = params.get("subject");

document.getElementById("pageTitle").innerText =
  board.toUpperCase() + " - " + subject.toUpperCase();

fetch(`boards/${board}/data.json`)
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("pdfList");

    data[subject].forEach(file => {
      const a = document.createElement("a");
      a.href = `boards/${board}/${subject}/${file}`;
      a.target = "_blank";
      a.className = "pdf-link";
      a.innerText = file;
      list.appendChild(a);
    });
  });
