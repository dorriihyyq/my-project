import { useRef, useState } from 'react';


const OrderForm = () => {
    const formRef = useRef();
    const [submittedData, setSubmittedData] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(formRef.current);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            service: formData.get('service'),
            description: formData.get('description')
        };

        setSubmittedData(data);
        formRef.current.reset();
    };

    return (
        <div className='order-container'>
            <div className='order-form-box'>
                <h2>Заявка на заказ</h2>
                <form
                    ref={formRef}
                    className="order-form"
                    onSubmit={handleSubmit}
                >
                    <div className="form-group">
                        <label>Имя</label>
                        <input
                            type="text"
                            name="name"
                            className="input"
                            minLength="2"
                            maxLength="20"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            className="input"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Вид услуги</label>
                        <select name="service" className="input" required>
                            <option value="" disabled defaultValue>Выберите услугу</option>
                            <option value="Создание корпоративного сайта">Создание корпоративного сайта</option>
                            <option value="Разработка интернет-магазина">Разработка интернет-магазина</option>
                            <option value="Обучение и консультации">Обучение и консультации</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Краткое описание заказа</label>
                        <textarea
                            name="description"
                            className="input"
                            minLength="5"
                            maxLength="100"
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary mt-2 submit">
                        Отправить
                    </button>
                </form>
            </div>

            {submittedData && (
                <div className='order-summary'>
                    <h2>Ваша заявка</h2>
                    <p><strong>Ваше имя:</strong> {submittedData.name}</p>
                    <p><strong>Ваш Email:</strong> {submittedData.email}</p>
                    <p><strong>Вид услуги:</strong> {submittedData.service}</p>
                    <p><strong>Краткое описание заказа:</strong> {submittedData.description}</p>

                    <div className='confirmation-message'>
                        <p>Мы получили Вашу заявку и уже обрабатываем её.</p>
                        <p>Мы пришлём ответ по заявке на указанную почту выше в течение 4 часов.</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OrderForm;