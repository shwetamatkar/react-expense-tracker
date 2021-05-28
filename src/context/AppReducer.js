export default (state, action) => {
    switch (action.type) {
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }

        case 'UPDATE_BALANCE':
            const amounts =  state.transactions.map(transaction => transaction.amount);
            return {
                ...state,
                balance: amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
            }
        default:
            return state;
    }
}