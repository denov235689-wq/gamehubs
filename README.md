# Shashka mini app: o'rnatish

## 1. Tayyorlash
1. @BotFather da bot yarating, **tokenni** oling.
2. Telegram ID raqamingizni @userinfobot dan bilib oling.
3. `.env.example` faylini `.env` deb nomlang va to'ldiring.

## 2. Hostda ishga tushirish (hostx.uz)
1. Barcha fayllarni hostga yuklang (`node_modules` va `data.db` kerak emas).
2. Panelda **Node.js** ilovasini yarating: Node 18+, boshlang'ich fayl `server.js`.
3. SSH yoki panel orqali: `npm install`
4. Ilovani ishga tushiring (Start / Restart).
5. Domenga **HTTPS (SSL)** yoqilgan bo'lsin. `WEBAPP_URL` shu manzil.

## 3. Telegramda
- BotFather > `/mybots` > Bot > **Bot Settings > Menu Button** (yoki Mini App) > manzil: `WEBAPP_URL`
- Botga `/start` yozing. Admin bo'lsangiz `/admin` ham ishlaydi.

## 4. Kanal qo'shish
- Botni kanalga **admin** qiling (obunani tekshirishi uchun).
- Admin paneldan kanal qo'shing: majburiy, kunlik yoki oddiy vazifa, mukofot (0.1, 1, 2...).

## Tekshiring
- Stars bilan kichik (10 ⭐) depozit qilib ko'ring: tanga avtomatik tushishi kerak.
- Avtomatik ishlamasa, hostda bot (long polling) doimiy ishlayaptimi tekshiring.

## Hali yo'q
- Shashka o'yini (PLAY tugmasi hozir xabar beradi). Keyingi bosqich.
