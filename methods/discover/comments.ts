import { call } from "@/anixart"
import { DISCOVER_COMMENTS as endpoint } from "@/anixart/endpoints"

import type { IBaseApiParams } from "@/anixart/types"
import type { IReleaseComment } from "@/anixart/schemas/release"
import type { ICommentsResponse } from "@/anixart/schemas/discover"

export interface ICommentsParams extends IBaseApiParams {}

export interface ICommentsResult {
  items: IReleaseComment[]
  totalCount: number
  page: number
  pagesCount: number
}

export async function discoverComments(params: ICommentsParams): Promise<ICommentsResult> {
  const response = await call<ICommentsResponse>({
    path: endpoint,
    ...params.request,
  })

  return {
    items: response.content ?? null,
    totalCount: response.total_count ?? null,
    page: response.current_page ?? null,
    pagesCount: response.total_page_count ?? null,
  }
}
