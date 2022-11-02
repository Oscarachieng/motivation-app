class CreatePostCommentReplies < ActiveRecord::Migration[7.0]
  def change
    create_table :post_comment_replies do |t|
      t.integer :likes
      t.string :reply
      t.integer :user_id
      t.belongs_to :post_comment,null:false, foreign_key:true
      t.timestamps
    end
  end
end
