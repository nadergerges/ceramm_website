import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

import { TILES, type TileDef } from "./tiles-data";

interface CerammSelection {
  tile: TileDef;
  selectTile: (id: string) => void;
  /** Select a tile and bring a section into view (e.g. explorer or studio). */
  selectTileAnd: (id: string, anchor: string) => void;
  roomId: string;
  setRoomId: (id: string) => void;
}

const CerammContext = createContext<CerammSelection | null>(null);

export function CerammProvider({ children }: { children: ReactNode }) {
  const [tileId, setTileId] = useState(TILES[0].id);
  const [roomId, setRoomId] = useState("kitchen");

  const selectTile = useCallback((id: string) => {
    setTileId((current) => (TILES.some((t) => t.id === id) ? id : current));
  }, []);

  const selectTileAnd = useCallback(
    (id: string, anchor: string) => {
      selectTile(id);
      if (typeof document !== "undefined") {
        document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    [selectTile],
  );

  const value = useMemo<CerammSelection>(() => {
    const tile = TILES.find((t) => t.id === tileId) ?? TILES[0];
    return { roomId, selectTile, selectTileAnd, setRoomId, tile };
  }, [tileId, roomId, selectTile, selectTileAnd]);

  return <CerammContext.Provider value={value}>{children}</CerammContext.Provider>;
}

export function useCeramm(): CerammSelection {
  const ctx = useContext(CerammContext);
  if (!ctx) throw new Error("useCeramm must be used inside CerammProvider");
  return ctx;
}
