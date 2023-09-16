function parser(text: String) {
  if (text.trim() === "quit") {
    done()
  }

  const args = text.trim().split(" ")

  const program = args.splice(0, 1)[0].toUpperCase()

  const parameters = new Map()

  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i]

    if (arg[0] === "-") {
      parameters.set(
        arg
          .split("-")
          .join(""),
        args[i + 1]
      )

      i += 1
    }
  }

  return { program, parameters }
}

function done() {
  process.exit()
}

export default parser
