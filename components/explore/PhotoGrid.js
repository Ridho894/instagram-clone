import React, { Fragment, useEffect, useState } from "react";
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";
import { db } from "../../firebase";
import ModalDetailPost from "../ModalDetailPost";

function PhotoGrid() {
  const [open, setOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [modalData, setModalData] = useState([]);
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
    <div className={"max-w-6xl mx-5 lg:mx-auto mt-8"}>
      <div className={"grid grid-cols-3 gap-x-10"}>
        {posts.map((post) => (
          <Fragment>
            <img
              src={post.data().image}
              onClick={() => {
                setOpen(true);
                setModalData(post.data());
              }}
              className={"h-full w-full"}
            />
            <ModalDetailPost
              open={open}
              data={modalData}
              close={() => setOpen(false)}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default PhotoGrid;
