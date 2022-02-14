/**
 * 用户列表类型
 */
export interface IUserListType {
  id: number;
  name: string;
  checked: boolean;
}

/**
 * 文章列表类型
 */
export interface IArticleListType {
  id: number;
  title: string;
  name: string;
  content: string;
  nickName: string;
}
