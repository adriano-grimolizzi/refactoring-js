class Price { }

class ChildrensPrice extends Price {
    getCharge = (daysRented) => {
        let result = 1.5
        if (daysRented > 3) {
            result += (daysRented - 3) * 1.5
        }
        return result
    }
    getFrequentRenterPoints = () => 1
}

class NewReleasePrice extends Price {
    getCharge = (daysRented) => daysRented * 3
    getFrequentRenterPoints = (daysRented) => (daysRented > 1) ? 2 : 1
}

class RegularPrice extends Price {
    getCharge = (daysRented) => {
        let result = 2
        if (daysRented > 2) {
            result += (daysRented - 2) * 1.5
        }
        return result
    }
    getFrequentRenterPoints = () => 1
}

module.exports = {
    ChildrensPrice,
    NewReleasePrice,
    RegularPrice,
}
