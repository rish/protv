export default {
  hexToRgb: hexToRgb
}

export function hexToRgb (hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b
  })

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null
}

export function rgbToString (rgb) {
  let rgbString = rgb.map(val => val).join(',')
  return rgbString
}

export function chunkArray (array, chunkSize) {
  let chunkArray = []
  let i, j, temparray
  for (i = 0, j = array.length; i < j; i += chunkSize) {
    temparray = array.slice(i, i + chunkSize)
    chunkArray.push(temparray)
  }

  return chunkArray
}
