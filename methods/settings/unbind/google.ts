import { call } from "@/anixart"
import { SETTINGS_PROFILE_UNBIND_GOOGLE as endpoint } from "@/anixart/endpoints"

import type { IBaseApiParams } from "@/anixart/types"
import type { IResponse } from "@/anixart/schemas/response"

export interface IUnbindGoogleParams extends IBaseApiParams {
  token: string
}

export interface IUnbindGoogleResult {
  code: number
}

export async function unbindGoogle(params: IUnbindGoogleParams): Promise<IUnbindGoogleResult> {
  const response = await call<IResponse>({
    path: endpoint,
    token: params.token,
    ...params.request,
  })

  return {
    code: response.code,
  }
}
