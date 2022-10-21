class CreateArticleCommentReplies < ActiveRecord::Migration[7.0]
  def change
    create_table :article_comment_replies do |t|
      t.integer :likes
      t.string :reply
      # t.belongs_to :user, null:false, foreign_key:true
      t.belongs_to :article_comment,null:false, foreign_key:true
      t.timestamps
    end
  end
end
