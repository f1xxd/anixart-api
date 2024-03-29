import { call } from "../../index"
import { SEARCH_PROFILE as endpoint } from "../../endpoints"

import type { IBaseApiParams } from "../../types"
import type { IProfile } from "../../schemas/profile"
import type {
  IProfileSearchRequest,
  IProfileSearchResponse
} from "../../schemas/search"

export interface IProfileSearchParams extends IBaseApiParams {
  token: string
  page: number | string
  query: string
}

export interface IProfileSearchResult {
  items: IProfile[]
  totalCount: number
  page: number
  pagesCount: number
}

export async function searchProfile(
  params: IProfileSearchParams
): Promise<IProfileSearchResult> {
  const body: IProfileSearchRequest = {
    query: params.query
  }

  const response = await call<IProfileSearchResponse>({
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
