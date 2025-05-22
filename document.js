
document.addEventListener('DOMContentLoaded', function () {
    const cityButtons = document.querySelectorAll('.city__button');
    const cityMaps = document.querySelectorAll('.city-map');
// Функция для обработки поиска
function setupSearch() {
    const searchContainer = document.querySelector('.search-container');
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-button');

    if (searchButton && searchInput) {
        // Обработчик для кнопки поиска
        searchButton.addEventListener('click', function() {
            performSearch(searchInput.value);
        });

        // Обработчик для нажатия Enter
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch(searchInput.value);
            }
        });
    }
}

// Функция выполнения поиска
function performSearch(query) {
    if (query.trim() !== '') {
        // Здесь будет логика поиска
        console.log('Ищем:', query);
        
        // В реальном проекте здесь будет:
        // 1. Фильтрация товаров
        // 2. Перенаправление на страницу поиска
        // 3. или AJAX-запрос к серверу
        
        // Пример перенаправления:
        // window.location.href = `search.html?query=${encodeURIComponent(query)}`;
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    setupSearch();
    
    // Ваш существующий код...
});
    // Функция для обработки кликов по кнопкам городов
    function handleCityButtonClick(button) {
        // Убираем активный класс у всех карт
        cityMaps.forEach(map => map.classList.remove('active'));

        // Скрываем все карты
        cityMaps.forEach(map => map.style.display = 'none');

        // Показываем соответствующую карту
        const city = button.getAttribute('data-city');
        const map = document.getElementById(`${city}-map`);
        if (map) {
            map.style.display = 'block';
            map.classList.add('active');
        }

        // Убираем активный стиль у всех кнопок
        cityButtons.forEach(btn => btn.classList.remove('active'));

        // Добавляем активный стиль к нажатой кнопке
        button.classList.add('active');
    }

    // Добавляем обработчики для кнопок городов
    cityButtons.forEach(button => {
        button.addEventListener('click', function () {
            handleCityButtonClick(button);
        });
    });

    // Активируем первую карту по умолчанию
    if (cityButtons.length > 0) {
        handleCityButtonClick(cityButtons[0]);
    }

    // Обработка кнопок категорий
    const categoryButtons = document.querySelectorAll('.category__button');
    const bookImages = {
        'аст': ['images/Замятин.png', 'images/Хейли.png', 'images/Достоевский.png'],
        'азбука-классика': ['images/Остин.png', 'images/Джеймс.png', 'images/Даль.png'],
        'penguin classics': ['images/Дойл.png', 'images/Даль.png', 'images/Тартт.png'],
        'oxford world\'s classics': ['images/Дойл.png', 'images/Даль.png', 'images/Тартт.png']
    };

    categoryButtons.forEach(button => {
        button.addEventListener('click', function () {
            const category = button.textContent.toLowerCase();
            const images = bookImages[category];

            if (images) {
                const bookElements = document.querySelectorAll('.book__image');
                if (bookElements.length >= 3) {
                    bookElements[0].src = images[0];
                    bookElements[1].src = images[1];
                    bookElements[2].src = images[2];
                }
            }

            // Убираем активный стиль у всех кнопок
            categoryButtons.forEach(btn => btn.classList.remove('active'));

            // Добавляем активный стиль к нажатой кнопке
            button.classList.add('active');
        });
    });

    // Активируем первую категорию по умолчанию
    if (categoryButtons.length > 0) {
        categoryButtons[0].click();
    }

    // Функция для обработки изменения размера экрана
    function handleResize() {
        // Можно добавить дополнительную логику при изменении размера экрана
    }

    // Добавляем обработчик изменения размера окна
    window.addEventListener('resize', handleResize);
    
    // Вызываем при загрузке
    handleResize();
});