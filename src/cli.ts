#!/usr/bin/env node
'use strict';
import meow from 'meow'
import pseudoword from './index.js'

const cli = meow(`
    Usage
      $ pseudoword <max-chars: 1-50>

    Examples
      $ pseudoword 7
      vootifo

      $ pseudoword 5
      mozuc
`)

if (isNaN(parseInt(cli.input[0])) || parseInt(cli.input[0]) < 1 || parseInt(cli.input[0]) > 50) {
  console.log('Please provide a number between 1 and 50')
  process.exit(1)
}

console.log(pseudoword(parseInt(cli.input[0])))
