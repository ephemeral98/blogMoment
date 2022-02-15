/**
 * 初始化 rem布局
 */
function initRem(): void {
  ((doc, win) => {
    const docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize';
    const recalc = () => {
      const clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      if (clientWidth >= 750) {
        docEl.style.fontSize = clientWidth / 1920 + 'px';
      } else {
        docEl.style.fontSize = clientWidth / 750 + 'px';
      }
    };
    recalc();
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
  })(document, window);
}

export default initRem;
