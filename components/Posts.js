import Post from "./Post";

const DUMMY_DATA = [
  {
    id: "123",
    username: "Vinct",
    userImg:
      "https://img.freepik.com/free-photo/surprised-happy-bearded-man-shirt-pointing-away_171337-5021.jpg?size=338&ext=jpg",
    img: "https://img.freepik.com/free-photo/surprised-happy-bearded-man-shirt-pointing-away_171337-5021.jpg?size=338&ext=jpg",
    caption: "This is test",
  },
  {
    id: "123",
    username: "Deck",
    userImg:
      "https://img.freepik.com/free-photo/surprised-happy-bearded-man-shirt-pointing-away_171337-5021.jpg?size=338&ext=jpg",
    img: "https://img.freepik.com/free-photo/surprised-happy-bearded-man-shirt-pointing-away_171337-5021.jpg?size=338&ext=jpg",
    caption: "This is test",
  },
];

function Posts() {
  return (
    <div>
      {DUMMY_DATA.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
