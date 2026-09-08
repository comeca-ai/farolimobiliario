import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Brief } from "@/lib/brief";
import type { RadarTag } from "@/data/listings";
import type { Lead } from "@/lib/lead";

export type JobHint = "airbnb" | "abaixo";

export type Draft = {
  email: string;
  whatsapp: string;
  job: JobHint;
};

export type RadarFilter = "todos" | RadarTag;

type DeskState = {
  radar: RadarFilter;
  query: string;
  selectedId: string | null;
  watched: string[];
  brief: Brief | null;
  lead: Lead | null;
  draft: Draft;
  showDesk: boolean;
  /** Ephemeral: header Entrar opens cadastro on /. Not persisted. */
  enterIntent: boolean;
  setRadar: (radar: RadarFilter) => void;
  setQuery: (query: string) => void;
  select: (id: string | null) => void;
  toggleWatch: (id: string) => void;
  setBrief: (brief: Brief) => void;
  setLead: (lead: Lead) => void;
  setDraft: (draft: Partial<Draft>) => void;
  clearBrief: () => void;
  signOut: () => void;
  setShowDesk: (show: boolean) => void;
  requestEnter: () => void;
  consumeEnterIntent: () => boolean;
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
      draft: { email: "", whatsapp: "", job: "airbnb" },
      showDesk: false,
      enterIntent: false,
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
      setDraft: (draft) => set({ draft: { ...get().draft, ...draft } }),
      clearBrief: () => set({ brief: null, showDesk: false }),
      signOut: () =>
        set({
          lead: null,
          brief: null,
          showDesk: false,
          selectedId: null,
          query: "",
          radar: "todos",
          enterIntent: false,
        }),
      setShowDesk: (showDesk) => set({ showDesk }),
      requestEnter: () => set({ enterIntent: true, showDesk: false }),
      consumeEnterIntent: () => {
        if (!get().enterIntent) return false;
        set({ enterIntent: false });
        return true;
      },
    }),
    {
      name: "farol-desk-v3",
      partialize: (s) => ({
        watched: s.watched,
        brief: s.brief,
        lead: s.lead,
        draft: s.draft,
      }),
    },
  ),
);
