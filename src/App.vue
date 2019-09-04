<template>
  <div id="app">
    <!-- <div class="testBox">
      <ez-cascader :source="sourceItem"> 
        <ez-button>点我</ez-button>
      </ez-cascader>
    </div> -->

    <!-- <div class="testBox">
      <div class="mybutton">
        <ez-button>默认按钮</ez-button>
        <ez-button type="primary">主要按钮</ez-button>
        <ez-button type="success">成功按钮</ez-button>
        <ez-button type="danger">危险按钮</ez-button>
      </div>

      <div class="mybutton">
        <ez-button round>默认按钮</ez-button>
        <ez-button type="primary" round>主要按钮</ez-button>
        <ez-button type="success" round>成功按钮</ez-button>
        <ez-button type="danger" round>危险按钮</ez-button>
      </div>
      <div class="mybutton">
        <ez-button round icon="search">默认按钮</ez-button>
        <ez-button
          type="primary"
          round
          icon="setting"
          loading
          iconPosition="right"
          >主要按钮</ez-button
        >
        <ez-button
          type="danger"
          round
          icon="delete"
          loading
          iconPosition="right"
          >删除按钮</ez-button
        >
      </div> -->

    <!-- <div class="mybutton">
        <ez-button-group>
          <ez-button icon="left">前进</ez-button>
          <ez-button icon="right" iconPosition="right">后退</ez-button>
        </ez-button-group>
      </div>

      <div class="mybutton">
        <ez-input value="双向绑定" @input="inputChange"></ez-input>
        <ez-input value="张三"></ez-input>
        <ez-input value="张三" disabled></ez-input>
        <ez-input value="张" error errorMessage="名字不能是一个字哦"></ez-input>
      </div>
 </div> -->
    <div class="mybutton">
      <button @click="showToast">点我触发Toast</button>
    </div>

    <!-- .sync等价于加上 @update:seleted="slectedTabs = $event"  -->
    <div class="testBox">
      <ez-tabs :selected.sync="slectedTabs">
        <ez-tabs-head>
          <ez-tabs-item name="beauty">美女新闻</ez-tabs-item>
          <ez-tabs-item name="finance">财经新闻</ez-tabs-item>
          <ez-tabs-item name="sports">体育新闻</ez-tabs-item>
          <ez-button slot="action">额外按钮</ez-button>
        </ez-tabs-head>
        <ez-tabs-body>
          <ez-tabs-pane name="beauty">关于美女的新闻</ez-tabs-pane>
          <ez-tabs-pane name="finance">关于财经的新闻</ez-tabs-pane>
          <ez-tabs-pane name="sports">关于体育的新闻</ez-tabs-pane>
        </ez-tabs-body>
      </ez-tabs>
    </div>

    <!-- <div class="testBox">
      <ez-popover position="top" trigger="click">
        <div slot="content">我是popover内容</div>
        <ez-button>点我上</ez-button>
      </ez-popover>
      <ez-popover position="bottom" trigger="click">
        <div slot="content">我是popover内容</div>
        <ez-button>点我下</ez-button>
      </ez-popover>

      <ez-popover position="left" trigger="click">
        <div slot="content">我是popover内容</div>
        <ez-button>点我左</ez-button>
      </ez-popover>

      <ez-popover position="right" trigger="click">
        <div slot="content">我是popover内容</div>
        <ez-button>点我右</ez-button>
      </ez-popover>
    </div> -->

    <!-- <div class="testBox">
      <ez-popover position="top" trigger="hover">
        <div slot="content">我是popover内容</div>
        <ez-button>点我上</ez-button>
      </ez-popover>
      <ez-popover position="bottom" trigger="hover">
        <div slot="content">我是popover内容</div>
        <ez-button>点我下</ez-button>
      </ez-popover>

      <ez-popover position="left" trigger="hover">
        <div slot="content">我是popover内容</div>
        <ez-button>点我左</ez-button>
      </ez-popover>

      <ez-popover position="right" trigger="hover">
        <div slot="content">我是popover内容</div>
        <ez-button>点我右</ez-button>
      </ez-popover>
    </div> -->

    <!-- <div class="testBox">
      <ez-collapse :selected="['item1', 'item2']">
        <ez-collapse-item
          title="一致性 Consistency
"
          name="item1"
          >与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
          在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</ez-collapse-item
        >
        <ez-collapse-item title="反馈 Feedback" name="item2"
          >控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
          页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</ez-collapse-item
        >
        <ez-collapse-item
          title="效率 Efficiency
"
          name="item3"
          >简化流程：设计简洁直观的操作流程；
          清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；
          帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</ez-collapse-item
        >
      </ez-collapse>
    </div> -->
  </div>
</template>

<script>
import Button from "@/components/Button/button.vue";
import "@/components/Icon/iconfont";
// import ButtonGroup from "./components/button-group.vue";
// import Input from "./components/input.vue";
import Tabs from "@/components/Tabs/tabs";
import TabsHead from "./components/Tabs/tabs-head";
import TabsBody from "./components/Tabs/tabs-body";
import TabsItem from "./components/Tabs/tabs-item";
import TabsPane from "./components/Tabs/tabs-pane";
// import tabsHeadVue from "./components/tabs-head.vue";
// import Popover from "./components/popover";
// import Collapse from "./components/collapse";
// import CollapseItem from "./components/collapse-item";
// import Cascader from "./components/cascader";
// import CascaderItems from "./components/cascader-items";

let options = [
  {
    value: "zhinan",
    label: "指南",
    children: [
      {
        value: "shejiyuanze",
        label: "设计原则",
        children: [
          {
            value: "yizhi",
            label: "一致"
          },
          {
            value: "fankui",
            label: "反馈"
          },
          {
            value: "xiaolv",
            label: "效率"
          },
          {
            value: "kekong",
            label: "可控"
          }
        ]
      },
      {
        value: "daohang",
        label: "导航",
        children: [
          {
            value: "cexiangdaohang",
            label: "侧向导航"
          },
          {
            value: "dingbudaohang",
            label: "顶部导航"
          }
        ]
      }
    ]
  },
  {
    value: "zujian",
    label: "组件",
    children: [
      {
        value: "basic",
        label: "Basic",
        children: [
          {
            value: "layout",
            label: "Layout 布局"
          },
          {
            value: "color",
            label: "Color 色彩"
          },
          {
            value: "typography",
            label: "Typography 字体"
          },
          {
            value: "icon",
            label: "Icon 图标"
          },
          {
            value: "button",
            label: "Button 按钮"
          }
        ]
      },
      {
        value: "form",
        label: "Form",
        children: [
          {
            value: "radio",
            label: "Radio 单选框"
          },
          {
            value: "checkbox",
            label: "Checkbox 多选框"
          },
          {
            value: "input",
            label: "Input 输入框"
          },
          {
            value: "input-number",
            label: "InputNumber 计数器"
          },
          {
            value: "select",
            label: "Select 选择器"
          },
          {
            value: "cascader",
            label: "Cascader 级联选择器"
          },
          {
            value: "switch",
            label: "Switch 开关"
          },
          {
            value: "slider",
            label: "Slider 滑块"
          },
          {
            value: "time-picker",
            label: "TimePicker 时间选择器"
          },
          {
            value: "date-picker",
            label: "DatePicker 日期选择器"
          },
          {
            value: "datetime-picker",
            label: "DateTimePicker 日期时间选择器"
          },
          {
            value: "upload",
            label: "Upload 上传"
          },
          {
            value: "rate",
            label: "Rate 评分"
          },
          {
            value: "form",
            label: "Form 表单"
          }
        ]
      },
      {
        value: "data",
        label: "Data",
        children: [
          {
            value: "table",
            label: "Table 表格"
          },
          {
            value: "tag",
            label: "Tag 标签"
          },
          {
            value: "progress",
            label: "Progress 进度条"
          },
          {
            value: "tree",
            label: "Tree 树形控件"
          },
          {
            value: "pagination",
            label: "Pagination 分页"
          },
          {
            value: "badge",
            label: "Badge 标记"
          }
        ]
      },
      {
        value: "notice",
        label: "Notice",
        children: [
          {
            value: "alert",
            label: "Alert 警告"
          },
          {
            value: "loading",
            label: "Loading 加载"
          },
          {
            value: "message",
            label: "Message 消息提示"
          },
          {
            value: "message-box",
            label: "MessageBox 弹框"
          },
          {
            value: "notification",
            label: "Notification 通知"
          }
        ]
      },
      {
        value: "navigation",
        label: "Navigation",
        children: [
          {
            value: "menu",
            label: "NavMenu 导航菜单"
          },
          {
            value: "tabs",
            label: "Tabs 标签页"
          },
          {
            value: "breadcrumb",
            label: "Breadcrumb 面包屑"
          },
          {
            value: "dropdown",
            label: "Dropdown 下拉菜单"
          },
          {
            value: "steps",
            label: "Steps 步骤条"
          }
        ]
      },
      {
        value: "others",
        label: "Others",
        children: [
          {
            value: "dialog",
            label: "Dialog 对话框"
          },
          {
            value: "tooltip",
            label: "Tooltip 文字提示"
          },
          {
            value: "popover",
            label: "Popover 弹出框"
          },
          {
            value: "card",
            label: "Card 卡片"
          },
          {
            value: "carousel",
            label: "Carousel 走马灯"
          },
          {
            value: "collapse",
            label: "Collapse 折叠面板"
          }
        ]
      }
    ]
  },
  {
    value: "ziyuan",
    label: "资源",
    children: [
      {
        value: "axure",
        label: "Axure Components"
      },
      {
        value: "sketch",
        label: "Sketch Templates"
      },
      {
        value: "jiaohu",
        label: "组件交互文档"
      }
    ]
  }
];

export default {
  name: "app",
  data() {
    return {
      slectedTabs: "finance",
      // sourceItem: options
    };
  },
  components: {
    "ez-button": Button,
    // "ez-button-group": ButtonGroup,
    // "ez-input": Input,
    "ez-tabs": Tabs,
    "ez-tabs-head": TabsHead,
    "ez-tabs-body": TabsBody,
    "ez-tabs-item": TabsItem,
    "ez-tabs-pane": TabsPane,
    // "ez-popover": Popover,
    // "ez-collapse": Collapse,
    // "ez-collapse-item": CollapseItem,
    // "ez-cascader": Cascader,
    // "ez-cascader-items": CascaderItems
  },
  methods: {
    //   inputChange(e) {
    //     console.log(e);
    //   },
    showToast() {
      this.$toast("点击成功", {
        autoClose: 1,
        closeButton: {
          text: "关闭",
          closeCallback(toast) {
            console.log(toast);
          }
        },
        enableHtml: false,
        position: "top"
      });
    }
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
:root {
  box-sizing: border-box;

  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei";
}

.mybutton {
  display: inline-flex;
  margin: 20px;
}
.testBox {
  display: block;
  padding: 24px;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  margin: 10px 10px;
}
</style>
