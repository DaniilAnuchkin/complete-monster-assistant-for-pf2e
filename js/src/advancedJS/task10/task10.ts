// 10) Сделать прокси, позволяющий использовать строки в качестве индексов доступа к элементам массива
// (при этом должно возвращаться значение элемента с индексом равным количеству гласных в строке;
// строки содержат только латиницу, цифры и спецсимволы).

const getVowels = (string: string): number =>
  string.match(/[аоуэыяеёю]/gi)?.length || 0; // get number of vowels

const allowedSymbols = /^[а-яА-Я0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/;

const stringArrayProxy = (arr: string[]): string[] & { [key: string]: any } =>
  new Proxy<string[]>(arr, {
    get(target, key: string) {
      if (typeof key === "string" && allowedSymbols.test(key)) {
        return target[getVowels(key)];
      }

      return false;
    },

    set(target, key: string, value: string) {
      if (typeof key === "string" && allowedSymbols.test(key)) {
        target[getVowels(key)] = value;
      }

      return true;
    },
  });

export default stringArrayProxy;
