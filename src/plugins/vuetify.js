import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css";
import { pt } from "vuetify/locale";

import { VVideo } from "vuetify/labs/VVideo";

export default createVuetify({
  locale: {
    locale: "pt",
    messages: { pt },
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  defaults: {
    global: {
      style: "font-family: Poppins, sans-serif;",
    },
  },
  typography: {
    defaultFontFamily: "Poppins, sans-serif",
  },
  components: {
    ...components,
    VVideo,
  },
  directives,
  options: {
    customProperties: true,
  },
});
