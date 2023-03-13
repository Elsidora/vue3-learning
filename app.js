const App = {
  data() {
    return {
      placeholderString: 'Введите название заметки',
      title: 'Список заметок',
      inputValue: ''
    }
  },
  methods: {
    changeInputHandler(evt) {
      console.log('changeInputHandler', evt.target.value)
      this.inputValue=evt.target.value
    }
  }
}

const app = Vue.createApp(App)
app.mount('#app') // по селектору определяем место, с которым будет работать vue