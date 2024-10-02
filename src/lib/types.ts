export type NoUndefinedField<T> = { [P in keyof T]-?: NoUndefinedField<NonNullable<T[P]>> };

export type Info = App.Info;
export type View = App.View;
export type Resource = App.Resource;
export type Event = App.Event;

export type SparkleType = {
	id: string;
	createdAt: number;
	color: string;
	size: number;
	style: any;
};
