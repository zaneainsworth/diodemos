<template>
  <VContainer fluid class="pa-4">
    <VRow justify="center">
      <VCol cols="12" md="10" lg="8">
        <VCard elevation="0" class="pa-2">
          <VCardTitle>
            <VImg class="ma-auto" :src="diostoreconnect" alt="DioStoreConnect Logo" width="300" contain />
          </VCardTitle>

          <VCardText class="mt-2 pa-0">
            O software DioStoreConnect é um conector para lojas de comércio online <b>Prestashop</b> ou
            <b>Woocommerce</b>, que
            integra de forma rápida e segura todas as transações online diretamente com o seu software de faturação
            <b>SAGE</b>.
          </VCardText>

          <VCardTitle class="mt-4 pa-0 text-center font-weight-bold">
            Galeria de Imagens
          </VCardTitle>


          <VRow class="mt-4">
            <VCol cols="12" md="8" class="mx-auto" @click="open(0)">
              <VImg :src="storeconnect1" alt="App screenshot" class="screenshot" cover />
            </VCol>
          </VRow>
        </VCard>
      </VCol>
    </VRow>
    <VOverlay v-model="overlay" class="gallery-overlay" persistent>
      <div class="gallery-container">
        <VBtn icon="mdi-close" density="compact" class="gallery-close" @click="overlay = false" />

        <!-- Carousel -->
        <VCarousel v-model="current" hide-delimiters class="gallery-carousel" :show-arrows="false">
          <VCarouselItem v-for="(item, i) in items" :key="i">
            <div class="gallery-slide">
              <VImg :src="item.src" cover class="gallery-image" width="1000" />

              <div class="gallery-caption">
                {{ item.caption }}
              </div>
            </div>
          </VCarouselItem>
        </VCarousel>
      </div>
    </VOverlay>
  </VContainer>
</template>

<script setup>
import { ref } from "vue";
import diostoreconnect from "@/assets/logos/diostoreconnect.png";
import storeconnect1 from "@/assets/diostoreconnect1.png";
const overlay = ref(false);
const current = ref(0);

function open(i) {
  current.value = i;
  overlay.value = true;
}

const items = [
  {
    src: new URL("@/assets/diostoreconnect1.png", import.meta.url).href,
    caption: "Página Inicial",
  },
];
</script>