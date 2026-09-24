import { useState, useEffect } from "react";
import TaskItem from "./components/TaskItem";

function App() {
  // localStorageからタスクを読み込む
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [input, setInput] = useState("");

  // 現在選択しているフィルター
  const [filter, setFilter] = useState("all");

  // tasksが変わるたびにlocalStorageへ保存
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // タスクを追加
  const addTask = (event) => {
    event.preventDefault();

    const text = input.trim();

    // 空文字は追加しない
    if (text === "") return;

    const newTask = {
      id: Date.now(),
      text: text,
      done: false,
    };

    setTasks([...tasks, newTask]);

    // 入力欄を空にする
    setInput("");
  };

  // 完了・未完了を切り替える
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, done: !task.done }
          : task
      )
    );
  };

  // タスクを1件削除
  const deleteTask = (id) => {
    setTasks(
      tasks.filter((task) => task.id !== id)
    );
  };

  // 完了したタスクを一括削除
  const deleteDoneTasks = () => {
    setTasks(
      tasks.filter((task) => !task.done)
    );
  };

  // フィルター
  const filteredTasks = tasks.filter((task) => {
    // 未完了だけ表示
    if (filter === "active") {
      return !task.done;
    }

    // 完了済みだけ表示
    if (filter === "done") {
      return task.done;
    }

    // すべて表示
    return true;
  });

  return (
    <main className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        タスク管理
      </h1>

      {/* タスク入力フォーム */}
      <form
        onSubmit={addTask}
        className="flex gap-2 mb-4"
      >
        <input
          className="border rounded px-3 py-2 flex-1"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="新しいタスクを入力..."
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          追加
        </button>
      </form>

      {/* フィルターボタン */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setFilter("all")}
          className={`px-3 py-1 rounded ${
            filter === "all"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          すべて
        </button>

        <button
          onClick={() => setFilter("active")}
          className={`px-3 py-1 rounded ${
            filter === "active"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          未完了
        </button>

        <button
          onClick={() => setFilter("done")}
          className={`px-3 py-1 rounded ${
            filter === "done"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          完了済み
        </button>
      </div>

      {/* タスク一覧 */}
      <ul className="space-y-2">
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ))}
      </ul>

      {/* 完了したタスクがある場合だけ表示 */}
      {tasks.some((task) => task.done) && (
        <button
          onClick={deleteDoneTasks}
          className="bg-red-500 text-white px-4 py-2 rounded mt-4 hover:bg-red-600"
        >
          完了したタスクを一括削除
        </button>
      )}

      {/* タスクが0件の場合 */}
      {tasks.length === 0 && (
        <p className="text-center text-gray-400 mt-8">
          タスクがありません
        </p>
      )}
    </main>
  );
}

export default App;