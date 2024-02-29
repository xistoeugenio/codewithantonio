"use client";

import { EmptyBoards } from "./empty-states/empty-boards";
import { EmptyFavorites } from "./empty-states/empty-favorites";
import { EmptySearch } from "./empty-states/empty-search";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

export const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = []; //TODO: change to API call

  if (!data?.length && query.search) {
    return <EmptySearch />;
  }

  if (!data?.length && query.favorites) {
    return <EmptyFavorites />;
  }

  if (!data?.length) {
    return <EmptyBoards />;
  }
  return <div>this</div>;
};
