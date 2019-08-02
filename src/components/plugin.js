import Toast from './toast.vue'

function createToast({ Vue, message, propsData }) {
    //生成一个toast组件，然后放到body里面
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({ propsData })
    //slot要写在$mount之前。default是一个数组。
    toast.$slots.default = [message]
    toast.$mount()
    //注意不要忘了body
    document.body.appendChild(toast.$el)
    return toast
}

let currentToast


export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (message, toastOptions) {
            if(currentToast){
                currentToast.close()
            }
            currentToast = createToast({ Vue, message, propsData: toastOptions })
        }
    }
}


