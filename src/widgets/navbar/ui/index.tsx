import { Container } from '@/shared/container'
import { Icon } from '@/shared/icon'

export const Navbar = () => {
    return (
        <nav className='py-4 md:py-8 border-b border-[#D9D9D9]'>
            <Container className='flex items-center justify-between'>
                <div className='flex items-center gap-x-1'>
                    <Icon className='text-[35px] h-[35px] md:w-[45px] md:h-[45px]' type={'gozle-store-logo'} />
                    <h1 className='text-[#515151] font-medium text-[20px]'>Gozle Store</h1>
                </div>
                <div className='hidden md:flex items-center gap-x-20'>
                    <div className='flex items-center gap-x-6'>
                        <Icon type={'gift-cart'} />
                        <h3 className='text-[#08B26C] font-medium text-xl'>Гифткарты</h3>
                    </div>
                    <div className='flex items-center gap-x-6'>
                        <h3 className='text-[#22BCF7] font-medium text-xl'>Онлайн поддержка</h3>
                        <Icon type={'support'} />
                    </div>
                </div>
                <div className='flex items-center gap-x-6'>
                    <ul>
                        <li>RU</li>
                    </ul>
                    <button className='md:hidden'><Icon type={'menu'} /></button>
                </div>
            </Container>
        </nav>
    )
}
