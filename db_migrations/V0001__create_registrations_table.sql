-- Создание таблицы для хранения заявок с сайта
CREATE TABLE IF NOT EXISTS registrations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) DEFAULT 'new',
    notes TEXT
);

-- Создание индекса для быстрого поиска по email
CREATE INDEX idx_registrations_email ON registrations(email);

-- Создание индекса для поиска по дате
CREATE INDEX idx_registrations_created_at ON registrations(created_at DESC);

COMMENT ON TABLE registrations IS 'Заявки на мероприятие ИИ ШОУ БЕЗ ШИРМЫ';
COMMENT ON COLUMN registrations.name IS 'Имя участника';
COMMENT ON COLUMN registrations.email IS 'Email для связи';
COMMENT ON COLUMN registrations.phone IS 'Телефон участника';
COMMENT ON COLUMN registrations.created_at IS 'Дата и время подачи заявки';
COMMENT ON COLUMN registrations.status IS 'Статус заявки: new, confirmed, cancelled';
COMMENT ON COLUMN registrations.notes IS 'Дополнительные заметки об участнике';
