import styled from 'styled-components';
import TextTools from '@cps/TextTools';
import Comments from '@cps/Comments';

const ArticleWrap = styled.div`
  @apply my-3;

  header {
    font-size: .2rem;
    font-weight: bold;
    padding: .2rem .1rem;
  }

  .base_info {
    span {
      margin: 0 .1rem;
    }
  }
`;

export default () => {
  return <ArticleWrap>
    <header>这是一个标题党</header>
    <TextTools />

    <div className='article_container sm:px-3 mt-1'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nesciunt obcaecati exercitationem nisi ratione ullam suscipit velit architecto eveniet omnis. Repellendus perferendis id odit vero dicta rem consequatur. Ab unde hic sed eum ipsum facilis repudiandae, voluptas, quae ex beatae, enim temporibus! Saepe inventore illo amet nobis repellendus optio vero, officiis non repudiandae laborum minima quis similique ad aperiam ut maiores aspernatur dicta, soluta ipsa molestiae. Incidunt eius ut quidem earum libero nobis! Quis iusto rerum quidem alias repellat consequuntur, sed laboriosam voluptates minus corporis? Ut facilis, perferendis impedit molestias ullam soluta qui laudantium exercitationem dolor perspiciatis voluptatibus voluptatem velit corrupti amet. Eum nam ab reprehenderit pariatur, obcaecati eos totam vero voluptas labore ad perspiciatis, ullam qui minus repellat blanditiis. Possimus aliquid qui hic corporis iusto ducimus doloremque! Tenetur, quos voluptas nam modi pariatur illum doloribus quaerat adipisci officiis! Illo labore mollitia nisi dolor iure sint voluptatibus magni ab fugiat, sunt provident magnam debitis. Repellendus quidem a ut nisi nobis, soluta dolores reiciendis aliquam neque fugiat. Sint quia alias nemo suscipit! Eum beatae, nihil eos voluptate quaerat quod atque ipsum tempora minima iusto est quidem cupiditate eaque. Veritatis repellat autem rerum molestias soluta at omnis! Veniam quia earum aliquam? Sit accusantium voluptates corporis hic ullam recusandae id aperiam dolorem, inventore consequatur molestiae iure ipsam, omnis animi. Aperiam, nesciunt aliquam. Architecto optio voluptate repellendus minus cum. Obcaecati vitae nulla, veritatis tempora facere impedit quam optio laudantium possimus, cumque voluptas maiores laboriosam pariatur omnis dolore eligendi distinctio suscipit quia numquam odio nobis id commodi voluptatibus sequi. Maxime corporis dignissimos animi accusamus, repudiandae fugiat, rerum, quam exercitationem aspernatur vel totam ut! Delectus ipsa eum eligendi nostrum qui necessitatibus eius quaerat eaque quia neque, sapiente dolorum ullam tempora, voluptatibus incidunt! Ea molestias veritatis sequi unde? Aperiam quia doloribus ab nulla soluta hic. Voluptate pariatur qui necessitatibus excepturi facilis vitae, recusandae reiciendis sunt eaque delectus unde nihil voluptatum magni quidem quae quis repellat ipsum eveniet. Officia nostrum cum delectus architecto, a, ex, quas rerum reprehenderit voluptate non temporibus vitae quaerat velit aspernatur iusto id eos quibusdam incidunt voluptatibus. Minima eos soluta alias sint quasi! Dolorem nulla, dicta perspiciatis quisquam molestias sit maxime vel necessitatibus eaque id ipsa inventore? Quos, libero reprehenderit nam consequuntur sed quas nisi aliquam iure deleniti ex quibusdam ipsa neque omnis est ipsam cumque vitae hic dolor possimus. Repellat quod voluptatibus nulla rem obcaecati cupiditate maxime, repellendus facilis! Magnam, ab, aliquid eligendi voluptates exercitationem voluptatem, officia veritatis fuga incidunt vero quisquam facilis deserunt corporis. Fuga, accusamus praesentium. Unde harum illo aliquam ipsam consequatur nulla animi corrupti veritatis, assumenda, quibusdam, ut necessitatibus deserunt repellat nam possimus magni vel quaerat provident libero dolore cumque voluptatum accusamus! Quos reprehenderit assumenda repellat ab quasi quaerat. Dolore non eveniet, nihil suscipit, laborum eaque quidem consequuntur adipisci doloribus veniam labore sit eos fugiat nisi quasi aliquam, soluta molestias illum iusto aperiam numquam quia esse dolores quae. Eos beatae cumque vitae expedita commodi aliquid dolore optio? Facilis, repudiandae incidunt quasi quae tempora totam reprehenderit odio obcaecati laborum temporibus alias.
    </div>

    <Comments />
  </ArticleWrap>
}
