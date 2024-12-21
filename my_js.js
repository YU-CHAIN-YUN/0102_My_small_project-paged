//_________________________ 換背景按鈕_________________________________________
function changeBackground(gradient, borderColor) {
    document.body.style.background = gradient; // 設置背景顏色
    const button = document.getElementById("dropdownMenuButton");
    button.style.background = gradient; // 設置按鈕背景
    button.style.borderColor = borderColor; // 設置按鈕邊框顏色
}
// _________________________監聽滾動事件_______________________________________
// 監聽滾動事件(介紹塔羅文字框)
// 監聽滾動事件，檢測文字是否進入可視範圍
document.addEventListener("scroll", function () {
    document.querySelectorAll(".textbox0").forEach((textbox) => {
        const rect = textbox.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
            textbox.classList.add("reveal"); // 添加動畫效果
        }
    });
});

// 監聽滾動事件(文字框)
document.addEventListener("scroll", function () {
    document.querySelectorAll(".textbox1 div").forEach((div) => {
        const rect = div.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
            div.classList.add("reveal"); // 添加動畫
        }
    });
});

// 偵測滾動觸發圖片動畫(塔羅牌圖)
document.addEventListener("scroll", function () {
    document.querySelectorAll(".imgbox1 img").forEach((img) => {
        const rect = img.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
            img.classList.add("reveal"); // 添加動畫
        }
    });
});

// ____________________________________________________________________________
// 塔羅牌陣解釋框
function expandImage(title, content, imageUrl) {
    document.getElementById("expanded-title").innerText = title;
    document.getElementById("expanded-content").innerText = content;
    document.getElementById("expanded-image").src = imageUrl;
    document.getElementById("overlay").style.display = "block";
    document.getElementById("expanded").style.display = "block";
}

function closeExpanded() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("expanded").style.display = "none";
}

// ____________________________向上按鈕_________________________________________
// 當用戶滾動時顯示或隱藏按鈕
window.onscroll = function () {
    let btn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btn.style.display = "block";  // 顯示按鈕
    } else {
        btn.style.display = "none";  // 隱藏按鈕
    }
};

// 滾動到頁面頂部的函數
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}