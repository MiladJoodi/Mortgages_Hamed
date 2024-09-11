import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex h-screen items-center align-middle justify-center py-24">
      <SignIn path="/sign-in" />
    </div>
  );
}