const SALT = "farolqueprotege";

const HASHES = new Set([
  "d34971a12cba526681231274c3f5c8442d9d3b181b49a58f8fe720becd532343",
  "1e86ea50cbc4410f7a3e316a5d947e777bbcda895dd25b20e51167d31e14d55d",
  "0415eeefa7df1c4e728f99cf71dfaa19e712ca9e0d67f0d1db1633f1a8b72366",
]);

export function normalizeInvite(raw: string) {
  const t = raw.trim();
  try {
    const u = new URL(t);
    if (u.protocol === "mailto:" && u.pathname) {
      return u.pathname.toLowerCase();
    }
    const parts = u.pathname.split("/").filter(Boolean);
    const fromPath = parts[0] === "c" ? parts[1] : parts.at(-1);
    if (fromPath) return fromPath.toLowerCase();
  } catch {
    /* not a URL */
  }
  return t.toLowerCase().replace(/\s+/g, "").replace(/^\/c\//, "");
}

export async function inviteMatches(raw: string): Promise<boolean> {
  const n = normalizeInvite(raw);
  if (n.length < 6) return false;
  const hex = await sha256(`${SALT}:${n}`);
  return HASHES.has(hex);
}

async function sha256(text: string) {
  const data = new TextEncoder().encode(text);
  const buf = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}
