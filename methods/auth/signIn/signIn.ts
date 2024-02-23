import { call } from "@/anixart"
import { SIGN_IN } from "@/anixart/endpoints"

import type { IBaseApiParams } from "@/anixart/types"
import type { IAuthLoginRequest, IAuthLoginResponse } from "@/anixart/schemas/auth"
import type { IProfile, IProfileToken } from "@/anixart/schemas/profile"

export interface IAuthLoginParams extends IBaseApiParams {
  login: string
  password: string
}

export interface IAuthLoginResult {
  profile: IProfile
  profileToken: IProfileToken
}

export async function signIn(params: IAuthLoginParams): Promise<IAuthLoginResult> {
  const body: IAuthLoginRequest = {
    login: params.login,
    password: params.password,
  }

  const response = await call<IAuthLoginResponse>({
    path: SIGN_IN,
    urlencoded: body,
    ...params.request,
  })

  return {
    profile: response.profile,
    profileToken: response.profileToken,
  }
}
