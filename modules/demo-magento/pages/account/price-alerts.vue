<template>
  <SideAccountMenu>
    <Heading :level="1">{{ t('Price alerts') }}</Heading>
    <div v-for="item in data" :key="item.id" class="flex justify-between items-center p-2">
      <div class="bg-primary-100">
        <SfxImage class="mr-2" :src="item.thumbnailUrl" class-img="h-6 w-6 rounded-full border-1" fit="contain" />
      </div>
      <div class="gap-y-2">
        <div>
          <Heading :level="2" class="mb-4">
            {{ item.label }}
          </Heading>
          <div>
            <div>{{ t('Alerts') }} <span></span>{{ t('Price changes') }}</div>
          </div>
          <hr />
          <div class="flex justify-between items-center">
            <div>
              {{ $t('Item created at: {0}', [item.createdAt]) }}
            </div>
            <div><a class="text-primary-500">odstranit</a></div>
          </div>
        </div>
      </div>
    </div>
  </SideAccountMenu>
</template>

<script setup lang="ts">
import SideAccountMenu from '#ioc/organisms/SideAccountMenu'
import SfxImage from '#ioc/components/SfxImage'

const data = [
  {
    id: '1',
    label: 'Hohem stabiliz8tor',
    createdAt: '2022-10-05 20:29:37',
    thumbnailUrl: '/logos/logo_demo.png',
  },
  {
    id: '2',
    label: 'Intel SR1695WBDC server barebone Socket B (LGA 1366) Rack (1U) Metallic',
    createdAt: '2022-10-05 20:29:37',
    thumbnailUrl: '/logos/logo_demo2.png',
  },
]
</script>

<i18n lang="yaml">
en-US:
  'Item created at: {0}': 'Datum vytvoření: {0}'
  delete: odstranit
  Alerts: Hlídání
  Price changes: Změna ceny
  Price alerts: Hlídání cen
</i18n>
