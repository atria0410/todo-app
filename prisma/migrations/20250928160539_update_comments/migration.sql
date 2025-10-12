-- Prisma Database Comments Generator v1.3.0

-- users comments
COMMENT ON TABLE "users" IS 'ユーザー';
COMMENT ON COLUMN "users"."id" IS 'ID';
COMMENT ON COLUMN "users"."name" IS 'ユーザー名';
COMMENT ON COLUMN "users"."email" IS 'メールアドレス';
COMMENT ON COLUMN "users"."password" IS 'パスワード';
COMMENT ON COLUMN "users"."created_at" IS '作成日時';
COMMENT ON COLUMN "users"."updated_at" IS '更新日時';

-- todos comments
COMMENT ON TABLE "todos" IS 'タスク';
COMMENT ON COLUMN "todos"."id" IS 'ID';
COMMENT ON COLUMN "todos"."userId" IS 'ユーザーID';
COMMENT ON COLUMN "todos"."title" IS 'タイトル';
COMMENT ON COLUMN "todos"."description" IS '説明';
COMMENT ON COLUMN "todos"."completed" IS '完了フラグ';
COMMENT ON COLUMN "todos"."created_at" IS '作成日時';
COMMENT ON COLUMN "todos"."updated_at" IS '更新日時';
