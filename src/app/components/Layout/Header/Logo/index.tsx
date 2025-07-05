import Image from 'next/image'
import Link from 'next/link'

const Logo: React.FC = () => {
  return (
    <Link href='/'>
      <div>
        <Image
          src={'/images/logo/brooo.gif'}
          alt='dsign-logo'
          width={120}
          height={35}
        />
      </div>
    </Link>
  )
}

export default Logo
