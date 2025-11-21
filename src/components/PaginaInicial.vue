<template>
  <VContainer class="w-100 px-0">
    <VCard elevation="0" class="text-center">
      <VCardTitle class="text-h5 font-weight-bold justify-center">
        Programa
      </VCardTitle>
      <VCardItem>
        <VListItem>
          <VListItemTitle class="text-h6 font-weight-bold" :class="{ 'text-warning': isUpcoming('16:00') }">15h30
          </VListItemTitle>
          <VListItemSubtitle>Receção dos Convidados & Welcome Drink</VListItemSubtitle>
        </VListItem>
        <VListItem>
          <VListItemTitle class="text-h6 font-weight-bold"
            :class="{ 'text-warning': isAfter('16:00') && isUpcoming('16:30') }">16h00</VListItemTitle>
          <VListItemSubtitle>Boas-Vindas</VListItemSubtitle>
        </VListItem>
        <VListItem>
          <VListItemTitle class="text-h6 font-weight-bold"
            :class="{ 'text-warning': isAfter('16:30') && isUpcoming('17:00') }">16h30</VListItemTitle>
          <VListItemSubtitle>Discurso da Direção da Infordio & Corte da Fita</VListItemSubtitle>
        </VListItem>
        <VListItem>
          <VListItemTitle class="text-h6 font-weight-bold"
            :class="{ 'text-warning': isAfter('17:00') && isUpcoming('18:00') }">17h00</VListItemTitle>
          <VListItemSubtitle>Networking com Parceiros e Equipa, com demonstrações
            tecnológicas</VListItemSubtitle>
        </VListItem>
        <VListItem>
          <VListItemTitle class="text-h6 font-weight-bold"
            :class="{ 'text-warning': isAfter('18:00') && isUpcoming('18:55') }">18h00</VListItemTitle>
          <VListItemSubtitle>Corte do Bolo</VListItemSubtitle>
        </VListItem>
        <VListItem>
          <VListItemTitle class="text-h6 font-weight-bold" :class="{ 'text-warning': isAfter('18:55') }">19h00
          </VListItemTitle>
          <VListItemSubtitle>Encerramento</VListItemSubtitle>
        </VListItem>
      </VCardItem>
      <VCardText class="mt-4 pa-2">
        Um evento que celebra a tecnologia, a inovação e as parcerias que fazem parte

        da nossa história.

        Valorizamos o seu negócio — e queremos celebrá-lo consigo!
      </VCardText>
    </VCard>
    <VCard elevation="0" class="text-center position-absolute bottom-0 left-0 w-100">
      <VCardTitle class="font-weight-bold justify-center">
        Parceiros
      </VCardTitle>
      <VCardItem>

        <div :class="smAndDown ? 'mb-6' : ''" class="d-flex justify-center align-center flex-row flex-nowrap">
          <div v-for="(item, i) in items.slice(0, 8)" :key="i"
            style="flex: 0 0 12.5%; max-width: 12.5%; padding: 8px; display:flex; justify-content:center;">
            <VImg :src="item.src" />
          </div>
        </div>
      </VCardItem>
    </VCard>

  </VContainer>
</template>

<script setup>
import { useDisplay } from 'vuetify';

const { smAndDown } = useDisplay();

const items = [
  { src: new URL('../assets/logos/bizdocs.png', import.meta.url).href },
  { src: new URL('../assets/logos/sage.png', import.meta.url).href },
  { src: new URL('../assets/logos/Cegid.png', import.meta.url).href },
  { src: new URL('../assets/logos/Datalogic.png', import.meta.url).href },
  { src: new URL('../assets/logos/zonesoft.png', import.meta.url).href },
  { src: new URL('../assets/logos/Glory.png', import.meta.url).href },
  { src: new URL('../assets/logos/SmartDigit.png', import.meta.url).href },
  { src: new URL('../assets/logos/Verifone.png', import.meta.url).href },
];

const isUpcoming = (time) => {
  const [hours, minutes] = time.split(':').map(Number);
  const eventTime = new Date();
  eventTime.setHours(hours, minutes, 0);

  return new Date() < eventTime;
};

const isAfter = (time) => {
  const [hours, minutes] = time.split(':').map(Number);
  const eventTime = new Date();
  eventTime.setHours(hours, minutes, 0);

  return new Date() > eventTime;
};
</script>