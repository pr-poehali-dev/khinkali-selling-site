import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Хедер */}
      <header className="sticky top-0 z-10 backdrop-blur-sm bg-white/90 border-b">
        <div className="container mx-auto flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
            <span className="text-[#9B2335] font-bold text-2xl">
              Intellectual Hinkali Agregator
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-gray-700 hover:text-[#9B2335] transition-colors"
            >
              Особенности
            </a>
            <a
              href="#how-it-works"
              className="text-gray-700 hover:text-[#9B2335] transition-colors"
            >
              Как это работает
            </a>
            <a
              href="#gallery"
              className="text-gray-700 hover:text-[#9B2335] transition-colors"
            >
              Галерея
            </a>
            <a
              href="#order"
              className="text-gray-700 hover:text-[#9B2335] transition-colors"
            >
              Заказать
            </a>
          </nav>
          <Button className="bg-[#9B2335] hover:bg-[#7d1c2a] text-white">
            Заказать
          </Button>
        </div>
      </header>

      {/* Секция "Герой" */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-white to-gray-100">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-gray-800">
              Идеальные хинкали <br />
              <span className="text-[#9B2335]">одним нажатием</span>
            </h1>
            <p className="text-lg text-gray-600">
              Автоматический хинкали генератор для дома и бизнеса. Готовьте
              настоящие грузинские хинкали без усилий и специальных навыков.
            </p>
            <div className="pt-4 flex gap-4">
              <Button className="bg-[#9B2335] hover:bg-[#7d1c2a] text-white text-lg px-8 py-6">
                Заказать сейчас
              </Button>
              <Button
                variant="outline"
                className="border-[#5D8CAE] text-[#5D8CAE] hover:bg-[#5D8CAE] hover:text-white text-lg px-8 py-6"
              >
                Подробнее
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#5D8CAE]/10 w-72 h-72 rounded-full blur-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1573836063772-878275d84dbe?w=800&auto=format&fit=crop"
              alt="Хинкали генератор"
              className="w-full h-auto rounded-xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Секция с преимуществами */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-montserrat">
            Почему наш хинкали генератор?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon="Clock"
              title="Быстро"
              description="Готовит до 20 хинкали за 5 минут - в 10 раз быстрее ручной лепки"
            />
            <FeatureCard
              icon="ThumbsUp"
              title="Просто"
              description="Интуитивное управление, не требует специальных кулинарных навыков"
            />
            <FeatureCard
              icon="Sparkles"
              title="Качественно"
              description="Идеальная форма и равномерное распределение начинки каждый раз"
            />
            <FeatureCard
              icon="Settings"
              title="Настраиваемо"
              description="Регулировка размера и толщины теста под ваши предпочтения"
            />
            <FeatureCard
              icon="Utensils"
              title="Универсально"
              description="Подходит для разных начинок: мясо, сыр, овощи, грибы"
            />
            <FeatureCard
              icon="UtensilsCrossed"
              title="Компактно"
              description="Занимает минимум места на кухне при максимальной функциональности"
            />
          </div>
        </div>
      </section>

      {/* Секция "Как это работает" */}
      <section id="how-it-works" className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-montserrat">
            Как это работает
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <StepCard
              number="1"
              title="Загрузите тесто"
              description="Поместите готовое тесто в специальный контейнер"
            />
            <StepCard
              number="2"
              title="Добавьте начинку"
              description="Загрузите приготовленный фарш в отдельный отсек"
            />
            <StepCard
              number="3"
              title="Выберите программу"
              description="Настройте размер и тип хинкали одним нажатием"
            />
            <StepCard
              number="4"
              title="Наслаждайтесь"
              description="Через 5 минут получите идеальные хинкали, готовые к варке"
            />
          </div>
        </div>
      </section>

      {/* Галерея */}
      <section id="gallery" className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-montserrat">
            Результаты, которые впечатляют
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <img
              src="https://images.unsplash.com/photo-1533620347786-1e0c1c3d3a1f?w=500&auto=format&fit=crop"
              alt="Готовые хинкали"
              className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-[1.02]"
            />
            <img
              src="https://images.unsplash.com/photo-1537954513201-cf19942d177a?w=500&auto=format&fit=crop"
              alt="Готовые хинкали"
              className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-[1.02]"
            />
            <img
              src="https://images.unsplash.com/photo-1549590143-d5855148a9d5?w=500&auto=format&fit=crop"
              alt="Готовые хинкали"
              className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-[1.02]"
            />
          </div>
        </div>
      </section>

      {/* Секция заказа */}
      <section
        id="order"
        className="py-16 bg-gradient-to-br from-[#9B2335]/10 to-[#5D8CAE]/10"
      >
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">
            Готовы упростить приготовление хинкали?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Закажите хинкали генератор сегодня и получите набор специй в
            подарок!
          </p>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div className="text-left mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-gray-800">
                  ХинкалиМейкер 2000
                </h3>
                <p className="text-gray-600">
                  Полный комплект с инструкцией и рецептами
                </p>
              </div>
              <div className="text-right">
                <p className="text-gray-500 line-through">15 900 ₽</p>
                <p className="text-2xl font-bold text-[#9B2335]">12 900 ₽</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button className="bg-[#9B2335] hover:bg-[#7d1c2a] text-white text-lg px-8 py-6">
                Заказать сейчас
              </Button>
              <Button
                variant="outline"
                className="border-[#5D8CAE] text-[#5D8CAE] hover:bg-[#5D8CAE] hover:text-white text-lg"
              >
                Добавить в корзину
              </Button>
            </div>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            * Доставка по всей России. Гарантия 1 год.
          </p>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">ХинкалиМейкер</h3>
            <p>Инновационная техника для приготовления традиционных блюд</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Контакты</h3>
            <p className="mb-2">Телефон: +7 (800) 123-45-67</p>
            <p className="mb-2">Email: info@khinkali-maker.ru</p>
            <p>Адрес: г. Москва, ул. Примерная, д. 123</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Информация</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  О компании
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Доставка и оплата
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Гарантия
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Политика конфиденциальности
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto mt-8 pt-8 border-t border-gray-800 text-center">
          <p>© 2025 ХинкалиМейкер. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

// Компонент карточки преимущества
const FeatureCard = ({ icon, title, description }) => {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-[#5D8CAE]/10 rounded-full flex items-center justify-center mb-4">
            <Icon name={icon} className="h-8 w-8 text-[#5D8CAE]" />
          </div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

// Компонент карточки шага
const StepCard = ({ number, title, description }) => {
  return (
    <div className="relative">
      <div className="absolute -left-3 -top-3 w-12 h-12 bg-[#9B2335] rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
        {number}
      </div>
      <Card className="border-none shadow-md hover:shadow-lg transition-shadow h-full">
        <CardContent className="p-6 pt-10">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
