import { call } from "../../index"
import { VIDEO_PARSE as endpoint } from "../../endpoints"

import type { IBaseApiParams } from "../../types"
import type {
  IVideoParse,
  IVideoParseRequest,
  IVideoParseResponse
} from "../../schemas/directlink"

export interface IVideoParseParams extends IBaseApiParams {
  url: string
}

export interface IVideoParseResult extends IVideoParse {}

export async function videoParse(
  params: IVideoParseParams
): Promise<IVideoParseResult> {
  const body: IVideoParseRequest = {
    url: params.url
  }

  const response = await call<IVideoParseResponse>({
    path: endpoint,
    params: body,
    ...params.request
  })

  return response ?? null
}
