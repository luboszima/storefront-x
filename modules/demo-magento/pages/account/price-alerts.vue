<template>
  <SideAccountMenu>
    <PriceAlerts :price-alerts="alerts" @delete="handleDelete" />
  </SideAccountMenu>
</template>

<script setup lang="ts">
import PriceAlerts from '#ioc/templates/PriceAlerts'
import SideAccountMenu from '#ioc/organisms/SideAccountMenu'
import { ref, onMounted } from 'vue'

const alerts = ref()

onMounted(() => {
  alerts.value = data
})

const data = [
  {
    id: '1',
    label: 'Hohem stabiliz8tor',
    createdAt: '2022-10-05 20:29:37',
    limit: 2000,
    thumbnailUrl: '/logos/logo_demo.png',
    email: 'petr@pan.cz',
  },
  {
    id: '2',
    label: 'Intel SR1695WBDC server barebone Socket B (LGA 1366) Rack (1U) Metallic',
    createdAt: '2022-10-05 20:29:37',
    limit: 1500,
    thumbnailUrl: '/logos/logo_demo2.png',
    email: 'random@name.com',
  },
]

const handleDelete = (id: string) => {
  console.log('handle delete')
  alerts.value = alerts.value.filter((item: any) => id !== item.id)
}
</script>

<i18n lang="yaml">
cs-CZ:
  'Item created at: {0}': 'Datum vytvoření: {0}'
  delete: odstranit
  Alerts: Hlídání
  Price drops below: Pokles ceny pod
  Price alerts: Hlídání cen
</i18n>
