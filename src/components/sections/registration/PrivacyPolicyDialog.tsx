import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

interface PrivacyPolicyDialogProps {
  open: boolean;
  onOpenChange: (val: boolean) => void;
}

const PrivacyPolicyDialog = ({ open, onOpenChange }: PrivacyPolicyDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-synergy-beige text-synergy-dark max-w-4xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl font-black text-synergy-red flex items-center gap-2">
            <Icon name="Shield" size={28} />
            Политика конфиденциальности
          </DialogTitle>
          <DialogDescription className="text-synergy-dark/70">
            Обработка и защита персональных данных
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 text-synergy-dark leading-relaxed text-sm">
          <div className="text-center space-y-2">
            <h3 className="font-heading text-xl font-black text-synergy-red">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</h3>
            <p className="text-xs text-synergy-dark/70">Дата вступления в силу: 15 января 2026 года</p>
            <p className="text-xs text-synergy-dark/70">Последнее обновление: 15 января 2026 года</p>
          </div>

          <div>
            <h4 className="font-bold text-base mb-2 text-synergy-red">1. ОСНОВНАЯ ИНФОРМАЦИЯ</h4>
            <p className="mb-2"><strong>Оператор (организация, обрабатывающая данные):</strong></p>
            <p className="mb-1 ml-4">Наименование: Школа «Хакни нейросети»</p>
            <p className="mb-1 ml-4">Место нахождения: г. Владивосток, Приморский край, Российская Федерация</p>
            <p className="mb-1 ml-4">Телефон: 89811292499</p>
            <p className="mb-3"><strong>Назначение данной политики:</strong></p>
            <p className="mb-2">Настоящая Политика конфиденциальности разработана в соответствии с Федеральным законом от 27 июля 2006 года № 152-ФЗ «О персональных данных» (далее — Закон № 152-ФЗ) и определяет порядок обработки персональных данных физических лиц, участвующих в благотворительном мероприятии «ИИ ШОУ БЕЗ ШИРМЫ» (далее — Мероприятие).</p>
            <p className="mb-1"><strong>Учитываемые стандарты:</strong></p>
            <ul className="ml-6 space-y-1 list-disc">
              <li>Федеральный закон № 152-ФЗ «О персональных данных»</li>
              <li>Постановление Правительства РФ от 1 ноября 2012 г. № 1119</li>
              <li>Приказ ФСТЭК России от 18 февраля 2013 г. № 21</li>
              <li>Требования GDPR (при наличии участников из ЕС)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-base mb-2 text-synergy-red">2. ЧТО ТАКОЕ ПЕРСОНАЛЬНЫЕ ДАННЫЕ</h4>
            <p className="mb-2">Персональные данные — это любая информация, которая относится к определённому или определяемому физическому лицу (субъекту персональных данных).</p>
            <p className="mb-2"><strong>Примеры персональных данных:</strong> ФИО, адрес электронной почты, номер телефона, адрес проживания, наименование организации, должность, IP адрес устройства, Cookie идентификаторы, история посещений.</p>
            <p className="mb-2"><strong>Специальные категории данных</strong> (требуют усиленной защиты): здоровье и биометрические данные, этническое происхождение, политические убеждения, религиозные убеждения.</p>
            <p className="font-semibold">Важно: В настоящее время мы не собираем специальные категории данных. Если в будущем это изменится, мы запросим отдельное согласие.</p>
          </div>

          <div>
            <h4 className="font-bold text-base mb-2 text-synergy-red">3. КАКИЕ ДАННЫЕ МЫ СОБИРАЕМ</h4>
            <p className="mb-2"><strong>3.1 При регистрации на мероприятие:</strong></p>
            <p className="ml-4 mb-1"><strong>Обязательные поля:</strong> ФИО, адрес электронной почты, номер телефона, город проживания.</p>
            <p className="ml-4 mb-3"><strong>Опциональные поля:</strong> наименование организации/компании, должность, информация о том, откуда вы узнали о мероприятии, специальные пожелания или комментарии, тип билета.</p>
            
            <p className="mb-2"><strong>3.2 Автоматически собираемые данные:</strong></p>
            <p className="ml-4 mb-3">IP адрес вашего устройства, Cookie данные, информация о браузере и устройстве, время и дата посещения, страницы, которые вы посещали, источник перехода.</p>
            
            <p className="mb-2"><strong>3.3 Данные, собираемые при оплате:</strong></p>
            <p className="ml-4 mb-2">Информация о карте (последние 4 цифры), дата и сумма платежа, статус платежа.</p>
            <p className="font-semibold mb-3">Важно: Мы НЕ сохраняем полные данные карты. Это делает платёжная система.</p>
            
            <p className="mb-2"><strong>3.4 Данные, собираемые во время мероприятия:</strong></p>
            <p className="ml-4">Фотографии и видео (если вы не возразили), аудиозапись выступлений, ваши вопросы и комментарии, информация о вашем участии.</p>
          </div>

          <div>
            <h4 className="font-bold text-base mb-2 text-synergy-red">4. НА КАКИХ ОСНОВАНИЯХ МЫ ОБРАБАТЫВАЕМ ДАННЫЕ</h4>
            <p className="mb-2"><strong>4.1 На основании вашего явного согласия:</strong> Добровольное, информированное, специфичное, отдельное.</p>
            <p className="mb-2"><strong>4.2 На основании исполнения контракта:</strong> Для отправки электронного билета, регистрации вас на мероприятие, связи по организационным вопросам.</p>
            <p className="mb-2"><strong>4.3 На основании законных интересов:</strong> Безопасности, улучшения сервиса, маркетинга (если вы согласились).</p>
            <p><strong>4.4 На основании закона:</strong> Налоговые органы, органы безопасности, судебные решения.</p>
          </div>

          <div>
            <h4 className="font-bold text-base mb-2 text-synergy-red">5. ЗАЧЕМ МЫ ИСПОЛЬЗУЕМ ВАШИ ДАННЫЕ</h4>
            <p className="mb-2"><strong>5.1 Основные цели:</strong></p>
            <ul className="ml-6 mb-3 space-y-1 list-disc">
              <li>Регистрация и организация мероприятия</li>
              <li>Связь с вами (подтверждения, уведомления, материалы)</li>
              <li>Обсуждение сотрудничества</li>
            </ul>
            <p className="mb-2"><strong>5.2 Дополнительные цели (требуют отдельного согласия):</strong></p>
            <ul className="ml-6 mb-3 space-y-1 list-disc">
              <li>Маркетинг и информационные рассылки</li>
              <li>Использование изображений (фото/видео с мероприятия)</li>
            </ul>
            <p className="mb-2"><strong>5.3 Аналитика и улучшение:</strong></p>
            <p className="ml-4">Анализ трафика сайта, улучшение функциональности, статистика участников, оптимизация программы.</p>
          </div>

          <div>
            <h4 className="font-bold text-base mb-2 text-synergy-red">6. С КЕМ МЫ ПЕРЕДАЁМ ВАШИ ДАННЫЕ</h4>
            <p className="mb-2"><strong>6.1 Передача данных третьим лицам (только с вашего согласия):</strong></p>
            <ul className="ml-6 mb-3 space-y-1 list-disc">
              <li><strong>Платёжные системы:</strong> для обработки оплаты билетов</li>
              <li><strong>Сервисы рассылок:</strong> для отправки email и SMS уведомлений</li>
              <li><strong>Хостинг провайдеры:</strong> для хранения данных</li>
              <li><strong>Аналитические сервисы:</strong> для анализа трафика (Yandex Метрика, Google Analytics и т.п.)</li>
            </ul>
            <p className="mb-2"><strong>6.2 Обязательная передача (на основании закона):</strong></p>
            <p className="ml-4 mb-3">Государственные органы (при наличии запроса или судебного решения).</p>
            <p className="mb-2"><strong>6.3 Передача данных за границу:</strong></p>
            <p className="ml-4">В настоящее время мы не передаём данные за пределы РФ. Если это изменится, мы используем серверы в странах с адекватным уровнем защиты данных или специальные механизмы (стандартные контрактные оговорки).</p>
          </div>

          <div>
            <h4 className="font-bold text-base mb-2 text-synergy-red">7. КАК МЫ ЗАЩИЩАЕМ ВАШИ ДАННЫЕ</h4>
            <p className="mb-2"><strong>7.1 Технические меры:</strong></p>
            <ul className="ml-6 mb-3 space-y-1 list-disc">
              <li>SSL/TLS шифрование при передаче данных</li>
              <li>Шифрование базы данных</li>
              <li>Регулярное обновление систем безопасности</li>
              <li>Антивирусная защита</li>
              <li>Межсетевые экраны (Firewall)</li>
              <li>Регулярный бэкап данных</li>
            </ul>
            <p className="mb-2"><strong>7.2 Организационные меры:</strong></p>
            <ul className="ml-6 mb-3 space-y-1 list-disc">
              <li>Доступ к данным имеют только авторизованные сотрудники</li>
              <li>Подписание соглашений о неразглашении</li>
              <li>Журналирование и мониторинг доступа к данным</li>
              <li>Обучение сотрудников правилам работы с персональными данными</li>
            </ul>
            <p className="mb-2"><strong>7.3 Контроль сторонних провайдеров:</strong></p>
            <p className="ml-4">Мы заключаем договоры с третьими лицами, обязывая их защищать ваши данные на том же уровне, что и мы.</p>
          </div>

          <div>
            <h4 className="font-bold text-base mb-2 text-synergy-red">8. КАК ДОЛГО МЫ ХРАНИМ ВАШИ ДАННЫЕ</h4>
            <p className="mb-2"><strong>8.1 Основные данные (регистрация):</strong></p>
            <p className="ml-4 mb-3">3 года после мероприятия (для возможности связи и статистики). После этого данные либо удаляются, либо анонимизируются.</p>
            <p className="mb-2"><strong>8.2 Финансовые данные:</strong></p>
            <p className="ml-4 mb-3">3 года (в соответствии с требованиями налогового законодательства).</p>
            <p className="mb-2"><strong>8.3 Фото и видео материалы:</strong></p>
            <p className="ml-4 mb-3">5 лет после мероприятия (для архива и публикаций). Можете запросить удаление раньше.</p>
            <p className="mb-2"><strong>8.4 Логи согласия:</strong></p>
            <p className="ml-4 mb-3">5 лет (для доказательства того, что вы давали согласие).</p>
            <p className="mb-2"><strong>8.5 Cookie данные:</strong></p>
            <p className="ml-4 mb-3">12 месяцев (автоматически).</p>
            <p className="mb-2"><strong>8.6 IP адреса и логи:</strong></p>
            <p className="ml-4">12 месяцев (для безопасности сайта).</p>
          </div>

          <div>
            <h4 className="font-bold text-base mb-2 text-synergy-red">9. ВАШИ ПРАВА</h4>
            <p className="mb-2"><strong>9.1 Право на доступ:</strong> Вы можете запросить копию ваших персональных данных.</p>
            <p className="mb-2"><strong>9.2 Право на исправление:</strong> Если ваши данные неточные, вы можете попросить их исправить.</p>
            <p className="mb-2"><strong>9.3 Право на удаление (право быть забытым):</strong> Вы можете запросить удаление ваших данных (с некоторыми ограничениями).</p>
            <p className="mb-2"><strong>9.4 Право на ограничение обработки:</strong> Вы можете ограничить использование ваших данных.</p>
            <p className="mb-2"><strong>9.5 Право на переносимость данных:</strong> Вы можете получить данные в формате, пригодном для передачи другой организации.</p>
            <p className="mb-2"><strong>9.6 Право на возражение:</strong> Вы можете возразить против маркетинговых рассылок или автоматической обработки данных.</p>
            <p className="mb-2"><strong>9.7 Право на отзыв согласия:</strong> Вы можете отозвать своё согласие на обработку данных в любой момент.</p>
            <p className="mb-3"><strong>9.8 Как реализовать права:</strong> Напишите на почту или позвоните по указанному телефону. Мы ответим в течение 30 дней.</p>
          </div>

          <div>
            <h4 className="font-bold text-base mb-2 text-synergy-red">10. ИСПОЛЬЗОВАНИЕ COOKIE</h4>
            <p className="mb-2">Мы используем cookie для улучшения работы сайта, аналитики трафика, запоминания ваших предпочтений.</p>
            <p className="mb-2"><strong>Типы cookie:</strong></p>
            <ul className="ml-6 mb-3 space-y-1 list-disc">
              <li><strong>Необходимые cookie:</strong> Обеспечивают работу сайта (например, запоминают вашу авторизацию).</li>
              <li><strong>Аналитические cookie:</strong> Помогают нам понять, как вы используете сайт (Google Analytics, Яндекс.Метрика).</li>
              <li><strong>Маркетинговые cookie:</strong> Для показа рекламы и ретаргетинга (только с вашего согласия).</li>
            </ul>
            <p className="mb-2"><strong>Как управлять cookie:</strong></p>
            <p className="ml-4">Вы можете настроить cookie в браузере или отключить их. Однако это может снизить функциональность сайта.</p>
          </div>

          <div>
            <h4 className="font-bold text-base mb-2 text-synergy-red">11. ИЗМЕНЕНИЯ В ПОЛИТИКЕ КОНФИДЕНЦИАЛЬНОСТИ</h4>
            <p className="mb-2">Мы можем обновлять эту политику. При значительных изменениях мы уведомим вас по email или через сайт.</p>
            <p>Рекомендуем периодически проверять эту страницу на наличие обновлений.</p>
          </div>

          <div>
            <h4 className="font-bold text-base mb-2 text-synergy-red">12. КОНТАКТНАЯ ИНФОРМАЦИЯ</h4>
            <p className="mb-2">Если у вас есть вопросы или вы хотите реализовать свои права, свяжитесь с нами:</p>
            <p className="ml-4 mb-1"><strong>Телефон:</strong> 89811292499</p>
            <p className="ml-4 mb-1"><strong>Адрес:</strong> г. Владивосток, Приморский край, Российская Федерация</p>
            <p className="ml-4 mb-3"><strong>Время ответа:</strong> В течение 30 дней после получения запроса.</p>
          </div>

          <div>
            <h4 className="font-bold text-base mb-2 text-synergy-red">13. ЖАЛОБЫ</h4>
            <p className="mb-2">Если вы считаете, что ваши права нарушены, вы можете подать жалобу в:</p>
            <p className="ml-4 mb-1">• Роскомнадзор (контролирующий орган по защите персональных данных в РФ)</p>
            <p className="ml-4">• Суд (в соответствии с законодательством РФ)</p>
          </div>

          <div className="border-t-2 border-synergy-red pt-4 text-center">
            <p className="font-bold text-synergy-red">ЗАКЛЮЧЕНИЕ</p>
            <p className="mt-2">Настоящая Политика конфиденциальности вступает в силу с 15 января 2026 года и действует до момента её изменения или отзыва.</p>
            <p className="mt-4 text-xs text-synergy-dark/60">Школа «Хакни нейросети»<br />г. Владивосток, Приморский край, Российская Федерация<br />Телефон: 89811292499</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicyDialog;
