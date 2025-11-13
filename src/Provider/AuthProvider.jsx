import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.init";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Create new user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // ✅ Sign in existing user
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // ✅ Google Sign-in
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // ✅ Log out
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // ✅ Update name & photo and refresh immediately
  const updateUserProfile = async (name, photoURL) => {
    if (!auth.currentUser) throw new Error("No user logged in");

    await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });

    // 🔥 Force reload user to get fresh profile info
    await auth.currentUser.reload();

    const refreshedUser = auth.currentUser;
    setUser({
      uid: refreshedUser.uid,
      email: refreshedUser.email,
      displayName: refreshedUser.displayName,
      photoURL: refreshedUser.photoURL,
    });
  };

  // ✅ Listen to Firebase auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({
          uid: currentUser.uid,
          email: currentUser.email,
          displayName: currentUser.displayName,
          photoURL: currentUser.photoURL,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // ✅ Provide context
  const authInfo = {
    createUser,
    signInUser,
    signInWithGoogle,
    signOutUser,
    updateUserProfile,
    user,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
