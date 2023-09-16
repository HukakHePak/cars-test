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

  const parameters = new Map()    // запишем параметры

  let cursor = 0;

  while (cursor < args.length) {    // считываем параметры пока массив не пуст и не превышен лимит 
    const arg = args[cursor]    // получим одно слово из оставшейся кучи параметров

    if (arg[0] === PARAMS_SIGN) {     // если введено имя параметра
      const parameterName = filterParameter(arg)   //  получим имя параметра без тире

      if(!parameterName) {    // если параметр пуст, проигнорируем
        continue;
      }

      //    ищем описание параметра программы
      const parameter = program.parameters.find(item => filterParameter(item.name) === parameterName) 

      let nextParameter = args[cursor + 1];     // сразу же запомним следующий параметр 

      const list = []

      switch (parameter.type) {   // здесь же распарсим строчные значения в нужные
        case PARAMETER_TYPES.Number:
          parameters.set(parameter.field, parseInt(nextParameter)) // число довольно просто, это один следующий элемент массива
          break;
      
        case PARAMETER_TYPES.Date:
          parameters.set(parameter.field, moment(nextParameter, "DD.MM.YYYY").toDate())  // аналогично с датой
          break;
      
        case PARAMETER_TYPES.String:
          // не стал заморачиваться, ищем до следующего слова, начинающегося со знака параметра
          while(nextParameter[0] !== PARAMS_SIGN && cursor < args.length)   
          {
            list.push(nextParameter);
          };
          parameters.set(parameter.field, [...list])
          cursor += list.length - 1;
          list.splice(0);
          break;
      
        default:
          break;
      }
    } // иначе игнорируем

    cursor += 1;
  }

  return { program, parameters }
}

export default parser
