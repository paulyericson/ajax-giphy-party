
const form = document.querySelector('#searchForm')
const searchInput = document.querySelector('#searchInput')
const giphyArea = document.querySelector('#giphyArea')
const removeBtn = document.querySelector('#removeBtn')


// Building the Form

form.addEventListener("submit", async function(e) {
    e.preventDefault();

    const searchValue = searchInput.value;
    searchInput.value = "";

    const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
            q: searchValue,
            api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
    });
    console.log(res.data);
    addGif(res.data);
})


//Apending GIFs

function addGif(res) {
    let numResults = res.data.length;
    if (numResults) {
      let randomIdx = Math.floor(Math.random() * numResults);
      let newCol = document.createElement("div");
      newCol.className = "col-md-4 col-12 mb-4";
      let newGif = document.createElement("img");
      newGif.src = res.data[randomIdx].images.original.url;
      newGif.className = "w-100";
      newCol.appendChild(newGif);
      giphyArea.appendChild(newCol);
    }
  }


// Removing GIFs

removeBtn.addEventListener("click", function(){
    while (giphyArea.firstChild) {
        giphyArea.removeChild(giphyArea.firstChild);
    }
});






