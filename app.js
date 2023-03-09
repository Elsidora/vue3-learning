const App = {
  data() {
    return {
      counter: 0
    }
  }
}

const app = Vue.createApp(App)
app.mount('#app') // по селектору определяем место, с которым будет работать vue