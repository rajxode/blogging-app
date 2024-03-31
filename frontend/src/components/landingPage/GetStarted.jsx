
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Login from "./Login";
import SignUp from "./SignUp";

function GetStarted() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full">
          Get Started
        </Button>
      </DialogTrigger>
      <DialogContent className="w-fit">
        <Tabs defaultValue="signin" className="w-[400px] mt-2">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
            <Login />
          </TabsContent>
          <TabsContent value="signup">
            <SignUp />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}

export default GetStarted;
