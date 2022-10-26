# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_10_25_070933) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum"
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "article_comment_replies", force: :cascade do |t|
    t.integer "likes"
    t.string "reply"
    t.integer "user_id"
    t.bigint "article_comment_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["article_comment_id"], name: "index_article_comment_replies_on_article_comment_id"
  end

  create_table "article_comments", force: :cascade do |t|
    t.string "comment"
    t.string "likes"
    t.bigint "article_id", null: false
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["article_id"], name: "index_article_comments_on_article_id"
  end

  create_table "articles", force: :cascade do |t|
    t.string "title"
    t.string "content"
    t.boolean "is_approved"
    t.integer "likes"
    t.boolean "is_flagged"
    t.integer "category_id"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "audio_comment_replies", force: :cascade do |t|
    t.string "user_id"
    t.string "reply"
    t.string "likes"
    t.bigint "audio_comment_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["audio_comment_id"], name: "index_audio_comment_replies_on_audio_comment_id"
  end

  create_table "audio_comments", force: :cascade do |t|
    t.string "comment"
    t.integer "likes"
    t.bigint "audio_id", null: false
    t.integer "user_id"
    t.index ["audio_id"], name: "index_audio_comments_on_audio_id"
  end

  create_table "audios", force: :cascade do |t|
    t.string "title"
    t.boolean "is_approved"
    t.integer "likes"
    t.boolean "is_flagged"
    t.integer "user_id"
    t.integer "category_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "categories", force: :cascade do |t|
    t.string "category"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "subscriptions", force: :cascade do |t|
    t.integer "user_id"
    t.integer "category_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "username"
    t.string "password_digest"
    t.string "user_category"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "video_comment_replies", force: :cascade do |t|
    t.string "reply"
    t.string "likes"
    t.integer "user_id"
    t.bigint "video_comment_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["video_comment_id"], name: "index_video_comment_replies_on_video_comment_id"
  end

  create_table "video_comments", force: :cascade do |t|
    t.string "comment"
    t.string "likes"
    t.integer "user_id"
    t.bigint "video_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["video_id"], name: "index_video_comments_on_video_id"
  end

  create_table "videos", force: :cascade do |t|
    t.string "title"
    t.boolean "is_approved"
    t.integer "likes"
    t.boolean "is_flagged"
    t.integer "category_id"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "wishes", force: :cascade do |t|
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "article_comment_replies", "article_comments"
  add_foreign_key "article_comments", "articles"
  add_foreign_key "audio_comment_replies", "audio_comments"
  add_foreign_key "audio_comments", "audios"
  add_foreign_key "video_comment_replies", "video_comments"
  add_foreign_key "video_comments", "videos"
end
