
const formatMoney = amount => {
    return amount.toLocaleString('es-Do', {
        style: 'currency',
        currency: 'DOP'
    })
}

export default formatMoney