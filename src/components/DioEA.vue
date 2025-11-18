<template>
  <VContainer fluid class="pa-4">
    <VRow justify="center">
      <VCol cols="12" md="10" lg="8">
        <VCard elevation="0" class="pa-2">
          <VCardTitle class="justify-center">
            <VImg :src="dioea" alt="DioEA Logo" class="logo" contain />
          </VCardTitle>

          <VCardText class="mt-2 pa-0">
            O conector <b>DioEA</b> é um integrador automático de lançamentos de compras, vendas, recebimentos e
            pagamentos na contabilidade.
          </VCardText>

          <VCardText class="mt-2 pa-0">
            Compatível com os ERP´S <b>GGest</b>, <b>SAGE</b> e <b>PHC</b>.
          </VCardText>

          <VCardTitle class="mt-4 pa-0 text-center font-weight-bold">
            Galeria de Imagens
          </VCardTitle>


          <VRow class="mt-4">
            <VCol cols="12" md="8" class="mx-auto" @click="open(0)">
              <VImg :src="ea1" alt="App screenshot" class="screenshot" cover />
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
              <VImg :src="item.src" cover class="gallery-image" />

              <div class="gallery-caption">
                {{ item.caption }}
              </div>

              <div class="gallery-caption" v-if="i === 1">
                <ol>
                  <li>Importar dados</li>
                  <li>Parâmetros de conta</li>
                  <li>Copiar Parâmetros de Conta</li>
                  <li>Plano de Contas</li>
                  <li>Meios de Pagamento</li>
                  <li>Parâmetros Globais</li>
                  <li>Séries</li>
                  <li>Parâmetros de Documentos</li>
                  <li>Parâmetros de Produtos</li>
                  <li>Fornecedores</li>
                  <li>Atualizar Dados</li>
                  <li>Gerar Exportação</li>
                  <li>Identificação da empresa/cliente</li>
                  <li>NIF do cliente</li>
                  <li>Janela de informação</li>
                </ol>
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
import dioea from "@/assets/logos/dioea.png";
import ea1 from "@/assets/dioea/1.png";
const overlay = ref(false);
const current = ref(0);

function open(i) {
  current.value = i;
  overlay.value = true;
}

const items = [
  {
    src: new URL("@/assets/dioea/1.png", import.meta.url).href,
    caption: "Janela Inicial",
  },
  {
    src: new URL("@/assets/dioea/2.png", import.meta.url).href,
    caption: "Ambiente de Trabalho",
  },
  {
    src: new URL("@/assets/dioea/3.png", import.meta.url).href,
    caption: "Parâmetros de Conta",
  },
  {
    src: new URL("@/assets/dioea/4.png", import.meta.url).href,
    caption: "Plano de Contas",
  },
  {
    src: new URL("@/assets/dioea/5.png", import.meta.url).href,
    caption: "Meios de Pagamento",
  },
  {
    src: new URL("@/assets/dioea/6.png", import.meta.url).href,
    caption: "Parâmetros Globais",
  },
  {
    src: new URL("@/assets/dioea/7.png", import.meta.url).href,
    caption: "Séries",
  },
  {
    src: new URL("@/assets/dioea/8.png", import.meta.url).href,
    caption: "Parâmetros de Documentos",
  },
  {
    src: new URL("@/assets/dioea/9.png", import.meta.url).href,
    caption: "Parâmetros de Produtos",
  },
  {
    src: new URL("@/assets/dioea/10.png", import.meta.url).href,
    caption: "Fornecedores",
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