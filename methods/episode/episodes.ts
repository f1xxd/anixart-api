import { call } from "@/anixart"
import { EPISODES as endpoint } from "@/anixart/endpoints"

import type { IBaseApiParams } from "@/anixart/types"
import type { IEpisodesResult, IEpisodesResponse } from "@/anixart/schemas/episode"

export interface IEpisodesParams extends IBaseApiParams {
  token: string
  releaseId: number | string
  typeId: number | string
  sourceId: number | string
}

export async function episodes(params: IEpisodesParams): Promise<IEpisodesResponse> {
  const response = await call<IEpisodesResult>({
    path: endpoint.replace("{releaseId}", params.releaseId as string).replace("{typeId}", params.typeId as string).replace("{sourceId}", params.sourceId as string),
    token: params.token,
    ...params.request,
  })

  return response.episodes ?? null
}
