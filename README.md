## 1) What is the difference between null and undefined?
`undefined` মানে হলো কোনো ভ্যারিয়েবল ডিক্লেয়ার করা হয়েছে, কিন্তু তাকে এখনো কোনো মান দেওয়া হয়নি। জাভাস্ক্রিপ্ট নিজে থেকে এটাকে undefined সেট করে।

```js
let x;
console.log(x); // undefined
```

অন্যদিকে `null` হলো ইচ্ছাকৃতভাবে দেওয়া একটি খালি মান। ডেভেলপার নিজে বোঝাতে চান যে এখানে কোনো মান নেই।

```js
let y = null;
```

সহজভাবে বললে:

- **undefined →** মান এখনো সেট করা হয়নি  
- **null →** ইচ্ছা করে খালি রাখা হয়েছে  

---
## 2) What is the use of the map() function in JavaScript? How is it different from forEach()?

`map()` ব্যবহার করা হয় একটি অ্যারের প্রতিটি উপাদান পরিবর্তন করে **নতুন অ্যারে তৈরি** করার জন্য।

```js
let nums = [1, 2, 3];
let doubled = nums.map(n => n * 2);
```

এখানে নতুন অ্যারে তৈরি হবে।

`forEach()` শুধু প্রতিটি উপাদানের উপর কাজ করে, কিন্তু **কিছু রিটার্ন করে না**।

```js
nums.forEach(n => console.log(n));
```

পার্থক্য:

- **map() →** নতুন অ্যারে তৈরি করে  
- **forEach() →** শুধু লুপ চালায়, কিছু রিটার্ন করে না  

---

## 3) What is the difference between == and ===?

`==` মান তুলনা করে, কিন্তু টাইপ চেক করে না।

```js
5 == "5" // true
```

`===` মান এবং টাইপ — দুটোই চেক করে।

```js
5 === "5" // false
```

সংক্ষেপে:

- **== →** শুধু মান তুলনা  
- **=== →** মান + টাইপ তুলনা (বেশি নিরাপদ)

---

## 4) What is the significance of async/await in fetching API data?

`async/await` অ্যাসিঙ্ক্রোনাস কোডকে সহজভাবে লিখতে সাহায্য করে, যেন সেটা সাধারণ কোডের মতো পড়ে।

এতে:

- কোড পরিষ্কার হয়  
- Promise handle করা সহজ হয়  
- error manage করা সহজ হয়  

উদাহরণ:

```js
async function getData() {
  let res = await fetch(url);
  let data = await res.json();
  console.log(data);
}
```

এখানে `await` নিশ্চিত করে যে ডাটা আসা পর্যন্ত কোড অপেক্ষা করবে।

---

## 5) Explain the concept of Scope in JavaScript (Global, Function, Block).
Scope নির্ধারণ করে কোনো ভ্যারিয়েবল কোথা থেকে অ্যাক্সেস করা যাবে।

### Global Scope
যে ভ্যারিয়েবল পুরো প্রোগ্রাম থেকে ব্যবহার করা যায়।

```js
let a = 10;
```

### Function Scope
ফাংশনের ভিতরে তৈরি ভ্যারিয়েবল শুধু সেই ফাংশনের ভিতরেই কাজ করে।

```js
function test() {
  let b = 5;
}
```

### Block Scope
`{}` এর ভিতরের ভ্যারিয়েবল বাইরে কাজ করে না (let/const এর ক্ষেত্রে)।

```js
{
  let c = 3;
}
```

সহজভাবে:

- Global → সব জায়গায়  
- Function → শুধু ফাংশনের ভিতরে  
- Block → নির্দিষ্ট ব্লকের ভিতরে  

---
