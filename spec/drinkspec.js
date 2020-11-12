describe ("What Can I drink function", function(){
    // A test suite begins with a call to the global Jasmine function describe with two parameters: a string and a function.
    beforeEach(function(){
        drink = new whatCanIDrink();
});

describe("Checks Age", function () {
    // Specs are defined by calling the global Jasmine function it
    it("should exist", function() {
            // Expectations are built with the function expect which takes a value, called the actual.
            // Each matcher implements a boolean comparison between the actual value and the expected value.
            // Any matcher can evaluate to a negative assertion by chaining the call to expect with a not before calling the matcher.    
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