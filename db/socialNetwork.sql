CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
    username varchar(20) UNIQUE NOT NULL,
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

CREATE TABLE posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
    user_id UUID NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    content TEXT,
    attachments TEXT[],
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    updated_at TIMESTAMP
)

CREATE TABLE comments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
    user_id UUID NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
    parent_comment_id UUID,
    FOREIGN KEY (parent_comment_id) REFERENCES comments (id) ON DELETE CASCADE,
    post_id UUID NOT NULL,
    FOREIGN KEY (post_id) REFERENCES users (id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    updated_at TIMESTAMP
)

CREATE TYPE friend_status as ENUM ('pending', 'accepted');

CREATE TABLE friend_list (
    user_id_1 UUID NOT NULL,
    user_id_2 UUID NOT NULL,
    PRIMARY KEY (user_id_1, user_id_2),
    FOREIGN KEY (user_id_1) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id_2) REFERENCES users(id) ON DELETE CASCADE,

    status friend_status NOT NULL DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT current_timestamp,
)

CREATE TABLE messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
    from_user_id UUID NOT NULL,
    to_user_id UUID NOT NULL,
    FOREIGN KEY (from_user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (to_user_id) REFERENCES users(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    attachments TEXT[],
    created_at TIMESTAMP DEFAULT current_timestamp,
    updated_at TIMESTAMP,
    read_at TIMESTAMP,
)