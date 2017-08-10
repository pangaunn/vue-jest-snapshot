import Vue from 'vue/dist/vue.common'
import ShoppingList from '../../src/components/ShoppingList.vue'

describe('ShoppingList component', () => {
  let $mounted
  beforeEach(() => {
    $mounted = new Vue(ShoppingList).$mount()
  })

  test('snapshot', () => {
    expect(true).toMatchSnapshot(true)
    let $html = $mounted.$el.outerHTML
    expect($html).toMatchSnapshot()
    $mounted.items[1].done = true
    Vue.nextTick(() => {
      $html = $mounted.$el.outerHTML
      expect($html).toMatchSnapshot()

      $mounted.items[1].done = false
      Vue.nextTick(() => {
        $html = $mounted.$el.outerHTML
        expect($html).toMatchSnapshot()
      })
    })
  })

  test('done click', () => {
    let lis = $mounted.$el.querySelectorAll('li')
    let button = lis[2].querySelector('button')
    let customEvent = new Event('click')
    button.dispatchEvent(customEvent)
    expect($mounted.items[2].done).toBeTruthy()
    Vue.nextTick(() => {
      let $html = $mounted.$el.outerHTML
      expect($html).toMatchSnapshot()
    })
  })

  test('add new item', () => {
    $mounted.newItem = 'NEW ITEM'
    Vue.nextTick(() => {
      let button = $mounted.$el.querySelector('#addBtn').click()
      Vue.nextTick(() => {
        let $html = $mounted.$el.outerHTML
        expect($html).toMatchSnapshot()
      })
    })
  })
})
