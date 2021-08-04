describe("Start Muffin Maker", () => {
    let sut

    beforeEach(() => {
        sut = new MuffinMaker();
        muffinClick = 0;
    })

    describe("muffinClicked", () => {
        it("should add a muffin when clicked", () => {
            sut.muffinClicked();
            expect(sut.muffinClick).toBe(1);
        })

        it("should return amount of muffins", () => {
            sut.muffinClicked();
            expect(sut.getMuffinCount()).toBe(1);
        })
    })

})