import { IUserListType } from './TableListType';

export default {
  state: {
    // 用户列表
    userList: [
      {
        id: 1,
        name: '张三',
        checked: false,
      },
      {
        id: 2,
        name: '李四',
        checked: false,
      },
    ],

    // 评论列表
    commentList: [
      {
        id: 1,
        name: '张三',
        content: 'this is comment...',
        time: 1644066413309,
        area: '广东省深圳市南山区',
      },
      {
        id: 2,
        name: '李四',
        content: 'this is comment22222',
        time: 1644096453513,
        area: '广东省广州市天河区',
      },
    ],

    // 文章列表
    articleList: [
      {
        id: 1,
        title: '这是标题111',
        content: 'this is content...',
        name: '张三',
      },
    ],
  },

  reducers: {
    /**
     * 选中用户
     */
    /* pickUser(state: any, { payload: id }: { payload: number }) {
      const newList = state.userList.map((item: IUserListType) => {
        if (item.id === id) {
          item.checked = true;
        }
        return item;
      });
      state.userList = newList;
      return state;
    }, */

    SETUSERLIST(state: any, { payload: newList = [] }: any) {
      return { ...state, ...newList };
    },
  },

  effects: {
    /**
     * 删除用户
     */
    async delUser(commit: any, { payload }: any) {},
  },
};
