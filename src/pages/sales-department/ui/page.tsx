import { Container } from '@/shared/container'
import { Map } from '@/shared/map'
import { Footer } from '@/widgets/footer'
import { Navbar } from '@/widgets/navbar'
import { useTranslation } from 'react-i18next'

export const SalesDepartment = () => {
    const { t } = useTranslation()
    return (
        <div className='h-screen flex flex-col'>
            <Navbar />
            <Container className='flex flex-col flex-1 my-4 space-y-8'>
                <div>
                    <h3 className='font-bold text-[24px] mb-4'>{t('giftCardShops')}</h3>
                    <div className='h-[400px]'>
                        <Map />
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    )
}
