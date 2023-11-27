import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";

const Todo = () => {
  const [todolist, settodo] = useState([]);
  const [todotext, settototext] = useState("");
  const [count, setcount] = useState(0);

  const submithandler = (e) => {
    e.preventDefault();
    const newtodo = { id: count, text: todotext, complete: false };
    settodo([...todolist, newtodo]);
    setcount(count + 1);
    settototext("");
  };
  const complet = (id) => {
    settodo((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      })
    );
  };
  const delet = (id) => {
    settodo((prev) => {
      const result = prev.filter((todo) => todo.id !== id);
      return result;
    });
  };
  return (
    <center>
      <div
        style={{
          border: "2px solid ",
          width: "500px",
          height: "500px",
          position: "relative ",
          top: "60px",
        }}
      >
        <Form onSubmit={submithandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label
              style={{
                fontFamily: "serif",
                fontSize: "30px",
                position: "relative ",
                top: "8px",
              }}
            >
              TODO LIST
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="enter text"
              style={{
                width: "380px",
                outline: " 2px solid black",
                position: "relative ",
                top: "8px",
              }}
              onChange={(event) => settototext(event.target.value)}
              value={todotext}
            />
          </Form.Group>
          <Button
            variant="info"
            type="submit"
            style={{
              width: "150px",
              outline: " 2px solid black",
              position: "relative ",
              top: "8px",
            }}
          >
            CLICK TO ADD
          </Button>
          <br />
          <br />
          <center>
            <div>
              {todolist.map((todo) => (
                <div key={todo.id}>
                  <span
                    style={{
                      textDecoration: todo.complete ? "line-through" : "none",
                      marginRight: "90px",
                    }}
                  >
                    {todo.text}
                  </span>
                  <AiOutlineCheck
                    style={{
                      color: "green",
                      position: "sticky",
                      left: "870px",
                    }}
                    onClick={() => complet(todo.id)}
                  ></AiOutlineCheck>
                  <AiOutlineClose
                    style={{ color: "red", position: "sticky", left: "890px" }}
                    onClick={() => delet(todo.id)}
                  ></AiOutlineClose>
                </div>
              ))}
            </div>
          </center>
        </Form>
      </div>
    </center>
  );
};
export default Todo;
