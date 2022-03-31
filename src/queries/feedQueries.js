export const getPostsQuery = page => (
  {
    query: `
      query FetchPosts($page: Int) {
        posts(page: $page) {
          posts {
            _id
            title
            content
            imageUrl
            creator {
              name
            }
            createdAt
          }
          totalPosts
        }
      }
    `,
    variables: {
      page: page,
    }
  }
);

export const getPostQuery = postId => (
  {
    query: `
      query FetchSinglePost(
        $id: ID!
      ) {
        post(id: $id) {
          title
          content
          imageUrl
          creator {
            name
          }
          createdAt
        }
      }
    `,
    variables: {
      id: postId
    }
  }
);

export const createPostQuery = (title, content, imageUrl) => (
  {
    query: `
      mutation CreateNewPost(
        $title: String!
        $content: String!
        $imageUrl: String!
      ) {
        createPost(postInput: {
          title: $title,
          content: $content,
          imageUrl: $imageUrl
        }) {
          _id
          title
          content
          imageUrl
          creator {
            name
          }
          createdAt
        }
      }
    `,
    variables: {
      title: title,
      content: content,
      imageUrl: imageUrl
    }
  }
);

export const updatePostQuery = (id, title, content, imageUrl) => (
  {
    query: `
      mutation UpdateExistingPost(
        $id: ID!
        $title: String!
        $content: String!
        $imageUrl: String!
      ) {
        updatePost(
          id: $id,
          postInput: {
            title: $title,
            content: $content,
            imageUrl: $imageUrl
          }
        ) {
          _id
          title
          content
          imageUrl
          creator {
            name
          }
          createdAt
        }
      }
    `,
    variables: {
      id: id,
      title: title,
      content: content,
      imageUrl: imageUrl
    }
  }
);

export const deletePostQuery = postId => (
  {
    query: `
      mutation DeletePost($id: ID!) {
        deletePost(id: $id)
      }
    `,
    variables: {
      id: postId
    }
  }
);