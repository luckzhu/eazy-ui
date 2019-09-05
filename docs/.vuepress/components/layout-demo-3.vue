<template>
  <div style="padding-top: 4px;">
    <h3>整体有侧边栏</h3>
    <p>
      <strong>预览</strong>
    </p>

    <ez-layout style="color: white; overflow:hidden; margin-bottom:50px;">
      <ez-sider style=" background:#ddd; width:200px; color: black;">
        sider
      </ez-sider>
      <ez-layout>
        <ez-header style="height: 50px; background:#41b883;">
          header
        </ez-header>
        <ez-content style="height: 100px; background:#365161;">
          content
        </ez-content>
        <ez-footer style="height: 50px; background:#41b883;">
          footer
        </ez-footer>
      </ez-layout>
    </ez-layout>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<style scoped>
  * {
    box-sizing: border-box;
  }
</style>
<script>
import Layout from "../../../src/components/Layout/layout";
import Header from "../../../src/components/Layout/header";
import Footer from "../../../src/components/Layout/footer";
import Content from "../../../src/components/Layout/content";
import Sider from "../../../src/components/Layout/sider";

export default {
  components: {
    "ez-layout": Layout,
    "ez-header": Header,
    "ez-footer": Footer,
    "ez-content": Content,
    "ez-sider": Sider
  },
    data () {
      return {
        content: `
          <ez-layout style="color: white; overflow:hidden; margin-bottom:50px;">
            <ez-sider style=" background:#ddd; width:200px; color: black;">
              sider
            </ez-sider>
            <ez-layout>
              <ez-header style="height: 50px; background:#41b883;">
                header
              </ez-header>
              <ez-content style="height: 100px; background:#365161;">
                content
              </ez-content>
              <ez-footer style="height: 50px; background:#41b883;">
                footer
              </ez-footer>
            </ez-layout>
          </ez-layout>

      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>