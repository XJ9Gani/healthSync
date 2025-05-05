import SignedInProfile from "@/components/profile/SignedInProfile";
import SignUpForm from "@/components/registration/SignUpForm";
import GoogleIcon from "@/components/svg/GoogleIcon";

import { auth, signIn } from "@/components/userFromStorage/config/auth";

// const submitDataByGoogle = async (user: {
//   name: string;
//   email: string;
//   image: string;
// }) => {
//   try {
//     const response = await axios.post("http://localhost:5000/users", user);
//   } catch (e) {
//     console.log(e);
//   }
// };

export default async function Profile() {
  const session = await auth();

  const user = session?.user;
  const safeUser = user
    ? {
        name: user.name ?? "Unknown User",
        email: user.email ?? "no-email@example.com",
        image: user.image ?? "",
      }
    : null;

  return (
    <section className="h-screen pt-32">
      {user ? (
        <>
          <SignedInProfile user={safeUser} />
        </>
      ) : (
        <>
          <SignUpForm />
          <hr className="mb-10 w-1/4 mx-auto" />
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
        </>
      )}
    </section>
  );
}
