'use client'

import { useEffect, useState } from 'react'
import { RecordType } from '@/app/types/record'
import RecordSkeleton from '../../Skeleton/RecordSkeleton'

const Records = () => {
  const [record, setRecord] = useState<RecordType[]>([])
  const [loading, setLoading] = useState(true)
  const [pxPriceUsd, setPxPriceUsd] = useState<string | null>(null)

  useEffect(() => {
    fetch('https://api.dexscreener.com/latest/dex/pairs/ton/eqaokclrovimcaxnnp4me7x9u1eeojotrebpbk-uhptlzbce')
      .then(res => res.json())
      .then(data => {
        setPxPriceUsd(data.pair.priceUsd)
      })
      .catch(() => setPxPriceUsd(null))
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setRecord(data.RecordData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section id='portfolio' className='scroll-mt-20'>
      <div className='container'>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5'>
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <RecordSkeleton key={i} />
              ))
            : record.map((items, i) => (
                <div
                  className='flex flex-col justify-between items-center border border-bluegray/20 rounded-2xl p-5 shadow-md h-full min-h-[320px]'
                  key={i}>
                  <div className={`flex flex-col items-center w-full`}>
                    <div className={`flex justify-center items-center text-5xl border border-bluegray/20 p-2 w-14 h-14 rounded-lg bg-white leading-none ${i === 1 ? 'mt-[-6px]' : ''}`}> 
                      {i === 0 && '😆'}
                      {i === 1 && '😢'}
                      {i === 2 && '😡'}
                      {i === 3 && '💀'}
                    </div>
                    <span className={`mt-2 ${i === 0 ? 'text-xl font-bold text-black' : 'text-transparent select-none'}`}>{i === 0 ? 'PX/USDT' : '.'}</span>
                    <span className='text-navyblue text-4xl lg:text-6xl font-bold text-center mb-1 min-h-[48px] flex items-center justify-center'>
                      {i === 0 
                        ? <span className="text-3xl lg:text-4xl">{pxPriceUsd ? `$${pxPriceUsd}` : '...'}</span>
                        : items.percent}
                    </span>
                  </div>
                  <div className='flex flex-col items-center w-full'>
                    <h3 className='text-black text-2xl font-semibold text-center mt-0 mb-0'>
                      {items.heading}
                    </h3>
                    <p className='text-bluegray text-lg font-normal text-center mt-0'>
                      {items.subheading}
                    </p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  )
}

export default Records
