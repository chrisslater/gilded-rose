import * as fp from 'lodash/fp'

const identity = <I>(i: I): I => i 

const condition = <T>(predicate: (p: T) => boolean, truthy: (p: T) => T, falsey: (p: T) => T = identity) => (item: T): T => 
    predicate(item) ? truthy(item) : falsey(item)

const isExpired = (item: Item) => item.sellIn < 0


const decreaseSellIn = (item: Item): Item => {
    item.sellIn = item.sellIn - 1
    return item
} 

const reduceQualityToZero = (item: Item): Item => { 
    item.quality = 0
    return item
}

const increaseItemQuality = (value: number = 1) => (item: Item): Item => {
    if (item.quality < 50) {
        item.quality = item.quality + value
    }

    return item
}

const increaseItemQualityByOne = increaseItemQuality()

const decreaseItemQuality = (value: number = 1) => (item: Item): Item => {
    if (item.quality > 0) {
        item.quality = item.quality - value
    }

    return item
}

const decreaseItemQualityByOne = decreaseItemQuality()

const updateCheeseItem = fp.pipe(
    increaseItemQualityByOne,
    condition(isExpired, increaseItemQualityByOne)
)

const increaseBackstageQuality = fp.pipe(
    increaseItemQualityByOne,
    condition((item) => item.sellIn < 11, increaseItemQualityByOne),
    condition((item) => item.sellIn < 6, increaseItemQualityByOne),
)

const updateBackstageItem = 
    condition(isExpired, reduceQualityToZero, increaseBackstageQuality)

const updateConjuredItem = fp.pipe(
    decreaseItemQuality(2),
    condition(isExpired, decreaseItemQuality(2)),
)

const updateDefaultItem = fp.pipe(
    decreaseItemQualityByOne,
    condition(isExpired, decreaseItemQualityByOne)
)

export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name: string, sellIn: number, quality: number) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        return this.items.map((item: Item) => {
            if (item.name === 'Sulfuras, Hand of Ragnaros') {
                return item
            }

            item = decreaseSellIn(item)

            switch(item.name) {
                case 'Aged Brie':
                    return updateCheeseItem(item)
                
                case 'Backstage passes to a TAFKAL80ETC concert':
                    return updateBackstageItem(item)

                case 'Conjured Mana Cake':
                    return updateConjuredItem(item)
            
                default:
                    return updateDefaultItem(item)
            }
        })
    }
}
