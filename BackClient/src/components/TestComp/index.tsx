import * as router from 'react-router';

export default () => {
  const his = router.useHistory();

  return (
    <div>
      hello, world...
      <button
        onClick={() => {
          console.log('....his...', his);
        }}
      >
        click
      </button>
    </div>
  );
};
