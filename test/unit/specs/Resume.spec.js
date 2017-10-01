import Vue from 'vue'
import Resume from '@/components/Resume'

describe('Resume.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Resume)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('#name h1').textContent)
      .to.equal('Abdul Rehman, Hafiz')
  })
})
