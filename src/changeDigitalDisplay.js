

function chunkString(str = '', size = 0, isThousand = false) {
  if (str === '') {
    return str
  }
  if (size === 0) {
    return str
  }
  let data = []
  let i = 0

  if (isThousand) {
    str = (str + '').split('.')[0]
  }
  let length = str.length

  do {
    let index = length - (size * (i + 1))

    data.push(str.slice(index > 0 ? index : 0, length - (size * i)))
    i++
  }
  while (i * size < str.length)

  return data
}

/**
 *
 * console.log(formatThousand(1234567))  //1,234,567
 * @param {string} [str='']
 * @returns
 */
function formatThousand(str = '') {
  if (str === '') {
    return str
  }
  if ((str + '').indexOf('.') > -1) {
    let suffix = (str + '').split('.')[1]

    return chunkString(str + '', 3, true).reverse().join(',') + '.' + suffix
  }
  return chunkString(str + '', 3, true).reverse().join(',')
}

export default {
  formatThousand
}
