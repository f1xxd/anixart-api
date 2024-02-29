import { call } from "../../index"
import { PROFILE as endpoint } from "../../endpoints"

import type { IBaseApiParams } from "../../types"
import type { IResponse } from "../../schemas/response"
import type { IProfile, IProfileResponse } from "../../schemas/profile"

export interface IProfileParams extends IBaseApiParams {
  token: string
  id: number | string
}

export interface IProfileResult extends IResponse {
  profile: IProfile
  is_my_profile: boolean
}

export async function profile(
  params: IProfileParams
): Promise<IProfileResponse> {
  const response = await call<IProfileResult>({
    path: endpoint.replace("{id}", params.id as string),
    token: params.token,
    ...params.request
  })

  return response.profile ?? null
}
