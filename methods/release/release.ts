import { call } from "@/anixart"
import { RELEASE as endpoint } from "@/anixart/endpoints"

import type { IBaseApiParams } from "@/anixart/types"
import type { IRelease, IReleaseResponse } from "@/anixart/schemas/release"

export interface IReleaseParams extends IBaseApiParams {
  token: string
  releaseId: number | string
}

export interface IReleaseResult extends IRelease {}

export async function release(params: IReleaseParams): Promise<IReleaseResult> {
  const response = await call<IReleaseResponse>({
    path: endpoint.replace("{releaseId}", params.releaseId as string),
    token: params.token,
    ...params.request,
  })

  return response.release ?? null
}
