import { db } from "./firebase.js";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment,
} from "firebase/firestore";

export async function incrementViewCount(slug) {
  const ref = doc(db, "views", slug);
  const snap = await getDoc(ref);

  if (snap.exists()) {
    await updateDoc(ref, {
      count: increment(1),
    });
  } else {
    await setDoc(ref, {
      count: 1,
    });
  }
}

export async function getViewCount(slug) {
  const ref = doc(db, "views", slug);
  const snap = await getDoc(ref);
  return snap.exists() ? snap.data().count : 0;
}

export async function getTotalViews() {
  const snapshot = await getDocs(collection(db, "views"));
  let total = 0;
  snapshot.forEach((doc) => {
    total += doc.data().count || 0;
  });
  return total;
}
