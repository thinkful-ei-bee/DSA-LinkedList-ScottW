'use strict';

const LinkedList = require('./LinkedList');

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
}

main();