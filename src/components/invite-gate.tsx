import { type ReactNode, useEffect, useState } from "react";
import { Landing } from "@/components/landing";
import { useDesk } from "@/lib/store";

export function InviteGate({ children }: { children: ReactNode }) {
  const invited = useDesk((s) => s.invited);
  const setInvited = useDesk((s) => s.setInvited);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const done = () => setHydrated(true);
    const unsub = useDesk.persist.onFinishHydration(done);
    if (useDesk.persist.hasHydrated()) done();
    return unsub;
  }, []);

  if (!hydrated) {
    return <main className="min-h-[70vh] bg-bg" />;
  }
  if (!invited) {
    return <Landing onUnlock={() => setInvited(true)} />;
  }
  return <>{children}</>;
}
