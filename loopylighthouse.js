const loopyLighthouse = function() {
  for (let i = 0; i < 100; i++) {
    let string = ""
    if (i % 3 === 0) string += "Loopy"
    if (i % 5 === 0) string += "Lighthouse"
    console.log(string.length ? string : i)
  }
}

loopyLighthouse()