const condition = <T>(predicate: (p: T) => boolean, truthy: (p: T) => T, falsey: (p: T) => T) => (item: T): T => 
    predicate(item) ? truthy(item) : falsey(item)

const isExpired = (item: Item) => item.sellIn < 0

const identity = <I>(i: I) => i 

const decreaseSellIn = (item: Item): Item => {
    item.sellIn = item.sellIn - 1
    return item
} 

const reduceQualityToZero = (item: Item): Item => { 
    item.quality = 0
    return item
}

const increaseItemQuality = (item: Item): Item => {
    if (item.quality < 50) {
        item.quality = item.quality + 1
    }

    return item
}

const decreaseItemQuality = (item: Item): Item => {
    if (item.quality > 0) {
        item.quality = item.quality - 1
    }

    return item
}

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
                    item = increaseItemQuality(item)
                    item = condition(isExpired, increaseItemQuality, identity)(item)
                    
                    return item
                
                case 'Backstage passes to a TAFKAL80ETC concert':
                    if (isExpired(item)) {
                        item = reduceQualityToZero(item)
                        return item
                    }

                    item = increaseItemQuality(item)
                    item = condition((item) => item.sellIn < 11, increaseItemQuality, identity)(item)
                    item = condition((item) => item.sellIn < 6, increaseItemQuality, identity)(item)                                        

                    return item

                case 'Conjured Mana Cake':
                    item = decreaseItemQuality(item)
                    item = decreaseItemQuality(item)

                    item = condition(isExpired, decreaseItemQuality, identity)(item)
                    item = condition(isExpired, decreaseItemQuality, identity)(item)

                    return item
            
                default:
                    item = decreaseItemQuality(item)
                    item = condition(isExpired, decreaseItemQuality, identity)(item)
                    
                    return item
            }
        })
    }
}
