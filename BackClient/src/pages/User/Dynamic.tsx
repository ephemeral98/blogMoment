// 社交/动态 组件
import TextTools from '@cps/TextTools';
import styled from 'styled-components';
import { useRef, useState } from 'react';
import { useLongPress } from 'ahooks';

const DynamicWrap = styled.div`
  text-align: left;
  border-bottom: solid 1px #efefef;
  padding: 0.1rem 0 0.5rem;
  cursor: pointer;

  &.active {
    @apply bg-red-400;
  }
`;

export default () => {
  const [picked, setPicked] = useState(false); // 是否选中当前项
  const ref = useRef<HTMLButtonElement>(null);

  useLongPress(() => {
    setPicked(!picked);
    if (!picked) {
      console.log('选中。。');
    } else {
      console.log('取消选中');
    }
  }, ref, {
    onClick: () => console.log('进入文章')
  });

  return (
    <DynamicWrap ref={ref} className={picked && 'active'}>
      <div className='flex justify-between items-center'>
        <div className='mr-0.5'>
          写 React 程序这么多年，有些人可能还没注意到如何去规范项目代码，接下来呢，给 10
          个建议，希望能帮到你！ 1. 组织好项目目录结构 在 React
          项目中，没有强制规定目录的结构，但是有一个好的规范，可以让你更好地组织代码，也能更好的进行代码后期维护。
          这里有个建议：经常被重复
        </div>
      </div>
      <TextTools flex/>
    </DynamicWrap>
  );
};
