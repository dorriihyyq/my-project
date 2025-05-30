import './App.css';
import Menu from './components/Menu';
import ProfilePic from './pictures/Alexey.png';
import Project1 from './pictures/Project1.png';
import Project2 from './pictures/Project2.png';
import Project3 from './pictures/Project3.png';
import Feedback1 from './pictures/Feedback1.png';
import Feedback2 from './pictures/Feedback2.png';
import Logo from './pictures/Logo.png';
import ProjectCard from './components/ProjectCard';
import FeedbackCard from './components/FeedbackCard';
import CallbackForm from './components/CallbackForm';
import OrderForm from './components/OrderForm';

function App() {


  return (
    <div className="App">
      <Menu />

      <section id="home" className="section">
        <div className='container'>
          <img src={ProfilePic} className='PFP' alt='profilepic'></img>
          <div className='profileInfo'>
            <p className="title">Алексей Морозов</p>
            <p className="p1">Веб-разработчик</p>
            <p>Привет! Я начинающий веб-разработчик, создаю самые современные и функциональные сайты. Здесь вы можете найти информацию о моих навыках, проектах и найдете контакты для связи со мной!</p>
            <div className='profile-btns'>
              <a href="https://giflic.ru" target="_blank" className="btn">Смотреть на GitFlic</a>
              <a href="https://hh.ru" target="_blank" className="btn">hh.ru</a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section colored">
        <div className='section-about'>
          <h1 className="title">Обо мне</h1>
          <p>Я — Алексей Морозов, начинающий фронтенд-разработчик, и я <span className='bold-text'>страстно увлечен созданием удобных веб-приложений.</span> </p>
          <p>Мое путешествие в мир веб-разработки началось несколько лет назад, когда я впервые попробовал создать простой сайт с помощью HTML и CSS. Я постоянно учусь и совершенствую свои навыки, следя за новыми трендами. Мой подход к работе — это сочетание творчества и аналитического мышления. Я стремлюсь к тому, чтобы мои проекты были не только визуально привлекательными, но и функциональными, с интуитивно понятным интерфейсом для пользователей. Помимо технических навыков, я ценю командную работу и открыт к сотрудничеству. Мне нравится решать сложные задачи, будь то разработка нового функционала, исправление багов или улучшение пользовательского опыта.</p>
          <p>Если вам нужен разработчик, который с энтузиазмом подойдет к вашему проекту — я готов учиться и расти вместе с вашей командой, давайте свяжемся! Я открыт к новым возможностям и с радостью обсужу ваши идеи.</p>
        </div>
      </section >

      <section id="projects" className="section projects">
        <h1 className="title">Проекты</h1>
        <div className='container1'>
          <ProjectCard pic={Project1} number="1" info="Сайт для поиска жилья для покупки и аренды" />
          <ProjectCard pic={Project2} number="2" info="Панель аналитики с интерактивными графиками" />
          <ProjectCard pic={Project3} number="3" info="Одностраничное приложение для бизнеса" />

        </div>
      </section>

      <section id="skills" className="section colored">
        <h1 className="title">Навыки</h1>
        <div>
          <div className='skills-box'>
            <p className='skill shadow p-3 mb-5 bg-body rounded'>JavaScript</p>
            <p className='skill shadow p-3 mb-5 bg-body rounded'>React</p>
            <p className='skill shadow p-3 mb-5 bg-body rounded'>HTML</p>
            <p className='skill shadow p-3 mb-5 bg-body rounded'>CSS</p>
          </div>
          <div>
            <p style={{ textAlign: "center" }}>Образование: Степень бакалавра по компьютерной инженерии (2015—2019)</p>
            <p style={{ textAlign: "center" }}>Опыт: Веб-разработчик "TechWave Solutions" — проектирование и создание пользовательских интерфейсов</p>
          </div>
        </div>
      </section >

      <section id="feedback" className="section">
        <h1 className="title">Отзывы</h1>
        <div className='feedback-box'>
          <FeedbackCard photo={Feedback2} name="Анна" text="Алексей отлично справился с проектом! Работа была быстро сделана и на высшем уровне. Очень довольна результатом." />
          <FeedbackCard photo={Feedback1} name="Андрей" text="Быстро понял задачи и качественно сделал сайт. Все в срок и без проблем." />
        </div>
      </section>

      <section id="callback" className="section colored">
        <h1 className="title">Обратная связь</h1>
        <CallbackForm />
      </section>

      <section id="order" className="section">
        <h1 className="title">Оставить заявку на заказ</h1>
        <OrderForm />
      </section>

      <section id="contacts" className="section">
        <div className="footer-box">
          <div className="footer-top">
            <img src={Logo} alt='logo' id='logo' />
            <div className="footer-contacts">
              <h3>КОНТАКТЫ</h3>
              <p>+7 (912) 345-67-89</p>
              <p>alexey.morozov@mail.com</p>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-copyright">
              <p>© 2025 Copyright</p>
            </div>
          </div>
        </div>
      </section>
    </div >
  );
}

export default App;
