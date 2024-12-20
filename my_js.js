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

// ____________________________跑馬圖____________________________________________
// 動態計算動畫時間，根據圖片總寬度調整
const carousel = document.querySelector('.image-carousel');
const container = document.querySelector('.image-carousel-container');

const totalWidth = carousel.scrollWidth / 1; // 單次圖片組寬度
const duration = totalWidth / 80; // 調整滾動速度（100px/sec）

carousel.style.animationDuration = `${duration}s`;
// _____________________________塔羅牌意___________________________________________
// 事件委派：監聽整個 body，避免局限於單一 gallery
document.body.addEventListener("click", function (event) {
    if (
        event.target.tagName === "IMG" &&
        event.target.closest(".gallery")
    ) {
        const modalImage = document.getElementById("modalImage");
        const modalDescription = document.getElementById("modalDescription");
        const modalTitle = document.getElementById("imageModalLabel");

        // 更新模態框的圖片和標題
        modalImage.src = event.target.src;
        modalImage.alt = event.target.alt;
        modalTitle.textContent = event.target.alt; // 更新模態框的標題為卡片名稱

        // 解析並顯示圖片對應的描述
        const description = JSON.parse(event.target.dataset.description);

        // 格式化顯示每個段落
        const keywordSection = `<p class="section-title">關鍵詞</p><p class="section-content">${description.keyword}</p>`;
        const uprightSection = `<p class="section-title">正位</p><p class="section-content">${description.upright}</p>`;
        const reversedSection = `<p class="section-title">逆位</p><p class="section-content">${description.reversed}</p>`;
        const meaningSection = `<p class="section-title">牌面含義</p><p class="section-content">${description.meaning}</p>`;

        // 更新模態框的內容
        modalDescription.innerHTML =
            keywordSection + uprightSection + reversedSection + meaningSection;
    }
});

// 塔羅牌意框
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
