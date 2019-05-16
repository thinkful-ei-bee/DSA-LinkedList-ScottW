'use strict';

const LinkedList = require('./LinkedList');



function display(list) {
  const disList = [];
  let currNode = list.head;

  if (list.head === null) {
    return 'List is empty';
  }
  else {
    while (currNode !== null) {
      disList.push(currNode.value);
      currNode = currNode.next;
    }
    return disList.join(', ');
  }
}



function size(list) {
  let size = 0;
  let currNode = list.head;

  if (list.head === null) {
    return size;
  }
  else {
    while (currNode !== null) {
      size++;
      currNode = currNode.next;
    }
    return size;
  }
}



function isEmpty(list) {
  return list.head ? false : true;
}



function findPrevious(list, item) {
  if (!list.head) {
    return 'List is empty';
  }
  else if (list.head.value === item) {
    return `${item} is head`;
  }
  else {
    let currNode = list.head;
    let prevNode = list.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      return `${item} not found`;
    }
    return prevNode.value;
  }
}



function findLast(list) {
  if (!list.head) {
    return 'List is empty';
  }
  else {
    let currNode = list.head;

    while (currNode.next !== null) {
      currNode = currNode.next;
    }
    return currNode.value;
  }
}



function main() {
  const SLL = new LinkedList;

  const items = ['Apollo', 'Boomer', 'Helo', 'Husker', 'Starbuck'];


  items.forEach(item => SLL.insertLast(item));
  //Apollo, Boomer, Helo, Husker, Starbuck

  SLL.insertLast('Tauhida');
  //Apollo, Boomer, Helo, Husker, Starbuck, Tauhida

  SLL.remove('squirrel');
  //item not found

  SLL.insertBefore('Athena','Boomer');
  //Apollo, Athena, Boomer, Helo, Husker, Starbuck, Tauhida

  SLL.insertAfter('Hotdog', 'Helo');
  //Apollo, Athena, Boomer, Helo, Hotdog, Husker, Starbuck, Tauhida

  SLL.insertAt('Kat', 2);
  //Apollo, Athena, Kat, Boomer, Helo, Hotdog, Husker, Starbuck, Tauhida

  SLL.remove('Tauhida');
  //Apollo, Athena, Kat, Boomer, Helo, Hotdog, Husker, Starbuck


  //to keep track of list
  SLL.list();



  console.log(display(SLL));

  console.log(size(SLL));

  console.log(isEmpty(SLL));

  console.log(findPrevious(SLL, 'Boomer'));

  console.log(findLast(SLL));

}



main();