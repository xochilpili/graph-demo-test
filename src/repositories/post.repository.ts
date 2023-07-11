import mongoose from 'mongoose';
import { IPost, PostModel } from '../models/post.model';

export interface IPostRepository {
	addPost: (post: IPost) => Promise<IPost>;
	updatePost: (postId: string, post: Partial<IPost>) => Promise<IPost>;
	deletePostById: (postId: string) => Promise<void>;
}
export class PostRepository implements IPostRepository {
	async getPosts(): Promise<IPost[]> {
		return await PostModel.find({});
	}

	async getPost(id: string): Promise<IPost> {
		return await PostModel.findById({ _id: new mongoose.Types.ObjectId(id) });
	}

	async addPost(post: IPost): Promise<IPost> {
		return await new PostModel({ ...post }).save();
	}

	async updatePost(postId: string, post: Partial<IPost>): Promise<IPost> {
		return await PostModel.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(postId) }, { $set: { ...post } }, { upsert: true, new: true });
	}

	async deletePostById(postId: string): Promise<void> {
		await PostModel.findOneAndDelete({ _id: new mongoose.Types.ObjectId(postId) });
	}
}
