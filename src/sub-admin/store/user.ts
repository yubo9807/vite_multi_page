import { api_getUserInfo } from "../api/login";
import { defineStore } from "pinia";
import env, { DEVELOPMENT } from "@/common/env";
import { AnyObj } from "@/common/utils/type";

export const DEBUGING = false;  // 在后端接口不通的情况下，开启它跳转相应的路有进行开发

export const ROLE_CONFIG = Object.freeze({
  1: 'admin',
  2: 'user'
})

const TOKEN = 'token';
let lock = false;

export function getToken() {
  return localStorage.getItem(TOKEN);
}
function setToken(value) {
  localStorage.setItem(TOKEN, value);
}
function delToken() {
  localStorage.removeItem(TOKEN);
}

type State = {
  login: 0 | 1 | 2  // 0: 未登录，1: 已登陆，2: 已退出
  role: string  // 角色
  token: string
  info: AnyObj  // 用户信息
}

export default defineStore({
  id: 'user',

  state: (): State => ({
    login: 0,
    role: null,
    token: getToken() || '',
    info: {},
  }),

  actions: {

    /**
     * 设置用户信息
     * @note 有些后端喜欢把信息返回在登录接口内
     */
    setInfo(info: any) {
      this.info = info;
    },

    /**
     * 登录
     * @param token 
     */
    signIn(token: string) {
      this.token = token;
      setToken(token);
      this.getUserInfo();
    },

    /**
     * 获取用户信息
     */
    async getUserInfo() {
      if (DEBUGING && env.NODE_ENV === DEVELOPMENT) {
        this.login = 1;
        return;
      }

      if (!getToken()) return;

      if (lock) return;  // 并发，防止多次调用

      lock = true;
      const [err, res] = await api_getUserInfo();
      if (err) return;

      this.info = res.data;
      this.role = ROLE_CONFIG[res.data.roles[0].roleid];
      this.login = 1;
      lock = false;
    },

    /**
     * 退出登录
     */
    signOut() {
      this.info = {};
      this.token = '';
      delToken();
      this.login = 2;
    },
  }
})
