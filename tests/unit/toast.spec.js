import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { shallowMount, mount } from '@vue/test-utils'
import Toast from '@/components/Toast/toast'

chai.use(sinonChai)

describe('Toast.vue', (done) => {
  it('存在.', () => {
    expect(Toast).to.exist
  })

  describe('props', function () {
    it('接受 autoClose', (done) => {
      const wrapper = mount(Toast, {
        attachToDocument: true,
        propsData: {
          autoClose: true,
          closeTime: 1
        }
      })
      const vm = wrapper.vm
      vm.$on('close', () => {
        expect(document.body.contains(vm.$el)).to.eq(false)
        done()
      })
    })

    it('接受 closeButton', () => {
      const closeCallback = sinon.fake();
      const wrapper = mount(Toast, {
        attachToDocument: true,
        propsData: {
          closeButton: {
            text: '关闭吧',
            closeCallback,
          },
        }
      })
      const vm = wrapper.vm
      let closeButton = vm.$el.querySelector('.close')
      expect(closeButton.textContent.trim()).to.eq('关闭吧')
      closeButton.click()
      expect(closeCallback).to.have.been.called
    })

    // it('接受 enableHtml', () => {
    //   const wrapper = mount(Toast, {
    //     attachToDocument: true,
    //     propsData: { enableHtml: true },
    //     slots: {
    //       default: '<strong id="test">hi</strong>'
    //     }
    //   })
    //   const vm = wrapper.vm
    //   let strong = vm.$el.querySelector('#test')
    //   expect(strong).to.exist
    // })

    it('接受 position', () => {
      const wrapper = mount(Toast, {
        attachToDocument: true,
        propsData: {
          position: 'bottom'
        }
      })
      const vm = wrapper.vm
      expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
    })
  })

})
