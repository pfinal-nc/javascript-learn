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
    }
  },
  data: { 
    name: 'PFinalClub',
    title: 'Front End Developer',
    bio : 'An awesome team in Shanghai. We build modern, performant, secure and scalable web apps and sites.',
    avatar: 'https://friday-go.icu/logo.png',
    website: "https://friday-go.icu",
    phone: "+52 771 404 2659",
    email: "lampxiezi@gmail.com",
    x: "",
    facebook: "https://www.facebook.com/ecostudiodev",
    instagram: "https://www.instagram.com/ecostudios_dev/",
    tiktok: "https://cesswhite.com",
    github: "https://github.com/cesswhite/hato-minimal-template",
    images: [
      "https://cdn.pixabay.com/photo/2025/07/14/17/07/sea-9714469_1280.jpg",
      "https://cdn.stocksnap.io/img-thumbs/960w/bird-perched_XXXDMBTDGN.jpg",
      "https://cdn.stocksnap.io/img-thumbs/960w/sunset-sea_YAA7WLGAQU.jpg",
      "https://cdn.stocksnap.io/img-thumbs/960w/sea-ocean_YC1CND2C8H.jpg",
      "https://cdn.stocksnap.io/img-thumbs/960w/surfers-beach_4RUHVKXOYI.jpg"
    ],
  }
})
