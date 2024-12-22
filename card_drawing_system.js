// 假設這是你的 20 張圖片的路徑
const images = [
    "./tarotcard_img/大阿卡那(22張)/0愚者_.jpg",
    "./tarotcard_img/大阿卡那(22張)/1魔術師_.jpg",
    "./tarotcard_img/大阿卡那(22張)/2女祭師_.jpg",
    "./tarotcard_img/大阿卡那(22張)/3皇后_.jpg",
    "./tarotcard_img/大阿卡那(22張)/4皇帝_.jpg",
    "./tarotcard_img/大阿卡那(22張)/5教皇_.jpg",
    "./tarotcard_img/大阿卡那(22張)/6戀人_.jpg",
    "./tarotcard_img/大阿卡那(22張)/7戰車_.jpg",
    "./tarotcard_img/大阿卡那(22張)/8力量_.jpg",
    "./tarotcard_img/大阿卡那(22張)/9隱者_.jpg",
    "./tarotcard_img/大阿卡那(22張)/10命運之輪_.jpg",
    "./tarotcard_img/大阿卡那(22張)/11正義_.jpg",
    "./tarotcard_img/大阿卡那(22張)/12倒吊人_.jpg",
    "./tarotcard_img/大阿卡那(22張)/13死神_.jpg",
    "./tarotcard_img/大阿卡那(22張)/14節制_.jpg",
    "./tarotcard_img/大阿卡那(22張)/15惡魔_.jpg",
    "./tarotcard_img/大阿卡那(22張)/16高塔_.jpg",
    "./tarotcard_img/大阿卡那(22張)/17星星_.jpg",
    "./tarotcard_img/大阿卡那(22張)/18月亮_.jpg",
    "./tarotcard_img/大阿卡那(22張)/19太陽_.jpg",
    "./tarotcard_img/大阿卡那(22張)/20審判_.jpg",
    "./tarotcard_img/大阿卡那(22張)/21世界_.jpg",
    "./tarotcard_img/小阿卡那(56張)/聖杯/Cups01_.jpg",
    "./tarotcard_img/小阿卡那(56張)/聖杯/Cups02_.jpg",
    "./tarotcard_img/小阿卡那(56張)/聖杯/Cups03_.jpg",
    "./tarotcard_img/小阿卡那(56張)/聖杯/Cups04_.jpg",
    "./tarotcard_img/小阿卡那(56張)/聖杯/Cups05_.jpg",
    "./tarotcard_img/小阿卡那(56張)/聖杯/Cups06_.jpg",
    "./tarotcard_img/小阿卡那(56張)/聖杯/Cups07_.jpg",
    "./tarotcard_img/小阿卡那(56張)/聖杯/Cups08_.jpg",
    "./tarotcard_img/小阿卡那(56張)/聖杯/Cups09_.jpg",
    "./tarotcard_img/小阿卡那(56張)/聖杯/Cups10_.jpg",
    "./tarotcard_img/小阿卡那(56張)/聖杯/Cups11_.jpg",
    "./tarotcard_img/小阿卡那(56張)/聖杯/Cups12_.jpg",
    "./tarotcard_img/小阿卡那(56張)/聖杯/Cups13_.jpg",
    "./tarotcard_img/小阿卡那(56張)/聖杯/Cups14_.jpg",
    "./tarotcard_img/小阿卡那(56張)/錢幣/Pents01_.jpg",
    "./tarotcard_img/小阿卡那(56張)/錢幣/Pents02_.jpg",
    "./tarotcard_img/小阿卡那(56張)/錢幣/Pents03_.jpg",
    "./tarotcard_img/小阿卡那(56張)/錢幣/Pents04_.jpg",
    "./tarotcard_img/小阿卡那(56張)/錢幣/Pents05_.jpg",
    "./tarotcard_img/小阿卡那(56張)/錢幣/Pents06_.jpg",
    "./tarotcard_img/小阿卡那(56張)/錢幣/Pents07_.jpg",
    "./tarotcard_img/小阿卡那(56張)/錢幣/Pents08_.jpg",
    "./tarotcard_img/小阿卡那(56張)/錢幣/Pents09_.jpg",
    "./tarotcard_img/小阿卡那(56張)/錢幣/Pents10_.jpg",
    "./tarotcard_img/小阿卡那(56張)/錢幣/Pents11_.jpg",
    "./tarotcard_img/小阿卡那(56張)/錢幣/Pents12_.jpg",
    "./tarotcard_img/小阿卡那(56張)/錢幣/Pents13_.jpg",
    "./tarotcard_img/小阿卡那(56張)/錢幣/Pents14_.jpg",
    "./tarotcard_img/小阿卡那(56張)/寶劍/Swords01_.jpg",
    "./tarotcard_img/小阿卡那(56張)/寶劍/Swords02_.jpg",
    "./tarotcard_img/小阿卡那(56張)/寶劍/Swords03_.jpg",
    "./tarotcard_img/小阿卡那(56張)/寶劍/Swords04_.jpg",
    "./tarotcard_img/小阿卡那(56張)/寶劍/Swords05_.jpg",
    "./tarotcard_img/小阿卡那(56張)/寶劍/Swords06_.jpg",
    "./tarotcard_img/小阿卡那(56張)/寶劍/Swords07_.jpg",
    "./tarotcard_img/小阿卡那(56張)/寶劍/Swords08_.jpg",
    "./tarotcard_img/小阿卡那(56張)/寶劍/Swords09_.jpg",
    "./tarotcard_img/小阿卡那(56張)/寶劍/Swords10_.jpg",
    "./tarotcard_img/小阿卡那(56張)/寶劍/Swords11_.jpg",
    "./tarotcard_img/小阿卡那(56張)/寶劍/Swords12_.jpg",
    "./tarotcard_img/小阿卡那(56張)/寶劍/Swords13_.jpg",
    "./tarotcard_img/小阿卡那(56張)/寶劍/Swords14_.jpg",
    "./tarotcard_img/小阿卡那(56張)/權杖/Wands01_.jpg",
    "./tarotcard_img/小阿卡那(56張)/權杖/Wands02_.jpg",
    "./tarotcard_img/小阿卡那(56張)/權杖/Wands03_.jpg",
    "./tarotcard_img/小阿卡那(56張)/權杖/Wands04_.jpg",
    "./tarotcard_img/小阿卡那(56張)/權杖/Wands05_.jpg",
    "./tarotcard_img/小阿卡那(56張)/權杖/Wands06_.jpg",
    "./tarotcard_img/小阿卡那(56張)/權杖/Wands07_.jpg",
    "./tarotcard_img/小阿卡那(56張)/權杖/Wands08_.jpg",
    "./tarotcard_img/小阿卡那(56張)/權杖/Wands09_.jpg",
    "./tarotcard_img/小阿卡那(56張)/權杖/Wands10_.jpg",
    "./tarotcard_img/小阿卡那(56張)/權杖/Wands11_.jpg",
    "./tarotcard_img/小阿卡那(56張)/權杖/Wands12_.jpg",
    "./tarotcard_img/小阿卡那(56張)/權杖/Wands13_.jpg",
    "./tarotcard_img/小阿卡那(56張)/權杖/Wands14_.jpg",

    "./tarotcard_img/大阿卡那(22張)反/0愚者.jpg",
    "./tarotcard_img/大阿卡那(22張)反/1魔術師.jpg",
    "./tarotcard_img/大阿卡那(22張)反/2女祭師.jpg",
    "./tarotcard_img/大阿卡那(22張)反/3皇后.jpg",
    "./tarotcard_img/大阿卡那(22張)反/4皇帝.jpg",
    "./tarotcard_img/大阿卡那(22張)反/5教皇.jpg",
    "./tarotcard_img/大阿卡那(22張)反/6戀人.jpg",
    "./tarotcard_img/大阿卡那(22張)反/7戰車.jpg",
    "./tarotcard_img/大阿卡那(22張)反/8力量.jpg",
    "./tarotcard_img/大阿卡那(22張)反/9隱者.jpg",
    "./tarotcard_img/大阿卡那(22張)反/10命運之輪.jpg",
    "./tarotcard_img/大阿卡那(22張)反/11正義.jpg",
    "./tarotcard_img/大阿卡那(22張)反/12倒吊人.jpg",
    "./tarotcard_img/大阿卡那(22張)反/13死神.jpg",
    "./tarotcard_img/大阿卡那(22張)反/14節制.jpg",
    "./tarotcard_img/大阿卡那(22張)反/15惡魔.jpg",
    "./tarotcard_img/大阿卡那(22張)反/16高塔.jpg",
    "./tarotcard_img/大阿卡那(22張)反/17星星.jpg",
    "./tarotcard_img/大阿卡那(22張)反/18月亮.jpg",
    "./tarotcard_img/大阿卡那(22張)反/19太陽.jpg",
    "./tarotcard_img/大阿卡那(22張)反/20審判.jpg",
    "./tarotcard_img/大阿卡那(22張)反/21世界.jpg",
    "./tarotcard_img/小阿卡那(56張)反/聖杯/Cups01.jpg",
    "./tarotcard_img/小阿卡那(56張)反/聖杯/Cups02.jpg",
    "./tarotcard_img/小阿卡那(56張)反/聖杯/Cups03.jpg",
    "./tarotcard_img/小阿卡那(56張)反/聖杯/Cups04.jpg",
    "./tarotcard_img/小阿卡那(56張)反/聖杯/Cups05.jpg",
    "./tarotcard_img/小阿卡那(56張)反/聖杯/Cups06.jpg",
    "./tarotcard_img/小阿卡那(56張)反/聖杯/Cups07.jpg",
    "./tarotcard_img/小阿卡那(56張)反/聖杯/Cups08.jpg",
    "./tarotcard_img/小阿卡那(56張)反/聖杯/Cups09.jpg",
    "./tarotcard_img/小阿卡那(56張)反/聖杯/Cups10.jpg",
    "./tarotcard_img/小阿卡那(56張)反/聖杯/Cups11.jpg",
    "./tarotcard_img/小阿卡那(56張)反/聖杯/Cups12.jpg",
    "./tarotcard_img/小阿卡那(56張)反/聖杯/Cups13.jpg",
    "./tarotcard_img/小阿卡那(56張)反/聖杯/Cups14.jpg",
    "./tarotcard_img/小阿卡那(56張)反/錢幣/Pents01.jpg",
    "./tarotcard_img/小阿卡那(56張)反/錢幣/Pents02.jpg",
    "./tarotcard_img/小阿卡那(56張)反/錢幣/Pents03.jpg",
    "./tarotcard_img/小阿卡那(56張)反/錢幣/Pents04.jpg",
    "./tarotcard_img/小阿卡那(56張)反/錢幣/Pents05.jpg",
    "./tarotcard_img/小阿卡那(56張)反/錢幣/Pents06.jpg",
    "./tarotcard_img/小阿卡那(56張)反/錢幣/Pents07.jpg",
    "./tarotcard_img/小阿卡那(56張)反/錢幣/Pents08.jpg",
    "./tarotcard_img/小阿卡那(56張)反/錢幣/Pents09.jpg",
    "./tarotcard_img/小阿卡那(56張)反/錢幣/Pents10.jpg",
    "./tarotcard_img/小阿卡那(56張)反/錢幣/Pents11.jpg",
    "./tarotcard_img/小阿卡那(56張)反/錢幣/Pents12.jpg",
    "./tarotcard_img/小阿卡那(56張)反/錢幣/Pents13.jpg",
    "./tarotcard_img/小阿卡那(56張)反/錢幣/Pents14.jpg",
    "./tarotcard_img/小阿卡那(56張)反/寶劍/Swords01.jpg",
    "./tarotcard_img/小阿卡那(56張)反/寶劍/Swords02.jpg",
    "./tarotcard_img/小阿卡那(56張)反/寶劍/Swords03.jpg",
    "./tarotcard_img/小阿卡那(56張)反/寶劍/Swords04.jpg",
    "./tarotcard_img/小阿卡那(56張)反/寶劍/Swords05.jpg",
    "./tarotcard_img/小阿卡那(56張)反/寶劍/Swords06.jpg",
    "./tarotcard_img/小阿卡那(56張)反/寶劍/Swords07.jpg",
    "./tarotcard_img/小阿卡那(56張)反/寶劍/Swords08.jpg",
    "./tarotcard_img/小阿卡那(56張)反/寶劍/Swords09.jpg",
    "./tarotcard_img/小阿卡那(56張)反/寶劍/Swords10.jpg",
    "./tarotcard_img/小阿卡那(56張)反/寶劍/Swords11.jpg",
    "./tarotcard_img/小阿卡那(56張)反/寶劍/Swords12.jpg",
    "./tarotcard_img/小阿卡那(56張)反/寶劍/Swords13.jpg",
    "./tarotcard_img/小阿卡那(56張)反/寶劍/Swords14.jpg",
    "./tarotcard_img/小阿卡那(56張)反/權杖/Wands01.jpg",
    "./tarotcard_img/小阿卡那(56張)反/權杖/Wands02.jpg",
    "./tarotcard_img/小阿卡那(56張)反/權杖/Wands03.jpg",
    "./tarotcard_img/小阿卡那(56張)反/權杖/Wands04.jpg",
    "./tarotcard_img/小阿卡那(56張)反/權杖/Wands05.jpg",
    "./tarotcard_img/小阿卡那(56張)反/權杖/Wands06.jpg",
    "./tarotcard_img/小阿卡那(56張)反/權杖/Wands07.jpg",
    "./tarotcard_img/小阿卡那(56張)反/權杖/Wands08.jpg",
    "./tarotcard_img/小阿卡那(56張)反/權杖/Wands09.jpg",
    "./tarotcard_img/小阿卡那(56張)反/權杖/Wands10.jpg",
    "./tarotcard_img/小阿卡那(56張)反/權杖/Wands11.jpg",
    "./tarotcard_img/小阿卡那(56張)反/權杖/Wands12.jpg",
    "./tarotcard_img/小阿卡那(56張)反/權杖/Wands13.jpg",
    "./tarotcard_img/小阿卡那(56張)反/權杖/Wands14.jpg",
];

// 抽取圖片的函數
function drawImages() {
    // 取得使用者選擇的抽取數量
    const numImages = parseInt(document.getElementById('numImages').value);

    // 檢查輸入的數量是否合法
    if (numImages < 1 || numImages > 5) {
        alert("請選擇 1 到 5 張圖片");
        return;
    }

    // 隨機抽取圖片
    let selectedImages = [];
    while (selectedImages.length < numImages) {
        const randomIndex = Math.floor(Math.random() * images.length);
        if (!selectedImages.includes(randomIndex)) {
            selectedImages.push(randomIndex);
        }
    }

    // 顯示抽取的圖片
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = ''; // 清空上次的結果

    selectedImages.forEach((index) => {
        const img = document.createElement('img');
        img.src = images[index];
        img.classList.add('image'); // 加入動畫的類別

        // 修改 2: 控制圖片大小
        img.style.maxWidth = '150px'; // 設定最大寬度
        img.style.height = 'auto';

        // 創建一個包裹圖片的容器，用來控制動畫
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('image-container');
        imgContainer.appendChild(img);

        resultContainer.appendChild(imgContainer);
    });
    // 獲取 result0 並將其顯示
    const result0 = document.getElementById('result0');
    result0.style.display = 'inline-block';

    // 獲取 AI_button 並將其顯示
    const AI_button = document.getElementById('AI_button');
    AI_button.style.display = 'block';
}