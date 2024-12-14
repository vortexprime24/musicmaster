import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { UserIcon } from "lucide-react";

export default function HeaderButtons() {
  return (
    <div className="lg:items-center lg:gap-2 hidden lg:flex">
      <Button
        variant={"outline"}
        className="transition"
      >
        <UserIcon className="h-4 w-4" />
      </Button>
      <Button
        variant={"destructive"}
        className="group bg-yellow-600 hover:bg-yellow-600/70"
      >
        Book a free trial
        <ArrowRightIcon className="ml-1 h-4 w-4 group-hover:translate-x-1 transition" />
      </Button>
    </div>
  );
}
