<template>
  <q-page class="q-pb-xl">
    <!-- Category Hero Banner -->
    <div class="relative-position hero-banner shadow-4">
      <q-img
        src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
        alt="Promociones Banner"
        height="260px"
        fit="cover"
      >
        <div class="absolute-full flex flex-center bg-transparent-overlay text-white text-center q-pa-md">
          <div>
            <h1 class="text-h3 text-weight-bolder text-amber-4 q-my-xs font-brand text-uppercase tracking-wide">
              Combos & Promociones
            </h1>
            <p class="text-subtitle1 text-grey-2 max-width-caption q-mx-auto">
              ¡Combos imperdibles al mejor precio! Diseñados para compartir o disfrutar en pareja con el máximo ahorro.
            </p>
          </div>
        </div>
      </q-img>
    </div>

    <!-- Main Container -->
    <div class="container q-mx-auto q-px-md q-pt-lg" style="max-width: 1200px;">
      <!-- Section Title Badge -->
      <div class="row items-center justify-between q-mb-lg">
        <div class="text-h5 text-weight-bold text-dark row items-center">
          <q-icon name="local_offer" color="deep-orange-9" size="32px" class="q-mr-sm" />
          Nuestras Promociones
        </div>
        <q-chip color="deep-orange-1" text-color="deep-orange-9" icon="restaurant">
          {{ products.length }} Combos disponibles
        </q-chip>
      </div>

      <!-- Products Grid -->
      <div class="row q-col-gutter-lg">
        <div
          v-for="product in products"
          :key="product.name"
          class="col-12 col-sm-6 col-md-3"
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
    name: 'Combo Pareja Suprema',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f6?auto=format&fit=crop&w=600&q=80',
    description: '2 Hamburguesas BBQ + 2 Porciones de Papas a la Francesa medianas + 2 Sodas Italianas a elección.',
    price: '$49.900',
    tag: 'Más pedido',
    isChefRecommendation: true
  },
  {
    name: 'Combo Amigos Pizza Party',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    description: '2 Pizzas Medianas (Carnívora + 4 Quesos) + 1 Litro de gaseosa o té helado de la casa.',
    price: '$59.900',
    tag: 'Nuevo',
    isChefRecommendation: false
  },
  {
    name: 'Combo Perros Extremos (x2)',
    image: 'https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=600&q=80',
    description: '2 Perros Spezial Jumbo + 1 Porción de Aros de Cebolla crujientes + 2 Bebidas heladas.',
    price: '$39.500',
    tag: '',
    isChefRecommendation: false
  },
  {
    name: 'Combo Sweet Family',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80',
    description: '2 Malteadas Oreo Supreme + 1 Volcán de Chocolate con Helado para compartir en familia.',
    price: '$32.900',
    tag: '',
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
