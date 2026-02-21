import styles from "./article.module.css"

export default function Article({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <article className={styles.article}>
      <h1 className={styles.title}>
        {title}
      </h1>

      <hr className={styles.divider} />

      <div className={styles.content}>
        {children}
      </div>
    </article>
  )
}