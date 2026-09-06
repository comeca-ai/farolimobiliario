import { useEffect, useRef, useState } from "react";

export function Typewriter({
  text,
  onDone,
}: {
  text: string;
  onDone?: () => void;
}) {
  const [n, setN] = useState(0);
  const doneRef = useRef(false);
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    setN(0);
    doneRef.current = false;
  }, [text]);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const finish = () => {
      if (doneRef.current) return;
      doneRef.current = true;
      onDoneRef.current?.();
    };

    if (reduce) {
      setN(text.length);
      finish();
      return;
    }
    if (n >= text.length) {
      finish();
      return;
    }
    const step = text[n] === " " ? 8 : 16;
    const t = window.setTimeout(() => setN((x) => x + 1), step);
    return () => window.clearTimeout(t);
  }, [n, text]);

  const done = n >= text.length;

  return (
    <p className="font-display text-xl leading-snug text-fg md:text-2xl">
      {text.slice(0, n)}
      {done ? null : <span className="caret" aria-hidden />}
    </p>
  );
}
