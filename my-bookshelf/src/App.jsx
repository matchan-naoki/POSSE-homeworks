// src/App.jsx
import BookCard from './components/BookCard';
import Header from "./components/header";
import Footer from "./components/footer";


const books = [
  {
    id: 1,
    title: "JavaScript入門",
    author: "田中 太郎",
    rating: "★★★★☆",
    comment: "基礎からていねいで、最初の1冊によかった。",
  },
  {
    id: 2,
    title: "Reactの教科書",
    author: "山田 花子",
    rating: "★★★★★",
    comment: "コンポーネント設計の考え方が勉強になった。",
  },
  {
    id: 3,
    title: "CSS設計完全ガイド",
    author: "鈴木 一郎",
    rating: "★★★☆☆",
    comment: "分厚いが、辞書として手元に置きたい。",
  },
    {id: 4,
    title: "嫌われる勇気",
    author: "岸見一郎・古賀史健",
    rating: "★★★☆☆",
    comment: "アドラー心理学をもとに、自由に生きるための考え方を紹介する本です。",
  },
    {id: 5,
    title: "星の王子さま",
    author: "サン＝テグジュペリ",
    rating: "★★★★☆",
    comment: "大切なものは目に見えないということを教えてくれる物語です。",
  },
];

function App() {
  return (
    <>
    <Header />

    <main className="max-w-2xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold text-center">わたしの本棚</h1>
      {books.map((book) => (
        <BookCard
          key={book.id}
          title={book.title}
          author={book.author}
          rating={book.rating}
          comment={book.comment}
        />
      ))}
    </main>

    <Footer />
    </>
  );
}

export default App;


