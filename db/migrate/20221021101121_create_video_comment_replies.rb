class CreateVideoCommentReplies < ActiveRecord::Migration[7.0]
  def change
    create_table :video_comment_replies do |t|
      t.string :reply
      t.string :likes
      t.belongs_to :user. null:false, foreign_key: true
      t.belongs_to :video_comment,null:false, foreign_key: true
      t.timestamps
    end
  end
end
