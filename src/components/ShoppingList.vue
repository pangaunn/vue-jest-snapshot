<template>
  <ul class="shopping-list">
    <li v-for="(item, index) in items" :key="item.uuid" :class="{ done: item.done}">
      {{ item.text }}
      <button @click="complete(index)">Done</button>
    </li>
    <input type="text" v-model="newItem"/><button @click="add">+</button>
  </ul>
</template>

<script>
export default {
  name: 'shopping-list',
  data () {
    return {
      newItem: '',
      items: [
        {text: 'Beer', done: true, uuid: 1},
        {text: 'Milk', done: false, uuid: 2},
        {text: 'Apple', done: false, uuid: 3}
      ]
    }
  },
  methods: {
    complete (index) {
      this.items[index].done = true
    },
    add () {
      if (this.newItem !== '') {
        this.items.push({
          text: this.newItem,
          done: false
        })
      }
    }
  }
}
</script>
