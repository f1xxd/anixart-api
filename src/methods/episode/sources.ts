import { call } from "../../index"
import { EPISODE_SOURCES as endpoint } from "../../endpoints"

import type { IBaseApiParams } from "../../types"
import type {
  IEpisodeSourcesResult,
  IEpisodeSourcesResponse
} from "../../schemas/episode"

export interface IEpisodeSourceParams extends IBaseApiParams {
  token: string
  releaseId: number | string
  typeId: number | string
}

export async function episodeSources(
  params: IEpisodeSourceParams
): Promise<IEpisodeSourcesResponse> {
  const response = await call<IEpisodeSourcesResult>({
    path: endpoint
      .replace("{releaseId}", params.releaseId as string)
      .replace("{typeId}", params.typeId as string),
    token: params.token,
    ...params.request
  })

  return response.sources ?? null
}
