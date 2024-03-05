import React from 'react'
import { Icon } from '@/shared/icon'
import { Container } from '@/shared/container'

export const MainPage = () => {
    return (
        <div className='h-screen flex flex-col'>
            <nav className='py-4 md:py-8 border-b border-[#D9D9D9]'>
                <Container className='flex items-center justify-between'>
                    <div className='flex items-center gap-x-1'>
                        <Icon type={'gozle-store-logo'} />
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
                    <ul>
                        <li>RU</li>
                    </ul>
                </Container>
            </nav>
            <div className='flex flex-col flex-1 items-center justify-center gap-y-4'>
                <div className='flex items-center gap-x-3'>
                    <Icon className='w-[130px] h-[130px]' type={'gozle-store-logo'} />
                    <h1 className='text-[#515151] font-medium text-[48px]'>Gozle Store</h1>
                </div>
                <h2 className='text-[#515151] text-[45px] font-medium'>Магазин компьютерных игр и приложений</h2>
                <a href='https://store.gozle.com.tm/upload/gozle_store.exe' target='_blank' className='flex items-center gap-x-8 text-[23px] bg-gradient-to-t from-[#40CAFF] via-[#22BCF7] to-[#00ACEE] text-white py-5 px-12 rounded-[10px]'>
                    <p>Скачать приложение</p>
                    <Icon type='windows' />
                </a>
            </div>
            <footer className='py-4 border-t border-[#D9D9D9]'>
                <Container>
                    <ul className='flex items-center gap-x-4 justify-end font-medium'>
                        <li>Отдел продажи</li>
                        <li>Стать партнером</li>
                    </ul>
                </Container>
            </footer>
        </div>
    )
}
