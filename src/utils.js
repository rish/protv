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

export function replaceCDNImagePath (url, domain, format) {
  // Returns the correct CDN image path if image is from the same domain
  if (url.includes(domain)) {
    const matches = url.split((/[.,.]/))
    const original = matches.reverse()[1]
    const formattedUrl = url.replace(original, format)
    return formattedUrl
  } else {
    return url
  }
}

export function renderImagePath (str, type, context) {
  // Render an image path based on the type
  // type if 'image' will fetch the conf value for it
  // thumb will be the other type but can be null for now
  const self = context || this
  // Set the context for this if we use renderBackgroundImage
  const domain = self.context.conf.images_domain
  let format
  type === 'image' ? format = 'image_resolution' : format = 'thumbnail_resolution'
  const formatType = self.context.conf[format]
  const imagePath = replaceCDNImagePath(str, domain, formatType)
  return imagePath
}

export function renderBackgroundImage (str, type) {
  // Send this from Vue because it is not available in the renderImagePath func
  const backgroundStr = `url(${renderImagePath(str, type, this)})`
  return backgroundStr
}
