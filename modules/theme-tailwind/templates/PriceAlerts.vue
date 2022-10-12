<template>
  <Heading :level="1">{{ t('Price alerts') }}</Heading>
  <div v-if="priceAlerts?.length > 0">
    <div v-for="item in priceAlerts" :key="item.id" class="flex items-center p-2 border border-grey-400 mb-4">
      <PriceAlert :item="item" @delete="emit('delete', item.id)" />
    </div>
  </div>

  <div v-else>
    {{ t('There are no price alerts. You can add a price alert on the product detail.') }}
  </div>
</template>

<script setup lang="ts">
import PriceAlert from '#ioc/molecules/PriceAlert'
import Heading from '#ioc/atoms/Heading'
import useI18n from '#ioc/composables/useI18n'

const { t } = useI18n()
const emit = defineEmits(['delete'])
defineProps({
  priceAlerts: {
    required: true,
    type: Array,
  },
})
</script>

<i18n lang="yaml">
cs-CZ:
  'Item created at: {0}': 'Datum vytvoření: {0}'
  delete: odstranit
  Alerts: Hlídání
  Price drops below: Pokles ceny pod
  Price alerts: Hlídání cen
</i18n>
