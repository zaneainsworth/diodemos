<template>
  <VContainer fluid class="pa-4">
    <VRow justify="center">
      <VCol cols="12" md="10" lg="8">
        <VCard elevation="0" class="pa-2">
          <VCardTitle class="justify-center">
            <VImg :src="diobook" alt="DioBook Logo" class="mx-auto" contain :width="smAndDown ? '' : 500" />
          </VCardTitle>

          <VCardText class="mt-2 pa-0">
            O software <b>DioBook</b>, desenvolvido pela <b>INFORDIO</b>, é uma solução de agendamento online que
            permite gerir
            marcações de forma simples e eficiente, a partir de qualquer lugar. Cada colaborador tem acesso individual e
            pode gerir marcações com funcionalidades como listas de espera, gestão de salas, CRM e envio de SMS, entre
            outros.
          </VCardText>

          <VCardText class="mt-2 pa-0">
            Ideal para ginásios, cabeleireiros, clínicas de fisioterapia e outros serviços por marcação, o
            <b>DioBook</b>
            integra-se com o software de faturação, facilitando a gestão administrativa e financeira.
          </VCardText>

          <VCardTitle class="mt-4 pa-0 text-center font-weight-bold">
            Video
          </VCardTitle>

          <VRow class="mt-4">
            <VCol cols="12" md="8" class="mx-auto">
              <VVideo :volume="50" class="mx-auto" controls-variant="tube" density="comfortable" :image="diobook"
                rounded="lg" :src="appdiobook1" track-color="green" hide-fullscreen hide-volume muted fluid>
              </VVideo>
            </VCol>
          </VRow>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script setup>

import { useDisplay } from "vuetify";

import diobook from "@/assets/logos/diobook.png";
import appdiobook1 from "@/assets/appdiobook1.mp4";

const { smAndDown } = useDisplay();
</script>