const searchFormButton = document.querySelector("#searchSubmit");
searchFormButton.addEventListener("click", sendSearch);

function sendSearch(event) {
  event.preventDefault();
  const searchForm = document.querySelector("#searchForm"),
    searchInput = document.querySelector("#search"),
    searchFD = new FormData(searchForm),
    url = "http://httpbin.org/post",
    req = new Request(url, {
      body: searchFD,
      method: "POST",
    });
    if (searchInput.value == '') alert('The search field must be filled!');
    else {
      fetch(req)
    .then((res) => {
      if (res.status !== 200) alert(`Error ${res.status}`);
      else return res.json();
    })
    .then((data) => {
      if (data) {
        console.log("Response from server for search");
        console.log(data);
      }
    })
    .catch((error) => {
      console.log(`error ${error}`)
    })
  searchInput.value = "";
    }
}
