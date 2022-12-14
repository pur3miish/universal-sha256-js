'use strict'
const { createHash } = require('crypto')

/**
 * Universal sha256 message digest helper function.
 * @kind function
 * @name sha256
 * @param {Uint8Array} data Binary data to hash.
 * @returns {Uint8Array} Message digest.
 * @example <caption>Ways to `import`.</caption>
 * ```js
 * import sha256 from 'sha256-js'
 * ```
 * @example <caption>Ways to `require`.</caption>
 * ```js
 * const sha256 = require('sha256-js')
 * ```
 * @example <caption>Usage `sha256` in node.</caption>
 * ```js
 * const array = Uint8Array.from(
 *   Buffer.from('The quick brown fox jumped over the lazy dog')
 * )
 *
 * sha256(array).then(console.log)
 * ```
 * > The logged output is [215, …, 146 ]
 */
async function sha256(data) {
  if (!(data instanceof Uint8Array))
    throw new TypeError('Expected Uint8Array input data.')

  if (typeof window == 'undefined')
    return new Uint8Array(createHash('sha256').update(data).digest())
  else return new Uint8Array(await crypto.subtle.digest('SHA-256', data))
}

module.exports = sha256
