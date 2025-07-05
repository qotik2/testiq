'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AboutType } from '@/app/types/about'
import AboutSkeleton from '../../Skeleton/AboutSkeleton'

const AboutUs = () => {
  const [about, SetAbout] = useState<AboutType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch.')
        const data = await res.json()
        SetAbout(data.AboutData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section id='about' className='scroll-mt-20'>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          {/* COLUMN-1 */}
          <div className='lg:-ml-64 sm:-ml-40 -ml-20'>
            <Image
              src='/images/why/photo_2025-06-10_20-59-43.jpg'
              alt='about-image'
              width={4000}
              height={900}
              className='w-full'
            />
          </div>

          {/* COLUMN-2 */}
          <div>
            <h2 className='pt-4 mt-5 text-center lg:text-start'>
              Почему выбирают y100k club?
            </h2>
            <p className='text-lg text-bluegray pt-4 font-normal text-center lg:text-start'>
              А никто нас не выбирает ахааххахахаха мы отбитые ебланы нас боятся люди нами пугают непослушных детей когда наши люди выходят на улицу все кто нас видят вызывают полицию и общественные дружины.
            </p>

            <div className='mt-10'>
              {loading
                ? Array.from({ length: 3 }).map((_, i) => (
                    <AboutSkeleton key={i} />
                  ))
                : <div className='flex flex-col gap-4'>
                    {about.map((items, i) => (
                      <div className='flex min-h-[120px] bg-white rounded-xl shadow-sm p-4 items-center' key={i}>
                        <div className='rounded-full h-10 w-12 p-1.5 flex items-center justify-center bg-circlebg'>
                          <Image
                            src='/images/why/check.svg'
                            alt='check-image'
                            width={24}
                            height={24}
                          />
                        </div>
                        <div className='ml-5 flex-1 flex flex-col justify-center'>
                          <p className='text-2xl text-black font-semibold'>
                            {items.heading}
                          </p>
                          <p className='text-lg text-beach font-normal mt-2'>
                            {items.subheading}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
