import Vue from 'vue/dist/vue.common'
import Hello from '../../src/components/Hello.vue'

describe('Hello component', () => {
  let $mounted
  beforeEach(() => {
    $mounted = new Vue(Hello).$mount()
  })

  test('snapshot', () => {
    let $html = $mounted.$el.outerHTML
    expect($html).toMatchSnapshot()
  })
})
