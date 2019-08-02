import Toast from './toast.vue'
export default {
    install(Vue, options){
        //生成一个toast组件，然后放到body里面
        Vue.prototype.$toast = function(message,toastOptions){
            let Constructor = Vue.extend(Toast)
            let toast = new Constructor({
                propsData: {
                    closeButton: toastOptions.closeButton
                }
            })
            //slot要写在$mount之前。default是一个数组。
            toast.$slots.default = [message]
            
            toast.$mount()
            //注意不要忘了body
            document.body.appendChild(toast.$el)
        }
    }
}