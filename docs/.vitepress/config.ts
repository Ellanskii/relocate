import { defineConfig } from 'vitepress'
import countriesRaw from './countries.json'

const countries = countriesRaw
.filter(c => c.code.length)
.sort((a, b) => a.text.localeCompare(b.text))
.map(country => ({
  text: `${country.icon} ${country.text}`,
  link: '/countries/' + country.code
}))

export default defineConfig({
  // base: '/relocate/',
  lang: 'ru-RU',
  title: 'Эмиграция из России',
  description: '',
  // lastUpdated: true,
  themeConfig: {
    nav: [
      {
        text: 'Поддержать проект',
        link: '/support'
      }
    ],
    sidebar: [
      {
        text: 'Страны',
        collapsible: true,
        items: countries
      }
    ],
    outlineTitle: 'Содержание',
    editLink: {
      pattern: 'https://github.com/ellanskii/relocate/edit/master/docs/:path',
      text: 'Нашли неточность или хотите дополнить? Отредактируйте страницу на Github'
    },
    lastUpdatedText: 'Обновлено',
    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница'
    }
  }
})