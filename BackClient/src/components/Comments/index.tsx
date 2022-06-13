// 评论区组件
import styled from 'styled-components';
const CommentsWrap = styled.div`
  @apply mt-2 text-left;

  .comment_title {
    font-size: .2rem;
    font-weight: bold;
    margin-bottom: .3rem;
  }

  .comment_item {
    border-bottom: solid 1px #dddddd;
    padding-bottom: .2rem;
  }
`

export default () => {
  return <CommentsWrap>
    <div className='comment_title'>评论区</div>

    <div className='comment_item '>
      {/* 基本信息 */}
      <div className='flex mb-0.5'>
        <img src={require('@img/holder.png')} alt="" className='w-2 h-2 rounded-sm' />
        <div className='ml-0.5'>
          <div>Barry</div>
          <div>3楼 2022/11/15 22:23</div>
        </div>
      </div>

      {/* 内容 */}
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis soluta in facere voluptatum consequuntur aut provident vitae consequatur quasi minima fugit maiores error omnis itaque facilis nihil totam dolores voluptatibus impedit voluptates eaque dicta, delectus iure nesciunt. Enim delectus illo dolore nesciunt ex facere hic ullam asperiores assumenda numquam eum odio nostrum nam quis iusto repudiandae quia commodi eos necessitatibus laudantium voluptas, labore animi nobis! Consequatur dolorum maiores necessitatibus repellat id ex minima accusantium vero iusto, dolores eum qui voluptas numquam saepe molestiae cupiditate, delectus nulla itaque illo vitae tempore architecto enim. Atque incidunt nihil nostrum iure aut aspernatur alias!
      </div>
    </div>
  </CommentsWrap>
}
