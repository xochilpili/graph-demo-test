import { IPost } from '../models/post.model';

export interface GraphqlContext {
	posts?: () => Promise<IPost[]>;
	post: (id: string) => Promise<IPost>;
	createPost: (input: Partial<IPost>) => Promise<IPost>;
}
