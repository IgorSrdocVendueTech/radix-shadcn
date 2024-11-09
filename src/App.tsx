import { Checkbox } from "@/ui/atoms/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/molecules/dialog/Dialog";
import { useState } from "react";
import { SidebarLayout } from "./SidebarLayout";

export default function App() {
  const [isChecked, setIsChecked] = useState(false);

  return <SidebarLayout />;

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">Hello Shadcn!</h1>
        <br />
        <Checkbox
          label="Checkbox label"
          onCheckedChange={(checked: boolean) => {
            console.log("checked", checked);
            setIsChecked(!isChecked);
          }}
          checked={isChecked}
        />
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
