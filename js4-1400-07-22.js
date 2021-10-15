//===================================چاپ مربع===================================
function star(num){
    if (typeof(num)!='number'|| num>10) return 'wrong'
    for (let i=1;i<=num;i++){
        if (i===1 || i===num) console.log('*'.repeat(num))
        else console.log('*'+' '.repeat(num-2)+'*')
    }
}
// star(8)
//-----------------------------------عدد چاپ کن---------------------------------------------
function copyNumber(number){
    let result=0
    for (let i=0;i<number; i++){
        result+=((10**i)*number)
    }
    return result
}
function creatNumber(number){
    if(typeof(number)!='number') return 'wrong!'
    let num=number.toString().split('')
    for (let item of num) {
        console.log('%s:',item, copyNumber(item))
    }
}
// creatNumber(123)

//================================تابع بازگشتی برای معکوس کردن رشته ==============================
function reversStr(str){
    if(typeof(str)!='string') return 'wrong'
    if (str.length===0) return ''
    return str[str.length-1]+reversStr(str.substring(0,(str.length)-1))
}
// console.log(reversStr('abcdef')

//=================پیدا کردن یک رشته در رشته دیگر و باز گرداندن اندیس مربوطه=====================
function findStr(str1,str2){
    if(str1.length<str2.length || (typeof (str1)!= 'string') ||(typeof (str2)!= 'string') ) return'wrong!'
    for (let i=0;i<str1.length;i++){
        for(let j=0;j<str2.length;j++ ){
            if (str1[i+j]!==str2[j]) break
            if (j===(str2.length-1)) return i
        }
    }
    return '-1'
}
// console.log(findStr('abcdefeb','cde'))
//===========================حذف کردن المانهای ارایه دوم از ارایه اول=========================
function cleanList(arr1,arr2){
    if (arr1.length<arr2.length) return false
    let result=[...arr1];
    for (let i of arr2){
        if (result.includes(i)){
            result.splice(result.indexOf(i),1)
        }
    }
    return result
}
let arr1=[1,2,3,4,65,78]
let arr2=[2,65]
// console.log(cleanList(arr1,arr2))
//-------------روش دوم با مپ کردن-------------------------------------
function cleanList2(arr1,arr2) {
    if (arr1.length < arr2.length) return false
    let result = [...arr1];
    arr2.map(item => {if (result.includes(item)) result.splice(result.indexOf(item),1)})
    return result
}
// console.log(cleanList2(arr1,arr2))


//======================جا به جایی المان های یک آرایه ==========================

function changeArr(arr,index,offset){
    let loc=index+offset
    if (loc<0 || loc>=arr.length) return 'wrong!'
    let n=arr.splice(index,1)
    arr.splice(loc,0,n[0])
    return arr
}
// console.log(changeArr([1,2,3,4,5],2,-1))

//===============================اصلاح یک رشته با کاراکترهای تکراری=======================================
function cleanStr(str){
    if (typeof(str)!='string') return 'wrong!'
    let result=''
    for (let i=0; i<str.length;i++){
        if (str[i]!==str[i+1]) result+=str[i]
    }
    return result
}

// console.log(cleanStr('aabbsdsa'))