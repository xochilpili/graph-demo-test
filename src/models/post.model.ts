import mongoose from 'mongoose';

export interface IPost {
	title: string;
	body: string;
	category: string;
	published: boolean;
}

export interface IModels {
	Post: mongoose.Model<IPost>;
}

const postSchema = new mongoose.Schema<IPost>({
	title: {
		type: String,
		required: true,
	},
	body: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	published: {
		type: Boolean,
		required: true,
	},
});

export type PostDocument = IPost & mongoose.Document;
export const PostModel = mongoose.model<IPost>('posts', postSchema);
