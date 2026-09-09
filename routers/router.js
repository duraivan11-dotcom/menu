import Hamburguesas from "../src/views/Hamburguesas.vue";
import Perros from "../src/views/Perros.vue";
import Pizzas from "../src/views/Pizzas.vue";
import Bebidas from "../src/views/Bebidas.vue";
import Postres from "../src/views/Postres.vue";
import Promociones from "../src/views/Promociones.vue";
import Nosotros from "../src/views/Nosotros.vue";

import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", redirect: "/hamburguesas" },
  { path: "/hamburguesas", component: Hamburguesas },
  { path: "/perros", component: Perros },
  { path: "/pizzas", component: Pizzas },
  { path: "/bebidas", component: Bebidas },
  { path: "/postres", component: Postres },
  { path: "/promociones", component: Promociones },
  { path: "/nosotros", component: Nosotros }
];

export const router = createRouter({
  routes,
  history: createWebHashHistory()
});

