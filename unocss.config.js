import { defineConfig, presetUno } from 'unocss'
import presetAttributify from '@unocss/preset-attributify'
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'

export default defineConfig({
  presets: [
    presetAttributify({ /* options */ }),
    presetUno()
  ],
  transformers: [
    transformerAttributifyJsx(),
  ],
})
