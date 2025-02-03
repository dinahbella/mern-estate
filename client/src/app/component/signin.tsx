import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const signInPanel = async () => {
  await getKindeServerSession();
};
