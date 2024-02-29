import type { IRelease } from "./release"

export interface IEpisodeTypesResult {
  code: number
  types: IEpisodeType[]
}

export interface IEpisodeTypesResponse extends Array<IEpisodeType> {}

export interface IEpisodeType {
  "@id": number
  id: number
  name: string
  icon: string | unknown
  workers: string | unknown
  is_sub: boolean
  episodes_count: number
  view_count: number
  pinned: boolean
}

export interface IEpisodeSourcesResult {
  code: number
  sources: IEpisodeSource[]
}

export interface IEpisodeSourcesResponse extends Array<IEpisodeSource> {}

export interface IEpisodeSource {
  "@id": number
  id: number
  type?: IEpisodeType
  name: string
  episodes_count: number
}

export interface IEpisodesResult {
  code: number
  episodes: IEpisode[]
}

export interface IEpisodesResponse extends Array<IEpisode> {}

export interface IEpisode {
  "@id": number
  position: number
  release: IRelease | number
  source: IEpisodeSource | number
  name: string
  url: string
  iframe: boolean
  addedDate: number
  is_filler: boolean
  is_watched: boolean
}
