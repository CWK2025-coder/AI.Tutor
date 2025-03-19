// 通用JavaScript函數

// 應用字體大小設置
function applyGlobalFontSize() {
  // 從本地存儲獲取字體大小設置
  const savedFontSize = localStorage.getItem('appFontSize') || 'medium';
  
  // 移除所有字體大小類
  document.body.classList.remove('font-size-small', 'font-size-medium', 'font-size-large', 'font-size-xlarge');
  
  // 添加選中的字體大小類
  document.body.classList.add(`font-size-${savedFontSize}`);
  
  console.log('Applied global font size:', savedFontSize);
}

// 應用語言設置
function applyGlobalLanguage() {
  // 從本地存儲獲取語言設置
  const savedLang = localStorage.getItem('appLang') || 'zh-TW';
  
  // 設置HTML語言屬性
  document.documentElement.setAttribute('lang', savedLang);
  
  console.log('Applied global language:', savedLang);
}

// 更新圖標字體
function updateIconFonts() {
  const lang = document.documentElement.getAttribute('lang');
  const icons = document.querySelectorAll('i.fas, i.far, i.fab');
  
  // 根據語言類型設置適當的字體
  if (lang === 'zh-CN') {
    icons.forEach(icon => {
      icon.style.fontFamily = '"Font Awesome 6 Free", "微软雅黑", "Microsoft YaHei", sans-serif';
    });
  } else if (lang === 'zh-TW') {
    icons.forEach(icon => {
      icon.style.fontFamily = '"Font Awesome 6 Free", "微軟正黑體", "Microsoft JhengHei", sans-serif';
    });
  } else if (lang === 'en') {
    icons.forEach(icon => {
      icon.style.fontFamily = '"Font Awesome 6 Free", "Arial", sans-serif';
    });
  }
}

// 初始化頁面設置
function initPageSettings() {
  // 應用全局字體大小
  applyGlobalFontSize();
  
  // 應用全局語言
  applyGlobalLanguage();
  
  // 更新圖標字體
  updateIconFonts();
  
  // 監聽存儲變化
  window.addEventListener('storage', function(e) {
    if (e.key === 'appFontSize') {
      applyGlobalFontSize();
    }
    if (e.key === 'appLang') {
      applyGlobalLanguage();
      updateIconFonts();
    }
  });
}

// 當DOM加載完成時初始化頁面設置
document.addEventListener('DOMContentLoaded', initPageSettings); 