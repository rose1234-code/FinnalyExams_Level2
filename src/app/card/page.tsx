'use client'

import AddCard from '@/components/AddCard'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import { useStoreCard } from '@/store/card.store'
import { X } from 'lucide-react'
import Link from 'next/link'
import React, {useState } from 'react'

export default function page() {

  const products = [
  {
    id: 1,
    name: "Nordic Chair",
    image: "/chair1.png",
    price: 78,
    category: "chair",
  },
  {
    id: 2,
    name: "Kruzo Chair",
    image: "/tof.png",
    price: 43,
    category: "chair",
  },
  {
    id: 3,
    name: "Ergonomic Chair",
    image: "/chair3.png",
    price: 95,
    category: "chair",
  },
  {
    id: 4,
    name: "Modern Sofa",
    image: "/sofa1.png",
    price: 320,
    category: "sofa",
  },
  {
    id: 5,
    name: "Luxury Sofa",
    image: "/sofa2.png",
    price: 480,
    category: "sofa",
  },
]


  const {selectedCardIds,clearAll}=useStoreCard()

  const [quantities, setQuantities] = useState<Record<number, number>>({})

  const updateQuantity = (id: number, qty: number) => {
    // Les crochets [ ] indiquent  une clé dynamique.
    setQuantities(prev => ({...prev,[id]: qty, }))
  }

  const listProductCard=products.filter(product=>selectedCardIds.includes(product.id))
  const total = listProductCard.reduce((acc, product) => {
    const qty = quantities[product.id] || 1
    return acc + product.price * qty
  }, 0)

  const Discount:number=10

  

  return (
    <div>
        <NavBar/>                             

        {/* head of description */}
        
        <div className='flex flex-col lg:flex-row justify-between pt-34 lg:px-14  px-2'>

          {/* first contenair */}
          <div className=' w-full lg:w-[63%] ring ring-gray-200 py-2 rounded-3xl '>
            <div className='lg:px-14 px-3 flex my-7 items-center justify-between'>
              <h1 className='text-2xl lg:text-3xl font-bold '>Cart <span className='text-sm font-semibold '>({selectedCardIds.length} products)</span></h1>
              <button onClick={()=>{clearAll()}} className='px-lg lg:text-2xl  font-semibold flex items-center gap-1 text-amber-600'>  <X  size={22}/>clear all</button>
            </div>
            <div className='flex px-2 lg:px-14 items-center  mb-5 justify-between text-lg lg:text-2xl font-bold'>
              <p className='text-xl'>Product</p>
              <p className=' ml-20 lg:ml-54 text-xl'>Count</p>
              <p className='text-xl'>Price</p>
              <p></p>
            </div>
            {/* components card */}
            <div>
              {listProductCard.length >0 ?listProductCard.map((product,index)=>(
                <AddCard  key={index} id={product.id} onQtyChange={updateQuantity}  image={product.image} name={product.name}  price={product.price}/> 
              )): (<p className='text-xl text-center mt-30'>Add product on Main Section please !</p>)}
            </div>
            
          </div>

          {/* second container */}

          <div className='w-full lg:w-[30%] p-5  rounded-3xl h-[450px] bg-gray-200'>
            <h1 className='text-2xl font-bold my-2'>Promo Code </h1>

            <div className='flex justify-between mt-5 px-1.5 py-1.5 mb-9 rounded-full w-full ring ring-gray-500'>
              <input className=' w-[80%] px-2 outline-none text-xl' placeholder='type here' type="text" />
              <button className='w-[28%] lg:w-[20%] py-1.5 px-3 rounded-full bg-green-700 text-white text-center text-xl'>Applay</button>
            </div>

            <hr className='ring ring-gray-300 border-none mb-8' />
            <div className='flex text-gray-600 mb-4 text-xl items-center justify-between'>
              <p className=''>Subtotal</p>
              <span>${(total).toFixed(2)}</span>
            </div>
            <div className='flex text-gray-600 mb-4 text-xl items-center justify-between'>
              <p className=''>Discount</p>
              <span>$-{Discount}</span>
            </div>
            <div className='flex text-gray-600  mb-8 text-2xl items-center justify-between'>
              <p className='font-semibold'>Total</p>
              <span className='font-bold'>${total===0? total.toFixed(2): (total-Discount).toFixed(2)}</span>
            </div>

            <Link href="https://wa.me/message/X6HAVLNKAVBMO1"  target='_blank' className='rounded-2xl w-full block bg-[#578f7c] text-xl text-white text-center py-4 px-6'>Continue to checkout</Link>
          </div>
        </div>

        {/* last elements */}

       
        

        <div className='pt-40'>
            <Footer/>
        </div>
    </div>
  )
}
