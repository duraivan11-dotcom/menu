<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-2">

    <!-- Header Navigation -->
    <q-header elevated class="bg-dark text-white shadow-3">
      <q-toolbar class="q-py-xs">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          class="lt-md"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="row items-center no-wrap cursor-pointer" @click="$router.push('/')">
          <q-avatar size="42px" class="q-mr-sm bg-deep-orange-9 text-white font-bold">
            <q-icon name="fastfood" size="26px" />
          </q-avatar>
          <div>
            <div class="text-weight-bold text-h6 text-amber-5 font-brand">BURGER & CO.</div>
            <div class="text-caption text-grey-4 gt-xs">Menú Digital de Comidas Rápidas</div>
          </div>
        </q-toolbar-title>

        <q-space />

        <!-- Desktop Navigation Tabs -->
        <div class="gt-sm row items-center q-gutter-x-xs">
          <q-btn
            v-for="item in menuItems"
            :key="item.path"
            :to="item.path"
            flat
            stretch
            no-caps
            :icon="item.icon"
            :label="item.label"
            active-class="text-amber-5 text-weight-bolder nav-active"
            class="text-weight-medium q-px-sm nav-btn"
          />
        </div>
      </q-toolbar>

      <!-- Secondary Sub-header tabs for small-medium screens -->
      <div class="bg-grey-10 lt-lg gt-xs text-white">
        <q-tabs
          v-model="activeTab"
          shrink
          stretch
          dense
          active-color="amber-5"
          indicator-color="amber-5"
          align="center"
          class="text-grey-4"
        >
          <q-route-tab
            v-for="item in menuItems"
            :key="item.path"
            :to="item.path"
            :name="item.path"
            :icon="item.icon"
            :label="item.label"
            no-caps
          />
        </q-tabs>
      </div>
    </q-header>

    <!-- Mobile Drawer -->
    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      overlay
      behavior="mobile"
      bordered
      class="bg-dark text-white"
    >
      <q-scroll-area class="fit">
        <div class="q-pa-md text-center bg-grey-10">
          <q-avatar size="60px" class="bg-deep-orange-9 text-white q-mb-sm">
            <q-icon name="fastfood" size="36px" />
          </q-avatar>

          <div class="text-h6 text-weight-bold text-amber-5">BURGER & CO.</div>
          <div class="text-caption text-grey-4">¡El mejor sabor de la ciudad!</div>
        </div>

        <q-separator dark />

        <q-list padding>
          <q-item-label header class="text-grey-5 text-uppercase text-weight-bold">
            Menú Principal
          </q-item-label>

          <q-item
            v-for="item in menuItems"
            :key="item.path"
            :to="item.path"
            clickable
            v-ripple
            active-class="bg-deep-orange-9 text-white text-weight-bold"
            @click="leftDrawerOpen = false"
          >
            <q-item-section avatar>
              <q-icon :name="item.icon" color="amber-5" />
            </q-item-section>

            <q-item-section>
              {{ item.label }}
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <!-- Page Content Container -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Footer -->
    <q-footer class="bg-dark text-white q-pa-md border-top">
      <div class="container text-center">
        <div class="row q-col-gutter-md justify-center items-center">
          <div class="col-12 col-md-4">
            <div class="text-weight-bold text-subtitle1 text-amber-5">BURGER & CO.</div>
            <div class="text-caption text-grey-4">El auténtico sabor de la comida rápida artesanal</div>
          </div>
          <div class="col-12 col-md-4">
            <div class="text-caption text-grey-4">
              <q-icon name="place" color="amber-5" class="q-mr-xs" /> Calle 45 # 23-10, Bogotá, Colombia
            </div>
            <div class="text-caption text-grey-4">
              <q-icon name="phone" color="amber-5" class="q-mr-xs" /> +57 (601) 555-0199 | WhatsApp: +57 300 123 4567
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="text-caption text-grey-5">© 2026 BURGER & CO. Todos los derechos reservados.</div>
          </div>
        </div>
      </div>
    </q-footer>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)
const activeTab = ref('/hamburguesas')

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const menuItems = [
  { label: 'Hamburguesas', path: '/hamburguesas', icon: 'lunch_dining' },
  { label: 'Perros', path: '/perros', icon: 'fastfood' },
  { label: 'Pizzas', path: '/pizzas', icon: 'local_pizza' },
  { label: 'Bebidas', path: '/bebidas', icon: 'local_bar' },
  { label: 'Postres', path: '/postres', icon: 'icecream' },
  { label: 'Promociones', path: '/promociones', icon: 'local_offer' },
  { label: 'Nosotros', path: '/nosotros', icon: 'groups' }
]
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}

.font-brand {
  font-family: 'Poppins', sans-serif;
  letter-spacing: 1px;
}

.nav-btn {
  font-size: 0.95rem;
  transition: all 0.2s ease;
}

.nav-btn:hover {
  color: #f59e0b !important;
}

.nav-active {
  border-bottom: 3px solid #f59e0b;
}

.border-top {
  border-top: 1px solid #333;
}
</style>