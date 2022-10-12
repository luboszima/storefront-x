<template>
  <div class="bg-primary-100 w-20 h-20 mr-4 flex justify-center items-center">
    <SfxImage class="m-2" :src="item.thumbnailUrl" class-img="h-6 w-6 rounded-full border-1" fit="contain" />
  </div>
  <div class="gap-y-2 w-full">
    <div class="w-full">
      <Heading :level="2" class="mb-4">
        {{ item.label }}
      </Heading>
      <div class="w-full mb-2">
        <a class="hover:underline cursor-pointer" @click="openModal">
          {{ t('Alerts') }}:
          <strong>{{ t('Price drops below ') }} <SfxMoney :money="{ value: item.limit }" /></strong>
        </a>
      </div>
      <hr />
      <div class="flex justify-between items-center pb-2 space-y-2">
        <div>
          {{ t('Item created at: {0}', [item.createdAt]) }}
        </div>
        <div>
          <a class="text-primary-500 cursor-pointer" @click="emit('delete')">{{ t('delete') }}</a>
        </div>
      </div>
    </div>
    <UpdatePriceAlertModal v-if="modalOpen" :alert="item" @close="onClose" @update="onUpdate" />
  </div>
</template>

<script setup lang="ts">
import SfxImage from '#ioc/components/SfxImage'
import Heading from '#ioc/atoms/Heading'
import UpdatePriceAlertModal from '#ioc/organisms/UpdatePriceAlertModal'
import useI18n from '#ioc/composables/useI18n'
import SfxMoney from '#ioc/components/SfxMoney'
import { ref } from 'vue'
const emit = defineEmits(['delete'])
const modalOpen = ref(false)
const { t } = useI18n()

defineProps({
  item: {
    required: true,
    type: Object,
  },
})

const onClose = () => {
  modalOpen.value = false
}

const onUpdate = async (data: any) => {
  try {
    console.warn('update price alerts', data)
    onClose()
  } catch (error) {
    onClose()
  }
}

const openModal = () => {
  modalOpen.value = true
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
