// Generated by https://quicktype.io

export interface LocationsResponse {
  info: Info;
  results: Location[];
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: Date;
}
