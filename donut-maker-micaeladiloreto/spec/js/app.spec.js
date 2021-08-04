// describe("Auto Clicker", () => {
//     describe("addToAutoClicker", () => {
//         it("afford an auto clicker", () => {
//             sut.muffinClick = 100;
//             sut.addAutoClicker();
//             expect(sut.muffinCount).toBe(1);
//         })

//         it("subtract from muffinCount", () => {
//             sut.muffinClick = 100;
//             sut.addAutoClicker();
//             expect(sut.muffinClick).toBe(0);
//         })

//         it("increase the auto clicker cost by 10%", () => {
//             sut.muffinClick = 100;
//             sut.addAutoClicker();
//             expect(sut.autoClickerCost).toBe(110);
//         })

//         it("increase future auto clicker costs by 10%", () => {
//             sut.muffinClick = 100;
//             sut.increaseAutoClickerCost();
//             expect(sut.autoClickerCost).toBe(110);
//         })

//         it("Ensuring there are enough clicks to buy auto clicker", () => {
//             sut.muffinCount = 90;
//             sut.addAutoClicker();
//             expect(sut.autoClickerCount).toBe(0);
//         })

//         it("returns a companion you bought", () => {
//             sut.muffinClick = 100;
//             sut.addAutoClicker();
//             expect(sut.getAutoClickerCount()).toBe(1);
//         })
//     })
// })

// describe("Muffin Multiplier", () => {
//     describe("purchase a muffin multiplier", () => {
//         it("purchase muffin multiplier for 10 clicks", () => {
//             sut.muffinClick = 10;
//             sut.addMultiplier();
//             expect(sut.muffinClick).toBe(0);
//         })
//     })

//     it("muffin multiplier cost increases by 10%", () => {
//         sut.muffinClick = 10;
//         sut.addMultiplier();
//         expect(sut.multiplerCost).toBe(11);
//     })

//     it("cannot buy multipler without 10 clicks", () => {
//         sut.muffinClick = 9;
//         sut.addMultiplier();
//         expect(sut.multiplierCount).toBe(0);
//     })

//     it("increase the click value by 20%", () => {
//         sut.increaseMuffinCountPercentage();
//         expect(sut.muffinCount).toBe(1.2);
//     })

//     it("should add 20% after multiplier is added", () => {
//         sut.muffinClick= 10;
//         sut.addMultiplier();
//         sut.muffinClicked();
//         expect(sut.muffinClick).toBe(1.2);
//     })
// })
