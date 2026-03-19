import { Card } from '../card/card'
import Icon from "../icon"
import styles from "./cards-container.module.css"
export default function Cards() {
    return (
        <div className={styles.container}>
            <div className={styles.started}>
                <div className={styles.get}>
                    <h1>Get</h1>
                </div>
                <h1>started</h1>
            </div>
            <div className={styles.cards}>
                <Card
                    title="Handbrook"
                    href="#"
                    icon={
                        <Icon
                            icon="material-symbols:book-outline-rounded"
                            color="var(--card-icons)"
                        />
                    }
                >
                    Learn the language <Icon icon="maki:arrow" />
                </Card>

                <Card
                    title="Playground"
                    href="#"
                    icon={
                        <Icon
                            icon="fe:terminal"
                            color="var(--card-icons)"
                        />
                    }
                >
                    Try in your browser <Icon icon="maki:arrow" />
                </Card>

                <Card
                    title="Download"
                    href="#"
                    icon={
                        <Icon
                            icon="material-symbols:download"
                            color="var(--card-icons)"
                        />
                    }
                >
                    Install Slynx <Icon icon="maki:arrow" />
                </Card>
            </div>
        </div>
    )
}