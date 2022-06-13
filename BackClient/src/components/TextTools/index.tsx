// 文案下面的 收藏、喜欢、踩、评论
import { useState } from 'react';
import styled from 'styled-components';

interface ITextTools {
  collect?: boolean; // 收藏
  like?: boolean; // 喜欢
  step?: boolean; // 踩
  comment?: boolean; // 评论
  flex?: boolean; // 是否横向排列
}
const TextToolsWrap = styled.div`
  margin-top: 0.1rem;

  .iconfont {
    @apply mr-0.2;
  }

  .tool_container > div {
    cursor: pointer;
  }

  .comment_wrap {
    padding: 0.1rem;

    border: solid 1px #cfcfcf;
    border-radius: 0.1rem;
    margin-top: 0.1rem;
    @apply bg-cyan-700;
  }

  .avatar {
    width: 0.5rem !important;
    height: 0.5rem !important;
    flex: 0 0 0.5rem;
    border-radius: 50%;
  }

  .flex_way {
    @apply flex justify-between;
  }
`;
export default (props: ITextTools) => {
  const [showComment, setShowComment] = useState(false); // 是否显示评论

  return (
    <TextToolsWrap>
      <div className={props.flex && 'flex_way'}>
        <div className="flex tool_container justify-center">
          <div className="flex">
            <i className="iconfont icon-user"></i>
            喜欢(123)
          </div>
          <div className="flex ml-1">
            <i className="iconfont icon-user"></i>
            字数(123)
          </div>
          <div
            className="flex ml-1"
            onClick={() => {
              setShowComment(!showComment);
            }}
          >
            <i className="iconfont icon-user"></i>
            评论(345)
          </div>
          <div className="flex ml-1">
            <i className="iconfont icon-user"></i>
            收藏(456)
          </div>
          <div className="flex ml-1">
            <i className="iconfont icon-user"></i>
            观看(366)
          </div>
          <div className="flex ml-1">
            <i className="iconfont icon-user"></i>
            踩(666)
          </div>
        </div>

        {/* 时间 */}
        <div>1998/11/15 00:24:88</div>
      </div>

      {/* 评论框框 */}
      {showComment && (
        <>
          <div className="comment_wrap bg-red-300 flex flex-col">
            <div className="comment_item flex">
              <img src={require('@img/holder.png')} alt="" className="avatar mr-1" />
              <div className="flex-auto">
                <div className="flex justify-between">
                  <div>Barry</div>
                  <div>1998/11/15 00:12:24</div>
                </div>
                <div>1256011725@qq.com</div>
              </div>
            </div>
            <div className="mt-0.5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, praesentium?
            </div>
          </div>
          <div className="comment_wrap bg-red-300 flex flex-col">
            <div className="comment_item flex">
              <img src={require('@img/holder.png')} alt="" className="avatar mr-1" />
              <div className="flex-auto">
                <div className="flex justify-between">
                  <div>Barry</div>
                  <div>1998/11/15 00:12:24</div>
                </div>
                <div>1256011725@qq.com</div>
              </div>
            </div>
            <div className="mt-0.5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, praesentium?
            </div>
          </div>
        </>
      )}
    </TextToolsWrap>
  );
};
