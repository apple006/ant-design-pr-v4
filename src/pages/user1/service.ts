import request from '@/utils/request';
import { Constants } from '@/utils/constant';

export async function fakeAccountLogin(params: any) {
  return request(`${Constants.baseUrl}/api/login/account`, {
    requestType: 'form',
    method: 'POST',
    data: params,
  });
}
