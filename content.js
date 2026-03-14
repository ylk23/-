// 1. 获取我们在文件夹里准备好的音乐文件
const musicUrl = chrome.runtime.getURL("bgm.mp3");
const audio = new Audio(musicUrl);

// 2. 定位网络学堂的那个“提交”按钮（它的身份证号是 goBtn）
const submitButton = document.getElementById("goBtn");

// 3. 如果网页里有这个按钮，我们就给它加上一个“点击就播放”的指令
if (submitButton) {
    submitButton.addEventListener("click", function() {
        audio.play();
    });
}