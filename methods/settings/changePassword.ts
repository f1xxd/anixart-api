import { call } from "@/anixart"
import { CHANGE_PASSWORD as endpoint } from "@/anixart/endpoints"

import type { IBaseApiParams } from "@/anixart/types"
import type { IChangePasswordRequest, IChangePasswordResponse } from "@/anixart/schemas/settings"

export interface IChangePasswordParams extends IBaseApiParams {
  token: string
  current: string
  new: string
}

export interface IChangePasswordResult {
  token: string | undefined
}

export async function changePassword(params: IChangePasswordParams): Promise<IChangePasswordResult> {
  const body: IChangePasswordRequest = {
    current: params.current,
    new: params.new
  }

  const response = await call<IChangePasswordResponse>({
    path: endpoint,
    token: params.token,
    urlencoded: body,
    ...params.request,
  })

  return {
    token: response.token,
  }
}
