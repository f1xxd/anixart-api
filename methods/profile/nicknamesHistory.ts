import { call } from "@/anixart"
import { PROFILE_NICKNAMES_HISTORY as endpoint } from "@/anixart/endpoints"

import type { IBaseApiParams } from "@/anixart/types"
import type { IProfileNicknames, IProfileNicknamesResponse } from "@/anixart/schemas/profile"

export interface IProfileNicknamesParams extends IBaseApiParams {
  token: string
  id: number | string
  page: number | string
}

export interface IProfileNicknamesResult {
  items: IProfileNicknames[]
  totalCount: number
  page: number
  pagesCount: number
}

export async function profileNicknames(params: IProfileNicknamesParams): Promise<IProfileNicknamesResult> {
  const response = await call<IProfileNicknamesResponse>({
    path: endpoint.replace("{id}", params.id as string).replace("{page}", params.page as string),
    token: params.token,
    ...params.request,
  })

  return {
    items: response.content ?? null,
    totalCount: response.total_count ?? null,
    page: response.current_page ?? null,
    pagesCount: response.total_page_count ?? null,
  }
}
