export interface Node {
  id: string;
  label: string;
  modelId?:number;
  type?:string;
  dimension?: {
    width: number;
    height: number;
  }
}

export interface Link {
  id: string;
  source: string;
  target: string;
}
