//@ts-check

import { GeneratingConcept } from '@storefront-x/core'

export default class TestsUnit extends GeneratingConcept {
  get directory() {
    return 'tests/unit'
  }

  get recursive() {
    return true
  }

  get generateMultipleFiles() {
    return true
  }

  get template() {
    return `// generated by Storefront X
    import '<%= record.path %>'
`
  }
}