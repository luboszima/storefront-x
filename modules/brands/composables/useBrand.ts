import { computed, reactive, Ref } from 'vue'
import useToBrand from '#ioc/mappers/useToBrand'
import useLocalePath from '#ioc/composables/useLocalePath'

export default (brand: Ref<ReturnType<ReturnType<typeof useToBrand>>>) => {
  const localePath = useLocalePath()

  const id = computed(() => brand.value.id)

  const name = computed(() => brand.value.name)

  const description = computed(() => brand.value.description)

  const image = computed(() => brand.value.image)

  const urlKey = computed(() => brand.value.urlKey)

  const urlPath = computed(() => `/${urlKey.value}`)

  const breadcrumbs = computed(() => [
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'Brands',
      link: localePath('brands').fullPath,
    },
    {
      title: name.value,
      link: urlPath.value,
    },
  ])

  return reactive({
    id,
    name,
    description,
    image,
    urlKey,
    urlPath,
    breadcrumbs,
  })
}