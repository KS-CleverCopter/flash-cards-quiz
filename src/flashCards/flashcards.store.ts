import { atomWithStorage } from 'jotai/utils';

interface FlashCardsData {
  [id: string]: {
    title: string;
    content: string;
  };
}

export const defaultCSQuestions: FlashCardsData = {
  '1': {
    title: 'What is an algorithm?',
    content: 'A set of well-defined instructions to solve a problem.',
  },
  '2': {
    title: 'What is a data structure?',
    content:
      'A way to organize and store data for efficient access and modification.',
  },
  '3': {
    title: 'What is the difference between a stack and a queue?',
    content:
      'Stack: LIFO (Last In, First Out); Queue: FIFO (First In, First Out).',
  },
  '4': {
    title: 'What is a linked list?',
    content:
      'A linear data structure where elements are linked using pointers.',
  },
  '5': {
    title: 'What is a binary tree?',
    content: 'A tree data structure where each node has at most two children.',
  },
  '6': {
    title: 'What is a hash table?',
    content:
      'A data structure that uses a hash function to map keys to values.',
  },
  '7': {
    title: 'What is time complexity?',
    content:
      'A measure of how the runtime of an algorithm scales with input size.',
  },
  '8': {
    title: 'What is space complexity?',
    content: 'A measure of how much memory an algorithm uses.',
  },
  '9': {
    title: 'What is Big O notation?',
    content:
      "A notation used to describe the asymptotic upper bound of an algorithm's complexity.",
  },
  '10': {
    title: 'What is recursion?',
    content: 'A function that calls itself.',
  },
  '11': {
    title: 'What is iteration?',
    content:
      'Repeating a process until a condition is met, typically using loops.',
  },
  '12': {
    title: 'What is a sorting algorithm?',
    content: 'An algorithm that arranges elements in a specific order.',
  },
  '13': {
    title: 'Name a common sorting algorithm.',
    content: 'Bubble sort, insertion sort, merge sort, quicksort.',
  },
  '14': {
    title: 'What is a searching algorithm?',
    content: 'An algorithm that finds a specific element in a data structure.',
  },
  '15': {
    title: 'Name a common searching algorithm.',
    content: 'Linear search, binary search.',
  },
  '16': {
    title: 'What is a database?',
    content:
      'An organized collection of structured information, or data, typically stored electronically in a computer system.',
  },
  '17': {
    title: 'What is SQL?',
    content:
      'Structured Query Language, used for managing and manipulating relational databases.',
  },
  '18': {
    title: 'What is a programming paradigm?',
    content: "A style or 'way' of programming.",
  },
  '19': {
    title: 'Name a common programming paradigm.',
    content: 'Object-oriented, procedural, functional.',
  },
  '20': {
    title: 'What is object-oriented programming (OOP)?',
    content:
      "A paradigm based on the concept of 'objects' that can contain data and code.",
  },
  '21': {
    title: 'What is a class?',
    content: 'A blueprint for creating objects.',
  },
  '22': {
    title: 'What is an object?',
    content: 'An instance of a class.',
  },
  '23': {
    title: 'What is inheritance?',
    content:
      'A mechanism where a class inherits properties and methods from another class.',
  },
  '24': {
    title: 'What is polymorphism?',
    content: 'The ability of an object to take on many forms.',
  },
  '25': {
    title: 'What is encapsulation?',
    content:
      'Bundling of data and methods that operate on the data into a single unit.',
  },
  '26': {
    title: 'What is a compiler?',
    content: 'A program that translates source code into machine code.',
  },
  '27': {
    title: 'What is an interpreter?',
    content: 'A program that executes source code line by line.',
  },
  '28': {
    title: 'What is an operating system?',
    content: 'Software that manages computer hardware and software resources.',
  },
  '29': {
    title: 'What is a process?',
    content: 'An instance of a running program.',
  },
  '30': {
    title: 'What is a thread?',
    content: 'A lightweight sub-process within a process.',
  },
  '31': {
    title: 'What is deadlock?',
    content:
      'A situation where two or more processes are blocked indefinitely, waiting for each other.',
  },
  '32': {
    title: 'What is a virtual machine?',
    content: 'An emulation of a computer system.',
  },
  '33': {
    title: 'What is a network protocol?',
    content: 'A set of rules that govern data communication over a network.',
  },
  '34': {
    title: 'What is TCP/IP?',
    content:
      'Transmission Control Protocol/Internet Protocol, the foundation of the internet.',
  },
  '35': {
    title: 'What is HTTP?',
    content:
      'Hypertext Transfer Protocol, used for communication between web browsers and servers.',
  },
  '36': {
    title: 'What is a firewall?',
    content:
      'A network security system that monitors and controls incoming and outgoing network traffic.',
  },
  '37': {
    title: 'What is encryption?',
    content:
      'The process of converting data into a coded form to prevent unauthorized access.',
  },
  '38': {
    title: 'What is a software development life cycle (SDLC)?',
    content:
      'A process for planning, creating, testing, and deploying software.',
  },
  '39': {
    title: 'What is version control?',
    content:
      'A system that records changes to a file or set of files over time.',
  },
  '40': {
    title: 'Name a common version control system.',
    content: 'Git.',
  },
  '41': {
    title: 'What is debugging?',
    content: 'The process of finding and fixing errors in software.',
  },
  '42': {
    title: 'What is unit testing?',
    content:
      'Testing individual units of code to ensure they function correctly.',
  },
  '43': {
    title: 'What is integration testing?',
    content:
      'Testing the interaction between different modules or components of a software system.',
  },
  '44': {
    title: 'What is system testing?',
    content:
      'Testing the complete, integrated system to evaluate its compliance with specified requirements.',
  },
  '45': {
    title: 'What is an API?',
    content:
      'Application Programming Interface, a set of rules and protocols for building software applications.',
  },
  '46': {
    title: 'What is a library?',
    content:
      'A collection of pre-written code that can be used by other programs.',
  },
  '47': {
    title: 'What is a framework?',
    content: 'A reusable, semi-complete application that can be customized.',
  },
  '48': {
    title: 'What is cloud computing?',
    content:
      'On-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user.',
  },
  '49': {
    title: 'What is machine learning?',
    content:
      'A subset of artificial intelligence that enables systems to learn from data without explicit programming.',
  },
  '50': {
    title: 'What is artificial intelligence (AI)?',
    content:
      'The simulation of human intelligence processes by machines, especially computer systems.',
  },
};
export const FlashCardsAtom = atomWithStorage<FlashCardsData>('flashCardData', {
  '1': {
    title: '1',
    content: 'One',
  },
});
