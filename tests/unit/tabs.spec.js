import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import Tabs from '@/components/Tabs/tabs'
chai.use(sinonChai)

describe('Tabs.vue', () => {
  it('存在.', () => {
    expect(Tabs).to.exist
  })
})