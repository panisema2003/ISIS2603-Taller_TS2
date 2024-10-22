import { series } from "./data.js";
const tBody = document.getElementById("tBody");
const detail = document.getElementById("detail");
const imgSerie = document.getElementById("imgSerie");
const nameSerie = document.getElementById("nameSereie");
const descSerie = document.getElementById("descSerie");
const webSerie = document.getElementById("webSerie");
series.forEach((serie) => {
    console.log("Llenando la tabla...");
    const row = tBody.insertRow();
    row.innerHTML = `
        <td><b>${serie.id}</b></td>
        <td>${serie.name}</td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>
    `;
    row.addEventListener("click", () => showDetail(serie));
});
console.log("Tabla llena");
function showDetail(serie) {
    detail.style.display = "block";
    imgSerie.src = serie.img;
    nameSerie.textContent = serie.name;
    descSerie.textContent = serie.description;
    webSerie.href = serie.webpage;
    webSerie.textContent = serie.webpage;
}
const averageSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0) / series.length;
const averageRow = tBody.insertRow();
averageRow.innerHTML = `
    <td colspan="3"><b>Seasons average: ${averageSeasons}</b></td>
    <td> &nbsp </td>
`;
