const App = {
  data() {
    return {
      placeholderString: 'Введите название заметки',
      title: 'Список заметок'
    }
  }
}

const app = Vue.createApp(App)
app.mount('#app') // по селектору определяем место, с которым будет работать vue