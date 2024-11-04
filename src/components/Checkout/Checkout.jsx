import './Checkout.css';
import { notify } from '../../App';
import React, { useState } from 'react';

export const Checkout = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        confirmEmail: ''
    });

    const handleChange = (el) => {
        const { name, value } = el.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación de campos vacíos
        for (const key in formData) {
            if (formData[key].trim() === '') {
                console.log(`El campo ${key} no puede estar vacío.`);
                notify('error', `El campo ${key} no puede estar vacío.`);
                return; // Evitar el envío del formulario
            }
        }

        // Validación de correo electrónico
        if (formData.email !== formData.confirmEmail) {
            console.log('El correo electrónico de confirmación no coincide con el correo electrónico.');
            notify('error', 'El Email no coincide');
            return; // Evitar el envío del formulario
        }

        // Aquí puedes manejar el envío del formulario
        console.log('Datos del formulario:', formData);
        notify('success', 'Compra realizada correctamente');
    };

    return (
        <section id='sectionCheck'>
            <form onSubmit={handleSubmit}>
                <div id='nombreContainer'>
                    <label>
                        Nombre:
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className='inputCheck'
                        />
                    </label>
                    <label>
                        Apellido:
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className='inputCheck'
                        />
                    </label>
                </div>
                <div id='telefonoContainer'>
                    <label>
                        Número de Teléfono:
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className='inputCheck'
                        />
                    </label>
                </div>
                <div id='correoContainer'>
                    <label>
                        Correo Electrónico:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className='inputCheck'
                        />
                    </label>
                    <label>
                        Confirmar Correo Electrónico:
                        <input
                            type="email"
                            name="confirmEmail"
                            value={formData.confirmEmail}
                            onChange={handleChange}
                            className='inputCheck'
                        />
                    </label>
                </div>
                <button type="submit" id='submitCheck'>Enviar</button>
            </form>
        </section>
    );
};
