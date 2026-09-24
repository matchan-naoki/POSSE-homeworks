function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="flex items-center gap-2 bg-white rounded-lg shadow px-4 py-2">
      <span
        onClick={() => onToggle(task.id)}
        className={`flex-1 cursor-pointer ${
          task.done
            ? "line-through text-gray-400"
            : ""
        }`}
      >
        {task.text}
      </span>

      <button
        onClick={() => onDelete(task.id)}
        className="text-red-400 hover:text-red-600 text-sm"
      >
        削除
      </button>
    </li>
  );
}

export default TaskItem;