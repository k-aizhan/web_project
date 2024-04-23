import axios from "axios";
// import { useEffect, useState } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Modal(params) {
  const navigate = useNavigate()
  // if(localStorage.getItem('access') === null) {
  //   navigate('/login')
  // }
  const [formData, setFormData] = useState({
    direction: '',
    name: '',
    description: '',
    file: null,
  });
  const [error, setError] = useState({
    direction: '',
    name: '',
    description: '',
    file: '',
  })
  
//   const [directions, setDirections] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:8000/direction/directions/')
//       .then(res => {
//         setDirections(res.data)
//       })
//       .catch(e => {
//         console.error(e)
//       })
 // }, [])

  function handleSubmit(e) {
    e.preventDefault();
    
    const data = {
      subject: formData.name,
      direction: parseInt(formData.direction, 10),
      file: formData.file
    }

    axios.get('http://webproject.loc/api/users', {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('access')}`
      }
    }).then(res => {
      data.name = res.data.name
      data.number = res.data.phone_number
      data.email = res.data.email
      data.company = res.data.company_name
      data.user_id = res.data.id
      
      axios.post("http://webproject.loc/api/users", data, 
      {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${localStorage.getItem('access')}`
        }
      })
        .then(res => {
          if(res.status === 201){
            params.setOpen(false)
          }
        })
        .catch(err => {
          console.log(err)
        })
      
    }).catch(res => {
      if(res.response.data.detail === 'Given token not valid for any token type'){
        navigate('/login')
      }
    })
    
  }

  function handleChange(e) {
    const {name, value, type, files} = e.target;

    if (type === 'file') { 
      const file = files[0];
      
      // pdf, word doc
      const allowedTypes = [
        'application/pdf',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ];

      if(file) {
        if (allowedTypes.includes(file.type)) {
          if(file.size <= 1048576) {
            setFormData(prev => ({
              ...prev,
              file: file
            }))
          } else {
            setError(prev => ({
              ...prev,
              file: 'Размер файла должен быть меньше 10МБ'
            }))
          }
        } else {
          setError(prev => ({
            ...prev,
            file: 'Только Word и PDF файлы допустимы'
          }))
        }
      }
      

    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }))
      setError(prev => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  return (
    <>
      <div className="modal">
        <div className="modal-window">
            <div className="top">
              <div className="title">Подача заявки</div>
              <div className="modal-closer" onClick={() => params.setOpen(false)}>+</div>
            </div>
            <div className="mid">
              <form onSubmit={handleSubmit}>
                <div className="form-control">
                  <label htmlFor="direction">ФИО</label>
                  { error.direction && <span className="error-msg">{error.direction}</span> }
                  <select 
                    id="direction"
                    name="direction" 
                    value={formData.direction}
                    onChange={handleChange}
                    >
                      <option value=""></option>
                    {/* {
                      directions.map(e => (
                        <option value={e.id} key={e.id}>{e.direction}</option>
                      ))
                    } */}
                  </select>
                </div>
                <div className="form-control">
                  <label htmlFor="name">Дата</label>
                  { error.name && <span className="error-msg">{error.name}</span> }
                  <input 
                    id="name"
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    />
                </div>
                <div className="form-control">
                  <label htmlFor="description">Телефон</label>
                  { error.description && <span className="error-msg">{error.description}</span> }
                  <input 
                    id="description"
                    type="text" 
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    />
                </div>
                <div className="form-control">
                  <label htmlFor="files">Вложить файлы</label>
                  { error.file && <span className="error-msg">{error.file}</span> }
                  <input 
                    id="files"
                    type="file" 
                    name="file"
                    onChange={handleChange}
                    />
                </div>
                <div className="form-control">
                  <button type="submit" className="btn-send-form">Отправить</button>
                </div>
              </form>
            </div>
        </div>
      </div>
    </>
  )
}
