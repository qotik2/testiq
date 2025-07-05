import { NextResponse } from 'next/server'

import { HeaderItem } from '@/app/types/menu'
import { RecordType } from '@/app/types/record'
import { ServiceType } from '@/app/types/service'
import { AboutType } from '@/app/types/about'
import { NetworkType } from '@/app/types/network'
import { FooterLinkType } from '@/app/types/footer'

const HeaderData: HeaderItem[] = [
  { label: 'Услуги', href: '/#service' },
  { label: 'О нас', href: '/#about' },
  { label: 'Отзывы', href: '/#review' },
  { label: 'Контакты', href: '/#contact' },
]

const CompanyData: { imgSrc: string }[] = [
  {
    imgSrc: '/images/carousel/google.svg',
  },
  {
    imgSrc: '/images/carousel/garnier.png',
  },
  {
    imgSrc: '/images/carousel/slack.png',
  },
  {
    imgSrc: '/images/carousel/udemy.png',
  },
  {
    imgSrc: '/images/carousel/google.svg',
  },
  {
    imgSrc: '/images/carousel/garnier.png',
  },
  {
    imgSrc: '/images/carousel/slack.png',
  },
  {
    imgSrc: '/images/carousel/udemy.png',
  },
]

const RecordData: RecordType[] = [
  {
    imgSrc: '/images/buyers/ourbuyers.svg',
    percent: '100k',
    heading: 'Достигнутая цель',
    subheading:
      'y100k club - мы уронили курс пикселя и продолжаем ронять!',
  },
  {
    imgSrc: '/images/buyers/projectcompleted.svg',
    percent: '50+',
    heading: 'Напуганных чатов',
    subheading:
      'Успешно пугаем по чатам, рассказываем про дамп',
  },
  {
    imgSrc: '/images/buyers/happybuyers.svg',
    percent: '95%',
    heading: 'Довольных клиентов',
    subheading:
      'Высокий уровень слитых депозитов благодаря качественному сервису.',
  },
  {
    imgSrc: '/images/buyers/teammembers.svg',
    percent: '2.5+',
    heading: 'Членов клуба',
    subheading:
      'Профессиональная команда специалистов с серьезнейшими проблемами с психикой.',
  },
]

const ServiceData: ServiceType[] = [
  {
    imgSrc: '/images/provide/marketing.svg',
    country: 'Пугание по чатам',
    paragraph:
      'ПУГАЙТЕ ПО ЧАТАМ ГОВОРИТЕ ДАМП ПИЗДА НАХУЙ МЫ ДОЛЖНЫ УКАТАТЬСЯ.',
  },
  {
    imgSrc: '/images/provide/graphic.svg',
    country: 'Маркет-мейкинг жаб',
    paragraph:
      'Качественный маркет-мейкинг жаб с гарантией укатывания флора. Ты продашь своего лучшего друга.',
  },
  {
    imgSrc: '/images/provide/heaking.svg',
    country: 'Кулачные бои',
    paragraph:
      'При поддержке "Project Goyhem". Гои из телеграм чатов дерутся на смерть за Lol Pop от Тайлера.',
  },
  {
    imgSrc: '/images/provide/uidesign.svg',
    country: 'Кто по жизни',
    paragraph:
      'Ну да это я и че?',
  },
]

const AboutData: AboutType[] = [
  {
    heading: 'Рофлинка',
    subheading:
      'Я забавный человек, я люблю рофлить. Мне доставляет удовольствие наблюдать за страданиями людей.',
  },
  {
    heading: 'Психическая нестабильность',
    subheading:
      'Я шыыыыз)))000.',
  },
  {
    heading: 'Нищета',
    subheading:
      'Я нищая блядота на моем тонкипере 1.66 бакса подарите сейлормун.',
  },
]

const NetworkData: NetworkType[] = [
  {
    imgSrc: '/images/network/bangladesh.svg',
    country: 'Бангладеш',
    paragraph:
      'Сотрудничаем с лучшими креативщиками и разработчиками по всему Дакке и за его пределами.',
  },
  {
    imgSrc: '/images/network/america.svg',
    country: 'Соединенные Штаты',
    paragraph:
      'Развиваем инновации с партнерами и стартапами в крупных технологических центрах США.',
  },
  {
    imgSrc: '/images/network/australia.svg',
    country: 'Австралия',
    paragraph:
      'Поддерживаем бизнес в Сиднее и Мельбурне с индивидуальными цифровыми решениями.',
  },
  {
    imgSrc: '/images/network/china.svg',
    country: 'Китай',
    paragraph:
      'Предоставляем безопасные и масштабируемые услуги на китайском цифровом рынке.',
  },
]

const FooterLinkData: FooterLinkType[] = [
  {
    links: [
      { label: 'Услуги', href: '/#service' },
      { label: 'О нас', href: '/#about' },
      { label: 'Отзывы', href: '/#review' },
      { label: 'Контакты', href: '/#contact' },
    ],
  },
]

export const GET = () => {
  return NextResponse.json({
    HeaderData,
    CompanyData,
    RecordData,
    ServiceData,
    AboutData,
    NetworkData,
    FooterLinkData,
  })
}
