import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import Vue from 'vue'
import Row from '@/components/Grid/row'
import Col from '@/components/Grid/col'

chai.use(sinonChai)

describe('Row', () => {

  it('存在.', () => {
    expect(Row).to.exist
  })
  it('接收 gutter 属性.', () => {
    Vue.component('ez-row', Row)
    Vue.component('ez-col', Col)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <ez-row gutter="20">
        <ez-col span="12"></ez-col>
        <ez-col span="12"></ez-col>
      </ez-row>
    `
    const vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      const row = vm.$el.querySelector('.row')
      expect(getComputedStyle(row).marginLeft).to.eq('-10px')
      expect(getComputedStyle(row).marginRight).to.eq('-10px')
      const cols = vm.$el.querySelectorAll('.col')
      expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
      expect(getComputedStyle(cols[1]).paddingLeft).to.eq('10px')
      vm.$el.remove()
      vm.$destroy()
    })
  })
  it('接收 align 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Row)
    const vm = new Constructor({
      propsData: {
        align: 'right'
      }
    }).$mount(div)
    const element = vm.$el
    expect(getComputedStyle(element).justifyContent).to.equal('flex-end')
    div.remove()
    vm.$destroy()
  })

})