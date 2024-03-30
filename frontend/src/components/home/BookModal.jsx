import React from 'react'
import {AiOutlineClose} from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
const BookModal = ({book, onClose}) => {
  return (
    <div className='fixed bg-black bg-opacity-60 top-0 left-0
    right-0 bottom-0 z-50 flex justify-center items-center' 
    onClick={onClose}>
        <div
        onClick={(event)=> event.stopPropagation()}
        className='w-[600px] max-w-full h-[400px] bg-white rounded-xl
        p-4 flex flex-col relative'
        >
        <AiOutlineClose className='absolute right-6 top-6 
        text-3xl text-red-600 
        cursor-pointer' onClick={onClose}></AiOutlineClose>
          <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>
          {book.publishYear}
        </h2>
        <h4 className='my-2 text-gray-500'>{book._id}</h4>
        <div className='flex justify-start items-center gap-x-2'>
          <PiBookOpenTextLight className='text-red-300 text-2xl' />
          <h2 className='my-1'>{book.title}</h2>
        </div>
        <div className='flex justify-start items-center gap-x-2'>
          <BiUserCircle className='text-red-300 text-2xl' />
          <h2 className='my-1'>{book.author}</h2>
        </div>
        <p className='mt-4'>Book Description</p>
        <p className='my-2 overflow-auto'>
          Discover a treasure trove of books that will 
          whisk you away on unforgettable journeys! From 
          thrilling adventures to heartwarming tales, these 
          stories have something for everyone. Meet fascinating
          characters and explore enchanting worlds filled with 
          wonder and excitement. Whether you're diving into history or soaring into fantasy, these books promise to captivate and delight. So, grab a cozy spot and let your imagination run wild as you turn the pages of these captivating reads. Each one is a doorway to adventure, waiting for you to step through and explore. Get ready to be swept 
          off your feet and lost in the magic of storytelling!
        </p>

        </div>


    </div>
  )
}

export default BookModal