import { Card } from '@/app/components/card/card'
import  Icon  from "@/app/components/icon"
import styles from "./cards-container.module.css"
export default function Cards() {
    return (
        <>
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
                icon={<Icon icon='material-symbols:book-outline-rounded' width={60} height={60} />}
            >
                Learn the language <Icon icon='maki:arrow'></Icon>
            </Card>
            <Card
                title="Playground"
                href="#"
                icon={<Icon icon='fe:terminal' width={60} height={60} />}
            >
                Try in your browser <Icon icon='maki:arrow'></Icon>
            </Card>
            <Card
                title="Download"
                href="#"
                icon={<Icon icon='material-symbols:download' width={60} height={60} />}
            >
                Install Slynx <Icon icon='maki:arrow'></Icon>
            </Card> 
        </div>
        </>
    )
}