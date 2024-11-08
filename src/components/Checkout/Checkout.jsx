// Checkout.jsx
import './Checkout.css';
import { notify } from '../../App';
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/cartContext';
import { sendOrder } from '../firebase/firebase';

export const Checkout = () => {
    const { cart } = useContext(CartContext);
    const [orderId, setOrderId] = useState(null);  // Estado para el orderId
    const [formData, setFormData] = useState({
        buyer: {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            confirmEmail: ''
        },
        items: {
            cart,
            total: cart.reduce((total, item) => total + item.price, 0)
        }
    });

    // Estado para controlar si el panel desplegable está abierto o cerrado
    const [isCartDetailsOpen, setIsCartDetailsOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            buyer: {
                ...prevState.buyer,
                [name]: value
            }
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación de campos vacíos
        const { firstName, lastName, phone, email, confirmEmail } = formData.buyer;
        if (!firstName.trim() || !lastName.trim() || !phone.trim() || !email.trim() || !confirmEmail.trim()) {
            console.log('Todos los campos deben estar completos.');
            notify('error', 'Todos los campos deben estar completos.');
            return;
        }

        // Validación de correo electrónico
        if (email !== confirmEmail) {
            console.log('El correo electrónico de confirmación no coincide con el correo electrónico.');
            notify('error', 'El correo electrónico no coincide');
            return;
        }

        // Aquí llamamos a sendOrder y le pasamos el callback para actualizar el orderId
        sendOrder(formData, (id) => {
            setOrderId(id);  // Actualizamos el estado con el orderId
            notify('success', `Compra realizada correctamente. ID de la orden: ${id}`);
        });
    };

    // Función para cambiar el estado de visibilidad del panel desplegable
    const toggleCartDetails = () => {
        setIsCartDetailsOpen(prevState => !prevState);
    };

    // Calcular el total del carrito
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <section id="sectionCheck">
            <form onSubmit={handleSubmit}>
                <div id="nombreContainer">
                    <label>
                        Nombre:
                        <input
                            type="text"
                            name="firstName"
                            value={formData.buyer.firstName}
                            onChange={handleChange}
                            className="inputCheck"
                        />
                    </label>
                    <label>
                        Apellido:
                        <input
                            type="text"
                            name="lastName"
                            value={formData.buyer.lastName}
                            onChange={handleChange}
                            className="inputCheck"
                        />
                    </label>
                </div>
                <div id="telefonoContainer">
                    <label>
                        Número de Teléfono:
                        <input
                            type="tel"
                            name="phone"
                            value={formData.buyer.phone}
                            onChange={handleChange}
                            className="inputCheck"
                        />
                    </label>
                </div>
                <div id="correoContainer">
                    <label>
                        Correo Electrónico:
                        <input
                            type="email"
                            name="email"
                            value={formData.buyer.email}
                            onChange={handleChange}
                            className="inputCheck"
                        />
                    </label>
                    <label>
                        Confirmar Correo Electrónico:
                        <input
                            type="email"
                            name="confirmEmail"
                            value={formData.buyer.confirmEmail}
                            onChange={handleChange}
                            className="inputCheck"
                        />
                    </label>
                </div>
                <button type="submit" id="submitCheck">Enviar</button>
            </form>

            {/* Botón para mostrar/ocultar el carrito */}
            <button onClick={toggleCartDetails} id="toggleCartButton">
                {isCartDetailsOpen ? 'Ocultar Detalles del Carrito' : 'Ver Detalles del Carrito'}
            </button>

            {/* Panel desplegable con detalles del carrito */}
            {isCartDetailsOpen && (
                <div id="cartDetailsContainer">
                    <h3>Detalles del Carrito</h3>
                    <table id="cartTable">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.title}</td>
                                    <td>{item.quantity}</td>
                                    <td>{`$${item.price.toFixed(2)}`}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div id="cartTotal">
                        <strong>Total: </strong>${total.toFixed(2)}
                    </div>
                </div>
            )}
        </section>
    );
};
