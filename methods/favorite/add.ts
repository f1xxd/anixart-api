import { call } from "@/anixart"
import { FAVORITE_ADD as endpoint } from "@/anixart/endpoints"

import type { IBaseApiParams } from "@/anixart/types"
import type { IFavoriteAddResponse } from "@/anixart/schemas/favorite"

export interface IFavoriteAddParams extends IBaseApiParams {
  token: string
  releaseId: number | string
}

export async function favoriteAdd(params: IFavoriteAddParams): Promise<boolean> {
  const response = await call<IFavoriteAddResponse>({
    path: endpoint.replace("{releaseId}", params.releaseId as string),
    token: params.token,
    ...params.request,
  })

  return response.code === 0
}
