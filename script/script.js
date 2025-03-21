// spinner
const hideSpinner = function () {
  const div = document.getElementById("spinner-container");
  div.classList.add("d-none");
};
//   token
const token = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkMWU5YzM4MzRiZjAwMTUwMDA2ZjIiLCJpYXQiOjE3NDI1NDQ1NDEsImV4cCI6MTc0Mzc1NDE0MX0.WFadjf2p67GvxN3SRNlhP2Dt2ELrGsKqsgh0eFxv4iw",
  },
};
//   recupero oggetti da api
const getVinyl = function () {
  const vinylUrl = "https://striveschool-api.herokuapp.com/api/product/";
  fetch(vinylUrl, token)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("risposta non valida");
      }
    })
    .then((data) => {
      hideSpinner();
      console.log("dati ricevuti", data);

      const row = document.getElementById("vinyl-row");

      data.forEach((vinyl) => {
        const col = document.createElement("div");
        col.classList.add("col");

        col.innerHTML = `
          <div class="card h-100">
            <img
              src="${vinyl.imageUrl}"
              class="card-img-top p-2"
              alt="${vinyl.name}"
            />
            <div class="card-body d-flex flex-column">
              <p class="card-text mb-1 text-muted">${vinyl.brand}</p>
              <h5 class="card-title flex-grow-1">${vinyl.name}</h5>
              <p class="card-text fw-bold">${vinyl.price}€</p>
              <a href="./dettagli.html?id=${vinyl._id}" class="btn btn-primary">Dettagli</a>
            </div>
          </div>
        `;

        row.appendChild(col);
      });
    })
    .catch((error) => {
      hideSpinner();
      console.log("Si è verificato un errore:", error);
    });
};
getVinyl();
