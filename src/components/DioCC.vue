<template>
  <VContainer fluid class="pa-4">
    <VRow justify="center">
      <VCol cols="12" md="10" lg="8">
        <VCard elevation="0" class="pa-2">
          <VCardTitle class="justify-center">
            <VImg :src="diocc" alt="DioCC Logo" class="mx-auto" contain :width="smAndDown ? '' : 500" />
          </VCardTitle>

          <VCardText class="mt-2 pa-0">
            O software DioCC, desenvolvido pela <b>INFORDIO</b>, permite consultar online a sua conta corrente do
            <b>SAGE</b>
            ou <b>PHC</b>,
            de forma prática e segura. Foi pensado para que a sua empresa, os seus clientes e vendedores acedam
            rapidamente aos documentos essenciais.
          </VCardText>

          <VCardText class="mt-2 pa-0">
            Inclui portais dedicados à administração, clientes e vendedores, todos integrados através de um conector
            desenvolvido pela <b>INFORDIO</b>.
          </VCardText>

          <VCardTitle class="mt-4 pa-0 text-center font-weight-bold">
            Video
          </VCardTitle>

          <VRow class="mt-4">
            <VCol cols="12" md="8" class="mx-auto" :style="{ objectFit: 'cover' }">
              <VVideo :volume="50" class="mx-auto" controls-variant="tube" density="comfortable" :image="diocc"
                rounded="lg" :src="appcc1" track-color="green" eager>
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

import diocc from "@/assets/logos/diocc.png";
import appcc1 from "@/assets/appcc1.mp4";

const { smAndDown } = useDisplay();
</script>