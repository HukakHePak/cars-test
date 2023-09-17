import programs from "../constants/programs"

function printHelp(): void {
  console.log("\rAvialable commands:\r\r")

  programs.forEach((item) => {
    console.log(`  ${item.name.toLocaleLowerCase()} \t ${item.description || ""}`)

    item.parameters.forEach((parameter) => {
      console.log(
        `\t-${parameter.name}${parameter.short ? `, -${parameter.short}` : ""} \t ${parameter.description || ""}`
      )
    })
  })
}

export default printHelp
