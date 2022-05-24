import styled from 'styled-components';
const UserWrap = styled.div`
  width: 100%;
  height: 100vh;
  @apply bg-cyan-100;
`;

export default () => {
  return (
    <UserWrap>
      <div className='user_item'>
        <div>id</div>
      </div>
    </UserWrap>
  );
};
