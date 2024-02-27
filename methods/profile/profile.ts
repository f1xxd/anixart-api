import { call } from "@/anixart"
import { PROFILE as endpoint } from "@/anixart/endpoints"

import type { IBaseApiParams } from "@/anixart/types"
import type { IResponse } from "@/anixart/schemas/response"
import type { IProfile, IProfileResponse } from "@/anixart/schemas/profile"

export interface IProfileParams extends IBaseApiParams {
  token: string
  id: number | string
}

export interface IProfileResult extends IResponse {
  profile: IProfile
  is_my_profile: boolean
}

export async function profile(params: IProfileParams): Promise<IProfileResponse> {
  const response = await call<IProfileResult>({
    path: endpoint.replace("{id}", params.id as string),
    token: params.token,
    ...params.request,
  })

  return response.profile ?? null
}
