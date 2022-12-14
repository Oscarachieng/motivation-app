class CreateArticleComments < ActiveRecord::Migration[7.0]
  def change
    create_table :article_comments do |t|
      t.string :comment
      t.string :likes
      t.belongs_to :article, null:false, foreign_key:true
      t.integer :user_id
      t.timestamps
    end
  end
end
