export default function Index() {
  return (
    <div className="space-y-5">
      <div bg="green-300">
        Hello, I am green
      </div>
      <div className="bg-pink-300">
        Hello, I am pink
      </div>
      <div bg-red-300="">
        Hello, I am red (the problem is here)
      </div>
    </div>
  );
}
