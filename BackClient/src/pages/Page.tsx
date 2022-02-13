import NavBar from '@cps/NavBar';
import css from './page.less';

export default function IndexPage(props: any) {
  return (
    <>
      <NavBar />
      <div className={css.page_main}>{props.children}</div>
    </>
  );
}
