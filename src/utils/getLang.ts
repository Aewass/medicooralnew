/**
 * Utility function to get the current language from a URL path
 * Returns 'en' for English paths, 'bs' for Bosnian (default)
 */
export function getLang(pathname: string): "en" | "bs" {
  if (
    pathname &&
    typeof pathname === "string" &&
    pathname.indexOf("/en") === 0
  ) {
    return "en";
  }
  return "bs";
}
