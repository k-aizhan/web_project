import { Link } from "react-router-dom";
import "../../styles/Auth.css"
import { useState } from "react";
//import { validate } from "./util";
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        bin: '',
        login: '',
        company_name: '',
        phone: '',
        email: '',
        password: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://webproject.loc/api/users', formData);
            console.log(response.data);
            setFormData({
                bin: '',
                login: '',
                company_name: '',
                phone: '',
                email: '',
                password: ''
            });
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
      <div className="content">
        <div className="wrapper">
          <p className="form-title">Регистрация</p>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-control">
              <label htmlFor="comp_bin">БИН</label>
              {/* { error.firstname && <span className="error-msg">{error.firstname}</span> } */}
              <input 
                id="comp_bin" 
                type="text"
                className="form-field" 
                name="bin"
                value={formData.bin}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label htmlFor="login">Логин</label>
              {/* { error.lastname && <span className="error-msg">{error.lastname}</span> } */}
              <input 
                id="login" 
                type="text"
                className="form-field" 
                name="login"
                value={formData.login}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label htmlFor="company_name">Компания</label>
              {/* { error.company && <span className="error-msg">{error.company}</span> } */}
              <input 
                id="company_name" 
                type="text"
                className="form-field" 
                name="company_name"
                value={formData.company_name}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label htmlFor="phone">Номер телефона</label>
              {/* { error.phonenumber && <span className="error-msg">{error.phonenumber}</span> } */}
              <input 
                id="phone" 
                type="text"
               // pattern="\+7\([0-9]{3}\)[0-9]{3}-[0-9]{4}"
                maxLength="15"
                name="phone"
                placeholder="+7(777)777-7777"
                className="form-field"
                value={formData.phone}
                onChange={handleChange}
                //onKeyDown={handlePhone}
              />
            </div>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              {/* { error.email && <span className="error-msg">{error.email}</span> } */}
              <input 
                id="email" 
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
            <Link to='/' className="link">
              <button className="btn-link" type="button">
                Войти
              </button>
            </Link>
            <button className="btn-submit">
              Зарегистрироваться
            </button>
            
            </form>
        </div>
      </div>
  )
};

export default Register;