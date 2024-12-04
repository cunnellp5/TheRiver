export type NoUndefinedField<T> = { [P in keyof T]-?: NoUndefinedField<NonNullable<T[P]>> };

export type Info = App.Info;
export type View = App.View;
export type Resource = App.Resource;
export type Event = App.Event;

export interface SparkleType {
  id: string;
  createdAt: number;
  color: string;
  size: number;
  style: any;
}

export interface BlogPost {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  content: string;
  description: string;
  slug: string;
  published: boolean;
  tags: string[];
}
