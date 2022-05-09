import css from './index.module.css';

export default () => {
  return (
    <div className={`${css['global-loading-wrap']} ${css.mask}`}>
      <div className={`${css['la-ball-spin-clockwise']} ${css['la-2x']}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
