import React, { useState, useEffect, Fragment } from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import GridOnIcon from "@mui/icons-material/GridOn";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { Typography } from "@mui/material";
import { db } from "../../firebase";
import {
  onSnapshot,
  collection,
  query,
  orderBy,
  doc,
  deleteDoc,
} from "@firebase/firestore";
import { useSession } from "next-auth/react";
import { CameraIcon } from "@heroicons/react/outline";
import ModalActionPost from "../ModalActionPost";

const AntTabs = styled(Tabs)({
  borderBottom: "1px solid #e8e8e8",
  "& .MuiTabs-indicator": {
    backgroundColor: "black",
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const AntTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    minWidth: 100,
    [theme.breakpoints.up("sm")]: {
      minWidth: 40,
      // centering the tabs
      marginLeft: "auto",
      marginRight: "auto",
    },
    fontWeight: theme.typography.fontWeightRegular,
    // marginRight: theme.spacing(1),
    color: "#a1a1a1",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    // "&:hover": {
    //   color: "black",
    //   opacity: 1,
    // },
    "&.Mui-selected": {
      color: "black",
      fontWeight: theme.typography.fontWeightMedium,
    },
  })
);

export default function SlidePicture() {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(0);
  const [posts, setPosts] = useState([]);
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // function delete posts
  const deletePost = async (id) => {
    const docRef = doc(db, `posts/${id}`);
    await deleteDoc(docRef);
  };

  // get posts from firebase by username
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          // filter by username
          setLoading(true);
          const filteredPosts = snapshot.docs.filter(
            (doc) => doc.data().username === session.user.username
          );
          setPosts(filteredPosts);
          setLoading(false);
        }
      ),
    [db]
  );
  return (
    <Box className={"w-full mx-auto"}>
      <Box sx={{ bgcolor: "transparent" }}>
        <AntTabs value={value} variant="fullWidth" onChange={handleChange}>
          <AntTab
            iconPosition="start"
            icon={<GridOnIcon />}
            label="POSTS"
            index={0}
          />
          <AntTab
            iconPosition="start"
            icon={<BookmarkBorderIcon />}
            label="SAVED"
            index={1}
          />
          <AntTab
            iconPosition="start"
            icon={<PermContactCalendarIcon />}
            label="TAGGED"
            index={2}
          />
        </AntTabs>
        <TabPanel value={value} index={0}>
          <Box className={"flex flex-row"}>
            <div className={"grid grid-cols-3 gap-x-10"}>
              {posts.length > 0 ? (
                posts.map((post) => (
                  <Fragment>
                    <img
                      onClick={() => {
                        // delete
                        // deletePost(post.id);
                        setOpen(true);
                        setModalData(post.data());
                      }}
                      src={post.data().image}
                      className={"w-full h-full object-cover"}
                    />
                    <ModalActionPost
                      open={open}
                      close={() => setOpen(false)}
                      data={modalData}
                      handleDelete={() => deletePost(post.id)}
                    />
                  </Fragment>
                ))
              ) : (
                <div
                  className={
                    "flex items-center mx-auto justify-center place-self-center flex-col border-2 p-4 h-40 w-40 border-black rounded-full"
                  }
                >
                  <CameraIcon className={"h-10 self-center w-10"} />
                  <p>No posts yet</p>
                </div>
              )}
            </div>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
    </Box>
  );
}
