const path = require('path')

const buildEslintCommand = filenames =>
  `next lint --fix --file ${filenames
    .map(filename => path.relative(process.cwd(), filename))
    .join(' --file ')}`

module.exports = {
  '*.scss': ['stylelint --fix'],
  '*.{js,jsx,ts,tsx}': [
    buildEslintCommand,
    'prettier --write --loglevel silent',
  ],
}
