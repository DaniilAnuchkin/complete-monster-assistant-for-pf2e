CREATE TYPE permission as ENUM ('student', 'admin');
CREATE TYPE user_course_status as ENUM ('assigned', 'in_progress', 'finished');

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
    email TEXT UNIQUE NOT NULL,
	password VARCHAR(12) NOT NULL,
    lastname TEXT NOT NULL,
    firstname TEXT NOT NULL,
    role permission NOT NULL DEFAULT 'student',
    created_at TIMESTAMP DEFAULT current_timestamp,
    updated_at TIMESTAMP,
    CONSTRAINT email_check CHECK (email ~ '^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$')
);

CREATE TABLE course (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    logo TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    updated_at TIMESTAMP
);

CREATE TABLE course_item (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    video TEXT,
    course_id UUID NOT NULL,
    FOREIGN KEY (course_id) REFERENCES course (id) ON DELETE CASCADE,
    parent_item_id UUID,
    FOREIGN KEY (parent_item_id) REFERENCES course_item (id) ON DELETE CASCADE,
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    updated_at TIMESTAMP
);

CREATE TABLE attachments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
    course_item_id UUID,
    FOREIGN KEY (course_item_id) REFERENCES course_item (id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    file TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    updated_at TIMESTAMP
);

CREATE TABLE user_course_list (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
    user_id UUID NOT NULL,
    course_id UUID NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
    FOREIGN KEY (course_id) REFERENCES course (id) ON DELETE CASCADE,
    status user_course_status NOT NULL DEFAULT 'assigned',
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    updated_at TIMESTAMP
)