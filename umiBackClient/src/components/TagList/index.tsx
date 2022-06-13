// 标签列表
import css from './index.less';
import { useState } from 'react';

export default function TagList() {
  interface ITagItem {
    id: number;
    name: string;
    active: boolean;
  }

  const [tagList, setTagList] = useState<ITagItem[]>([
    {
      id: 1,
      name: '你应该知道的Vue',
      active: false,
    },
    {
      id: 2,
      name: '你不知道的react',
      active: false,
    },
    {
      id: 3,
      name: '被抛弃的Angular',
      active: false,
    },
  ]);

  const [isShowDel, setIsShowDel] = useState(false);
  function mouseEnter(tag: ITagItem) {
    const newList = tagList.map((t) => {
      if (t.id === tag.id) {
        t.active = true;
      }
      return t;
    });
    setTagList(newList);
  }

  function mouseLeave() {
    const newList = tagList.map((t) => {
      t.active = false;
      return t;
    });
    setTagList(newList);
  }

  return (
    <div className={css.tag_list_wrap}>
      {tagList.map((tag) => {
        return (
          <div
            onMouseEnter={() => {
              mouseEnter(tag);
            }}
            onMouseLeave={mouseLeave}
            className={css.tag_item}
            key={tag.id}
          >
            <div
              className={`${css.face_del} ${
                tag.active ? css.show_face_del : ''
              }`}
            >
              删除
            </div>
            <div className="content">{tag.name}</div>
          </div>
        );
      })}
    </div>
  );
}
