import Customer from '#ioc/graphql/queries/Customer'
import useMagento from '#ioc/composables/useMagento'
import useToCustomer from '#ioc/mappers/useToCustomer'

export default () => {
  const magento = useMagento()
  const toCustomer = useToCustomer()

  return async (): Promise<{
    customer: ReturnType<typeof toCustomer>
  }> => {
    const {
      data: { customer },
    } = await magento.graphql(Customer())

    return {
      customer: toCustomer(customer),
    }
  }
}
