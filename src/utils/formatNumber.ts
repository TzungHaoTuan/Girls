export const formatNumber = (amount: number) => {
    return new Intl.NumberFormat("en-US").format(amount)
}

