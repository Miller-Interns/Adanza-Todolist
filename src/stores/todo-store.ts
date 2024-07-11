import { defineStore } from 'pinia'
import { type Todo } from '../types'

//state = ref/data
//getter = computed
//action = methods

let id = 0

export const useTodoStore = defineStore('todoStore', {
  state: () => ({
    todos: [
      { id: id++, text: 'Clean the House', category: 'Chores', checked: false },
      { id: id++, text: 'Laundry', category: 'Chores', checked: false },
      { id: id++, text: 'Dishes', category: 'Chores', checked: false },
      { id: id++, text: 'Valorant', category: 'Gaming', checked: false },
      { id: id++, text: 'Table Tennis', category: 'Gaming', checked: false },
      { id: id++, text: 'Basketball', category: 'Gaming', checked: false }
    ],
    categories: [{ name: 'Chores' }, { name: 'Gaming' }]
  }),
  actions: {
    addTodo(newTodo: string, category: string) {
      this.todos.push({ id: id++, text: newTodo, category: category, checked: false })
    },

    removeTodo(todo: Todo) {
      this.todos = this.todos.filter((t) => t !== todo)
    },

    editTodo(todo: Todo, text: string) {
      this.todos.map((t, index) => {
        if (t.id === todo.id) {
          this.todos[index].text = text
        }
      })
    },

    addCategory(newCategory: string) {
      this.categories.push({ name: newCategory })
    },

    removeCategory(category: string) {
      this.todos = this.todos.filter((t) => t.category !== category)
      this.categories = this.categories.filter((c) => c.name !== category)
    }
  }
})
