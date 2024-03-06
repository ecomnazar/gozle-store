import React from 'react'
import { useTranslation } from 'react-i18next'
import { Listbox, Transition } from '@headlessui/react'
import { Icon } from '../icon'
import clsx from 'clsx'

interface Props {
    className?: string
}

const languages = ['tm', 'en', 'ru']
export const LanguageSwithcer: React.FC<Props> = ({ className }) => {
    const { i18n } = useTranslation()
    const currentLanguage = i18n.language
    const [selected, setSelected] = React.useState(currentLanguage)
    return (
        <Listbox value={selected} onChange={setSelected}>
            <div className={clsx("relative", className)}>
                <Listbox.Button className="relative w-full  rounded-lg bg-white py-3 px-4 flex items-center gap-x-2 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                    {selected === 'tm' && <Icon type={`tm-logo`} />}
                    {selected === 'ru' && <Icon type={`ru-logo`} />}
                    {selected === 'en' && <Icon type={`en-logo`} />}
                    <span className="block truncate font-medium ">{selected.toUpperCase()}</span>
                </Listbox.Button>
                <Transition
                    as={React.Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                        {languages.map((lng, idx) => (
                            <Listbox.Option
                                key={idx}
                                className={({ active }) =>
                                    `relative text-center cursor-default flex items-center justify-center gap-x-2 select-none py-2 ${active ? 'bg-[#22BCF7]/10' : 'text-gray-900'
                                    }`
                                }
                                value={lng}
                                onClick={() => i18n.changeLanguage(lng)}
                            >
                                {({ selected }) => (
                                    <>
                                        {lng === 'tm' && <Icon type={`tm-logo`} />}
                                        {lng === 'ru' && <Icon type={`ru-logo`} />}
                                        {lng === 'en' && <Icon type={`en-logo`} />}
                                        <span
                                            className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                }`}
                                        >
                                            {lng.toUpperCase()}
                                        </span>
                                    </>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    )
}
