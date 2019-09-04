import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import TabsItem from '@/components/Tabs/tabs-item'
chai.use(sinonChai)


describe('TabsItem.vue', () => {
  it('存在.', () => {
    expect(TabsItem).to.exist
  })

  it('接受 name 属性', () => {
    const wrapper = mount(TabsItem, {
      attachToDocument: true,
      propsData: {
        name: 'xxx',
      }
    })
    const vm = wrapper.vm
    expect(vm.$el.getAttribute('data-name')).to.eq('xxx')
  })

  it('接受 disabled 属性', () => {
    const wrapper = mount(TabsItem, {
      attachToDocument: true,
      propsData: {
        disabled: true,
      }
    })
    const vm = wrapper.vm
    expect(vm.$el.classList.contains('disabled')).to.be.true
    const callback = sinon.fake();
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback).to.have.not.been.called
  })
}) 