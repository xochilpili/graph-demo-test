# GraphQL Fastify Example

#### Stack

- Fastify
- Apolloserver
- Mongoose

#### Run locally

```sh
$ git clone https://github.com/xochilpili/graph-demo-test
$ cd graph-demo-test
$ npm i
$ docker-compose up -d
$ npm run start
```

#### Graphql Queries

```js
// Getting Posts
query Posts {
  posts {
    id
    title
    body
    category
    published
  }
}

// Getting a single Post

post(id: $postId) {
    id
    title
    body
    category
    published
}

// Create a post

mutation CreatePost($data: CreatePostInput!) {
  createPost(data: $data) {
    id
   title
   body
   category
    published
  }
}
```

#### TODO:

- DeletePost query
- Apollo Foundation (Router + Subgraphs)
- Tests
