    // Using JavaScript to perform quantity and amount calculations

    document.addEventListener("DOMContentLoaded", function () {

    // 取得所有帶有 class = "buySelect" 的select元素
    const buySelects = document.querySelectorAll(".buySelect");
    let totalPrice = 0; // 將 totalPrice初始設為0

    // 使用forEach遍歷每個class為buySelects的select元素
    buySelects.forEach(function (select) {
      // 將select計算結果存到calculateTotal裡面, 以利後面運算
        calculateTotal(select);

        // 為select 元素增加事件監聽, 用於監聽 "change" 事件
        select.addEventListener("change", function () {
            // 當select值發生改變時, 會觸發下面兩個函數
            calculateTotal(this);
            updateTotalPrice();
        });
    });

    // 更新updateTotalPrice的金額
        updateTotalPrice();

    // 計算總價的函數
    function calculateTotal(select) {
        // 將選取所選的數量的值, 轉換為數字, 打包進quantity常數中
        const quantity = parseInt(select.value);

        // 如果數量為 0 或 NaN，總價設置為 0
        if (quantity === 0 || isNaN(quantity)) {
        select.parentNode.nextElementSibling.nextElementSibling.textContent = 0;
        return; // 終止函數，不再執行後面的計算
        }

        // 從前一個父母元素中取得商品價格
        const price = parseInt(select.parentNode.nextElementSibling.textContent);

        // 獲取先前計算的該商品的總價
        const prevTotal = parseInt(
        select.parentNode.nextElementSibling.nextElementSibling.textContent
        );

        // 設定總金額 等於 數量*金額
        let total = quantity * price;

        // 若前面計算總價不為NaN，就先減去前面運算的總價
        if (!isNaN(prevTotal)) {
        totalPrice -= prevTotal;
        }

        // 更新對應的 'total' 單元格
        select.parentNode.nextElementSibling.nextElementSibling.textContent = total;

        // 將商品的總價加到總金額中
        totalPrice += total;
    }

    function updateTotalPrice() {
        // 更新顯示總金額
        document.getElementById("totalPrice").textContent = totalPrice; 
    }
    });
