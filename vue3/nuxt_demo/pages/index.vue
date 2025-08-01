<template>
  <div class="min-h-screen bg-gray-50 p-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">Nuxt 4 + Tailwind CSS 示例</h1>
      
      <!-- @nuxt/ui 组件 -->
      <div class="space-y-4 mb-8">
        <h2 class="text-xl font-semibold text-gray-800">@nuxt/ui 组件</h2>
        <div class="flex gap-4">
          <UButton color="primary">Primary 按钮</UButton>
          <UButton color="success">Success 按钮</UButton>
          <UButton color="error">Error 按钮</UButton>
        </div>
      </div>

      <!-- 纯 Tailwind CSS 样式 -->
      <div class="space-y-4 mb-8">
        <h2 class="text-xl font-semibold text-gray-800">纯 Tailwind CSS 样式</h2>
        <div class="flex gap-4">
          <button class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors">
            Blue 按钮
          </button>
          <button class="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded transition-colors">
            Green 按钮
          </button>
          <button class="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded transition-colors">
            Red 按钮
          </button>
        </div>
      </div>

      <!-- 卡片示例 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">卡片标题</h3>
          <p class="text-gray-600">这是一个使用 Tailwind CSS 样式的卡片组件。</p>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">响应式设计</h3>
          <p class="text-gray-600">在不同屏幕尺寸下自动调整布局。</p>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">交互效果</h3>
          <p class="text-gray-600">鼠标悬停时显示阴影效果。</p>
        </div>
      </div>
    </div>
  </div>
</template> 