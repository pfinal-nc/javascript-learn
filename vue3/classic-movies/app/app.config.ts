export default defineAppConfig({
  // https://ui.nuxt.com/getting-started/theme#design-system
  ui: {
    colors: {
      primary: 'emerald',
      neutral: 'slate',
    },
    button: {
      defaultVariants: {
        // Set default button color to neutral
        // color: 'neutral'
      }
    },
    link: {
      active: {
        true: 'text-primary',
        false: 'text-muted'
      },
      disabled: {
        true: 'cursor-not-allowed opacity-75',
      },
    },
  },
  data: {
      links: [
        {
        "label": "首页",
        "href": "/",
        "icon": "mdi-light:home"
      },
      {
        "label": "经典片单",
        "href": "/movies",
        "icon": "mdi:movie-open"
      },
      {
        "label": "专题合集",
        "href": "/categories",
        "icon": "mdi:folder-multiple"
      },
      {
        "label": "导演列表",
        "href": "/directors",
        "icon": "mdi:account-multiple"
      },
      {
        "label": "搜索",
        "href": "/search",
        "icon": "mdi:magnify"
      },
      {
        "label": "关于本站",
        "href": "/about",
        "icon": "mdi:information-outline"
      }
    ]
  }  
})
