import { Container } from '@/shared/container'
import { Footer } from '@/widgets/footer'
import { Navbar } from '@/widgets/navbar'
import { useTranslation } from 'react-i18next'

export const ContactPage = () => {
    const { t } = useTranslation()
    return (
        <div className='h-screen flex flex-col'>
            <Navbar />
            <Container className='flex flex-col flex-1 my-4 space-y-8'>
                <div>
                    <h3 className='font-bold text-[24px]'>{t('contacts')}</h3>
                    <h4 className='font-medium text-[22px] mb-4'>{t('technicalSupport')}</h4>
                    <ul className='space-y-2 font-medium'>
                        <li><a href="tel:+99312753747">+993 (12) 75-37-47</a></li>
                        <li><a href="tel:+99361859499">+993 (61) 85-94-99</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className='font-medium text-[22px] mb-4'>{t('salesDepartment')}</h4>
                    <ul className='space-y-2 font-medium'>
                        <li><a href="mailto:sales@gozle.store">sales@gozle.store</a></li>
                        <li><a href="tel:+99361859499">+993 (61) 85-94-99</a></li>
                    </ul>
                </div>
            </Container>
            <Footer />
        </div>
    )
}
