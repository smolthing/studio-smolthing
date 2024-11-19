import Link from "next/link";
import { Form } from "@/app/common/form/Form";
import { redirect } from "next/navigation";
import { createUser, getUser } from "app/db";
import { SubmitButton } from "@/app/common/form/SubmitButton";
import LinkToHome from "../common/components/LinkToHome";

export default function Login() {
  async function register(formData: FormData) {
    "use server";
    let email = formData.get("email") as string;
    let password = formData.get("password") as string;
    let user = await getUser(email);

    if (user.length > 0) {
      return "User already exists"; // TODO: Handle errors with useFormStatus
    } else {
      await createUser(email, password);
      redirect("/login");
    }
  }

  return (
    <>
      <LinkToHome />
      <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
        <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl min-w-80">
          <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-4 text-center sm:px-16">
            <h3 className="text-xl font-semibold">Create a new account</h3>
          </div>
          <Form action={register}>
            <SubmitButton>Sign Up</SubmitButton>
            <p className="text-center text-sm text-gray-600">
              {"Already have an account? "}
              <Link
                href="/login"
                className="font-semibold text-custom-green hover:text-custom-pink"
              >
                Sign in
              </Link>
            </p>
          </Form>
        </div>
      </div>
    </>
  );
}
