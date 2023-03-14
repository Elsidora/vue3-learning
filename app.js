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
      this.notes.push(this.inputValue)
      this.inputValue = ''
    },
    deleteNote(evt, idx) {
      this.notes.splice(idx, 1)
    }
  }
}

const app = Vue.createApp(App)
app.mount('#app') // по селектору определяем место, с которым будет работать vue