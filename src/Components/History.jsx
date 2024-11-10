import React from 'react';

function History({index,entry})
{
return(
    <>
    <p key={index}>{entry}</p>
    </>
);
}

export default History;