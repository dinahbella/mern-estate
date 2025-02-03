import { Button } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

const SignIn = async () => {
  const { isAuthenticated, getUser } = await getKindeServerSession();
  const user = await getUser();

  if (await isAuthenticated())
    return (
      <div className="flex gap-3">
        <Button className=" bg-blue-500">
          <LoginLink>Sign in</LoginLink>
        </Button>
        <Button className=" bg-blue-500">
          <RegisterLink>Sign up</RegisterLink>
        </Button>
      </div>
    );
};
export default SignIn;
