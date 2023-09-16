import { filterParameter } from "utils/utils"
import { PARAMETER_TYPES, PARAMS_LIMIT, PARAMS_SIGN } from "../core/consts"
import programs from "../core/programs"
import moment from "moment"

function parser(text: String) {
  const args = text.trim().split(" ")

  const programName = args.splice(0, 1)[0].toLowerCase()  // найдем имя запускаемой программы

  const program = programs.find(item => item.name.toLowerCase() === programName)    // проверим, есть ли такая в нашем списке

   if(!program) {
       return { program: null, parameters: null }
   }

  const parameters = new Map()    // сюда будем записывать параметры
  const paramBuffer = []   // буффер параметров

  while(args.length) {
    const arg = args.pop();
    
    if (arg[0] === PARAMS_SIGN) {     // если введено имя параметра
      const parameterName = filterParameter(arg)   //  получим имя параметра без тире

      if(!parameterName) {    // если параметр пуст, проигнорируем
        continue;
      }
      //    ищем описание параметра программы
      const parameter = program.parameters.find(item => filterParameter(item.name) === parameterName) 

      switch (parameter.type) {   // здесь же распарсим строчные значения в нужные
        case PARAMETER_TYPES.Number:
          parameters.set(parameter.field, parseInt(paramBuffer.at(-1))) // запишем последнее найденное
          break;
      
        case PARAMETER_TYPES.Date:
          parameters.set(parameter.field, moment(paramBuffer.at(-1), "DD.MM.YYYY").toDate())  // аналогично с датой
          break;
      
        case PARAMETER_TYPES.String:
          parameters.set(parameter.field, [...paramBuffer])   //    запишем что насобирали по пути к команде
          paramBuffer.splice(0);   // почистим лист
          break;
      
        default:
          break;
      }
    } else {
      paramBuffer.push(arg);
    }
  }

  return { program, parameters }
}

export default parser
