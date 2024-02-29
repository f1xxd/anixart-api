import { call } from "../../../index"
import { SETTINGS_PROFILE_CHANGE_LOGIN as endpoint } from "../../../endpoints"

import type { IBaseApiParams } from "../../../types"
import type {
  IChangeLoginRequest,
  IChangeLoginResponse
} from "../../../schemas/settings"

export interface IChangeLoginParams extends IBaseApiParams {
  token: string
  new: string
}

export async function changeLogin(
  params: IChangeLoginParams
): Promise<boolean> {
  const body: IChangeLoginRequest = {
    login: params.new
  }

  const response = await call<IChangeLoginResponse>({
    path: endpoint,
    token: params.token,
    urlencoded: body,
    ...params.request
  })

  return response.code === 0
}
