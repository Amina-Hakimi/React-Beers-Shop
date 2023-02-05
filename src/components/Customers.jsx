import React from "react";

function Customers ({customer}) {
    return (    
<div>
{customer.items.map(item => <Avatar customer={item} key={item.avatar.alt} />
)}
</div>
)
};
export default Customers;