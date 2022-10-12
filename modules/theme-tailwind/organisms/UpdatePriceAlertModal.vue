<template>
  <Modal @close="emit('close')">
    <Heading :level="3">{{ t(' Price alerts settings.') }}</Heading>
    <p>{{ t('I want to be informed') }}</p>
    <SfxForm @submit="onSubmit">
      <p class="px-4">{{ t('When the price drops below:') }}</p>
      <FormInput
        name="limit"
        :value="alert.limit"
        type="number"
        class="w-full text-center shadow-transparent border-0 mb-2"
      />
      <FormInput
        class="mb-6"
        name="email"
        type="email"
        :label="t('Email')"
        :value="alert.email"
        autocomplete="email"
        validators="required|email"
      />
      <div class="flex justify-end gap-4 mt-4">
        <Button type="button" color="light" outline @click="onClose">{{ t('Close') }}</Button>
        <Button type="submit" color="primary">{{ t('Save') }}</Button>
      </div>
    </SfxForm>
  </Modal>
</template>

<script setup lang="ts">
import Modal from '#ioc/atoms/Modal'
import Heading from '#ioc/atoms/Heading'
import Button from '#ioc/atoms/Button'
import FormInput from '#ioc/molecules/FormInput'
import useI18n from '#ioc/composables/useI18n'
import SfxForm from '#ioc/components/SfxForm'

const { t } = useI18n()

defineProps({
  alert: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['update', 'close'])

const onSubmit = (data: any) => {
  console.log('update price alert modal data', data)
  emit('update', { ...data })
}

const onClose = () => {
  emit('close')
}
</script>

<i18n lang="yaml">
cs-CZ:
  When the price drops below: Při snížení ceny pod
  I want to be informed: Chci být informován
  Price alerts settings.: Nastavit hlídání cen.
  Close: Zavřít
  Save: Uložit
</i18n>
