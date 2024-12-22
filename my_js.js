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
// ______________________________搜尋功能____________________________________
// script.js
document.getElementById("search-button").addEventListener("click", function () {
    const inputElement = document.getElementById("search-input");

    // 切換輸入框的顯示狀態
    inputElement.classList.toggle("active");
    inputElement.focus();  // 當展開後自動聚焦
});

document.getElementById("search-input").addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const resultsContainer = document.getElementById("search-results");

    // 假設的搜尋資料集
    const data = [
        "如何學習 JavaScript",
        "Web 開發基礎",
        "前端框架介紹",
        "學習 HTML 和 CSS",
        "React 和 Vue 比較"
    ];

    // 篩選出符合搜尋條件的結果
    const filteredResults = data.filter(item => item.toLowerCase().includes(query));

    // 顯示搜尋結果
    if (filteredResults.length > 0) {
        resultsContainer.innerHTML = filteredResults.map(item => `<div class="result-item">${item}</div>`).join('');
        resultsContainer.style.display = 'block';
    } else {
        resultsContainer.innerHTML = '<div>沒有找到相關結果</div>';
        resultsContainer.style.display = 'block';
    }
});

