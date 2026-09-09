<template>
  <q-page class="q-pb-xl">
    <!-- Category Hero Banner -->
    <div class="relative-position hero-banner shadow-4">
      <q-img
        src="https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1200&q=80"
        alt="Postres Banner"
        height="260px"
        fit="cover"
      >
        <div class="absolute-full flex flex-center bg-transparent-overlay text-white text-center q-pa-md">
          <div>
            <h1 class="text-h3 text-weight-bolder text-amber-4 q-my-xs font-brand text-uppercase tracking-wide">
              Postres Deliciosos
            </h1>
            <p class="text-subtitle1 text-grey-2 max-width-caption q-mx-auto">
              El final perfecto para una gran comida. Dulces tentaciones artesanales preparadas a diario por nuestros reposteros.
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
          <q-icon name="icecream" color="deep-orange-9" size="32px" class="q-mr-sm" />
          Nuestros Postres
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
    name: 'Volcán de Chocolate & Helado',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80',
    description: 'Bizcocho tibio de chocolate fino con centro líquido derretido, acompañado de bola de helado artesanal de vainilla.',
    price: '$16.500',
    tag: 'Más pedido',
    isChefRecommendation: true
  },
  {
    name: 'Cheesecake de Frutos Rojos',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80',
    description: 'Suave crema de queso sobre base crocante de galleta de mantequilla, cubierta con mermelada artesanal de mora y fresa.',
    price: '$13.900',
    tag: '',
    isChefRecommendation: false
  },
  {
    name: 'Brownie con Nuez & Caramelo',
    image: 'https://images.unsplash.com/photo-1607920592519-bab4d7db727d?auto=format&fit=crop&w=600&q=80',
    description: 'Brownie melcochudo de chocolate amargo 70%, trozos de nuez pecana y salsa caliente de caramelo salado.',
    price: '$12.500',
    tag: 'Nuevo',
    isChefRecommendation: false
  },
  {
    name: 'Churros Gourmet con Arequipe',
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=600&q=80',
    description: '6 churros crujientes espolvoreados con azúcar y canela, acompañados de dip de arequipe recién hecho y Nutella.',
    price: '$14.000',
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
