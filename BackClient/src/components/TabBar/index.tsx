import styled from 'styled-components';

export default () => {
  const TabBarWrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #008c8c;

    .box {
      width: 100px;
      height: 100px;
      background: skyblue;
    }
  `;

  return (
    <div>
      <TabBarWrap>
        Lorem ipsum dolor sit.
        <div className='box'>
          hello
        </div>
      </TabBarWrap>
    </div>
  );
};
