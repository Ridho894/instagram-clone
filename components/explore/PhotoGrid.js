import React, { Fragment, useEffect, useState } from "react";
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";
import { db } from "../../firebase";

function PhotoGrid() {
  const [posts, setPosts] = useState([]);
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
            <img src={post.data().image} className={"h-full w-full"} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default PhotoGrid;
