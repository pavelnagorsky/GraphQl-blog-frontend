export const getUserStatusQuery = {
  query: `
    {
      user {
        status
      }
    }
  `
};

export const updateUserStatusQuery = userStatus => (
  {
    query: `
      mutation UpdateUserStatus($userStatus: String!) {
        updateStatus(status: $userStatus) {
          status
        }
      }
    `,
    variables: {
      userStatus: userStatus
    }
  }
);