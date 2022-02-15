import css from './index.less';
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
      className={[css.search_bar_wrap, focusBar ? css.focus_bar : ''].join(
        ' ',
      )}
    >
      <i className={`${css.icon} iconfont icon-search`}></i>
      <input
        onFocus={touchBar}
        onBlur={leaveBar}
        type="text"
        placeholder="search..."
      />
    </div>
  );
};
