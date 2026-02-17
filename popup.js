document.getElementById("export").onclick = () => {
  chrome.runtime.sendMessage({ type: "EXPORT_PDF" });
};

document.getElementById("clear").onclick = () => {
  chrome.runtime.sendMessage({ type: "CLEAR_ALL" });
};