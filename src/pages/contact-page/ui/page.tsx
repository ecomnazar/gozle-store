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
                        <li><a href="mailto:sales@gozle.store">sales@gozle.store</a></li>

                    </ul>
                </div>
                <div>
                    <h4 className='font-medium text-[22px] mb-4'>{t('salesDepartment')}</h4>
                    <ul className='space-y-2 font-medium'>
                        <li><a href="mailto:sales@gozle.store">sales@gozle.store</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className='font-medium text-[22px] mb-4'>{t('forContact')}</h4>
                    <ul className='space-y-2 font-medium'>
                        <li><a href="mailto:sales@gozle.store">press@gozle.store</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className='font-medium text-[22px] mb-4'>{t('errorReports')}</h4>
                    <ul className='space-y-2 font-medium'>
                        <li><a href="mailto:sales@gozle.store">bugs@gozle.store</a></li>
                    </ul>
                </div>
            </Container>
            <Footer />
        </div>
    )
}
