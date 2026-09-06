import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { RadarTag } from "@/data/listings";

export type RadarFilter = "todos" | RadarTag;

type DeskState = {
  radar: RadarFilter;
  query: string;
  selectedId: string | null;
  watched: string[];
  setRadar: (radar: RadarFilter) => void;
  setQuery: (query: string) => void;
  select: (id: string | null) => void;
  toggleWatch: (id: string) => void;
};

export const useDesk = create<DeskState>()(
  persist(
    (set, get) => ({
      radar: "todos",
      query: "",
      selectedId: null,
      watched: [],
      setRadar: (radar) => set({ radar }),
      setQuery: (query) => set({ query }),
      select: (id) => set({ selectedId: id }),
      toggleWatch: (id) => {
        const watched = get().watched.includes(id)
          ? get().watched.filter((x) => x !== id)
          : [id, ...get().watched];
        set({ watched });
      },
    }),
    {
      name: "farol-desk",
      partialize: (s) => ({ watched: s.watched }),
    },
  ),
);
