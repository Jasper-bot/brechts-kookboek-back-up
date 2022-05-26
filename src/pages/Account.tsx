import {
    IonButton,
    IonContent,
    IonGrid,
    IonHeader, IonIcon,
    IonItem, IonLabel,
    IonPage,
    IonRouterLink,
    IonRow,
    IonTitle,
    IonToggle,
} from '@ionic/react';
import styles from "./Account.module.css";
import React, { useEffect, useState } from "react";
import { auth } from '../firebase/firebase.utils.js';
import Header from "../components/Header";
import {useAuth} from "../auth";
import {moon} from "ionicons/icons";
import { useSession, CombinedDataProvider, Text, LogoutButton } from "@inrupt/solid-ui-react";

const Account: React.FC = () => {
    const { session, sessionRequestInProgress } = useSession();

    // useEffect(() => {
    //     if (!sessionRequestInProgress) {
    //         setTest("done");
    //     }
    // },[sessionRequestInProgress])

    const toggleDarkModeHandler = () => {
        document.body.classList.toggle("dark");
    };

    return (
        <IonPage>
            <IonHeader>
                <Header />
            </IonHeader>
                {session.info.isLoggedIn ? (
                <IonContent fullscreen>
                <IonTitle class="ion-padding-vertical">Welcome, </IonTitle>
                    <CombinedDataProvider datasetUrl={ session.info.webId} thingUrl={ session.info.webId}>
                        <Text properties={[
                            "http://www.w3.org/2006/vcard/ns#fn",
                            "http://xmlns.com/foaf/0.1/name",
                        ]} />
                    </CombinedDataProvider>

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
                        <LogoutButton>
                            <IonButton fill="clear" color="dark"  routerLink="/login" className={styles.logout}>logout</IonButton> 
                        </LogoutButton>
                    </IonRow>
                </IonGrid>
                </IonContent>
                ) : (
                    
                    <IonContent fullscreen>
                        <div>Not logged in, please <IonRouterLink href='/login'>relogin</IonRouterLink> </div>
                    </IonContent>
                )};
        </IonPage>
    );
};

export default Account;
