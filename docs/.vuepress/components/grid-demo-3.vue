<template>
  <div style="padding-top: 16px;">
    <h3>设置空隙</h3>
    <p>设置 <code>offset</code> 属性 </p>
    <p>
      <strong>预览</strong>
    </p>
    <ez-row class="demoRow" gutter="10">
      <ez-col span="8">
        <div class="demoCol">8</div>
      </ez-col>
      <ez-col span="8" offset="8">
        <div class="demoCol">8</div>
      </ez-col>
    </ez-row>
    <ez-row class="demoRow" gutter="10">
      <ez-col span="6" offset="6">
        <div class="demoCol">6</div>
      </ez-col>
      <ez-col span="6" offset="6">
        <div class="demoCol">6</div>
      </ez-col>
    </ez-row>
    <ez-row class="demoRow" gutter="10">
      <ez-col span="4">
        <div class="demoCol">4</div>
      </ez-col>
      <ez-col span="4" offset="4">
        <div class="demoCol">4</div>
      </ez-col>
      <ez-col span="4" offset="8">
        <div class="demoCol">4</div>
      </ez-col>
    </ez-row>
    <ez-row class="demoRow" gutter="10">
      <ez-col span="2">
        <div class="demoCol">2</div>
      </ez-col>
      <ez-col span="2" offset="2">
        <div class="demoCol">2</div>
      </ez-col>
      <ez-col span="2">
        <div class="demoCol">2</div>
      </ez-col>
      <ez-col span="2" offset="2">
        <div class="demoCol">2</div>
      </ez-col>
      <ez-col span="2">
        <div class="demoCol">2</div>
      </ez-col>
      <ez-col span="2" offset="2">
        <div class="demoCol">2</div>
      </ez-col>
      <ez-col span="2">
        <div class="demoCol">2</div>
      </ez-col>
      <ez-col span="2" offset="2">
        <div class="demoCol">2</div>
      </ez-col>
    </ez-row>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
import Row from '../../../src/components/Grid/row'
  import Col from '../../../src/components/Grid/col'

  export default {
    components: {'ez-row':Row, 'ez-col':Col},    
    data () {
      return {
        content: `
          * {
            box-sizing: border-box;
          }

          <ez-row class="demoRow" gutter="10">
            <ez-col span="8">
              <div class="demoCol">8</div>
            </ez-col>
            <ez-col span="8" offset="8">
              <div class="demoCol">8</div>
            </ez-col>
          </ez-row>
          <ez-row class="demoRow" gutter="10">
            <ez-col span="6" offset="6">
              <div class="demoCol">6</div>
            </ez-col>
            <ez-col span="6" offset="6">
              <div class="demoCol">6</div>
            </ez-col>
          </ez-row>
          <ez-row class="demoRow" gutter="10">
            <ez-col span="4">
              <div class="demoCol">4</div>
            </ez-col>
            <ez-col span="4" offset="4">
              <div class="demoCol">4</div>
            </ez-col>
            <ez-col span="4" offset="8">
              <div class="demoCol">4</div>
            </ez-col>
          </ez-row>
          <ez-row class="demoRow" gutter="10">
            <ez-col span="2">
              <div class="demoCol">2</div>
            </ez-col>
            <ez-col span="2" offset="2">
              <div class="demoCol">2</div>
            </ez-col>
            <ez-col span="2">
              <div class="demoCol">2</div>
            </ez-col>
            <ez-col span="2" offset="2">
              <div class="demoCol">2</div>
            </ez-col>
            <ez-col span="2">
              <div class="demoCol">2</div>
            </ez-col>
            <ez-col span="2" offset="2">
              <div class="demoCol">2</div>
            </ez-col>
            <ez-col span="2">
              <div class="demoCol">2</div>
            </ez-col>
            <ez-col span="2" offset="2">
              <div class="demoCol">2</div>
            </ez-col>
          </ez-row>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }
  .demoRow{
    margin: 10px 0;
  }
  .demoCol {
    color: #fff;
    height: 50px;
    border: 1px solid #eee;
    background: #41b883;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>