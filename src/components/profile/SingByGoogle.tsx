import { signIn } from "next-auth/react";
import GoogleIcon from "../svg/GoogleIcon";

function SingByGoogle() {
  return (
    <form
      action={async () => {
        "use server";

        await signIn("google", { callbackUrl: "/questionnaire" });
      }}
    >
      <button
        type="submit"
        className="border border-gray-500 mx-auto w-1/5 py-2 shadow-md rounded-lg flex items-center justify-center gap-3 cursor-pointer hover:shadow-xl transition-all duration-200"
      >
        <GoogleIcon />
        <span className="font-medium text-lg">Sign In with Google</span>
      </button>
    </form>
  );
}

export default SingByGoogle;
