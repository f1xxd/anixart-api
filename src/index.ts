import * as endpoints from "./endpoints"

import type { IRequestOptions } from "./types"
import type { IResponse } from "./schemas/response"

export * from "./methods"

export async function call<T extends IResponse>(
  opts: IRequestOptions
): Promise<T> {
  const endpoint = new URL(opts.path, endpoints.BASE_URL)
  const headers: Record<string, string> = {
    "User-Agent": endpoints.USER_AGENT
  }
  const init: RequestInit = {
    headers,
    signal: opts.signal
  }

  if (opts.token) endpoint.searchParams.set("token", opts.token)
  if (opts.params) {
    for (const [key, value] of Object.entries(opts.params)) {
      if (typeof value !== "undefined") endpoint.searchParams.set(key, value)
    }
  }

  if (opts.json || opts.urlencoded) {
    init.method = "POST"
    init.body = opts.json
      ? JSON.stringify(opts.json)
      : new URLSearchParams(opts.urlencoded as undefined).toString()

    headers["Content-Type"] = opts.json
      ? "application/json"
      : "application/x-www-form-urlencoded"

    headers["Content-Length"] = init.body.length.toString()
  }

  const response = await fetch(endpoint.href, init)
  return (await response.json()) as T
}
