import antfu from '@antfu/eslint-config'

export default antfu(
  {
    formatters: true, // Включает форматирование
    ignores: ['__generated__', '.nuxt', 'node_modules', 'dist', '.output'],
  },
  {
    // Твои кастомные правила
    files: ['**/*.vue'],
    rules: {
      'vue/no-mutating-props': ['error', { shallowOnly: false }],
      'vue/component-name-in-template-casing': ['error', 'PascalCase', { registeredComponentsOnly: false }],
      'vue/no-required-prop-with-default': ['error', { autofix: true }],
      'vue/max-attributes-per-line': ['warn', {
        singleline: { max: 1 },
        multiline: { max: 1 },
      }],
      'node/prefer-global/process': 'off',
    },
  },
)
