import { defineConfig } from 'vitepress'
import countriesRaw from './countries.json'

const countries = countriesRaw
// .filter(c => c.code.length)
.sort((a, b) => a.text.localeCompare(b.text))
.map(country => ({
  text: `${country.icon} ${country.text}`,
  link: '/countries/' + country.code
}))

export default defineConfig({
  // base: '/relocate/',
  title: 'Relocate.me',
  description: 'Escape from Mordor',
  themeConfig: {
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
    }
  }
})