import { useRef } from 'react';
import Envelope from '../pictures/envelope-paper.svg';

const CallbackForm = () => {
    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(formRef.current);
        const name = formData.get('first_name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const question = formData.get('question');

        const message = `Спасибо за ваш вопрос, ${name}!
    Ваши контактные данные:
    Email: ${email}
    Телефон: ${phone}
    Ваш вопрос: ${question}
    
    Я свяжусь с вами в ближайшее время!`;

        alert(message);
        formRef.current.reset();
    };

    return (
        <div className='callback-box'>
            <img src={Envelope} alt='callback' id='callback-pic' />
            <form
                ref={formRef}
                className="callback-form"
                onSubmit={handleSubmit}>
                <input type="text" name="first_name" placeholder="Имя" className="input" minLength="2" maxLength="20" required />
                <input type="email" name="email" placeholder="Введите свой E-mail" className="input" />
                <input type="tel" name="phone" placeholder="Телефон" className="input" pattern="\+7\d{10}" />
                <input type="text" name="question" placeholder="Ваш вопрос" className="input" maxLength="50" />
                <input type="submit" value="Отправить вопрос!" className="submit" />
            </form>
        </div>
    );
};

export default CallbackForm;