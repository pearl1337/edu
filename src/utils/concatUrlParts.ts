export function concatUrlParts(
  base: string,
  ...parts: (string | number)[]
): string {
  const url = new URL(base);
  for (const part of parts) {
    url.pathname = url.pathname.endsWith("/")
      ? url.pathname + part
      : url.pathname + "/" + part;
  }

  return url.href;
}
