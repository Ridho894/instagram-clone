import { useEffect, useState } from "react";
import Post from "./Post";
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";
import { db } from "../../firebase";
import ModalDetailPost from "../ModalDetailPost";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [modalData, setModalData] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
          openModal={() => {
            setOpen(true);
            // passing data to modal
            setModalData(post.data());
          }}
        />
      ))}
      <ModalDetailPost
        open={open}
        close={() => setOpen(false)}
        data={modalData}
      />
    </div>
  );
}

export default Posts;
