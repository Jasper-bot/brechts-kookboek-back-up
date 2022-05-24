import {
    IonButton,
    IonContent,
    IonGrid,
    IonHeader, IonIcon,
    IonItem, IonLabel,
    IonPage,
    IonRow,
    IonTitle,
    IonToggle,
} from '@ionic/react';
import styles from "./Account.module.css";
import React from "react";
import { auth } from '../firebase/firebase.utils.js';
import Header from "../components/Header";
import {useAuth} from "../auth";
import {moon} from "ionicons/icons";

const Account: React.FC = () => {
    const { userName } = useAuth();
    const toggleDarkModeHandler = () => {
        document.body.classList.toggle("dark");
    };
    return (
        <IonPage>
            <IonHeader>
                <Header />
            </IonHeader>
            <IonContent fullscreen>
                <IonTitle>Welcome {userName}</IonTitle>
                <IonItem>
                    <IonIcon slot="start" icon={moon} />
                    <IonLabel>Dark Mode</IonLabel>
                    <IonToggle
                        slot="end"
                        name="darkMode"
                        onIonChange={toggleDarkModeHandler}
                    />
                </IonItem>
                <IonGrid>
                    <IonRow class="ion-justify-content-center">
                        <IonButton fill="clear" color="dark"  routerLink="/login" className={styles.logout}>logout</IonButton>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Account;
