# Задание "Телефонная книжка"  (greetgo!)

## Установка

Чтобы установить этот проект, следуйте данной инструкции:
* [Скачайте последнюю версию (ветка dev)](https://github.com/beebablaster/greetgo-phonebook/archive/refs/heads/dev.zip)
* Склонируйте репозиторий: `git clone https://github.com/beebablaster/greetgo-phonebook.git`
* Сделайте fork репозитория

## Пререквизиты
* Node.js (npm)
* Во время разработки данного проекта наткнулся на один неудобный нюанс - Gradle пока несовместим с JDK 21!
Вследствие этого, рабочая версия для этого проекта - JDK 20 и ниже (до JDK 17).
* Android Studio
* IDE Вашего предпочтения

## Запуск
Проект запускается при помощи стандартных команд ionic.

1. Выполните `npm install` для установки всех зависимостей.
2. Далее выполняем `ionic serve` для запуска среды разработки.
3. Для билда проекта пишем `ionic build android`.

Также можем сбилдить прямиком на Ваше устройство с поддержкой Android и/или на эмулятор в Android Studio.
Для этого нужно сделать следующее:

1. Подключите свое Android-устройство к компьютеру с включенным режимом отладки через USB-кабель. Убедитесь, что на устройстве включен режим разработчика.

2. Если вы хотите использовать эмулятор в Android Studio, убедитесь, что Android Studio установлен и настроен правильно. Запустите Android Studio, создайте виртуальное устройство (эмулятор) с необходимой конфигурацией (например, у меня Google Pixel 7, API Level - UpsideDownCakePrivacySandbox).

3. Откройте проект в Android Studio и убедитесь, что все зависимости установлены правильно.

4. Выполните сборку проекта с помощью команды: `ionic build android`.

5. Если вы используете эмулятор, запустите его в Android Studio.

6. Для установки приложения на устройство или эмулятор, выполните команду: `ionic cap / capacitor run android`.

После успешной сборки и установки, приложение будет доступно на вашем Android-устройстве или в эмуляторе. Вы можете проводить отладку и тестирование вашего приложения на этой платформе.

## Настройки проекта
* Node -  v18.12.1
* npm - 8.19.2
* Java - 17.0.8
* Android Studio Giraffe - 2022.3.1
* Gradle - 8.0.2

## Настройки IDEA
* WebStorm by JetBrains
* Android SDK - Android API 34 (Android 14)
* WebStorm by JetBrains
* Эмулятор - Google Pixel 7, API Level - UpsideDownCakePrivacySandbox
