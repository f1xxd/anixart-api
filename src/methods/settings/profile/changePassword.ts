import { call } from "../../../index"
import { SETTINGS_PROFILE_CHANGE_PASSWORD as endpoint } from "../../../endpoints"

import type { IBaseApiParams } from "../../../types"
import type {
  IChangePasswordRequest,
  IChangePasswordResponse
} from "../../../schemas/settings"

export interface IChangePasswordParams extends IBaseApiParams {
  token: string
  current: string
  new: string
}

export interface IChangePasswordResult {
  token: string | undefined
}

export async function changePassword(
  params: IChangePasswordParams
): Promise<IChangePasswordResult> {
  const body: IChangePasswordRequest = {
    current: params.current,
    new: params.new
  }

  const response = await call<IChangePasswordResponse>({
    path: endpoint,
    token: params.token,
    urlencoded: body,
    ...params.request
  })

  return {
    token: response.token ?? null
  }
}
