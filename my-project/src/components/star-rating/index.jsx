
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

import './style.css';

const StarRating = ({ noOfStars = 6 }) => {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleClick = (getCurrentIndex) => {
        setRating(getCurrentIndex);
    }

    const handleMouseEnter = (getCurrentIndex) => {
        setHover(getCurrentIndex);
    }

    const handleMouseLeave = () => {
        setHover(rating)
    }


    return (
        <div className="star-rating">
            {
                [...Array(noOfStars)].map((_, index) => {
                    index += 1;

                    return <FaStar
                    className={index <= (hover || rating) ? 'active' : 'inactive' } 
                     key={index}
                     onClick={() =>handleClick(index)}
                     onMouseMove={()=> handleMouseEnter(index)}
                     onMouseLeave={() => handleMouseLeave}
                     size={40}
                     />
                })
            }
        </div>
    )
}

export default StarRating;