describe ("What Can I drink function", function(){
    beforeEach(function(){
        drink = new whatCanIDrink();
    
});

describe("Checks Age", function () {
    it("should exist", function() {
        expect(whatCanIDrink).toBeDefined();
    });
});

describe("Checks Age", function() {
    it("should return drink toddy when called as whatCanIDrink(13)", function() {
        var result = whatCanIDrink(13)
            expect(result).toBe("Drink Toddy");
    });
});

describe("Checks Age", function() {
    it("should return drink toddy when called as whatCanIDrink(13)", function() {
        var result = whatCanIDrink(17)
            expect(result).toBe("Drink Coke");
    });
});

describe("Checks Age", function() {
    it("should return drink toddy when called as whatCanIDrink(13)", function() {
        var result = whatCanIDrink(20)
            expect(result).toBe("Drink Beer");
    });
});

describe("Checks Age", function() {
    it("should return drink toddy when called as whatCanIDrink(13)", function() {
        var result = whatCanIDrink(129)
            expect(result).toBe("Drink Whiskey");
    });
}); 

describe("Checks Age", function() {
            it("should return drink toddy when called as whatCanIDrink(13)", function() {
            var result = whatCanIDrink(150)
            expect(result).toBe("Sorry. I can't tell what drink because that age is incorrect!");
        });
    });
});