import React from 'react';

const Card = (props) => {
    return (
        <div className="max-wd-sm rounded overflow shadow-md mb-5 p-2 border">
                <h5 className="font-bold text-xl">{props.user.name}</h5>
                <h6 className="text-gray-500 mb-2 text-sm">{props.user.company.name}</h6>
                <p className="text-gray-700 text-base">{props.user.company.catchPhrase}</p>
        </div>
    );
}

export default Card;
