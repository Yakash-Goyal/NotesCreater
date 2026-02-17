(function () {
  let buttonInjected = false;

  function waitForVideoAndInject() {
    const video = document.querySelector("video");
    if (!video || buttonInjected) return;

    injectButton(video);
    buttonInjected = true;
  }

  function injectButton(video) {
    const btn = document.createElement("button");
    btn.id = "yt-clean-screenshot-btn";
    btn.innerText = "📸";

    btn.style.cssText = `
      position: fixed;
      bottom: 120px;
      right: 20px;
      z-index: 999999;
      padding: 10px 14px;
      background: #ff0000;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 14px;
      cursor: pointer;
      box-shadow: 0 2px 6px rgba(0,0,0,0.3);
    `;

    btn.onclick = () => captureFrame(video);

    document.body.appendChild(btn);
    console.log("YT Screenshot button injected");
  }

  function captureFrame(video) {
    if (!video || video.videoWidth === 0) return;

    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    chrome.runtime.sendMessage({
      type: "SAVE_IMAGE",
      payload: {
        image: canvas.toDataURL("image/png"),
        timestamp: Math.floor(video.currentTime),
        videoId: new URLSearchParams(location.search).get("v"),
        title: document.title.replace(" - YouTube", "")
      }
    });
  }

  // Observe DOM changes (YouTube SPA fix)
  const observer = new MutationObserver(() => {
    waitForVideoAndInject();
  });

  observer.observe(document.body, { childList: true, subtree: true });

})();