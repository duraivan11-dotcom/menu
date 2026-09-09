<template>
  <q-page class="q-pb-xl">
    <!-- Category Hero Banner -->
    <div class="relative-position hero-banner shadow-4">
      <q-img
        src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80"
        alt="Pizzas Banner"
        height="260px"
        fit="cover"
      >
        <div class="absolute-full flex flex-center bg-transparent-overlay text-white text-center q-pa-md">
          <div>
            <h1 class="text-h3 text-weight-bolder text-amber-4 q-my-xs font-brand text-uppercase tracking-wide">
              Pizzas Artesanales
            </h1>
            <p class="text-subtitle1 text-grey-2 max-width-caption q-mx-auto">
              Masa madre fermentada durante 48 horas, horneadas a la piedra con queso mozzarella 100% puro e ingredientes seleccionados.
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
          <q-icon name="local_pizza" color="deep-orange-9" size="32px" class="q-mr-sm" />
          Nuestras Pizzas
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
    name: 'Pizza Carnivora Premium',
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=600&q=80',
    description: 'Salsa napolitana, mozzarella, pepperoni artesanal, tocineta ahumada, lomo de res y salchicha italiana.',
    price: '$38.900',
    tag: 'Más pedido',
    isChefRecommendation: true
  },
  {
    name: 'Pizza Pepperoni Supreme',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80',
    description: 'Salsa de tomate italiana, abundante pepperoni crujiente, queso mozzarella y orégano silvestre.',
    price: '$32.000',
    tag: '',
    isChefRecommendation: false
  },
  {
    name: 'Pizza Cuatro Quesos & Miel',
    image: 'https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&w=600&q=80',
    description: 'Mezcla de queso mozzarella, gorgonzola, parmesano madurado, provolone y un toque de miel picante.',
    price: '$36.500',
    tag: 'Nuevo',
    isChefRecommendation: false
  },
  {
    name: 'Pizza Huerto Vegetariana',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80',
    description: 'Salsa pomodoro, mozzarella, pimentones asados, champiñones portobello, aceitunas negras, cebolla morada y albahaca.',
    price: '$29.900',
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
