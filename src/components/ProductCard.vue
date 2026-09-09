<template>
  <q-card
    class="product-card full-height column justify-between transition-generic"
    :class="{ 'chef-recommendation-card': isChefRecommendation }"
    flat
    bordered
  >
    <!-- Chef Recommendation Banner/Badge -->
    <div v-if="isChefRecommendation" class="chef-banner text-center text-weight-bold text-uppercase q-py-xs bg-amber-9 text-dark">
      <q-icon name="star" class="q-mr-xs" />
      Recomendación del Chef
    </div>

    <!-- Product Image -->
    <div class="relative-position">
      <q-img
        :src="image"
        :alt="name"
        height="200px"
        fit="cover"
        class="product-image"
      >
        <template v-slot:loading>
          <q-spinner-dots color="amber-8" size="40px" />
        </template>
      </q-img>

      <!-- Optional Tag Badge -->
      <q-badge
        v-if="tag"
        :color="getTagColor(tag)"
        class="absolute-top-right q-ma-sm text-weight-bold shadow-2 q-pa-xs"
        style="font-size: 0.75rem; border-radius: 4px;"
      >
        <q-icon :name="getTagIcon(tag)" class="q-mr-xs" v-if="getTagIcon(tag)" />
        {{ tag }}
      </q-badge>
    </div>

    <!-- Card Content -->
    <q-card-section class="col grow column justify-between">
      <div>
        <div class="row items-center justify-between no-wrap q-mb-xs">
          <div class="text-h6 text-weight-bold text-dark lh-tight">
            {{ name }}
          </div>
        </div>

        <p class="text-body2 text-grey-8 q-mb-md font-ingredients">
          <span class="text-weight-bold text-grey-9">Ingredientes:</span> {{ description }}
        </p>
      </div>

      <div class="row items-center justify-between q-mt-sm">
        <div class="text-h6 text-weight-bolder text-deep-orange-9">
          {{ formattedPrice }}
        </div>
        <q-btn
          color="deep-orange-8"
          unelevated
          rounded
          dense
          icon="shopping_cart"
          label="Pedir"
          class="q-px-md text-weight-bold"
        />
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  image: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: [Number, String],
    required: true
  },
  tag: {
    type: String,
    default: ''
  },
  isChefRecommendation: {
    type: Boolean,
    default: false
  }
})

const formattedPrice = computed(() => {
  if (typeof props.price === 'number') {
    return '$' + props.price.toLocaleString('es-CO')
  }
  return props.price.startsWith('$') ? props.price : `$${props.price}`
})

const getTagColor = (tagName) => {
  const tagLower = tagName.toLowerCase()
  if (tagLower.includes('nuevo')) return 'teal-7'
  if (tagLower.includes('pedido') || tagLower.includes('popular')) return 'red-8'
  if (tagLower.includes('picante')) return 'deep-orange-10'
  if (tagLower.includes('vegetariano') || tagLower.includes('veggie')) return 'green-7'
  return 'orange-8'
}

const getTagIcon = (tagName) => {
  const tagLower = tagName.toLowerCase()
  if (tagLower.includes('nuevo')) return 'fiber_new'
  if (tagLower.includes('pedido')) return 'local_fire_department'
  if (tagLower.includes('picante')) return 'whatshot'
  if (tagLower.includes('vegetariano')) return 'eco'
  return ''
}
</script>

<style scoped>
.product-card {
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  background: #ffffff;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.12) !important;
}

.chef-recommendation-card {
  border: 2px solid #f59e0b !important;
  box-shadow: 0 4px 20px rgba(245, 158, 11, 0.25) !important;
  background: linear-gradient(180deg, #fffdfa 0%, #ffffff 100%);
}

.chef-banner {
  font-size: 0.8rem;
  letter-spacing: 1px;
}

.product-image {
  border-bottom: 1px solid #f0f0f0;
}

.lh-tight {
  line-height: 1.2;
}

.font-ingredients {
  font-size: 0.875rem;
  line-height: 1.4;
}
</style>
