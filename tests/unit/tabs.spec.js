import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import Vue from 'vue'

import Tabs from "@/components/Tabs/tabs";
import TabsHead from "@/components/Tabs/tabs-head";
import TabsBody from "@/components/Tabs/tabs-body";
import TabsItem from "@/components/Tabs/tabs-item";
import TabsPane from "@/components/Tabs/tabs-pane";
chai.use(sinonChai)

Vue.component('ez-tabs', Tabs)
Vue.component('ez-tabs-head', TabsHead)
Vue.component('ez-tabs-body', TabsBody)
Vue.component('ez-tabs-item', TabsItem)
Vue.component('ez-tabs-pane', TabsPane)

describe('Tabs.vue', () => {

  it('存在.', () => {
    expect(Tabs).to.exist
  })

  it('接受 selected 属性', () => {

    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <ez-tabs selected="finance">
        <ez-tabs-head>
          <ez-tabs-item name="woman"> 美女 </ez-tabs-item>
          <ez-tabs-item name="finance"> 财经 </ez-tabs-item>
          <ez-tabs-item name="sports"> 体育 </ez-tabs-item>
        </ez-tabs-head>
        <ez-tabs-body>
          <ez-tabs-pane name="woman"> 美女相关资讯 </ez-tabs-pane>
          <ez-tabs-pane name="finance"> 财经相关资讯 </ez-tabs-pane>
          <ez-tabs-pane name="sports"> 体育相关资讯 </ez-tabs-pane>
        </ez-tabs-body>
      </ez-tabs>
    `
    let vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      let x = vm.$el.querySelector(`.tabs-item[data-name="finance"]`)
      expect(x.classList.contains('tabActiveClass')).to.be.true
   
    })
  })

})