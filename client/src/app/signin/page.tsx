import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Input } from "@/components/ui/input";

const SignIn = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-tr from-blue-700 to blue-500">
      <Card className="w-[400px] ">
        <CardHeader>
          <CardTitle className=" flex justify-center items-center">
            Login
          </CardTitle>
          <CardDescription className=" flex justify-center items-center">
            Welcome Back!!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col space-y-2.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Email " />
            </div>
            <div className="flex flex-col space-y-2.5 mt-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="password " />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col justify-between">
          <Button
            className="w-full 
          bg-blue-500 hover:bg-blue-900 text-white
           hover:scale-105 transition-colors duration-300 ease-in-out"
          >
            Login
          </Button>
          <p className="text-muted-foreground mt-2 text-center text-sm">
            Don't have an account?{" "}
            <span className="text-Primary hover:underline">
              <Link href="/signup" className="text-blue-500 hover:underline">
                {" "}
                Sign Up
              </Link>
            </span>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignIn;
