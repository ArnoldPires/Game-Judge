const cards = document.querySelectorAll('.card-header');
cards.forEach((card) => {
  card.addEventListener('click', (x) => {
    if (x.target && x.target.matches('button')) {
      fetch('/comment/' + x.target.dataset.index, {
        method: 'delete'
      })
      .then((res) => {
        return res.json();
      })
      .then(() => {
        reloadPage();
      })
    }
  });
});
function reloadPage(jsonResponse) {
  location.reload();
  console.log(jsonResponse);
}
