/* FOLDER STRUCTURE 
  utils
    /time (delay, isToday, tomorow, rangeDate, isToday, isBefore, isAfter, daysDiff)
    /math (between,range, toString(stringfy), round, round2)
    /array (flatMap, toObject, fromObject, toDimensional, getFieldMap, avarage)
    /functions (not, pipeline, promisify)
    / Maybe
*/

// !!!!! Os MayBe e similares sao importants para garantirmos certa validação de dados


// rejeitar o cathc  Promise.reject("Não foi possível obter as notas fiscais")

/* 


  listAll() {
    return fetch(API)
      .then(handleStatus)
      .catch(err => {
        console.log(err);
        return Promise.reject("Não foi possível obter as notas fiscais");
      });
  },
  
  */
const unary = fn => (...args) => fn(args[0]);
const isNull = x => x === null || x === undefined;
const not = fn => (...args) => !fn(...args);
