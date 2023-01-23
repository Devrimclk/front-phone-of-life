import Image from 'next/image'
import Navbar from '../component/Navbar'
import Gallary from '../component/Gallary'
import ProductDetails from '../component/ProductsDetails'
import Dropdown from '../component/Dropdown'

export default function product() {
  const image = [
  '/images/photo1.jpg',
  '/images/photo2.jpg',
  '/images/photo3.jpg',
  '/images/photo4.jpg',
  '/images/photo5.jpg',

];
    return(
        <div className='product-page-wrapper'>
        <Navbar />
        <section className='product-detail'>
        <Gallary image={image}/>
        <ProductDetails 
        id={1}
        title="Coque en silicone renforcer avec le MagSafe "
        price={25}
        description=" Housse de protection antidérapante en silicone liquide, gel et caoutchouc pour téléphone, doublée de microfibres, résistante aux chocs. "/>
        </section>
      </div>
      
    )

}


