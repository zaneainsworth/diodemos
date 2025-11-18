<template>
  <VContainer fluid class="pa-4">
    <VRow justify="center">
      <VCol cols="12" md="10" lg="8">
        <VCard elevation="0" class="pa-2">
          <VCardTitle class="justify-center">
            <VImg :src="diotasks" alt="DioTasks Logo" class="mx-auto" contain width="300" />
          </VCardTitle>

          <VCardText class="mt-2 pa-0">
            O <b>DioTasks</b>, desenvolvido pela Infordio, permite criar e visualizar tarefas, marcações, projetos e
            tempos, a
            partir de qualquer lugar.
          </VCardText>

          <VCardText class="mt-2 pa-0">
            Além desta gestão operacional, o software dispõe também de integração com os ERP’s <b>Sage</b>, <b>PHC</b> e
            <b>GGest</b>,
            possibilitando a consulta e utilização de dados como clientes, contas-correntes, vendas, equipamentos e
            PAT’s, numa abordagem centralizada e conectada.
          </VCardText>

          <VCardTitle class="mt-4 pa-0 text-center font-weight-bold">
            Galeria de Imagens
          </VCardTitle>


          <VRow class="mt-4">
            <VCol cols="12" md="8" class="mx-auto" @click="open(0)">
              <VImg :src="tasks1" alt="App screenshot" class="screenshot" cover />
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
import diotasks from "@/assets/logos/diotasks.png";
import tasks1 from "@/assets/diotasks/1.png";
const overlay = ref(false);
const current = ref(0);

function open(i) {
  current.value = i;
  overlay.value = true;
}

const items = [
  {
    src: new URL("@/assets/diotasks/1.png", import.meta.url).href,
    caption: "Página Login",
  },
  {
    src: new URL("@/assets/diotasks/2.png", import.meta.url).href,
    caption: "Página Principal",
  },
  {
    src: new URL("@/assets/diotasks/3.png", import.meta.url).href,
    caption: "Lista de Tarefas",
  },
  {
    src: new URL("@/assets/diotasks/4.png", import.meta.url).href,
    caption: "Edição de Tarefa",
  },
  {
    src: new URL("@/assets/diotasks/5.png", import.meta.url).href,
    caption: "Lista de Marcações",
  },
  {
    src: new URL("@/assets/diotasks/6.png", import.meta.url).href,
    caption: "Edição de Marcação",
  },
  {
    src: new URL("@/assets/diotasks/7.png", import.meta.url).href,
    caption: "Criação de Tempo",
  },
  {
    src: new URL("@/assets/diotasks/8.png", import.meta.url).href,
    caption: "Listagem de Tempos",
  },
  {
    src: new URL("@/assets/diotasks/9.png", import.meta.url).href,
    caption: "Chat",
  },
  {
    src: new URL("@/assets/diotasks/10.png", import.meta.url).href,
    caption: "Detalhes de uma mensagem",
  },
];

function prev() {
  current.value =
    current.value === 0 ? items.length - 1 : current.value - 1;
}

function next() {
  current.value =
    current.value === items.length - 1 ? 0 : current.value + 1;
}
</script>