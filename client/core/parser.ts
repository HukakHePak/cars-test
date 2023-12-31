import { filterParameter } from "../helpers/utils"
import { PARAMS_SIGN } from "../constants/consts"
import programs from "../constants/programs"
import moment from "moment"
import IProgramParameters from "../interfaces/IProgramParameters"

function parser(text: String): IProgramParameters {
  const args = text.trim().split(" ")

  const programName = args.shift()?.toLowerCase() // найдем имя запускаемой программы

  const program = programs.find((item) => item.name.toLowerCase() === programName) // проверим, есть ли такая в нашем списке

  if (!program) {
    return { program: null, parameters: null }
  }

  const parameters = new Map() // сюда будем записывать параметры
  const paramBuffer = [] // буффер параметров

  while (args.length) {
    const arg = args.pop()

    if (arg[0] === PARAMS_SIGN) {
      // если введено имя параметра
      const parameterName = filterParameter(arg) //  получим имя параметра без тире

      if (!parameterName) {
        // если параметр пуст, проигнорируем
        continue
      }
      //    ищем описание параметра программы
      const parameter = program.parameters.find(
        (item) => filterParameter(item.name) === parameterName || filterParameter(item.short) === parameterName
      )

      // здесь же распарсим строчные значения в нужные
      switch (parameter?.type) {
        case Number:
          parameters.set(parameter.field, parseInt(paramBuffer.at(-1))) // запишем последнее найденное
          break

        case Date:
          parameters.set(parameter.field, moment(paramBuffer.at(-1), "DD.MM.YYYY").toDate()) // аналогично с датой
          break

        case String:
          parameters.set(parameter.field, paramBuffer.reverse().join(" ")) //    запишем что насобирали по пути к команде
          break

        default:
          paramBuffer.push(arg) // если со знака команды начинается не команда, то добавим в массив
          continue
      }
      paramBuffer.splice(0) // почистим лист
    } else {
      paramBuffer.push(arg)
    }
  }

  return { program, parameters }
}

export default parser
