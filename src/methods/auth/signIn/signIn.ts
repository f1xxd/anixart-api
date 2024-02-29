import { call } from "../../../index"
import { SIGN_IN as endpoint } from "../../../endpoints"

import type { IBaseApiParams } from "../../../types"
import type {
  IAuthLoginRequest,
  IAuthLoginResponse
} from "../../../schemas/auth"
import type { IProfile, IProfileToken } from "../../../schemas/profile"

export interface IAuthLoginParams extends IBaseApiParams {
  login: string
  password: string
}

export interface IAuthLoginResult {
  profile: IProfile
  profileToken: IProfileToken
}

export async function signIn(
  params: IAuthLoginParams
): Promise<IAuthLoginResult> {
  const body: IAuthLoginRequest = {
    login: params.login,
    password: params.password
  }

  const response = await call<IAuthLoginResponse>({
    path: endpoint,
    urlencoded: body,
    ...params.request
  })

  return {
    profile: response.profile ?? null,
    profileToken: response.profileToken ?? null
  }
}
