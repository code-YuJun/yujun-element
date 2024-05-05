//  BEM 函数
const _bem = (prefixedName:string, blockSuffix:string,
    element:string, modifier:string) => {
    if (blockSuffix) {
        prefixedName += `-${blockSuffix}`
    }
    if (element) {
        prefixedName += `__${element}`
    }
    if (modifier) {
        prefixedName += `--${modifier}`
    }
    return prefixedName
}
function createBEM(prefixedName: string) {
    const b = (blockSuffix = '') => _bem(prefixedName, blockSuffix, '', '')
    const e = (element = '') =>
        element ? _bem(prefixedName, '', element,
            '') : ''
    const m = (modifier = '') =>
        modifier ? _bem(prefixedName, '', '',
            modifier) : ''
    const be = (blockSuffix = '', element = '') =>
        blockSuffix && element ? _bem(prefixedName,
            blockSuffix, element, '') : ''
    const em = (element:string, modifier:string) =>
        element && modifier ? _bem(prefixedName, '',
            element, modifier) : ''
    const bm = (blockSuffix:string, modifier:string) =>
        blockSuffix && modifier ? _bem(prefixedName,
            blockSuffix, '', modifier) : ''
    const bem = (blockSuffix:string, element:string, modifier:string) =>
        blockSuffix && element && modifier
            ? _bem(prefixedName, blockSuffix, element,
                modifier)
            : ''
    const is = (name:string, state:string) => (state ? `is-
${name}` : '')
    return {
        b,
        e,
        m,
        be,
        em,
        bm,
        bem,
        is
    }
}
export function createNamespace(name: string) {
    const prefixedName = `z-${name}`
    return createBEM(prefixedName)
}
// test
// const bem = createNamespace('button');
// console.log(bem.b())
// console.log(bem.b('box'))
// console.log(bem.e('element'));
// console.log(bem.m('disabled'))
// console.log(bem.is('checked'))
// console.log(bem.bem('box', 'element',
//     'disabled'))