import TextTools from '@cps/TextTools';
import styled from 'styled-components';
const DynamicWrap = styled.div`
  text-align: left;
  border-bottom: solid 1px #efefef;
  padding: 0.1rem 0 0.5rem;
`;

export default () => {
  return (
    <DynamicWrap>
      <div>
        写 React 程序这么多年，有些人可能还没注意到如何去规范项目代码，接下来呢，给 10
        个建议，希望能帮到你！ 1. 组织好项目目录结构 在 React
        项目中，没有强制规定目录的结构，但是有一个好的规范，可以让你更好地组织代码，也能更好的进行代码后期维护。
        这里有个建议：经常被重复
      </div>

      <TextTools />
    </DynamicWrap>
  );
};
