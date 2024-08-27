<script setup lang="ts">
    import { ref,reactive } from 'vue'
    import { nextTick } from 'vue'
    // ref() 接收参数，并将其包裹在一个带有 .value 属性的 ref 对象中返回
    // ref() 的参数可以是任何类型的数据
    // ref() 返回的是一个响应式对象，当 ref 对象的 .value 属性发生变化时，Vue 会自动更新使用该 ref 对象的视图
    // ref() 的参数可以是任何类型的数据，包括对象和数组
    // ref() 返回的是一个响应式对象，当 ref 对象的 .value 属性发生变化时，Vue 会自动更新使用该 ref 对象的视图
    // ref() 的参数可以是任何类型的数据，包括对象和数组
    
    const count = ref(0)
    const increment = async () => {
        count.value++
        await nextTick()
        console.log(count.value)
    }

    const stateList = reactive([{
        name: 'John',
        age: 30
    },{
        name: 'Jane',
        age: 25
    }])

</script>

<template>
<div class="welcome">
    <h1 class="text-2xl font-bold green">Welcome to the Vue 3 App</h1>
    <p class="text-xl font-bold text-red-500 mb-5">Count: {{ count }}</p>
    <button @click="increment" class="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Increment</button>
</div>
<div class="container">
    <div v-for="item in stateList" :key="item.name" class="item border-2 border-gray-400 p-4 m-4 h-20 leading-10">
        <p class="float-left">Name: {{ item.name }}</p>
        <p class="float-right">Age: {{ item.age }}</p>
    </div>
</div>
</template>
