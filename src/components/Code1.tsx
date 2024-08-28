import React from 'react';

interface props {
    name: string;
}
const Greeting: React.FC<props> = ({ name }) => {
    return <div> Bonjour , {name} </div>
}
export default Greeting;