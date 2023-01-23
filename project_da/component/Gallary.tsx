import React, { useState } from "react";

interface GallaryProps{
    image:string[];
}

const Gallary: React.FC<GallaryProps>= ({ image }) => {
    const [mainImage, setMainImage] = useState<string>(image[0]);
    return(
        <div className='gallary'>  
        <div className='main-image'>
            <img src={mainImage} />
        </div>

        <div className='image-option'>
        {image.map(file => (
            <div className="image">
                <img src={file} />
            </div>
        ))}
        </div>
        </div>
    )
}

export default Gallary;