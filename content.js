(function() {
    'use strict';

    const currentUrl = window.location.href;

    // ================= 极速模块一：网络学堂（0延迟强行突破） =================
    if (currentUrl.includes('learn.tsinghua.edu.cn')) {
        // 每 10 毫秒高频扫描，只要按钮在 DOM 中出现，立刻点击，绝不等待
        const sniper = setInterval(() => {
            const expireBtn = document.querySelector('a.chongxin'); 
            const homeLoginBtn = document.querySelector('input#loginButtonId'); 

            if (expireBtn) {
                expireBtn.click();
                clearInterval(sniper);
            }
            if (homeLoginBtn) {
                homeLoginBtn.click();
                clearInterval(sniper);
            }
        }, 10); 
    }

    // ================= 极速模块二：统一身份认证页面 =================
    if (currentUrl.includes('id.tsinghua.edu.cn')) {
        // 抛弃所有复杂机制，只等浏览器自动填充完成
        const observer = setInterval(() => {
            const pwdInput = document.querySelector('input[type="password"]');
            const ssoLoginBtn = document.querySelector('a.btn.btn-lg.btn-primary.btn-block');

            // 只要密码框里检测到了 Edge 自动填入的密码（长度大于0），瞬间点击登录
            if (pwdInput && pwdInput.value.length > 0 && ssoLoginBtn) {
                clearInterval(observer);
                
                // 为了保险起见，如果是按钮，除了点击，我们再补一个聚焦动作
                ssoLoginBtn.focus();
                ssoLoginBtn.click();
                console.log("密码已填充，0延迟点击登录！");
            }
        }, 10);
    }

    // ================= 模块三：作业提交 BGM 播放 =================
    if (currentUrl.includes('learn.tsinghua.edu.cn')) {
        const musicUrl = chrome.runtime.getURL("guanyu.mp3"); 
        const audio = new Audio(musicUrl);
        audio.preload = 'auto';

        document.body.addEventListener('click', function(e) {
            const target = e.target;
            
            if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.tagName === 'INPUT') {
                const text = target.innerText || target.value || '';
                
                if (text.includes('提交') && !text.includes('未提交')) {
                    console.log("作业已提交，准备播放释怀神曲...");
                    setTimeout(() => {
                        audio.play().catch(err => {
                            console.log("播放被拦截", err);
                        });
                    }, 1000); 
                }
            }
        });
    }

})();
