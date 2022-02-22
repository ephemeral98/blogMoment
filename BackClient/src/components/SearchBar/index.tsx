// import css from './index.module.less';
import { useState } from 'react';

export default function SearchBar() {
  const [focusBar, setFocusBar] = useState(false);

  function touchBar() {
    setFocusBar(true);
  }

  function leaveBar() {
    setFocusBar(false);
  }

  return (
    <div>
      <i className={`iconfont icon-search`}>{focusBar}</i>
      <input onFocus={touchBar} onBlur={leaveBar} type="text" placeholder="search..." />
    </div>
  );
}
