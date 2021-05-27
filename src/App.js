// import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import queryString from "query-string";
import ColorBox from "./components/ColorBox";
import TodoList from "./components/todoList";
import TodoForm from "./components/todoForm";
import PostList from "./components/postList";
import Pagination from "./components/Pagination";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love Easy Frontend! 😍" },
    { id: 2, title: "We love Easy Frontend! 🥰" },
    { id: 3, title: "They love Easy Frontend! 🚀" },
  ]); // mảng cha

  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex((x) => x.id === todo.id); // tìm 1 phần tử trong mảng
    if (index < 0) return;

    // khi muốn thay đổi state thì phải clone nó ra thành 1 state mới rồi mới đc chỉnh sửa, ko nên chỉnh sửa trên state cũ
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }
  function handleTodoFormSubmit(formValue) {
    console.log("Form value is : ", formValue);
    const newTodo = {
      id: todoList,
      ...formValue,
    };

    const newTodoList = [...todoList]; // add new todo to current todoList
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });

  function handlePageChange(newPage) {
    console.log("newPage", newPage);
    setFilters({
      ...filters,
      _page: newPage,
    });
  }
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  });
  const [postList, setpostList] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      try {
        const paramString = queryString.stringify(filters); // đổi object filter thành dạng chuỗi ( vidu : _limit : 10,_page:1, => _limit=10&_page=1 như link below )
        const response = await fetch(
          // "http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1"
          `http://js-post-api.herokuapp.com/api/posts?${paramString}`
        );
        const responseJson = await response.json();
        console.log(responseJson);
        const { data, pagination } = responseJson;
        setpostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("Failed to fetch API", error.message);
      }
    }
    fetchAPI();
  }, [filters]); // phụ thuộc vào filters , nó sẽ chạy lại sau mỗi lần filters thay đổi

  return (
    <div>
      <ColorBox />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
      <PostList posts={postList} />
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
      {/* todos={TodoList} : truyền props là mảng cha vào components */}
    </div>
  );
}

export default App;
