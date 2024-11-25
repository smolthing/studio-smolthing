import Link from "next/link";
import { Form } from "@/app/common/form/Form";
import { signIn } from "app/auth";
import { SubmitButton } from "@/app/common/form/SubmitButton";
import LinkToHome from "../common/components/LinkToHome";

export default function Login() {
  return (
    <>
      <LinkToHome />
      <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-violet-200 to-pink-200">
        <div className="z-10 w-3/4 max-w-md overflow-hidden border border-gray-100 shadow-xl min-w-80 bg-white">
          <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white py-4 text-center sm:px-10">
            <h3 className="text-xl font-semibold">Helloworld</h3>
          </div>
          <Form
            action={async (formData: FormData) => {
              "use server";
              await signIn("credentials", {
                redirectTo: "/protected",
                email: formData.get("email") as string,
                password: formData.get("password") as string,
              });
            }}
          >
            <SubmitButton>Login</SubmitButton>
            <p className="text-center text-sm text-gray-600">
              {"Don't have an account? "}
              <Link
                href="/register"
                className="font-semibold text-custom-pink hover:text-custom-yellow"
              >
                Sign up
              </Link>
            </p>
          </Form>
        </div>
      </div>
    </>
  );
}
