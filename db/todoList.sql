CREATE TYPE task_status as ENUM ('backlog', 'in_progress', 'done');

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
    email TEXT UNIQUE NOT NULL,
	password VARCHAR(12) NOT NULL,
    lastname TEXT NOT NULL,
    firstname TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    CONSTRAINT email_check CHECK (email ~ '^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$')
);

CREATE TABLE tasks (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid (),
    title VARCHAR(200) NOT NULL,
    description TEXT,
    status task_status NOT NULL DEFAULT 'backlog',
    due_date TIMESTAMP,
    user_id uuid NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id),
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    finished_at TIMESTAMP
)