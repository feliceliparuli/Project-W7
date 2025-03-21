class Vinyl {
  constructor(_title, _artist, _description, _image, _price) {
    this.title = _title;
    this.artist = _artist;
    this.description = _description;
    this.img = _image;
    this.price = _price;
  }
}

const form = document.getElementById("vinyl-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const titleInput = document.getElementById("title");
  const artistInput = document.getElementById("artist");
  const descriptionInput = document.getElementById("description");
  const imageInput = document.getElementById("image");
  const priceInput = document.getElementById("price");

  const vinylData = {
    name: titleInput.value,
    brand: artistInput.value,
    description: descriptionInput.value,
    imageUrl: imageInput.value,
    price: parseFloat(priceInput.value), // attenzione: deve essere numero
  };

  console.log(vinylData);

  //   POST nell'api
  const vinylUrl = "https://striveschool-api.herokuapp.com/api/product/";
  const token =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkMWU5YzM4MzRiZjAwMTUwMDA2ZjIiLCJpYXQiOjE3NDI1NDQ1NDEsImV4cCI6MTc0Mzc1NDE0MX0.WFadjf2p67GvxN3SRNlhP2Dt2ELrGsKqsgh0eFxv4iw";

  fetch(vinylUrl, {
    method: "POST",
    body: JSON.stringify(vinylData),
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        alert("Vinile salvato con successo!");
        form.reset();
      } else {
        throw new Error("Risposta negativa dal backend");
      }
    })
    .catch((err) => {
      console.log("Errore nel salvataggio:", err);
    });
});
