<template>
  <q-page class="q-pb-xl">
    <!-- Category Hero Banner -->
    <div class="relative-position hero-banner shadow-4">
      <q-img
        src="https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=1200&q=80"
        alt="Perros Calientes Banner"
        height="260px"
        fit="cover"
      >
        <div class="absolute-full flex flex-center bg-transparent-overlay text-white text-center q-pa-md">
          <div>
            <h1 class="text-h3 text-weight-bolder text-amber-4 q-my-xs font-brand text-uppercase tracking-wide">
              Perros Calientes
            </h1>
            <p class="text-subtitle1 text-grey-2 max-width-caption q-mx-auto">
              Pan brioche suave, salchichas premium jumbo, ripio crocante y las más exquisitas salsas de la casa.
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
          <q-icon name="fastfood" color="deep-orange-9" size="32px" class="q-mr-sm" />
          Nuestros Perros Calientes
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
    name: 'Perro Spezial Jumbo',
    image: 'https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=600&q=80',
    description: 'Salchicha suiza jumbo, tocineta bits, queso mozzarella gratinado, maíz dulce, ripio de papa y salsa tártara artesanal.',
    price: '$21.500',
    tag: 'Más pedido',
    isChefRecommendation: true
  },
  {
    name: 'Perro Mexicool Picante',
    image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=600&q=80',
    description: 'Salchicha ahumada, carne desmechada con chile, jalapeños en rodajas, nachos triturados y sour cream.',
    price: '$23.000',
    tag: 'Picante',
    isChefRecommendation: false
  },
  {
    name: 'Perro Clásico Criollo',
    image: 'https://images.unsplash.com/photo-1541214113241-21578d2d9b62?auto=format&fit=crop&w=600&q=80',
    description: 'Salchicha americana, ripio de papa crujiente, cebolla picadita, salsa rosada, piña y mostaza dulce.',
    price: '$15.900',
    tag: '',
    isChefRecommendation: false
  },
  {
    name: 'Perro Quesero Extremo',
    image: 'https://images.unsplash.com/photo-1612392062631-9bde08efba61?auto=format&fit=crop&w=600&q=80',
    description: 'Salchicha de ternera, baño triple de queso cheddar, fondue de gouda y crujiente de tocineta ahumada.',
    price: '$22.900',
    tag: 'Nuevo',
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
