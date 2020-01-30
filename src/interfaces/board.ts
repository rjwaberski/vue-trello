export interface IBoard {
  columns: IBoardColumn[];
}

export interface IBoardColumn {
  name: string;
  items: IBoardItem[];
}

export interface IBoardItem {
  created: Date;
  updated?: Date;
  value: string;
  id: string;
}
