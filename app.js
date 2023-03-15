const App = {
  data() {
    return {
      placeholderString: 'Введите название заметки',
      title: 'Список заметок',
      inputValue: '',
      notes: ['Заметка 1', 'Заметка 2']
    }
  },
  methods: {
    changeInputHandler(evt) {
      console.log('changeInputHandler', evt.target.value)
      this.inputValue=evt.target.value
    },
    addNewNote(evt) {
      if (this.inputValue !== '') {
        this.notes.push(this.inputValue)
        this.inputValue = ''
      }
    },
    toUpperCase(item) {
      return item.toUpperCase()
    },
    deleteNote(evt, idx) {
      this.notes.splice(idx, 1)
    }
  },
  computed: {
    doubleCountComputed() {
      console.log('doubleCountComputed')
      return this.notes.length * 2  // если есть внутри приложения какие-то переменные, от которых вычисляем результат, то для оптимизации приложения, производительности его, эти вычисления надо кидать в computed
    }
  },
  watch: {  // watch - свойство, позволяющее следить за изменениями переменных приложения. Создаем метод с таким же названием, как и переменная
    inputValue(value) {
      if (value.length > 10) {
        this.inputValue = ''
      }
    }
  }
}

const app = Vue.createApp(App)
app.mount('#app') // по селектору определяем место, с которым будет работать vue