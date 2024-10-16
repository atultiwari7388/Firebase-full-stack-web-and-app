'use client'

import { Button } from '@nextui-org/react'
import { Heart } from 'lucide-react'
import Link from 'next/link'
import Slider from 'react-slick'
import FavoriteButton from './FavoriteButton'
import AuthContextProvider from '@/contexts/AuthContext'
import AddToCartButton from './AddToCartButton'

export default function FeaturedProductSlider({ featuredProducts }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show only one slide at a time
    slidesToScroll: 1,
    arrows: true, // Optionally add arrows for navigation
  }

  return (
    <div className='overflow-hidden w-full'>
      <Slider {...settings}>
        {featuredProducts?.map((product, index) => {
          return (
            <div key={index}>
              <div className='flex md:flex-row flex-col gap-4 bg-[#f8f8f8] p-5 md:px-24 md:py-20 w-full'>
                {/* Left section with text */}
                <div className='flex-1 flex flex-col md:gap-10 gap-4'>
                 
                  <div className='flex flex-col gap-4'>
                    <Link href={`/products/${product?.id}`}>
                      <h1 className='md:text-4xl text-xl font-semibold'>
                        {product?.title}
                      </h1>
                    </Link>
                    <h1 className='text-gray-600 md:text-sm text-xs max-w-96 line-clamp-2'>
                      {product?.shortDescription}
                    </h1>
                  </div>
                  <AuthContextProvider>
                    <div className='flex items-center gap-4'>
                      {/* BUY NOW button with Teal background */}
                      <Link
                        href={`/checkout?type=buynow&productId=${product?.id}`}
                      >
                        <button className='bg-teal-500 hover:bg-teal-600 text-white text-xs md:text-sm px-4 py-1.5 rounded-lg'>
                          BUY NOW
                        </button>
                      </Link>

                      {/* Add to Cart Button with Coral background */}
                      <AddToCartButton
                        productId={product?.id}
                        className='bg-coral-500 hover:bg-coral-600 text-white'
                        type={'large'}
                      />

                      {/* Favorite Button (assuming it uses coral as well) */}
                      <FavoriteButton
                        productId={product?.id}
                        className='bg-coral-500 hover:bg-coral-600 text-white'
                      />
                    </div>
                  </AuthContextProvider>
                </div>

                {/* Right section with image */}
                <div className='flex justify-center items-center'>
                  <Link href={`/products/${product?.id}`}>
                    <img
                      className='h-[14rem] md:h-[23rem] object-contain'
                      src={product?.featureImageURL}
                      alt={product?.title}
                    />
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

// "use client";

// import { Button } from "@nextui-org/react";
// import { Heart } from "lucide-react";
// import Link from "next/link";
// import Slider from "react-slick";
// import FavoriteButton from "./FavoriteButton";
// import AuthContextProvider from "@/contexts/AuthContext";
// import AddToCartButton from "./AddToCartButton";

// export default function FeaturedProductSlider({ featuredProducts }) {
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
//   return (
//     <div className="overflow-hidden">
//       <Slider {...settings}>
//         {featuredProducts?.map((product) => {
//           return (
//             <div>
//               <div className="flex flex-col-reverse md:flex-row gap-4 bg-[#f8f8f8] p-5 md:px-24 md:py-20 w-full">
//                 <div className="flex-1 flex flex-col md:gap-10 gap-4">
//                   <h2 className="text-gray-500 text-xs md:text-base">
//                     NEW FASHION
//                   </h2>
//                   <div className="flex flex-col gap-4">
//                     <Link href={`/products/${product?.id}`}>
//                       <h1 className="md:text-4xl text-xl font-semibold">
//                         {product?.title}
//                       </h1>
//                     </Link>
//                     <h1 className="text-gray-600 md:text-sm text-xs max-w-96 line-clamp-2">
//                       {product?.shortDescription}
//                     </h1>
//                   </div>
//                   <AuthContextProvider>
//                     <div className="flex items-center gap-4">
//                       <Link
//                         href={`/checkout?type=buynow&productId=${product?.id}`}
//                       >
//                         <button className="bg-blue-500 text-white text-xs md:text-sm px-4 py-1.5 rounded-lg">
//                           BUY NOW
//                         </button>
//                       </Link>
//                       <AddToCartButton productId={product?.id} type={"large"} />
//                       <FavoriteButton productId={product?.id} />
//                     </div>
//                   </AuthContextProvider>
//                 </div>
//                 <div className="">
//                   <Link href={`/products/${product?.id}`}>
//                     <img
//                       className="h-[14rem] md:h-[23rem]"
//                       src={product?.featureImageURL}
//                       alt=""
//                     />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </Slider>
//     </div>
//   );
// }
