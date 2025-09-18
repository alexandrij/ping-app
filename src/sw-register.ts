import { Workbox } from 'workbox-window'

if ('serviceWorker' in navigator) {
  const swUrl = import.meta.env.DEV ? '/dev-sw.js?dev-sw' : '/sw.js'

  window.addEventListener('load', () => {
    const wb = new Workbox(swUrl)

    // Обработка обновлений сервис-воркера
    wb.addEventListener('waiting', () => {
      if (confirm('Доступна новая версия. Обновить?')) {
        wb.messageSkipWaiting()
      }
    })

    wb.addEventListener('activated', event => {
      if (event.isUpdate) {
        console.log('Service Worker обновлен')
      } else {
        console.log('Service Worker установлен')
      }
    })

    wb.register()
      .then(registration => {
        console.log('Service Worker зарегистрирован:', registration)
      })
      .catch(error => {
        console.error('Ошибка регистрации Service Worker:', error)
      })
  })
}
