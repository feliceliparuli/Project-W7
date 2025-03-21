const year = function () {
  const getyear = new Date().getFullYear();
  document.getElementById("year").innerText = getyear;
};
year();
