const isImprovedWithTime = (item: Item) => (
    item.name === 'Aged Brie' || 
    item.name === 'Backstage passes to a TAFKAL80ETC concert'
)

const increaseItemQuality = (item: Item) => {
    if (item.quality < 50) {
        item.quality = item.quality + 1
        if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (item.sellIn < 11) {
                if (item.quality < 50) {
                    item.quality = item.quality + 1
                }
            }
            if (item.sellIn < 6) {
                if (item.quality < 50) {
                    item.quality = item.quality + 1
                }
            }
        }
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

            item.sellIn = item.sellIn - 1;

            if (isImprovedWithTime(item)) { 
                // Increase quality
                item = increaseItemQuality(item)                
            } else {
                // Reduce quality
                item = decreaseItemQuality(item)
            }
            
            if (item.sellIn < 0) {
                if (item.name === 'Aged Brie') { 
                    item = increaseItemQuality(item)
                }

                if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
                    item.quality = 0
                }

                if (item.name === '+5 Dexterity Vest') {   
                    item = decreaseItemQuality(item)
                }
            }

            return item
        })
    }
}
