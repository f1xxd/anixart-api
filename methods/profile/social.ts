import { call } from "@/anixart"
import { PROFILE_SOCIAL as endpoint } from "@/anixart/endpoints"

import type { IBaseApiParams } from "@/anixart/types"
import type { IProfileSocialResponse } from "@/anixart/schemas/profile"

export interface IProfileSocialParams extends IBaseApiParams {
  token: string
  id: number | string
}

export interface IProfileSocialResult {
  discord: string
  instagram: string
  telegram: string
  tiktok: string
  vk: string
}

export async function profileSocial(params: IProfileSocialParams): Promise<IProfileSocialResult> {
  const response = await call<IProfileSocialResponse>({
    path: endpoint.replace("{id}", params.id as string),
    token: params.token,
    ...params.request,
  })

  return {
    discord: response.discord_page ?? null,
    instagram: response.inst_page ?? null,
    telegram: response.tg_page ?? null,
    tiktok: response.tt_page ?? null,
    vk: response.vk_page ?? null,
  }
}
