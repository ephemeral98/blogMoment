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
