// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts'],
   fonts: {
    families: [
      { name: 'Oswald', provider: 'google' },
      { name: 'Roboto', provider: 'google' }
    ]
  },
  css: ['~/assets/css/main.css'] 
  
})

