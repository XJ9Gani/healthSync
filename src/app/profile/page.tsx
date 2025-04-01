import SignUpForm from "@/components/registration/SignUpForm";
import GoogleIcon from "@/components/svg/GoogleIcon";
import { auth, signIn } from "@/config/auth";

export default async function Profile() {
  const session = await auth();

  const user = session?.user;
  return (
    <section className="h-screen pt-32">
      {user ? (
        <>
          <h1>Welcome , {user.name}!!!</h1>
        </>
      ) : (
        <>
          <SignUpForm />
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
              <GoogleIcon />{" "}
              <span className="font-medium text-lg">Sign In with Google</span>
            </button>
          </form>{" "}
        </>
      )}
    </section>
  );
}
