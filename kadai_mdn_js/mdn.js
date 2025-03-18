function displayCurrentDate() {
    // 現在の日付と時刻を取得
    const now = new Date();
  
    // 年、月、日を個別に取得
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // 月は0から開始するため、1を加算
    const day = now.getDate();
  
    // フォーマットされた日付を作成
    const formattedDate = `${year}年${month.toString().padStart(2, '0')}月${day.toString().padStart(2, '0')}日
    `;
  
    // コンソールに表示
    console.log(formattedDate);
  }
  
  // 関数を呼び出す
  displayCurrentDate();