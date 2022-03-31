export const loginQuery = (email, password) => (
  {
    query: `
      query Login(
        $email: String!
        $password: String!
      ) {
        login(email: $email, password: $password) {
          token
          userId
        }
      }
    `,
    variables: {
      email: email,
      password: password
    }
  }
);

export const signupQuery = (email, name, password) => (
  {
    query: `
      mutation CreateNewUser(
        $email: String!
        $name: String!
        $password: String!
      ) {
        createUser(userInput: {
          email: $email, 
          name: $name, 
          password: $password
        }) {
          _id
          email
        }
      }
    `,
    variables: {
      email: email,
      name: name,
      password: password
    }
  }
);