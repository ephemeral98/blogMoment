// 文案下面的 收藏、喜欢、踩、评论
import styled from 'styled-components';

interface ITextTools {
  collect?: boolean; // 收藏
  like?: boolean; // 喜欢
  step?: boolean; // 踩
  comment?: boolean; // 评论
}
const TextToolsWrap = styled.div`
  margin-top: 0.1rem;
  height: 2.3rem;

  .iconfont {
    @apply mr-0.2;
  }

  > div > div {
    cursor: pointer;
  }

  .comment_wrap {
    height: 2rem;
    padding: 0.1rem;

    border: solid 1px #cfcfcf;
    border-radius: 0.1rem;
    margin-top: 0.1rem;
    @apply bg-cyan-700;
  }

  .declare_btn {
    width: 0.8rem;
    height: 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.16rem;
    color: #fff;
    background-color: #00c8c8;
  }
`;
export default (props: ITextTools) => {
  return (
    <TextToolsWrap>
      <div className="flex">
        <div className="flex">
          <i className="iconfont icon-user"></i>
          喜欢
        </div>
        <div className="flex ml-1">
          <i className="iconfont icon-user"></i>
          评论
        </div>
        <div className="flex ml-1">
          <i className="iconfont icon-user"></i>
          收藏
        </div>
        <div className="flex ml-1">
          <i className="iconfont icon-user"></i>踩
        </div>
      </div>

      {/* 评论框框 */}
      <div className="comment_wrap bg-red-300 flex flex-col">
        <div className="flex justify-end items-center border-2 h-3">
          <button className="declare_btn">发布</button>
        </div>
        <textarea className="w-full flex-auto"></textarea>
      </div>
    </TextToolsWrap>
  );
};
