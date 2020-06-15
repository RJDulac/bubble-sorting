import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([400, -2, 20, 0, 1, -399]);

numbersCollection.sort();
//give print method later
console.log(numbersCollection);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();

const charactersCollection = new CharactersCollection("Z Hello");
charactersCollection.sort();
console.log(charactersCollection);
