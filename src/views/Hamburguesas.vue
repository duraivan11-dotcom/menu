<template>
  <q-page class="q-pb-xl">
    <!-- Category Hero Banner -->
    <div class="relative-position hero-banner shadow-4">
      <q-img
        src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80"
        alt="Hamburguesas Banner"
        height="260px"
        fit="cover"
      >
        <div class="absolute-full flex flex-center bg-transparent-overlay text-white text-center q-pa-md">
          <div>
            <h1 class="text-h3 text-weight-bolder text-amber-4 q-my-xs font-brand text-uppercase tracking-wide">
              Hamburguesas
            </h1>
            <p class="text-subtitle1 text-grey-2 max-width-caption q-mx-auto">
              Jugosa carne 100% de res a la parrilla, pan artesanal recién horneado e ingredientes frescos de la mejor calidad.
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
          <q-icon name="lunch_dining" color="deep-orange-9" size="32px" class="q-mr-sm" />
          Nuestras Hamburguesas
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
    name: 'Burger Suprema BBQ',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
    description: 'Dobles 150g de res Angus, tocineta crujiente, queso cheddar fundido, cebolla caramelizada y salsa BBQ artesanal.',
    price: '$28.900',
    tag: 'Más pedido',
    isChefRecommendation: true
  },
  {
    name: 'Hamburguesa Clásica',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=600&q=80',
    description: '150g de carne de res, queso americano, lechuga cogollo fresca, tomate chonto y salsa especial de la casa.',
    price: '$19.500',
    tag: '',
    isChefRecommendation: false
  },
  {
    name: 'Volcán de Queso & Tocineta',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80',
    description: 'Carne 180g rellena de queso gouda, coronada con tocineta ahumada, aros de cebolla crocantes y mayonesa de ajo.',
    price: '$31.000',
    tag: 'Nuevo',
    isChefRecommendation: false
  },
  {
    name: 'Burger Veggie Gourmet',
    image: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?auto=format&fit=crop&w=600&q=80',
    description: 'Medallón de garbanzo y champiñones, queso tofu ahumado, rúgula, aguacate fresco y lactonesa de fina hierbas.',
    price: '$23.500',
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
