import styled from 'styled-components';
const FollowTabWrap = styled.div`
  @apply flex justify-start m-0.5 bg-cyan-500 p-0.5 rounded-sm;

  .name {
    font-weight: bold;
    font-size: .15rem;
  }
`;

export default () => {
  return <FollowTabWrap>
    <img src={require('@img/holder.png')} alt="" className='w-3 h-3 mr-1 rounded' />
    <div className='flex justify-center items-start flex-col'>
      <div className='name'>Barry</div>
      <div>9999 文章 · 99999 关注者</div>
    </div>
  </FollowTabWrap>
}
