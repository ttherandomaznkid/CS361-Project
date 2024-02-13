import React, { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";

function Productamount() {
    const [amount, setAmount] = useState(0);

    const add = () => setAmount(amount === 10 ? amount : amount + 1)
    const minus = () => setAmount(amount === 0 ? 0 : amount - 1)
    return (
        <div>
            <BiPlus onClick={add} />
            <span>{amount}</span>
            <BiMinus onClick={minus} />
        </div>
    );
}

export default Productamount;