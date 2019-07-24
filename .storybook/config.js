import React from 'react'
import { configure, addDecorator } from '@storybook/react'

import ThemeProvider from '../src/ui/ThemeProvider'
import theme from '../src/ui/theme'

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
