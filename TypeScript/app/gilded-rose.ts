// const isImprovedWithTime = (item: Item) => (
//     item.name === 'Aged Brie' || 
//     item.name === 'Backstage passes to a TAFKAL80ETC concert'
// )

const isExpired = (item: Item) => item.sellIn < 0

const decreaseSellIn = (item: Item) => {
    item.sellIn = item.sellIn - 1
    return item
} 

const reduceQualityToZero = (item: Item) => { 
    item.quality = 0
    return item
}

const increaseItemQuality = (item: Item) => {
    if (item.quality < 50) {
        item.quality = item.quality + 1
    }

    return item
}

const decreaseItemQuality = (item: Item) => {
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

                    if (isExpired(item)) {
                        item = increaseItemQuality(item)
                    }
                    return item
                
                case 'Backstage passes to a TAFKAL80ETC concert':
                    item = increaseItemQuality(item)

                    if (item.sellIn < 11) {
                        item = increaseItemQuality(item)
                    }

                    if (item.sellIn < 6) {
                        item = increaseItemQuality(item)
                    }                    

                    if (isExpired(item)) {
                        item = reduceQualityToZero(item)
                    }
                    return item
            
                default:
                    item = decreaseItemQuality(item)

                    if (isExpired(item)) {
                        item = decreaseItemQuality(item)
                    }

                    return item
            }
        })
    }
}
