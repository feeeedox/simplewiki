import { createHighlighter, bundledLanguages, type BundledLanguage } from 'shiki'

const languages = Object.keys(bundledLanguages).filter(
  (lang) =>
    lang !== 'mermaid' && !lang.includes('+') && !lang.includes('#') && !lang.includes('文'),
) as BundledLanguage[]

const highlighter = createHighlighter({
  themes: ['github-light', 'github-dark'],
  langs: languages,
})

export async function highlightCode(code: string, language: string): Promise<string> {
  const instance = await highlighter

  const lang = instance.getLoadedLanguages().includes(language) ? language : 'text'

  return instance.codeToHtml(code, {
    lang,
    themes: {
      light: 'github-light',
      dark: 'github-dark',
    },
  })
}
