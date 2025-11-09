export const useLangSwitcher = () => {
  const {locale, locales, setLocale} = useI18n()
  const newLocale = locales.value.filter(({code}) => code !== locale.value)[0]
  const {name = 'Ру', code = 'ru'} = newLocale || {}

  const langSwitch = () => setLocale(code)

  return {
    name,
    code,
    langSwitch
  }
}
