class Sorter {
    constructor() {
        this.value=[];
        this.compareFunction=(a,b)=>a-b;

    }

    add(element) {
        this.value.push(element);
    }

    at(index) {
        return this.value[index];
    }

    get length() {
        return this.value.length;
    }

    toArray() {
        return this.value;
    }

    sort(indices) {
        indices.sort();
        console.log(indices);
        let newArray=[];
        for (let i=0;i<indices.length;i++) {
            newArray.push(this.value[indices[i]]);

        }
        console.log(newArray);
        newArray.sort(this.compareFunction);
        for (let i=0; i<indices.length;i++) {
            this.value[indices[i]]=newArray[i];
        }
        console.log(this.value);
    }

    setComparator(compareFunction) {
        this.compareFunction=compareFunction;
    }
}

module.exports = Sorter;
