import style from './index.less';
import { useState } from 'react';

export default () => {
  const [focusBar, setFocusBar] = useState(false);

  function touchBar() {
    setFocusBar(true);
  }

  function leaveBar() {
    setFocusBar(false);
  }

  return (
    <div
      className={[style.search_bar_wrap, focusBar ? style.focus_bar : ''].join(
        ' ',
      )}
    >
      <i className={`${style.icon} iconfont icon-user`}></i>
      <input
        onFocus={touchBar}
        onBlur={leaveBar}
        type="text"
        placeholder="search..."
      />
    </div>
  );
};
