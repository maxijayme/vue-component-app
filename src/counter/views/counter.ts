import { defineComponent, ref } from "vue";

export default defineComponent({
  setup(){
    const counter = ref(1)
    const increase = ()=>{
      return counter.value++
    }

    return { counter, increase}
  }
})