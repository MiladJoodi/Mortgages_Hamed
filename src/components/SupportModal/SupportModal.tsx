"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SupportModal({children}:{children:React.ReactNode}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white dark:bg-gray-200">
        <DialogHeader>
          <div className="flex items-center gap-2">
          <span className="relative flex size-2 ml-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex size-2 rounded-full bg-teal-500"></span>
                </span>
                <DialogTitle>Start Online Support</DialogTitle>
          </div>
          
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              placeholder="joodi"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              placeholder="info@eaxmple.com"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button className="dark:bg-gray-700 dark:text-white" type="submit">Start Chat</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
