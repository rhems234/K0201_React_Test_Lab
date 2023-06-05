// 확장팩 코드 러너 설치 후.
// js 바닐라 js 기본 js 실행하는방법 ctrl + alt+n
// 비동기 통신 관련된, 콜백 함수, async, await, promis 간단 설명.
// axios, 비동기 통신 하는 방법 설명.
// 공공데이터 연동 작업.
//console.log('간단 실행 테스트 확인.');

// 동기 작업 vs 비동기 작업
// 동기 작업 : 순차적으로 작업 진행. 1번수행 끝나면 -> 2번 수행 시작.
// 비동기 작업 : 자바스크립트에서 스레드가 하나만 있다. 메인 스레이이고,
// 도대체 여러 멀티 작업을 어떻게 처리를 할까?
// 그냥 함수를 막 실행을 함. non-blocking,
// 대신에 해당 함수가 끝났다라는 신호를 보내게 됨. 콜백함수 . 상황 보고를 받는다.

function print() {
    console.log("hi 리액트")
}

// 콜백 지옥 보여주기 에제
function increase(number,callback) {
    setTimeout(() => {
        const result = number + 1;
        if(callback) {
            callback(result)
        }
    },2000)
}
// setTimeout(콜백함수, 시간(ms)): 2번째 매개변수 시간 후에 첫번재 매개변수 함수가 호출됨.
// ex1
// setTimeout(print, 3000);
// 실행순서, 대기중 먼저 뜨고 -> 3초 뒤에 -> hi 리액트

// ex2
// increase(10, result => {
//     console.log(result)
// })
console.log('대기중.....')

// ex3 콜백 지옥 보여주기
// console.log('콜백 지옥 시작')
// increase(0, result => {
//     console.log(result);
//     increase(result, result => {
//         console.log(result);
//         increase(result,result => {
//             console.log(result)
//             increase(result,result => {
//                 console.log(result)
//             })
//         })
//     })
// })

// 비동기 작업을 위해서 -> 콜백 함수 도입 문제점(콜백지옥) -> es6(Promise) 문법을 -> 조금 더 가독성있게 작업을 하게됨.

//ex promise 문법으로 변경.
function increase2(number) {
    // increse2 함수에서 성공시, resovle 함수를 반환, 실패 시 reject 함수를 반환.
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const result2 = number + 10;
            if(result2 > 50) {
                // const e = new Error('테스트 에러')
                return reject();
            }
            resolve(result2)
        }, 2000)
    })
    return promise;
}

// Promise 버전으로 비동기 함수 처리 부분 비교.
// increse 2 함수의 반환 타입은 Promise -> 성공:resolve, 실패 : reject 반환.
// 결론, 인자 값에 계속 콜백 함수 형태로, 중첩되게 들어가지 않고,
// then을 이용해서 구분 짓는다.

// increase2(100).then(number=> {
//     console.log(number);
//     return increase2(number);
// }).then(number => {
//     console.log(number);
//     return increase2(number);
// }).then(number => {
//     console.log(number);
//     return increase2(number);
// }).catch(error => {
//     console.log(error);
// })

// async,await 문법을 같이 세트로 작업.
// es8 Es2017
// async 함수의 앞부분에 표기, 비동기 작업 할 때 사용.
// await Promise 앞부분에 표기를 합니다.

async function runTest() {
    try{
        let result = await increase2(10);
        console.log(result)

        result = await increase2(result);
        console.log(result);

        result = await increase2(result);
        console.log(result);

        result = await increase2(result);
        console.log(result);

        result = await increase2(result);
        console.log(result);
    } catch(e) {
        console.log(e)
    }
}

runTest()

// 결론, 비동기 함수 호출 방법
// callback 함수 스타일 -> Promise(resolve, reject) 성공, 실패 -> async, await를 이용해서 비동기 함수를 구현.
// 함수 앞에 async, await는  Promise를 반환하는 함수 앞에 붙임.

// axios : 통신 라이브러리 사용할 예정, 이 라이브러리는 반환을 Promise타입으로 반환
// 더미 데이터를 axios를 이용해서, 받아오고,
// 2번째 공공데이터를 이용함. 안드로이드 때, 사용했던 공공데이터 발급 받은 키, 사이트 접속해서,
// 연장 신청, 하루 추가 됨.

// 순서 1 설치