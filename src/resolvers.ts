import { GraphqlContext } from './interfaces/graphql.context';
import { IPost } from './models/post.model';
import { PostRepository } from './repositories/post.repository';

const postRepository = new PostRepository();
const resolvers = {
	Query: {
		posts: async (_, obj) => {
			return await postRepository.getPosts();
		},
		post: async (_, args: { id: string }) => {
			const { id } = args;
			return await postRepository.getPost(id);
		},
	},
	Mutation: {
		createPost: async (_, args: { data: IPost }) => {
			const { data } = args;
			return await postRepository.addPost(data);
		},
	},
};

export default resolvers;
