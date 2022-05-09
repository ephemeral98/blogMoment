import ReactDOM from 'react-dom';
import Loading from './Loading';

export const $load = ({ isShow }) => {
  if (isShow) {
    // 已经生成了loading
    if (window.bpLoading) {
      const bpLoading = document.getElementById('bpLoading') as HTMLElement;
      bpLoading.style.display = 'block';
    } else {
      // 没有生成的loading，
      const dom = document.createElement('div');
      dom.setAttribute('id', 'bpLoading');
      document.body.appendChild(dom);
      ReactDOM.render(<Loading />, dom);
      // setLoad(true);
      window.bpLoading = true;
    }
  } else {
    // 已经生成了loading
    if (window.bpLoading) {
      const bpLoading = document.getElementById('bpLoading') as HTMLElement;
      bpLoading.style.display = 'none';
    }
  }
};
