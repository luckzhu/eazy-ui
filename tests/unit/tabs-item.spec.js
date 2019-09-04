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
}) 