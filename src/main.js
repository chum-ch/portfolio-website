import "./assets/main.css";

//in main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";

import "primevue/resources/themes/aura-light-green/theme.css";
import "primeflex/primeflex.css";
//icons
import 'primeicons/primeicons.css'

// Primevue componet
import ButtonPrimevue from 'primevue/button';

// Custom component
import CustomNavigation from "./components/customs/Navigation.vue";
import CustomFooter from "./components/customs/Footer.vue";

const app = createApp(App);

// Primevue
app.component("ButtonPrimevue", ButtonPrimevue);
// Custom
app.component("CustomNavigation", CustomNavigation);
app.component("CustomFooter", CustomFooter);
app.use(router);
app.use(PrimeVue);
app.mount("#app");
