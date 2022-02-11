import { useEffect, useState } from "react";
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import { useSession } from "next-auth/react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "@firebase/firestore";
import { db } from "../../firebase";
import Moment from "react-moment";

function Post({
  idPosts,
  idLikes,
  username,
  userImg,
  img,
  caption,
  openModal,
}) {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);
  const [liked, setLiked] = useState(false);

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "posts", idPosts, "comments"),
          orderBy("timestamp", "desc")
        ),
        (snapshot) => setComments(snapshot.docs)
      ),
    [db, idPosts]
  );

  useEffect(
    () =>
      onSnapshot(collection(db, "posts", idPosts, "likes"), (snapshot) =>
        setLikes(snapshot.docs)
      ),
    [db, idPosts]
  );

  useEffect(() => {
    setHasLiked(
      likes.findIndex((like) => like.id === session?.user?.uid) !== -1
    );
  }, [likes]);

  const likeId = likes.map((like) => like.id);
  const hatePost = async () => {
    setLiked(false);
    const docRef = doc(db, `posts/${idPosts}/likes/${likeId[0]}`);
    await deleteDoc(docRef);
  };
  const likePost = async () => {
    // store like in firestore
    setLiked(true);
    await addDoc(
      collection(db, "posts", idPosts, "likes"),
      {
        username: session.user.username,
        liked: true,
        timestamp: serverTimestamp(),
      },
      session.user.uid
    );
  };
  const sendComment = async (e) => {
    e.preventDefault();
    const commentToSend = comment;
    setComment("");

    await addDoc(collection(db, "posts", idPosts, "comments"), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  };
  return (
    <div className={"bg-white my-7 border w-full rounded-sm"}>
      {/* Header */}
      <div className={"flex items-center p-5"}>
        <img
          src={userImg}
          className={"rounded-full h-12 w-12 object-contain border p-1 mr-3"}
          alt=""
        />
        <p className={"flex-1 font-bold"}>{username}</p>
        <DotsHorizontalIcon className={"h-5"} />
      </div>
      {/* Img */}
      <img src={img} className={"object-cover w-full"} />
      {/* Buttons */}
      {session && (
        <div className={"flex justify-between px-4 pt-4"}>
          <div className={"flex space-x-4"}>
            {liked ? (
              <HeartIconFilled
                onClick={hatePost}
                className={"btn text-red-500"}
              />
            ) : (
              <HeartIcon onClick={likePost} className={"btn"} />
            )}
            <ChatIcon className={"btn"} onClick={openModal} />
            <PaperAirplaneIcon className={"btn"} />
          </div>
          <BookmarkIcon className={"btn"} />
        </div>
      )}
      {/* Caption */}
      <p className={"p-5 truncate"}>
        {likes.length > 0 && (
          <p className={"font-bold mb-1"}>{likes.length} likes</p>
        )}
        <span className={"font-bold mr-1"}>{username} </span>
        {caption}
      </p>
      {/* Comments */}
      {comments.length > 0 && (
        <div
          className={
            "ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin"
          }
        >
          {comments.map((comment) => (
            <div
              key={comment.id}
              className={"flex items-center space-x-2 mb-3"}
            >
              <img
                src={comment.data().userImage}
                alt=".img"
                className={"h-7 rounded-full"}
              />
              <p className={"text-sm flex-1"}>
                <span className={"font-bold"}>{comment.data().username}</span>{" "}
                {comment.data().comment}
              </p>
              <Moment className={"pr-4 text-xs"} fromNow>
                {comment.data().timestamp?.toDate()}
              </Moment>
            </div>
          ))}
        </div>
      )}
      {/* Input Box */}
      {session && (
        <form className={"flex items-center p-4"}>
          <EmojiHappyIcon className={"h-7"} />
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className={"border-none flex-1 focus:ring-0 outline-none"}
            placeholder="Add a comment..."
          />
          <button
            disabled={!comment.trim()}
            onClick={sendComment}
            type="submit"
            className={"font-semibold text-blue-400"}
          >
            POST
          </button>
        </form>
      )}
    </div>
  );
}

export default Post;
