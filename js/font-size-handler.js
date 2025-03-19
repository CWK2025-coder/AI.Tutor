/**
 * 字體大小處理器
 * 用於處理應用程序中的字體大小變更
 */

// 初始化字體大小
function initFontSize() {
  // 從本地存儲獲取字體大小設置
  const savedFontSize = localStorage.getItem('appFontSize') || 'medium';
  applyFontSize(savedFontSize);
}

// 應用字體大小到當前頁面
function applyFontSize(size) {
  // 移除所有字體大小類
  document.body.classList.remove('font-size-small', 'font-size-medium', 'font-size-large', 'font-size-xlarge');
  
  // 添加選中的字體大小類
  document.body.classList.add(`font-size-${size}`);
  
  // 保存到本地存儲
  localStorage.setItem('appFontSize', size);
}

// 在頁面加載完成後初始化
document.addEventListener('DOMContentLoaded', function() {
  // 初始化字體大小
  initFontSize();
  
  // 監聽字體大小變更事件
  window.addEventListener('fontSizeChange', function(e) {
    const newSize = e.detail.size;
    applyFontSize(newSize);
  });
  
  // 監聽存儲變更事件
  window.addEventListener('storage', function(e) {
    if (e.key === 'appFontSize') {
      const newSize = e.newValue || 'medium';
      applyFontSize(newSize);
    }
  });
});

// 將函數暴露給全局作用域
window.applyFontSize = applyFontSize;
window.initFontSize = initFontSize; 