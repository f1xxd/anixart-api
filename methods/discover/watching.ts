import { call } from "@/anixart"
import { DISCOVER_WATCHING as endpoint } from "@/anixart/endpoints"

import type { IBaseApiParams } from "@/anixart/types"
import type { IRelease } from "@/anixart/schemas/release"
import type { IWatchingResponse } from "@/anixart/schemas/discover"

export interface IWatchingParams extends IBaseApiParams {
  page: number | string
}

export interface IWatchingResult {
  items: IRelease[]
  totalCount: number
  page: number
  pagesCount: number
}

export async function discoverWatching(params: IWatchingParams): Promise<IWatchingResult> {
  const response = await call<IWatchingResponse>({
    path: endpoint.replace("{page}", params.page as string),
    ...params.request,
  })

  return {
    items: response.content,
    totalCount: response.total_count,
    page: response.current_page,
    pagesCount: response.total_page_count,
  }
}
