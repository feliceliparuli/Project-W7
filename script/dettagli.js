// recupero id

const urlParam = new URLSearchParams(location.search);
const vinylId = urlParam.get("id");
console.log(vinylId);
const vinylUrl = "https://striveschool-api.herokuapp.com/api/product/";
const token = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkMWU5YzM4MzRiZjAwMTUwMDA2ZjIiLCJpYXQiOjE3NDI1NDQ1NDEsImV4cCI6MTc0Mzc1NDE0MX0.WFadjf2p67GvxN3SRNlhP2Dt2ELrGsKqsgh0eFxv4iw",
  },
};
const getVinylDetails = function () {
  fetch(vinylUrl + "/" + vinylId, token)
    .then((response) => {
      console.log("response", response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("errore nel recupero dei dettagli");
      }
    })
    .then((data) => {
      console.log(data);
      const img = document.getElementById("img");
      const artista = document.getElementById("artista");
      const titolo = document.getElementById("titolo");
      const descrizione = document.getElementById("descrizione");
      const prezzo = document.getElementById("prezzo");

      img.innerHTML = `<img src="${data.imageUrl}" alt="${data.name}" class="w-75"/>`;
      artista.innerText = data.brand;
      titolo.innerText = data.name;
      descrizione.innerText = data.description;
      prezzo.innerText = data.price + "€";
    })
    .catch((err) => {
      console.log("errore nel recupero dati", err);
    });
};
const deleteVinyl = function () {
  fetch(vinylUrl + "/" + vinylId, {
    method: "DELETE",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkMWU5YzM4MzRiZjAwMTUwMDA2ZjIiLCJpYXQiOjE3NDI1NDQ1NDEsImV4cCI6MTc0Mzc1NDE0MX0.WFadjf2p67GvxN3SRNlhP2Dt2ELrGsKqsgh0eFxv4iw",
    },
  })
    .then((response) => {
      if (response.ok) {
        alert("concerto eliminato");
        location.assign("./index.html");
      } else {
        throw new Error("eliminazione non riuscita");
      }
    })
    .catch((err) => {
      console.log("errore nella cancellazione", err);
    });
};
getVinylDetails();
