const search = document.getElementsByTagName("input")[0];
const ulTag = document.querySelector("ul");

let listOfEmojis;

function renderEmojis(listOfEmojis) {
  ulTag.innerHTML = "";
  listOfEmojis.forEach(emoji => {
    const emojiSpan = document.createElement("span");
    // const nameSpan = document.createElement('span')
    emojiSpan.innerHTML = emoji.char;
    emojiSpan.classList.add("emoji");
    emojiSpan.addEventListener("click", () => {
      writeToClipboard(emoji.char);
      renderEmojis(listOfEmojis.filter(emj => emj.category === emoji.category));
    });
    ulTag.appendChild(emojiSpan);
  });
}

function emojiFetch() {
  const url =
    "https://raw.githubusercontent.com/amio/emoji.json/master/emoji.json";
  fetch(url)
    .then(response => response.json())
    .then(json => {
      listOfEmojis = json;
      // console.log(listOfEmojis);

      renderHTML(listOfEmojis);
    });

  function renderHTML(listOfEmojis) {
    renderEmojis(listOfEmojis);

    search.addEventListener("keyup", e => {
      renderEmojis(searchEmojis(listOfEmojis, e.target.value));
    });
  }
}

emojiFetch();

function searchEmojis(listOfEmojis, name) {
  console.clear();
  return listOfEmojis.filter(emoji => {
    return emoji.name.includes(name);
  });
}

function writeToClipboard(text) {
  return navigator.clipboard.writeText(text);
}
