import { MenuButton } from '@/shared/button'
import { Container } from '@/shared/container'
import { Icon } from '@/shared/icon'
import { LanguageSwithcer } from '@/shared/language-switcher'
import clsx from 'clsx'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    const [show, setShow] = React.useState(false)
    const { t } = useTranslation()
    return (
        <>
            <nav className='py-4 md:py-8 border-b border-[#D9D9D9]'>
                <Container className='flex items-center justify-between'>
                    <Link to={'/'} className='flex items-center gap-x-2'>
                        <Icon type='gozle-store-logo-mini' />
                        {/* 
                        <Icon className='w-[35px] h-[35px] md:w-[45px] md:h-[45px]' type={'gozle-store-logo'} />
                        <h1 className='text-[#515151] font-semibold text-[20px]'>Gozle Store</h1> */}
                    </Link>
                    <div className='hidden md:flex items-center gap-x-20'>
                        <Link to={'/departments'} className='flex items-center gap-x-6'>
                            <Icon type={'gift-cart'} />
                            <h3 className='text-[#08B26C] font-medium text-xl'>{t('giftCards')}</h3>
                        </Link>
                        <a href='https://store.gozle.org/chat/web/' target='_blank' className='flex items-center gap-x-6'>
                            <Icon type={'support'} />
                            <h3 className='text-[#22BCF7] font-medium text-xl'>{t('onlineSupport')}</h3>
                        </a>
                    </div>
                    <div className='flex items-center gap-x-6'>
                        <LanguageSwithcer className='hidden md:block' />
                        <MenuButton onClick={() => setShow(true)} className='md:hidden' />
                    </div>
                </Container>
            </nav>
            <div className={clsx('h-screen z-[999] bg-black fixed top-0 left-0 w-full flex justify-end transition-all duration-500', {
                'bg-opacity-30 visible': show,
                'bg-opacity-0 invisible': !show
            })}>
                <div className={clsx('w-[250px] transition-all duration-500 bg-white', {
                    'translate-x-[0px]': show,
                    'translate-x-[250px]': !show
                })}>
                    <div className='flex items-center justify-between p-4'>
                        <LanguageSwithcer />
                        <MenuButton onClick={() => setShow(false)} />
                    </div>
                    <div className='w-full h-[1.5px] bg-[#F2F1F1]'></div>
                    <div className='flex justify-end flex-col items-end gap-y-2 p-4'>
                        <Link onClick={() => setShow(false)} to={'/departments'} className='flex items-center gap-x-3'>
                            <Icon className='w-[28px] h-[28px]' type={'gift-cart'} />
                            <h3 className='text-[#08B26C] font-medium text-md'>{t('giftCards')}</h3>
                        </Link>
                        <Link onClick={() => setShow(false)} to={'/contact'} className='flex items-center gap-x-3'>
                            <Icon className='w-[28px] h-[28px]' type={'support'} />
                            <h3 className='text-[#22BCF7] font-medium text-md'>{t('onlineSupport')}</h3>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
