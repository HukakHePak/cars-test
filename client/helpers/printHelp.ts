import programs from "../constants/programs"

async function printHelp() {
  console.log("\rAvialable commands:\r\r")

  programs.forEach((item) => {
    console.log(`  ${item.target ? `${item.name}-${item.target}` : item.name} \t ${item.description || ""}`)

    item.parameters.forEach((parameter) => {
      console.log(`\t-${parameter.name}${parameter.short ? `, -${parameter.short}` : ""} \t ${parameter.description || ""}`)
    })
  })
}

export default printHelp
