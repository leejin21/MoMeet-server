const minutes = require("../services/minutes");
const should = require("chai").should();

describe("# Service tests", () => {
    // describe는 테스트의 범위를 설정
    describe("# sayHello", function () {
        // describe 안에 또 다른 describe를 중첩해서 사용 가능
        it("sayHello should return hello", function (done) {
            // it는 단위 테스트를 설정
            if (minutes.sayHello() === "hello") {
                done();
                // done: 비동기 단위 테스트 완료할 때 유용
            }
        });
        it("should a string type", function () {
            // assertion lib으로 chai의 should 스타일 적용
            minutes.sayHello().should.be.a("string");
        });
    });

    describe("# addNumbers", function () {
        it("should greater than 5", function () {
            minutes.addNumbers(3, 4).should.be.above(5);
        });
    });
});

describe("# Hooks", function () {
    // 아래 4가지 hooks를 사용하여 test code 전후를 제어 가능
    before(function () {
        // 블록 범위 내 모든 테스트 전에 실행
    });

    after(function () {
        // 블록 범위 내 모든 테스트 후에 실행
    });

    beforeEach(function () {
        // 블록 범위 내 각 테스트 직전에 실행
    });

    afterEach(function () {
        // 블록 범위 내 각 테스트 직후에 실행
    });

    // test cases
});
