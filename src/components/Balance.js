import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
    const { balance } = useContext(GlobalContext);

    return (
        <div className="text-center">
            <h4>Balance : Rs. {balance} </h4>
        </div>
    )
}
