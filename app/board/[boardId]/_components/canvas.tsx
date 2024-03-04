"use client";

import { Info } from "./info";
import { Toolbar } from "./toolbar";
import { Participants } from "./participants";

import { useSelf } from "@/liveblocks.config";

interface CanvasProps {
  boardId: string;
}

export const Canvas = ({ boardId }: CanvasProps) => {
  const info = useSelf((me) => me.info);

  console.log(info)
  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none">
      <Info />
      <Participants />
      <Toolbar />
    </main>
  );
};
