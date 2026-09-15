<template>
  <q-page class="q-pb-xl">
    <!-- Hero Banner -->
    <div class="relative-position hero-banner shadow-4">
      <q-img
        src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
        alt="Sobre Nosotros Banner"
        height="260px"
        fit="cover"
      >
        <div class="absolute-full flex flex-center bg-transparent-overlay text-white text-center q-pa-md">
          <div>
            <h1 class="text-h3 text-weight-bolder text-amber-4 q-my-xs font-brand text-uppercase tracking-wide">
              Sobre Nosotros
            </h1>
            <p class="text-subtitle1 text-grey-2 max-width-caption q-mx-auto">
              Conoce la pasión, el equipo y la historia detrás de los mejores sabores artesanales de la ciudad.
            </p>
          </div>
        </div>
      </q-img>
    </div>

    <div class="container q-mx-auto q-px-md q-pt-xl" style="max-width: 1100px;">
      <!-- Story Section -->
      <q-card flat bordered class="q-mb-xl shadow-2 card-rounded overflow-hidden">
        <div class="row items-center">
          <div class="col-12 col-md-6 q-pa-lg">
            <div class="text-subtitle2 text-deep-orange-9 text-uppercase text-weight-bolder q-mb-xs">
              NUESTRA HISTORIA
            </div>
            <div class="text-h4 text-weight-bolder text-dark q-mb-md">
              Pasión por el Buen Sabor desde 2018
            </div>
            <p class="text-body1 text-grey-8 leading-relaxed">
              Nacimos como un pequeño food truck con el sueño de transformar la comida rápida tradicional en una experiencia gastronómica gourmet y artesanal. 
            </p>
            <p class="text-body1 text-grey-8 leading-relaxed">
              Hoy, gracias a la fidelidad de nuestros clientes, seleccionamos diariamente ingredientes 100% frescos, carnes de res maduradas, panes horneados cada mañana y salsas secretas de la casa para brindar una experiencia inigualable en cada bocado.
            </p>
          </div>
          <div class="col-12 col-md-6">
            <q-img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
              alt="Restaurante Interior"
              height="350px"
              fit="cover"
            />
          </div>
        </div>
      </q-card>

      <!-- Info & Contact Section (Address, Hours, Phone, WhatsApp) -->
      <div class="row q-col-gutter-lg q-mb-xl">
        <!-- Location & Hours Card -->
        <div class="col-12 col-md-6">
          <q-card flat bordered class="full-height shadow-1 card-rounded q-pa-md bg-white">
            <q-card-section>
              <div class="row items-center q-mb-md">
                <q-avatar icon="place" color="amber-2" text-color="amber-10" size="48px" class="q-mr-sm" />
                <div>
                  <div class="text-h6 text-weight-bold text-dark">Ubicación y Horarios</div>
                  <div class="text-caption text-grey-6">¡Ven y visítanos en nuestro local!</div>
                </div>
              </div>

              <q-separator class="q-mb-md" />

              <q-list>
                <q-item class="q-px-none">
                  <q-item-section avatar>
                    <q-icon name="location_on" color="deep-orange-9" size="24px" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="text-weight-bold">Dirección:</q-item-label>
                    <q-item-label caption class="text-body2 text-grey-8">
                      Calle 45 # 23-10, Barrio Palermo, Bogotá - Colombia
                    </q-item-label>
                  </q-item-section>
                </q-item>

                <q-item class="q-px-none q-mt-sm">
                  <q-item-section avatar>
                    <q-icon name="schedule" color="deep-orange-9" size="24px" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="text-weight-bold">Horarios de Atención:</q-item-label>
                    <q-item-label caption class="text-body2 text-grey-8">
                      <strong>Lunes a Jueves:</strong> 12:00 PM - 10:00 PM<br>
                      <strong>Viernes y Sábados:</strong> 12:00 PM - 11:30 PM<br>
                      <strong>Domingos y Festivos:</strong> 12:00 PM - 9:30 PM
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>
        </div>

        <!-- Phone & WhatsApp Card -->
        <div class="col-12 col-md-6">
          <q-card flat bordered class="full-height shadow-1 card-rounded q-pa-md bg-white">
            <q-card-section>
              <div class="row items-center q-mb-md">
                <q-avatar icon="phone" color="green-2" text-color="green-10" size="48px" class="q-mr-sm" />
                <div>
                  <div class="text-h6 text-weight-bold text-dark">Pedidos y Contacto</div>
                  <div class="text-caption text-grey-6">Hacemos domicilios directos a tu puerta</div>
                </div>
              </div>

              <q-separator class="q-mb-md" />

              <q-list>
                <q-item class="q-px-none">
                  <q-item-section avatar>
                    <q-icon name="call" color="primary" size="24px" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="text-weight-bold">Teléfono Fijo de Pedidos:</q-item-label>
                    <q-item-label caption class="text-body2 text-grey-8">
                      +57 (601) 555-0199
                    </q-item-label>
                  </q-item-section>
                </q-item>

                <q-item class="q-px-none q-mt-sm">
                  <q-item-section avatar>
                    <q-icon name="chat" color="positive" size="24px" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="text-weight-bold">WhatsApp Directo:</q-item-label>
                    <q-item-label caption class="text-body2 text-grey-8">
                      +57 300 123 4567
                    </q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-btn
                      color="positive"
                      icon="chat"
                      label="Escribir"
                      unelevated
                      rounded
                      dense
                      class="q-px-sm"
                      href="https://wa.me/573001234567"
                      target="_blank"
                    />
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>
        </div>
      </div>

      <!-- Team Members Section -->
      <div class="q-mb-lg">
        <div class="text-center q-mb-xl">
          <div class="text-subtitle2 text-deep-orange-9 text-uppercase text-weight-bolder">
            EL EQUIPO DETRÁS DEL SABOR
          </div>
          <div class="text-h4 text-weight-bolder text-dark">
            Nuestro Personal Destacado
          </div>
          <p class="text-grey-7">Personas apasionadas comprometidas con la mejor calidad y servicio.</p>
        </div>

        <div class="row q-col-gutter-lg justify-center">
          <div
            v-for="member in team"
            :key="member.name"
            class="col-12 col-sm-6 col-md-4"
          >
            <q-card flat bordered class="team-card text-center card-rounded shadow-1">
              <q-img
                :src="member.photo"
                :alt="member.name"
                height="300px"
                fit="cover"
                :img-style="{ objectPosition: member.objectPosition || 'center 10%' }"
              />
              <q-card-section class="q-pa-md">
                <q-badge color="amber-9" text-color="dark" class="q-mb-xs text-weight-bold">
                  {{ member.role }}
                </q-badge>
                <div class="text-h6 text-weight-bold text-dark q-mt-xs">{{ member.name }}</div>
                <div class="text-caption text-grey-7 q-mt-xs">{{ member.bio }}</div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>

    </div>
  </q-page>
</template>

<script setup>
const team = [
  {
    name: 'Carlos Mendoza',
    role: 'Chef Principal',
    photo: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&crop=faces&w=600&h=750&q=80',
    objectPosition: 'center 10%',
    bio: 'Experto en parrilla artesanal con más de 10 años creando recetas únicas y salsas exclusivas.'
  },
  {
    name: 'Sofia Ramírez',
    role: 'Cajera & Atención al Cliente',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&crop=faces&w=600&h=750&q=80',
    objectPosition: 'center 10%',
    bio: 'Apasionada por brindar una sonrisa y la mejor atención rápida y amable a todos nuestros visitantes.'
  },
  {
    name: 'Mateo Gómez',
    role: 'Domiciliario Estrella',
    photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&h=750&q=80',
    objectPosition: 'center top',
    bio: 'Encargado de que tus pedidos lleguen calientes, crujientes y a tiempo en cualquier rincón de la ciudad.'
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

.card-rounded {
  border-radius: 16px;
}

.leading-relaxed {
  line-height: 1.6;
}

.team-card {
  transition: transform 0.25s ease;
  overflow: hidden;
}

.team-card:hover {
  transform: translateY(-5px);
}
</style>
