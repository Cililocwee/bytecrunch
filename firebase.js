import { initializeApp } from "firebase/app";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
  addDoc,
  getDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import moment from "moment";

const firebaseConfig = {
  apiKey: "AIzaSyDAhYlyUV1n4ZUkEZrTgeeVlmDL9jvAhZ4",
  authDomain: "dev-blog-e4d2d.firebaseapp.com",
  projectId: "dev-blog-e4d2d",
  storageBucket: "dev-blog-e4d2d.appspot.com",
  messagingSenderId: "30990206536",
  appId: "1:30990206536:web:fca08d156be73c52effa7d",
  measurementId: "G-S3P3RVQC3Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// Initialize Firestore
const db = getFirestore(app);

const provider = new GoogleAuthProvider();

// --- CRUD FUNCTIONS --- //
// all blogs GET
export async function getBlogs(db) {
  const blogsCol = collection(db, "blogs");
  const blogsSnapshot = await getDocs(blogsCol);
  const blogsList = blogsSnapshot.docs.map((doc) => doc.data());
  const sortedBlogsList = blogsList.sort((a, b) =>
    moment(a.date_posted).diff(moment(b.date_posted))
  );
  // return blogsList;
  return sortedBlogsList;
}

// one blog GET
export async function getSpecificBlog(db, id) {
  const blogRef = doc(db, "blogs", id);
  const blogSnap = await getDoc(blogRef);
  const blogResult = blogSnap.data();

  return blogResult;
}

// blog POST
// TODO Unimplemented
export async function writeBlog(blogObj) {
  const db = getDatabase();
  await set(ref(db, "blogs/" + blogObj.id), {
    title: blogObj.title,
    content: blogObj.content,
    date_posted: blogObj.date_posted,
  });
}

// all comments GET
export async function getComments(db, id) {
  const q = query(
    collection(db, "comments"),
    where("associated_blog", "==", id)
  );
  const commentSnap = await getDocs(q);

  return commentSnap.docs.map((doc) => doc.data());
}

// one comment POST
// TODO Unimplemented
export async function writeComment(commentObj) {
  await setDoc(doc(db, "comments", crypto.randomUUID()), {
    username: auth.currentUser.displayName,
    profile_pic_url: commentObj.photoURL,
    comment_body: commentObj.comment_body,
    date_posted: commentObj.date_posted,
    associated_blog: commentObj.associated_blog,
  })
    .then(() => alert("Posted"))
    .catch((err) => console.log(err));
}

// --- GOOGLE AUTH --- //
// Proper signInWithGoogle
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, provider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    // alert(err.message);
  }
};

// Logout
const logout = async () => {
  signOut(auth);
};

export { auth, db, signInWithGoogle, logout };
