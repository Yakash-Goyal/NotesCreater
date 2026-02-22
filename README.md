# YouTube Clean Screenshot Extension

A lightweight Chrome/Brave extension that lets students take **clean screenshots of YouTube lecture videos** (without UI controls) and automatically saves them in **ordered folders per lecture**.

Built to solve common problems while studying from YouTube:
- Play button appearing in screenshots
- Random image order
- Screenshots from different topics getting mixed
- Manual renaming and organizing

---

##  Features

✅ Capture ONLY the video frame (no YouTube controls)  
✅ One-click screenshot button injected into YouTube  
✅ Automatic ordering (001, 002, 003…)  
✅ Separate folder for each lecture  
✅ Timestamped filenames  
✅ Works on Chrome & Brave  
✅ No external libraries required  

---

##  Example Output
Downloads/
└── Operating Systems Lecture 05/
├── 001_03m12s.png
├── 002_04m01s.png
└── 003_06m45s.png


---

##  How It Works

- The extension directly captures the `<video>` element using HTML Canvas  
- This avoids screen capture APIs, so **no UI overlays appear**
- Each YouTube video ID acts as a namespace to prevent topic mixing
- Screenshots are saved using Chrome’s Downloads API
- A MutationObserver ensures the capture button works even with YouTube’s SPA navigation

---

##  Project Structure
yt-clean-screenshot/
│
├── manifest.json
├── content.js
├── background.js
├── popup.html
└── popup.js


---

##  Installation (Developer Mode)

1. Open Chrome/Brave
2. Go to :
3. Enable **Developer Mode**
4. Click **Load unpacked**
5. Select the project folder
6. Open any YouTube video
7. Click the red **📸 Screenshot** button

Screenshots will appear in your **Downloads folder**.

---

##  Tech Stack

- JavaScript
- Chrome Extension Manifest V3
- HTML Canvas
- Chrome Downloads API

---

##  Intended Use

Designed primarily for students who:

- Watch lectures on YouTube
- Take notes using screenshots
- Want organized material without manual cleanup

---

##  Planned Enhancements

- PDF export
- OCR (extract text from slides)
- Timestamp index
- Keyboard shortcuts
- Screenshot preview gallery
- Chrome Web Store release

---

##  Author

Yash Goyal

If you found this useful, feel free to improve it or fork the project.
