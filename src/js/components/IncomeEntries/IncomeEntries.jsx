import React from 'react';

export default class IncomeEntries extends React.component {
constructor(props){
    super(props);
}

render() {
    return(
        <div className='card border-danger mb-3'>
            <div className='card-header text-white -bg-danger'>IncomeEntries</div>
            <div className='card-body'>
                <form>
                    <div className='form-group'>
                        <label htmlFor='income-description'>Description</label>
                        <input  
                            type='text'
                            className='form-control'
                            id='income-decription'
                            />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='income-amount'>Amount</label>
                        <div className='input-group'>
                            <input  
                                type='text'
                                className='form-control'
                                id='income-amount'
                            />
                        </div>
                    </div>
                    <button
                        type='button'
                        className='btn btn-danger col-12 mb5'
                        >
                            + Add income
                    </button>
                    <table className='table table-sm table-hover'>
                        <thead>
                            <tr>
                                <th> Description</th>
                                <th style={ {width:120} } >Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Rent</td>
                                <td>$1,500.00</td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    );
}   
}