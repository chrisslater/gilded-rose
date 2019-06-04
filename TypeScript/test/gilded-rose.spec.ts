import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

const createTest = (name: string) => (initialSellIn: number) => (initialQuality: number): [number, number] =>  {
    const gildedRose = new GildedRose([new Item(name, initialSellIn, initialQuality)])
    const firstItem = gildedRose.updateQuality()[0]

    return [firstItem.sellIn, firstItem.quality]
}

describe('GildedRose.updateQuality', function () {
    let test: any
    let sellIn: number
    let quality: number

    describe('When nothing is passed into the constructor', () => {
        beforeEach(() => {
            test = new GildedRose().updateQuality()
        })

        it('should return an empty array', () => {
            expect(test).to.be.empty
        })
    })

    describe('When item name is `Sulfuras, Hand of Ragnaros`', () => {
        beforeEach(() => {
            test = createTest('Sulfuras, Hand of Ragnaros')
        })

        describe('and the sellIn is 0', () => {
            beforeEach(() => {
                test = test(0)
            })

            describe('and the quality is 0', () => {
                beforeEach(() => {
                    [sellIn, quality] = test(0)
                })

                it('should have a sellIn of 0', () => {
                    expect(sellIn).to.equal(0)
                })

                it('should have a quality of 0', () => {
                    expect(quality).to.equal(0)
                })
            })

            describe('and the quality is 25', () => {
                beforeEach(() => {
                    [sellIn, quality] = test(25)
                })

                it('should have a sellIn of 0', () => {
                    expect(sellIn).to.equal(0)
                })
    
                it('should have a quality of 25', () => {
                    expect(quality).to.equal(25)
                })
                
            })
            
            describe('and the quality is 49', () => {
                beforeEach(() => {
                    [sellIn, quality] = test(49)
                })
                
                it('should have a sellIn of 0', () => {
                    expect(sellIn).to.equal(0)
                })

                it('should have a quality of 49', () => {
                    expect(quality).to.equal(49)
                })
            })
        })

        describe('and the sellIn is 10', () => {
            beforeEach(() => {
                test = test(10)
            })

            describe('and the quality is 80', () => {
                beforeEach(() => {
                    [sellIn, quality] = test(80)
                })

                it('should have a sellIn of 10', () => {
                    expect(sellIn).to.equal(10)
                })

                it('should have a quality of 80', () => {
                    expect(quality).to.equal(80)
                })
            })
        })
    })

    describe('When item name is `Aged Brie`', () => {
        beforeEach(() => {
            test = createTest('Aged Brie')
        })

        describe('and the sellIn is 0', () => {
            beforeEach(() => {
                test = test(0)
            })

            describe('and the quality is 0', () => {
                beforeEach(() => {
                    [sellIn, quality] = test(0)
                })

                it('should have a sellIn of -1', () => {
                    expect(sellIn).to.equal(-1)
                })

                it('should have a quality of 2', () => {
                    expect(quality).to.equal(2)
                })
            })

            describe('and the quality is 25', () => {
                beforeEach(() => {
                    [sellIn, quality] = test(25)
                })

                it('should have a sellIn of -1', () => {
                    expect(sellIn).to.equal(-1)
                })
    
                it('should have a quality of 27', () => {
                    expect(quality).to.equal(27)
                })
                
            })
            
            describe('and the quality is 49', () => {
                beforeEach(() => {
                    [sellIn, quality] = test(49)
                })
                
                it('should have a sellIn of -1', () => {
                    expect(sellIn).to.equal(-1)
                })

                it('should have a quality of 50', () => {
                    expect(quality).to.equal(50)
                })
            })
        })

        describe('and the sellIn is 15', () => {
            beforeEach(() => {
                test = test(15)
            })

            describe('and the quality is 0', () => {
                beforeEach(() => {
                    [sellIn, quality] = test(0)
                })

                it('should have a sellIn of 14', () => {
                    expect(sellIn).to.equal(14)
                })

                it('should have a quality of 1', () => {
                    expect(quality).to.equal(1)
                })
            })

            describe('and the quality is 25', () => {
                beforeEach(() => {
                    [sellIn, quality] = test(25)
                })

                it('should have a sellIn of 14', () => {
                    expect(sellIn).to.equal(14)
                })
    
                it('should have a quality of 26', () => {
                    expect(quality).to.equal(26)
                })
                
            })
            
            describe('and the quality is 48', () => {
                beforeEach(() => {
                    [sellIn, quality] = test(48)
                })
                
                it('should have a sellIn of 14', () => {
                    expect(sellIn).to.equal(14)
                })

                it('should have a quality of 49', () => {
                    expect(quality).to.equal(49)
                })
            })

            describe('and the quality is 50', () => {
                beforeEach(() => {
                    [sellIn, quality] = test(50)
                })
                
                it('should have a sellIn of 14', () => {
                    expect(sellIn).to.equal(14)
                })

                it('should have a quality of 50', () => {
                    expect(quality).to.equal(50)
                })
            })
        })
    })

    describe('When item name is `+5 Dexterity Vest`', () => {
        beforeEach(() => {
            test = createTest('+5 Dexterity Vest')
        })

        describe('and the sellIn is 0', () => {
            beforeEach(() => {
                test = test(0)
            })

            describe('and the quality is 0', () => {
                beforeEach(() => {
                    [sellIn, quality] = test(0)
                })

                it('should have a sellIn of -1', () => {
                    expect(sellIn).to.equal(-1)
                })

                it('should have a quality of 0', () => {
                    expect(quality).to.equal(0)
                })
            })

            describe('and the quality is 25', () => {
                beforeEach(() => {
                    [sellIn, quality]  = test(25)
                })

                it('should have a sellIn of -1', () => {
                    expect(sellIn).to.equal(-1)
                })

                it('should have a quality of 23', () => {
                    expect(quality).to.equal(23)
                })
                
            })

            describe('and the quality is 49', () => {
                beforeEach(() => {
                    [sellIn, quality] = test(49)
                })

                it('should have a sellIn of -1', () => {
                    expect(sellIn).to.equal(-1)
                })

                it('should have a quality of 47', () => {
                    expect(quality).to.equal(47)
                })
                
            })
        })

        describe('and the sellIn is 15', () => {
            beforeEach(() => {
                test = test(15)
            })

            describe('and the quality is 0', () => {
                beforeEach(() => {
                    [sellIn, quality] = test(0)
                })

                it('should have a sellIn of 14', () => {
                    expect(sellIn).to.equal(14)
                })

                it('should have a quality of 0', () => {
                    expect(quality).to.equal(0)
                })
            })

            describe('and the quality is 25', () => {
                beforeEach(() => {
                    [sellIn, quality] = test(25)
                })

                it('should have a sellIn of 14', () => {
                    expect(sellIn).to.equal(14)
                })

                it('should have a quality of 24', () => {
                    expect(quality).to.equal(24)
                })
                
            })

            describe('and the quality is 49', () => {
                beforeEach(() => {
                    [sellIn, quality] = test(49)
                })

                it('should have a sellIn of 14', () => {
                    expect(sellIn).to.equal(14)
                })

                it('should have a quality of 48', () => {
                    expect(quality).to.equal(48)
                })
                
            })
        })
    })

    describe('When item name is `Backstage passes to a TAFKAL80ETC concert`', () => {
        beforeEach(() => {
            test = createTest('Backstage passes to a TAFKAL80ETC concert')
        })

        describe('and the sellIn is 0', () => {
            beforeEach(() => {
                test = test(0)
            })

            describe('and the quality is 0', () => {
                beforeEach(() => {
                    [sellIn, quality] = test(0)
                })

                it('should have a sellIn of -1', () => {
                    expect(sellIn).to.equal(-1)
                })

                it('should have a quality of 0', () => {
                    expect(quality).to.equal(0)
                })
            })

            describe('and the quality is 25', () => {
                beforeEach(() => {
                    [sellIn, quality] = test(0)
                })

                it('should have a sellIn of -1', () => {
                    expect(sellIn).to.equal(-1)
                })

                it('should have a quality of 0', () => {
                    expect(quality).to.equal(0)
                })
            })

            describe('and the quality is 49', () => {
                beforeEach(() => {
                    [sellIn, quality] = test(49)
                })

                it('should have a sellIn of -1', () => {
                    expect(sellIn).to.equal(-1)
                })

                it('should have a quality of 0', () => {
                    expect(quality).to.equal(0)
                })
            })
        })

        describe('and the sellIn is 5', () => {
            beforeEach(() => {
                test = test(5)
            })

            describe('and the quality is 0', () => {
                beforeEach(() => {
                    [sellIn, quality] = test(0)
                })

                it('should have a sellIn of 4', () => {
                    expect(sellIn).to.equal(4)
                })

                it('should have a quality of 3', () => {
                    expect(quality).to.equal(3)
                })
            })

            describe('and the quality is 49', () => {
                beforeEach(() => {
                    [sellIn, quality] = test(49)
                })

                it('should have a sellIn of 4', () => {
                    expect(sellIn).to.equal(4)
                })

                it('should have a quality of 50', () => {
                    expect(quality).to.equal(50)
                })
            })
        })

        describe('and the sellIn is 10', () => {
            beforeEach(() => {
                test = test(10)
            })

            describe('and the quality is 0', () => {
                beforeEach(() => {
                    [sellIn, quality] = test(0)
                })

                it('should have a sellIn of 9', () => {
                    expect(sellIn).to.equal(9)
                })

                it('should have a quality of 2', () => {
                    expect(quality).to.equal(2)
                })
            })

            describe('and the quality is 49', () => {
                beforeEach(() => {
                    [sellIn, quality] = test(49)
                })

                it('should have a sellIn of 9', () => {
                    expect(sellIn).to.equal(9)
                })

                it('should have a quality of 50', () => {
                    expect(quality).to.equal(50)
                })
            })
        })

        describe('and the sellIn is 15', () => {
            beforeEach(() => {
                test = test(15)
            })

            describe('and the quality is 0', () => {
                beforeEach(() => {
                    [sellIn, quality] = test(0)
                })

                it('should have a sellIn of 14', () => {
                    expect(sellIn).to.equal(14)
                })

                it('should have a quality of 1', () => {
                    expect(quality).to.equal(1)
                })
            })

            describe('and the quality is 25', () => {
                beforeEach(() => {
                    [sellIn, quality] = test(25)
                })

                it('should have a sellIn of 14', () => {
                    expect(sellIn).to.equal(14)
                })

                it('should have a quality of 26', () => {
                    expect(quality).to.equal(26)
                })
                
            })

            describe('and the quality is 49', () => {
                beforeEach(() => {
                    [sellIn, quality] = test(49)
                })

                it('should have a sellIn of 14', () => {
                    expect(sellIn).to.equal(14)
                })

                it('should have a quality of 50', () => {
                    expect(quality).to.equal(50)
                })
                
            })
        })
    })

    describe('When item name is `Conjured Mana Cake`', () => {
        beforeEach(() => {
            test = createTest('Conjured Mana Cake')
        })

        describe('and the sellIn is 0', () => {
            beforeEach(() => {
                test = test(0)
            })

            describe('and the quality is 0', () => {
                beforeEach(() => {
                    [sellIn, quality] = test(0)
                })

                it('should have a sellIn of -1', () => {
                    expect(sellIn).to.equal(-1)
                })

                it('should have a quality of 0', () => {
                    expect(quality).to.equal(0)
                })
            })

            describe('and the quality is 25', () => {
                beforeEach(() => {
                    [sellIn, quality]  = test(25)
                })

                it('should have a sellIn of -1', () => {
                    expect(sellIn).to.equal(-1)
                })

                it('should have a quality of 21', () => {
                    expect(quality).to.equal(21)
                })
                
            })

            describe('and the quality is 49', () => {
                beforeEach(() => {
                    [sellIn, quality] = test(49)
                })

                it('should have a sellIn of -1', () => {
                    expect(sellIn).to.equal(-1)
                })

                it('should have a quality of 45', () => {
                    expect(quality).to.equal(45)
                })
                
            })
        })

        describe('and the sellIn is 15', () => {
            beforeEach(() => {
                test = test(15)
            })

            describe('and the quality is 0', () => {
                beforeEach(() => {
                    [sellIn, quality] = test(0)
                })

                it('should have a sellIn of 14', () => {
                    expect(sellIn).to.equal(14)
                })

                it('should have a quality of 0', () => {
                    expect(quality).to.equal(0)
                })
            })

            describe('and the quality is 25', () => {
                beforeEach(() => {
                    [sellIn, quality] = test(25)
                })

                it('should have a sellIn of 14', () => {
                    expect(sellIn).to.equal(14)
                })

                it('should have a quality of 23', () => {
                    expect(quality).to.equal(23)
                })
                
            })

            describe('and the quality is 49', () => {
                beforeEach(() => {
                    [sellIn, quality] = test(49)
                })

                it('should have a sellIn of 14', () => {
                    expect(sellIn).to.equal(14)
                })

                it('should have a quality of 47', () => {
                    expect(quality).to.equal(47)
                })
                
            })
        })
    })
});
