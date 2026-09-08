declare module "cloudflare:workers" {
  export const env: {
    BROWSER?: {
      quickAction: (action: string, opts: Record<string, unknown>) => Promise<unknown>;
    };
    HARVEST_KEY?: string;
  };
}
