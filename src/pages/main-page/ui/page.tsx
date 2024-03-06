import { Icon } from '@/shared/icon'
import { Container } from '@/shared/container'
import { Navbar } from '@/widgets/navbar'
import { useTranslation } from 'react-i18next'
import { Footer } from '@/widgets/footer'

export const MainPage = () => {
    const { t } = useTranslation()
    return (
        <div className='h-screen flex flex-col'>
            <Navbar />
            <Container className='flex flex-col flex-1 items-center justify-center gap-y-4'>
                <div className='flex items-center gap-x-3'>
                    <Icon className='w-[55px] h-[55px] md:w-[90px] md:h-[90px]' type={'gozle-store-logo'} />
                    <h1 className='text-[#515151] font-medium text-[28px] md:text-[48px]'>Gozle Store</h1>
                </div>
                <h2 className='text-[#515151] text-[25px] md:text-[45px] font-medium text-center'>{t('gameStore')}</h2>
                <a href='https://store.gozle.com.tm/upload/gozle_store.exe' target='_blank' className='flex items-center gap-x-8 mt-14 md:mt-0 text-[17px] md:text-[23px] bg-gradient-to-t from-[#40CAFF] via-[#22BCF7] to-[#00ACEE] text-white py-2.5 md:py-5 px-6 md:px-12 rounded-[4px] md:rounded-[10px]'>
                    <p>{t('downloadApp')}</p>
                    <Icon className='w-[25px] h-[25px] md:w-[35px] md:h-[35px]' type='windows' />
                </a>
            </Container>
            <Footer />
        </div>
    )
}
