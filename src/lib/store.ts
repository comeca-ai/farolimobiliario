import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Brief } from "@/lib/brief";
import type { RadarTag } from "@/data/listings";
import type { Lead } from "@/lib/lead";

export type RadarFilter = "todos" | RadarTag;

type DeskState = {
  radar: RadarFilter;
  query: string;
  selectedId: string | null;
  watched: string[];
  brief: Brief | null;
  lead: Lead | null;
  showDesk: boolean;
  setRadar: (radar: RadarFilter) => void;
  setQuery: (query: string) => void;
  select: (id: string | null) => void;
  toggleWatch: (id: string) => void;
  setBrief: (brief: Brief) => void;
  setLead: (lead: Lead) => void;
  clearBrief: () => void;
  setShowDesk: (show: boolean) => void;
};

export const useDesk = create<DeskState>()(
  persist(
    (set, get) => ({
      radar: "todos",
      query: "",
      selectedId: null,
      watched: [],
      brief: null,
      lead: null,
      showDesk: false,
      setRadar: (radar) => set({ radar }),
      setQuery: (query) => set({ query }),
      select: (id) => set({ selectedId: id }),
      toggleWatch: (id) => {
        const watched = get().watched.includes(id)
          ? get().watched.filter((x) => x !== id)
          : [id, ...get().watched];
        set({ watched });
      },
      setBrief: (brief) => set({ brief, showDesk: false }),
      setLead: (lead) => set({ lead }),
      clearBrief: () => set({ brief: null, lead: null, showDesk: false }),
      setShowDesk: (showDesk) => set({ showDesk }),
    }),
    {
      name: "farol-desk",
      partialize: (s) => ({ watched: s.watched, brief: s.brief, lead: s.lead }),
    },
  ),
);
