const yearEl = document.getElementById("footer");
const currentYear = (year) => {
    year = new Date();
    yearEl.textContent = "©️" + " " + year.getFullYear();
}
currentYear();