import { CalendarIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export const HoverCardComponent = ({
  Trigger,
  Title,
  Content,
  Destination,
  PageColour,
}) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button asChild>
          <a class={`hover:underline ${ PageColour }`} href={ Destination }>{ Trigger }</a>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 bg-mantle border-none rounded-xl">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <h4 className={`text-sm font-semibold ${ PageColour }`}>{Title}</h4>
            <p className="text-sm">{Content}</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
