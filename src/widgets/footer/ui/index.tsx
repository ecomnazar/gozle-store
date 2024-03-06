import { Container } from '@/shared/container'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export const Footer = () => {
    const { t } = useTranslation()
    return (
        <footer className='py-4 border-t border-[#D9D9D9]'>
            <Container>
                <ul className='flex items-center gap-x-4 justify-end font-medium'>
                    <Link to={'/contact'}>{t("salesDepartment")}</Link>
                    <Link to={'/contact'}>{t("becomePartner")}</Link>
                </ul>
            </Container>
        </footer>
    )
}
