import fetch from "node-fetch";

const getPosts = async (userId: number) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}/posts`
    );
    const posts: any = await response.json();
    // Do some cleanup; remove UserID from post since it's not really needed
    const cleanedPosts = posts.map((post) => {
      delete post["userId"];
      return post;
    });
    return cleanedPosts;
  } catch (e) {
    // Log error in some kind of Error Logging Service, here we just do console log
    console.log(e);
    // Send a meaningful but non-technical error message back to the end-user
    throw Error("Error while fetching Posts!");
  }
};

const getPostWrapper = async () => {
  const result = await getPosts(1);
  return result;
};

export default getPostWrapper;