import { call } from "@/anixart"
import { RELEASE as endpoint } from "@/anixart/endpoints"

import type { IBaseApiParams } from "@/anixart/types"
import type { IReleaseResult, IReleaseResponse } from "@/anixart/schemas/release"

export interface IReleaseParams extends IBaseApiParams {
  token: string
  releaseId: number | string
}

export async function release(params: IReleaseParams): Promise<IReleaseResponse> {
  const response = await call<IReleaseResult>({
    path: endpoint.replace("{releaseId}", params.releaseId as string),
    token: params.token,
    ...params.request,
  })

  return response.release
}
