import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  IonDatetime,
} from '@ionic/react';

import React, { useState } from 'react';
import BiorhythmCard from './components/BiorhythmCard';
import { useLocalStorage } from './hooks';

function App() {

  const [dateOfBirth, setDateOfBirth] = useLocalStorage('dateOfBirth', '');
  const [targetDate, setTargetDate] = useState(new Date().toISOString());

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorythns</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {dateOfBirth &&
          <BiorhythmCard dateOfBirth={dateOfBirth} targetDate={targetDate} />
        }
        <IonItem>
          <IonLabel position="fixed">Date of Birth:</IonLabel>
          <IonDatetime displayFormat="MMM-DD-YYYY"
            value={dateOfBirth}
            onIonChange={(event) => setDateOfBirth(event.detail.value)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="fixed">target date:</IonLabel>
          <IonDatetime displayFormat="MMM-DD-YYYY"
            value={targetDate}
            onIonChange={(event) => setTargetDate(event.detail.value)}
          />
        </IonItem>

      </IonContent>
    </IonApp>
  );
}

export default App;
