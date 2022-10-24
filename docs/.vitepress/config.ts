import { defineConfig } from 'vitepress'
import countries from './countries.json'

export default defineConfig({
  title: 'Relocate.me',
  description: 'Escape from Mordor',
  themeConfig: {
    sidebar: [
      {
        text: 'Страны',
        collapsible: true,
        items: countries.map(country => ({
          text: `${country.icon} ${country.text}`,
          link: '/countries/' + country.code
        }))
      }
    ],
    outlineTitle: 'Содержание',
    editLink: {
      pattern: 'https://github.com/ellanskii/relocate/edit/master/docs/:path',
      text: 'Нашли неточность или хотите дополнить? Отредактировать страницу'
    }
  }
})