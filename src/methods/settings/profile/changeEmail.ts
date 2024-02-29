import { call } from "../../../index"
import { SETTINGS_PROFILE_CHANGE_EMAIL as endpoint } from "../../../endpoints"

import type { IBaseApiParams } from "../../../types"
import type {
  IChangeEmailRequest,
  IChangeEmailResponse
} from "../../../schemas/settings"

export interface IChangeEmailParams extends IBaseApiParams {
  token: string
  password: string
  current: string
  new: string
}

export async function changeEmail(
  params: IChangeEmailParams
): Promise<boolean> {
  const body: IChangeEmailRequest = {
    current_password: params.password,
    current: params.current,
    new: params.new
  }

  const response = await call<IChangeEmailResponse>({
    path: endpoint,
    token: params.token,
    urlencoded: body,
    ...params.request
  })

  return response.code === 0
}
