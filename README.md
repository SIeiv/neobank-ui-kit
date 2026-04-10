# neobank-ui-kit

[![npm](https://img.shields.io/npm/v/neobank-ui-kit)](https://www.npmjs.com/package/neobank-ui-kit)

## Установка

```bash
# npm
npm install neobank-ui-kit

# yarn
yarn add neobank-ui-kit

# pnpm
pnpm add neobank-ui-kit
```
Далее импортируйте в файл глобальных стилей вашего проекта стили бибилотеки
```css
@import 'neobank-ui-kit/styles';
```


## Быстрый старт

```tsx
import { Button, Card } from 'neobank-ui-kit';
import './global.css'

function App() {
  return (
    <Card>
      <Button variation="primary">Отправить</Button>
    </Card>
  );
}
```

## Компоненты

- `Button` - Базовая стилизованная кнопка
- `Card` - Контейнер для контента
- `Drawer` - Боковая панель
- `Heading` - Стилизованные заголовки
- `Link` - Ссылка <a/> или <Navlink/>
- `Overlay` - Основа для всплывающих окон
- `Paragraph` - стилизованный текст

## Иконки

- `arrow-icon` - Иконка стрелки (направление и цвет выбираются)
- `check-icon` - Иконка successful
- `email-icon` - Иконка почты
- `menu-icon` - Иконка меню-бургера
- `send-icon` - Иконка отправить (как в телеграмме и тд)

## Требования к проекту

- react: 19.2.4
- react-dom: 19.2.4
- react-router-dom: 7.13.2
