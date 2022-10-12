<template>
  <SideAccountMenu>
    <Heading :level="1">{{ t('Price alerts') }}</Heading>
    <div v-for="item in priceAlerts" :key="item.id" class="flex items-center p-2 border border-grey-400 mb-4">
      <div class="bg-primary-100 w-10 h-10 mr-4">
        <SfxImage class="m-2" :src="item.thumbnailUrl" class-img="h-6 w-6 rounded-full border-1" fit="contain" />
      </div>
      <div class="gap-y-2 w-full">
        <div class="w-full">
          <Heading :level="2" class="mb-4">
            {{ item.label }}
          </Heading>
          <div class="w-full">
            <div>
              {{ t('Alerts') }}: <strong>{{ t('Price changes') }}</strong>
            </div>
          </div>
          <hr />
          <div class="flex justify-between items-center">
            <div>
              {{ t('Item created at: {0}', [item.createdAt]) }}
            </div>
            <div>
              <a class="text-primary-500 cursor-pointer" @click="handleDelete(item.id)">{{ t('delete') }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SideAccountMenu>
</template>

<script setup lang="ts">
import SideAccountMenu from '#ioc/organisms/SideAccountMenu'
import SfxImage from '#ioc/components/SfxImage'
import Heading from '#ioc/atoms/Heading'
import useI18n from '#ioc/composables/useI18n'
import { ref, onMounted } from 'vue'

const priceAlerts = ref()
const { t } = useI18n()

onMounted(() => {
  priceAlerts.value = data
})

const data = [
  {
    id: '1',
    label: 'Hohem stabiliz8tor',
    createdAt: '2022-10-05 20:29:37',
    limit: '2000',
    thumbnailUrl: '/logos/logo_demo.png',
  },
  {
    id: '2',
    label: 'Intel SR1695WBDC server barebone Socket B (LGA 1366) Rack (1U) Metallic',
    createdAt: '2022-10-05 20:29:37',
    limit: '1500',
    thumbnailUrl: '/logos/logo_demo2.png',
  },
]

const handleDelete = (id: string) => {
  priceAlerts.value = priceAlerts.value.filter((item: any) => id !== item.id)
}
</script>

<i18n lang="yaml">
cs-CZ:
  'Item created at: {0}': 'Datum vytvoření: {0}'
  delete: odstranit
  Alerts: Hlídání
  Price changes: Změna ceny
  Price alerts: Hlídání cen
</i18n>
