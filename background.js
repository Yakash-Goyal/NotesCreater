const counters = {};

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === "SAVE_IMAGE") {
    const { image, timestamp, videoId, title } = msg.payload;
    counters[videoId] ??= 1;
    const time = formatTime(timestamp);
    const index = String(counters[videoId]).padStart(3, "0");
    const filename = `${sanitize(title)}/${index}_${time}.png`;

    chrome.downloads.download({
      url: image,
      filename,
      saveAs: false
    });

    counters[videoId]++;
  }
});

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}m${String(s).padStart(2, "0")}s`;
}

function sanitize(name) {
  return name.replace(/[\\/:*?"<>|]/g, "");
}