import React, { useEffect, useState } from "react";
import { useWeb3Context } from "./context/Web3Context";
import useContract from "./hooks/useContract";
import { Field, useFormik } from "formik";

interface Values {
  content: string;
  author: string;
}

type Field<I, N, L extends string, V extends string | number> = {
  id: I;
  name: N;
  col: L;
  value: V;
};

type NameField = Field<string, string, string, number>;

function App() {
  const contract: any = useContract();

  const [todos, setTodos] = useState([]);
  const [listWhiteList, setListWhiteList] = useState<string[]>([]);

  const {
    connectWallet,
    disconnect,
    state: { isAuthenticated, address, currentChain, provider },
  } = useWeb3Context();

  const getTodos = async () => {
    try {
      const transaction = await contract.getTasks();
      console.log(transaction, "transaction");
      setTodos(transaction);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, [contract]);

  const field: NameField = {
    id: "content",
    name: "content",
    col: "col-4",
    value: 3,
  };

  const fieldAuthor: NameField = {
    id: "author",
    name: "author",
    col: "col-4",
    value: 3,
  };

  const initialValues: Values = {
    content: "",
    author: "",
  };

  const onSubmit = async (v: Values) => {
    const transaction = await contract.createTask(v.content, v.author);
    await transaction.wait();
    console.log(transaction, "transaction");
    getTodos();
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values: Values): Promise<void> => onSubmit(values),
  });

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <button onClick={connectWallet} className="">
        {address ? address : "Connect Metamask"}
      </button>
      <div className="">
        <div className="row">
          <div className="col-5 col-offset-2">
            <form onSubmit={formik.handleSubmit}>
              <div className="d-flex align-items-center my-3">
                <label htmlFor="content">Content</label>
                <input
                  id={field.id}
                  name={field.name}
                  onChange={(e) => formik.handleChange(e)}
                  value={formik.values.content}
                  className="form-control mx-2"
                />
              </div>

              <div className="d-flex align-items-center my-2">
                <label htmlFor="content">Author</label>
                <input
                  id={fieldAuthor.id}
                  name={fieldAuthor.name}
                  onChange={(e) => formik.handleChange(e)}
                  value={formik.values.author}
                  className="form-control mx-2"
                />
              </div>

              <button type="submit" className="btn btn-primary my-4">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-8">
          <div className="">
            {todos.map((todo: any) => (
              <div key={todo.id} className="my-2">
                {todo.id.toString()} {`)`} {todo.content} - {todo.author} -{" "}
                {todo.owner}
                <button className="btn btn-danger mx-3">Edit</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
