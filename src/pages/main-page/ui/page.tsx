import { Icon } from '@/shared/icon'
import { Container } from '@/shared/container'
import { Navbar } from '@/widgets/navbar'

export const MainPage = () => {
    return (
        <div className='h-screen flex flex-col'>
            <Navbar />
            <Container className='flex flex-col flex-1 items-center justify-center gap-y-4'>
                <div className='flex items-center gap-x-3'>
                    <Icon className='w-[55px] h-[55px] md:w-[130px] md:h-[130px]' type={'gozle-store-logo'} />
                    <h1 className='text-[#515151] font-medium text-[28px] md:text-[48px]'>Gozle Store</h1>
                </div>
                <h2 className='text-[#515151] text-[25px] md:text-[45px] font-medium text-center'>Магазин компьютерных игр и приложений</h2>
                <a href='https://store.gozle.com.tm/upload/gozle_store.exe' target='_blank' className='flex items-center gap-x-8 mt-14 md:mt-0 text-[17px] md:text-[23px] bg-gradient-to-t from-[#40CAFF] via-[#22BCF7] to-[#00ACEE] text-white py-2.5 md:py-5 px-6 md:px-12 rounded-[4px] md:rounded-[10px]'>
                    <p>Скачать приложение</p>
                    <Icon className='w-[25px] h-[25px] md:w-[35px] md:h-[35px]' type='windows' />
                </a>
            </Container>
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
