'use client'

import { ServiceType } from '@/app/types/service'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import ServiceSkeleton from '../../Skeleton/ServiceSkeleton'

const Service = () => {
  const [service, setService] = useState<ServiceType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setService(data.ServiceData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section id='service' className='scroll-mt-20'>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-20'>
          {/* COLUMN-1 */}
          <div className='lg:col-span-6 flex justify-center'>
            <div className='flex flex-col align-middle justify-center md:p-10'>
              <h2 className='pt-4 mt-5 text-center lg:text-start'>
                y100k club
              </h2>
              <p className='text-lg pt-4 font-normal leading-6 lg:leading-7 text-center lg:text-start text-bluegray'>
                y100k club - Владеет уникальной инсайдерской информацией по пампу пикселя, занимается маркет-мейкингом жабок и пьет таблетки от шизофрении.
              </p>
              <Link
                href={'/'}
                className='mt-4 text-xl font-medium text-primary flex gap-2 mx-auto lg:mx-0 hover:underline'>
                Узнать больше{' '}
                <Image
                  src={'/images/provide/arrow.svg'}
                  alt={'arrow'}
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>

          {/* COLUMN-2 */}
          <div className='lg:col-span-6'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-x-36 px-10 py-12 bg-bluebg rounded-2xl'>
              {loading
                ? Array.from({ length: 4 }).map((_, i) => (
                    <ServiceSkeleton key={i} />
                  ))
                : service.map((item, i) => (
                    <div
                      key={i}
                      className='bg-white rounded-2xl lg:-ml-32 p-6 shadow-md'>
                      <div className="text-4xl mb-5">
                        {i === 0 && '😲'}
                        {i === 1 && '🐸'}
                        {i === 2 && '👊'}
                        {i === 3 && '🤡'}
                      </div>
                      <p className='text-2xl font-semibold'>{item.country}</p>
                      <p className='text-lg font-normal text-bluegray my-2'>
                        {item.paragraph}
                      </p>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service
