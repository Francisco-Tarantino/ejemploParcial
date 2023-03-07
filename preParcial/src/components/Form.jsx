import { useState } from "react";
import styles from "./Form.module.css"

const Form = () => {


    //1 useState

    const [nombrePerro, setNombrePerro] = useState("");
    const [contraseñaPerro, setContraseñaPerro] = useState("");
    const [edadPerro, setEdadPerro] = useState ("");
    const [razaPerro, setRazaPerro] = useState("");
    const [datos, setDatos] = useState([]);

    //2 Handlers

    const onChangeNombre = (event) => setNombrePerro(event.target.value);
    const onChangeContraseña = (event) => setContraseñaPerro(event.target.value);
    const onChangeEdad = (event) => setEdadPerro(event.target.value);
    const onChangeRaza = (event) => setRazaPerro(event.target.value);
    
    //3 validaciones

    const validarContraseña = (contraseñaPerro) => {
        const contraseñaSinEspacios = contraseñaPerro.trim();
        return contraseñaSinEspacios.length > 8
    }

    const validarEdad = (edadPerro) => {
        return edadPerro > 0;
    }

    //4 handler para el formulario

    const onSubmitForm = (event) => {
        event.preventDefault();

        const esContraseñaValido = validarContraseña(contraseñaPerro);
        const esEdadValido = validarEdad(edadPerro);

        if (!esContraseñaValido || !esEdadValido){
            alert("Error!! Algunos de los datos son incorrectos")
        } else {
            setDatos([...datos, {
                "nombre del Perro": nombrePerro.trim().toUpperCase(),
                "contraseña": contraseñaPerro.trim().toUpperCase(),
                "edad del perro": edadPerro,
                "raza del perro": razaPerro.trim().toUpperCase()
            }])
            alert(`¡Le damos la bienvenida a ${nombrePerro}! \n Tu raza es ${razaPerro} 🎉`)
        }
        console.log(datos);

    }

    // return
    return (
        <div className={styles.container}>
            <h1>Log in de perros</h1>
            <form onSubmit={onSubmitForm} className={styles.formulario}>
                <div className={styles.group}>
                    <label>Nombre del perro</label>
                    <input type="text" onChange={onChangeNombre} value={nombrePerro} />
                </div>
                <div className={styles.group}>
                    <label>Contraseña del perro</label>
                    <input type="password" onChange={onChangeContraseña} value={contraseñaPerro} />
                </div>
                <div className={styles.group}>
                    <label>Edad del perro</label>
                    <input type="number" onChange={onChangeEdad} value={edadPerro} />
                </div>
                <div className={styles.group}>
                    <label>raza del perro</label>
                    <input type="text" onChange={onChangeRaza} value={razaPerro} />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
        

       
    )
}

export default Form;