CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
    email TEXT UNIQUE NOT NULL,
    phone VARCHAR(12) UNIQUE,
	password VARCHAR(12) NOT NULL,
    lastname TEXT NOT NULL,
    firstname TEXT NOT NULL,
    verified BOOLEAN NOT NULL DEFAULT 'false',
    active BOOLEAN NOT NULL DEFAULT 'false',
    created_at TIMESTAMP DEFAULT current_timestamp,
    CONSTRAINT email_check CHECK (email ~ '^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$'),
    CONSTRAINT phone_check CHECK (phone ~ '(^8|7|\+7)((\d{10})|(\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}))')
);

CREATE TABLE address (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
    user_id UUID NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
    country VARCHAR(200) NOT NULL,
    city VARCHAR(100) NOT NULL,
    post_code BIGINT NOT NULL,
    address_line TEXT NOT NULL
);

CREATE TABLE goods_type (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
    title VARCHAR(50) NOT NULL,
    description TEXT NOT NULL
);

CREATE TABLE goods (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
    title VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    price FLOAT8 NOT NULL,
    type_id UUID NOT NULL,
    FOREIGN KEY (type_id) REFERENCES goods_type (id) ON DELETE CASCADE
);

CREATE TABLE chart_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
    goods_id UUID NOT NULL,
    FOREIGN KEY (goods_id) REFERENCES goods (id) ON DELETE CASCADE,
    user_id UUID NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
    quantity INTEGER NOT NULL DEFAULT 1
);

CREATE TYPE payment_status as ENUM ('pending', 'error', 'success');

CREATE TABLE payments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
    provider TEXT NOT NULL,
    status payment_status NOT NULL DEFAULT 'pending',
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    updated_at TIMESTAMP
);

CREATE TABLE order_data (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
    user_id UUID NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
    payment_id UUID NOT NULL,
    FOREIGN KEY (payment_id) REFERENCES payments (id) ON DELETE CASCADE,
    address_id UUID NOT NULL,
    FOREIGN KEY (address_id) REFERENCES address (id) ON DELETE CASCADE,
    total_price FLOAT8 NOT NULL
);

CREATE TABLE order_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
    order_id UUID NOT NULL,
    FOREIGN KEY (order_id) REFERENCES order_data (id) ON DELETE CASCADE,
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    updated_at TIMESTAMP
)