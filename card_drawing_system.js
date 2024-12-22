// 你的圖片的路徑
const images = [
    { src: "./tarotcard_img/大阿卡那(22張)/0愚者_.jpg", caption: "0愚者" },
    { src: "./tarotcard_img/大阿卡那(22張)/1魔術師_.jpg", caption: "1魔術師" },
    { src: "./tarotcard_img/大阿卡那(22張)/2女祭師_.jpg", caption: "2女祭師" },
    { src: "./tarotcard_img/大阿卡那(22張)/3皇后_.jpg", caption: "3皇后" },
    { src: "./tarotcard_img/大阿卡那(22張)/4皇帝_.jpg", caption: "4皇帝" },
    { src: "./tarotcard_img/大阿卡那(22張)/5教皇_.jpg", caption: "5教皇" },
    { src: "./tarotcard_img/大阿卡那(22張)/6戀人_.jpg", caption: "6戀人" },
    { src: "./tarotcard_img/大阿卡那(22張)/7戰車_.jpg", caption: "7戰車" },
    { src: "./tarotcard_img/大阿卡那(22張)/8力量_.jpg", caption: "8力量" },
    { src: "./tarotcard_img/大阿卡那(22張)/9隱者_.jpg", caption: "9隱者" },
    { src: "./tarotcard_img/大阿卡那(22張)/10命運之輪_.jpg", caption: "10命運之輪" },
    { src: "./tarotcard_img/大阿卡那(22張)/11正義_.jpg", caption: "11正義" },
    { src: "./tarotcard_img/大阿卡那(22張)/12倒吊人_.jpg", caption: "12倒吊人" },
    { src: "./tarotcard_img/大阿卡那(22張)/13死神_.jpg", caption: "13死神" },
    { src: "./tarotcard_img/大阿卡那(22張)/14節制_.jpg", caption: "14節制" },
    { src: "./tarotcard_img/大阿卡那(22張)/15惡魔_.jpg", caption: "15惡魔" },
    { src: "./tarotcard_img/大阿卡那(22張)/16高塔_.jpg", caption: "16高塔" },
    { src: "./tarotcard_img/大阿卡那(22張)/17星星_.jpg", caption: "17星星" },
    { src: "./tarotcard_img/大阿卡那(22張)/18月亮_.jpg", caption: "18月亮" },
    { src: "./tarotcard_img/大阿卡那(22張)/19太陽_.jpg", caption: "19太陽" },
    { src: "./tarotcard_img/大阿卡那(22張)/20審判_.jpg", caption: "20審判" },
    { src: "./tarotcard_img/大阿卡那(22張)/21世界_.jpg", caption: "21世界" },
    { src: "./tarotcard_img/小阿卡那(56張)/聖杯/Cups01_.jpg", caption: "聖杯一 Cups01" },
    { src: "./tarotcard_img/小阿卡那(56張)/聖杯/Cups02_.jpg", caption: "聖杯二 Cups02" },
    { src: "./tarotcard_img/小阿卡那(56張)/聖杯/Cups03_.jpg", caption: "聖杯三 Cups03" },
    { src: "./tarotcard_img/小阿卡那(56張)/聖杯/Cups04_.jpg", caption: "聖杯四 Cups04" },
    { src: "./tarotcard_img/小阿卡那(56張)/聖杯/Cups05_.jpg", caption: "聖杯五 Cups05" },
    { src: "./tarotcard_img/小阿卡那(56張)/聖杯/Cups06_.jpg", caption: "聖杯六 Cups06" },
    { src: "./tarotcard_img/小阿卡那(56張)/聖杯/Cups07_.jpg", caption: "聖杯七 Cups07" },
    { src: "./tarotcard_img/小阿卡那(56張)/聖杯/Cups08_.jpg", caption: "聖杯八 Cups08" },
    { src: "./tarotcard_img/小阿卡那(56張)/聖杯/Cups09_.jpg", caption: "聖杯九 Cups09" },
    { src: "./tarotcard_img/小阿卡那(56張)/聖杯/Cups10_.jpg", caption: "聖杯十 Cups10" },
    { src: "./tarotcard_img/小阿卡那(56張)/聖杯/Cups11_.jpg", caption: "聖杯侍從 Page of Cups" },
    { src: "./tarotcard_img/小阿卡那(56張)/聖杯/Cups12_.jpg", caption: "聖杯騎士 Knight of Cups" },
    { src: "./tarotcard_img/小阿卡那(56張)/聖杯/Cups13_.jpg", caption: "聖杯皇后 Queen of Cups" },
    { src: "./tarotcard_img/小阿卡那(56張)/聖杯/Cups14_.jpg", caption: "聖杯國王 King of Cups" },
    { src: "./tarotcard_img/小阿卡那(56張)/錢幣/Pents01_.jpg", caption: "錢幣一 Pents01" },
    { src: "./tarotcard_img/小阿卡那(56張)/錢幣/Pents02_.jpg", caption: "錢幣二 Pents02" },
    { src: "./tarotcard_img/小阿卡那(56張)/錢幣/Pents03_.jpg", caption: "錢幣三 Pents03" },
    { src: "./tarotcard_img/小阿卡那(56張)/錢幣/Pents04_.jpg", caption: "錢幣四 Pents04" },
    { src: "./tarotcard_img/小阿卡那(56張)/錢幣/Pents05_.jpg", caption: "錢幣五 Pents05" },
    { src: "./tarotcard_img/小阿卡那(56張)/錢幣/Pents06_.jpg", caption: "錢幣六 Pents06" },
    { src: "./tarotcard_img/小阿卡那(56張)/錢幣/Pents07_.jpg", caption: "錢幣七 Pents07" },
    { src: "./tarotcard_img/小阿卡那(56張)/錢幣/Pents08_.jpg", caption: "錢幣八 Pents08" },
    { src: "./tarotcard_img/小阿卡那(56張)/錢幣/Pents09_.jpg", caption: "錢幣九 Pents09" },
    { src: "./tarotcard_img/小阿卡那(56張)/錢幣/Pents10_.jpg", caption: "錢幣十 Pents10" },
    { src: "./tarotcard_img/小阿卡那(56張)/錢幣/Pents11_.jpg", caption: "錢幣侍從  Page of Pents" },
    { src: "./tarotcard_img/小阿卡那(56張)/錢幣/Pents12_.jpg", caption: "錢幣騎士 Knight of Pents" },
    { src: "./tarotcard_img/小阿卡那(56張)/錢幣/Pents13_.jpg", caption: "錢幣皇后 Queen of Pents" },
    { src: "./tarotcard_img/小阿卡那(56張)/錢幣/Pents14_.jpg", caption: "錢幣國王 King of Pents" },
    { src: "./tarotcard_img/小阿卡那(56張)/寶劍/Swords01_.jpg", caption: "寶劍一 Swords01" },
    { src: "./tarotcard_img/小阿卡那(56張)/寶劍/Swords02_.jpg", caption: "寶劍二 Swords02" },
    { src: "./tarotcard_img/小阿卡那(56張)/寶劍/Swords03_.jpg", caption: "寶劍三 Swords03" },
    { src: "./tarotcard_img/小阿卡那(56張)/寶劍/Swords04_.jpg", caption: "寶劍四 Swords04" },
    { src: "./tarotcard_img/小阿卡那(56張)/寶劍/Swords05_.jpg", caption: "寶劍五 Swords05" },
    { src: "./tarotcard_img/小阿卡那(56張)/寶劍/Swords06_.jpg", caption: "寶劍六 Swords06" },
    { src: "./tarotcard_img/小阿卡那(56張)/寶劍/Swords07_.jpg", caption: "寶劍七 Swords07" },
    { src: "./tarotcard_img/小阿卡那(56張)/寶劍/Swords08_.jpg", caption: "寶劍八 Swords08" },
    { src: "./tarotcard_img/小阿卡那(56張)/寶劍/Swords09_.jpg", caption: "寶劍九 Swords09" },
    { src: "./tarotcard_img/小阿卡那(56張)/寶劍/Swords10_.jpg", caption: "寶劍十 Swords10" },
    { src: "./tarotcard_img/小阿卡那(56張)/寶劍/Swords11_.jpg", caption: "寶劍侍從 Page of Swords" },
    { src: "./tarotcard_img/小阿卡那(56張)/寶劍/Swords12_.jpg", caption: "寶劍騎士 Knight of Swords" },
    { src: "./tarotcard_img/小阿卡那(56張)/寶劍/Swords13_.jpg", caption: "寶劍皇后 Queen of Swords" },
    { src: "./tarotcard_img/小阿卡那(56張)/寶劍/Swords14_.jpg", caption: "寶劍國王 King of Swords" },
    { src: "./tarotcard_img/小阿卡那(56張)/權杖/Wands01_.jpg", caption: "權杖ㄧ Wands01" },
    { src: "./tarotcard_img/小阿卡那(56張)/權杖/Wands02_.jpg", caption: "權杖二 Wands02" },
    { src: "./tarotcard_img/小阿卡那(56張)/權杖/Wands03_.jpg", caption: "權杖三 Wands03" },
    { src: "./tarotcard_img/小阿卡那(56張)/權杖/Wands04_.jpg", caption: "權杖四 Wands04" },
    { src: "./tarotcard_img/小阿卡那(56張)/權杖/Wands05_.jpg", caption: "權杖五 Wands05" },
    { src: "./tarotcard_img/小阿卡那(56張)/權杖/Wands06_.jpg", caption: "權杖六 Wands06" },
    { src: "./tarotcard_img/小阿卡那(56張)/權杖/Wands07_.jpg", caption: "權杖七 Wands07" },
    { src: "./tarotcard_img/小阿卡那(56張)/權杖/Wands08_.jpg", caption: "權杖八 Wands08" },
    { src: "./tarotcard_img/小阿卡那(56張)/權杖/Wands09_.jpg", caption: "權杖九 Wands09" },
    { src: "./tarotcard_img/小阿卡那(56張)/權杖/Wands10_.jpg", caption: "權杖十 Wands10" },
    { src: "./tarotcard_img/小阿卡那(56張)/權杖/Wands11_.jpg", caption: "權杖侍從 Page of Wands" },
    { src: "./tarotcard_img/小阿卡那(56張)/權杖/Wands12_.jpg", caption: "權杖騎士 Knight of Wands" },
    { src: "./tarotcard_img/小阿卡那(56張)/權杖/Wands13_.jpg", caption: "權杖皇后 Queen of Wands" },
    { src: "./tarotcard_img/小阿卡那(56張)/權杖/Wands14_.jpg", caption: "權杖國王 King of Wands" },
        // 逆位牌
    { src: "./tarotcard_img/大阿卡那(22張)反/0愚者.jpg", caption: "0愚者(逆位)" },
    { src: "./tarotcard_img/大阿卡那(22張)反/1魔術師.jpg", caption: "1魔術師(逆位)" },
    { src: "./tarotcard_img/大阿卡那(22張)反/2女祭師.jpg", caption: "2女祭師(逆位)" },
    { src: "./tarotcard_img/大阿卡那(22張)反/3皇后.jpg", caption: "3皇后(逆位)" },
    { src: "./tarotcard_img/大阿卡那(22張)反/4皇帝.jpg", caption: "4皇帝(逆位)" },
    { src: "./tarotcard_img/大阿卡那(22張)反/5教皇.jpg", caption: "5教皇(逆位)" },
    { src: "./tarotcard_img/大阿卡那(22張)反/6戀人.jpg", caption: "6戀人(逆位)" },
    { src: "./tarotcard_img/大阿卡那(22張)反/7戰車.jpg", caption: "7戰車(逆位)" },
    { src: "./tarotcard_img/大阿卡那(22張)反/8力量.jpg", caption: "8力量(逆位)" },
    { src: "./tarotcard_img/大阿卡那(22張)反/9隱者.jpg", caption: "9隱者(逆位)" },
    { src: "./tarotcard_img/大阿卡那(22張)反/10命運之輪.jpg", caption: "10命運之輪(逆位)" },
    { src: "./tarotcard_img/大阿卡那(22張)反/11正義.jpg", caption: "11正義(逆位)" },
    { src: "./tarotcard_img/大阿卡那(22張)反/12倒吊人.jpg", caption: "12倒吊人(逆位)" },
    { src: "./tarotcard_img/大阿卡那(22張)反/13死神.jpg", caption: "13死神(逆位)" },
    { src: "./tarotcard_img/大阿卡那(22張)反/14節制.jpg", caption: "14節制(逆位)" },
    { src: "./tarotcard_img/大阿卡那(22張)反/15惡魔.jpg", caption: "15惡魔(逆位)" },
    { src: "./tarotcard_img/大阿卡那(22張)反/16高塔.jpg", caption: "16高塔(逆位)" },
    { src: "./tarotcard_img/大阿卡那(22張)反/17星星.jpg", caption: "17星星(逆位)" },
    { src: "./tarotcard_img/大阿卡那(22張)反/18月亮.jpg", caption: "18月亮(逆位)" },
    { src: "./tarotcard_img/大阿卡那(22張)反/19太陽.jpg", caption: "19太陽(逆位)" },
    { src: "./tarotcard_img/大阿卡那(22張)反/20審判.jpg", caption: "20審判(逆位)" },
    { src: "./tarotcard_img/大阿卡那(22張)反/21世界.jpg", caption: "21世界(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/聖杯/Cups01.jpg", caption: "聖杯一 Cups01(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/聖杯/Cups02.jpg", caption: "聖杯二 Cups02(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/聖杯/Cups03.jpg", caption: "聖杯三 Cups03(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/聖杯/Cups04.jpg", caption: "聖杯四 Cups04(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/聖杯/Cups05.jpg", caption: "聖杯五 Cups05(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/聖杯/Cups06.jpg", caption: "聖杯六 Cups06(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/聖杯/Cups07.jpg", caption: "聖杯七 Cups07(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/聖杯/Cups08.jpg", caption: "聖杯八 Cups08(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/聖杯/Cups09.jpg", caption: "聖杯九 Cups09(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/聖杯/Cups10.jpg", caption: "聖杯十 Cups010(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/聖杯/Cups11.jpg", caption: "聖杯侍從 Page of Cups(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/聖杯/Cups12.jpg", caption: "聖杯騎士 Knight of Cups(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/聖杯/Cups13.jpg", caption: "聖杯皇后 Queen of Cups(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/聖杯/Cups14.jpg", caption: "聖杯國王 King of Cups(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/錢幣/Pents01.jpg", caption: "錢幣一 Pents01(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/錢幣/Pents02.jpg", caption: "錢幣二 Pents02(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/錢幣/Pents03.jpg", caption: "錢幣三 Pents03(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/錢幣/Pents04.jpg", caption: "錢幣四 Pents04(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/錢幣/Pents05.jpg", caption: "錢幣五 Pents05(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/錢幣/Pents06.jpg", caption: "錢幣六 Pent06s(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/錢幣/Pents07.jpg", caption: "錢幣七 Pents07(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/錢幣/Pents08.jpg", caption: "錢幣八 Pents08(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/錢幣/Pents09.jpg", caption: "錢幣九 Pents09(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/錢幣/Pents10.jpg", caption: "錢幣十 Pents10(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/錢幣/Pents11.jpg", caption: "錢幣侍從 Page of Pents(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/錢幣/Pents12.jpg", caption: "錢幣騎士 Knight of Pents(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/錢幣/Pents13.jpg", caption: "錢幣皇后 Queen of Pents(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/錢幣/Pents14.jpg", caption: "錢幣國王 King of Pents(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/寶劍/Swords01.jpg", caption: "寶劍一 Swords01(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/寶劍/Swords02.jpg", caption: "寶劍二 Swords02(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/寶劍/Swords03.jpg", caption: "寶劍三 Swords03(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/寶劍/Swords04.jpg", caption: "寶劍四 Swords04(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/寶劍/Swords05.jpg", caption: "寶劍五 Swords05(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/寶劍/Swords06.jpg", caption: "寶劍六 Swords06(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/寶劍/Swords07.jpg", caption: "寶劍七 Swords07(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/寶劍/Swords08.jpg", caption: "寶劍八 Swords08(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/寶劍/Swords09.jpg", caption: "寶劍九 Swords09(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/寶劍/Swords10.jpg", caption: "寶劍十 Swords10(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/寶劍/Swords11.jpg", caption: "寶劍侍從 Page of Swords(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/寶劍/Swords12.jpg", caption: "寶劍騎士  Knight of Swords(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/寶劍/Swords13.jpg", caption: "寶劍皇后 Queen of Swords(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/寶劍/Swords14.jpg", caption: "寶劍國王 King of Swords(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/權杖/Wands01.jpg", caption: "權杖一 Wands01(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/權杖/Wands02.jpg", caption: "權杖二 Wands02(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/權杖/Wands03.jpg", caption: "權杖三 Wands03(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/權杖/Wands04.jpg", caption: "權杖四 Wands04(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/權杖/Wands05.jpg", caption: "權杖五 Wands05(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/權杖/Wands06.jpg", caption: "權杖六 Wands06(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/權杖/Wands07.jpg", caption: "權杖七 Wands07(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/權杖/Wands08.jpg", caption: "權杖八 Wands08(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/權杖/Wands09.jpg", caption: "權杖九 Wands09(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/權杖/Wands10.jpg", caption: "權杖十 Wands10(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/權杖/Wands11.jpg", caption: "權杖侍從 Page of Wands(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/權杖/Wands12.jpg", caption: "權杖騎士 Knight of Wands(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/權杖/Wands13.jpg", caption: "權杖皇后 Queen of Wands(逆位)" },
    { src: "./tarotcard_img/小阿卡那(56張)反/權杖/Wands14.jpg", caption: "權杖國王 King of Wands(逆位)" },
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
        const imgData = images[index];

        // 創建圖片
        const img = document.createElement('img');  // 創建一個 img 包住 img
        img.src = imgData.src;    // img 的src 是你輸入的陣列
        img.classList.add('image'); // 加入圖片的類別 ==> <img src=" " class="image">  

        // 修改 2: 控制圖片大小
        img.style.maxWidth = '100%'; // 設定最大寬度
        img.style.height = 'auto';

        // 創建一個包裹圖片的容器，用來控制動畫
        const imgContainer = document.createElement('div');   // 創建一個 div 包住 img(上面創的img)
        imgContainer.classList.add('image-container');        // 他的類別取作  image-container  ==>  <div class="image-container">

        // 創建解釋文字
        const caption = document.createElement('div');
        caption.classList.add('caption');
        caption.textContent = imgData.caption;

        imgContainer.appendChild(img);                 // 圖片
        imgContainer.appendChild(caption);             // 解釋
        resultContainer.appendChild(imgContainer);     // 圖片容器
    });

    




    // 獲取 result0 並將其顯示
    const result0 = document.getElementById('result0');
    result0.style.display = 'inline-block';

    // 獲取 AI_button 並將其顯示
    const AI_button = document.getElementById('AI_button');
    AI_button.style.display = 'block';
}