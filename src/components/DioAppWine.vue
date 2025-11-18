<template>
  <VContainer fluid class="pa-4">
    <VRow justify="center">
      <VCol cols="12" md="10" lg="8">
        <VCard elevation="0" class="pa-2">
          <VCardTitle class="justify-center">
            <VImg :src="dioappwine" alt="DioAppWine Logo" class="logo" contain />
          </VCardTitle>

          <VCardText class="mt-2 pa-0">
            O <b>DioAppWine</b> desenvolvido pela <b>INFORDIO</b> é uma aplicação intuitiva para o setor da restauração
            e hotelaria, compatível com smartphone e tablet. Permite gerir vinhos com toda a informação relevante e
            criar uma carta digital personalizada com entradas, pratos, sobremesas e bebidas.
          </VCardText>

          <VCardText class="mt-2 pa-0">
            Para uma gestão mais eficiente, inclui um conector com a plataforma <b>Prestashop</b>, que sincroniza
            automaticamente
            os vinhos com a loja online, assegurando consistência e rapidez na atualização da oferta.
          </VCardText>

          <VCardItem class="d-flex justify-center mt-4">
            <VBtn class="app-button" @click="openApp" large>
              Testar Aplicação
            </VBtn>
          </VCardItem>

          <VCardTitle class="mt-4 pa-0 text-center font-weight-bold">
            Galeria de Imagens
          </VCardTitle>


          <VRow class="mt-4">
            <VCol cols="12" md="8" class="mx-auto" @click="open(0)">
              <VImg :src="appwine1" alt="App screenshot" class="screenshot" aspect-ratio="16/9" cover />
            </VCol>
          </VRow>
        </VCard>
      </VCol>
    </VRow>
    <VOverlay v-model="overlay" class="gallery-overlay" persistent>
      <div class="gallery-container">
        <VBtn icon="mdi-close" class="gallery-close" @click="overlay = false" />

        <!-- Carousel -->
        <VCarousel v-model="current" hide-delimiters class="gallery-carousel" :show-arrows="false">
          <VCarouselItem v-for="(item, i) in items" :key="i">
            <div class="gallery-slide">
              <VImg :src="item.src" cover class="gallery-image" />

              <div class="gallery-caption">
                {{ item.caption }}
              </div>
            </div>
          </VCarouselItem>
        </VCarousel>

        <!-- Custom Arrows -->
        <div class="gallery-custom-arrows">
          <VBtn icon @click="prev">
            <VIcon>mdi-chevron-left</VIcon>
          </VBtn>
          <VBtn icon @click="next">
            <VIcon>mdi-chevron-right</VIcon>
          </VBtn>
        </div>

        <!-- Thumbnails -->
        <div class="gallery-thumbs">
          <VImg v-for="(src, i) in items" :key="i" :src="src" class="gallery-thumb-small"
            :class="{ active: current === i }" @click="current = i" />
        </div>
      </div>
    </VOverlay>
  </VContainer>
</template>

<script setup>
import { ref } from "vue";
import dioappwine from "@/assets/logos/dioappwine.png";
import appwine1 from "@/assets/appwine/1.png";
const overlay = ref(false);
const current = ref(0);

function open(i) {
  current.value = i;
  overlay.value = true;
}

const items = [
  {
    src: new URL("@/assets/appwine/1.png", import.meta.url).href,
    caption: "Página Inicial",
  },
  {
    src: new URL("@/assets/appwine/2.png", import.meta.url).href,
    caption: "Seleção de Vinhos",
  },
  {
    src: new URL("@/assets/appwine/3.png", import.meta.url).href,
    caption: "Detalhes do Vinho",
  },
  {
    src: new URL("@/assets/appwine/4.png", import.meta.url).href,
    caption: "Pratos Principais",
  },
  {
    src: new URL("@/assets/appwine/5.png", import.meta.url).href,
    caption: "Minhas escolhas",
  },
  {
    src: new URL("@/assets/appwine/6.png", import.meta.url).href,
    caption: "Entradas",
  },
];


function openApp() {
  window.open('https://appywinev2.planeamento.net/app2/#/', '_blank');
}

function prev() {
  current.value =
    current.value === 0 ? items.length - 1 : current.value - 1;
}

function next() {
  current.value =
    current.value === items.length - 1 ? 0 : current.value + 1;
}
</script>