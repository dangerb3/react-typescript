import axios from "axios";
import { defaultMaxListeners } from "events";
import React, { useEffect, useState } from "react";
import Card, { CardVariant } from "./components/Card";
import EventsExample from "./components/EventsExample";
import List from "./components/List";
import TodoItem from "./components/TodoItem";
import { UserItem } from "./components/UserItem";
import { ITodo, IUser } from "./types/types";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import { NavLink } from "react-router-dom";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";

export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div>
          <NavLink to="/users">Пользователи</NavLink>
          <NavLink to="/todos">Список дел</NavLink>
        </div>
        <Routes>
          <Route path={"/users"} element={<UsersPage />} />
          <Route path={"/todos"} element={<TodosPage />} />
          <Route path={"/user/:id"} element={<UserItemPage />} />
          <Route path={"/todos/:id"} element={<TodoItemPage />} />
        </Routes>
      </div>
    </BrowserRouter>
    // <div>
    //   <EventsExample />
    //   <Card variant={CardVariant.outlined} width="200px" height="200px">
    //     <button>Button</button>
    //     <div>test</div>
    //   </Card>
    // </div>
  );
};

export default App;
