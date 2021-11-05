import dayjs from 'dayjs';
import React from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
} from '@ionic/react';
import { calculateBiorhythyms } from '../calculations';
import BioChart from './BioChart'
import './BiorhythmCard.css';

function formatDate(isoString) {
  return dayjs(isoString).format('MMM-DD-YYYY');
}


function BiorhythmCard({ dateOfBirth, targetDate }) {
  //console.log(targetDate);
  const { physical, emotional, intellectual } = calculateBiorhythyms(dateOfBirth, targetDate);
  return (
    <IonCard className="biorhythm-card ion-text-center">
      <IonCardHeader>
        <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>

        <BioChart dateOfBirth={dateOfBirth} targetDate={targetDate} />

        <p className="phy">Physical: {physical.toFixed(4)}</p>
        <p className="emo">Emotional: {emotional.toFixed(4)}</p>
        <p className="int">Intelectual: {intellectual.toFixed(4)}</p>
      </IonCardContent>
    </IonCard>
  )

}

export default BiorhythmCard;