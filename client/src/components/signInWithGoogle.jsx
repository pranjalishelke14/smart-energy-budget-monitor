import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../firebase";
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";

function SignInwithGoogle() {
  const signIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      await setDoc(doc(db, "users", result.user.uid), {
        name: result.user.displayName,
        email: result.user.email,
      });

      toast.success("Google Sign-In Successful");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <button
      onClick={signIn}
      className="w-full mt-4 bg-red-500 text-white py-2 rounded"
    >
      Sign in with Google
    </button>
  );
}

export default SignInwithGoogle;
