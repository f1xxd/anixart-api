import { call } from "@/anixart"
import { RELEASE_FILTER as endpoint } from "@/anixart/endpoints"

import type { IBaseApiParams } from "@/anixart/types"
import type { IRelease, IReleaseFilterRequest, IReleaseFilterResponse } from "@/anixart/schemas/release"

export interface IReleaseFilterParams extends IBaseApiParams {
  token: string
  page: number | string
  extendedMode?: boolean
}

export interface IReleaseFilterResult {
  items: IRelease[]
  totalCount: number
  page: number
  pagesCount: number
}

export async function filter(params: IReleaseFilterParams): Promise<IReleaseFilterResult> {
  const body: IReleaseFilterRequest = {}

  const response = await call<IReleaseFilterResponse>({
    path: endpoint.replace("{page}", params.page as string),
    params: {
      extended_mode: params.extendedMode,
    },
    json: body,
    token: params.token,
    ...params.request,
  })

  return {
    items: response.content,
    totalCount: response.total_count,
    page: response.current_page,
    pagesCount: response.total_page_count,
  }
}
