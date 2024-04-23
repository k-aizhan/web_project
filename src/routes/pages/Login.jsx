import { Link } from "react-router-dom";
import { useState } from "react";
import "../../style/auth.css";
// import { validate } from "./util";
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
      email: '',
      password: ''
  });

  const handleChange = (e) => {
      setFormData({
          ...formData,
          [e.target.name]: e.target.value
      });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      
      try {
          const response = await axios.post('http://webproject.loc/api/users', formData);
          console.log(response.data); 
      } catch (error) {
          console.error(error); 
      }
  };

    return (     
      <div className="content">
        <div className="wrapper">
          <p className="form-title">Личный кабинет</p>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              {/* { error.email && <span className="error-msg">{error.email}</span> } */}
              <input 
                id="email" 
                placeholder="admin@gmail.com"
                type="text"
                className="form-field" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                />
            </div>
            <div className="form-control">
              <label htmlFor="password">Пароль</label>
              {/* { error.password && <span className="error-msg">{error.password}</span> } */}
              <input 
                id="password"
                type="password"
                className="form-field" 
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <Link to='/register' className="link">
              <button className="btn-link" type="button">
                Зарегистрироваться
              </button>
            </Link>
            <Link to='/Home' className="link">
            <button className="btn-submit" type="submit">
              Войти
            </button>
            </Link>
          </form>
        </div>
      </div>
  )
}
export default Login;