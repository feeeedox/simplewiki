let idCounter = 0;
let queue = Promise.resolve();

import mermaid from "mermaid";

export type MermaidTheme = "light" | "dark";
export function renderMermaid(source: string, theme: MermaidTheme = "light"): Promise<string> {
  const p = queue.then(async () => {
    mermaid.initialize({
      startOnLoad: false,
      theme: theme === "dark" ? "dark" : "default",
      securityLevel: "strict",
    });

    const id = `mermaid-r${++idCounter}`;

    try {
      const result = await mermaid.render(id, source);

      return result.svg.replace(/\s+width="[^"]*"/, "").replace(/\s+height="[^"]*"/, "");
    } finally {
      document.getElementById(id)?.remove();
      document.getElementById(`d${id}`)?.remove();
    }
  });

  queue = p.then(
    () => undefined,
    () => undefined,
  );

  return p;
}
