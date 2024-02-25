import { call } from "@/anixart"
import { FAVORITES as endpoint } from "@/anixart/endpoints"

import type { IBaseApiParams } from "@/anixart/types"
import type { IRelease } from "@/anixart/schemas/release"
import type { IFavoritesResponse } from "@/anixart/schemas/favorite"

export interface IFavoritesParams extends IBaseApiParams {
  token: string
  page: number | string
}

export interface IFavoritesResult {
  items: IRelease[]
  totalCount: number
  page: number
  pagesCount: number
}

export async function favorites(params: IFavoritesParams): Promise<IFavoritesResult> {
  const response = await call<IFavoritesResponse>({
    path: endpoint.replace("{page}", params.page as string),
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
