'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FooterLinkType } from '@/app/types/footer'

const Footer = () => {
  const [footerLink, setFooterLink] = useState<FooterLinkType[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setFooterLink(data.FooterLinkData)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <footer className='bg-darkblue'>
      <div className=' container -mt-48'>
        <div className='mx-auto max-w-2xl pt-28 px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
          <div className='mt-24 mb-20 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8'>
            {/* COLUMN-1 */}

            <div className='col-span-4 md:col-span-12 lg:col-span-4'>
              <div className='flex gap-6 items-center'>
                <Link
                  href='https://t.me/notcloudcafe'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-white/20 hover:bg-primary rounded-full shadow-xl p-3'>
                  <Image
                    src='/images/footer/Telegram.svg'
                    alt='telegram'
                    width={32}
                    height={32}
                  />
                </Link>
                <Link
                  href='https://dexscreener.com/ton/eqaokclrovimcaxnnp4me7x9u1eeojotrebpbk-uhptlzbce'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-white/20 hover:bg-primary rounded-full shadow-xl p-3'>
                  <Image
                    src='/images/footer/dexscreener.svg'
                    alt='dexscreener'
                    width={32}
                    height={32}
                  />
                </Link>
                <Link
                  href='https://www.youtube.com/watch?v=ilAXk4KRJv8'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-white/20 hover:bg-primary rounded-full shadow-xl p-3'>
                  <Image
                    src='/images/footer/youtube.svg'
                    alt='youtube'
                    width={32}
                    height={32}
                  />
                </Link>
              </div>
            </div>

            {/* CLOUMN-2/3 */}

            {footerLink.map((item, i) => (
              <div
                key={i}
                className='group relative col-span-2 md:col-span-4 lg:col-span-2'>
                <ul>
                  {item.links.map((link, i) => (
                    <li key={i} className='mb-5'>
                      <Link
                        href={link.href}
                        className='text-white text-sm font-normal mb-6 hover:text-primary'>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* CLOUMN-4 */}

            <div className='col-span-4 md:col-span-4 lg:col-span-4'>
              <div className='flex gap-2'>
                <Image
                  src={'/images/footer/mask.svg'}
                  alt='mask-icon'
                  width={24}
                  height={24}
                />
                <p className='text-base font-normal text-offwhite'>
                  228 Structura Street, Telegram
                </p>
              </div>
              <div className='flex gap-2 mt-10'>
                <Image
                  src={'/images/footer/telephone.svg'}
                  alt='telephone-icon'
                  width={24}
                  height={24}
                />
                <Link href='tel:+ 45 34 11 44 11'>
                  <p className='text-base font-normal text-offwhite hover:text-primary'>
                    + 888 0111 0001
                  </p>
                </Link>
              </div>
              <div className='flex gap-2 mt-10'>
                <Image
                  src={'/images/footer/email.svg'}
                  alt='email-icon'
                  width={24}
                  height={24}
                />
                <Link href="mailto:info@gmail.com">
                  <p className='text-base font-normal text-offwhite hover:text-primary'>
                    sanriomaker@tmail.ton
                  </p>
                </Link>
              </div>
            </div>
          </div>

          {/* All Rights Reserved */}

          <div className='py-5 lg:flex items-center justify-between border-t border-t-bordertop'>
            <h4 className='text-offwhite text-sm text-center lg:text-start font-normal'>
              @2025 y100k club. Все права защищены MY DEF:{' '}
              <Link
                href='https://t.me/Moetpotmeneno'
                className='hover:text-primary hover:underline'>
                @Moetpotmeneno
              </Link>
            </h4>
            <div className='flex gap-5 mt-5 lg:mt-0 justify-center lg:justify-start'>
              <h4 className='text-offwhite text-sm font-normal hover:text-primary hover:underline'>
                <Link
                  href='https://t.me/y2ksquad'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-primary hover:underline'>
                  Политика удвакизации
                </Link>
              </h4>
              <div className='h-5 bg-bordertop w-0.5'></div>
              <h4 className='text-offwhite text-sm font-normal hover:text-primary hover:underline'>
                <Link href='https://t.me/notelephantroom' target='_blank' rel='noopener noreferrer'>
                  Условия использования
                </Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
