import { call } from "@/anixart"
import { VIDEO_PARSE as endpoint } from "@/anixart/endpoints"

import type { IBaseApiParams } from "@/anixart/types"
import type { IVideoParse, IVideoParseRequest, IVideoParseResponse } from "@/anixart/schemas/directlink"

export interface IVideoParseParams extends IBaseApiParams {
  url: string
}

export interface IVideoParseResult extends IVideoParse {}

export async function videoParse(params: IVideoParseParams): Promise<IVideoParseResult> {
  const body: IVideoParseRequest = {
    url: params.url,
  }

  const response = await call<IVideoParseResponse>({
    path: endpoint,
    params: body,
    ...params.request,
  })

  return response
}
