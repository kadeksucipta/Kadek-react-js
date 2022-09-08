// import React from "react";
// import "../../App.css"
// import toko from "../../toko.png"
// import * as Validator from "validatorjs"


// const Input = ({label, type, name, onChange}) => {
//     return (
//         <div>
//             <label>{label}: </label>
//             <br />
//             <input type={type} name={name} onChange={e => onChange(e.target.value)}/>
//             <br />
//         </div>
//     )
// }

// const Showerrors = ({errors}) => {
//     return (
//         <ul style={{color: "red", marginLeft: "-20px"}}>
//             {
//               errors.map((error, i) => <li key={i}>{error}</li>)
//             }
//         </ul>
//     )
// }

// class Form extends React.Component {
//     state = {
//         email: "",
//         password: "",
//         errors: []
//     }

//     handleSubmit = event => {
//         event.preventDefault()
//         const {email,password} = this.state

//         // let data = { email, password };
           
//         // let rules = {
//         //     email: 'required|email',
//         //     password: 'min:8|required'
//         // };

//         // let validation = new Validator(data, rules)
//         // validation.passes()
//         // this.setState({
//         //     errors: [
//         //         ...validation.errors.get("email"),
//         //         ...validation.errors.get("password")
//         //     ]
//         // })

       
//         let message = []
        
//         if(email.length === 0) {
//             message = [...message, "Email  tidak boleh kosong"]
//         }
//         if(password.length === 0) {
//             message = [...message, "Password  tidak boleh kosong"]
//         }
        
//         const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//         if(!re.test(String(email).toLocaleLowerCase())) {
//             message = [...message, "Email tidak valid"]
//         }

//         if(password.length < 8) {
//             message = [...message, "Password harus lebih dari 8 karakter"]
//         }
//         if(message.length > 0) {
//             this.setState({
//                 errors: message
//             })
//         }else { 
//             alert(`
//             Email: ${this.state.email}
//             Password: ${this.state.password}
//             `)
//             this.setState({
//                 errors: []
//             })
//         }
//     }


//     render() {
//         const style = {
//             width: "400px",
//             margin: "10px auto 0",
//             padding: "50px",
//             borderRadius: "15px",
//             background: "white",
//         }
//         return(
//             <div style={style}>
//                 {
//                   this.state.errors && <Showerrors errors={this.state.errors}/>
//                 }

//                 {/* <h4>Registrasi</h4>
//                 <h5>Harap registrasi terlebih dahulu</h5> */}
//                 <form className="input" onSubmit={this.handleSubmit}>
//                     <img src={toko} alt="" />
//                     <br />
//                     <Input type="email" name="email" label="Email" 
//                      onChange={value => this.setState({email: value})}/>
//                      <br />
//                     <Input type="password" name="password" label="Password"
//                      onChange={value => this.setState({password: value})}/>
//                     <br />
//                     <button className="btn" type="submit">Registrasi</button>
//                 </form>
//                 <p>Sudah punya akun ?</p>
//                 <button className="button" type="submit">Login</button> 
//             </div>
//         )
//     }
// }

// export default Form