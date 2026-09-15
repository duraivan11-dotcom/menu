<template>
  <q-page class="q-pb-xl">
    <!-- Category Hero Banner -->
    <div class="relative-position hero-banner shadow-4">
      <q-img
        src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80"
        alt="Bebidas Banner"
        height="260px"
        fit="cover"
      >
        <div class="absolute-full flex flex-center bg-transparent-overlay text-white text-center q-pa-md">
          <div>
            <h1 class="text-h3 text-weight-bolder text-amber-4 q-my-xs font-brand text-uppercase tracking-wide">
              Bebidas & Refrescos
            </h1>
            <p class="text-subtitle1 text-grey-2 max-width-caption q-mx-auto">
              Frappés helados, limonadas artesanales, sodas saborizadas y malteadas cremosas para acompañar tu combo ideal.
            </p>
          </div>
        </div>
      </q-img>
    </div>

    <!-- Main Container -->
    <div class="container q-mx-auto q-px-md q-pt-lg" style="max-width: 1350px;">
      <!-- Section Title Badge -->
      <div class="row items-center justify-between q-mb-lg">
        <div class="text-h5 text-weight-bold text-dark row items-center">
          <q-icon name="local_bar" color="deep-orange-9" size="32px" class="q-mr-sm" />
          Nuestras Bebidas
        </div>
        <q-chip color="deep-orange-1" text-color="deep-orange-9" icon="restaurant">
          {{ products.length }} Opciones disponibles
        </q-chip>
      </div>

      <!-- Products Grid -->
      <div class="row q-col-gutter-lg">
        <div
          v-for="product in products"
          :key="product.name"
          class="col-12 col-sm-6 col-md-6"
        >
          <ProductCard
            :image="product.image"
            :name="product.name"
            :description="product.description"
            :price="product.price"
            :tag="product.tag"
            :is-chef-recommendation="product.isChefRecommendation"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import ProductCard from '../components/ProductCard.vue'

const products = [
  {
    name: 'Malteada OREO Supreme',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80',
    description: 'Helado artesanal de vainilla, galletas Oreo trituradas, crema batida, sirope de chocolate y galleta entera.',
    price: '$14.900',
    tag: 'Más pedido',
    isChefRecommendation: true
  },
  {
    name: 'Limonada de Coco & Menta',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80',
    description: 'Zumo de limón fresco, crema de coco concentrada, hojas de menta maceradas y hielo frappé.',
    price: '$10.500',
    tag: '',
    isChefRecommendation: false
  },
  {
    name: 'Soda Italiana de Frutos Rojos',
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=600&q=80',
    description: 'Agua con gas, infusión artesanal de mora, fresa y arándanos con rodajas de cítricos y hielo.',
    price: '$11.000',
    tag: 'Nuevo',
    isChefRecommendation: false
  },
  {
    name: 'Te Helado Frutos del Bosque',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80',
    description: 'Té negro infusionado en frío con jugo natural de durazno, frutos rojos y toques de hierbabuena.',
    price: '$8.500',
    tag: 'Vegetariano',
    isChefRecommendation: false
  }
]
</script>

<style scoped>
.bg-transparent-overlay {
  background: rgba(0, 0, 0, 0.65);
}

.max-width-caption {
  max-width: 650px;
}

.tracking-wide {
  letter-spacing: 2px;
}
</style>
