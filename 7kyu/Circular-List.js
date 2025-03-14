// Create a Circular List

// A circular list is of finite size, but can infititely be asked for its previous and next elements. This is because it acts like it is joined at the ends and loops around.

// For example, imagine a CircularList of [1, 2, 3, 4]. Five invocations of next() in a row should return 1, 2, 3, 4 and then 1 again. At this point, five invocations of prev() in a row should return 4, 3, 2, 1 and then 4 again.

// Your CircularList is created by passing a vargargs parameter in, e.g. new CircularList(1, 2, 3). Your list constructor/init code should throw an Exception if nothing is passed in.

class CircularList {
    constructor(...args){
        if(!args.length){
            throw new Error()
        }
        this.circularList = args
        this.index = -1
    }

    next(){
        this.index++
        if(this.index>this.circularList.length-1){
            this.index=0
        }
        return this.circularList[this.index]
    }

    prev(){
        this.index--
        if(this.index<0){
            this.index=this.circularList.length-1
        }
        return this.circularList[this.index]
    }
   
    
  }

  let list = new CircularList("one", "two", "three");


  console.log(list.next())
  console.log(list.next())
  console.log(list.next())
  console.log(list.next())
  console.log(list.prev())

