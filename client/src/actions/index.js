export const selectUser = (user) => {
  console.log("You selected on user: ", user.first);
  return {
    type: "USER_SELECTED",
    payload: user
  }
}; 