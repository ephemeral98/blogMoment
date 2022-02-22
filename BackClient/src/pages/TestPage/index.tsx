// import { useHistory } from 'react-router';
import * as his from 'react-router-dom';
import * as rrr from 'react-router';

export default function TestPage() {
  console.log('hisss', his);
  const h2 = his.useHistory();
  console.log('rrr', rrr);
  return (
    <>
      <h1>this is test page...</h1>
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, non. Quaerat quod illo
        natus quia est eveniet quam commodi, voluptas sed odio mollitia pariatur totam deleniti!
        Perspiciatis molestiae inventore iste deleniti qui nam asperiores velit veniam sint mollitia
        nobis non, labore, aliquam consequuntur culpa repellat quibusdam autem et impedit fugiat
        illum error facere. Fugiat deleniti vel architecto nobis incidunt? Quod ad labore nemo?
        Possimus illum perspiciatis dicta tempora, architecto rem aliquam sapiente molestiae est ab
        earum deserunt ullam maiores officia. Reprehenderit culpa aliquam ratione alias. Aperiam,
        nostrum est culpa dolorum laborum vitae eveniet animi voluptas obcaecati officiis eius iste
        quasi.
      </div>
      <button
        onClick={() => {
          console.log('hihs', h2);
          console.log('rrr', rrr);
          h2.push('/');
        }}
      >
        click
      </button>
    </>
  );
}
