export function safeScrollTo(
  options: ScrollToOptions | number,
  y?: number
): void {
  if (typeof window === "undefined") return;

  try {
    if (typeof options === "number") {
      window.scrollTo(options, y ?? 0);
      return;
    }

    const { top = 0, left = 0, behavior } = options;
    // Strictly sanitize behavior: WebKit / Safari only supports "auto" | "smooth".
    // Passing "instant" throws a fatal TypeError in WebKit / iOS Safari.
    const safeBehavior: ScrollBehavior = behavior === "smooth" ? "smooth" : "auto";

    window.scrollTo({
      top,
      left,
      behavior: safeBehavior,
    });
  } catch {
    try {
      window.scrollTo(0, 0);
    } catch {
      // Silently catch in restricted environments
    }
  }
}
