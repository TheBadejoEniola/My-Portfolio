/**
 * logo.dev image helper.
 * Set NEXT_PUBLIC_LOGODEV_TOKEN in .env.local.
 */
const TOKEN = process.env.NEXT_PUBLIC_LOGODEV_TOKEN ?? "";

export const hasLogoToken = TOKEN.length > 0;

export function logoUrl(domain: string, size = 32): string {
  const params = new URLSearchParams({
    token: TOKEN,
    size: String(size * 2),
    format: "png",
    retina: "true",
  });
  return `https://img.logo.dev/${domain}?${params.toString()}`;
}
