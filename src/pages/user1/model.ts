import { fakeAccountLogin } from './service';
import { getPageQuery, setAuthority } from '@/pages/user/login/utils/utils';
import { routerRedux } from 'dva/router';

const Model = {
  namespace: 'login1',
  state: {},
  effects: {
    // @ts-ignore
    *login({ payload, callback }, { put, call }) {
      const response = yield call(fakeAccountLogin, payload);
      yield put({
        type: 'loginInfo',
        payload: response,
      });

      if (response.status === 'ok') {
        const urlParams = new URL(window.location.href);
        const params = getPageQuery();
        let { redirect } = params as { redirect: string };
        if (redirect) {
          const redirectUrlParams = new URL(redirect);
          if (redirectUrlParams.origin === urlParams.origin) {
            redirect = redirect.substr(urlParams.origin.length);
            if (redirect.match(/^\/.*#/)) {
              redirect = redirect.substr(redirect.indexOf('#') + 1);
            }
          } else {
            window.location.href = redirect;
            return;
          }
        }
        yield put(routerRedux.replace(redirect || '/'));
      }

      if (callback) {
        callback(response);
      }
    },
  },
  reducers: {
    loginInfo(state: any, { payload }: any) {
      setAuthority(payload.currentAuthority);
      return {
        errMsg: payload.errMsg,
        status: payload.status,
      };
    },
  },
};

export default Model;
