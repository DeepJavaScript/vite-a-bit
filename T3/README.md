# vite-a-bit
「vite 一下」聚會記錄

實作步驟：
1. bootstrap、fontawesome cdn 改為 npm 引入
2. MiniCssExtractPlugin 獨立 css 檔案
3. devServer 設定{
    // serve 設定 從 ./dist 提供服務
        contentBase: './dist',
        //指定打開瀏覽器，open:true 會打開 src 資料夾
        open: 'Google Chrome'
    },
4. module 使用 exclude 來處理 exclude 之外的檔案
5. 使用 purgeCssplugin 清除無使用 css，但發現會使動畫效果消失？

