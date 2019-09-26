import { connect } from 'react-redux';
import ExpenseEntries from './ExpenseEntries';


//this function takes the store and returns an object
//thats passed to the props of the component.
function mapStoreToProps(store) {
    return{
        description: store.income.description,
        amount: store.income.amount,
        lineItems: store.income.lineItems
    };
}
//this might look odd, but connect reuturns a function,
//that is then called witht he component itself


export default connect(mapStoreToProps)(ExpenseEntries);