<a name="callback"></a>

# \***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\***\_\_\_\_\***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\***

# Callback working

Codul din JavaScript rulează pas cu pas. Când codul întâlnește o secțiune care așteaptă un răspuns, acesta va transmite sarcina către API-ul web, care o va procesa apoi asincron. Când răspunsul este gata, API-ul web îl va trimite către Queue Manager. Acest manager este împărțit în două cozi: **Macrotasks** și **Microtasks** (_deseori reprezentate de Promises_).

Toate sarcinile vor fi executate în felul următor: În primul rând, toate microtask-urile vor fi executate și numai atunci când stiva de apeluri este goală, macro-sarcinile vor fi executate una câte una. Acest lucru asigură că microsarcinile au o prioritate mai mare și sunt finalizate înainte de a trece la macrosarcini.

Este important de reținut că execuția micro și macrotask-urilor va avea loc atunci când callback stack este gol, ceea ce înseamnă că tot codul sincron a fost executat, iar timpul de execuție JavaScript este gata să proceseze sarcinile în așteptare în cozi.
<a name="closure"></a>

# \***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\***\_\_\_\_\***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\***

# Closure

În JavaScript, un closure reprezintă o funcție împreună cu mediul lexical în care a fost definită. Acesta păstrează accesul la variabilele și funcțiile definite în mediul părinte, chiar dacă acel mediul părinte nu mai este activ sau nu mai există.

_Exemplu_

**function** counter() {\
&nbsp;let count = 0;

&nbsp;**function** increment() {\
&nbsp;&nbsp;count++;
&nbsp;&nbsp;console.log(count);\
&nbsp;}

&nbsp;**return** increment;\
}

const **counterFunction** = counter();\
counterFunction(); // Output: 1\
counterFunction(); // Output: 2

În acest exemplu, avem o funcție numită **counter** care declară o variabilă **count** și o altă funcție numită increment. Funcția **counter** returnează funcția increment. În momentul în care apelăm **counter()**, primim înapoi funcția increment, care a fost definită în cadrul funcției counter.

Dar ce face acest exemplu special este că funcția **increment** păstrează o referință la mediul lexical al funcției counter. Acesta este cazul în care apare **closure-ul**. De fiecare dată când apelăm **counterFunction()**, aceasta are încă acces la variabila **count**, care a fost definită în interiorul funcției **counter**, și își păstrează valoarea între apeluri.

**Closure-urile** sunt utile pentru gestionarea stării private a datelor, pentru a implementa funcționalități curioase precum factory functions și module pattern, și pentru a evita poluarea globală a [namespace-ului](#namespance).
<a name="namespace"></a>

# \***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\***\_\_\_\_\***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\***

# Namespace

Un namespace în JavaScript poate fi considerat ca un obiect global care conține alte obiecte sau funcții ca proprietăți ale sale. Acesta poate fi folosit pentru a grupa logica similară și pentru a evita denumirile conflictuale între diferite părți ale aplicației.

De exemplu, să presupunem că ai o aplicație web care utilizează diverse funcții și variabile, cum ar fi funcții pentru gestionarea utilizatorilor și variabile pentru configurarea aplicației. Fără un namespace, poți ajunge în situația în care numele funcțiilor sau variabilelor se suprapun, ceea ce ar putea provoca erori.

_Exemplu_

// Crearea unui namespace (spațiu de nume)\
var MyNamespace = {};

// Adăugarea funcțiilor în namespace\
MyNamespace.greetUser = function(name) {\
&nbsp;return 'Salut, ' + name + '!';\
};

MyNamespace.sayGoodbye = function(name) {\
&nbsp;return 'La revedere, ' + name + '!';\
};

// Adăugarea variabilelor în namespace\
MyNamespace.defaultBackgroundColor = 'blue';\
MyNamespace.maxUsers = 100;

// Utilizarea funcțiilor și variabilelor din namespace\
console.log(MyNamespace.greetUser('John')); // Output: "Salut, John!"\
console.log(MyNamespace.defaultBackgroundColor); // Output: "blue"

Este important să menționăm că, începând cu ES6 (ECMAScript 2015), JavaScript a introdus modulele, care oferă o modalitate mai robustă și structurată de a organiza codul. Modulele își îndeplinesc, într-un fel, funcția de spațiu de nume, permitând încapsularea codului și exportarea sau importarea funcțiilor și variabile între module. Cu toate acestea, ideea de spații de nume în continuare poate fi relevantă în anumite contexte sau pentru a oferi compatibilitate cu versiunile anterioare de JavaScript.

# \***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\***\_\_\_\_\***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\***

# Functions

<span style="color: red"> !!! </span> Functiile pot fi apelate inainte declarare. Se datoreste hosting-ului care va muta declaratia functiei in partea de sus a contetului.

Toate modurile de a crea o funcție

#### Function Declaration:

function functionName(parameters) {\
&nbsp;// function code\
}

#### Function Expression:

const functionName = function(parameters) {\
&nbsp;// function code\
};

#### Arrow Function (Introduced in ECMAScript 6):

const functionName = (parameters) => {\
&nbsp;// function code\
};

#### Function Constructor:

const functionName = new Function('parameters', 'function code');

#### Method of an Object:

const object = {
&nbsp;functionName: function(parameters) {
&nbsp;&nbsp;// function code
&nbsp;}
};

#### Function with Function.prototype.bind():

function functionName(parameters) {
&nbsp;// function code
}

const boundFunction = functionName.bind(context, arguments);

#### Immediately Invoked Function Expression (IIFE):

(function(parameters) {
&nbsp;// function code
})(arguments);

#### Function using async function for asynchronous operations (Introduced in ECMAScript 2017):

async function asyncFunction(parameters) {
&nbsp;// asynchronous function code
}

#### Generator function

function\* myGenerator() { \
&nbsp;&nbsp;yield 1; \
&nbsp;&nbsp;yield 2; \
&nbsp;&nbsp;yield 3; \
}
const iterator = myGenerator(); \
console.log(iterator.next()); // { value: 1, done: false } \
console.log(iterator.next()); // { value: 2, done: false } \
console.log(iterator.next()); // { value: 3, done: false } \
console.log(iterator.next()); // { value: undefined, done: true }
(Funcțiile generator oferă o modalitate elegantă de a genera și controla fluxul datelor în JavaScript, și sunt utilizate în mod frecvent în scenarii care implică iterații complexe, gestionarea evenimentelor sau calculul asincron.)

# \***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\***\_\_\_\_\***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\***

# prototype

**Prototype** este un obiect care există în orice funcție sau obiect creat în JavaScript. Orice proprietate existentă în prototipul funcției sau clasei va fi moștenită de către instanțele create cu ajutorul operatorului new.
Atunci când accesați o proprietate pe un obiect, mai întâi motorul JavaScript verifică dacă acea proprietate există direct în obiectul respectiv.acă proprietatea nu există în obiectul respectiv, motorul va căuta proprietatea în **prototype-ul** funcției constructor și în **prototype-ul** **prototype-ului** până când găsește proprietatea sau ajunge la capătul lanțului de prototipuri.\
_Exemplu_ \
// Funcția constructor "Person"\
function Person(name) {\
&nbsp;this.name = name;
}

// Adăugăm o metodă "greet" la "prototype" funcției "Person" \
Person.prototype.greet = function() { \
console.log(`Hello, my name is ${this.name}.`); \
};

// Creăm o instanță a obiectului "Person" \
const person1 = new Person('Alice');

// Utilizăm metoda "greet" moștenită de la "prototype" \
person1.greet(); // Va afișa: "Hello, my name is Alice."

**Prototype** este un fel de constructor ca si in Java, daca in obiect el nu este definit, atunci el mosteneste prototypul default.

# \***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\***\_\_\_\_\***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\***

# Object.keys

Este metoda care primeste un obiect si returneaza o lista de stringuri cu toate denumirile proprietatilor ale obiectului \
_Exemplu_

const person = { \
&nbsp;&nbsp;name: 'Alice', \
&nbsp;&nbsp;age: 30, \
&nbsp;&nbsp;occupation: 'Engineer' \
};

const keys = Object.keys(person); \
console.log(keys);

# \***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\***\_\_\_\_\***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\***

# Boolean logic

![Example Image](https://miro.medium.com/v2/resize:fit:1270/format:webp/1*SX5-E0EOlfb-HfuttEblHw.png)

Operatorii boolean pot fi folosite si in asa mod:

var person = { \
&nbsp;&nbsp;name: 'Jack', \
&nbsp;&nbsp;age: 34 \
} \
console.log(person.job || 'unemployed'); \
// 'unemployed'

<span style="color: red"> !!! </span> Cand se compara 2 tipuri diferite , Javascript converteaza una din aceste tipuri ca ele sa fie egale dupa tipuri.

3 == '3' // true

# \***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\***\_\_\_\_\***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\***

# Strict mode

Modul strict ajută la prevenirea unor tipuri de erori comune care pot apărea în JavaScript. De exemplu, utilizarea de variabile nedeclarate. \
Modul strict ajută la îmbunătățirea securității prin dezactivarea unor funcții periculoase, cum ar fi "with" și "eval", care pot avea vulnerabilități de securitate dacă nu sunt utilizate cu atenție. \
În unele cazuri, codul în modul strict poate fi optimizat mai bine de către motoarele JavaScript, ceea ce duce la îmbunătățiri potențiale de performanță. \
Modul strict vă ajută să scrieți cod care se conformează celor mai recente standarde ale limbajului JavaScript, făcându-l mai rezistent la viitoarele modificări ale limbajului.

'use strict';

x = 10; // Va arunca o eroare în modul strict: "ReferenceError: x is not defined"

<span style="color: red"> !!! </span> daca nu utilizam **use strict**, **x** va deveni variabila globala.

# \***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\***\_\_\_\_\***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\***

# Context

Contextul se refera la mediul in care este rulat codul, modul in care variabilele, functiile si obiectele sunt gestionate sau accesate in acest mediu. \
Sunt 2 contexte:

- global : Reprezinta nivelul intregii aplicatii. Variabilele si functiile in afara functiilor pot fi acceste in diferite locuri ale aplicatiei.

const globalVariable = 'I am in global context';

function globalFunction() { \
&nbsp;&nbsp;console.log('I am a function in global context');
}

console.log(globalVariable); // Output: "I am in global context" \
globalFunction(); // Output: "I am a function in global context"

- local : Acesta se referă la contextul definit în interiorul unei funcții sau blocuri de cod. Variabilele declarate în cadrul unei funcții sau blocuri de cod sunt accesibile numai în acel context și sunt limitate la viața funcției sau a blocului respectiv. \
  function localFunction() { \
  &nbsp;&nbsp;const localVariable = 'I am in local context'; \
  &nbsp;&nbsp;console.log(localVariable); \
  }

localFunction(); // Output: "I am in local context" \
console.log(localVariable); // Va arunca o eroare: "ReferenceError: localVariable is not defined"

# \***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\***\_\_\_\_\***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\***

# Array

For let arr = [];, the prototype chain will look like this:

arr -> **Array.prototype** -> **Object.prototype** -> null

# \***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\***\_\_\_\_\***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\***

# Unary operators

În programare, operatorii unari sunt operatori care operează pe un singur operand, care poate fi o variabilă, constantă sau expresie. Acești operatori efectuează diverse operații, cum ar fi schimbarea semnului unui număr, creșterea sau decrementarea unei valori sau conversia unei valori într-un alt tip de date.

- #### Plus (+) and -Minus (-):

  - Plusul unar transformă un operand într-un număr. \
  - Dacă operandul este deja un număr, nu are niciun efect. \
  - Minusul unar schimbă semnul unui operand numeric în opusul său.

            let num1 = 5; \
            let num2 = -10;

            console.log(+num1); // Output: 5 \
            console.log(-num1); // Output: -5 \
            console.log(-num2); // Output: 10

- #### Increment (++) and Decrement (--)

  - Incrementeaza si decrementeaza valorile

            let counter = 0;

            console.log(counter++); // Output: 0 (returns the original value and then increments) \
            console.log(counter); // Output: 1 (counter is now incremented)

            console.log(++counter); // Output: 2 (increments and then returns the new value) \
            console.log(counter); // Output: 2 (counter is now 2)

- #### Logical NOT (!)

  - Operatorul logic NOT ! neagă o valoare booleană. Dacă operandul este adevărat, devine fals și invers.

            let isTrue = true;
            let isFalse = !isTrue;

            console.log(isFalse); // Output: false

- #### Bitwise NOT (~)

  - Operatorul NOT pe biți ~ inversează biții operandului său, schimbând efectiv de la 0 la 1 și de la 1 la 0.

            let number = 5; // Binary representation: 00000000000000000000000000000101

            let inverted = ~number; // Binary representation: 11111111111111111111111111111010
            console.log(inverted);  // Output: -6 (decimal representation)

# \***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\***\_\_\_\_\***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\***

# Object.delete

Este metoda care stere o proprietate din obiect.

const foo = { \
 name: 'Albert', \
};

console.log(foo.name); // Albert \
delete foo.name; \
console.log(foo.name); // undefined

# \***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\***\_\_\_\_\***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\***

# Array

- **push** - aduga elementul la sfarsitul listei si returneaza lungimea noua a listei \
   const arr = [1, 2, 3, 4, 5]; \
   arr.push(6); \
   console.log(arr); // [1, 2, 3, 4, 5, 6]

- **pop** - sterge ultimul element din lista si il returneaza \
   const arr = [1, 2, 3, 4, 5]; \
   arr.pop(); \
   console.log(arr); // [1, 2, 3, 4]

- **unshift** - insereaza elementul la inceputul listei si il returneaza \
   const arr = [1, 2, 3, 4, 5]; \
   arr.unshift(0); \
   console.log(arr); // [0, 1, 2, 3, 4, 5]

- **shift** - elimina primul element din lista si il returneaza \
   const arr = [1, 2, 3, 4, 5]; \
   arr.shift(); \
   console.log(arr); // [1, 2, 3, 4, 5]

- **reverse** - inverseaza lista \
  const arr = [1, 2, 3, 4, 5]; \
  arr.reverse(); \
  console.log(arr); // [5, 4, 3, 2, 1]

- **filter** - filtreaza lista \
  const arr = [1, 2, 3, 4, 5]; \
  console.log(arr.filter((item) => item > 3)); // [4, 5]
