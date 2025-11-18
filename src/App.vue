<template>
  <v-app>
    <transition name="fade" v-show="fadeT">
      <div id="inactivity-overlay" class="overlay">
        <div class="overlay-content">
          <VImg :src="logotipo" />
          <h2 class="font-weight-bold mt-6">
            Bem-vindo(a) ao evento de inauguração da Infordio!
          </h2>
          <p class="my-8">
            Esta aplicação destina-se a demonstrar as soluções desenvolvidas pela Infordio. Para continuar, clique no
            botão abaixo.
          </p>
          <div class="button-container">
            <button id="inactivity-continue" class="continue-button">
              Continuar
            </button>
          </div>
        </div>
      </div>
    </transition>


    <v-app-bar app elevation="1" flat height="100" class="soft-nav">
      <!-- Mobile Menu -->
      <v-menu offset-y v-if="smAndDown">
        <template #activator="{ props }">
          <v-btn icon v-bind="props">
            <v-icon color="orange">mdi-menu</v-icon>
          </v-btn>
        </template>

        <v-list max-width="170">
          <v-list-item v-for="item in navItems" :key="item.to" :to="item.to" link router>
            <v-img :src="item.image" :alt="item.label" width="150" height="20" />
          </v-list-item>
        </v-list>
      </v-menu>

      <!-- Logo -->
      <router-link to="/">
        <div class="ml-7">
          <v-img :src="logotipo" width="250" height="90" contain />
        </div>
      </router-link>

      <v-spacer />

      <!-- Desktop Nav -->
      <v-toolbar-items class="d-flex align-center" v-if="!smAndDown">
        <router-link v-for="item in navItems" :key="item.to" :to="item.to"
          class="mx-3 nav-link text-subtitle-1 text-green-lighten-4" active-class="nav-active">
          <v-img :src="item.image" :alt="item.label" width="150" height="20" />
        </router-link>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useDisplay } from "vuetify";
import logotipo from "@/assets/logos/Logotipo.png";
import dioappwine from "@/assets/logos/dioappwine.png";
import diobook from "@/assets/logos/diobook.png";
import diocc from "@/assets/logos/diocc.png";
import dioea from "@/assets/logos/dioea.png";
import diostoreconnect from "@/assets/logos/diostoreconnect.png";
import diotasks from "@/assets/logos/diotasks.png";

const { smAndDown } = useDisplay();

const navItems = ref([
  { to: "/vinho", label: "DioAppWine", image: dioappwine },
  { to: "/livro", label: "DioBook", image: diobook },
  { to: "/cc", label: "DioCC", image: diocc },
  { to: "/ea", label: "DioEA", image: dioea },
  { to: "/store", label: "DioStoreConnect", image: diostoreconnect },
  { to: "/tasks", label: "DioTasks", image: diotasks },
]);


const TIMEOUT_MS = 30 * 60 * 1000; // 30 minutes
let timeoutId = null;
let overlay = null;
let continueBtn = null;
let fadeT = ref(true);

function showOverlay() {
  if (!overlay) return;
  fadeT.value = true;
}
function hideOverlay(reset = true) {
  if (!overlay) return;
  fadeT.value = false;
  if (reset) startTimer();
}
function clearTimer() {
  if (timeoutId) {
    clearTimeout(timeoutId);
    timeoutId = null;
  }
}
function startTimer() {
  clearTimer();
  timeoutId = setTimeout(showOverlay, TIMEOUT_MS);
}

const events = ['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll'];
const activityHandler = () => {
  if (overlay && overlay.style.display === 'flex') return;
  startTimer();
};
const visibilityHandler = () => {
  if (document.visibilityState === 'visible') startTimer();
};

onMounted(() => {
  overlay = document.getElementById('inactivity-overlay');
  continueBtn = document.getElementById('inactivity-continue');

  events.forEach(e => window.addEventListener(e, activityHandler, { passive: true }));
  document.addEventListener('visibilitychange', visibilityHandler);

  continueBtn && continueBtn.addEventListener('click', () => hideOverlay(true));

  startTimer();
});

onBeforeUnmount(() => {
  clearTimer();
  events.forEach(e => window.removeEventListener(e, activityHandler));
  document.removeEventListener('visibilitychange', visibilityHandler);

  continueBtn && continueBtn.removeEventListener('click', () => hideOverlay(true));
});
</script>
