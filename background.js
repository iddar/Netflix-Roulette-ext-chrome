const randomUri = "https://dbug.mx/random";

function onResponse(tab, { title, image, synopsis, netflixid }) {
  const recommendation = `https://netflix.com/title/${netflixid}`;

  if (tab.url.includes("netflix") || tab.url == null) {
    chrome.tabs.update(tab.id, { url: recommendation });
  } else {
    chrome.tabs.create({ url: recommendation });
  }
}

chrome.browserAction.onClicked.addListener(tab => {
  fetch(randomUri)
    .then(blob => blob.json())
    .then(onResponse.bind(null, tab));
});
