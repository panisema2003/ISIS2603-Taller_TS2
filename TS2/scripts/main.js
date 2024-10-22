import { series } from "./data.js";
const tBody = document.getElementById("tBody");
series.forEach((serie) => {
    console.log("Llenando la tabla...");
    const row = tBody.insertRow();
    row.innerHTML = `
        <td><b>${serie.id}</b></td>
        <td><a href=${serie.webpage} target="_blank">${serie.name}</a></td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>
    `;
});
console.log("Tabla llena");
const averageSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0) / series.length;
const averageRow = tBody.insertRow();
averageRow.innerHTML = `
    <td colspan="3"><b>Seasons average: ${averageSeasons}</b></td>
    <td> &nbsp </td>
`;
