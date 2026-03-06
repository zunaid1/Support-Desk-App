# What is JSX, and why is it used?

JSX হলো JavaScript এর মধ্যে HTML-এর মতো কোড লেখা যা React এ UI তৈরি সহজ ও পরিষ্কার করতে ব্যবহৃত হয়।


# What is the difference between State and Props?
State হলো কম্পোনেন্টের নিজের ডেটা যা পরিবর্তনযোগ্য, আর Props হলো প্যারেন্ট থেকে পাঠানো ডেটা যা পরিবর্তন করা যায় না।

# What is the useState hook, and how does it work?
useState হলো React-এর একটি Hook, যা ফাংশনাল কম্পোনেন্টে স্টেট (state) যোগ করতে ব্যবহার হয়। এটি একটি state variable এবং সেটার মান পরিবর্তনের জন্য একটি updater function রিটার্ন করে। যখন state আপডেট করা হয়, React কম্পোনেন্টকে রিরেন্ডার করে নতুন মান দেখায়। উদাহরণস্বরূপ, const [count, setCount] = useState(0); এখানে count হলো state, আর setCount দিয়ে আমরা count আপডেট করি। এটি UI এর ডায়নামিক পরিবর্তন সহজ করে।

# How can you share state between components in React?
React-এ কম্পোনেন্টের মধ্যে state শেয়ার করার জন্য কয়েকটি সাধারণ উপায় আছে। সবচেয়ে সহজ হলো props: প্যারেন্ট কম্পোনেন্টের state চাইল্ড কম্পোনেন্টে পাঠানো। যদি একাধিক চাইল্ড কম্পোনেন্টকে একই state দরকার হয়, তাহলে state কে common parent-এ রেখে props এর মাধ্যমে পাঠানো হয়, যাকে বলা হয় lifting state up। বড় অ্যাপে অনেক লেভেলে state শেয়ার করতে Context API ব্যবহার করা যায়। এছাড়াও, Redux, Zustand, Recoil এর মতো state management library ব্যবহার করে অ্যাপের বিভিন্ন কম্পোনেন্টে state সহজে শেয়ার করা যায়। সংক্ষেপে, props, lifting state up, Context বা library-এর মাধ্যমে React-এ state শেয়ার করা হয়।


# How is event handling done in react?
React-এ ইভেন্ট হ্যান্ডল করা হয় camelCase, ফাংশন পাস, SyntheticEvent ব্যবহার করে এবং state update করা সম্ভব।