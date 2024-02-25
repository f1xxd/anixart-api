import type { IResponse } from "@/anixart/schemas/response"

export interface IVideoParse {
  "1080p"?: string
  "720p"?: string
  "480p"?: string
  "360p"?: string
}

export interface IVideoParseRequest {
  url: string
}

export interface IVideoParseResponse extends IResponse, IVideoParse {}
