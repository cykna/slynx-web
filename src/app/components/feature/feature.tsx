import { ReactNode } from "react"
import Image from "next/image"
import styles from "./feature.module.css"

type FeatureProps = {
  title: string,
  iconSrc: string,
  children: ReactNode
}

export default function Feature({
  title,
  iconSrc,
  children
}: FeatureProps) {
  return (
    <div className={styles.feature}>
      <div>
        <Image
          src={iconSrc}
          alt=""
          width={48}
          height={48}
        />
      </div>

      <h3 className={styles.featureTitle}>{title}</h3>
      
      <div className={styles.featureText}>{children}</div>
    </div>
  )
}
