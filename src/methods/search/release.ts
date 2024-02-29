import { call } from "../../index"
import { SEARCH_RELEASE as endpoint } from "../../endpoints"

import type { IBaseApiParams } from "../../types"
import type {
  IReleaseSearch,
  IReleaseSearchRequest,
  IReleaseSearchResponse
} from "../../schemas/search"

export interface IReleaseSearchParams extends IBaseApiParams {
  token: string
  page: number | string
  query: string
}

export interface IReleaseSearchResult {
  items: IReleaseSearch[]
  totalCount: number
  page: number
  pagesCount: number
}

export async function searchRelease(
  params: IReleaseSearchParams
): Promise<IReleaseSearchResult> {
  const body: IReleaseSearchRequest = {
    query: params.query
  }

  const response = await call<IReleaseSearchResponse>({
    path: endpoint.replace("{page}", params.page as string),
    json: body,
    token: params.token,
    ...params.request
  })

  return {
    items: response.content ?? null,
    totalCount: response.total_count ?? null,
    page: response.current_page ?? null,
    pagesCount: response.total_page_count ?? null
  }
}
