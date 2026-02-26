// mdx-components.tsx  (raiz do projeto, junto com next.config.ts)
import type { MDXComponents } from "mdx/types"
import { DocsSection, DocsCodeBlock } from "./src/app/components/docs/DocsContent"
import styles from "./src/app/components/docs/DocsContent.module.css"

/**
 * Mapeia as tags MDX para os componentes estilizados das docs.
 * ## vira DocsSection, ``` vira DocsCodeBlock, p vira parágrafo estilizado.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children, id }) => (
      <DocsSection id={id ?? ""} title={String(children)}>
        {null}
      </DocsSection>
    ),
    p: ({ children }) => (
      <p className={styles.paragraph}>{children}</p>
    ),
    pre: ({ children }) => (
      <DocsCodeBlock code={String((children as any)?.props?.children ?? "")} />
    ),
    ...components,
  }
}