let emojiRslt = document.getElementById("emojiRslt");
// console.log(emojiList[0]);
let btn = document.getElementById("btn");
btn.prev;
window.addEventListener("load", () => {
  showEmoji(emojiList);
  searchBar();
});

function showEmoji(arr) {
  arr.forEach((emoji) => {
    let nowShow = document.createElement("div");
    nowShow.classList.add("emoji");

    let paraOne = document.createElement("p");
    paraOne.innerText = emoji.emoji;
    nowShow.append(paraOne);

    let paraTwo = document.createElement("p");
    let twoTmp = emoji.aliases.map((alias) => alias.replaceAll("_", " "));
    paraTwo.innerText = twoTmp.join();
    nowShow.append(paraTwo);

    let paraThree = document.createElement("p");
    paraThree.innerText = emoji.description;
    nowShow.append(paraThree);

    emojiRslt.append(nowShow);
  });
}

function searchBar() {
  let input = document.getElementById("search");
  input.addEventListener("keyup", getEmojis);
}

function getEmojis(tsk) {
  let name = tsk.target.value;
  let searchResult = emojiList.filter((emoji) => {
    if (emoji.description.includes(name)) return emoji;
    else if (emoji.category.includes(name)) return emoji;
    else if (emoji.aliases.includes(name)) return emoji;
    else if (emoji.tags.includes(name)) return emoji;
  });

  emojiRslt.innerText = "";
  showEmoji(searchResult);
}
